(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function b(a){return o(a)||c(a)||m()}function c(a){if(Symbol.iterator in Object(a)||Object.prototype.toString.call(a)==="[object Arguments]")return Array.from(a)}function e(a,b){if(a==null)return{};var c=f(a,b);var d,e;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(e=0;e<g.length;e++)d=g[e],!(b.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d])}return c}function f(a,b){if(a==null)return{};var c={};var d=Object.keys(a);var e,f;for(f=0;f<d.length;f++)e=d[f],!(b.indexOf(e)>=0)&&(c[e]=a[e]);return c}function g(a){for(var b=1;b<arguments.length;b++){var c=arguments[b]==null?{}:arguments[b];var d=Object.keys(c);typeof Object.getOwnPropertySymbols==="function"&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){j(a,b,c[b])})}return a}function j(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a,b){return o(a)||n(a,b)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function n(a,b){var c=[];var d=!0;var e=!1;var f=undefined;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]!=null&&h["return"]()}finally{if(e)throw f}}return c}function o(a){if(Array.isArray(a))return a}function q(a){return q=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function q(a){return typeof a}:function q(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},q(a)}var r=require("hyperapp"),s=r.app,t=r.h;var h=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var d=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var e=function is(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===q(a)})};return!d&&(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),t(a,b,d)}};var k=function Page(a){return function(b,c){return Q({"class":"Wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&c.go&&window.addEventListener("popstate",c.go)}},[P,Q({"class":"Page"},a?a(b,c):"404 - not found"),O])}};var u=h("h4");var v=function Pre(a){var b=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(c,d){return Q({"class":"Pre ".concat(b||c.pre.theme)},[Q({"class":"menu"},[!b&&C({onclick:d.pre.changeTheme},c.pre.theme==="dark"?"light":"dark"),C({onclick:function onclick(){return d.pre.clip(a)}},"copy")]),B(LIB.PRE.format(a))])}};var w=h("h3");var x=function GitBadges(a){if(typeof a==="string")a={project:a};else if(!a.project)return;var b=a,c=b.project,d=c!==void 0&&c,e=b.branch,f=e===void 0?"master":e,g=b.host,h=g===void 0?"github":g;var j=[["npm",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(f)}}],["appveyor",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;if(a){var b=a.split("/"),c=l(b,2),e=c[0],g=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(g,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(g,"/").concat(f,".svg")}}}],["coveralls",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return{to:"https://coveralls.io/".concat(h,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(h,"/").concat(a,"/").concat(f,".svg")}}],["greenkeeper",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(h,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=l(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return j.length?i({"class":"GitBadges"},j.map(function(a){var b=a.to,c=a.src;return L([J({to:b},F({src:c}))])})):void 0};var y=h("h2");var z=h("code");var A=h("param");var B=h("pre");var C=h("button");var D=h("img");var E=function Menu(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"menu";return function(b){typeof a==="string"&&(a={name:a});var c=a,d=c.name,e=d===void 0?"menu":d,f=c["class"],h=f===void 0?"Menu":f,j=c.items,k=j===void 0?[]:j,l=c.collapse;var n=b.url,o=b[e],p=o===void 0?[]:o;if(k=k.length?k:p,!!k.length)return b.hash&&(n+="#".concat(b.hash)),N({"class":h},i(k.map(function(a){return E.Item(g({},a,{url:n,collapse:l===void 0||l}))})))}};E.Item=function(b){var c=b.url,d=b.text,f=b.items,h=f===void 0?[]:f,j=b.parentTo,k=j===void 0?undefined:j,l=b.collapse,m=e(b,["url","text","items","parentTo","collapse"]);return function(b){if(m.to||d){var e={"class":"MenuItem"};if(k){var p=m.to.includes("://");var q=m.to.startsWith("/");var r=!k||m.to.startsWith(k);!r&&!q&&!p&&(!k.endsWith("/")&&!m.to.startsWith("-")&&(k="".concat(k,"/")),m.to=k+m.to)}var f=m.to.startsWith(b.root)?m.to:"".concat(b.root).concat(m.to.substr(1));var j=c.startsWith(f);c===f&&(e["class"]+=" active");var o=[];return(h.length&&j||!l)&&(o=i(h.map(function(a){return E.Item(g({parentTo:m.to,url:c,collapse:l},a))}))),L(e,[m.to?J(m,d):a(m,d),o])}}};var F=function Img(a){return function(){if(typeof a==="string"&&(a={src:a}),!!a.src)return!a.alt&&(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),D(a)}};var G=h("header");var H=h("footer");var I=h("a");var a=h("span");var J=function Link(a,b){var c=a.to,d=e(a,["to"]);return function(a,f){var g=d.href,h=d.text,i=d.nofollow,j=d.noreferrer,k=d.onclick,l=e(d,["href","text","nofollow","noreferrer","onclick"]);return c=c||g||"",l.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?l.onclick=function(a){k&&k({e:a,to:c}),f.go({e:a,to:c})}:(l.target="_blank",l.rel="noopener",i&&(l.rel+=" nofollow"),j&&(l.rel+=" noreferrer")),I(l,[h,b])}};var K=h("p");var L=h("li");var p=h("text");var M=h("i");var i=h("ul");var N=h("nav");var O=function Footer(){return H({"class":"Footer"},[Q({"class":"wrapper"},["made with a few bits of ",J({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])};var P=function Header(b){return(b.logo||b.menu||b.tagline)&&G({"class":"Header"},[(b.logo||b.logotext)&&J({to:"/uri/","class":"LogoWrapper"},[b.logo&&F({"class":"Logo",src:b.logo}),b.logotext&&a({"class":"LogoText"},b.logotext)]),b.menu&&E])};var Q=h("div");var R={};(function(){R.URI={encode:function encode(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var b=a.host,c=b===void 0?"":b,d=a.params,e=d===void 0?{}:d;var f=Object.entries(e).map(function(a){var b=l(a,2),c=b[0],d=b[1];return"".concat(encodeURIComponent(c),"=").concat(encodeURIComponent(d))}).join("&");return f?[c,f].join("?"):c},decode:function decode(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";if(!a)return{};var b=a.split("?"),c=l(b,2),d=c[0],e=c[1];var f={host:d};return e&&e.split("&").map(function(a){f.params=f.params||{};var b=a.split("="),c=l(b,2),d=c[0],e=c[1];f.params[d]=e}),f}}})(),function(){var a=function tryCatch(a){return function(){try{var b=a.apply(void 0,arguments);if(b==="[]"&&Object.keys(arguments.length<=0?undefined:arguments[0]).length)throw new Error("Serialization error");return b}catch(a){return a}}};R.JSON={parse:a(JSON.parse),stringify:a(JSON.stringify)}}(),function(){var c="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final export throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()});var d="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()});var e=["true","false"];var f=function wrapWords(b){if(typeof b!=="string")return b;var f=b.split(/\b/);return b=f.map(function(b,g){if(b!==""){var h="";return b==="state"?h="state":b==="actions"?h="actions":f[g+1]&&f[g+1].includes(":")?h="colon":c.includes(b)?h="keyword":d.includes(b)?h="builtin":e.includes(b)?h="boolean":f[g-1]==="."?h="property":f[g+1]==="."&&(h="object"),h&&(b=a({"class":h},b)),b}}),b};var g=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g;var h=function wrapEmails(a){return a.split(g).map(function(a){if(g.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a);var c=a.replace("mailto:","");return J({"class":"email",to:b},c)}return f(a)})};var i=function wrapComments(a,b){return[m(a.substring(0,b)),m(a.substring(b))]};var j=function wrapLinks(a){return a.split(/(?= )/).map(function(a){return a.includes("://")?J({to:a},a):m(a)})};var k=function wrapUrls(a){return a.includes("://")&&!a.includes("@")?j(a):h(a)};var l=function wrapStrings(c){var d=c.replace(/"/g,"'");var e=d.split("'"),g=b(e),h=g[0],i=g[1],j=g.slice(2);var l=j;l.length===1?l=m(l[0]):l.length>1&&(l=m(l.join("'")));var n=[];return n=typeof i==="undefined"?f(c):[f(h),a({"class":"string"},["'",k(i),"'"]),l],n};var m=function wordsByLine(b){var c=b.indexOf("//");var d=b.trim();if(d.startsWith("//")){var e=b.search(/\S|$/);var f="";for(var g=0;g<e;g++)f+=" ";return!d.startsWith("// ")&&(b="".concat(f,"// ").concat(d.substr(2))),a({"class":"comment"},[f,"// ",m(d.substring(3))])}return c>-1&&b[c-1]!==":"?i(b,c):b.indexOf("://")>2?j(b):b.indexOf("@")&&b.includes(".")&&!b.trim().includes(" ")?h(b):l(b)};var n=function wrapLine(a){return z({"class":"line"},m(a))};R.PRE={keywords:c,builtins:d,format:function format(a){return a.trim().split("\n").map(n)},wordsByLine:m,wrapWords:f}}(),window.LIB=R;var S={"/uri/":function uri(){return[y("@magic-libraries/uri"),K([J({to:"https://magic.github.io/core"},"@magic"),"-client library:"," encode objects to uris and decode uri strings to objects"]),x("magic-libraries/uri"),w({id:"installation"},"installation"),v("npm install --save-exact magic-libraries/uri"),w({id:"require"},"require"),K("first add the client lib to the app.lib, note that we do not actually require the library."),v("\n// /app.js\nmodule.exports = {\n  //...other app exports\n  lib: {\n    URI: '@magic-libraries/uri',\n  },\n}"),w({id:"usage"},"usage"),K("in a page/component, just use the LIB.URI functions"),u({id:"usage-encode"},"encode"),v("\nLIB.URI.encode({\n  host: 'https://example.com',\n  params: {\n    param_1: true,\n    param_2: 'string',\n  },\n})"),K("returns"),K(LIB.URI.encode({host:"https://example.com",params:{param_1:!0,param_2:"string"}})),u({id:"usage-decode"},"decode"),v("\nconst uri = 'https://example.com/?param_1=true&param_2=string'\nLIB.URI.decode(uri)"),K("returns"),v(LIB.JSON.stringify(LIB.URI.decode("https://example.com?param_1=true&param_2=string"),null,2)),w({id:"source"},"source"),K(["the source for this page is in the ",J({to:"https://github.com/magic-libraries/json/tree/master/example"},"example directory")," and gets built and published to github using ",J({to:"https://github.com/magic/core"},"@magic/core")])]},"/uri/404/":function uri404(){return Q("404 - not found")}};var T={"url":"/uri/","root":"/uri/","title":"@magic-libraries/uri","description":"@magic-libraries/uri encodes objects to uri strings and uri strings to objects.",logo:"/uri/logo.png","logotext":"uri","menu":[{to:"/uri/#installation","text":"installation"},{to:"/uri/#require","text":"require"},{to:"/uri/#usage","text":"usage","items":[{to:"/uri/#usage-encode","text":"URI.encode"},{to:"/uri/#usage-decode","text":"URI.decode"}]},{to:"/uri/#source","text":"source"}],"pre":{"theme":"light"}};T.url=window.location.pathname,T.root="/uri/";var U={"go":function go(a){return function(b){if(typeof window==="undefined"||!window.history)return!0;var c=a.to;var d=a.e?a.e:a;d.preventDefault();var e=b.url;var f=e.split("#"),g=l(f,2),h=g[0],i=g[1],j=i===void 0?"":i;if(c){e=c.replace(window.location.origin,"");var k=e.split("#"),m=l(k,2),n=m[0],o=m[1],p=o===void 0?"":o;h=n,j=p&&p!=="/"?p:"";var q=b.hash?"#".concat(b.hash):window.location.hash;var r=b.url+q;(e!==r||j!==q)&&(window.history&&window.history.pushState({uri:h},"",e),!j&&window.scrollTo(0,0))}else h=d.state?d.state.uri:"/";if(window.location&&j){var s=document.getElementById(j);if(s){var t=s.offsetTop;window.scrollTo(0,t),window.location.hash=j}}return{url:h,hash:j,prev:b.url}}},"pre":{"changeTheme":function changeTheme(){return function(a){return{theme:a.theme==="dark"?"light":"dark"}}},"clip":function clip(a){if(typeof document!=="undefined"&&typeof document.execCommand==="function"){var b=document.createElement("textarea");b.id="copy",b.innerHTML=a,document.body.appendChild(b);var c=document.getElementById("copy");c.select(),document.execCommand("copy"),document.body.removeChild(c)}}}};var V=function view(a,b){var c=S[a.url]?a.url:"/404/";var d=S[c];if(a.pages){var e=a.pages[c];for(var f in e)a[f]=e[f]}if(b.pages){var g=b.pages[c];for(var h in g)b[h]=g[h]}return k(d)(a,b)};var W=document;var d=W.getElementById("Magic");!d&&(d=W.createElement("div"),d.id="magic",W.body.appendChild(d)),s(T,U,V,d);
},{"hyperapp":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var l=t.pop();if(l&&l.pop)for(o=l.length;o--;)t.push(l[o]);else null!=l&&!0!==l&&!1!==l&&r.push(l)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,l=[].map,u=r&&r.children[0]||null,i=u&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:l.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(u),f=[],m=!0,a=v(e),c=function e(r,o,l){for(var n in l)"function"==typeof l[n]?function(e,t){l[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(h(r,a),l)),n&&n!==(o=h(r,a))&&!n.then&&d(a=p(r,v(o,n),a)),n}}(n,l[n]):e(r.concat(n),o[n]=v(o[n]),l[n]=v(l[n]));return l}([],a,v(n));return d(),c;function g(e){return"function"==typeof e?g(e(a,c)):null!=e?e:""}function s(){o=!o;var e=g(t);for(r&&!o&&(u=function e(n,t,r,o,l){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=k(o,l);n.insertBefore(u,t),null!=r&&T(n,t,r),t=u}else if(null==r.nodeName)t.nodeValue=o;else{x(t,r.attributes,o.attributes,l=l||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=N(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,p=0;p<s.length;){var v=N(c[d]),h=N(s[p]=g(s[p]));if(f[v])d++;else if(null==h||h!==N(c[d+1]))if(null==h||m)null==v&&(e(t,a[d],c[d],s[p],l),p++),d++;else{var y=i[h]||[];v===h?(e(t,y[0],y[1],s[p],l),d++):y[0]?e(t,t.insertBefore(y[0],a[d]),y[1],s[p],l):e(t,a[d],null,s[p],l),f[h]=s[p],p++}else null==v&&T(t,a[d],c[d]),d++}for(;d<c.length;)null==N(c[d])&&T(t,a[d],c[d]),d++;for(var d in i)f[d]||T(t,i[d][0],i[d][1])}return t}(r,u,i,i=e)),m=!1;f.length;)f.pop()()}function d(){o||(o=!0,setTimeout(s))}function v(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function p(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?p(e.slice(1),n,t[e[0]]):n,v(t,r)):n}function h(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function N(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var l in"string"==typeof r&&(r=e.style.cssText=""),v(r,t)){var u=null==t||null==t[l]?"":t[l];"-"===l[0]?e.style.setProperty(l,u):e.style[l]=u}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&f.push(function(){r.oncreate(t)});for(var o=0;o<e.children.length;o++)t.appendChild(k(e.children[o]=g(e.children[o]),n));for(var l in r)b(t,l,r[l],null,n)}return t}function x(e,n,t,r){for(var o in v(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var l=m?t.oncreate:t.onupdate;l&&f.push(function(){l(e,n)})}function T(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});

},{}]},{},[1]);