(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[539],{40033:(e,t,n)=>{"use strict";n.r(t),n.d(t,{SystemDetails:()=>h,default:()=>k});var a,r=n(32465),l=n(92950),s=n.n(l),m=n(45697),c=n.n(m),i=n(44119),o=n.n(i),d=n(46829),u=n(334),y=n(48716),E=n(56455),v=n(86350),p=n(32413),b=n(47893),f=n(95904),I=n(69030),Z=n(7648),g=o()(a||(a=(0,r.Z)(["\nquery System($inventoryId: String!){\n    system(id: $inventoryId) {\n        id\n        name\n    }\n}\n"]))),h=function(e){var t,n=e.route,a=(0,u.useParams)().inventoryId,r=(0,d.useQuery)(g,{variables:{inventoryId:a}}),l=r.data,m=r.error,c=r.loading,i=null==l||null===(t=l.system)||void 0===t?void 0:t.name;return(0,Z.a)(n,i),s().createElement(f.tC,{stateValues:{error:m,data:l,loading:c}},s().createElement(f.K7,{stateKey:"data"},s().createElement(y.Z,null,s().createElement(p.Breadcrumb,null,s().createElement(f.MU,{to:"/"},"Compliance"),s().createElement(f.MU,{to:"/systems"},"Systems"),s().createElement(p.BreadcrumbItem,{isActive:!0},i)),s().createElement(I.Ey,null),s().createElement("br",null)),s().createElement(v.Z,null,s().createElement(b.Z,{hidePassed:!0,inventoryId:a}))),s().createElement(f.K7,{stateKey:"loading"},s().createElement(y.Z,null,s().createElement(E.Z,{size:E.i.md}))))};h.propTypes={route:c().object};const k=h}}]);
//# sourceMappingURL=../sourcemaps/SystemDetails.a840778b29012dfaa628.js.map