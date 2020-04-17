(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{108:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return u}));var a=t(1),l=t(6),c=(t(0),t(126)),r=t(128),i={id:"columns",title:"Columns"},o={id:"columns",title:"Columns",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/columns.mdx",permalink:"/stacks/docs/columns",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/columns.mdx",sidebar:"someSidebar",previous:{title:"Stack",permalink:"/stacks/docs/stack"},next:{title:"Column",permalink:"/stacks/docs/column"}},b=[{value:"<code>space</code>",id:"space",children:[]},{value:"<code>alignY</code>",id:"aligny",children:[]},{value:"<code>alignX</code>",id:"alignx",children:[]},{value:"<code>reverse</code>",id:"reverse",children:[]},{value:"<code>testID</code>",id:"testid",children:[]},{value:"<code>style</code>",id:"style",children:[]}],m={rightToc:b};function u(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"use ",Object(c.b)("inlineCode",{parentName:"li"},"Columns")," and ",Object(c.b)("inlineCode",{parentName:"li"},"Column")," to lay out content horizontally"),Object(c.b)("li",{parentName:"ul"},"customise the width of each column individually (all columns are of equal width by default)"),Object(c.b)("li",{parentName:"ul"},"set column width to ",Object(c.b)("inlineCode",{parentName:"li"},"content")," to ensure that it's only as wide as the content within it"),Object(c.b)("li",{parentName:"ul"},"you can align columns vertically with the ",Object(c.b)("inlineCode",{parentName:"li"},"alignY")," prop"),Object(c.b)("li",{parentName:"ul"},"you can align columns horizontally with the ",Object(c.b)("inlineCode",{parentName:"li"},"alignX")," prop"),Object(c.b)("li",{parentName:"ul"},"multiple ",Object(c.b)("inlineCode",{parentName:"li"},"Columns")," components can be nested to create more complex white space rules")),Object(c.b)("h3",{id:"space"},Object(c.b)("inlineCode",{parentName:"h3"},"space")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"type: ",Object(c.b)("inlineCode",{parentName:"li"},"number")),Object(c.b)("li",{parentName:"ul"},"required: ",Object(c.b)("inlineCode",{parentName:"li"},"no")),Object(c.b)("li",{parentName:"ul"},"default: ",Object(c.b)("inlineCode",{parentName:"li"},"0"))),Object(c.b)("div",{className:"doc-example"},Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<Columns space={1}>\n  <Column>\n    <Placeholder />\n  </Column>\n  <Column>\n    <Placeholder />\n  </Column>\n  <Column>\n    <Placeholder />\n  </Column>\n</Columns>\n")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"doc-example__image"}),"  ",Object(c.b)("img",{src:Object(r.a)("img/columns-space-1.png")}))),Object(c.b)("div",{className:"doc-example"},Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'<Columns space={4}>\n  <Column width="content">\n    <Placeholder width={60} />\n  </Column>\n  <Column>\n    <Placeholder />\n  </Column>\n  <Column width="content">\n    <Placeholder width={60} />\n  </Column>\n</Columns>\n')),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"doc-example__image"}),"  ",Object(c.b)("img",{src:Object(r.a)("img/columns-space-2.png")}))),Object(c.b)("div",{className:"doc-example"},Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<Columns space={4}>\n  <Column>\n    <Columns space={1}>\n      <Column>\n        <Placeholder />\n      </Column>\n      <Column>\n        <Placeholder />\n      </Column>\n    </Columns>\n  </Column>\n  <Column>\n    <Placeholder />\n  </Column>\n</Columns>\n")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"doc-example__image"}),"  ",Object(c.b)("img",{src:Object(r.a)("img/columns-space-3.png")}))),Object(c.b)("h3",{id:"aligny"},Object(c.b)("inlineCode",{parentName:"h3"},"alignY")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"type: ",Object(c.b)("inlineCode",{parentName:"li"},"'top' | 'center' | 'bottom' | 'stretch'")),Object(c.b)("li",{parentName:"ul"},"required: ",Object(c.b)("inlineCode",{parentName:"li"},"no")),Object(c.b)("li",{parentName:"ul"},"default: ",Object(c.b)("inlineCode",{parentName:"li"},"stretch"))),Object(c.b)("div",{className:"doc-example"},Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'<Columns space={1} alignY="center">\n  <Column>\n    <Placeholder height={180} />\n  </Column>\n  <Column>\n    <Placeholder height={240} />\n  </Column>\n  <Column>\n    <Placeholder height={120} />\n  </Column>\n</Columns>\n')),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"doc-example__image"}),"  ",Object(c.b)("img",{src:Object(r.a)("img/columns-aligny-1.png")}))),Object(c.b)("div",{className:"doc-example"},Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'<Columns space={1} alignY="bottom">\n  <Column>\n    <Placeholder height={180} />\n  </Column>\n  <Column>\n    <Placeholder height={240} />\n  </Column>\n  <Column>\n    <Placeholder height={120} />\n  </Column>\n</Columns>\n')),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"doc-example__image"}),"  ",Object(c.b)("img",{src:Object(r.a)("img/columns-aligny-2.png")}))),Object(c.b)("h3",{id:"alignx"},Object(c.b)("inlineCode",{parentName:"h3"},"alignX")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"type: ",Object(c.b)("inlineCode",{parentName:"li"},"'left' | 'center' | 'right' | 'between' | 'around' | 'evenly'")),Object(c.b)("li",{parentName:"ul"},"required: ",Object(c.b)("inlineCode",{parentName:"li"},"no")),Object(c.b)("li",{parentName:"ul"},"default: ",Object(c.b)("inlineCode",{parentName:"li"},"left"))),Object(c.b)("div",{className:"doc-example"},Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'<Columns space={1} alignX="center">\n  <Column width="content">\n    <Placeholder width={80} />\n  </Column>\n  <Column width="content">\n    <Placeholder width={120} />\n  </Column>\n  <Column width="content">\n    <Placeholder width={80} />\n  </Column>\n</Columns>\n')),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"doc-example__image"}),"  ",Object(c.b)("img",{src:Object(r.a)("img/columns-alignx-1.png")}))),Object(c.b)("div",{className:"doc-example"},Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'<Columns alignX="around">\n  <Column width="1/5">\n    <Placeholder />\n  </Column>\n  <Column width="1/3">\n    <Placeholder />\n  </Column>\n  <Column width="1/5">\n    <Placeholder />\n  </Column>\n</Columns>\n')),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"doc-example__image"}),"  ",Object(c.b)("img",{src:Object(r.a)("img/columns-alignx-2.png")}))),Object(c.b)("h3",{id:"reverse"},Object(c.b)("inlineCode",{parentName:"h3"},"reverse")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"type: ",Object(c.b)("inlineCode",{parentName:"li"},"boolean")),Object(c.b)("li",{parentName:"ul"},"required: ",Object(c.b)("inlineCode",{parentName:"li"},"no")),Object(c.b)("li",{parentName:"ul"},"default: ",Object(c.b)("inlineCode",{parentName:"li"},"false"))),Object(c.b)("h3",{id:"testid"},Object(c.b)("inlineCode",{parentName:"h3"},"testID")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"type: ",Object(c.b)("inlineCode",{parentName:"li"},"string")),Object(c.b)("li",{parentName:"ul"},"required: ",Object(c.b)("inlineCode",{parentName:"li"},"no"))),Object(c.b)("h3",{id:"style"},Object(c.b)("inlineCode",{parentName:"h3"},"style")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"type: ",Object(c.b)("inlineCode",{parentName:"li"},"StyleProp<ViewStyle>")),Object(c.b)("li",{parentName:"ul"},"required: ",Object(c.b)("inlineCode",{parentName:"li"},"no"))))}u.isMDXComponent=!0},126:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return p}));var a=t(0),l=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var b=l.a.createContext({}),m=function(e){var n=l.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},u=function(e){var n=m(e.components);return l.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},d=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=m(t),d=a,p=u["".concat(r,".").concat(d)]||u[d]||s[d]||c;return t?l.a.createElement(p,i({ref:n},b,{components:t})):l.a.createElement(p,i({ref:n},b))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,r=new Array(c);r[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var b=2;b<c;b++)r[b]=t[b];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},127:function(e,n,t){"use strict";var a=t(0),l=t(35);n.a=function(){return Object(a.useContext)(l.a)}},128:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t(127);function l(e){const{siteConfig:n}=Object(a.a)(),{baseUrl:t="/"}=n||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?t+e.slice(1):t+e}}}]);