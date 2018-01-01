var cool = require('cool-ascii-faces')
var express = require('express')
var jsonp = require('jsonp-body')
var app = express()
const axios = require('axios')

const serialize = require('serialize-javascript')
const fs = require('fs')
const path = require('path')
const environment = process.env.NODE_ENV
const isProd = (typeof environment !== 'undefined') && (environment === 'production')

const { createBundleRenderer } = require('vue-server-renderer')
let renderer

//Server app configuration
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

const rootPath = (isProd) ? "/" : "/dist";
app.use(rootPath, express.static(path.resolve(__dirname, "./dist")))

if (isProd) {
    const bundlePath = path.resolve(__dirname, './dist/server/main.js')
    renderer = createBundleRenderer(fs.readFileSync(bundlePath, 'utf-8'))
} else {
    require("./build/dev-server")(app, bundle => {
        renderer = createBundleRenderer(bundle)
    });
}

// views is directory for all template files
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

const indexHTML = (() => {
    return fs.readFileSync(path.resolve(__dirname, "./views/pages/index.html"), "utf-8")
})()

//Server-side routes
app.get(['/', '/about', '/blog', '/portfolio', '/friend', '/stuff', '/*'], (req, res) => {
    const context = { url: req.url }
    console.log('context: ' + context.url)
    console.log('request: ' + req.query)
    renderer.renderToString(context, (error, html) => {
        if (error) {
            console.log('error rendering: ' + error)
            return res.status(500).send('Server Error')
        }
        html = indexHTML.replace('{{ APP }}', html)
        const serializedInitialState = serialize(context.initialState, { isJSON : true });
        const stateScript = '<script>window.__INITIAL_STATE__='+serializedInitialState+'</script>';
        html = html.replace('{{ STATE }}', stateScript);
        res.write(html);
        res.end();
    });
});

app.get('/cool', function (request, response) {
    response.send(cool())
});

app.get('/res-test', (request, response) => {
    response.jsonp({
        foo1: 'bar',
        foo: 'fighters'
    })
})

app.get('/times', function (request, response) {
    var result = ''
    var times = process.env.TIMES || 5
    for (i = 0; i < times; i++)
        result += i + ' '
    response.send(result)
})

//Postgres Database connection
var pg = require('pg')

app.get('/db', function (request, response) {
    pg.connect(process.env.DATABASE_URL, function (err, client, done) {
        client.query('SELECT * FROM test_table', function (err, result) {
            done();
            if (err) {
                console.error(err);
                response.send("Error " + err);
            } else {
                response.render('pages/db', {
                    results: result.rows
                })
            }
        });
    });
});

//Server listen
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'))
});

