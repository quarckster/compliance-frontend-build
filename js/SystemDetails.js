(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1137:function(e,n,t){"use strict";t.r(n);var a=t(486),r=t.n(a),l=t(1),i=t.n(l),o=t(481),s=t.n(o),c=t(464),u=t(38),m=t(68),d=t(710),y=t(711),v=t(597),p=t.n(v),E=t(627),b=t(630);function h(){var e=r()(["\nquery System($inventoryId: String!){\n    system(id: $inventoryId) {\n        name\n    }\n}\n"]);return h=function(){return e},e}var f=s()(h());n.default=function(){var e=Object(u.k)(),n=Object(u.l)(),t=n.query&&n.query.hidePassed,a=Object(u.m)().inventoryId,r=Object(c.b)(f,{variables:{inventoryId:a}}),l=r.data,o=r.error,s=r.loading;return o?(401===o.networkError.statusCode&&window.insights.chrome.auth.logout(),"Oops! Error loading Systems data: "+o):s?i.a.createElement(m.PageHeader,null,i.a.createElement(m.Skeleton,{size:m.SkeletonSize.md})):i.a.createElement(i.a.Fragment,null,i.a.createElement(m.PageHeader,null,i.a.createElement(d.a,null,i.a.createElement(y.a,{to:"/rhel/compliance/systems",onClick:function(n){return Object(E.a)(n,e)}},"Systems"),i.a.createElement(y.a,{isActive:!0},l.system.name)),i.a.createElement(b.d,null),i.a.createElement("br",null)),i.a.createElement(m.Main,null,a&&i.a.createElement(p.a,{hidePassed:t,inventoryId:a})))}},627:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(128);function r(e,n){e.preventDefault();var t=e.target.pathname.replace(a.b,"");(n||this.props.history).push(t)}}}]);
//# sourceMappingURL=../sourcemaps/SystemDetails.js.map