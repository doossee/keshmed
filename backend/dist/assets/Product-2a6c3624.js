import{u as we}from"./vuex-76c3bf40.js";import{u as Ve}from"./vue-i18n-2afed284.js";import{u as $e}from"./vue-router-4d1c7fe2.js";import{n as D}from"./rules-ba8775fb.js";import{c as ze}from"./orders-3b5c5b4a.js";import{c as O}from"./countries-54da296d.js";import{a as Pe,g as Se}from"./products-ac1276ed.js";import{S as Ce,a as je}from"./@splidejs-a53e45e1.js";import{_ as Ee}from"./AppProductCard.vue_vue_type_script_setup_true_lang-2161eade.js";import{d as Ue,r as P,H as Be,b as n,f as y,g as e,e as _,E as t,_ as f,a1 as o,u as a,a8 as S,j as R,a5 as L,F as M,m as l,a9 as De,aa as Oe}from"./@vue-94c9cb71.js";import"./@intlify-eb5de8e7.js";import"./index-5b614702.js";import"./axios-28bc18a3.js";import"./index-19937e3d.js";import"./vuetify-28085d18.js";import"./@unhead-e9381f0c.js";import"./unhead-98eeea87.js";import"./hookable-e7fd869b.js";const Re={class:"text-h5 text-primary font-weight-medium"},Ae={class:"text-right"},Ne={class:"text-right"},Te={class:"text-right"},Ie={class:"text-right"},Fe={class:"d-flex align-center gap-1 justify-end"},Le={class:"text-right"},Me={class:"text-primary text-right"},qe={class:"text-right"},He={class:"text-right"},Ke={class:"text-right"},Qe={class:"text-right"},Ge={style:{"white-space":"pre-line"}},Je={class:"w-100 d-flex pb-5 justify-space-between align-center"},We={class:"text-primary"},vt=Ue({__name:"Product",setup(Xe){const{params:Q}=$e(),{getters:ae,commit:G}=we(),{locale:x,t:d}=Ve(),le={rewind:!0,arrows:!1,pagination:!1,gap:"10px",perMove:1,perPage:4,breakpoints:{550:{perPage:1},700:{perPage:2},960:{perPage:3}}},A=P(!1),k=P(!1),q=P(0),r=P(null),J=P([]),W=P(null),v=Be({checked:!1,first_name:"",last_name:"",message:"",country:null,phone:"",product:Q.id}),X=i=>!!ae.saved.find(c=>c._id===i),oe=i=>{X(i._id)?G("REMOVE_TO_SAVE",i):G("ADD_TO_SAVE",i)},se=i=>({title:i.name,"append-avatar":i.flag}),re=async()=>{k.value=!0;try{const{data:i}=await Pe(Q.id,"expand=images,category,brand");r.value=i,console.log(i),k.value=!1,de(i.category.id,i.brand.id)}catch{alert({uz:"Bunday Qurilma topilmadi!",ru:"Данное оборудование не найдено!",en:"This Equipment not found!"}[x.value]),window.location.href="/products"}},ne=async()=>{var c;const{valid:i}=await((c=W.value)==null?void 0:c.validate());i&&(await ze(v),A.value=!1,alert("Succesfully sended!"))},de=async(i,c)=>{const{data:C}=await Se(`?category=${i}&brand=${c}&page=1&limit=10&expand=images,brand`);J.value=C.results};return re(),(i,c)=>{const C=n("router-link"),b=n("v-card-text"),z=n("v-card"),p=n("v-col"),N=n("v-img"),T=n("v-avatar"),ce=n("v-divider"),ue=n("v-slide-group-item"),ie=n("v-slide-group"),pe=n("v-card-actions"),I=n("v-skeleton-loader"),Y=n("v-card-title"),_e=n("v-rating"),me=n("v-icon"),j=n("v-btn"),fe=n("v-list-item"),ve=n("v-list"),ge=n("v-menu"),Z=n("v-table"),H=n("v-row"),K=n("v-text-field"),he=n("v-textarea"),ye=n("v-select"),xe=n("v-form"),be=n("v-dialog"),ke=n("v-container");return _(),y(ke,null,{default:e(()=>[t(H,null,{default:e(()=>[k.value?S("",!0):(_(),y(p,{key:0,cols:"12"},{default:e(()=>[t(z,{border:"",flat:""},{default:e(()=>[t(b,{class:"d-flex gap-1 align-center"},{default:e(()=>{var s,u,m,g,h,V,E,U;return[(m=(u=(s=r.value)==null?void 0:s.category)==null?void 0:u.parent)!=null&&m.parent?(_(),y(C,{key:0,class:"text-decoration-none text-black text-hover-link",to:`/products?category=${r.value.category.parent.parent.id}`},{default:e(()=>[f(o(r.value.category.parent.parent[`name_${a(x)}`])+" /",1)]),_:1},8,["to"])):S("",!0),(h=(g=r.value)==null?void 0:g.category)!=null&&h.parent?(_(),y(C,{key:1,class:"text-decoration-none text-black text-hover-link",to:`/products?category=${(V=r.value.category.parent)==null?void 0:V.id}`},{default:e(()=>[f(o(r.value.category.parent[`name_${a(x)}`])+" /",1)]),_:1},8,["to"])):S("",!0),(U=(E=r.value)==null?void 0:E.category)!=null&&U.id?(_(),y(C,{key:2,class:"text-decoration-none text-black text-hover-link",to:`/products?category=${r.value.category.id}`},{default:e(()=>[f(o(r.value.category[`name_${a(x)}`]),1)]),_:1},8,["to"])):S("",!0)]}),_:1})]),_:1})]),_:1})),t(p,{cols:"12",sm:"6"},{default:e(()=>[t(I,{loading:k.value,type:"image,image,button,button,button,button"},{default:e(()=>[t(z,{flat:"",width:"100%",border:""},{default:e(()=>{var s;return[t(T,{rounded:"",size:"100%"},{default:e(()=>{var u,m,g,h;return[t(N,{alt:(u=r.value)==null?void 0:u.title_ru,height:"400",width:"100%",src:((h=(g=(m=r.value)==null?void 0:m.images)==null?void 0:g[q.value])==null?void 0:h.image)||"/img/nophoto.jpg"},null,8,["alt","src"])]}),_:1}),t(ce),((s=r.value)==null?void 0:s.images.length)!==0?(_(),y(pe,{key:0,class:"pa-0 d-flex justify-center"},{default:e(()=>[t(ie,{modelValue:q.value,"onUpdate:modelValue":c[0]||(c[0]=u=>q.value=u),class:"pa-2",mandatory:"","selected-class":"bg-primary","show-arrows":""},{default:e(()=>{var u;return[(_(!0),R(M,null,L((u=r.value)==null?void 0:u.images,(m,g)=>(_(),y(ue,{key:g},{default:e(({isSelected:h,toggle:V})=>[t(T,{size:"50",rounded:"",onClick:V,color:h?"primary":"grey-lighten-3",class:"mx-1 pa-1"},{default:e(()=>[t(N,{alt:"thumb",src:(m==null?void 0:m.thumbnail)||"/img/nophoto.jpg",cover:""},null,8,["src"])]),_:2},1032,["onClick","color"])]),_:2},1024))),128))]}),_:1},8,["modelValue"])]),_:1})):S("",!0)]}),_:1})]),_:1},8,["loading"])]),_:1}),t(p,{cols:"12",sm:"6"},{default:e(()=>[t(I,{loading:k.value,type:"article, avatar, text, paragraph","min-height":"100%",color:"transparent",width:"100%"},{default:e(()=>[t(z,{variant:"text",width:"100%"},{default:e(()=>[t(Y,{class:"px-0 pt-0"},{default:e(()=>{var s;return[f(o((s=r.value)==null?void 0:s[`title_${a(x)}`]),1)]}),_:1}),t(b,{class:"pb-0 pt-2 px-0 d-flex justify-space-between align-center"},{default:e(()=>{var s;return[l("div",null,[l("span",Re,o((s=r.value)==null?void 0:s.price)+" $",1),t(_e,{readonly:"",color:"amber",density:"compact","half-increments":"",length:5,size:"small","model-value":0,"active-color":"amber",class:"ml-2"})]),t(j,{onClick:c[1]||(c[1]=u=>oe(r.value)),size:"35",color:"primary",variant:"flat",class:"text-none"},{default:e(()=>[t(me,null,{default:e(()=>{var u;return[f("mdi-heart"+o(X((u=r.value)==null?void 0:u._id)?"":"-outline"),1)]}),_:1})]),_:1})]}),_:1}),t(b,{class:"px-0 pb-0"},{default:e(()=>[l("span",null,o(a(d)("products.information")),1),t(Z,{density:"compact",hover:"",class:"rounded mt-3 border"},{default:e(()=>{var s,u,m,g,h,V,E,U,ee,te;return[l("tbody",null,[l("tr",null,[l("td",null,o(a(d)("products.category")),1),l("td",Ae,o((s=r.value)==null?void 0:s.category[`name_${a(x)}`]),1)]),l("tr",null,[l("td",null,o(a(d)("products.condition")),1),l("td",Ne,o(a(d)("condition."+((u=r.value)==null?void 0:u.condition))),1)]),l("tr",null,[l("td",null,o(a(d)("products.year")),1),l("td",Te,o((m=r.value)==null?void 0:m.year),1)]),l("tr",null,[l("td",null,o(a(d)("products.shipping")),1),l("td",Ie,[l("div",Fe,[t(T,{size:"30"},{default:e(()=>{var $,w;return[t(N,{alt:"flag",cover:"",src:(w=a(O)[($=r.value)==null?void 0:$.shipping_from])==null?void 0:w.flag},null,8,["src"])]}),_:1}),l("span",null,o((h=a(O)[(g=r.value)==null?void 0:g.shipping_from])==null?void 0:h.name),1)])])]),l("tr",null,[l("td",null,o(a(d)("products.sales_area")),1),l("td",Le,[t(ge,{transition:"fade-transition","open-on-hover":!0},{activator:e(({props:$})=>{var w,F;return[l("span",De(Oe($)),o((F=(w=r.value)==null?void 0:w.sales_areas)==null?void 0:F.length)+" стран",17)]}),default:e(()=>[t(ve,{nav:"",density:"compact"},{default:e(()=>{var $;return[(_(!0),R(M,null,L(($=r.value)==null?void 0:$.sales_areas,(w,F)=>(_(),y(fe,{key:F},{prepend:e(()=>[t(T,{rounded:""},{default:e(()=>{var B;return[t(N,{alt:"flag",src:(B=a(O)[w])==null?void 0:B.flag},null,8,["src"])]}),_:2},1024)]),title:e(()=>{var B;return[f(o((B=a(O)[w])==null?void 0:B.name),1)]}),_:2},1024))),128))]}),_:1})]),_:1})])]),l("tr",null,[l("td",null,o(a(d)("products.brand")),1),l("td",Me,o((E=(V=r.value)==null?void 0:V.brand)==null?void 0:E.name),1)]),l("tr",null,[l("td",null,o(a(d)("products.model")),1),l("td",qe,o((U=r.value)==null?void 0:U.model),1)]),l("tr",null,[l("td",null,o(a(d)("products.warranty")),1),l("td",He,o((ee=r.value)==null?void 0:ee.warranty),1)]),l("tr",null,[l("td",null,o(a(d)("products.created")),1),l("td",Ke,o(new Date((te=r.value)==null?void 0:te.created_at).toLocaleDateString()),1)])])]}),_:1})]),_:1}),t(b,{class:"px-0"},{default:e(()=>[l("span",null,o(a(d)("products.contact_us")),1),t(H,{class:"pa-2 mt-0"},{default:e(()=>[t(p,{cols:"6",md:"4",class:"pa-1"},{default:e(()=>[t(j,{href:"https://t.me/Keshmed37",height:"35","prepend-icon":"mdi-telegram",block:"",color:"#0088cc",variant:"flat",class:"text-none"},{default:e(()=>[f(o(a(d)("products.telegram")),1)]),_:1})]),_:1}),t(p,{cols:"6",md:"4",class:"pa-1"},{default:e(()=>[t(j,{href:"tel:+998908893700",height:"35","prepend-icon":"mdi-phone",block:"",color:"green",variant:"flat",class:"text-none"},{default:e(()=>[f(o(a(d)("products.call")),1)]),_:1})]),_:1}),t(p,{cols:"12",md:"4",class:"pa-1"},{default:e(()=>[t(j,{onClick:c[2]||(c[2]=s=>A.value=!0),height:"35","prepend-icon":"mdi-cart",block:"",color:"primary",variant:"flat",class:"text-none"},{default:e(()=>[f(o(a(d)("products.order")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["loading"])]),_:1}),t(p,{cols:"12",sm:"6"},{default:e(()=>[t(I,{loading:k.value,type:"sentences,avatar, paragraph","min-height":"100%"},{default:e(()=>[t(z,{flat:"",border:"",width:"100%"},{default:e(()=>[t(b,{class:"text-primary pb-0 text-body-1"},{default:e(()=>[f(o(a(d)("products.characteristics")),1)]),_:1}),t(b,{class:"pt-2 px-0"},{default:e(()=>[t(Z,{density:"compact",hover:""},{default:e(()=>{var s;return[l("tbody",null,[(_(!0),R(M,null,L((s=r.value)==null?void 0:s.characteristics,(u,m)=>(_(),R("tr",{key:m},[l("td",null,o(u.title[a(x)]),1),l("td",Qe,o(u.value[a(x)]),1)]))),128))])]}),_:1})]),_:1})]),_:1})]),_:1},8,["loading"])]),_:1}),t(p,{cols:"12",sm:"6"},{default:e(()=>[t(I,{loading:k.value,type:"sentences,avatar, paragraph","min-height":"100%"},{default:e(()=>[t(z,{flat:"",border:"",width:"100%"},{default:e(()=>[t(b,{class:"text-primary pb-0 text-body-1"},{default:e(()=>[f(o(a(d)("products.description")),1)]),_:1}),t(b,{class:"pt-2"},{default:e(()=>{var s;return[l("span",Ge,o((s=r.value)==null?void 0:s[`description_${a(x)}`]),1)]}),_:1})]),_:1})]),_:1},8,["loading"])]),_:1}),k.value?S("",!0):(_(),y(p,{key:1,cols:"12"},{default:e(()=>[l("div",Je,[l("span",We,o(a(d)("products.similar")),1)]),t(a(Ce),{options:le},{default:e(()=>[(_(!0),R(M,null,L(J.value,(s,u)=>(_(),y(a(je),{key:u},{default:e(()=>[t(Ee,{item:s},null,8,["item"])]),_:2},1024))),128))]),_:1})]),_:1}))]),_:1}),t(be,{modelValue:A.value,"onUpdate:modelValue":c[8]||(c[8]=s=>A.value=s),"max-width":"450",width:"100%"},{default:e(()=>[t(z,null,{default:e(()=>[t(Y,{class:"text-primary"},{default:e(()=>[f(o(a(d)("products.send_order")),1)]),_:1}),t(b,{class:"py-3 px-4"},{default:e(()=>[t(xe,{ref_key:"form",ref:W},{default:e(()=>[t(H,null,{default:e(()=>[t(p,{cols:"12",class:"py-2"},{default:e(()=>[t(K,{modelValue:v.first_name,"onUpdate:modelValue":c[3]||(c[3]=s=>v.first_name=s),class:"border rounded",flat:"","no-resize":"","hide-details":"",rules:a(D),density:"comfortable",variant:"solo",placeholder:a(d)("products.first_name")},null,8,["modelValue","rules","placeholder"])]),_:1}),t(p,{cols:"12",class:"py-2"},{default:e(()=>[t(K,{modelValue:v.last_name,"onUpdate:modelValue":c[4]||(c[4]=s=>v.last_name=s),class:"border rounded",flat:"","no-resize":"","hide-details":"",rules:a(D),density:"comfortable",variant:"solo",placeholder:a(d)("products.last_name")},null,8,["modelValue","rules","placeholder"])]),_:1}),t(p,{cols:"12",class:"py-2"},{default:e(()=>[t(K,{modelValue:v.phone,"onUpdate:modelValue":c[5]||(c[5]=s=>v.phone=s),class:"border rounded",flat:"","no-resize":"","hide-details":"",rules:a(D),density:"comfortable",variant:"solo",placeholder:a(d)("products.phone")},null,8,["modelValue","rules","placeholder"])]),_:1}),t(p,{cols:"12",class:"py-2"},{default:e(()=>[t(he,{modelValue:v.message,"onUpdate:modelValue":c[6]||(c[6]=s=>v.message=s),class:"border rounded",flat:"","no-resize":"","hide-details":"",rules:a(D),density:"comfortable",variant:"solo",placeholder:a(d)("products.message")},null,8,["modelValue","rules","placeholder"])]),_:1}),t(p,{cols:"12",class:"py-2"},{default:e(()=>[t(ye,{"item-props":se,rules:a(D),flat:"",class:"border rounded",density:"compact","bg-color":"surface",modelValue:v.country,"onUpdate:modelValue":c[7]||(c[7]=s=>v.country=s),items:a(O),placeholder:a(d)("products.country"),"item-title":"name","hide-details":"","item-value":"id",variant:"solo",color:"primary"},null,8,["rules","modelValue","items","placeholder"])]),_:1}),t(p,{cols:"12",class:"d-flex justify-end pt-1"},{default:e(()=>[t(j,{flat:"",onClick:ne,color:"primary"},{default:e(()=>[f(o(a(d)("products.send")),1)]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{vt as default};
