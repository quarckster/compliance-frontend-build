!function(e){function n(n){for(var o,a,c=n[0],l=n[1],s=n[2],p=0,m=[];p<c.length;p++)a=c[p],r[a]&&m.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(u&&u(n);m.length;)m.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,c=1;c<t.length;c++){var l=t[c];0!==r[l]&&(o=!1)}o&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var o={},r={4:0},i=[];function a(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=o);var i,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=function(e){return a.p+"js/"+({0:"CompliancePolicies~ComplianceSystems~PolicyDetails~SystemDetails",1:"ComplianceSystems~PolicyDetails~SystemDetails",2:"CompliancePolicies~PolicyDetails",3:"ComplianceSystems~PolicyDetails",5:"CompliancePolicies",6:"ComplianceSystems",7:"PolicyDetails",8:"SystemDetails"}[e]||e)+".js"}(e),i=function(n){l.onerror=l.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,t[1](a)}r[e]=void 0}};var s=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,c.appendChild(l)}return Promise.all(n)},a.m=e,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)a.d(t,o,function(n){return e[n]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/insightsbeta/platform/compliance/",a.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var u=l;i.push([645,9]),t()}({221:function(e,n,t){"use strict";t(374);var o=t(346),r=t(212),i=t(349),a=t(0),c=t.n(a),l=t(2),s=t.n(l),u=t(199),p=t.n(u),m=t(213),f=t.n(m),y=t(127),h=t.n(y),d=t(128),v=t.n(d),g=t(129),b=t.n(g),P=t(130),D=t.n(P),E=t(131),S=t.n(E);function w(e){return function(n){function t(e){var n;return h()(this,t),(n=b()(this,D()(t).call(this,e))).state={component:null},n}return S()(t,n),v()(t,[{key:"componentDidMount",value:function(){var n=f()(p.a.mark(function n(){var t,o;return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:t=n.sent,o=t.default,this.setState({component:o});case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?s.a.createElement(e,this.props):s.a.createElement("div",null,"Loading...")}}]),t}(l.Component)}var j=t(236),x=t.n(j);t.d(n,"b",function(){return C}),t.d(n,"a",function(){return A});var O=w(function(){return Promise.all([t.e(0),t.e(2),t.e(5)]).then(t.bind(null,763))}),I=w(function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(6)]).then(t.bind(null,766))}),_=w(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(7)]).then(t.bind(null,759))}),k=w(function(){return Promise.all([t.e(0),t.e(1),t.e(8)]).then(t.bind(null,761))}),C={compliancePolicies:"/policies",complianceSystems:"/systems",complianceSystemsInventoryDetail:"/systems/:inventoryId",policyDetails:"/policies/:policy_id",policyDetailsInventoryDetail:"/policies/:policy_id/:inventoryId",systemDetails:"/systems/:inventoryId"};c.a.func,c.a.string;var A=function(e){var n=e.childProps.location.pathname;return s.a.createElement(o.a,null,s.a.createElement(r.a,{exact:!0,path:C.compliancePolicies,component:O}),s.a.createElement(r.a,{exact:!0,path:C.complianceSystems,component:I}),s.a.createElement(r.a,{path:C.complianceSystemsInventoryDetail,component:k}),s.a.createElement(r.a,{path:C.policyDetailsInventoryDetail,component:k}),s.a.createElement(r.a,{exact:!0,path:C.policyDetails,component:_}),s.a.createElement(r.a,{path:C.systemDetails,component:k}),s.a.createElement(r.a,{render:function(){return x()(C,function(e){return e===n})?null:s.a.createElement(i.a,{to:C.compliancePolicies})}}))}},301:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var o=t(375),r="/r/insights/platform/compliance";o.a},375:function(e){e.exports={a:"1.1.0"}},635:function(e,n,t){var o=t(636);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(320)(o,r);o.locals&&(e.exports=o.locals)},636:function(e,n,t){(n=e.exports=t(204)(!1)).i(t(319),""),n.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nsection.pf-l-page-header.pf-l-page__main-section.pf-m-light {\n  padding-bottom: 0px; }\n",""])},645:function(e,n,t){"use strict";t.r(n);var o=t(2),r=t.n(o),i=t(26),a=t.n(i),c=t(201),l=t(339),s=t(762),u=t(758),p=t(328),m=t(118),f=t(200),y=t(377);var h=t(127),d=t.n(h),v=t(128),g=t.n(v),b=t(129),P=t.n(b),D=t(130),E=t.n(D),S=t(131),w=t.n(S),j=t(0),x=t.n(j),O=t(348),I=t(221),_=(t(635),function(e){function n(){return d()(this,n),P()(this,E()(n).apply(this,arguments))}return w()(n,e),g()(n,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("compliance"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(n){return e.props.history.push("/".concat(n.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return r.a.createElement(I.a,{childProps:this.props})}}]),n}(o.Component));_.propTypes={history:x.a.object};var k=Object(O.a)(Object(m.connect)()(_)),C=t(301),A=new l.a({link:new s.a({uri:C.a+"/graphql"}),cache:new u.a});a.a.render(r.a.createElement(m.Provider,{store:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return Object(f.getRegistry)({},[Object(y.a)()].concat(n))}().getStore()},r.a.createElement(p.a,{basename:"/".concat("insightsbeta","/platform/compliance")},r.a.createElement(c.ApolloProvider,{client:A},r.a.createElement(k,null)))),document.getElementById("root"))}});
//# sourceMappingURL=../sourcemaps/App.js.map