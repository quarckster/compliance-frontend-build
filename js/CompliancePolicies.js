(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{646:function(e,t,n){"use strict";n.r(t);var a=n(444),l=n.n(a),r=n(2),c=n.n(r),i=n(460),m=n(441),o=n(449),u=n.n(o),d=n(428),s=n(440),E=n.n(s),p=n(205),g=n(206);function f(){var e=l()(["\n{\n    allProfiles {\n        id\n        name\n        refId\n        description\n        totalHostCount\n        compliantHostCount\n        businessObjective {\n            id\n            title\n        }\n    }\n}\n"]);return f=function(){return e},e}var H=E()(f());t.default=u()((function(){var e=Object(d.b)(H),t=e.data,n=e.error,a=e.loading;if(n)return c.a.createElement(i.d,{error:n});if(a)return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.PageHeader,null,c.a.createElement(m.PageHeaderTitle,{title:"Compliance"})),c.a.createElement(m.Main,null,c.a.createElement("div",{className:"policies-donuts"},c.a.createElement(p.a,{gutter:"md"},c.a.createElement(i.e,null)))));var l,r=t.allProfiles.filter((function(e){return e.totalHostCount>0})),o=[];return r.length?(l=c.a.createElement(m.PageHeader,null,c.a.createElement(m.PageHeaderTitle,{title:"Compliance"}),c.a.createElement(i.c,null)),o=r.map((function(e,t){return c.a.createElement(g.a,{sm:12,md:12,lg:6,xl:4,key:t},c.a.createElement(i.b,{key:t,policy:e}))}))):(l=c.a.createElement(m.PageHeader,{style:{paddingBottom:22}},c.a.createElement(m.PageHeaderTitle,{title:"Compliance"})),o=c.a.createElement(i.a,null)),c.a.createElement(c.a.Fragment,null,l,c.a.createElement(m.Main,null,c.a.createElement("div",{className:"policies-donuts"},c.a.createElement(p.a,{gutter:"md"},o))))}))}}]);
//# sourceMappingURL=../sourcemaps/CompliancePolicies.js.map