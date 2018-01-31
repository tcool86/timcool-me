<template>
    <article class="post-wrapper media">
        <div class="image-wrapper media-left">
            <div class="post-image"></div>
        </div>
        <div class="content-wrapper media-content">
            <div class="title-wrapper skew-20">
                <slot name='title'></slot>
            </div>
            <div class="topics" >
                <span v-for="filter in filters" v-bind:key="filter.id"> 
                    <a :href="filter.link">
                        <svgicon :icon="filter.icon" :class="filter.hover" class="icon-large clickable"></svgicon>
                    </a>
                </span>
            </div>
            <slot name='content'></slot>
        </div>
    </article>
</template>
<script>
    import Filter from '../vuex/filters.js'
    export default {
        data : function () {
            var filters = []
            if (typeof this.categories !== 'undefined') {
                this.categories.forEach(element => {
                    const filter = Filter.getFromCategory(element)
                    filters.push(filter)
                })
            }
            return {
                'filters' : filters
            }
        },
        props : ['categories']
    }
</script>
