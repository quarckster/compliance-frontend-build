!function(e){function n(n){for(var o,i,c=n[0],l=n[1],s=n[2],p=0,m=[];p<c.length;p++)i=c[p],r[i]&&m.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(u&&u(n);m.length;)m.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,c=1;c<t.length;c++){var l=t[c];0!==r[l]&&(o=!1)}o&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var o={},r={2:0},a=[];function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=o);var a,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(e){return i.p+"js/"+({0:"CompliancePolicies~PolicyDetails",1:"ComplianceSystems~PolicyDetails",3:"CompliancePolicies",4:"ComplianceSystems",5:"ComplianceImageStreams",6:"PolicyDetails",7:"SystemDetails"}[e]||e)+".js"}(e),a=function(n){l.onerror=l.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,t[1](i)}r[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,c.appendChild(l)}return Promise.all(n)},i.m=e,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/beta/apps/compliance/",i.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var u=l;a.push([258,8]),t()}({138:function(e,n,t){"use strict";t(160);var o=t(454),r=t(121),a=t(455),i=t(1),c=t.n(i),l=t(2),s=t.n(l),u=t(132),p=t.n(u),m=t(137),f=t.n(m),h=t(53),d=t.n(h),y=t(54),v=t.n(y),g=t(55),b=t.n(g),P=t(56),E=t.n(P),w=t(57),j=t.n(w);function S(e){return function(n){function t(e){var n;return d()(this,t),(n=b()(this,E()(t).call(this,e))).state={component:null},n}return j()(t,n),v()(t,[{key:"componentDidMount",value:function(){var n=f()(p.a.mark(function n(){var t,o;return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:t=n.sent,o=t.default,this.setState({component:o});case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?s.a.createElement(e,this.props):s.a.createElement("div",null)}}]),t}(l.Component)}var x=t(161),D=t.n(x);t.d(n,"b",function(){return A}),t.d(n,"a",function(){return T});var I=S(function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,657))}),O=S(function(){return Promise.all([t.e(1),t.e(4)]).then(t.bind(null,660))}),_=S(function(){return t.e(5).then(t.bind(null,654))}),k=S(function(){return Promise.all([t.e(0),t.e(1),t.e(6)]).then(t.bind(null,653))}),C=S(function(){return t.e(7).then(t.bind(null,661))}),A={compliancePolicies:"/policies",complianceSystems:"/systems",complianceImageStreams:"/imagestreams",complianceSystemsInventoryDetail:"/systems/:inventoryId",policyDetails:"/policies/:policy_id",policyDetailsInventoryDetail:"/policies/:policy_id/:inventoryId",systemDetails:"/systems/:inventoryId"};c.a.func,c.a.string;var T=function(e){var n=e.childProps.location.pathname;return s.a.createElement(o.a,null,s.a.createElement(r.a,{exact:!0,path:A.compliancePolicies,component:I}),s.a.createElement(r.a,{exact:!0,path:A.complianceSystems,component:O}),s.a.createElement(r.a,{exact:!0,path:A.complianceImageStreams,component:_}),s.a.createElement(r.a,{path:A.complianceSystemsInventoryDetail,component:C}),s.a.createElement(r.a,{path:A.policyDetailsInventoryDetail,component:C}),s.a.createElement(r.a,{exact:!0,path:A.policyDetails,component:k}),s.a.createElement(r.a,{path:A.systemDetails,component:C}),s.a.createElement(r.a,{render:function(){return D()(A,function(e){return e===n})?null:s.a.createElement(a.a,{to:A.compliancePolicies})}}))}},140:function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"a",function(){return a});var o=t(162),r="/api/compliance",a={"X-Insights-Compliance":o.a,"Content-Type":"application/json",Accept:"application/json"}},162:function(e){e.exports={a:"1.1.0"}},163:function(e,n){},233:function(e,n,t){var o=t(234);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(71)(o,r);o.locals&&(e.exports=o.locals)},234:function(e,n,t){(n=e.exports=t(66)(!1)).i(t(182),""),n.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nsection.pf-l-page-header.pf-l-page__main-section, section.pf-c-page-header.pf-c-page__main-section {\n  padding-bottom: 0px; }\n\n.pf-l-tabs, .pf-c-tabs {\n  padding-top: 22px; }\n",""])},243:function(e,n){},249:function(e,n){},258:function(e,n,t){"use strict";t.r(n);var o,r=t(2),a=t.n(r),i=t(25),c=t.n(i),l=t(65),s=t(449),u=t(658),p=t(655),m=t(384),f=t(51),h=t(64),d=t(165),y=t(659);var v=t(53),g=t.n(v),b=t(54),P=t.n(b),E=t(55),w=t.n(E),j=t(56),S=t.n(j),x=t(57),D=t.n(x),I=t(1),O=t.n(I),_=t(453),k=t(138),C=(t(233),function(e){function n(){return g()(this,n),w()(this,S()(n).apply(this,arguments))}return D()(n,e),P()(n,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("compliance"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(n){return e.props.history.push("/".concat(n.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(k.a,{childProps:this.props})}}]),n}(r.Component));C.propTypes={history:O.a.object};var A=Object(_.a)(Object(f.connect)()(C)),T=t(140),M=t(147),N=new s.a({link:new u.a({uri:T.b+"/graphql"}),cache:new p.a}),q=window.location.pathname.split("/");q.shift();var B="/";"beta"===q[0]&&(B="/".concat(q.shift(),"/")),window.insights.chrome.auth.getUser().then(function(){c.a.render(a.a.createElement(f.Provider,{store:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(o=Object(h.getRegistry)({},[Object(d.a)()].concat(n))).register({form:y.a}),o}().getStore()},a.a.createElement(M.b,{locale:navigator.language},a.a.createElement(m.a,{basename:"".concat(B).concat(q[0],"/").concat(q[1])},a.a.createElement(l.ApolloProvider,{client:N},a.a.createElement(A,null))))),document.getElementById("root"))})}});
//# sourceMappingURL=../sourcemaps/App.js.map