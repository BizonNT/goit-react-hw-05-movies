"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{794:function(e,t,n){n.d(t,{JN:function(){return i},Ku:function(){return l},Pg:function(){return o},Pt:function(){return v},fI:function(){return m}});var r=n(861),a=n(757),u=n.n(a),c=n(294).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"3674ab87cc7e60af457a5586f5fcf775"}});function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("trending/movie/day").then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t)).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t,"/credits")).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t,"/reviews")).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(u().mark((function e(t){var n,r,a,i,s,o=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,r=o.length>2&&void 0!==o[2]?o[2]:"en-US",a=o.length>3&&void 0!==o[3]?o[3]:"",i=o.length>4&&void 0!==o[4]?o[4]:"",s={params:{query:t,include_adult:!1,language:r,page:n,region:a,year:i}},e.next=7,c.get("search/movie",s).then((function(e){return e.data}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}},356:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(87),a="error_container__n7OJx",u="error_title__applZ",c="error_link__07RWj",i=n(184),s=function(){return(0,i.jsxs)("div",{className:a,children:[(0,i.jsx)("h1",{className:u,children:"Page not Found. Return to the Home page"}),(0,i.jsx)(r.rU,{to:"/",className:c,children:"To Home page ..."})]})}},355:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(689),a=n(87),u="movie-list_list__U-qGD",c="movie-list_item__514PC",i="movie-list_link__klGvP",s=n(184),o=function(e){var t=e.movieList,n=(0,r.TH)(),o=t.map((function(e){var t=e.id,r=e.title;return(0,s.jsx)("li",{className:c,children:(0,s.jsx)(a.rU,{to:"/movies/".concat(t),className:i,state:{from:n},children:r})},t)}));return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{className:u,children:o})})}},544:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(791),s=n(87),o=n(794),f=n(119),l=n(356),p=n(683);function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h="search-form_form__+aeW5",v="search-form_button__G6G9+",d="search-form_label__tBgoZ",_="search-form_input__amXEk",x=n(184),g=function(e){var t=e.onSubmit,n=(0,i.useState)(""),r=(0,a.Z)(n,2),u=r[0],c=r[1];return(0,x.jsxs)("form",{className:h,onSubmit:function(e){e.preventDefault(),t(u.trim().toLowerCase())},children:[(0,x.jsx)("input",{name:"searchInput",value:u,onChange:function(e){c(e.target.value)},className:_,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search Movie name"}),(0,x.jsx)("button",{type:"submit",className:v,children:(0,x.jsx)("span",{className:d,children:"Search"})})]})},b=n(355),y="movie_container__obT2Z",j=["onSubmit"],Z=function(e){var t=e.onSubmit,n=m(e,j);return(0,x.jsxs)("div",{className:y,children:[(0,x.jsx)(g,{onSubmit:t}),(0,x.jsx)(b.Z,(0,p.Z)({},n))]})},w=function(){var e=(0,i.useState)(!1),t=(0,a.Z)(e,2),n=t[0],u=t[1],p=(0,i.useState)(null),m=(0,a.Z)(p,2),h=m[0],v=m[1],d=(0,i.useState)([]),_=(0,a.Z)(d,2),g=_[0],b=_[1],y=(0,s.lr)(),j=(0,a.Z)(y,2),w=j[0],k=j[1],S=w.get("query");(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,(0,o.Pt)(S);case 4:t=e.sent,b(t.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),v(e.t0.message);case 11:return e.prev=11,u(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();S&&e()}),[S]);return(0,x.jsxs)(x.Fragment,{children:[n&&(0,x.jsx)(f.Z,{}),h&&(0,x.jsx)(l.Z,{}),!n&&(0,x.jsx)(Z,{movieList:g,onSubmit:function(e){k({query:e}),b([])}})]})}}}]);
//# sourceMappingURL=544.28d092b4.chunk.js.map