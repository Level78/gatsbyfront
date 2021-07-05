(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"2WyB":function(e,t,a){"use strict";a.d(t,"a",(function(){return V}));var i=a("q1tI"),n=a.n(i),r=a("41Hj"),o=a("zLVn"),l=a("iuhU"),s=a("R/WZ"),c=a("tr08"),d=a("lopY"),u=a("tRbT"),m=a("tVbE"),p=a("IsqK"),b=a("Jc4N"),g=Object(s.a)((function(e){var t;return{fontWeightBold:{fontWeight:"bold"},faqTitle:(t={display:"block",marginBottom:e.spacing(1)},t[e.breakpoints.up("md")]={marginBottom:e.spacing(2)},t)}})),f=function(e){var t=e.data,a=e.className,i=Object(o.a)(e,["data","className"]),r=g(),s=Object(c.a)(),f=Object(d.a)(s.breakpoints.up("md"),{defaultMatches:!0});return n.a.createElement("div",Object.assign({className:a},i),n.a.createElement(b.e,{title:"Frequently asked questions",titleProps:{className:r.fontWeightBold}}),n.a.createElement(u.a,{container:!0,spacing:f?4:0},t.map((function(e,t){return n.a.createElement(u.a,{item:!0,xs:12,sm:6,md:4,key:t},n.a.createElement(m.a,{disableGutters:!0,key:t,"data-aos":"fade-up"},n.a.createElement(p.a,{primary:e.title,secondary:e.text,primaryTypographyProps:{variant:"h6",className:Object(l.a)(r.fontWeightBold,r.faqTitle)},secondaryTypographyProps:{variant:"subtitle1",color:"textPrimary"}})))}))))},h=a("ofer"),y=a("Z3vd"),v=a("wx14"),O=a("Ff2n");a("TOwV");function k(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}var E=a("H2TA"),x=a("NqtD"),j=i.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,o=e.exclusive,s=void 0!==o&&o,c=e.onChange,d=e.orientation,u=void 0===d?"horizontal":d,m=e.size,p=void 0===m?"medium":m,b=e.value,g=Object(O.a)(e,["children","classes","className","exclusive","onChange","orientation","size","value"]),f=function(e,t){if(c){var a,i=b&&b.indexOf(t);b&&i>=0?(a=b.slice()).splice(i,1):a=b?b.concat(t):[t],c(e,a)}},h=function(e,t){c&&c(e,b===t?null:t)};return i.createElement("div",Object(v.a)({role:"group",className:Object(l.a)(n.root,r,"vertical"===u&&n.vertical),ref:t},g),i.Children.map(a,(function(e){return i.isValidElement(e)?i.cloneElement(e,{className:Object(l.a)(n.grouped,n["grouped".concat(Object(x.a)(u))],e.props.className),onChange:s?h:f,selected:void 0===e.props.selected?k(e.props.value,b):e.props.selected,size:e.props.size||p}):null})))})),C=Object(E.a)((function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},vertical:{flexDirection:"column"},grouped:{},groupedHorizontal:{"&:not(:first-child)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-child)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}}),{name:"MuiToggleButtonGroup"})(j),N=a("ye/S"),T=a("VD++"),w=i.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,o=e.disabled,s=void 0!==o&&o,c=e.disableFocusRipple,d=void 0!==c&&c,u=e.onChange,m=e.onClick,p=e.selected,b=e.size,g=void 0===b?"medium":b,f=e.value,h=Object(O.a)(e,["children","classes","className","disabled","disableFocusRipple","onChange","onClick","selected","size","value"]);return i.createElement(T.a,Object(v.a)({className:Object(l.a)(n.root,r,s&&n.disabled,p&&n.selected,"medium"!==g&&n["size".concat(Object(x.a)(g))]),disabled:s,focusRipple:!d,ref:t,onClick:function(e){m&&(m(e,f),e.isDefaultPrevented())||u&&u(e,f)},onChange:u,value:f,"aria-pressed":p},h),i.createElement("span",{className:n.label},a))})),R=Object(E.a)((function(e){return{root:Object(v.a)({},e.typography.button,{boxSizing:"border-box",borderRadius:e.shape.borderRadius,padding:11,border:"1px solid ".concat(Object(N.c)(e.palette.action.active,.12)),color:Object(N.c)(e.palette.action.active,.38),"&$selected":{color:e.palette.action.active,backgroundColor:Object(N.c)(e.palette.action.active,.12),"&:hover":{backgroundColor:Object(N.c)(e.palette.action.active,.15)},"& + &":{borderLeft:0,marginLeft:0}},"&$disabled":{color:Object(N.c)(e.palette.action.disabled,.12)},"&:hover":{textDecoration:"none",backgroundColor:Object(N.c)(e.palette.text.primary,.05),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}}}),disabled:{},selected:{},label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},sizeSmall:{padding:7,fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:15,fontSize:e.typography.pxToRem(15)}}}),{name:"MuiToggleButton"})(w),B=a("kbOB"),S=Object(s.a)((function(e){var t;return{pagePaddingTop:(t={paddingTop:e.spacing(3)},t[e.breakpoints.up("md")]={paddingTop:e.spacing(5)},t),sectionContainer:{backgroundColor:e.palette.primary.dark,paddingBottom:e.spacing(20),borderRadius:"0 0 100% 0"},textWhite:{color:"white"},fontWeightBold:{fontWeight:"bold"},toggleContainer:{display:"flex",justifyContent:"center",margin:e.spacing(0,2)},toggleButtonGroup:{background:"transparent"},toggleButton:{background:"transparent",border:"1px solid white",padding:e.spacing(1,5)},toggleButtonActive:{backgroundColor:"white !important"},toggleTitle:{textTransform:"capitalize"},toggleTitleActive:{color:e.palette.primary.main},pricingContainer:{position:"relative",marginTop:e.spacing(-20)},sectionNoPaddingTop:{paddingTop:0},cardPricing:{"& .countup-number__count-wrapper":{textAlign:"left",marginBottom:0,fontWeight:"bold"}}}})),L=function(e){var t=e.data,a=e.className,i=Object(o.a)(e,["data","className"]),s=S(),m=Object(c.a)(),p=Object(d.a)(m.breakpoints.up("md"),{defaultMatches:!0}),g=n.a.useState("annual"),f=g[0],v=g[1];return n.a.createElement("div",Object.assign({className:a},i),n.a.createElement("div",{className:s.sectionContainer},n.a.createElement(r.u,{narrow:!0,className:s.pagePaddingTop},n.a.createElement(n.a.Fragment,null,n.a.createElement(b.e,{title:"Pricing",subtitle:"We are founded by a leading academic and researcher in the field of Industrial Systems Engineering. ",titleProps:{className:Object(l.a)(s.textWhite,s.fontWeightBold),variant:"h2"},subtitleProps:{className:s.textWhite},"data-aos":"fade-up"}),n.a.createElement("div",{className:s.toggleContainer,"data-aos":"fade-up"},n.a.createElement(C,{value:f,exclusive:!0,onChange:function(e,t){v(t)},className:s.toggleButtonGroup},n.a.createElement(R,{value:"annual",className:Object(l.a)(s.toggleButton,"annual"===f?s.toggleButtonActive:{})},n.a.createElement(h.a,{variant:"subtitle1",className:Object(l.a)(s.fontWeightBold,s.textWhite,s.toggleTitle,"annual"===f?s.toggleTitleActive:{})},"Annual")),n.a.createElement(R,{value:"monthly",className:Object(l.a)(s.toggleButton,"monthly"===f?s.toggleButtonActive:{})},n.a.createElement(h.a,{variant:"subtitle1",className:Object(l.a)(s.fontWeightBold,s.textWhite,s.toggleTitle,"monthly"===f?s.toggleTitleActive:{})},"Monthly"))))))),n.a.createElement("div",{className:s.pricingContainer},n.a.createElement("div",null,n.a.createElement(r.u,{className:s.sectionNoPaddingTop},n.a.createElement(u.a,{container:!0,spacing:p?4:2},t.map((function(e,t){return n.a.createElement(u.a,{item:!0,xs:12,md:4,"data-aos":"fade-up",key:t},n.a.createElement(r.i,{variant:"outlined",withShadow:!!e.isHighlighted,title:e.title,liftUp:!0,subtitle:e.subtitle,priceComponent:n.a.createElement(h.a,{variant:"h3",color:"textPrimary"},"$","annual"===f?e.annual:e.monthly),features:e.features,featureCheckComponent:n.a.createElement(B.b,{fontIconClass:"far fa-check-circle",fontIconColor:m.palette.primary.main}),cta:n.a.createElement(y.a,{color:"primary",variant:e.isHighlighted?"contained":"outlined",fullWidth:!0,size:"large"},"Subscribe now"),disclaimer:e.disclaimer,className:s.cardPricing}))})))))))},P=function(e){var t=e.data,a=e.className,i=Object(o.a)(e,["data","className"]),r=Object(c.a)(),l=Object(d.a)(r.breakpoints.up("md"),{defaultMatches:!0});return n.a.createElement("div",Object.assign({className:a},i),n.a.createElement(b.e,{title:"Business grade quality for all plans",subtitle:"After 3 days all of your offers will arrive and you will have another 7 days to select your new company."}),n.a.createElement(u.a,{container:!0,justify:"center",spacing:l?4:2},t.map((function(e,t){return n.a.createElement(u.a,{item:!0,container:!0,direction:"column",xs:12,md:4,key:t,"data-aos":"fade-up"},n.a.createElement(b.e,{title:e.title,subtitle:e.subtitle,titleProps:{variant:"h6"},subtitleProps:{variant:"body1",color:"textPrimary"},align:"left",disableGutter:!0}),n.a.createElement("div",{style:{flexGrow:1}}),n.a.createElement(B.e,{title:"Learn more",variant:"subtitle1"}))}))))},z=a("TTf+"),W=Object(s.a)((function(e){var t;return{gridItemBorder:(t={},t[e.breakpoints.up("md")]={borderRight:"1px solid "+z.a.grey[200]},t)}})),q=function(e){var t=e.className,a=Object(o.a)(e,["className"]),i=W(),r=Object(c.a)(),l=Object(d.a)(r.breakpoints.up("md"),{defaultMatches:!0});return n.a.createElement("div",Object.assign({className:t},a),n.a.createElement(u.a,{container:!0,spacing:l?4:2},n.a.createElement(u.a,{item:!0,xs:12,sm:6,className:i.gridItemBorder},n.a.createElement(b.e,{title:"Need a Support?",titleVariant:"h5",subtitle:"View message performance and test against variants and control.",subtitleVariant:"body1",subtitleColor:"textPrimary",ctaGroup:[n.a.createElement(B.e,{title:"Open a ticket"})],disableGutter:!0})),n.a.createElement(u.a,{item:!0,xs:12,sm:6},n.a.createElement(b.e,{title:"Customize Plan",titleVariant:"h5",subtitle:"Looking for something else? Request a Consultation to customize a plan.",subtitleVariant:"body1",subtitleColor:"textPrimary",ctaGroup:[n.a.createElement(B.e,{title:"Contact us"})],disableGutter:!0}))))},A=[{title:"Standard License",subtitle:"A pay-once license, just for you",monthly:49,annual:480,priceSuffix:" / MO",features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],disclaimer:"Fully featured 30-day free trial",isHighlighted:!1},{title:"Extended License",subtitle:"A pay-once license, just for you",monthly:79,annual:780,priceSuffix:" / MO",features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],disclaimer:"Fully featured 30-day free trial",isHighlighted:!0},{title:"Standard License +",subtitle:"A pay-once license, just for you",monthly:69,annual:680,priceSuffix:" / MO",features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],disclaimer:"Fully featured 30-day free trial",isHighlighted:!1}],F=[{id:"faq-1",title:"Flexible access to facilities.",subtitle:"Our new key fobs make it so easy!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur.",link:"Check it out"},{id:"faq-2",title:"Snacks, drinks, coffee, and more.",subtitle:"Our new key fobs make it so easy!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur.",link:"Check it out"},{id:"faq-3",title:"On site tech support.",subtitle:"Our new key fobs make it so easy!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur.",link:"Check it out"},{id:"faq-4",title:"Flexible access to facilities.",subtitle:"Our new key fobs make it so easy!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur.",link:"Check it out"},{id:"faq-5",title:"Snacks, drinks, coffee, and more.",subtitle:"Our new key fobs make it so easy!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur.",link:"Check it out"},{id:"faq-6",title:"On site tech support.",subtitle:"Our new key fobs make it so easy!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur.",link:"Check it out"}],M=[{title:"Move deals through your funnel – fast",subtitle:"Our chatbots and live chat capture more of your best leads and convert them while they’re hot."},{title:"On demand services right at your front-door",subtitle:"Our chatbots and live chat capture more of your best leads and convert them while they’re hot."},{title:"Online 24/7 support",subtitle:"Our chatbots and live chat capture more of your best leads and convert them while they’re hot."}],V=function(){return n.a.createElement("div",null,n.a.createElement(L,{data:A}),n.a.createElement(r.v,null,n.a.createElement(q,null)),n.a.createElement(r.u,null,n.a.createElement(f,{data:F})),n.a.createElement(r.v,null,n.a.createElement(P,{data:M})))}}}]);
//# sourceMappingURL=b45e1a27d34ceada91e0395a4cbb1026f93fe043-de97d9a7c49eb02d7517.js.map