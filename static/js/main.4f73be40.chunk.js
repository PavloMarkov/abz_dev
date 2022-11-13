(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(8),i=n.n(s),r=(n(13),n(2)),l=(n(14),n(3)),o=n.n(l),j=n(0),u=function(e){var t=e.name,n=e.widthProp,c=e.onClick,a=e.disabled,s={width:n?"".concat(n,"px"):"100px"};return Object(j.jsx)("button",{type:"button",className:o()("button",a?"disabled":"active"),style:s,onClick:c,disabled:a,children:t})},d=n.p+"static/media/Logo.56bda82b.svg",b=function(){return Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{src:d,alt:"logo",className:"logo__img"})})},h=(n(16),function(e){var t=e.click;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("div",{children:Object(j.jsx)(b,{})}),Object(j.jsxs)("div",{className:"header__actions",children:[Object(j.jsx)(u,{name:"Users"}),Object(j.jsx)(u,{name:"Sign up",onClick:t})]})]})}),m=(n(17),n(18),function(){return Object(j.jsx)("section",{className:"main",children:Object(j.jsxs)("div",{className:"main__box",children:[Object(j.jsx)("div",{className:"main__title",children:"Test assignment for front-end developer"}),Object(j.jsx)("div",{className:"main__content",children:"What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."}),Object(j.jsx)(u,{name:"Sign up"})]})})}),p=n(6),O=(n(19),n.p+"static/media/Vector.079538ce.svg"),f=function(e){var t=e.user,n=function(e){if(e.length>30){var t=e.slice(0,27);return t+="..."}return e};return Object(j.jsxs)("section",{className:"card",children:[Object(j.jsx)("img",{src:t.photo,alt:"foto",className:"card__img",onError:function(e){e.currentTarget.src=O}}),Object(j.jsx)("div",{className:"card__name","data-tooltip":t.name,children:n(t.name)}),Object(j.jsxs)("div",{className:"card__info",children:[Object(j.jsx)("div",{className:"card__job",children:t.position}),Object(j.jsx)("div",{className:"card__mail","data-tooltip":t.email,children:Object(j.jsx)("a",{href:"mailto:".concat(t.email),className:"card__mail-link",children:n(t.email)})}),Object(j.jsx)("div",{className:"card__phone",children:Object(j.jsx)("a",{href:"tel:".concat(t.phone),className:"card__phone-link",children:t.phone})})]})]})},_=n.p+"static/media/Preloader.0aaf07f3.svg",g=(n(20),function(){return Object(j.jsx)("div",{className:"preloader",children:Object(j.jsx)("img",{src:_,alt:"preloader",className:"preloader__img"})})}),x=(n(21),function(e){var t=e.isRegister,n=Object(c.useState)(1),a=Object(r.a)(n,2),s=a[0],i=a[1],l=Object(c.useState)(1),o=Object(r.a)(l,2),d=o[0],b=o[1],h=Object(c.useState)([]),m=Object(r.a)(h,2),O=m[0],_=m[1],x=Object(c.useState)(!1),v=Object(r.a)(x,2),N=v[0],k=v[1];Object(c.useEffect)((function(){k(!0),fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=".concat(s,"&count=6")).then((function(e){return e.json()})).then((function(e){_((function(t){return[].concat(Object(p.a)(t),Object(p.a)(e.users))})),b(e.total_pages)})).finally((function(){return k(!1)}))}),[s,t]);var S=Object(p.a)(O).sort((function(e,t){return t.registration_timestamp-e.registration_timestamp})).slice(0,6);return Object(j.jsxs)("section",{className:"cards",children:[Object(j.jsx)("h1",{className:"cards__title",children:"Working with GET request"}),Object(j.jsx)("div",{className:"cards__list",children:N?Object(j.jsx)(g,{}):S.map((function(e){return Object(j.jsx)(f,{user:e},e.id)}))}),d>s&&Object(j.jsx)(u,{name:"Show more",widthProp:"120",onClick:function(){i((function(e){return e+1}))}})]})}),v=(n(22),function(e){var t=e.onClick,n=Object(c.useState)(null),a=Object(r.a)(n,2),s=a[0],i=a[1],l=Object(c.createRef)(),u=5242880;s&&s.size<=u&&t(s);var d=s&&s.size>u;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{htmlFor:"file",className:o()("file",{filled:null!==s,errorFile:d}),children:[Object(j.jsx)("input",{type:"file",id:"file",accept:".jpg, .jpeg",className:"file__input",ref:l,onChange:function(){i(l.current.files[0])}}),null===s?"Upload your photo":s.name]}),d&&Object(j.jsx)("span",{className:"errorFile__msg",children:"The photo may not be greater than 5 Mbytes."})]})}),N=(n(23),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0;return e>=t&&e<=n}),k=function(e){var t=e.label,n=e.value,a=e.handleChange,s=Object(c.useState)(!1),i=Object(r.a)(s,2),l=i[0],u=i[1],d="text",b=function(){switch(t){case"Your name":return N(n.length,2,60);case"Email":return d="email",N(n.length,2,100)&&/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(n);case"Phone":return d="tel",function(e){return/[+]{0,1}380([0-9]{9})$/.test(e)}(n);default:return!0}};return Object(j.jsxs)("div",{className:"input",children:[Object(j.jsxs)("div",{className:"input__data",children:[Object(j.jsx)("input",{type:d,className:o()("input__field",{"input__field--error":l&&!b()}),required:!0,value:n,onChange:function(e){return a(e.target.value)},onBlur:function(){return u(!0)}}),Object(j.jsx)("span",{className:o()("input__label",{"input__label--error":l&&!b()}),children:t})]}),"Phone"===t&&Object(j.jsx)("div",{className:o()("input__helper",{"input__helper--error":l&&!b()}),children:"+38 (XXX) XXX - XX - XX"}),"Your name"===t&&l&&!b()&&Object(j.jsx)("div",{className:"input__helper input__helper--error",children:"The name must be at least 2 characters and max 60 characters"}),"Email"===t&&l&&!b()&&Object(j.jsx)("div",{className:"input__helper input__helper--error",children:"The email must be a valid email address."})]})},S=(n(24),function(e){var t=e.position,n=e.checked,c=e.changePositionID;return Object(j.jsx)("div",{className:"radio-input",children:Object(j.jsxs)("label",{htmlFor:t.name,className:"radio-input__radio",children:[Object(j.jsx)("input",{type:"radio",id:t.name,name:"position",value:t.id,className:"radio-input__radio-input",checked:n,onChange:function(){return c(t.id)}}),t.name,Object(j.jsx)("span",{className:"radio-input__radio-span"})]})})}),y=(n(25),n.p+"static/media/success-image.147ff01a.svg"),w=function(e){var t=e.isRegister,n=e.registerHandle,a=Object(c.useState)(""),s=Object(r.a)(a,2),i=s[0],l=s[1],o=Object(c.useState)([]),d=Object(r.a)(o,2),b=d[0],h=d[1],m=Object(c.useState)(0),p=Object(r.a)(m,2),O=p[0],f=p[1],_=Object(c.useState)(null),x=Object(r.a)(_,2),N=x[0],w=x[1],C=Object(c.useState)(""),z=Object(r.a)(C,2),T=z[0],E=z[1],P=Object(c.useState)(""),X=Object(r.a)(P,2),F=X[0],R=X[1],D=Object(c.useState)(""),I=Object(r.a)(D,2),U=I[0],q=I[1],H=Object(c.useState)(!1),J=Object(r.a)(H,2),M=J[0],W=J[1],Y=new FormData;Y.append("position_id","".concat(O)),Y.append("name",T),Y.append("email",F),Y.append("phone",U),Y.append("photo",N),Object(c.useEffect)((function(){W(!0),fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions").then((function(e){return e.json()})).then((function(e){h(e.positions)})).finally((function(){return W(!1)}))}),[]),Object(c.useEffect)((function(){W(!0),fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token").then((function(e){return e.json()})).then((function(e){l(e.token),localStorage.setItem("token",e.token)})).finally((function(){return W(!1)}))}),[]);var $=function(e){f(e)},B=null===N||0===O;return Object(j.jsx)(j.Fragment,{children:M?Object(j.jsx)(g,{}):Object(j.jsxs)("section",{className:"register",children:[Object(j.jsx)("h1",{className:"register__title",children:t?"Working with POST request":"User successfully registered"}),t?Object(j.jsxs)("div",{className:"register__data",children:[Object(j.jsxs)("div",{className:"register__forms",children:[Object(j.jsx)(k,{label:"Your name",value:T,handleChange:function(e){return E(e)}}),Object(j.jsx)(k,{label:"Email",value:F,handleChange:function(e){return R(e)}}),Object(j.jsx)(k,{label:"Phone",value:U,handleChange:function(e){return q(e)}})]}),Object(j.jsx)("div",{className:"register__position-title",children:"Select your position"}),Object(j.jsx)("div",{className:"register__position-list",children:M?Object(j.jsx)(g,{}):b.length>0&&b.map((function(e){return Object(j.jsx)(S,{position:e,changePositionID:$,checked:O===e.id},e.id)}))}),Object(j.jsx)("div",{className:"register__upload",children:Object(j.jsx)(v,{onClick:function(e){w(e)}})}),Object(j.jsx)("div",{className:"register__signup",children:Object(j.jsx)(u,{name:"Sign up",disabled:B,onClick:function(){fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users",{method:"POST",body:Y,headers:{Token:i}}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)})).finally((function(){return n()}))}})})]}):Object(j.jsx)("div",{className:"register__success",children:Object(j.jsx)("img",{src:y,alt:"successfull registration"})})]})})},C=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!0),i=Object(r.a)(s,2),l=i[0],o=i[1];return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("div",{className:"page__header",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(h,{click:function(){return a(!n)}})})}),Object(j.jsx)("div",{className:"page__main",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(m,{}),n&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x,{isRegister:l}),Object(j.jsx)(w,{isRegister:l,registerHandle:function(){return o(!1)}})]})]})})]})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.4f73be40.chunk.js.map