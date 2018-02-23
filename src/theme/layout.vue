<template>
    <div id="app">
        <settings></settings>
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
    import settings from './settings.vue'

    export default {
        components : {
            'app-header' : appHeader,
            'app-footer' : appFooter,
            'message' : message,
            'settings' : settings
        },
        data : {
            'mousePosition' : {
                x : 0,
                y : 0
            }
        },
        methods : {
            runBackgroundAnimation : function () {
                let canvas = document.getElementById('backdrop-canvas')
                var context = canvas.getContext('2d')
                let box = {
                    width : 20,
                    height : 20
                }
                let timer = 92
                let delay = 200
                let horiz = 0
                let vert = 0
                let i = 0
                let j = 0
                let marked = []
                let self = this
                setInterval(function () {
                    context.fillStyle = '#1f1f1f'
                    context.fillRect(0, 0, canvas.width, canvas.height)
                    horiz++
                    vert++
                    let bufferX = Math.sin(Math.abs(horiz) / delay) * box.width + 6
                    let bufferY = Math.sin(Math.abs(vert) / delay) * box.height + 6
                    let mouseX = self.mousePosition.x - (self.mousePosition.x % box.width)
                    let mouseY = self.mousePosition.y - (self.mousePosition.y % box.height)
                    let ix = mouseX / box.width
                    let jy = mouseY / box.height
                    for (i = 0; i < canvas.width / box.width; i++) {
                        for (j = 0; j < canvas.height / box.height; j++) {
                            context.fillStyle = '#2f2f2f'
                            if (marked.length > 1) {
                                for (var m = 0; m < marked.length; m++) {
                                    if (marked[m].x === i && marked[m].y === j) {
                                        let hexValue = marked[m].fill.toString(16)
                                        context.fillStyle = '#' + hexValue + hexValue + hexValue
                                        if (marked[m].fill > 41) {
                                            marked[m].fill -= 8
                                        } else {
                                            marked.shift()
                                        }
                                    }
                                }
                            }
                            if (ix === i && jy === j) {
                                context.fillStyle = '#ffffff'
                                marked.push({
                                    x : i,
                                    y : j,
                                    fill : 255
                                })
                            }
                            context.fillRect(
                                (box.width * i) + bufferX / 2,
                                (box.height * j) + bufferY / 2,
                                box.width - bufferX,
                                box.height - bufferY
                            )
                        }
                    }
                    if (horiz >= timer) {
                        horiz = -timer
                        vert = -timer
                    }
                }, 40)
            },
            resizeCanvasToWindow : function () {
                let canvas = document.getElementById('backdrop-canvas')
                canvas.width = window.innerWidth
                canvas.height = window.innerHeight
            },
            setupListeners : function () {
                let self = this
                window.addEventListener('resize', function (event) {
                    self.resizeCanvasToWindow()
                })
                document.addEventListener('mousemove', function (event) {
                    self.mousePosition = {
                        x : event.x,
                        y : event.y
                    }
                })
            }
        },
        mounted () {
            this.resizeCanvasToWindow()
            this.setupListeners()
            this.runBackgroundAnimation()
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
        top: 0;

        // width: 100%;

        z-index: -1;
    }
</style>
