if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const a=e=>i(e,t),l={module:{uri:t},exports:o,require:a};s[t]=Promise.all(n.map((e=>l[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"login"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/Registration-page/css/124.b11aee10.css",revision:null},{url:"/Registration-page/css/851.f7d4b172.css",revision:null},{url:"/Registration-page/css/app.afb13d66.css",revision:null},{url:"/Registration-page/index.html",revision:"1a5ab83856294febc9cfb09fa324b910"},{url:"/Registration-page/js/124.8ed8f929.js",revision:null},{url:"/Registration-page/js/851.a7a13ba5.js",revision:null},{url:"/Registration-page/js/app.63a1a806.js",revision:null},{url:"/Registration-page/js/chunk-vendors.2f26c7ca.js",revision:null},{url:"/Registration-page/manifest.json",revision:"b0c898651b0bbb556901dc19cf29fd34"},{url:"/Registration-page/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map