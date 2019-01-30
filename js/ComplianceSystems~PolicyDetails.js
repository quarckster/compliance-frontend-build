(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{691:function(e,o,r){"use strict";var s=r(200),t=r.n(s),n=r(644),l=r.n(n),u=r(223),i=r.n(u),d=r(125),a=r.n(d),c=r(126),m=r.n(c),j=r(127),_=r.n(j),f=r(128),y=r.n(f),b=r(129),p=r.n(b),v=r(315),h=r.n(v),g=r(2),x=r.n(g),w=r(130),O=r(604),k=r(698),E=r(688),S=r(663),M=r(316),P=r(0),T=r.n(P),I=r(682),R=r.n(I),C=r(741),A=r(652),F=r(655),L=function(e,o,r){return Object(C.applyReducerHash)(R()({},e.LOAD_ENTITIES_FULFILLED,function(e){e.rows=function(e,o){return e.map(function(e){var r=o.find(function(o){return void 0!==o.facts&&o.id===e.id});if(void 0!==r)return{id:e.id,account:r.account,bios_uuid:r.bios_uuid,created:r.created,display_name:r.display_name,fqdn:r.fqdn,insights_id:r.insights_id,ip_addresses:r.ip_addresses,mac_addresses:r.mac_addresses,rhel_machine_id:r.rhel_machine_id,satellite_id:r.satellite_id,subscription_manager_id:r.subscription_manager_id,tags:r.tags,updated:r.updated,facts:{inventory:{hostname:void 0!==r.facts.inventory?r.facts.inventory.hostname:r.facts.hostname,machine_id:void 0!==r.facts.inventory?r.facts.inventory.machine_id:r.facts.machine_id,release:void 0!==r.facts.inventory?r.facts.inventory.release:r.facts.release},compliance:{profiles:e.profile_names,rules_passed:e.rules_passed,rules_failed:e.rules_failed,score:(e.rules_passed/(e.rules_passed+e.rules_failed)*100).toFixed(2)+"%",last_scanned:e.last_scanned,compliant:e.compliant?x.a.createElement(A.a,{style:{color:"#92d400"}}):x.a.createElement(F.a,{style:{color:"#a30000"}})}}}}).filter(function(e){return void 0!==e})}(o,e.rows),e.count=e.rows.length,e.total=e.rows.length;var s=!0,t=!1,n=void 0;try{for(var u,i=r[Symbol.iterator]();!(s=(u=i.next()).done);s=!0){var d=u.value;-1===e.columns.map(function(e){return e.key}).indexOf(d.key)&&e.columns.push(d)}}catch(e){t=!0,n=e}finally{try{s||null==i.return||i.return()}finally{if(t)throw n}}return l()({},e)}))},N=r(292),D=r(117),U=r(654),W=r(683),q=r(692),J=r(696),V=function(e){function o(e){var r;return a()(this,o),(r=_()(this,y()(o).call(this,e))).state={isOpen:!1},r.onToggle=r.onToggle.bind(h()(h()(r))),r.onSelect=r.onSelect.bind(h()(h()(r))),r}return p()(o,e),m()(o,[{key:"onToggle",value:function(e){this.setState({isOpen:e})}},{key:"onSelect",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"downloadLink",value:function(e){var o="";return null!==this.props&&null!==this.props.selectedEntities&&(o=N.a+"/systems."+e+"?search=(id ^ ("+this.props.selectedEntities.join(",")+"))"),o}},{key:"render",value:function(){var e=this.state.isOpen,o=[x.a.createElement(W.a,{key:"csv",href:this.downloadLink("csv")},"CSV"),x.a.createElement(W.a,{target:"_blank",key:"json",href:this.downloadLink("json")},"JSON")];return x.a.createElement(x.a.Fragment,null,x.a.createElement(q.a,{onSelect:this.onSelect,toggle:x.a.createElement(J.a,{onToggle:this.onToggle},x.a.createElement(U.a,null)),isOpen:e,dropdownItems:o}))}}]),o}(x.a.Component);V.propTypes={selectedEntities:T.a.array};var z,B=Object(D.connect)(function(e){return void 0===e.entities||void 0===e.entities.entities?{selectedEntities:[]}:{selectedEntities:e.entities.entities.filter(function(e){return e.selected}).map(function(e){return e.id})}})(V),G=r(686),H=r(213),X=r(631),Y=Object(H.registry)()(z=function(e){function o(e){var r;return a()(this,o),(r=_()(this,y()(o).call(this,e))).state={InventoryCmp:function(){return x.a.createElement("div",null,"Loading...")}},r.fetchInventory=r.fetchInventory.bind(h()(h()(r))),r.fetchInventory(),r}return p()(o,e),m()(o,[{key:"fetchInventory",value:function(){var e=i()(t.a.mark(function e(){var o,r,s,n;return t.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({react:x.a,reactRouterDom:w,reactCore:O,reactIcons:M,pfReact:{PaginationRow:X.a}});case 2:o=e.sent,r=o.inventoryConnector,s=o.INVENTORY_ACTION_TYPES,n=o.mergeWithEntities,this.getRegistry().register(l()({},n(L(s,this.props.items,this.props.columns)))),this.setState({InventoryCmp:r().InventoryTable});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.InventoryCmp,o=this.props,r=o.items,s=o.disableRemediations,t=x.a.createElement(k.a,{gutter:"md"},x.a.createElement(E.a,null,x.a.createElement(B,null)),x.a.createElement(E.a,null,x.a.createElement(G.a,{disableRemediations:s})));return x.a.createElement(S.a,null,x.a.createElement(e,{items:r},t))}}]),o}(x.a.Component))||z;Y.propTypes={items:T.a.array,columns:T.a.array,disableRemediations:T.a.bool},Y.defaultProps={disableRemediations:!1};o.a=Y},741:function(e,o,r){!function(o,s){e.exports=s(r(201))}(window,function(e){return function(e){var o={};function r(s){if(o[s])return o[s].exports;var t=o[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,r),t.l=!0,t.exports}return r.m=e,r.c=o,r.d=function(e,o,s){r.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,o){if(1&o&&(e=r(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)r.d(s,t,function(o){return e[o]}.bind(null,t));return s},r.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.p="",r(r.s="./src/Utilities/ReducerRegistry.js")}({"./node_modules/babel-runtime/core-js/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,r){e.exports={default:r(/*! core-js/library/fn/array/from */"./node_modules/core-js/library/fn/array/from.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,r){e.exports={default:r(/*! core-js/library/fn/object/assign */"./node_modules/core-js/library/fn/object/assign.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */function(e,o,r){e.exports={default:r(/*! core-js/library/fn/object/define-property */"./node_modules/core-js/library/fn/object/define-property.js"),__esModule:!0}},"./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,r){"use strict";o.__esModule=!0,o.default=function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}},"./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,r){"use strict";o.__esModule=!0;var s=function(e){return e&&e.__esModule?e:{default:e}}(r(/*! ../core-js/object/define-property */"./node_modules/babel-runtime/core-js/object/define-property.js"));o.default=function(){function e(e,o){for(var r=0;r<o.length;r++){var t=o[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),(0,s.default)(e,t.key,t)}}return function(o,r,s){return r&&e(o.prototype,r),s&&e(o,s),o}}()},"./node_modules/babel-runtime/helpers/defineProperty.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/defineProperty.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,r){"use strict";o.__esModule=!0;var s=function(e){return e&&e.__esModule?e:{default:e}}(r(/*! ../core-js/object/define-property */"./node_modules/babel-runtime/core-js/object/define-property.js"));o.default=function(e,o,r){return o in e?(0,s.default)(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}},"./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,r){"use strict";o.__esModule=!0;var s=function(e){return e&&e.__esModule?e:{default:e}}(r(/*! ../core-js/object/assign */"./node_modules/babel-runtime/core-js/object/assign.js"));o.default=s.default||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}},"./node_modules/babel-runtime/helpers/toConsumableArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,o,r){"use strict";o.__esModule=!0;var s=function(e){return e&&e.__esModule?e:{default:e}}(r(/*! ../core-js/array/from */"./node_modules/babel-runtime/core-js/array/from.js"));o.default=function(e){if(Array.isArray(e)){for(var o=0,r=Array(e.length);o<e.length;o++)r[o]=e[o];return r}return(0,s.default)(e)}},"./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,r){r(/*! ../../modules/es6.string.iterator */"./node_modules/core-js/library/modules/es6.string.iterator.js"),r(/*! ../../modules/es6.array.from */"./node_modules/core-js/library/modules/es6.array.from.js"),e.exports=r(/*! ../../modules/_core */"./node_modules/core-js/library/modules/_core.js").Array.from},"./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,r){r(/*! ../../modules/es6.object.assign */"./node_modules/core-js/library/modules/es6.object.assign.js"),e.exports=r(/*! ../../modules/_core */"./node_modules/core-js/library/modules/_core.js").Object.assign},"./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */function(e,o,r){r(/*! ../../modules/es6.object.define-property */"./node_modules/core-js/library/modules/es6.object.define-property.js");var s=r(/*! ../../modules/_core */"./node_modules/core-js/library/modules/_core.js").Object;e.exports=function(e,o,r){return s.defineProperty(e,o,r)}},"./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js");e.exports=function(e){if(!s(e))throw TypeError(e+" is not an object!");return e}},"./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_to-iobject */"./node_modules/core-js/library/modules/_to-iobject.js"),t=r(/*! ./_to-length */"./node_modules/core-js/library/modules/_to-length.js"),n=r(/*! ./_to-absolute-index */"./node_modules/core-js/library/modules/_to-absolute-index.js");e.exports=function(e){return function(o,r,l){var u,i=s(o),d=t(i.length),a=n(l,d);if(e&&r!=r){for(;d>a;)if((u=i[a++])!=u)return!0}else for(;d>a;a++)if((e||a in i)&&i[a]===r)return e||a||0;return!e&&-1}}},"./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_cof */"./node_modules/core-js/library/modules/_cof.js"),t=r(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("toStringTag"),n="Arguments"==s(function(){return arguments}());e.exports=function(e){var o,r,l;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,o){try{return e[o]}catch(e){}}(o=Object(e),t))?r:n?s(o):"Object"==(l=s(o))&&"function"==typeof o.callee?"Arguments":l}},"./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */function(e,o){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},"./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o){var r=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},"./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */function(e,o,r){"use strict";var s=r(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js"),t=r(/*! ./_property-desc */"./node_modules/core-js/library/modules/_property-desc.js");e.exports=function(e,o,r){o in e?s.f(e,o,t(0,r)):e[o]=r}},"./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_a-function */"./node_modules/core-js/library/modules/_a-function.js");e.exports=function(e,o,r){if(s(e),void 0===o)return e;switch(r){case 1:return function(r){return e.call(o,r)};case 2:return function(r,s){return e.call(o,r,s)};case 3:return function(r,s,t){return e.call(o,r,s,t)}}return function(){return e.apply(o,arguments)}}},"./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},"./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,r){e.exports=!r(/*! ./_fails */"./node_modules/core-js/library/modules/_fails.js")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js"),t=r(/*! ./_global */"./node_modules/core-js/library/modules/_global.js").document,n=s(t)&&s(t.createElement);e.exports=function(e){return n?t.createElement(e):{}}},"./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),t=r(/*! ./_core */"./node_modules/core-js/library/modules/_core.js"),n=r(/*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js"),l=r(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js"),u=r(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),i=function(e,o,r){var d,a,c,m=e&i.F,j=e&i.G,_=e&i.S,f=e&i.P,y=e&i.B,b=e&i.W,p=j?t:t[o]||(t[o]={}),v=p.prototype,h=j?s:_?s[o]:(s[o]||{}).prototype;for(d in j&&(r=o),r)(a=!m&&h&&void 0!==h[d])&&u(p,d)||(c=a?h[d]:r[d],p[d]=j&&"function"!=typeof h[d]?r[d]:y&&a?n(c,s):b&&h[d]==c?function(e){var o=function(o,r,s){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(o);case 2:return new e(o,r)}return new e(o,r,s)}return e.apply(this,arguments)};return o.prototype=e.prototype,o}(c):f&&"function"==typeof c?n(Function.call,c):c,f&&((p.virtual||(p.virtual={}))[d]=c,e&i.R&&v&&!v[d]&&l(v,d,c)))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,i.U=64,i.R=128,e.exports=i},"./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){try{return!!e()}catch(e){return!0}}},"./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},"./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */function(e,o){var r={}.hasOwnProperty;e.exports=function(e,o){return r.call(e,o)}},"./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js"),t=r(/*! ./_property-desc */"./node_modules/core-js/library/modules/_property-desc.js");e.exports=r(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js")?function(e,o,r){return s.f(e,o,t(1,r))}:function(e,o,r){return e[o]=r,e}},"./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_global */"./node_modules/core-js/library/modules/_global.js").document;e.exports=s&&s.documentElement},"./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,o,r){e.exports=!r(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js")&&!r(/*! ./_fails */"./node_modules/core-js/library/modules/_fails.js")(function(){return 7!=Object.defineProperty(r(/*! ./_dom-create */"./node_modules/core-js/library/modules/_dom-create.js")("div"),"a",{get:function(){return 7}}).a})},"./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_cof */"./node_modules/core-js/library/modules/_cof.js");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==s(e)?e.split(""):Object(e)}},"./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js"),t=r(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),n=Array.prototype;e.exports=function(e){return void 0!==e&&(s.Array===e||n[t]===e)}},"./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},"./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js");e.exports=function(e,o,r,t){try{return t?o(s(r)[0],r[1]):o(r)}catch(o){var n=e.return;throw void 0!==n&&s(n.call(e)),o}}},"./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,r){"use strict";var s=r(/*! ./_object-create */"./node_modules/core-js/library/modules/_object-create.js"),t=r(/*! ./_property-desc */"./node_modules/core-js/library/modules/_property-desc.js"),n=r(/*! ./_set-to-string-tag */"./node_modules/core-js/library/modules/_set-to-string-tag.js"),l={};r(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js")(l,r(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),function(){return this}),e.exports=function(e,o,r){e.prototype=s(l,{next:t(1,r)}),n(e,o+" Iterator")}},"./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,r){"use strict";var s=r(/*! ./_library */"./node_modules/core-js/library/modules/_library.js"),t=r(/*! ./_export */"./node_modules/core-js/library/modules/_export.js"),n=r(/*! ./_redefine */"./node_modules/core-js/library/modules/_redefine.js"),l=r(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js"),u=r(/*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js"),i=r(/*! ./_iter-create */"./node_modules/core-js/library/modules/_iter-create.js"),d=r(/*! ./_set-to-string-tag */"./node_modules/core-js/library/modules/_set-to-string-tag.js"),a=r(/*! ./_object-gpo */"./node_modules/core-js/library/modules/_object-gpo.js"),c=r(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),m=!([].keys&&"next"in[].keys()),j=function(){return this};e.exports=function(e,o,r,_,f,y,b){i(r,o,_);var p,v,h,g=function(e){if(!m&&e in k)return k[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},x=o+" Iterator",w="values"==f,O=!1,k=e.prototype,E=k[c]||k["@@iterator"]||f&&k[f],S=E||g(f),M=f?w?g("entries"):S:void 0,P="Array"==o&&k.entries||E;if(P&&(h=a(P.call(new e)))!==Object.prototype&&h.next&&(d(h,x,!0),s||"function"==typeof h[c]||l(h,c,j)),w&&E&&"values"!==E.name&&(O=!0,S=function(){return E.call(this)}),s&&!b||!m&&!O&&k[c]||l(k,c,S),u[o]=S,u[x]=j,f)if(p={values:w?S:g("values"),keys:y?S:g("keys"),entries:M},b)for(v in p)v in k||n(k,v,p[v]);else t(t.P+t.F*(m||O),o,p);return p}},"./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),t=!1;try{var n=[7][s]();n.return=function(){t=!0},Array.from(n,function(){throw 2})}catch(e){}e.exports=function(e,o){if(!o&&!t)return!1;var r=!1;try{var n=[7],l=n[s]();l.next=function(){return{done:r=!0}},n[s]=function(){return l},e(n)}catch(e){}return r}},"./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */function(e,o){e.exports={}},"./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o){e.exports=!0},"./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,r){"use strict";var s=r(/*! ./_object-keys */"./node_modules/core-js/library/modules/_object-keys.js"),t=r(/*! ./_object-gops */"./node_modules/core-js/library/modules/_object-gops.js"),n=r(/*! ./_object-pie */"./node_modules/core-js/library/modules/_object-pie.js"),l=r(/*! ./_to-object */"./node_modules/core-js/library/modules/_to-object.js"),u=r(/*! ./_iobject */"./node_modules/core-js/library/modules/_iobject.js"),i=Object.assign;e.exports=!i||r(/*! ./_fails */"./node_modules/core-js/library/modules/_fails.js")(function(){var e={},o={},r=Symbol(),s="abcdefghijklmnopqrst";return e[r]=7,s.split("").forEach(function(e){o[e]=e}),7!=i({},e)[r]||Object.keys(i({},o)).join("")!=s})?function(e,o){for(var r=l(e),i=arguments.length,d=1,a=t.f,c=n.f;i>d;)for(var m,j=u(arguments[d++]),_=a?s(j).concat(a(j)):s(j),f=_.length,y=0;f>y;)c.call(j,m=_[y++])&&(r[m]=j[m]);return r}:i},"./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),t=r(/*! ./_object-dps */"./node_modules/core-js/library/modules/_object-dps.js"),n=r(/*! ./_enum-bug-keys */"./node_modules/core-js/library/modules/_enum-bug-keys.js"),l=r(/*! ./_shared-key */"./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO"),u=function(){},i=function(){var e,o=r(/*! ./_dom-create */"./node_modules/core-js/library/modules/_dom-create.js")("iframe"),s=n.length;for(o.style.display="none",r(/*! ./_html */"./node_modules/core-js/library/modules/_html.js").appendChild(o),o.src="javascript:",(e=o.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),i=e.F;s--;)delete i.prototype[n[s]];return i()};e.exports=Object.create||function(e,o){var r;return null!==e?(u.prototype=s(e),r=new u,u.prototype=null,r[l]=e):r=i(),void 0===o?r:t(r,o)}},"./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),t=r(/*! ./_ie8-dom-define */"./node_modules/core-js/library/modules/_ie8-dom-define.js"),n=r(/*! ./_to-primitive */"./node_modules/core-js/library/modules/_to-primitive.js"),l=Object.defineProperty;o.f=r(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js")?Object.defineProperty:function(e,o,r){if(s(e),o=n(o,!0),s(r),t)try{return l(e,o,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[o]=r.value),e}},"./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js"),t=r(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),n=r(/*! ./_object-keys */"./node_modules/core-js/library/modules/_object-keys.js");e.exports=r(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js")?Object.defineProperties:function(e,o){t(e);for(var r,l=n(o),u=l.length,i=0;u>i;)s.f(e,r=l[i++],o[r]);return e}},"./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o){o.f=Object.getOwnPropertySymbols},"./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),t=r(/*! ./_to-object */"./node_modules/core-js/library/modules/_to-object.js"),n=r(/*! ./_shared-key */"./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO"),l=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=t(e),s(e,n)?e[n]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?l:null}},"./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),t=r(/*! ./_to-iobject */"./node_modules/core-js/library/modules/_to-iobject.js"),n=r(/*! ./_array-includes */"./node_modules/core-js/library/modules/_array-includes.js")(!1),l=r(/*! ./_shared-key */"./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO");e.exports=function(e,o){var r,u=t(e),i=0,d=[];for(r in u)r!=l&&s(u,r)&&d.push(r);for(;o.length>i;)s(u,r=o[i++])&&(~n(d,r)||d.push(r));return d}},"./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_object-keys-internal */"./node_modules/core-js/library/modules/_object-keys-internal.js"),t=r(/*! ./_enum-bug-keys */"./node_modules/core-js/library/modules/_enum-bug-keys.js");e.exports=Object.keys||function(e){return s(e,t)}},"./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o){o.f={}.propertyIsEnumerable},"./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o){e.exports=function(e,o){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:o}}},"./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */function(e,o,r){e.exports=r(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js")},"./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js").f,t=r(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),n=r(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("toStringTag");e.exports=function(e,o,r){e&&!t(e=r?e:e.prototype,n)&&s(e,n,{configurable:!0,value:o})}},"./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_shared */"./node_modules/core-js/library/modules/_shared.js")("keys"),t=r(/*! ./_uid */"./node_modules/core-js/library/modules/_uid.js");e.exports=function(e){return s[e]||(s[e]=t(e))}},"./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_core */"./node_modules/core-js/library/modules/_core.js"),t=r(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),n=t["__core-js_shared__"]||(t["__core-js_shared__"]={});(e.exports=function(e,o){return n[e]||(n[e]=void 0!==o?o:{})})("versions",[]).push({version:s.version,mode:r(/*! ./_library */"./node_modules/core-js/library/modules/_library.js")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_to-integer */"./node_modules/core-js/library/modules/_to-integer.js"),t=r(/*! ./_defined */"./node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return function(o,r){var n,l,u=String(t(o)),i=s(r),d=u.length;return i<0||i>=d?e?"":void 0:(n=u.charCodeAt(i))<55296||n>56319||i+1===d||(l=u.charCodeAt(i+1))<56320||l>57343?e?u.charAt(i):n:e?u.slice(i,i+2):l-56320+(n-55296<<10)+65536}}},"./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_to-integer */"./node_modules/core-js/library/modules/_to-integer.js"),t=Math.max,n=Math.min;e.exports=function(e,o){return(e=s(e))<0?t(e+o,0):n(e,o)}},"./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o){var r=Math.ceil,s=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?s:r)(e)}},"./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_iobject */"./node_modules/core-js/library/modules/_iobject.js"),t=r(/*! ./_defined */"./node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return s(t(e))}},"./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_to-integer */"./node_modules/core-js/library/modules/_to-integer.js"),t=Math.min;e.exports=function(e){return e>0?t(s(e),9007199254740991):0}},"./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_defined */"./node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return Object(s(e))}},"./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js");e.exports=function(e,o){if(!s(e))return e;var r,t;if(o&&"function"==typeof(r=e.toString)&&!s(t=r.call(e)))return t;if("function"==typeof(r=e.valueOf)&&!s(t=r.call(e)))return t;if(!o&&"function"==typeof(r=e.toString)&&!s(t=r.call(e)))return t;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */function(e,o){var r=0,s=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+s).toString(36))}},"./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_shared */"./node_modules/core-js/library/modules/_shared.js")("wks"),t=r(/*! ./_uid */"./node_modules/core-js/library/modules/_uid.js"),n=r(/*! ./_global */"./node_modules/core-js/library/modules/_global.js").Symbol,l="function"==typeof n;(e.exports=function(e){return s[e]||(s[e]=l&&n[e]||(l?n:t)("Symbol."+e))}).store=s},"./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_classof */"./node_modules/core-js/library/modules/_classof.js"),t=r(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),n=r(/*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js");e.exports=r(/*! ./_core */"./node_modules/core-js/library/modules/_core.js").getIteratorMethod=function(e){if(void 0!=e)return e[t]||e["@@iterator"]||n[s(e)]}},"./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */function(e,o,r){"use strict";var s=r(/*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js"),t=r(/*! ./_export */"./node_modules/core-js/library/modules/_export.js"),n=r(/*! ./_to-object */"./node_modules/core-js/library/modules/_to-object.js"),l=r(/*! ./_iter-call */"./node_modules/core-js/library/modules/_iter-call.js"),u=r(/*! ./_is-array-iter */"./node_modules/core-js/library/modules/_is-array-iter.js"),i=r(/*! ./_to-length */"./node_modules/core-js/library/modules/_to-length.js"),d=r(/*! ./_create-property */"./node_modules/core-js/library/modules/_create-property.js"),a=r(/*! ./core.get-iterator-method */"./node_modules/core-js/library/modules/core.get-iterator-method.js");t(t.S+t.F*!r(/*! ./_iter-detect */"./node_modules/core-js/library/modules/_iter-detect.js")(function(e){Array.from(e)}),"Array",{from:function(e){var o,r,t,c,m=n(e),j="function"==typeof this?this:Array,_=arguments.length,f=_>1?arguments[1]:void 0,y=void 0!==f,b=0,p=a(m);if(y&&(f=s(f,_>2?arguments[2]:void 0,2)),void 0==p||j==Array&&u(p))for(r=new j(o=i(m.length));o>b;b++)d(r,b,y?f(m[b],b):m[b]);else for(c=p.call(m),r=new j;!(t=c.next()).done;b++)d(r,b,y?l(c,f,[t.value,b],!0):t.value);return r.length=b,r}})},"./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_export */"./node_modules/core-js/library/modules/_export.js");s(s.S+s.F,"Object",{assign:r(/*! ./_object-assign */"./node_modules/core-js/library/modules/_object-assign.js")})},"./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */function(e,o,r){var s=r(/*! ./_export */"./node_modules/core-js/library/modules/_export.js");s(s.S+s.F*!r(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js"),"Object",{defineProperty:r(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js").f})},"./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */function(e,o,r){"use strict";var s=r(/*! ./_string-at */"./node_modules/core-js/library/modules/_string-at.js")(!0);r(/*! ./_iter-define */"./node_modules/core-js/library/modules/_iter-define.js")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,o=this._t,r=this._i;return r>=o.length?{value:void 0,done:!0}:(e=s(o,r),this._i+=e.length,{value:e,done:!1})})},"./src/Utilities/ReducerRegistry.js":
/*!******************************************!*\
  !*** ./src/Utilities/ReducerRegistry.js ***!
  \******************************************/
/*! no static exports found */function(e,o,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.reduxRegistry=void 0;var s=d(r(/*! babel-runtime/helpers/toConsumableArray */"./node_modules/babel-runtime/helpers/toConsumableArray.js")),t=d(r(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),n=d(r(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),l=d(r(/*! babel-runtime/helpers/defineProperty */"./node_modules/babel-runtime/helpers/defineProperty.js")),u=d(r(/*! babel-runtime/helpers/extends */"./node_modules/babel-runtime/helpers/extends.js"));o.applyReducerHash=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,s=arguments[1];return Object.prototype.hasOwnProperty.call(e,s.type)?e[s.type](r,s):r}},o.dispatchActionsToStore=function(e,o){return Object.keys(e).reduce(function(r,s){return(0,u.default)({},r,(0,l.default)({},s,function(){return o&&o.dispatch(e[s].apply(e,arguments))}))},{})};var i=r(/*! redux */"redux");function d(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.compose;(0,t.default)(this,e);var l=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||n;this.store=(0,i.createStore)(function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:o},o,l(i.applyMiddleware.apply(void 0,(0,s.default)(r)))),this.reducers={}}return(0,n.default)(e,[{key:"on",value:function(e,o){this.listenerMiddleware.addNew({on:e,callback:o})}},{key:"getListenerMiddleware",value:function(){return this.listenerMiddleware}},{key:"getStore",value:function(){return this.store}},{key:"register",value:function(e){this.reducers=(0,u.default)({},this.reducers,e),this.store.replaceReducer((0,i.combineReducers)((0,u.default)({},this.reducers)))}}]),e}();o.reduxRegistry=new a;o.default=a},redux:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"redux","commonjs2":"redux","amd":"redux","root":"Redux"} ***!
  \**************************************************************************************/
/*! no static exports found */function(o,r){o.exports=e}})})}}]);
//# sourceMappingURL=../sourcemaps/ComplianceSystems~PolicyDetails.js.map