(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{157:function(e,t){var n=Array.isArray;e.exports=n},177:function(e,t){e.exports=function(){return!1}},190:function(e,t,n){var r=n(215).Symbol;e.exports=r},215:function(e,t,n){var r=n(216),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},216:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(49))},225:function(e,t,n){var r=n(226);e.exports=function(e){return null!=e&&e.length?r(e,1):[]}},226:function(e,t,n){var r=n(227),a=n(228);e.exports=function e(t,n,o,i,c){var s=-1,l=t.length;for(o||(o=a),c||(c=[]);++s<l;){var u=t[s];n>0&&o(u)?n>1?e(u,n-1,o,i,c):r(c,u):i||(c[c.length]=u)}return c}},227:function(e,t){e.exports=function(e,t){for(var n=-1,r=t.length,a=e.length;++n<r;)e[a+n]=t[n];return e}},228:function(e,t,n){var r=n(190),a=n(177),o=n(157),i=r?r.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||a(e)||!!(i&&e&&e[i])}},242:function(e,t,n){"use strict";var r=n(54),a=n.n(r),o=n(55),i=n.n(o),c=n(56),s=n.n(c),l=n(57),u=n.n(l),p=n(58),m=n.n(p),f=n(9),h=n(1),d=n.n(h),v=function(e){function t(e){return a()(this,t),s()(this,u()(t).call(this,e))}return m()(t,e),i()(t,[{key:"render",value:function(){var e=this.props.error;return 401===e.networkError.statusCode&&window.insights.chrome.auth.logout(),"Oops! There was an error loading Compliance data. If you need to contact Red Hat Support about this, this is the exact error: "+e.networkError.statusCode+" "+e}}]),t}(f.Component);v.propTypes={error:d.a.object},t.a=v},244:function(e,t,n){"use strict";var r=n(54),a=n.n(r),o=n(55),i=n.n(o),c=n(56),s=n.n(c),l=n(57),u=n.n(l),p=n(58),m=n.n(p),f=n(100),h=n.n(f),d=n(75),v=n(1),y=n.n(v),b=n(9),E=n.n(b),g=n(80),w=n(201),j=n(309),k=n(245),x=n(310),S=function(e){function t(e){var n;return a()(this,t),(n=s()(this,u()(t).call(this,e))).redirect=n.redirect.bind(h()(h()(n))),n}return m()(t,e),i()(t,[{key:"redirect",value:function(e){this.props.history.push(e.itemId)}},{key:"render",value:function(){return E.a.createElement(E.a.Fragment,null,E.a.createElement(w.b,{onSelect:this.redirect,"aria-label":"Compliance Tabs"},E.a.createElement(j.a,{variant:k.a.horizontal},E.a.createElement(x.a,{preventDefault:!0,isActive:this.props.match.path===g.b.compliancePolicies,itemId:g.b.compliancePolicies},"Policies"),E.a.createElement(x.a,{preventDefault:!0,isActive:this.props.match.path===g.b.complianceSystems,itemId:g.b.complianceSystems},"Systems"))))}}]),t}(b.Component);S.propTypes={history:y.a.object,match:y.a.object},t.a=Object(d.routerParams)(S)},496:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n.n(r),o=n(174),i=n.n(o),c=n(75),s=n(76),l=n(183),u=n.n(l),p=n(336),m=n(242);function f(){var e=i()(["\n{\n    allSystems {\n        id\n        name\n        profile_names\n        compliant\n    }\n}\n"]);return f=function(){return e},e}var h=u()(f()),d=Object(c.routerParams)(function(){return a.a.createElement(s.Query,{query:h},function(e){var t=e.data,n=e.error,r=e.loading;if(n)return a.a.createElement(m.a,{error:n});if(r)return"Loading Systems...";var o=t.allSystems;return a.a.createElement("div",{className:"systems-table"},a.a.createElement(p.a,{items:o,columns:[{composed:["facts.os_release","display_name"],key:"display_name",title:"Name",props:{width:40}},{key:"facts.compliance.profiles",title:"Profiles",props:{width:50}},{key:"facts.compliance.compliant",title:"Compliant",props:{width:10}}]}))})}),v=n(244);t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.PageHeader,null,a.a.createElement(c.PageHeaderTitle,{title:"Compliance"}),a.a.createElement(v.a,null)),a.a.createElement(c.Main,null,a.a.createElement(d,null)))}}}]);
//# sourceMappingURL=../sourcemaps/ComplianceSystems.js.map