(window.webpackJsonp=window.webpackJsonp||[]).push([[10,8,9],{163:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return f});var r=t(0),n=t.n(r),i=t(1),s=t.n(i),l=t(189),c=t(201),o=t(155),u=t.n(o),p=t(171),d=t.n(p);function m(e){var a=e.excerpt,t=e.path,r=e.date,i=e.title;return n.a.createElement("div",{className:"\n        "+d.a.preview+"\n        "+u.a.button+"\n      "},n.a.createElement("h1",{className:d.a.previewTitle},n.a.createElement(l.a,{href:t},i)),n.a.createElement("p",{className:d.a.previewDate},r),n.a.createElement("p",{className:d.a.previewExcerpt},a))}function f(e){var a=e.data,t=void 0===a?{}:a,r=t.allMarkdownRemark,i=(r=void 0===r?{}:r).edges,s=void 0===i?[]:i,l=t.site,o=(l=void 0===l?{}:l).siteMetadata,u=(o=void 0===o?{}:o).title+" - blog",p=s.filter(function(e){return e.node.frontmatter.title.length>0});return n.a.createElement(c.a,{pageTitle:u,pageDescription:"A personal blog"},n.a.createElement("div",null,p.map(function(e){var a=e.node,t=a.id,r=a.excerpt,i=a.frontmatter,s=i.path,l=i.date,c=i.title;return n.a.createElement(m,{key:t,excerpt:r,path:s,date:l,title:c})})))}m.propTypes={path:s.a.string.isRequired,title:s.a.string.isRequired,date:s.a.string.isRequired,excerpt:s.a.string.isRequired},f.propTypes={data:s.a.shape({allMarkdownRemark:s.a.shape({edges:s.a.arrayOf(s.a.shape({node:s.a.shape({id:s.a.string.isRequired,frontmatter:s.a.shape({path:s.a.string.isRequired,title:s.a.string.isRequired,date:s.a.string.isRequired}).isRequired}).isRequired})).isRequired}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({title:s.a.string.isRequired}).isRequired}).isRequired}).isRequired}},170:function(e,a,t){"use strict";t.r(a);var r=t(163);a.default=r.default},184:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return n});var r=t(170);a.default=r.default;var n="3427058560"},188:function(e,a,t){"use strict";t.d(a,"a",function(){return i});t(75),t(56),t(199);var r=function(e){return"string"==typeof e},n=function(e){return Object.keys(e).reduce(function(a,t){return("boolean"==typeof(r=e[t])||r instanceof Boolean)&&!e[t]?a:a+" "+t;var r},"")};function i(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter(function(e){return null!=e}).map(function(e){return r(e)?e:n(e)}).join(" ")}},189:function(e,a,t){"use strict";t(26);var r=t(0),n=t.n(r),i=t(1),s=t.n(i),l=t(7),c=t.n(l),o=t(188),u=t(155),p=t.n(u),d=t(158),m=t.n(d),f={primary:p.a.primary,secondary:p.a.secondary};function g(e){var a=e.href,t=e.external,r=e.title,i=e.ariaLabel,s=e.color,l=e.className,u=e.children,p={title:r,className:Object(o.a)(m.a.root,f[s],l),"aria-label":i};return t?n.a.createElement("a",Object.assign({href:a},p),u):n.a.createElement(c.a,Object.assign({to:a},p),u)}g.propTypes={href:s.a.string.isRequired,external:s.a.bool,title:s.a.string,ariaLabel:s.a.string,color:s.a.string,className:s.a.string,children:s.a.node},g.defaultProps={external:!1,title:null,ariaLabel:null,color:"primary",className:"",children:null};a.a=g},190:function(e,a,t){"use strict";var r=t(1),n=t.n(r);a.a=n.a.shape({})},191:function(e,a,t){"use strict";t.d(a,"a",function(){return l});t(26);var r=t(0),n=t.n(r),i=t(155),s=t.n(i);function l(e){return function(a){return n.a.createElement(e,Object.assign({theme:s.a},a))}}},192:function(e){e.exports={data:{site:{siteMetadata:{title:"colin tinney"}}}}},193:function(e,a,t){"use strict";var r=t(0),n=t.n(r),i=t(1),s=t.n(i),l=t(197),c=t.n(l),o=t(198),u=t.n(o),p=t(190),d=t(191),m=t(188),f=t(156),g=t.n(f);function h(e){var a=e.theme;return n.a.createElement(u.a,{showUnder:160},n.a.createElement("div",{className:Object(m.a)(g.a.container,a.button)},"up ↑"))}h.propTypes={theme:p.a.isRequired};var v=Object(d.a)(h),E=t(157),R=t.n(E);function q(e){var a=e.pageTitle,t=e.pageDescription,r=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement("title",null,a),n.a.createElement("meta",{name:"description",content:t}),n.a.createElement("meta",{property:"og:title",content:a}),n.a.createElement("meta",{property:"og:description",content:t})),n.a.createElement("main",{className:R.a.content,"aria-label":"Content"},r),n.a.createElement(v,null))}q.propTypes={children:s.a.node.isRequired,pageTitle:s.a.string.isRequired,pageDescription:s.a.string.isRequired};var b=q;a.a=b},194:function(e,a,t){"use strict";t(196);var r=t(192),n=t(0),i=t.n(n),s=t(1),l=t.n(s),c=t(55),o=t(188),u=t(189),p=t(159),d=t.n(p);function m(e){var a=e.underline;return i.a.createElement(c.StaticQuery,{query:"677712209",render:function(e){var t;return i.a.createElement("h1",{className:Object(o.a)(d.a.header,(t={},t[d.a.headerUnderline]=a,t))},i.a.createElement(u.a,{href:"/",className:d.a.link},e.site.siteMetadata.title))},data:r})}m.propTypes={underline:l.a.bool},m.defaultProps={underline:!0};var f=m;a.a=f},195:function(e,a,t){"use strict";var r=t(0),n=t.n(r),i=t(1),s=t.n(i),l=t(193),c=t(194),o=t(189),u=t(160),p=t.n(u);function d(e){var a=e.pageTitle,t=e.pageDescription,r=e.title,i=e.titleHref,s=e.children;return n.a.createElement(l.a,{pageTitle:a,pageDescription:t},n.a.createElement("div",{className:p.a.container},n.a.createElement("header",{className:p.a.header},n.a.createElement("span",{className:p.a.brandContainer},n.a.createElement(c.a,{underline:!1})),n.a.createElement("span",{className:p.a.titleContainer},n.a.createElement("span",{className:p.a.separator},"/"),n.a.createElement("h3",{className:p.a.title},i?n.a.createElement(o.a,{className:p.a.titleLink,href:i},r):r))),s))}d.propTypes={pageTitle:s.a.string.isRequired,pageDescription:s.a.string.isRequired,title:s.a.string.isRequired,titleHref:s.a.string,children:s.a.node.isRequired},d.defaultProps={titleHref:null};var m=d;a.a=m},201:function(e,a,t){"use strict";var r=t(0),n=t.n(r),i=t(1),s=t.n(i),l=t(195),c=t(166),o=t.n(c);function u(e){var a=e.pageTitle,t=e.pageDescription,r=e.children;return n.a.createElement(l.a,{pageTitle:a,pageDescription:t,title:"blog",titleHref:"/blog"},n.a.createElement("main",{className:o.a.container},r))}u.propTypes={children:s.a.node.isRequired,pageTitle:s.a.string.isRequired,pageDescription:s.a.string.isRequired};var p=u;a.a=p}}]);
//# sourceMappingURL=component---src-pages-blog-js-3bf40e2717d3d493f7f2.js.map