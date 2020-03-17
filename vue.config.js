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

const routes = (function () {
  const paths = pages.map(page => page.path)

  if (config.multilanguage) {
    const languagePaths = []

    Object.keys(languages).forEach(lang => {
      paths.forEach(path => {
        languagePaths.push(`/${lang}${path}`)
      })
    })

    return languagePaths
  }

  return paths
})()

module.exports = {
  publicPath: '/',
  assetsDir: 'assets',
  runtimeCompiler: true,

  css: {
    requireModuleExtension: true,

    loaderOptions: {
      sass: {
        indentedSyntax: true,
        // Set global variables:
        prependData: '@import "~@/variables.sass"',

        sassOptions: {
          includePaths: [path.resolve(__dirname, './src')]
        }
      },

      scss: {
        // Set global variables:
        // prependData: '@import "~@/variables.scss";',

        sassOptions: {
          includePaths: [path.resolve(__dirname, './src')]
        }
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
        '~': path.resolve(__dirname, './src'),
        '@': path.resolve(__dirname, './src'),
        vue$: 'vue/dist/vue.esm.js',
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
