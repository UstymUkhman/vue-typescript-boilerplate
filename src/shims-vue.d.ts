declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module "*.json" {
  const value: any
  export default value
  export const lang = 'test'
}

declare module 'vue-analytics'
declare module 'vue-event-handler'
