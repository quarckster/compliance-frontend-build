(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[164],{89671:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>C});var n=a(28481),l=a(32413),c=a(69957),i=a(45697),o=a.n(i),s=a(92950),r=a.n(s),d=a(334),p=a(46829),u=a(39859),m=a(83215),y=a(65811),h=function(){var e=(0,s.useState)(!1),t=(0,n.Z)(e,2),a=t[0],i=t[1],o=(0,d.useLocation)(),h=(0,d.useHistory)(),C=o.state.policy,b=C.name,k=C.id,E=function(){h.push("/scappolicies")},f=(0,p.useMutation)(u._v,{onCompleted:function(){(0,y.C)((0,m.wN)({variant:"success",title:"The policy ".concat(b," and its associated reports has been deleted")})),E()},onError:function(e){(0,y.C)((0,m.wN)({variant:"danger",title:"Error removing policy",description:e.message})),E()}}),v=(0,n.Z)(f,1)[0];return r().createElement(l.Modal,{variant:l.ModalVariant.small,title:r().createElement(r().Fragment,null,r().createElement(c.ZP,{className:"ins-u-warning"}),r().createElement(l.Text,{component:"span",className:"policy-delete-header-text"},"Delete policy?")),isOpen:!0,onClose:E,actions:[r().createElement(l.Button,{key:"destroy","aria-label":"delete",isDisabled:!a,variant:"danger",onClick:function(){return v({variables:{input:{id:k}}})}},"Delete policy and associated reports"),r().createElement(l.Button,{key:"cancel",variant:"secondary",onClick:E},"Cancel")]},r().createElement(l.Text,{className:"policy-delete-body-text"},"Deleting the policy ",r().createElement("b",null,b)," will also delete its associated reports."),r().createElement(l.Checkbox,{label:"I understand this will delete the policy and all associated reports",id:"deleting-policy-check-".concat(k),isChecked:a,onChange:i}))};h.propTypes={policy:o().object};const C=h}}]);
//# sourceMappingURL=../sourcemaps/DeletePolicy.a840778b29012dfaa628.js.map