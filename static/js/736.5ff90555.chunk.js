"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(r,e,t){t.r(e);var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(245),i=t(791),o=t(689),p=t(390),f=t(184);e.default=function(){var r=(0,i.useState)([]),e=(0,a.Z)(r,2),t=e[0],u=e[1],v=(0,i.useState)(!1),h=(0,a.Z)(v,2),l=h[0],d=h[1],m=(0,i.useState)(null),x=(0,a.Z)(m,2),k=x[0],w=x[1],Z=(0,o.UO)().movieId;return(0,i.useEffect)((function(){if(Z){var r=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,d(!0),r.next=4,(0,p.mu)(e);case 4:t=r.sent,u(t),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),w(r.t0.message);case 11:return r.prev=11,d(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(e){return r.apply(this,arguments)}}();r(Z)}}),[Z]),(0,f.jsxs)("div",{children:[l&&(0,f.jsx)(s.a,{}),null!==k&&(0,f.jsxs)("p",{children:["Oops, some error occured... ",k]}),0!==t.length?(0,f.jsx)("ul",{children:t.map((function(r){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h5",{children:["Author: ",r.author]}),(0,f.jsx)("p",{children:r.content})]},r.id)}))}):(0,f.jsx)("p",{children:"We don't have any reviews for this movie"})]})}},390:function(r,e,t){t.d(e,{$u:function(){return v},Z$:function(){return o},lc:function(){return p},mu:function(){return h},rP:function(){return f}});var n=t(861),a=t(757),u=t.n(a),c=t(243),s="https://api.themoviedb.org/3/",i="442842e0e9a8a18a8e446b3595831199",o=function(){var r=(0,n.Z)(u().mark((function r(){var e,t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e={params:{api_key:i}},r.next=3,c.Z.get("".concat(s,"/trending/movie/day"),e);case 3:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n,a;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={params:{api_key:i,query:e}},r.next=3,c.Z.get("".concat(s,"/search/movie"),t);case 3:return n=r.sent,a=n.data,r.abrupt("return",a.results);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n,a;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={params:{api_key:i}},r.next=3,c.Z.get("".concat(s,"/movie/").concat(e),t);case 3:return n=r.sent,a=n.data,r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n,a;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={params:{api_key:i}},r.next=3,c.Z.get("".concat(s,"/movie/").concat(e,"/credits"),t);case 3:return n=r.sent,a=n.data,r.abrupt("return",a.cast);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n,a;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={params:{api_key:i}},r.next=3,c.Z.get("".concat(s,"/movie/").concat(e,"/reviews"),t);case 3:return n=r.sent,a=n.data,r.abrupt("return",a.results);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.5ff90555.chunk.js.map