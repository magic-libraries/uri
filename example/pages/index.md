# ${state.title}

[@magic](https://magic.github.io/core)-client library:
${state.description}

<GitBadges>magic-libraries/uri</GitBadges>

<h3 id="installation">installation</h3>

<Pre>npm install --save-exact @magic-libraries/uri</Pre>

<h3 id="usage">usage</h3>

in a page/component, just use the lib.uri functions

<h4 id="usage-encode">encode</h4>

<Pre>
lib.uri.encode({
  host: 'https://example.com',
  params: {
    param_1: true,
    param_2: 'string',
  },
})
</Pre>

returns

https://example.com?param_1=true&param_2=string

<h4 id="usage-decode">decode</h4>

<Pre>
const uri = 'https://example.com/?param_1=true&param_2=string'
lib.uri.decode(uri)
</Pre>

returns

<Pre>
{
  host: 'https://example.com',
  params: {
    param_1: true,
    param_2: 'string',
  },
}
</Pre>

the source for this page is in the
[example directory](https://github.com/magic-libraries/uri/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
