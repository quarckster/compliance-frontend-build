(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1195:function(e,t,n){"use strict";n.r(t);var a=n(512),l=n.n(a),r=n(1),i=n.n(r),o=n(517),c=n(68),s=n(524),u=n.n(s),p=n(494),m=n(509),g=n.n(m),d=n(69),h=n.n(d),f=n(70),b=n.n(f),E=n(71),P=n.n(E),v=n(72),y=n.n(v),w=n(73),O=n.n(w),C=n(0),D=n.n(C),R=n(25),T=n(191),S=n(190),j=n(765),k=n(757),M=n(684),F=n(758),N=n(767),z=n(768),H=n(755),I=n(784),L=n(783),W=n(572),A=n.n(W),V=n(742),B=n(683),J=n(686),_=n(573),q=n(76),x=n(634),U=function(e){var t=e.isModalOpen,n=e.policy,a=e.toggle,l=e.onDelete,r=Object(p.a)(_.e,{onCompleted:function(){Object(x.a)(Object(q.addNotification)({variant:"success",title:"Removed policy ".concat(n.name)})),l(),a()},onError:function(e){Object(x.a)(Object(q.addNotification)({variant:"danger",title:"Error removing policy",description:e.message})),l(),a()}}),o=A()(r,1)[0],c=n.name,s=n.id;return i.a.createElement(V.a,{isSmall:!0,title:"Delete policy",isOpen:t,isFooterLeftAligned:!0,onClose:a,actions:[i.a.createElement(B.a,{key:"destroy","aria-label":"delete",variant:"danger",onClick:function(){return o({variables:{input:{id:s}}})}},"Delete policy"),i.a.createElement(B.a,{key:"cancel",variant:"secondary",onClick:a},"Cancel")]},i.a.createElement(J.a,null,"Are you sure you want to delete ",i.a.createElement("b",null,c),"?"),i.a.createElement(J.a,null,"This cannot be undone."))};U.propTypes={policy:D.a.object,toggle:D.a.func,isModalOpen:D.a.bool,onDelete:D.a.func};var G=U,K=n(156),Q=n(734),X=n.n(Q),Y=n(57),Z=[{cells:[{title:i.a.createElement(c.EmptyTable,null,i.a.createElement(j.a,null,i.a.createElement(k.a,{variant:k.b.full},i.a.createElement(M.a,{headingLevel:"h5",size:"lg"},"No matching policies found"),i.a.createElement(F.a,null,"This filter criteria matches no policies. ",i.a.createElement("br",null)," Try changing your filter settings.")))),props:{colSpan:5}}]}],$=function(e){return e.map((function(e){return{cells:[{title:i.a.createElement(Y.Link,{to:"/policies/"+e.id},e.name),original:e.name},"RHEL ".concat(e.majorOsVersion),e.totalHostCount,e.businessObjective&&e.businessObjective.title||"--","".concat(e.complianceThreshold,"%")]}}))},ee=function(e){function t(){var e,n;h()(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=P()(this,(e=y()(t)).call.apply(e,[this].concat(l)))).columns=[{title:"Policy name"},{title:"Operating system"},{title:"Systems"},{title:"Business objective"},{title:"Compliance threshold"}],n.state={columns:n.columns,page:1,itemsPerPage:10,search:"",rows:[],currentRows:[],isDeleteModalOpen:!1,policyToDelete:{}},n.componentDidMount=function(){n.setInitialCurrentRows()},n.componentDidUpdate=function(e){n.props.policies!==e.policies&&n.setInitialCurrentRows()},n.setInitialCurrentRows=function(){var e=n.props.policies,t=n.state.itemsPerPage,a=$(e);n.setState({currentRows:a.slice(0,t),rows:a,allRows:a})},n.currentRows=function(e,t,a){var l=(a||n.state).rows;if(!l.length)return[];l.length<t&&(t=l.length);var r=(e-1)*t,i=e*t;return l.slice(r,i)},n.setPage=function(e,t){var a=n.state.itemsPerPage;n.changePage(t,a)},n.setPerPage=function(e,t){var a=n.state.page;n.changePage(a,t)},n.changePage=function(e,t){n.setState({currentRows:n.currentRows(e,t),page:e,itemsPerPage:t})},n.handleSearch=X()((function(e){var t=n.state,a=t.itemsPerPage,l=t.allRows.filter((function(t){return t.cells[0].original.match(e)}));n.setState({search:e,page:1,rows:l,currentRows:l.slice(0,a)})}),500),n.actionResolver=function(e){var t=n.props,a=t.history,l=t.policies,r=n.state,i=r.itemsPerPage,o=r.page,c=e.id+(o-1)*i;return[{title:"View latest results",onClick:function(){return a.push("".concat(K.b.compliancePolicies,"/").concat(l[c].id))}},{title:"Delete policy",onClick:function(){n.setState((function(e){return{policyToDelete:l[c],isDeleteModalOpen:!e.isDeleteModalOpen}}))}}]},n}return O()(t,e),b()(t,[{key:"render",value:function(){var e=this,t=this.props.onWizardFinish,n=this.state,a=n.rows,l=n.currentRows,r=n.columns,s=n.page,u=n.itemsPerPage,p=n.policyToDelete,m=n.isDeleteModalOpen;return 0===a.length?i.a.createElement(o.b,null):i.a.createElement(i.a.Fragment,null,i.a.createElement(G,{isModalOpen:m,policy:p,onDelete:t,toggle:function(){return e.setState((function(e){return{isDeleteModalOpen:!e.isDeleteModalOpen}}))}}),i.a.createElement(c.TableToolbar,null,i.a.createElement(N.a,{gutter:"md"},i.a.createElement(z.a,null,i.a.createElement(H.a,null,i.a.createElement(c.SimpleTableFilter,{buttonTitle:null,onFilterChange:this.handleSearch,placeholder:"Search"}))),i.a.createElement(z.a,null,a.length," results"),i.a.createElement(z.a,null,i.a.createElement(L.a,{onWizardFinish:t}))),i.a.createElement(I.a,{page:s,itemCount:a.length,dropDirection:"down",onSetPage:this.setPage,onPerPageSelect:this.setPerPage,perPage:u})),i.a.createElement(R.b,{"aria-label":"policies",className:"compliance-policies-table",cells:r,actionResolver:this.actionResolver,rows:0===l.length?Z:l},i.a.createElement(T.a,null),i.a.createElement(S.a,null)),i.a.createElement(c.TableToolbar,{isFooter:!0,className:"ins-c-inventory__table--toolbar"},i.a.createElement(I.a,{page:s,itemCount:a.length,dropDirection:"up",onSetPage:this.setPage,onPerPageSelect:this.setPerPage,perPage:u,variant:I.b.bottom})))}}]),t}(i.a.Component);ee.propTypes={policies:D.a.array.isRequired,history:D.a.object,onWizardFinish:D.a.func},ee.defaultProps={policies:[]};var te=u()(ee);function ne(){var e=l()(["\n{\n    profiles {\n        edges {\n            node {\n                id\n                name\n                refId\n                complianceThreshold\n                totalHostCount\n                majorOsVersion\n                businessObjective {\n                    id\n                    title\n                }\n            }\n        }\n    }\n}\n"]);return ne=function(){return e},e}n.d(t,"CompliancePolicies",(function(){return le}));var ae=g()(ne()),le=function(){var e=Object(p.b)(ae,{fetchPolicy:"cache-and-network"}),t=e.data,n=e.error,a=e.loading,l=e.refetch;if(n)return i.a.createElement(o.e,{error:n});var r="beta"===window.location.pathname.split("/")[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.PageHeader,{style:{paddingBottom:"22px"},className:r?"beta-page-header":"stable-page-header"},i.a.createElement(c.PageHeaderTitle,{title:"Compliance policies"}),!a&&!r&&i.a.createElement(o.d,null)),i.a.createElement(c.Main,null,a?i.a.createElement(o.g,null):i.a.createElement(te,{onWizardFinish:function(){return l()},policies:t.profiles.edges.map((function(e){return e.node}))})))};t.default=u()(le)}}]);
//# sourceMappingURL=../sourcemaps/CompliancePolicies.js.map