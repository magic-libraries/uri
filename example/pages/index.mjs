export const View = state => [
  h2('@magic-libraries/uri'),

  p([
    Link({ to: 'https://magic.github.io/core' }, '@magic'),
    '-client library:',
    ' encode objects to uris and decode uri strings to objects',
  ]),

  GitBadges('magic-libraries/uri'),

  h3({ id: 'installation' }, 'installation'),
  Pre('npm install --save-exact @magic-libraries/uri'),

  h3({ id: 'usage' }, 'usage'),
  p('in a page/component, just use the lib.uri functions'),

  h4({ id: 'usage-encode' }, 'encode'),
  Pre(`
lib.uri.encode({
  host: 'https://example.com',
  params: {
    param_1: true,
    param_2: 'string',
  },
})`),

  p('returns'),
  p(
    lib.uri.encode({
      host: 'https://example.com',
      params: {
        param_1: true,
        param_2: 'string',
      },
    }),
  ),

  h4({ id: 'usage-decode' }, 'decode'),
  Pre(`
const uri = 'https://example.com/?param_1=true&param_2=string'
lib.uri.decode(uri)`),

  p('returns'),
  Pre(
    lib.json.stringify(lib.uri.decode('https://example.com?param_1=true&param_2=string'), null, 2),
  ),

  h3({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link(
      { to: 'https://github.com/magic-libraries/uri/tree/master/example' },
      'example directory',
    ),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),

  LightSwitch(state),
]
