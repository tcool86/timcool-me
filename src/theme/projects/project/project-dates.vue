<template>
    <div class="project-dates">
        <media :query=" { maxWidth: mobileWidth } "
            @media-enter="mediaEnterMobile"
            @media-leave="mediaEnterTablet">
        </media>
        <media :query=" { maxWidth: tabletWidth, minWidth: mobileWidth } "
            @media-enter="mediaEnterTablet"
            @media-leave="mediaLeaveTablet">
        </media>
        <div class="project-date date--updated">
            <span v-if="showFullDates">Updated:&nbsp;</span>
            {{ formattedDate(project.last_updated) }}
        </div>
        <div v-if="showFullDates" class="project-date date--created">
            <span>Created:&nbsp;</span>
            {{ formattedDate(project.date_started) }}
        </div>
    </div>
</template>
<script>
    import Media from 'vue-media'
    import DateFormatter from 'dateformat'
    import { userAgent } from '../../utility/user-agent.js'

    export default {
        data : function () {
            return {
                mobileWidth : userAgent.mobileSize,
                tabletWidth : userAgent.tabletSize,
                showFullDates : true,
                dateFormat : 'mmmm dS, yyyy',
                formattedDate : (rawDate) => {
                    let date = new Date(rawDate)
                    return DateFormatter(date, this.dateFormat)
                }
            }
        },
        methods : {
            mediaEnterTablet (query) {
                this.showFullDates = true
                this.dateFormat = 'mmm yyyy'
            },
            mediaLeaveTablet (query) {
                this.dateFormat = 'mmmm dS, yyyy'
            },
            mediaEnterMobile (query) {
                this.showFullDates = false
                this.dateFormat = 'mmm yyyy'
            }
        },
        props : ['project'],
        components : {
            Media
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../styles/style-vars.scss';
    .project-dates {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-end;
        position: absolute;
        bottom: 0;
        right: 0.25rem;

        margin-bottom: 0.5rem;
        
        @media (max-width: $mobileSize) {
            position: relative;

            width: 100%;
        }
        .project-date {
            display: flex;
            align-self: flex-end;

            margin: 3px 1px;
            padding: 0.1rem 0.35rem;

            border: #0A0E28 1px solid;
            border-radius: 4px;

            background-color: $color3;

            font-size: small;
            font-weight: bold;

            &.date--updated {
                background-color: $color4;
                color: whitesmoke;
            }
            @media (max-width: $mobileSize) {
                margin-top: 10px;
                margin-right: 10px;

                font-size: 8pt;
            }
        }
    }
</style>
