const path = require('path')
const webpack = require('webpack')

// https://cli.vuejs.org/config/
// https://cli.vuejs.org/guide/webpack.html

module.exports = {
  publicPath: '/',
  assetsDir: 'root',
  runtimeCompiler: true,

  css: {
    modules: true
  },

  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {}
  },

  configureWebpack: {
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ],

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

    // config.module
    //   .rule('ts')
    //   .test(/\.tsx?$/)
    //   .use('ts-loader')
    //   .tap(options => {
    //     return {
    //       ...options,
    //       transpileOnly: false,
    //       appendTsSuffixTo: [/\.vue$/]
    //     }
    //   })

    config.module
      .rule('modernizr')
      .test(/\.modernizrrc$/)
      .use('webpack-modernizr-loader')
      .loader('webpack-modernizr-loader')
  }
}
