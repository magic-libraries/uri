const { is } = require('@magic/test')
const { encode } = require('../src')

const encodeObject = { host: 'testing', params: { param_1: 'one', param_2: 'two' } }
const expect = 'testing?param_1=one&param_2=two'

module.exports = [
  {
    fn: () => encode(),
    expect: is.string,
    info: 'encode called with an empty object returns a string nonetheless',
  },
  {
    fn: () => encode(),
    expect: is.empty,
    info: 'encode called with an empty object returns empty',
  },
  {
    fn: () => encode({ host: 'https://example.com' }),
    expect: 'https://example.com',
    info: 'host without params returns unchanged host',
  },
  { fn: () => encode(encodeObject), expect, info: 'can encode parameter objects' },
]
