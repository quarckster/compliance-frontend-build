(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[539],{40033:(e,t,n)=>{"use strict";n.r(t),n.d(t,{SystemDetails:()=>h,default:()=>S});var a,r=n(32465),l=n(92950),s=n.n(l),m=n(45697),c=n.n(m),i=n(33121),d=n(46829),o=n(334),u=n(48716),y=n(56455),E=n(86350),v=n(489),p=n(47893),b=n(31762),I=n(33179),Z=n(7648),f=(0,i.ZP)(a||(a=(0,r.Z)(["\nquery System($inventoryId: String!){\n    system(id: $inventoryId) {\n        id\n        name\n    }\n}\n"]))),h=function(e){var t,n=e.route,a=(0,o.useParams)().inventoryId,r=(0,d.useQuery)(f,{variables:{inventoryId:a}}),l=r.data,m=r.error,c=r.loading,i=null==l||null===(t=l.system)||void 0===t?void 0:t.name;return(0,Z.a)(n,i),s().createElement(b.tC,{stateValues:{error:m,data:l,loading:c}},s().createElement(b.K7,{stateKey:"data"},s().createElement(u.Z,null,s().createElement(v.Breadcrumb,{ouiaId:"SystemDetailsPathBreadcrumb"},s().createElement(b.MU,{to:"/"},"Compliance"),s().createElement(b.MU,{to:"/systems"},"Systems"),s().createElement(v.BreadcrumbItem,{isActive:!0},i)),s().createElement(I.Ey,null),s().createElement("br",null)),s().createElement(E.Z,null,s().createElement(p.Z,{hidePassed:!0,inventoryId:a}))),s().createElement(b.K7,{stateKey:"loading"},s().createElement(u.Z,null,s().createElement(y.Z,{size:y.i.md}))))};h.propTypes={route:c().object};const S=h}}]);
//# sourceMappingURL=../sourcemaps/SystemDetails.31a12b8c914eef867cdb.js.map