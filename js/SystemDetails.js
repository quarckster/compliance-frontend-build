(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{615:function(e,t,n){"use strict";function r(e,t){this.props.history.push(t)}n.d(t,"a",function(){return r})},794:function(e,t,n){"use strict";n.r(t);var r,a=n(70),o=n.n(a),i=n(71),s=n.n(i),c=n(72),u=n.n(c),l=n(73),m=n.n(l),y=n(74),p=n.n(y),d=n(126),h=n.n(d),v=n(350),f=n.n(v),g=n(7),E=n.n(g),I=n(1),b=n.n(I),k=n(96),w=n(615),S=n(90),C=n.n(S),j=n(446),D=n.n(j),P=n(98),q=n.n(P),z=n(75),x=n(327),N=n(374),O=Object(k.registry)()(r=function(e){function t(e){var n;return o()(this,t),(n=u()(this,m()(t).call(this,e))).state={InventoryCmp:function(){return E.a.createElement(k.Skeleton,{size:k.SkeletonSize.md})}},n.fetchInventory=n.fetchInventory.bind(h()(h()(n))),n.fetchInventory(),n}return p()(t,e),s()(t,[{key:"fetchInventory",value:function(){var e=q()(C.a.mark(function e(){var t,n,r;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({react:E.a,reactRouterDom:z,reactCore:x,reactIcons:N});case 2:t=e.sent,n=t.inventoryConnector,r=t.mergeWithDetail,this.getRegistry().register(D()({},r())),this.setState({InventoryCmp:n().InventoryDetail});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.InventoryCmp;return E.a.createElement(E.a.Fragment,null,E.a.createElement(e,{hideBack:!0}))}}]),t}(E.a.Component))||r;O.propTypes={entity:b.a.object};var B=O,F=n(97),H=n(353);function J(){var e=f()(["\nquery System($inventoryId: String!){\n    system(id: $inventoryId) {\n        name\n    }\n}\n"]);return J=function(){return e},e}var R=n.n(H)()(J()),T=function(e){function t(e){var n;return o()(this,t),(n=u()(this,m()(t).call(this,e))).onNavigate=w.a.bind(h()(h()(n))),n}return p()(t,e),s()(t,[{key:"render",value:function(){var e=this,t=this.props.match.params.inventoryId,n=this.props.location.query&&this.props.location.query.hidePassed;return E.a.createElement(F.Query,{query:R,variables:{inventoryId:t}},function(t){var r=t.data,a=t.error,o=t.loading;return a?(401===a.networkError.statusCode&&window.insights.chrome.auth.logout(),"Oops! Error loading Systems data: "+a):o?E.a.createElement(k.PageHeader,null,E.a.createElement(k.Skeleton,{size:k.SkeletonSize.md})):E.a.createElement(E.a.Fragment,null,E.a.createElement(k.PageHeader,null,E.a.createElement(k.Breadcrumbs,{style:{padding:"0px"},items:[{title:"Systems",navigate:"/systems"}],current:r.system.name,onNavigate:e.onNavigate}),E.a.createElement(B,{sendData:e.getData}),E.a.createElement("br",null)),E.a.createElement(k.Main,null,E.a.createElement(k.Compliance,{hidePassed:n})))})}}]),t}(E.a.Component);T.propTypes={match:b.a.object,location:b.a.object};t.default=Object(k.routerParams)(T)}}]);
//# sourceMappingURL=../sourcemaps/SystemDetails.js.map