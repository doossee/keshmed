import{a as r}from"./axios-28bc18a3.js";import{s}from"./index-19937e3d.js";const t=r.create({baseURL:"/"});t.interceptors.response.use(e=>(o(),e),e=>(e.response&&e.response.status===401&&s.commit("LOGOUT"),Promise.reject(e)));function o(){const e=s.getters.token;e&&(t.defaults.headers.common.Authorization=`Bearer ${e}`)}o();export{t as a,o as c};