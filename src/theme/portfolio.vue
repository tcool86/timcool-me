<template>
    <div class="portfolio-container">
        <h1 class="content-title">Portfolio</h1>
        <div class="protfolio-section-wrapper columns">
            <div class="column is-half is-offset-one-quarter">
                <section id="portfolio-section" class="columns level">
                    <div class="column level-item has-text-centered">
                        <h2 class="button">Business</h2>
                    </div>
                    <div class="column level-item has-text-centered">
                        <h2 class="button">Projects</h2>
                    </div>
                </section>
            </div>
        </div>
        <section id="project-section">
            <div class="project-container">
                <article class="project-article" >
                    <!-- <div class="project-title-wrapper">
                        <span class="platforms">Platforms go here</span>
                        <span class="project-icon">
                            <img src="web/assets/placeholder_app_icon.png" />
                        </span>
                        <h2 class="project-title">{{project.title}}</h2>
                        <span class="project-date right">Last Updated: {{project.last_updated | date : 'mediumDate'}} </span>
                        <span class="project-date right">Project Started: {{project.start_date | date : 'mediumDate'}}</span>
                    </div>
                    <div class="project-description-wrapper">
                        <p class="project-description">{{project.description}}</p>
                    </div>
                    <div class="project-image-wrapper">
                        <img class="project-image" ng-src="{{project.image}}">
                    </div> -->
                </article>
            </div>
        </section>
    </div>
</template>
<style lang="scss">
    @import '../styles/style-vars.scss';

    #portfolio-section {
        margin-top: 1rem;
        margin-left: 2rem;
        margin-right: 2rem;
    }

    @mixin projectFadeIn($n) {
        &:nth-child(#{$n}) {
            -moz-animation-duration: (0.5 + $n/4)s;
            -webkit-animation-duration: (0.5 + $n/4)s;
        }
    }

    .project-container {
        margin: 1em;
        margin-top: 2em;
        position: relative;
        animation-duration: 0.5s;
        -moz-animation-duration: 0.5s;
        -webkit-animation-duration: 0.5s;
        transition: top, opacity;
        -moz-transition: top, opacity;
        -webkit-transition: top, opacity;
        -moz-animation-name: pushUp;
        -webkit-animation-name: pushUp;
    }

    .project-article {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
        font-family: 'EXo 2';
        align-items: flex-start;
        align-content: flex-start;
        background-color: #444;
        padding: 1em;
        border-radius: 1em;
        border: 2px solid #888;
        margin: 8em;
        background-image: url(http://localhost/timcool-site/web/assets/project-back.png);
        >div {
            color: #000;
            flex-grow: 1;
            flex-shrink: 1;
            align-self: stretch;
            flex-basis: 40%;
        }
        .platforms {
            float: right;
            position: relative;
            top: -0.75em;
        }
        .project-title-wrapper {
            flex-grow: 3;
            order: 0;
            flex-basis: 100%;
            align-self: baseline;
            margin-top: -1em;
            .project-icon {
                position: relative;
                right: 4em;
                bottom: 4em;
            }
            .project-title {
                display: inline;
                position: relative;
                bottom: 1em;
                left: -1em;
                font-weight: bolder;
            }
            .project-date {
                margin: 1em;
            }
        }
        .project-description-wrapper {
            order: 1;
        }
        .project-image-wrapper {
            order: 2;
            margin: 1em;
            text-align: center;
            overflow: hidden;
            min-width: 280px;
            max-width: 640px;
            .project-image {
                width: 100%;
                background-color: transparent;
            }
        }
    }
</style>
