(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1223:function(e,t,n){"use strict";n.r(t);var i=n(520),a=n.n(i),r=n(1),l=n.n(r),o=n(527),c=n(68),s=n(536),u=n.n(s),p=n(500),d=n(515),f=n.n(d),m=n(58),g=n.n(m),h=n(579),b=n.n(h),y=n(70),v=n.n(y),P=n(69),E=n.n(P),O=n(71),F=n.n(O),C=n(72),D=n.n(C),j=n(73),S=n.n(j),w=n(0),T=n.n(w),k=n(59),B=n(25),A=n(192),M=n(191),N=n(772),H=n(763),R=n(687),z=n(764),L=n(674),W=n(582),G=n(789),I=n(565),K=n(788),V=n(566),x=n.n(V),J=n(749),U=n(686),_=n(689),q=n(580),Q=n(76),X=n(639),Y=function(e){var t=e.isModalOpen,n=e.policy,i=e.toggle,a=e.onDelete,r=Object(p.a)(q.e,{onCompleted:function(){Object(X.a)(Object(Q.addNotification)({variant:"success",title:"Removed policy ".concat(n.name)})),a(),i()},onError:function(e){Object(X.a)(Object(Q.addNotification)({variant:"danger",title:"Error removing policy",description:e.message})),a(),i()}}),o=x()(r,1)[0],c=n.name,s=n.id;return l.a.createElement(J.a,{isSmall:!0,title:"Delete policy",isOpen:t,isFooterLeftAligned:!0,onClose:i,actions:[l.a.createElement(U.a,{key:"destroy","aria-label":"delete",variant:"danger",onClick:function(){return o({variables:{input:{id:s}}})}},"Delete policy"),l.a.createElement(U.a,{key:"cancel",variant:"secondary",onClick:i},"Cancel")]},l.a.createElement(_.a,null,"Are you sure you want to delete ",l.a.createElement("b",null,c),"? This cannot be undone."))};Y.propTypes={policy:T.a.object,toggle:T.a.func,isModalOpen:T.a.bool,onDelete:T.a.func};var Z=Y;function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te=[{cells:[{title:l.a.createElement(c.EmptyTable,null,l.a.createElement(N.a,null,l.a.createElement(H.a,{variant:H.b.full},l.a.createElement(R.a,{headingLevel:"h5",size:"lg"},"No matching policies found"),l.a.createElement(z.a,null,"This filter criteria matches no policies. ",l.a.createElement("br",null)," Try changing your filter settings.")))),props:{colSpan:5}}]}],ne=[{type:c.conditionalFilterType.text,label:"Name",filter:function(e,t){return e.filter((function(e){return e.name.includes(t)}))}}],ie=function(e){function t(){var e,n;v()(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=F()(this,(e=D()(t)).call.apply(e,[this].concat(a)))).filterConfigBuilder=new I.FilterConfigBuilder(ne),n.chipBuilder=n.filterConfigBuilder.getChipBuilder(),n.filterBuilder=n.filterConfigBuilder.getFilterBuilder(),n.columns=[{title:"Policy name"},{title:"Operating system"},{title:"Systems"},{title:"Business objective"},{title:"Compliance threshold"}],n.state={page:1,itemsPerPage:10,isDeleteModalOpen:!1,policyToDelete:{},activeFilters:{}},n.setPage=function(e,t){return n.changePage(t,n.state.itemsPerPage)},n.setPerPage=function(e,t){return n.changePage(1,t)},n.changePage=function(e,t){return n.setState({page:e,itemsPerPage:t})},n.paginatedPolicies=function(e){return e.slice((n.state.page-1)*n.state.itemsPerPage,n.state.page*n.state.itemsPerPage)},n.filteredPolicies=function(){return n.filterConfigBuilder.applyFilterToObjectArray(n.props.policies,n.state.activeFilters)},n.onFilterUpdate=function(e,t){n.setState({page:1,activeFilters:ee({},n.state.activeFilters,b()({},e,t))})},n.deleteFilter=function(e){var t=n.filterConfigBuilder.removeFilterWithChip(e,n.state.activeFilters);n.setState({activeFilters:t})},n.clearAllFilter=function(){return n.setState({activeFilters:n.filterConfigBuilder.initialDefaultState()})},n.onFilterDelete=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return i?n.clearAllFilter():n.deleteFilter(t[0])},n.setAndDeletePolicy=function(e){return n.setState((function(t){return{policyToDelete:n.props.policies.find((function(t){return t.id===e})),isDeleteModalOpen:!t.isDeleteModalOpen}}))},n.actionResolver=function(){return[{title:"Delete policy",onClick:function(e,t,i){var a=i.policyId;return n.setAndDeletePolicy(a)}}]},n}return S()(t,e),E()(t,[{key:"render",value:function(){var e=this,t=this.props.onWizardFinish,n=this.state,i=n.page,a=n.itemsPerPage,r=n.policyToDelete,o=n.isDeleteModalOpen,s=this.filteredPolicies(),u=this.chipBuilder.chipsFor(this.state.activeFilters),p=function(e){return e.map((function(e){return{policyId:e.id,cells:[{title:l.a.createElement(k.Link,{to:"/scappolicies/"+e.id},e.name),original:e.name},{title:l.a.createElement(L.a,{key:e.id,position:"right",content:l.a.createElement("span",null,"SCAP Security Guide (SSG): ",e.benchmark.title," - ",e.benchmark.version)},l.a.createElement("span",null,"RHEL ",e.majorOsVersion," (SSG ",e.benchmark.version,")"))},e.totalHostCount,e.businessObjective&&e.businessObjective.title||"--","".concat(e.complianceThreshold,"%")]}}))}(this.paginatedPolicies(s)),d=this.filterConfigBuilder.buildConfiguration(this.onFilterUpdate,this.state.activeFilters,{hideLabel:!0}),f={page:i,itemCount:s.length,dropDirection:"down",onSetPage:this.setPage,onPerPageSelect:this.setPerPage,perPage:a};return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.PrimaryToolbar,{filterConfig:d,activeFiltersConfig:{filters:u,onDelete:this.onFilterDelete},pagination:ee({},f,{dropDirection:"down"})},l.a.createElement(W.a,null,l.a.createElement(K.a,{onWizardFinish:t})),l.a.createElement(W.a,null,s.length," results")),l.a.createElement(B.b,{"aria-label":"policies",className:"compliance-policies-table",cells:this.columns,actionResolver:p.length>0&&this.actionResolver,rows:0===p.length?te:p},l.a.createElement(A.a,null),l.a.createElement(M.a,null)),l.a.createElement(c.TableToolbar,{isFooter:!0,className:"ins-c-inventory__table--toolbar"},l.a.createElement(G.a,g()({},f,{dropDirection:"up",variant:G.b.bottom}))),l.a.createElement(Z,{isModalOpen:o,policy:r,onDelete:t,toggle:function(){return e.setState((function(e){return{isDeleteModalOpen:!e.isDeleteModalOpen}}))}}))}}]),t}(l.a.Component);ie.propTypes={policies:T.a.array.isRequired,history:T.a.object,onWizardFinish:T.a.func},ie.defaultProps={policies:[]};var ae=u()(ie);function re(){var e=a()(['\n{\n    profiles(search: "external = false") {\n        edges {\n            node {\n                id\n                name\n                refId\n                complianceThreshold\n                totalHostCount\n                majorOsVersion\n                benchmark {\n                    id\n                    title\n                    version\n                }\n                businessObjective {\n                    id\n                    title\n                }\n            }\n        }\n    }\n}\n']);return re=function(){return e},e}n.d(t,"CompliancePolicies",(function(){return oe}));var le=f()(re()),oe=function(){var e,t=Object(p.b)(le,{fetchPolicy:"cache-and-network"}),n=t.data,i=t.error,a=t.loading,r=t.refetch;return n&&(e=n.profiles.edges.map((function(e){return e.node}))),l.a.createElement(o.o,{stateValues:{error:i,data:n,loading:a}},l.a.createElement(o.p,{stateKey:"error"},l.a.createElement(o.d,{error:i})),l.a.createElement(o.p,{stateKey:"loading"},l.a.createElement(c.PageHeader,{className:"page-header"},l.a.createElement(c.PageHeaderTitle,{title:"SCAP policies"})),l.a.createElement(c.Main,null,l.a.createElement(o.f,null))),l.a.createElement(o.p,{stateKey:"data"},l.a.createElement(c.PageHeader,{className:"page-header"},l.a.createElement(c.PageHeaderTitle,{title:"SCAP policies"})),l.a.createElement(c.Main,null,e&&0===e.length?l.a.createElement(o.b,null):l.a.createElement(ae,{onWizardFinish:function(){return r()},policies:e}))))};t.default=u()(oe)}}]);
//# sourceMappingURL=../sourcemaps/CompliancePolicies.js.map