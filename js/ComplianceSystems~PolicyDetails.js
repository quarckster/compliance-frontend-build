(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{691:function(e,r,o){"use strict";var s=o(200),t=o.n(s),n=o(644),l=o.n(n),u=o(223),i=o.n(u),d=o(125),a=o.n(d),c=o(126),m=o.n(c),j=o(127),_=o.n(j),f=o(128),y=o.n(f),b=o(129),p=o.n(b),v=o(315),h=o.n(v),g=o(2),x=o.n(g),w=o(130),O=o(604),k=o(698),E=o(688),S=o(663),M=o(316),P=o(0),T=o.n(P),I=o(682),C=o.n(I),A=o(741),R=o(652),F=o(655),L=function(e,r,o){return Object(A.applyReducerHash)(C()({},e.LOAD_ENTITIES_FULFILLED,function(e){e.rows=function(e,r){return e.map(function(e){var o=r.find(function(r){return void 0!==r.facts&&r.id===e.id});if(void 0!==o)return{id:e.id,account:o.account,bios_uuid:o.bios_uuid,created:o.created,display_name:o.display_name,fqdn:o.fqdn,insights_id:o.insights_id,ip_addresses:o.ip_addresses,mac_addresses:o.mac_addresses,rhel_machine_id:o.rhel_machine_id,satellite_id:o.satellite_id,subscription_manager_id:o.subscription_manager_id,tags:o.tags,updated:o.updated,facts:{inventory:{hostname:void 0!==o.facts.inventory?o.facts.inventory.hostname:o.facts.hostname,machine_id:void 0!==o.facts.inventory?o.facts.inventory.machine_id:o.facts.machine_id,release:void 0!==o.facts.inventory?o.facts.inventory.release:o.facts.release},compliance:{profiles:e.profile_names,rules_passed:e.rules_passed,rules_failed:e.rules_failed,score:(e.rules_passed/(e.rules_passed+e.rules_failed)*100).toFixed(2)+"%",last_scanned:e.last_scanned,compliant:e.compliant?x.a.createElement(R.a,{style:{color:"#92d400"}}):x.a.createElement(F.a,{style:{color:"#a30000"}})}}}}).filter(function(e){return void 0!==e})}(r,e.rows),e.count=e.rows.length,e.total=e.rows.length;var s=!0,t=!1,n=void 0;try{for(var u,i=o[Symbol.iterator]();!(s=(u=i.next()).done);s=!0){var d=u.value;-1===e.columns.map(function(e){return e.key}).indexOf(d.key)&&e.columns.push(d)}}catch(e){t=!0,n=e}finally{try{s||null==i.return||i.return()}finally{if(t)throw n}}return l()({},e)}))},N=o(292),D=o(117),U=o(654),W=o(683),q=o(692),J=o(696),V=function(e){function r(e){var o;return a()(this,r),(o=_()(this,y()(r).call(this,e))).state={isOpen:!1},o.onToggle=o.onToggle.bind(h()(h()(o))),o.onSelect=o.onSelect.bind(h()(h()(o))),o}return p()(r,e),m()(r,[{key:"onToggle",value:function(e){this.setState({isOpen:e})}},{key:"onSelect",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"downloadLink",value:function(e){var r="";return null!==this.props&&null!==this.props.selectedEntities&&(r=N.a+"/systems."+e+"?search=(id ^ ("+this.props.selectedEntities.join(",")+"))"),r}},{key:"render",value:function(){var e=this.state.isOpen,r=[x.a.createElement(W.a,{key:"csv",href:this.downloadLink("csv")},"CSV"),x.a.createElement(W.a,{target:"_blank",key:"json",href:this.downloadLink("json")},"JSON")];return x.a.createElement(x.a.Fragment,null,x.a.createElement(q.a,{onSelect:this.onSelect,toggle:x.a.createElement(J.a,{onToggle:this.onToggle},x.a.createElement(U.a,null)),isOpen:e,dropdownItems:r}))}}]),r}(x.a.Component);V.propTypes={selectedEntities:T.a.array};var z,B=Object(D.connect)(function(e){return void 0===e.entities||void 0===e.entities.entities?{selectedEntities:[]}:{selectedEntities:e.entities.entities.filter(function(e){return e.selected}).map(function(e){return e.id})}})(V),G=o(686),H=o(213),X=o(631),Y=Object(H.registry)()(z=function(e){function r(e){var o;return a()(this,r),(o=_()(this,y()(r).call(this,e))).state={InventoryCmp:function(){return x.a.createElement("div",null,"Loading...")}},o.fetchInventory=o.fetchInventory.bind(h()(h()(o))),o.fetchInventory(),o}return p()(r,e),m()(r,[{key:"fetchInventory",value:function(){var e=i()(t.a.mark(function e(){var r,o,s,n;return t.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({react:x.a,reactRouterDom:w,reactCore:O,reactIcons:M,pfReact:{PaginationRow:X.a}});case 2:r=e.sent,o=r.inventoryConnector,s=r.INVENTORY_ACTION_TYPES,n=r.mergeWithEntities,this.getRegistry().register(l()({},n(L(s,this.props.items,this.props.columns)))),this.setState({InventoryCmp:o().InventoryTable});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.InventoryCmp,r=this.props.items,o=x.a.createElement(k.a,{gutter:"md"},x.a.createElement(E.a,null,x.a.createElement(B,null)),x.a.createElement(E.a,null,x.a.createElement(G.a,null)));return x.a.createElement(S.a,null,x.a.createElement(e,{items:r},o))}}]),r}(x.a.Component))||z;Y.propTypes={items:T.a.array,columns:T.a.array};r.a=Y},741:function(e,r,o){!function(r,s){e.exports=s(o(201))}(window,function(e){return function(e){var r={};function o(s){if(r[s])return r[s].exports;var t=r[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=e,o.c=r,o.d=function(e,r,s){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)o.d(s,t,function(r){return e[r]}.bind(null,t));return s},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="",o(o.s="./src/Utilities/ReducerRegistry.js")}({"./node_modules/babel-runtime/core-js/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! no static exports found */function(e,r,o){e.exports={default:o(/*! core-js/library/fn/array/from */"./node_modules/core-js/library/fn/array/from.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */function(e,r,o){e.exports={default:o(/*! core-js/library/fn/object/assign */"./node_modules/core-js/library/fn/object/assign.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */function(e,r,o){e.exports={default:o(/*! core-js/library/fn/object/define-property */"./node_modules/core-js/library/fn/object/define-property.js"),__esModule:!0}},"./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */function(e,r,o){"use strict";r.__esModule=!0,r.default=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}},"./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */function(e,r,o){"use strict";r.__esModule=!0;var s=function(e){return e&&e.__esModule?e:{default:e}}(o(/*! ../core-js/object/define-property */"./node_modules/babel-runtime/core-js/object/define-property.js"));r.default=function(){function e(e,r){for(var o=0;o<r.length;o++){var t=r[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),(0,s.default)(e,t.key,t)}}return function(r,o,s){return o&&e(r.prototype,o),s&&e(r,s),r}}()},"./node_modules/babel-runtime/helpers/defineProperty.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/defineProperty.js ***!
  \**************************************************************/
/*! no static exports found */function(e,r,o){"use strict";r.__esModule=!0;var s=function(e){return e&&e.__esModule?e:{default:e}}(o(/*! ../core-js/object/define-property */"./node_modules/babel-runtime/core-js/object/define-property.js"));r.default=function(e,r,o){return r in e?(0,s.default)(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}},"./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */function(e,r,o){"use strict";r.__esModule=!0;var s=function(e){return e&&e.__esModule?e:{default:e}}(o(/*! ../core-js/object/assign */"./node_modules/babel-runtime/core-js/object/assign.js"));r.default=s.default||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e}},"./node_modules/babel-runtime/helpers/toConsumableArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,r,o){"use strict";r.__esModule=!0;var s=function(e){return e&&e.__esModule?e:{default:e}}(o(/*! ../core-js/array/from */"./node_modules/babel-runtime/core-js/array/from.js"));r.default=function(e){if(Array.isArray(e)){for(var r=0,o=Array(e.length);r<e.length;r++)o[r]=e[r];return o}return(0,s.default)(e)}},"./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */function(e,r,o){o(/*! ../../modules/es6.string.iterator */"./node_modules/core-js/library/modules/es6.string.iterator.js"),o(/*! ../../modules/es6.array.from */"./node_modules/core-js/library/modules/es6.array.from.js"),e.exports=o(/*! ../../modules/_core */"./node_modules/core-js/library/modules/_core.js").Array.from},"./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */function(e,r,o){o(/*! ../../modules/es6.object.assign */"./node_modules/core-js/library/modules/es6.object.assign.js"),e.exports=o(/*! ../../modules/_core */"./node_modules/core-js/library/modules/_core.js").Object.assign},"./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */function(e,r,o){o(/*! ../../modules/es6.object.define-property */"./node_modules/core-js/library/modules/es6.object.define-property.js");var s=o(/*! ../../modules/_core */"./node_modules/core-js/library/modules/_core.js").Object;e.exports=function(e,r,o){return s.defineProperty(e,r,o)}},"./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */function(e,r){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js");e.exports=function(e){if(!s(e))throw TypeError(e+" is not an object!");return e}},"./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_to-iobject */"./node_modules/core-js/library/modules/_to-iobject.js"),t=o(/*! ./_to-length */"./node_modules/core-js/library/modules/_to-length.js"),n=o(/*! ./_to-absolute-index */"./node_modules/core-js/library/modules/_to-absolute-index.js");e.exports=function(e){return function(r,o,l){var u,i=s(r),d=t(i.length),a=n(l,d);if(e&&o!=o){for(;d>a;)if((u=i[a++])!=u)return!0}else for(;d>a;a++)if((e||a in i)&&i[a]===o)return e||a||0;return!e&&-1}}},"./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_cof */"./node_modules/core-js/library/modules/_cof.js"),t=o(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("toStringTag"),n="Arguments"==s(function(){return arguments}());e.exports=function(e){var r,o,l;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(o=function(e,r){try{return e[r]}catch(e){}}(r=Object(e),t))?o:n?s(r):"Object"==(l=s(r))&&"function"==typeof r.callee?"Arguments":l}},"./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */function(e,r){var o={}.toString;e.exports=function(e){return o.call(e).slice(8,-1)}},"./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */function(e,r){var o=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=o)},"./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */function(e,r,o){"use strict";var s=o(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js"),t=o(/*! ./_property-desc */"./node_modules/core-js/library/modules/_property-desc.js");e.exports=function(e,r,o){r in e?s.f(e,r,t(0,o)):e[r]=o}},"./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_a-function */"./node_modules/core-js/library/modules/_a-function.js");e.exports=function(e,r,o){if(s(e),void 0===r)return e;switch(o){case 1:return function(o){return e.call(r,o)};case 2:return function(o,s){return e.call(r,o,s)};case 3:return function(o,s,t){return e.call(r,o,s,t)}}return function(){return e.apply(r,arguments)}}},"./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */function(e,r){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},"./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */function(e,r,o){e.exports=!o(/*! ./_fails */"./node_modules/core-js/library/modules/_fails.js")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js"),t=o(/*! ./_global */"./node_modules/core-js/library/modules/_global.js").document,n=s(t)&&s(t.createElement);e.exports=function(e){return n?t.createElement(e):{}}},"./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */function(e,r){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),t=o(/*! ./_core */"./node_modules/core-js/library/modules/_core.js"),n=o(/*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js"),l=o(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js"),u=o(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),i=function(e,r,o){var d,a,c,m=e&i.F,j=e&i.G,_=e&i.S,f=e&i.P,y=e&i.B,b=e&i.W,p=j?t:t[r]||(t[r]={}),v=p.prototype,h=j?s:_?s[r]:(s[r]||{}).prototype;for(d in j&&(o=r),o)(a=!m&&h&&void 0!==h[d])&&u(p,d)||(c=a?h[d]:o[d],p[d]=j&&"function"!=typeof h[d]?o[d]:y&&a?n(c,s):b&&h[d]==c?function(e){var r=function(r,o,s){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,o)}return new e(r,o,s)}return e.apply(this,arguments)};return r.prototype=e.prototype,r}(c):f&&"function"==typeof c?n(Function.call,c):c,f&&((p.virtual||(p.virtual={}))[d]=c,e&i.R&&v&&!v[d]&&l(v,d,c)))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,i.U=64,i.R=128,e.exports=i},"./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */function(e,r){e.exports=function(e){try{return!!e()}catch(e){return!0}}},"./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */function(e,r){var o=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=o)},"./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */function(e,r){var o={}.hasOwnProperty;e.exports=function(e,r){return o.call(e,r)}},"./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js"),t=o(/*! ./_property-desc */"./node_modules/core-js/library/modules/_property-desc.js");e.exports=o(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js")?function(e,r,o){return s.f(e,r,t(1,o))}:function(e,r,o){return e[r]=o,e}},"./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_global */"./node_modules/core-js/library/modules/_global.js").document;e.exports=s&&s.documentElement},"./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,r,o){e.exports=!o(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js")&&!o(/*! ./_fails */"./node_modules/core-js/library/modules/_fails.js")(function(){return 7!=Object.defineProperty(o(/*! ./_dom-create */"./node_modules/core-js/library/modules/_dom-create.js")("div"),"a",{get:function(){return 7}}).a})},"./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_cof */"./node_modules/core-js/library/modules/_cof.js");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==s(e)?e.split(""):Object(e)}},"./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js"),t=o(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),n=Array.prototype;e.exports=function(e){return void 0!==e&&(s.Array===e||n[t]===e)}},"./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */function(e,r){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},"./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js");e.exports=function(e,r,o,t){try{return t?r(s(o)[0],o[1]):r(o)}catch(r){var n=e.return;throw void 0!==n&&s(n.call(e)),r}}},"./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */function(e,r,o){"use strict";var s=o(/*! ./_object-create */"./node_modules/core-js/library/modules/_object-create.js"),t=o(/*! ./_property-desc */"./node_modules/core-js/library/modules/_property-desc.js"),n=o(/*! ./_set-to-string-tag */"./node_modules/core-js/library/modules/_set-to-string-tag.js"),l={};o(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js")(l,o(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),function(){return this}),e.exports=function(e,r,o){e.prototype=s(l,{next:t(1,o)}),n(e,r+" Iterator")}},"./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */function(e,r,o){"use strict";var s=o(/*! ./_library */"./node_modules/core-js/library/modules/_library.js"),t=o(/*! ./_export */"./node_modules/core-js/library/modules/_export.js"),n=o(/*! ./_redefine */"./node_modules/core-js/library/modules/_redefine.js"),l=o(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js"),u=o(/*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js"),i=o(/*! ./_iter-create */"./node_modules/core-js/library/modules/_iter-create.js"),d=o(/*! ./_set-to-string-tag */"./node_modules/core-js/library/modules/_set-to-string-tag.js"),a=o(/*! ./_object-gpo */"./node_modules/core-js/library/modules/_object-gpo.js"),c=o(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),m=!([].keys&&"next"in[].keys()),j=function(){return this};e.exports=function(e,r,o,_,f,y,b){i(o,r,_);var p,v,h,g=function(e){if(!m&&e in k)return k[e];switch(e){case"keys":case"values":return function(){return new o(this,e)}}return function(){return new o(this,e)}},x=r+" Iterator",w="values"==f,O=!1,k=e.prototype,E=k[c]||k["@@iterator"]||f&&k[f],S=E||g(f),M=f?w?g("entries"):S:void 0,P="Array"==r&&k.entries||E;if(P&&(h=a(P.call(new e)))!==Object.prototype&&h.next&&(d(h,x,!0),s||"function"==typeof h[c]||l(h,c,j)),w&&E&&"values"!==E.name&&(O=!0,S=function(){return E.call(this)}),s&&!b||!m&&!O&&k[c]||l(k,c,S),u[r]=S,u[x]=j,f)if(p={values:w?S:g("values"),keys:y?S:g("keys"),entries:M},b)for(v in p)v in k||n(k,v,p[v]);else t(t.P+t.F*(m||O),r,p);return p}},"./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),t=!1;try{var n=[7][s]();n.return=function(){t=!0},Array.from(n,function(){throw 2})}catch(e){}e.exports=function(e,r){if(!r&&!t)return!1;var o=!1;try{var n=[7],l=n[s]();l.next=function(){return{done:o=!0}},n[s]=function(){return l},e(n)}catch(e){}return o}},"./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */function(e,r){e.exports={}},"./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */function(e,r){e.exports=!0},"./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */function(e,r,o){"use strict";var s=o(/*! ./_object-keys */"./node_modules/core-js/library/modules/_object-keys.js"),t=o(/*! ./_object-gops */"./node_modules/core-js/library/modules/_object-gops.js"),n=o(/*! ./_object-pie */"./node_modules/core-js/library/modules/_object-pie.js"),l=o(/*! ./_to-object */"./node_modules/core-js/library/modules/_to-object.js"),u=o(/*! ./_iobject */"./node_modules/core-js/library/modules/_iobject.js"),i=Object.assign;e.exports=!i||o(/*! ./_fails */"./node_modules/core-js/library/modules/_fails.js")(function(){var e={},r={},o=Symbol(),s="abcdefghijklmnopqrst";return e[o]=7,s.split("").forEach(function(e){r[e]=e}),7!=i({},e)[o]||Object.keys(i({},r)).join("")!=s})?function(e,r){for(var o=l(e),i=arguments.length,d=1,a=t.f,c=n.f;i>d;)for(var m,j=u(arguments[d++]),_=a?s(j).concat(a(j)):s(j),f=_.length,y=0;f>y;)c.call(j,m=_[y++])&&(o[m]=j[m]);return o}:i},"./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),t=o(/*! ./_object-dps */"./node_modules/core-js/library/modules/_object-dps.js"),n=o(/*! ./_enum-bug-keys */"./node_modules/core-js/library/modules/_enum-bug-keys.js"),l=o(/*! ./_shared-key */"./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO"),u=function(){},i=function(){var e,r=o(/*! ./_dom-create */"./node_modules/core-js/library/modules/_dom-create.js")("iframe"),s=n.length;for(r.style.display="none",o(/*! ./_html */"./node_modules/core-js/library/modules/_html.js").appendChild(r),r.src="javascript:",(e=r.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),i=e.F;s--;)delete i.prototype[n[s]];return i()};e.exports=Object.create||function(e,r){var o;return null!==e?(u.prototype=s(e),o=new u,u.prototype=null,o[l]=e):o=i(),void 0===r?o:t(o,r)}},"./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),t=o(/*! ./_ie8-dom-define */"./node_modules/core-js/library/modules/_ie8-dom-define.js"),n=o(/*! ./_to-primitive */"./node_modules/core-js/library/modules/_to-primitive.js"),l=Object.defineProperty;r.f=o(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js")?Object.defineProperty:function(e,r,o){if(s(e),r=n(r,!0),s(o),t)try{return l(e,r,o)}catch(e){}if("get"in o||"set"in o)throw TypeError("Accessors not supported!");return"value"in o&&(e[r]=o.value),e}},"./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js"),t=o(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),n=o(/*! ./_object-keys */"./node_modules/core-js/library/modules/_object-keys.js");e.exports=o(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js")?Object.defineProperties:function(e,r){t(e);for(var o,l=n(r),u=l.length,i=0;u>i;)s.f(e,o=l[i++],r[o]);return e}},"./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */function(e,r){r.f=Object.getOwnPropertySymbols},"./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),t=o(/*! ./_to-object */"./node_modules/core-js/library/modules/_to-object.js"),n=o(/*! ./_shared-key */"./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO"),l=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=t(e),s(e,n)?e[n]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?l:null}},"./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),t=o(/*! ./_to-iobject */"./node_modules/core-js/library/modules/_to-iobject.js"),n=o(/*! ./_array-includes */"./node_modules/core-js/library/modules/_array-includes.js")(!1),l=o(/*! ./_shared-key */"./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO");e.exports=function(e,r){var o,u=t(e),i=0,d=[];for(o in u)o!=l&&s(u,o)&&d.push(o);for(;r.length>i;)s(u,o=r[i++])&&(~n(d,o)||d.push(o));return d}},"./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_object-keys-internal */"./node_modules/core-js/library/modules/_object-keys-internal.js"),t=o(/*! ./_enum-bug-keys */"./node_modules/core-js/library/modules/_enum-bug-keys.js");e.exports=Object.keys||function(e){return s(e,t)}},"./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */function(e,r){r.f={}.propertyIsEnumerable},"./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */function(e,r){e.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}}},"./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */function(e,r,o){e.exports=o(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js")},"./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js").f,t=o(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),n=o(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("toStringTag");e.exports=function(e,r,o){e&&!t(e=o?e:e.prototype,n)&&s(e,n,{configurable:!0,value:r})}},"./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_shared */"./node_modules/core-js/library/modules/_shared.js")("keys"),t=o(/*! ./_uid */"./node_modules/core-js/library/modules/_uid.js");e.exports=function(e){return s[e]||(s[e]=t(e))}},"./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_core */"./node_modules/core-js/library/modules/_core.js"),t=o(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),n=t["__core-js_shared__"]||(t["__core-js_shared__"]={});(e.exports=function(e,r){return n[e]||(n[e]=void 0!==r?r:{})})("versions",[]).push({version:s.version,mode:o(/*! ./_library */"./node_modules/core-js/library/modules/_library.js")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_to-integer */"./node_modules/core-js/library/modules/_to-integer.js"),t=o(/*! ./_defined */"./node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return function(r,o){var n,l,u=String(t(r)),i=s(o),d=u.length;return i<0||i>=d?e?"":void 0:(n=u.charCodeAt(i))<55296||n>56319||i+1===d||(l=u.charCodeAt(i+1))<56320||l>57343?e?u.charAt(i):n:e?u.slice(i,i+2):l-56320+(n-55296<<10)+65536}}},"./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_to-integer */"./node_modules/core-js/library/modules/_to-integer.js"),t=Math.max,n=Math.min;e.exports=function(e,r){return(e=s(e))<0?t(e+r,0):n(e,r)}},"./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */function(e,r){var o=Math.ceil,s=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?s:o)(e)}},"./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_iobject */"./node_modules/core-js/library/modules/_iobject.js"),t=o(/*! ./_defined */"./node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return s(t(e))}},"./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_to-integer */"./node_modules/core-js/library/modules/_to-integer.js"),t=Math.min;e.exports=function(e){return e>0?t(s(e),9007199254740991):0}},"./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_defined */"./node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return Object(s(e))}},"./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js");e.exports=function(e,r){if(!s(e))return e;var o,t;if(r&&"function"==typeof(o=e.toString)&&!s(t=o.call(e)))return t;if("function"==typeof(o=e.valueOf)&&!s(t=o.call(e)))return t;if(!r&&"function"==typeof(o=e.toString)&&!s(t=o.call(e)))return t;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */function(e,r){var o=0,s=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++o+s).toString(36))}},"./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_shared */"./node_modules/core-js/library/modules/_shared.js")("wks"),t=o(/*! ./_uid */"./node_modules/core-js/library/modules/_uid.js"),n=o(/*! ./_global */"./node_modules/core-js/library/modules/_global.js").Symbol,l="function"==typeof n;(e.exports=function(e){return s[e]||(s[e]=l&&n[e]||(l?n:t)("Symbol."+e))}).store=s},"./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_classof */"./node_modules/core-js/library/modules/_classof.js"),t=o(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),n=o(/*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js");e.exports=o(/*! ./_core */"./node_modules/core-js/library/modules/_core.js").getIteratorMethod=function(e){if(void 0!=e)return e[t]||e["@@iterator"]||n[s(e)]}},"./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */function(e,r,o){"use strict";var s=o(/*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js"),t=o(/*! ./_export */"./node_modules/core-js/library/modules/_export.js"),n=o(/*! ./_to-object */"./node_modules/core-js/library/modules/_to-object.js"),l=o(/*! ./_iter-call */"./node_modules/core-js/library/modules/_iter-call.js"),u=o(/*! ./_is-array-iter */"./node_modules/core-js/library/modules/_is-array-iter.js"),i=o(/*! ./_to-length */"./node_modules/core-js/library/modules/_to-length.js"),d=o(/*! ./_create-property */"./node_modules/core-js/library/modules/_create-property.js"),a=o(/*! ./core.get-iterator-method */"./node_modules/core-js/library/modules/core.get-iterator-method.js");t(t.S+t.F*!o(/*! ./_iter-detect */"./node_modules/core-js/library/modules/_iter-detect.js")(function(e){Array.from(e)}),"Array",{from:function(e){var r,o,t,c,m=n(e),j="function"==typeof this?this:Array,_=arguments.length,f=_>1?arguments[1]:void 0,y=void 0!==f,b=0,p=a(m);if(y&&(f=s(f,_>2?arguments[2]:void 0,2)),void 0==p||j==Array&&u(p))for(o=new j(r=i(m.length));r>b;b++)d(o,b,y?f(m[b],b):m[b]);else for(c=p.call(m),o=new j;!(t=c.next()).done;b++)d(o,b,y?l(c,f,[t.value,b],!0):t.value);return o.length=b,o}})},"./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_export */"./node_modules/core-js/library/modules/_export.js");s(s.S+s.F,"Object",{assign:o(/*! ./_object-assign */"./node_modules/core-js/library/modules/_object-assign.js")})},"./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */function(e,r,o){var s=o(/*! ./_export */"./node_modules/core-js/library/modules/_export.js");s(s.S+s.F*!o(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js"),"Object",{defineProperty:o(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js").f})},"./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */function(e,r,o){"use strict";var s=o(/*! ./_string-at */"./node_modules/core-js/library/modules/_string-at.js")(!0);o(/*! ./_iter-define */"./node_modules/core-js/library/modules/_iter-define.js")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,r=this._t,o=this._i;return o>=r.length?{value:void 0,done:!0}:(e=s(r,o),this._i+=e.length,{value:e,done:!1})})},"./src/Utilities/ReducerRegistry.js":
/*!******************************************!*\
  !*** ./src/Utilities/ReducerRegistry.js ***!
  \******************************************/
/*! no static exports found */function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.reduxRegistry=void 0;var s=d(o(/*! babel-runtime/helpers/toConsumableArray */"./node_modules/babel-runtime/helpers/toConsumableArray.js")),t=d(o(/*! babel-runtime/helpers/classCallCheck */"./node_modules/babel-runtime/helpers/classCallCheck.js")),n=d(o(/*! babel-runtime/helpers/createClass */"./node_modules/babel-runtime/helpers/createClass.js")),l=d(o(/*! babel-runtime/helpers/defineProperty */"./node_modules/babel-runtime/helpers/defineProperty.js")),u=d(o(/*! babel-runtime/helpers/extends */"./node_modules/babel-runtime/helpers/extends.js"));r.applyReducerHash=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,s=arguments[1];return Object.prototype.hasOwnProperty.call(e,s.type)?e[s.type](o,s):o}},r.dispatchActionsToStore=function(e,r){return Object.keys(e).reduce(function(o,s){return(0,u.default)({},o,(0,l.default)({},s,function(){return r&&r.dispatch(e[s].apply(e,arguments))}))},{})};var i=o(/*! redux */"redux");function d(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.compose;(0,t.default)(this,e);var l=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||n;this.store=(0,i.createStore)(function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:r},r,l(i.applyMiddleware.apply(void 0,(0,s.default)(o)))),this.reducers={}}return(0,n.default)(e,[{key:"on",value:function(e,r){this.listenerMiddleware.addNew({on:e,callback:r})}},{key:"getListenerMiddleware",value:function(){return this.listenerMiddleware}},{key:"getStore",value:function(){return this.store}},{key:"register",value:function(e){this.reducers=(0,u.default)({},this.reducers,e),this.store.replaceReducer((0,i.combineReducers)((0,u.default)({},this.reducers)))}}]),e}();r.reduxRegistry=new a;r.default=a},redux:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"redux","commonjs2":"redux","amd":"redux","root":"Redux"} ***!
  \**************************************************************************************/
/*! no static exports found */function(r,o){r.exports=e}})})}}]);
//# sourceMappingURL=../sourcemaps/ComplianceSystems~PolicyDetails.js.map