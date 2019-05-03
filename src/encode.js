const encode = (p = {}) => {
  let { host = '', params = {} } = p
  params = Object.entries(params)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')

  if (!params) {
    return host
  }

  return [host, params].join('?')
}

module.exports = encode
