const base = require('./webpack.base.config');
const webpack = require('webpack')
const extractTextPlugin =  require('extract-text-webpack-plugin')

const vendorChunks = new webpack.optimize.CommonsChunkPlugin({
    name : 'vendor',
    filename : 'assets/js/[name].js'
})

const config = Object.assign({}, base, {
    plugins : (base.plugins || []).concat([vendorChunks])
});

config.module.rules.filter(x => { return x.loader == 'vue-loader' }).forEach( x => x.options.extractCSS = true)

config.plugins.push(
    new extractTextPlugin('assets/styles.css')
)

const isProd = process.env.NODE_ENV === 'production'
if (isProd) {
    const optimizePlugin = new webpack.optimize.UglifyJsPlugin({
        compress : {
            warnings : false
        }
    })
    const defineProd = new webpack.DefinePlugin({
        'process.env' : {
            NODE_ENV : '"production"'
        }
    })
    config.plugins.push(defineProd, optimizePlugin)
}

module.exports = config;
