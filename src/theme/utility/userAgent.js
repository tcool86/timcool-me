export const userAgent = {
    validateWindow : function () {
        return typeof window !== 'undefined'
    },
    checkUserAgent : function (check) {
        if (this.validateWindow()) {
            let userAgent = window.navigator.userAgent
            return userAgent.lastIndexOf(check) !== -1
        }
    },
    isMobile : function () {
        return this.checkUserAgent('Mobile')
    },
    isFireFox : function () {
        return this.checkUserAgent('Firefox')
    },
    isChrome : function () {
        return this.checkUserAgent('Chrome')
    },
    canUseBackground : function () {
        if (this.validateWindow()) {
            if ((this.isChrome() || this.isFireFox()) && !this.isMobile()) {
                return true
            }
            return false
        }
    },
    mobileClassMixin : {
        methods : {
            mobileClassWrapper : function (className) {
                if (userAgent.isMobile()) {
                    className += '--mobile'
                }
                return className
            }
        }
    },
    mobileSize : 800
}
