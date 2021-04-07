(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[72],{41251:(e,t,n)=>{(t=n(23645)(!1)).push([e.id,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-details{padding-top:10px}.report-details-button{text-align:right}\n",""]),e.exports=t},44641:(e,t,n)=>{"use strict";n.r(t),n.d(t,{QUERY:()=>K,ReportDetails:()=>L,default:()=>q});var r,l=n(59713),a=n.n(l),o=n(319),i=n.n(o),c=n(28655),s=n.n(c),p=n(77865),u=n.n(p),m=n(61084),d=n(91346),y=n(55490),f=n(34925),E=n(45697),h=n.n(E),g=n(334),v=n(46829),b=n(44119),O=n.n(b),w=n(73581),k=n(52067),_=n(4092),C=n(48716),I=n(39173),S=n(86350),j=n(92223),P=n(6023),Z=n(62410),G=n(85974),T=n(42564),x=n(95612),D=n(21157),F=n(52998),H=n(93188),R=(n(90129),n(47511),n(55186)),V=n(49690);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K=O()(r||(r=s()(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        testResultHostCount\n        compliantHostCount\n        unsupportedHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        policyType\n        policy {\n            id\n            name\n        }\n        benchmark {\n            id\n            version\n        }\n        businessObjective {\n            id\n            title\n        }\n    }\n}\n"]))),L=function(e){var t,n,r,l,a,o,c=e.route,s=(0,T.ZP)("showSsgVersions"),E=(0,T.ZP)("newInventory"),h=(0,g.useParams)().report_id,b=(0,v.useQuery)(K,{variables:{policyId:h}}),O=b.data,N=b.error,L=b.loading,q=(0,m.useDispatch)(),M=[],U="loading-donut",Q={};if(!L&&O){r=(Q=O.profile).policy.name,t=s,o="Report: ".concat(r);var $=Q.compliantHostCount,z=Q.testResultHostCount;U=Q.name.replace(/ /g,""),M=[{x:"Compliant",y:z?$:"0"},{x:"Non-compliant",y:z-$}],n=0===z&&[d.Z.value]||[f.Z.value,y.Z.value],l=[{name:M[0].y+" "+(0,G._6)(M[0].y,"system")+" compliant"},{name:M[1].y+" "+(0,G._6)(M[1].y,"system")+" non-compliant"}],a=z?(0,G.P0)(Math.floor(M[0].y/(M[0].y+M[1].y)*100)):0}var A=[B({key:"facts.compliance.display_name",title:"Name",props:{width:30}},E&&{key:"display_name",renderFunc:V.B3})].concat(i()(t?[{key:"ssgVersion",title:"SSG version",props:{width:5},renderFunc:function(e){var t,n,r=e;return"string"==typeof e&&(r=arguments.length<=2?void 0:arguments[2]),r&&u().createElement(D.n1.SSGVersion,{supported:r.supported,ssgVersion:(null===(t=r)||void 0===t?void 0:t.ssg_version)||(null===(n=r)||void 0===n?void 0:n.ssgVersion)})}}]:[]),[B({key:"facts.compliance.rules_failed",title:"Failed rules",props:{width:5}},E&&{key:"rulesFailed",renderFunc:function(e,t){return u().createElement(g.Link,{to:{pathname:"/systems/".concat(t)}}," ",e," ")}}),B({key:"facts.compliance.compliance_score",title:"Compliance score",props:{width:5}},E&&{key:"score",renderFunc:function(e,t,n){return(0,x.OF)(n)}}),B({key:"facts.compliance.last_scanned",title:"Last scanned",props:{width:10}},E&&{key:"lastScanned",renderFunc:function(e){return e instanceof Date?u().createElement(Z.Z,{date:Date.parse(e),type:"relative"}):e}})]);(0,p.useLayoutEffect)((function(){q({type:"SELECT_ENTITIES",payload:{ids:[]}})}),[]);var W=E?H.e_:H.r0;return(0,F.a)(c,r),u().createElement(x.tC,{stateValues:{error:N,data:O,loading:L}},u().createElement(x.K7,{stateKey:"loading"},u().createElement(C.Z,null,u().createElement(x.Tq,null)),u().createElement(S.Z,null,u().createElement(j.Z,null,u().createElement(P.Z,null)))),u().createElement(x.K7,{stateKey:"data"},u().createElement(C.Z,null,u().createElement(_.Breadcrumb,null,u().createElement(x.MU,{to:"/"},"Compliance"),u().createElement(x.MU,{to:"/reports"},"Reports"),u().createElement(_.BreadcrumbItem,{isActive:!0},o)),u().createElement(_.Grid,{hasGutter:!0},u().createElement(_.GridItem,{sm:9,md:9,lg:9,xl:9},u().createElement(I.Z,{title:o}),u().createElement(x.Zr,null,Q.policyType)),u().createElement(_.GridItem,{className:"report-details-button",sm:3,md:3,lg:3,xl:3},u().createElement(x.mR,{state:{profile:Q},to:"/reports/".concat(Q.id,"/delete")},u().createElement(_.Button,{variant:"link",isInline:!0},"Delete report")))),u().createElement(_.Grid,{hasGutter:!0},u().createElement(_.GridItem,{sm:12,md:12,lg:12,xl:6},u().createElement("div",{className:"chart-inline"},u().createElement("div",{className:"chart-container"},u().createElement(w.HS,{data:M,identifier:U,title:a,subTitle:"Compliant",themeVariant:k.py.light,colorScale:n,style:{fontSize:20},innerRadius:88,width:462,legendPosition:"right",legendData:l,legendOrientation:"vertical",padding:{bottom:20,left:0,right:250,top:20}}))),Q.unsupportedHostCount>0&&u().createElement(_.Text,null,u().createElement(x.cT,{showHelpIcon:!0},u().createElement("strong",{className:"ins-c-warning-text"},Q.unsupportedHostCount," systems not supported")))),u().createElement(_.GridItem,{sm:12,md:12,lg:12,xl:6},u().createElement(x.vu,{profile:Q})))),u().createElement(S.Z,null,u().createElement(_.Grid,{hasGutter:!0},u().createElement(_.GridItem,{span:12},u().createElement(W,{query:R.Ep,showOnlySystemsWithTestResults:!0,compliantFilter:!0,defaultFilter:"with_results_for_policy_id = ".concat(Q.id),policyId:Q.id,columns:A}))))))};L.propTypes={route:h().object};const q=L},47511:(e,t,n)=>{"use strict";var r=n(93379),l=n.n(r),a=n(41251),o=n.n(a),i=l()(o(),{insert:"head",singleton:!1});if(!o().locals||e.hot.invalidate){var c=o().locals;e.hot.accept(41251,(t=>{a=n(41251),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(c,(o=n.n(a))().locals)?(c=o().locals,i(o())):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),o().locals}}]);
//# sourceMappingURL=ReportDetails.61f6e54e5d0f17cd56cc.js.map