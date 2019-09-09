interface Source { [key: string]: any }

const copyInterfaceByKeys = <Reference, Key extends keyof Reference> (reference: Reference, source: any, ...keys: Key[]): Pick<Reference, Key> => {
  const target: Pick<Reference, Key> = Object.create({})

  keys.forEach((key) => {
    if (validInterfaceParameter(reference, key)) {
      target[key] = source[key]
    }
  })

  return target
}

const validInterfaceParameter = <Interface> (inter: Interface, param: any): param is keyof Interface => {
  return param in inter
}

const copyInterface = <Reference> (reference: Reference, int: any): Reference => {
  const keys: Array<keyof Reference> = [] as (keyof Reference)[]
  const target: Source = {}

  Object.keys(reference).forEach((key) => {
    target[key as string] = (<any>int)[key]
    keys.push(key as keyof Reference)
  })

  return copyInterfaceByKeys(reference, target, ...keys)
}

export { validInterfaceParameter, copyInterface }
