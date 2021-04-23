(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[705],{77388:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PolicyDetails:()=>F,QUERY:()=>A,default:()=>O});var i=n(32465),r=n(92950),o=n.n(r),a=n(557),l=n(45697),s=n.n(l),c=n(44119),d=n.n(c),m=n(334),p=n(46829),u=n(32413),y=n(48716),f=n(39173),E=n(86350),h=n(6023),v=n(95904),b=n(52710),g=n(7648),S=(n(90129),n(2707)),T=function(e){var t=e.policy,n=(0,b.Wb)();return o().createElement(u.ToolbarItem,null,o().createElement(v.mR,{to:"/scappolicies/".concat(t.id,"/edit"),state:{policy:t},hash:n,backgroundLocation:{hash:n}},o().createElement(u.Button,{variant:"primary"},"Edit rules")))};T.propTypes={policy:s().object.isRequired};const V=T;var I=function(e){var t=e.loading,n=e.policy;return o().createElement(o().Fragment,null,o().createElement(u.Alert,{isInline:!0,variant:"info",title:"Rule editing is now available."},'Edit rules by clicking the "Edit rules" button in the toolbar. Rule can now be edited for each minor version of the RHEL OS associated with this policy and will be displayed in the policy after the "Edit rules" modal has been opened and saved.'),o().createElement(u.PageSection,{variant:u.PageSectionVariants.light},o().createElement(u.Text,{component:u.TextVariants.p},o().createElement("strong",null,"What rules are shown on this list? "),"This view shows rules that are from the latest SSG version (",n.benchmark.version,"). If you are using a different version of SSG for systems in this policy, those rules will be different and can be viewed on the systems details page.")),o().createElement(S.ZP,{remediationsEnabled:!1,columns:(0,S.eo)(["Name","Severity","Ansible"]),loading:t,profileRules:[{profile:{refId:n.refId,name:n.name},rules:n.rules}],toolbarItems:o().createElement(V,{policy:n})}))};I.propTypes={loading:s().bool,policy:s().shape({name:s().string,refId:s().string,rules:s().array,benchmark:s().object})};const k=I;var w=n(69030),M=n(27803),P=n(49025),R=function(e){var t=e.policy;return o().createElement(w.e_,{showOsMinorVersionFilter:[t.majorOsVersion],query:M.Ep,policyId:t.id,defaultFilter:"policy_id = ".concat(t.id),showActions:!1,remediationsEnabled:!1,columns:[{key:"display_name",title:"Name",props:{width:40,isStatic:!0},renderFunc:function(e,t){return o().createElement(m.Link,{to:{pathname:"/systems/".concat(t)}}," ",e," ")}},{key:"ssgVersion",title:"SSG version",renderFunc:function(e){var t,n,i=e;return"string"==typeof e&&(i=arguments.length<=2?void 0:arguments[2]),i&&o().createElement(P.Z.SSGVersion,{supported:i.supported,ssgVersion:(null===(t=i)||void 0===t?void 0:t.ssg_version)||(null===(n=i)||void 0===n?void 0:n.ssgVersion)})}},{key:"osMinorVersion",title:"Operating system",renderFunc:function(e,t,n){var i=n.osMajorVersion;return"RHEL ".concat(i,".").concat(e)}}],complianceThreshold:t.complianceThreshold})};R.propTypes={policy:s().shape({id:s().string.isRequired,complianceThreshold:s().number.isRequired,majorOsVersion:s().number.isRequired}),systemTableProps:s().object};const j=R;var C=n(99030),K=n(79886),x=function(e){var t=e.policy,n=t.hosts,i=t.policy.profiles.filter((function(e){return!!e.osMinorVersion})),r=(0,C.UP)(n),a=i.sort((0,K.S)("osMinorVersion","desc")).map((function(e){var t;return{profile:e,systemCount:(null===(t=r[e.osMinorVersion])||void 0===t?void 0:t.count)||0}}));return o().createElement(o().Fragment,null,o().createElement(u.PageSection,{variant:u.PageSectionVariants.light},o().createElement(v.Hv,{tabsData:a,columns:(0,S.eo)(["Name","Severity","Ansible"]),level:1,toolbarItems:o().createElement(V,{policy:t})})))};x.propTypes={policy:s().object.isRequired};const L=x;n(23266);var Z,A=d()(Z||(Z=(0,i.Z)(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        external\n        description\n        totalHostCount\n        compliantHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        policyType\n        policy {\n            id\n            name\n            refId\n            profiles {\n                id\n                ssgVersion\n                name\n                refId\n                osMinorVersion\n                osMajorVersion\n                benchmark {\n                    id\n                    title\n                    latestSupportedOsMinorVersions\n                    osMajorVersion\n                }\n                rules {\n                    title\n                    severity\n                    rationale\n                    refId\n                    description\n                    remediationAvailable\n                    identifier\n                }\n            }\n        }\n        businessObjective {\n            id\n            title\n        }\n        hosts {\n            id\n            osMinorVersion\n        }\n        benchmark {\n            id\n            title\n            version\n        }\n        rules {\n            title\n            severity\n            rationale\n            refId\n            description\n            remediationAvailable\n            identifier\n        }\n    }\n}\n"]))),F=function(e){var t,n,i=e.route,l="details",s=(0,m.useParams)().policy_id,c=(0,m.useLocation)(),d=(0,b.Wb)(),S=(0,a.useDispatch)(),T=(0,p.useQuery)(A,{variables:{policyId:s}}),V=T.data,I=T.error,w=T.loading,M=T.refetch,P=!0;return V&&!w&&(P=!!(n=V.profile).policy.profiles.find((function(e){return!!e.osMinorVersion}))),(0,r.useEffect)((function(){M()}),[c,M]),(0,r.useLayoutEffect)((function(){S({type:"SELECT_ENTITIES",payload:{ids:[]}})}),[]),(0,g.a)(i,null===(t=n)||void 0===t?void 0:t.name),o().createElement(v.tC,{stateValues:{error:I,data:V,loading:w}},o().createElement(v.K7,{stateKey:"loading"},o().createElement(y.Z,null,o().createElement(v.PL,null)),o().createElement(E.Z,null,o().createElement(h.Z,null))),o().createElement(v.K7,{stateKey:"data"},n&&o().createElement(r.Fragment,null,o().createElement(y.Z,{className:"page-header-tabs"},o().createElement(u.Breadcrumb,null,o().createElement(v.MU,{to:"/"},"Compliance"),o().createElement(v.MU,{to:"/scappolicies"},"SCAP policies"),o().createElement(u.BreadcrumbItem,{isActive:!0},n.name)),o().createElement(u.Grid,{gutter:"lg"},o().createElement(u.GridItem,{xl2:11,xl:10,lg:12,md:12,sm:12},o().createElement(f.Z,{title:n.name})),o().createElement(u.GridItem,{className:"policy-details-button",xl2:1,xl:2,lg:2,md:3,sm:3},o().createElement(v.mR,{to:"/scappolicies/".concat(n.id,"/edit"),state:{policy:n},hash:d,backgroundLocation:{hash:"details"}},o().createElement(u.Button,{variant:"secondary"},"Edit policy")))),o().createElement(v.tn,{"aria-label":"Policy Tabs",defaultTab:l},o().createElement(u.Tab,{title:"Details",id:"policy-details",eventKey:"details"}),o().createElement(u.Tab,{title:"Rules",id:"policy-rules",eventKey:"rules"}),o().createElement(u.Tab,{title:"Systems",id:"policy-systems",eventKey:"systems"}))),o().createElement(E.Z,null,o().createElement(v.Jm,{defaultTab:l},o().createElement(v.X8,{eventKey:"details"},o().createElement(v.NP,{policy:n})),o().createElement(v.X8,{eventKey:"rules"},P?o().createElement(L,{policy:n}):o().createElement(k,{policy:n})),o().createElement(v.X8,{eventKey:"systems"},o().createElement(j,{policy:n})))))))};F.propTypes={route:s().object};const O=F},87601:(e,t,n)=>{(t=n(23645)(!1)).push([e.id,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-description{padding-top:10px}\n",""]),e.exports=t},23266:(e,t,n)=>{"use strict";var i=n(93379),r=n.n(i),o=n(87601),a=n.n(o),l=r()(a(),{insert:"head",singleton:!1});if(!a().locals||e.hot.invalidate){var s=a().locals;e.hot.accept(87601,(t=>{o=n(87601),function(e,t,n){if(!e&&t||e&&!t)return!1;var i;for(i in e)if(e[i]!==t[i])return!1;for(i in t)if(!e[i])return!1;return!0}(s,(a=n.n(o))().locals)?(s=a().locals,l(a())):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),a().locals}}]);
//# sourceMappingURL=../sourcemaps/PolicyDetails.673d5a7ea4f13f2d61e3.js.map