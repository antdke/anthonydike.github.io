(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{160:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return m});var r=t(0),n=t.n(r),i=t(1),l=t.n(i),s=t(7),c=t.n(s),p=t(190),o=t(167),d=t.n(o);function u(e){var a=e.excerpt,t=e.path,r=e.date,i=e.title;return n.a.createElement("div",{className:d.a.preview},n.a.createElement("h1",{className:d.a.previewTitle},n.a.createElement(c.a,{to:t},i)),n.a.createElement("p",{className:d.a.previewDate},r),n.a.createElement("p",{className:d.a.previewExcerpt},a))}function m(e){var a=e.data,t=(void 0===a?{}:a).allMarkdownRemark,r=(t=void 0===t?{}:t).edges,i=(void 0===r?[]:r).filter(function(e){return e.node.frontmatter.title.length>0});return n.a.createElement(p.a,{pageTitle:"colin tinney - blog",pageDescription:"A personal blog"},n.a.createElement("div",null,i.map(function(e){var a=e.node,t=a.id,r=a.excerpt,i=a.frontmatter,l=i.path,s=i.date,c=i.title;return n.a.createElement(u,{key:t,excerpt:r,path:l,date:s,title:c})})))}u.propTypes={path:l.a.string.isRequired,title:l.a.string.isRequired,date:l.a.string.isRequired,excerpt:l.a.string.isRequired},m.propTypes={data:l.a.shape({allMarkdownRemark:l.a.shape({edges:l.a.arrayOf(l.a.shape({node:l.a.shape({id:l.a.string.isRequired,frontmatter:l.a.shape({path:l.a.string.isRequired,title:l.a.string.isRequired,date:l.a.string.isRequired}).isRequired}).isRequired})).isRequired}).isRequired}).isRequired}},182:function(e){e.exports={data:{site:{siteMetadata:{title:"colin tinney"}}}}},183:function(e,a,t){"use strict";var r=t(0),n=t.n(r),i=t(1),l=t.n(i),s=t(187),c=t.n(s),p=t(188),o=t.n(p),d=t(155),u=t.n(d);var m=function(){return n.a.createElement(o.a,{showUnder:160},n.a.createElement("div",{className:u.a.container},"up ↑"))},g=t(156),E=t.n(g);function f(e){var a=e.pageTitle,t=e.pageDescription,r=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement("title",null,a),n.a.createElement("meta",{name:"description",content:t}),n.a.createElement("meta",{property:"og:title",content:a}),n.a.createElement("meta",{property:"og:description",content:t})),n.a.createElement("main",{className:E.a.content,"aria-label":"Content"},r),n.a.createElement(m,null))}f.propTypes={children:l.a.node.isRequired,pageTitle:l.a.string.isRequired,pageDescription:l.a.string.isRequired};var h=f;a.a=h},184:function(e,a,t){"use strict";t(186);var r=t(182),n=t(0),i=t.n(n),l=t(1),s=t.n(l),c=t(55),p=t(157),o=t.n(p);function d(e){var a=e.underline;return i.a.createElement(c.StaticQuery,{query:"677712209",render:function(e){return i.a.createElement("h1",{className:o.a.header+" "+(a?o.a.headerUnderline:"")},i.a.createElement("a",{href:"/",className:o.a.link},e.site.siteMetadata.title))},data:r})}d.propTypes={underline:s.a.bool},d.defaultProps={underline:!0};var u=d;a.a=u},185:function(e,a,t){"use strict";var r=t(0),n=t.n(r),i=t(1),l=t.n(i),s=t(183),c=t(184),p=t(158),o=t.n(p);function d(e){var a=e.pageTitle,t=e.pageDescription,r=e.title,i=e.titleHref,l=e.children;return n.a.createElement(s.a,{pageTitle:a,pageDescription:t},n.a.createElement("div",{className:o.a.container},n.a.createElement("header",{className:o.a.header},n.a.createElement("span",null,n.a.createElement(c.a,{underline:!1})),n.a.createElement("span",{className:o.a.separator},"/"),n.a.createElement("h3",{className:o.a.title},i?n.a.createElement("a",{className:o.a.titleLink,href:i},r):r)),l))}d.propTypes={pageTitle:l.a.string.isRequired,pageDescription:l.a.string.isRequired,title:l.a.string.isRequired,titleHref:l.a.string,children:l.a.node.isRequired},d.defaultProps={titleHref:null};var u=d;a.a=u},190:function(e,a,t){"use strict";var r=t(0),n=t.n(r),i=t(1),l=t.n(i),s=t(185),c=t(163),p=t.n(c);function o(e){var a=e.pageTitle,t=e.pageDescription,r=e.children;return n.a.createElement(s.a,{pageTitle:a,pageDescription:t,title:"blog",titleHref:"/blog"},n.a.createElement("main",{className:p.a.container},r))}o.propTypes={children:l.a.node.isRequired,pageTitle:l.a.string.isRequired,pageDescription:l.a.string.isRequired};var d=o;a.a=d}}]);
//# sourceMappingURL=component---src-pages-blog-blog-js-a7e20c618472129d3c40.js.map