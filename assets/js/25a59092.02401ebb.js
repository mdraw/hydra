(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),a=(n(0),n(266)),i=n(282),c={id:"tab_completion",title:"Tab completion",sidebar_label:"Tab completion"},p={unversionedId:"tutorials/basic/running_your_app/tab_completion",id:"tutorials/basic/running_your_app/tab_completion",isDocsHomePage:!1,title:"Tab completion",description:"Tab completion can complete config groups, config nodes and values.",source:"@site/docs/tutorials/basic/running_your_app/6_tab_completion.md",slug:"/tutorials/basic/running_your_app/tab_completion",permalink:"/docs/next/tutorials/basic/running_your_app/tab_completion",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/basic/running_your_app/6_tab_completion.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1619191584,formattedLastUpdatedAt:"4/23/2021",sidebar_label:"Tab completion",sidebar:"docs",previous:{title:"Debugging",permalink:"/docs/next/tutorials/basic/running_your_app/debugging"},next:{title:"Introduction to Structured Configs",permalink:"/docs/next/tutorials/structured_config/intro"}},l=[{value:"Install tab completion",id:"install-tab-completion",children:[]}],u={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Tab completion can complete config groups, config nodes and values.\nTo complete paths, start them with ",Object(a.b)("inlineCode",{parentName:"p"},"/")," or ",Object(a.b)("inlineCode",{parentName:"p"},"./"),"."),Object(a.b)("p",null,"See this short video demonstration of tab completion:"),Object(a.b)(i.a,{id:"asciicast-272604",src:"https://asciinema.org/a/272604.js",async:!0,mdxType:"Script"}),Object(a.b)("h3",{id:"install-tab-completion"},"Install tab completion"),Object(a.b)("p",null,"Get the exact command to install the completion from ",Object(a.b)("inlineCode",{parentName:"p"},"--hydra-help"),".\nCurrently, Bash, zsh and Fish are supported.",Object(a.b)("br",{parentName:"p"}),"\n","We are relying on the community to implement tab completion plugins for additional shells."),Object(a.b)("p",null,"Fish support requires version >= 3.1.2.\nPrevious versions will work but add an extra space after ",Object(a.b)("inlineCode",{parentName:"p"},"."),"."),Object(a.b)("h4",{id:"zsh-instructions"},"Zsh instructions"),Object(a.b)("p",null,"Zsh is compatible with the existing Bash shell completion by appending"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"autoload -Uz bashcompinit && bashcompinit\n")),Object(a.b)("p",null,"to the ",Object(a.b)("inlineCode",{parentName:"p"},".zshrc")," file after ",Object(a.b)("inlineCode",{parentName:"p"},"compinit"),", restarting the shell and then using the commands provided for Bash."))}s.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},282:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o=n.n(r);function a(e){var t=Object(r.useRef)(null),n=Object(r.useRef)("undefined"!=typeof document?document.createElement("script"):null);return Object(r.useEffect)((function(){t.current.appendChild(n.current)}),[]),Object(r.useEffect)((function(){for(var t in e)e.hasOwnProperty(t)&&(n.current[t]=e[t])})),o.a.createElement("div",{ref:t})}}}]);