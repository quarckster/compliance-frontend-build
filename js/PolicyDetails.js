(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1203:function(e,t,n){var a=n(1204);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(7)(a,i);a.locals&&(e.exports=a.locals)},1204:function(e,t,n){(t=n(6)(!1)).push([e.i,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-description{padding-top:10px}\n",""]),e.exports=t},1219:function(e,t,n){"use strict";n.r(t);var a=n(70),i=n.n(a),r=n(69),l=n.n(r),o=n(71),s=n.n(o),c=n(72),p=n.n(c),u=n(242),d=n.n(u),m=n(73),h=n.n(m),v=n(561),b=n.n(v),y=n(514),f=n.n(y),g=n(1),E=n.n(g),j=n(0),O=n.n(j),T=n(494),I=n(666),C=n(519),k=n(683),P=n(748),w=n(720),x=n(603),S=n(574),M=function(e){function t(){var e,n;i()(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=s()(this,(e=p()(t)).call.apply(e,[this].concat(r)))).handleBusinessObjective=function(){var e=n.props,t=e.businessObjective,a=e.editPolicyBusinessObjective,i=e.mutate;return void 0===a?Promise.resolve(t?t.id:null):a&&!a.create&&t&&a.value!==t.id||a&&!a.create&&null===t?Promise.resolve(a.value):null===a?Promise.resolve(null):a.create?i({mutation:S.c,variables:{input:{title:a.label}}}).then((function(e){return e.data.createBusinessObjective.businessObjective.id})):Promise.resolve()},n.onClick=function(){var e=n.props,t=e.mutate,a=e.policyId,i=e.threshold,r=e.onClick;return n.handleBusinessObjective().then((function(e){var n={id:a,complianceThreshold:parseFloat(i)};return e&&(n.businessObjectiveId=e),t({mutation:S.g,variables:{input:n}})})).then((function(){r()}))},n}return h()(t,e),l()(t,[{key:"render",value:function(){return E.a.createElement(k.a,{type:"submit",variant:"primary",onClick:this.onClick},"Save")}}]),t}(E.a.Component);M.propTypes={policyId:O.a.string.isRequired,businessObjective:O.a.object,editPolicyBusinessObjective:O.a.object,mutate:O.a.func.isRequired,threshold:O.a.number,onClick:O.a.func.isRequired};var A=Object(x.a)(S.g)(M),B=n(602),N=n(789),R=n(48),q=n(737),F=n.n(q),H=function(e){function t(e){var n;return i()(this,t),(n=s()(this,p()(t).call(this,e))).handleModalToggle=function(){var e=n.state.isModalOpen;insights.chrome.appAction(e?"":"edit-business-objective"),n.setState((function(){return{isModalOpen:!e,businessObjective:n.props.businessObjective}})),n.props.onClose()},n.state={isOpen:!1,isModalOpen:!1,policyId:e.policyId,businessObjective:e.businessObjective},n}return h()(t,e),l()(t,[{key:"render",value:function(){var e=this.state,t=e.policyId,n=e.isModalOpen,a=e.businessObjective,i=this.props,r=i.previousThreshold,l=i.editPolicyBusinessObjective,o=i.complianceThreshold,s=i.dispatch;return E.a.createElement(E.a.Fragment,null,E.a.createElement(k.a,{variant:"secondary",onClick:this.handleModalToggle},"Edit policy"),E.a.createElement(P.a,{isSmall:!0,title:"Edit policy details",isOpen:n,onClose:this.handleModalToggle,isFooterLeftAligned:!0,actions:[E.a.createElement(k.a,{key:"cancel",variant:"secondary",onClick:this.handleModalToggle},"Cancel"),E.a.createElement(A,{key:"confirm",policyId:t,threshold:F()(parseFloat(o||r),1),businessObjective:a,editPolicyBusinessObjective:l,onClick:this.handleModalToggle})]},E.a.createElement(w.a,null,E.a.createElement(B.b,{businessObjective:a,policyId:t,dispatch:s}),E.a.createElement(B.c,{previousThreshold:r}))))}}]),t}(g.Component);H.propTypes={policyId:O.a.string,previousThreshold:O.a.number,businessObjective:O.a.object,editPolicyBusinessObjective:O.a.object,complianceThreshold:O.a.string,onClose:O.a.func,dispatch:O.a.func};var _=Object(N.a)("policyForm"),L=Object(R.connect)((function(e){return{complianceThreshold:_(e,"complianceThreshold"),editPolicyBusinessObjective:_(e,"businessObjective")}}))(H),D=n(790),V=n(560),W=n(179),J=function(e){var t=e.loading,n=e.policy;return E.a.createElement(E.a.Fragment,null,E.a.createElement(D.a,{variant:"info",isInline:!0,title:"Rule editing coming soon"}),E.a.createElement(V.SystemRulesTable,{remediationsEnabled:!1,columns:[{title:"Rule",transforms:[W.a]},{title:"Severity",transforms:[W.a]},{title:E.a.createElement(E.a.Fragment,null,V.ANSIBLE_ICON," Ansible"),transforms:[W.a],original:"Ansible"}],loading:t,profileRules:[{profile:{refId:n.refId,name:n.name},rules:n.rules}]}))};J.propTypes={loading:O.a.bool,policy:O.a.shape({name:O.a.string,refId:O.a.string,rules:O.a.array})};var K=J,Q=function(e){var t=e.policy,n=e.complianceThreshold;return E.a.createElement(B.d,{policyId:t.id,columns:[{key:"facts.compliance.display_name",title:"System name",props:{width:40}},{key:"facts.compliance.compliance_score",title:"Compliance score",props:{width:10}},{key:"facts.compliance.last_scanned",title:"Last scanned",props:{width:10}}],complianceThreshold:n})};Q.propTypes={policy:O.a.shape({id:O.a.string.isRequired}),complianceThreshold:O.a.number};var $=Q,U=n(524),Y=n.n(U),z=n(68),G=n(509),X=n.n(G),Z=(n(608),n(1203),n(756)),ee=n(757),te=n(678),ne=n(679),ae=n(58);function ie(){var e=f()(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        external\n        description\n        totalHostCount\n        compliantHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        businessObjective {\n            id\n            title\n        }\n        rules {\n            title\n            severity\n            rationale\n            refId\n            description\n            remediationAvailable\n            identifier\n        }\n        benchmark {\n            version\n        }\n    }\n}\n"]);return ie=function(){return e},e}n.d(t,"QUERY",(function(){return re})),n.d(t,"PolicyDetailsQuery",(function(){return le})),n.d(t,"PolicyDetails",(function(){return oe}));var re=X()(ie()),le=function(e){var t=e.policyId,n=e.onNavigateWithProps,a=Object(T.b)(re,{variables:{policyId:t}}),i=a.data,r=a.error,l=a.loading,o=a.refetch,s=Object(g.useState)(0),c=b()(s,2),p=c[0],u=c[1],d=i&&!l?i.profile:{};return d.external&&(r={message:"This is an external SCAP policy."},i=void 0,l=void 0),E.a.createElement(C.r,{stateValues:{error:r,data:i,loading:l}},E.a.createElement(C.q,{stateKey:"loading"},E.a.createElement(z.PageHeader,null,E.a.createElement(C.h,null)),E.a.createElement(z.Main,null,E.a.createElement(z.Spinner,null))),E.a.createElement(C.q,{stateKey:"data"},E.a.createElement(z.PageHeader,{className:"beta-page-header"},E.a.createElement(Z.a,null,E.a.createElement(ee.a,{to:"/rhel/compliance/policies",onClick:function(e){return n(e)}},"Policies"),E.a.createElement(ee.a,{isActive:!0},d.name)),E.a.createElement(te.a,{gutter:"lg"},E.a.createElement(ne.a,{xl2:9,xl:8,lg:12,md:12,sm:12},E.a.createElement(z.PageHeaderTitle,{title:d.name})),E.a.createElement(ne.a,{className:"policy-details-button",xl2:2,xl:2,lg:2,md:3,sm:3},E.a.createElement(ae.Link,{to:"/reports/"+d.id},E.a.createElement(k.a,{variant:"primary"},"View reports"))),E.a.createElement(ne.a,{className:"policy-details-button",xl2:1,xl:2,lg:2,md:3,sm:3},E.a.createElement(L,{policyId:d.id,previousThreshold:d.complianceThreshold,businessObjective:d.businessObjective,onClose:function(){return o()}}))),E.a.createElement(C.j,{activeTab:p,setActiveTab:u})),E.a.createElement(z.Main,null,E.a.createElement(C.t,{activeTab:p},E.a.createElement(C.s,{tabId:0},E.a.createElement(C.i,{policy:d})),E.a.createElement(C.s,{tabId:1},E.a.createElement(K,{policy:d,loading:l})),E.a.createElement(C.s,{tabId:2},E.a.createElement($,{policy:d,complianceThreshold:d.complianceThreshold}))))))};le.propTypes={policyId:O.a.string,onNavigateWithProps:O.a.func};var oe=function(e){function t(e){var n;return i()(this,t),(n=s()(this,p()(t).call(this,e))).onNavigate=I.a.bind(d()(n)),n}return h()(t,e),l()(t,[{key:"render",value:function(){return E.a.createElement(le,{policyId:this.props.match.params.policy_id,onNavigateWithProps:this.onNavigate})}}]),t}(E.a.Component);oe.propTypes={match:O.a.object};t.default=Y()(oe)},666:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(133);function i(e,t){e.preventDefault();var n="beta"===window.location.pathname.split("/")[1],i=e.target.pathname.replace(a.b,"");(t||this.props.history).push(n?"/beta/".concat(i):i)}}}]);
//# sourceMappingURL=../sourcemaps/PolicyDetails.js.map