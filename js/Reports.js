(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1226:function(e,n,t){"use strict";t.r(n),t.d(n,"Reports",(function(){return H}));var a=t(520),r=t.n(a),l=t(1),i=t.n(l),o=t(528),c=t(531),s=t(529),m=t(69),d=t(539),u=t.n(d),p=t(500),E=t(514),g=t.n(E),f=t(685),h=t(684);function v(){var e=r()(['\n{\n    profiles(search: "has_test_results = true", limit: 1000){\n        edges {\n            node {\n                id\n                name\n                refId\n                description\n                totalHostCount\n                compliantHostCount\n                majorOsVersion\n                complianceThreshold\n                businessObjective {\n                    id\n                    title\n                }\n                policy {\n                    id\n                    benchmark {\n                        id\n                        version\n                    }\n                }\n                benchmark {\n                    id\n                    version\n                }\n            }\n        }\n\n    }\n}\n']);return v=function(){return e},e}var b=g()(v()),H=function(){var e,n,t=Object(p.b)(b,{fetchPolicy:"cache-and-network"}),a=t.data,r=t.error,l=t.loading;if(!l&&a){var d=a.profiles.edges.map((function(e){return e.node})).filter((function(e){return e.totalHostCount>0}));d.length?(n=i.a.createElement(m.PageHeader,{className:"page-header-tabs"},i.a.createElement(m.PageHeaderTitle,{title:"Compliance reports"}),i.a.createElement(o.m,null)),e=d.map((function(e,n){return i.a.createElement(f.a,{sm:12,md:12,lg:6,xl:4,key:n},i.a.createElement(o.j,{key:n,profile:e}))}))):(n=i.a.createElement(m.PageHeader,{style:{paddingBottom:22}},i.a.createElement(m.PageHeaderTitle,{title:"Compliance"})),e=i.a.createElement(s.ComplianceEmptyState,{title:"No policies are reporting",mainButton:i.a.createElement(c.c,{onWizardFinish:function(){location.reload()}})}))}return i.a.createElement(o.p,{stateValues:{error:r,data:a,loading:l}},i.a.createElement(o.o,{stateKey:"loading"},i.a.createElement(m.PageHeader,null,i.a.createElement(m.PageHeaderTitle,{title:"Compliance"})),i.a.createElement(m.Main,null,i.a.createElement("div",{className:"policies-donuts"},i.a.createElement(h.a,{gutter:"md"},i.a.createElement(o.d,null))))),i.a.createElement(o.o,{stateKey:"data"},n,i.a.createElement(m.Main,null,i.a.createElement("div",{className:"policies-donuts"},i.a.createElement(h.a,{gutter:"md"},e)))))};n.default=u()(H)}}]);
//# sourceMappingURL=../sourcemaps/Reports.js.map