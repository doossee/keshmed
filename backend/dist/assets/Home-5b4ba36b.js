import{u as Y}from"./vuex-76c3bf40.js";import{l as Z}from"./lodash-336d108c.js";import{u as I}from"./vue-i18n-2afed284.js";import{u as tt}from"./@unhead-e9381f0c.js";import{h as et,f as ot}from"./constants-bb3441ce.js";import{c as U}from"./countries-54da296d.js";import{g as F}from"./products-ac1276ed.js";import{_ as nt}from"./AppProductCard.vue_vue_type_script_setup_true_lang-2161eade.js";import{d as K,b as o,e as l,f as p,g as t,E as e,P as C,_ as r,a1 as s,u as a,j as h,F as v,a5 as g,a6 as at,r as D,m as i}from"./@vue-94c9cb71.js";import"./@intlify-eb5de8e7.js";import"./unhead-98eeea87.js";import"./hookable-e7fd869b.js";import"./index-5b614702.js";import"./axios-28bc18a3.js";import"./index-19937e3d.js";import"./vue-router-4d1c7fe2.js";import"./vuetify-28085d18.js";import"./@splidejs-a53e45e1.js";const st=K({__name:"AppHomeCategory",props:{category:{}},setup(L){const{locale:y}=I();return(b,$)=>{const c=o("router-link"),m=o("v-list-item"),P=o("v-icon"),V=o("v-btn"),d=o("v-list"),k=o("v-menu");return l(),p(k,{"open-on-hover":!1,"close-on-back":"",transition:"fade-transition","open-delay":"0","close-delay":"0","close-on-content-click":!1},{activator:t(_=>[e(m,C({class:"text-body-2","base-color":"primary",height:"50",variant:"flat",rounded:"",link:""},_.props,{color:"primary","append-icon":"mdi-chevron-down"}),{default:t(()=>[e(c,{to:`/products?category=${b.category.id}`,class:"text-white text-decoration-none"},{default:t(()=>[r(s(b.category[`name_${a(y)}`]),1)]),_:1},8,["to"])]),_:2},1040)]),default:t(()=>[e(d,{density:"compact",elevation:"1","max-height":"400"},{default:t(()=>[(l(!0),h(v,null,g(b.category.children,(_,q)=>(l(),p(m,{link:"",key:q},{append:t(()=>{var j;return[e(k,{"close-on-content-click":!0,location:"right",offset:"30",transition:"fade-transition"},at({default:t(()=>[e(d,{elevation:"1",density:"compact"},{default:t(()=>[(l(!0),h(v,null,g(_.children,(x,w)=>(l(),p(m,{link:"",key:w},{default:t(()=>[e(c,{to:`/products?category=${x.id}`,class:"text-black text-decoration-none"},{default:t(()=>[r(s(x[`name_${a(y)}`]),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:2},1024)]),_:2},[(j=_.children)!=null&&j.length?{name:"activator",fn:t(({isActive:x,props:w})=>[e(V,C(w,{rounded:"circle",size:"30",variant:"tonal"}),{default:t(()=>[e(P,null,{default:t(()=>[r("mdi-chevron-"+s(x?"down":"right"),1)]),_:2},1024)]),_:2},1040)]),key:"0"}:void 0]),1024)]}),default:t(()=>[e(c,{to:`/products?category=${_.id}`,class:"text-black text-decoration-none"},{default:t(()=>[r(s(_[`name_${a(y)}`]),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})]),_:1})}}}),lt={class:"w-100 h-100 px-2",style:{position:"absolute"}},it={style:{position:"relative","z-index":"1"}},ct={class:"text-center"},rt={class:"text-white text-h4 text-md-h4 font-weight-light"},dt={class:"text-grey-lighten-2 font-weight-light text-body-2"},_t={class:"d-flex align-center gap-1 font-weight-bold"},ut={class:"font-weight-bold"},pt={class:"w-100 py-4 d-flex justify-start align-center"},mt={class:"text-primary"},ft={class:"w-100 py-4 d-flex justify-space-between align-center"},ht={class:"text-primary"},vt={class:"w-100 py-4 d-flex justify-start align-center"},gt={class:"text-primary"},Ut=K({__name:"Home",setup(L){tt({title:"Медицинское Оборудование в Узбекистане",meta:[{name:"description",content:"Современное и надежное медицинское оборудование в Узбекистане. Диагностика, лечение, реабилитация — мы предоставляем передовые решения для вашей клиники. Партнеры лучших мировых производителей обеспечивают качество и эффективность. Получите консультацию и поддержку от наших экспертов. Обеспечьте вашу клинику современным оборудованием для заботы о здоровье пациентов."},{name:"keywords",content:"Медицинское Оборудование в Узбекистане, медицинское оборудование, медицинское оборудование в кашкадарйе, медицинское оборудование в азии, медицинское, оборудование, tibbiy uskunalar, o'zbekistondagi tibbiy uskunalar, tibbiy, uskunalar, osiyodagi tibbiy uskunalar, qashqadaryo tibbiy uskunalar, Medical Equipment in Uzbekistan, medical equipment, medical equipment in Kashkadarya, medical equipment in Asia, medical equipment"}]});const y=D([]),{getters:b}=Y(),{locale:$,t:c}=I(),m=D([]),P=async()=>{const{data:d}=await F("?expand=images,brand&limit=12");y.value=d.results},V=Z.debounce(async d=>{if(!(d!=null&&d.trim()))return m.value=[];const{data:k}=await F(`?search=${d}&limit=50`);m.value=k.results},500);return P(),(d,k)=>{const _=o("v-img"),q=o("v-avatar"),j=o("v-carousel-item"),x=o("v-carousel"),w=o("v-text-field"),E=o("v-list-item-title"),A=o("v-list-item-subtitle"),H=o("v-list-item"),M=o("v-list"),T=o("v-menu"),B=o("v-sheet"),f=o("v-col"),G=o("v-icon"),z=o("v-row"),J=o("v-btn"),O=o("v-expansion-panel-title"),Q=o("v-expansion-panel-text"),R=o("v-expansion-panel"),W=o("v-expansion-panels"),X=o("v-container");return l(),p(X,{theme:"light"},{default:t(()=>[e(z,{justify:"center"},{default:t(()=>[e(f,{cols:"12",style:{height:"70vh",position:"relative"},class:"d-flex rounded flex-column align-center justify-center mt-1"},{default:t(()=>[i("div",lt,[e(x,{cycle:"",height:"100%","hide-delimiter-background":"","show-arrows":!1},{default:t(()=>[(l(),h(v,null,g(4,n=>e(j,{key:n},{default:t(()=>[e(q,{class:"w-100 h-100",rounded:""},{default:t(()=>[e(_,{alt:"medical",gradient:"to top left, rgba(104, 59, 181, 1), rgba(104, 59, 181, .4)",cover:"",src:`static/carousel/image-${n}.jpg`},null,8,["src"])]),_:2},1024)]),_:2},1024)),64))]),_:1})]),i("div",it,[i("div",ct,[i("span",rt,s(a(c)("home.title")),1)]),e(B,{"max-width":"650",color:"transparent",class:"w-100 mt-4 text-center"},{default:t(()=>[i("p",dt,s(a(c)("home.desc")),1),e(T,{offset:"12",transition:"fade-transition","model-value":m.value.length>0,"close-on-content-click":!1},{activator:t(({props:n})=>[e(w,C(n,{class:"mt-4",color:"primary",rounded:"lg","hide-details":"",type:"search","onUpdate:modelValue":a(V),"bg-color":"white",density:"comfortable",autofocus:"",variant:"outlined","base-color":"primary","aria-label":"search products",role:"text","prepend-inner-icon":"mdi-magnify",placeholder:a(c)("home.search")}),null,16,["onUpdate:modelValue","placeholder"])]),default:t(()=>[e(M,{elevation:"0",width:"100%",nav:"",lines:"two",density:"compact"},{default:t(()=>[(l(!0),h(v,null,g(m.value,(n,u)=>(l(),p(H,{height:"65",class:"py-1",key:u,link:"",to:`/product/${n.id}`},{prepend:t(()=>[e(q,{rounded:""},{default:t(()=>{var N,S;return[e(_,{alt:"searched images",cover:"",src:((S=(N=n.images)==null?void 0:N[0])==null?void 0:S.medium_square_crop)||"/img/nophoto.jpg"},null,8,["src"])]}),_:2},1024)]),default:t(()=>[e(E,{class:"text-body-2"},{default:t(()=>[r(s(n[`title_${a($)}`]),1)]),_:2},1024),e(A,{class:"text-caption mt-1 d-flex align-center gap-1"},{default:t(()=>[i("div",_t,[e(_,{alt:"flag",width:"20",height:"20",src:a(U)[n.shipping_from].flag},null,8,["src"]),r(" "+s(a(U)[n.shipping_from].name),1)]),r(" "+s(n.model)+" ",1),i("span",ut,s(n.price)+" $",1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1},8,["model-value"])]),_:1})])]),_:1}),e(f,{cols:"12",class:"px-2"},{default:t(()=>[e(B,{width:"100%",color:"surface",class:"mt-8 py-4 pl-4 rounded border"},{default:t(()=>[e(z,null,{default:t(()=>[(l(!0),h(v,null,g(a(et),(n,u)=>(l(),p(f,{cols:"12",sm:"6",md:"3",key:u},{default:t(()=>[e(H,{nav:"",lines:"three"},{prepend:t(()=>[e(G,{size:"35",color:"primary"},{default:t(()=>[r(s(n.icon),1)]),_:2},1024)]),default:t(()=>[e(E,null,{default:t(()=>[r(s(a(c)(n.title)),1)]),_:2},1024),e(A,null,{default:t(()=>[r(s(d.$t(n.subtitle)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),e(f,{cols:"12"},{default:t(()=>[i("div",pt,[i("span",mt,s(a(c)("home.all_categories")),1)]),e(z,null,{default:t(()=>[(l(!0),h(v,null,g(a(b).categories,(n,u)=>(l(),p(f,{class:"pa-2",cols:"12",sm:"6",md:"4",key:u},{default:t(()=>[e(st,{category:n},null,8,["category"])]),_:2},1024))),128))]),_:1})]),_:1}),e(f,{cols:"12"},{default:t(()=>[i("div",ft,[i("span",ht,s(a(c)("home.recomended")),1),e(J,{to:"/products","append-icon":"mdi-arrow-right",color:"primary",variant:"text",class:"text-none font-weight-light"},{default:t(()=>[i("span",null,s(a(c)("home.see_all")),1)]),_:1})]),e(z,null,{default:t(()=>[(l(!0),h(v,null,g(y.value,(n,u)=>(l(),p(f,{key:u,cols:"12",sm:"6",md:"4"},{default:t(()=>[e(nt,{item:n},null,8,["item"])]),_:2},1024))),128))]),_:1})]),_:1}),e(f,{cols:"12"},{default:t(()=>[i("div",vt,[i("span",gt,s(a(c)("home.faqs")),1)]),e(B,{width:"100%",border:"",rounded:""},{default:t(()=>[e(W,{variant:"accordion"},{default:t(()=>[(l(!0),h(v,null,g(a(ot),(n,u)=>(l(),p(R,{elevation:"0",key:u},{default:t(()=>[e(O,{class:"font-weight-normal text-subtitle-2"},{default:t(()=>[r(s(u+1)+". "+s(n.question[a($)]),1)]),_:2},1024),e(Q,{class:"text-body-2"},{default:t(()=>[r(s(n.answer[a($)]),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Ut as default};
