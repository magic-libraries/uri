# ${title}

[@magic](https://magic.github.io/core)-client library.

${state.description}

<GitBadges>@magic-libraries/uri</GitBadges>

### installation

`npm install --save-exact @magic-libraries/uri`

### usage

in a page/component, just use the lib.uri functions

#### #usage- encode

```
lib.uri.encode({
  host: 'https://example.com',
  params: {
    param_1: true,
    param_2: 'string',
  },
})
```

returns

https://example.com?param_1=true&param_2=string

#### #usage- decode

```
const uri = 'https://example.com/?param_1=true&param_2=string'
lib.uri.decode(uri)
```

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

### source

the source for this page is in the
[example directory](https://github.com/magic-libraries/uri/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
