(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1245:function(e,t,n){"use strict";n.r(t),n.d(t,"SystemDetails",(function(){return k}));var a=n(516),r=n.n(a),l=n(0),i=n.n(l),c=n(510),o=n.n(c),s=n(490),u=n(15),d=n(84),m=n(790),y=n(791),v=n(525),p=n.n(v),E=n(695),b=n(511),f=n(534),h=n(151),g=n.n(h);function w(){var e=r()(["\nquery System($inventoryId: String!){\n    system(id: $inventoryId) {\n        id\n        name\n    }\n}\n"]);return w=function(){return e},e}var S=o()(w()),k=function(){var e,t=Object(u.m)().inventoryId,n=Object(s.useQuery)(S,{variables:{inventoryId:t}}),a=n.data,r=n.error,l=n.loading,c=Object(u.k)(),o=Object(u.l)(),v=o.query&&o.query.hidePassed,h=null==a||null===(e=a.system)||void 0===e?void 0:e.name;return i.a.createElement(b.r,{stateValues:{error:r,data:a,loading:l}},i.a.createElement(b.q,{stateKey:"data"},i.a.createElement(d.PageHeader,null,i.a.createElement(m.a,null,i.a.createElement(y.a,{to:"/rhel/compliance/systems",onClick:function(e){return Object(E.a)(e,c)}},"Systems"),i.a.createElement(y.a,{isActive:!0},h)),i.a.createElement(f.g,null),i.a.createElement("br",null)),i.a.createElement(d.Main,null,i.a.createElement(p.a,{hidePassed:v,inventoryId:t}))),i.a.createElement(b.q,{stateKey:"loading"},i.a.createElement(d.PageHeader,null,i.a.createElement(d.Skeleton,{size:d.SkeletonSize.md}))))};t.default=g()(k)},695:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(159);function r(e,t){e.preventDefault();var n="beta"===window.location.pathname.split("/")[1],r=e.target.pathname.replace(a.b,"");(t||this.props.history).push(n?"/beta/".concat(r):r)}}}]);
//# sourceMappingURL=../sourcemaps/SystemDetails.js.map