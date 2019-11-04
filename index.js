var express = require('express')
var app = express()
const compression = require('compression')

const serialize = require('serialize-javascript')
const fs = require('fs')
const path = require('path')
const environment = process.env.NODE_ENV
const isProd = (typeof environment !== 'undefined') && (environment === 'production')

const { createBundleRenderer } = require('vue-server-renderer')
let renderer

// Server app configuration
app.set('port', (process.env.PORT || 5000))
// eslint-disable-next-line no-path-concat
app.use(express.static(__dirname + '/public'))

const rootPath = (isProd) ? '/' : '/dist'
app.use(rootPath, express.static(path.resolve(__dirname, './dist')))

app.use(compression())

if (isProd) {
    const bundlePath = path.resolve(__dirname, './dist/server/main.js')
    renderer = createBundleRenderer(fs.readFileSync(bundlePath, 'utf-8'))
} else {
    require('./build/dev-server')(app, bundle => {
        renderer = createBundleRenderer(bundle)
    })
}

// views is directory for all template files
// eslint-disable-next-line no-path-concat
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

const indexHTML = (() => {
    return fs.readFileSync(path.resolve(__dirname, './views/pages/index.html'), 'utf-8')
})()

// Server-side routes
app.get(['/', '/about', '/blog', '/portfolio', '/friend', '/stuff', '/*'], (req, res) => {
    const context = { url : req.url }
    console.log('context: ' + context.url)
    renderer.renderToString(context, (error, html) => {
        if (error) {
            console.log('error rendering: ' + error)
            console.log('tried to load: ' + html)
            return res.status(500).send('Server Error')
        }
        html = indexHTML.replace('{{ APP }}', html)
        const serializedInitialState = serialize(context.initialState, { isJSON : true })
        const stateScript = `<script>window.__INITIAL_STATE__=${serializedInitialState}</script>`
        html = html.replace('{{ STATE }}', stateScript)
        res.write(html)
        res.end()
    })
})

// Server listen
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'))
})
