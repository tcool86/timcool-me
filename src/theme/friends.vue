<template>
    <div class="friends-container view-height">
        <h1>Friends</h1>
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

<style lang="scss" scoped>
    @import '../styles/style-vars.scss';
    .friends-container {
        background-color: $backgroundColorBlue;
    }
    .friend-site-list {
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

        width: 320px;
        height: 240px;
        margin: 1em;
        border: 2px solid black;
        
        text-align: center;
        
        overflow: hidden;
        span {
            position: relative;
            bottom: 25%;
            
            color: whitesmoke;
            
            font-size: 21pt;
            text-shadow: 0px 0px 1px black,
                        -1px 1px 1px black;
        }
        &:hover {
            border-color: $highlightColor;
            .site-image {
                filter: grayscale(0)
            }
        }
    }

    .site-image {
        max-height: 320px;
        width: 320px;
        border: 1px solid white;
        filter: grayscale(1)
    }
</style>
