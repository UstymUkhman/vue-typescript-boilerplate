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
  transform: translateX(-50%);
  vertical-align: top;
  text-align: center;

  position: absolute;
  display: table;

  height: 100%;
  left: 50%;
  right: 0;
}

.site-page {
  box-sizing: border-box;
  display: inline-block;
  text-align: center;

  min-width: 100px;
  padding: 0 10px;
  height: 100%;

  a {
    line-height: 50px;
    font-size: 18px;
  }
}
</style>
