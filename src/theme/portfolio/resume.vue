<template>
    <section class="resume section">
        <div class="resume-wrapper container">
            <transition name="fade">
                <rs-blurb></rs-blurb>
            </transition>
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
                </p>
                <figure class="products">
                    <img src="//res.cloudinary.com/hnairgdu6/image/upload/v1515911749/thismoment-clients_prein5.png"/>
                    <figcaption>
                        a few examples of sites built with DEC + Content Cloud
                    </figcaption>
                </figure>
                <p>
                    Rewrite and refactor legacy code to make it easy to maintain and extend upon. Wrote and designed framework and modular components for front end SDK.
                    <ol>
                        <li> Lots of custom PHP and Javascript.</li>
                        <li> XDebug for debugging and profiling.</li>
                        <li> Modules using a variety of frameworks BackboneJS, Marionette, and jQuery. </li>
                        <li> Multiple analytics and tracking systems to fit client needs.</li>
                        <li> LESS for CSS organization and minimization.</li>
                    </ol>
                </p>
                <figure class="products">
                    <img src="//res.cloudinary.com/hnairgdu6/image/upload/v1515911749/thismoment-content-cloud_muf8y6.png"/>
                    <figcaption>
                        Content Cloud
                    </figcaption>
                </figure>
                <p>
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
                </p>
                <figure class="products">
                    <img src="//res.cloudinary.com/hnairgdu6/image/upload/v1515911749/hf-backend-tools_jnvctl.png"/>
                    <img src="//res.cloudinary.com/hnairgdu6/image/upload/v1515911751/hf-frontend_toveca.png"/>
                    <figcaption>
                        Admin tools and the frontend site
                    </figcaption>
                </figure>
                <p>
                    Worked in a small team and was responsible for a variety of functions including processing orders and organizing shipments for conventions.
                </p>
            </article>
        </div>
    </section>
</template>
<script>
    import rewardStyleBlurb from './rs-blurb.vue'

    export default {
        components : {
            'rs-blurb' : rewardStyleBlurb
        }
    }
</script>
<style lang="scss">
    @import '../../styles/style-vars.scss';
    .resume-wrapper {
        color: silver;
        article {
            content {
                margin-bottom: 4rem;
            }
            padding-bottom: 4rem;
            border-bottom: 0.1rem solid darkgrey;
            p {
                background-color: $paragraphBackground;
                border-radius: 1rem;
                padding: 1rem;
                margin: 1rem;
            }
        }
        .employer-wrapper {
            img {
                vertical-align: middle;
                border-radius: 1rem;
                border: 0.1rem solid silver;
                margin-bottom: 1rem;
            }
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
                    width: 100%;
                    height: 0.5rem;
                    background-color: rgba(255, 255, 255, 0.1);
                    transform: skew(45deg);
                    left: 0;
                    bottom: -0.2rem;
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
        .resume-block {
            display: inline-block;
            box-sizing: border-box;
            width: 49.7%;
            @media (max-width: $tabletSize) {
                width: 100%;
            }
        }
    }
</style>
