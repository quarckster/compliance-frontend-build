(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{354:function(e,t,n){"use strict";function a(e,t){this.props.history.push(t)}n.d(t,"a",function(){return a})},749:function(e,t,n){var a=n(750),r=n(751),s=n(752);e.exports=function(e){return a(e)||r(e)||s()}},750:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},751:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},752:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},764:function(e,t,n){"use strict";n.r(t);var a,r=n(124),s=n.n(r),i=n(125),l=n.n(i),o=n(126),c=n.n(o),u=n(127),m=n.n(u),p=n(128),d=n.n(p),y=n(288),f=n.n(y),h=n(322),v=n.n(h),E=n(2),g=n.n(E),b=n(0),P=n.n(b),w=n(203),I=n(354),k=n(169),S=n.n(k),x=n(208),R=n.n(x),_=n(209),C=n.n(_),O=n(129),T=n(312),j=n(204),N=Object(w.registry)()(a=function(e){function t(e){var n;return s()(this,t),(n=c()(this,m()(t).call(this,e))).state={InventoryCmp:function(){return g.a.createElement("div",null,"Loading...")}},n.fetchInventory=n.fetchInventory.bind(f()(f()(n))),n.fetchInventory(),n}return d()(t,e),l()(t,[{key:"fetchInventory",value:function(){var e=C()(S.a.mark(function e(){var t,n,a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({react:g.a,reactRouterDom:O,reactCore:T,reactIcons:j});case 2:t=e.sent,n=t.inventoryConnector,a=t.mergeWithDetail,this.getRegistry().register(R()({},a())),this.setState({InventoryCmp:n().InventoryDetail});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.InventoryCmp;return g.a.createElement(g.a.Fragment,null,g.a.createElement(e,{hideBack:!0}))}}]),t}(g.a.Component))||a;N.propTypes={entity:P.a.object};var $=N,A=n(376),D=n(374),F=n(362),L=n(364),B=n(372),q=n(373),z=n(402),H=n(344),J=n(389),M=function(e){function t(e){var n;return s()(this,t),(n=c()(this,m()(t).call(this))).policy=e.policy,n}return d()(t,e),l()(t,[{key:"complianceIcon",value:function(e){return e?g.a.createElement("div",{style:{fontSize:"large",color:"#92d400"},id:"policy_compliant"},g.a.createElement(F.a,null)," Compliant"):g.a.createElement("div",{style:{fontSize:"large",color:"#a30000"},id:"policy_compliant"},g.a.createElement(L.a,null)," Noncompliant")}},{key:"render",value:function(){var e=this.policy.rules_passed+this.policy.rules_failed;return g.a.createElement(B.a,null,g.a.createElement(q.a,null,g.a.createElement(z.a,null,g.a.createElement(H.b,{style:{marginBottom:"0px"},component:H.a.small},"External Policy"),g.a.createElement(H.b,{style:{marginTop:"0px"},component:H.a.h4},this.policy.name)),g.a.createElement(z.a,null,this.complianceIcon(this.policy.compliant),g.a.createElement(H.b,{component:H.a.small},this.policy.rules_passed," of ",e," passed"),g.a.createElement(H.b,{component:H.a.medium},"Profile ",g.a.createElement("br",null),this.policy.ref_id))),g.a.createElement(J.a,null,g.a.createElement(z.a,null,g.a.createElement(H.b,{component:H.a.small},"Last scanned: ",this.policy.last_scanned))))}}]),t}(g.a.Component),Q=function(e){function t(e){return s()(this,t),c()(this,m()(t).call(this,e))}return d()(t,e),l()(t,[{key:"systemPolicyCards",value:function(){return this.props.policies.map(function(e,t){return g.a.createElement(A.a,{span:4,key:t},g.a.createElement(M,{policy:e}))})}},{key:"render",value:function(){return void 0===this.props.policies?"Loading policy information...":g.a.createElement("div",{id:"system_policy_cards"},g.a.createElement(D.a,{gutter:"md"},this.systemPolicyCards()))}}]),t}(g.a.Component);Q.propTypes={policies:P.a.array};var W=Object(w.routerParams)(Q),G=n(749),K=n.n(G),U=n(353),V=n(365),X=function(e){function t(e){var n;return s()(this,t),(n=c()(this,m()(t).call(this,e))).state={openNodes:[],page:1,itemsPerPage:10,rows:n.rulesToRows(n.props.profileRules),currentRows:[]},n.state.currentRows=n.currentRows(1,10),n.onExpandClick=n.onExpandClick.bind(f()(f()(n))),n.setPage=n.setPage.bind(f()(f()(n))),n.setPerPage=n.setPerPage.bind(f()(f()(n))),n.onItemSelect=n.onItemSelect.bind(f()(f()(n))),n}return d()(t,e),l()(t,[{key:"setPage",value:function(e){var t=this;this.setState(function(){return{page:e,currentRows:t.currentRows(e,t.state.itemsPerPage)}})}},{key:"setPerPage",value:function(e){var t=this;this.setState(function(){return{itemsPerPage:e,currentRows:t.currentRows(t.state.page,e)}})}},{key:"currentRows",value:function(e,t){return this.state.rows.slice((e-1)*t*2,e*t*2)}},{key:"onItemSelect",value:function(e,t,n){var a=this.state,r=a.rows,s=a.page,i=a.itemsPerPage;r[(1===s?0:s*i-i)+Number(t)].selected=n,this.setState({rows:r})}},{key:"rulesToRows",value:function(e){var t=[];return e.forEach(function(e){return e.rules.forEach(function(n,a){t.push({children:[2*a+1],cells:[g.a.createElement(H.b,{key:a,component:H.a.a},n.title),n.ref_id,e.profile,n.severity,n.compliant?g.a.createElement(F.a,{style:{color:"#92d400"}}):g.a.createElement(L.a,{style:{color:"#a30000"}})]}),t.push({isOpen:!1,cells:[{title:g.a.createElement(g.a.Fragment,{key:a},g.a.createElement("div",{id:"rule-description"},g.a.createElement("b",null,"Description"),g.a.createElement("br",null),g.a.createElement("p",null,n.description)),g.a.createElement("br",null),g.a.createElement("div",{id:"rule-rationale"},g.a.createElement("b",null,"Rationale"),g.a.createElement("br",null),g.a.createElement("p",null,n.rationale))),colSpan:5}]})})}),t}},{key:"onExpandClick",value:function(e,t,n){var a=this.state.rows[n],r=!a.active,s=this.state.openNodes;a.active=r,r?s=K()(s).concat(K()(t.children)):a.children.forEach(function(e){s.splice(s.indexOf(e),1)}),this.setState({openNodes:s,rows:this.state.rows})}},{key:"selectedRules",value:function(){return this.state.rows.filter(function(e){return e.selected}).map(function(e){return e.cells[1]})}},{key:"render",value:function(){var e=this;return g.a.createElement(g.a.Fragment,null,g.a.createElement(D.a,{gutter:"sm"},g.a.createElement(A.a,{span:10},g.a.createElement(w.Input,{id:"search",type:"text",style:{width:"200px"}})," ",g.a.createElement(V.a,{style:{paddingTop:"4px"}})),g.a.createElement(A.a,{span:2},g.a.createElement(U.a,{selectedRules:this.selectedRules()})),g.a.createElement(A.a,{span:12},g.a.createElement(w.Table,{variant:"large",header:["Rule","Reference ID","Policy","Severity","Passed"],hasCheckbox:!0,onItemSelect:this.onItemSelect,rows:this.state.currentRows.map(function(t,n){return t.hasOwnProperty("isOpen")?(t.isOpen=-1!==e.state.openNodes.indexOf(n),t):t}),expandable:!0,onExpandClick:this.onExpandClick,footer:g.a.createElement(w.Pagination,{numberOfItems:this.state.rows.length,onPerPageSelect:this.setPerPage,page:this.state.page,onSetPage:this.setPage,itemsPerPage:this.state.itemsPerPage})}))))}}]),t}(g.a.Component);X.propTypes={profileRules:P.a.array};var Y=Object(w.routerParams)(X),Z=n(205),ee=n(327);function te(){var e=v()(["\nquery System($systemId: String!){\n    system(id: $systemId) {\n        id\n        name\n        profiles {\n            name\n            ref_id\n            compliant(system_id: $systemId)\n            rules_failed(system_id: $systemId)\n            rules_passed(system_id: $systemId)\n            last_scanned(system_id: $systemId)\n            rules {\n                title\n                severity\n                rationale\n                ref_id\n                description\n                compliant(system_id: $systemId)\n            }\n        }\n\t}\n}\n"]);return te=function(){return e},e}var ne=n.n(ee)()(te()),ae=function(e){function t(e){var n;return s()(this,t),(n=c()(this,m()(t).call(this,e))).onNavigate=I.a.bind(f()(f()(n))),n}return d()(t,e),l()(t,[{key:"render",value:function(){var e=this,t=this.props.match.params.inventoryId;return g.a.createElement(Z.Query,{query:ne,variables:{systemId:t}},function(t){var n=t.data,a=t.error,r=t.loading,s={};return a?"Oops! Error loading System data: "+a:r?g.a.createElement(w.PageHeader,null,"Loading System details..."):(s=n.system.profiles.map(function(e){return{profile:e.name,rules:e.rules}}),g.a.createElement(g.a.Fragment,null,g.a.createElement(w.PageHeader,null,g.a.createElement(w.Breadcrumbs,{style:{padding:"0px"},items:[{title:"Systems",navigate:"/systems"}],current:n.system.name,onNavigate:e.onNavigate}),g.a.createElement($,null),g.a.createElement("br",null)),g.a.createElement(w.Main,null,g.a.createElement(W,{policies:n.system.profiles}),g.a.createElement("br",null),g.a.createElement(B.a,null,g.a.createElement(q.a,null,g.a.createElement(Y,{profileRules:s}))))))})}}]),t}(g.a.Component);ae.propTypes={match:P.a.object};t.default=Object(w.routerParams)(ae)}}]);
//# sourceMappingURL=../sourcemaps/SystemDetails.js.map