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
    const compiled = Vue.compile((template as string))
    const parent: any = this.$parent

    const scope = {
      _renderProxy: parent._renderProxy,
      _staticTrees: [],
      _c: parent._c,
      _v: parent._v,
      _m: parent._m,

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
