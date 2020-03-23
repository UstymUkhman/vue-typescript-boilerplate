<template>
  <main class="map-page">
    <section class="map-page-content">
      <LeafMap />
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import LeafMap from '@/organisms/LeafMap.vue'

export default Vue.extend({
  name: 'Map' as string,

  components: { LeafMap },

  metaInfo () {
    return {
      title: 'Map',

      meta: [
        { vmid: 'ogtitle', property: 'og:title', itemprop: 'name', content: 'Map Page' },
        { vmid: 'description', name: 'description', content: 'A Vue/TypeScript boilerplate Map Page.' },
        { vmid: 'ogdescription', property: 'og:description', content: 'A Vue/TypeScript boilerplate Map Page.' }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
@import 'mixins';

section {
  position: absolute;
  display: block;

  height: 100%;
  width: 100%;

  left: 0;
  top: 0;
}
</style>
