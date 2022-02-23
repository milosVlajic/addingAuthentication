(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={form:"ProfileForm_form__2xGgc",control:"ProfileForm_control__2YUZH",action:"ProfileForm_action__opJ_6"}},15:function(e,t,n){e.exports={header:"MainNavigation_header__2lqQ1",logo:"MainNavigation_logo__1TgMx"}},20:function(e,t,n){e.exports={profile:"UserProfile_profile__gQOnH"}},21:function(e,t,n){e.exports={starting:"StartingPageContent_starting__kwCvL"}},26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var o,c=n(17),r=n.n(c),i=n(7),a=(n(26),n(1)),s=n.n(a),l=n(2),j=n(11),u=n(0),d=s.a.createContext({token:"",isLoggedIn:!1,login:function(e){},logout:function(){}}),b=function(e){var t=(new Date).getTime();return new Date(e).getTime()-t},h=function(e){var t,n=function(){var e=localStorage.getItem("token"),t=localStorage.getItem("expirationTime"),n=b(t);return n<=3600?(localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),null):{token:e,duration:n}}();n&&(t=n.token);var c=Object(a.useState)(t),r=Object(j.a)(c,2),i=r[0],s=r[1],l=!!i,h=Object(a.useCallback)((function(){s(null),localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),o&&clearTimeout(o)}),[]);Object(a.useEffect)((function(){n&&(console.log(n.duration),o=setTimeout(h,n.duration))}),[n,h]);var g={token:i,isLoggedIn:l,login:function(e,t){s(e),localStorage.setItem("token",e),localStorage.setItem("expirationTime",t);var n=b(t);o=setTimeout(h,n)},logout:h};return Object(u.jsx)(d.Provider,{value:g,children:e.children})},g=d,O=n(15),x=n.n(O),m=function(){var e=Object(a.useContext)(g),t=e.isLoggedIn;return Object(u.jsxs)("header",{className:x.a.header,children:[Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)("div",{className:x.a.logo,children:"React Auth"})}),Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[!t&&Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/auth",children:"Login"})}),t&&Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/profile",children:"Profile"})}),t&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:function(){e.logout()},children:"Logout"})})]})})]})},f=function(e){return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(m,{}),Object(u.jsx)("main",{children:e.children})]})},p=n(12),v=n.n(p),_=function(){var e=Object(l.g)(),t=Object(a.useRef)(),n=Object(a.useContext)(g);return Object(u.jsxs)("form",{className:v.a.form,onSubmit:function(o){o.preventDefault();var c=t.current.value;fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDuhjbfFSrvPSIXv4DX-XUFJ1cyDWmJMvI",{method:"POST",body:JSON.stringify({idToken:n.token,password:c,returnSecureToken:!1}),headers:{"Content-Type":"application/json"}}).then((function(t){e.replace("/")}))},children:[Object(u.jsxs)("div",{className:v.a.control,children:[Object(u.jsx)("label",{htmlFor:"new-password",children:"New Password"}),Object(u.jsx)("input",{type:"password",id:"new-password",minLength:"7",ref:t})]}),Object(u.jsx)("div",{className:v.a.action,children:Object(u.jsx)("button",{children:"Change Password"})})]})},S=n(20),w=n.n(S),I=function(){return Object(u.jsxs)("section",{className:w.a.profile,children:[Object(u.jsx)("h1",{children:"Your User Profile"}),Object(u.jsx)(_,{})]})},k=n(9),y=n.n(k),N=function(){var e=Object(l.g)(),t=Object(a.useRef)(),n=Object(a.useRef)(),o=Object(a.useContext)(g),c=Object(a.useState)(!0),r=Object(j.a)(c,2),i=r[0],s=r[1],d=Object(a.useState)(!1),b=Object(j.a)(d,2),h=b[0],O=b[1];return Object(u.jsxs)("section",{className:y.a.auth,children:[Object(u.jsx)("h1",{children:i?"Login":"Sign Up"}),Object(u.jsxs)("form",{onSubmit:function(c){c.preventDefault();var r,a=t.current.value,s=n.current.value;O(!0),r=i?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDuhjbfFSrvPSIXv4DX-XUFJ1cyDWmJMvI":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDuhjbfFSrvPSIXv4DX-XUFJ1cyDWmJMvI",fetch(r,{method:"Post",body:JSON.stringify({email:a,password:s,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return O(!1),e.ok?e.json():e.json().then((function(e){throw new Error("Authentication failed!")}))})).then((function(t){var n=new Date((new Date).getTime()+1e3*+t.expiresIn);o.login(t.idToken,n.toISOString()),e.replace("/")})).catch((function(e){alert(e.message)}))},children:[Object(u.jsxs)("div",{className:y.a.control,children:[Object(u.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(u.jsx)("input",{type:"email",id:"email",required:!0,ref:t})]}),Object(u.jsxs)("div",{className:y.a.control,children:[Object(u.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(u.jsx)("input",{type:"password",id:"password",required:!0,ref:n})]}),Object(u.jsxs)("div",{className:y.a.actions,children:[!h&&Object(u.jsx)("button",{children:i?"Login":"Create Account"}),h&&Object(u.jsx)("p",{children:"Sending request..."}),Object(u.jsx)("button",{type:"button",className:y.a.toggle,onClick:function(){s((function(e){return!e}))},children:i?"Create new account":"Login with existing account"})]})]})]})},P=function(){return Object(u.jsx)(N,{})},T=n(21),F=n.n(T),C=function(){return Object(u.jsx)("section",{className:F.a.starting,children:Object(u.jsx)("h1",{children:"Welcome on Board!"})})},D=function(){return Object(u.jsx)(C,{})};var L=function(){var e=Object(a.useContext)(g);return Object(u.jsx)(f,{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{path:"/",exact:!0,children:Object(u.jsx)(D,{})}),!e.isLoggedIn&&Object(u.jsx)(l.b,{path:"/auth",children:Object(u.jsx)(P,{})}),Object(u.jsxs)(l.b,{path:"/profile",children:[e.isLoggedIn&&Object(u.jsx)(I,{}),!e.isLoggedIn&&Object(u.jsx)(l.a,{to:"/auth"})]}),Object(u.jsx)(l.b,{path:"*",children:Object(u.jsx)(l.a,{to:"/"})})]})})};r.a.render(Object(u.jsx)(h,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(L,{})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={auth:"AuthForm_auth__MPw6W",control:"AuthForm_control__2fVSU",actions:"AuthForm_actions__1VNhY",toggle:"AuthForm_toggle__21tnB"}}},[[36,1,2]]]);
//# sourceMappingURL=main.ad7fbfdb.chunk.js.map