import{d as $e,r as y,c as H,w as Pe,b as u,V as Ie,f as $,g as a,e as h,E as e,u as o,_ as b,a1 as v,m as n,a8 as Se,j as D,a5 as Q,F as W,U as se,n as Be,W as De}from"./@vue-94c9cb71.js";import{l as Ne}from"./lodash-336d108c.js";import{u as Ae}from"./vue-i18n-2afed284.js";import{a as Ee}from"./index-e10e4ff9.js";import{g as Le}from"./brands-995b4aff.js";import{c as N}from"./countries-54da296d.js";import{a as Oe}from"./categories-b9f9e49b.js";import{n as _,c as Fe}from"./constants-919adb61.js";import{g as Re,u as Te,c as qe,d as Me}from"./products-915c4376.js";import"./@intlify-eb5de8e7.js";import"./axios-28bc18a3.js";import"./index-e96974dc.js";import"./vue-router-4d1c7fe2.js";import"./vuex-76c3bf40.js";import"./vuetify-28085d18.js";import"./@splidejs-a53e45e1.js";import"./@unhead-e9381f0c.js";import"./unhead-98eeea87.js";import"./hookable-e7fd869b.js";const He=async(G,V)=>Ee.post(`/api/v1/products/${G}/create_image/`,V),Qe={class:"responsive-datatable"},We=["data-label"],Ge={class:"d-flex w-100 justify-space-end align-center"},Je=["data-label"],Ke=["data-label"],Xe=["data-label"],Ye=["data-label"],Ze=["data-label"],el=["data-label"],ll=["data-label"],al=["data-label"],tl=["data-label"],ol=["data-label"],sl={class:"px-2"},rl={class:"px-2 d-flex align-center justify-space-between"},dl={class:"px-2"},nl={class:"px-2"},il={class:"px-2"},ul={class:"px-2"},cl={class:"px-2"},pl={class:"px-2"},ml={for:"image-files",class:"w-100 py-2 rounded bg-primary d-flex justify-center align-center"},vl={class:"d-flex flex-column align-center mr-4 gap-1"},fl={class:"d-flex align-center justify-space-between w-100"},_l={class:"text-caption"},bl={class:"d-flex flex-column align-center mr-4 gap-1"},yl={class:"d-flex align-center justify-space-between w-100"},Ol=$e({__name:"Products-Admin",setup(G){const V=y(1),P=y(""),x=y(25),I=y(0),A=y(!1),z=y([]),{t:c,locale:C}=Ae(),E=y(!1),S=y([]),k=y([]),w=y(!1),B=y([]),U=y(null),L=y(null),O=y(null),J=d=>({title:d.name,"append-avatar":d.flag}),re=[{title:"products.title",key:"title",sortable:!1},{title:"products.price",key:"price",sortable:!1},{title:"products.category",key:"category",sortable:!1},{title:"products.brand",key:"brand",sortable:!1},{title:"products.model",key:"model",sortable:!1},{title:"products.condition",key:"condition",sortable:!1},{title:"products.shipping",key:"shipping_from",sortable:!1},{title:"products.warranty",key:"warranty",sortable:!1},{title:"products.year",key:"year",sortable:!1},{title:"admin.show",key:"for_sale",sortable:!1},{title:"admin.actions",align:"end",key:"actions",sortable:!1}],s=y({brand:null,category:null,condition:"new",for_sale:!0,characteristics:[],model:"",price:null,sales_areas:[],shipping_from:null,warranty:null,year:null,description_en:"",description_ru:"",description_uz:"",title_en:"",title_ru:"",title_uz:"",is_part:!1}),de=()=>{s.value.characteristics.push({title:{uz:"",ru:"",en:""},value:{uz:"",ru:"",en:""}})},K=(d,t)=>s.value[t].splice(d,1),ne=H(()=>{const d=new URLSearchParams;return V.value&&d.append("page",String(V.value)),x.value&&d.append("limit",String(x.value)),P.value.trim()&&d.append("search",P.value),"?expand=category,brand,images&"+d.toString()}),ie=H(()=>{const d=(V.value-1)*x.value;return`${d+1}-${d+k.value.length} / ${I.value}`}),ue=Ne.debounce(d=>{P.value=d,V.value=1},500),ce=H(()=>re.map(d=>({...d,title:c(d.title)}))),X=async()=>{A.value=!0;const{data:d}=await Re(ne.value);k.value=d.results,I.value=d.count,A.value=!1},pe=d=>URL.createObjectURL(d),me=d=>{z.value.push(...d.target.files)},ve=async()=>{var t,f;const{valid:d}=await((t=O.value)==null?void 0:t.validate());if(d){if(E.value=!0,U.value){typeof s.value.brand=="object"&&(s.value.brand=s.value.brand.id),typeof s.value.category=="object"&&(s.value.category=s.value.category.id),(f=s.value.images)==null||f.map(m=>m.id);const{data:r}=await Te(U.value,s.value);Object.assign(k.value[L.value],{...r,category:B.value.find(m=>m.id===r.category),brand:S.value.find(m=>m.id===r.brand)})}else{const{data:r}=await qe(s.value);U.value=r.id,k.value.push({...r,category:B.value.find(m=>m.id===r.category),brand:S.value.find(m=>m.id===r.brand)})}z.value&&z.value.forEach(async r=>{var m=new FormData;m.append("image",r),await He(U.value,m)}),E.value=!1,Y()}},fe=(d,t)=>{U.value=t.id,L.value=d,s.value=Object.assign({},t),w.value=!0},_e=async(d,t)=>{confirm("Ushbu malumotni o'chirmoqchimisiz?")&&(await Me(t),k.value.splice(d,1))},Y=()=>{w.value=!1,Be(()=>{var d;s.value=Object.assign({},{brand:null,category:null,condition:"new",for_sale:!0,model:"",price:null,sales_areas:null,shipping_from:null,warranty:0,year:0,description_en:"",description_ru:"",description_uz:"",title_en:"",title_ru:"",title_uz:"",is_part:!1}),U.value=null,L.value=null,z.value=[],(d=O.value)==null||d.reset()})};return(async()=>{const[d,t]=await Promise.all([Oe(""),Le("")]);B.value=d.data.results,S.value=t.data.results})(),Pe(w,d=>d||Y()),(d,t)=>{const f=u("v-text-field"),r=u("v-col"),m=u("v-icon"),g=u("v-btn"),Z=u("v-card-title"),F=u("v-chip"),R=u("v-img"),T=u("v-avatar"),be=u("v-list-item-title"),ye=u("v-list-item"),ge=u("v-data-table-server"),ee=u("v-card-text"),le=u("v-card"),j=u("v-select"),he=u("v-pagination"),q=u("v-row"),Ve=u("v-autocomplete"),M=u("v-textarea"),xe=u("v-table"),we=u("v-file-input"),ae=u("v-slide-group-item"),te=u("v-slide-group"),oe=u("v-switch"),Ue=u("v-form"),ze=u("v-dialog"),ke=u("v-container"),Ce=Ie("ripple");return h(),$(ke,{fluid:"",class:"py-0"},{default:a(()=>[e(q,{justify:"space-between",align:"center"},{default:a(()=>[e(r,{cols:"9",sm:"6",md:"4",class:"pb-0 pr-0"},{default:a(()=>[e(f,{"bg-color":"surface","onUpdate:modelValue":o(ue),placeholder:o(c)("admin.search"),"append-inner-icon":"mdi-magnify","hide-details":"",density:"compact",variant:"solo",flat:"",class:"border rounded"},null,8,["onUpdate:modelValue","placeholder"])]),_:1}),e(r,{cols:"3",sm:"4",md:"2",class:"pb-0 d-flex justify-end"},{default:a(()=>[e(g,{onClick:t[0]||(t[0]=l=>w.value=!0),elevation:"2",color:"primary",size:"40",width:"100%"},{default:a(()=>[e(m,null,{default:a(()=>[b("mdi-plus")]),_:1})]),_:1})]),_:1}),e(r,{cols:"12"},{default:a(()=>[e(le,{flat:"",border:""},{default:a(()=>[e(Z,{class:"px-4 pt-3"},{default:a(()=>[b(v(o(c)("admin.products")),1)]),_:1}),e(ee,{class:"px-0"},{default:a(()=>[n("div",Qe,[e(ge,{search:P.value,density:"comfortable",loading:A.value,hover:"","items-length":I.value,headers:ce.value,"no-data-text":o(c)("no_data"),"loading-text":o(c)("loading")+"...",items:k.value,"item-value":"id","items-per-page":x.value,"onUpdate:itemsPerPage":t[1]||(t[1]=l=>x.value=l),"onUpdate:options":X},{bottom:a(()=>[]),"item.actions":a(({item:l,index:i,column:p})=>[n("td",{"data-label":p.title},[n("div",Ge,[e(g,{onClick:je=>fe(i,l),color:"light-blue-accent-4",size:"30",flat:"",class:"mr-1"},{default:a(()=>[e(m,null,{default:a(()=>[b("mdi-pencil")]),_:1})]),_:2},1032,["onClick"]),e(g,{onClick:je=>_e(i,l.id),color:"red",size:"30",flat:""},{default:a(()=>[e(m,null,{default:a(()=>[b("mdi-delete")]),_:1})]),_:2},1032,["onClick"])])],8,We)]),"item.title":a(({item:l,column:i})=>[n("td",{"data-label":i.title},v(l[`title_${o(C)}`]),9,Je)]),"item.price":a(({item:l,column:i})=>[n("td",{"data-label":i.title},v(l.price)+" $",9,Ke)]),"item.category":a(({item:l,column:i})=>[n("td",{"data-label":i.title},[l.category.id?(h(),$(F,{key:0,class:"text-caption",label:"",density:"compact",color:"primary"},{default:a(()=>[b(v(l.category[`name_${o(C)}`]||""),1)]),_:2},1024)):Se("",!0)],8,Xe)]),"item.brand":a(({item:l,column:i})=>[n("td",{"data-label":i.title},v(l.brand.name),9,Ye)]),"item.model":a(({item:l,column:i})=>[n("td",{"data-label":i.title},v(l.model),9,Ze)]),"item.warranty":a(({item:l,column:i})=>[n("td",{"data-label":i.title},v(l.warranty),9,el)]),"item.year":a(({item:l,column:i})=>[n("td",{"data-label":i.title},v(l.year),9,ll)]),"item.shipping_from":a(({item:l,column:i})=>[n("td",{"data-label":i.title},[e(ye,{nav:"",density:"compact"},{prepend:a(()=>[e(T,{size:"30"},{default:a(()=>{var p;return[e(R,{cover:"",src:(p=o(N)[l.shipping_from])==null?void 0:p.flag},null,8,["src"])]}),_:2},1024)]),default:a(()=>[e(be,null,{default:a(()=>{var p;return[b(v((p=o(N)[l.shipping_from])==null?void 0:p.name),1)]}),_:2},1024)]),_:2},1024)],8,al)]),"item.condition":a(({item:l,column:i})=>[n("td",{"data-label":i.title},[e(F,{density:"compact",label:"",color:{new:"green",openbox:"blue",refurbished:"amber",used:"red"}[l.condition]},{default:a(()=>[b(v(o(c)("condition."+l.condition)),1)]),_:2},1032,["color"])],8,tl)]),"item.for_sale":a(({item:l,column:i})=>[n("td",{"data-label":i.title},[e(F,{density:"compact",label:"",color:l.for_sale?"green":"red"},{default:a(()=>[b(v(l.for_sale),1)]),_:2},1032,["color"])],8,ol)]),_:1},8,["search","loading","items-length","headers","no-data-text","loading-text","items","items-per-page"])])]),_:1})]),_:1})]),_:1}),e(r,{cols:"12",sm:"5",class:"pt-0 pb-1 d-flex align-center"},{default:a(()=>[e(j,{"bg-color":"surface",modelValue:x.value,"onUpdate:modelValue":t[2]||(t[2]=l=>x.value=l),transition:"fade-transition","hide-details":"",density:"compact",variant:"solo",flat:"",class:"border rounded",items:[10,25,50,100,150]},null,8,["modelValue"]),e(f,{"bg-color":"surface","hide-details":"",density:"compact",variant:"solo",flat:"",class:"border rounded ml-3","model-value":ie.value,readonly:""},null,8,["model-value"])]),_:1}),e(r,{cols:"12",sm:"7",md:"4",class:"pt-0 pl-0 pb-1 pr-2 d-flex justify-end align-center"},{default:a(()=>[e(he,{"bg-color":"surface",modelValue:V.value,"onUpdate:modelValue":[t[3]||(t[3]=l=>V.value=l),X],length:Math.ceil(I.value/x.value),"active-color":"primary",size:"40","total-visible":"3",variant:"flat"},null,8,["modelValue","length"])]),_:1})]),_:1}),e(ze,{persistent:"",modelValue:w.value,"onUpdate:modelValue":t[22]||(t[22]=l=>w.value=l),width:"500",transition:"fade-transition"},{default:a(()=>[e(le,{elevation:"1",border:"",color:"background"},{default:a(()=>[e(Z,{class:"px-4 py-3 d-flex justify-space-between align-center"},{default:a(()=>[n("span",null,v(o(c)(U.value?"admin.edit_product":"admin.add_product")),1),e(g,{flat:"",onClick:t[4]||(t[4]=l=>w.value=!1),size:"32",color:"primary"},{default:a(()=>[e(m,{size:"small"},{default:a(()=>[b("mdi-close")]),_:1})]),_:1})]),_:1}),e(ee,{class:"px-4 py-4"},{default:a(()=>[e(Ue,{class:"w-100 form-card",ref_key:"form",ref:O},{default:a(()=>[e(q,{class:"pa-2"},{default:a(()=>[e(r,{cols:"12",class:"pa-2"},{default:a(()=>[e(f,{modelValue:s.value.title_uz,"onUpdate:modelValue":t[5]||(t[5]=l=>s.value.title_uz=l),rules:o(_),placeholder:"Nomi (uz)","hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",class:"pa-2"},{default:a(()=>[e(f,{modelValue:s.value.title_ru,"onUpdate:modelValue":t[6]||(t[6]=l=>s.value.title_ru=l),rules:o(_),placeholder:"Название (ru)","hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",class:"pa-2"},{default:a(()=>[e(f,{modelValue:s.value.title_en,"onUpdate:modelValue":t[7]||(t[7]=l=>s.value.title_en=l),rules:o(_),placeholder:"Title (en)","hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",class:"pa-2"},{default:a(()=>[e(f,{modelValue:s.value.model,"onUpdate:modelValue":t[8]||(t[8]=l=>s.value.model=l),rules:o(_),placeholder:o(c)("products.model"),"hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue","rules","placeholder"])]),_:1}),e(r,{cols:"12",sm:"6",class:"pa-2"},{default:a(()=>[e(f,{density:"compact","bg-color":"surface",modelValue:s.value.price,"onUpdate:modelValue":t[9]||(t[9]=l=>s.value.price=l),rules:o(_),flat:"",class:"border rounded",placeholder:o(c)("products.price"),type:"number","hide-details":"",variant:"solo",color:"primary"},null,8,["modelValue","rules","placeholder"])]),_:1}),e(r,{cols:"12",sm:"6",class:"pa-2"},{default:a(()=>[e(j,{rules:o(_),flat:"",class:"border rounded",density:"compact","bg-color":"surface",modelValue:s.value.condition,"onUpdate:modelValue":t[10]||(t[10]=l=>s.value.condition=l),items:o(Fe),placeholder:o(c)("products.condition"),"item-title":"title_"+o(C),"hide-details":"","item-value":"value",variant:"solo",color:"primary"},null,8,["rules","modelValue","items","placeholder","item-title"])]),_:1}),e(r,{cols:"12",sm:"6",class:"pa-2"},{default:a(()=>[e(f,{density:"compact","bg-color":"surface",modelValue:s.value.warranty,"onUpdate:modelValue":t[11]||(t[11]=l=>s.value.warranty=l),rules:o(_),min:"0",flat:"",class:"border rounded",placeholder:o(c)("products.warranty"),type:"number","hide-details":"",variant:"solo",color:"primary"},null,8,["modelValue","rules","placeholder"])]),_:1}),e(r,{cols:"12",sm:"6",class:"pa-2"},{default:a(()=>[e(f,{density:"compact","bg-color":"surface",modelValue:s.value.year,"onUpdate:modelValue":t[12]||(t[12]=l=>s.value.year=l),rules:o(_),min:"1000",flat:"",class:"border rounded",placeholder:o(c)("products.year"),type:"number","hide-details":"",variant:"solo",color:"primary"},null,8,["modelValue","rules","placeholder"])]),_:1}),e(r,{cols:"12",class:"pa-2"},{default:a(()=>[e(j,{flat:"",class:"border rounded",density:"compact","bg-color":"surface",modelValue:s.value.category,"onUpdate:modelValue":t[13]||(t[13]=l=>s.value.category=l),items:B.value,placeholder:o(c)("products.category"),"item-title":`name_${o(C)}`,"hide-details":"","item-value":"id",variant:"solo",color:"primary"},null,8,["modelValue","items","placeholder","item-title"])]),_:1}),e(r,{cols:"12",class:"pa-2"},{default:a(()=>[e(j,{rules:o(_),flat:"",class:"border rounded",density:"compact","bg-color":"surface",modelValue:s.value.brand,"onUpdate:modelValue":t[14]||(t[14]=l=>s.value.brand=l),items:S.value,placeholder:o(c)("products.brand"),"item-title":"name","hide-details":"","item-value":"id",variant:"solo",color:"primary"},null,8,["rules","modelValue","items","placeholder"])]),_:1}),e(r,{cols:"12",class:"pa-2"},{default:a(()=>[e(j,{"item-props":J,flat:"",class:"border rounded",density:"compact","bg-color":"surface",modelValue:s.value.shipping_from,"onUpdate:modelValue":t[15]||(t[15]=l=>s.value.shipping_from=l),items:o(N),placeholder:o(c)("products.shipping"),"item-title":"name","hide-details":"","item-value":"id",variant:"solo",color:"primary"},null,8,["modelValue","items","placeholder"])]),_:1}),e(r,{cols:"12",class:"pa-2"},{default:a(()=>[e(Ve,{"item-props":J,flat:"",class:"border rounded",density:"compact","bg-color":"surface",multiple:"",chips:"",modelValue:s.value.sales_areas,"onUpdate:modelValue":t[16]||(t[16]=l=>s.value.sales_areas=l),items:o(N),placeholder:o(c)("products.sales_area"),"item-title":"name","hide-details":"","item-value":"id",variant:"solo",color:"primary"},null,8,["modelValue","items","placeholder"])]),_:1}),e(r,{cols:"12",class:"pa-2"},{default:a(()=>[e(M,{rules:o(_),"no-resize":"",flat:"",class:"border rounded",density:"compact","bg-color":"surface",modelValue:s.value.description_uz,"onUpdate:modelValue":t[17]||(t[17]=l=>s.value.description_uz=l),placeholder:"Ma'lumot (uz)","hide-details":"",color:"primary",variant:"solo"},null,8,["rules","modelValue"])]),_:1}),e(r,{cols:"12",class:"pa-2"},{default:a(()=>[e(M,{rules:o(_),"no-resize":"",flat:"",class:"border rounded",density:"compact","bg-color":"surface",modelValue:s.value.description_ru,"onUpdate:modelValue":t[18]||(t[18]=l=>s.value.description_ru=l),placeholder:"Описание (ru)","hide-details":"",color:"primary",variant:"solo"},null,8,["rules","modelValue"])]),_:1}),e(r,{cols:"12",class:"pa-2"},{default:a(()=>[e(M,{rules:o(_),"no-resize":"",flat:"",class:"border rounded",density:"compact","bg-color":"surface",modelValue:s.value.description_en,"onUpdate:modelValue":t[19]||(t[19]=l=>s.value.description_en=l),placeholder:"Description (en)","hide-details":"",color:"primary",variant:"solo"},null,8,["rules","modelValue"])]),_:1}),(h(!0),D(W,null,Q(s.value.characteristics,(l,i)=>(h(),$(r,{cols:"12",class:"pa-2",key:i},{default:a(()=>[e(xe,{density:"compact",class:"border rounded pb-2"},{default:a(()=>[n("thead",null,[n("tr",null,[n("td",sl,v(o(c)("products.characteristics")),1),n("td",rl,[b(v({uz:"Qiymat",ru:"Значение",en:"Value"}[o(C)])+" ",1),e(g,{size:"20",color:"red",flat:"",onClick:p=>K(i,"characteristics")},{default:a(()=>[e(m,null,{default:a(()=>[b("mdi-close")]),_:1})]),_:2},1032,["onClick"])])])]),n("tbody",null,[n("tr",null,[n("td",dl,[e(f,{modelValue:l.title.uz,"onUpdate:modelValue":p=>l.title.uz=p,rules:o(_),placeholder:"uz","hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue","onUpdate:modelValue","rules"])]),n("td",nl,[e(f,{modelValue:l.value.uz,"onUpdate:modelValue":p=>l.value.uz=p,rules:o(_),placeholder:"uz","hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue","onUpdate:modelValue","rules"])])]),n("tr",null,[n("td",il,[e(f,{modelValue:l.title.ru,"onUpdate:modelValue":p=>l.title.ru=p,rules:o(_),placeholder:"ru","hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue","onUpdate:modelValue","rules"])]),n("td",ul,[e(f,{modelValue:l.value.ru,"onUpdate:modelValue":p=>l.value.ru=p,rules:o(_),placeholder:"ru","hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue","onUpdate:modelValue","rules"])])]),n("tr",null,[n("td",cl,[e(f,{modelValue:l.title.en,"onUpdate:modelValue":p=>l.title.en=p,rules:o(_),placeholder:"en","hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue","onUpdate:modelValue","rules"])]),n("td",pl,[e(f,{modelValue:l.value.en,"onUpdate:modelValue":p=>l.value.en=p,rules:o(_),placeholder:"en","hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue","onUpdate:modelValue","rules"])])])])]),_:2},1024)]),_:2},1024))),128)),e(r,{cols:"12"},{default:a(()=>[e(g,{onClick:de,block:"",color:"primary",class:"text-none",flat:""},{default:a(()=>[b(v(o(c)("admin.add_charac")),1)]),_:1})]),_:1}),e(r,{cols:"12",class:"pa-2"},{default:a(()=>[e(q,null,{default:a(()=>[e(r,{cols:"12",class:"px-4"},{default:a(()=>[se((h(),D("label",ml,[b(v(o(c)("admin.add_image")),1)])),[[Ce]]),se(e(we,{id:"image-files",flat:"",class:"border rounded",density:"compact","bg-color":"surface",onChange:me,max:"10",label:"Фотография",multiple:"",counter:"","hide-details":"",variant:"solo",color:"primary","prepend-icon":""},null,512),[[De,!1]])]),_:1}),e(r,{cols:"12"},{default:a(()=>[e(te,{"show-arrows":""},{default:a(()=>[(h(!0),D(W,null,Q(z.value,(l,i)=>(h(),$(ae,{key:i},{default:a(()=>[n("div",vl,[e(T,{rounded:"",size:"80"},{default:a(()=>[e(R,{cover:"",src:pe(l)},null,8,["src"])]),_:2},1024),n("div",fl,[n("span",_l,v(l.name.slice(0,8))+"...",1),e(g,{size:"20",color:"red",flat:"",onClick:p=>z.value.splice(i,1)},{default:a(()=>[e(m,{size:"small"},{default:a(()=>[b("mdi-delete")]),_:1})]),_:2},1032,["onClick"])])])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{cols:"12"},{default:a(()=>[e(te,{"show-arrows":""},{default:a(()=>[(h(!0),D(W,null,Q(s.value.images,(l,i)=>(h(),$(ae,{key:i},{default:a(()=>[n("div",bl,[e(T,{rounded:"",size:"80",color:"grey-lighten-2"},{default:a(()=>[e(R,{cover:"",src:l==null?void 0:l.thumbnail},null,8,["src"])]),_:2},1024),n("div",yl,[n("span",null,v(i),1),e(g,{size:"20",color:"red",flat:"",onClick:p=>K(i,"images")},{default:a(()=>[e(m,{size:"small"},{default:a(()=>[b("mdi-delete")]),_:1})]),_:2},1032,["onClick"])])])]),_:2},1024))),128))]),_:1})]),_:1}),e(r,{cols:"4",class:"pa-2"},{default:a(()=>[e(oe,{modelValue:s.value.for_sale,"onUpdate:modelValue":t[20]||(t[20]=l=>s.value.for_sale=l),"hide-details":"",density:"compact",color:"primary",inset:"",label:o(c)("admin.show")},null,8,["modelValue","label"])]),_:1}),e(r,{cols:"4",class:"pa-2"},{default:a(()=>[e(oe,{modelValue:s.value.is_part,"onUpdate:modelValue":t[21]||(t[21]=l=>s.value.is_part=l),"hide-details":"",density:"compact",color:"primary",inset:"",label:o(c)("admin.is_part")},null,8,["modelValue","label"])]),_:1}),e(r,{cols:"4",class:"pa-2"},{default:a(()=>[e(g,{disabled:E.value,color:"primary",flat:"",block:"",onClick:ve,height:"45"},{default:a(()=>[b(v(o(c)("admin.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{Ol as default};
