/*
==========================================================================
MyMindFlow Finanças V2 - utils.js (Base)
==========================================================================
*/

const Utils = {

currency(value = 0) { return Number(value).toLocaleString(“pt-BR”, {
style: “currency”, currency: “BRL” }); },

percent(value = 0, decimals = 1) { return
${Number(value).toFixed(decimals)}%; },

number(value = 0) { return Number(value).toLocaleString(“pt-BR”); },

date(value) { if (!value) return “-”; return new
Date(value).toLocaleDateString(“pt-BR”); },

monthYear(value) { if (!value) return “-”; return new
Intl.DateTimeFormat(“pt-BR”, { month: “short”, year: “numeric”
}).format(new Date(value)); },

clamp(value, min, max) { return Math.max(min, Math.min(max, value)); },

sum(list = [], field = null) { return list.reduce((acc, item) => {
return acc + (field ? Number(item[field] || 0) : Number(item || 0)); },
0); },

average(list = [], field = null) { if (!list.length) return 0; return
this.sum(list, field) / list.length; },

groupBy(list = [], field) { return list.reduce((acc, item) => { const
key = item[field]; if (!acc[key]) acc[key] = []; acc[key].push(item);
return acc; }, {}); },

uuid() { return crypto.randomUUID ? crypto.randomUUID() :
Math.random().toString(36).slice(2); },

debounce(fn, delay = 300) { let timer; return (…args) => {
clearTimeout(timer); timer = setTimeout(() => fn(…args), delay); }; },

sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

};

window.Utils = Utils;
