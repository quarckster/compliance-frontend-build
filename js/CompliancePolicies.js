(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{285:function(e,t,n){"use strict";var a=n(87),r=n.n(a),o=n(88),i=n.n(o),l=n(89),c=n.n(l),s=n(90),p=n.n(s),u=n(91),m=n.n(u),f=n(2),h=n(1),d=n.n(h),y=function(e){function t(e){return r()(this,t),c()(this,p()(t).call(this,e))}return m()(t,e),i()(t,[{key:"render",value:function(){var e=this.props.error;return e.networkError&&401===e.networkError.statusCode&&window.insights.chrome.auth.logout(),"Oops! There was an error loading Compliance data. If you need to contact Red Hat Support about this, this is the exact error:  "+e.message}}]),t}(f.Component);y.propTypes={error:d.a.object},t.a=y},286:function(e,t,n){"use strict";var a=n(87),r=n.n(a),o=n(88),i=n.n(o),l=n(89),c=n.n(l),s=n(90),p=n.n(s),u=n(91),m=n.n(u),f=n(126),h=n(1),d=n.n(h),y=n(2),g=n.n(y),v=n(130),b=n(135),_=n(145),E=n(287),x=n.n(E),w=function(e){function t(){var e,n;r()(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=c()(this,(e=p()(t)).call.apply(e,[this].concat(o))))._isMounted=!1,n.state={internalUser:!1,tabPaths:{0:v.b.compliancePolicies,1:v.b.complianceSystems}},n.redirect=function(e,t){var a=n.state.tabPaths;n.props.history.push(a[t])},n}return m()(t,e),i()(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,window.insights.chrome.auth.getUser().then(function(t){e._isMounted&&e.setState({internalUser:t.identity.user.is_internal,tabPaths:{0:v.b.compliancePolicies,1:v.b.complianceSystems,2:v.b.complianceImageStreams}})})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.props.match.path,t=this.state,n=t.internalUser,a=t.tabPaths,r=Number(x()(a)[e]),o=[g.a.createElement(b.a,{title:"Policies",key:0,eventKey:0}),g.a.createElement(b.a,{title:"Systems",key:1,eventKey:1})];return n?o.push(g.a.createElement(b.a,{title:"Image Streams",key:2,eventKey:2})):"/imagestreams"===e&&(r=1),g.a.createElement(_.a,{activeKey:r,onSelect:this.redirect,"aria-label":"Compliance Tabs"},o)}}]),t}(y.Component);w.propTypes={history:d.a.object,match:d.a.object},t.a=Object(f.routerParams)(w)},287:function(e,t,n){var a=n(288),r=n(289),o=n(264),i=Object.prototype.toString,l=r(function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=i.call(t)),e[t]=n},a(o));e.exports=l},288:function(e,t){e.exports=function(e){return function(){return e}}},289:function(e,t,n){var a=n(290);e.exports=function(e,t){return function(n,r){return a(n,e,t(r),{})}}},290:function(e,t,n){var a=n(291);e.exports=function(e,t,n,r){return a(e,function(e,a,o){t(r,n(e),a,o)}),r}},291:function(e,t,n){var a=n(292),r=n(265);e.exports=function(e,t){return e&&a(e,t,r)}},292:function(e,t,n){var a=n(293)();e.exports=a},293:function(e,t){e.exports=function(e){return function(t,n,a){for(var r=-1,o=Object(t),i=a(t),l=i.length;l--;){var c=i[e?l:++r];if(!1===n(o[c],c,o))break}return t}}},323:function(e,t,n){var a=n(324);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(162)(a,r);a.locals&&(e.exports=a.locals)},324:function(e,t,n){(e.exports=n(128)(!1)).push([e.i,"/* stylelint-enable */\n.pf-c-empty-state {\n  --pf-c-empty-state--MaxWidth: 37.5rem;\n  --pf-c-empty-state--Padding: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__icon--MarginBottom: var(--pf-global--spacer--lg);\n  --pf-c-empty-state__icon--FontSize: var(--pf-global--icon--FontSize--xl);\n  --pf-c-empty-state__icon--Color: var(--pf-global--icon--Color--light);\n  --pf-c-empty-state__body--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state__body--Color: var(--pf-global--Color--200);\n  --pf-c-empty-state--c-button--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--c-button__secondary--MarginTop: var(--pf-global--spacer--sm);\n  --pf-c-empty-state__secondary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__secondary--MarginRight: calc(var(--pf-global--spacer--xs) * -1);\n  --pf-c-empty-state__secondary--MarginBottom: calc(var(--pf-global--spacer--xs) * -1);\n  --pf-c-empty-state__secondary--c-button--MarginRight: var(--pf-global--spacer--xs);\n  --pf-c-empty-state__secondary--c-button--MarginBottom: var(--pf-global--spacer--xs);\n  max-width: var(--pf-c-empty-state--MaxWidth);\n  padding: var(--pf-c-empty-state--Padding);\n  text-align: center; }\n\n.pf-c-empty-state > .pf-c-button.pf-m-primary {\n  margin-top: var(--pf-c-empty-state--c-button--MarginTop); }\n\n.pf-c-empty-state > .pf-c-button.pf-m-primary + .pf-c-empty-state__secondary {\n  margin-top: var(--pf-c-empty-state--c-button__secondary--MarginTop); }\n\n.pf-c-empty-state__icon {\n  margin-bottom: var(--pf-c-empty-state__icon--MarginBottom);\n  font-size: var(--pf-c-empty-state__icon--FontSize);\n  color: var(--pf-c-empty-state__icon--Color); }\n\n.pf-c-empty-state__body {\n  margin-top: var(--pf-c-empty-state__body--MarginTop);\n  color: var(--pf-c-empty-state__body--Color); }\n\n.pf-c-empty-state__secondary {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: var(--pf-c-empty-state__secondary--MarginTop);\n  margin-right: var(--pf-c-empty-state__secondary--MarginRight);\n  margin-bottom: var(--pf-c-empty-state__secondary--MarginBottom); }\n\n.pf-c-empty-state__secondary > .pf-c-button {\n  margin-right: var(--pf-c-empty-state__secondary--c-button--MarginRight);\n  margin-bottom: var(--pf-c-empty-state__secondary--c-button--MarginBottom); }\n",""])},655:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(266),i=n.n(o),l=n(375),c=n(96),s=n(368),p=n(369),u=n(362),m=n(373),f=n(320),h=n(97),d=n(374),y=n(323),g=n.n(y),v=n(379),b=n(126),_=n(87),E=n.n(_),x=n(88),w=n.n(x),T=n(89),M=n.n(T),k=n(90),C=n.n(k),W=n(91),P=n.n(W),S=n(321),j=n(1),O=n.n(j),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},L=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var R=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a)));return o.state={},o.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},o.elements={},o.onResize=o.onResize.bind(o),o.onTruncate=o.onTruncate.bind(o),o.calcTargetWidth=o.calcTargetWidth.bind(o),o.measureWidth=o.measureWidth.bind(o),o.getLines=o.getLines.bind(o),o.renderLine=o.renderLine.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),L(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,a=document.createElement("canvas");this.canvasContext=a.getContext("2d"),t(function(){e&&e.parentNode.removeChild(e)}),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"innerText",value:function(e){var t=document.createElement("div"),n="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var a=t[n],r=document.createElement("div");return r.innerHTML="foo<br/>bar","foo\nbar"!==r[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),a=t[n]),a}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"==typeof t&&(this.timeout=window.requestAnimationFrame(function(){t(e)}))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,n=this.calcTargetWidth,a=this.canvasContext,r=this.props.width;if(t){var o=r||Math.floor(t.parentNode.getBoundingClientRect().width);if(!o)return window.requestAnimationFrame(function(){return n(e)});var i=window.getComputedStyle(t),l=[i["font-weight"],i["font-style"],i["font-size"],i["font-family"]].join(" ");a.font=l,this.setState({targetWidth:o},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,n=t.lines,a=t.ellipsis,o=t.trimWhitespace,i=this.state.targetWidth,l=this.innerText,c=this.measureWidth,s=this.onTruncate,p=this.trimRight,u=[],m=l(e.text).split("\n").map(function(e){return e.split(" ")}),f=!0,h=this.ellipsisWidth(this.elements.ellipsis),d=1;d<=n;d++){var y=m[0];if(0!==y.length){var g=y.join(" ");if(c(g)<=i&&1===m.length){f=!1,u.push(g);break}if(d===n){for(var v=y.join(" "),b=0,_=v.length-1;b<=_;){var E=Math.floor((b+_)/2);c(v.slice(0,E+1))+h<=i?b=E+1:_=E-1}var x=v.slice(0,b);if(o)for(x=p(x);!x.length&&u.length;){x=p(u.pop())}g=r.a.createElement("span",null,x,a)}else{for(var w=0,T=y.length-1;w<=T;){var M=Math.floor((w+T)/2);c(y.slice(0,M+1).join(" "))<=i?w=M+1:T=M-1}if(0===w){d=n-1;continue}g=y.slice(0,w).join(" "),m[0].splice(0,w)}u.push(g)}else u.push(),m.shift(),d--}return s(f),u}},{key:"renderLine",value:function(e,t,n){if(t===n.length-1)return r.a.createElement("span",{key:t},e);var a=r.a.createElement("br",{key:t+"br"});return e?[r.a.createElement("span",{key:t},e),a]:a}},{key:"render",value:function(){var e=this,t=this.elements.target,n=this.props,a=n.children,o=n.ellipsis,i=n.lines,l=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(n,["children","ellipsis","lines"]),c=this.state.targetWidth,s=this.getLines,p=this.renderLine,u=this.onTruncate,m=void 0;return"undefined"!=typeof window&&!(!t||!c)&&(i>0?m=s().map(p):(m=a,u(!1))),delete l.onTruncate,delete l.trimWhitespace,r.a.createElement("span",z({},l,{ref:function(t){e.elements.target=t}}),r.a.createElement("span",null,m),r.a.createElement("span",{ref:function(t){e.elements.text=t}},a),r.a.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},o))}}]),t}();R.propTypes={children:O.a.node,ellipsis:O.a.node,lines:O.a.oneOfType([O.a.oneOf([!1]),O.a.number]),trimWhitespace:O.a.bool,width:O.a.number,onTruncate:O.a.func},R.defaultProps={children:"",ellipsis:"…",lines:1,trimWhitespace:!1,width:0};var A=R,N=n(363),H=n(364),B=n(654),U=n(650),F=n(445),q=(n(383),function(e){function t(e){var n;return E()(this,t),(n=M()(this,C()(t).call(this,e))).onMouseover=function(){n.setState({cardTitle:n.policy.name})},n.onMouseout=function(){n.setState({cardTitle:r.a.createElement(A,{lines:1},n.policy.name)})},n.policy=e.policy,n.state={cardTitle:r.a.createElement(A,{lines:1},n.policy.name)},n}return P()(t,e),w()(t,[{key:"render",value:function(){var e=this.policy.compliant_host_count,t=this.policy.total_host_count,n=[{x:"Compliant",y:e},{x:"Non-compliant",y:t-e}],a=Math.floor(n[0].y/(n[0].y+n[1].y)*100)+"%",o=r.a.createElement("svg",{className:"chart-label",height:300,width:300},r.a.createElement(B.a,{style:{fontSize:26},text:a,textAnchor:"middle",verticalAnchor:"middle",x:150,y:135}),r.a.createElement(B.a,{style:{fill:"var(--pf-global--Color--200)"},text:"Systems above threshold",textAnchor:"middle",verticalAnchor:"middle",x:150,y:165}));return r.a.createElement(N.a,{"widget-id":this.policy.ref_id},r.a.createElement(H.a,null,r.a.createElement(f.b,{style:{fontWeight:"500",color:"var(--pf-global--Color--200)"},component:f.a.small},"External Policy"),r.a.createElement(m.a,null,r.a.createElement(f.b,{onMouseEnter:this.onMouseover.bind(this),onMouseLeave:this.onMouseout.bind(this),style:{fontWeight:"500"},component:f.a.h4},this.state.cardTitle)),r.a.createElement(m.a,{className:"chart-title"},r.a.createElement(d.a,null,r.a.createElement(l.a,{style:{display:"inline-flex"},span:12},r.a.createElement(m.a,null,r.a.createElement("span",{style:{fontSize:"30px",fontWeight:"500"}},e),r.a.createElement("span",{style:{fontWeight:"500",color:"var(--pf-global--Color--200)"}}," ","of"," "),r.a.createElement("span",{style:{fontSize:"30px",fontWeight:"500"}},t))),r.a.createElement(l.a,{span:8},r.a.createElement(f.b,{style:{fontWeight:"500",color:"var(--pf-global--Color--200)"},component:f.a.small},"Systems above compliance threshold"))))),r.a.createElement("hr",null),r.a.createElement(H.a,null,r.a.createElement(d.a,null,r.a.createElement(l.a,{style:{textAlign:"center"},span:12},r.a.createElement("div",{className:"chart-inline"},r.a.createElement("div",{className:"card-chart-container"},o,r.a.createElement(U.a,{data:n,identifier:this.policy.name.replace(/ /g,""),theme:F.a.light.blue,height:205,width:205}))))),r.a.createElement(m.a,{style:{textAlign:"right"}},r.a.createElement(f.b,{component:f.a.small,style:{fontSize:"16px"}},r.a.createElement(S.a,{to:"/policies/"+this.policy.id},"More details")))))}}]),t}(r.a.Component)),I=n(127),K=n(267),D=n.n(K),J=n(285);function G(){var e=i()(["\n{\n    allProfiles {\n        id\n        name\n        ref_id\n        description\n        total_host_count\n        compliant_host_count\n    }\n}\n"]);return G=function(){return e},e}var Q=D()(G()),Y=Object(b.routerParams)(function(){return r.a.createElement(I.Query,{query:Q},function(e){var t=e.data,n=e.error,a=e.loading;if(n)return r.a.createElement(J.a,{error:n});if(a)return"Loading Policies...";var o=t.allProfiles,i=[];return i=o.length?o.map(function(e,t){return r.a.createElement(l.a,{sm:12,md:12,lg:6,xl:4,key:t},r.a.createElement(q,{key:t,policy:e}))}):r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement(p.a,{size:"xl",title:"Compliance",icon:v.a}),r.a.createElement("br",null),r.a.createElement(u.a,{size:"lg"},"Welcome to Compliance"),r.a.createElement("span",{className:g.a.emptyStateBody},r.a.createElement(m.a,null,"You have not uploaded any reports yet. Please generate a report using OpenSCAP:",r.a.createElement(f.b,{component:f.a.blockquote},"oscap xccdf eval --profile xccdf_org.ssgproject.content_profile_standard --results scan.xml /usr/share/xml/scap/ssg/content/ssg-rhel7-ds.xml"),"and upload it using the following command:",r.a.createElement(f.b,{component:f.a.blockquote},"sudo insights-client --verbose --payload scan.xml --content-type application/vnd.redhat.compliance.something+tgz"))),r.a.createElement(h.c,{variant:"primary",component:"a",target:"_blank",href:"https://www.open-scap.org/getting-started/"},"Get started with OpenSCAP"))),r.a.createElement("div",{className:"policies-donuts"},r.a.createElement(d.a,{gutter:"md"},i))})}),$=n(286);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.PageHeader,null,r.a.createElement(b.PageHeaderTitle,{title:"Compliance"}),r.a.createElement($.a,null)),r.a.createElement(b.Main,null,r.a.createElement(Y,null)))}}}]);
//# sourceMappingURL=../sourcemaps/CompliancePolicies.js.map