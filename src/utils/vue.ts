import keys from 'lodash/keys'

const reactive = function (value: object, model: object) {
  const valueKeys: Array<string> = keys(value)
  const modelKeys: Array<string> = keys(model)

  valueKeys.forEach(key => {
    if (modelKeys.indexOf(key) === -1) {
      Object.defineProperty(value, key, { configurable: false })
    } else {
      if (typeof (<any>model)[key as string] === 'object') {
        reactive((<any>value)[key], (<any>model)[key])
      }
    }
  })
}

export { reactive }
