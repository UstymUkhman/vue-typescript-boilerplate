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

const routes = pages.map(page => {
  if (config.multilanguage) {
    Object.keys(languages).forEach((lang) => {
      return `/${lang}${page.path}`
    })
  }

  return page.path
})

module.exports = {
  publicPath: '/',
  assetsDir: 'assets',
  runtimeCompiler: true,

  css: {
    modules: true,

    loaderOptions: {
      sass: {
        indentedSyntax: true,
        // data: `@import "~@/variables.sass"`,
        includePaths: [path.resolve(__dirname, './src')]
      },

      scss: {
        // Global variables:
        // data: `@import "~@/variables.scss";`,
        includePaths: [path.resolve(__dirname, './src')]
      }
    }
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
      extensions: ['.vue', '.ts', '.js', '.json'],

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
