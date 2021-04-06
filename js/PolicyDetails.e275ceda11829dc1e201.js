(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[705],{87601:(e,n,t)=>{(n=t(23645)(!1)).push([e.id,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-description{padding-top:10px}\n",""]),e.exports=n},50207:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MULTIVERSION_QUERY:()=>B,PolicyDetails:()=>Q,QUERY:()=>$,default:()=>W});var r=t(28655),i=t.n(r),o=t(77865),a=t.n(o),l=t(61084),s=t(45697),c=t.n(s),p=t(44119),d=t.n(p),m=t(334),u=t(46829),y=t(4092),f=t(48716),v=t(39173),b=t(86350),E=t(6023),h=t(95612),g=t(50437),S=t(42564),T=t(52998),I=(t(90129),t(2707)),P=function(e){var n=e.loading,t=e.policy;return a().createElement(a().Fragment,null,a().createElement(y.Alert,{variant:"info",isInline:!0,title:"Rule editing coming soon"}),a().createElement(y.PageSection,{variant:y.PageSectionVariants.light},a().createElement(y.Text,{component:y.TextVariants.p},a().createElement("strong",null,"What rules are shown on this list? "),"This view shows rules that are from the latest SSG version (",t.benchmark.version,"). If you are using a different version of SSG for systems in this policy, those rules will be different and can be viewed on the systems details page.")),a().createElement(I.ZP,{remediationsEnabled:!1,columns:(0,I.eo)(["Name","Severity","Ansible"]),loading:n,profileRules:[{profile:{refId:t.refId,name:t.name},rules:t.rules}]}))};P.propTypes={loading:c().bool,policy:c().shape({name:c().string,refId:c().string,rules:c().array,benchmark:c().object})};const O=P;var j=t(67154),V=t.n(j),w=t(59713),k=t.n(w),C=t(319),R=t.n(C),M=t(93188),x=t(55186),K=t(21157);function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){k()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var A=function(e){var n=e.policy,t=e.systemTableProps,r=(0,S.ZP)("newInventory"),i=(0,S.ZP)("showSsgVersions"),o=r?M.e_:M.r0;return a().createElement(o,V()({query:x.Ep,policyId:n.id,defaultFilter:"policy_id = ".concat(n.id),showActions:!1,remediationsEnabled:!1,columns:[_({key:"facts.compliance.display_name",title:"Name",props:{width:40,isStatic:!0}},r&&{key:"display_name",renderFunc:function(e,n){return a().createElement(m.Link,{to:{pathname:"/systems/".concat(n)}}," ",e," ")}})].concat(R()(i?[{key:"ssgVersion",title:"SSG version",renderFunc:function(e){var n,t,r=e;return"string"==typeof e&&(r=arguments.length<=2?void 0:arguments[2]),r&&a().createElement(K.n1.SSGVersion,{supported:r.supported,ssgVersion:(null===(n=r)||void 0===n?void 0:n.ssg_version)||(null===(t=r)||void 0===t?void 0:t.ssgVersion)})}}]:[])),complianceThreshold:n.complianceThreshold},t))};A.propTypes={policy:c().shape({id:c().string.isRequired,complianceThreshold:c().number.isRequired}),systemTableProps:c().object};const D=A;var L=t(49690),N=t(61156),q=function(e){var n=e.policy,t=(0,g.Wb)();return a().createElement(y.ToolbarItem,null,a().createElement(h.mR,{to:"/scappolicies/".concat(n.id,"/edit"),state:{policy:n},hash:t,backgroundLocation:{hash:t}},a().createElement(y.Button,{variant:"primary"},"Edit rules")))};q.propTypes={policy:c().object.isRequired};var G=function(e){var n=e.policy,t=n.hosts,r=n.policy.profiles.filter((function(e){return!!e.osMinorVersion})),i=(0,L.UP)(t),o=r.sort((0,N.S)("osMinorVersion")).map((function(e){var n;return{profile:e,systemCount:(null===(n=i[e.osMinorVersion])||void 0===n?void 0:n.count)||0}}));return a().createElement(a().Fragment,null,a().createElement(y.PageSection,{variant:y.PageSectionVariants.light},a().createElement(h.Hv,{tabsData:o,columns:(0,I.eo)(["Name","Severity","Ansible"]),level:1,toolbarItems:a().createElement(q,{policy:n})})))};G.propTypes={policy:c().object.isRequired};const F=G;t(23266);var U,H,B=d()(U||(U=i()(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        external\n        description\n        totalHostCount\n        compliantHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        policyType\n        policy {\n            id\n            name\n            refId\n            profiles {\n                id\n                ssgVersion\n                name\n                refId\n                osMinorVersion\n                osMajorVersion\n                benchmark {\n                    id\n                    title\n                    latestSupportedOsMinorVersions\n                    osMajorVersion\n                }\n                rules {\n                    title\n                    severity\n                    rationale\n                    refId\n                    description\n                    remediationAvailable\n                    identifier\n                }\n            }\n        }\n        businessObjective {\n            id\n            title\n        }\n        hosts {\n            id\n            osMinorVersion\n        }\n        benchmark {\n            id\n            title\n            version\n        }\n    }\n}\n"]))),$=d()(H||(H=i()(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        external\n        description\n        totalHostCount\n        compliantHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        policyType\n        policy {\n            id\n            name\n        }\n        businessObjective {\n            id\n            title\n        }\n        hosts {\n            id\n        }\n        rules {\n            title\n            severity\n            rationale\n            refId\n            description\n            remediationAvailable\n            identifier\n        }\n        benchmark {\n            id\n            title\n            version\n        }\n    }\n}\n"]))),Q=function(e){var n=e.route,t="details",r=(0,S.ZP)("multiversionTabs"),i=(0,m.useParams)().policy_id,s=(0,m.useLocation)(),c=(0,g.Wb)(),p=(0,l.useDispatch)(),d=(0,u.useQuery)(r?B:$,{variables:{policyId:i}}),I=d.data,P=d.error,j=d.loading,V=d.refetch,w=I&&!j?I.profile:void 0;return(0,o.useEffect)((function(){V()}),[s,V]),(0,o.useLayoutEffect)((function(){p({type:"SELECT_ENTITIES",payload:{ids:[]}})}),[]),(0,T.a)(n,null==w?void 0:w.name),a().createElement(h.tC,{stateValues:{error:P,data:I,loading:j}},a().createElement(h.K7,{stateKey:"loading"},a().createElement(f.Z,null,a().createElement(h.PL,null)),a().createElement(b.Z,null,a().createElement(E.Z,null))),a().createElement(h.K7,{stateKey:"data"},w&&a().createElement(o.Fragment,null,a().createElement(f.Z,{className:"page-header-tabs"},a().createElement(y.Breadcrumb,null,a().createElement(h.MU,{to:"/"},"Compliance"),a().createElement(h.MU,{to:"/scappolicies"},"SCAP policies"),a().createElement(y.BreadcrumbItem,{isActive:!0},w.name)),a().createElement(y.Grid,{gutter:"lg"},a().createElement(y.GridItem,{xl2:11,xl:10,lg:12,md:12,sm:12},a().createElement(v.Z,{title:w.name})),a().createElement(y.GridItem,{className:"policy-details-button",xl2:1,xl:2,lg:2,md:3,sm:3},a().createElement(h.mR,{to:"/scappolicies/".concat(w.id,"/edit"),state:{policy:w},hash:c,backgroundLocation:{hash:"details"}},a().createElement(y.Button,{variant:"secondary"},"Edit policy")))),a().createElement(h.tn,{"aria-label":"Policy Tabs",defaultTab:t},a().createElement(y.Tab,{title:"Details",id:"policy-details",eventKey:"details"}),a().createElement(y.Tab,{title:"Rules",id:"policy-rules",eventKey:"rules"}),a().createElement(y.Tab,{title:"Systems",id:"policy-systems",eventKey:"systems"}))),a().createElement(b.Z,null,a().createElement(h.Jm,{defaultTab:t},a().createElement(h.X8,{eventKey:"details"},a().createElement(h.NP,{policy:w})),a().createElement(h.X8,{eventKey:"rules"},r?a().createElement(F,{policy:w}):a().createElement(O,{policy:w})),a().createElement(h.X8,{eventKey:"systems"},a().createElement(D,{policy:w})))))))};Q.propTypes={route:c().object};const W=Q},23266:(e,n,t)=>{"use strict";var r=t(93379),i=t.n(r),o=t(87601),a=t.n(o),l=i()(a(),{insert:"head",singleton:!1});if(!a().locals||e.hot.invalidate){var s=a().locals;e.hot.accept(87601,(n=>{o=t(87601),function(e,n,t){if(!e&&n||e&&!n)return!1;var r;for(r in e)if(e[r]!==n[r])return!1;for(r in n)if(!e[r])return!1;return!0}(s,(a=t.n(o))().locals)?(s=a().locals,l(a())):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),a().locals}}]);
//# sourceMappingURL=PolicyDetails.e275ceda11829dc1e201.js.map