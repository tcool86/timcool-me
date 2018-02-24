<template>
    <canvas id="backdrop-canvas" width=2000 height=2000 v-once></canvas>
</template>
<script>
export default {
    data : function () {
        return {
            'mousePosition' : {
                x : 0,
                y : 0
            },
            'box' : {
                width : 66,
                height : 66
            },
            'timer' : 97,
            'delay' : 200,
            'counter' : 0,
            'marked' : [],
            'markedOff' : false,
            'backColor' : '#1f1f1f',
            'squareFill' : '#222222',
            'squareHighlight' : '#ffffff',
            'getCanvas' : function () {
                return document.getElementById('backdrop-canvas')
            },
            'getContext' : function () {
                return this.getCanvas().getContext('2d')
            },
            'animationInterval' : null
        }
    },
    methods : {
        toggleBackgroundAnimation : function () {
            if (this.animationInterval) {
                this.stopBackgroundAnimation()
            } else {
                this.runBackgroundAnimation()
            }
        },
        stopBackgroundAnimation : function () {
            this.marked = []
            this.markedOff = true
            this.counter = 50
            this.pulseAnimation()
            clearInterval(this.animationInterval)
            this.animationInterval = null
        },
        determineFill : function (pos, mPos) {
            let fill = this.squareFill
            if (this.markedOff) {
                return fill
            }
            if (this.marked.length > 1) {
                for (var m = 0; m < this.marked.length; m++) {
                    if (this.marked[m].x === pos.x && this.marked[m].y === pos.y) {
                        let hexValue = this.marked[m].fill.toString(16)
                        if (this.marked[m].fill > 41) {
                            this.marked[m].fill -= 8
                        } else {
                            this.marked.shift()
                        }
                        fill = '#' + hexValue + hexValue + hexValue
                    }
                }
            }
            if (mPos.x === pos.x && mPos.y === pos.y) {
                this.marked.push({
                    x : pos.x,
                    y : pos.y,
                    fill : 255
                })
                fill = this.squareHighlight
            }
            return fill
        },
        mouseSquarePosition : function () {
            let mouseX = this.mousePosition.x - (this.mousePosition.x % this.box.width)
            let mouseY = this.mousePosition.y - (this.mousePosition.y % this.box.height)
            return {
                x : mouseX / this.box.width,
                y : mouseY / this.box.height
            }
        },
        calculateSquareBuffer : function (dimension) {
            return Math.sin(Math.abs(this.counter) / this.delay) * dimension + 6
        },
        pulseAnimation : function () {
            let ctx = this.getContext()
            ctx.fillStyle = this.backColor
            let canvasWidth = this.getCanvas().width
            let canvasHeight = this.getCanvas().height
            ctx.fillRect(0, 0, canvasWidth, canvasHeight)
            this.counter++
            let bufferX = this.calculateSquareBuffer(this.box.width)
            let bufferY = this.calculateSquareBuffer(this.box.height)
            let mPos = this.mouseSquarePosition()
            let squareCountHoriz = canvasWidth / this.box.width
            let squareCountVert = canvasHeight / this.box.height
            for (let i = 0; i < squareCountHoriz; i++) {
                for (let j = 0; j < squareCountVert; j++) {
                    ctx.fillStyle = this.determineFill({x : i, y : j}, mPos)
                    ctx.fillRect(
                        (this.box.width * i) + bufferX / 2,
                        (this.box.height * j) + bufferY / 2,
                        this.box.width - bufferX,
                        this.box.height - bufferY
                    )
                }
            }
            if (this.counter >= this.timer) {
                this.counter = -this.timer
            }
        },
        runBackgroundAnimation : function () {
            let self = this
            this.markedOff = false
            this.animationInterval = setInterval(function () {
                self.pulseAnimation()
            }, 30)
        },
        resizeCanvasToWindow : function () {
            let canvas = this.getCanvas()
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            this.pulseAnimation()
            this.getContext().save()
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
        this.stopBackgroundAnimation()
    }
}
</script>
