(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,4],{140:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(154),c=t(155),o=t(162),l=t.n(o);var s=function(){return i.a.createElement("header",{className:l.a.header},i.a.createElement(c.a,null),i.a.createElement("p",null,"Hi! I'm a software developer, specializing in web technologies."),i.a.createElement("p",null,"Let's work together."))},u=t(163),d=t(4),m=t.n(d),f=t(166),p=t(167),h=t(168),y=t(148),_=t(164),E=t.n(_);function v(e){var a=e.data;return i.a.createElement("div",{className:E.a.container},i.a.createElement("div",{className:E.a.container__social},i.a.createElement("a",{title:a.site.siteMetadata.social.github+" on GitHub",href:"https://github.com/"+a.site.siteMetadata.social.github,"aria-label":"GitHub profile"},i.a.createElement(f.a,{icon:p.b,className:E.a.icon,size:"lg"})),i.a.createElement("a",{title:a.site.siteMetadata.social.linkedin+" on LinkedIn",href:"https://linkedin.com/in/"+a.site.siteMetadata.social.linkedin,"aria-label":"LinkedIn profile"},i.a.createElement(f.a,{icon:p.c,className:E.a.icon,size:"lg"})),i.a.createElement("a",{title:a.site.siteMetadata.social.fiveHundredPx+" on 500px",href:"https://500px.com/"+a.site.siteMetadata.social.fiveHundredPx,"aria-label":"500px profile"},i.a.createElement(f.a,{icon:p.a,className:E.a.icon,size:"lg"}))),i.a.createElement("div",{className:E.a.container__email},i.a.createElement("a",{href:"mailto:"+a.site.siteMetadata.contact.email},i.a.createElement(f.a,{icon:h.a,className:E.a.icon+" "+E.a.email__icon}),a.site.siteMetadata.contact.displayedEmail)),i.a.createElement("div",{className:E.a.container__resume},i.a.createElement("a",{href:a.site.siteMetadata.contact.resumeUrl,className:E.a.container__resume__link},"resume")))}v.propTypes={data:m.a.shape.isRequired};var g=function(){return i.a.createElement(y.StaticQuery,{query:"2415355733",render:function(e){return i.a.createElement(v,{data:e})},data:u})},b=t(165),x=t.n(b);function C(){return i.a.createElement(r.a,null,i.a.createElement("div",{className:x.a.container},i.a.createElement(s,null),i.a.createElement(g,null)))}t.d(a,"default",function(){return C})},143:function(e,a,t){"use strict";t.r(a);var n=t(140);a.default=n.default},145:function(e,a,t){"use strict";t.r(a);var n=t(169),i=t(143);n.a.autoAddCss=!1,a.default=i.default},148:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return p}),t.d(a,"StaticQueryContext",function(){return m}),t.d(a,"StaticQuery",function(){return f});var n=t(0),i=t.n(n),r=t(4),c=t.n(r),o=t(147),l=t.n(o);t.d(a,"Link",function(){return l.a}),t.d(a,"withPrefix",function(){return o.withPrefix}),t.d(a,"navigate",function(){return o.navigate}),t.d(a,"push",function(){return o.push}),t.d(a,"replace",function(){return o.replace}),t.d(a,"navigateTo",function(){return o.navigateTo});var s=t(149),u=t.n(s);t.d(a,"PageRenderer",function(){return u.a});var d=t(32);t.d(a,"parsePath",function(){return d.a});var m=i.a.createContext({}),f=function(e){return i.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},149:function(e,a,t){var n;e.exports=(n=t(152))&&n.default||n},150:function(e,a,t){e.exports={content:"DefaultLayout-module--content--29qSQ"}},151:function(e){e.exports={data:{site:{siteMetadata:{title:"colin tinney",url:"https://colintinney.com"}}}}},152:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),i=t.n(n),r=t(4),c=t.n(r),o=t(51),l=t(2),s=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return i.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=s},153:function(e,a,t){e.exports={header:"Brand-module--header--31XTZ",link:"Brand-module--link--1EETb"}},154:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(4),c=t.n(r),o=t(150),l=t.n(o);function s(e){var a=e.children;return i.a.createElement("main",{className:l.a.content,"aria-label":"Content"},a)}s.propTypes={children:c.a.node.isRequired};a.a=s},155:function(e,a,t){"use strict";t(156);var n=t(151),i=t(0),r=t.n(i),c=t(148),o=t(153),l=t.n(o);a.a=function(){return r.a.createElement(c.StaticQuery,{query:"2266617940",render:function(e){return r.a.createElement("h1",{className:l.a.header},r.a.createElement("a",{href:e.site.siteMetadata.url,className:l.a.link},e.site.siteMetadata.title))},data:n})}},162:function(e,a,t){e.exports={header:"AboutHeader-module--header--34coq"}},163:function(e){e.exports={data:{site:{siteMetadata:{contact:{name:"Colin Tinney",email:"colintinney@gmail.com",displayedEmail:"colintinney [at] gmail.com",resumeUrl:"https://drive.google.com/open?id=1l5p9B44vyGf0fjST5Tm-I-zXBwQd2GXtUj_RUunx3MU"},social:{github:"cdtinney",linkedin:"cdtinney",fiveHundredPx:"colintinney"}}}}}},164:function(e,a,t){e.exports={container:"ContactCard-module--container--4YL94",icon:"ContactCard-module--icon--pIjdG",email__icon:"ContactCard-module--email__icon--24Mk1",container__social:"ContactCard-module--container__social--WE9Rx",container__email:"ContactCard-module--container__email--4CQt3",container__resume:"ContactCard-module--container__resume--naRT8",container__resume__link:"ContactCard-module--container__resume__link--3q0-_"}},165:function(e,a,t){e.exports={container:"Home-module--container--34imV"}}}]);
//# sourceMappingURL=component---src-pages-index-js-448cb6c9f4c78e85bf40.js.map