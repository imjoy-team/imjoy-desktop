import{r as e,o as t,c as i,w as o,a as n,b as a,i as s,M as r,d as c,u as l,e as d,f as m,g as p}from"./vendor.def56f5a.js";const u={setup:a=>(a,s)=>{const r=e("router-view"),c=e("v-app");return t(),i(c,null,{default:o((()=>[n(r)])),_:1})}};let w;const g={};var h=[{name:"index",path:"/",component:()=>function(e,t){if(!t)return e();if(void 0===w){const e=document.createElement("link").relList;w=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in g)return;g[e]=!0;const t=e.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${i}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":w,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./Index.4489f238.js")),["/assets/Index.4489f238.js","/assets/vendor.def56f5a.js"])}];const y=a(),f={props:{window:Object},setup(o){const a=o;return(o,s)=>{const r=e("WindowApp");return t(),i(r,{window:a.window},{default:y((()=>[n("div",{class:"imjoy-container",id:`imjoy-${a.window.uniqueID}`},null,8,["id"])])),_:1},8,["window"])}},__scopeId:"data-v-03fd235b"},b=new s.ImJoy({imjoy_api:{}});m({component:u,config:p,extensions:{modules:{app:[]},desktop:d,routes:[...h],plugins:[async function(){const e=l(),t=e.modulesApp.createModuleApp(class extends r{setup(){return{name:"imjoy",singleton:!0}}});await c.get("https://raw.githubusercontent.com/imjoy-team/imjoy-plugins/master/manifest.imjoy.json").then((async e=>e.data.plugins.filter((e=>"window"===e.type)))),await b.start({workspace:"default"}).then((async()=>{console.log("ImJoy started"),b.event_bus.on("add_window",(async e=>{const i=t.createWindow({component:f,name:`Window${e.name.replace(" ","")}`,title:e.name,category:"plugins",icon:"mdi-puzzle",maximizable:!0,size:{width:648,height:440},position:{x:0,y:0,z:0},resizable:!0,theme:{noContentSpacing:!0},metaData:{iframeUrl:""}});i&&i.open(!0),setTimeout((()=>{const t=document.createElement("div");t.id=e.window_id,t.style.backgroundColor="#ececec",t.style.height="100%",t.style.width="100%";const o=document.getElementById(`imjoy-${i.uniqueID}`);if(!o)throw new Error("Failed to get the window element.");o.appendChild(t)}),0)})),e.store.commit("core/notification/ADD",{name:"twitch-new-follower",service:"twitch",icon:"mdi-twitch",color:"#8b58e8",title:"hacklover",details:"New follower"}),e.store.commit("core/launcher/ADD",{title:"Kaibu",icon:{name:"kaibu",size:"24px",image:"https://raw.githubusercontent.com/imjoy-team/kaibu/master/public/static/img/kaibu-icon.png"},category:"plugins",callback:async()=>{const e=await b.api.createWindow({src:"https://kaibu.org/#/app",name:"Kaibu"});await e.view_image("https://images.proteinatlas.org/61448/1319_C10_2_blue_red_green.jpg"),await e.add_shapes([[[110,303],[1512,1800],[520,2e3]]],{shape_type:"polygon",edge_color:"red",name:"triangle"})}}),e.store.commit("core/launcher/ADD",{title:"ImageJ.JS",icon:"mdi-puzzle",category:"plugins",callback:async()=>{await b.api.createWindow({src:"https://ij.imjoy.io",name:"ImageJ.JS"})}}),e.store.commit("core/launcher/ADD",{title:"elFinder",icon:"mdi-puzzle",category:"plugins",callback:async()=>{await b.api.createWindow({src:"https://fm.imjoy.io",name:"elFinder"})}}),e.store.commit("core/launcher/ADD",{title:"ImJoy Fiddle",icon:"mdi-puzzle",category:"plugins",callback:async()=>{await b.api.createWindow({src:"https://if.imjoy.io",name:"ImJoy Fiddle"})}})})).catch((e=>console.error("Error while starting ImJoy",e)))}]}}).then((()=>{console.log("[owd] initialize imjoy-desktop 0.0.1")}));
