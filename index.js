var cool = require('cool-ascii-faces')
var express = require('express')
var jsonp = require('jsonp-body')
var app = express()

const serialize = require('serialize-javascript')
const fs = require('fs')
const path = require('path')

const { createBundleRenderer } = require('vue-server-renderer')
let renderer

//Server app configuration
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
app.use("/dist", express.static(path.resolve(__dirname, "./dist")))

require("./build/dev-server")(app, bundle => {
    renderer = createBundleRenderer(bundle)
});

// views is directory for all template files
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

const indexHTML = (() => {
    return fs.readFileSync(path.resolve(__dirname, "./views/pages/index.html"), "utf-8")
})()

//Server-side routes
app.get(['/', '/*'], (req, res) => {
    const context = { url: req.url }
    renderer.renderToString(context, (error, html) => {
        if (error) {
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

app.get('/cool', function (request, response) {
    response.send(cool())
});

app.get('/res-test', (request, response) => {
    response.jsonp({
        foo1: 'bar',
        foo: 'fighters'
    })
})

app.get('/cool-stuff', function (request, response) {
    response.send("Cool stuff is a list of links to sites I think are neat, interesting, or cool. The cool stuff object will have a link, title, image, timestamp, rating, and tags.")
})

app.get('/friends', function (request, response) {
    response.send("Friends is a list of my friends sites. The friend data object will have a link, name, image, and timestamp")
})

app.get('/projects', function (request, response) {
    response.send("Projects is a listing of the projects I'm working on past and present. Each project object will have an animated image, images, platforms, technology stack, type, title, description, start date, end date, and timestamp")
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

