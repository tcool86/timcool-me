<template>
    <article :class="showClasses">
        <div class="employer-wrapper columns" ref="boundsPadding">
            <div class="column">
                <div class="employer-title-wrapper" tabindex="1">
                    <h2>thismoment</h2>
                </div>
            </div>
        </div>
        <div class="business-content resume-block">
            <h3>Business</h3>
            <div class="employer-image-wrapper" tabindex="1">
                <img class="employer-image" alt="thismoment logo" :src="'//res.cloudinary.com/hnairgdu6/image/upload/v1515911748/tmlogo_rylvaw.png'" />
            </div>
            <p>
                The technologies provided by thismoment helped power campaigns and custom solutions 
                for more than a quarter of the Fortune 500 brands.
            </p>
            <figure class="products" tabindex="1">
                    <img alt="thismoment powered sites" :src="'//res.cloudinary.com/hnairgdu6/image/upload/v1515911749/thismoment-clients_prein5.png'" />
                <figcaption>
                    a few examples of sites built with DEC + Content Cloud
                </figcaption>
            </figure>
            <p>
                Thismoment Content Cloud, is a digital storytelling platform that enables effortless 
                content curation, digital experience creation and sharing and seamless enterprise technology integration.
            </p>
        </div>
        <div class="technical-content resume-block">
            <h3>Technical</h3>
            <p>Create web APIs to help drive front end experiences.</p>
            <ol>
                <li> PHP on a LAMP stack server.</li>
                <li> Apigility to quickly build RESTful endpoints and RPC services. </li>
                <li> MySQL for storing module and page information.</li>
                <li> Doctrine to improve performance and provide an ORM for content and user data. </li>
                <li> Amazon S3 to store UGC uploads.</li>
                <li> ImageMagick to manipulate the UGC image uploads.</li>
            </ol>
            <p>Rewrite and refactor legacy code to make it easy to maintain and extend upon. Wrote and designed framework and modular components for front end SDK.</p>
            <ol>
                <li> Lots of custom PHP and Javascript.</li>
                <li> XDebug for debugging and profiling.</li>
                <li> Modules using a variety of frameworks BackboneJS, Marionette, and jQuery. </li>
                <li> Multiple analytics and tracking systems to fit client needs.</li>
                <li> LESS for CSS organization and minimization.</li>
            </ol>
            <p>Designed and wrote documentation for software features and presented those in a biweekly review.</p>
            <figure class="products" tabindex="1">
                <img alt="thismoment Content Cloud CMS" :src="'//res.cloudinary.com/hnairgdu6/image/upload/v1515911749/thismoment-content-cloud_muf8y6.png'" />
                <figcaption>
                    Content Cloud
                </figcaption>
            </figure>
        </div>
    </article>
</template>
<script>
    import { blurbMove } from './blurb-move'
    export default {
        mixins : [blurbMove]
    }
</script>
