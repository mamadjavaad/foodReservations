import{t as y,r as w,a as u,o as a,v as g,w as n,b as t,e as o,d as l,c,u as _,Q as r,R as k,S as V,T as C,O as S,P as B}from"./index-smYSpcgW.js";const e=s=>(S("data-v-c9691fa6"),s=s(),B(),s),I={class:"w-100 d-flex mt-5 flex-column justify-center align-center flex-wrap"},N={key:0,class:"finance-card py-6 px-1 mx-4 d-flex flex-column justify-center align-center rounded-lg border"},j=e(()=>l("p",null,"انتقال اعتبار",-1)),F={key:1,class:"finance-history mb-6 w-75 py-2 text-center"},O=e(()=>l("p",{class:"pa-4"}," تاریخچه انتقال",-1)),P=e(()=>l("thead",null,[l("tr",null,[l("th",{class:"text-center"}," شماره تراکنش "),l("th",{class:"text-center"}," مبلغ "),l("th",{class:"text-center"},"دانشجوی گیرنده"),l("th",{class:"text-center"},"تاریخ")])],-1)),R=e(()=>l("tbody",null,[l("tr",null,[l("td",null,"5445155"),l("td",null,"2,325,151"),l("td",null,"40118537"),l("td",null,"1403/10/12")]),l("tr",null,[l("td",null,"4382947"),l("td",null,"1,872,453"),l("td",null,"40182754"),l("td",null,"1403/10/12")]),l("tr",null,[l("td",null,"5923847"),l("td",null,"2,349,076"),l("td",null,"40175982"),l("td",null,"1403/10/12")]),l("tr",null,[l("td",null,"8471935"),l("td",null,"3,425,678"),l("td",null,"40184621"),l("td",null,"1403/10/12")]),l("tr",null,[l("td",null,"2138475"),l("td",null,"1,623,407"),l("td",null,"40192038"),l("td",null,"1403/10/12")]),l("tr",null,[l("td",null,"7564832"),l("td",null,"2,978,432"),l("td",null,"40158376"),l("td",null,"1403/10/12")]),l("tr",null,[l("td",null,"3849207"),l("td",null,"4,210,675"),l("td",null,"40167129"),l("td",null,"1403/10/12")])],-1)),T={key:2,class:"finance-card py-6 px-1 mx-4 d-flex flex-column justify-center align-center rounded-lg border"},A=e(()=>l("p",null,"افزایش موجودی حساب",-1)),E={key:3,class:"finance-history mb-6 w-75 py-2 text-center"},Q=e(()=>l("p",{class:"pa-4"}," تاریخچه شارژ حساب",-1)),U=e(()=>l("thead",null,[l("tr",null,[l("th",{class:"text-center"}," شماره تراکنش "),l("th",{class:"text-center"}," مبلغ "),l("th",{class:"text-center"},"تاریخ"),l("th",{class:"text-center"},"وضعیت تراکنش")])],-1)),q=e(()=>l("tbody",null,[l("tr",null,[l("td",null,"5445155"),l("td",null,"2,325,151"),l("td",null,"1403/10/12"),l("td",null,"موفق")]),l("tr",null,[l("td",null,"4382947"),l("td",null,"1,872,453"),l("td",null,"1403/10/12"),l("td",null,"موفق")]),l("tr",null,[l("td",null,"5923847"),l("td",null,"2,349,076"),l("td",null,"1403/10/12"),l("td",null,"ناموفق")]),l("tr",null,[l("td",null,"8471935"),l("td",null,"3,425,678"),l("td",null,"1403/10/12"),l("td",null,"ناموفق")]),l("tr",null,[l("td",null,"2138475"),l("td",null,"1,623,407"),l("td",null,"1403/10/12"),l("td",null,"ناموفق")]),l("tr",null,[l("td",null,"7564832"),l("td",null,"2,978,432"),l("td",null,"1403/10/12"),l("td",null,"ناموفق")]),l("tr",null,[l("td",null,"3849207"),l("td",null,"4,210,675"),l("td",null,"1403/10/12"),l("td",null,"موفق")])],-1)),z={__name:"Finance",setup(s){const d=w(1);return(D,p)=>{const f=u("v-tab"),v=u("v-tabs"),i=u("v-text-field"),m=u("v-btn"),x=u("v-table"),h=u("v-main");return a(),g(h,{class:"d-flex flex-column w-100 flex-wrap align-center"},{default:n(()=>[t(v,{modelValue:d.value,"onUpdate:modelValue":p[0]||(p[0]=b=>d.value=b),"align-tabs":"center",color:"#359662"},{default:n(()=>[t(f,{value:2},{default:n(()=>[o("انتقال اعتبار")]),_:1}),t(f,{value:1},{default:n(()=>[o("افزایش موجودی")]),_:1})]),_:1},8,["modelValue"]),l("div",I,[d.value==2?(a(),c("div",N,[j,t(i,{type:"number",class:"w-100 px-3 pt-4","append-inner-icon":_(k),label:"مبلغ انتقالی",variant:"solo"},null,8,["append-inner-icon"]),t(i,{type:"number",class:"w-100 px-3 pt-2 pb-2","append-inner-icon":_(V),label:"شماره دانشجویی گیرنده",variant:"solo"},null,8,["append-inner-icon"]),t(m,{color:"#359662"},{default:n(()=>[o("ثبت انتقال")]),_:1})])):r("",!0),d.value==2?(a(),c("div",F,[O,t(x,{style:{direction:"rtl"},class:"border rounded-lg pt-1"},{default:n(()=>[P,R]),_:1})])):r("",!0),d.value==1?(a(),c("div",T,[A,t(i,{type:"number",class:"w-100 px-3 pt-4 pb-2","append-inner-icon":_(C),placeholder:"10,000",variant:"solo"},null,8,["append-inner-icon"]),t(m,{color:"#359662"},{default:n(()=>[o("پرداخت")]),_:1})])):r("",!0),d.value==1?(a(),c("div",E,[Q,t(x,{style:{direction:"rtl"},class:"border rounded-lg pt-1"},{default:n(()=>[U,q]),_:1})])):r("",!0)])]),_:1})}}},H=y(z,[["__scopeId","data-v-c9691fa6"]]);export{H as default};
