(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),o=(n(0),n(266)),i=n(273),s={id:"schema",title:"Structured Config schema"},c={unversionedId:"tutorials/structured_config/schema",id:"tutorials/structured_config/schema",isDocsHomePage:!1,title:"Structured Config schema",description:"We have seen how to use Structured Configs as configuration, but they can also be used as a schema (i.e. validating configuration files).",source:"@site/docs/tutorials/structured_config/5_schema.md",slug:"/tutorials/structured_config/schema",permalink:"/docs/next/tutorials/structured_config/schema",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/structured_config/5_schema.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1619191584,formattedLastUpdatedAt:"4/23/2021",sidebar:"docs",previous:{title:"Defaults List",permalink:"/docs/next/tutorials/structured_config/defaults"},next:{title:"Config Store API",permalink:"/docs/next/tutorials/structured_config/config_store"}},l=[{value:"Validating against a schema in the same config group",id:"validating-against-a-schema-in-the-same-config-group",children:[]},{value:"Validating against a schema from a different config group",id:"validating-against-a-schema-from-a-different-config-group",children:[]}],u={toc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We have seen how to use Structured Configs as configuration, but they can also be used as a schema (i.e. validating configuration files).\nTo achieve this, we will follow the common pattern of ",Object(o.b)("a",{parentName:"p",href:"/docs/next/patterns/extending_configs"},"Extending Configs")," - but instead of extending another config file,\nwe will extend a Structured Config."),Object(o.b)("p",null,"This page shows how to validate the config files ",Object(o.b)("inlineCode",{parentName:"p"},"config.yaml"),", ",Object(o.b)("inlineCode",{parentName:"p"},"db/mysql.yaml")," and ",Object(o.b)("inlineCode",{parentName:"p"},"db/postgresql.yaml"),"\nagainst a Structured Config schema."),Object(o.b)("h3",{id:"validating-against-a-schema-in-the-same-config-group"},"Validating against a schema in the same config group"),Object(o.b)(i.a,{to:"examples/tutorials/structured_configs/5.1_structured_config_schema_same_config_group",mdxType:"ExampleGithubLink"}),Object(o.b)("p",null,"Given the config directory structure:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"conf/\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 mysql.yaml\n    \u2514\u2500\u2500 postgresql.yaml\n")),Object(o.b)("p",null,"We will add Structured Config schema for each of the config files above and store in the\nConfig Store as ",Object(o.b)("inlineCode",{parentName:"p"},"base_config"),", ",Object(o.b)("inlineCode",{parentName:"p"},"db/base_mysql")," and ",Object(o.b)("inlineCode",{parentName:"p"},"db/base_postgresql"),"."),Object(o.b)("p",null,"Then, we will use the Defaults List in each config to specify its base config as follows:"),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col col--4"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml" {2}',title:'"config.yaml"',"{2}":!0},"defaults:\n  - base_config\n  - db: mysql\n\ndebug: true\n"))),Object(o.b)("div",{className:"col col--4"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml" {2}',title:'"db/mysql.yaml"',"{2}":!0},"defaults:\n  - base_mysql\n\nuser: omry\npassword: secret\n"))),Object(o.b)("div",{className:"col col--4"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/postgresql.yaml" {2}',title:'"db/postgresql.yaml"',"{2}":!0},"defaults:\n  - base_postgresql\n\nuser: postgres_user\npassword: drowssap\n")))),Object(o.b)("p",null,"One difference in the source code is that we have removed the Defaults List from the ",Object(o.b)("inlineCode",{parentName:"p"},"Config")," dataclass.\nThe primary Defaults List will come from ",Object(o.b)("inlineCode",{parentName:"p"},"config.yaml"),"."),Object(o.b)("details",null,Object(o.b)("summary",null,"my_app.py (Click to expand)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:"{28-30}","{28-30}":!0},'@dataclass\nclass DBConfig:\n    driver: str = MISSING\n    host: str = "localhost"\n    port: int = MISSING\n\n@dataclass\nclass MySQLConfig(DBConfig):\n    driver: str = "mysql"\n    port: int = 3306\n    user: str = MISSING\n    password: str = MISSING\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n    driver: str = "postgresql"\n    user: str = MISSING\n    port: int = 5432\n    password: str = MISSING\n    timeout: int = 10\n\n@dataclass\nclass Config:\n    db: DBConfig = MISSING\n    debug: bool = False\n\ncs = ConfigStore.instance()\ncs.store(name="base_config", node=Config)\ncs.store(group="db", name="base_mysql", node=MySQLConfig)\ncs.store(group="db", name="base_postgresql", node=PostGreSQLConfig)\n\n@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n'))),Object(o.b)("br",null),Object(o.b)("p",null,"When Hydra composes the final config object it will use the config schemas as specified in the Default Lists.",Object(o.b)("br",{parentName:"p"}),"\n","Like before, Hydra will catch user errors in the command line:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db.port=fail\nError merging override db.port=fail\nValue 'fail' could not be converted to Integer\n        full_key: db.port\n        object_type=MySQLConfig\n")),Object(o.b)("details",null,Object(o.b)("summary",null,"Use ",Object(o.b)("b",null,"--info")," commands to see how a config was composed (",Object(o.b)("b",null,"Expand"),")"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py --info defaults-tree\n\nDefaults Tree\n*************\n<root>:\n  hydra/config:\n    hydra/output: default\n    hydra/launcher: basic\n    hydra/sweeper: basic\n    hydra/help: default\n    hydra/hydra_help: default\n    hydra/hydra_logging: default\n    hydra/job_logging: default\n    _self_\n  config:\n    base_config\n    db: mysql:\n      db/base_mysql\n      _self_\n    _self_\n\n$ python my_app.py --info defaults\n\nDefaults List\n*************\n| Config path                 | Package             | _self_ | Parent       | \n------------------------------------------------------------------------------\n| hydra/output/default        | hydra               | False  | hydra/config |\n| hydra/launcher/basic        | hydra.launcher      | False  | hydra/config |\n| hydra/sweeper/basic         | hydra.sweeper       | False  | hydra/config |\n| hydra/help/default          | hydra.help          | False  | hydra/config |\n| hydra/hydra_help/default    | hydra.hydra_help    | False  | hydra/config |\n| hydra/hydra_logging/default | hydra.hydra_logging | False  | hydra/config |\n| hydra/job_logging/default   | hydra.job_logging   | False  | hydra/config |\n| hydra/config                | hydra               | True   | <root>       |\n| base_config                 |                     | False  | config       |\n| db/base_mysql               | db                  | False  | db/mysql     |\n| db/mysql                    | db                  | True   | config       |\n| config                      |                     | True   | <root>       |\n------------------------------------------------------------------------------\n"))),Object(o.b)("h3",{id:"validating-against-a-schema-from-a-different-config-group"},"Validating against a schema from a different config group"),Object(o.b)(i.a,{to:"examples/tutorials/structured_configs/5.2_structured_config_schema_different_config_group",mdxType:"ExampleGithubLink"}),Object(o.b)("p",null,"In the above example, the schema we used was stored in the same config group.\nThis is not always the case, for example - A library might provide schemas in its own config group."),Object(o.b)("p",null,"Here is a modified version of the example above, where a mock database_lib is providing the schemas\nwe want to validate against."),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'},'import database_lib\n\n\n@dataclass\nclass Config:\n    db: database_lib.DBConfig = MISSING\n    debug: bool = False\n\ncs = ConfigStore.instance()\ncs.store(name="base_config", node=Config)\n\n# database_lib registers its configs\n# in database_lib/db\ndatabase_lib.register_configs()\n\n\n@hydra.main(\n    config_path="conf",\n    config_name="config",\n)\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\n\nif __name__ == "__main__":\n    my_app()\n'))),Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="database_lib.py" {17,22}',title:'"database_lib.py"',"{17,22}":!0},'@dataclass\nclass DBConfig:\n  ...\n\n@dataclass\nclass MySQLConfig(DBConfig):\n  ...\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n  ...\n\n\ndef register_configs() -> None:\n    cs = ConfigStore.instance()\n    cs.store(\n        group="database_lib/db",\n        name="mysql",\n        node=MySQLConfig,\n    )\n    cs.store(\n        group="database_lib/db",\n        name="postgresql",\n        node=PostGreSQLConfig,\n    )\n\n')))),Object(o.b)("p",null,"The Defaults List entry for the base config is slightly different:"),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml" {2}',title:'"db/mysql.yaml"',"{2}":!0},"defaults:\n  - /database_lib/db/mysql@_here_\n\nuser: omry\npassword: secret\n"))),Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/postgresql.yaml" {2}',title:'"db/postgresql.yaml"',"{2}":!0},"defaults:\n  - /database_lib/db/postgresql@_here_\n\nuser: postgres_user\npassword: drowssap\n")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We refer to the config with an absolute path because it is outside the subtree of the db config group. "),Object(o.b)("li",{parentName:"ul"},"we override the package to ",Object(o.b)("inlineCode",{parentName:"li"},"_here_")," to ensure that the package of the schema is the same as the package\nof the config it's validating.")))}d.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,b=d["".concat(i,".").concat(g)]||d[g]||f[g]||o;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},267:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},268:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(11),i=n(267),s=n(7),c=Object(a.createContext)({collectLink:function(){}}),l=n(269),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,d,f=e.isNavLink,g=e.to,b=e.href,p=e.activeClassName,m=e.isActive,h=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,v=void 0===y||y,O=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),_=Object(l.b)().withBaseUrl,j=Object(a.useContext)(c),w=g||b,C=Object(i.a)(w),D=null==w?void 0:w.replace("pathname://",""),N=void 0!==D?(n=D,v&&function(e){return e.startsWith("/")}(n)?_(n):n):void 0,x=Object(a.useRef)(!1),S=f?o.e:o.c,P=s.default.canUseIntersectionObserver;Object(a.useEffect)((function(){return!P&&C&&window.docusaurus.prefetch(N),function(){P&&d&&d.disconnect()}}),[N,P,C]);var A=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,L=!N||!C||A;return N&&C&&!A&&!h&&j.collectLink(N),L?r.a.createElement("a",Object.assign({href:N},w&&!C&&{target:"_blank",rel:"noopener noreferrer"},O)):r.a.createElement(S,Object.assign({},O,{onMouseEnter:function(){x.current||(window.docusaurus.preload(N),x.current=!0)},innerRef:function(e){var t,n;P&&e&&C&&(t=e,n=function(){window.docusaurus.prefetch(N)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:N||""},f&&{isActive:m,activeClassName:p}))}},269:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(10),r=n(267);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,s=void 0!==i&&i,c=o.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},270:function(e,t,n){try{e.exports=n(271)}catch(r){var a={};e.exports={useAllDocsData:function(){return a},useActivePluginAndVersion:function(){}}}},271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var a=n(23),r=n(38),o=n(272);t.useAllDocsData=function(){return r.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return r.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),r=a.useLocation().pathname;return o.getActivePlugin(n,r,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),r=a.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:o.getActiveVersion(n.pluginData,r)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return o.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return o.getActiveVersion(n,r)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return o.getActiveDocContext(n,r)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return o.getDocVersionSuggestions(n,r)}},272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var a=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var r=Object.entries(e).find((function(e){e[0];var n=e[1];return!!a.matchPath(t,{path:n.path,exact:!1,strict:!1})})),o=r?{pluginId:r[0],pluginData:r[1]}:void 0;if(!o&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return o},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var r=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==r})),[r]).find((function(e){return!!a.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var r,o,i=t.getActiveVersion(e,n),s=null==i?void 0:i.docs.find((function(e){return!!a.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:s,alternateDocVersions:s?(r=s.id,o={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===r&&(o[e.name]=t)}))})),o):{}}},t.getDocVersionSuggestions=function(e,n){var a=t.getLatestVersion(e),r=t.getActiveDocContext(e,n),o=r.activeVersion!==a;return{latestDocSuggestion:o?null==r?void 0:r.alternateDocVersions[a.name]:void 0,latestVersionSuggestion:o?a:void 0}}},273:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n(3),r=n(0),o=n.n(r),i=n(268),s=n(10),c=n(270);function l(e){return o.a.createElement(i.a,Object(a.a)({},e,{to:(t=e.to,r=Object(c.useActiveVersion)(),Object(s.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==r?void 0:r.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,r}function u(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return o.a.createElement(l,e,o.a.createElement("span",null,"\xa0"),o.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);