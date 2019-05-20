"use strict";function c(a){return k(a)||d(a)||f()}function d(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function e(a,b){return k(a)||j(a,b)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function j(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function k(a){if(Array.isArray(a))return a}function l(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){m(a,b,c[b])})}return a}function m(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function n(a,b){if(null==a)return{};var c,d,e=o(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function o(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function r(a){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r(a)}var t=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,i=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=i(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(!!(b&&!0!==b)&&("function"==typeof b[0]?[b]:k(b)))},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=i(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name):document.createElement(a.name),f=a.props;for(var g in f)o(e,g,null,f[g],c,d);for(var h=0,j=a.children.length;h<j;h++)e.appendChild(p(a.children[h]=u(a.children[h]),c,d));return a.node=e},q=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,r=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,r))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==r[A]&&o(c,A,n[A],r[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(v[x]);)s(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(v[z]);)s(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(v[x]=u(v[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(s(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,v[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(b,c){return b.type===a?((!c||t(c.lazy,b.lazy))&&((c=b.lazy.view(b.lazy)).lazy=b.lazy),c):b},v=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},w=function(a,e){return v(a,c,d,e,null,b)},x=function(a){return a.nodeType===b?w(a.nodeValue,a):v(a.nodeName.toLowerCase(),c,e.call(a.childNodes,x),a,null,1)},y=function(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push("object"===r(d)?d:w(d));return b=b||c,"function"==typeof a?a(b,g):v(a,b,g,null,b.key)};return{h:y,app:function app(a,b){var c={},d=!1,e=a.view,h=a.node,i=h&&x(h),j=a.subscriptions,l=[],m=function(a){p(this.actions[a.type],a)},o=function(a){return c===a||d||g(q,d=!0),c=a},p=(b||function(a){return a})(function(a,b,d){return"function"==typeof a?p(a(c,b),d||b):f(a)?"function"==typeof a[0]?p(a[0],"function"==typeof(a=a[1])?a(b):a,b):(k(a.slice(1)).map(function(a){a&&a[0](p,a[1],b)},o(a[0])),c):o(a)}),q=function(){d=!1,j&&(l=n(l,k(j(c)),p)),e&&(h=s(h.parentNode,h,i,"string"==typeof(i=e(c))?w(i):i,m))};p(a.init)},Lazy:function Lazy(b){return{lazy:b,type:a}}}}(),v=t.h,h=t.Lazy,w=t.app,x=function(a){return function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===r(a)})};return d||(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),v(a,b,d)}},y=x("a"),a=x("abbr"),z=x("address"),A=x("area"),B=x("article"),C=x("aside"),D=x("audio"),E=x("b"),b=x("bdi"),F=x("bdo"),G=x("blockquote"),H=x("br"),I=x("button"),J=x("canvas"),K=x("caption"),L=x("cite"),M=x("code"),N=x("col"),O=x("colgroup"),P=x("data"),Q=x("datalist"),R=x("dd"),S=x("del"),T=x("details"),U=x("dfn"),V=x("dialog"),W=x("div"),X=x("dl"),Y=x("dt"),Z=x("em"),$=x("embed"),_=x("fieldset"),aa=x("figcaption"),ba=x("figure"),ca=x("footer"),da=x("form"),ea=x("h1"),fa=x("h2"),ga=x("h3"),ha=x("h4"),ia=x("h5"),ja=x("h6"),ka=x("header"),la=x("hr"),ma=x("i"),i=x("iframe"),na=x("img"),oa=x("input"),pa=x("ins"),qa=x("kbd"),ra=x("label"),sa=x("legend"),ta=x("li"),ua=x("main"),va=x("map"),wa=x("mark"),xa=x("menu"),ya=x("menuitem"),za=x("meter"),Aa=x("nav"),Ba=x("object"),Ca=x("ol"),Da=x("optgroup"),Ea=x("option"),Fa=x("output"),Ga=x("p"),p=x("param"),Ha=x("picture"),Ia=x("pre"),Ja=x("progress"),Ka=x("q"),q=x("rp"),La=x("rt"),Ma=x("rtc"),Na=x("ruby"),Oa=x("s"),s=x("samp"),Pa=x("section"),Qa=x("select"),Ra=x("small"),Sa=x("source"),Ta=x("span"),Ua=x("strong"),Va=x("sub"),Wa=x("summary"),Xa=x("sup"),Ya=x("table"),Za=x("tbody"),$a=x("td"),_a=x("textarea"),ab=x("tfoot"),bb=x("th"),cb=x("thead"),db=x("time"),eb=x("tr"),fb=x("track"),gb=x("u"),u=x("ul"),hb=x("video"),ib=x("wbr"),jb=x("svg"),kb=x("g"),g=x("circle"),lb=x("ellipse"),mb=x("rect"),nb=x("polygon"),ob=x("path"),pb=x("defs"),qb=x("linearGradient"),rb=x("stop"),sb=x("text"),tb=x("html"),ub=x("head"),vb=x("title"),wb=x("meta"),xb=x("link"),yb=x("body"),zb=x("script"),Ab=x("description"),Bb={url:"/uri/",root:"/uri/",title:"@magic-libraries/uri",description:"@magic-libraries/uri encodes objects to uri strings and uri strings to objects.",logo:"/logo.png",logotext:"uri",menu:[{to:"/#installation",text:"installation"},{to:"/#usage",text:"usage",items:[{to:"/#usage-encode",text:"uri.encode"},{to:"/#usage-decode",text:"uri.decode"}]},{to:"/#source",text:"source"}],pre:{theme:"light"}},Cb={mapClickToGo:function mapClickToGo(a){return function(b){return b.preventDefault(),{to:a,e:b}}},listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},Db=function(a){var b=a.items,c=a.hash,d=a.url,e=void 0===d?"":d,f=a.root,g=n(a,["items","hash","url","root"]),h=g["class"],i=void 0===h?"Menu":h,j=g.collapse;if(b.length)return c&&(e+="#".concat(c)),Aa({class:i},u(b.map(function(a){return Db.Item(l({},a,{url:e,root:f,collapse:void 0===j||j}))})))};Db.Item=function(a){var b=a.url,c=a.text,d=a.items,e=void 0===d?[]:d,f=a.parentTo,g=void 0===f?void 0:f,h=a.collapse,j=a.root,k=n(a,["url","text","items","parentTo","collapse","root"]);if(k.to||c){var m={class:"MenuItem"};if(g){var i=k.to.includes("://"),o=k.to.startsWith("/"),p=!g||k.to.startsWith(g);p||o||i||(!g.endsWith("/")&&!k.to.startsWith("-")&&(g="".concat(g,"/")),k.to=g+k.to)}k.to=k.to.startsWith(j)?k.to:"".concat(j).concat(k.to.substr(1));var q=b&&b.startsWith(k.to);b===k.to&&(m["class"]+=" active");var r=[];return(e.length&&q||!h)&&(r=u(e.map(function(a){return Db.Item(l({parentTo:k.to,url:b,root:j,collapse:h},a))}))),ta(m,[k.to?Ib(k,c):Ta(k,c),r])}};var Eb=function(){return ca({class:"Footer"},[W({class:"Container"},["made with a few bits of ",Ib({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])},Fb=function(a){var b=a.logo,c=a.menu,d=a.tagline,e=a.logotext,f=n(a,["logo","menu","tagline","logotext"]);return(b||c||d)&&ka({class:"Header"},[(b||e)&&Ib({to:"/",class:"LogoWrapper"},[b&&Gb({class:"Logo",src:b}),e&&Ta({class:"LogoText"},e)]),c&&Db(l({},f,{items:c}))])},Gb=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),na(a)},Hb=function(a){var b=a.page,c=a.state;return W({class:"Wrapper"},[Fb(c),W({class:"Page"},b?b(c):"404 - not found"),Eb(c)])},Ib=function(a,b){var c=a.to,d=n(a,["to"]),e=d.href,f=d.text,g=d.nofollow,h=d.noreferrer,i=d.onclick,j=n(d,["href","text","nofollow","noreferrer","onclick"]);return c=c||e||"",j.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?j.onclick=[Nb.go,Cb.mapClickToGo(c)]:(j.target="_blank",j.rel="noopener",g&&(j.rel+=" nofollow"),h&&(j.rel+=" noreferrer")),y(j,[f,b])},Jb=function(){},Kb=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.project,d=void 0!==c&&c,f=b.branch,g=void 0===f?"master":f,h=b.host,i=void 0===h?"github":h,j=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(g)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;if(a){var b=a.split("/"),c=e(b,2),f=c[0],h=c[1];return f=f.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(f,"/").concat(h,"/branch/").concat(g),src:"https://img.shields.io/appveyor/ci/".concat(f,"/").concat(h,"/").concat(g,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return{to:"https://coveralls.io/".concat(i,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(i,"/").concat(a,"/").concat(g,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(i,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=e(b,2),d=c[0],f=c[1];return f(a[d])}).filter(function(b){return b.to&&b.src});return j.length?u({class:"GitBadges"},j.map(function(a){var b=a.to,c=a.src;return ta([Ib({to:b},Gb({src:c}))])})):void 0},Lb=function(a){"string"==typeof a&&(a={content:a,theme:"light"});var b=a,c=b.theme,d=b.content;return W({class:"Pre ".concat(c)},[W({class:"menu"},[I({onclick:[Nb.pre.clip,function(a){return{e:a,content:d}}]},"copy")]),Ia(Mb.pre.format(d))])},Mb={uri:function(){return{encode:function encode(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.host,c=void 0===b?"":b,d=a.params,f=void 0===d?{}:d,g=Object.entries(f).map(function(a){var b=e(a,2),c=b[0],d=b[1];return"".concat(encodeURIComponent(c),"=").concat(encodeURIComponent(d))}).join("&");return g?[c,g].join("?"):c},decode:function decode(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";if(!a)return{};var b=a.split("?"),c=e(b,2),d=c[0],f=c[1],g={host:d};return f&&f.split("&").map(function(a){g.params=g.params||{};var b=a.split("="),c=e(b,2),d=c[0],f=c[1];g.params[d]=f}),g}}}(),json:function(){var a=function(a){return function(){try{var b=a.apply(void 0,arguments);if("[]"===b&&Object.keys(0>=arguments.length?void 0:arguments[0]).length)throw new Error("Serialization error");return b}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),pre:function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()}),b="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()}),d=["true","false"],e=function(c){if("string"!=typeof c)return c;var e=c.split(/\b/);return c=e.map(function(c,f){if(""!==c){var g="";return"state"===c?g="state":"actions"===c?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(c)?g="keyword":b.includes(c)?g="builtin":d.includes(c)?g="boolean":"."===e[f-1]?g="property":"."===e[f+1]&&(g="object"),g&&(c=Ta({class:g},c)),c}}),c},f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g,g=function(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a),c=a.replace("mailto:","");return Ib({class:"email",to:b},c)}return e(a)})},h=function(a,b){return[l(a.substring(0,b)),l(a.substring(b))]},i=function(a){return a.split(/(?= )/).map(function(a){return a.includes("://")?Ib({to:a},a):l(a)})},j=function(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)},k=function(a){var b=a.replace(/"/g,"'"),d=b.split("'"),f=c(d),g=f[0],h=f[1],i=f.slice(2),k=i;1===k.length?k=l(k[0]):1<k.length&&(k=l(k.join("'")));var m=[];return m="undefined"==typeof h?e(a):[e(g),Ta({class:"string"},["'",j(h),"'"]),k],m},l=function(a){var b=a.indexOf("//"),c=a.trim();if(c.startsWith("//")){for(var d=a.search(/\S|$/),e="",f=0;f<d;f++)e+=" ";return c.startsWith("// ")||(a="".concat(e,"// ").concat(c.substr(2))),Ta({class:"comment"},[e,"// ",l(c.substring(3))])}return-1<b&&":"!==a[b-1]?h(a,b):2<a.indexOf("://")?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):k(a)},m=function(a){return M({class:"line"},l(a))};return{format:function format(a){return a.trim().split("\n").map(m)}}}()},Nb={pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;return e=e.substring(1),b.state&&(d=b.state.url,e=b.state.hash),e?window.location.hash=e:window.scrollTo(0,0),l({},a,{url:d,hash:e})},go:function go(a,b){var c=b.to;c=c.replace(window.location.origin,"");var d=c.startsWith("/")||c.startsWith("#"),f=c.startsWith(a.root);d&&!f&&(c="".concat(a.root).concat(c).replace(/\/\//g,"/"));var g=c.split("#"),h=e(g,2),i=h[0],j=h[1],k=void 0===j?"":j;if(i===a.url&&k===a.hash)return a;if(window.history.pushState({url:i,hash:k},"",c),k){var m=document.getElementById(k);m&&window.scrollTo(0,m.scrollTop),window.location.hash=k}else window.scrollTo(0,0);return l({},a,{url:i,hash:k,prev:a.url})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},Ob={"/uri/":function uri(){return[fa("@magic-libraries/uri"),Ga([Ib({to:"https://magic.github.io/core"},"@magic"),"-client library:"," encode objects to uris and decode uri strings to objects"]),Kb("magic-libraries/uri"),ga({id:"installation"},"installation"),Lb("npm install --save-exact magic-libraries/uri"),ga({id:"require"},"require"),Ga("first add the client lib to the app.lib, note that we do not actually require the library."),Lb("\n// /app.js\nmodule.exports = {\n  //...other app exports\n  lib: {\n    uri: '@magic-libraries/uri',\n  },\n}"),ga({id:"usage"},"usage"),Ga("in a page/component, just use the lib.uri functions"),ha({id:"usage-encode"},"encode"),Lb("\nlib.uri.encode({\n  host: 'https://example.com',\n  params: {\n    param_1: true,\n    param_2: 'string',\n  },\n})"),Ga("returns"),Ga(Mb.uri.encode({host:"https://example.com",params:{param_1:!0,param_2:"string"}})),ha({id:"usage-decode"},"decode"),Lb("\nconst uri = 'https://example.com/?param_1=true&param_2=string'\nlib.uri.decode(uri)"),Ga("returns"),Lb(Mb.json.stringify(Mb.uri.decode("https://example.com?param_1=true&param_2=string"),null,2)),ga({id:"source"},"source"),Ga(["the source for this page is in the ",Ib({to:"https://github.com/magic-libraries/json/tree/master/example"},"example directory")," and gets built and published to github using ",Ib({to:"https://github.com/magic/core"},"@magic/core")])]},"/uri/404/":function uri404(){return W("404 - not found")}};w({init:function init(){return l({},Bb,{url:window.location.pathname})},subscriptions:function subscriptions(){return[[Cb.listenPopState,Nb.pop]]},view:function view(a){var b=Ob[a.url]?a.url:"/404/",c=Ob[b];if(a.pages){var d=a.pages[b];for(var e in d)a[e]=d[e]}return W({id:"Magic"},Hb({page:c,state:a}))},node:document.getElementById("Magic")});