(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{293:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},294:function(e,t,n){var r=n(41).parse;function a(e){return e.replace(/[\s,]+/g," ").trim()}var o={},i={};function c(e){return a(e.source.body.substring(e.start,e.end))}var s=!0;var u=!1;function l(e){var t=a(e);if(o[t])return o[t];var n=r(e,{experimentalFragmentVariables:u});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");return n=function e(t,n){var r=Object.prototype.toString.call(t);if("[object Array]"===r)return t.map(function(t){return e(t,n)});if("[object Object]"!==r)throw new Error("Unexpected input.");n&&t.loc&&delete t.loc,t.loc&&(delete t.loc.startToken,delete t.loc.endToken);var a,o,i,c=Object.keys(t);for(a in c)c.hasOwnProperty(a)&&(o=t[c[a]],"[object Object]"!==(i=Object.prototype.toString.call(o))&&"[object Array]"!==i||(t[c[a]]=e(o,!0)));return t}(n=function(e){for(var t={},n=[],r=0;r<e.definitions.length;r++){var a=e.definitions[r];if("FragmentDefinition"===a.kind){var o=a.name.value,u=c(a.loc);i.hasOwnProperty(o)&&!i[o][u]?(s&&console.warn("Warning: fragment with name "+o+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"),i[o][u]=!0):i.hasOwnProperty(o)||(i[o]={},i[o][u]=!0),t[u]||(t[u]=!0,n.push(a))}else n.push(a)}return e.definitions=n,e}(n),!1),o[t]=n,n}function f(){for(var e=Array.prototype.slice.call(arguments),t=e[0],n="string"==typeof t?t:t[0],r=1;r<e.length;r++)e[r]&&e[r].kind&&"Document"===e[r].kind?n+=e[r].loc.source.body:n+=e[r],n+=t[r];return l(n)}f.default=f,f.resetCaches=function(){o={},i={}},f.disableFragmentWarnings=function(){s=!1},f.enableExperimentalFragmentVariables=function(){u=!0},f.disableExperimentalFragmentVariables=function(){u=!1},e.exports=f},335:function(e,t,n){var r=n(336);e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){r(e,t,n[t])})}return e}},336:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},381:function(e,t,n){"use strict";function r(e,t){this.props.history.push(t)}n.d(t,"a",function(){return r})},655:function(e,t,n){"use strict";n.r(t);var r,a=n(93),o=n.n(a),i=n(94),c=n.n(i),s=n(95),u=n.n(s),l=n(96),f=n.n(l),p=n(97),m=n.n(p),d=n(163),y=n.n(d),v=n(293),h=n.n(v),b=n(2),g=n.n(b),w=n(1),j=n.n(w),O=n(129),k=n(381),E=n(124),S=n.n(E),I=n(335),P=n.n(I),x=n(132),C=n.n(x),D=n(98),q=n(121),F=n(162),z=Object(O.registry)()(r=function(e){function t(e){var n;return o()(this,t),(n=u()(this,f()(t).call(this,e))).state={InventoryCmp:function(){return g.a.createElement(O.Skeleton,{size:O.SkeletonSize.md})}},n.fetchInventory=n.fetchInventory.bind(y()(y()(n))),n.fetchInventory(),n}return m()(t,e),c()(t,[{key:"fetchInventory",value:function(){var e=C()(S.a.mark(function e(){var t,n,r;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({react:g.a,reactRouterDom:D,reactCore:q,reactIcons:F});case 2:t=e.sent,n=t.inventoryConnector,r=t.mergeWithDetail,this.getRegistry().register(P()({},r())),this.setState({InventoryCmp:n().InventoryDetail});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.InventoryCmp;return g.a.createElement(g.a.Fragment,null,g.a.createElement(e,{hideBack:!0}))}}]),t}(g.a.Component))||r;z.propTypes={entity:j.a.object};var N=z,T=n(130),A=n(294);function V(){var e=h()(["\nquery System($inventoryId: String!){\n    system(id: $inventoryId) {\n        name\n    }\n}\n"]);return V=function(){return e},e}var W=n.n(A)()(V()),B=function(e){function t(e){var n;return o()(this,t),(n=u()(this,f()(t).call(this,e))).onNavigate=k.a.bind(y()(y()(n))),n}return m()(t,e),c()(t,[{key:"render",value:function(){var e=this,t=this.props.match.params.inventoryId,n=this.props.location.query&&this.props.location.query.hidePassed;return g.a.createElement(T.Query,{query:W,variables:{inventoryId:t}},function(t){var r=t.data,a=t.error,o=t.loading;return a?(401===a.networkError.statusCode&&window.insights.chrome.auth.logout(),"Oops! Error loading Systems data: "+a):o?g.a.createElement(O.PageHeader,null,g.a.createElement(O.Skeleton,{size:O.SkeletonSize.md})):g.a.createElement(g.a.Fragment,null,g.a.createElement(O.PageHeader,null,g.a.createElement(O.Breadcrumbs,{style:{padding:"0px"},items:[{title:"Systems",navigate:"/systems"}],current:r.system.name,onNavigate:e.onNavigate}),g.a.createElement(N,{sendData:e.getData}),g.a.createElement("br",null)),g.a.createElement(O.Main,null,g.a.createElement(O.Compliance,{hidePassed:n})))})}}]),t}(g.a.Component);B.propTypes={match:j.a.object,location:j.a.object};t.default=Object(O.routerParams)(B)}}]);
//# sourceMappingURL=../sourcemaps/SystemDetails.js.map