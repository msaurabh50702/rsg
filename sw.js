if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>s(e,t),c={module:{uri:t},exports:o,require:l};i[t]=Promise.all(r.map((e=>c[e]||l(e)))).then((e=>(n(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"825b6a468c3352a6f7e184763a7bd0d5"},{url:"assets/index-aroHkNcf.js",revision:null},{url:"assets/index-DttXGJiw.css",revision:null},{url:"index.html",revision:"a5ac9a4b52a0018b7c403a27e588e17f"},{url:"registerSW.js",revision:"ff927d69c4f72f7002973d7777469463"},{url:"service-worker.js",revision:"d78a63fe799876ae7a15727c6c036b01"},{url:"manifest.webmanifest",revision:"477b481094217fabe20d407896f64c00"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
