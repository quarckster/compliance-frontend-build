(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[72],{79641:(e,t,n)=>{"use strict";n.r(t),n.d(t,{QUERY:()=>T,ReportDetails:()=>O,default:()=>k});var l,r=n(32465),a=n(92950),o=n.n(a),i=n(91346),s=n(55490),c=n(34925),m=n(45697),d=n.n(m),p=n(334),u=n(46829),E=n(44119),y=n.n(E),h=n(73581),f=n(52067),g=n(92277),v=n(48716),b=n(39173),C=n(86350),I=n(92223),Z=n(6023),w=n(11443),x=n(23860),G=n(7648),H=n(69030),_=(n(90129),n(47511),n(27803)),R=n(31499),T=y()(l||(l=(0,r.Z)(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        testResultHostCount\n        compliantHostCount\n        unsupportedHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        policyType\n        policy {\n            id\n            name\n        }\n        benchmark {\n            id\n            version\n        }\n        businessObjective {\n            id\n            title\n        }\n    }\n}\n"]))),O=function(e){var t,n,l,r,a,m=e.route,d=(0,p.useParams)().report_id,E=(0,u.useQuery)(T,{variables:{policyId:d}}),y=E.data,O=E.error,k=E.loading,N=[],S="loading-donut",V={};if(!k&&y){n=(V=y.profile).policy.name,a="Report: ".concat(n);var j=V.compliantHostCount,F=V.testResultHostCount;S=V.name.replace(/ /g,""),N=[{x:"Compliant",y:F?j:"0"},{x:"Non-compliant",y:F-j}],t=0===F&&[i.Z.value]||[c.Z.value,s.Z.value],l=[{name:N[0].y+" "+(0,w._6)(N[0].y,"system")+" compliant"},{name:N[1].y+" "+(0,w._6)(N[1].y,"system")+" non-compliant"}],r=F?(0,w.P0)(Math.floor(N[0].y/(N[0].y+N[1].y)*100)):0}return(0,G.a)(m,n),o().createElement(x.tC,{stateValues:{error:O,data:y,loading:k}},o().createElement(x.K7,{stateKey:"loading"},o().createElement(v.Z,null,o().createElement(x.Tq,null)),o().createElement(C.Z,null,o().createElement(I.Z,null,o().createElement(Z.Z,null)))),o().createElement(x.K7,{stateKey:"data"},o().createElement(v.Z,null,o().createElement(g.Breadcrumb,null,o().createElement(x.MU,{to:"/"},"Compliance"),o().createElement(x.MU,{to:"/reports"},"Reports"),o().createElement(g.BreadcrumbItem,{isActive:!0},a)),o().createElement(g.Grid,{hasGutter:!0},o().createElement(g.GridItem,{sm:9,md:9,lg:9,xl:9},o().createElement(b.Z,{title:a}),o().createElement(x.Zr,null,V.policyType)),o().createElement(g.GridItem,{className:"report-details-button",sm:3,md:3,lg:3,xl:3},o().createElement(x.mR,{state:{profile:V},to:"/reports/".concat(V.id,"/delete")},o().createElement(g.Button,{variant:"link",isInline:!0},"Delete report")))),o().createElement(g.Grid,{hasGutter:!0},o().createElement(g.GridItem,{sm:12,md:12,lg:12,xl:6},o().createElement("div",{className:"chart-inline"},o().createElement("div",{className:"chart-container"},o().createElement(h.HS,{data:N,identifier:S,title:r,subTitle:"Compliant",themeVariant:f.py.light,colorScale:t,style:{fontSize:20},innerRadius:88,width:462,legendPosition:"right",legendData:l,legendOrientation:"vertical",padding:{bottom:20,left:0,right:250,top:20}}))),V.unsupportedHostCount>0&&o().createElement(g.Text,null,o().createElement(x.cT,{showHelpIcon:!0},o().createElement("strong",{className:"ins-c-warning-text"},V.unsupportedHostCount," systems not supported")))),o().createElement(g.GridItem,{sm:12,md:12,lg:12,xl:6},o().createElement(x.vu,{profile:V})))),o().createElement(C.Z,null,o().createElement(g.Grid,{hasGutter:!0},o().createElement(g.GridItem,{span:12},o().createElement(H.e_,{showOsMinorVersionFilter:[V.majorOsVersion],columns:[R.Zw({showLink:!0,showOsInfo:!0}),R.hN,R.ll,R.OF,R.Hc],query:_.Ep,showOnlySystemsWithTestResults:!0,compliantFilter:!0,defaultFilter:"with_results_for_policy_id = ".concat(V.id),policyId:V.id}))))))};O.propTypes={route:d().object};const k=O},41251:(e,t,n)=>{(t=n(23645)(!1)).push([e.id,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-details{padding-top:10px}.report-details-button{text-align:right}\n",""]),e.exports=t},47511:(e,t,n)=>{"use strict";var l=n(93379),r=n.n(l),a=n(41251),o=n.n(a),i=r()(o(),{insert:"head",singleton:!1});if(!o().locals||e.hot.invalidate){var s=o().locals;e.hot.accept(41251,(t=>{a=n(41251),function(e,t,n){if(!e&&t||e&&!t)return!1;var l;for(l in e)if(e[l]!==t[l])return!1;for(l in t)if(!e[l])return!1;return!0}(s,(o=n.n(a))().locals)?(s=o().locals,i(o())):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),o().locals}}]);
//# sourceMappingURL=../sourcemaps/ReportDetails.30c86cd1dcca71b68072.js.map