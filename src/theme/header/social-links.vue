<template>
    <ul class="nav-wrapper social-links-wrapper">
        <li class="level-item">
            <a href="//www.facebook.com/timcool" target="_blank" alt="facebook">
                <svgicon icon="facebook" class="icon-large clickable facebook-color"></svgicon>
            </a>
        </li>
        <li class="level-item">
            <a href="//twitter.com/timothymcool" target="_blank" alt="twitter">
                <svgicon icon="twitter" class="icon-large clickable twitter-color"></svgicon>
            </a>
        </li>
        <li class="level-item">
            <a href="//www.linkedin.com/in/tim-cool-1898111b" target="_blank" alt="linkedin">
                <svgicon icon="linkedin" class="icon-large clickable linkedin-color"></svgicon>
            </a>
        </li>
        <!-- <li class="level-item">
            <a href="//stackoverflow.com/users/1347616/tcool" target="_blank" alt="stackoverflow">
                <svgicon icon="stackoverflow" class="icon-large clickable stackoverflow-color"></svgicon>
            </a>
        </li> -->
        <li class="level-item">
            <a href="//github.com/tcool86" target="_blank" alt="github">
                <svgicon icon="github" class="icon-large clickable github-color"></svgicon>
            </a>
        </li>
    </ul>
</template>
<script>
    import '../icons'
    export default {}
</script>
<style lang="scss">
    @import '../../styles/style-vars.scss';
    #nav-main {
        .nav-wrapper {
            z-index: 1;
            transition: all 0.15s ease-out;
        }
        .social-links-wrapper {
            position: relative;
            top: 0.25rem;
            background-color: $backgroundColorTransparent;
            border: 3px solid $backgroundColor;
            border-radius: 5px;
            padding: 0.5rem;
            padding-right: 1rem;
            padding-top: 0.75rem;
        }
    }
    .footer {
        .icon-large {
            fill : black;
        }
    }
</style>
