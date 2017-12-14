<template>
    <article class="post-wrapper media">
        <div class="image-wrapper media-left">
            <div class="post-image"></div>
        </div>
        <div class="content-wrapper media-content">
            <div class="title-wrapper skew-20">
                <slot name='title' class="blog-title"></slot>
            </div>
            <div class="topics" >
                <span v-for="filter in filters" v-bind:key="filter.id"> 
                    <a :href="filter.link">
                        <svgicon :icon="filter.icon" class="icon-large clickable oculus-color"></svgicon>
                    </a>
                </span>
            </div>
            <div class="text-wrapper">
                <slot name='content'></slot>
            </div>
        </div>
    </article>
</template>
<script>
    export default {
        data : function () {
            return {
                'filters' : [{
                    id : 0,
                    link : '?filter=vr',
                    icon : 'oculus'
                }, {
                    id : 1,
                    link : '?filter=steam',
                    icon : 'steam'
                }, {
                    id : 2,
                    link : '?filter=windows',
                    icon : 'windows'
                }]
            }
        },
        props : ['categories']
    }
</script>
