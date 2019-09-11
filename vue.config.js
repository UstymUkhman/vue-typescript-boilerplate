const routes = []
const webpackPlugins = []

const path = require('path')
const webpack = require('webpack')
const config = require('./package.json')
const pages = require('./src/pages.json')
const languages = require('./src/assets/data/languages.json')

if (process.env.NODE_ENV === 'development') {
  webpackPlugins.push(new webpack.HotModuleReplacementPlugin())
  webpackPlugins.push(new webpack.NamedModulesPlugin())
}

(function () {
  if (config.multilanguage) {
    Object.keys(languages).forEach((lang) => {
      Array.from(pages, page => {
        routes.push(`/${lang}${page.path}`)
      })
    })
  } else {
    Array.from(pages, page => {
      routes.push(page.path)
    })
  }
})()

module.exports = {
  publicPath: '/',
  assetsDir: 'assets',
  runtimeCompiler: true,

  css: {
    modules: true
  },

  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {},

    prerenderSpa: {
      headless: true,
      registry: undefined,
      renderRoutes: routes,
      onlyProduction: true,
      useRenderEvent: false
    }
  },

  configureWebpack: {
    plugins: webpackPlugins,

    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],

      alias: {
        modernizr$: path.resolve(__dirname, '.modernizrrc'),
        '~': path.resolve(__dirname, 'src'),
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
        '@three': 'three/src'
      }
    }
  },

  chainWebpack: config => {
    config.plugins.delete('fork-ts-checker')

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          ...options.compilerOptions,
          preserveWhitespace: true
        }
      }))

    config.module
      .rule('modernizr')
      .test(/\.modernizrrc$/)
      .use('webpack-modernizr-loader')
      .loader('webpack-modernizr-loader')
  }
}
