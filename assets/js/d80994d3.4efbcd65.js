"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4676],{3905:function(e,r,n){n.r(r),n.d(r,{MDXContext:function(){return c},MDXProvider:function(){return p},mdx:function(){return h},useMDXComponents:function(){return s},withMDXComponents:function(){return l}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){return function(r){var n=s(r.components);return t.createElement(e,i({},r,{components:n}))}},s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),l=s(n),p=o,y=l["".concat(a,".").concat(p)]||l[p]||m[p]||i;return n?t.createElement(y,u(u({ref:r},c),{},{components:n})):t.createElement(y,u({ref:r},c))}));function h(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var u={};for(var d in r)hasOwnProperty.call(r,d)&&(u[d]=r[d]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},35785:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],u={id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},d=void 0,c={unversionedId:"configure_hydra/workdir",id:"version-0.11/configure_hydra/workdir",title:"Customizing working directory pattern",description:"Run output directory grouped by day:",source:"@site/versioned_docs/version-0.11/configure_hydra/workdir.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/workdir",permalink:"/docs/0.11/configure_hydra/workdir",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/configure_hydra/workdir.md",tags:[],version:"0.11",lastUpdatedBy:"Jasha",lastUpdatedAt:1649793889,formattedLastUpdatedAt:"4/12/2022",frontMatter:{id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},sidebar:"version-0.11/docs",previous:{title:"Customizing logging",permalink:"/docs/0.11/configure_hydra/logging"},next:{title:"Customizing Application's help",permalink:"/docs/0.11/configure_hydra/app_help"}},l=[{value:"Configuring hydra.job.override_dirname",id:"configuring-hydrajoboverride_dirname",children:[],level:3},{value:"Customizing outputs with substitution through the CLI",id:"customizing-outputs-with-substitution-through-the-cli",children:[],level:3}],s={toc:l};function p(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Run output directory grouped by day:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: ./outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n")),(0,i.mdx)("p",null,"Sweep sub directory contains the the job number and the override parameters for the job instance:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  sweep:\n    subdir: ${hydra.job.num}_${hydra.job.num}_${hydra.job.override_dirname}\n")),(0,i.mdx)("p",null,"Run output directory grouped by job name:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${hydra.job.name}/${now:%Y-%m-%d_%H-%M-%S}\n")),(0,i.mdx)("p",null,"Run output directory can contain user configuration variables:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${now:%Y-%m-%d_%H-%M-%S}/opt:${optimizer.type}\n\n")),(0,i.mdx)("p",null,"Run output directory can contain override parameters for the job"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}\n")),(0,i.mdx)("h3",{id:"configuring-hydrajoboverride_dirname"},"Configuring hydra.job.override_dirname"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.job.override_dirname")," can be configured via hydra.job.config.override_dirname.\nYou can exclude keys such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"random_seed")," or change the separator used to construct override_dirname."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  job:\n    config:\n      # configuration for the ${hydra.job.override_dirname} runtime variable\n      override_dirname:\n        kv_sep: '='\n        item_sep: ','\n        exclude_keys: []\n")),(0,i.mdx)("h3",{id:"customizing-outputs-with-substitution-through-the-cli"},"Customizing outputs with substitution through the CLI"),(0,i.mdx)("p",null,"Outputs can also be configured through the CLI, like any other configuration."),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"python train.py model.nb_layers=3 hydra.run.dir=3_layers")),(0,i.mdx)("p",null,"This feature can become really powerful to write multiruns without boilerplate using substitution."),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"python train.py --multirun model.nb_layers=1,2,3,5 hydra.sweep.dir=multiruns/layers_effect hydra.sweep.subdir=\\","$","{model.nb_layers}")),(0,i.mdx)("p",null,"With bash, be careful to escape the $ symbol. Otherwise, bash will try to resolve the substitution, instead of passing it to Hydra."))}p.isMDXComponent=!0}}]);