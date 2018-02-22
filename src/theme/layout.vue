<template>
    <div id="app">
        <canvas id="backdrop-canvas" width=2000 height=2000 v-once></canvas>
        <message></message>
        <app-header></app-header>
        <section class="view-height">
            <div class="container-content">
                <router-view></router-view>
            </div>
        </section>
        <app-footer></app-footer>
    </div>
</template>
<script>
    import appHeader from './header/app-header.vue'
    import appFooter from './app-footer.vue'
    import message from './message.vue'

    export default {
        components : {
            'app-header' : appHeader,
            'app-footer' : appFooter,
            'message' : message
        },
        mounted () {
            let canvas = document.getElementById('backdrop-canvas')
            var context = canvas.getContext('2d')
            let box = {
                width : 20,
                height : 20
            }
            let horiz = 0
            let i = 0
            let vert = 0
            let j = 0
            context.strokeStyle = '#2f2f2f'
            setInterval(function () {
                context.clearRect(0, 0, 2000, 2000)
                horiz++
                vert++
                let bufferX = Math.sin(Math.abs(horiz) / 100) * box.width + 6
                let bufferY = Math.sin(Math.abs(vert) / 100) * box.height + 6
                for (i = 0; i < 100; i++) {
                    for (j = 0; j < 100; j++) {
                        context.strokeRect(
                            (box.width * i) + bufferX / 2,
                            (box.height * j) + bufferY / 2,
                            box.width - bufferX,
                            box.height - bufferY
                        )
                    }
                }
                if (horiz >= 100 || vert >= 100) {
                    horiz = -100
                    vert = -100
                }
            }, 20)
        }
    }
</script>
<style lang="scss">
    $primary : #DE8e1e;
    $link : #FF0000;
    @import '~bulma';
    @import '../styles/global.scss';
    .columns {
        flex-wrap : wrap
    }
    #backdrop-canvas {
        position: fixed;
        width: 100%;
        z-index: 0;
    }
</style>
