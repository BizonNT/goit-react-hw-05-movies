"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[254],{794:function(t,e,n){n.d(e,{JN:function(){return i},Ku:function(){return p},Pg:function(){return o},Pt:function(){return m},fI:function(){return h}});var r=n(861),a=n(757),u=n.n(a),c=n(294).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"3674ab87cc7e60af457a5586f5fcf775"}});function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("trending/movie/day").then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e)).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e,"/credits")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e,"/reviews")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return v=(0,r.Z)(u().mark((function t(e){var n,r,a,i,s,o=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,r=o.length>2&&void 0!==o[2]?o[2]:"en-US",a=o.length>3&&void 0!==o[3]?o[3]:"",i=o.length>4&&void 0!==o[4]?o[4]:"",s={params:{query:e,include_adult:!1,language:r,page:n,region:a,year:i}},t.next=7,c.get("search/movie",s).then((function(t){return t.data}));case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}},356:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(87),a="error_container__n7OJx",u="error_title__applZ",c="error_link__07RWj",i=n(184),s=function(){return(0,i.jsxs)("div",{className:a,children:[(0,i.jsx)("h1",{className:u,children:"Page not Found. Return to the Home page"}),(0,i.jsx)(r.rU,{to:"/",className:c,children:"To Home page ..."})]})}},355:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(689),a=n(87),u="movie-list_list__U-qGD",c="movie-list_item__514PC",i="movie-list_link__klGvP",s=n(184),o=function(t){var e=t.movieList,n=(0,r.TH)(),o=e.map((function(t){var e=t.id,r=t.title;return(0,s.jsx)("li",{className:c,children:(0,s.jsx)(a.rU,{to:"/movies/".concat(e),className:i,state:{from:n},children:r})},e)}));return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{className:u,children:o})})}},254:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(791),s=n(794),o=n(119),f=n(683),p=n(355),l="home_container__cpYqt",h="home_title__wNn6R",d=n(184),m=function(t){var e=Object.assign({},t);return(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("h1",{className:h,children:"Trending Today"}),(0,d.jsx)(p.Z,(0,f.Z)({},e))]})},v=n(356),_=function(){var t=(0,i.useState)(!1),e=(0,a.Z)(t,2),n=e[0],u=e[1],f=(0,i.useState)(null),p=(0,a.Z)(f,2),l=p[0],h=p[1],_=(0,i.useState)([]),x=(0,a.Z)(_,2),g=x[0],w=x[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u(!0),t.next=4,(0,s.JN)();case 4:e=t.sent,n=e.results,w(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),h(t.t0.message);case 12:return t.prev=12,u(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,d.jsxs)(d.Fragment,{children:[n&&(0,d.jsx)(o.Z,{}),l&&(0,d.jsx)(v.Z,{}),g.length&&(0,d.jsx)(m,{movieList:g})]})}}}]);
//# sourceMappingURL=254.cb51e848.chunk.js.map