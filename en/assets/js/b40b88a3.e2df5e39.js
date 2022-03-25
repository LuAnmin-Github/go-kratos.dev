"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8529],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=u(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,l(l({ref:e},c),{},{components:n})):r.createElement(g,l({ref:e},c))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9022:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={id:"start",title:"Quick Start"},s=void 0,u={unversionedId:"getting-started/start",id:"getting-started/start",title:"Quick Start",description:"Version",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/getting-started/01-start.md",sourceDirName:"getting-started",slug:"/getting-started/start",permalink:"/en/docs/getting-started/start",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/getting-started/01-start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"start",title:"Quick Start"},sidebar:"docs",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/en/docs/category/\u5feb\u901f\u5f00\u59cb"},next:{title:"Usage",permalink:"/en/docs/getting-started/usage"}},c={},p=[{value:"Version",id:"version",level:2},{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Install Kratos tool",id:"install-kratos-tool",level:2},{value:"1. go install installation",id:"1-go-install-installation",level:4},{value:"2. Source code compilation and installation",id:"2-source-code-compilation-and-installation",level:4},{value:"Project Creation",id:"project-creation",level:2},{value:"Compilation and Running",id:"compilation-and-running",level:2},{value:"Try it out",id:"try-it-out",level:2},{value:"Project Layout",id:"project-layout",level:2}],d={toc:p};function m(t){var e=t.components,n=(0,o.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"version"},"Version"),(0,a.kt)("p",null,"The version of kratos must be v2.0.0 or above."),(0,a.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,a.kt)("p",null,"These environments and tools must be installed properly."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"go")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/protocolbuffers/protobuf"},"protoc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/protocolbuffers/protobuf-go"},"protoc-gen-go"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"GO111MODULE")," should be enabled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go env -w GO111MODULE=on\n")),(0,a.kt)("p",null,"If you faced with network problem (especially you are in China Mainland), please ",(0,a.kt)("a",{parentName:"p",href:"https://goproxy.cn/"},"setup GOPROXY")),(0,a.kt)("h2",{id:"install-kratos-tool"},"Install Kratos tool"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can do it either way.")),(0,a.kt)("h4",{id:"1-go-install-installation"},"1. go install installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/go-kratos/kratos/cmd/kratos/v2\n")),(0,a.kt)("h4",{id:"2-source-code-compilation-and-installation"},"2. Source code compilation and installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/go-kratos/kratos\ncd kratos\nmake install\n")),(0,a.kt)("h2",{id:"project-creation"},"Project Creation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# create project's layout\nkratos new helloworld\n\ncd helloworld\n# pull dependencies\ngo mod download\n")),(0,a.kt)("h2",{id:"compilation-and-running"},"Compilation and Running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# generate all codes of proto and wire etc.\ngo generate ./...\n\n# run the application\nkratos run\n")),(0,a.kt)("h2",{id:"try-it-out"},"Try it out"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl \'http://127.0.0.1:8000/helloworld/kratos\'\n\nThe response should be\n{\n  "message": "Hello kratos"\n}\n')),(0,a.kt)("h2",{id:"project-layout"},"Project Layout"),(0,a.kt)("p",null,"Kratos CLI always pull the layout project from GitHub for project creation. The layout project is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos-layout"},"Kratos Layout"))))}m.isMDXComponent=!0}}]);