(window.webpackJsonp=window.webpackJsonp||[]).push([[9,8],{163:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return g});var r=t(0),n=t.n(r),i=t(1),s=t.n(i),l=t(188),c=t(197),o=t(155),d=t.n(o),p=t(171),u=t.n(p);function m(e){var a=e.excerpt,t=e.path,r=e.date,i=e.title;return n.a.createElement("div",{className:"\n        "+u.a.preview+"\n        "+d.a.card+"\n        "+d.a.shadow+"\n      "},n.a.createElement("h1",{className:u.a.previewTitle},n.a.createElement(l.a,{href:t},i)),n.a.createElement("p",{className:u.a.previewDate},r),n.a.createElement("p",{className:u.a.previewExcerpt},a))}function g(e){var a=e.data,t=void 0===a?{}:a,r=t.allMarkdownRemark,i=(r=void 0===r?{}:r).edges,s=void 0===i?[]:i,l=t.site,o=(l=void 0===l?{}:l).siteMetadata,d=(o=void 0===o?{}:o).title+" - blog",p=s.filter(function(e){return e.node.frontmatter.title.length>0});return n.a.createElement(c.a,{pageTitle:d,pageDescription:"A personal blog"},n.a.createElement("div",null,p.map(function(e){var a=e.node,t=a.id,r=a.excerpt,i=a.frontmatter,s=i.path,l=i.date,c=i.title;return n.a.createElement(m,{key:t,excerpt:r,path:s,date:l,title:c})})))}m.propTypes={path:s.a.string.isRequired,title:s.a.string.isRequired,date:s.a.string.isRequired,excerpt:s.a.string.isRequired},g.propTypes={data:s.a.shape({allMarkdownRemark:s.a.shape({edges:s.a.arrayOf(s.a.shape({node:s.a.shape({id:s.a.string.isRequired,frontmatter:s.a.shape({path:s.a.string.isRequired,title:s.a.string.isRequired,date:s.a.string.isRequired}).isRequired}).isRequired})).isRequired}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({title:s.a.string.isRequired}).isRequired}).isRequired}).isRequired}},170:function(e,a,t){"use strict";t.r(a);var r=t(163);a.default=r.default},188:function(e,a,t){"use strict";var r=t(0),n=t.n(r),i=t(1),s=t.n(i),l=t(7),c=t.n(l),o=t(155),d=t.n(o),p=t(158),u=t.n(p),m={primary:d.a.primary,secondary:d.a.secondary};function g(e){var a=e.href,t=e.title,r=e.ariaLabel,i=e.color,s=e.className,l=e.children,o=u.a.root+" "+m[i]+" "+s+" ";return n.a.createElement(c.a,{className:o,to:a,title:t,"aria-label":r},l)}g.propTypes={href:s.a.string.isRequired,title:s.a.string,ariaLabel:s.a.string,color:s.a.string,className:s.a.string,children:s.a.node},g.defaultProps={title:null,ariaLabel:null,color:"primary",className:"",children:null};a.a=g},189:function(e){e.exports={data:{site:{siteMetadata:{title:"colin tinney"}}}}},190:function(e,a,t){"use strict";var r=t(0),n=t.n(r),i=t(1),s=t.n(i),l=t(194),c=t.n(l),o=t(195),d=t.n(o),p=t(156),u=t.n(p);var m=function(){return n.a.createElement(d.a,{showUnder:160},n.a.createElement("div",{className:u.a.container},"up ↑"))},g=t(157),f=t.n(g);function h(e){var a=e.pageTitle,t=e.pageDescription,r=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement("title",null,a),n.a.createElement("meta",{name:"description",content:t}),n.a.createElement("meta",{property:"og:title",content:a}),n.a.createElement("meta",{property:"og:description",content:t})),n.a.createElement("main",{className:f.a.content,"aria-label":"Content"},r),n.a.createElement(m,null))}h.propTypes={children:s.a.node.isRequired,pageTitle:s.a.string.isRequired,pageDescription:s.a.string.isRequired};var E=h;a.a=E},191:function(e,a,t){"use strict";t(193);var r=t(189),n=t(0),i=t.n(n),s=t(1),l=t.n(s),c=t(55),o=t(188),d=t(159),p=t.n(d);function u(e){var a=e.underline;return i.a.createElement(c.StaticQuery,{query:"677712209",render:function(e){return i.a.createElement("h1",{className:p.a.header+" "+(a?p.a.headerUnderline:"")},i.a.createElement(o.a,{href:"/",className:p.a.link},e.site.siteMetadata.title))},data:r})}u.propTypes={underline:l.a.bool},u.defaultProps={underline:!0};var m=u;a.a=m},192:function(e,a,t){"use strict";var r=t(0),n=t.n(r),i=t(1),s=t.n(i),l=t(190),c=t(191),o=t(188),d=t(160),p=t.n(d);function u(e){var a=e.pageTitle,t=e.pageDescription,r=e.title,i=e.titleHref,s=e.children;return n.a.createElement(l.a,{pageTitle:a,pageDescription:t},n.a.createElement("div",{className:p.a.container},n.a.createElement("header",{className:p.a.header},n.a.createElement("span",{className:p.a.brandContainer},n.a.createElement(c.a,{underline:!1})),n.a.createElement("span",{className:p.a.titleContainer},n.a.createElement("span",{className:p.a.separator},"/"),n.a.createElement("h3",{className:p.a.title},i?n.a.createElement(o.a,{className:p.a.titleLink,href:i},r):r))),s))}u.propTypes={pageTitle:s.a.string.isRequired,pageDescription:s.a.string.isRequired,title:s.a.string.isRequired,titleHref:s.a.string,children:s.a.node.isRequired},u.defaultProps={titleHref:null};var m=u;a.a=m},197:function(e,a,t){"use strict";var r=t(0),n=t.n(r),i=t(1),s=t.n(i),l=t(192),c=t(166),o=t.n(c);function d(e){var a=e.pageTitle,t=e.pageDescription,r=e.children;return n.a.createElement(l.a,{pageTitle:a,pageDescription:t,title:"blog",titleHref:"/blog"},n.a.createElement("main",{className:o.a.container},r))}d.propTypes={children:s.a.node.isRequired,pageTitle:s.a.string.isRequired,pageDescription:s.a.string.isRequired};var p=d;a.a=p}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-b79c01f8e23e76728175.js.map