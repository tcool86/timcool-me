<template>
    <section id="project-section">
        <div class="controls-container">
            <div class="filter-controls">
                <div class="filter-item">
                    <button aria-label="sort projects by date created" class="button" v-on:click="filterDateCreated">
                        <span>Date Created</span>
                        <span class="icon is-small icon--text">
                            &#9660;
                        </span>
                    </button>
                </div>
                <div class="filter-item">
                    <button aria-label="sort projects by last updated" class="button" v-on:click="filterLastUpdated">
                        <span>Last Update</span>
                        <span class="icon is-small icon--text">
                            &#9660;
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div class="spinner-container content" v-if="showSpinner">
                <div class="spinner">
                    <div class="loader"></div>
                </div>
            </div>
        </transition>
        <transition name="fade" mode="out-in">
            <div class="projects-container">
                <div
                    v-bind:class="{ 'project-container' : true, 'push-up-animation' : animateProjects }" 
                    v-for="project in projectsModel" 
                    v-bind:key="project._id">
                    <project :project="project"></project>
                </div>
            </div>
        </transition>
    </section>
</template>
<script>
    import project from './project/project.vue'
    import { mapGetters } from 'vuex'

    const fetchInitialData = (store, route) => {
        return store.dispatch('projectsModule/updateProjects')
    }

    export default {
        asyncData (store, route) {
            return fetchInitialData(store, route)
        },
        components : {
            'project' : project
        },
        computed : {
            ...mapGetters('projectsModule', ['projects'])
        },
        data : function () {
            return {
                'showSpinner' : true,
                'animateProjects' : false,
                'searchProjects' : [],
                'projectsModel' : [],
                'searchActive' : false
            }
        },
        methods : {
            loadProjects () {
                fetchInitialData(this.$store, this.$route)
            },
            updateSpinner () {
                let storedProjects = this.$store.getters['projectsModule/projects']
                if (storedProjects.length !== 0) {
                    this.showSpinner = false
                    this.projectsModel = storedProjects
                } else {
                    this.showSpinner = true
                }
            },
            checkForDeeplink () {
                let deeplink = this.$route.params.deeplink
                if (typeof (deeplink) === 'undefined') {
                    this.animateProjects = true
                }
            },
            searchFilter (event) {
                let userInput = event.target.value
                this.searchActive = (userInput !== '')
                let regex = new RegExp(userInput)
                let filtered = this.projects.filter((project) => {
                    return project.searchableDescription.search(regex) > -1
                })
                this.searchProjects = filtered
            },
            getProjectData () {
                return (this.searchActive) ? this.searchProjects : this.projects
            },
            filterDateCreated () {
                this.projectsModel.sort((projectA, projectB) => {
                    if (projectA.date_started < projectB.date_started) {
                        return 1
                    } else if (projectA.date_started > projectB.date_started) {
                        return -1
                    }
                    return 0
                })
            },
            filterLastUpdated () {
                this.projectsModel.sort((projectA, projectB) => {
                    if (projectA.last_updated < projectB.last_updated) {
                        return 1
                    } else if (projectA.last_updated > projectB.last_updated) {
                        return -1
                    }
                    return 0
                })
            }
        },
        watch : {
            '$route' (to, from) {
                this.loadProjects()
            },
            'projects' () {
                this.updateSpinner()
            },
            'projectsModel' (val) {}
        },
        created () {
            this.checkForDeeplink()
            this.loadProjects()
            this.updateSpinner()
            this.filterLastUpdated()
        }
    }
</script>
<style lang="scss">
    @import '../../styles/style-vars.scss';
    #project-section {
        margin: 4em 6% 8rem 6%;
        @media (max-width: $tabletSize) {
            margin: 0.25rem;
            margin-bottom: 4rem;
        }
    }
    .spinner-container {
        height: 10rem;
        background-color: $backgroundColor;
        width: 100%;
        display: grid;
        .v-spinner {
            margin: auto;
        }
    }
    @mixin projectFadeIn($n) {
        &:nth-child(#{$n}) {
            -moz-animation-duration: (0.5 + $n/4)s;
            -webkit-animation-duration: (0.5 + $n/4)s;
        }
    }
    .projects-container {
        margin: auto;

        max-width: 1200px;
    }
    .project-container {
        position: relative;

        margin: 4.8rem 0;

        max-width: $contentMaxWidth;

        @media (max-width: $tabletSize) {
            left: 0.5rem;
        }
    }
    .search-wrapper {
        margin: 3rem auto;
        
        width: 50%;
    }
    .filter-controls {
        display: flex;
        justify-content: flex-end;

        margin: auto;

        width: 96%;
        max-width: $contentMaxWidth;

        @media (max-width: $mobileSize) {
            flex-direction: column;
        }
    }
    .filter-item {
        display: flex;
    
        margin-right: 1rem;
        margin-bottom: 1rem;

        @media (max-width: $mobileSize) {
            justify-content: center;
        }
    }
    .icon--text {
        font-size: 0.75rem;
    }
</style>
