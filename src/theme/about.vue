<template>
    <div class="about-container">
        <h1 class="content-title">About</h1>
        <section id="about-section" class="content-section columns">
            <div class="column is-narrow">
                <figure class="avatar-wrapper image is-256x256">
                    <img :src="'//res.cloudinary.com/hnairgdu6/image/upload/v1512179156/about-image_cis9vz.jpg'" />
                </figure>
            </div>
            <div class="column">
                <h2>Timothy Michael Ignatius Cool</h2>
                <div class="text-wrapper">
                    <p>
                        This is some text about me. Let's just put some lipsum here for now...Suspendisse euismod elementum interdum. Donec dignissim luctus purus, mollis facilisis tellus lacinia vel. Mauris a vestibulum sem. Nam et commodo orci. Nunc ut purus tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed venenatis dui id neque aliquet mattis. Nam aliquet tristique ante ac scelerisque. Praesent eget venenatis quam.
                    </p>
                </div>
            </div>
        </section>
        <section id="about-photos"></section>
        <section id="about-skill-stats"></section>
    </div>
</template>
<style lang="scss">
    @import '../styles/global.scss';
    #about-section {
        margin: 0 2.7em;
        * {
            -moz-animation-duration: 1.6s;
            -webkit-animation-duration: 1.6s;
            -moz-animation-name: fadeIn;
            -webkit-animation-name: fadeIn;
        }
    }

    .avatar-wrapper {
        max-width: 256px;
    }

    .text-wrapper {
        p {
            margin: 0.5rem;
            margin-top: 1rem;
            color: darkgrey;
            font-family: 'Exo 2';
        }
    }
</style>
