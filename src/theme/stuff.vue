<template>
    <div class="stuff-container">
        <h1>Stuff</h1>
        <ul class="stuff-list">
            <li class="stuff-item" v-for="object in stuff" v-bind:key="object.id">
                <a v-bind:href="object.url" target="_blank">
                    <div :class="'image-'+object.id">
                        <figure>
                            <img class="object-image" :src="object.screenshot" :alt="object.name"/>
                            <figcaption>
                                <span>{{ object.name }}</span>
                            </figcaption>
                        </figure>
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
            stuff : [
                {
                    id : 0,
                    name : 'testing',
                    url : 'http://www.patrickcool.me/',
                    screenshot : '//78.media.tumblr.com/af9c2a796605a377f95baf6b40b115c2/tumblr_o5tx2xwU2J1qkpz2go1_400.gif'
                },
                {
                    id : 1,
                    name : 'more tests',
                    url : 'http://tyler-kadish.squarespace.com/',
                    screenshot : '//cdna.artstation.com/p/assets/images/images/004/176/722/original/martin-king-hots-illidan-large.gif'
                },
                {
                    id : 2,
                    name : 'test-3',
                    url : 'http://www.patrickcool.me/',
                    screenshot : '//cdnb.artstation.com/p/assets/images/images/004/176/729/original/martin-king-hots-thrall-large.gif'
                },
                {
                    id : 3,
                    name : 'test-4',
                    url : 'http://tyler-kadish.squarespace.com/',
                    screenshot : '//78.media.tumblr.com/3e8f0a1b0c8a85c70b519d6b04e7a178/tumblr_o6p13dquqr1qkpz2go1_500.gif'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    @import '../styles/global.scss';

    .stuff-item {
        display: inline-flex;
        width: 500px;
        height: 500px;
    }
    .stuff-list {
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
    // .image-0 {
    //     background-image: url('//www.pcgamesn.com/sites/default/files/Johanna.jpg');
    // }
    // .image-1 {
    //     background-image: url('//media.blizzard.com/heroes/valeera/bust.jpg');
    // }
    // .image-2 {
    //     background-image: url('//media.blizzard.com/heroes/alexstrasza/bust.jpg');
    // }
    // .image-3 {
    //     background-image: url('//www.bleedingcool.com/wp-content/uploads/2017/06/AdmiralStukov-600x419.jpg');
    // }
</style>
