(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1126:function(e,t,n){var a=n(1127);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(9)(a,i);a.locals&&(e.exports=a.locals)},1127:function(e,t,n){(e.exports=n(7)(!1)).push([e.i,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-description{padding-top:10px}\n",""])},1142:function(e,t,n){"use strict";n.r(t);var a=n(64),i=n.n(a),r=n(65),s=n.n(r),l=n(66),o=n.n(l),c=n(67),u=n.n(c),p=n(229),d=n.n(p),m=n(68),v=n.n(m),h=n(628),b=n.n(h),y=n(484),f=n.n(y),g=n(1),E=n.n(g),j=n(0),O=n.n(j),T=n(464),I=n(629),C=n(491),k=n(645),P=n(726),w=n(697),R=n(1143),M=n(568),S=function(e){function t(){var e,n;i()(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=o()(this,(e=u()(t)).call.apply(e,[this].concat(r)))).handleBusinessObjective=function(){var e=n.props,t=e.businessObjective,a=e.editPolicyBusinessObjective,i=e.mutate;return void 0===a?Promise.resolve(t?t.id:null):a&&!a.create&&t&&a.value!==t.id?Promise.resolve(a.value):a&&!a.create&&null===t?Promise.resolve(a.value):null===a?Promise.resolve(null):a.create?i({mutation:M.c,variables:{input:{title:a.label}}}).then((function(e){return e.data.createBusinessObjective.businessObjective.id})):void 0},n.onClick=function(){var e=n.props,t=e.mutate,a=e.policyId,i=e.threshold,r=e.onClick;return n.handleBusinessObjective().then((function(e){var n={id:a,complianceThreshold:parseFloat(i)};return e&&(n.businessObjectiveId=e),t({mutation:M.f,variables:{input:n}})})).then((function(){r()}))},n}return v()(t,e),s()(t,[{key:"render",value:function(){return E.a.createElement(k.a,{type:"submit",variant:"primary",onClick:this.onClick},"Save")}}]),t}(E.a.Component);S.propTypes={policyId:O.a.string.isRequired,businessObjective:O.a.object,editPolicyBusinessObjective:O.a.object,mutate:O.a.func.isRequired,threshold:O.a.number,onClick:O.a.func.isRequired};var B=Object(R.a)(M.f)(S),F=n(569),N=n(745),x=n(45),A=n(734),_=n.n(A),q=function(e){function t(e){var n;return i()(this,t),(n=o()(this,u()(t).call(this,e))).handleModalToggle=function(){var e=n.state.isModalOpen;insights.chrome.appAction(e?"":"edit-business-objective"),n.setState((function(){return{isModalOpen:!e,businessObjective:n.props.businessObjective}})),n.props.onClose()},n.state={isOpen:!1,isModalOpen:!1,policyId:e.policyId,businessObjective:e.businessObjective},n}return v()(t,e),s()(t,[{key:"render",value:function(){var e=this.state,t=e.policyId,n=e.isModalOpen,a=e.businessObjective,i=this.props,r=i.previousThreshold,s=i.editPolicyBusinessObjective,l=i.complianceThreshold,o=i.dispatch;return E.a.createElement(E.a.Fragment,null,E.a.createElement(k.a,{variant:"secondary",onClick:this.handleModalToggle},"Edit policy"),E.a.createElement(P.a,{isSmall:!0,title:"Edit policy details",isOpen:n,onClose:this.handleModalToggle,isFooterLeftAligned:!0,actions:[E.a.createElement(k.a,{key:"cancel",variant:"secondary",onClick:this.handleModalToggle},"Cancel"),E.a.createElement(B,{key:"confirm",policyId:t,threshold:_()(parseFloat(l||r),1),businessObjective:a,editPolicyBusinessObjective:s,onClick:this.handleModalToggle})]},E.a.createElement(w.a,null,E.a.createElement(F.b,{businessObjective:a,policyId:t,dispatch:o}),E.a.createElement(F.c,{previousThreshold:r}))))}}]),t}(g.Component);q.propTypes={policyId:O.a.string,previousThreshold:O.a.number,businessObjective:O.a.object,editPolicyBusinessObjective:O.a.object,complianceThreshold:O.a.string,onClose:O.a.func,dispatch:O.a.func};var H=Object(N.a)("policyForm"),W=Object(x.connect)((function(e){return{complianceThreshold:H(e,"complianceThreshold"),editPolicyBusinessObjective:H(e,"businessObjective")}}))(q),L=n(746),D=n(561),J=n(174),Q=function(e){var t=e.loading,n=e.policy;return E.a.createElement(E.a.Fragment,null,E.a.createElement(L.a,{variant:"info",isInline:!0,title:"Rule editing coming soon"}),E.a.createElement(D.SystemRulesTable,{remediationsEnabled:!1,columns:[{title:"Rule",transforms:[J.a]},{title:"Severity",transforms:[J.a]},{title:E.a.createElement(E.a.Fragment,null,D.ANSIBLE_ICON," Ansible"),transforms:[J.a],original:"Ansible"}],loading:t,profileRules:!t&&[{profile:{refId:n.refId,name:n.name},rules:n.rules}]}))};Q.propTypes={loading:O.a.bool,policy:O.a.shape({name:O.a.string,refId:O.a.string,rules:O.a.array})};var U=Q,V=function(e){var t=e.policy,n=e.systemsTableRef;return E.a.createElement(F.d,{policyId:t.id,columns:[{composed:["facts.os_release","display_name"],key:"display_name",title:"System name",props:{width:40}},{key:"facts.compliance.compliance_score",title:"Compliance score",props:{width:10}},{key:"facts.compliance.last_scanned",title:"Last scanned",props:{width:10}}],ref:n})};V.propTypes={policy:O.a.shape({id:O.a.string.isRequired}),systemsTableRef:O.a.object};var $=V,Y=n(496),z=n.n(Y),G=n(63),K=n(481),X=n.n(K),Z=(n(574),n(1126),n(717)),ee=n(718),te=n(641),ne=n(642),ae=n(53);function ie(){var e=f()(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        description\n        totalHostCount\n        compliantHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        businessObjective {\n            id\n            title\n        }\n        rules {\n            title\n            severity\n            rationale\n            refId\n            description\n            remediationAvailable\n            identifier\n        }\n    }\n}\n"]);return ie=function(){return e},e}n.d(t,"QUERY",(function(){return re})),n.d(t,"PolicyDetailsQuery",(function(){return se})),n.d(t,"PolicyDetails",(function(){return le}));var re=X()(ie()),se=function(e){var t=e.policyId,n=e.onNavigateWithProps,a=Object(T.b)(re,{variables:{policyId:t}}),i=a.data,r=a.error,s=a.loading,l=a.refetch,o=Object(g.useRef)(),c=Object(g.useState)(0),u=b()(c,2),p=u[0],d=u[1],m={};return r?(401===r.networkError.statusCode&&window.insights.chrome.auth.logout(),"Oops! Error loading Policy data: "+r):s?E.a.createElement(E.a.Fragment,null,E.a.createElement(G.PageHeader,null,E.a.createElement(C.h,null)),E.a.createElement(G.Main,null,E.a.createElement(G.Spinner,null))):(m=i.profile,E.a.createElement(E.a.Fragment,null,E.a.createElement(G.PageHeader,{className:"beta-page-header"},E.a.createElement(Z.a,null,E.a.createElement(ee.a,{to:"/rhel/compliance/policies",onClick:function(e){return n(e)}},"Policies"),E.a.createElement(ee.a,{isActive:!0},m.name)),E.a.createElement(te.a,{gutter:"lg"},E.a.createElement(ne.a,{xl2:9,xl:8,lg:12,md:12,sm:12},E.a.createElement(G.PageHeaderTitle,{title:m.name})),E.a.createElement(ne.a,{className:"policy-details-button",xl2:2,xl:2,lg:2,md:3,sm:3},E.a.createElement(ae.Link,{to:"/reports/"+m.id},E.a.createElement(k.a,{variant:"primary"},"View reports"))),E.a.createElement(ne.a,{className:"policy-details-button",xl2:1,xl:2,lg:2,md:3,sm:3},E.a.createElement(W,{policyId:m.id,previousThreshold:m.complianceThreshold,businessObjective:m.businessObjective,onClose:function(){l(),o.current.getWrappedInstance().systemFetch(),o.current.getWrappedInstance().forceUpdate()}}))),E.a.createElement(C.j,{activeTab:p,setActiveTab:d})),E.a.createElement(G.Main,null,function(e){switch(e){case 0:return E.a.createElement(C.i,{policy:m});case 1:return E.a.createElement(U,{policy:m,loading:s});case 2:return E.a.createElement($,{policy:m,systemsTableRef:o})}}(p))))};se.propTypes={policyId:O.a.string,onNavigateWithProps:O.a.func};var le=function(e){function t(e){var n;return i()(this,t),(n=o()(this,u()(t).call(this,e))).onNavigate=I.a.bind(d()(n)),n}return v()(t,e),s()(t,[{key:"render",value:function(){return E.a.createElement(se,{policyId:this.props.match.params.policy_id,onNavigateWithProps:this.onNavigate})}}]),t}(E.a.Component);le.propTypes={match:O.a.object};t.default=z()(le)},629:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(128);function i(e,t){e.preventDefault();var n=e.target.pathname.replace(a.b,"");(t||this.props.history).push(n)}}}]);
//# sourceMappingURL=../sourcemaps/PolicyDetails.js.map