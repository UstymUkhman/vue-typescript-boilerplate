<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <span translate-comment="Welcome Message" v-translate>Welcome!</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home'
})
</script>
