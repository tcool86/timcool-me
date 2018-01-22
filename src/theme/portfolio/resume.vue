<template>
    <section class="resume section">
        <div class="resume-wrapper container">
            <article class="content" id="rewardstyle-section">
                <figure class="employer">
                    <img src="//res.cloudinary.com/hnairgdu6/image/upload/v1515911748/rs_ltk_byc28h.png"/>
                    <figcaption>
                        <h2>rewardStyle + LIKEtoKNOW.it</h2>
                    </figcaption>
                </figure>
                <p>
                    Built and maintained features inside the rewardStyle iOS mobile app (influencer app and utilized technologies from the consumer app LIKEtoKNOW.it)
                    <ol>
                        <li> Objective-C and Swift.</li>
                        <li> CoreData for persisting favorited items within up to thousands of directories. </li>
                        <li> MVVM + MVC + MVP architectures.</li>
                        <li> CocoaPods for pod dependency management.</li>
                        <li> Bitrise for continuous integration, pushing to a branch deploys a build on TestFlight.</li>
                        <li> IGListKit for complex list views with multiple controllers.</li>
                        <li> AFNetworking with a custom wrapper for network calls.</li>
                        <li> Amplitude for analytics across most of the app.</li>
                        <li> Purelayout for dynamic layouts programmatically, used interface builder for legacy views.</li>
                        <li> Third party API integrations for sharing products to Facebook, Tumblr, Twitter, and Pinterest.</li>
                    </ol>

                    Implementation of new rewardStyle API's for mobile app consumption.
                    <ol>
                        <li> Python and PHP for legacy endpoints.</li>
                        <li> Stoplight for mocking up web services.</li>
                        <li> Paw for organizing and outlining the revised LTK API.</li>
                    </ol>
                    <figure class="products">
                        <img src="//res.cloudinary.com/hnairgdu6/image/upload/v1515911749/rewardstyle-ltk_xaacwj.png"/>
                        <figcaption>
                            (right to left) rewardStyle mobile app, LTK consumer app + website
                        </figcaption>
                    </figure>
                    Built part of the front end web experience for rewardStyle's Display product
                    <ol>
                        <li> Javascript with AngularJS for the application framework. </li>
                        <li> SASS for extending and generating CSS.</li>
                        <li> Gulp for the build system, minifying, and linting.</li>
                    </ol>
                </p>
            </article>
            <article class="content" id="thismoment-section">
                <figure class="employer">
                    <img src="//res.cloudinary.com/hnairgdu6/image/upload/v1515911748/tmlogo_rylvaw.png"/>
                    <figcaption>
                        <h2>thismoment</h2>
                    </figcaption>
                </figure>
                <p>
                    Create web APIs to help drive front end experiences.
                    <ol>
                        <li> PHP on a LAMP stack server.</li>
                        <li> Apigility to quickly build RESTful endpoints and RPC services. </li>
                        <li> MySQL for storing module and page information.</li>
                        <li> Doctrine to improve performance and provide an ORM for content and user data. </li>
                        <li> Amazon S3 to store UGC uploads.</li>
                        <li> ImageMagick to manipulate the UGC image uploads.</li>
                    </ol>
                    <figure class="products">
                        <img src="//res.cloudinary.com/hnairgdu6/image/upload/v1515911749/thismoment-clients_prein5.png"/>
                        <figcaption>
                            a few examples of sites built with DEC + Content Cloud
                        </figcaption>
                    </figure>
                    Rewrite and refactor legacy code to make it easy to maintain and extend upon. Wrote and designed framework and modular components for front end SDK.
                    <ol>
                        <li> Lots of custom PHP and Javascript.</li>
                        <li> XDebug for debugging and profiling.</li>
                        <li> Modules using a variety of frameworks BackboneJS, Marionette, and jQuery. </li>
                        <li> Multiple analytics and tracking systems to fit client needs.</li>
                        <li> LESS for CSS organization and minimization.</li>
                    </ol>
                    <figure class="products">
                        <img src="//res.cloudinary.com/hnairgdu6/image/upload/v1515911749/thismoment-content-cloud_muf8y6.png"/>
                        <figcaption>
                            Content Cloud
                        </figcaption>
                    </figure>
                    Designed and wrote documentation for software features and presented those in a biweekly review.
                </p>
            </article>
            <article class="content" id="hobbyfan-section">
                <figure class="employer">
                    <img src="//res.cloudinary.com/hnairgdu6/image/upload/v1515911748/hflogo_c4xfx1.png"/>
                    <figcaption>
                        <h2>hobbyfan.com</h2>
                    </figcaption>
                </figure>
                <p>
                    Wrote administrative software to scrape and store products. Implemented various carts and payment systems. Handled Amazon Seller account.
                    <ol>
                        <li> PHP with MySQL.</li>
                        <li> Magento E-commerce framework.</li>
                        <li> Authorize.net payments integration.</li>
                        <li> Implemented Prestashop cart and developed custom module for preorders. </li>
                        <li> HTML/CSS/JS with jQuery and AJAX techniques for web site and administrative site frontend.</li>
                    </ol>
                    <figure class="products">
                        <img src="//res.cloudinary.com/hnairgdu6/image/upload/v1515911749/hf-backend-tools_jnvctl.png"/>
                        <img src="//res.cloudinary.com/hnairgdu6/image/upload/v1515911751/hf-frontend_toveca.png"/>
                        <figcaption>
                            Admin tools and the frontend site
                        </figcaption>
                    </figure>
                    Worked in a small team and was responsible for a variety of functions including processing orders and organizing shipments for conventions.
                </p>
            </article>
        </div>
    </section>
</template>
<style lang="scss">
    .resume-wrapper {
        color: silver;
        article {
            padding-bottom: 1rem;
            margin-bottom: 1rem;
            border-bottom: 0.1rem solid darkgrey;
        }
        h2 {
            color: whitesmoke;
        }
        ol {
            list-style-type: disc;
        }
        .employer {
            img {
                border-radius: 1rem;
                border: 0.1rem solid silver;
                margin-bottom: 1rem;
            }
        }
    }
</style>
