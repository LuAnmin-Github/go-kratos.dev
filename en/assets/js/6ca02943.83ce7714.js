"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return f}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(o),f=n,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||i;return o?r.createElement(m,a(a({ref:t},d),{},{components:o})):r.createElement(m,a({ref:t},d))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5061:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=o(7462),n=o(3366),i=(o(7294),o(3905)),a=["components"],l={id:"faq",title:"FAQ",description:"Kratos FAQ",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},s=void 0,p={unversionedId:"intro/faq",id:"intro/faq",title:"FAQ",description:"Kratos FAQ",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/intro/03-faq.md",sourceDirName:"intro",slug:"/intro/faq",permalink:"/en/docs/intro/faq",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/intro/03-faq.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"faq",title:"FAQ",description:"Kratos FAQ",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Design",permalink:"/en/docs/intro/design"},next:{title:"Layout",permalink:"/en/docs/intro/layout"}},d={},c=[{value:"1. <code>google/protobuf/descriptor.proto: File not found.</code> error while using <code>kratos proto</code> command.",id:"1-googleprotobufdescriptorproto-file-not-found-error-while-using-kratos-proto-command",level:3},{value:"2. There are errors from IDE show <code>import &quot;google/api/annotations.proto&quot;;</code> with red wavy line",id:"2-there-are-errors-from-ide-show-import-googleapiannotationsproto-with-red-wavy-line",level:3},{value:"3. Develop with goland",id:"3-develop-with-goland",level:3},{value:"4. The code newly generated after the new release is unavailable, with system alarming errors.",id:"4-the-code-newly-generated-after-the-new-release-is-unavailable-with-system-alarming-errors",level:3},{value:"5. After invoke <code>kratos client</code>, there are no deserved http file.",id:"5-after-invoke-kratos-client-there-are-no-deserved-http-file",level:3},{value:"6. It show <code>Command not found: kratos</code> after installed Kratos",id:"6-it-show-command-not-found-kratos-after-installed-kratos",level:3},{value:"7. It show some proto file not found when generate pb file.",id:"7-it-show-some-proto-file-not-found-when-generate-pb-file",level:3},{value:"8.There are  <code>// no validation rules for xxxx</code> for configurated property.",id:"8there-are---no-validation-rules-for-xxxx-for-configurated-property",level:3},{value:"9. Custom Http return value",id:"9-custom-http-return-value",level:3}],u={toc:c};function f(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"1-googleprotobufdescriptorproto-file-not-found-error-while-using-kratos-proto-command"},"1. ",(0,i.kt)("inlineCode",{parentName:"h3"},"google/protobuf/descriptor.proto: File not found.")," error while using ",(0,i.kt)("inlineCode",{parentName:"h3"},"kratos proto")," command."),(0,i.kt)("p",null,"This issue is mainly caused by the improperly installation of protoc. The documentation ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/docs/protoc-installation/"},"protoc-installation")," shows the correct way to install protoc. It is highly recommended that install protoc by system package manager to ensure the installation's integrity. If you have to install the pre-compiled version, please refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"readme.txt")," in the zip file, make sure all the files under ",(0,i.kt)("inlineCode",{parentName:"p"},"include")," folder could be put to correct include path of your system, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/include/"),", so that protoc can find them while compiling."),(0,i.kt)("h3",{id:"2-there-are-errors-from-ide-show-import-googleapiannotationsproto-with-red-wavy-line"},"2. There are errors from IDE show ",(0,i.kt)("inlineCode",{parentName:"h3"},'import "google/api/annotations.proto";')," with red wavy line"),(0,i.kt)("p",null,"You can append ",(0,i.kt)("inlineCode",{parentName:"p"},"thrid_party")," directory to custom protobuf`s include paths. Please follow these doc:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ksprojects/protobuf-jetbrains-plugin#configuration"},"GoLand")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zxh0/vscode-proto3#extension-settings"},"VSCode"))),(0,i.kt)("h3",{id:"3-develop-with-goland"},"3. Develop with goland"),(0,i.kt)("p",null,"All you need to do is configurate some setting like this:"),(0,i.kt)("img",{src:"/images/goland.png",width:"650px"}),(0,i.kt)("h3",{id:"4-the-code-newly-generated-after-the-new-release-is-unavailable-with-system-alarming-errors"},"4. The code newly generated after the new release is unavailable, with system alarming errors."),(0,i.kt)("p",null,"You can try to follow this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"kratos upgrade"),(0,i.kt)("li",{parentName:"ol"},"Modify the version of kratos in ",(0,i.kt)("inlineCode",{parentName:"li"},"go.mod")," file"),(0,i.kt)("li",{parentName:"ol"},"go generate ./...")),(0,i.kt)("h3",{id:"5-after-invoke-kratos-client-there-are-no-deserved-http-file"},"5. After invoke ",(0,i.kt)("inlineCode",{parentName:"h3"},"kratos client"),", there are no deserved http file."),(0,i.kt)("p",null,"You can run ",(0,i.kt)("inlineCode",{parentName:"p"},"make http")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"kratos client xxx --go-http_opt=omitempty=false")),(0,i.kt)("h3",{id:"6-it-show-command-not-found-kratos-after-installed-kratos"},"6. It show ",(0,i.kt)("inlineCode",{parentName:"h3"},"Command not found: kratos")," after installed Kratos"),(0,i.kt)("p",null,"Make sure the env value ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," contain ",(0,i.kt)("inlineCode",{parentName:"p"},"GOBIN")," directory. Or you can invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"kratos")," inside ",(0,i.kt)("inlineCode",{parentName:"p"},"GOBIN")," directory."),(0,i.kt)("h3",{id:"7-it-show-some-proto-file-not-found-when-generate-pb-file"},"7. It show some proto file not found when generate pb file."),(0,i.kt)("p",null,"Copy the missing proto file to ",(0,i.kt)("inlineCode",{parentName:"p"},"third_party")," directory. Or append missing proto file location to corresponding Makefile command."),(0,i.kt)("h3",{id:"8there-are---no-validation-rules-for-xxxx-for-configurated-property"},"8.There are  ",(0,i.kt)("inlineCode",{parentName:"h3"},"// no validation rules for xxxx")," for configurated property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone github.com/envoyproxy/protoc-gen-validate\ncd protoc-gen-validate\nmake build\n")),(0,i.kt)("h3",{id:"9-custom-http-return-value"},"9. Custom Http return value"),(0,i.kt)("p",null,"You can write a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"ResponseEncoder")," and set to ",(0,i.kt)("inlineCode",{parentName:"p"},"http.Server()")," by using ",(0,i.kt)("inlineCode",{parentName:"p"},"http.ResponseEncoder()")))}f.isMDXComponent=!0}}]);