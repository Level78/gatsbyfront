(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"/UQl":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("BGWV"),o=a("IN3C"),s=a("69Y9");t.default=function(){return r.a.createElement(s.a,{component:i.a,layout:o.a})}},BGWV:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("q1tI"),r=a.n(n),i=a("R/WZ"),o=a("tRbT"),s=a("r9w1"),l=a("ofer"),c=a("Z3vd"),m=a("a1gY"),u=a.n(m),d=a("kbOB"),h=Object(i.a)((function(e){return{root:{width:"100%"}}})),g={email:{presence:{allowEmpty:!1,message:"is required"},email:!0,length:{maximum:300}},password:{presence:{allowEmpty:!1,message:"is required"},length:{minimum:8}}},p=function(){var e=h(),t=r.a.useState({isValid:!1,values:{},touched:{},errors:{}}),a=t[0],n=t[1];r.a.useEffect((function(){var e=u()(a.values,g);n((function(t){return Object.assign({},t,{isValid:!e,errors:e||{}})}))}),[a.values]);var i=function(e){e.persist(),n((function(t){var a,n;return Object.assign({},t,{values:Object.assign({},t.values,(a={},a[e.target.name]="checkbox"===e.target.type?e.target.checked:e.target.value,a)),touched:Object.assign({},t.touched,(n={},n[e.target.name]=!0,n))})}))},m=function(e){return!(!a.touched[e]||!a.errors[e])};return r.a.createElement("div",{className:e.root},r.a.createElement("form",{name:"password-reset-form",method:"post",onSubmit:function(e){e.preventDefault(),a.isValid&&window.location.replace("/"),n((function(e){return Object.assign({},e,{touched:Object.assign({},e.touched,e.errors)})}))}},r.a.createElement(o.a,{container:!0,spacing:2},r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(s.a,{placeholder:"E-mail",label:"E-mail *",variant:"outlined",size:"medium",name:"email",fullWidth:!0,helperText:m("email")?a.errors.email[0]:null,error:m("email"),onChange:i,type:"email",value:a.values.email||""})),r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(s.a,{placeholder:"Password",label:"Password *",variant:"outlined",size:"medium",name:"password",fullWidth:!0,helperText:m("password")?a.errors.password[0]:null,error:m("password"),onChange:i,type:"password",value:a.values.password||""})),r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement("i",null,r.a.createElement(l.a,{variant:"subtitle2"},"Fields that are marked with * sign are required."))),r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(c.a,{size:"large",variant:"contained",type:"submit",color:"primary",fullWidth:!0},"Send")),r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(l.a,{variant:"subtitle1",color:"textSecondary",align:"center"},"Forgot your password?"," ",r.a.createElement(d.e,{title:"Reset password",href:"/password-reset-simple"}))))))},f=a("Jc4N"),v=a("41Hj"),E=Object(i.a)((function(e){return{formContainer:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"calc(100vh - "+e.mixins.toolbar["@media (min-width:600px)"].minHeight+"px)",maxWidth:500,margin:"0 auto"},section:{paddingTop:0,paddingBottom:0}}})),b=function(){var e=E();return r.a.createElement("div",null,r.a.createElement(v.u,{className:e.section},r.a.createElement("div",{className:e.formContainer},r.a.createElement(f.e,{title:"Sign in",subtitle:r.a.createElement("span",null,"Don’t have an account?"," ",r.a.createElement(d.e,{title:"Sign up.",href:"/signup-simple",typographyProps:{variant:"h6"}})),titleProps:{variant:"h3"}}),r.a.createElement(p,null))))}},IN3C:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a("q1tI"),r=a.n(n),i=a("iuhU"),o=a("R/WZ"),s=a("wb2y"),l=a("zLVn"),c=a("lO0E"),m=a("kbOB"),u=Object(o.a)((function(e){var t,a;return{toolbar:(t={maxWidth:e.layout.contentWidth,width:"100%",margin:"0 auto",padding:e.spacing(0,2)},t[e.breakpoints.up("sm")]={padding:e.spacing(0,8)},t),logoContainer:(a={width:100,height:28},a[e.breakpoints.up("md")]={width:120,height:32},a),logoImage:{width:"100%",height:"100%"}}})),d=function(e){var t=e.themeMode,a=e.className,n=Object(l.a)(e,["themeMode","className"]),o=u();return r.a.createElement(c.a,Object.assign({className:Object(i.a)(o.toolbar,a)},n),r.a.createElement("div",{className:o.logoContainer},r.a.createElement("a",{href:"/",title:"Home"},r.a.createElement(m.d,{className:o.logoImage,src:"light"===t?"https://assets.maccarianagency.com/the-front/logos/logo.svg":"https://assets.maccarianagency.com/the-front/logos/logo-negative.svg",alt:"thefront",lazy:!1}))))},h=Object(o.a)((function(){return{root:{},content:{height:"100%"}}})),g=function(e){var t=e.themeMode,a=e.children,n=e.className,o=h();return r.a.createElement("div",{className:Object(i.a)(o.root,n)},r.a.createElement(d,{themeMode:t}),r.a.createElement(s.a,null),r.a.createElement("main",{className:o.content},a))}}}]);
//# sourceMappingURL=component---pages-signin-simple-js-e626b9b0e6dd724b1833.js.map