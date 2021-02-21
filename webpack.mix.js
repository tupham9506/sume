const mix = require('laravel-mix');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.config.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/assets/app/server.js', 'public/app/');

mix.webpackConfig({
  resolve: {
    alias: {
      '~': __dirname + '/resources/app'
    },
  },
  ...merge(baseConfig, {
    entry: __dirname + '/resources/app/server.js',
    target: 'node',
    devtool: 'source-map',
    output: {
      libraryTarget: 'commonjs2'
    },
    externals: nodeExternals({
      allowlist: [/\.css$/]
    }),
    plugins: [
      new VueSSRServerPlugin()
    ]
  })
});
