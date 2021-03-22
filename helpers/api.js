'use strict'
import qs from 'qs'
function convertBooleanToInt (prefix, value) {
  if (typeof value === 'boolean') {
    return +value
  }
  return value
}
export function paramsSerializerQs (params) {
  return qs.stringify(params, {
    arrayFormat: 'brackets',
    filter: convertBooleanToInt,
  })
}
export function paramsSerializer (params) {
  return JSON.stringify(params, {
    filter: convertBooleanToInt,
  })
}

export function prepareParams (params) {
  const obj = {}
  if (
    typeof params === 'object' &&
    !Array.isArray(params) &&
    params !== null
  ) {
    for (const propName in params) {
      // eslint-disable-next-line no-prototype-builtins
      if (params.hasOwnProperty(propName)) {
        if (
          typeof params[propName] === 'string' &&
          params[propName].length === 0
        ) {
          continue
        }
        obj[propName] = params[propName]
      }
    }
    return obj
  } else {
    return params
  }
}
