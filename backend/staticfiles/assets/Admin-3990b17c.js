import{u as S}from"./vuex-76c3bf40.js";import{u as T}from"./vue-i18n-2afed284.js";import{v as C}from"./index-9ce2a57d.js";import{l as D,a as F}from"./constants-bb3441ce.js";import{d as V,c as I,b as n,e as s,f as u,g as t,E as e,_ as p,a1 as m,P as O,j as $,a5 as A,u as i,F as L,r as N,w as P,a8 as U}from"./@vue-94c9cb71.js";import{u as j}from"./vuetify-28085d18.js";import"./@intlify-eb5de8e7.js";import"./vue-router-4d1c7fe2.js";/* empty css             */import"./@splidejs-a53e45e1.js";import"./@unhead-e9381f0c.js";import"./unhead-98eeea87.js";import"./hookable-e7fd869b.js";const G=V({__name:"app-admin-bar",setup(z){const{locale:c}=T(),{getters:v}=S(),r=I(()=>D.find(a=>a.lang===c.value)),o=a=>{localStorage.setItem("language",a),c.value=a},d=()=>{C.theme.global.name.value=C.theme.global.name.value==="dark"?"light":"dark"},B=I(()=>C.theme.global.name.value==="dark"?"mdi-weather-night":"mdi-white-balance-sunny");return(a,k)=>{const f=n("v-app-bar-title"),g=n("v-icon"),_=n("v-btn"),x=n("v-list-item-title"),y=n("v-list-item"),l=n("v-list"),w=n("v-menu"),E=n("v-app-bar");return s(),u(E,{color:"background",flat:"",height:"60"},{append:t(()=>[e(_,{color:"primary",variant:"flat",size:"40",onClick:d},{default:t(()=>[e(g,null,{default:t(()=>[p(m(B.value),1)]),_:1})]),_:1}),e(w,{transition:"fade-transition"},{activator:t(({props:b})=>[e(_,O({class:"mx-2"},b,{flat:"",size:"40",variant:"flat",color:"primary",elevation:"1"}),{default:t(()=>{var h;return[p(m((h=r.value)==null?void 0:h.lang),1)]}),_:2},1040)]),default:t(()=>[e(l,{elevation:"2",density:"compact"},{default:t(()=>[(s(!0),$(L,null,A(i(D),(b,h)=>(s(),u(y,{link:"",key:h,onClick:H=>o(b.lang)},{default:t(()=>[e(x,{class:"text-caption",textContent:m(b.title)},null,8,["textContent"])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),default:t(()=>[e(f,null,{default:t(()=>[p(m(i(v).user.name||"Admin Dashboard"),1)]),_:1})]),_:1})}}}),q=V({__name:"app-admin-nav",setup(z){const{t:c}=T(),{commit:v}=S(),{mobile:r}=j(),o=N(!0),d=N(!0);return P(r,()=>r&&(o.value=!0)),(B,a)=>{const k=n("v-icon"),f=n("v-list-item-title"),g=n("v-list-item"),_=n("v-list"),x=n("v-btn"),y=n("v-navigation-drawer");return s(),u(y,{modelValue:d.value,"onUpdate:modelValue":a[2]||(a[2]=l=>d.value=l),rail:o.value,permanent:"",width:"250","expand-on-hover":i(r)},{append:t(()=>[e(_,{lines:!1,nav:"",variant:"flat"},{default:t(()=>[e(g,{link:"",color:"primary","base-color":"transparent",onClick:a[0]||(a[0]=l=>i(v)("LOGOUT"))},{prepend:t(()=>[e(k,{icon:"mdi-logout-variant"})]),default:t(()=>[e(f,null,{default:t(()=>[p(m(i(c)("admin.logout")),1)]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(_,{lines:!1,nav:"",variant:"flat"},{default:t(()=>[(s(!0),$(L,null,A(i(F),(l,w)=>(s(),u(g,{link:"",key:w,to:l.url,color:"primary","base-color":"transparent",exact:""},{prepend:t(()=>[e(k,{icon:l.icon},null,8,["icon"])]),default:t(()=>[e(f,null,{default:t(()=>[p(m(i(c)(l.title)),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1}),i(r)?U("",!0):(s(),u(x,{key:0,position:"absolute",elevation:"1",icon:`mdi-chevron-${o.value?"right":"left"}`,size:"x-small",onClick:a[1]||(a[1]=l=>o.value=!o.value),style:{right:"-15px"}},null,8,["icon"]))]),_:1},8,["modelValue","rail","expand-on-hover"])}}}),ot=V({__name:"Admin",setup(z){return(c,v)=>{const r=n("router-view"),o=n("v-main");return s(),$(L,null,[e(q),e(G),e(o,null,{default:t(()=>[e(r)]),_:1})],64)}}});export{ot as default};