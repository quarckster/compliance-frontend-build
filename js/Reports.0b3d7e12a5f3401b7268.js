(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[322],{1649:(e,n,t)=>{"use strict";t.r(n),t.d(n,{Reports:()=>y,default:()=>g});var r,l=t(32465),o=t(92950),s=t.n(o),a=t(334),i=t(46829),c=t(44119),u=t.n(c),d=t(48716),m=t(39173),f=t(86350),p=t(75959),E=t(95904),h=u()(r||(r=(0,l.Z)(["\nquery Profiles($filter: String!) {\n    profiles(search: $filter, limit: 1000){\n        edges {\n            node {\n                id\n                name\n                refId\n                description\n                policyType\n                totalHostCount\n                testResultHostCount\n                compliantHostCount\n                unsupportedHostCount\n                majorOsVersion\n                ssgVersion\n                complianceThreshold\n                businessObjective {\n                    id\n                    title\n                }\n                policy {\n                    id\n                    name\n                    benchmark {\n                        id\n                        version\n                    }\n                }\n                benchmark {\n                    id\n                    version\n                }\n            }\n        }\n\n    }\n}\n"]))),v=function(){return s().createElement(d.Z,null,s().createElement(m.Z,{title:"Reports"}))},y=function(){var e=[],n=!1,t=(0,a.useLocation)(),r=(0,i.useQuery)(h,{variables:{filter:"(has_policy_test_results = true AND external = false)\n                    OR (has_policy = false AND has_test_results = true)"}}),l=r.data,c=r.error,u=r.loading,d=r.refetch;return(0,o.useEffect)((function(){d()}),[t,d]),l&&(c=void 0,u=void 0,n=(e=function(e){var n;return((null==e||null===(n=e.profiles)||void 0===n?void 0:n.edges)||[]).map((function(e){return e.node}))}(l))&&e.length>0),s().createElement(E.tC,{stateValues:{error:c,data:l,loading:u}},s().createElement(E.K7,{stateKey:"loading"},s().createElement(v,null),s().createElement(f.Z,null,s().createElement(p.Z,{colSize:3,rowSize:10}))),s().createElement(E.K7,{stateKey:"data"},s().createElement(v,null),s().createElement(f.Z,null,n?s().createElement(E.Ek,{profiles:e}):s().createElement(E.vm,null))))};const g=y}}]);
//# sourceMappingURL=../sourcemaps/Reports.662f5b7a29d52375fe37.js.map