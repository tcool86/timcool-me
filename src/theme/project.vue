<template>
    <article class="project-article" >
        <div class="project-icon-wrapper">
            <media :query="{minWidth: 1158}">
                <img :src="project.icon">
            </media>
            <media :query="{maxWidth: 1158, minWidth:600}">
                <img :src="project.icon_medium">
            </media>
            <media :query="{maxWidth: 600}">
                <img :src="project.icon_small">
            </media>
        </div>
        <div class="title-wrapper skew-20">
            <h2 class="project-title">{{project.title}}</h2>
            <span class="project-date last-updated">
                Updated: <b>{{ formattedDate(project.last_updated) }}</b>
            </span>
            <span class="project-date">
                Started: <b>{{ formattedDate(project.date_started) }}</b>
            </span>
        </div>
        <div class="project-description-wrapper">
            <p class="project-description">
                <img class="project-image" :src="project.image">
                {{project.description}}
            </p>
        </div>
    </article>
</template>
<script>
    import Media from 'vue-media'
    import DateFormatter from 'dateformat'

    export default {
        components : {
            Media
        },
        props : ['project'],
        data : function () {
            return {
                formattedDate : (rawDate) => {
                    let date = new Date(rawDate)
                    return DateFormatter(date, 'mmmm dS, yyyy')
                }
            }
        }
    }
</script>
<style lang="scss">
    @import '../styles/style-vars.scss';
    .project-article {
        h2 {
            font-size: 2.5em;
            text-shadow: black -2px 2px 7px;
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
        margin: 8em;
        background-image: url(//res.cloudinary.com/hnairgdu6/image/upload/v1513915883/project-back_pyilud.png);
        @media (max-width: $tabletSize) {
            margin: 0.25rem;
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
            @media (max-width: $tabletSize) {
                top: -1.5rem;
                left: 2rem;
                box-shadow: -4px 3px 8px #565656;
            }
        }
        .title-wrapper {
            width: 95%;
            top: -2rem;
            @media (max-width: $tabletSize) {
                text-align: left;
                text-indent: 4rem;
                span {
                    text-indent: 0;
                }
            }
        }
        .project-date {
            position: absolute;
            right: -1.75rem;;
            top: 1.33rem;
            color: whitesmoke;
            padding: 0.1rem 0.35rem;
            background-color: #3C4162;
            border: #0A0E28 0.1rem solid;
            transform: skew(-40deg);
            border-radius: 4px;
            padding-right: 2rem;
            border-right: #0A0E28 1rem solid;
            &.last-updated {
                top: -1rem;
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

