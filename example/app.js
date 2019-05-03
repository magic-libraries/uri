module.exports = {
  state: {
    title: '@magic-client/uri',
    description: '@magic-client/uri encodes objects to uri strings and uri strings to objects.',
    logo: '/logo.png',
    logotext: 'uri',
    menu: [
      { to: '/#installation', text: 'installation' },
      { to: '/#require', text: 'require' },
      { to: '/#usage', text: 'usage', items: [

        { to: '/#usage-encode', text: 'URI.encode' },
        { to: '/#usage-decode', text: 'URI.decode' },
      ] },
      { to: '/#source', text: 'source' },
    ],
  },
  lib: {
    URI: require.resolve('../src'),
    JSON: require.resolve('@magic-client/json'),
  },
}
