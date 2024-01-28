import{u as T}from"./vuex-76c3bf40.js";import{u as j}from"./vue-i18n-2afed284.js";import{v as V}from"./index-4a0aa72c.js";import{l as N,a as O}from"./constants-919adb61.js";import{d as $,c as I,b as n,e as r,f as m,g as t,E as e,_ as y,a1 as u,P,j as z,a5 as D,u as s,F as B,m as U,r as S,w as A,a8 as G}from"./@vue-94c9cb71.js";import{u as q}from"./vuetify-28085d18.js";import"./@intlify-eb5de8e7.js";import"./vue-router-4d1c7fe2.js";import"./@splidejs-a53e45e1.js";import"./@unhead-e9381f0c.js";import"./unhead-98eeea87.js";import"./hookable-e7fd869b.js";const H={class:"w-100 d-flex justify-start pl-2"},J=$({__name:"app-admin-bar",setup(L){const{locale:c}=j();T();const p=I(()=>N.find(_=>_.lang===c.value)),l=_=>{localStorage.setItem("language",_),c.value=_},a=()=>{V.theme.global.name.value=V.theme.global.name.value==="dark"?"light":"dark"},v=I(()=>V.theme.global.name.value==="dark"?"mdi-weather-night":"mdi-white-balance-sunny");return(_,i)=>{const d=n("v-img"),f=n("v-avatar"),g=n("v-spacer"),h=n("v-icon"),k=n("v-btn"),w=n("v-list-item-title"),o=n("v-list-item"),C=n("v-list"),E=n("v-menu"),F=n("v-app-bar");return r(),m(F,{color:"background",flat:"",height:"60"},{append:t(()=>[e(k,{color:"primary",variant:"flat",size:"40",onClick:a},{default:t(()=>[e(h,null,{default:t(()=>[y(u(v.value),1)]),_:1})]),_:1}),e(E,{transition:"fade-transition"},{activator:t(({props:b})=>[e(k,P({class:"mx-2"},b,{flat:"",size:"40",variant:"flat",color:"primary",elevation:"1"}),{default:t(()=>{var x;return[y(u((x=p.value)==null?void 0:x.lang),1)]}),_:2},1040)]),default:t(()=>[e(C,{elevation:"2",density:"compact"},{default:t(()=>[(r(!0),z(B,null,D(s(N),(b,x)=>(r(),m(o,{link:"",key:x,onClick:M=>l(b.lang)},{default:t(()=>[e(w,{class:"text-caption",textContent:u(b.title)},null,8,["textContent"])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),default:t(()=>[U("div",H,[e(f,{size:"100"},{default:t(()=>[e(d,{src:"/static/keshmed-logo.png"})]),_:1})]),e(g)]),_:1})}}}),K=$({__name:"app-admin-nav",setup(L){const{t:c}=j(),{commit:p}=T(),{mobile:l}=q(),a=S(!0),v=S(!0);return A(l,()=>l&&(a.value=!0)),(_,i)=>{const d=n("v-icon"),f=n("v-list-item-title"),g=n("v-list-item"),h=n("v-list"),k=n("v-btn"),w=n("v-navigation-drawer");return r(),m(w,{modelValue:v.value,"onUpdate:modelValue":i[2]||(i[2]=o=>v.value=o),rail:a.value,permanent:"",width:"250","expand-on-hover":s(l)},{append:t(()=>[e(h,{lines:!1,nav:"",variant:"flat"},{default:t(()=>[e(g,{link:"",color:"primary","base-color":"transparent",onClick:i[0]||(i[0]=o=>s(p)("LOGOUT"))},{prepend:t(()=>[e(d,{icon:"mdi-logout-variant"})]),default:t(()=>[e(f,null,{default:t(()=>[y(u(s(c)("admin.logout")),1)]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(h,{lines:!1,nav:"",variant:"flat"},{default:t(()=>[(r(!0),z(B,null,D(s(O),(o,C)=>(r(),m(g,{link:"",key:C,to:o.url,color:"primary","base-color":"transparent",exact:""},{prepend:t(()=>[e(d,{icon:o.icon},null,8,["icon"])]),default:t(()=>[e(f,null,{default:t(()=>[y(u(s(c)(o.title)),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1}),s(l)?G("",!0):(r(),m(k,{key:0,position:"absolute",elevation:"1",icon:`mdi-chevron-${a.value?"right":"left"}`,size:"x-small",onClick:i[1]||(i[1]=o=>a.value=!a.value),style:{right:"-15px"}},null,8,["icon"]))]),_:1},8,["modelValue","rail","expand-on-hover"])}}}),rt=$({__name:"Admin",setup(L){return(c,p)=>{const l=n("router-view"),a=n("v-main");return r(),z(B,null,[e(K),e(J),e(a,null,{default:t(()=>[e(l)]),_:1})],64)}}});export{rt as default};
