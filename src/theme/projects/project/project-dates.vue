<template>
    <div class="project-dates">
        <media :query=" { maxWidth: mobileWidth } "
            @media-enter="mediaEnterMobile"
            @media-leave="mediaLeaveMobile">
        </media>
        <div class="project-date date--updated">
            <span v-if="showFullDates">Last Update:&nbsp;</span>
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
    import { userAgent } from '../../utility/userAgent.js'

    export default {
        data : function () {
            return {
                mobileWidth : userAgent.mobileSize,
                showFullDates : true,
                dateFormat : 'mmmm dS, yyyy',
                formattedDate : (rawDate) => {
                    let date = new Date(rawDate)
                    return DateFormatter(date, this.dateFormat)
                }
            }
        },
        methods : {
            mediaLeaveMobile (query) {
                this.showFullDates = true
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

        width: 33%;
        margin-left: 0.5rem;

        .project-date {
            display: flex;
            align-self: flex-end;

            width: fit-content;
            margin: 5px 1px;
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
                align-self: flex-start;
            }
        }
    }
</style>
