<template>
    <div class="project-wrapper">
        <transition name="fade-out" mode="out-in" v-on:after-enter="showDetail = true">
            <div class="detail-modal-background"
                v-on:click="closeModal"
                v-if="showDetailBackground">
                <transition name="bounce" mode="out-in" v-on:after-leave="showDetailBackground = false">
                    <project-detail :project="project" :deeplink="getFullDeeplink()" v-if="showDetail" @close="closeDetail"></project-detail>
                </transition>
            </div>
        </transition>
        <article class="project-article" tabindex="0" v-on:click="handleProjectOnClick" v-on:keyup.enter="handleProjectOnClick">
            <div class="project-icon-wrapper">
                <media :query="{minWidth: 1158}">
                    <img v-lazy="project.icon">
                </media>
                <media :query="{maxWidth: 1158, minWidth:800}"
                    @media-enter="mediaEnterMedium"
                    @media-leave="mediaLeaveMedium">
                    <img v-lazy="project.icon_medium">
                </media>
                <media :query="{maxWidth: 800}"
                    @media-enter="mediaEnterSmall"
                    @media-leave="mediaLeaveSmall">
                    <img v-lazy="project.icon_small">
                </media>
            </div>
            <div class="title-wrapper skew-20">
                <h2 class="project-title title-text">{{project.title}}</h2>
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
    import '../icons'
    const parentPathName = '/projects'
    let closeableClasses = ['detail-modal-background', 'detail-view-wrapper', 'button--close']

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
                this.handleDeeplinkOpen()
                this.showDetailBackground = true
            },
            closeModal : function (event) {
                let targetClass = event.target.className
                event.stopPropagation()
                if (closeableClasses.includes(targetClass)) {
                    this.closeDetail()
                }
            },
            closeDetail : function () {
                this.handleDeeplinkClose()
                this.showDetail = false
            },
            handleDeeplinkOpen : function () {
                let url = this.getFullDeeplink()
                window.history.pushState(null, null, url)
            },
            handleDeeplinkClose : function () {
                if (typeof window !== 'undefined') {
                    let url = window.location.origin + parentPathName
                    window.history.pushState(null, null, url)
                }
            },
            getFullDeeplink : function () {
                return window.location.origin + parentPathName + '/' + this.deeplinkName()
            },
            deeplinkName : function () {
                let name = this.project.title
                return name.toLowerCase().replace(/\s/g, '-')
            }
        },
        created () {
            let deeplink = this.$route.params.deeplink
            let locationPath = ''
            if (typeof (window) !== 'undefined') {
                locationPath = window.location.pathname
            }
            if (typeof (deeplink) !== 'undefined' && locationPath !== parentPathName) {
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
    @import '../../styles/global.scss';
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
            @include coolShadow();
            transition: all 0.2s ease;
            cursor: pointer;
            .project-icon-wrapper {
                @include coolShadow();
                transform: translateX(-2rem);
                @media (max-width: $tabletSize) {
                    transform: translateX(0);
                }
            }
            .title-wrapper {
                text-indent: 5rem;
                @media (max-width: $tabletSize) {
                    text-indent: 0;
                }
            }
            .project-date {
                transform: translateX(2rem) skew(-20deg);
                @media (max-width: $tabletSize) {
                    transform: skew(-20deg);
                }
            }
        }
        &.detail-view {
            &:hover {
                .project-date {
                    transform: none;
                }
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
        margin-top: 5rem;
        margin-bottom: 7rem;
        border-radius: 0.5rem;
        border: 2px solid #888;
        background-image: url(//res.cloudinary.com/hnairgdu6/image/upload/v1513915883/project-back_pyilud.png);
        .project-icon-wrapper {
            position: absolute;
            z-index: 1;
            top: -3rem;
            left: -2rem;
            border-radius: 8px;
            border-color: #3B0908;
            border-width: 0.25rem;
            border-style: solid;
            box-sizing: content-box;
            background-color: #6E312F;
            line-height: 0;
            transition: all 0.3s ease;
            img {
                min-width: 128px;
            }
            @media (max-width: $tabletSize) {
                top: -1.5rem;
                left: 2rem;
                box-shadow: -4px 3px 8px #565656;
                img {
                    min-width: 64px;
                }
            }
            @media (max-width: $mobileSize) {
                top: 0;
                img {
                    min-width: 32px;
                }
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
            top: 2.3rem;
            color: black;
            padding: 0.1rem 0.35rem;
            background-color: $color3;
            border: #0A0E28 1px solid;
            font-size: small;
            border-radius: 4px;
            transition: all 0.3s ease;
            &.last-updated {
                background-color: $color4;
                color: whitesmoke;
                top: 0.25rem;
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
