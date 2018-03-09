<template>
    <article class="message is-info" ref="message">
        <div class="message-header">
            <p>Site under construction</p>
            <button class="delete" aria-label="delete" v-on:click="closeMessage"></button>
        </div>
        <div class="message-body">
            This site is still under construction. Don't mind the temporary "lorem ipsum" text througout some parts. :-)
            <br>Thanks,
            <br>-Tim
        </div>
    </article>
</template>
<script>
export default {
    methods : {
        backdropChange : function (change) {
            this.$refs.message.className = 'message is-info ' + 'message--' + change
        },
        closeMessage : function () {
            this.$refs.message.remove()
        }
    },
    mounted () {
        this.$on('backdropChange', this.backdropChange)
    }
}
</script>
<style lang="scss">
    .message.is-info {
        position: fixed;
        z-index: 100;
        width: 100%;
    }
    .message--blur {
        filter: blur(20px)
    }
</style>


