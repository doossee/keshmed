import{u as S}from"./vuex-76c3bf40.js";import{u as $}from"./vue-i18n-2afed284.js";import{c as B}from"./countries-54da296d.js";import{d as D,b as a,e as N,f as O,g as n,E as e,_ as r,a1 as s,u as i,m as c}from"./@vue-94c9cb71.js";const T={class:"font-weight-medium"},j={class:"font-weight-medium"},z={class:"font-weight-medium"},q={class:"font-weight-medium"},I={class:"font-weight-medium"},M={class:"d-flex align-center"},P={class:"font-weight-medium mr-2"},K=D({__name:"AppProductCard",props:{item:{}},setup(R){const{locale:h,t:m}=$(),{getters:y,commit:l}=S(),_=t=>!!y.saved.find(p=>p.id===t),w=t=>{_(t.id)?l("REMOVE_TO_SAVE",t):l("ADD_TO_SAVE",t)};return(t,p)=>{const b=a("v-img"),u=a("v-divider"),x=a("router-link"),d=a("v-card-text"),V=a("v-rating"),k=a("v-icon"),C=a("v-btn"),E=a("v-card-actions"),A=a("v-card");return N(),O(A,{border:"",flat:"",theme:"light",class:"pt-2"},{default:n(()=>{var f,v,g;return[e(b,{width:"100%",height:"200",alt:t.item.title_ru+" image",src:((g=(v=(f=t.item)==null?void 0:f.images)==null?void 0:v[0])==null?void 0:g.medium_square_crop)||"/img/nophoto.jpg"},null,8,["alt","src"]),e(u,{class:"mb-1"}),e(x,{to:`/product/${t.item.id}`,class:"px-3 text-decoration-none font-weight-medium text-subtitle-1 py-1 text-primary"},{default:n(()=>{var o;return[r(s((o=t.item)==null?void 0:o[`title_${i(h)}`]),1)]}),_:1},8,["to"]),e(d,{class:"py-1 px-3"},{default:n(()=>{var o;return[c("span",T,s(i(m)("products.price"))+":",1),r(" "+s((o=t.item)==null?void 0:o.price)+" $",1)]}),_:1}),e(d,{class:"py-1 px-3"},{default:n(()=>{var o;return[c("span",j,s(i(m)("products.brand"))+":",1),r(" "+s((o=t.item)==null?void 0:o.brand.name),1)]}),_:1}),e(d,{class:"py-1 px-3"},{default:n(()=>{var o;return[c("span",z,s(i(m)("products.shipping"))+":",1),r(" "+s((o=i(B)[t.item.shipping_from])==null?void 0:o.name),1)]}),_:1}),e(d,{class:"py-1 px-3"},{default:n(()=>[c("span",q,s(i(m)("products.model"))+":",1),r(" "+s(t.item.model),1)]),_:1}),e(d,{class:"py-1 px-3"},{default:n(()=>[c("span",I,s(i(m)("products.warranty"))+":",1),r(" "+s(t.item.warranty),1)]),_:1}),e(u),e(E,{class:"pa-3 d-flex align-center justify-space-between"},{default:n(()=>[c("div",M,[c("span",P,s(i(m)("products.rate"))+":",1),e(V,{readonly:"","model-value":"0","half-increments":"",density:"compact",color:"amber",size:"small"})]),e(C,{onClick:p[0]||(p[0]=o=>w(t.item)),variant:"flat",size:"40",color:"primary",class:"text-none"},{default:n(()=>[e(k,null,{default:n(()=>[r("mdi-heart"+s(_(t.item.id)?"":"-outline"),1)]),_:1})]),_:1})]),_:1})]}),_:1})}}});export{K as _};