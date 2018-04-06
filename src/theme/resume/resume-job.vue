<template>
    <div class="job-container view-height">
        <div :class="'company-name title-text ' + job.bannerClass">
            <h2 :class="job.textColor">{{job.company}}</h2>
        </div>
        <job-technology :tech="job.technologies"></job-technology>
        <div class="job-title job-detail">
            <h3>{{job.title}}</h3>
        </div>
        <div class="max-1024 job-detail job-description backdrop-dark-blue">
            <h3>Primary Achievements:</h3>
            <div v-for="achievement in job.achievements"
                v-bind:key="achievement">
                <li class="job-achievement">
                    {{achievement}}
                </li>
            </div>
        </div>
        <div class="job-detail">
            <div class="job-links">
                <h3>Links:</h3>
                <ul v-for="link in job.links"
                    v-bind:key="link.name">
                    <a :href="link.href">
                        <li class="job-link">
                            {{link.name}}
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import jobTechnologies from '../projects/project/project-technology.vue'
    export default {
        props : ['job'],
        components : {
            'job-technology' : jobTechnologies
        }
    }
</script>
<style lang="scss">
    @import '../../styles/style-vars.scss';
    .job-container {
        display: flex;
        flex-direction: column;
        
        margin-top: 3rem;

        width: 100%;
        .title-text {
            font-size: 18pt;
        }
        .project-tech-icons {
            justify-content: flex-end;
            flex-wrap: wrap;
            @media (max-width: $tabletSize) {
                justify-content: center;
            }
        }
        .tech-wrapper {
            width: 64px;
            height: 64px;
            @media (max-width: $tabletSize) {
                width: 32px;
                height: 32px;
            }
            .tech-icon {
                top: -32px;
                left: -32px;

                transform: none;
                @media (max-width: $tabletSize) {
                    top: -64px;
                    left: -32px;
                    transform: scale(0.5);
                }
            }
        }
        h2 {
            margin-left: 2em;
            margin-top: 1em;

            text-align: center;
            @media (max-width: $tabletSize) {
                margin: auto;
            }
        }
        h2::after {
            display: inline-block;
            vertical-align: middle;
            
            width: 100%;

            background: inherit;
            content: '';
        }
        h3 {
            margin-top: 0;
        }
        .job-detail {
            display: flex;
            flex-direction: column;
            align-self: center;
            
            border-radius: 1rem;
            padding: 1rem;
            margin: 2rem 1rem;
        }
    }
    .company-name {
        display: flex;

        width: 100%;
    }
    .job-description {
        color: white;
    }
    .job-achievement {
        text-indent: 1rem;
        list-style-type: disc;
    }
    .job-links-container {
        display: flex;
    }
    .job-links {
        flex-wrap: nowrap;

        width: 1024px;
        
        li {
            margin-bottom: 0.5rem;
            border-radius: 8px;
            padding: 0.2rem;

            background-color: #333;
        
            text-indent: 0.5em;
        }
        a {
            color: $highlightColor;
        }
        @media (max-width: $tabletSize) {
            width: 100%;
        }
    }
    .max-1024 {
        max-width: 1024px;
    }
</style>
