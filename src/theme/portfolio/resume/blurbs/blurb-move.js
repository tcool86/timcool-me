export const blurbMove = {
    props : ['showBlurb'],
    data : function () {
        return {
            'boundary' : 0,
            'showClasses' : 'content blurb-section'
        }
    },
    methods : {
        setBlurbMove : function () {
            let showClasses = 'content blurb-section'
            let element = this.$el
            if (typeof element !== 'undefined') {
                this.boundary = this.getBoundary(element)
                if (this.showBlurb > this.boundary) {
                    showClasses = 'content blurb-section blurb-move'
                }
            }
            return showClasses
        },
        getBoundary : function (element) {
            if (this.boundary !== 0) {
                return this.boundary
            }
            let offsetTop = element.offsetTop
            let paddingElement = this.$refs.boundsPadding
            let paddedHeight = paddingElement.offsetHeight * 4
            let boundary = offsetTop - paddedHeight
            this.boundary = boundary
            return boundary
        }
    },
    watch : {
        'showBlurb' : function (val) {
            this.showClasses = this.setBlurbMove()
        }
    }
}
