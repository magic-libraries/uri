module.exports = (uri = '') => {
  if (!uri) {
    return {}
  }

  let [host, p] = uri.split('?')

  const res = { host }
  if (p) {
    res.params = p.split('&')
  }
  return res
}
