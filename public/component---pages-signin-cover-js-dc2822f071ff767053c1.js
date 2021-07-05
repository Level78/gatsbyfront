(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"0oVz":function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a("q1tI"),n=a.n(r),o=a("R/WZ"),i=a("tRbT"),s=a("r9w1"),l=a("ofer"),c=a("Z3vd"),m=a("a1gY"),u=a.n(m),d=a("kbOB"),h=Object(o.a)((function(e){return{root:{width:"100%"}}})),p={email:{presence:{allowEmpty:!1,message:"is required"},email:!0,length:{maximum:300}},password:{presence:{allowEmpty:!1,message:"is required"},length:{minimum:8}}},g=function(){var e=h(),t=n.a.useState({isValid:!1,values:{},touched:{},errors:{}}),a=t[0],r=t[1];n.a.useEffect((function(){var e=u()(a.values,p);r((function(t){return Object.assign({},t,{isValid:!e,errors:e||{}})}))}),[a.values]);var o=function(e){e.persist(),r((function(t){var a,r;return Object.assign({},t,{values:Object.assign({},t.values,(a={},a[e.target.name]="checkbox"===e.target.type?e.target.checked:e.target.value,a)),touched:Object.assign({},t.touched,(r={},r[e.target.name]=!0,r))})}))},m=function(e){return!(!a.touched[e]||!a.errors[e])};return n.a.createElement("div",{className:e.root},n.a.createElement("form",{name:"password-reset-form",method:"post",onSubmit:function(e){e.preventDefault(),a.isValid&&window.location.replace("/"),r((function(e){return Object.assign({},e,{touched:Object.assign({},e.touched,e.errors)})}))}},n.a.createElement(i.a,{container:!0,spacing:2},n.a.createElement(i.a,{item:!0,xs:12},n.a.createElement(s.a,{placeholder:"E-mail",label:"E-mail *",variant:"outlined",size:"medium",name:"email",fullWidth:!0,helperText:m("email")?a.errors.email[0]:null,error:m("email"),onChange:o,type:"email",value:a.values.email||""})),n.a.createElement(i.a,{item:!0,xs:12},n.a.createElement(s.a,{placeholder:"Password",label:"Password *",variant:"outlined",size:"medium",name:"password",fullWidth:!0,helperText:m("password")?a.errors.password[0]:null,error:m("password"),onChange:o,type:"password",value:a.values.password||""})),n.a.createElement(i.a,{item:!0,xs:12},n.a.createElement("i",null,n.a.createElement(l.a,{variant:"subtitle2"},"Fields that are marked with * sign are required."))),n.a.createElement(i.a,{item:!0,xs:12},n.a.createElement(c.a,{size:"large",variant:"contained",type:"submit",color:"primary",fullWidth:!0},"Send")),n.a.createElement(i.a,{item:!0,xs:12},n.a.createElement(l.a,{variant:"subtitle1",color:"textSecondary",align:"center"},"Forgot your password?"," ",n.a.createElement(d.e,{title:"Reset password",href:"/password-reset-cover"}))))))},v=a("Jc4N"),f=a("41Hj"),E=Object(o.a)((function(e){var t,a;return{root:{"& .hero-shaped":{borderBottom:0},"& .hero-shaped__wrapper":(t={},t[e.breakpoints.up("md")]={minHeight:"calc(100vh - "+e.mixins.toolbar["@media (min-width:600px)"].minHeight+"px)"},t)},formContainer:(a={height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},a[e.breakpoints.down("sm")]={maxWidth:500,margin:"0 auto"},a),image:{objectFit:"cover"}}})),b=function(){var e=E();return n.a.createElement("div",{className:e.root},n.a.createElement(f.p,{leftSide:n.a.createElement("div",{className:e.formContainer},n.a.createElement(v.e,{title:"Sign in",subtitle:n.a.createElement("span",null,"Don’t have an account?"," ",n.a.createElement(d.e,{title:"Sign up.",href:"/signup-cover",typographyProps:{variant:"h6"}})),titleProps:{variant:"h3"}}),n.a.createElement(g,null)),rightSide:n.a.createElement(d.d,{src:"https://assets.maccarianagency.com/the-front/photos/account/cover-1.png",className:e.image,lazy:!1})}))}},IN3C:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a("q1tI"),n=a.n(r),o=a("iuhU"),i=a("R/WZ"),s=a("wb2y"),l=a("zLVn"),c=a("lO0E"),m=a("kbOB"),u=Object(i.a)((function(e){var t,a;return{toolbar:(t={maxWidth:e.layout.contentWidth,width:"100%",margin:"0 auto",padding:e.spacing(0,2)},t[e.breakpoints.up("sm")]={padding:e.spacing(0,8)},t),logoContainer:(a={width:100,height:28},a[e.breakpoints.up("md")]={width:120,height:32},a),logoImage:{width:"100%",height:"100%"}}})),d=function(e){var t=e.themeMode,a=e.className,r=Object(l.a)(e,["themeMode","className"]),i=u();return n.a.createElement(c.a,Object.assign({className:Object(o.a)(i.toolbar,a)},r),n.a.createElement("div",{className:i.logoContainer},n.a.createElement("a",{href:"/",title:"Home"},n.a.createElement(m.d,{className:i.logoImage,src:"light"===t?"https://assets.maccarianagency.com/the-front/logos/logo.svg":"https://assets.maccarianagency.com/the-front/logos/logo-negative.svg",alt:"thefront",lazy:!1}))))},h=Object(i.a)((function(){return{root:{},content:{height:"100%"}}})),p=function(e){var t=e.themeMode,a=e.children,r=e.className,i=h();return n.a.createElement("div",{className:Object(o.a)(i.root,r)},n.a.createElement(d,{themeMode:t}),n.a.createElement(s.a,null),n.a.createElement("main",{className:i.content},a))}},pXxe:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),o=a("0oVz"),i=a("IN3C"),s=a("69Y9");t.default=function(){return n.a.createElement(s.a,{component:o.a,layout:i.a})}}}]);
//# sourceMappingURL=component---pages-signin-cover-js-dc2822f071ff767053c1.js.map