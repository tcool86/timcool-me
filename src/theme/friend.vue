<template>
    <div class="friends-container">
        <h1>Friend Sites</h1>
        <ul class="friend-site-list">
            <li class="friend-site-item" v-for="friend in friends" v-bind:key="friend.screenshot">
                <a v-bind:href="friend.url" target="_blank">
                    <div class="friend-site-wrapper">
                        <img class="site-image" :src="friend.screenshot" :alt="friend.name"/>
                        <span>{{ friend.name }}</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    data : function () {
        return {
            friends : [
                {
                    name : 'Pat Cool',
                    url : 'http://www.patrickcool.me/',
                    screenshot : '//res.cloudinary.com/hnairgdu6/image/upload/v1516170988/pcool_dstxab.png'
                },
                {
                    name : 'Tyler Kadish',
                    url : 'http://tyler-kadish.squarespace.com/',
                    screenshot : '//res.cloudinary.com/hnairgdu6/image/upload/v1516170989/tkadish_elxgfk.png'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    @import '../styles/global.scss';

    .friend-site-list {
        margin: 4rem;
        text-align: center;
        .friend-site-item {
            display: inline-block;
            cursor: pointer;
            opacity: 0;
            -webkit-animation: fadeIn 0.5s linear both;
            animation: fadeIn 0.5s linear both;
            &:hover {
                a {
                    text-decoration: none;
                }
            }
            a:focus {
                text-decoration: none;
            }
        }
    }

    .friend-site-wrapper {
        position: relative;
        text-align: center;
        width: 320px;
        height: 241px;
        margin: 1em;
        border: 2px solid white;
        overflow: hidden;
        span {
            position: relative;
            text-shadow: 0px 0px 2px black, 1px 2px 2px black, 0px 3px 0px black;
            color: white;
            font-size: 21pt;
            bottom: 4.8em;
        }
        &:hover {
            border-color: $highlightColor;
            .site-image {
                animation: hoverImageFocus 0.3s linear both;
            }
            span {
                text-shadow: -1px 0px 1px black, 1px 1px 1px black, 0px -1px 1px black, -1px -1px 1px black, -1px 0px 0px black, 1px 1px 0px black, 0px -1px 0px black, -1px -1px 0px black, -1px -1px 12px $highlightColor, 1px 1px 12px $highlightColor;
            }
        }
    }

    .site-image {
        max-height: 320px;
        width: 320px;
        border: 1px solid white;
        -webkit-animation: hoverImageBlur 0.3s linear both;
        animation: hoverImageBlur 0.3s linear both;
    }
</style>
