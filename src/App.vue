<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <transition appear mode="out-in">
      <router-view class="page" />
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    version: {
      type: String,
      required: true
    },

    language: {
      default: '',
      type: String,
      required: false
    },

    domain: {
      default: '',
      type: String,
      required: false
    }
  },

  // data () {
  //   return {
  //   }
  // },

  mounted () {
    console.log('Welcome!')
  },

  metaInfo () {
    return {
      title: ' ',
      base: { href: '/' },
      htmlAttrs: { lang: this.language },
      titleTemplate: '%s | Vue Boilerplate',

      meta: [
        { name: 'fragment', content: '!' },
        { name: 'theme-color', content: '#000000' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },

        { name: 'msapplication-tap-highlight', content: 'no' },
        { name: 'msapplication-TileColor', content: '#000000' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no' },

        { name: 'twitter:site', content: '' },
        { name: 'twitter:creator', content: '' },
        { name: 'twitter:card', content: 'summary_large_image' },

        { vmid: 'ogtype', property: 'og:type', content: 'website' },
        { vmid: 'ogurl', property: 'og:url', content: `${this.domain}/` },
        { vmid: 'ogtitle', property: 'og:title', itemprop: 'name', content: '' },

        { vmid: 'ogimagewidth', property: 'og:image:height', content: '630' },
        { vmid: 'ogimageheight', property: 'og:image:width', content: '1200' },
        { vmid: 'ogimagetype', property: 'og:image:type', content: 'image/jpeg' },

        { vmid: 'ogimage', property: 'og:image', content: `${this.domain}/img/share.jpg` },
        { vmid: 'twitterimage', property: 'twitter:image', content: `${this.domain}/img/share.jpg` },

        { vmid: 'description', name: 'description', content: 'A Vue boilerplate written in TypeScript.' },
        { vmid: 'ogdescription', property: 'og:description', content: 'A Vue boilerplate written in TypeScript.' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~node-reset-scss/scss/reset';
// @import 'variables';
// @import 'fonts';

html,
body,
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-text-rendering: optimizeLegibility;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-rendering: optimizeLegibility;
  font-variant-ligatures: none;
  background-color: #fff;
  text-size-adjust: 100%;

  letter-spacing: normal;
  line-height: normal;
  font-kerning: none;

  position: absolute;
  overflow: hidden;
  color: #000;

  height: 100%;
  width: 100%;

  padding: 0;
  margin: 0;
}

.page {
  box-sizing: border-box;
  position: absolute;
  overflow-y: auto;

  min-height: 100vh;
  max-width: 100%;
  min-width: 100%;

  height: auto;
  width: 100%;

  padding: 0;
  margin: 0;

  left: 0;
  top: 0;
}

// h1 {
// }

// h2 {
// }

// h3 {
// }

// h4 {
// }

// h5 {
// }

// h6 {
// }

// p {
// }

// span {
// }

// a {
// }

em {
  font-style: italic;
}

strong {
  font-weight: bold;
}

// input,
// select,
// button {
// }

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
