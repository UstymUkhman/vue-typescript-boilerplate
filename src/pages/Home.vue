<template>
  <main class="home-page">
    <img alt="Vue logo" src="@/assets/img/logo.png">
    <span translate-comment="Welcome Message" v-translate>Welcome!</span>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home' as string,

  metaInfo () {
    return {
      title: 'Home',

      meta: [
        { vmid: 'ogtitle', property: 'og:title', itemprop: 'name', content: 'Home Page' },
        { vmid: 'description', name: 'description', content: 'A Vue/TypeScript boilerplate Home Page.' },
        { vmid: 'ogdescription', property: 'og:description', content: 'A Vue/TypeScript boilerplate Home Page.' }
      ]
    }
  }
})
</script>
