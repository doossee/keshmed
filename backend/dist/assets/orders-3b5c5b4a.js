import{a}from"./index-5b614702.js";const c=async r=>a.get(`/api/v1/orders/?${r}&expand=product`),o=async r=>a.post("/api/v1/orders/",r),t=async(r,s)=>a.put(`/api/v1/orders/${r}/`,s);export{t as a,o as c,c as g};
