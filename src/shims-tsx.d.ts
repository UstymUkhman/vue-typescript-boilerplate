import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}

    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}

    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}

declare global {
  type callback = () => string

  interface Route {
    redirect?: string | callback,
    component?: any,
    name?: string,
    path: string
  }
}
