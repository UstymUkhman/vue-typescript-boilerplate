<script lang="ts">
import Vue from 'vue'
import { getTemplate } from '@/utils/markdown'

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    },

    tag: {
      type: String,
      default: 'div',
      required: false
    },

    inline: {
      type: Boolean,
      default: false,
      required: false
    }
  },

  render (create) {
    const tag = this.$props.inline && this.$props.tag === 'div' ? 'span' : this.$props.tag
    const template = getTemplate(this.$props.text, tag, this.$props.inline)
    const compiled = Vue.compile(template)

    const scope = {
      _renderProxy: this.$parent._renderProxy,
      _c: this.$parent._c,
      _v: this.$parent._v,
      _m: this.$parent._m,
      _staticTrees: [],

      $options: {
        staticRenderFns: compiled.staticRenderFns
      }
    }

    return create({
      render: compiled.render.bind(scope),
      name: 'Markdown'
    })
  }
})
</script>
