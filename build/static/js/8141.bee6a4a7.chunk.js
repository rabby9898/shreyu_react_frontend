"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[8141],{75184:function(e,a,r){r(72791);var i=r(89743),t=r(2677),s=r(2461),n=r(80184);a.Z=function(e){return(0,n.jsx)(i.Z,{children:(0,n.jsx)(t.Z,{children:(0,n.jsxs)("div",{className:"page-title-box",children:[(0,n.jsx)("h4",{className:"page-title",children:e.title}),(0,n.jsx)("div",{className:"page-title-right",children:(0,n.jsxs)(s.Z,{listProps:{className:"m-0"},children:[(0,n.jsx)(s.Z.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map((function(e,a){return e.active?(0,n.jsx)(s.Z.Item,{active:!0,children:e.label},a):(0,n.jsx)(s.Z.Item,{href:e.path,children:e.label},a)}))]})})]})})})}},48141:function(e,a,r){r.r(a);var i=r(72791),t=r(89743),s=r(2677),n=r(9140),c=r(43360),o=r(74330),l=r(75184),d=r(24506),m=r(80184),u=function(e){var a=e.pricingPlans;return(0,m.jsx)(t.Z,{children:(a||[]).map((function(e,a){return(0,m.jsx)(s.Z,{lg:4,children:(0,m.jsx)(n.Z,{className:"card-pricing",children:(0,m.jsxs)(n.Z.Body,{className:"p-4",children:[(0,m.jsxs)("div",{className:"d-flex",children:[(0,m.jsxs)("div",{className:"flex-grow-1",children:[(0,m.jsx)("h5",{className:"mt-0 mb-2 fs-16",children:e.name}),(0,m.jsxs)("h2",{className:"mt-0 mb-2",children:["$",e.price," ",(0,m.jsxs)("span",{className:"fs-14",children:["/ ",e.duration]})]})]}),(0,m.jsx)("div",{className:"align-self-center flex-shrink-0",children:(0,m.jsx)(o.Z,{icon:e.icon,className:"icon-dual icon-lg"})})]}),(0,m.jsx)("ul",{className:"card-pricing-features text-muted border-top pt-2 mt-2 ps-0 list-unstyled",children:(e.features||[]).map((function(e,a){return(0,m.jsxs)("li",{children:[(0,m.jsx)("i",{className:"uil uil-check text-success fs-15 me-1"}),e]},a)}))}),(0,m.jsx)("div",{className:"mt-5 text-center",children:(0,m.jsxs)(c.Z,{variant:e.isRecommended?"primary":"soft-primary",className:"px-sm-4",children:[(0,m.jsx)("i",{className:"uil uil-arrow-right me-1"}),"Buy Now for $",e.price]})})]})})},a)}))})};a.default=function(){return(0,m.jsxs)(i.Fragment,{children:[(0,m.jsx)(l.Z,{breadCrumbItems:[{label:"Pages",path:"/pages/pricing"},{label:"Pricing",path:"/pages/pricing",active:!0}],title:"Pricing"}),(0,m.jsx)(t.Z,{className:"justify-content-center",children:(0,m.jsxs)(s.Z,{xl:10,children:[(0,m.jsxs)("div",{className:"text-center my-4",children:[(0,m.jsx)("h3",{children:"Simple pricing for Everyone"}),(0,m.jsx)("p",{className:"text-muted",children:"Fully functional accounts are starting from $19/month only"})]}),(0,m.jsx)(u,{pricingPlans:d.dh})]})})]})}},24506:function(e,a,r){r.d(a,{NF:function(){return i},ZF:function(){return s},dh:function(){return t}});var i={invoice_id:"000028",customer:" Greeva Navadiya",notes:"All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above",invoice_date:"Jul 17, 2019",due_date:"Jul 27,2019",address:{owner:"Greeva Navadiya",line_1:"795 Folsom Ave, Suite 600",city:"San Francisco",state:"CA",zip:94107,phone:"(123) 456-7890"},items:[{id:1,name:"Web Design",description:"2 Pages static website - my website",hours:22,hour_rate:30,total:660},{id:2,name:"Software Development",description:"Invoice editor software - AB'c Software",hours:112.5,hour_rate:35,total:3937.5}],sub_total:4597.5,discount:459.75,total:4137.75},t=[{id:1,name:"Professional Pack",icon:"users",price:19,duration:"Month",features:["10 GB Storage","500 GB Bandwidth","No Domain","Email Support","24x7 Support"],isRecommended:!1},{id:2,name:"Business Pack",icon:"briefcase",price:29,duration:"Month",features:["50 GB Storage","900 GB Bandwidth","2 Domain","Email Support","24x7 Support"],isRecommended:!0},{id:3,name:"Enterprise Pack",icon:"shopping-bag",price:49,duration:"Month",features:["100 GB Storage","Unlimited Bandwidth","Unlimited Domain","Email Support","24x7 Support"],isRecommended:!1}],s=[{icon:"uil-presentation-lines-alt",title:"Why is the Site Down?",desc:"If several languages coalesce, the grammar of the resulting language is more simple."},{icon:"uil-clock-eight",title:"What is the Downtime?",desc:"Everyone realizes why a new common language would be desirable one could refuse."},{icon:"uil-envelope",title:"Do you need Support?",desc:"You need to be sure there isn't anything embar.. Please contact us via email no-reply@domain.com"}]},43360:function(e,a,r){var i=r(18489),t=r(50678),s=r(83738),n=r(81694),c=r.n(n),o=r(72791),l=r(15341),d=r(10162),m=r(80184),u=["as","bsPrefix","variant","size","active","className"],f=o.forwardRef((function(e,a){var r=e.as,n=e.bsPrefix,o=e.variant,f=e.size,h=e.active,p=e.className,x=(0,s.Z)(e,u),v=(0,d.vE)(n,"btn"),b=(0,l.FT)((0,i.Z)({tagName:r},x)),g=(0,t.Z)(b,2),N=g[0],Z=g[1].tagName;return(0,m.jsx)(Z,(0,i.Z)((0,i.Z)((0,i.Z)({},x),N),{},{ref:a,className:c()(p,v,h&&"active",o&&"".concat(v,"-").concat(o),f&&"".concat(v,"-").concat(f),x.href&&x.disabled&&"disabled")}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=f},9140:function(e,a,r){r.d(a,{Z:function(){return I}});var i=r(18489),t=r(83738),s=r(81694),n=r.n(s),c=r(72791),o=r(10162),l=r(66543),d=r(27472),m=r(80184),u=["bsPrefix","className","variant","as"],f=c.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,c=e.variant,l=e.as,d=void 0===l?"img":l,f=(0,t.Z)(e,u),h=(0,o.vE)(r,"card-img");return(0,m.jsx)(d,(0,i.Z)({ref:a,className:n()(c?"".concat(h,"-").concat(c):h,s)},f))}));f.displayName="CardImg";var h=f,p=r(96040),x=["bsPrefix","className","as"],v=c.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,l=e.as,d=void 0===l?"div":l,u=(0,t.Z)(e,x),f=(0,o.vE)(r,"card-header"),h=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return(0,m.jsx)(p.Z.Provider,{value:h,children:(0,m.jsx)(d,(0,i.Z)((0,i.Z)({ref:a},u),{},{className:n()(s,f)}))})}));v.displayName="CardHeader";var b=v,g=["bsPrefix","className","bg","text","border","body","children","as"],N=(0,d.Z)("h5"),Z=(0,d.Z)("h6"),j=(0,l.Z)("card-body"),y=(0,l.Z)("card-title",{Component:N}),w=(0,l.Z)("card-subtitle",{Component:Z}),P=(0,l.Z)("card-link",{Component:"a"}),S=(0,l.Z)("card-text",{Component:"p"}),B=(0,l.Z)("card-footer"),C=(0,l.Z)("card-img-overlay"),k=c.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,c=e.bg,l=e.text,d=e.border,u=e.body,f=e.children,h=e.as,p=void 0===h?"div":h,x=(0,t.Z)(e,g),v=(0,o.vE)(r,"card");return(0,m.jsx)(p,(0,i.Z)((0,i.Z)({ref:a},x),{},{className:n()(s,v,c&&"bg-".concat(c),l&&"text-".concat(l),d&&"border-".concat(d)),children:u?(0,m.jsx)(j,{children:f}):f}))}));k.displayName="Card",k.defaultProps={body:!1};var I=Object.assign(k,{Img:h,Title:y,Subtitle:w,Body:j,Link:P,Text:S,Header:b,Footer:B,ImgOverlay:C})},96040:function(e,a,r){var i=r(72791).createContext(null);i.displayName="CardHeaderContext",a.Z=i},27472:function(e,a,r){var i=r(18489),t=r(72791),s=r(81694),n=r.n(s),c=r(80184);a.Z=function(e){return t.forwardRef((function(a,r){return(0,c.jsx)("div",(0,i.Z)((0,i.Z)({},a),{},{ref:r,className:n()(a.className,e)}))}))}}}]);
//# sourceMappingURL=8141.bee6a4a7.chunk.js.map