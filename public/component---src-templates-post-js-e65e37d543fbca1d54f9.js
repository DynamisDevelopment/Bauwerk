(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"posts",function(){return h});a(34);var l=a(0),n=a.n(l),s=a(172),r=a(162),c=a(154),i=a(167),o=a(157),m=a.n(o),u=a(181),E=a(183),g=a(168),d=a(197),h=(a(249),"2602388168");t.default=function(e){var t=e.data.contentfulBlog,a={shortname:"bauwerk",config:{identifier:t.slug}};return n.a.createElement(r.a,null,n.a.createElement("div",{className:"grid blog-page"},n.a.createElement("div",{className:"blog-section"},n.a.createElement("h4",{className:"path"},"Home / Blog list and news /  ",t.title),n.a.createElement(c.a,{section:"Blog",title:"",subtitle:""}),n.a.createElement("h1",{className:"title"},t.title),n.a.createElement("h4",{className:"posted"},t.createdAt),n.a.createElement("img",{className:"main-image",src:t.mainImage.file.url}),Object(s.documentToReactComponents)(t.content.json),n.a.createElement("div",{className:"share"},n.a.createElement("h2",null,"Share: "),n.a.createElement(g.a,null)),t.images&&n.a.createElement(m.a,Object.assign({},{dots:!0,arrows:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0},{className:"post-slider"}),t.images.map(function(e,t){return n.a.createElement("div",{className:"post-image",key:t},n.a.createElement("img",{src:e.file.url}))}))),n.a.createElement(i.a,null),n.a.createElement(c.a,{section:"",title:"Reltated Posts",subtitle:""}),n.a.createElement(u.a,null),n.a.createElement("div",{className:"comments"},n.a.createElement(d.DiscussionEmbed,a)),n.a.createElement(E.a,null)))}},154:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(e){return n.a.createElement("div",{className:"section-title"},n.a.createElement("h1",null,e.section," ",n.a.createElement("div",{className:"line"})),n.a.createElement("h3",null,e.title),n.a.createElement("h3",null,e.subtitle))}},155:function(e,t,a){"use strict";var l=a(0),n=a.n(l),s=a(4),r=a.n(s),c=a(33),i=a.n(c);a.d(t,"a",function(){return i.a});a(164),n.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},162:function(e,t,a){"use strict";a(34);var l=a(0),n=a.n(l),s=a(170),r=a(155),c=(a(156),a(168)),i=function(){var e=s.data;return n.a.createElement("div",{className:"grid bg-black"},n.a.createElement("footer",null,n.a.createElement("ul",{className:"footer-column"},n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"Site"),n.a.createElement("h1",null,"Menu")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Services")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Portfolio")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Testimonials")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"About Us")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Our Team")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Partners")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Blog"))),n.a.createElement("ul",{className:"footer-column"},n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"Our"),n.a.createElement("h1",null,"Services")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Architecture")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Interior Design")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Commercial Design")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"LED Lighting")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Floor Planning")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Decorating")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"All Services"))),n.a.createElement("ul",{className:"footer-column"},n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"Contact"),n.a.createElement("h1",null,"Us")),n.a.createElement("li",null,n.a.createElement("img",{src:"../Assets/icons/smartphone-copper.svg"})," +44 20 4511 0600"),n.a.createElement("li",null,n.a.createElement("img",{src:"../Assets/icons/envelope-copper.svg"})," info@bauwerk.com"),n.a.createElement("li",null,n.a.createElement("img",{src:"../Assets/icons/location-pin-copper.svg"})," Mohrenstrasse 37. Berlin"),n.a.createElement("li",null,n.a.createElement("img",{src:"../Assets/icons/clock-copper.svg"})," Mon-Sat 8AM-8PM ",n.a.createElement("span",null,"Sunday Closed"))),n.a.createElement("div",{className:"footer-column"},n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"Subscribe to Our"),n.a.createElement("h1",null,"Newsletter")),n.a.createElement("div",{className:"newsletter"},n.a.createElement("input",{type:"text",placeholder:"Email"}),n.a.createElement("button",null,n.a.createElement("img",{src:"../Assets/images/arrow-white-short.svg"}))),n.a.createElement(c.a,null))),n.a.createElement("div",{className:"copyright"},n.a.createElement(r.a,{to:"/",className:"logo-area"},n.a.createElement("img",{src:"../Assets/icons/logo.svg"}),n.a.createElement("div",{className:"name"},n.a.createElement("h1",null,e.site.siteMetadata.title),n.a.createElement("h3",null,"Architecture"),n.a.createElement("h3",null,"Buro"))),n.a.createElement("p",null,(new Date).getFullYear()," All Rights Reserved")))},o=(a(159),a(35)),m=a.n(o),u=a(7),E=a.n(u),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).showNav=a.showNav.bind(m()(a)),a.state={page:t,showNav:!1},a}E()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this,t=window.matchMedia("(max-width: 900px)");t.matches?this.setState(function(){return{showNav:!1}}):this.setState(function(){return{showNav:!0}}),window.addEventListener("resize",function(){t.matches?e.setState(function(){return{showNav:!1}}):e.setState(function(){return{showNav:!0}})})},a.showNav=function(){this.setState(function(e){return{showNav:!e.showNav}})},a.render=function(){return n.a.createElement("div",{className:"grid"},n.a.createElement("header",{className:"home"===this.state.page.name||1==this.state.page.over?"is-over grid":"not-over grid"},n.a.createElement("div",{className:"contact-info"},n.a.createElement("div",{className:"icons"},n.a.createElement("img",{src:"../Assets/icons/smartphone.svg",alt:"Phone Icon"}),n.a.createElement("p",null,"+44 20 4511 0600")),n.a.createElement("div",{className:"icons"},n.a.createElement("img",{src:"../Assets/icons/clock-circular-outline.svg",alt:"Clock Icon"}),n.a.createElement("p",null,"Mon-Sat 8AM-8PM ",n.a.createElement("span",null,"Sunday closed"))),n.a.createElement("div",{className:"icons"},n.a.createElement("img",{src:"../Assets/icons/envelope.svg",alt:"Letter Icon"}),n.a.createElement("p",null,"info@bauwerk.de")),n.a.createElement("div",{className:"icons"},n.a.createElement("img",{src:"../Assets/icons/location-pin.svg",alt:"Phone Icon"}),n.a.createElement("p",null,"Mohrenstrasse 37, Berlin"))),n.a.createElement("nav",null,n.a.createElement(r.a,{to:"/",className:"logo-area"},n.a.createElement("img",{src:"../Assets/icons/logo.svg",alt:""}),n.a.createElement("div",{className:"name"},n.a.createElement("h1",null,"Bauwerk"),n.a.createElement("h3",null,"Architecture"),n.a.createElement("h3",null,"Buro"))),n.a.createElement("ul",{style:this.state.showNav?{display:"flex "}:{display:"none"}},n.a.createElement("li",null,n.a.createElement(r.a,{to:"/"},"Home")),n.a.createElement("li",null,n.a.createElement(r.a,{to:"/services"},"Services")),n.a.createElement("li",null,n.a.createElement(r.a,{to:"/portfolio"},"Portfolio")),n.a.createElement("li",null,n.a.createElement(r.a,{to:"/blog"},"Blog")),n.a.createElement("li",null,n.a.createElement(r.a,{to:"/about"},"About")),n.a.createElement("li",null,n.a.createElement(r.a,{to:"/contact"},"Contact"))),n.a.createElement("div",{onClick:this.showNav,className:"burger"},n.a.createElement("img",{src:"../Assets/icons/nav-burger.svg",alt:"nav-burger"})))))},t}(n.a.Component);t.a=function(e){return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement(g,Object.assign({},e.page,{over:e.over})),e.children),n.a.createElement(i,null))}},164:function(e,t,a){var l;e.exports=(l=a(171))&&l.default||l},167:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(){return n.a.createElement("div",{className:"media-sidebar"},n.a.createElement("a",{href:"#",className:"icons"},n.a.createElement("img",{src:"../Assets/icons/social/instagram-white.svg",alt:"Instagram logo"}),n.a.createElement("h3",null,"Instagram")),n.a.createElement("a",{href:"#",className:"icons"},n.a.createElement("img",{src:"../Assets/icons/social/facebook-white.svg",alt:"Facebook logo"}),n.a.createElement("h3",null,"facebook")),n.a.createElement("a",{href:"#",className:"icons"},n.a.createElement("img",{src:"../Assets/icons/social/twitter-white.svg",alt:"Twitter logo"}),n.a.createElement("h3",null,"Twitter")),n.a.createElement("a",{href:"#",className:"icons"},n.a.createElement("img",{src:"../Assets/icons/social/behance-white.svg",alt:"Behance logo"}),n.a.createElement("h3",null,"Behance")))}},168:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(){return n.a.createElement("ul",{className:"social"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("img",{src:"../Assets/icons/social/facebook-white.svg"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("img",{src:"../Assets/icons/social/instagram-white.svg"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("img",{src:"../Assets/icons/social/twitter-white.svg"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("img",{src:"../Assets/icons/social/behance-white.svg"}))))}},170:function(e){e.exports={data:{site:{siteMetadata:{title:"Bauwerk"}}}}},171:function(e,t,a){"use strict";a.r(t);a(34);var l=a(0),n=a.n(l),s=a(4),r=a.n(s),c=a(56),i=a(2),o=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=o},181:function(e,t,a){"use strict";a(34);var l=a(182),n=a(0),s=a.n(n),r=a(155),c=a(157),i=a.n(c),o=a(154);t.a=function(){var e=l.data;return s.a.createElement("div",{className:"blog-component"},s.a.createElement(o.a,{section:"Blog",title:"Blog",subtitle:"and News"}),s.a.createElement(i.a,Object.assign({},{dots:!1,infinite:!0,speed:500,slidesToShow:3,lazyLoad:"progressive",slidesToScroll:3,adaptiveHeight:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:700,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0}}]},{className:"blog-slider"}),e.allContentfulBlog.edges.map(function(e,t){return s.a.createElement(r.a,{to:"blog/"+e.node.slug,className:"blog-col",key:t},s.a.createElement("img",{src:e.node.thumbnail.file.url}),s.a.createElement("p",null,e.node.createdAt),s.a.createElement("h1",null,e.node.title),s.a.createElement("div",{className:"read-more"},"Read more ",s.a.createElement("img",{src:"../Assets/images/arrow.svg",className:"rarrow"})))})))}},182:function(e){e.exports={data:{allContentfulBlog:{edges:[{node:{title:"The German Institute of Architecture has developed a new construction technology",createdAt:"May 23rd, 2019",slug:"german-architecture",thumbnail:{file:{url:"//images.ctfassets.net/gwdbp229r860/NsQHa9McxLFaIPguFoAbM/5c66e42a29dc35f4d35a415717e2e9fc/blog2-min.PNG"}}}},{node:{title:"7 Main rules before starting a design",createdAt:"May 23rd, 2019",slug:"starting-design",thumbnail:{file:{url:"//images.ctfassets.net/gwdbp229r860/4K7m5hOqUF2HMVBiH9c9tz/d55f521349915f69e6426c2e46576cbf/blog1-min.PNG"}}}},{node:{title:"The best interiors of fashion houses",createdAt:"May 23rd, 2019",slug:"best-interiors",thumbnail:{file:{url:"//images.ctfassets.net/gwdbp229r860/6owkFdTe9RRK2YGbBG69M/3e65b6eb11f9f242003365436d0de853/blog5-min.PNG"}}}},{node:{title:"The best interiors of fashion houses",createdAt:"May 23rd, 2019",slug:"interiors",thumbnail:{file:{url:"//images.ctfassets.net/gwdbp229r860/15pliC4s2OpFvU8kg5EyJ9/2b6aa7a743d2eb9ee54622e56d20d9de/blog6-min.PNG"}}}},{node:{title:"7 Main rules before starting a design",createdAt:"May 23rd, 2019",slug:"7-rules",thumbnail:{file:{url:"//images.ctfassets.net/gwdbp229r860/gHJtOWt2BARXygHbMXbPo/5982c0573ec9b1ed2999ae77d6c8de99/blog4-min.PNG"}}}},{node:{title:"The German Institute of Architecture has developed a new construction technology",createdAt:"May 23rd, 2019",slug:"german-technology",thumbnail:{file:{url:"//images.ctfassets.net/gwdbp229r860/4Yqs5y5O42J9UG795eUjDz/1a956924aea53ad5588b2d2876e6b2f1/blog3-min.PNG"}}}}]}}}},183:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(){return n.a.createElement("div",{className:"newsletter-section"},n.a.createElement("div",{className:"text-wrapper"},n.a.createElement("h1",null,"Subscribe to our newletter"),n.a.createElement("p",null,"Do not Miss the interesting news and be always in a trend")),n.a.createElement("form",{className:"sign-up"},n.a.createElement("input",{type:"text",placeholder:"Enter your email"}),n.a.createElement("button",null,"Subscribe ",n.a.createElement("img",{src:"../Assets/images/arrow-white-short.svg"}))))}}}]);
//# sourceMappingURL=component---src-templates-post-js-e65e37d543fbca1d54f9.js.map