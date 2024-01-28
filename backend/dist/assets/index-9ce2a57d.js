import{b as u,f as h,g,e as f,E as y,a4 as v}from"./@vue-94c9cb71.js";import{c as b,a as S}from"./vue-router-4d1c7fe2.js";import{c as k}from"./vuex-76c3bf40.js";import{c as E,d as z,a as q,l as O}from"./vuetify-28085d18.js";/* empty css             */import{c as I}from"./vue-i18n-2afed284.js";import{V as A}from"./@splidejs-a53e45e1.js";import{c as P}from"./@unhead-e9381f0c.js";import"./@intlify-eb5de8e7.js";import"./unhead-98eeea87.js";import"./hookable-e7fd869b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}})();const T=(e,a)=>{const i=e.__vccOpts||e;for(const[n,r]of a)i[n]=r;return i},B={};function L(e,a){const i=u("router-view"),n=u("v-app");return f(),h(n,null,{default:g(()=>[y(i)]),_:1})}const w=T(B,[["render",L]]),R="modulepreload",x=function(e,a){return new URL(e,a).href},m={},s=function(a,i,n){if(!i||i.length===0)return a();const r=document.getElementsByTagName("link");return Promise.all(i.map(t=>{if(t=x(t,n),t in m)return;m[t]=!0;const o=t.endsWith(".css"),p=o?'[rel="stylesheet"]':"";if(!!n)for(let c=r.length-1;c>=0;c--){const d=r[c];if(d.href===t&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${p}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":R,o||(l.as="script",l.crossOrigin=""),l.href=t,document.head.appendChild(l),o)return new Promise((c,d)=>{l.addEventListener("load",c),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>a()).catch(t=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t})},_=k({state:{token:localStorage.getItem("token")||"",user:JSON.parse(localStorage.getItem("user")||"{}"),cart:JSON.parse(localStorage.getItem("cart")||"[]"),saved:JSON.parse(localStorage.getItem("saved")||"[]"),colors:[],brands:[],categories:[]},getters:{token:e=>e.token,isLogged:e=>!!e.token,user:e=>e.user,userid:e=>{var a;return(a=e.user)==null?void 0:a._id},cart:e=>e.cart,saved:e=>e.saved,colors:e=>e.colors,brands:e=>e.brands,categories:e=>e.categories,parent_categories:e=>e.categories.filter(a=>a.parent===null)},actions:{},mutations:{SET_COLORS:(e,a)=>{e.colors=a},SET_CATEGORIES:(e,a)=>{e.categories=a},SET_BRANDS:(e,a)=>{e.brands=a},SET_TOKEN:(e,a)=>{e.token=a,localStorage.setItem("token",a)},ADD_TO_SAVE:(e,a)=>{e.saved.push(a),localStorage.setItem("saved",JSON.stringify(e.saved))},CLEAR_CART:e=>{e.cart=[],localStorage.removeItem("cart")},REMOVE_TO_SAVE:(e,a)=>{const i=e.saved.findIndex(n=>n.id===a.id);e.saved.splice(i,1),localStorage.setItem("saved",JSON.stringify(e.saved))},LOGOUT:e=>{e.token="",e.user={},localStorage.removeItem("user"),localStorage.removeItem("token"),window.location.href="/login"}}}),C=(e,a,i)=>{_.getters.isLogged?i():i("/login")},D=[{path:"/",component:()=>s(()=>import("./Index-3f8cb389.js"),["./Index-3f8cb389.js","./vuex-76c3bf40.js","./@vue-94c9cb71.js","./categories-1a1d9cf4.js","./index-93a2b5d7.js","./axios-28bc18a3.js","./brands-30707032.js","./AppNavbar.vue_vue_type_script_setup_true_lang-eb5c8210.js","./vue-i18n-2afed284.js","./@intlify-eb5de8e7.js","./constants-bb3441ce.js","./vuetify-28085d18.js","./vuetify-a07ebbdd.css","./vue-router-4d1c7fe2.js","./@splidejs-a53e45e1.js","./@splidejs-6c527891.css","./@unhead-e9381f0c.js","./unhead-98eeea87.js","./hookable-e7fd869b.js","./@mdi-05f0898d.css"],import.meta.url),children:[{path:"/",name:"home",component:()=>s(()=>import("./Home-cce555e2.js"),["./Home-cce555e2.js","./vuex-76c3bf40.js","./@vue-94c9cb71.js","./lodash-336d108c.js","./vue-i18n-2afed284.js","./@intlify-eb5de8e7.js","./@unhead-e9381f0c.js","./unhead-98eeea87.js","./hookable-e7fd869b.js","./constants-bb3441ce.js","./countries-54da296d.js","./products-2b5417f6.js","./index-93a2b5d7.js","./axios-28bc18a3.js","./AppProductCard.vue_vue_type_script_setup_true_lang-2161eade.js","./vue-router-4d1c7fe2.js","./vuetify-28085d18.js","./vuetify-a07ebbdd.css","./@splidejs-a53e45e1.js","./@splidejs-6c527891.css","./@mdi-05f0898d.css"],import.meta.url)},{path:"/products",name:"products",component:()=>s(()=>import("./Products-d42a41cd.js"),["./Products-d42a41cd.js","./@vue-94c9cb71.js","./vuex-76c3bf40.js","./lodash-336d108c.js","./vue-i18n-2afed284.js","./@intlify-eb5de8e7.js","./@unhead-e9381f0c.js","./unhead-98eeea87.js","./hookable-e7fd869b.js","./vue-router-4d1c7fe2.js","./products-2b5417f6.js","./index-93a2b5d7.js","./axios-28bc18a3.js","./vuetify-28085d18.js","./vuetify-a07ebbdd.css","./@splidejs-a53e45e1.js","./@splidejs-6c527891.css","./@mdi-05f0898d.css"],import.meta.url)},{path:"/saved",name:"saved",component:()=>s(()=>import("./Saved-f44e10b4.js"),["./Saved-f44e10b4.js","./@vue-94c9cb71.js","./vuex-76c3bf40.js","./vue-i18n-2afed284.js","./@intlify-eb5de8e7.js","./@unhead-e9381f0c.js","./unhead-98eeea87.js","./hookable-e7fd869b.js","./@splidejs-a53e45e1.js","./@splidejs-6c527891.css","./AppProductCard.vue_vue_type_script_setup_true_lang-2161eade.js","./countries-54da296d.js"],import.meta.url)},{path:"/product/:id",name:"product",component:()=>s(()=>import("./Product-8462576e.js"),["./Product-8462576e.js","./vuex-76c3bf40.js","./@vue-94c9cb71.js","./vue-i18n-2afed284.js","./@intlify-eb5de8e7.js","./vue-router-4d1c7fe2.js","./rules-ba8775fb.js","./orders-10fba09d.js","./index-93a2b5d7.js","./axios-28bc18a3.js","./countries-54da296d.js","./products-2b5417f6.js","./@splidejs-a53e45e1.js","./@splidejs-6c527891.css","./AppProductCard.vue_vue_type_script_setup_true_lang-2161eade.js","./vuetify-28085d18.js","./vuetify-a07ebbdd.css","./@unhead-e9381f0c.js","./unhead-98eeea87.js","./hookable-e7fd869b.js","./@mdi-05f0898d.css"],import.meta.url)},{path:"/brands",name:"brands",component:()=>s(()=>import("./Manufacturers-01902e4d.js"),["./Manufacturers-01902e4d.js","./@vue-94c9cb71.js","./vuex-76c3bf40.js","./vue-i18n-2afed284.js","./@intlify-eb5de8e7.js","./@unhead-e9381f0c.js","./unhead-98eeea87.js","./hookable-e7fd869b.js","./countries-54da296d.js"],import.meta.url)}]},{path:"/admin",component:()=>s(()=>import("./Admin-3990b17c.js"),["./Admin-3990b17c.js","./vuex-76c3bf40.js","./@vue-94c9cb71.js","./vue-i18n-2afed284.js","./@intlify-eb5de8e7.js","./constants-bb3441ce.js","./vuetify-28085d18.js","./vuetify-a07ebbdd.css","./vue-router-4d1c7fe2.js","./@splidejs-a53e45e1.js","./@splidejs-6c527891.css","./@unhead-e9381f0c.js","./unhead-98eeea87.js","./hookable-e7fd869b.js","./@mdi-05f0898d.css"],import.meta.url),beforeEnter:C,children:[{path:"",name:"adminproducts",component:()=>s(()=>import("./Products-Admin-b5139838.js"),["./Products-Admin-b5139838.js","./@vue-94c9cb71.js","./lodash-336d108c.js","./vue-i18n-2afed284.js","./@intlify-eb5de8e7.js","./index-93a2b5d7.js","./axios-28bc18a3.js","./brands-30707032.js","./countries-54da296d.js","./categories-1a1d9cf4.js","./constants-bb3441ce.js","./products-2b5417f6.js","./vue-router-4d1c7fe2.js","./vuex-76c3bf40.js","./vuetify-28085d18.js","./vuetify-a07ebbdd.css","./@splidejs-a53e45e1.js","./@splidejs-6c527891.css","./@unhead-e9381f0c.js","./unhead-98eeea87.js","./hookable-e7fd869b.js","./@mdi-05f0898d.css"],import.meta.url)},{path:"categories",name:"admincategories",component:()=>s(()=>import("./Categories-50d19b23.js"),["./Categories-50d19b23.js","./@vue-94c9cb71.js","./vue-i18n-2afed284.js","./@intlify-eb5de8e7.js","./rules-ba8775fb.js","./categories-1a1d9cf4.js","./index-93a2b5d7.js","./axios-28bc18a3.js","./vue-router-4d1c7fe2.js","./vuex-76c3bf40.js","./vuetify-28085d18.js","./vuetify-a07ebbdd.css","./@splidejs-a53e45e1.js","./@splidejs-6c527891.css","./@unhead-e9381f0c.js","./unhead-98eeea87.js","./hookable-e7fd869b.js","./@mdi-05f0898d.css"],import.meta.url)},{path:"brands",name:"adminbrands",component:()=>s(()=>import("./Brands-06849129.js"),["./Brands-06849129.js","./lodash-336d108c.js","./vue-i18n-2afed284.js","./@intlify-eb5de8e7.js","./@vue-94c9cb71.js","./rules-ba8775fb.js","./countries-54da296d.js","./brands-30707032.js","./index-93a2b5d7.js","./axios-28bc18a3.js","./vue-router-4d1c7fe2.js","./vuex-76c3bf40.js","./vuetify-28085d18.js","./vuetify-a07ebbdd.css","./@splidejs-a53e45e1.js","./@splidejs-6c527891.css","./@unhead-e9381f0c.js","./unhead-98eeea87.js","./hookable-e7fd869b.js","./@mdi-05f0898d.css"],import.meta.url)},{path:"orders",name:"adminorders",component:()=>s(()=>import("./Orders-728b71b5.js"),["./Orders-728b71b5.js","./lodash-336d108c.js","./vue-i18n-2afed284.js","./@intlify-eb5de8e7.js","./@vue-94c9cb71.js","./orders-10fba09d.js","./index-93a2b5d7.js","./axios-28bc18a3.js","./vue-router-4d1c7fe2.js","./vuex-76c3bf40.js","./vuetify-28085d18.js","./vuetify-a07ebbdd.css","./@splidejs-a53e45e1.js","./@splidejs-6c527891.css","./@unhead-e9381f0c.js","./unhead-98eeea87.js","./hookable-e7fd869b.js","./@mdi-05f0898d.css"],import.meta.url)}]},{path:"/login",name:"login",component:()=>s(()=>import("./Login-4d20b0fd.js"),["./Login-4d20b0fd.js","./rules-ba8775fb.js","./index-93a2b5d7.js","./axios-28bc18a3.js","./vuex-76c3bf40.js","./@vue-94c9cb71.js","./vue-router-4d1c7fe2.js","./vuetify-28085d18.js","./vuetify-a07ebbdd.css","./vue-i18n-2afed284.js","./@intlify-eb5de8e7.js","./@splidejs-a53e45e1.js","./@splidejs-6c527891.css","./@unhead-e9381f0c.js","./unhead-98eeea87.js","./hookable-e7fd869b.js","./@mdi-05f0898d.css"],import.meta.url)},{path:"/:pathMatch(.*)*",name:"notfound",component:()=>s(()=>import("./404page-c0a70619.js"),["./404page-c0a70619.js","./AppNavbar.vue_vue_type_script_setup_true_lang-eb5c8210.js","./@vue-94c9cb71.js","./vue-i18n-2afed284.js","./@intlify-eb5de8e7.js","./constants-bb3441ce.js","./vuetify-28085d18.js","./vuetify-a07ebbdd.css"],import.meta.url)}],V=b({history:S(),routes:D,scrollBehavior(e,a,i){return e.hash?{el:e.hash}:i||{top:0}}}),M=E({ssr:!0,directives:z,components:{...q,...O},display:{mobileBreakpoint:"md"},theme:{defaultTheme:"light",themes:{light:{dark:!1,colors:{primary:"#673ab7",background:"#f6f9fc"}},dark:{dark:!0,colors:{primary:"#FFCA28"}}}}}),N={home:"Home",cart:"Cart",saved:"Saved",products:"Products",profile:"Profile",gifts:"Gifts",brands:"Brands",adminproducts:"Login"},$={home:"Главная",cart:"Корзинка",saved:"Избранные",products:"Продукты",profile:"Профайл",gifts:"Подарки",brands:"Бренды",adminproducts:"Логин"},K={home:"Asosiy",cart:"Savatcha",saved:"Saqlanganlar",products:"Mahsulotlar",profile:"Profil",gifts:"Sovg'alar",brands:"Brendlar",adminproducts:"Login"},Y={new:"New",openbox:"Open Box",refurbished:"Refurbished",used:"Used"},U={new:"Новый",openbox:"Открытая коробка",refurbished:"Отремонтированный",used:"Использовал"},W={new:"Yangi",openbox:"Qutisi ochilgan",refurbished:"Ta'mirlangan",used:"Ishlatilgan"},F={text:"© 2024 All rights reserved. Our company offers state-of-the-art medical equipment designed to enhance your well-being.",social_links:"Social links",site_links:"Site map",title:"Elegant Fragrances: Immersed in the World of Refinement"},j={text:"© 2024 Все права защищены. Наша компания предоставляет современное медицинское оборудование высокого качества для повышения вашего благополучия.",social_links:"Социальные ссылки",site_links:"Ссылки на сайте",title:"Элегантные Ароматы: Погружение в Мир Утонченности"},J={text:"© 2024 Barcha huquqlar himoyalangan. Bizning kompaniyamiz sizning salomatligingizni oshirish uchun sovga chiqarilgan sovremen tibbiy uskunalarni taklif qiladi.",social_links:"Ijtimoiy tarmoqlar",site_links:"Sayt xaritasi",title:"Latif Aromatlar: Zarafat Dunyosiga Tushish"},H={product:"Product",search_by_name:"Seach by title",search_by_price:"Seach by price",min:"Min.",max:"Max.",categories:"Categories",brands:"Brands",information:"Basic information",title:"Title",rate:"Rate",price:"Price",category:"Category",condition:"Condition",year:"Year",shipping:"Shipping from",sales_area:"Sales countries",brand:"Brand",model:"Model",created:"Posted",warranty:"Warranty (month)",contact_us:"Contact us",telegram:"Telegram",call:"Call",order:"Buy now",characteristics:"Characteristics",description:"Description",similar:"Similar Products",send_order:"Send request",first_name:"First name",last_name:"Last name",phone:"Phone",message:"Write a review",country:"Country",send:"Send"},Q={product:"Продукт",search_by_name:"Искать по назавыние",search_by_price:"Искать по цене",min:"Мин.",max:"Макс.",categories:"Категории",brands:"Бренды",information:"Основная Информация",title:"Название",rate:"Оценка",price:"Цена",category:"Категория",condition:"Состояние",year:"Год",shipping:"Страна",sales_area:"Территория продаж",brand:"Производитель",model:"Модель",created:"Размещено",warranty:"Гарантия (мес)",contact_us:"Связаться с нами",telegram:"Написать",call:"Позвонить",order:"Купить сейчас",characteristics:"Характеристики",description:"Описание",similar:"Похожие Аппараты",send_order:"Отправить запрос",first_name:"Имя",last_name:"Фамилия",phone:"Введите телефон",message:"Напишите отзыв",country:"Страна",send:"Отправить"},X={product:"Mahsulot",search_by_name:"Nomi bo'yicha izlash",search_by_price:"Narxi bo'yicha izlash",min:"Min.",max:"Maks.",categories:"Kategoriyalar",brands:"Brendlar",information:"Asosiy Ma'lumotlar",title:"Nomi",rate:"Baho",price:"Narxi",category:"Kategoriyasi",condition:"Holati",year:"Yili",shipping:"Davlati",sales_area:"Savdo huhudlari",brand:"Brendi",model:"Modeli",created:"Yuklangan vaqti",warranty:"Kafolat (oy)",contact_us:"Biz bilan bog'laning",telegram:"Yozish",call:"Qo'ng'iroq qilish",order:"Sotib olish",characteristics:"Xususiyatlari",description:"Ma'lumotlar",similar:"O'xshash Mahsulotlar",send_order:"So'rov yuboring",first_name:"Ism",last_name:"Familiya",phone:"Telefon",message:"Xabar yozing",country:"Davlat",send:"Yuborish"},G={title:"MEDICAL EQUIPMENTS",desc:"Our company plays a critical role in bringing innovation and quality to the field of healthcare in Uzbekistan. We strive to continuously improve and update our high-quality medical devices and products to meet international standards and provide excellent healthcare services. By leveraging new technologies, we develop cutting-edge solutions in the medical field, ensuring the well-being of patients and healthcare professionals.",search:"What are you looking for?",all_categories:"All categories",recomended:"Recommended Products",see_all:"View all",faqs:"Frequently asked questions",card_1_title:"Delivery",card_1_desc:"Fast and reliable delivery straight to you. We guarantee the safety of goods and timely fulfillment of orders.",card_2_title:"Installation",card_2_desc:"Профессиональная установка наших продуктов для обеспечения оптимальной производительности и долгосрочной надежности.",card_3_title:"Repair",card_3_desc:"Competently repair products using original spare parts. We will restore the functionality of your equipment quickly and efficiently.",card_4_title:"24/7 support",card_4_desc:"Our support team is ready to help you at any time of the day. We value every client and guarantee a prompt response to your requests."},Z={title:"МЕДИЦИНСКОЕ ОБОРУДОВАНИЕ",desc:"Добро пожаловать в Кеш Мед - ваш надежный партнер в области медицинского оборудования. Мы специализируемся на предоставлении высокотехнологичных и инновационных решений для современных медицинских учреждений.",search:"Что вы ищете?",all_categories:"Все категории",recomended:"Рекомендуемые Аппараты",see_all:"Посмотреть все",faqs:"Часто задаваемые вопросы",card_1_title:"Доставка",card_1_desc:"Быстрая и надежная доставка прямо к вам. Мы гарантируем сохранность товаров и своевременное выполнение заказов.",card_2_title:"Установка",card_2_desc:"Профессиональная установка наших продуктов для обеспечения оптимальной производительности и долгосрочной надежности.",card_3_title:"Ремонт",card_3_desc:"Компетентный ремонт продуктов с использованием оригинальных запчастей. Восстановим функциональность вашего оборудования быстро и эффективно.",card_4_title:"Поддержка 24/7",card_4_desc:"Наша команда поддержки готова помочь вам в любое время суток. Мы ценим каждого клиента и гарантируем оперативное реагирование на ваши запросы."},ee={title:"TIBBIY USKUNALAR",desc:"Olisda, olisda, so‘z tog‘lari ortida, unli va undoshlar yurtida baliq matnlari yashaydi. Keyin u o'zining grammatikasini baliqli deb qaror qildi, ular baliqdan uzoq edi. Uzoq yo'l, itoat qilgandan so'ng, matn u erga uchib ketadi.",search:"Nima izlamoqchisiz?",all_categories:"Barcha Kategoriyalar",recomended:"Tavsiya etilgan qurilmalar",see_all:"Barchasini ko'rish",faqs:"Ko'p beriladigan savollar",card_1_title:"Yetkazib berish",card_1_desc:"Sizga tez va ishonchli yetkazib berish. Biz tovarlarning xavfsizligini va buyurtmalarning o'z vaqtida bajarilishini kafolatlaymiz.",card_2_title:"O'rnatib Berish",card_2_desc:"Optimal ishlash va uzoq muddatli ishonchlilikni ta'minlash uchun mahsulotlarimizni professional tarzda o'rnatish.",card_3_title:"Ta'mirlash",card_3_desc:"Asl ehtiyot qismlardan foydalangan holda mahsulotlarni malakali ta'mirlash. Uskunalaringizning funksionalligini tez va samarali tarzda tiklaymiz.",card_4_title:"Поддержка 24/7",card_4_desc:"Bizning qo'llab-quvvatlash jamoamiz kunning istalgan vaqtida sizga yordam berishga tayyor. Biz har bir mijozni qadrlaymiz va sizning so'rovlaringizga tezkor javob berishni kafolatlaymiz."},ae={search:"Search",products:"Products",orders:"Orders",logout:"Logout",add_product:"Add product",edit_product:"Edit product",add_categories:"Add Category",edit_categories:"Edit Category",parent_category:"Parent Category",photo:"Photo",add_brands:"Add Brand",edit_brands:"Edit Brand",add_image:"Add images",add_charac:"Add characteristics",save:"Save",actions:"Actions",parent:"Parent",show:"Publish",is_part:"Spare part",date:"Date",status:"Status",product:"Product",order_message:"Message"},te={search:"Поиск",products:"Продукты",orders:"Покупки",logout:"Выйти",add_product:"Добавить продукт",edit_product:"Изменить продукт",add_categories:"Добавить Категорию",edit_categories:"Редактировать Категорию",parent_category:"Родительская категория",photo:"Фотография",add_brands:"Добавить Бренд",edit_brands:"Редактировать Бренд",add_image:"Добавить картинки",add_charac:"Добавить Характеристики",save:"Сохранить",actions:"Действия",parent:"Родитель",show:"Показать",is_part:"Запчасть",date:"Дата",status:"Статус",product:"Продукт",order_message:"Сообщение"},re={search:"Qidirish",products:"Mahsulotlar",orders:"Sotuvlar",logout:"Chiqish",add_product:"Mahsulot yaratish",edit_product:"Mahsulotni o'zgartirish",add_categories:"Kategoriya yaratish",edit_categories:"Kategoriyani o'zgartirish",parent_category:"Yuqori kategoriya",photo:"Rasm",add_brands:"Brend yaratish",edit_brands:"Brendni o'zgartirish",add_image:"Rasm qo'shish",add_charac:"Xusiyat qo'shish",save:"Saqlash",actions:"Boshqarish",parent:"Yuqori",show:"Ko'rsatish",is_part:"Qism",date:"Vaqti",status:"Holati",product:"Mahsulot",order_message:"Xabar"},ie=I({locale:localStorage.getItem("language")||"en",legacy:!1,globalInjection:!0,messages:{en:{links:N,footer:F,admin:ae,products:H,condition:Y,home:G,price:"Price",sum:"sum",worktime:"Working Time",delivery:"Delivery service",total_sum:"Total price",no_data:"Empty",loading:"Loading",saved_products:"Saved Products"},ru:{links:$,footer:j,admin:te,products:Q,condition:U,home:Z,price:"Цена",sum:"сум",worktime:"Рабочее время",delivery:"Служба доставки",total_sum:"Обшая сумма",no_data:"Пусто",loading:"Загрузка",saved_products:"Избранные Продукты"},uz:{links:K,footer:J,admin:re,products:X,condition:W,home:ee,price:"Narxi",sum:"so'm",worktime:"Ish vaqti",delivery:"Yetkazib berish xizmati",total_sum:"Jami summa",no_data:"Ma'lumotlar topilmadi",loading:"Yuklanyapti",saved_products:"Saqlangan Uskunalar"}}});v(w).use(P()).use(ie).use(A).use(M).use(_).use(V).mount("#app");export{_ as s,M as v};
