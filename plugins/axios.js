import { paramsSerializerQs, prepareParams } from '~/helpers/api'

export default function ({ store, app, $axios, $config }, inject) {
  const makeRequest = () => {
    // let isRefreshing = false
    // let subscribers = []

    // const subscribeTokenRefresh = cb => subscribers.push(cb)
    // const onRrefreshed = token => subscribers.map(cb => cb(token))

    const _request = $axios.create({ baseURL: $config.URL })
    _request.setHeader('locale', app.i18n.locale)

    // _request.onRequest((config) => {
    //   const token = app.$auth.strategies.local.token.get()
    //   if (token) { config.headers.Authorization = `${token}` }
    //   return config
    // })

    _request.onError(error => Promise.reject(error))
      // const originalRequest = error.config
      // const code = parseInt(error.response && error.response.status)
      // if (code === 401) {
      //   if (!isRefreshing && process.client) {
      //     isRefreshing = true
      //     const params = app.$auth.strategies.local.options.endpoints.refresh
      //     params.data.refresh_token = app.$auth.strategies.local.refreshToken.get()
      //     app.$auth.request(params, {})
      //       .then((data) => {
      //         isRefreshing = false
      //         onRrefreshed(data.access_token)
      //         app.$auth.strategies.local._updateTokens(data, { isRefreshing: true })
      //         // store.commit('auth/SET_TOKEN', data)
      //         subscribers = []
      //       })
      //       .catch((error) => {
      //         app.$auth.callOnError(error, { method: 'refreshToken' })
      //       })
      //   }
      //   const requestSubscribers = new Promise((resolve) => {
      //     subscribeTokenRefresh((token) => {
      //       originalRequest.headers.Authorization = `Bearer ${token}`
      //       resolve($axios(originalRequest))
      //     })
      //   })
      //   return requestSubscribers
      // }

    const cancelTokens = new Map()
    _request.cancelable = function (key) {
      if (cancelTokens.has(key)) {
        cancelTokens.get(key)
          .cancel('Operation canceled by race')
        cancelTokens.forEach((value, key) => {
          if (value.token.reason) {
            cancelTokens.delete(key)
          }
        })
      }

      const newRequest = makeRequest()
      const source = $axios.CancelToken.source()
      newRequest.defaults.cancelToken = source.token
      cancelTokens.set(key, source)
      return newRequest
    }

    const { $get, $post, $delete } = _request
    _request.$delete = (url, data) => $delete(url, { ...data })
    _request.$get = (url, params) => {
      const config = { params: prepareParams(params), paramsSerializer: paramsSerializerQs }
      return $get(url, config)
    }
    _request.getFile = url => $get(url, { responseType: 'arraybuffer' })
    _request.postFile = (data, config = {}) => {
      const newConfig = { ...config, headers: { 'Content-Type': 'multipart/form-data' } }
      return $post('/file', data, newConfig)
    }

    return _request
  }

  const request = makeRequest()
  inject('request', request)
}
