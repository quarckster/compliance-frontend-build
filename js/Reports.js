(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1215:function(e,t,n){"use strict";n.r(t),n.d(t,"Reports",(function(){return b}));var a=n(520),r=n.n(a),l=n(1),i=n.n(l),o=n(525),c=n(68),s=n(529),m=n.n(s),d=n(500),u=n(515),p=n.n(u),E=n(683),g=n(682);function f(){var e=r()(['\n{\n    profiles(search: "has_test_results = true", limit: 1000){\n        edges {\n            node {\n                id\n                name\n                refId\n                description\n                totalHostCount\n                compliantHostCount\n                external\n                majorOsVersion\n                complianceThreshold\n                businessObjective {\n                    id\n                    title\n                }\n                benchmark {\n                    version\n                }\n            }\n        }\n\n    }\n}\n']);return f=function(){return e},e}var h=p()(f()),b=function(){var e,t,n=Object(d.b)(h,{fetchPolicy:"cache-and-network"}),a=n.data,r=n.error,l=n.loading;if(!l&&a){var s=a.profiles.edges.map((function(e){return e.node})).filter((function(e){return e.totalHostCount>0})),m="beta"===window.location.pathname.split("/")[1];s.length?(t=i.a.createElement(c.PageHeader,{className:m?"beta-page-header":"stable-page-header"},i.a.createElement(c.PageHeaderTitle,{title:"Compliance reports"}),m?i.a.createElement(o.o,null):i.a.createElement(o.d,null)),e=s.map((function(e,t){return i.a.createElement(E.a,{sm:12,md:12,lg:6,xl:4,key:t},i.a.createElement(o.l,{key:t,policy:e}))}))):(t=i.a.createElement(c.PageHeader,{style:{paddingBottom:22}},i.a.createElement(c.PageHeaderTitle,{title:"Compliance"})),e=i.a.createElement(o.b,{title:"No policies are reporting"}))}return i.a.createElement(o.r,{stateValues:{error:r,data:a,loading:l}},i.a.createElement(o.q,{stateKey:"loading"},i.a.createElement(c.PageHeader,null,i.a.createElement(c.PageHeaderTitle,{title:"Compliance"})),i.a.createElement(c.Main,null,i.a.createElement("div",{className:"policies-donuts"},i.a.createElement(g.a,{gutter:"md"},i.a.createElement(o.f,null))))),i.a.createElement(o.q,{stateKey:"data"},t,i.a.createElement(c.Main,null,i.a.createElement("div",{className:"policies-donuts"},i.a.createElement(g.a,{gutter:"md"},e)))))};t.default=m()(b)}}]);
//# sourceMappingURL=../sourcemaps/Reports.js.map