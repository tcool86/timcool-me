import Vue from 'vue'

Vue.component('app', {
    template : `
        <div id="app">
            <nav class="nav has-shadow">
                <div class="container">
                    <a href="/">
                        <img src="http://bit.ly/vue-img" alt="Vue SPA"/>
                    </a>
                </div>
            </nav>
            <section class="main-section section"></section>
            <footer class="footer">
                <div class="container">
                    <div class="content has-text-centered">
                        Follow us on the
                        <a href="https://twitter.com/tcool86" target="_blank">
                            Twitter app?
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    `
})

const app = new Vue({
    render : renderApp => renderApp('app')
})

export { app }
