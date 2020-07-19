(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(9),r=(n(0),n(164)),o={id:"installation-pypi",title:"Installing from PyPI"},l={id:"installation-pypi",isDocsHomePage:!1,title:"Installing from PyPI",description:"Installation from PyPI is the easiest method of installation for a normal user. PyPI is the Python Packaging Index, and is a collection of python modules or python based software, which can be installed by using pip or pip3, or any other pip* based python package management software like poetry, pipx etc.",source:"@site/docs/installation-pypi.md",permalink:"/sugaroid/docs/installation-pypi",editUrl:"https://github.com/srevinsaju/sugaroid/docs/installation-pypi.md",lastUpdatedAt:1595179217,sidebar:"docs",previous:{title:"Pre-requisities",permalink:"/sugaroid/docs/installation"},next:{title:"Getting Sugaroid to run",permalink:"/sugaroid/docs/running"}},s=[{value:"System-wide installation",id:"system-wide-installation",children:[]},{value:"Virtual Environments",id:"virtual-environments",children:[{value:"Windows",id:"windows",children:[]},{value:"Linux / macOS",id:"linux--macos",children:[]}]}],c={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Installation from PyPI is the easiest method of installation for a normal user. PyPI is the Python Packaging Index, and is a collection of python modules or python based software, which can be installed by using ",Object(r.b)("inlineCode",{parentName:"p"},"pip")," or ",Object(r.b)("inlineCode",{parentName:"p"},"pip3"),", or any other ",Object(r.b)("inlineCode",{parentName:"p"},"pip*")," based python package management software like ",Object(r.b)("inlineCode",{parentName:"p"},"poetry"),", ",Object(r.b)("inlineCode",{parentName:"p"},"pipx")," etc. "),Object(r.b)("h2",{id:"system-wide-installation"},"System-wide installation"),Object(r.b)("p",null,"Sugaroid can be installed system wide. System-wide implies that Sugaroid can be invoked from almost all command line interfaces and desktop shortcuts directly. But this has caveats. Watch them out. Described below"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pip3 install sugaroid\n")),Object(r.b)("p",null,"If you come across a Permission Error, you might like to upgrade your ",Object(r.b)("inlineCode",{parentName:"p"},"pip")," to the latest version or use"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pip3 install sugaroid --user\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"NOTE"),": On Windows, it is likely that ",Object(r.b)("inlineCode",{parentName:"p"},"pip3")," does not exist. In those cases, consider using ",Object(r.b)("inlineCode",{parentName:"p"},"pip")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"pip3")," but make sure you are having a functional ",Object(r.b)("inlineCode",{parentName:"p"},"python3.6+")," installation. ")),Object(r.b)("h2",{id:"virtual-environments"},"Virtual Environments"),Object(r.b)("p",null,"Virtual Environments solve the problem of package conflicts and installation problems, but these require some extra modules and some more skill. There exists many tools to automate the virtual environment creation process, but the most basic method includes installing ",Object(r.b)("inlineCode",{parentName:"p"},"virtualenv")," (if you do not have it installed already)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pip3 install virtualenv\nvirtualenv venv\n")),Object(r.b)("p",null,"The above commands will automatically create a virtual environment. To invoke the virtual environment varies from OS to OS. "),Object(r.b)("h3",{id:"windows"},"Windows"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"call venv/bin/activate\n")),Object(r.b)("h3",{id:"linux--macos"},"Linux / macOS"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"source venv/bin/activate\n")),Object(r.b)("p",null,"You will notice a ",Object(r.b)("inlineCode",{parentName:"p"},"(venv)")," in the prompt if you are successful. In the case of using ",Object(r.b)("inlineCode",{parentName:"p"},"zsh")," its likely to be not visible"),Object(r.b)("p",null,"Now Install Sugaroid"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"pip3 install sugaroid\n")),Object(r.b)("p",null,"This will install ",Object(r.b)("em",{parentName:"p"},"sugaroid")," to ",Object(r.b)("inlineCode",{parentName:"p"},"virtualenv")))}p.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);