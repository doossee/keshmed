import{d as F,b as l,e as p,f as y,g as e,E as a,_ as b,a1 as i,u as n,r as z,H as O,m as v,a7 as Q,a0 as T,a8 as P,j as B,a5 as E,F as A}from"./@vue-94c9cb71.js";import{u as G}from"./vuex-76c3bf40.js";import{l as J}from"./lodash-336d108c.js";import{u as H}from"./vue-i18n-2afed284.js";import{u as K}from"./@unhead-e9381f0c.js";import{u as W,b as X}from"./vue-router-4d1c7fe2.js";import{g as Y}from"./products-8f5be8db.js";import"./@intlify-eb5de8e7.js";import"./unhead-98eeea87.js";import"./hookable-e7fd869b.js";import"./index-55d26d55.js";import"./axios-28bc18a3.js";import"./index-39f17a10.js";import"./vuetify-28085d18.js";/* empty css             */import"./@splidejs-a53e45e1.js";const Z=F({__name:"AppProductList",props:{product:{type:Object}},setup(m){const{locale:x}=H();return(d,h)=>{const q=l("v-img"),C=l("v-avatar"),r=l("v-list-item-title"),g=l("v-list-item-subtitle"),$=l("v-rating"),s=l("v-list-item");return p(),y(s,{theme:"light",variant:"flat",color:"surface",link:"",to:`/product/${m.product.id}`,border:"",lines:"three",rounded:"",class:"mb-3 pa-2"},{prepend:e(()=>[a(C,{size:"150",rounded:"",color:"grey-lighten-3"},{default:e(()=>{var u,V,c,o;return[a(q,{alt:((u=m.product)==null?void 0:u.title_uz)+" image",src:((o=(c=(V=m.product)==null?void 0:V.images)==null?void 0:c[0])==null?void 0:o.medium_square_crop)||"/img/nophoto.jpg"},null,8,["alt","src"])]}),_:1})]),default:e(()=>[a(r,{class:"text-primary text-body-2"},{default:e(()=>[b(i(m.product.brand.name),1)]),_:1}),a(r,null,{default:e(()=>[b(i(m.product[`title_${n(x)}`]),1)]),_:1}),a(g,{class:"text-caption"},{default:e(()=>[b(i(m.product[`description_${n(x)}`]),1)]),_:1}),a(r,null,{default:e(()=>[a($,{readonly:"","model-value":"0","half-increments":"",density:"compact",color:"amber",size:"small"})]),_:1}),a(r,{class:"text-body-1"},{default:e(()=>[b(i(m.product.price)+" $",1)]),_:1})]),_:1},8,["to"])}}}),ee={class:"d-flex justify-end"},te={class:"text-primary"},ae={class:"text-primary"},oe=["onClick"],le={class:"text-primary"},se={class:"text-center text-grey font-weight-light"},re={key:0,class:"text-center text-grey font-weight-light"},ke=F({__name:"Products",setup(m){K({title:" Искать Медицинское Оборудование в Узбекистане",meta:[{name:"description",content:"Найдите широкий ассортимент медицинского оборудования в Узбекистане. Качественные товары, высокий уровень сервиса. Покупайте оборудование для здравоохранения у надежных поставщиков."},{name:"keywords",content:"медицинское оборудование, Узбекистан, оборудование для здравоохранения, медицинские товары, медтехника, поставщики, купить оборудование"}]});const x=z(0),d=W(),h=z(!0),{getters:q}=G(),{locale:C,t:r}=H(),g=z([]),$=X(),s=O({search:d.query.search||"",brand:d.query.brand||"",category:d.query.category||"",min_price:d.query.min_price||0,max_price:d.query.max_price||0,is_part:d.query.is_part||"",page:d.query.page||1}),u=(c,o)=>{if(d.query[c]==o)return;const k={...d.query};o===0||o===""?delete k[c]:k[c]=o,s[c]=o,$.replace({query:k}),V()},V=J.debounce(async()=>{h.value=!0,g.value=[];const{data:c}=await Y(location.search?location.search+"&expand=images":"?expand=images");g.value=c.results,x.value=c.count,h.value=!1},500);return V(),(c,o)=>{const k=l("v-switch"),_=l("v-card-text"),U=l("v-text-field"),w=l("v-col"),N=l("v-row"),L=l("v-icon"),j=l("v-list"),M=l("v-list-item"),R=l("v-card"),S=l("v-pagination"),D=l("v-container");return p(),y(D,null,{default:e(()=>[a(N,null,{default:e(()=>[a(w,{cols:"12",sm:"4",class:"pr-0"},{default:e(()=>[a(R,{flat:"",border:""},{default:e(()=>[a(_,{class:"w-100 text-primary d-flex justify-space-between align-center"},{default:e(()=>[v("span",null,i(n(r)("products.search_by_name")),1),v("div",ee,[a(k,{modelValue:s.is_part,"onUpdate:modelValue":[o[0]||(o[0]=t=>s.is_part=t),o[1]||(o[1]=t=>u("is_part",t))],"hide-details":"",density:"compact",color:"primary","false-value":"","true-value":!0,label:n(r)("admin.is_part")},null,8,["modelValue","label"])])]),_:1}),a(_,{class:"py-0 pb-1"},{default:e(()=>[a(U,{placeholder:n(r)("products.search_by_name"),"append-inner-icon":"mdi-magnify",flat:"",density:"compact",class:"border rounded","hide-details":"",variant:"solo","bg-color":"background",color:"primary",modelValue:s.search,"onUpdate:modelValue":[o[2]||(o[2]=t=>s.search=t),o[3]||(o[3]=t=>u("search",t))]},null,8,["placeholder","modelValue"])]),_:1}),a(_,{class:"pb-0 pt-2"},{default:e(()=>[v("span",te,i(n(r)("products.search_by_price")),1)]),_:1}),a(_,{class:"pb-0 pt-2 px-3"},{default:e(()=>[a(N,{class:"pa-2"},{default:e(()=>[a(w,{class:"pa-2",cols:"6"},{default:e(()=>[a(U,{min:"0",modelValue:s.min_price,"onUpdate:modelValue":[o[4]||(o[4]=t=>s.min_price=t),o[5]||(o[5]=t=>u("min_price",+t))],"bg-color":"background",class:"border rounded",type:"number",variant:"solo",flat:"","hide-details":"",density:"compact",placeholder:n(r)("products.min")},null,8,["modelValue","placeholder"])]),_:1}),a(w,{class:"pa-2",cols:"6"},{default:e(()=>[a(U,{min:"0",modelValue:s.max_price,"onUpdate:modelValue":[o[6]||(o[6]=t=>s.max_price=t),o[7]||(o[7]=t=>u("max_price",+t))],"bg-color":"background",class:"border rounded",type:"number",variant:"solo",flat:"","hide-details":"",density:"compact",placeholder:n(r)("products.max")},null,8,["modelValue","placeholder"])]),_:1})]),_:1})]),_:1}),a(_,{class:"pb-0"},{default:e(()=>[v("span",ae,i(n(r)("products.categories")),1)]),_:1}),a(_,{class:"py-0"},{default:e(()=>[a(j,{items:n(q).categories,"item-children":"children","item-title":`name_${n(C)}`,density:"compact",nav:"",class:"px-0","open-strategy":"single","item-value":"id",mandatory:"",modelValue:s.category,"onUpdate:modelValue":o[8]||(o[8]=t=>s.category=t),"active-class":"text-primary"},{title:e(({title:t,item:f})=>[v("span",{class:Q(["font-weight-light text-hover-link",{"text-primary":s.category===f.id}]),onClick:T(I=>u("category",f.id),["stop"])},i(t),11,oe)]),append:e(({item:t,isActive:f})=>[t.children.length?(p(),y(L,{key:0},{default:e(()=>[b("mdi-"+i(f?"minus":"plus"),1)]),_:2},1024)):P("",!0)]),_:1},8,["items","item-title","modelValue"])]),_:1}),a(_,{class:"py-0"},{default:e(()=>[v("span",le,i(n(r)("products.brands")),1)]),_:1}),a(_,{class:"py-0"},{default:e(()=>[a(j,{density:"compact",nav:"",class:"px-0",mandatory:"",color:"primary"},{default:e(()=>[(p(!0),B(A,null,E(n(q).brands,(t,f)=>(p(),y(M,{class:"py-0",key:f,active:s.brand===t.id,height:"25",value:t.id,link:"",onClick:I=>u("brand",t.id)},{default:e(()=>[b(i(t.name),1)]),_:2},1032,["active","value","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}),h.value?(p(),y(w,{key:0,cols:"12",sm:"8"},{default:e(()=>[v("p",se,i(n(r)("loading"))+"...",1)]),_:1})):(p(),y(w,{key:1,cols:"12",sm:"8"},{default:e(()=>[a(j,{class:"py-0 px-0","bg-color":"background"},{default:e(()=>[!h.value&&g.value.length===0?(p(),B("p",re,i(n(r)("no_data")),1)):P("",!0),(p(!0),B(A,null,E(g.value,(t,f)=>(p(),y(Z,{key:f,product:t},null,8,["product"]))),128))]),_:1}),a(S,{density:"comfortable",length:Math.ceil(x.value/25),"model-value":+s.page,"onUpdate:modelValue":o[9]||(o[9]=t=>u("page",t)),variant:"flat","active-color":"primary"},null,8,["length","model-value"])]),_:1}))]),_:1})]),_:1})}}});export{ke as default};
