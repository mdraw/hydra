"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[872],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return u},MDXProvider:function(){return m},mdx:function(){return g},useMDXComponents:function(){return c},withMDXComponents:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){return function(t){var n=c(t.components);return r.createElement(e,o({},t,{components:n}))}},c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93899:function(e,t,n){n.d(t,{Z:function(){return s},T:function(){return u}});var r=n(87462),a=n(67294),o=n(39960),i=n(52263),l=n(80907);function s(e){return a.createElement(o.default,(0,r.Z)({},e,{to:(t=e.to,s=(0,l.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==s?void 0:s.name)?n:"current"]+t),target:"_blank"}));var t,n,s}function u(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return a.createElement(s,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},48019:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(93899),l=["components"],s={id:"defaults",title:"Defaults List"},u=void 0,d={unversionedId:"tutorials/structured_config/defaults",id:"tutorials/structured_config/defaults",title:"Defaults List",description:"You can define a defaults list in your primary Structured Config just like you can in your primary config.yaml file.",source:"@site/docs/tutorials/structured_config/4_defaults.md",sourceDirName:"tutorials/structured_config",slug:"/tutorials/structured_config/defaults",permalink:"/docs/next/tutorials/structured_config/defaults",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/tutorials/structured_config/4_defaults.md",tags:[],version:"current",lastUpdatedBy:"Jasha",lastUpdatedAt:1649793889,formattedLastUpdatedAt:"4/12/2022",sidebarPosition:4,frontMatter:{id:"defaults",title:"Defaults List"},sidebar:"docs",previous:{title:"Config Groups",permalink:"/docs/next/tutorials/structured_config/config_groups"},next:{title:"Structured Config schema",permalink:"/docs/next/tutorials/structured_config/schema"}},c=[{value:"A Note about composition order",id:"a-note-about-composition-order",children:[],level:3},{value:"Requiring users to specify a default list value",id:"requiring-users-to-specify-a-default-list-value",children:[],level:3}],m={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(i.T,{to:"examples/tutorials/structured_configs/4_defaults/my_app.py",mdxType:"ExampleGithubLink"}),(0,o.mdx)("p",null,"You can define a defaults list in your primary Structured Config just like you can in your primary ",(0,o.mdx)("inlineCode",{parentName:"p"},"config.yaml")," file.\nThe example below extends the previous example by adding a defaults list that will load ",(0,o.mdx)("inlineCode",{parentName:"p"},"db=mysql")," by default."),(0,o.mdx)("div",{class:"alert alert--info",role:"alert"},"NOTE: You can still place your defaults list in your primary (YAML) config file (Example in next page)."),(0,o.mdx)("br",null),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:"{11-14,19,25}","{11-14,19,25}":!0},'from dataclasses import dataclass\n\nimport hydra\nfrom hydra.core.config_store import ConfigStore\nfrom omegaconf import MISSING, OmegaConf\n\n@dataclass\nclass MySQLConfig:\n    ...\n\n@dataclass\nclass PostGreSQLConfig:\n    ...\n\ndefaults = [\n    # Load the config "mysql" from the config group "db"\n    {"db": "mysql"}\n]\n\n@dataclass\nclass Config:\n    # this is unfortunately verbose due to @dataclass limitations\n    defaults: List[Any] = field(default_factory=lambda: defaults)\n\n    # Hydra will populate this field based on the defaults list\n    db: Any = MISSING\n\ncs = ConfigStore.instance()\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\ncs.store(name="config", node=Config)\n\n\n@hydra.main(version_base=None, config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\n\nif __name__ == "__main__":\n    my_app()\n')),(0,o.mdx)("p",null,"Running ",(0,o.mdx)("inlineCode",{parentName:"p"},"my_app.py")," loads the mysql config option by default:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  ...\n")),(0,o.mdx)("p",null,"You can override the default option via the command line:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql\ndb:\n  driver: postgresql\n  ...\n")),(0,o.mdx)("h3",{id:"a-note-about-composition-order"},"A Note about composition order"),(0,o.mdx)("p",null,"The default composition order in Hydra is that values defined in a config are merged into values introduced from configs in the Defaults List - or in other words - overriding them.\nThis behavior can be unintuitive when your primary config is a Structured Config, like in the example above.\nFor example, if the primary config is:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:"{6}","{6}":!0},'@dataclass\nclass Config:\n    defaults: List[Any] = field(default_factory=lambda:  [\n        "debug/activate",\n        # If you do not specify _self_, it will be appended to the end of the defaults list by default.\n        "_self_"\n    ])\n\n    debug: bool = False\n')),(0,o.mdx)("p",null,"And ",(0,o.mdx)("inlineCode",{parentName:"p"},"debug/activate.yaml")," is overriding the ",(0,o.mdx)("inlineCode",{parentName:"p"},"debug")," flag to ",(0,o.mdx)("inlineCode",{parentName:"p"},"True"),", the composition order would be such that debug ends up being ",(0,o.mdx)("inlineCode",{parentName:"p"},"False"),".",(0,o.mdx)("br",{parentName:"p"}),"\n","To get ",(0,o.mdx)("inlineCode",{parentName:"p"},"debug/activate.yaml")," to override this config, explicitly specify ",(0,o.mdx)("inlineCode",{parentName:"p"},"_self_")," before ",(0,o.mdx)("inlineCode",{parentName:"p"},"debug/activate.yaml"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:"{4}","{4}":!0},'@dataclass\nclass Config:\n    defaults: List[Any] = field(default_factory=lambda:  [\n        "_self_",\n        "debug/activate",\n    ])\n\n    debug: bool = False\n')),(0,o.mdx)("p",null,"See ",(0,o.mdx)("a",{parentName:"p",href:"/docs/next/advanced/defaults_list#composition-order"},"Composition Order")," for more information."),(0,o.mdx)("h3",{id:"requiring-users-to-specify-a-default-list-value"},"Requiring users to specify a default list value"),(0,o.mdx)("p",null,"Set ",(0,o.mdx)("inlineCode",{parentName:"p"},"db")," as ",(0,o.mdx)("inlineCode",{parentName:"p"},"MISSING")," to require the user to specify a value on the command line."),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Defaults list with a missing db"',title:'"Defaults',list:!0,with:!0,a:!0,missing:!0,'db"':!0},'defaults = [\n    {"db": MISSING}\n]\n\n\n'))),(0,o.mdx)("div",{className:"col  col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="Output"',title:'"Output"'},"$ python my_app.py\nYou must specify 'db', e.g, db=<OPTION>\nAvailable options:\n        mysql\n        postgresql\n")))))}p.isMDXComponent=!0}}]);