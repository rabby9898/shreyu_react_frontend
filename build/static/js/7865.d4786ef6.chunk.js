"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[7865],{87865:function(e,t,r){r.r(t);var n=r(50678),s=r(89743),a=r(2677),o=r(9140),i=r(9189),c=r(11087),l=r(44330),d=r(72791),u=r(18052),x=r(21830),p=r.n(x),b=r(80184),f=[{Header:"ID",accessor:"id",sort:!0},{Header:"Code",accessor:"code",sort:!0},{Header:"Name",accessor:"name",sort:!0},{Header:"Phone",accessor:"phone",sort:!0},{Header:"Email",accessor:"email",sort:!0},{Header:"Total (USD)",accessor:"total_usd",sort:!0},{Header:"Paid",accessor:"paid",sort:!0},{Header:"Due",accessor:"due",sort:!0},{Header:"Actions",accessor:"actions",Cell:function(e){var t=e.row;return(0,b.jsxs)("div",{children:[(0,b.jsx)("button",{style:{marginRight:"4px"},onClick:function(){return m(t.original.id)},className:"btn btn-sm btn-primary",children:"Edit"}),(0,b.jsx)("button",{onClick:function(){return g(t.original.id)},className:"btn btn-sm btn-danger",children:"Delete"})]})}}],h=[{text:"5",value:5},{text:"10",value:10},{text:"25",value:25},{text:"All",value:100}],m=function(e){console.log("Edit ID:",e)},g=function(e){p().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&p().fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success"})}))};t.default=function(){var e=(0,d.useState)([]),t=(0,n.Z)(e,2),r=t[0],x=t[1];return(0,d.useEffect)((function(){(0,u.X4)().then((function(e){x(e)}))}),[]),(0,b.jsx)("div",{children:(0,b.jsx)("div",{children:(0,b.jsx)(s.Z,{children:(0,b.jsx)(a.Z,{children:(0,b.jsx)(o.Z,{children:(0,b.jsxs)(o.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Patients"}),(0,b.jsx)("p",{className:"text-muted fs-14 mb-4",children:"A table of patients"}),(0,b.jsx)(c.rU,{to:"/components/patients/create",children:(0,b.jsxs)("button",{style:{backgroundColor:"#007bff",color:"#fff",border:"none",borderRadius:"0.25rem",padding:"0.7rem 2rem",fontSize:"18px",fontWeight:"bold",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)",transition:"box-shadow 0.3s ease, transform 0.3s ease",marginTop:"22px",marginBottom:"20px"},className:"btn btn-lg",onMouseEnter:function(e){e.currentTarget.style.transform="translateY(-2px)",e.currentTarget.style.boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2)"},onMouseLeave:function(e){e.currentTarget.style.transform="translateY(0px)",e.currentTarget.style.boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"},class:"btn btn-lg createBtn",type:"submit",children:["Create ",(0,b.jsx)(l.zUF,{})]})}),(0,b.jsx)("div",{style:{marginTop:"16px"},children:(0,b.jsx)(i.Z,{columns:f,data:r,pageSize:5,sizePerPageList:h,isSortable:!0,pagination:!0,isSearchable:!0})})]})})})})})})}}}]);
//# sourceMappingURL=7865.d4786ef6.chunk.js.map