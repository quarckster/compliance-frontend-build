(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1206:function(e,t,n){var a=n(1207);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(7)(a,i);a.locals&&(e.exports=a.locals)},1207:function(e,t,n){(t=n(6)(!1)).push([e.i,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-description{padding-top:10px}\n",""]),e.exports=t},1222:function(e,t,n){"use strict";n.r(t);var a=n(70),i=n.n(a),r=n(69),l=n.n(r),s=n(71),o=n.n(s),c=n(72),u=n.n(c),d=n(243),p=n.n(d),m=n(73),h=n.n(m),v=n(566),b=n.n(v),y=n(520),f=n.n(y),g=n(1),E=n.n(g),j=n(0),O=n.n(j),T=n(500),I=n(671),C=n(527),P=n(686),k=n(749),w=n(723),S=n(609),x=n(580),B=function(e){function t(){var e,n;i()(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=o()(this,(e=u()(t)).call.apply(e,[this].concat(r)))).handleBusinessObjective=function(){var e=n.props,t=e.businessObjective,a=e.editPolicyBusinessObjective,i=e.mutate;return void 0===a?Promise.resolve(t?t.id:null):a&&!a.create&&t&&a.value!==t.id||a&&!a.create&&null===t?Promise.resolve(a.value):null===a?Promise.resolve(null):a.create?i({mutation:x.c,variables:{input:{title:a.label}}}).then((function(e){return e.data.createBusinessObjective.businessObjective.id})):Promise.resolve()},n.onClick=function(){var e=n.props,t=e.mutate,a=e.policyId,i=e.threshold,r=e.onClick;return n.handleBusinessObjective().then((function(e){var n={id:a,complianceThreshold:parseFloat(i)};return e&&(n.businessObjectiveId=e),t({mutation:x.g,variables:{input:n}})})).then((function(){r()}))},n}return h()(t,e),l()(t,[{key:"render",value:function(){return E.a.createElement(P.a,{type:"submit",variant:"primary",onClick:this.onClick},"Save")}}]),t}(E.a.Component);B.propTypes={policyId:O.a.string.isRequired,businessObjective:O.a.object,editPolicyBusinessObjective:O.a.object,mutate:O.a.func.isRequired,threshold:O.a.number,onClick:O.a.func.isRequired};var M=Object(S.a)(x.g)(B),A=n(608),N=n(791),R=n(48),F=n(738),q=n.n(F),H=function(e){function t(e){var n;return i()(this,t),(n=o()(this,u()(t).call(this,e))).handleModalToggle=function(){var e=n.state.isModalOpen;insights.chrome.appAction(e?"":"edit-business-objective"),n.setState((function(){return{isModalOpen:!e,businessObjective:n.props.businessObjective}})),n.props.onClose()},n.state={isOpen:!1,isModalOpen:!1,policyId:e.policyId,businessObjective:e.businessObjective},n}return h()(t,e),l()(t,[{key:"render",value:function(){var e=this.state,t=e.policyId,n=e.isModalOpen,a=e.businessObjective,i=this.props,r=i.previousThreshold,l=i.editPolicyBusinessObjective,s=i.complianceThreshold,o=i.dispatch;return E.a.createElement(E.a.Fragment,null,E.a.createElement(P.a,{variant:"secondary",onClick:this.handleModalToggle},"Edit policy"),E.a.createElement(k.a,{isSmall:!0,title:"Edit policy details",isOpen:n,onClose:this.handleModalToggle,isFooterLeftAligned:!0,actions:[E.a.createElement(P.a,{key:"cancel",variant:"secondary",onClick:this.handleModalToggle},"Cancel"),E.a.createElement(M,{key:"confirm",policyId:t,threshold:q()(parseFloat(s||r),1),businessObjective:a,editPolicyBusinessObjective:l,onClick:this.handleModalToggle})]},E.a.createElement(w.a,null,E.a.createElement(A.b,{businessObjective:a,policyId:t,dispatch:o}),E.a.createElement(A.c,{previousThreshold:r}))))}}]),t}(g.Component);H.propTypes={policyId:O.a.string,previousThreshold:O.a.number,businessObjective:O.a.object,editPolicyBusinessObjective:O.a.object,complianceThreshold:O.a.string,onClose:O.a.func,dispatch:O.a.func};var W=Object(N.a)("policyForm"),D=Object(R.connect)((function(e){return{complianceThreshold:W(e,"complianceThreshold"),editPolicyBusinessObjective:W(e,"businessObjective")}}))(H),_=n(792),G=n(768),J=n(692),K=n(565),L=n(180),Q=function(e){var t=e.loading,n=e.policy;return E.a.createElement(E.a.Fragment,null,E.a.createElement(_.a,{variant:"info",isInline:!0,title:"Rule editing coming soon"}),E.a.createElement(G.a,{variant:G.c.light},E.a.createElement(J.a,{component:J.b.p},E.a.createElement("strong",null,"What rules are shown on this list? "),"This view shows rules that are from the latest SSG version (",n.benchmark.version,"). If you are using a different version of SSG for systems in this policy, those rules will be different and can be viewed on the systems details page.")),E.a.createElement(K.SystemRulesTable,{remediationsEnabled:!1,columns:[{title:"Rule",transforms:[L.a]},{title:"Severity",transforms:[L.a]},{title:E.a.createElement(E.a.Fragment,null,K.ANSIBLE_ICON," Ansible"),transforms:[L.a],original:"Ansible"}],loading:t,profileRules:[{profile:{refId:n.refId,name:n.name},rules:n.rules}]}))};Q.propTypes={loading:O.a.bool,policy:O.a.shape({name:O.a.string,refId:O.a.string,rules:O.a.array,benchmark:O.a.object})};var V=Q,$=function(e){var t=e.policy,n=e.complianceThreshold;return E.a.createElement(A.d,{policyId:t.id,remediationsEnabled:!1,columns:[{key:"facts.compliance.display_name",title:"System name",props:{width:40}}],complianceThreshold:n})};$.propTypes={policy:O.a.shape({id:O.a.string.isRequired}),complianceThreshold:O.a.number};var U=$,Y=n(536),z=n.n(Y),X=n(68),Z=n(515),ee=n.n(Z),te=(n(614),n(1206),n(757)),ne=n(758),ae=n(682),ie=n(683);function re(){var e=f()(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        external\n        description\n        totalHostCount\n        compliantHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        policy {\n            id\n            name\n        }\n        businessObjective {\n            id\n            title\n        }\n        rules {\n            title\n            severity\n            rationale\n            refId\n            description\n            remediationAvailable\n            identifier\n        }\n        benchmark {\n            id\n            title\n            version\n        }\n    }\n}\n"]);return re=function(){return e},e}n.d(t,"QUERY",(function(){return le})),n.d(t,"PolicyDetailsQuery",(function(){return se})),n.d(t,"PolicyDetails",(function(){return oe}));var le=ee()(re()),se=function(e){var t=e.policyId,n=e.onNavigateWithProps,a=Object(T.b)(le,{variables:{policyId:t}}),i=a.data,r=a.error,l=a.loading,s=a.refetch,o=Object(g.useState)(0),c=b()(o,2),u=c[0],d=c[1],p=i&&!l?i.profile:{},m=window.insights.chrome.isBeta();return p.external&&(r={message:"This is an external SCAP policy."},i=void 0,l=void 0),E.a.createElement(C.q,{stateValues:{error:r,data:i,loading:l}},E.a.createElement(C.p,{stateKey:"loading"},E.a.createElement(X.PageHeader,null,E.a.createElement(C.g,null)),E.a.createElement(X.Main,null,E.a.createElement(X.Spinner,null))),E.a.createElement(C.p,{stateKey:"data"},E.a.createElement(X.PageHeader,{className:"page-header-tabs"},E.a.createElement(te.a,null,E.a.createElement(ne.a,{to:"".concat(m?"/beta/insights":"/rhel","/compliance/scappolicies"),onClick:function(e){return n(e)}},"Policies"),E.a.createElement(ne.a,{isActive:!0},p.name)),E.a.createElement(ae.a,{gutter:"lg"},E.a.createElement(ie.a,{xl2:9,xl:8,lg:12,md:12,sm:12},E.a.createElement(X.PageHeaderTitle,{title:p.name})),E.a.createElement(ie.a,{className:"policy-details-button",xl2:2,xl:2,lg:2,md:3,sm:3}," "),E.a.createElement(ie.a,{className:"policy-details-button",xl2:1,xl:2,lg:2,md:3,sm:3},E.a.createElement(D,{policyId:p.id,previousThreshold:p.complianceThreshold,businessObjective:p.businessObjective,onClose:function(){return s()}}))),E.a.createElement(C.i,{activeTab:u,setActiveTab:d})),E.a.createElement(X.Main,null,E.a.createElement(C.s,{activeTab:u},E.a.createElement(C.r,{tabId:0},E.a.createElement(C.h,{policy:p})),E.a.createElement(C.r,{tabId:1},E.a.createElement(V,{policy:p,loading:l})),E.a.createElement(C.r,{tabId:2},E.a.createElement(U,{policy:p,complianceThreshold:p.complianceThreshold}))))))};se.propTypes={policyId:O.a.string,onNavigateWithProps:O.a.func};var oe=function(e){function t(e){var n;return i()(this,t),(n=o()(this,u()(t).call(this,e))).onNavigate=I.a.bind(p()(n)),n}return h()(t,e),l()(t,[{key:"render",value:function(){return E.a.createElement(se,{policyId:this.props.match.params.policy_id,onNavigateWithProps:this.onNavigate})}}]),t}(E.a.Component);oe.propTypes={match:O.a.object};t.default=z()(oe)},671:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(134);function i(e,t){e.preventDefault();var n="beta"===window.location.pathname.split("/")[1],i=e.target.pathname.replace(a.b,"");(t||this.props.history).push(n?"/beta/".concat(i):i)}}}]);
//# sourceMappingURL=../sourcemaps/PolicyDetails.js.map