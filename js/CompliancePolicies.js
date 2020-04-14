(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1183:function(e,t,n){"use strict";n.r(t);var a=n(512),i=n.n(a),r=n(1),l=n.n(r),o=n(518),c=n(68),s=n(523),u=n.n(s),p=n(494),d=n(509),m=n.n(d),g=n(58),f=n.n(g),h=n(592),b=n.n(h),y=n(70),v=n.n(y),P=n(69),E=n.n(P),O=n(71),F=n.n(O),C=n(72),j=n.n(C),D=n(73),S=n.n(D),w=n(0),T=n.n(w),k=n(57),B=n(25),M=n(191),A=n(190),N=n(759),H=n(751),R=n(681),z=n(752),L=n(668),W=n(575),q=n(776),V=n(559),x=n(775),G=n(572),K=n.n(G),J=n(737),U=n(680),_=n(683),I=n(573),Q=n(76),X=n(632),Y=function(e){var t=e.isModalOpen,n=e.policy,a=e.toggle,i=e.onDelete,r=Object(p.a)(I.e,{onCompleted:function(){Object(X.a)(Object(Q.addNotification)({variant:"success",title:"Removed policy ".concat(n.name)})),i(),a()},onError:function(e){Object(X.a)(Object(Q.addNotification)({variant:"danger",title:"Error removing policy",description:e.message})),i(),a()}}),o=K()(r,1)[0],c=n.name,s=n.id;return l.a.createElement(J.a,{isSmall:!0,title:"Delete policy",isOpen:t,isFooterLeftAligned:!0,onClose:a,actions:[l.a.createElement(U.a,{key:"destroy","aria-label":"delete",variant:"danger",onClick:function(){return o({variables:{input:{id:s}}})}},"Delete policy"),l.a.createElement(U.a,{key:"cancel",variant:"secondary",onClick:a},"Cancel")]},l.a.createElement(_.a,null,"Are you sure you want to delete ",l.a.createElement("b",null,c),"?"),l.a.createElement(_.a,null,"This cannot be undone."))};Y.propTypes={policy:T.a.object,toggle:T.a.func,isModalOpen:T.a.bool,onDelete:T.a.func};var Z=Y,$=n(156);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne=[{cells:[{title:l.a.createElement(c.EmptyTable,null,l.a.createElement(N.a,null,l.a.createElement(H.a,{variant:H.b.full},l.a.createElement(R.a,{headingLevel:"h5",size:"lg"},"No matching policies found"),l.a.createElement(z.a,null,"This filter criteria matches no policies. ",l.a.createElement("br",null)," Try changing your filter settings.")))),props:{colSpan:5}}]}],ae=[{type:c.conditionalFilterType.text,label:"Name",filter:function(e,t){return e.filter((function(e){return e.name.includes(t)}))}}],ie=function(e){function t(){var e,n;v()(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=F()(this,(e=j()(t)).call.apply(e,[this].concat(i)))).filterConfigBuilder=new V.FilterConfigBuilder(ae),n.chipBuilder=n.filterConfigBuilder.getChipBuilder(),n.filterBuilder=n.filterConfigBuilder.getFilterBuilder(),n.columns=[{title:"Policy name"},{title:"Operating system"},{title:"Systems"},{title:"Business objective"},{title:"Compliance threshold"}],n.state={page:1,itemsPerPage:10,isDeleteModalOpen:!1,policyToDelete:{},activeFilters:{}},n.setPage=function(e,t){return n.changePage(t,n.state.itemsPerPage)},n.setPerPage=function(e,t){return n.changePage(1,t)},n.changePage=function(e,t){return n.setState({page:e,itemsPerPage:t})},n.paginatedPolicies=function(e){return e.slice((n.state.page-1)*n.state.itemsPerPage,n.state.page*n.state.itemsPerPage)},n.filteredPolicies=function(){return n.filterConfigBuilder.applyFilterToObjectArray(n.props.policies,n.state.activeFilters)},n.onFilterUpdate=function(e,t){n.setState({page:1,activeFilters:te({},n.state.activeFilters,b()({},e,t))})},n.deleteFilter=function(e){var t=n.filterConfigBuilder.removeFilterWithChip(e,n.state.activeFilters);n.setState({activeFilters:t})},n.clearAllFilter=function(){return n.setState({activeFilters:n.filterConfigBuilder.initialDefaultState()})},n.onFilterDelete=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a?n.clearAllFilter():n.deleteFilter(t[0])},n.actionResolver=function(e){var t=n.props,a=t.history,i=t.policies,r=n.state,l=r.itemsPerPage,o=r.page,c=e.id+(o-1)*l;return[{title:"View latest results",onClick:function(){return a.push("".concat($.b.reports,"/").concat(i[c].id))}},{title:"Delete policy",onClick:function(){n.setState((function(e){return{policyToDelete:i[c],isDeleteModalOpen:!e.isDeleteModalOpen}}))}}]},n}return S()(t,e),E()(t,[{key:"render",value:function(){var e=this,t=this.props.onWizardFinish,n=this.state,a=n.page,i=n.itemsPerPage,r=n.policyToDelete,o=n.isDeleteModalOpen,s=this.filteredPolicies(),u=this.chipBuilder.chipsFor(this.state.activeFilters),p=function(e){return e.map((function(e){return{cells:[{title:l.a.createElement(k.Link,{to:"/scappolicies/"+e.id},e.name),original:e.name},{title:l.a.createElement(L.a,{key:e.id,position:"right",content:l.a.createElement("span",null,"SCAP Security Guide (SSG): ",e.benchmark.title," - ",e.benchmark.version)},l.a.createElement("span",null,"RHEL ",e.majorOsVersion," (SSG ",e.benchmark.version,")"))},e.totalHostCount,e.businessObjective&&e.businessObjective.title||"--","".concat(e.complianceThreshold,"%")]}}))}(this.paginatedPolicies(s)),d=this.filterConfigBuilder.buildConfiguration(this.onFilterUpdate,this.state.activeFilters,{hideLabel:!0}),m={page:a,itemCount:s.length,dropDirection:"down",onSetPage:this.setPage,onPerPageSelect:this.setPerPage,perPage:i};return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.PrimaryToolbar,{filterConfig:d,activeFiltersConfig:{filters:u,onDelete:this.onFilterDelete},pagination:te({},m,{dropDirection:"down"})},l.a.createElement(W.a,null,l.a.createElement(x.a,{onWizardFinish:t})),l.a.createElement(W.a,null,s.length," results")),l.a.createElement(B.b,{"aria-label":"policies",className:"compliance-policies-table",cells:this.columns,actionResolver:p.length>0&&this.actionResolver,rows:0===p.length?ne:p},l.a.createElement(M.a,null),l.a.createElement(A.a,null)),l.a.createElement(c.TableToolbar,{isFooter:!0,className:"ins-c-inventory__table--toolbar"},l.a.createElement(q.a,f()({},m,{dropDirection:"up",variant:q.b.bottom}))),l.a.createElement(Z,{isModalOpen:o,policy:r,onDelete:t,toggle:function(){return e.setState((function(e){return{isDeleteModalOpen:!e.isDeleteModalOpen}}))}}))}}]),t}(l.a.Component);ie.propTypes={policies:T.a.array.isRequired,history:T.a.object,onWizardFinish:T.a.func},ie.defaultProps={policies:[]};var re=u()(ie);function le(){var e=i()(["\n{\n    profiles {\n        edges {\n            node {\n                id\n                name\n                refId\n                complianceThreshold\n                totalHostCount\n                majorOsVersion\n                benchmark {\n                    title\n                    version\n                }\n                businessObjective {\n                    id\n                    title\n                }\n            }\n        }\n    }\n}\n"]);return le=function(){return e},e}n.d(t,"CompliancePolicies",(function(){return ce}));var oe=m()(le()),ce=function(){var e,t=Object(p.b)(oe,{fetchPolicy:"cache-and-network"}),n=t.data,a=t.error,i=t.loading,r=t.refetch,s=insights.chrome.isBeta();return n&&(e=n.profiles.edges.map((function(e){return e.node}))),l.a.createElement(o.p,{stateValues:{error:a,data:n,loading:i}},l.a.createElement(o.q,{stateKey:"error"},l.a.createElement(o.e,{error:a})),l.a.createElement(o.q,{stateKey:"loading"},l.a.createElement(c.PageHeader,{style:{paddingBottom:"22px"},className:s?"beta-page-header":"stable-page-header"},l.a.createElement(c.PageHeaderTitle,{title:"SCAP policies"})),l.a.createElement(c.Main,null,l.a.createElement(o.g,null))),l.a.createElement(o.q,{stateKey:"data"},l.a.createElement(c.PageHeader,{style:{paddingBottom:"22px"},className:s?"beta-page-header":"stable-page-header"},l.a.createElement(c.PageHeaderTitle,{title:"SCAP policies"}),!s&&l.a.createElement(o.d,null)),l.a.createElement(c.Main,null,e&&0===e.length?l.a.createElement(o.b,null):l.a.createElement(re,{onWizardFinish:function(){return r()},policies:e}))))};t.default=u()(ce)}}]);
//# sourceMappingURL=../sourcemaps/CompliancePolicies.js.map