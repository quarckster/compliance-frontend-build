(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[953],{57481:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>v});var o=t(28481),r=t(92277),a=t(45697),i=t.n(a),l=t(92950),c=t.n(l),s=t(334),u=t(46829),p=t(84351),d=t(83215),f=t(65811),m=function(){var e,n=(0,s.useHistory)(),t=(0,s.useLocation)(),a=(null===(e=t.state)||void 0===e?void 0:e.profile).id,i=function(){n.push(t.state.background)},l=(0,u.useMutation)(p._M,{onCompleted:function(){(0,f.C)((0,d.wN)({variant:"success",title:"Removed report"})),n.push("/reports")},onError:function(e){(0,f.C)((0,d.wN)({variant:"danger",title:"Error removing report",description:e.message})),i()}}),m=(0,o.Z)(l,1)[0];return c().createElement(r.Modal,{isOpen:!0,variant:r.ModalVariant.small,title:"Delete report",onClose:i,actions:[c().createElement(r.Button,{key:"destroy","aria-label":"delete",variant:"danger",onClick:function(){return m({variables:{input:{profileId:a}}})}},"Delete report"),c().createElement(r.Button,{key:"cancel",variant:"secondary",onClick:function(){return i()}},"Cancel")]},c().createElement(r.TextContent,null,"Deleting a report is permanent and cannot be undone."))};m.propTypes={onClose:i().func,isModalOpen:i().bool,onDelete:i().func,policyId:i().string},m.defaultProps={onDelete:function(){},onClose:function(){}};const v=m}}]);
//# sourceMappingURL=../sourcemaps/DeleteReport.30c86cd1dcca71b68072.js.map