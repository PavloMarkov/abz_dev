(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(8),i=n.n(a),r=(n(13),n(2)),l=(n(14),n(3)),o=n.n(l),j=n(0),u=function(e){var t=e.name,n=e.widthProp,c=e.onClick,s=e.disabled,a={width:n?"".concat(n,"px"):"100px"};return Object(j.jsx)("button",{type:"button",className:o()("button",s?"disabled":"active"),style:a,onClick:c,disabled:s,children:t})},d=n.p+"static/media/Logo.56bda82b.svg",b=function(){return Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{src:d,alt:"logo",className:"logo__img"})})},h=(n(16),function(e){var t=e.click;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("div",{children:Object(j.jsx)(b,{})}),Object(j.jsxs)("div",{className:"header__actions",children:[Object(j.jsx)(u,{name:"Users",onClick:t}),Object(j.jsx)(u,{name:"Sign up",onClick:t})]})]})}),m=(n(17),n(18),function(e){var t=e.click;return Object(j.jsx)("section",{className:"main",children:Object(j.jsxs)("div",{className:"main__box",children:[Object(j.jsx)("div",{className:"main__title",children:"Test assignment for front-end developer"}),Object(j.jsx)("div",{className:"main__content",children:"What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."}),Object(j.jsx)(u,{name:"Sign up",onClick:t})]})})}),p=n(6),O=(n(19),n.p+"static/media/Vector.079538ce.svg"),f=function(e){var t=e.user,n=function(e){if(e.length>30){var t=e.slice(0,27);return t+="..."}return e};return Object(j.jsxs)("section",{className:"card",children:[Object(j.jsx)("img",{src:t.photo,alt:"foto",className:"card__img",onError:function(e){e.currentTarget.src=O}}),Object(j.jsx)("div",{className:"card__name","data-tooltip":t.name,children:n(t.name)}),Object(j.jsxs)("div",{className:"card__info",children:[Object(j.jsx)("div",{className:"card__job",children:t.position}),Object(j.jsx)("div",{className:"card__mail","data-tooltip":t.email,children:Object(j.jsx)("a",{href:"mailto:".concat(t.email),className:"card__mail-link",children:n(t.email)})}),Object(j.jsx)("div",{className:"card__phone",children:Object(j.jsx)("a",{href:"tel:".concat(t.phone),className:"card__phone-link",children:t.phone})})]})]})},_=n.p+"static/media/Preloader.0aaf07f3.svg",g=(n(20),function(){return Object(j.jsx)("div",{className:"preloader",children:Object(j.jsx)("img",{src:_,alt:"preloader",className:"preloader__img"})})}),x=(n(21),function(e){var t=e.isRegister,n=Object(c.useState)(1),s=Object(r.a)(n,2),a=s[0],i=s[1],l=Object(c.useState)(1),o=Object(r.a)(l,2),d=o[0],b=o[1],h=Object(c.useState)([]),m=Object(r.a)(h,2),O=m[0],_=m[1],x=Object(c.useState)(!1),v=Object(r.a)(x,2),N=v[0],k=v[1];Object(c.useEffect)((function(){k(!0),fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=".concat(a,"&count=6")).then((function(e){return e.json()})).then((function(e){_((function(t){return[].concat(Object(p.a)(t),Object(p.a)(e.users))})),b(e.total_pages)})).finally((function(){return k(!1)}))}),[a,t]);var S=Object(p.a)(O).sort((function(e,t){return t.registration_timestamp-e.registration_timestamp}));return Object(j.jsxs)("section",{className:"cards",children:[Object(j.jsx)("h1",{className:"cards__title",children:"Working with GET request"}),Object(j.jsxs)("div",{className:"cards__list",children:[N?Object(j.jsx)(g,{}):S.map((function(e){return Object(j.jsx)(f,{user:e},e.id)})),0===S.length&&Object(j.jsx)("div",{className:"cards__title",children:"No users to show"})]}),d>a&&Object(j.jsx)(u,{name:"Show more",widthProp:"120",onClick:function(){i((function(e){return e+1}))}})]})}),v=(n(22),function(e){var t=e.addFile,n=e.foto,s=Object(c.createRef)(),a=n&&n.size>5242880;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{htmlFor:"file",className:o()("file",{filled:null!==n,errorFile:a}),children:[Object(j.jsx)("input",{type:"file",id:"file",accept:".jpg, .jpeg",className:"file__input",ref:s,onChange:function(){t(s.current.files[0])}}),null===n?"Upload your photo":n.name]}),a&&Object(j.jsx)("span",{className:"errorFile__msg",children:"The photo may not be greater than 5 Mbytes."})]})}),N=(n(23),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0;return e>=t&&e<=n}),k=function(e){var t=e.label,n=e.value,s=e.handleChange,a=Object(c.useState)(!1),i=Object(r.a)(a,2),l=i[0],u=i[1],d="text",b=function(){switch(t){case"Your name":return N(n.length,2,60);case"Email":return d="email",N(n.length,2,100)&&/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(n);case"Phone":return d="tel",function(e){return/[+]{0,1}380([0-9]{9})$/.test(e)}(n);default:return!0}};return Object(j.jsxs)("div",{className:"input",children:[Object(j.jsxs)("div",{className:"input__data",children:[Object(j.jsx)("input",{type:d,className:o()("input__field",{"input__field--error":l&&!b()}),required:!0,value:n,onChange:function(e){return s(e.target.value)},onBlur:function(){return u(!0)}}),Object(j.jsx)("span",{className:o()("input__label",{"input__label--error":l&&!b()}),children:t})]}),"Phone"===t&&Object(j.jsx)("div",{className:o()("input__helper",{"input__helper--error":l&&!b()}),children:"+38 (XXX) XXX - XX - XX"}),"Your name"===t&&l&&!b()&&Object(j.jsx)("div",{className:"input__helper input__helper--error",children:"The name must be at least 2 characters and max 60 characters"}),"Email"===t&&l&&!b()&&Object(j.jsx)("div",{className:"input__helper input__helper--error",children:"The email must be a valid email address."})]})},S=(n(24),function(e){var t=e.position,n=e.checked,c=e.changePositionID;return Object(j.jsx)("div",{className:"radio-input",children:Object(j.jsxs)("label",{htmlFor:t.name,className:"radio-input__radio",children:[Object(j.jsx)("input",{type:"radio",id:t.name,name:"position",value:t.id,className:"radio-input__radio-input",checked:n,onChange:function(){return c(t.id)}}),t.name,Object(j.jsx)("span",{className:"radio-input__radio-span"})]})})}),y=(n(25),n.p+"static/media/success-image.147ff01a.svg"),w=function(e){var t=e.isRegister,n=e.registerHandle,s=Object(c.useState)(""),a=Object(r.a)(s,2),i=a[0],l=a[1],o=Object(c.useState)([]),d=Object(r.a)(o,2),b=d[0],h=d[1],m=Object(c.useState)(0),p=Object(r.a)(m,2),O=p[0],f=p[1],_=Object(c.useState)(null),x=Object(r.a)(_,2),N=x[0],w=x[1],C=Object(c.useState)(""),z=Object(r.a)(C,2),T=z[0],E=z[1],F=Object(c.useState)(""),P=Object(r.a)(F,2),X=P[0],R=P[1],D=Object(c.useState)(""),I=Object(r.a)(D,2),U=I[0],q=I[1],B=Object(c.useState)(!1),H=Object(r.a)(B,2),J=H[0],M=H[1],W=Object(c.useState)(!1),Y=Object(r.a)(W,2),$=Y[0],L=Y[1],G=Object(c.useState)(!1),V=Object(r.a)(G,2),A=V[0],K=V[1],Q=Object(c.useState)(""),Z=Object(r.a)(Q,2),ee=Z[0],te=Z[1],ne=new FormData;ne.append("position_id","".concat(O)),ne.append("name",T),ne.append("email",X),ne.append("phone",U),ne.append("photo",N),Object(c.useEffect)((function(){M(!0),fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions").then((function(e){return e.json()})).then((function(e){h(e.positions),L(e.success)})).catch((function(){return L(!1)})).finally((function(){return M(!1)}))}),[]),Object(c.useEffect)((function(){M(!0),fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token").then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.token),l(e.token)})).finally((function(){return M(!1)}))}),[]);var ce=function(e){return f(e)},se=[N,O,T,X,U].every(Boolean);return Object(j.jsx)(j.Fragment,{children:J?Object(j.jsx)(g,{}):Object(j.jsxs)("section",{className:"register",children:[Object(j.jsxs)("h1",{className:"register__title",children:[t&&""===ee&&"Working with POST request",A?"User successfully registered":ee]}),A?A&&Object(j.jsx)("div",{className:"register__success",children:Object(j.jsx)("img",{src:y,alt:"successfull registration"})}):Object(j.jsxs)("div",{className:"register__data",children:[Object(j.jsxs)("div",{className:"register__forms",children:[Object(j.jsx)(k,{label:"Your name",value:T,handleChange:function(e){return E(e)}}),Object(j.jsx)(k,{label:"Email",value:X,handleChange:function(e){return R(e)}}),Object(j.jsx)(k,{label:"Phone",value:U,handleChange:function(e){return q(e)}})]}),Object(j.jsx)("div",{className:"register__position-title",children:"Select your position"}),Object(j.jsxs)("div",{className:"register__position-list",children:[J?Object(j.jsx)(g,{}):$&&b.length>0&&b.map((function(e){return Object(j.jsx)(S,{position:e,changePositionID:ce,checked:O===e.id},e.id)})),!$&&Object(j.jsx)("div",{className:"register__position-title",children:"Troubles with positions loading"})]}),Object(j.jsx)("div",{className:"register__upload",children:Object(j.jsx)(v,{addFile:function(e){return w(e)},foto:N})}),Object(j.jsx)("div",{className:"register__signup",children:Object(j.jsx)(u,{name:"Sign up",disabled:!se,onClick:function(){fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users",{method:"POST",body:ne,headers:{Token:i}}).then((function(e){return e.json()})).then((function(e){K(e.success),te(e.message)})).catch((function(e){K(!1),te(e.message)})).finally((function(){return n()}))}})})]})]})})},C=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!0),i=Object(r.a)(a,2),l=i[0],o=i[1],u=function(){return s(!n)};return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("div",{className:"page__header",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(h,{click:u})})}),Object(j.jsx)("div",{className:"page__main",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(m,{click:u}),n&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x,{isRegister:l}),Object(j.jsx)(w,{isRegister:l,registerHandle:function(){return o(!1)}})]})]})})]})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.4c6a82b8.chunk.js.map