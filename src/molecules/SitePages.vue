<template>
  <nav class="site-pages">
    <div v-for="page in pages" :key="page.name" class="site-page">
      <router-link :to="{name: page.name, params: { language: $language.current }}" exact>
        {{ page.name }}
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import pages from '@/pages.json'

export default Vue.extend({
  name: 'SitePages' as string,

  data () {
    return {
      pages
    }
  }
})
</script>

<style lang="scss" scoped>
nav {
  vertical-align: top;
  text-align: center;

  height: 100%;
  width: auto;
}

.site-page {
  display: inline-block;
  text-align: center;
  padding: 0 10px;

  height: 100%;
  width: auto;

  a {
    line-height: 50px;
  }
}
</style>
