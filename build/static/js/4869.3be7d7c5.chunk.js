"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[4869],{71605:function(e,s,a){a(72791);var r=a(80184);s.Z=function(){return(0,r.jsx)("div",{className:"preloader",id:"preloader",children:(0,r.jsx)("div",{className:"status",id:"status",children:(0,r.jsxs)("div",{className:"spinner",children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]})})})}},75184:function(e,s,a){a(72791);var r=a(89743),t=a(2677),n=a(2461),l=a(80184);s.Z=function(e){return(0,l.jsx)(r.Z,{children:(0,l.jsx)(t.Z,{children:(0,l.jsxs)("div",{className:"page-title-box",children:[(0,l.jsx)("h4",{className:"page-title",children:e.title}),(0,l.jsx)("div",{className:"page-title-right",children:(0,l.jsxs)(n.Z,{listProps:{className:"m-0"},children:[(0,l.jsx)(n.Z.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map((function(e,s){return e.active?(0,l.jsx)(n.Z.Item,{active:!0,children:e.label},s):(0,l.jsx)(n.Z.Item,{href:e.path,children:e.label},s)}))]})})]})})})}},57806:function(e,s,a){var r=a(18489),t=a(83738),n=(a(72791),a(34358)),l=a(80184),i=["className","style","children"];s.Z=function(e){var s=e.className,a=e.style,c=e.children,o=(0,t.Z)(e,i);return(0,l.jsx)(n.Z,(0,r.Z)((0,r.Z)({className:s,style:a},o),{},{children:c}))}},38459:function(e,s,a){a.d(s,{y:function(){return g},J:function(){return i}});var r=a(18489),t=a(72791),n=a(87705),l=a(80184),i=function(e){var s=e.defaultValues,a=e.resolver,i=e.children,c=e.onSubmit,o=e.formClass,d=(0,n.cI)({defaultValues:s,resolver:a}),m=d.handleSubmit,u=d.register,h=d.control,x=d.formState.errors;return(0,l.jsx)("form",{onSubmit:m(c),className:o,noValidate:!0,children:Array.isArray(i)?i.map((function(e){return e.props&&e.props.name?t.createElement(e.type,(0,r.Z)({},(0,r.Z)((0,r.Z)({},e.props),{},{register:u,key:e.props.name,errors:x,control:h}))):e})):i})},c=a(83738),o=a(3350),d=a(99410),m=["type","name","placeholder","register","errors","comp","rows","className","refCallback"],u=["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"],h=["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"],x=["startIcon","type","name","placeholder","comp","register","errors","rows","className","textClassName","refCallback"],f=["startIcon","label","type","name","placeholder","register","errors","control","className","labelClassName","containerClass","textClassName","refCallback","action","rows"],j=function(e){var s=e.type,a=e.name,t=e.placeholder,n=e.register,i=e.errors,d=e.comp,u=e.rows,h=e.className,x=e.refCallback,f=(0,c.Z)(e,m);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z.Control,(0,r.Z)((0,r.Z)({type:s,placeholder:t,name:a,as:d,id:a,ref:function(e){x&&x(e)},className:h,isInvalid:!(!i||!i[a])},n?n(a):{}),{},{rows:u},f)),i&&i[a]?(0,l.jsx)(o.Z.Control.Feedback,{type:"invalid",className:"d-block",children:i[a].message}):null]})},p=function(e){var s=e.type,a=e.label,t=e.name,n=(e.placeholder,e.register),i=e.errors,d=(e.comp,e.rows,e.className),m=e.refCallback,h=(0,c.Z)(e,u);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z.Check,(0,r.Z)((0,r.Z)({type:s,label:a,name:t,id:t,ref:function(e){m&&m(e)},className:d,isInvalid:!(!i||!i[t])},n?n(t):{}),h)),i&&i[t]?(0,l.jsx)(o.Z.Control.Feedback,{type:"invalid",children:i[t].message}):null]})},b=function(e){var s=e.type,a=e.label,t=e.name,n=(e.placeholder,e.register),i=e.errors,d=(e.comp,e.rows,e.className),m=e.refCallback,u=(0,c.Z)(e,h);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z.Select,(0,r.Z)((0,r.Z)({type:s,label:a,name:t,id:t,ref:function(e){m&&m(e)},className:d,isInvalid:!(!i||!i[t])},n?n(t):{}),u)),i&&i[t]?(0,l.jsx)(o.Z.Control.Feedback,{type:"invalid",children:i[t].message}):null]})},N=function(e){var s=e.startIcon,a=e.type,t=e.name,n=e.placeholder,i=e.comp,o=e.register,m=e.errors,u=e.rows,h=e.className,f=e.textClassName,p=e.refCallback,N=(0,c.Z)(e,x);return(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(d.Z.Text,{className:f,children:s}),"select"===a?(0,l.jsx)(b,(0,r.Z)({type:a,name:t,placeholder:n,refCallback:p,comp:i,errors:m,register:o,className:h,rows:u},N)):(0,l.jsx)(j,(0,r.Z)({type:a,name:t,placeholder:n,refCallback:p,comp:i,errors:m,register:o,className:h,rows:u},N))]})},g=function(e){var s=e.startIcon,a=e.label,t=e.type,n=e.name,i=e.placeholder,d=e.register,m=e.errors,u=(e.control,e.className),h=e.labelClassName,x=e.containerClass,g=e.textClassName,v=e.refCallback,Z=e.action,y=e.rows,w=(0,c.Z)(e,f),C="textarea"===t?"textarea":"select"===t?"select":"input";return(0,l.jsx)(l.Fragment,{children:"hidden"===t?(0,l.jsx)("input",(0,r.Z)((0,r.Z)({type:t,name:n},d?d(n):{}),w)):(0,l.jsx)(l.Fragment,{children:"checkbox"===t||"radio"===t?(0,l.jsx)(o.Z.Group,{className:x,children:(0,l.jsx)(p,(0,r.Z)({type:t,label:a,name:n,placeholder:i,refCallback:v,errors:m,register:d,comp:C,className:u,rows:y},w))}):"select"===t?(0,l.jsxs)(o.Z.Group,{className:x,children:[a?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z.Label,{className:h,children:a}),Z&&Z]}):null,s?(0,l.jsx)(N,(0,r.Z)({type:t,startIcon:s,name:n,comp:C,textClassName:g,placeholder:i,refCallback:v,errors:m,register:d,className:u,rows:y},w)):(0,l.jsx)(b,(0,r.Z)({type:t,name:n,placeholder:i,refCallback:v,errors:m,register:d,comp:C,className:u,rows:y},w))]}):(0,l.jsxs)(o.Z.Group,{className:x,children:[a?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z.Label,{className:h,children:a}),Z&&Z]}):null,s?(0,l.jsx)(N,(0,r.Z)({type:t,startIcon:s,name:n,comp:C,textClassName:g,placeholder:i,refCallback:v,errors:m,register:d,className:u,rows:y},w)):(0,l.jsx)(j,(0,r.Z)({type:t,name:n,placeholder:i,refCallback:v,errors:m,register:d,comp:C,className:u,rows:y},w))]})})})}},53181:function(e,s,a){a.r(s),a.d(s,{default:function(){return W}});for(var r=a(50678),t=a(72791),n=a(89743),l=a(2677),i=a(75184),c=a(31303),o=a(11087),d=a(9140),m=a(7238),u=a(81694),h=a.n(u),x=a(57806),f=a(59569),j=a(39833),p=a(85569),b=a(35002),N=a(13268),g=a(58951),v=a(68328),Z=a(90469),y=[{id:1,name:"Brandon Smith",avatar:j,lastMessage:"How are you today?",totalUnread:3,lastMessageOn:"5:30am",userStatus:"offline"},{id:2,name:"Maria C",avatar:Z,lastMessage:"Hey! a reminder for tomorrow's meeting?",totalUnread:0,lastMessageOn:"Thu",userStatus:"online"},{id:3,name:"Dominic A",avatar:g,lastMessage:"Are we going to have this week's planning meeting?",totalUnread:0,lastMessageOn:"4:30 am",userStatus:"busy"},{id:4,name:"Ronda D",avatar:v,lastMessage:"Please check these design assets..",totalUnread:0,lastMessageOn:"Wed",userStatus:"online"},{id:5,name:"Michael H",avatar:p,lastMessage:"Are you free for 15 mins? I would like to discuss something",totalUnread:25,lastMessageOn:"Tue",userStatus:"offline"},{id:6,name:"Thomas R",avatar:b,lastMessage:"Let's have meeting today between me, you and Tony...",totalUnread:0,lastMessageOn:"Tue",userStatus:"offline"},{id:7,name:"Thomas J",avatar:N,lastMessage:"How are you?",totalUnread:1,lastMessageOn:"Tue",userStatus:"offline"},{id:8,name:"Rikcy J",avatar:f,lastMessage:"Are you interested in learning?",totalUnread:0,lastMessageOn:"Mon",userStatus:"away"}],w={id:9,name:"Shreyu N",avatar:j},C=[],k=[],S=0,I=y;S<I.length;S++){var M=I[S];C.push({id:1,messages:[{type:"text",value:"Hello!"}],to:w,from:M,sendOn:"8:18 am"},{id:2,messages:[{type:"text",value:"Hi, How are you? What about our next meeting?"}],to:M,from:w,sendOn:"8:20 am"}),k.push({id:1,messages:[{type:"text",value:"Yeah everything is fine"},{type:"text",value:"Let's have it today if you are free"}],to:w,from:M,sendOn:"8:21 am"},{id:2,messages:[{type:"text",value:"Sure thing! let me know if 2pm works for you"}],to:M,from:w,sendOn:"8:25 am"},{id:3,messages:[{type:"text",value:"Sorry, I have another meeting scheduled at 2pm. Can we have it at 3pm instead?"}],to:w,from:M,sendOn:"8:26 am"},{id:4,messages:[{type:"text",value:"2pm it is. sure, we can also discuss about the presentation talk format if you have some extra mins"},{type:"text",value:"Sure, let's discuss about presentation format, it would be great to finalize today."}],to:M,from:w,sendOn:"8:27 am"},{id:5,messages:[{type:"text",value:"Ok. I am attaching the last year format and assets here...."},{type:"file",value:{file:"Shreyu-sketch.zip",size:"2.3MB"}}],to:w,from:M,sendOn:"8:32 am"})}var U=[{id:1,day:"Yesterday",messages:[].concat(C)},{id:2,day:"Today",messages:[].concat(k)}],E=a(80184),O=function(e){var s=e.onUserSelect,a=(0,t.useState)((0,c.Z)(y)),n=(0,r.Z)(a,2),l=n[0],i=n[1],u=(0,t.useState)(y[1]),f=(0,r.Z)(u,2),p=f[0],b=f[1],N=(0,t.useState)(!1),g=(0,r.Z)(N,2),v=g[0],Z=g[1],w=function(){Z(!v)};return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(d.Z,{children:(0,E.jsxs)(d.Z.Body,{children:[(0,E.jsxs)("div",{className:"d-flex pb-2 border-bottom align-items-center",children:[(0,E.jsx)("img",{src:j,className:"me-2 rounded-circle",height:"48",alt:""}),(0,E.jsx)("div",{children:(0,E.jsx)("h5",{className:"my-0 fs-14",children:"Shreyu N"})}),(0,E.jsx)("div",{className:"flex-grow-1",children:(0,E.jsx)("ul",{className:"list-inline text-end mb-0",children:(0,E.jsxs)(m.Z,{show:v,as:"li",onToggle:w,className:"list-inline-item fs-18",children:[(0,E.jsx)(m.Z.Toggle,{id:"dropdown-apps",as:"a",onClick:w,className:h()("text-dark","cursor-pointer",{show:v}),children:(0,E.jsx)("i",{className:"bi bi-three-dots-vertical"})}),(0,E.jsxs)(m.Z.Menu,{className:"dropdown-menu-end",children:[(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-people fs-16 me-2"}),"New Group"]}),(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-person-lines-fill fs-16 me-2"}),"Contacts"]}),(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-bookmark fs-16 me-2"}),"Saved Message"]}),(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-person-plus fs-16 me-2"}),"Invite Friends"]}),(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-question-circle fs-16 me-2"}),"Help"]}),(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-gear fs-16 me-2"}),"Setting"]})]})]})})})]}),(0,E.jsx)("div",{children:(0,E.jsx)("form",{className:"chat-search",children:(0,E.jsx)("div",{className:"chat-search-box",children:(0,E.jsxs)("div",{className:"input-group",children:[(0,E.jsx)("button",{className:"btn input-group-text",type:"submit",children:(0,E.jsx)("i",{className:"uil uil-search"})}),(0,E.jsx)("input",{type:"search",className:"form-control",placeholder:"Search...",id:"top-search",onKeyUp:function(e){return s=e.target.value,void i(s?(0,c.Z)(y).filter((function(e){return e.name.toLowerCase().indexOf(s.toLowerCase())>=0})):(0,c.Z)(y));var s}})]})})})}),(0,E.jsx)("div",{className:"pe-2",children:(0,E.jsx)(x.Z,{style:{height:"549px",width:"100%"},children:(l||[]).map((function(e,a){return(0,E.jsx)(o.rU,{to:"#",className:"text-body",onClick:function(a){!function(e){b(e),s&&s(e)}(e)},children:(0,E.jsxs)("div",{className:h()("d-flex","align-items-start","p-2",{"bg-light":e.id===p.id}),children:[(0,E.jsxs)("div",{className:"position-relative",children:[(0,E.jsx)("span",{className:h()("user-status",{"bg-success":"online"===e.userStatus,"bg-danger":"busy"===e.userStatus,"bg-warning":"away"===e.userStatus})}),(0,E.jsx)("img",{src:e.avatar,className:"me-2 rounded-circle",height:"48",alt:""})]}),(0,E.jsxs)("div",{className:"w-100 overflow-hidden",children:[(0,E.jsxs)("h5",{className:"mt-0 mb-0 fs-14",children:[(0,E.jsx)("span",{className:"float-end text-muted fs-12",children:e.lastMessageOn}),e.name]}),(0,E.jsxs)("p",{className:"mt-1 mb-0 text-muted fs-14",children:[0!==e.totalUnread&&(0,E.jsx)("span",{className:"float-end badge bg-danger text-white",children:e.totalUnread}),(0,E.jsx)("span",{className:h()("w-75",{"text-dark":e.totalUnread}),children:e.lastMessage})]})]})]})},a)}))})})]})})})},T=a(87705),H=a(81724),R=a(61265),F=a(38459),P=a(71605),D=a(84158),L=a(17858),B=function(e){var s=e.show,a=e.handleClose,i=(0,t.useState)(!1),c=(0,r.Z)(i,2),m=c[0],u=c[1],h=(0,t.useState)(!1),x=(0,r.Z)(h,2),f=x[0],j=x[1];return(0,E.jsx)(D.Z,{centered:!0,show:s,onHide:a,children:(0,E.jsxs)("div",{className:" m-2",children:[(0,E.jsx)(D.Z.Header,{closeButton:!0}),(0,E.jsx)("div",{className:"text-center mb-3",children:(0,E.jsx)("img",{src:b,className:"rounded-circle avatar-lg",height:"48",alt:"Rhonda D"})}),(0,E.jsx)("div",{className:"text-center mb-3",children:(0,E.jsx)("h5",{className:"mt-0 mb-0 fs-18",children:"Rhonda D"})}),(0,E.jsxs)("div",{className:"text-center mb-3",children:[(0,E.jsx)("div",{className:"avatar-sm fw-bold d-inline-block me-2","data-bs-toggle":"modal","data-bs-target":"#voicecall","data-bs-dismiss":"modal",children:(0,E.jsx)(o.rU,{to:"$",className:"avatar-title rounded-circle border border-secondary text-dark",children:(0,E.jsx)("i",{className:"bi bi-telephone"})})}),(0,E.jsx)("div",{className:"avatar-sm fw-bold d-inline-block me-2","data-bs-toggle":"modal","data-bs-target":"#videocall","data-bs-dismiss":"modal",children:(0,E.jsx)(o.rU,{to:"$",className:"avatar-title rounded-circle border border-secondary text-dark",children:(0,E.jsx)("i",{className:"bi bi-camera-video"})})}),(0,E.jsx)("div",{className:"avatar-sm fw-bold d-inline-block me-2","data-bs-dismiss":"modal","aria-label":"Close",children:(0,E.jsx)(o.rU,{to:"$",className:"avatar-title rounded-circle border border-secondary text-dark",children:(0,E.jsx)("i",{className:"bi bi-chat-left-dots"})})})]}),(0,E.jsx)(D.Z.Body,{children:(0,E.jsxs)("div",{className:"accordion custom-accordionwitharrow",children:[(0,E.jsxs)(d.Z,{className:"mb-1 shadow-none border-0",children:[(0,E.jsx)(o.rU,{to:"#",onClick:function(){return u(!m)},className:"text-dark",children:(0,E.jsx)(d.Z.Header,{className:"border-0",children:(0,E.jsxs)("h5",{className:"m-0 fs-16",children:["About",(0,E.jsx)("i",{className:"uil uil-angle-down float-end accordion-arrow"})]})})}),(0,E.jsx)(L.Z,{in:m,children:(0,E.jsx)("div",{children:(0,E.jsx)(d.Z.Body,{className:"pt-0 text-muted",children:(0,E.jsxs)(n.Z,{children:[(0,E.jsxs)(l.Z,{xs:4,className:"p-2",children:[(0,E.jsx)("i",{className:"bi bi-telephone fs-18 me-2"}),"Phone"]}),(0,E.jsx)(l.Z,{xs:8,className:"p-2 border-bottom",children:"(415) 281 - 1649"}),(0,E.jsxs)(l.Z,{xs:4,className:"p-2",children:[(0,E.jsx)("i",{className:"bi bi-envelope fs-18 me-2"}),"Email"]}),(0,E.jsx)(l.Z,{xs:8,className:"p-2 border-bottom",children:"shreyu.abc@gmail.com"})]})})})})]}),(0,E.jsxs)(d.Z,{className:"mb-1 shadow-none border-0",children:[(0,E.jsx)(o.rU,{to:"#",onClick:function(){return j(!f)},className:"text-dark",children:(0,E.jsx)(d.Z.Header,{className:"border-0",children:(0,E.jsxs)("h5",{className:"m-0 fs-16",children:["Media, Links and Docs",(0,E.jsx)("i",{className:"uil uil-angle-down float-end accordion-arrow"})]})})}),(0,E.jsx)(L.Z,{in:f,children:(0,E.jsx)("div",{children:(0,E.jsxs)(d.Z.Body,{className:"pt-0 text-muted",children:[(0,E.jsx)("div",{className:"d-inline-block me-2",children:(0,E.jsx)("i",{className:"bi bi-file-earmark-pdf h2"})}),(0,E.jsx)("div",{className:"d-inline-block me-2",children:(0,E.jsx)("i",{className:"bi bi-file-earmark-word h2"})}),(0,E.jsx)("div",{className:"d-inline-block me-2",children:(0,E.jsx)("i",{className:"bi bi-images h2"})}),(0,E.jsx)("div",{className:"d-inline-block me-2",children:(0,E.jsx)("i",{className:"bi bi-file-earmark-ppt h2"})})]})})})]})]})})]})})},A=function(e){var s=e.show,a=e.handleClose;return(0,E.jsxs)(D.Z,{centered:!0,size:"sm",show:s,onHide:a,contentClassName:"video-call",children:[(0,E.jsx)(D.Z.Header,{className:"mb-5 justify-content-end",children:(0,E.jsx)("div",{className:"video-call-head",children:(0,E.jsx)("img",{src:j,className:"rounded",alt:"Rhonda D"})})}),(0,E.jsx)(D.Z.Body,{children:(0,E.jsx)("div",{className:"video-call-action text-center pt-4 pb-2",children:(0,E.jsxs)("ul",{className:"list-inline",children:[(0,E.jsx)("li",{className:"list-inline-item avatar-sm fw-bold me-2",children:(0,E.jsx)(o.rU,{to:"#",className:"avatar-title rounded-circle bg-soft-light text-white fs-16",children:(0,E.jsx)("i",{className:"bi bi-mic-mute"})})}),(0,E.jsx)("li",{className:"list-inline-item avatar fw-bold me-2",children:(0,E.jsx)(o.rU,{to:"#",className:"avatar-title rounded-circle bg-danger text-white fs-18",children:(0,E.jsx)("i",{className:"bi bi-telephone","data-bs-dismiss":"modal"})})}),(0,E.jsx)("li",{className:"list-inline-item avatar-sm fw-bold",children:(0,E.jsx)(o.rU,{to:"#",className:"avatar-title rounded-circle bg-soft-light text-white fs-16",children:(0,E.jsx)("i",{className:"bi bi-camera-video"})})})]})})})]})},V=function(e){var s=e.show,a=e.handleClose;return(0,E.jsxs)(D.Z,{centered:!0,size:"sm",show:s,onHide:a,contentClassName:"voice-call",children:[(0,E.jsx)(D.Z.Header,{className:"mt-5 justify-content-center",children:(0,E.jsx)("div",{className:"voice-call-head",children:(0,E.jsx)("img",{src:j,className:"rounded-circle",alt:""})})}),(0,E.jsxs)(D.Z.Body,{className:"pt-0 text-center",children:[(0,E.jsx)("p",{className:"mb-5",children:"Calling..."}),(0,E.jsx)("div",{className:"voice-call-action pt-4 pb-2",children:(0,E.jsxs)("ul",{className:"list-inline",children:[(0,E.jsx)("li",{className:"list-inline-item avatar-sm fw-bold me-2",children:(0,E.jsx)(o.rU,{to:"#",className:"avatar-title rounded-circle bg-soft-secondary text-dark fs-16",children:(0,E.jsx)("i",{className:"bi bi-mic-mute"})})}),(0,E.jsx)("li",{className:"list-inline-item avatar fw-bold me-2","data-bs-dismiss":"modal",children:(0,E.jsx)(o.rU,{to:"#",className:"avatar-title rounded-circle bg-danger text-white fs-18",children:(0,E.jsx)("i",{className:"bi bi-telephone"})})}),(0,E.jsx)("li",{className:"list-inline-item avatar-sm fw-bold",children:(0,E.jsx)(o.rU,{to:"#",className:"avatar-title rounded-circle bg-soft-secondary text-dark fs-16",children:(0,E.jsx)("i",{className:"bi bi-volume-up"})})})]})})]})]})},z=function(e){var s=e.selectedUser,a=(0,t.useState)(!1),n=(0,r.Z)(a,2),l=n[0],i=n[1],c=(0,t.useState)(!1),o=(0,r.Z)(c,2),d=o[0],u=o[1],h=(0,t.useState)(!1),x=(0,r.Z)(h,2),f=x[0],j=x[1];return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("div",{className:"d-flex pb-2 border-bottom align-items-center",children:[(0,E.jsx)("img",{src:s.avatar,className:"me-2 rounded-circle",height:"48",alt:""}),(0,E.jsxs)("div",{children:[(0,E.jsx)("h5",{className:"mt-0 mb-0 fs-14",children:s.name}),(0,E.jsx)("p",{className:"mb-0",children:"Online"})]}),(0,E.jsx)("div",{className:"flex-grow-1",children:(0,E.jsxs)("ul",{className:"list-inline float-end mb-0",children:[(0,E.jsx)(m.Z,{as:"li",className:"list-inline-item fs-18 me-3",children:(0,E.jsx)(m.Z.Toggle,{id:"dropdown-apps",as:"a",className:"cursor-pointer text-dark",children:(0,E.jsx)("i",{className:"bi bi-telephone-plus",onClick:function(){return j(!0)}})})}),(0,E.jsx)(m.Z,{as:"li",className:"list-inline-item fs-18 me-3",children:(0,E.jsx)(m.Z.Toggle,{id:"dropdown-apps",as:"a",className:"cursor-pointer text-dark",children:(0,E.jsx)("i",{className:"bi bi-camera-video",onClick:function(){return u(!0)}})})}),(0,E.jsxs)(m.Z,{as:"li",className:"list-inline-item fs-18",children:[(0,E.jsx)(m.Z.Toggle,{id:"dropdown-apps",as:"a",className:"cursor-pointer text-dark",children:(0,E.jsx)("i",{className:"bi bi-three-dots-vertical"})}),(0,E.jsxs)(m.Z.Menu,{className:"dropdown-menu-end",children:[(0,E.jsxs)(m.Z.Item,{href:"#/",onClick:function(){return i(!0)},children:[" ",(0,E.jsx)("i",{className:"bi bi-person-circle fs-18 me-2"}),"View Profile"]}),(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-music-note-list fs-18 me-2"}),"Media, Links and Docs"]}),(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-search fs-18 me-2"}),"Search"]}),(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-image fs-18 me-2"}),"Wallpaper"]}),(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-arrow-right-circle fs-18 me-2"}),"More"]})]})]})]})})]}),(0,E.jsx)(B,{show:l,handleClose:function(){return i(!1)}}),(0,E.jsx)(A,{show:d,handleClose:function(){return u(!1)}}),(0,E.jsx)(V,{show:f,handleClose:function(){return j(!1)}})]})},_=function(e){var s=e.message,a=e.toUser;return(0,E.jsx)(E.Fragment,{children:(s.messages||[]).map((function(e,r){return(0,E.jsx)("li",{className:h()("clearfix",{odd:s.from.id===a.id,"mb-1":s.messages.length>1&&r!==s.messages.length-1}),children:(0,E.jsxs)("div",{className:"conversation-text ms-0",children:[(0,E.jsxs)("div",{className:h()("d-flex",{"justify-content-end":s.from.id===a.id}),children:[s.from.id===a.id&&(0,E.jsxs)(m.Z,{className:"conversation-actions",children:[(0,E.jsx)(m.Z.Toggle,{as:"a",className:"cursor-pointer text-dark pe-1",children:(0,E.jsx)("i",{className:"bi bi-three-dots-vertical fs-14"})}),(0,E.jsxs)(m.Z.Menu,{align:"end",children:[(0,E.jsxs)(m.Z.Item,{children:[(0,E.jsx)("i",{className:"bi bi-reply fs-18 me-2"}),"Reply"]}),(0,E.jsxs)(m.Z.Item,{children:[(0,E.jsx)("i",{className:"bi bi-star fs-18 me-2"}),"Reply"]}),(0,E.jsxs)(m.Z.Item,{children:[(0,E.jsx)("i",{className:"bi bi-trash fs-18 me-2"}),"Delete"]}),(0,E.jsxs)(m.Z.Item,{children:[(0,E.jsx)("i",{className:"bi bi-files fs-18 me-2"}),"Copy"]})]})]}),"text"===e.type&&(0,E.jsx)("div",{className:"ctext-wrap",children:(0,E.jsx)("p",{children:e.value})}),"file"===e.type&&(0,E.jsx)(d.Z,{className:"mb-1 shadow-none border text-start",children:(0,E.jsx)("div",{className:"p-2",children:(0,E.jsxs)(n.Z,{className:"align-items-center",children:[(0,E.jsx)(l.Z,{className:"col-auto",children:(0,E.jsx)("div",{className:"avatar-sm bg-primary text-white",children:(0,E.jsx)("span",{className:"avatar-title rounded",children:".ZIP"})})}),(0,E.jsxs)(l.Z,{className:"ps-0",children:[(0,E.jsx)(o.rU,{to:"#",className:"text-muted fw-bold",children:e.value.file}),(0,E.jsx)("p",{className:"mb-0",children:e.value.size})]}),(0,E.jsx)(l.Z,{className:"col-auto",children:(0,E.jsx)(o.rU,{to:"#",className:"ps-3 fs-24",children:(0,E.jsx)("i",{className:"bi bi-arrow-down-square"})})})]})})}),s.from.id!==a.id&&(0,E.jsxs)(m.Z,{className:"conversation-actions",children:[(0,E.jsx)(m.Z.Toggle,{as:"a",className:"cursor-pointer text-dark ps-1",children:(0,E.jsx)("i",{className:"bi bi-three-dots-vertical fs-14"})}),(0,E.jsxs)(m.Z.Menu,{align:"start",children:[(0,E.jsxs)(m.Z.Item,{children:[(0,E.jsx)("i",{className:"bi bi-reply fs-18 me-2"}),"Reply"]}),(0,E.jsxs)(m.Z.Item,{children:[(0,E.jsx)("i",{className:"bi bi-star fs-18 me-2"}),"Reply"]}),(0,E.jsxs)(m.Z.Item,{children:[(0,E.jsx)("i",{className:"bi bi-trash fs-18 me-2"}),"Delete"]}),(0,E.jsxs)(m.Z.Item,{children:[(0,E.jsx)("i",{className:"bi bi-files fs-18 me-2"}),"Copy"]})]})]})]}),r===s.messages.length-1&&(0,E.jsxs)("p",{className:"text-muted fs-12 mb-0 mt-1",children:[s.sendOn,s.from.id===a.id&&(0,E.jsx)("i",{className:"bi bi-check2-all ms-1 text-success"})]})]})},r)}))})},G=function(e){var s=e.selectedUser,a=(0,t.useState)(!1),n=(0,r.Z)(a,2),l=n[0],i=n[1],m=(0,t.useState)([]),u=(0,r.Z)(m,2),h=u[0],f=u[1],p=(0,t.useState)({id:9,name:"Shreyu N",avatar:j}),b=(0,r.Z)(p,1)[0],N=(0,t.useCallback)((function(){s&&(i(!0),setTimeout((function(){var e=(0,c.Z)(U).map((function(e){return{id:e.id,day:e.day,messages:(0,c.Z)(e.messages).filter((function(e){return e.to.id===b.id&&e.from.id===s.id||b.id===e.from.id&&e.to.id===s.id}))}}));f((0,c.Z)(e)),i(!1)}),750))}),[s,b.id]);(0,t.useEffect)((function(){N()}),[N]);var g=(0,R.X)(H.Ry().shape({newMessage:H.Z_().required("Please enter your messsage")})),v=(0,T.cI)({resolver:g}),Z=v.handleSubmit,y=v.register,w=v.control,C=v.formState.errors,k=v.reset;return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(d.Z,{children:(0,E.jsxs)(d.Z.Body,{children:[l&&(0,E.jsx)(P.Z,{}),(0,E.jsx)(z,{selectedUser:s}),(0,E.jsxs)("div",{className:"mt-1",children:[(0,E.jsx)(x.Z,{style:{height:"509px",width:"100%"},children:(0,E.jsx)("ul",{className:"conversation-list px-0 h-100",children:(h||[]).map((function(e,s){return(0,E.jsxs)(t.Fragment,{children:[(0,E.jsxs)("li",{className:"position-relative",children:[(0,E.jsx)("hr",{}),(0,E.jsx)("h4",{children:(0,E.jsx)("span",{className:"badge bg-light text-dark position-absolute top-0 start-50 translate-middle",children:e.day})})]}),(e.messages||[]).map((function(e,s){return(0,E.jsx)(_,{message:e,toUser:b},s)}))]},s)}))})}),(0,E.jsx)("div",{className:"mt-2 bg-light p-3 rounded",children:(0,E.jsx)("form",{noValidate:!0,name:"chat-form",id:"chat-form",onSubmit:Z((function(e){var a=(0,c.Z)(h[h.length-1].messages);a.push({id:h[h.length-1].messages.length+1,from:b,to:s,messages:[{type:"text",value:e.newMessage}],sendOn:(new Date).getHours()+":"+(new Date).getMinutes()});var r=(0,c.Z)(h).map((function(e,s){return{id:e.id,day:e.day,messages:s===h.length-1?a:e.messages}}));f((0,c.Z)(r)),k()})),children:(0,E.jsxs)("div",{className:"row",children:[(0,E.jsx)("div",{className:"col mb-2 mb-sm-0",children:(0,E.jsx)(F.y,{type:"text",name:"newMessage",className:"border-0",placeholder:"Enter your text",register:y,errors:C,control:w},"newMessage")}),(0,E.jsx)("div",{className:"col-sm-auto",children:(0,E.jsxs)("div",{className:"btn-group",children:[(0,E.jsx)(o.rU,{to:"#",className:"btn btn-light",children:(0,E.jsx)("i",{className:"bi bi-emoji-smile fs-18"})}),(0,E.jsx)(o.rU,{to:"#",className:"btn btn-light",children:(0,E.jsx)("i",{className:"bi bi-paperclip fs-18"})}),(0,E.jsx)(o.rU,{to:"#",className:"btn btn-light",children:(0,E.jsx)("i",{className:"bi bi-camera fs-18"})}),(0,E.jsx)("button",{type:"submit",className:"btn btn-success chat-send",children:(0,E.jsx)("i",{className:"uil uil-message"})})]})})]})})})]})]})})})},W=function(){var e=(0,t.useState)(y[1]),s=(0,r.Z)(e,2),a=s[0],c=s[1];return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(i.Z,{breadCrumbItems:[{label:"Apps",path:"/apps/chat"},{label:"Chat",path:"/apps/chat",active:!0}],title:"Chat"}),(0,E.jsxs)(n.Z,{children:[(0,E.jsx)(l.Z,{lg:5,xxl:3,children:(0,E.jsx)(O,{onUserSelect:function(e){c(e)}})}),(0,E.jsx)(l.Z,{lg:7,xxl:9,children:(0,E.jsx)(G,{selectedUser:a})})]})]})}},91683:function(e,s,a){a.d(s,{Z:function(){return t}});var r=a(72791);function t(e){var s=function(e){var s=(0,r.useRef)(e);return s.current=e,s}(e);(0,r.useEffect)((function(){return function(){return s.current()}}),[])}},90183:function(e,s,a){a.d(s,{Z:function(){return i}});var r=a(50678),t=a(78376),n=a(72791),l=function(e){var s;return"undefined"===typeof document?null:null==e?(0,t.Z)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(s=e)&&s.nodeType&&e||null)};function i(e,s){var a=(0,n.useState)((function(){return l(e)})),t=(0,r.Z)(a,2),i=t[0],c=t[1];if(!i){var o=l(e);o&&c(o)}return(0,n.useEffect)((function(){s&&i&&s(i)}),[s,i]),(0,n.useEffect)((function(){var s=l(e);s!==i&&c(s)}),[e,i]),i}},6755:function(e,s,a){function r(e,s){return e.classList?!!s&&e.classList.contains(s):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+s+" ")}a.d(s,{Z:function(){return r}})},9140:function(e,s,a){a.d(s,{Z:function(){return U}});var r=a(18489),t=a(83738),n=a(81694),l=a.n(n),i=a(72791),c=a(10162),o=a(66543),d=a(27472),m=a(80184),u=["bsPrefix","className","variant","as"],h=i.forwardRef((function(e,s){var a=e.bsPrefix,n=e.className,i=e.variant,o=e.as,d=void 0===o?"img":o,h=(0,t.Z)(e,u),x=(0,c.vE)(a,"card-img");return(0,m.jsx)(d,(0,r.Z)({ref:s,className:l()(i?"".concat(x,"-").concat(i):x,n)},h))}));h.displayName="CardImg";var x=h,f=a(96040),j=["bsPrefix","className","as"],p=i.forwardRef((function(e,s){var a=e.bsPrefix,n=e.className,o=e.as,d=void 0===o?"div":o,u=(0,t.Z)(e,j),h=(0,c.vE)(a,"card-header"),x=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:h}}),[h]);return(0,m.jsx)(f.Z.Provider,{value:x,children:(0,m.jsx)(d,(0,r.Z)((0,r.Z)({ref:s},u),{},{className:l()(n,h)}))})}));p.displayName="CardHeader";var b=p,N=["bsPrefix","className","bg","text","border","body","children","as"],g=(0,d.Z)("h5"),v=(0,d.Z)("h6"),Z=(0,o.Z)("card-body"),y=(0,o.Z)("card-title",{Component:g}),w=(0,o.Z)("card-subtitle",{Component:v}),C=(0,o.Z)("card-link",{Component:"a"}),k=(0,o.Z)("card-text",{Component:"p"}),S=(0,o.Z)("card-footer"),I=(0,o.Z)("card-img-overlay"),M=i.forwardRef((function(e,s){var a=e.bsPrefix,n=e.className,i=e.bg,o=e.text,d=e.border,u=e.body,h=e.children,x=e.as,f=void 0===x?"div":x,j=(0,t.Z)(e,N),p=(0,c.vE)(a,"card");return(0,m.jsx)(f,(0,r.Z)((0,r.Z)({ref:s},j),{},{className:l()(n,p,i&&"bg-".concat(i),o&&"text-".concat(o),d&&"border-".concat(d)),children:u?(0,m.jsx)(Z,{children:h}):h}))}));M.displayName="Card",M.defaultProps={body:!1};var U=Object.assign(M,{Img:x,Title:y,Subtitle:w,Body:Z,Link:C,Text:k,Header:b,Footer:S,ImgOverlay:I})},96040:function(e,s,a){var r=a(72791).createContext(null);r.displayName="CardHeaderContext",s.Z=r},17858:function(e,s,a){a.d(s,{Z:function(){return y}});var r=a(18489),t=a(83738),n=a(36222),l=a(81694),i=a.n(l),c=a(75427),o=a(72791),d=a(29334),m=a(71380);var u,h=function(){for(var e=arguments.length,s=new Array(e),a=0;a<e;a++)s[a]=arguments[a];return s.filter((function(e){return null!=e})).reduce((function(e,s){if("function"!==typeof s)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?s:function(){for(var a=arguments.length,r=new Array(a),t=0;t<a;t++)r[t]=arguments[t];e.apply(this,r),s.apply(this,r)}}),null)},x=a(67202),f=a(85007),j=a(80184),p=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],b={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function N(e,s){var a=s["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],r=b[e];return a+parseInt((0,c.Z)(s,r[0]),10)+parseInt((0,c.Z)(s,r[1]),10)}var g=(u={},(0,n.Z)(u,d.Wj,"collapse"),(0,n.Z)(u,d.Ix,"collapsing"),(0,n.Z)(u,d.d0,"collapsing"),(0,n.Z)(u,d.cn,"collapse show"),u),v={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:N},Z=o.forwardRef((function(e,s){var a=e.onEnter,n=e.onEntering,l=e.onEntered,c=e.onExit,d=e.onExiting,u=e.className,b=e.children,v=e.dimension,Z=void 0===v?"height":v,y=e.getDimensionValue,w=void 0===y?N:y,C=(0,t.Z)(e,p),k="function"===typeof Z?Z():Z,S=(0,o.useMemo)((function(){return h((function(e){e.style[k]="0"}),a)}),[k,a]),I=(0,o.useMemo)((function(){return h((function(e){var s="scroll".concat(k[0].toUpperCase()).concat(k.slice(1));e.style[k]="".concat(e[s],"px")}),n)}),[k,n]),M=(0,o.useMemo)((function(){return h((function(e){e.style[k]=null}),l)}),[k,l]),U=(0,o.useMemo)((function(){return h((function(e){e.style[k]="".concat(w(k,e),"px"),(0,x.Z)(e)}),c)}),[c,w,k]),E=(0,o.useMemo)((function(){return h((function(e){e.style[k]=null}),d)}),[k,d]);return(0,j.jsx)(f.Z,(0,r.Z)((0,r.Z)({ref:s,addEndListener:m.Z},C),{},{"aria-expanded":C.role?C.in:null,onEnter:S,onEntering:I,onEntered:M,onExit:U,onExiting:E,childRef:b.ref,children:function(e,s){return o.cloneElement(b,(0,r.Z)((0,r.Z)({},s),{},{className:i()(u,b.props.className,g[e],"width"===k&&"collapse-horizontal")}))}}))}));Z.defaultProps=v;var y=Z},72709:function(e,s,a){var r,t=a(18489),n=a(83738),l=a(36222),i=a(81694),c=a.n(i),o=a(72791),d=a(29334),m=a(71380),u=a(67202),h=a(85007),x=a(80184),f=["className","children","transitionClasses"],j=(r={},(0,l.Z)(r,d.d0,"show"),(0,l.Z)(r,d.cn,"show"),r),p=o.forwardRef((function(e,s){var a=e.className,r=e.children,l=e.transitionClasses,i=void 0===l?{}:l,d=(0,n.Z)(e,f),p=(0,o.useCallback)((function(e,s){(0,u.Z)(e),null==d.onEnter||d.onEnter(e,s)}),[d]);return(0,x.jsx)(h.Z,(0,t.Z)((0,t.Z)({ref:s,addEndListener:m.Z},d),{},{onEnter:p,childRef:r.ref,children:function(e,s){return o.cloneElement(r,(0,t.Z)((0,t.Z)({},s),{},{className:c()("fade",a,r.props.className,j[e],i[e])}))}}))}));p.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},p.displayName="Fade",s.Z=p},27472:function(e,s,a){var r=a(18489),t=a(72791),n=a(81694),l=a.n(n),i=a(80184);s.Z=function(e){return t.forwardRef((function(s,a){return(0,i.jsx)("div",(0,r.Z)((0,r.Z)({},s),{},{ref:a,className:l()(s.className,e)}))}))}}}]);
//# sourceMappingURL=4869.3be7d7c5.chunk.js.map