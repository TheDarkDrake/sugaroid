(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var i=n(2),a=n(6),r=(n(0),n(144)),o={id:"installation",title:"Pre-requisities"},l={id:"installation",isDocsHomePage:!1,title:"Pre-requisities",description:"Sugaroid is built to be a multiplatform artificial intelligence. There are many ways of installing Sugaroid. the mode of installation depends on the tech stack and developer system. The common installation system has been described below. Sugaroid requires Python 3.6+ to work satisfactorily on a user system. Work on AppImages and pre-built Windows binaries are still under process, as the size of the binaries so built increases tremendously, upto (0.5 GB), which becomes quite difficult to maintain and test. All developers who are interested can submit Pull Requested to the code base.",source:"@site/docs/installation.md",permalink:"/docs/installation",editUrl:"https://github.com/srevinsaju/sugaroid/docs/installation.md",lastUpdatedAt:1595179217,sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Installing from PyPI",permalink:"/docs/installation-pypi"}},s=[{value:"Installing Python",id:"installing-python",children:[]},{value:"Installing Sugaroid",id:"installing-sugaroid",children:[]}],c={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Sugaroid is built to be a multiplatform artificial intelligence. There are many ways of installing Sugaroid. the mode of installation depends on the tech stack and developer system. The common installation system has been described below. Sugaroid requires Python 3.6+ to work satisfactorily on a user system. Work on AppImages and pre-built Windows binaries are still under process, as the size of the binaries so built increases tremendously, upto (0.5 GB), which becomes quite difficult to maintain and test. All developers who are interested can submit Pull Requested to the code base. "),Object(r.b)("h3",{id:"installing-python"},"Installing Python"),Object(r.b)("h4",{id:"on-windows"},"On Windows"),Object(r.b)("p",null,"Download Python 3.8.2 from ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://python.org"}),"The Python Software Foundation Website (PSF)")," to find a compatible Python x64 based binary. Python x86 might not be fully supported, as it might have a lot of bugs with internal dependencies (",Object(r.b)("inlineCode",{parentName:"p"},"spacy"),", natural language processing libraries)."),Object(r.b)("h4",{id:"on-linux-and-macos"},"On Linux and macOS"),Object(r.b)("p",null,"Depend on the respective package distribution, e.g (",Object(r.b)("inlineCode",{parentName:"p"},"apt"),", ",Object(r.b)("inlineCode",{parentName:"p"},"dnf"),", ",Object(r.b)("inlineCode",{parentName:"p"},"pacman"),", etc.) and for macOS, preferably use ",Object(r.b)("inlineCode",{parentName:"p"},"homebrew.sh")," to install Python3, and make sure you have ",Object(r.b)("inlineCode",{parentName:"p"},"xcode")," installed (macOS only), so that some of the errors can be avoided. Let me know if you have any luck installing Sugaroid on macOS without ",Object(r.b)("inlineCode",{parentName:"p"},"xcode")),Object(r.b)("h3",{id:"installing-sugaroid"},"Installing Sugaroid"),Object(r.b)("p",null,"Sugaroid can be installed in two ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Officially released, stable PyPI packages"),Object(r.b)("li",{parentName:"ul"},"Bleeding edge source build (directly from codebase (git))")))}u.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=i,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||r;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);