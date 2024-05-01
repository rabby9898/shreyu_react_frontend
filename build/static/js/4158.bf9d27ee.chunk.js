"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[4158],{30802:function(e,n,t){t.d(n,{Z:function(){return k}});var o=t(50678),r=t(78376);function a(e){void 0===e&&(e=(0,r.Z)());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(t){return e.body}}var i=t(53189),s=t(97357),l=t(92899),c=t(72791),u=t(54164),d=t(9084);function f(e){var n=function(e){var n=(0,c.useRef)(e);return n.current=e,n}(e);(0,c.useEffect)((function(){return function(){return n.current()}}),[])}var v,h=t(37215),m=t(22519),p=t(65177),g=t(90183),Z=t(80184),y=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function b(e){var n=e||(v||(v=new p.Z),v),t=(0,c.useRef)({dialog:null,backdrop:null});return Object.assign(t.current,{add:function(){return n.add(t.current)},remove:function(){return n.remove(t.current)},isTopModal:function(){return n.isTopModal(t.current)},setDialogRef:(0,c.useCallback)((function(e){t.current.dialog=e}),[]),setBackdropRef:(0,c.useCallback)((function(e){t.current.backdrop=e}),[])})}var E=(0,c.forwardRef)((function(e,n){var t=e.show,r=void 0!==t&&t,v=e.role,p=void 0===v?"dialog":v,E=e.className,k=e.style,x=e.children,N=e.backdrop,w=void 0===N||N,C=e.keyboard,R=void 0===C||C,j=e.onBackdropClick,T=e.onEscapeKeyDown,F=e.transition,O=e.backdropTransition,S=e.autoFocus,B=void 0===S||S,L=e.enforceFocus,A=void 0===L||L,M=e.restoreFocus,D=void 0===M||M,P=e.restoreFocusOptions,H=e.renderDialog,W=e.renderBackdrop,I=void 0===W?function(e){return(0,Z.jsx)("div",Object.assign({},e))}:W,_=e.manager,K=e.container,z=e.onShow,V=e.onHide,U=void 0===V?function(){}:V,$=e.onExit,q=e.onExited,G=e.onExiting,J=e.onEnter,Q=e.onEntering,X=e.onEntered,Y=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,y),ee=(0,g.Z)(K),ne=b(_),te=(0,d.Z)(),oe=(0,h.Z)(r),re=(0,c.useState)(!r),ae=(0,o.Z)(re,2),ie=ae[0],se=ae[1],le=(0,c.useRef)(null);(0,c.useImperativeHandle)(n,(function(){return ne}),[ne]),s.Z&&!oe&&r&&(le.current=a()),F||r||ie?r&&ie&&se(!1):se(!0);var ce=(0,m.Z)((function(){if(ne.add(),me.current=(0,l.Z)(document,"keydown",ve),he.current=(0,l.Z)(document,"focus",(function(){return setTimeout(de)}),!0),z&&z(),B){var e=a(document);ne.dialog&&e&&!(0,i.Z)(ne.dialog,e)&&(le.current=e,ne.dialog.focus())}})),ue=(0,m.Z)((function(){var e;(ne.remove(),null==me.current||me.current(),null==he.current||he.current(),D)&&(null==(e=le.current)||null==e.focus||e.focus(P),le.current=null)}));(0,c.useEffect)((function(){r&&ee&&ce()}),[r,ee,ce]),(0,c.useEffect)((function(){ie&&ue()}),[ie,ue]),f((function(){ue()}));var de=(0,m.Z)((function(){if(A&&te()&&ne.isTopModal()){var e=a();ne.dialog&&e&&!(0,i.Z)(ne.dialog,e)&&ne.dialog.focus()}})),fe=(0,m.Z)((function(e){e.target===e.currentTarget&&(null==j||j(e),!0===w&&U())})),ve=(0,m.Z)((function(e){R&&27===e.keyCode&&ne.isTopModal()&&(null==T||T(e),e.defaultPrevented||U())})),he=(0,c.useRef)(),me=(0,c.useRef)(),pe=F;if(!ee||!(r||pe&&!ie))return null;var ge=Object.assign({role:p,ref:ne.setDialogRef,"aria-modal":"dialog"===p||void 0},Y,{style:k,className:E,tabIndex:-1}),Ze=H?H(ge):(0,Z.jsx)("div",Object.assign({},ge,{children:c.cloneElement(x,{role:"document"})}));pe&&(Ze=(0,Z.jsx)(pe,{appear:!0,unmountOnExit:!0,in:!!r,onExit:$,onExiting:G,onExited:function(){se(!0),null==q||q.apply(void 0,arguments)},onEnter:J,onEntering:Q,onEntered:X,children:Ze}));var ye=null;if(w){var be=O;ye=I({ref:ne.setBackdropRef,onClick:fe}),be&&(ye=(0,Z.jsx)(be,{appear:!0,in:!!r,children:ye}))}return(0,Z.jsx)(Z.Fragment,{children:u.createPortal((0,Z.jsxs)(Z.Fragment,{children:[ye,Ze]}),ee)})}));E.displayName="Modal";var k=Object.assign(E,{Manager:p.Z})},65177:function(e,n,t){t.d(n,{Z:function(){return u}});var o=t(31303),r=t(36222),a=t(27853),i=t(84531),s=t(75427);var l=(0,t(71306).PB)("modal-open"),c=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.handleContainerOverflow,o=void 0===t||t,r=n.isRTL,i=void 0!==r&&r;(0,a.Z)(this,e),this.handleContainerOverflow=o,this.isRTL=i,this.modals=[]}return(0,i.Z)(e,[{key:"getScrollbarWidth",value:function(){return Math.abs(window.innerWidth-document.documentElement.clientWidth)}},{key:"getElement",value:function(){return document.body}},{key:"setModalAttributes",value:function(e){}},{key:"removeModalAttributes",value:function(e){}},{key:"setContainerStyle",value:function(e){var n={overflow:"hidden"},t=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();e.style=(0,r.Z)({overflow:o.style.overflow},t,o.style[t]),e.scrollBarWidth&&(n[t]="".concat(parseInt((0,s.Z)(o,t)||"0",10)+e.scrollBarWidth,"px")),o.setAttribute(l,""),(0,s.Z)(o,n)}},{key:"reset",value:function(){var e=this;(0,o.Z)(this.modals).forEach((function(n){return e.remove(n)}))}},{key:"removeContainerStyle",value:function(e){var n=this.getElement();n.removeAttribute(l),Object.assign(n.style,e.style)}},{key:"add",value:function(e){var n=this.modals.indexOf(e);return-1!==n?n:(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==n||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n)}},{key:"remove",value:function(e){var n=this.modals.indexOf(e);-1!==n&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}},{key:"isTopModal",value:function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}]),e}(),u=c},32086:function(e,n,t){var o=t(18489),r=t(83738),a=t(72791),i=t(52134),s=t(80473),l=t(99820),c=t(80184),u=["closeLabel","closeVariant","closeButton","onHide","children"],d=a.forwardRef((function(e,n){var t=e.closeLabel,d=e.closeVariant,f=e.closeButton,v=e.onHide,h=e.children,m=(0,r.Z)(e,u),p=(0,a.useContext)(l.Z),g=(0,i.Z)((function(){null==p||p.onHide(),null==v||v()}));return(0,c.jsxs)("div",(0,o.Z)((0,o.Z)({ref:n},m),{},{children:[h,f&&(0,c.jsx)(s.Z,{"aria-label":t,variant:d,onClick:g})]}))}));d.defaultProps={closeLabel:"Close",closeButton:!1},n.Z=d},28099:function(e,n,t){t.d(n,{Z:function(){return E},t:function(){return b}});var o=t(36222),r=t(27853),a=t(84531),i=t(44474),s=t(53538),l=t(81020),c=t(18334),u=t(6755);var d=t(75427),f=t(13808);function v(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var h,m=t(65177),p=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",g=".sticky-top",Z=".navbar-toggler",y=function(e){(0,l.Z)(t,e);var n=(0,c.Z)(t);function t(){return(0,r.Z)(this,t),n.apply(this,arguments)}return(0,a.Z)(t,[{key:"adjustAndStore",value:function(e,n,t){var r=n.style[e];n.dataset[e]=r,(0,d.Z)(n,(0,o.Z)({},e,"".concat(parseFloat((0,d.Z)(n,e))+t,"px")))}},{key:"restore",value:function(e,n){var t=n.dataset[e];void 0!==t&&(delete n.dataset[e],(0,d.Z)(n,(0,o.Z)({},e,t)))}},{key:"setContainerStyle",value:function(e){var n=this;(0,i.Z)((0,s.Z)(t.prototype),"setContainerStyle",this).call(this,e);var o,r,a=this.getElement();if(r="modal-open",(o=a).classList?o.classList.add(r):(0,u.Z)(o,r)||("string"===typeof o.className?o.className=o.className+" "+r:o.setAttribute("class",(o.className&&o.className.baseVal||"")+" "+r)),e.scrollBarWidth){var l=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";(0,f.Z)(a,p).forEach((function(t){return n.adjustAndStore(l,t,e.scrollBarWidth)})),(0,f.Z)(a,g).forEach((function(t){return n.adjustAndStore(c,t,-e.scrollBarWidth)})),(0,f.Z)(a,Z).forEach((function(t){return n.adjustAndStore(c,t,e.scrollBarWidth)}))}}},{key:"removeContainerStyle",value:function(e){var n=this;(0,i.Z)((0,s.Z)(t.prototype),"removeContainerStyle",this).call(this,e);var o,r,a=this.getElement();r="modal-open",(o=a).classList?o.classList.remove(r):"string"===typeof o.className?o.className=v(o.className,r):o.setAttribute("class",v(o.className&&o.className.baseVal||"",r));var l=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";(0,f.Z)(a,p).forEach((function(e){return n.restore(l,e)})),(0,f.Z)(a,g).forEach((function(e){return n.restore(c,e)})),(0,f.Z)(a,Z).forEach((function(e){return n.restore(c,e)}))}}]),t}(m.Z);function b(e){return h||(h=new y(e)),h}var E=y},80473:function(e,n,t){var o=t(18489),r=t(83738),a=t(52007),i=t.n(a),s=t(72791),l=t(81694),c=t.n(l),u=t(80184),d=["className","variant"],f={"aria-label":i().string,onClick:i().func,variant:i().oneOf(["white"])},v=s.forwardRef((function(e,n){var t=e.className,a=e.variant,i=(0,r.Z)(e,d);return(0,u.jsx)("button",(0,o.Z)({ref:n,type:"button",className:c()("btn-close",a&&"btn-close-".concat(a),t)},i))}));v.displayName="CloseButton",v.propTypes=f,v.defaultProps={"aria-label":"Close"},n.Z=v},84158:function(e,n,t){t.d(n,{Z:function(){return _}});var o,r=t(50678),a=t(83738),i=t(18489),s=t(81694),l=t.n(s),c=t(3070),u=t(97357),d=t(78376),f=t(36382);function v(e){if((!o&&0!==o||e)&&u.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),o=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return o}var h=t(72791);var m=t(52134),p=t(73201),g=t(91683),Z=t(33690),y=t(30802),b=t(28099),E=t(72709),k=t(66543),x=(0,k.Z)("modal-body"),N=t(99820),w=t(10162),C=t(80184),R=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],j=h.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,r=e.contentClassName,s=e.centered,c=e.size,u=e.fullscreen,d=e.children,f=e.scrollable,v=(0,a.Z)(e,R);t=(0,w.vE)(t,"modal");var h="".concat(t,"-dialog"),m="string"===typeof u?"".concat(t,"-fullscreen-").concat(u):"".concat(t,"-fullscreen");return(0,C.jsx)("div",(0,i.Z)((0,i.Z)({},v),{},{ref:n,className:l()(h,o,c&&"".concat(t,"-").concat(c),s&&"".concat(h,"-centered"),f&&"".concat(h,"-scrollable"),u&&m),children:(0,C.jsx)("div",{className:l()("".concat(t,"-content"),r),children:d})}))}));j.displayName="ModalDialog";var T=j,F=(0,k.Z)("modal-footer"),O=t(32086),S=["bsPrefix","className"],B=h.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,r=(0,a.Z)(e,S);return t=(0,w.vE)(t,"modal-header"),(0,C.jsx)(O.Z,(0,i.Z)((0,i.Z)({ref:n},r),{},{className:l()(o,t)}))}));B.displayName="ModalHeader",B.defaultProps={closeLabel:"Close",closeButton:!1};var L=B,A=(0,t(27472).Z)("h4"),M=(0,k.Z)("modal-title",{Component:A}),D=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],P={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:T};function H(e){return(0,C.jsx)(E.Z,(0,i.Z)((0,i.Z)({},e),{},{timeout:null}))}function W(e){return(0,C.jsx)(E.Z,(0,i.Z)((0,i.Z)({},e),{},{timeout:null}))}var I=h.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,s=e.style,E=e.dialogClassName,k=e.contentClassName,x=e.children,R=e.dialogAs,j=e["aria-labelledby"],T=e.show,F=e.animation,O=e.backdrop,S=e.keyboard,B=e.onEscapeKeyDown,L=e.onShow,A=e.onHide,M=e.container,P=e.autoFocus,I=e.enforceFocus,_=e.restoreFocus,K=e.restoreFocusOptions,z=e.onEntered,V=e.onExit,U=e.onExiting,$=e.onEnter,q=e.onEntering,G=e.onExited,J=e.backdropClassName,Q=e.manager,X=(0,a.Z)(e,D),Y=(0,h.useState)({}),ee=(0,r.Z)(Y,2),ne=ee[0],te=ee[1],oe=(0,h.useState)(!1),re=(0,r.Z)(oe,2),ae=re[0],ie=re[1],se=(0,h.useRef)(!1),le=(0,h.useRef)(!1),ce=(0,h.useRef)(null),ue=(0,h.useState)(null),de=(0,r.Z)(ue,2),fe=de[0],ve=de[1],he=(0,p.Z)(n,ve),me=(0,m.Z)(A),pe=(0,w.SC)();t=(0,w.vE)(t,"modal");var ge=(0,h.useMemo)((function(){return{onHide:me}}),[me]);function Ze(){return Q||(0,b.t)({isRTL:pe})}function ye(e){if(u.Z){var n=Ze().getScrollbarWidth()>0,t=e.scrollHeight>(0,d.Z)(e).documentElement.clientHeight;te({paddingRight:n&&!t?v():void 0,paddingLeft:!n&&t?v():void 0})}}var be=(0,m.Z)((function(){fe&&ye(fe.dialog)}));(0,g.Z)((function(){(0,f.Z)(window,"resize",be),null==ce.current||ce.current()}));var Ee=function(){se.current=!0},ke=function(e){se.current&&fe&&e.target===fe.dialog&&(le.current=!0),se.current=!1},xe=function(){ie(!0),ce.current=(0,Z.Z)(fe.dialog,(function(){ie(!1)}))},Ne=function(e){"static"!==O?le.current||e.target!==e.currentTarget?le.current=!1:null==A||A():function(e){e.target===e.currentTarget&&xe()}(e)},we=(0,h.useCallback)((function(e){return(0,C.jsx)("div",(0,i.Z)((0,i.Z)({},e),{},{className:l()("".concat(t,"-backdrop"),J,!F&&"show")}))}),[F,J,t]),Ce=(0,i.Z)((0,i.Z)({},s),ne);F||(Ce.display="block");return(0,C.jsx)(N.Z.Provider,{value:ge,children:(0,C.jsx)(y.Z,{show:T,ref:he,backdrop:O,container:M,keyboard:!0,autoFocus:P,enforceFocus:I,restoreFocus:_,restoreFocusOptions:K,onEscapeKeyDown:function(e){S||"static"!==O?S&&B&&B(e):(e.preventDefault(),xe())},onShow:L,onHide:A,onEnter:function(e,n){e&&(e.style.display="block",ye(e)),null==$||$(e,n)},onEntering:function(e,n){null==q||q(e,n),(0,c.ZP)(window,"resize",be)},onEntered:z,onExit:function(e){null==ce.current||ce.current(),null==V||V(e)},onExiting:U,onExited:function(e){e&&(e.style.display=""),null==G||G(e),(0,f.Z)(window,"resize",be)},manager:Ze(),transition:F?H:void 0,backdropTransition:F?W:void 0,renderBackdrop:we,renderDialog:function(e){return(0,C.jsx)("div",(0,i.Z)((0,i.Z)({role:"dialog"},e),{},{style:Ce,className:l()(o,t,ae&&"".concat(t,"-static")),onClick:O?Ne:void 0,onMouseUp:ke,"aria-labelledby":j,children:(0,C.jsx)(R,(0,i.Z)((0,i.Z)({},X),{},{onMouseDown:Ee,className:E,contentClassName:k,children:x}))}))}})})}));I.displayName="Modal",I.defaultProps=P;var _=Object.assign(I,{Body:x,Header:L,Title:M,Footer:F,Dialog:T,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},99820:function(e,n,t){var o=t(72791).createContext({onHide:function(){}});n.Z=o}}]);
//# sourceMappingURL=4158.bf9d27ee.chunk.js.map