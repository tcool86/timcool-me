<template>
    <div class="project-wrapper">
        <transition name="fade-out" mode="out-in" v-on:after-enter="showDetail = true">
            <div class="detail-modal-background"
                v-on:click="closeModal"
                v-if="showDetailBackground">
                <transition name="bounce" mode="out-in" v-on:after-leave="showDetailBackground = false">
                    <project-detail :project="project" v-if="showDetail" @close="showDetail = false"></project-detail>
                </transition>
            </div>
        </transition>
        <article class="project-article" v-on:click="handleProjectOnClick">
            <div class="project-icon-wrapper">
                <media :query="{minWidth: 1158}">
                    <img :src="project.icon">
                </media>
                <media :query="{maxWidth: 1158, minWidth:800}"
                    @media-enter="mediaEnterMedium"
                    @media-leave="mediaLeaveMedium">
                    <img :src="project.icon_medium">
                </media>
                <media :query="{maxWidth: 800}"
                    @media-enter="mediaEnterSmall"
                    @media-leave="mediaLeaveSmall">
                    <img :src="project.icon_small">
                </media>
            </div>
            <div class="title-wrapper skew-20">
                <h2 class="project-title">{{project.title}}</h2>
                <span class="project-date last-updated skew-minus-20" v-if="showDates">
                    <span v-if="fullText">Updated:&nbsp;</span><b>{{ formattedDate(project.last_updated) }}</b>
                </span>
                <span class="project-date skew-minus-20" v-if="showDates">
                    <span v-if="fullText">Created:&nbsp;</span><b>{{ formattedDate(project.date_started) }}</b>
                </span>
            </div>
            <div class="project-description-wrapper">
                <p class="project-description">
                    {{project.shortDescription}}<span class="description-more">&nbsp;Read more</span>
                </p>
            </div>
        </article>
    </div>
</template>
<script>
    import Media from 'vue-media'
    import DateFormatter from 'dateformat'
    import projectDetail from './project-detail.vue'

    let closeableClasses = ['detail-modal-background', 'detail-view-wrapper']

    export default {
        components : {
            Media,
            'project-detail' : projectDetail
        },
        props : ['project'],
        data : function () {
            return {
                showDetailBackground : false,
                showDetail : false,
                showDates : true,
                fullText : true,
                dateFormat : 'mmmm dS, yyyy',
                formattedDate : (rawDate) => {
                    let date = new Date(rawDate)
                    return DateFormatter(date, this.dateFormat)
                }
            }
        },
        methods : {
            mediaEnterMedium (query) {
                this.dateFormat = 'mmm yyyy'
                this.fullText = false
            },
            mediaLeaveMedium (query) {
                this.dateFormat = 'mmmm dS, yyyy'
                this.fullText = true
            },
            mediaEnterSmall (query) {
                this.showDates = false
                this.fullText = false
            },
            mediaLeaveSmall (query) {
                this.showDates = true
            },
            handleProjectOnClick () {
                this.showDetailBackground = true
            },
            closeModal : function (event) {
                let targetClass = event.target.className
                event.stopPropagation()
                if (closeableClasses.includes(targetClass)) {
                    let deeplink = this.$route.params.deeplink
                    if (typeof deeplink !== 'undefined') {
                        if (typeof window !== 'undefined') {
                            window.location.assign(window.location.origin + '/portfolio')
                        }
                    } else {
                        this.showDetail = false
                    }
                }
            },
            deeplinkName : function () {
                let name = this.project.title
                return name.toLowerCase().replace(/\s/, '-')
            }
        },
        created () {
            let deeplink = this.$route.params.deeplink
            if (typeof (deeplink) !== 'undefined') {
                if (deeplink === this.deeplinkName()) {
                    setTimeout(() => {
                        this.showDetailBackground = true
                    }, 200)
                }
            }
        }
    }
</script>
<style lang="scss">
    @import '../../styles/style-vars.scss';
    .detail-modal-background {
        display: block;
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .66);
        transition: opacity .3s ease;
        cursor: pointer;
    }
    .project-article {
        &:hover {
            box-shadow:
                2px 2px #4a4b4e,
                5px 5px 8px whitesmoke,
                -3px 5px 8px whitesmoke,
                -3px -3px 8px whitesmoke,
                5px -3px 8px whitesmoke;
            transition: all 0.2s ease;
            cursor: pointer;
            .project-icon-wrapper {
                left: 5rem;
            }
            .title-wrapper {
                text-indent: 5rem;
            }
            .project-date {
                right: -2.3rem;
            }
        }
        h2 {
            font-size: 2.5em;
            text-shadow: black -2px 2px 7px;
            @media (max-width: $mobileSize) {
                font-size: 1.5em;
            }
        }
        .description-more {
            color: $color1;
            font-weight: 600;
        }
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        background-color: #444;
        padding: 1em;
        border-radius: 1em;
        border: 2px solid #888;
        margin: 4em 8rem 8rem 8rem;
        background-image: url(//res.cloudinary.com/hnairgdu6/image/upload/v1513915883/project-back_pyilud.png);
        @media (max-width: $tabletSize) {
            margin: 0.25rem;
            margin-bottom: 4rem;
        }
        .project-icon-wrapper {
            position: absolute;
            z-index: 1;
            top: -2.5rem;
            left: 6rem;
            border-radius: 8px;
            border-color: #3B0908;
            border-width: 0.25rem;
            border-style: solid;
            box-sizing: content-box;
            box-shadow: -8px 6px 16px #565656;
            background-color: #6E312F;
            line-height: 0;
            transition: all 0.3s ease;
            @media (max-width: $tabletSize) {
                top: -1.5rem;
                left: 2rem;
                box-shadow: -4px 3px 8px #565656;
            }
            @media (max-width: $mobileSize) {
                top: 0;
                left: 3rem;
            }
        }
        .title-wrapper {
            width: 95%;
            top: -2rem;
            text-align: left;
            text-indent: 6rem;
            transition: all 0.3s ease;
            @media (max-width: $tabletSize) {
                text-align: center;
                text-indent: 0;
            }
            @media (max-width: $mobileSize) {
                text-align: left;
                text-indent: 4rem;
            }
            span {
                text-indent: 0;
            }
        }
        .project-date {
            position: absolute;
            right: -1.75rem;
            top: 2.88rem;
            color: black;
            padding: 0.1rem 0.35rem;
            background-color: $color3;
            border: #0A0E28 0.1rem solid;
            font-size: small;
            border-radius: 4px;
            box-shadow: #0A0E28 1px 1px 6px;
            transition: all 0.3s ease;
            &.last-updated {
                background-color: $color4;
                color: whitesmoke;
                top: 0.5rem;
            }
        }
        .project-description-wrapper {
            text-indent: 8rem;
            flex-wrap: wrap;
            font-family: 'Exo 2';
            @media (max-width: $tabletSize) {
                text-indent: 3rem;
            }
        }
    }
</style>
