(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1137:function(e,t,a){"use strict";a.r(t),a.d(t,"Reports",(function(){return H}));var n=a(484),l=a.n(n),r=a(1),i=a.n(r),c=a(491),o=a(63),m=a(496),u=a.n(m),s=a(464),d=a(481),p=a.n(d),E=a(641),g=a(642);function f(){var e=l()(["\n{\n    allProfiles {\n        id\n        name\n        refId\n        description\n        totalHostCount\n        compliantHostCount\n        majorOsVersion\n        complianceThreshold\n        businessObjective {\n            id\n            title\n        }\n    }\n}\n"]);return f=function(){return e},e}var b=p()(f()),H=function(){var e=Object(s.b)(b),t=e.data,a=e.error,n=e.loading;if(a)return i.a.createElement(c.e,{error:a});if(n)return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.PageHeader,null,i.a.createElement(o.PageHeaderTitle,{title:"Compliance"})),i.a.createElement(o.Main,null,i.a.createElement("div",{className:"policies-donuts"},i.a.createElement(E.a,{gutter:"md"},i.a.createElement(c.f,null)))));var l,r=t.allProfiles.filter((function(e){return e.totalHostCount>0})),m="beta"===window.location.pathname.split("/")[1],u=[];return r.length?(l=i.a.createElement(o.PageHeader,{className:m?"beta-page-header":"stable-page-header"},i.a.createElement(o.PageHeaderTitle,{title:"Compliance reports"}),m?i.a.createElement(c.o,null):i.a.createElement(c.d,null)),u=r.map((function(e,t){return i.a.createElement(g.a,{sm:12,md:12,lg:6,xl:4,key:t},i.a.createElement(c.l,{key:t,policy:e}))}))):(l=i.a.createElement(o.PageHeader,{style:{paddingBottom:22}},i.a.createElement(o.PageHeaderTitle,{title:"Compliance"})),u=i.a.createElement(c.b,null)),i.a.createElement(i.a.Fragment,null,l,i.a.createElement(o.Main,null,i.a.createElement("div",{className:"policies-donuts"},i.a.createElement(E.a,{gutter:"md"},u))))};t.default=u()(H)}}]);
//# sourceMappingURL=../sourcemaps/Reports.js.map