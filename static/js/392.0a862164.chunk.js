"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[392],{794:function(t,e,n){n.d(e,{JN:function(){return s},Ku:function(){return f},Pg:function(){return o},Pt:function(){return m},fI:function(){return h}});var r=n(861),a=n(757),c=n.n(a),u=n(294).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"3674ab87cc7e60af457a5586f5fcf775"}});function s(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("trending/movie/day").then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("movie/".concat(e)).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("movie/".concat(e,"/credits")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("movie/".concat(e,"/reviews")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return _.apply(this,arguments)}function _(){return _=(0,r.Z)(c().mark((function t(e){var n,r,a,s,i,o=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,r=o.length>2&&void 0!==o[2]?o[2]:"en-US",a=o.length>3&&void 0!==o[3]?o[3]:"",s=o.length>4&&void 0!==o[4]?o[4]:"",i={params:{query:e,include_adult:!1,language:r,page:n,region:a,year:s}},t.next=7,u.get("search/movie",i).then((function(t){return t.data}));case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)}))),_.apply(this,arguments)}},392:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),i=n(689),o=n(913),p=n(794),f=n(119),l=n(356),h="cast_container__xBK1C",d="cast_item__AMMjV",m="cast_poster__VH74P",_="cast_title__R2CBp",v="cast_text__E0CXR",x="cast_note__9pT3Z",g=n(184),w=function(){var t=(0,s.useState)(!1),e=(0,a.Z)(t,2),n=e[0],c=e[1],w=(0,s.useState)(null),y=(0,a.Z)(w,2),k=y[0],Z=y[1],j=(0,s.useState)([]),b=(0,a.Z)(j,2),N=b[0],C=b[1],R=(0,i.UO)().movieId;(0,s.useEffect)((function(){if(R){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(!0),t.next=4,(0,p.Ku)(R);case 4:e=t.sent,n=e.cast,C(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),Z(t.t0.message);case 12:return t.prev=12,c(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}}),[R]);var P=N.map((function(t){var e=t.cast_id,n=t.original_name,r=t.character,a=t.profile_path,c=a?"https://image.tmdb.org/t/p/w500".concat(a):o;return(0,g.jsxs)("li",{className:d,children:[(0,g.jsx)("img",{src:c,alt:n,className:m}),(0,g.jsxs)("h3",{className:_,children:["Name: ",n]}),(0,g.jsxs)("p",{className:v,children:["Character: ",r]})]},e)}));return(0,g.jsxs)(g.Fragment,{children:[n&&(0,g.jsx)(f.Z,{}),k&&(0,g.jsx)(l.Z,{}),N.length?(0,g.jsx)("ul",{className:h,children:P}):(0,g.jsx)("div",{className:x,children:"We don't have any additional information for this movie"})]})}},356:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(87),a="error_container__n7OJx",c="error_title__applZ",u="error_link__07RWj",s=n(184),i=function(){return(0,s.jsxs)("div",{className:a,children:[(0,s.jsx)("h1",{className:c,children:"Page not Found. Return to the Home page"}),(0,s.jsx)(r.rU,{to:"/",className:u,children:"To Home page ..."})]})}},913:function(t,e,n){t.exports=n.p+"static/media/no_image.43a1a11715a2ed0b8338.png"}}]);
//# sourceMappingURL=392.0a862164.chunk.js.map