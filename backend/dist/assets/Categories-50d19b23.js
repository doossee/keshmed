import{d as G,J as Q,r as h,b as r,e as k,j as w,a5 as F,u as v,F as R,m,a1 as p,E as e,g as l,_ as i,U as B,W as D,a8 as q,w as X,f as Y,n as Z}from"./@vue-94c9cb71.js";import{u as ee}from"./vue-i18n-2afed284.js";import{n as S}from"./rules-ba8775fb.js";import{a as le,d as te,u as ae,c as ne,g as oe}from"./categories-1a1d9cf4.js";import"./@intlify-eb5de8e7.js";import"./index-93a2b5d7.js";import"./axios-28bc18a3.js";import"./index-9ce2a57d.js";import"./vue-router-4d1c7fe2.js";import"./vuex-76c3bf40.js";import"./vuetify-28085d18.js";/* empty css             */import"./@splidejs-a53e45e1.js";import"./@unhead-e9381f0c.js";import"./unhead-98eeea87.js";import"./hookable-e7fd869b.js";const se={class:"w-100 px-2 py-1 border d-flex align-center rounded justify-space-between mb-1"},ue={class:"d-flex gap-1"},de={class:"pl-4"},ie={class:"w-100 px-2 py-1 border d-flex align-center rounded justify-space-between mb-1"},ce={class:"d-flex gap-1"},re={class:"pl-4"},ve={class:"w-100 px-2 py-1 border d-flex align-center rounded justify-space-between mb-1"},me={class:"d-flex gap-1"},pe=G({__name:"tree",props:{items:{},locale:{}},emits:["addItem","editItem","deleteItem"],setup(j,{emit:I}){const V=j,{items:$,locale:y}=Q(V),g=h(null),c=h(null);return(s,z)=>{const a=r("v-icon"),o=r("v-btn");return k(!0),w(R,null,F(v($),(b,d)=>{var x,U;return k(),w("div",null,[m("div",se,[m("span",null,p(b[`name_${v(y)}`])+" ("+p((x=b.children)==null?void 0:x.length)+")",1),m("div",ue,[e(o,{onClick:u=>s.$emit("addItem",[d],b.id),color:"light-blue-accent-4",size:"30",flat:""},{default:l(()=>[e(a,null,{default:l(()=>[i("mdi-plus")]),_:1})]),_:2},1032,["onClick"]),e(o,{onClick:u=>s.$emit("editItem",b,[d]),color:"light-blue-accent-4",size:"30",flat:""},{default:l(()=>[e(a,null,{default:l(()=>[i("mdi-pencil")]),_:1})]),_:2},1032,["onClick"]),e(o,{onClick:u=>s.$emit("deleteItem",b,[d]),color:"light-blue-accent-4",size:"30",flat:""},{default:l(()=>[e(a,null,{default:l(()=>[i("mdi-delete")]),_:1})]),_:2},1032,["onClick"]),B(e(o,{onClick:u=>g.value=g.value===d?null:d,color:"light-blue-accent-4",size:"30",flat:""},{default:l(()=>[e(a,null,{default:l(()=>[i("mdi-"+p(g.value===d?"chevron-up":"chevron-down"),1)]),_:2},1024)]),_:2},1032,["onClick"]),[[D,((U=b.children)==null?void 0:U.length)!==0]])])]),g.value===d?(k(!0),w(R,{key:0},F(b.children,(u,f)=>{var N,T;return k(),w("div",de,[m("div",ie,[m("span",null,p(u[`name_${v(y)}`])+" ("+p((N=u==null?void 0:u.children)==null?void 0:N.length)+")",1),m("div",ce,[e(o,{onClick:t=>s.$emit("addItem",[d,f],u.id),color:"light-blue-accent-4",size:"30",flat:""},{default:l(()=>[e(a,null,{default:l(()=>[i("mdi-plus")]),_:1})]),_:2},1032,["onClick"]),e(o,{onClick:t=>s.$emit("editItem",u,[d,f]),color:"light-blue-accent-4",size:"30",flat:""},{default:l(()=>[e(a,null,{default:l(()=>[i("mdi-pencil")]),_:1})]),_:2},1032,["onClick"]),e(o,{onClick:t=>s.$emit("deleteItem",u,[d,f]),color:"light-blue-accent-4",size:"30",flat:""},{default:l(()=>[e(a,null,{default:l(()=>[i("mdi-delete")]),_:1})]),_:2},1032,["onClick"]),B(e(o,{onClick:t=>c.value=c.value===f?null:f,color:"light-blue-accent-4",size:"30",flat:""},{default:l(()=>[e(a,null,{default:l(()=>[i("mdi-"+p(c.value===f?"chevron-up":"chevron-down"),1)]),_:2},1024)]),_:2},1032,["onClick"]),[[D,((T=u.children)==null?void 0:T.length)!==0]])])]),c.value===f?(k(!0),w(R,{key:0},F(u.children,(t,n)=>(k(),w("div",re,[m("div",ve,[m("span",null,p(t[`name_${v(y)}`]),1),m("div",me,[e(o,{onClick:O=>s.$emit("editItem",t,[d,f,n]),color:"light-blue-accent-4",size:"30",flat:""},{default:l(()=>[e(a,null,{default:l(()=>[i("mdi-pencil")]),_:1})]),_:2},1032,["onClick"]),e(o,{onClick:O=>s.$emit("deleteItem",t,[d,f,n]),color:"light-blue-accent-4",size:"30",flat:""},{default:l(()=>[e(a,null,{default:l(()=>[i("mdi-delete")]),_:1})]),_:2},1032,["onClick"])])])]))),256)):q("",!0)])}),256)):q("",!0)])}),256)}}}),fe={class:"font-weight-light"},Be=G({__name:"Categories",setup(j){const{t:I,locale:V}=ee(),$=h(!1),y=h(!1),g=h(null);h("");const c=h(!1),s=h([]),z=h([]),a=h([]),o=h({parent:null,name_uz:"",name_ru:"",name_en:"",children:[]}),b={parent:null,name_uz:"",name_ru:"",name_en:""};X(c,t=>t||u());const d=(t,n)=>{o.value.parent=n,a.value=t,c.value=!0},x=(t,n)=>{a.value=n,g.value=t.id,o.value=Object.assign({},t),c.value=!0},U=async(t,n)=>{confirm("Do you delete this item?")&&(n.length===1&&s.value.splice(n[0],1),n.length===2&&s.value[n[0]].children.splice(n[1],1),n.length===3&&s.value[n[0]].children[n[1]].children.splice(n[2],1),await te(t.id))},u=()=>{c.value=!1,Z(()=>{o.value=Object.assign({},b),g.value=null,a.value=[]})},f=async()=>{if(y.value=!0,g.value!==null){const{data:t}=await ae(o.value.id,o.value);t.children&&delete t.children,a.value.length===1&&Object.assign(s.value[a.value[0]],t),a.value.length===2&&Object.assign(s.value[a.value[0]].children[a.value[1]],t),a.value.length===3&&Object.assign(s.value[a.value[0]].children[a.value[1]].children[a.value[2]],t)}else{const{data:t}=await ne(o.value);console.log(t),z.value.push(t),a.value.length===0&&s.value.push({...t,children:[]}),a.value.length===1&&s.value[a.value[0]].children.push({...t,children:[]}),a.value.length===2&&s.value[a.value[0]].children[a.value[1]].children.push({...t,children:[]}),a.value.length===3&&s.value[a.value[0]].children[a.value[1]].children[a.value[2]].children.push({...t,children:[]})}y.value=!1,u()},N=async()=>{$.value=!0;const{data:t}=await oe();t&&(s.value=t,$.value=!1)};return(async()=>{const[t,n]=await Promise.all([le(""),N()]);z.value=t.data.results})(),(t,n)=>{const O=r("v-icon"),E=r("v-btn"),C=r("v-col"),J=r("v-card-title"),L=r("v-card-text"),P=r("v-card"),W=r("v-row"),A=r("v-text-field"),H=r("v-select"),K=r("v-dialog"),M=r("v-container");return k(),Y(M,{fluid:""},{default:l(()=>[e(W,{justify:"space-between",align:"center"},{default:l(()=>[e(C,{cols:"12",class:"pb-0 d-flex justify-end"},{default:l(()=>[e(E,{onClick:n[0]||(n[0]=_=>c.value=!0),flat:"",color:"primary",size:"43",width:"100%"},{default:l(()=>[e(O,null,{default:l(()=>[i("mdi-plus")]),_:1})]),_:1})]),_:1}),e(C,{cols:"12"},{default:l(()=>[e(P,{flat:"",border:""},{default:l(()=>[e(J,{class:"px-4 pt-3 font-weight-light"},{default:l(()=>[i(p(v(I)("products.categories")),1)]),_:1}),e(L,null,{default:l(()=>[B(m("span",null,p(t.$t("no_data")),513),[[D,s.value.length===0&&!$.value]]),B(m("span",null,p(t.$t("loading"))+"...",513),[[D,$.value]]),e(pe,{onAddItem:d,onEditItem:x,onDeleteItem:U,items:s.value,locale:v(V)},null,8,["items","locale"])]),_:1})]),_:1})]),_:1})]),_:1}),e(K,{persistent:"",modelValue:c.value,"onUpdate:modelValue":n[6]||(n[6]=_=>c.value=_),"max-width":"500px",transition:"fade-transition"},{default:l(()=>[e(P,{flat:"",border:"",color:"background"},{default:l(()=>[e(J,{class:"px-4 py-3 d-flex justify-space-between align-center"},{default:l(()=>[m("span",fe,p(v(I)(g.value?"admin.edit_categories":"admin.add_categories")),1),e(E,{flat:"",onClick:n[1]||(n[1]=_=>c.value=!1),size:"32",color:"primary"},{default:l(()=>[e(O,{size:"small"},{default:l(()=>[i("mdi-close")]),_:1})]),_:1})]),_:1}),e(L,{class:"px-4 pt-2 pb-3"},{default:l(()=>[e(W,{class:"pa-2"},{default:l(()=>[e(C,{cols:"12",class:"pa-2"},{default:l(()=>[e(A,{modelValue:o.value.name_uz,"onUpdate:modelValue":n[2]||(n[2]=_=>o.value.name_uz=_),rules:v(S),placeholder:"Nomi (uz)","hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue","rules"])]),_:1}),e(C,{cols:"12",class:"pa-2"},{default:l(()=>[e(A,{modelValue:o.value.name_ru,"onUpdate:modelValue":n[3]||(n[3]=_=>o.value.name_ru=_),rules:v(S),placeholder:"Название (ru)","hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue","rules"])]),_:1}),e(C,{cols:"12",class:"pa-2"},{default:l(()=>[e(A,{modelValue:o.value.name_en,"onUpdate:modelValue":n[4]||(n[4]=_=>o.value.name_en=_),rules:v(S),placeholder:"Title (en)","hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue","rules"])]),_:1}),e(C,{cols:"12",class:"pa-2"},{default:l(()=>[e(H,{modelValue:o.value.parent,"onUpdate:modelValue":n[5]||(n[5]=_=>o.value.parent=_),items:z.value,"item-title":`name_${v(V)}`,"item-value":"id",placeholder:v(I)("admin.parent_category"),"hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue","items","item-title","placeholder"])]),_:1}),e(C,{cols:"12",class:"pa-2"},{default:l(()=>[e(E,{color:"primary",disabled:y.value,block:"",onClick:f,height:"45"},{default:l(()=>[i(p(v(I)("admin.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{Be as default};
