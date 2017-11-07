import Vue from 'vue'

const app = new Vue({
    data : {
        hello : 'this is a string that is hot loaded :) '
    },
    template : '<div id="app"> {{hello}} </div>'
})

export { app }
