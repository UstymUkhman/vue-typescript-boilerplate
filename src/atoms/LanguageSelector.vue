<template>
  <select v-model="$language.current" name="language" @change="$router.push({ name: $route.name, params: { language: $event.target.value } })">
    <option v-for="(language, key) in $language.available" :value="key" :key="key">{{ language }}</option>
  </select>
</template>

<script lang="ts">
import Vue from 'vue'
// import languages from '@/assets/data/languages.json'

export default Vue.extend({
  name: 'LanguageSelector' as string,

  methods: {
    onChange (lang) {
      console.log(lang)
      // this.$emit('change', this.$language.current)
    }
  }
})
</script>
