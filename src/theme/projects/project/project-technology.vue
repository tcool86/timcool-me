<template>
    <div class="project-tech-icons">
        <div class="tech-wrapper" 
            v-for="icon in iconClasses"
            v-bind:key="icon">
            <i :class="'tech-icon ' + icon"></i>
        </div>
    </div>
</template>
<script>
    import { technologyResolver } from './technology-resolver.js'
    export default {
        props : ['tech'],
        data : function () {
            return {
                iconClasses : []
            }
        },
        created () {
            this.iconClasses = this.tech.map((tech) => {
                return technologyResolver.classNameForTech(tech)
            })
        }
    }
</script>
<style lang="scss">
    .project-tech-icons {
        display: flex;
        flex-direction: row;

        margin: 0 2px;
    }
    .tech-wrapper {
        display: block;
        position: relative;
        
        margin: 0 2px;

        width: 32px;
        height: 32px;
        i {
            display: block;
            position: relative;
            top: -16px;
            left: -16px;

            transform: scale(0.5);
        }
    }
</style>
