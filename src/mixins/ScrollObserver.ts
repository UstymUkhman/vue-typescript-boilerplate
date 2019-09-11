import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      trackVisibility: false as boolean,
      scrollVisible: false as boolean,
      rootMargin: '0px' as string,
      threshold: 0.0 as number,
      observer: null as any,
      delay: 500 as number,
      root: null as any
    }
  },

  methods: {
    createObserver (callback?: IntersectionObserverCallback, options: any = {}): void {
      const _threshold = options.threshold === undefined ? this.threshold : options.threshold
      const onIntersect = typeof callback === 'function' ? callback : this._onIntersect

      this.observer = new IntersectionObserver(onIntersect, {
        trackVisibility: options.trackVisibility || this.trackVisibility,
        rootMargin: options.rootMargin || this.rootMargin,
        delay: options.delay || this.delay,
        root: options.root || this.root,
        threshold: _threshold
      } as IntersectionObserverInit)
    },

    _onIntersect (entries: Array<any>): void {
      for (let e = 0, l = entries.length; e < l; e++) {
        const entry = entries[e]

        if (entry.isIntersecting) {
          this.isVisible(entry.target, entry)
        } else {
          this.isHidden(entry.target, entry)
        }
      }
    },

    // Called every time the entry is visible;
    // Can be overwritten with custom behaviour:
    isVisible (element: any, entry: Array<any>): boolean {
      const visible = !element.classList.contains('scroll-visible')

      if (visible) {
        this.scrollVisible = true
        element.classList.add('scroll-visible')
      }

      return visible
    },

    // Called every time the entry is hidden;
    // Can be overwritten with custom behaviour:
    isHidden (element: any, entry: Array<any>): void { }
  },

  created () {
    this.createObserver()
  },

  activated () {
    this.createObserver()
  },

  deactivated () {
    delete this.observer
  },

  beforeDestroy () {
    delete this.observer
  }
})
