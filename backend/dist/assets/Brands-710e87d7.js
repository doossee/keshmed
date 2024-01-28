import{l as re}from"./lodash-336d108c.js";import{u as ie}from"./vue-i18n-2afed284.js";import{n as V}from"./rules-ba8775fb.js";import{c as D}from"./countries-54da296d.js";import{g as ue,d as ce,u as pe,c as me}from"./brands-995b4aff.js";import{d as ve,r as i,c as N,w as _e,b as n,f as fe,g as a,n as ge,e as be,E as e,u as d,_ as v,a1 as x,m as p}from"./@vue-94c9cb71.js";import"./@intlify-eb5de8e7.js";import"./index-e10e4ff9.js";import"./axios-28bc18a3.js";import"./index-e96974dc.js";import"./vue-router-4d1c7fe2.js";import"./vuex-76c3bf40.js";import"./vuetify-28085d18.js";import"./@splidejs-a53e45e1.js";import"./@unhead-e9381f0c.js";import"./unhead-98eeea87.js";import"./hookable-e7fd869b.js";const ye={class:"responsive-datatable"},he=["data-label"],Ve=p("span",null,null,-1),xe=["data-label"],we=["data-label"],ze=["data-label"],ke={class:"font-weight-light"},Pe=ve({__name:"Brands",setup(Ue){const{t:u}=ie(),b=i(1),y=i(25),U=i(0),j=i(!1),_=i(null),R=i(""),f=i([]),w=i(null),z=i(-1),m=i(!1),C=i(!1),S=i(null),H=o=>({title:o.name,"append-avatar":o.flag}),P=N(()=>{var o;return((o=_.value)==null?void 0:o.length)>0?URL.createObjectURL(_.value[0]):"/img/nophoto.jpg"}),r=i({name:"",country:null,description_uz:"",description_ru:"",description_en:""}),q=[{title:"admin.photo",key:"photo",sortable:!1},{title:"products.title",key:"name"},{title:"products.shipping",key:"country"},{title:"admin.actions",align:"end",key:"actions",sortable:!1}],G=N(()=>{const o=(b.value-1)*y.value;return`${o+1}-${o+f.value.length} / ${U.value}`}),J=re.debounce(o=>{R.value=o,b.value=1},500),K=N(()=>q.map(o=>({...o,title:u(o.title)})));_e(m,o=>o||E());const Q=(o,l)=>{z.value=l,w.value=o.id,r.value=Object.assign({},o),m.value=!0},W=async(o,l)=>{confirm("Do you delete this item?")&&(await ce(o),f.value.splice(l,1))},E=()=>{m.value=!1,ge(()=>{r.value=Object.assign({},{name:"",country:null,description_uz:"",description_ru:"",description_en:""}),w.value=null,z.value=-1})},X=async()=>{var g;C.value=!0;const{valid:o}=await((g=S.value)==null?void 0:g.validate());if(o){var l=new FormData;if(Object.keys(r.value).map(s=>{l.append(s,r.value[s])}),_.value&&l.append("image",_.value[0]),z.value>-1){const{data:s}=await pe(w.value);Object.assign(f.value[z.value],s)}else{const{data:s}=await me(l);f.value.push(s)}C.value=!1,E()}},L=async()=>{j.value=!0;const{data:o}=await ue("");f.value=o.results,U.value=o.results.length,j.value=!1};return L(),(o,l)=>{const g=n("v-text-field"),s=n("v-col"),k=n("v-icon"),h=n("v-btn"),M=n("v-card-title"),B=n("v-img"),I=n("v-avatar"),Y=n("v-list-item-title"),Z=n("v-list-item"),ee=n("v-data-table"),T=n("v-card-text"),A=n("v-card"),F=n("v-select"),ae=n("v-pagination"),$=n("v-row"),O=n("v-textarea"),le=n("v-file-input"),te=n("v-form"),oe=n("v-dialog"),se=n("v-container");return be(),fe(se,{fluid:"",class:"py-0"},{default:a(()=>[e($,{justify:"space-between",align:"center"},{default:a(()=>[e(s,{cols:"9",sm:"6",md:"4",class:"pb-0 pr-0"},{default:a(()=>[e(g,{"bg-color":"surface","onUpdate:modelValue":d(J),placeholder:d(u)("admin.search"),"append-inner-icon":"mdi-magnify","hide-details":"",flat:"",density:"compact",variant:"solo",class:"border rounded"},null,8,["onUpdate:modelValue","placeholder"])]),_:1}),e(s,{cols:"3",sm:"4",md:"2",class:"pb-0 d-flex justify-end"},{default:a(()=>[e(h,{onClick:l[0]||(l[0]=t=>m.value=!0),color:"primary",size:"40",width:"100%"},{default:a(()=>[e(k,null,{default:a(()=>[v("mdi-plus")]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:a(()=>[e(A,{flat:"",border:""},{default:a(()=>[e(M,{class:"px-4 pt-3 font-weight-light"},{default:a(()=>[v(x(d(u)("products.brands")),1)]),_:1}),e(T,{class:"px-0"},{default:a(()=>[p("div",ye,[e(ee,{page:b.value,"item-value":"id",search:R.value,loading:j.value,hover:"",items:f.value,"items-per-page":y.value,"no-data-text":d(u)("no_data"),"loading-text":d(u)("loading")+"...",headers:K.value,density:"comfortable"},{bottom:a(()=>[]),"item.actions":a(({item:t,index:c,column:ne})=>[p("td",{"data-label":ne.title,class:"d-flex justify-space-between align-center"},[Ve,p("div",null,[e(h,{onClick:de=>Q(t,c),color:"light-blue-accent-4",size:"30",flat:"",class:"mr-1"},{default:a(()=>[e(k,null,{default:a(()=>[v("mdi-pencil")]),_:1})]),_:2},1032,["onClick"]),e(h,{onClick:de=>W(t.id,c),color:"red",size:"30",flat:""},{default:a(()=>[e(k,null,{default:a(()=>[v("mdi-delete")]),_:1})]),_:2},1032,["onClick"])])],8,he)]),"item.photo":a(({item:t,column:c})=>[p("td",{"data-label":c.title},[e(I,{size:"40",rounded:""},{default:a(()=>[e(B,{src:t.thumbnail||"/img/nophoto.jpg",cover:""},null,8,["src"])]),_:2},1024)],8,xe)]),"item.name":a(({item:t,column:c})=>[p("td",{"data-label":c.title},x(t.name),9,we)]),"item.country":a(({item:t,column:c})=>[p("td",{"data-label":c.title},[e(Z,{nav:"",density:"compact"},{prepend:a(()=>[e(I,{size:"30"},{default:a(()=>[e(B,{cover:"",src:d(D)[t.country].flag},null,8,["src"])]),_:2},1024)]),default:a(()=>[e(Y,null,{default:a(()=>[v(x(d(D)[t.country].name),1)]),_:2},1024)]),_:2},1024)],8,ze)]),_:1},8,["page","search","loading","items","items-per-page","no-data-text","loading-text","headers"])])]),_:1})]),_:1})]),_:1}),e(s,{cols:"12",sm:"4",class:"pt-0 pb-1 d-flex align-center"},{default:a(()=>[e(F,{"bg-color":"surface",modelValue:y.value,"onUpdate:modelValue":l[1]||(l[1]=t=>y.value=t),transition:"fade-transition","hide-details":"",flat:"",density:"compact",variant:"solo",class:"border rounded",items:[10,25,50,100,150]},null,8,["modelValue"]),e(g,{"bg-color":"surface",variant:"solo",class:"border rounded ml-3","hide-details":"",flat:"",density:"compact","model-value":G.value,readonly:""},null,8,["model-value"])]),_:1}),e(s,{cols:"12",sm:"4",md:"4",class:"pt-0 pl-0 pb-1 pr-2 d-flex justify-end align-center"},{default:a(()=>[e(ae,{"bg-color":"surface",modelValue:b.value,"onUpdate:modelValue":[l[2]||(l[2]=t=>b.value=t),L],length:Math.floor(U.value/y.value),"active-color":"primary",size:"40","total-visible":"3",variant:"flat"},null,8,["modelValue","length"])]),_:1})]),_:1}),e(oe,{persistent:"",modelValue:m.value,"onUpdate:modelValue":l[10]||(l[10]=t=>m.value=t),"max-width":"500px",transition:"fade-transition"},{default:a(()=>[e(A,{flat:"",border:"",color:"background"},{default:a(()=>[e(M,{class:"px-4 py-3 d-flex justify-space-between align-center"},{default:a(()=>[p("span",ke,x(d(u)(w.value?"admin.edit_brands":"admin.add_brands")),1),e(h,{flat:"",onClick:l[3]||(l[3]=t=>m.value=!1),size:"32",color:"primary"},{default:a(()=>[e(k,{size:"small"},{default:a(()=>[v("mdi-close")]),_:1})]),_:1})]),_:1}),e(T,{class:"px-4 pt-2 pb-3"},{default:a(()=>[e(te,{class:"w-100 form-card",ref_key:"form",ref:S},{default:a(()=>[e($,{class:"pa-2"},{default:a(()=>[e(s,{cols:"12",class:"pa-2"},{default:a(()=>[e(g,{modelValue:r.value.name,"onUpdate:modelValue":l[4]||(l[4]=t=>r.value.name=t),rules:d(V),placeholder:d(u)("products.title"),"hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue","rules","placeholder"])]),_:1}),e(s,{cols:"12",class:"pa-2"},{default:a(()=>[e(F,{"item-props":H,rules:d(V),flat:"",class:"border rounded",density:"compact","bg-color":"surface",modelValue:r.value.country,"onUpdate:modelValue":l[5]||(l[5]=t=>r.value.country=t),items:d(D),placeholder:d(u)("products.country"),"item-title":"name","hide-details":"","item-value":"id",variant:"solo",color:"primary"},null,8,["rules","modelValue","items","placeholder"])]),_:1}),e(s,{cols:"12",class:"pa-2"},{default:a(()=>[e(O,{rules:d(V),"no-resize":"",flat:"",class:"border rounded",density:"compact","bg-color":"surface",modelValue:r.value.description_uz,"onUpdate:modelValue":l[6]||(l[6]=t=>r.value.description_uz=t),placeholder:"Ma'lumot (uz)","hide-details":"",color:"primary",variant:"solo"},null,8,["rules","modelValue"])]),_:1}),e(s,{cols:"12",class:"pa-2"},{default:a(()=>[e(O,{rules:d(V),"no-resize":"",flat:"",class:"border rounded",density:"compact","bg-color":"surface",modelValue:r.value.description_ru,"onUpdate:modelValue":l[7]||(l[7]=t=>r.value.description_ru=t),placeholder:"Описание (ru)","hide-details":"",color:"primary",variant:"solo"},null,8,["rules","modelValue"])]),_:1}),e(s,{cols:"12",class:"pa-2"},{default:a(()=>[e(O,{rules:d(V),"no-resize":"",flat:"",class:"border rounded",density:"compact","bg-color":"surface",modelValue:r.value.description_en,"onUpdate:modelValue":l[8]||(l[8]=t=>r.value.description_en=t),placeholder:"Description (en)","hide-details":"",color:"primary",variant:"solo"},null,8,["rules","modelValue"])]),_:1}),e(s,{cols:"12",class:"pa-2"},{default:a(()=>[e($,null,{default:a(()=>[e(s,{cols:"4",sm:"2",class:"pr-0"},{default:a(()=>[e(I,{rounded:"",size:"40"},{default:a(()=>[e(B,{cover:"",src:P.value},null,8,["src"])]),_:1})]),_:1}),e(s,{cols:"8",sm:"10",class:"pl-0"},{default:a(()=>[e(le,{flat:"",class:"border rounded",density:"compact","bg-color":"surface",modelValue:_.value,"onUpdate:modelValue":l[9]||(l[9]=t=>_.value=t),max:"10",label:d(u)("admin.photo"),"hide-details":"",variant:"solo",color:"primary","prepend-icon":""},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1}),e(s,{cols:"12",class:"pa-2"},{default:a(()=>[e(h,{disabled:C.value,color:"primary",block:"",onClick:X,height:"45"},{default:a(()=>[v(x(d(u)("admin.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{Pe as default};
