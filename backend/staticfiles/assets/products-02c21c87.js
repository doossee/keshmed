import{a as s}from"./index-26e040f7.js";const o=async t=>s.get(`/api/v1/products/${t}`),p=async(t,c)=>s.get(`/api/v1/products/${t}/?${c}`),d=async t=>s.post("/api/v1/products/",t),e=async t=>s.delete(`/api/v1/products/${t}/`),r=async(t,c)=>s.put(`/api/v1/products/${t}/`,c);export{p as a,d as c,e as d,o as g,r as u};