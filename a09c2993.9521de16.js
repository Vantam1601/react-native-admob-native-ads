(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(98)),i={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"If you are working on a React Native Application, you might feel limited when it comes to displaying ads that look beautiful and match your app's look and feel. Usually when you show ads in your app, they are loaded inside a WebView and that is why you cannot modify them except changing the width and height in some cases.",source:"@site/docs/introduction.md",slug:"/introduction",permalink:"/react-native-admob-native-ads/docs/introduction",editUrl:"https://github.com/ammarahm-ed/react-native-admob-native-ads/edit/master/docs/docs/introduction.md",version:"current",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Usage examples",permalink:"/react-native-admob-native-ads/docs/examples-2"}},s=[{value:"How is this library different?",id:"how-is-this-library-different",children:[]},{value:"Can I design the ads myself?",id:"can-i-design-the-ads-myself",children:[]},{value:"Features",id:"features",children:[]},{value:"Benefits",id:"benefits",children:[]},{value:"How can I support the project?",id:"how-can-i-support-the-project",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you are working on a React Native Application, you might feel limited when it comes to displaying ads that look beautiful and match your app's look and feel. Usually when you show ads in your app, they are loaded inside a ",Object(o.b)("inlineCode",{parentName:"p"},"WebView")," and that is why you cannot modify them except changing the width and height in some cases."),Object(o.b)("h2",{id:"how-is-this-library-different"},"How is this library different?"),Object(o.b)("p",null,"We on the other hand do not load ads in a ",Object(o.b)("inlineCode",{parentName:"p"},"WebView"),". We use a more complex, ",Object(o.b)("a",{parentName:"p",href:"https://developers.google.com/admob/android/native/start"},"Native Advanced")," ad format to display ads. We request Admob servers to send us the ad information such as images, headlines, videos etc. Then we send this information over the bridge to React Native and render it in React Native's ",Object(o.b)("inlineCode",{parentName:"p"},"View")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Text")," components execpt a few exceptions where we use our own custom components."),Object(o.b)("h2",{id:"can-i-design-the-ads-myself"},"Can I design the ads myself?"),Object(o.b)("p",null,"Yes absolutely you can! There are no limiations. You can design ads that look just like your App's design and colors."),Object(o.b)("h2",{id:"features"},"Features"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://developers.google.com/admob/android/native/start"},"Admob Native Advanced Ads")," format"),Object(o.b)("li",{parentName:"ol"},"Cross Platform (iOS and Android)"),Object(o.b)("li",{parentName:"ol"},"Identical Working on both platforms"),Object(o.b)("li",{parentName:"ol"},"You can create your ads from ground up as you desire, ",Object(o.b)("strong",{parentName:"li"},"no limits.")),Object(o.b)("li",{parentName:"ol"},"No need to manage any .xml or .xib layout files!"),Object(o.b)("li",{parentName:"ol"},"AutoRefresh ad at specific intervals"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Support for Video Ads")),Object(o.b)("li",{parentName:"ol"},"Ad Mediation (Especially Facebook Ads)"),Object(o.b)("li",{parentName:"ol"},"Ad Targeting"),Object(o.b)("li",{parentName:"ol"},"Typescript definations")),Object(o.b)("h2",{id:"benefits"},"Benefits"),Object(o.b)("p",null,"Ads that look just like your App's design will result in better conversions and revenue for you as compared to other ad formats which look out of place and interrupt the user experience."),Object(o.b)("h2",{id:"how-can-i-support-the-project"},"How can I support the project?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It costs me alot of time to keep the library updated and address all the bugs & issues. If this library has helped you ",Object(o.b)("a",{parentName:"li",href:"https://ko-fi.com/ammarahmed"},"buy me a coffee"),"."),Object(o.b)("li",{parentName:"ul"},"Add a \u2b50\ufe0f ",Object(o.b)("a",{parentName:"li",href:"https://github.com/ammarahm-ed/react-native-admob-native-ads"},"star on GitHub")," to support the project!"),Object(o.b)("li",{parentName:"ul"},"Create a GitHub issue for bug reports, feature requests, or questions"),Object(o.b)("li",{parentName:"ul"},"Follow ",Object(o.b)("a",{parentName:"li",href:"https://github.com/ammarahm-ed"},"@ammarahm-ed")," for announcements")))}d.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);