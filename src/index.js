module.exports = {
  encode: (props = {}) => {
    const { host = '', params = {} } = props

    const query = Object.entries(params)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join('&')

    if (!query) {
      return host
    }

    return [host, query].join('?')
  },

  decode: (uri = '') => {
    if (!uri) {
      return {}
    }

    const [host, p] = uri.split('?')

    const res = { host }
    if (p) {
      p.split('&').map(param => {
        res.params = res.params || {}
        const [name, val] = param.split('=')
        res.params[name] = val
      })
    }
    return res
  },
}
