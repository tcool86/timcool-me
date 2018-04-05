<template>
    <div class="technologies-container">
        <job-technology :tech="technologies"></job-technology>
    </div>
</template>
<script>
    import jobTechnologies from '../projects/project/project-technology.vue'
    var testResume = [
        'web',
        '',
        'jquery',
        'html',
        'css',
        'js',
        'angular',
        '',
        'bash',
        'ios',
        'apple',
        'objc',
        'swift'
    ]
    export default {
        data : function () {
            return {
                'technologies' : testResume
            }
        },
        components : {
            'job-technology' : jobTechnologies
        }
    }
</script>
<style lang="scss">
    .technologies-container {
        display: flex;
        justify-content: center;

        width: 100%;
        .tech-wrapper {
            width: 64px;
            height: 64px;
            .tech-icon {
                transform: none;
            }
        }
    }
</style>
