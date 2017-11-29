<template>
    <div class="about-container">
        <h1 class="content-title">About</h1>
        <section id="about-section" class="content-section">
            <h2>Timothy Michael Ignatius Cool</h2>
            <div class="avatar-wrapper">
                <!-- <img src="/timcool-site/web/assets/image_for_about.jpg"> -->
            </div>
            <div class="text-wrapper">
                <p>
                    This is some text about me. Let's just put some lipsum here for now...Suspendisse euismod elementum interdum. Donec dignissim luctus purus, mollis facilisis tellus lacinia vel. Mauris a vestibulum sem. Nam et commodo orci. Nunc ut purus tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed venenatis dui id neque aliquet mattis. Nam aliquet tristique ante ac scelerisque. Praesent eget venenatis quam.
                </p>
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
        float: left;
        margin: 1em;
    }

    .text-wrapper {
        p {
            margin: 1em;
            margin-top: 2em;
            color: darkgrey;
            font-family: 'Exo 2';
        }
    }
</style>

