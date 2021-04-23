(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{204:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(8),o=(t(0),t(266)),i={id:"compose_api",title:"Compose API",sidebar_label:"Experimental compose API"},c={unversionedId:"advanced/compose_api",id:"version-0.11/advanced/compose_api",isDocsHomePage:!1,title:"Compose API",description:"Hydra 0.11.0 introduces a new experimental API for composing configuration via the hydra.experimental.compose() function.",source:"@site/versioned_docs/version-0.11/advanced/hydra_compose.md",slug:"/advanced/compose_api",permalink:"/docs/0.11/advanced/compose_api",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/advanced/hydra_compose.md",version:"0.11",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1619191584,formattedLastUpdatedAt:"4/23/2021",sidebar_label:"Experimental compose API",sidebar:"version-0.11/docs",previous:{title:"Hydra plugins",permalink:"/docs/0.11/advanced/plugins"},next:{title:"Ray example",permalink:"/docs/0.11/advanced/ray_example"}},p=[{value:"<code>hydra.experimental.compose()</code> example",id:"hydraexperimentalcompose-example",children:[]},{value:"API Documentation",id:"api-documentation",children:[]}],l={toc:p};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hydra 0.11.0 introduces a new experimental API for composing configuration via the ",Object(o.b)("inlineCode",{parentName:"p"},"hydra.experimental.compose()")," function.\nPrior to calling compose(), you have to initialize Hydra: This can be done by using the standard ",Object(o.b)("inlineCode",{parentName:"p"},"@hydra.main()")," or by calling ",Object(o.b)("inlineCode",{parentName:"p"},"hydra.experimental.initialize()"),"."),Object(o.b)("p",null,"Here is an ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/0.11_branch/examples/notebook"},"example Jupyter notebook utilizing this API"),"."),Object(o.b)("h3",{id:"hydraexperimentalcompose-example"},Object(o.b)("inlineCode",{parentName:"h3"},"hydra.experimental.compose()")," example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'from hydra.experimental import compose, initialize\n\n\nif __name__ == "__main__":\n    initialize(\n        config_dir="conf", strict=True,\n    )\n\n    cfg = compose("config.yaml", overrides=["db=mysql", "db.user=me"])\n    print(OmegaConf.to_yaml(cfg))\n')),Object(o.b)("h3",{id:"api-documentation"},"API Documentation"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'def compose(config_file=None, overrides=[], strict=None):\n    """\n    :param config_file: optional config file to load\n    :param overrides: list of overrides for config file\n    :param strict: optionally override the default strict mode\n    :return: the composed config\n    """\n\n\ndef initialize(config_dir=None, strict=None, caller_stack_depth=1):\n    """\n    Initializes the Hydra sub system\n\n    :param config_dir: config directory relative to the calling script\n    :param strict: Default value for strict mode\n    :param caller_stack_depth:\n    :return:\n    """\n')))}d.isMDXComponent=!0},266:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=d(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(t),u=r,f=s["".concat(i,".").concat(u)]||s[u]||m[u]||o;return t?a.a.createElement(f,c(c({ref:n},l),{},{components:t})):a.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);