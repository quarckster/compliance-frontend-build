(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[72],{79641:(e,t,n)=>{"use strict";n.r(t),n.d(t,{QUERY:()=>_,ReportDetails:()=>T,default:()=>O});var l,r=n(32465),a=n(92950),o=n.n(a),i=n(91346),s=n(55490),c=n(34925),m=n(45697),d=n.n(m),p=n(334),u=n(46829),E=n(33121),h=n(73581),y=n(52067),f=n(30586),g=n(48716),v=n(39173),b=n(86350),I=n(92223),C=n(6023),Z=n(11443),w=n(23860),x=n(7648),G=n(69030),H=(n(90129),n(47511),n(27803)),R=n(31499),_=(0,E.ZP)(l||(l=(0,r.Z)(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        testResultHostCount\n        compliantHostCount\n        unsupportedHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        policyType\n        policy {\n            id\n            name\n        }\n        benchmark {\n            id\n            version\n        }\n        businessObjective {\n            id\n            title\n        }\n    }\n}\n"]))),T=function(e){var t,n,l,r,a,m=e.route,d=(0,p.useParams)().report_id,E=(0,u.useQuery)(_,{variables:{policyId:d}}),T=E.data,O=E.error,k=E.loading,N=[],P="loading-donut",S={};if(!k&&T){n=(S=T.profile).policy.name,a="Report: ".concat(n);var V=S.compliantHostCount,j=S.testResultHostCount;P=S.name.replace(/ /g,""),N=[{x:"Compliant",y:j?V:"0"},{x:"Non-compliant",y:j-V}],t=0===j&&[i.Z.value]||[c.Z.value,s.Z.value],l=[{name:N[0].y+" "+(0,Z._6)(N[0].y,"system")+" compliant"},{name:N[1].y+" "+(0,Z._6)(N[1].y,"system")+" non-compliant"}],r=j?(0,Z.P0)(Math.floor(N[0].y/(N[0].y+N[1].y)*100)):0}return(0,x.a)(m,n),o().createElement(w.tC,{stateValues:{error:O,data:T,loading:k}},o().createElement(w.K7,{stateKey:"loading"},o().createElement(g.Z,null,o().createElement(w.Tq,null)),o().createElement(b.Z,null,o().createElement(I.Z,null,o().createElement(C.Z,null)))),o().createElement(w.K7,{stateKey:"data"},o().createElement(g.Z,null,o().createElement(f.Breadcrumb,{ouiaId:"ReportDetailsPathBreadcrumb"},o().createElement(w.MU,{to:"/"},"Compliance"),o().createElement(w.MU,{to:"/reports"},"Reports"),o().createElement(f.BreadcrumbItem,{isActive:!0},a)),o().createElement(f.Grid,{hasGutter:!0},o().createElement(f.GridItem,{sm:9,md:9,lg:9,xl:9},o().createElement(v.Z,{title:a}),o().createElement(w.Zr,null,S.policyType)),o().createElement(f.GridItem,{className:"report-details-button",sm:3,md:3,lg:3,xl:3},o().createElement(w.mR,{state:{profile:S},to:"/reports/".concat(S.id,"/delete")},o().createElement(f.Button,{variant:"link",isInline:!0},"Delete report")))),o().createElement(f.Grid,{hasGutter:!0},o().createElement(f.GridItem,{sm:12,md:12,lg:12,xl:6},o().createElement("div",{className:"chart-inline"},o().createElement("div",{className:"chart-container"},o().createElement(h.HS,{data:N,identifier:P,title:r,subTitle:"Compliant",themeVariant:y.py.light,colorScale:t,style:{fontSize:20},innerRadius:88,width:462,legendPosition:"right",legendData:l,legendOrientation:"vertical",padding:{bottom:20,left:0,right:250,top:20}}))),S.unsupportedHostCount>0&&o().createElement(f.Text,null,o().createElement(w.cT,{showHelpIcon:!0},o().createElement("strong",{className:"ins-c-warning-text"},S.unsupportedHostCount," systems not supported")))),o().createElement(f.GridItem,{sm:12,md:12,lg:12,xl:6},o().createElement(w.vu,{profile:S})))),o().createElement(b.Z,null,o().createElement(f.Grid,{hasGutter:!0},o().createElement(f.GridItem,{span:12},o().createElement(G.e_,{showOsMinorVersionFilter:[S.majorOsVersion],columns:[R.Zw({showLink:!0,showOsInfo:!0}),R.hN,R.ll,R.OF,R.Hc],query:H.Ep,showOnlySystemsWithTestResults:!0,compliantFilter:!0,defaultFilter:"with_results_for_policy_id = ".concat(S.id),policyId:S.id}))))))};T.propTypes={route:d().object};const O=T},41251:(e,t,n)=>{(t=n(23645)(!1)).push([e.id,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-details{padding-top:10px}.report-details-button{text-align:right}",""]),e.exports=t},47511:(e,t,n)=>{"use strict";var l=n(93379),r=n.n(l),a=n(41251),o=n.n(a),i=r()(o(),{insert:"head",singleton:!1});if(!o().locals||e.hot.invalidate){var s=o().locals;e.hot.accept(41251,(t=>{a=n(41251),function(e,t,n){if(!e&&t||e&&!t)return!1;var l;for(l in e)if(e[l]!==t[l])return!1;for(l in t)if(!e[l])return!1;return!0}(s,(o=n.n(a))().locals)?(s=o().locals,i(o())):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),o().locals}}]);
//# sourceMappingURL=../sourcemaps/ReportDetails.240dec9142bb1c60d7e6.js.map