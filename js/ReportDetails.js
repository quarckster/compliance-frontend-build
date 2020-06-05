(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1218:function(e,t,a){var n=a(1219);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(7)(n,l);n.locals&&(e.exports=n.locals)},1219:function(e,t,a){(t=a(6)(!1)).push([e.i,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-details{padding-top:10px}.report-details-button{text-align:right}\n",""]),e.exports=t},1235:function(e,t,a){"use strict";a.r(t),a.d(t,"QUERY",(function(){return H})),a.d(t,"ReportDetails",(function(){return R}));var n=a(541),l=a.n(n),i=a(528),r=a.n(i),o=a(1),c=a.n(o),s=a(0),m=a.n(s),p=a(507),d=a(521),u=a.n(d),y=a(1237),g=a(1223),h=a(770),f=a(771),E=a(693),b=a(694),v=a(699),w=a(68),C=a(133),j=a.n(C),x=a(547),O=a(524),k=a(538);a(621),a(1218);function I(){var e=r()(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        totalHostCount\n        compliantHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        policy {\n            id\n        }\n        benchmark {\n            id\n            version\n        }\n        businessObjective {\n            id\n            title\n        }\n    }\n}\n"]);return I=function(){return e},e}var H=u()(I()),R=function(e){var t,a,n=e.match,i=e.history,r=Object(p.b)(H,{variables:{policyId:n.params.report_id}}),s=r.data,m=r.error,d=r.loading,u=Object(o.useState)(!1),C=l()(u,2),j=C[0],I=C[1],R=window.insights.chrome.isBeta(),S=[],T="loading-donut",P={};if(!d&&s){var _=(P=s.profile).compliantHostCount,M=P.totalHostCount;T=P.name.replace(/ /g,""),t=[{name:(S=[{x:"Compliant",y:_},{x:"Non-compliant",y:M-_}])[0].y+" "+Object(x.b)(S[0].y,"system")+" compliant"},{name:S[1].y+" "+Object(x.b)(S[1].y,"system")+" non-compliant"}],a=Object(x.a)(Math.floor(S[0].y/(S[0].y+S[1].y)*100))}return c.a.createElement(O.q,{stateValues:{error:m,data:s,loading:d}},c.a.createElement(O.p,{stateKey:"loading"},c.a.createElement(w.PageHeader,null,c.a.createElement(O.l,null)),c.a.createElement(w.Main,null,c.a.createElement(w.EmptyTable,null,c.a.createElement(w.Spinner,null)))),c.a.createElement(O.p,{stateKey:"data"},c.a.createElement(w.PageHeader,null,c.a.createElement(h.a,null,c.a.createElement(f.a,{to:"".concat(R?"/beta/insights":"/rhel","/compliance/reports")},"Reports"),c.a.createElement(f.a,{isActive:!0},P.name)),c.a.createElement(E.a,{gutter:"lg"},c.a.createElement(b.a,{sm:9,md:9,lg:9,xl:9},c.a.createElement(w.PageHeaderTitle,{title:P.name+" report"})),c.a.createElement(b.a,{className:"report-details-button",sm:3,md:3,lg:3,xl:3},c.a.createElement(v.a,{isInline:!0,variant:"link",onClick:function(){return I(!0)}},"Delete Report"))),c.a.createElement(E.a,{gutter:"md"},c.a.createElement(b.a,{sm:12,md:12,lg:12,xl:6},c.a.createElement("div",{className:"chart-inline"},c.a.createElement("div",{className:"chart-container"},c.a.createElement(y.a,{data:S,identifier:T,title:a,subTitle:"Compliant",themeColor:g.q.blue,themeVariant:g.r.light,style:{fontSize:20},innerRadius:88,width:462,legendPosition:"right",legendData:t,legendOrientation:"vertical",padding:{bottom:20,left:0,right:250,top:20}})))),c.a.createElement(b.a,{sm:12,md:12,lg:12,xl:6},c.a.createElement(O.m,{profile:P})))),c.a.createElement(w.Main,null,c.a.createElement(E.a,{gutter:"md"},c.a.createElement(b.a,{span:12},c.a.createElement(k.j,{showOnlySystemsWithTestResults:!0,compliantFilter:!0,policyId:P.id,columns:[{key:"facts.compliance.display_name",title:"System name",props:{width:30}},{key:"facts.compliance.rules_failed",title:"Rules failed",props:{width:5}},{key:"facts.compliance.compliance_score",title:"Compliance score",props:{width:5}},{key:"facts.compliance.last_scanned",title:"Last scanned",props:{width:10}}]})))),c.a.createElement(k.e,{isModalOpen:j,policyId:P.id,onClose:function(e){I(!1),e&&i.push("insights/compliance/reports")}})))};R.propTypes={match:m.a.object,history:m.a.object},t.default=j()(R)}}]);
//# sourceMappingURL=../sourcemaps/ReportDetails.js.map