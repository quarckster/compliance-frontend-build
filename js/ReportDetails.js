(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1176:function(e,t,a){var n=a(1177);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(7)(n,l);n.locals&&(e.exports=n.locals)},1177:function(e,t,a){(t=a(6)(!1)).push([e.i,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-details{padding-top:10px}.report-details-button{text-align:right}\n",""]),e.exports=t},1196:function(e,t,a){"use strict";a.r(t);var n=a(572),l=a.n(n),o=a(512),r=a.n(o),i=a(1),c=a.n(i),s=a(494),m=a(679),p=a(680),d=a(0),u=a.n(d),f=a(562),y=a(519),g=a(517),E=a(524),b=a.n(E),h=a(68),v=a(1193),O=a(1181),C=a(750),j=a(751),w=a(683),k=a(509),I=a.n(k),x=(a(607),a(1176),a(742)),D=a(686),S=a(573),R=a(76),H=a(634),T=function(e){var t=e.policyId,a=e.isModalOpen,n=e.onClose,o=e.onDelete,r=Object(i.useState)(a),m=l()(r,2),p=m[0],d=m[1],u=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];d(!1),n(e)},f=Object(s.a)(S.f,{onCompleted:function(){Object(H.a)(Object(R.addNotification)({variant:"success",title:"Removed report"})),o(),u(!0)},onError:function(e){Object(H.a)(Object(R.addNotification)({variant:"danger",title:"Error removing report",description:e.message})),u()}}),y=l()(f,1)[0];return Object(i.useEffect)((function(){d(a)}),[a]),c.a.createElement(x.a,{isSmall:!0,title:"Delete report",isOpen:p,isFooterLeftAligned:!0,onClose:u,actions:[c.a.createElement(w.a,{key:"destroy","aria-label":"delete",variant:"danger",onClick:function(){return y({variables:{input:{profileId:t}}})}},"Delete report"),c.a.createElement(w.a,{key:"cancel",variant:"secondary",onClick:function(){return u()}},"Cancel")]},c.a.createElement(D.a,null,"Deleting a report is permanent and cannot be undone."))};T.propTypes={onClose:u.a.func,isModalOpen:u.a.bool,onDelete:u.a.func,policyId:u.a.string},T.defaultProps={onDelete:function(){},onClose:function(){}};var M=T;function N(){var e=r()(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        totalHostCount\n        compliantHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        businessObjective {\n            id\n            title\n        }\n    }\n}\n"]);return N=function(){return e},e}a.d(t,"QUERY",(function(){return P})),a.d(t,"ReportDetails",(function(){return _}));var P=I()(N()),_=function(e){var t,a,n=e.match,o=e.history,r=Object(s.b)(P,{variables:{policyId:n.params.report_id}}),d=r.data,u=r.error,E=r.loading,b=Object(i.useState)(!1),k=l()(b,2),I=k[0],x=k[1],D=[],S="loading-donut",R={};if(!E&&d){var H=(R=d.profile).compliantHostCount,T=R.totalHostCount;S=R.name.replace(/ /g,""),t=[{name:(D=[{x:"Compliant",y:H},{x:"Non-compliant",y:T-H}])[0].y+" "+Object(y.b)(D[0].y,"system")+" compliant"},{name:D[1].y+" "+Object(y.b)(D[1].y,"system")+" non-compliant"}],a=Object(y.a)(Math.floor(D[0].y/(D[0].y+D[1].y)*100))}return c.a.createElement(g.q,{stateValues:{error:u,data:d,loading:E}},c.a.createElement(g.p,{stateKey:"loading"},c.a.createElement(h.PageHeader,null,c.a.createElement(g.m,null)),c.a.createElement(h.Main,null,c.a.createElement(h.EmptyTable,null,c.a.createElement(h.Spinner,null)))),c.a.createElement(g.p,{stateKey:"data"},c.a.createElement(h.PageHeader,null,c.a.createElement(C.a,null,c.a.createElement(j.a,{to:"/rhel/compliance/reports"},"Reports"),c.a.createElement(j.a,{isActive:!0},R.name)),c.a.createElement(m.a,{gutter:"lg"},c.a.createElement(p.a,{xl:8},c.a.createElement(h.PageHeaderTitle,{title:R.name+" report"})),c.a.createElement(p.a,{className:"report-details-button",xl:4},c.a.createElement(w.a,{isInline:!0,variant:"link",onClick:function(){return x(!0)}},"Delete Report"))),c.a.createElement(m.a,{gutter:"md"},c.a.createElement(p.a,{sm:12,md:12,lg:12,xl:6},c.a.createElement("div",{className:"chart-inline"},c.a.createElement("div",{className:"chart-container"},c.a.createElement(v.a,{data:D,identifier:S,title:a,subTitle:"Compliant",themeColor:O.q.blue,themeVariant:O.r.light,style:{fontSize:20},innerRadius:88,width:462,legendPosition:"right",legendData:t,legendOrientation:"vertical",padding:{bottom:20,left:0,right:250,top:20}})))),c.a.createElement(p.a,{sm:12,md:12,lg:12,xl:6},c.a.createElement(g.n,{policy:R})))),c.a.createElement(h.Main,null,c.a.createElement(m.a,{gutter:"md"},c.a.createElement(p.a,{span:12},c.a.createElement(f.b,{showOnlySystemsWithTestResults:!0,policyId:R.id,columns:[{key:"facts.compliance.display_name",title:"System name",props:{width:30}},{key:"facts.compliance.rules_failed",title:"Rules failed",props:{width:5}},{key:"facts.compliance.compliance_score",title:"Compliance score",props:{width:5}},{key:"facts.compliance.last_scanned",title:"Last scanned",props:{width:10}}]})))),c.a.createElement(M,{isModalOpen:I,policyId:R.id,onClose:function(e){var t;x(!1),e&&(t=window.insights.chrome.isBeta(),o.push("".concat(t&&"/beta","/rhel/compliance/reports")))}})))};_.propTypes={match:u.a.object,history:u.a.object};t.default=b()(_)}}]);
//# sourceMappingURL=../sourcemaps/ReportDetails.js.map