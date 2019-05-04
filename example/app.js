module.exports = {
  state: {
    title: '@magic-libraries/uri',
    description: '@magic-libraries/uri encodes objects to uri strings and uri strings to objects.',
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
    JSON: require.resolve('@magic-libraries/json'),
  },
}
