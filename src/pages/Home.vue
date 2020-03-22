<template>
  <main class="home-page">
    <section class="home-page-content">
      <img alt="Vue logo" src="@/assets/img/logo.png">
      <Markdown :text="$gettext('Welcome!')" inline />
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Markdown from '@/atoms/Markdown.vue'

export default Vue.extend({
  name: 'Home' as string,

  components: {
    Markdown
  },

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

<style lang="scss" scoped>
@import 'mixins';

section {
  @include centered;
  height: 250px;
  width: 300px;
}

img {
  margin: 0 50px;
  height: 200px;
  width: auto;
}

span {
  white-space: nowrap;
  text-align: center;
  position: absolute;

  line-height: 25px;
  font-size: 20px;
  margin: auto;

  bottom: 0;
  right: 0;
  left: 0;
}
</style>
