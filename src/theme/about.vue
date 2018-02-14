<template>
    <div class="about-container">
        <h1 class="content-title">About</h1>
        <section id="about-section" class="content-section columns">
            <div class="column about-text" tabindex="0">
                <h2>Tim Cool</h2>
                <div class="text-wrapper about-background">
                    <figure class="avatar-wrapper" tabindex="0">
                        <img class="cool-shadow" :src="'//res.cloudinary.com/hnairgdu6/image/upload/v1516937711/timcool-profile-image_b6m3bc.jpg'" />
                    </figure>
                    <p>
                        I’m Tim Cool, and this is my website. I live in Oakland, CA and work full time as a Software Engineer. 
                        Ever since I was young, I’ve always been interested in science, technology, video games, comics, and movies. 
                        I started creating computer games when I was around ten years old, using the visual programming application 
                        CocoaDR3, along with programs like Hypercard and Hyperstudio on my family's Macintosh Performa 550. 
                        From there I would graduate to more advanced programming languages like REALbasic, then C++ (mostly for school, and fun).
                    </p>
                    <p>
                        For most of my academic and professional life, I’ve enjoyed working with interactive media and writing software applications. 
                        I’ve been building iOS apps and developing websites for the past eight years or so. 
                        Every day I strive to be more competent at what I do than the day before, it's a motto that I believe could benefit everyone.
                    </p>
                </div>
                <div class="text-wrapper about-interests">
                    <p>
                        <strong>From my LinkedIn:</strong> I'm a software developer, technology enthusiast, artist, and engineer. 
                        My main objective is to work with other self-motivated individuals to create great things. 
                        I love games, challenges, and solving interesting problems.
                    </p>
                    <p>
                        My other interests include going to the gym, philosophy, Japanese culture, and my mustang.
                    </p>
                    <p>
                        Current interests: Vue, Quantum assembly, Unity Engine, VR, and Dragon Ball Fighterz.
                    </p>
                </div>
            </div>
        </section>
        <section id="about-photos"></section>
        <section id="about-skill-stats"></section>
    </div>
</template>
<style lang="scss" scoped>
    @import '../styles/style-vars.scss';
    #about-section {
        height: 100vh;
        margin: 0 17%;
        @media (max-width: $tabletSize) {
            margin: 0 10%;
        }
        * {
            -moz-animation-duration: 1.6s;
            -webkit-animation-duration: 1.6s;
            -moz-animation-name: fadeIn;
            -webkit-animation-name: fadeIn;
        }
        h2 {
            margin: 2rem;
            text-align: center;
        }
        strong {
            color: inherit;
        }
    }
    .avatar-wrapper {
        margin: auto;
        width: 100%;
        img {
            float: left;
            border-radius: 50%;
            shape-outside: circle();
            margin: 1rem;
            max-width: 256px;
            max-height: 256px;
            @media (max-width: $mobileSize) {
                float: none;
                shape-outside: none;
            }
        }
        @media (max-width: $mobileSize) {
            display: flex; 
            justify-content: center;
        }
    }
    .about-text {
        padding: 1.75rem;
        .text-wrapper {
            max-width: 700px;
            margin: 0 auto;
            p {
                margin: 0.5rem;
                margin-top: 1rem;
                color: darkgrey;
                font-family: 'Exo 2';
            }
        }
    }
    .about-interests {
        clear: both;
        padding-top: 1rem;
    }
</style>
