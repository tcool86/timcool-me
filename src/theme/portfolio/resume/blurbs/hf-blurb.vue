<template>
    <article :class="showClasses">
        <div class="employer-wrapper columns">
            <div class="column">
                <div class="employer-title-wrapper">
                    <h2>hobbyfan.com</h2>
                </div>
            </div>
        </div>
        <div class="business-content resume-block">
            <h3>Business</h3>
            <div class="employer-image-wrapper">
                <img class="employer-image" src="//res.cloudinary.com/hnairgdu6/image/upload/v1515911748/hflogo_c4xfx1.png"/>
            </div>
            <p>
                Unassuming shop selling collectable anime plush toys, models &amp; figurines for adult comic lovers.
            </p>
            <figure class="products">
                <img src="//res.cloudinary.com/hnairgdu6/image/upload/v1515911751/hf-frontend_toveca.png"/>
                <figcaption>
                    Hobbyfan's client facing retail site.
                </figcaption>
            </figure>
        </div>
        <div class="technical-content resume-block">
            <h3>Technical</h3>
             <p>
                Wrote administrative software to scrape and store products. 
                Implemented various carts and payment systems. Handled Amazon Seller account.
            </p>
            <ol>
                <li> PHP with MySQL.</li>
                <li> Magento E-commerce framework.</li>
                <li> Authorize.net payments integration.</li>
                <li> Implemented Prestashop cart and developed custom module for preorders. </li>
                <li> HTML/CSS/JS with jQuery and AJAX techniques for web site and administrative site frontend.</li>
            </ol>
            <figure class="products">
                <img src="//res.cloudinary.com/hnairgdu6/image/upload/v1515911749/hf-backend-tools_jnvctl.png"/>
                <figcaption>
                    Administration tools
                </figcaption>
            </figure>
            <p>
                Worked in a small team and was responsible for a variety of functions
                including processing orders and organizing shipments for conventions.
            </p>
        </div>
    </article>
</template>
<script>
    export default {
        props : ['showBlurb'],
        computed : {
            'showClasses' : function () {
                let showClasses = 'content blurb-section'
                let element = this.$el
                if (typeof element !== 'undefined') {
                    let offsetTop = element.offsetTop
                    let paddedHeight = element.children[0].offsetTop
                    let boundary = offsetTop - paddedHeight
                    if (this.showBlurb > boundary) {
                        showClasses = 'content blurb-section blurb-move'
                    }
                }
                return showClasses
            }
        }
    }
</script>
