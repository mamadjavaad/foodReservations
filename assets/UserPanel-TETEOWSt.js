import{r as x,a as o,o as g,c as h,b as e,w as n,_ as w,F as y,u as t,d as b,e as k,f as s,m as C,g as F,h as V,i as R,j,k as A,l as B,n as E,p as L,q as N,s as P}from"./index-smYSpcgW.js";const $={href:"/panel",class:"font-weight-bold"},D={__name:"UserPanel",setup(T){const i=x(null);return(U,l)=>{const p=o("v-btn"),c=o("v-app-bar-nav-icon"),a=o("v-list-item"),d=o("v-divider"),u=o("v-list-group"),v=o("v-list"),_=o("v-navigation-drawer"),m=o("router-view"),f=o("v-layout");return g(),h(y,null,[e(w,{"flex-justify":"space-between",style:{padding:"10px !important"}},{"nav-left":n(()=>[e(p,{icon:t(F),to:{path:"/",exact:!0},variant:"tonal"},null,8,["icon"])]),"nav-center":n(()=>[b("a",$,[e(p,{"prepend-icon":t(V),variant:"tonal"},{default:n(()=>[k("پنل کاربری")]),_:1},8,["prepend-icon"])])]),"nav-right":n(()=>[e(c,{variant:"tonal",onClick:l[0]||(l[0]=s(r=>i.value=!i.value,["stop"]))})]),_:1}),e(f,{class:"v-flex justify-center bg-shades-white",style:{"min-height":"100dvh !important"}},{default:n(()=>[e(_,{location:"right",modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=r=>i.value=r)},{prepend:n(()=>[e(a,{lines:"three",title:"محمدجواد فخرایی",subtitle:"40118537"},{prepend:n(()=>[e(p,{variant:"text",icon:t(R),onClick:l[1]||(l[1]=s(r=>i.value=!i.value,["stop"]))},null,8,["icon"])]),_:1})]),default:n(()=>[e(d),e(v,{density:"compact",nav:""},{default:n(()=>[e(a,{"prepend-icon":t(j),title:"پروفایل من",value:"account",to:{name:"Profile"},exact:""},null,8,["prepend-icon"]),e(u,{value:"Food"},{activator:n(({props:r})=>[e(a,C(r,{"prepend-icon":t(A),title:"رزرو غذا"}),null,16,["prepend-icon"])]),default:n(()=>[e(a,{to:{name:"FoodReserve"},value:"weekly",title:"رزرو هفتگی","prepend-icon":t(B),exact:""},null,8,["prepend-icon"]),e(a,{value:"daily",title:"روز فروش","prepend-icon":t(E),to:{name:"DailyReserve"},exact:""},null,8,["prepend-icon"]),e(a,{to:{name:"ForgotReceipt"},value:"forgotReceipt",title:"کد فراموشی","prepend-icon":t(L),exact:""},null,8,["prepend-icon"])]),_:1}),e(a,{"prepend-icon":t(N),title:"امکانات مالی",value:"finance",to:{name:"Finance"},exact:""},null,8,["prepend-icon"]),e(a,{"prepend-icon":t(P),title:"خروج",value:"exit",to:"/"},null,8,["prepend-icon"])]),_:1})]),_:1},8,["modelValue"]),e(m)]),_:1})],64)}}};export{D as default};
