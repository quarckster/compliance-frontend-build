(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{183:function(e,t,n){"use strict";var a=n(53),r=n.n(a),i=n(54),o=n.n(i),l=n(55),c=n.n(l),s=n(56),u=n.n(s),p=n(57),h=n.n(p),m=n(9),f=n(1),d=n.n(f),y=function(e){function t(e){return r()(this,t),c()(this,u()(t).call(this,e))}return h()(t,e),o()(t,[{key:"render",value:function(){var e=this.props.error;return 401===e.networkError.statusCode&&window.insights.chrome.auth.logout(),"Oops! There was an error loading Compliance data. If you need to contact Red Hat Support about this, this is the exact error: "+e.networkError.statusCode+" "+e}}]),t}(m.Component);y.propTypes={error:d.a.object},t.a=y},185:function(e,t,n){"use strict";var a=n(53),r=n.n(a),i=n(54),o=n.n(i),l=n(55),c=n.n(l),s=n(56),u=n.n(s),p=n(57),h=n.n(p),m=n(89),f=n.n(m),d=n(74),y=n(1),v=n.n(y),b=n(9),g=n.n(b),E=n(79),w=n(298),x=n(266),T=n(186),k=n.n(T),W=function(e){function t(e){var n;return r()(this,t),(n=c()(this,u()(t).call(this,e))).tabPaths={0:E.b.compliancePolicies,1:E.b.complianceSystems},n.redirect=n.redirect.bind(f()(f()(n))),n}return h()(t,e),o()(t,[{key:"redirect",value:function(e,t){this.props.history.push(this.tabPaths[t])}},{key:"render",value:function(){var e=this.props.match.path,t=Number(k()(this.tabPaths)[e]);return g.a.createElement(g.a.Fragment,null,g.a.createElement(w.a,{activeKey:t,onSelect:this.redirect,"aria-label":"Compliance Tabs"},g.a.createElement(x.a,{title:"Policies",eventKey:0}),g.a.createElement(x.a,{title:"Systems",eventKey:1})))}}]),t}(b.Component);W.propTypes={history:v.a.object,match:v.a.object},t.a=Object(d.routerParams)(W)},186:function(e,t,n){var a=n(187),r=n(188),i=n(106),o=Object.prototype.toString,l=r(function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=o.call(t)),e[t]=n},a(i));e.exports=l},187:function(e,t){e.exports=function(e){return function(){return e}}},188:function(e,t,n){var a=n(189);e.exports=function(e,t){return function(n,r){return a(n,e,t(r),{})}}},189:function(e,t,n){var a=n(190);e.exports=function(e,t,n,r){return a(e,function(e,a,i){t(r,n(e),a,i)}),r}},190:function(e,t,n){var a=n(191),r=n(107);e.exports=function(e,t){return e&&a(e,t,r)}},191:function(e,t,n){var a=n(192)();e.exports=a},192:function(e,t){e.exports=function(e){return function(t,n,a){for(var r=-1,i=Object(t),o=a(t),l=o.length;l--;){var c=o[e?l:++r];if(!1===n(i[c],c,i))break}return t}}},514:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n.n(a),i=n(116),o=n.n(i),l=n(253),c=n(152),s=n(261),u=n(262),p=n(128),h=n(265),m=n(304),f=n(176),d=n(151),y=n(251),v=n(263),b=n(74),g=n(53),E=n.n(g),w=n(54),x=n.n(w),T=n(55),k=n.n(T),W=n(56),C=n.n(W),M=n(57),O=n.n(M),P=n(89),j=n.n(P),_=n(153),L=n(1),S=n.n(L),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},A=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var N=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a)));return i.state={},i.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},i.elements={},i.onResize=i.onResize.bind(i),i.onTruncate=i.onTruncate.bind(i),i.calcTargetWidth=i.calcTargetWidth.bind(i),i.measureWidth=i.measureWidth.bind(i),i.getLines=i.getLines.bind(i),i.renderLine=i.renderLine.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),A(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,a=document.createElement("canvas");this.canvasContext=a.getContext("2d"),t(function(){e&&e.parentNode.removeChild(e)}),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"innerText",value:function(e){var t=document.createElement("div"),n="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var a=t[n],r=document.createElement("div");return r.innerHTML="foo<br/>bar","foo\nbar"!==r[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),a=t[n]),a}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"==typeof t&&(this.timeout=window.requestAnimationFrame(function(){t(e)}))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,n=this.calcTargetWidth,a=this.canvasContext,r=this.props.width;if(t){var i=r||Math.floor(t.parentNode.getBoundingClientRect().width);if(!i)return window.requestAnimationFrame(function(){return n(e)});var o=window.getComputedStyle(t),l=[o["font-weight"],o["font-style"],o["font-size"],o["font-family"]].join(" ");a.font=l,this.setState({targetWidth:i},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,n=t.lines,a=t.ellipsis,i=t.trimWhitespace,o=this.state.targetWidth,l=this.innerText,c=this.measureWidth,s=this.onTruncate,u=this.trimRight,p=[],h=l(e.text).split("\n").map(function(e){return e.split(" ")}),m=!0,f=this.ellipsisWidth(this.elements.ellipsis),d=1;d<=n;d++){var y=h[0];if(0!==y.length){var v=y.join(" ");if(c(v)<=o&&1===h.length){m=!1,p.push(v);break}if(d===n){for(var b=y.join(" "),g=0,E=b.length-1;g<=E;){var w=Math.floor((g+E)/2);c(b.slice(0,w+1))+f<=o?g=w+1:E=w-1}var x=b.slice(0,g);if(i)for(x=u(x);!x.length&&p.length;){x=u(p.pop())}v=r.a.createElement("span",null,x,a)}else{for(var T=0,k=y.length-1;T<=k;){var W=Math.floor((T+k)/2);c(y.slice(0,W+1).join(" "))<=o?T=W+1:k=W-1}if(0===T){d=n-1;continue}v=y.slice(0,T).join(" "),h[0].splice(0,T)}p.push(v)}else p.push(),h.shift(),d--}return s(m),p}},{key:"renderLine",value:function(e,t,n){if(t===n.length-1)return r.a.createElement("span",{key:t},e);var a=r.a.createElement("br",{key:t+"br"});return e?[r.a.createElement("span",{key:t},e),a]:a}},{key:"render",value:function(){var e=this,t=this.elements.target,n=this.props,a=n.children,i=n.ellipsis,o=n.lines,l=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(n,["children","ellipsis","lines"]),c=this.state.targetWidth,s=this.getLines,u=this.renderLine,p=this.onTruncate,h=void 0;return"undefined"!=typeof window&&!(!t||!c)&&(o>0?h=s().map(u):(h=a,p(!1))),delete l.onTruncate,delete l.trimWhitespace,r.a.createElement("span",z({},l,{ref:function(t){e.elements.target=t}}),r.a.createElement("span",null,h),r.a.createElement("span",{ref:function(t){e.elements.text=t}},a),r.a.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},i))}}]),t}();N.propTypes={children:S.a.node,ellipsis:S.a.node,lines:S.a.oneOfType([S.a.oneOf([!1]),S.a.number]),trimWhitespace:S.a.bool,width:S.a.number,onTruncate:S.a.func},N.defaultProps={children:"",ellipsis:"…",lines:1,trimWhitespace:!1,width:0};var R=N,H=n(248),q=n(250),F=n(505),D=n(510),K=n(296),U=(n(230),function(e){function t(e){var n;return E()(this,t),(n=k()(this,C()(t).call(this))).policy=e.policy,n.state={cardTitle:r.a.createElement(R,{lines:1},n.policy.name)},n.onMouseover=n.onMouseover.bind(j()(j()(n))),n.onMouseout=n.onMouseout.bind(j()(j()(n))),n}return O()(t,e),x()(t,[{key:"onMouseover",value:function(){this.setState({cardTitle:this.policy.name})}},{key:"onMouseout",value:function(){this.setState({cardTitle:r.a.createElement(R,{lines:1},this.policy.name)})}},{key:"render",value:function(){var e=this.policy.compliant_host_count,t=this.policy.total_host_count,n=[{x:"Compliant",y:e},{x:"Non-compliant",y:t-e}],a=Math.floor(n[0].y/(n[0].y+n[1].y)*100)+"%",i=r.a.createElement("svg",{className:"chart-label",height:300,width:300},r.a.createElement(F.a,{style:{fontSize:26},text:a,textAnchor:"middle",verticalAnchor:"middle",x:150,y:135}),r.a.createElement(F.a,{style:{fill:"#bbb"},text:"Compliant",textAnchor:"middle",verticalAnchor:"middle",x:150,y:165}));return r.a.createElement(H.a,{"widget-id":this.policy.ref_id},r.a.createElement(q.a,null,r.a.createElement(f.b,{style:{fontWeight:"500",color:"#bbb"},component:f.a.small},"External Policy"),r.a.createElement(m.a,null,r.a.createElement(f.b,{onMouseEnter:this.onMouseover.bind(this),onMouseLeave:this.onMouseout.bind(this),style:{fontWeight:"500"},component:f.a.h4},this.state.cardTitle)),r.a.createElement(m.a,{className:"chart-title"},r.a.createElement(y.a,null,r.a.createElement(l.a,{style:{display:"inline-flex"},span:12},r.a.createElement(m.a,null,r.a.createElement("span",{style:{fontSize:"30px",fontWeight:"500"}},e),r.a.createElement("span",{style:{fontWeight:"500",color:"#bbb"}}," ","of"," "),r.a.createElement("span",{style:{fontSize:"30px",fontWeight:"500"}},t))),r.a.createElement(l.a,{span:8},r.a.createElement(f.b,{style:{fontWeight:"500",color:"#bbb"},component:f.a.small},"Systems above compliance threshold")))),r.a.createElement("hr",null),r.a.createElement(y.a,null,r.a.createElement(l.a,{style:{textAlign:"center"},span:12},r.a.createElement("div",{className:"chart-inline"},r.a.createElement("div",{className:"card-chart-container"},i,r.a.createElement(D.a,{data:n,identifier:this.policy.name.replace(/ /g,""),theme:K.a.light.blue,height:205,width:205}))))),r.a.createElement(m.a,{style:{textAlign:"right"}},r.a.createElement(f.b,{component:f.a.small},r.a.createElement(_.a,{to:"/policies/"+this.policy.id},"More Details")))))}}]),t}(r.a.Component)),J=n(75),B=n(120),G=n.n(B),I=n(183);function Q(){var e=o()(["\n{\n    allProfiles {\n        id\n        name\n        ref_id\n        description\n        total_host_count\n        compliant_host_count\n    }\n}\n"]);return Q=function(){return e},e}var Y=G()(Q()),$=Object(b.routerParams)(function(){return r.a.createElement(J.Query,{query:Y},function(e){var t=e.data,n=e.error,a=e.loading;if(n)return r.a.createElement(I.a,{error:n});if(a)return"Loading Policies...";var i=t.allProfiles,o=[];return o=i.length?i.map(function(e,t){return r.a.createElement(l.a,{sm:12,md:12,lg:6,xl:4,key:t},r.a.createElement(U,{key:t,policy:e}))}):r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement(u.a,{size:"xl",title:"Compliance",icon:v.a}),r.a.createElement("br",null),r.a.createElement(p.b,{size:"lg"},"Welcome to Compliance"),r.a.createElement(h.a,null,r.a.createElement(m.a,null,"You have not uploaded any reports yet. Please generate a report using OpenSCAP:",r.a.createElement(f.b,{component:f.a.blockquote},"oscap xccdf eval --profile xccdf_org.ssgproject.content_profile_standard --results scan.xml /usr/share/xml/scap/ssg/content/ssg-rhel7-ds.xml"),"and upload it using the following command:",r.a.createElement(f.b,{component:f.a.blockquote},"sudo insights-client --verbose --payload scan.xml --content-type application/vnd.redhat.compliance.something+tgz"))),r.a.createElement(d.c,{variant:"primary",component:"a",target:"_blank",href:"https://www.open-scap.org/getting-started/"},"Get started with OpenSCAP"))),r.a.createElement("div",{className:"policies-donuts"},r.a.createElement(y.a,{gutter:"md"},o))})}),V=n(185);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.PageHeader,null,r.a.createElement(b.PageHeaderTitle,{title:"Compliance"}),r.a.createElement(V.a,null)),r.a.createElement(b.Main,null,r.a.createElement($,null)))}}}]);
//# sourceMappingURL=../sourcemaps/CompliancePolicies.js.map