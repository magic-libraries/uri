import { is } from '@magic/test'
import { decode } from '../src/index.mjs'

const decodeString = 'testing?param_1=one&param_2=two'
const expect = { host: 'testing', params: { param_1: 'one', param_2: 'two' } }

export default [
  {
    fn: () => decode(),
    expect: is.object,
    info: 'encode called with an empty string returns an empty object',
  },
  {
    fn: () => decode(),
    expect: is.empty,
    info: 'encode called with an empty string returns empty',
  },
  {
    fn: () => decode('https://example.com'),
    expect: is.deep.equal({ host: 'https://example.com' }),
    info: 'host without params returns object without params',
  },
  { fn: () => decode(decodeString), expect, info: 'can encode parameter objects' },
]
