(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1227:function(e,t,n){"use strict";n.r(t);var a=n(520),r=n.n(a),l=n(1),i=n.n(l),c=n(514),o=n.n(c),s=n(500),u=n(43),d=n(69),m=n(762),p=n(763),v=n(529),y=n.n(v),b=n(668),E=n(525),f=n(531);function h(){var e=r()(["\nquery System($inventoryId: String!){\n    system(id: $inventoryId) {\n        id\n        name\n    }\n}\n"]);return h=function(){return e},e}var g=o()(h());t.default=function(){var e,t=Object(u.m)().inventoryId,n=Object(s.b)(g,{variables:{inventoryId:t}}),a=n.data,r=n.error,l=n.loading,c=Object(u.k)(),o=Object(u.l)(),v=o.query&&o.query.hidePassed,h=null==a||null===(e=a.system)||void 0===e?void 0:e.name;return i.a.createElement(E.q,{stateValues:{error:r,data:a,loading:l}},i.a.createElement(E.p,{stateKey:"data"},i.a.createElement(d.PageHeader,null,i.a.createElement(m.a,null,i.a.createElement(p.a,{to:"/rhel/compliance/systems",onClick:function(e){return Object(b.a)(e,c)}},"Systems"),i.a.createElement(p.a,{isActive:!0},h)),i.a.createElement(f.g,null),i.a.createElement("br",null)),i.a.createElement(d.Main,null,i.a.createElement(y.a,{hidePassed:v,inventoryId:t}))),i.a.createElement(E.p,{stateKey:"loading"},i.a.createElement(d.PageHeader,null,i.a.createElement(d.Skeleton,{size:d.SkeletonSize.md}))))}},668:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(139);function r(e,t){e.preventDefault();var n="beta"===window.location.pathname.split("/")[1],r=e.target.pathname.replace(a.b,"");(t||this.props.history).push(n?"/beta/".concat(r):r)}}}]);
//# sourceMappingURL=../sourcemaps/SystemDetails.js.map