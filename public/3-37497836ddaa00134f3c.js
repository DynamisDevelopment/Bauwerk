(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{154:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(4),s=a.n(l),i=a(33),c=a.n(i);a.d(t,"a",function(){return c.a});a(157),n.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},155:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){return n.a.createElement("div",{className:"section-title"},n.a.createElement("h1",null,e.section," ",n.a.createElement("div",{className:"line"})),n.a.createElement("h3",null,e.title),n.a.createElement("h3",null,e.subtitle))}},157:function(e,t,a){var r;e.exports=(r=a(163))&&r.default||r},158:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(){return n.a.createElement("ul",{className:"social"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("img",{src:"../Assets/icons/social/facebook-white.svg"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("img",{src:"../Assets/icons/social/instagram-white.svg"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("img",{src:"../Assets/icons/social/twitter-white.svg"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("img",{src:"../Assets/icons/social/behance-white.svg"}))))}},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Bauwerk"}}}}},161:function(e,t,a){"use strict";a(34);var r=a(0),n=a.n(r),l=a(160),s=a(154),i=(a(156),a(158)),c=function(){var e=l.data;return n.a.createElement("div",{className:"grid bg-black"},n.a.createElement("footer",null,n.a.createElement("ul",{className:"footer-column"},n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"Site"),n.a.createElement("h1",null,"Menu")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Services")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Portfolio")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Testimonials")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"About Us")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Our Team")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Partners")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Blog"))),n.a.createElement("ul",{className:"footer-column"},n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"Our"),n.a.createElement("h1",null,"Services")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Architecture")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Interior Design")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Commercial Design")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"LED Lighting")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Floor Planning")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Decorating")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"All Services"))),n.a.createElement("ul",{className:"footer-column"},n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"Contact"),n.a.createElement("h1",null,"Us")),n.a.createElement("li",null,n.a.createElement("img",{src:"../Assets/icons/smartphone-copper.svg"})," +44 20 4511 0600"),n.a.createElement("li",null,n.a.createElement("img",{src:"../Assets/icons/envelope-copper.svg"})," info@bauwerk.com"),n.a.createElement("li",null,n.a.createElement("img",{src:"../Assets/icons/location-pin-copper.svg"})," Mohrenstrasse 37. Berlin"),n.a.createElement("li",null,n.a.createElement("img",{src:"../Assets/icons/clock-copper.svg"})," Mon-Sat 8AM-8PM ",n.a.createElement("span",null,"Sunday Closed"))),n.a.createElement("div",{className:"footer-column"},n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"Subscribe to Our"),n.a.createElement("h1",null,"Newsletter")),n.a.createElement("div",{className:"newsletter"},n.a.createElement("input",{type:"text",placeholder:"Email"}),n.a.createElement("button",null,n.a.createElement("img",{src:"../Assets/images/arrow-white-short.svg"}))),n.a.createElement(i.a,null))),n.a.createElement("div",{className:"copyright"},n.a.createElement(s.a,{to:"/",className:"logo-area"},n.a.createElement("img",{src:"../Assets/icons/logo.svg"}),n.a.createElement("div",{className:"name"},n.a.createElement("h1",null,e.site.siteMetadata.title),n.a.createElement("h3",null,"Architecture"),n.a.createElement("h3",null,"Buro"))),n.a.createElement("p",null,(new Date).getFullYear()," All Rights Reserved")))},o=(a(162),a(35)),u=a.n(o),d=a(7),m=a.n(d),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).showNav=a.showNav.bind(u()(a)),a.state={page:t,showNav:!1},a}m()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this,t=window.matchMedia("(max-width: 900px)");t.matches?this.setState(function(){return{showNav:!1}}):this.setState(function(){return{showNav:!0}}),window.addEventListener("resize",function(){t.matches?e.setState(function(){return{showNav:!1}}):e.setState(function(){return{showNav:!0}})})},a.showNav=function(){this.setState(function(e){return{showNav:!e.showNav}})},a.render=function(){return n.a.createElement("div",{className:"grid"},n.a.createElement("header",{className:"home"===this.state.page.name||1==this.state.page.over?"is-over grid":"not-over grid"},n.a.createElement("div",{className:"contact-info"},n.a.createElement("div",{className:"icons"},n.a.createElement("img",{src:"../Assets/icons/smartphone.svg",alt:"Phone Icon"}),n.a.createElement("p",null,"+44 20 4511 0600")),n.a.createElement("div",{className:"icons"},n.a.createElement("img",{src:"../Assets/icons/clock-circular-outline.svg",alt:"Clock Icon"}),n.a.createElement("p",null,"Mon-Sat 8AM-8PM ",n.a.createElement("span",null,"Sunday closed"))),n.a.createElement("div",{className:"icons"},n.a.createElement("img",{src:"../Assets/icons/envelope.svg",alt:"Letter Icon"}),n.a.createElement("p",null,"info@bauwerk.de")),n.a.createElement("div",{className:"icons"},n.a.createElement("img",{src:"../Assets/icons/location-pin.svg",alt:"Phone Icon"}),n.a.createElement("p",null,"Mohrenstrasse 37, Berlin"))),n.a.createElement("nav",null,n.a.createElement(s.a,{to:"/",className:"logo-area"},n.a.createElement("img",{src:"../Assets/icons/logo.svg",alt:""}),n.a.createElement("div",{className:"name"},n.a.createElement("h1",null,"Bauwerk"),n.a.createElement("h3",null,"Architecture"),n.a.createElement("h3",null,"Buro"))),n.a.createElement("ul",{style:this.state.showNav?{display:"flex "}:{display:"none"}},n.a.createElement("li",null,n.a.createElement(s.a,{to:"/"},"Home")),n.a.createElement("li",null,n.a.createElement(s.a,{to:"/services"},"Services")),n.a.createElement("li",null,n.a.createElement(s.a,{to:"/portfolio"},"Portfolio")),n.a.createElement("li",null,n.a.createElement(s.a,{to:"/blog"},"Blog")),n.a.createElement("li",null,n.a.createElement(s.a,{to:"/about"},"About")),n.a.createElement("li",null,n.a.createElement(s.a,{to:"/contact"},"Contact"))),n.a.createElement("div",{onClick:this.showNav,className:"burger"},n.a.createElement("img",{src:"../Assets/icons/nav-burger.svg",alt:"nav-burger"})))))},t}(n.a.Component);t.a=function(e){return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement(f,Object.assign({},e.page,{over:e.over})),e.children),n.a.createElement(c,null))}},163:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),l=a(4),s=a.n(l),i=a(55),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},164:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(){return n.a.createElement("div",{className:"media-sidebar"},n.a.createElement("a",{href:"#",className:"icons"},n.a.createElement("img",{src:"../Assets/icons/social/instagram-white.svg",alt:"Instagram logo"}),n.a.createElement("h3",null,"Instagram")),n.a.createElement("a",{href:"#",className:"icons"},n.a.createElement("img",{src:"../Assets/icons/social/facebook-white.svg",alt:"Facebook logo"}),n.a.createElement("h3",null,"facebook")),n.a.createElement("a",{href:"#",className:"icons"},n.a.createElement("img",{src:"../Assets/icons/social/twitter-white.svg",alt:"Twitter logo"}),n.a.createElement("h3",null,"Twitter")),n.a.createElement("a",{href:"#",className:"icons"},n.a.createElement("img",{src:"../Assets/icons/social/behance-white.svg",alt:"Behance logo"}),n.a.createElement("h3",null,"Behance")))}},183:function(e,t,a){"use strict";a(162);var r=a(0),n=a.n(r),l=a(155),s=a(154);a(191);t.a=function(e){return n.a.createElement("div",{className:"projects-section"},n.a.createElement(l.a,{section:"Portfolio",title:e.whos+" Latest",subtitle:"Projects"}),n.a.createElement("div",{className:"projects projects-grid"},e.edges.map(function(e,t){return n.a.createElement(s.a,{to:"projects/"+e.node.slug,className:"project",key:t},n.a.createElement("img",{src:e.node.thumbnail.file.url}),n.a.createElement("div",{className:"projects-text-wrapper"},n.a.createElement("p",null,e.node.category),n.a.createElement("h1",null,e.node.name)))})),n.a.createElement("button",{className:"more-btn"},n.a.createElement(s.a,{to:"/portfolio"},"View all works ",n.a.createElement("img",{src:"../Assets/images/arrow-white.svg"}))))}},191:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,l=r(a(35)),s=r(a(7)),i=r(a(76)),c=r(a(77)),o=r(a(0)),u=r(a(4)),d=function(e){var t=(0,c.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},m=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),g=function(e){var t=d(e),a=m(t);return f[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,E=p&&window.IntersectionObserver,v=new WeakMap;function b(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,l=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:l}),o.default.createElement("source",{media:n,srcSet:a,sizes:l}))})}function w(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),[].concat(t,a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})})}function y(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})})}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,l=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(l?'sizes="'+l+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",i=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)}).join("")+"<img "+o+s+i+a+r+t+l+n+c+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,l=o.default.createElement(I,(0,c.default)({src:t},n));return a.length>1?o.default.createElement("picture",null,r(a),l):l},I=o.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,l=e.style,s=e.onLoad,u=e.onError,d=e.onClick,m=e.loading,f=e.draggable,g=(0,i.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return o.default.createElement("img",(0,c.default)({sizes:a,srcSet:r,src:n},g,{onLoad:s,onError:u,onClick:d,ref:t,loading:m,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},l)}))});I.propTypes={style:u.default.object,onError:u.default.func,onClick:u.default.func,onLoad:u.default.func};var A=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=p&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||p&&(h||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)(a)),a.handleRef=a.handleRef.bind((0,l.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=m(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,l=void 0===n?{}:n,s=e.imgStyle,i=void 0===s?{}:s,u=e.placeholderStyle,m=void 0===u?{}:u,f=e.placeholderClassName,g=e.fluid,h=e.fixed,p=e.backgroundColor,E=e.durationFadeIn,v=e.Tag,w=e.itemProp,N=e.loading,L=e.draggable,A=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,c.default)({opacity:A?1:0,transition:R?"opacity "+E+"ms":"none"},i),P="boolean"==typeof p?"lightgray":p,V={transitionDelay:E+"ms"},j=(0,c.default)({opacity:this.state.imgLoaded?0:1},R&&V,{},i,{},m),z={title:t,alt:this.state.isVisible?"":a,style:j,className:f,itemProp:w};if(g){var M=g,T=M[0];return o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},o.default.createElement(v,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),P&&o.default.createElement(v,{title:t,style:(0,c.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&V)}),T.base64&&o.default.createElement(C,{src:T.base64,spreadProps:z,imageVariants:M,generateSources:y}),T.tracedSVG&&o.default.createElement(C,{src:T.tracedSVG,spreadProps:z,imageVariants:M,generateSources:S}),this.state.isVisible&&o.default.createElement("picture",null,b(M),o.default.createElement(I,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:w,loading:N,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,c.default)({alt:a,title:t,loading:N},T,{imageVariants:M}))}}))}if(h){var x=h,B=x[0],q=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},l);return"inherit"===l.display&&delete q.display,o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},P&&o.default.createElement(v,{title:t,style:(0,c.default)({backgroundColor:P,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},R&&V)}),B.base64&&o.default.createElement(C,{src:B.base64,spreadProps:z,imageVariants:x,generateSources:y}),B.tracedSVG&&o.default.createElement(C,{src:B.tracedSVG,spreadProps:z,imageVariants:x,generateSources:S}),this.state.isVisible&&o.default.createElement("picture",null,b(x),o.default.createElement(I,{alt:a,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:w,loading:N,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,c.default)({alt:a,title:t,loading:N},B,{imageVariants:x}))}}))}return null},t}(o.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),O=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});A.propTypes={resolutions:R,sizes:O,fixed:u.default.oneOfType([R,u.default.arrayOf(R)]),fluid:u.default.oneOfType([O,u.default.arrayOf(O)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onClick:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var P=A;t.default=P}}]);
//# sourceMappingURL=3-37497836ddaa00134f3c.js.map