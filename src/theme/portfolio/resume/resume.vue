<template>
    <section class="resume section">
        <div class="resume-wrapper container">
            <rs-blurb class="view-height" id="rs-id"></rs-blurb>
            <tm-blurb class="view-height" id="tm-id" :show-blurb="scrollY"></tm-blurb>
            <hf-blurb class="view-height" id="hf-id" :show-blurb="scrollY"></hf-blurb>
        </div>
    </section>
</template>
<script>
    import rewardStyleBlurb from './blurbs/rs-blurb.vue'
    import thismomentBlurb from './blurbs/tm-blurb.vue'
    import hobbyfanBlurb from './blurbs/hf-blurb.vue'

    export default {
        data : function () {
            return {
                scrollY : 0,
                scrollTimeout : null
            }
        },
        components : {
            'rs-blurb' : rewardStyleBlurb,
            'tm-blurb' : thismomentBlurb,
            'hf-blurb' : hobbyfanBlurb
        },
        methods : {
            handleScrollEvent : function (event) {
                this.$data.scrollY = window.scrollY
            }
        },
        created () {
            if (typeof window !== 'undefined') {
                window.addEventListener('scroll', this.handleScrollEvent, {passive : true})
            }
        },
        destroyed () {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', this.handleScrollEvent)
            }
        }
    }
</script>
<style lang="scss">
    @import '../../../styles/style-vars.scss';
    .resume-wrapper {
        color: silver;
        article {
            content {
                margin-bottom: 4rem;
            }
            padding-bottom: 4rem;
            p {
                background-color: $paragraphBackground;
                border-radius: 1rem;
                padding: 1rem;
                margin: 1rem;
            }
        }
        .employer-wrapper {
            margin-bottom: 3rem;
        }
        .employer-image-wrapper {
            width: 100%;
            margin: auto;
            margin-top: 4rem;
            text-align: center;
        }
        .employer-image {
            vertical-align: middle;
            border-radius: 1rem;
            border: 0.1rem solid silver;
            margin-bottom: 1rem;
        }
        .employer-title-wrapper {
            display: inline-block;
            position: relative;
            vertical-align: middle;
            text-align: center;
            margin-left: 1rem;
            h2 {
                display: inline;
                color: whitesmoke;
                margin-left: 2rem;
                &::before {
                    position: absolute;
                    content: '';
                    width: 120%;
                    height: 0.4rem;
                    background-color: $paragraphBackground;
                    transform: skew(45deg);
                    left: 0;
                    bottom: -0.2rem;
                }
                @media (max-width: $tabletSize) {
                    margin-left: 0;
                    &::before {
                        width: 100%;
                    }
                }
            }
        }
        h3 {
            color: $lighterGrey;
            text-align: center;
            width: 100%;
        }
        ol {
            list-style-type: disc;
        }
        .employer {
            text-align: left;
            @media (max-width: $tabletSize) {
                display: block;
                text-align: center;
            }
            figcaption {
                display: inline-flex;
                vertical-align: middle;
                margin-left: 2rem;
                @media (max-width: $tabletSize) {
                    vertical-align: 0;
                    margin-left: 0;
                }
            }
        }
        .blurb-section {
            transform: translate(0, 10rem);
            opacity: 0.01;
            transition: transform 1s ease-in-out, opacity 1s ease-in-out;
            .business-content {
                transform: translate(-20rem, 10rem);
                transition: transform 1s ease-in-out, opacity 1s ease-in-out;
            }
            .technical-content {
                transform: translate(20rem, 10rem);
                transition: transform 1s ease-in-out, opacity 1s ease-in-out;
            }
        }
        .blurb-move {
            transform: translate(0, 0);
            opacity: 1;
            .business-content {
                transform: translate(0, 0);
            }
            .technical-content {
                transform: translate(0, 0);
            }
        }
        .resume-block {
            display: inline-grid;
            box-sizing: border-box;
            width: 49.7%;
            @media (max-width: $tabletSize) {
                width: 100%;
            }
        }
        .add-on-block {
            margin-top: 4rem;
        }
    }
</style>
