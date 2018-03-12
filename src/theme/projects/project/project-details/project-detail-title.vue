<template>
    <div class="project-title title-text backdrop-red">
        <h2>
            {{ title }}
            <span v-on:click="linkClick">
                <svgicon icon="link" class="icon-large clickable icon-link"></svgicon>
            </span>
            <transition name="fade-out">
                <div v-if="linkCopied" class="link--copy-message">link copied</div>
            </transition>
        </h2>
    </div>
</template>
<script>
export default {
    data : function () {
        return {
            'linkCopied' : false
        }
    },
    props : ['title', 'deeplink'],
    methods : {
        linkClick (event) {
            this.$copyText(this.deeplink).then(() => {
                this.linkCopied = true
                setTimeout(() => {
                    this.linkCopied = false
                }, 1000)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../../../../styles/style-vars.scss';
    .project-title {
        position: sticky;
        top: 0;
        left: 0;

        width: 100%;
        h2 {
            font-size: 48pt;
        }
    }
    .link--copy-message {
        position: absolute;
        display: inline;
     
        margin-left: 2rem;
        
        @media (max-width: $tabletSize) {
            position: relative;
            display: block;

            margin: 0;

            width: 100%;
        }
    }
</style>
