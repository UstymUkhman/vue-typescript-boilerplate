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

<style lang="scss">
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
