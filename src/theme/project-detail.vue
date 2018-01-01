<template>
    <article class="project-article" >
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
            <!-- <span class="project-date last-updated" v-if="showDates">
                <span v-if="fullText">Updated: </span><b>{{ formattedDate(project.last_updated) }}</b>
            </span> -->
            <!-- <span class="project-date" v-if="showDates">
                <span v-if="fullText">Started: </span><b>{{ formattedDate(project.date_started) }}</b>
            </span> -->
        </div>
        <div class="project-description-wrapper">
            <!-- <p class="project-description">
                {{project.description}}
                <div v-for="image in displayedImages" v-bind:key="image">
                    <img class="project-image" :src="image">
                </div>
            </p> -->
        </div>
    </article>
</template>
<script>
    export default {
        data : function () {
            return {
                displayedImages : []
            }
        }
    }
</script>
<style lang="scss">

</style>
