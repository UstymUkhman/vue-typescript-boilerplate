import Vue from 'vue'
import debounce from 'lodash/debounce'

export default Vue.extend({
  data () {
    return {
      viewport: {
        height: window.innerHeight as number,
        width: window.innerWidth as number
      }
    }
  },

  methods: {
    _updateViewport (): void {
      this.viewport.height = window.innerHeight as number
      this.viewport.width = window.innerWidth as number
    }
  },

  mounted () {
    this._updateViewport = debounce(this._updateViewport, 50)
    window.addEventListener('resize', this._updateViewport)
    this._updateViewport()
  },

  activated () {
    window.addEventListener('resize', this._updateViewport)
    this._updateViewport()
  },

  deactivated () {
    window.removeEventListener('resize', this._updateViewport)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this._updateViewport)
  }
})
