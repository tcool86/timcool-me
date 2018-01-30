<template>
    <article :class="showClasses">
        <div class="employer-wrapper columns">
            <div class="column">
                <div class="employer-title-wrapper">
                    <h2>rewardStyle + LIKEtoKNOW.it</h2>
                </div>
            </div>
        </div>
        <div class="business-content resume-block">
            <h3>Business</h3>
            <div class="employer-image-wrapper">
                <img class="employer-image" src="//res.cloudinary.com/hnairgdu6/image/upload/v1515911748/rs_ltk_byc28h.png"/>
            </div>
            <p>
                More than 11,000 global influencers leverage rewardStyle’s turn-key ecosystem 
                of simple-to-use tech products, strategic consulting, educational services 
                and the LIKEtoKNOW.it mobile publishing and distribution platform 
                to maximize the economic success of their content across all platforms: web, mobile and social.
            </p>
            <ol>
                <li> 2.3M+ LIKEtoKNOW.it users </li>
                <li> generating $210 million in sales to retail partners </li>
                <li> 1k+ original pieces of content published daily </li>
            </ol>
        </div>
        <div class="technical-content resume-block">
            <h3>Technical</h3>
            <p>Built and maintained features inside the rewardStyle iOS mobile app (influencer app and utilized technologies from the consumer app LIKEtoKNOW.it)</p>
            <ol>
                <li>Objective-C and Swift.</li>
                <li>CoreData for persisting favorited items within up to thousands of directories. </li>
                <li>MVVM + MVC + MVP architectures.</li>
                <li>CocoaPods for pod dependency management.</li>
                <li>Bitrise for continuous integration, pushing to a branch deploys a build on TestFlight.</li>
                <li>IGListKit for complex list views with multiple controllers.</li>
                <li>AFNetworking with a custom wrapper for network calls.</li>
                <li>Amplitude for analytics across most of the app.</li>
                <li>Purelayout for dynamic layouts programmatically, used interface builder for legacy views.</li>
                <li>Third party API integrations for sharing products to Facebook, Tumblr, Twitter, and Pinterest.</li>
            </ol>
            <p>Integration of new rewardStyle API's for mobile app consumption.</p>
            <ol>
                <li>Python and PHP for legacy endpoints.</li>
                <li>Stoplight for mocking up web services.</li>
                <li>Paw for organizing and outlining the revised LTK API.</li>
            </ol>
            <p>Built part of the front end web experience for rewardStyle's Display product</p>
            <ol>
                <li>Javascript with AngularJS for the application framework. </li>
                <li>SASS for extending and generating CSS.</li>
                <li>Gulp for the build system, minifying, and linting.</li>
            </ol>
        </div>
        <div class="content add-on-block">
            <figure class="products">
                <img src="//res.cloudinary.com/hnairgdu6/image/upload/v1515911749/rewardstyle-ltk_xaacwj.png"/>
                <figcaption>
                    (left to right) rewardStyle mobile app, LTK consumer app + website
                </figcaption>
            </figure>
        </div>
    </article>
</template>
<script>
    export default {
        data : function () {
            return {
                'showClasses' : 'content blurb-section'
            }
        },
        mounted : function () {
            this.$nextTick(() => {
                this.showClasses = 'content blurb-section blurb-move'
            })
        }
    }
</script>
