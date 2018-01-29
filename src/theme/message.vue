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
        closeMessage : function () {
            this.$refs.message.remove()
        }
    }
}
</script>

