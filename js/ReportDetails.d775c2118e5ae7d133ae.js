(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[72],{79641:(e,t,n)=>{"use strict";n.r(t),n.d(t,{QUERY:()=>I,ReportDetails:()=>D,default:()=>k});var r,o=n(30168),i=n(92950),s=n.n(i),l=n(91346),a=n(55490),c=n(34925),u=n(45697),p=n.n(u),m=n(334),d=n(90570),y=n(27450),f=n(46100),g=n(52067),b=n(15040),v=n(48716),h=n(39173),E=n(86350),O=n(92223),j=n(28873),P=n(11443),S=n(60010),C=n(7648),w=n(77346),x=n(58820),R=n(27803),T=n(31499),I=(0,y.ZP)(r||(r=(0,o.Z)(["\n  query Profile($policyId: String!) {\n    profile(id: $policyId) {\n      id\n      name\n      refId\n      testResultHostCount\n      compliantHostCount\n      unsupportedHostCount\n      complianceThreshold\n      majorOsVersion\n      lastScanned\n      policyType\n      policy {\n        id\n        name\n      }\n      benchmark {\n        id\n        version\n      }\n      businessObjective {\n        id\n        title\n      }\n    }\n  }\n"]))),D=function(e){var t,n,r,o,i,u=e.route,p=(0,m.useParams)().report_id,y=(0,w.ZP)("pdfReport"),D=(0,d.a)(I,{variables:{policyId:p},fetchPolicy:"no-cache"}),k=D.data,Z=D.error,F=D.loading,N=[],H="loading-donut",V={};if(!F&&k){n=(V=k.profile).policy.name,i="Report: ".concat(n);var G=V.compliantHostCount,B=V.testResultHostCount;H=V.name.replace(/ /g,""),N=[{x:"Compliant",y:B?G:"0"},{x:"Non-compliant",y:B-G}],t=0===B&&[l.Z.value]||[c.Z.value,a.Z.value],r=[{name:N[0].y+" "+(0,P._6)(N[0].y,"system")+" compliant"},{name:N[1].y+" "+(0,P._6)(N[1].y,"system")+" non-compliant"}],o=B?(0,P.P0)(Math.floor(N[0].y/(N[0].y+N[1].y)*100)):0}return(0,C.a)(u,n),s().createElement(S.tC,{stateValues:{error:Z,data:k,loading:F}},s().createElement(S.K7,{stateKey:"loading"},s().createElement(v.Z,null,s().createElement(S.Tq,null)),s().createElement(E.Z,null,s().createElement(O.Z,null,s().createElement(j.Z,null)))),s().createElement(S.K7,{stateKey:"data"},s().createElement(v.Z,null,s().createElement(b.Breadcrumb,{ouiaId:"ReportDetailsPathBreadcrumb"},s().createElement(S.MU,{to:"/"},"Compliance"),s().createElement(S.MU,{to:"/reports"},"Reports"),s().createElement(b.BreadcrumbItem,{isActive:!0},i)),s().createElement(b.Grid,{hasGutter:!0},s().createElement(b.GridItem,{sm:9,md:9,lg:9,xl:9},s().createElement(h.Z,{title:i}),s().createElement(S.Zr,null,V.policyType)),s().createElement(b.GridItem,{className:"report-details-button",sm:3,md:3,lg:3,xl:3},y&&s().createElement(S.mR,{state:{profile:V},to:"/reports/".concat(V.id,"/pdf")},s().createElement(b.Button,{ouiaId:"ReportDetailsDownloadReportPDFLink",variant:"primary",className:"pf-u-mr-md"},"Download PDF")),s().createElement(S.mR,{state:{profile:V},to:"/reports/".concat(V.id,"/delete")},s().createElement(b.Button,{variant:"link",ouiaId:"ReportDetailsDeleteReportLink",isInline:!0},"Delete report")))),s().createElement(b.Grid,{hasGutter:!0},s().createElement(b.GridItem,{sm:12,md:12,lg:12,xl:6},s().createElement("div",{className:"chart-inline"},s().createElement("div",{className:"chart-container"},s().createElement(f.HS,{data:N,identifier:H,title:o,subTitle:"Compliant",themeVariant:g.py.light,colorScale:t,style:{fontSize:20},constrainToVisibleArea:!0,innerRadius:88,width:462,legendPosition:"right",legendData:r,legendOrientation:"vertical",padding:{bottom:20,left:0,right:250,top:20}}))),V.unsupportedHostCount>0&&s().createElement(b.Text,null,s().createElement(S.cT,{showHelpIcon:!0},s().createElement("strong",{className:"ins-c-warning-text"},V.unsupportedHostCount," systems not supported")))),s().createElement(b.GridItem,{sm:12,md:12,lg:12,xl:6},s().createElement(S.vu,{profile:V})))),s().createElement(E.Z,null,s().createElement(b.Grid,{hasGutter:!0},s().createElement(b.GridItem,{span:12},s().createElement(x.e_,{showOsMinorVersionFilter:[V.majorOsVersion],columns:[T.Zw({showLink:!0,showOsInfo:!0}),T.MO("tags"),T.hN,T.ll,T.OF,T.Hc],query:R.Ep,showOnlySystemsWithTestResults:!0,compliantFilter:!0,defaultFilter:"with_results_for_policy_id = ".concat(V.id),policyId:V.id}))))))};D.propTypes={route:p().object};const k=D},97839:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ReportDownload:()=>Ce,default:()=>we});var r,o,i=n(92950),s=n.n(i),l=n(15040),a=n(334),c=n(90570),u=n(58141),p=n(60010),m=n(52710),d=n(30168),y=n(27450),f={compliantSystems:!1,nonCompliantSystems:!0,unsupportedSystems:!0,topTenFailedRules:!0,userNotes:void 0},g=(0,y.ZP)(r||(r=(0,d.Z)(["\n  query getSystems(\n    $filter: String!\n    $policyId: ID\n    $perPage: Int\n    $page: Int\n    $sortBy: [String!]\n    $tags: [String!]\n  ) {\n    systems(\n      search: $filter\n      limit: $perPage\n      offset: $page\n      sortBy: $sortBy\n      tags: $tags\n    ) {\n      totalCount\n      edges {\n        node {\n          id\n          name\n          osMajorVersion\n          osMinorVersion\n          testResultProfiles(policyId: $policyId) {\n            id\n            name\n            refId\n            lastScanned\n            compliant\n            external\n            score\n            supported\n            ssgVersion\n            majorOsVersion\n            rules {\n              refId\n              title\n              compliant\n              remediationAvailable\n              severity\n              identifier\n            }\n          }\n          policies(policyId: $policyId) {\n            id\n            name\n          }\n          tags {\n            namespace\n            key\n            value\n          }\n        }\n      }\n    }\n  }\n"]))),b=(0,y.ZP)(o||(o=(0,d.Z)(["\n  query Profile($policyId: String!) {\n    profile(id: $policyId) {\n      id\n      name\n      refId\n      testResultHostCount\n      compliantHostCount\n      unsupportedHostCount\n      complianceThreshold\n      majorOsVersion\n      lastScanned\n      policyType\n      totalHostCount\n      ssgVersion\n      policy {\n        id\n        name\n      }\n      benchmark {\n        id\n        version\n      }\n      businessObjective {\n        id\n        title\n      }\n    }\n  }\n"]))),v=n(45697),h=n.n(v),E=function(e){var t=e.policy,n=e.setExportSetting,r=e.exportSettings;return s().createElement(l.Form,null,s().createElement(l.FormGroup,{isInline:!0,fieldId:"simple-form-checkbox-group",label:"Policy"},s().createElement(l.Text,null,t.name)),s().createElement(l.FormGroup,{fieldId:"simple-form-checkbox-group",label:"System data to include"},s().createElement(l.Checkbox,{label:"Non-compliant systems",id:"non-compliant-systems-export-setting","aria-label":"Non-compliant systems",onChange:n("nonCompliantSystems"),isChecked:r.nonCompliantSystems}),s().createElement(l.Checkbox,{label:"Systems with unsupported configuration",id:"unsupported-systems-export-setting","aria-label":"Systems with unsupported configuration",onChange:n("unsupportedSystems"),isChecked:r.unsupportedSystems}),s().createElement(l.Checkbox,{id:"compliant-systems-export-setting",onChange:n("compliantSystems"),isChecked:r.compliantSystems,label:"Compliant systems","aria-label":"Compliant systems"})),s().createElement(l.FormGroup,{label:"Rule data to include",fieldId:"checkbox01"},s().createElement(l.Checkbox,{id:"failed-rules-export-setting",label:"Top failed rules (Up to 10)","aria-label":"Rule data to include",onChange:n("topTenFailedRules"),isChecked:r.topTenFailedRules})),s().createElement(l.FormGroup,{label:"User notes (optional)",fieldId:"checkbox01"},s().createElement(l.TextArea,{"aria-label":"User notes (optional)",onChange:n("userNotes"),value:r.userNotes})))};E.propTypes={policy:h().object,exportSettings:h().object,setExportSetting:h().func};const O=E;var j=n(15861),P=n(87757),S=n.n(P),C=n(65811),w=n(4942),x=n(93433),R=n(26075),T=n(79886),I=n(72971),D=n(7739),k=n.n(D),Z=n(89734),F=n.n(Z);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var H=function(e){return(null==e?void 0:e.filter((function(e){return"Never"!=e.lastScanned})))||[]},V=function(e){var t=e.testResultProfiles;return H(t).length>0},G=function(e){return V(e)&&H(e.testResultProfiles).every((function(e){return e.supported}))},B=function(e){return e.filter((function(e){return G(e)&&function(e){var t=H(e.testResultProfiles).length>0,n=H(e.testResultProfiles).every((function(e){return e.compliant}));return t&&n}(e)}))},M=function(e){return e.filter((function(e){return G(e)&&function(e){var t=H(e.testResultProfiles).length>0,n=H(e.testResultProfiles).filter((function(e){return!e.compliant})).length>0;return t&&n}(e)}))},$=function(e){return e.filter((function(e){return function(e){return V(e)&&H(e.testResultProfiles).every((function(e){return!e.supported}))}(e)}))},_=function(e){var t={};return function(e){return e.filter((function(e){return G(e)}))}(e).forEach((function(e){e.testResultProfiles.forEach((function(e){e.rules.forEach((function(e){return function(e){e.compliant||(t[e.refId]?t[e.refId].systemsCount++:t[e.refId]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({systemsCount:1},e))}(e)}))}))})),t},q=function(e){return o=_(e),t=Object.values(o),n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return(0,T.qk)(e,"severity",I.FT,t)}(t,"asc").slice(0,10),r=k()(n,"severity"),I.FT.flatMap((function(e){return t=r[e]||[],F()(t,"systemsCount").reverse();var t}));var t,n,r,o};function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=Math.ceil(t/n)||1;return Promise.all((0,x.Z)(new Array(r)).map((function(t,r){return e(n,r+1)})))};var L=n(70194),z=n(62410);const W=L.mM.create({bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},metaTitle:{color:"#C9190B",marginBottom:"20px"},userNotes:{backgroundColor:"#F0F0F0",padding:"8px"},userNotesTitle:{marginBottom:"4px"},sectionTitle:{color:"#C9190B",fontWeight:"bold",fontSize:14},subSectionTitle:{color:"#C9190B",fontWeight:"bold",fontSize:10,marginBottom:"10pt"}});var J=n(11443),Q=n(82176),Y=function(e){var t=e.systems.map((function(e){return[e.name,"RHEL ".concat(e.osMajorVersion,".").concat(e.osMinorVersion),"".concat((0,Q.RT)(e.testResultProfiles).rulesFailed||""),(0,J.P0)((0,Q.RT)(e.testResultProfiles).score)]}));return s().createElement(u.iA,{withHeader:!0,rows:[["System name","OS","Failed rules","Compliance score"]].concat((0,x.Z)(t))})};Y.propTypes={systems:h().array};const X=Y;var ee=function(e){var t=e.systems,n=e.ssgFinder,r=t.map((function(e){return[e.name,"RHEL ".concat(e.osMajorVersion,".").concat(e.osMinorVersion),e.testResultProfiles[0].ssgVersion,n(e.osMajorVersion,e.osMinorVersion)]}));return s().createElement(u.iA,{withHeader:!0,rows:[["System name","OS","Running SSG version","Expected SSG version"]].concat((0,x.Z)(r))})};ee.propTypes={systems:h().array,ssgFinder:h().func};const te=ee;var ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.charAt(0).toUpperCase()+e.slice(1)},re=function(e){var t=e.rules.map((function(e){return[e.title,(t=e,n=t.identifier,JSON.parse(n||"{}").label||""),ne(null==e?void 0:e.severity),"".concat(e.systemsCount)];var t,n}));return s().createElement(u.iA,{withHeader:!0,rows:[["Rule name","ID","Severity","Failed systems"]].concat((0,x.Z)(t))})};re.propTypes={rules:h().array};const oe=re;var ie=function(e){var t=e.children,n=e.title;return s().createElement(L.G7,{style:{justifyContent:"space-evenly",width:"32%",paddingRight:"1%"}},s().createElement(L.G7,null,s().createElement(L.xv,{style:{color:"#C9190B",fontSize:20}},t)),s().createElement(L.xv,null,n))};ie.propTypes={children:h().node,title:h().string};const se=ie;function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ce=function(e){var t=e.children,n=e.metaTitle,r=e.title;return s().createElement(L.G7,{style:{marginBottom:"20pt"}},s().createElement(L.G7,{style:{justifyContent:"start"}},s().createElement(L.xv,{style:ae(ae({},W.subSectionTitle),{},{width:"70%"})},r),s().createElement(L.xv,null,n)),t)};ce.propTypes={children:h().node,metaTitle:h().string,title:h().string};const ue=ce;var pe=function(e){var t=e.policy,n=t.testResultHostCount,r=void 0===n?0:n,o=t.compliantHostCount,i=void 0===o?0:o,l=t.percentCompliant,a=void 0===l?0:l,c=r-i,p=[{x:"".concat(i," systems compliant"),y:i},{x:"".concat(c," systems non-compliant"),y:c}],m=(0,J.P0)(a);return s().createElement(u.kL,{legendHeader:"",chartType:"donut",subTitle:"Compliant",colorSchema:"blue",title:m,data:p})};pe.propTypes={policy:h().object};const me=pe;function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe=function(e){var t,n=e.data,r=e.ssgFinder,o=n.compliantSystems,l=n.compliantSystemCount,a=n.nonCompliantSystems,c=n.nonCompliantSystemCount,p=n.topTenFailedRules,m=n.unsupportedSystems,d=n.unsupportedSystemCount,y=n.userNotes,f=n.policy,g=f.testResultHostCount,b=void 0===g?0:g,v=f.compliantHostCount,h=void 0===v?0:v,E=Math.floor(h/b*100);return s().createElement(i.Fragment,null,s().createElement(L.xv,{style:W.subSectionTitle},"Report prepared ".concat((0,z.Z)({date:new Date,type:"exact"}).props.children)),y&&s().createElement(L.G7,{style:W.userNotes},s().createElement(L.G7,{style:W.userNotesTitle},s().createElement(L.xv,null,"User notes")),s().createElement(L.G7,null,s().createElement(L.xv,null,y))),s().createElement(u.$0,{title:"Policy Details",titleProps:{style:W.sectionTitle}},s().createElement(u.sg,{style:{width:"150px"}},s().createElement(u.iA,{rows:[["Policy type",f.policyType],["Operating system","RHEL ".concat(f.osMajorVersion)],["Compliance threshold","".concat(f.complianceThreshold,"%")],["Business Objective",(null===(t=f.businessObjective)||void 0===t?void 0:t.title)||"--"]]})),s().createElement(u.sg,null,s().createElement(me,{policy:ye(ye({},f),{},{percentCompliant:E})}))),s().createElement(u.$0,{title:"Systems",withColumn:!1,titleProps:{style:W.sectionTitle}},s().createElement(u.s_,{withColumn:!1,style:{marginBottom:"20px"}},s().createElement(se,{title:"Non-compliant systems"},c),d?s().createElement(se,{title:"Systems with unsupported configuration"},d):null,s().createElement(se,{title:"Compliant systems"},l)),a&&c?s().createElement(ue,{title:"Non-compliant systems"},s().createElement(X,{systems:a})):null,m&&d?s().createElement(ue,{title:"Systems with unsupported configuration"},s().createElement(te,{systems:m,ssgFinder:r})):null,o&&l?s().createElement(ue,{title:"Compliant systems"},s().createElement(X,{systems:o})):null),p?s().createElement(u.$0,{title:"Rules",withColumn:!1,titleProps:{style:W.sectionTitle}},s().createElement(ue,{title:"Top failed rules"},s().createElement(oe,{rules:p}))):null)};fe.propTypes={data:h().object,ssgFinder:h().func};const ge=fe;function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var he=n(73277),Ee=function(e,t){return parseInt(e)===parseInt(t)};const Oe=function(e,t){var n,r,o=(r=(0,he.Z)("supported_ssgs",{type:"supportedSsg",skip:n}).data,function(e,t){var n,o=null===(n=(r||{}).collection)||void 0===n?void 0:n.find((function(n){return Ee(n.osMajorVersion,e)&&Ee(n.osMinorVersion,t)}));return(null==o?void 0:o.version)||"N/A"}),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.id,r=t.totalHostCount,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onComplete:function(){},onError:function(){}},i=o.onComplete,s=o.onError,l=(0,R.x)(),a=function(t){var n=B(t),r=M(t),o=$(t);return K(K(K(K(K({},e.compliantSystems&&{compliantSystems:n}),{},{compliantSystemCount:n.length},e.nonCompliantSystems&&{nonCompliantSystems:r}),{},{nonCompliantSystemCount:r.length},e.unsupportedSystems&&{unsupportedSystems:o}),{},{unsupportedSystemCount:o.length},e.topTenFailedRules&&{topTenFailedRules:q(t)}),e.userNotes&&{userNotes:e.userNotes})},c=function(e,t){return l.query({query:g,fetchResults:!0,fetchPolicy:"no-cache",variables:{perPage:e,page:t,filter:"",policyId:n}})};return function(){return U(c,r).then((function(e){return e.flatMap((function(e){return e.data.systems.edges.map((function(e){return e.node}))}))})).then((function(e){var t=a(e);return i&&i(t),t})).catch((function(e){if(s)return s(e),[];throw e}))}}(e,t,{onError:function(){(0,C.q)({variant:"danger",title:"Couldn’t download export",description:"Reinitiate this export to try again."})},onComplete:function(){(0,C.q)({variant:"success",title:"Downloading export"})}}),l=function(e){return function(){var t=(0,j.Z)(S().mark((function t(n,r){return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[s().createElement(ge,{key:"pdf-page-1",data:ve(ve({},n),{},{policy:e}),ssgFinder:r})]);case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t),a=function(){var e=(0,j.Z)(S().mark((function e(){var t;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,C.q)({variant:"info",title:"Preparing export",description:"Once complete, your download will start automatically."}),e.next=3,i();case 3:return t=e.sent,e.next=6,l(t,o);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a};var je=n(29439);function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ce=function(){var e=(0,a.useParams)().report_id,t=(0,m.C3)("/reports/"+e),n=(0,c.a)(b,{variables:{policyId:e}}),r=n.data,o=n.loading,d=n.error,y=null==r?void 0:r.profile,g=function(){var e=(0,i.useState)(f),t=(0,je.Z)(e,2),n=t[0],r=t[1];return{exportSettings:n,setExportSetting:function(e){return function(t){return r(Se(Se({},n),{},(0,w.Z)({},e,t)))}},isValid:Object.keys(n).some((function(e){return 1==("userNotes"!==e&&!!n[e])}))}}(),v=g.exportSettings,h=g.setExportSetting,E=g.isValid,j=Oe(v,y),P="compliance-report--".concat((new Date).toISOString().split("T")[0]),S="Export report",C={ouiaId:"ExportReportButton",variant:"primary",isDisabled:!E},x=function(){return s().createElement(l.Button,C,S)},R=[s().createElement(u.o6,{groupName:"Red Hat Insights",key:"export",label:S,reportName:"Compliance:",type:y&&y.name,fileName:P,asyncFunction:j,buttonProps:C,fallback:s().createElement(x,null),className:"pf-u-mr-sm"}),s().createElement(l.Button,{variant:"secondary",key:"cancel",ouiaId:"ExportReportCancelButton",onClick:function(e){e.preventDefault(),window.history.back()}},"Cancel")];return s().createElement(p.C,{isOpen:!0,width:"440px",ouiaId:"DownloadReportModal",title:"Compliance report",onClose:function(){return t()},actions:R},s().createElement(p.tC,{stateValues:{error:d,data:r,loading:o}},s().createElement(p.K7,{stateKey:"loading"},s().createElement(l.Spinner,null)),s().createElement(p.K7,{stateKey:"data"},s().createElement(O,{policy:y,setExportSetting:h,exportSettings:v}))))};const we=Ce},25832:()=>{},52361:()=>{},94616:()=>{}}]);