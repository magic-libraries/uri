export const state = {
  title: '@magic-libraries/uri',
  description: '@magic-libraries/uri encodes objects to uri strings and uri strings to objects.',

  logotext: '@magic-libraries/uri',
  menu: [
    { to: '/#installation', text: 'installation' },
    {
      to: '/#usage',
      text: 'usage',
      items: [
        { to: '-encode', text: 'uri.encode' },
        { to: '-decode', text: 'uri.decode' },
      ],
    },
    { to: '/#source', text: 'source' },
  ],
}

export const lib = {
  uri: 'src/index.mjs',
}
