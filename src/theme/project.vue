<template>
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
            <span class="project-date last-updated" v-if="showDates">
                <span v-if="fullText">Updated: </span><b>{{ formattedDate(project.last_updated) }}</b>
            </span>
            <span class="project-date" v-if="showDates">
                <span v-if="fullText">Started: </span><b>{{ formattedDate(project.date_started) }}</b>
            </span>
        </div>
        <div class="project-description-wrapper">
            <p class="project-description">
                <img class="project-image" :src="project.image">
                {{project.shortDescription}}<span class="description-more">Read more</span>
            </p>
        </div>
        <project-detail :project="project" v-if="showDetail"></project-detail>
    </article>
</template>
<script>
    import Media from 'vue-media'
    import DateFormatter from 'dateformat'
    import projectDetail from './project-detail.vue'

    export default {
        components : {
            Media,
            'project-detail' : projectDetail
        },
        props : ['project'],
        data : function () {
            return {
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
                console.log('project clicked: ' + this.project.title)
                this.showDetail = true
            }
        }
    }
</script>
<style lang="scss">
    @import '../styles/style-vars.scss';
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
            color: whitesmoke;
            padding: 0.1rem 0.35rem;
            background-color: #3C4162;
            border: #0A0E28 0.1rem solid;
            transform: skew(-40deg);
            border-radius: 4px;
            padding-right: 2rem;
            box-shadow: #0A0E28 1px 1px 6px;
            transition: all 0.3s ease;
            &.last-updated {
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
        .project-image {
            float: right;
            margin: 0.50rem;
        }
    }
</style>
