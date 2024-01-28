import{l as M}from"./lodash-336d108c.js";import{d as R,e as T,r as p,L as k,a as s,f as A,w as a,o as F,b as l,h as m,g as V,t as r,k as i}from"./index-77affbdd.js";import{a as G,g as J}from"./orders-3d213696.js";import"./index-26e040f7.js";const K={class:"responsive-datatable"},Q=["data-label"],W=["data-label"],X=["data-label"],Y=["data-label"],Z=["data-label"],ee=["data-label"],de=R({__name:"Orders",setup(te){const{t:_,locale:w}=T(),v=p(""),d=p([]),u=p(1),c=p(25),f=p(0),y=p(!1),S=[{title:"products.first_name",key:"name",sortable:!1},{title:"admin.product",key:"product",sortable:!1},{title:"products.phone",key:"phone",sortable:!1},{title:"admin.order_message",key:"message",sortable:!1},{title:"admin.date",key:"date",sortable:!1},{title:"admin.status",key:"status",sortable:!1}],U=k(()=>{const t=new URLSearchParams;return u.value&&t.append("page",String(u.value)),c.value&&t.append("limit",String(c.value)),v.value.trim()&&t.append("search",v.value),t.toString()}),C=k(()=>{const t=(u.value-1)*c.value;return`${t+1}-${t+d.value.length} / ${f.value}`}),$=M.debounce(t=>{v.value=t,u.value=1},500),B=k(()=>S.map(t=>({...t,title:_(t.title)}))),L=async(t,o)=>{const{data:g}=await G(t,{country:d.value[o].country,first_name:d.value[o].first_name,last_name:d.value[o].last_name,message:d.value[o].message,phone:d.value[o].phone,checked:!0,product:d.value[o].product.id});g&&(d.value[o].checked=!0,alert("Successfully checked order"))},x=async()=>{y.value=!0;const{data:t}=await J(U.value);d.value=t.results,f.value=t.count,y.value=!1};return(t,o)=>{const g=s("v-text-field"),h=s("v-col"),N=s("v-card-title"),O=s("v-icon"),P=s("v-chip"),j=s("v-data-table-server"),z=s("v-card-text"),D=s("v-card"),I=s("v-select"),q=s("v-pagination"),E=s("v-row"),H=s("v-container");return F(),A(H,{fluid:""},{default:a(()=>[l(E,{justify:"space-between",align:"center"},{default:a(()=>[l(h,{cols:"12",sm:"6",md:"4",class:"pb-0"},{default:a(()=>[l(g,{"bg-color":"surface","onUpdate:modelValue":m($),placeholder:m(_)("admin.search"),"append-inner-icon":"mdi-magnify","hide-details":"",flat:"",density:"compact",variant:"solo",class:"border rounded"},null,8,["onUpdate:modelValue","placeholder"])]),_:1}),l(h,{cols:"12"},{default:a(()=>[l(D,{flat:"",border:""},{default:a(()=>[l(N,{class:"px-4 pt-3 font-weight-light"},{default:a(()=>[V(r(m(_)("admin.orders")),1)]),_:1}),l(z,{class:"px-0"},{default:a(()=>[i("div",K,[l(j,{"items-per-page":c.value,"onUpdate:itemsPerPage":o[0]||(o[0]=e=>c.value=e),search:v.value,"items-length":f.value,loading:y.value,"loading-text":m(_)("loading")+"...","no-data-text":m(_)("no_data"),hover:"",items:d.value,"item-value":"id","onUpdate:options":x,headers:B.value,density:"comfortable"},{bottom:a(()=>[]),"item.name":a(({item:e,column:n})=>[i("td",{"data-label":n.title},r(e.first_name)+" "+r(e.last_name),9,Q)]),"item.message":a(({item:e,column:n})=>[i("td",{"data-label":n.title},r(e.message),9,W)]),"item.product":a(({item:e,column:n})=>{var b;return[i("td",{"data-label":n.title},r((b=e.product)==null?void 0:b[`title_${m(w)}`]),9,X)]}),"item.phone":a(({item:e,column:n})=>[i("td",{"data-label":n.title},r(e.phone),9,Y)]),"item.date":a(({item:e,column:n})=>[i("td",{"data-label":n.title},r(new Date(e.created_at).toLocaleString()),9,Z)]),"item.status":a(({item:e,column:n,index:b})=>[i("td",{"data-label":n.title},[l(P,{variant:"flat",disabled:e.checked,color:e.checked?"green":"red",onClick:ae=>L(e.id,b)},{default:a(()=>[l(O,null,{default:a(()=>[V("mdi-check"+r(e.checked?"-all":""),1)]),_:2},1024)]),_:2},1032,["disabled","color","onClick"])],8,ee)]),_:1},8,["items-per-page","search","items-length","loading","loading-text","no-data-text","items","headers"])])]),_:1})]),_:1})]),_:1}),l(h,{cols:"12",sm:"5",class:"pt-0 pb-1 d-flex align-center"},{default:a(()=>[l(I,{"bg-color":"surface",modelValue:c.value,"onUpdate:modelValue":o[1]||(o[1]=e=>c.value=e),transition:"fade-transition","hide-details":"",flat:"",density:"compact",variant:"solo",class:"border rounded",items:[10,25,50,100,150]},null,8,["modelValue"]),l(g,{"bg-color":"surface","hide-details":"",flat:"",density:"compact",variant:"solo",class:"border rounded ml-3","model-value":C.value,readonly:""},null,8,["model-value"])]),_:1}),l(h,{cols:"12",sm:"4",md:"4",class:"pt-0 pl-0 pb-1 pr-2 d-flex justify-end align-center"},{default:a(()=>[l(q,{"bg-color":"surface",modelValue:u.value,"onUpdate:modelValue":[o[2]||(o[2]=e=>u.value=e),x],length:Math.ceil(f.value/c.value),"active-color":"primary",size:"40","total-visible":"3",variant:"flat"},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1})}}});export{de as default};
