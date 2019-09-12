<template>
  <select v-model="$language.current" name="language" @change="$router.push({ name: $route.name, params: { language: $event.target.value } })">
    <option v-for="(language, key) in $language.available" :value="key" :key="key">
      <span>{{ language }}</span>
    </option>
  </select>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LanguageSelector' as string
})
</script>

<style lang="scss" scoped>
select {
  font-family: 'White Rabbit', sans-serif;
  vertical-align: middle;
  line-height: 16px;
  font-size: 14px;

  padding: 5px 10px;
  cursor: pointer;
  outline: 0;
}
</style>
