<template>
    <ul class="social-links-wrapper no-focus">
        <li class="social-item">
            <a href="//www.facebook.com/timcool" target="_blank" rel="noopener" alt="facebook">
                <svgicon icon="facebook" class="icon-large clickable facebook-color"></svgicon>
            </a>
        </li>
        <li class="social-item">
            <a href="//twitter.com/timothymcool" target="_blank" rel="noopener" alt="twitter">
                <svgicon icon="twitter" class="icon-large clickable twitter-color"></svgicon>
            </a>
        </li>
        <li class="social-item">
            <a href="//www.linkedin.com/in/tim-cool-1898111b" rel="noopener" target="_blank" alt="linkedin">
                <svgicon icon="linkedin" class="icon-large clickable linkedin-color"></svgicon>
            </a>
        </li>
        <!-- <li class="social-item">
            <a href="//stackoverflow.com/users/1347616/tcool" target="_blank" alt="stackoverflow">
                <svgicon icon="stackoverflow" class="icon-large clickable stackoverflow-color"></svgicon>
            </a>
        </li> -->
        <li class="social-item">
            <a href="//github.com/tcool86" target="_blank" rel="noopener" alt="github">
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
        .social-links-wrapper {
            display: flex;
            position: fixed;
            top: 0.75rem;
            right: 2rem;
            align-self: flex-end;
            
            border: 3px solid $backgroundColor;
            border-radius: 5px;
            padding: 0.5rem;
            padding-right: 1rem;
            padding-top: 0.75rem;

            background-color: $backgroundColorSocial;

            transition: all 0.15s ease-out;
            z-index: $peakground;
        }
    }
    .no-focus  {
        a:focus {
            svg {
                fill: $activeColor;
            }
        }
    }
    .social-item {
        margin: 0.15rem 0.5rem;
    }
    .footer-with-social {
        ul {
            padding-top: 1rem;
        }
        .icon-large {
            fill : black;
        }
    }
</style>
