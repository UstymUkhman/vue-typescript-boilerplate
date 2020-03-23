<template>
  <header class="header" itemtype="https://schema.org/WPHeader" itemscope>
    <router-link :to="{name: 'Home', params: { language: $language.current }}" class="logo">
      <img
        itemtype="https://schema.org/logo"
        src="@/assets/img/logo.png"
        itemprop="logo"
        alt="Vue"
      />
    </router-link>

    <SitePages />
    <LanguageSelector v-if="multilanguage" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import SitePages from '@/molecules/SitePages.vue'
import LanguageSelector from '@/atoms/LanguageSelector.vue'

export default Vue.extend({
  name: 'SiteHeader' as string,

  components: {
    LanguageSelector,
    SitePages
  },

  props: {
    multilanguage: {
      type: Boolean,
      default: false,
      required: false
    }
  }
})
</script>

<style lang="scss" scoped>
@import 'variables';

header {
  justify-content: space-between;
  box-shadow: 0 1px 1px 0 #ddd;
  background-color: $white;
  box-sizing: border-box;
  flex-direction: row;

  align-content: center;
  align-items: center;
  flex-wrap: nowrap;

  position: fixed;
  padding: 0 50px;
  display: flex;

  height: 50px;
  width: 100%;
  z-index: 1;
  margin: 0;
}

img,
.logo {
  height: 100%;
  width: auto;
}
</style>
