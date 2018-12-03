<template>
    <article class="post-wrapper media">
        <div class="image-wrapper media-left">
            <div class="post-image"></div>
        </div>
        <div class="content-wrapper media-content">
            <div class="title-wrapper skew-20 backdrop-red">
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
        <div id="disqus_thread"></div>
        <!-- <script>
        (function () { // DON'T EDIT BELOW THIS LINE
            var d = document
            var s = d.createElement('script')
            s.src = 'https://timcool-me.disqus.com/embed.js'
            s.setAttribute('data-timestamp', +new Date())(d.head || d.body).appendChild(s)
        })()
        </script> -->
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    </article>
</template>
<script>
    import Filter from '../../vuex/filters.js'
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
