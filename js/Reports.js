(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1192:function(e,t,a){"use strict";a.r(t),a.d(t,"Reports",(function(){return h}));var n=a(512),l=a.n(n),r=a(1),i=a.n(r),o=a(518),c=a(68),s=a(524),m=a.n(s),d=a(494),u=a(509),p=a.n(u),E=a(680),g=a(679);function f(){var e=l()(['\n{\n    profiles(search: "has_test_results = true", limit: 1000){\n        edges {\n            node {\n                id\n                name\n                refId\n                description\n                totalHostCount\n                compliantHostCount\n                majorOsVersion\n                complianceThreshold\n                businessObjective {\n                    id\n                    title\n                }\n            }\n        }\n\n    }\n}\n']);return f=function(){return e},e}var b=p()(f()),h=function(){var e,t,a=Object(d.b)(b),n=a.data,l=a.error,r=a.loading;if(!r&&n){var s=n.profiles.edges.map((function(e){return e.node})).filter((function(e){return e.totalHostCount>0})),m="beta"===window.location.pathname.split("/")[1];s.length?(t=i.a.createElement(c.PageHeader,{className:m?"beta-page-header":"stable-page-header"},i.a.createElement(c.PageHeaderTitle,{title:"Compliance reports"}),m?i.a.createElement(o.o,null):i.a.createElement(o.d,null)),e=s.map((function(e,t){return i.a.createElement(E.a,{sm:12,md:12,lg:6,xl:4,key:t},i.a.createElement(o.l,{key:t,policy:e}))}))):(t=i.a.createElement(c.PageHeader,{style:{paddingBottom:22}},i.a.createElement(c.PageHeaderTitle,{title:"Compliance"})),e=i.a.createElement(o.b,null))}return i.a.createElement(o.q,{stateValues:{error:l,data:n,loading:r}},i.a.createElement(o.p,{stateKey:"loading"},i.a.createElement(c.PageHeader,null,i.a.createElement(c.PageHeaderTitle,{title:"Compliance"})),i.a.createElement(c.Main,null,i.a.createElement("div",{className:"policies-donuts"},i.a.createElement(g.a,{gutter:"md"},i.a.createElement(o.f,null))))),i.a.createElement(o.p,{stateKey:"data"},t,i.a.createElement(c.Main,null,i.a.createElement("div",{className:"policies-donuts"},i.a.createElement(g.a,{gutter:"md"},e)))))};t.default=m()(h)}}]);
//# sourceMappingURL=../sourcemaps/Reports.js.map