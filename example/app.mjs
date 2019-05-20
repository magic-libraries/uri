export const state = {
  title: '@magic-libraries/uri',
  description: '@magic-libraries/uri encodes objects to uri strings and uri strings to objects.',
  logo: '/logo.png',
  logotext: 'uri',
  menu: [
    { to: '/#installation', text: 'installation' },
    {
      to: '/#usage',
      text: 'usage',
      items: [
        { to: '/#usage-encode', text: 'uri.encode' },
        { to: '/#usage-decode', text: 'uri.decode' },
      ],
    },
    { to: '/#source', text: 'source' },
  ],
}

export const lib = {
  uri: 'src/index.mjs',
}
