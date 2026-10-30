import{D as z}from"./plan-DeATglT2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(a){if(a.ep)return;a.ep=!0;const s=e(a);fetch(a.href,s)}})();const N2="modulepreload",D2=function(o,e){return new URL(o,e).href},gr={},br=function(o,e,t){let a=Promise.resolve();if(e&&e.length>0){let n=function(c){return Promise.all(c.map(p=>Promise.resolve(p).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};const r=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),F=l?.nonce||l?.getAttribute("nonce");a=n(e.map(c=>{if(c=D2(c,t),c in gr)return;gr[c]=!0;const p=c.endsWith(".css"),b=p?'[rel="stylesheet"]':"";if(t)for(let m=r.length-1;m>=0;m--){const J=r[m];if(J.href===c&&(!p||J.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${b}`))return;const I=document.createElement("link");if(I.rel=p?"stylesheet":N2,p||(I.as="script"),I.crossOrigin="",I.href=c,F&&I.setAttribute("nonce",F),document.head.appendChild(I),p)return new Promise((m,J)=>{I.addEventListener("load",m),I.addEventListener("error",()=>J(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(n){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=n,window.dispatchEvent(r),!r.defaultPrevented)throw n}return a.then(n=>{for(const r of n||[])r.status==="rejected"&&s(r.reason);return o().catch(s)})};function x2(o={}){const{immediate:e=!1,onNeedReload:t,onNeedRefresh:a,onOfflineReady:s,onRegistered:n,onRegisteredSW:r,onRegisterError:l}=o;let F,c,p;const b=async(m=!0)=>{await c,p?.()};async function I(){if("serviceWorker"in navigator){if(F=await br(async()=>{const{Workbox:m}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:m}},[],import.meta.url).then(({Workbox:m})=>new m("./sw.js",{scope:"./",type:"classic"})).catch(m=>{l?.(m)}),!F)return;p=()=>{F?.messageSkipWaiting()};{let m=!1;const J=()=>{m=!0,F?.addEventListener("controlling",K=>{K.isUpdate&&(t?t():window.location.reload())}),a?.()};F.addEventListener("installed",K=>{typeof K.isUpdate>"u"?typeof K.isExternal<"u"&&K.isExternal?J():!m&&s?.():K.isUpdate||s?.()}),F.addEventListener("waiting",J)}F.register({immediate:e}).then(m=>{r?r("./sw.js",m):n?.(m)}).catch(m=>{l?.(m)})}}return c=I(),b}const ne=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ks=["M","T","W","T","F","S","S"],$s=o=>String(o).padStart(2,"0"),O=o=>`${o.getFullYear()}-${$s(o.getMonth()+1)}-${$s(o.getDate())}`;function ao(o){const[e,t,a]=o.split("-").map(Number);return new Date(e,t-1,a)}function Fo(o,e){const t=new Date(o.getFullYear(),o.getMonth(),o.getDate());return t.setDate(t.getDate()+e),t}const be=(o,e)=>Math.round((ao(O(e))-ao(O(o)))/864e5),re=o=>(o.getDay()+6)%7,Lo=o=>Fo(o,-re(o)),A=()=>O(new Date),vo=(o,e)=>ao(o).toLocaleDateString(void 0,e||{day:"numeric",month:"short"});function Ms(o){const e=be(ao(o),new Date);return e===0?"today":e===1?"yesterday":e<7?`${e} days ago`:vo(o)}const At=o=>(o=Math.max(0,Math.round(o)),`${Math.floor(o/60)}:${$s(o%60)}`),pt="femmeShape.v1";function Jr(){return{v:1,name:"",unit:"kg",plan:1,start:null,planLog:[],sessions:{},weights:{},rows:[],tests:[],checks:{dance:[],top:[],goals:{}},active:null,lastBackup:null,timers:!0,cardio:"row",theme:"auto",sound:!0,getReady:!0,restSecs:90,body:{goal:null,log:[]},game:null}}let va=!0;try{localStorage.setItem("__fs","1"),localStorage.removeItem("__fs")}catch{va=!1}var wr=2,uo={failed:null,saveError:null,blocked:!1,otherTab:!1};function S2(o){return(o.v||1)<2&&(o.v=2),o.v=Math.max(o.v||1,wr),o}function Ee(o){const e=Jr();return o&&(Object.assign(e,o),e.checks=Object.assign(Jr().checks,o.checks||{})),e.timers??(e.timers=!0),e.sound??(e.sound=!0),e.getReady??(e.getReady=!0),e.restSecs||(e.restSecs=90),e.body={goal:null,log:[],...o?.body||{}},e.glow={days:{},custom:[],hidden:[],...o?.glow||{}},e.custom={workouts:[],week:[null,null,null,null,null,null,null],...o?.custom||{}},e.cardio||(e.cardio="row"),e.theme||(e.theme="auto"),e.sessions&&typeof e.sessions=="object"&&!Array.isArray(e.sessions)||(e.sessions={}),e.weights&&typeof e.weights=="object"&&!Array.isArray(e.weights)||(e.weights={}),Array.isArray(e.rows)||(e.rows=[]),Array.isArray(e.tests)||(e.tests=[]),Array.isArray(e.planLog)||(e.planLog=[]),S2(e)}function q2(){let o=null;try{o=localStorage.getItem(pt)}catch{return Ee(null)}if(!o)return Ee(null);try{const e=JSON.parse(o);if(!e||typeof e!="object"||Array.isArray(e))throw new Error("saved data is not an object");return Ee(e)}catch(e){uo.failed={raw:o,error:String(e?.message||e),at:Date.now()},uo.blocked=!0;try{localStorage.setItem(pt+".unreadable",o)}catch{}return Ee(null)}}let i=q2();function y(){if(!uo.blocked){try{localStorage.setItem(pt,JSON.stringify(i)),uo.saveError&&(uo.saveError=null,va=!0)}catch(o){va=!1,uo.saveError=o?.name==="QuotaExceededError"?"full":"blocked"}typeof vl=="function"&&vl()}}function fr(o){i=Ee(o),y()}function j2(){jn("before-wipe"),i=Ee(null),Ps(),y()}function Ps(){i.start||(i.start=O(Lo(new Date)),i.planLog=[{plan:i.plan,date:A()}],y())}function ka(){const o=document.documentElement,e=i.theme==="light"||i.theme==="dark";e?o.dataset.theme=i.theme:delete o.dataset.theme,document.querySelector('meta[name="color-scheme"]')?.setAttribute("content",e?`only ${i.theme}`:"light dark"),document.querySelectorAll('meta[name="theme-color"]').forEach(t=>{const a=e?i.theme==="dark":t.media.includes("dark");t.setAttribute("content",a?"#1D1317":"#FAF1F0")})}function Bt(o=i){const e=o.game||{},t=He(e.xp||0);return{sessions:Object.values(o.sessions||{}).filter(a=>a&&a.done).length,level:t.level,prestige:e.prestige||0,carrots:e.carrots||0,bunny:e.bunny||"Biscuit",plan:o.plan,name:o.name||"",last:Object.keys(o.sessions||{}).filter(a=>o.sessions[a]?.done).sort().pop()||null}}function Es(){return JSON.stringify({...i,app:"femme-shape",format:wr,exported:new Date().toISOString(),summary:Bt()})}function yr(o){let e;try{e=JSON.parse(String(o).trim().replace(/^\uFEFF/,""))}catch{throw new Error("That file isn\u2019t a save file (it couldn\u2019t be read)")}if(!e||typeof e!="object"||Array.isArray(e)||!("sessions"in e))throw new Error("That doesn\u2019t look like a save file from this app");if(typeof e.sessions!="object"||Array.isArray(e.sessions))throw new Error("That save file is damaged (sessions)");if(e.game!=null&&typeof e.game!="object")throw new Error("That save file is damaged (game)");for(const a of["rows","tests","planLog"])if(e[a]!=null&&!Array.isArray(e[a]))throw new Error(`That save file is damaged (${a})`);const t={exported:e.exported||null,format:e.format||1};return delete e.app,delete e.exported,delete e.summary,delete e.format,Object.defineProperty(e,"_meta",{value:t}),e}const Q2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},d=o=>String(o??"").replace(/[&<>"']/g,e=>Q2[e]);function Uo(o){try{navigator.vibrate?.(o)}catch{}}const Rs=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,Ct=15,Go=o=>(o||i.plan)===Ct?z2():z.plans[(o||i.plan)-1],T2={title:"Rest",flow:"Rest",sections:[],rest:!0},Nt=o=>i.custom.workouts.find(e=>e.id===o);function Kr(o){const e=o.moves.filter(r=>!r.hold),t=o.moves.filter(r=>r.hold),a=r=>({name:r.name,[r.hold?"hold":"sets"]:r.amount||(r.hold?"30 sec":"3 x 10"),steps:r.notes?[r.notes]:[],loaded:!!r.weighted}),s=[];e.length&&s.push({kind:"strength",title:"Workout",meta:"",items:e.map(a),bw:!e.some(r=>r.weighted),notes:[]}),t.length&&s.push({kind:"stretch",title:"Stretch",meta:"",items:t.map(a),notes:[]});const n=[o.warmup?"Warm-up":null,e.length?"Workout":null,t.length?"Stretch":null].filter(Boolean).join(" \u2192 ");return{title:o.name,flow:n,sections:s,custom:o.id}}function z2(){return{n:Ct,name:"My plan",tagline:"Your own week, built from your own workouts. Use it as long as you like.",info:[["Goals","Whatever you decide. Keep showing up."],["Move to next plan","There isn\u2019t one. This one is yours."]],custom:!0,days:i.custom.week.map(o=>Nt(o)?Kr(Nt(o)):T2)}}const Je=o=>o.custom&&Nt(o.custom)?Kr(Nt(o.custom)):Go(o.plan).days[o.day];function $a(o){if(o.title)return o.title;const e=Go(o.plan)?.days[o.day];return e?e.title:"Workout"}function Ma(o){let e=o.toLowerCase().replace(/^stretch:\s*/,"").replace(/^sunday:\s*rest/,"restorative stretch");return e=e.charAt(0).toUpperCase()+e.slice(1),e.replace(/concept2/i,"Concept2").replace(/strength ([abc])\b/i,(t,a)=>"Strength "+a.toUpperCase())}function O2(o){return o.kind==="stretch"?"Stretch":o.kind==="row"?"Cardio":o.kind==="test"?"Review":o.title.startsWith("UPPER")?"Upper + core":"Workout"}function As(o){const e=o?.match(/(\d+)(?:\s*-\s*\d+)?\s*(sec|min)/i);return e?+e[1]*(e[2].toLowerCase()==="min"?60:1):0}const X2=o=>/side/i.test(o||""),Lr=o=>/contract-relax/i.test(o.name);function vr(){const o=i.planLog[i.planLog.length-1],e=Lo(ao(o?o.date:A()));return Math.floor(be(e,new Date)/7)+1}const kr=()=>Math.floor(be(ao(i.start),new Date)/7)+1,Ye=()=>kr()%4===0,ut=o=>/^not yet/i.test(o.hold||o.sets||"")||On()&&Lr(o),$r=(o,e)=>e?`${Math.max(1,o-1)}-${Math.max(1,e-1)}`:`${Math.max(1,o-1)}`,Y2=o=>String(o).replace(/^(\d+)(?:-(\d+))?(\s*x\s)/,(e,t,a,s)=>$r(+t,a&&+a)+s),H2=o=>String(o||"").replace(/(\d+)(?:-(\d+))?(\s*(?:rounds|sets))/,(e,t,a,s)=>$r(+t,a&&+a)+s);function W2(o){return String(o).replace(/(\d+)(?:\s*-\s*\d+)?\s*(sec|min)/g,(e,t,a)=>{let s=+t*(a==="min"?60:1)*.75;return s=s<20?Math.round(s):s<60?Math.round(s/5)*5:Math.round(s/15)*15,s>=60&&s%60===0?`${s/60} min`:`${s} sec`})}function V2(o,e){const t=e.sets||e.hold;return On()?o.kind==="stretch"?W2(t):Y2(t):t}const Mr=o=>On()?H2(o.meta):o.meta;function Pa(o){const e=Je(o),t=[];return/^warm-up/i.test(e.flow)&&t.push({kind:"warmup"}),e.sections.forEach((a,s)=>t.push({kind:a.kind,sec:s})),t.push({kind:"done"}),t}function Bs(o){const e=o.sections.find(t=>t.kind==="stretch");return e?Ma(e.title)+(e.meta?" \xB7 "+e.meta.replace(/^restorative stretch,\s*/,""):""):""}const Pr=o=>So(o.flow).split("\u2192").map(e=>e.trim()),we=()=>i.cardio==="bike",Cs=()=>we()?"bike":"row";function So(o){return!we()||!o?o:o.replace(/Concept2 row/gi,"Spin bike").replace(/light rowing/gi,"light pedalling").replace(/On row days, the row is your warm-up/,"On bike days, the ride is your warm-up").replace(/\bRow\b/g,"Spin bike").replace(/\brow\b/g,"ride")}const Er=o=>o.kind==="row"?So(Ma(o.title)):Ma(o.title);function Rr(o){return we()?o.notes.map(e=>e.replace(/\s*\d+-\d+ strokes\/min, damper 3-5\./,"")):o.notes}const _2=()=>we()?[z.ref.rowing[3],z.ref.rowing[1]]:z.ref.rowing,Ns=o=>o.machine||"row",Ar=["dumbbell","cardio","spark","dumbbell","lotus","cardio","moon"];function U2(o,e){return Ar[o]!=="cardio"?Ar[o]:Go(e).bw?o===1?"fire":"spark":Cs()}const Z2=()=>we()?"ride":"row",ie=()=>i.noWeights===O(Lo(new Date));function oF(o){i.noWeights=o?O(Lo(new Date)):null}const Ea=o=>o.loaded||/dumbbell|barbell|goblet/i.test(o.name+" "+o.steps.join(" "));function Yo(){const o=Object.keys(i.sessions).filter(c=>i.sessions[c].done).sort(),e={cur:0,best:0,savers:0,saved:new Set,total:o.length};if(!o.length)return e;const t=new Set(o),a={};(i.game?.bows||[]).forEach(c=>{a[c]=(a[c]||0)+1});const s=A();let n=ao(o[0]),r=0,l=0,F=0;for(;O(n)<=s;){const c=O(n);a[c]&&(F=Math.min(3,F+a[c])),t.has(c)?(r++,r%7===0&&(F=Math.min(Math.max(2,F),F+1)),l=Math.max(l,r)):c!==s&&(F>0&&r>0?(F--,e.saved.add(c)):r=0),n=Fo(n,1)}return e.cur=r,e.best=l,e.savers=F,e}function eF(o){const e=i.sessions[o];return e?e.done?e.day===6?2:3:e.started?1:0:0}const qo=o=>!!o&&o.w!=null&&o.w!==""&&+o.w>0;function Ds(o,e){const t=(i.weights[o]||[]).filter(a=>a.d!==e);return t.length?t[t.length-1]:null}function Br(o,e){const t=(i.weights[o]||[]).filter(a=>a.d!==e&&qo(a)).map(a=>+a.w);return t.length?Math.max(...t):null}function tF(o){return be(ao(o),new Date)}function To(){return Object.keys(i.sessions).filter(o=>i.sessions[o].done).sort()}function xs(){const o=ao(i.start),e=Fo(new Date,-((new Date().getDay()+6)%7));let t=0,a=0;for(let s=o,n=1;O(s)<=O(e);s=Fo(s,7),n++){let r=0;for(let c=0;c<7;c++)i.sessions[O(Fo(s,c))]?.done&&r++;const l=r>=(n%4===0?4:5),F=O(s)===O(e);l?t++:F||(t=0),a=Math.max(a,t)}return{cur:t,best:a}}const Ss={o:"#4A2433",O:"#7A4B5E",w:"#FFFFFF",s:"#F1E6EA",S:"#C9B3BD",d:"#7C6470",p:"#FFC2D3",P:"#F48FAE",r:"#D9587F",R:"#8E2F55",h:"#FFF7CF",y:"#FFE27A",Y:"#F2AE3D",u:"#9A5A1A",k:"#FF9F45",K:"#E06A1F",e:"#8E3A12",g:"#A6E08E",G:"#5BAE5E",j:"#2F6E3E",b:"#A9DDF8",B:"#62A9E2",v:"#2F5E98",l:"#DCC9F6",L:"#A585DA",q:"#5C3F92",n:"#D49A6A",N:"#A06A43",z:"#5E3524",c:"#FFF4E6",C:"#E8D3B5",a:"#8B5A3C",m:"#FF6F91",X:"#2B1E2F",x:"#4B3A55",V:"#8E2443"},Cr={home:`
.......RR
......RprR
.....RpPPrR
....RpPPPPrR
...RpPPPPPPrR
..RpPPPPPPPPrR
.RRRRRRRRRRRRRR
..aCCCCCCCCCCa
..acccccccccCa
..acccczzcccCa
..accczNNzccCa
..acwbzNNzwbCa
..acbBzNyzbBCa
..aCCCzNNzCCCa
..aaaaaaaaaaaa`,book:`
...RRRRRRRRRR
..RrpPPPPPPPrR
..RrpPPwPwPPrR
..RrpPPwwwwwrR
..RrpPPPwwwPrR
..RrpPPPPwPPrR
..RrpPPPPPPPrR
..RrrrrrrrrrrR
..RRcccccccccR
..RRCCCCCCCCCR
...RRRRRRRRRR`,chart:`
..y
.yhy
..y.......RRRR
..........RpPR
..........RPrR
......qqqqRPrR
......qlLqRPrR
......qlLqRPrR
..jjjjqlLqRPrR
..jgGjqlLqRPrR
..jgGjqlLqRPrR
..jgGjqlLqRPrR
..jgGjqlLqRPrR
.oooooooooooooo`,bunny:`
....OOO...OOO
...OwwwO.OwwwO
...OwpwO.OwpwO
...OwpwO.OwpwO
...OwwwOOOwwwO
..OOwwwwwwwwwOO
.OwwwwwwwwwwwwwO
OwwwwwwwwwwwwwwwO
OwwwoowwwwwoowwwO
OwwwoowwwwwoowwwO
OwppwwwowowwwppwO
.OwwwwwwowwwwwwO
..OOOwwwwwwwOOO
.....OOOOOOO`,timer:`
......RRRR
......RpPR
.......RR
......RRRR
....RRPPPPRR
...RPPwwwwPPR
...RPwwwwwwPR
..RPwwwowwwwPR
..RPwwwowwwwPR
..RPwwwooowwPR
..RPwwwwwwwsPR
...RPwwwwwsPR
...RrrssssrrR
....RRrrrrRR
......RRRR`,sun:`
.......YY
.......YY
..Y....YY....Y
...Y........Y
......uuuu
.....uhyyyu
....uhyyyyYu
.YY.uyoyyoYu.YY
.YY.uypyypYu.YY
....uyyooyYu
.....uYYYYu
......uuuu
...Y........Y
..Y....YY....Y
.......YY
.......YY`,dumbbell:`
..RR........RR
.RpPR......RpPR
.RPrR......RPrR
.RPrRddddddRPrR
.RPrRssssssRPrR
.RPrRSSSSSSRPrR
.RPrRddddddRPrR
.RPrR......RPrR
.RrrR......RrrR
..RR........RR`,row:`
....OOO..OOO
....OpO..OpO
....OpOOOOpO
....OwwwwwwO
...OwowwwwowO
...OpwwwwwwpO
..NRRRRRRRRRRN
.N.RpPPPPPPrR.N
NN..RrrrrrrR..NN
bbbbbRRRRRRbbbbb
.BB...BBBB...BB`,drop:`
.......vv
......vbbv
......vwbv
.....vwbbbv
.....vwbbbv
....vwbbbbbv
....vbbbbbBv
...vbbbbbbbBv
...vbbbbbbbBv
...vbobbbbobv
...vbpbbbbpBv
...vbbbbbbBBv
....vbbbbBBv
......vvvv`,lotus:`
.......RR
......RpPR
.....RpPPrR
.....RpPPrR
.RR..RpPPrR..RR
.RpR.RpPPrR.RrR
.RpPRRpPPrRRPrR
..RpPRpPPrRPrR
...RPPRPPRPPR
.jjjRrrrrrrRjjj
jgggjRRRRRRjgggj
.jgggggggggggGj
..jjjjjjjjjjjj`,clip:`
.....oooooo
..zzzowwSSozzz
..znnoooooonNz
..znccccccccNz
..zncSSSSScCNz
..znccccccccNz
..zncSSSScSCNz
..znccccccccNz
..zncSSSSSSCNz
..znccccccccNz
..zncccPcPcCNz
..znccPPPccCNz
..znccccPccCNz
..znCCCCCCCCNz
..zNNNNNNNNNNz
..zzzzzzzzzzzz`,moon:`
....qqq.....y
...qllq....yhy
..qllq......y
.qwllq
.qwllq
.qwlllq
.qllllq
.qlllllq
.qllllllqq...qq
..qlllllllqqqlq
..qLlllllllllLq
...qLLLlllllLq
....qqLLLLLqq
......qqqqq`,heart:`
...RRR....RRR
..RpPPR..RPPPR
.RpwPPPRRPPPPPR
.RpPPPPPPPPPPrR
.RPPPPPPPPPPPrR
.RPPPPPPPPPPrrR
..RPPPPPPPPPrR
...RPPPPPPPrR
....RPPPPPrR
.....RPPPrR
......RPrR
.......RR`,cal:`
...dd......dd
.RRddRRRRRRddRR
.RpPPPPPPPPPPrR
.RrrrrrrrrrrrrR
.RwwwwwwwwwwwsR
.RwwwpPwwPPwwsR
.RwwpPPPPPPrwsR
.RwwPPPPPPPrwsR
.RwwwPPPPPrwwsR
.RwwwwPPPrwwwsR
.RwwwwwrrwwwwsR
.RssssssssssssR
..RRRRRRRRRRRR`,spark:`
.....u
....uyu
....uyu
...uyhyu
.uuyhwyyuu
uyyhwwwyyYu
.uuyyyyYuu
...uyyYu
....uyu.......R
....uYu......RpR
.....u......RpPrR
.............RrR
..............R`,crown:`
..u....uu....u
.uyu..uhyu..uyu
.uyyuuhyyyuuyyu
.uyyyyyyyyyyyyu
.uhyyyyyyyyyyYu
.uyyyyybbyyyyYu
.uyyyyyBByyyyYu
.uYYYYYYYYYYYYu
.uuuuuuuuuuuuuu`,ladder:`
..zzzz....zzzz
..znNz....znNz
..znNzzzzzznNz
..znNnnnnnnnNz
..znNzzzzzznNz
..znNz....znNz
..znNz....znNz
..znNzzzzzznNz
..znNnnnnnnnNz
..znNzzzzzznNz
..znNz....znNz
..znNz....znNz
..znNzzzzzznNz
..znNnnnnnnnNz
..znNzzzzzznNz
..zzzz....zzzz`,target:`
......RRRR
....RRPPPPRR
...RPPwwwwPPR
...RPwwwwwwPR
..RPwwPPPPwwPR
..RPwPPrrPPwPR
..RPwPPrrPPwrR
..RPwwPPPPwwrR
...RPwwwwwwrR
...RrPwwwwPrR
....RRrrrrRR
......RRRR`,info:`
...vvvvvvvvvv
..vbbbbbbbbbbv
.vbbbbbwwbbbbBv
.vbbbbbbbbbbbBv
.vbbbbwwwbbbbBv
.vbbbbbwwbbbbBv
.vbbbbbwwbbbbBv
.vbbbbbwwbbbbBv
.vbbbbwwwwbbbBv
..vBBBBBBBBBBv
...vvBvvvvvvv
....vBv
....vv`,alert:`
.......uu
......uhyu
......uhyu
.....uhooyu
.....uyooyu
....uyyooyyu
....uyyooyyu
...uyyyooyyyu
...uyyyyyyyyu
..uyyyyooyyyYu
..uyyyyooyyyYu
.uYYYYYYYYYYYYu
.uuuuuuuuuuuuuu`,phone:`
....qqqqqqqq
...qllllllllq
...qlvvvvvvLq
...qlvwbbbvLq
...qlvwbbbvLq
...qlvbbbbvLq
...qlvbbbbvLq
...qlvbbbBvLq
...qlvbbBBvLq
...qlvvvvvvLq
...qlllqqllLq
...qLLLLLLLLq
....qqqqqqqq`,trash:`
......dddd
......d..d
..dddddddddddd
..dwssssssssSd
..dddddddddddd
...dwsSssSsSd
...dwsSssSsSd
...dwsSssSsSd
...dwsSssSsSd
...dwsSssSsSd
...dwsSssSsSd
...dSSSSSSSSd
....dddddddd`,bike:`
......ooo..ooo
.......R...R
.......RRRRR
..ooo.RR..RoRo
.o...R.R.Ro.R.o
o...R.oRRo..R..o
o..SRRRS.o..S..o
o.....o..o.....o
.o...o....o...o
..ooo......ooo`,fire:`
.........R
........RrR
.......RrkR
......RrkkR
.....RrkkkrR
....RrkkykkrR
...RrkkyykkrR
..RrkkyhyykkrR
..RrkyhhyyykrR
..RrkyhyyyykrR
..RrkyyyyyykrR
...RrkyyyykrR
....RrkkkkrR
.....RRRRRR`,trophy:`
...uuuuuuuuuu
...uhhyyyyyYu
.uuuhyyyyyyYuuu
.u.uhyyyyyyYu.u
.u.uyyyyyyyYu.u
..uuyyyyyyyYuu
....uyyyyyYu
.....uyyyYu
......uYYu
......uYYu
.....uuuuuu
....RpPPPPrR
....RrrrrrrR
....RRRRRRRR`,carrot:`
.........jj.jj
........jgGjgGj
.........jgGGj
.......eeejGj
......ekkeejGj
.....ekkkkee
....ekkkkkke
....ekKkkkke
...ekkkkkKke
...ekKkkkke
..ekkkkKke
..ekkkkke
.ekKkkke
.ekkkee
.eeee`,star:`
.......uu
......uhyu
......uhyu
.....uhyyYu
uuuuuuhyyYuuuuuu
.uhhyyyyyyyyyYu
..uyyyoyyoyyYu
...uyyyyyyyYu
....uyyyyyyu
....uyyyyyYu
...uyyyuuyyYu
...uyyu..uyYu
..uyYu....uYYu
..uuu......uuu`,cake:`
.......R
......rmR
......RR
...PPPPPPPP
..PpwppppppP
.PpwppppppppP
.PppppppppprP
.PPpPPrpPPrPP
.Cccccccccc.C
.Chhhhhhhhhh.
.CPPPPPPPPPPC
.Cccccccccccu
.Cccccccccccu
..uuuuuuuuuu`,macaron:`
...rrrrrr
..rpwpppPr
.rpwppppPPr
.rPPPPPPPPr
.Chhhhhhhhh
.rpppppppPr
..rPPPPPPr
...rrrrrr`,gift:`
....RRR..RRR
...RpPPRRPPrR
....RRrPPrRR
.qqqqqqRRqqqqqq
.qlllllPrllllLq
.qLLLLLrrLLLLLq
.qqqqqqRRqqqqqq
..qllllPrlllLq
..qllllPrlllLq
..qllllPrlllLq
..qllllPrlllLq
..qLLLLrrLLLLq
..qqqqqqqqqqqq`,scroll:`
...aaaaaaaaaa
..acccccccccCa
..aCCCCCCCCCCa
...acccccccCa
...acSSSSScCa
...acccccccCa
...acSSSSccCa
...acccccccCa
...acSSSSScCa
...acccccccCa
..aaaaaaaaaaaa
..acccccccccCa
..aCCCCCCCCCCa
...aaaaaaaaaa`,lock:`
.....dddddd
....dsddddsd
....dsd..dsd
....dsd..dsd
..uuuuuuuuuuuu
..uhyyyyyyyyYu
..uyyyyooyyyYu
..uyyyyooyyyYu
..uyyyyooyyyYu
..uyyyyyyyyyYu
..uYYYYYYYYYYu
..uuuuuuuuuuuu`,bag:`
......RRRR
.....R....R
.....R....R
..RRRRRRRRRRRR
..RpPPPPPPPPrR
..RPPwwPPwwPrR
..RPPwwwwwwPrR
..RPPPwwwwPPrR
..RPPPPwwPPPrR
..RPPPPPPPPPrR
..RrrrrrrrrrrR
..RRRRRRRRRRRR`,gem:`
....vvvvvvvv
...vwwbbbbbBv
..vvvvvvvvvvvv
..vwbbbbbbbBBv
...vwbbbbbBBv
....vbbbbBBv
.....vbbBBv
......vbBv
.......vv`,bow:`
.RRR........RRR
RpPPRR....RRPPrR
RpPPPPRRRRPPPPrR
RPPPPPRpPRPPPPrR
RPPPPrRPrRrPPPrR
RPPPrRRRRRRrPPrR
.RRRRRPRRPRRRRR
....RPPRRPPR
...RPPR..RPPR
...RPrR..RrPR
...RRRR..RRRR`,speaker:`
......RR
.....RpR....R
..RRRPPR.R...R
..RpPPPR..R..R
..RPPPPR..R..R
..RPPPrR..R..R
..RRRrrR.R...R
.....RrR....R
......RR`,mute:`
......RR
.....RpR
..RRRPPR..R...R
..RpPPPR...R.R
..RPPPPR....R
..RPPPrR...R.R
..RRRrrR..R...R
.....RrR
......RR`,floppy:`
.qqqqqqqqqqqqq
.qlLqwwwwwqLLq
.qlLqwwwqwqLLq
.qlLqwwwqwqLLq
.qlLqqqqqqqLLq
.qlLLLLLLLLLLq
.qlLwwwwwwwwLq
.qlLwPwwwwwwLq
.qlLwwwwwwwwLq
.qlLwwwwwwwwLq
.qLLLLLLLLLLLq
.qqqqqqqqqqqqq`,box:`
.......uu
......uhyu
.....uhyyYu
....uuuyYuuu
......uyYu
..zzzzzzzzzzzz
.znnnnnnnnnnnNz
.zNNNNNNNNNNNNz
.znnnnnzznnnnNz
.znnnnnnnnnnnNz
.znnnnnnnnnnnNz
.zNNNNNNNNNNNNz
.zzzzzzzzzzzzzz`,copy:`
.....dddddddddd
.....dwwwwwwwsd
.....dwSSSSSwsd
.....dwwwwwwwsd
.RRRRRRRRRRwwsd
.RpPPPPPPPRwwsd
.RPwwwwwwrRwwsd
.RPPPPPPPrRsssd
.RPwwwwPPrRdddd
.RPPPPPPPrR
.RPwwwwwPrR
.RrrrrrrrrR
.RRRRRRRRRR`,play:`
...RR
...RpRR
...RpPPRR
...RpPPPPRR
...RPPPPPPPR
...RPPPPPrrR
...RPPPrrRR
...RPrrRR
...RrRR
...RR`,shoe:`
..RRRRR
..RpPPR
..RPPPwR
..RPPPPwRR
..RPPPPPwPRR
.RPPPPPPPwPPRR
.RPPPPPPPPPPPPR
.RrrrrrrrrrrrrR
RwwwwwwwwwwwwwwR
.RRRRRRRRRRRRRR`,plant:`
.....jjjjj
...jjgggggjj
..jgggGGgggGj
..jgGGgggGGgj
.jgggggGGgggggj
.jgGGggggggGGgj
..jgggGGggggj
...jjjgggjjj
....RRRRRRR
.....RpPPR
.....RPPrR
.....RPPrR
......RRRR`,lamp:`
.....RRRRR
....RpPPPPR
...RpPPPPPPR
..RPPPPPPPPrR
..RRRRRRRRRRR
......yddy
.......dd
.......dd
.......dd
.......dd
.......dd
.....dddddd
....dddddddd`,shelf:`
..zzzzzzzzzzzz
..zPPbbngGlLyz
..zPPbbngGlLyz
..zrrBBnGGLLYz
..zzzzzzzzzzzz
..znyYlLnnPPnz
..znyYlLnnPPnz
..znYYLLnnrrnz
..zzzzzzzzzzzz
..znnnnnnnnnnz
..znnnnyynnnnz
..zzzzzzzzzzzz`,mirror:`
.....uuuuuu
....uybbbbyu
...uybwbbbbyu
...uybwbbbbyu
...uybbbbbbyu
...uybbbbbbyu
...uybbbbbByu
...uybbbbBByu
....uybbbbyu
.....uuuuuu`,clock:`
......RRRR
....RRPPPPRR
...RPPwwwwPPR
...RPwwwowwwPR
..RPwwwwowwwwPR
..RPwwwwowwwwPR
..RPwwwwooowwPR
..RPwwwwwwwwsPR
...RPwwwwwwsPR
...RrrssssrrR
....RRrrrrRR
......RRRR`,poster:`
..RRRRRRRRRRRR
..RccPPccPPccR
..RcPPPPPPPPcR
..RcPpPPPPPPcR
..RccPPPPPPccR
..RcccPPPPcccR
..RccccPPccccR
..RccccccccccR
..RRRRRRRRRRRR`,teddy:`
..zzz......zzz
.znNnzzzzzznNnz
.znnnnnnnnnnnnz
..znnonnnnonnz
..znnncNNcnnnz
..znnnccccnnnz
...zzzPRRPzzz
..znnnnPPnnnnz
.znnnnnnnnnnnnz
.znncnnnnnncnnz
.znnnnnnnnnnnnz
..zzzzzzzzzzzz`,vanity:`
......uuuu
.....ubbbbu
.....ubwbbu
.....ubbbbu
......uuuu
.......uu
..RRRRRRRRRRRR
..RpPPPPPPPPrR
..RRRRRRRRRRRR
...RR......RR
...RR......RR
...RR......RR`,bottle:`
......dddd
......dddd
.....vvvvvv
.....vwbbbv
.....vwbbbv
.....vPPPPv
.....vPwPPv
.....vPPPPv
.....vbbbBv
.....vbbbBv
.....vbbBBv
......vvvv`,kettle:`
......RRRR
.....RR..RR
.....R....R
....RRRRRRRR
...RpPPPPPPrR
..RpPPPPPPPPrR
..RPPPPPPPPPrR
..RPPPPPPPPPrR
..RPPPPPPPPrrR
...RPPPPPPrrR
....RRRRRRRR`,cactus:`
......jj
.....jggj
.jj..jgGj
jggj.jggj.jj
jgGjjjgGjjggj
.jggggggggGgj
..jjjjgGjjjj
.....jggj
.....jgGj
...eeeeeeee
...ekkkkkKe
....ekkkKe
....eeeeee`,beanbag:`




.....RRRRRR
...RRpPPPPPRR
..RpPPPPPPPPPR
.RpPPPPPPPPPPPR
.RPPPPPPPPPPPrR
.RPPPPPPPPPPrrR
..RrrrrrrrrrrR
...RRRRRRRRRR`,candle:`
.......yy
......yhhy
......yYYy
.......dd
.....aaaaaa
.....acccCa
.....acccCa
.....acccCa
.....acccCa
...RRRRRRRRRR
....RrrrrrrR`,window:`
.RRRRRRRRRRRRRR
.RbbbbbRRbbbbbR
.RbwbbbRRbwbbbR
.RbbbbbRRbbbbbR
.RRRRRRRRRRRRRR
.RbbbbbRRbbbbbR
.RbbbbBRRbbbbBR
.RRRRRRRRRRRRRR
RrrrrrrrrrrrrrrR`,lipstick:`
.......RR
......RmmR
......RmmR
......RrrR
.....uuuuuu
.....uyyyYu
.....qqqqqq
.....qlllLq
.....qlllLq
.....qlllLq
.....qlllLq
.....qqqqqq`,dress:`
.....R....R
.....R....R
.....RPPPPR
.....RPwPPR
.....RPPPPR
....RRrrrrRR
....RPPPPPPR
...RpPPPPPPPR
..RpPPPPPPPPPR
..RPPPPPPPPPrR
.RPPPPPPPPPPPrR
.RRRRRRRRRRRRRR`,polish:`
......dddd
......dddd
......dddd
.......dd
....RRRRRRRR
....RwmmmmmR
....RwmmmmmR
....RmmmmmrR
....RmmmmrrR
....RRRRRRRR`,perfume:`
......qqqq
......qLLq
.......qq
....qqqqqqqq
...qlwllllllq
...qlwllllllq
...qllllllLLq
...qllllllLLq
...qllllLLLLq
....qqqqqqqq`,mannequin:`
.......dd
......aCCa
....aaRccRaa
...aCRPPPPRCa
...aCRPwPPRCa
....aRPPPPRa
....RrrrrrrR
...RpPPPPPPrR
..RpPPPPPPPPrR
.RPPPPPPPPPPPrR
.RRRRRRRRRRRRRR
.......dd
.......dd
.....dddddd
....dd....dd`,chandelier:`
......u......
......u......
..Y...Y...Y..
..y...y...y..
..P...P...P..
..r...r...r..
.YYY.YYY.YYY.
..YYYYYYYYY..
....YyyyY....
.....YYY.....
...b..b..b...
...B..B..B...`,gramophone:`
..........YYYY
.........YyhyY
........YyhhyY
.......YyhyyY.
......YyyyY...
.....YyyY.....
....YYY.......
....u.........
.zzzzzzzz.....
.znnnnnnz.....
.znNNNNnz.....
.znnnnnnz.....
.zzzzzzzz.....
.z......z.....`,coffin:`
...XXXXX...
..XxxxxxX..
.XxxxPxxxX.
.XxxPPPxxX.
.XxxxPxxxX.
.XxxxPxxxX.
.XxxxxxxxX.
..XxxxxxX..
..XxxxxxX..
...XxxxX...
...XXXXX...`,lilies:`
..w.....w..
.whw...whw.
..wY...wY..
...G.w.G...
....GhwG...
.....GG....
.....G.....
....bbb....
...bwbbb...
...bwbbb...
...bbbbb...
....BBB....`,bat:`
....X......X....
...XPX....XPX...
...XPxXXXXxPX...
X..XxxxxxxxxX..X
XX.XxwXxxwXxX.XX
XxxXxXXxxXXxXxxX
XxxXmxxXXxxmXxxX
XxxXxxxxwxxxXxxX
X.XXxxxxxxxxXX.X
....XxxxxxxX....
.....XXXXXX.....`,roses:`
......XXX......
.....XVrVX.....
.XXX.XVVVX.XXX.
XVrVX.XXX.XVrVX
XVVVX..G..XVVVX
.XXX...G...XXX.
..G..g.G.g..G..
...G.gGGGg.G...
....GGGGGGG....
.....XxxxX.....
....XxwxxxX....
....XxwxxxX....
....XxxxxxX....
.....XXXXX.....`,candelabra:`
...y...y...y
..yhy.yhy.yhy
...x...x...x
...x...x...x
...u...x...u
...uuuuuuuuu
.......u
.......u
......uuu
.....uuuuu`,skull:`
...oooooo...
..owwwwwwo..
.owwwwwwwwo.
.owwwwwwwSo.
.owpowwpoSo.
.owoowwooSo.
.owwwwwwwSo.
..owwoowSo..
...owwwwSo..
...owowowo..
....ooooo...`,crystal:`
.....qqqqqq
....qwllllLq
...qlwllllLLq
...qllllllLLq
...qlllllLLLq
....qlllLLLq
.....qqqqqq
....uuuuuuuu
...uyyyyyyyyu
...uuuuuuuuuu`,gothwin:`
....XXXXX....
..XXqqXqqXX..
.XqqwqXqhhqX.
.XqqqqXqqqhX.
XqqqqqXqqqhqX
XqwqqqXqhhqqX
XXXXXXXXXXXXX
XqqqqqXqqqwqX
XqqqwqXqqqqqX
XqqqqqXqqqqqX
XXXXXXXXXXXXX
.VVVVVVVVVVV.`,journey:`
......dRR
......dpPRR
......dPPPPR
......drrRR
......dRR
......d
......d
.....jdjjj
...jjggggggjj
..jgggggggggGj
.jggggggggggGGj
.jgggggggggGGGj
.jjjjjjjjjjjjjj`},Nr={check:`


..........xx
.........xxx
........xxx
.xx....xxx
.xxx..xxx
..xxxxxx
...xxxx
....xx`,x:`

..xx....xx
..xxx..xxx
...xxxxxx
....xxxx
....xxxx
...xxxxxx
..xxx..xxx
..xx....xx`,back:`

......xx
.....xxx
....xxx
...xxx
...xxx
....xxx
.....xxx
......xx`,right:`

....xx
....xxx
.....xxx
......xxx
......xxx
.....xxx
....xxx
....xx`,down:`



..xx....xx
..xxx..xxx
...xxxxxx
....xxxx
.....xx`,up:`

.....xx
....xxxx
...xxxxxx
..xxxxxxxx
.....xx
.....xx
.....xx
.....xx
.....xx`,plus:`

.....xx
.....xx
.....xx
..xxxxxxxx
..xxxxxxxx
.....xx
.....xx
.....xx`,minus:`




..xxxxxxxx
..xxxxxxxx`,play:`

...xx
...xxxx
...xxxxxx
...xxxxxxx
...xxxxxxx
...xxxxxx
...xxxx
...xx`,pause:`

..xxx..xxx
..xxx..xxx
..xxx..xxx
..xxx..xxx
..xxx..xxx
..xxx..xxx
..xxx..xxx
..xxx..xxx`,reset:`
...xxxx.xx
..xx..xxxx
.xx....xxx
.xx...xxxx
.xx
.xx......xx
.xx......xx
..xx....xx
...xxxxxx`};function aF(o){const e=o.replace(/^\n/,"").split(`
`),t=Math.max(...e.map(a=>a.length));return{rows:e,width:t,height:e.length}}function sF(o,e,t=0,a=0){let s="";return o.forEach((n,r)=>{let l=0;for(;l<n.length;){const F=n[l];if(F==="."||F===" "){l++;continue}let c=l+1;for(;n[c]===F;)c++;s+=`<rect x="${l+t}" y="${r+a}" width="${c-l}" height="1" fill="${e(F)}"/>`,l=c}}),s}function nF(o){let e=1/0,t=-1,a=1/0,s=-1;return o.forEach((n,r)=>{[...n].forEach((l,F)=>{l==="."||l===" "||(e=Math.min(e,F),t=Math.max(t,F),a=Math.min(a,r),s=Math.max(s,r))})}),{minX:e,minY:a,w:t-e+1,h:s-a+1}}function qs(o,e,t){const{rows:a}=aF(o),s=nF(a),n=Math.max(t,s.w,s.h),r=Math.floor((n-s.w)/2)-s.minX,l=Math.floor((n-s.h)/2)-s.minY;return{box:n,body:sF(a,e,r,l)}}const Ra=new Map;function Gt(o,{size:e=16,cls:t="",palette:a}={}){if(Z.icons[o])return jo(Z.icons[o],e,a,t);const s=Cr[o];if(!s)return"";const n=a?o+JSON.stringify(a):o;let r=Ra.get(n);if(!r){const l=a?{...Ss,...a}:Ss;r=qs(s,F=>l[F]||"#000",16),Ra.set(n,r)}return`<svg class="px ${t}" width="${e}" height="${e}" viewBox="0 0 ${r.box} ${r.box}" shape-rendering="crispEdges" aria-hidden="true">${r.body}</svg>`}function rF(o,{size:e=18,cls:t=""}={}){if(Z.glyphs[o])return jo(Z.glyphs[o],e,{o:"currentColor"},t).replace('class="px ','class="gl ');const a=Nr[o];if(!a)return"";const s="glyph:"+o;let n=Ra.get(s);return n||(n=qs(a,()=>"currentColor",12),Ra.set(s,n)),`<svg class="gl ${t}" width="${e}" height="${e}" viewBox="0 0 ${n.box} ${n.box}" shape-rendering="crispEdges" aria-hidden="true">${n.body}</svg>`}function B(o,{size:e,cls:t=""}={}){return Nr[o]?rF(o,{size:e||18,cls:"i "+t}):Gt(o,{size:e||22,cls:"i "+t})}const G=(o,e=22,t="")=>Gt(o,{size:e,cls:t}),Zo=(o,e,t)=>`<div class="banner ${o}"><span class="badge">${G(e,22)}</span><div class="banner-text">${t}</div></div>`,mt=(o,e="How to do it")=>`<details class="how"><summary>${G("info",16)}${e}${B("down",{cls:"chev"})}</summary>${o}</details>`,le=(o,e)=>`<div class="empty"><span class="badge">${G(o,30)}</span>${e}</div>`,js=(o,e,t,a="chk")=>`<button class="chk ${e?"on":""}" data-act="${a}" data-k="${o}" aria-pressed="${e}" aria-label="Done: ${d(t)}">${B("check",{size:18})}</button>`;function Re(o){return o.map(e=>`<div class="rule">${e.t?`<b>${d(e.t)}.</b> `:""}${d(e.b)}</div>`).join("")}function Qs(o,e,t){return`<div class="list">
    ${t?`<div class="li lead"><span class="badge lil">${G("info",22)}</span><div class="grow">${t}</div></div>`:""}
    <details>
      <summary class="li"><span class="t accent">${d(o)}</span>${B("down",{cls:"chev"})}</summary>
      <div class="li-body">${Re(e)}</div>
    </details>
  </div>`}function Dr(o){return`<div class="howIn">
    <ol>${o.steps.map(e=>`<li>${d(e)}</li>`).join("")}</ol>
    ${o.feel?`<div class="call feel">${G("heart",16)}<div><b>Feel it:</b> ${d(o.feel)}</div></div>`:""}
    ${o.dont?`<div class="call dont">${G("alert",16)}<div><b>Don\u2019t:</b> ${d(o.dont)}</div></div>`:""}
  </div>`}const ko=(o,e="closeSheet")=>`<div class="between"><h2 class="sheet-title">${o}</h2><button class="iconbtn" data-act="${e}" aria-label="Close">${B("x")}</button></div>`;function yo(o,e=""){const t=document.getElementById("sheet");t.innerHTML=`<div class="sheet ${e}" role="dialog" aria-modal="true"><div class="grab"></div>${o}</div>`,t.classList.add("show")}function Jo(){document.getElementById("sheet").classList.remove("show")}let xr;function $(o,e){const t=document.getElementById("toast");t.innerHTML=(e?G(e,18):"")+`<span>${d(o)}</span>`,t.classList.add("show"),clearTimeout(xr),xr=setTimeout(()=>t.classList.remove("show"),2400)}function Fe(o,{segments:e=20,cls:t=""}={}){const a=Math.round(Math.max(0,Math.min(1,o))*e);let s="";for(let n=0;n<e;n++)s+=`<i class="${n<a?"on":""}"></i>`;return`<div class="pxbar ${t}" style="--n:${e}">${s}</div>`}const ht=o=>150+60*(o-1),Dt=50;function He(o){let e=1,t=o;for(;e<Dt&&t>=ht(e);)t-=ht(e),e++;if(e===Dt)return{level:e,into:t,need:ht(Dt),fraction:Math.min(1,t/ht(Dt)),max:!0};const a=ht(e);return{level:e,into:t,need:a,fraction:t/a,max:!1}}const Ts=[[1,"Fluffball"],[3,"Bunny Hopper"],[6,"Bouncy Bean"],[10,"Stretchy Bun"],[15,"Glute Guardian"],[20,"Split Seeker"],[25,"Iron Bunny"],[30,"Moon Hopper"],[40,"Starlight Bun"],[50,"Legend of the Burrow"]];function Sr(o){let e=Ts[0][1];for(const[t,a]of Ts)o>=t&&(e=a);return e}function iF(o){return Ts.find(([e])=>e>o)||null}const fp=`


.....OOO...OOO
....OwwwO.OwwwO
....OwpwO.OwpwO
....OwpwO.OwpwO
....OwpwO.OwpwO
....OwwwOOOwwwO
...OOwwwwwwwwwOO
..OwwwwwwwwwwwwwO
.OwwwwwwwwwwwwwwwO
.OwwwwwwwwwwwwwwwO
.OwwwwwwwwwwwwwwwO
.OwwwwwwwwwwwwwwsO
.OwwwwwwwwwwwwwwsO
..OwwwwwwwwwwwwsO
...OOOwwwwwssOOO
......OOOOOOO`,xt=[[3,13,"p"],[4,13,"p"],[14,13,"p"],[15,13,"p"]],lF=[[8,13,"o"],[10,13,"o"],[9,14,"o"]],zs=[[8,13,"o"],[9,13,"o"],[10,13,"o"],[8,14,"o"],[9,14,"m"],[10,14,"o"]],It=(o,e)=>[[o,e,"o"],[o+1,e,"o"],[o,e+1,"o"],[o+1,e+1,"o"],[o,e,"e"]],qr=(o,e)=>[[o,e+1,"o"],[o+1,e,"o"],[o+2,e+1,"o"]],jr=(o,e)=>[[o,e,"o"],[o+1,e,"o"],[o+2,e,"o"]],Qr=(o,e)=>[[o,e,"r"],[o+2,e,"r"],[o,e+1,"r"],[o+1,e+1,"r"],[o+2,e+1,"r"],[o+1,e+2,"r"]],yp={idle:[...It(5,11),...It(12,11),...xt,...lF],happy:[...qr(4,11),...qr(12,11),...xt,...zs],sleepy:[...jr(4,12),...jr(12,12),...xt,[9,14,"o"]],love:[...Qr(4,11),...Qr(12,11),...xt,...zs],pumped:[...It(5,11),...It(12,11),...xt,...zs,[16,9,"b"],[16,10,"b"],[17,10,"b"],[16,11,"b"]],sad:[...It(5,11),...It(12,11),[4,13,"b"],[4,14,"b"],[8,14,"o"],[9,13,"o"],[10,14,"o"]]},Os={bow:{name:"Classic bow",art:`

.............oo.oo
............oPPoPPo
............oPrrPPo
.............oPoPo
..............o.o`},sprout:{name:"Little sprout",art:`
.........oo
........oggo
.......oggGo.
........ooGo
..........o`},band:{name:"Sweatband",art:`









.oooooooooooooooo
.orrwrrwrrwrrwrro
.oooooooooooooooo`},flower:{name:"Daisy",art:`




..PPP
.PPmPP
.PmymP
.PPmPP
G.PPP
GG`},beanie:{name:"Cosy beanie",art:`






....RRRRRRRRRRR
...RpPPPPPPPPPrR
..RpPPPPPPPPPPPrR
..RrPrPrPrPrPrPrR
..RRRRRRRRRRRRRRR`},phones:{name:"Headphones",art:`

.....ddddddddd
....d.........d
...d...........d
..d.............d
..d.............d
..d.............d
..d.............d
..d.............d
RRR.............RRR
RpR.............RpR
RPR.............RPR
RRR.............RRR`},tiara:{name:"Tiara",art:`






.........u
......u.uyu.u
......uyymyyu
......uuuuuuu`},witch:{name:"Witch hat",hideEars:!0,art:`
...........qq
..........qLq
.........qLLq
........qlLLLq
.......qlLLLLLq
......qlLLLLLLLq
.....qlLLLLLLLLq
....qkkkkkkkkkkkq
.qqqqqqqqqqqqqqqqq
.qLLLLLLLLLLLLLLLq
..qqqqqqqqqqqqqqq`},rainbow:{name:"Rainbow bow",art:`

.............mmm
............myyym
...........mybbbym
...........myb.bym
...........my...ym`},party:{name:"Party hat",art:`
.........m
........mmm
........qqq
........qyq
.......qllLq
.......qyyYq
......qlllLLq
......qyyyyYq
......qqqqqqq`},flowercrown:{name:"Flower crown",art:`







....mm..yy..mm
...gmmggyyggmmg`},strawberry:{name:"Strawberry hood",hideEars:!0,art:`



.......g.j.g
......ggggggg
.....RgGgGgGgR
....RrrryrrryrR
...RrryrrrrrryrR
...RrrrrryrrrrrR
..RrryrrrrrrryrrR
..RRRRRRRRRRRRRRR`},cherry:{name:"Cherry clip",art:`


..............j
.............j.j
............mm.mm
............mm.mm`},unicorn:{name:"Unicorn horn",art:`


.........u
........uhu
........uyu
........uhu
.......uyyyu
.......uhyhu
.......uuuuu`},blackbow:{name:"Black bow",art:`

.............XX.XX
............XxxXxxX
............XxVVxxX
.............XxXxX
..............X.X`},velvetbow:{name:"Velvet bow",art:`

.............RR.RR
............RVVRVVR
............RVrrVVR
.............RVRVR
..............R.R`},horns:{name:"Little horns",art:`





..r.............r
..VR...........RV
...V...........V
...V...........V`},fascinator:{name:"Rose headpiece",art:`


.............XXXX
............XxxxVX
...........XXXXXXXX
...........X.X.X.X
............X.X.X`},rosecrown:{name:"Rose crown",art:`






....VV..VV..VV
...jVrjjVrjjVrj`},pearlclip:{name:"Pearl clip",art:`




....D..D
...DeDDeD
....l..l`},batclip:{name:"Bat clip",art:`

X..X.X..X
XX.XXX.XX
XxXmXmXxX
XxxXXXxxX
.X..y..X.`},crown:{name:"Tiny crown",art:`




......o..o..o
......oyoyoyo
......oyyyyyo
......oYYYYYo
.......ooooo`},halo:{name:"Halo",art:`
.....ooooooooo
....oyyyyyyyyyo
.....ooooooooo`},star:{name:"Star clip",art:`




..o
.oyo
oyyyo
.oyo
.o.o`}},Xs={fangs:{name:"Fangs",art:`












........ooo
.......OeoeO
........O.O`},redlips:{name:"Red lip",art:`













........KKK
.........K`},smoky:{name:"Smoky eye",art:`










....xxx.....xxx`},beautymark:{name:"Beauty mark",art:`














..............o`},shades:{name:"Cool shades",art:`










.ooooooooooooooooo
..oooobo...obooo
..ooooo.....ooooo
...ooo.......ooo`},specs:{name:"Round specs",art:`










....oooo...oooo
....o..ooooo..o
....o..o...o..o
....oooo...oooo`},freckles:{name:"Freckles",art:`














...N.N.......N.N`},stars:{name:"Star stickers",art:`









...y...........y
..yhy.........yhy
...y...........y`},lashes:{name:"Lashes",art:`










....o.o.....o.o`},lipstick:{name:"Pink lips",art:`













........mmm
.........m`},darklips:{name:"Dark lips",art:`













........VVV
.........V`},liner:{name:"Winged liner",art:`










...X...........X
....X.........X`},blush:{name:"Rosy blush",art:`












..PPP.........PPP
..PPP.........PPP`},hearts:{name:"Heart cheeks",art:`













..m.m.........m.m
...m...........m`}},Ys={cross:{name:"Cross pendant",art:`















...x.x.x.x.x.x.x
.........X
........XXX`},studs:{name:"Studded choker",art:`















..XDXDXDXDXDXDXDX`},diamonds:{name:"Diamond necklace",art:`















...D.D.D.D.D.D.D
........BbB
.........B`},scarf:{name:"Cosy scarf",art:`















..RpPPPPPPPPPPPrR
...RrrrrrrrRPPrR
...........RPrR
...........RRRR`},pearls:{name:"Pearls",art:`















...l.l.l.l.l.l.l
........lml
.........m`},medal:{name:"Gold medal",art:`














........B.B
........BbB
.......uyyyu
.......uyhyu
........uuu`},bowtie:{name:"Bow tie",art:`















......RR...RR
......RPPrPPR
......RR...RR`},choker:{name:"Velvet choker",art:`















..XXXXXXXXXXXXXXX
........XVX
.........V`},winechoker:{name:"Wine choker",art:`















..RRRRRRRRRRRRRRR
........RmR
.........m`},locket:{name:"Heart locket",art:`















...u.u.u.u.u.u.u
........m.m
.........m`},bell:{name:"Bell collar",art:`















..RRRRRRRRRRRRRRR
........uyu
........uuu`}},St={snow:{name:"Snow",w:"#FFFFFF",s:"#EADCE2",p:"#FFB3C7"},peach:{name:"Peach",w:"#FFE1D2",s:"#F4C0AA",p:"#FF9AAE"},sakura:{name:"Sakura",w:"#FFD1DE",s:"#F4A9BF",p:"#FF7FA3"},lilac:{name:"Lilac",w:"#E6D8FA",s:"#C6B0EC",p:"#FFB3C7"},mint:{name:"Mint",w:"#D6F5E3",s:"#ABDFC2",p:"#FFB3C7"},cocoa:{name:"Cocoa",w:"#D7A988",s:"#B9846A",p:"#FFC4CF"},midnight:{name:"Midnight",w:"#5C5379",s:"#463E62",p:"#FF9AB8",o:"#140E1C"},butter:{name:"Butter",w:"#FFF0B8",s:"#F2D98A",p:"#FFB3A7"},sky:{name:"Sky",w:"#CFE9FF",s:"#A5D0F2",p:"#FFB3C7"},galaxy:{name:"Galaxy",w:"#8C7BE6",s:"#6B5AC8",p:"#FF9AE0"},strawberry:{name:"Strawberry",w:"#FFC1C9",s:"#F79AA8",p:"#FF6F91"},matcha:{name:"Matcha",w:"#DCEFC4",s:"#B9D99A",p:"#FFB3C7"},cotton:{name:"Cotton candy",w:"#F5D6F7",s:"#E0B4E6",p:"#FF9AC8"},ocean:{name:"Ocean",w:"#BFE6F0",s:"#94CFE0",p:"#FFB3C7"},latte:{name:"Latte",w:"#EED8C1",s:"#D9BB9C",p:"#FFB8B0"},rose:{name:"Rose gold",w:"#F7D6D0",s:"#E8B4AE",p:"#F28BA8"},raven:{name:"Raven",w:"#5A5266",s:"#463F52",p:"#E58FB0",o:"#140E1C"},ink:{name:"Ink",w:"#3E3249",s:"#2E2438",p:"#E58FB0",o:"#0B0710"},porcelain:{name:"Porcelain",w:"#FBF6F2",s:"#E3D6DC",p:"#E8A0B4"},wine:{name:"Wine",w:"#A24F68",s:"#813852",p:"#FFB3C7",o:"#2B0F1E"},silver:{name:"Silver",w:"#DCD9E4",s:"#B9B5C8",p:"#FFB3C7"},blush:{name:"Blush",w:"#FFE4E8",s:"#F5C2CC",p:"#FF8FA8"},plum:{name:"Plum",w:"#C29BC0",s:"#A27BA0",p:"#FFB3C7"},pearl:{name:"Pearl",w:"#F8F4FF",s:"#DDD3EE",p:"#FFC2D3"},bronze:{name:"Bronze",w:"#E9B98F",s:"#CF9668",p:"#FF9AAE"},honey:{name:"Honey",w:"#FFE6B8",s:"#EFC584",p:"#FF9AAE"}},FF={o:"#4A2433",O:"#7A4B5E",w:"#FFFFFF",s:"#EADCE2",p:"#FFB3C7",P:"#F28BA8",r:"#D9587F",m:"#FF6F91",y:"#FFD966",Y:"#F2A93B",g:"#9EDB86",G:"#4FA65A",b:"#8FD3FF",R:"#8E2F55",u:"#9A5A1A",d:"#7C6470",q:"#5C3F92",L:"#A585DA",l:"#C9B2EE",k:"#FF9F45",B:"#62A9E2",h:"#FFF7CF",j:"#2F6E3E",N:"#A06A43",X:"#2B1E2F",x:"#4B3A55",V:"#8E2443",e:"#FFFFFF",K:"#C42D3D",D:"#A8A4B8"};function Hs(o,e,t){o.forEach((a,s)=>{let n=0;for(;n<a.length;){const r=a[n];if(r==="."||r===" "){n++;continue}let l=n+1;for(;a[l]===r;)l++;t.push(`<rect x="${n}" y="${s}" width="${l-n}" height="1" fill="${e[r]||"#000"}"/>`),n=l}})}const Kp=o=>o.replace(/^\n/,"").split(`
`);function ce(o={}){return O1(o)}const gt={pink:"Pink gingham",garden:"Garden",beach:"Beach day",night:"Starry night",gym:"Home gym",sparkle:"Sparkle dream",bedroom:"Bedroom",cafe:"Cosy cafe",snow:"Snow day",sakura:"Blossom park",sunset:"Sunset",rainy:"Rainy window",gothic:"Gothic parlour",library:"Moody library",boudoir:"Velvet boudoir",gala:"Gala night",opera:"Opera box",cathedral:"Candlelit chapel",penthouse:"Penthouse",salon:"Beauty salon",moonlit:"Moonlit garden"},We={poster:{name:"Heart poster",slot:"wall"},clock:{name:"Wall clock",slot:"wall"},mirror:{name:"Gold mirror",slot:"wall"},window:{name:"Window",slot:"wall"},lights:{name:"Fairy lights",slot:"wall",css:!0},gothwin:{name:"Moon window",slot:"wall"},plant:{name:"House plant",slot:"left"},cactus:{name:"Cactus",slot:"left"},lamp:{name:"Floor lamp",slot:"left"},beanbag:{name:"Beanbag",slot:"left"},shelf:{name:"Bookshelf",slot:"left"},candelabra:{name:"Candelabra",slot:"left"},crystal:{name:"Crystal ball",slot:"left"},bottle:{name:"Water bottle",slot:"right"},candle:{name:"Candle",slot:"right"},kettle:{name:"Kettlebell",slot:"right"},teddy:{name:"Teddy",slot:"right"},bat:{name:"Bat plush",slot:"right"},chandelier:{name:"Chandelier",slot:"wall"},gramophone:{name:"Gramophone",slot:"right"},coffin:{name:"Coffin shelf",slot:"left"},lilies:{name:"Vase of lilies",slot:"right"},skull:{name:"Cute skull",slot:"right"},roses:{name:"Black roses",slot:"right"},vanity:{name:"Vanity",slot:"right"},perfume:{name:"Perfume",slot:"right"},mannequin:{name:"Dress form",slot:"right"},rug:{name:"Round rug",slot:"rug",css:!0},checker:{name:"Checker rug",slot:"rug",css:!0},cloud:{name:"Cloud rug",slot:"rug",css:!0},yoga:{name:"Yoga mat",slot:"rug",css:!0},lace:{name:"Lace rug",slot:"rug",css:!0}},Tr={fur:St,outfit:Os,face:Xs,neck:Ys},f=(o,e,t={})=>({id:`${o==="outfit"?"fit":o}:${e}`,kind:o,key:e,...t}),Io=[f("fur","snow",{price:0}),f("fur","peach",{price:60}),f("fur","sakura",{price:80}),f("fur","butter",{price:90}),f("fur","lilac",{price:100}),f("fur","mint",{price:100}),f("fur","sky",{price:110}),f("fur","latte",{price:120}),f("fur","ocean",{price:130,level:5}),f("fur","cocoa",{price:140}),f("fur","midnight",{price:220,level:8}),f("fur","strawberry",{badge:"st30"}),f("fur","matcha",{badge:"hold200"}),f("fur","cotton",{badge:"run25"}),f("fur","raven",{price:150,level:7}),f("fur","ink",{price:220,level:10}),f("fur","wine",{price:200,level:9}),f("fur","porcelain",{badge:"silk10"}),f("fur","silver",{badge:"heels10"}),f("fur","rose",{badge:"glow30s"}),f("fur","galaxy",{mystery:!0}),f("fur","blush",{badge:"lad_dress"}),f("fur","plum",{badge:"lad_goth"}),f("fur","pearl",{badge:"step20"}),f("fur","honey",{badge:"lad_voice"}),f("fur","bronze",{badge:"lad_strong"}),f("outfit","none",{price:0,name:"Nothing"}),f("outfit","bow",{price:0}),f("outfit","sprout",{price:40}),f("outfit","band",{price:60}),f("outfit","cherry",{price:65}),f("outfit","flower",{price:70}),f("outfit","star",{price:90}),f("outfit","beanie",{price:110}),f("outfit","strawberry",{price:130,level:3}),f("outfit","phones",{price:150,level:6}),f("outfit","witch",{price:160,level:4}),f("outfit","tiara",{price:200,level:12}),f("outfit","crown",{price:250,level:10}),f("outfit","halo",{price:300,level:20}),f("outfit","blackbow",{price:70}),f("outfit","batclip",{price:90}),f("outfit","horns",{price:120,level:5}),f("outfit","fascinator",{price:160,level:8}),f("outfit","pearlclip",{price:110}),f("outfit","rosecrown",{badge:"r10_goth"}),f("outfit","flowercrown",{badge:"dance"}),f("outfit","party",{badge:"q50"}),f("outfit","velvetbow",{badge:"lad_hair"}),f("outfit","rainbow",{mystery:!0}),f("outfit","unicorn",{mystery:!0}),f("face","none",{price:0,name:"Nothing"}),f("face","hearts",{price:50}),f("face","freckles",{price:60}),f("face","stars",{price:80}),f("face","specs",{price:90}),f("face","shades",{price:120,level:5}),f("face","lashes",{badge:"pr25"}),f("face","lipstick",{badge:"makeup1"}),f("face","liner",{badge:"makeup20"}),f("face","darklips",{badge:"out5"}),f("face","fangs",{price:80}),f("face","smoky",{price:100,level:4}),f("face","beautymark",{price:60}),f("face","redlips",{badge:"redlip10"}),f("face","blush",{badge:"skin30"}),f("neck","none",{price:0,name:"Nothing"}),f("neck","bowtie",{price:70}),f("neck","scarf",{price:90}),f("neck","bell",{price:110,level:6}),f("neck","pearls",{badge:"goddess"}),f("neck","medal",{badge:"km42"}),f("neck","choker",{price:90}),f("neck","cross",{price:100}),f("neck","studs",{badge:"allblack10"}),f("neck","diamonds",{badge:"r10_elegant"}),f("neck","locket",{badge:"jewel10"}),f("neck","winechoker",{badge:"lad_nails"}),f("room","pink",{price:0}),f("room","garden",{price:120}),f("room","beach",{price:150,level:3}),f("room","snow",{price:160,level:5}),f("room","rainy",{price:160,level:5}),f("room","night",{price:180,level:7}),f("room","gym",{price:200,level:9}),f("room","cafe",{badge:"early10"}),f("room","bedroom",{badge:"col25"}),f("room","sakura",{badge:"wk12"}),f("room","sunset",{badge:"c50"}),f("room","gothic",{price:190,level:6}),f("room","opera",{price:260,level:10}),f("room","penthouse",{price:280,level:12}),f("room","cathedral",{badge:"ranks50"}),f("room","library",{price:170,level:4}),f("room","sparkle",{mystery:!0}),f("room","boudoir",{badge:"lad_me"}),f("room","gala",{badge:"lad_elegant"}),f("room","salon",{badge:"lad_makeup"}),f("room","moonlit",{badge:"dare10"}),f("decor","poster",{price:60}),f("decor","clock",{price:70}),f("decor","lights",{price:80}),f("decor","window",{price:100}),f("decor","gothwin",{price:140,level:6}),f("decor","mirror",{price:110,level:3}),f("decor","plant",{price:50}),f("decor","cactus",{price:50}),f("decor","lamp",{price:70}),f("decor","beanbag",{price:90}),f("decor","shelf",{price:110}),f("decor","candelabra",{price:130,level:5}),f("decor","crystal",{mystery:!0}),f("decor","bottle",{price:40}),f("decor","candle",{price:50}),f("decor","kettle",{price:60}),f("decor","teddy",{price:80}),f("decor","bat",{price:90}),f("decor","skull",{price:100}),f("decor","coffin",{price:120}),f("decor","chandelier",{price:160,level:6}),f("decor","gramophone",{price:140}),f("decor","lilies",{badge:"moist60"}),f("decor","roses",{price:110}),f("decor","vanity",{badge:"style10"}),f("decor","perfume",{badge:"perfume10"}),f("decor","mannequin",{badge:"dress10"}),f("decor","rug",{price:40}),f("decor","yoga",{price:50}),f("decor","checker",{price:60}),f("decor","cloud",{price:80}),f("decor","lace",{price:100,level:5})].map(o=>({...o,price:o.price??null,name:o.name||(o.kind==="room"?gt[o.key]:o.kind==="decor"?We[o.key].name:Tr[o.kind][o.key].name),slot:o.kind==="decor"?We[o.key].slot:void 0})),io=o=>Io.find(e=>e.id===o),Ae={fur:"fur",outfit:"outfit",face:"face",neck:"neck",room:"room"},Ws=4444,zr=500,qt={2:"fit:sprout",4:"room:garden",6:"face:hearts",8:"fur:butter",10:"fit:beanie",12:"room:beach",14:"neck:scarf",15:"face:specs",16:"fur:latte",18:"fur:sky",20:"room:night",22:"face:stars",25:"fit:phones",28:"fur:ocean",30:"room:gym",35:"room:snow",40:"neck:bell",45:"room:rainy",50:"fit:halo"},cF=o=>o>30&&o%5===0?100:0,jt=40,Qt=150,fe=12,Aa=["The Bunny","The Rose","The Mirror","The Crown","The Bow","The Bat","The Lipstick","The Moon Hare","The Dumbbell","The Locket","The Candle","The Carrot"],Tt=500,Vs=15,zt=150,_s=100,Ve=3,bt=80,_e=3,Ot=70,u=(o,e,t,a,s,n,r)=>({id:o,name:e,desc:t,icon:a,carrots:s,stat:n,target:r}),Jt=(o,e,t,a,s,n)=>({id:o,name:e,desc:t,icon:a,carrots:s,test:n}),$o=[u("first","First hop","Finish your first session","play",10,"sessions",1),u("s10","Ten down","Finish 10 sessions","star",20,"sessions",10),u("s25","Habit formed","Finish 25 sessions","heart",30,"sessions",25),u("s50","Half century","Finish 50 sessions","gem",50,"sessions",50),u("s100","Hundred hops","Finish 100 sessions","crown",80,"sessions",100),u("s250","Lifer","Finish 250 sessions","trophy",150,"sessions",250),u("s500","Burrow legend","Finish 500 sessions","crown",300,"sessions",500),u("st3","Warming up","3-day streak","fire",10,"bestStreak",3),u("st7","Bow earned","7-day streak","bow",20,"bestStreak",7),u("st14","Two weeks strong","14-day streak","fire",30,"bestStreak",14),u("st30","A month of you","30-day streak","cal",60,"bestStreak",30),u("st60","Unstoppable","60-day streak","spark",90,"bestStreak",60),u("st100","Triple digits","100-day streak","crown",150,"bestStreak",100),u("st200","Two hundred days","200-day streak","gem",250,"bestStreak",200),u("st365","A whole year","365-day streak","trophy",500,"bestStreak",365),u("wk4","Consistency","Weekly goal 4 weeks in a row","cal",50,"weekStreak",4),u("wk12","Three months strong","Weekly goal 12 weeks in a row","fire",120,"weekStreak",12),u("wk26","Half a year","Weekly goal 26 weeks in a row","crown",250,"weekStreak",26),u("wk52","Year of yes","Weekly goal 52 weeks in a row","trophy",500,"weekStreak",52),u("week7","Perfect week","Train all 7 days, Monday to Sunday","cal",40,"fullWeeks",1),u("week7x4","Perfect month","4 perfect weeks","spark",120,"fullWeeks",4),u("pr1","Stronger","Set your first personal best","dumbbell",15,"prs",1),u("pr10","PR machine","10 personal bests","trophy",40,"prs",10),u("pr25","Heavy hitter","25 personal bests","gem",80,"prs",25),u("pr50","Powerhouse","50 personal bests","crown",150,"prs",50),u("glute20","Peachy","20 glute days on Plans 1-6","heart",40,"glute",20),u("rev1","Check-in","Save your first review","clip",15,"reviews",1),u("rev4","Glow-up log","Save 4 reviews","scroll",40,"reviews",4),u("rev12","Tracker","Save 12 reviews","chart",80,"reviews",12),u("rev26","Data queen","Save 26 reviews","crown",150,"reviews",26),u("hold50","Hold it","Finish 50 hold timers","timer",30,"timers",50),u("hold200","Bendy","Finish 200 hold timers","lotus",80,"timers",200),u("hold500","Rubber band","Finish 500 hold timers","lotus",150,"timers",500),u("c10","Cardio cutie","Log 10 cardio sessions","heart",25,"cardio",10),u("c25","Cardio regular","Log 25 cardio sessions","heart",50,"cardio",25),u("c50","Heart of gold","Log 50 cardio sessions","heart",90,"cardio",50),u("c100","Endless energy","Log 100 cardio sessions","fire",180,"cardio",100),u("cm300","Five hours","300 minutes of cardio","timer",40,"cardioMin",300),u("cm1000","Heart healthy","1,000 minutes of cardio","heart",100,"cardioMin",1e3),u("cm3000","Iron heart","3,000 minutes of cardio","gem",250,"cardioMin",3e3),u("km10","First ten","10 km of cardio","journey",20,"cardioKm",10),u("km42","Marathon-ish","42 km of cardio","journey",60,"cardioKm",42),u("km100","Century","100 km of cardio","trophy",120,"cardioKm",100),u("km250","Far, far away","250 km of cardio","crown",250,"cardioKm",250),u("row20","Row row row","20 rowing logs","row",50,"row",20),u("bike20","Spin cycle","20 spin bike logs","bike",50,"bike",20),u("walk10","Stroller","10 walks","journey",25,"walk",10),u("walk50","Wanderer","50 walks","journey",90,"walk",50),u("jog10","Jogger","10 jogs","drop",40,"jog",10),u("run5","Off she goes","5 runs","shoe",40,"run",5),u("run25","Runner girl","25 runs","shoe",120,"run",25),u("xc10","Bonus round","Log 10 bonus cardio sessions","heart",40,"extraCardio",10),u("p2","Moving up","Reach Plan 2","book",30,"planMax",2),u("p4","Loaded","Reach Plan 4","dumbbell",50,"planMax",4),u("p7","Floor work","Reach Plan 7","lotus",80,"planMax",7),u("p10","Goddess plan","Reach Plan 10","crown",120,"planMax",10),u("p14","Apex","Reach Plan 14","trophy",200,"planMax",14),Jt("dance","Dance ready","Tick off the dance-ready list","spark",60,o=>o.lists.dance),Jt("top","Top level","Tick off the top-level list","crown",80,o=>o.lists.top),Jt("goddess","Goddess list","Tick off the goddess list","crown",100,o=>o.lists.goddess),Jt("apex","Apex list","Tick off the apex list","trophy",150,o=>o.lists.apex),u("early","Early bunny","Finish a session before 8am","sun",15,"early",1),u("early10","Sunrise club","10 sessions before 8am","sun",60,"early",10),u("night","Night owl","Finish a session after 9pm","moon",15,"night",1),u("night10","Moonlight club","10 sessions after 9pm","moon",60,"night",10),Jt("comeback","Comeback","Train again after a few days off","heart",20,o=>o.comeback),Jt("goalw","Goal getter","Reach your goal weight","journey",60,o=>o.bodyGoal),u("weigh8","Check-in queen","8 weekly weigh-ins","heart",30,"weighIns",8),u("q10","Quester","Finish 10 daily quests","scroll",20,"quests",10),u("q50","Quest cutie","Finish 50 daily quests","scroll",60,"quests",50),u("q200","Quest queen","Finish 200 daily quests","crown",150,"quests",200),u("ch10","Treasure","Open 10 quest chests","box",50,"chests",10),u("gift30","Gift bunny","Unwrap 30 daily gifts","gift",60,"gifts",30),u("shop1","Dressed up","Buy Biscuit something","bag",5,"bought",1),u("col10","Fashionista","Collect 10 wardrobe items","bag",40,"owned",10),u("col25","Full closet","Collect 25 wardrobe items","crown",100,"owned",25),u("col40","Style icon","Collect 40 wardrobe items","gem",200,"owned",40),u("mystery","Surprise!","Open a mystery box","gift",10,"mystery",1),u("mystery10","Lucky bunny","Open 10 mystery boxes","gift",60,"mystery",10),u("lvl5","Level 5","Reach level 5","gem",20,"level",5),u("lvl10","Level 10","Reach level 10","gem",40,"level",10),u("lvl25","Level 25","Reach level 25","gem",100,"level",25),u("lvl40","Level 40","Reach level 40","crown",200,"level",40),u("lvl50","Level 50","Reach level 50","trophy",400,"level",50),u("pres1","Prestige","Prestige for the first time","heart",500,"prestige",1),u("pres5","Prestige V","Prestige 5 times","heart",1e3,"prestige",5),u("glow1","Glow up begins","A day with 3+ self-care ticks","spark",10,"glowDays",1),u("glow7s","Glow week","7-day self-care streak","spark",40,"glowStreak",7),u("glow30s","Glow month","30-day self-care streak","gem",120,"glowStreak",30),u("glow100","Radiant","100 self-care days","crown",200,"glowDays",100),u("moist60","Dewy","Moisturise 60 times","drop",60,"moist",60),u("floss30","Flossy","Floss 30 times","spark",40,"floss",30),u("vits60","Vitamin bunny","Take vitamins 60 times","heart",50,"vits",60),u("sleep30","Beauty sleep","In bed on time 30 nights","moon",60,"sleep",30),u("hairc30","Silky","Look after your hair 30 times","mirror",50,"haircare",30),u("am100","Morning ritual","100 morning skincare routines","sun",120,"am",100),u("glow365","A year of glow","365 self-care days","crown",500,"glowDays",365),u("glow100s","Glow century","100-day self-care streak","crown",500,"glowStreak",100),u("skin30","Skincare devotee","30 night skincare routines","moon",60,"pm",30),u("teeth60","Pearly whites","Brush your teeth 60 times","spark",40,"teeth",60),u("water30","Hydrated","Drink enough water 30 days","drop",40,"water",30),u("spf30","Sun safe","Wear SPF 30 days","sun",40,"spf",30),u("dress1","Dress debut","Wear a dress","dress",20,"dress",1),u("dress10","Dress darling","Wear a dress or skirt 10 times","dress",60,"dresses",10),u("hair10","Hair day","Do your hair 10 times","mirror",40,"hair",10),u("haircut1","Fresh cut","Get a new haircut or style","mirror",30,"haircut",1),u("makeup1","Makeup debut","Wear makeup","lipstick",20,"makeup",1),u("makeup20","Beat face","Wear makeup 20 times","lipstick",80,"makeup",20),u("out5","Out and about","Wear makeup out 5 times","lipstick",60,"makeupout",5),u("nails5","Nailed it","Do your nails 5 times","polish",40,"nails",5),u("perfume10","Signature scent","Wear perfume 10 times","perfume",50,"perfume",10),u("jewel10","Adorned","Wear jewellery 10 times","gem",50,"jewel",10),u("pamper5","Pamper night","5 pamper nights","candle",40,"pamper",5),u("photo5","Camera ready","Take 5 photos you like of yourself","heart",40,"photo",5),u("style10","New era","10 days of style ticks","bow",60,"styleDays",10),u("style50","It girl","50 days of style ticks","crown",150,"styleDays",50),u("style100","Main character","100 days of style ticks","crown",300,"styleDays",100),u("firsts8","Trying it all","Try 8 different style things","star",80,"firsts",8),u("step1","Brave little bunny","Tick your first first","heart",15,"steps",1),u("step10","Blossoming","Tick 10 firsts","bow",80,"steps",10),u("step20","In full bloom","Tick 20 firsts","roses",160,"steps",20),u("step30","Thirty firsts","Tick 30 firsts","crown",300,"steps",30),u("step45","Every first","Tick all 45 firsts","crown",600,"steps",45),u("lad_elegant","Elegance ladder","Finish the elegant ladder","gem",100,"lad_elegant",5),u("lad_strong","Strength ladder","Finish the strong & fit ladder","dumbbell",100,"lad_strong",5),u("lad_voice","Voice ladder","Finish the voice ladder","speaker",100,"lad_voice",5),u("voice10","Warming up","10 voice practices","speaker",50,"voice",10),u("voice50","Found my voice","50 voice practices","speaker",200,"voice",50),u("lad_dress","Dress ladder","Finish the dresses & skirts ladder","dress",100,"lad_dress",5),u("lad_makeup","Makeup ladder","Finish the makeup ladder","lipstick",100,"lad_makeup",5),u("lad_hair","Hair ladder","Finish the hair ladder","mirror",100,"lad_hair",5),u("lad_nails","Nails & scent ladder","Finish the nails & scent ladder","polish",100,"lad_nails",5),u("lad_goth","Dark femme ladder","Finish the dark femme ladder","roses",100,"lad_goth",5),u("lad_me","Confidence ladder","Finish the confidence ladder","heart",100,"lad_me",5),u("wins25","Feeling pretty","25 feminine wins","bow",50,"wins",25),u("wins100","Pretty often","100 feminine wins","gem",150,"wins",100),u("wins365","Living it","365 feminine wins","crown",400,"wins",365),u("dare1","Dared","Do a tiny dare","star",15,"dares",1),u("dare10","Daring","Do 10 tiny dares","star",80,"dares",10),u("dare50","Fearless","Do 50 tiny dares","crown",250,"dares",50),u("grad1","Second nature","Make one win yours (10 times)","heart",60,"graduated",1),u("grad5","New normal","Make 5 wins yours","gem",200,"graduated",5),u("grad10","Second skin","Make 10 wins yours","crown",400,"graduated",10),u("combo1","Double glow","Workout and a femme win on the same day","spark",15,"combo",1),u("combo10","Pretty strong","10 workout + win days","dumbbell",80,"combo",10),u("combo50","Iron and lace","50 workout + win days","roses",250,"combo",50),u("treat1","First nibble","Give Biscuit a treat","cake",5,"treats",1),u("treat25","Spoilt rotten","Give 25 treats","cake",40,"treats",25),u("treat100","Bakery regular","Give 100 treats","cake",100,"treats",100),u("treat500","Patisserie patron","Give 500 treats","cake",300,"treats",500),u("cake10","Sugar rush","Eat 10 carrot cakes","cake",60,"cakes",10),u("stars1","Stargazer","Finish a constellation","star",50,"constellations",1),u("stars5","Night sky","Finish 5 constellations","star",200,"constellations",5),u("stars12","Whole zodiac","Finish 12 constellations","moon",500,"constellations",12),u("month1","Month queen","Finish a femme monthly theme","cal",60,"months",1),u("month6","Six themes","Finish 6 femme monthly themes","cal",200,"months",6),u("month12","Full year","Finish 12 femme monthly themes","crown",500,"months",12),u("proof1","On the record","Save a moment to your evidence file","scroll",15,"proof",1),u("proof25","Case closed","25 moments in your evidence file","scroll",120,"proof",25),u("fstreak7","Never twice","7 win days without missing twice","bow",50,"femmeStreak",7),u("fstreak30","Habit formed","30 win days without missing twice","gem",200,"femmeStreak",30),u("fstreak100","Who she is","100 win days without missing twice","crown",500,"femmeStreak",100),u("fit1","Monthly mover","Finish a fitness month challenge","dumbbell",60,"fitMonths",1),u("fit6","Half a year strong","Finish 6 fitness month challenges","dumbbell",200,"fitMonths",6),u("fit12","Twelve strong months","Finish 12 fitness month challenges","trophy",500,"fitMonths",12),u("year1","Big goal","Hit one of the year\u2019s goals","trophy",150,"yearGoals",1),u("year5","Big five","Hit 5 yearly goals","crown",400,"yearGoals",5),u("yearall","Her year","Hit every goal in one year","crown",1e3,"yearAll",1),u("r10_dress","Dress rank 10","Reach rank 10 on dress","dress",120,"rank_dress",10),u("r10_makeup","Makeup rank 10","Reach rank 10 on makeup","lipstick",120,"rank_makeup",10),u("r10_hair","Hair rank 10","Reach rank 10 on hair","mirror",120,"rank_hair",10),u("r10_nails","Nails & scent rank 10","Reach rank 10 on nails & scent","polish",120,"rank_nails",10),u("r10_elegant","Elegant rank 10","Reach rank 10 on elegant","gem",120,"rank_elegant",10),u("r10_strong","Strong & fit rank 10","Reach rank 10 on strong & fit","dumbbell",120,"rank_strong",10),u("r10_goth","Dark femme rank 10","Reach rank 10 on dark femme","roses",120,"rank_goth",10),u("r10_voice","Voice rank 10","Reach rank 10 on voice","speaker",120,"rank_voice",10),u("r10_me","Confidence rank 10","Reach rank 10 on confidence","heart",120,"rank_me",10),u("r25_dress","Dress rank 25","Reach rank 25 on dress","dress",300,"rank_dress",25),u("r25_makeup","Makeup rank 25","Reach rank 25 on makeup","lipstick",300,"rank_makeup",25),u("r25_hair","Hair rank 25","Reach rank 25 on hair","mirror",300,"rank_hair",25),u("r25_nails","Nails & scent rank 25","Reach rank 25 on nails & scent","polish",300,"rank_nails",25),u("r25_elegant","Elegant rank 25","Reach rank 25 on elegant","gem",300,"rank_elegant",25),u("r25_strong","Strong & fit rank 25","Reach rank 25 on strong & fit","dumbbell",300,"rank_strong",25),u("r25_goth","Dark femme rank 25","Reach rank 25 on dark femme","roses",300,"rank_goth",25),u("r25_voice","Voice rank 25","Reach rank 25 on voice","speaker",300,"rank_voice",25),u("r25_me","Confidence rank 25","Reach rank 25 on confidence","heart",300,"rank_me",25),u("redlip10","Red lip regular","Wear a red or dark lip 10 times","lipstick",60,"redlip",10),u("allblack10","All black everything","Wear all black 10 times","roses",60,"allblack",10),u("silk10","Silk and satin","Wear silk, satin or velvet 10 times","gem",60,"silk",10),u("heels10","Heels on","Wear heels or boots that feel powerful 10 times","shoe",60,"heels",10),u("ranks10","Becoming","10 ladder ranks in total","spark",60,"ranks",10),u("ranks50","Many sides","50 ladder ranks in total","gem",250,"ranks",50),u("ranks150","All of her","150 ladder ranks in total","crown",600,"ranks",150),u("spent10k","Big spender","Spend 10,000 carrots","carrot",200,"spent",1e4)].map(o=>({...o,reward:Io.find(e=>e.badge===o.id)?.id||null})),g=(o,e,t,a,s,n="common")=>({id:o,name:e,how:t,stat:a,target:s,rarity:n}),de=[g("fluffball","Fluffball","Level 1","level",1),g("hopper","Bunny Hopper","Level 3","level",3),g("bean","Bouncy Bean","Level 6","level",6),g("stretchy","Stretchy Bun","Level 10","level",10),g("guardian","Glute Guardian","Level 15","level",15),g("seeker","Split Seeker","Level 20","level",20),g("iron","Iron Bunny","Level 25","level",25,"rare"),g("moon","Moon Hopper","Level 30","level",30,"rare"),g("starlight","Starlight Bun","Level 40","level",40,"epic"),g("legend","Legend of the Burrow","Level 50","level",50,"epic"),g("gym","Gym Bunny","Finish 25 sessions","sessions",25),g("hundred","Hundred-Hop Honey","Finish 100 sessions","sessions",100,"rare"),g("strongbun","Strong Little Bun","Set a personal best","prs",1),g("muscle","Muscle Bunny","10 personal bests","prs",10),g("powerpuff","Powerpuff Bun","25 personal bests","prs",25,"rare"),g("peachy","Peachy Bun","20 glute days","glute",20),g("cardio","Cardio Bunny","Log 10 cardio sessions","cardio",10),g("hearty","Heart-Healthy Honey","1,000 minutes of cardio","cardioMin",1e3,"rare"),g("marathon","Marathon Bunny","42 km of cardio","cardioKm",42,"rare"),g("rower","Row Row Bunny","20 rowing logs","row",20),g("spin","Spin Queen","20 spin bike logs","bike",20),g("stroll","Stroll Sweetie","10 walks","walk",10),g("jelly","Jogging Jellybean","10 jogs","jog",10),g("speedy","Speedy Bun","5 runs","run",5),g("neverskip","Never-Skip Bunny","14-day streak","bestStreak",14),g("unstoppable","Unstoppable Bun","30-day streak","bestStreak",30,"rare"),g("forever","Forever Bunny","100-day streak","bestStreak",100,"epic"),g("consistent","Consistency Queen","Weekly goal 4 weeks running","weekStreak",4),g("habit","Habit Honey","Weekly goal 12 weeks running","weekStreak",12,"rare"),g("perfect","Perfect Week Princess","A perfect week","fullWeeks",1),g("earlybird","Early Bird Bunny","10 sessions before 8am","early",10),g("midnight","Midnight Bunny","10 sessions after 9pm","night",10),g("comeback","Comeback Cutie","Come back after a break","comeback",1),g("flexi","Flexi Fluff","Save 4 reviews","reviews",4),g("holdqueen","Hold Queen","Finish 200 hold timers","timers",200),g("floor","Floor Fairy","Reach Plan 7","planMax",7),g("splits","Splits Princess","Reach Plan 6","planMax",6),g("dancequeen","Dance Queen","Tick off the dance-ready list","danceList",1),g("topbun","Top Bunny","Tick off the top-level list","topList",1),g("goddess","Goddess Bunny","Tick off the goddess list","goddessList",1,"rare"),g("apex","Apex Bunny","Tick off the apex list","apexList",1,"epic"),g("glowup","Glow-Up Girl","Reach your goal weight","bodyGoal",1),g("weighin","Weigh-in Sweetie","8 weekly weigh-ins","weighIns",8),g("questcutie","Quest Cutie","Finish 30 daily quests","quests",30),g("treasure","Treasure Bunny","Open 10 quest chests","chests",10),g("fashion","Fashion Bunny","Collect 10 wardrobe items","owned",10),g("closet","Closet Queen","Collect 25 wardrobe items","owned",25,"rare"),g("lucky","Lucky Bunny","Open 5 mystery boxes","mystery",5),g("cottontail","Cottontail Champion","Earn 50 badges","badges",50,"epic"),g("glowgetter","Glow Getter","7 self-care days","glowDays",7),g("wellrested","Well Rested","In bed on time 30 nights","sleep",30),g("dewy","Dewy Bunny","Moisturise 60 times","moist",60,"rare"),g("ritual","Ritual Keeper","60-day self-care streak","glowStreak",60,"epic"),g("saint","Self-Care Saint","365 self-care days","glowDays",365,"legendary"),g("devotee","Skincare Devotee","30 night routines","pm",30),g("softgoth","Soft Goth","10 days of style ticks","styleDays",10),g("velvet","Velvet Bunny","Wear a dress or skirt 10 times","dresses",10),g("lipstickbun","Lipstick Bunny","Wear makeup 10 times","makeup",10),g("romantic","Dark Romantic","Wear makeup out 10 times","makeupout",10,"rare"),g("hairday","Hair Day Bunny","Do your hair 20 times","hair",20),g("curious","Curious Bunny","Try 8 different style things","firsts",8),g("muse","Moonlit Muse","30-day self-care streak","glowStreak",30,"rare"),g("itgirl","It Girl","50 days of style ticks","styleDays",50,"epic"),g("maincharacter","Main Character","100 days of style ticks","styleDays",100,"epic"),g("radiant","Radiant Goddess","200 self-care days","glowDays",200,"legendary"),g("eternalglow","Eternal Glow","100-day self-care streak","glowStreak",100,"legendary"),g("sundress","Sundress Bunny","Finish the dresses & skirts ladder","lad_dress",5,"rare"),g("rouge","Rouge Rabbit","Finish the makeup ladder","lad_makeup",5,"rare"),g("ribbon","Silk Ribbon Bunny","Finish the hair ladder","lad_hair",5,"rare"),g("velvetpaws","Velvet Paws","Finish the nails & scent ladder","lad_nails",5,"rare"),g("gothbelle","Gothic Belle","Finish the dark femme ladder","lad_goth",5,"rare"),g("unapologetic","Unapologetic","Finish the confidence ladder","lad_me",5,"epic"),g("blossoming","Blossoming Bunny","Tick 10 firsts","steps",10),g("femmefatale","Femme Fatale","Tick 20 firsts","steps",20,"epic"),g("bloomed","Fully Bloomed","Tick all 45 firsts","steps",45,"legendary"),g("classic","Classic Beauty","Finish the elegant ladder","lad_elegant",5,"rare"),g("powerhouse","Powerhouse","Finish the strong & fit ladder","lad_strong",5,"epic"),g("allofit","Soft, Dark & Strong","Finish the dark femme, elegant and strong ladders","triad",1,"legendary"),g("velvetvoice","Velvet Voice","Finish the voice ladder","lad_voice",5,"rare"),g("honeyed","Honeyed Voice","50 voice practices","voice",50,"epic"),g("effortless","Effortlessly Pretty","100 feminine wins","wins",100,"epic"),g("divine","Divine Feminine","365 feminine wins","wins",365,"legendary"),g("daring","Daring Bunny","Do 10 tiny dares","dares",10,"rare"),g("fearless","Fearless","Do 50 tiny dares","dares",50,"epic"),g("secondnature","Second Nature","Make 5 wins yours","graduated",5,"rare"),g("secondskin","Second Skin","Make 10 wins yours","graduated",10,"legendary"),g("prettystrong","Pretty Strong","10 workout + win days","combo",10,"rare"),g("ironlace","Iron & Lace","50 workout + win days","combo",50,"epic"),g("venus","Venus Rising","150 workout + win days","combo",150,"legendary"),g("stargazer","Stargazer","Finish a constellation","constellations",1),g("starkeeper","Star Keeper","Finish 5 constellations","constellations",5,"epic"),g("nightsky","Keeper of the Night Sky","Finish 12 constellations","constellations",12,"legendary"),g("proofpositive","Proof Positive","25 moments in your evidence file","proof",25,"rare"),g("nevertwice","Never Twice","30 win days without missing twice","femmeStreak",30,"epic"),g("thisisher","This Is Her Now","100 win days without missing twice","femmeStreak",100,"legendary"),g("monthlymover","Monthly Mover","Finish 3 fitness month challenges","fitMonths",3),g("ironyear","Iron Year","Finish 12 fitness month challenges","fitMonths",12,"legendary"),g("goalgetter","Goal Getter","Hit a yearly goal","yearGoals",1,"rare"),g("womanofyear","Woman of the Year","Hit every goal in one year","yearAll",1,"legendary"),g("decade","Timeless","Hit every goal in three different years","yearAll",3,"legendary"),g("seasonqueen","Season Queen","Finish 6 monthly themes","months",6,"epic"),g("yearofher","Year of Her","Finish 12 monthly themes","months",12,"legendary"),g("becoming","Becoming","10 ladder ranks in total","ranks",10),g("manyfaceted","Many-Faceted","50 ladder ranks in total","ranks",50,"epic"),g("renaissance","Renaissance Bunny","150 ladder ranks in total","ranks",150,"legendary"),g("iconic","Simply Iconic","Reach rank 20 on any ladder","topRank",20,"epic"),g("vampire","Vampire Bunny","Rank 5 on dark femme","rank_goth",5,"rare"),g("nightqueen","Queen of the Night","Rank 10 on dark femme","rank_goth",10,"epic"),g("darkqueen","Dark Queen","Rank 20 on dark femme","rank_goth",20,"legendary"),g("velvetmenace","Velvet Menace","Wear all black 25 times","allblack",25,"epic"),g("siren","Classic Siren","Wear a red or dark lip 25 times","redlip",25,"epic"),g("silksmoke","Silk & Smoke","Wear silk, satin or velvet 15 times","silk",15,"rare"),g("lady","Lady of the Manor","Rank 10 on elegant","rank_elegant",10,"epic"),g("grace","Effortless Grace","Rank 20 on elegant","rank_elegant",20,"legendary"),g("wardrobewitch","Wardrobe Witch","Rank 10 on dresses & skirts","rank_dress",10,"epic"),g("paintedlady","Painted Lady","Rank 10 on makeup","rank_makeup",10,"epic"),g("crowning","Crowning Glory","Rank 10 on hair","rank_hair",10,"epic"),g("perfumed","Perfumed Bunny","Rank 10 on nails & scent","rank_nails",10,"rare"),g("gymsiren","Gym Siren","Rank 10 on strong & fit","rank_strong",10,"epic"),g("ironvenus","Iron Venus","Rank 20 on strong & fit","rank_strong",20,"legendary"),g("sweettalker","Sweet Talker","Rank 10 on voice","rank_voice",10,"epic"),g("magnetic","Magnetic","Rank 10 on confidence","rank_me",10,"epic"),g("spoilt","Spoilt Bunny","Give Biscuit 25 treats","treats",25),g("sweettooth","Sweet Tooth","Eat 10 carrot cakes","cakes",10,"rare"),g("tycoon","Carrot Tycoon","Spend 25,000 carrots","spent",25e3,"epic"),g("baroness","Carrot Baroness","Spend 100,000 carrots","spent",1e5,"legendary"),g("queen","Queen of the Burrow","Finish the apex list","apexList",1,"legendary"),g("unbreakable","Unbreakable","365-day streak","bestStreak",365,"legendary"),g("thousand","Thousand-Hop Goddess","Finish 1,000 sessions","sessions",1e3,"legendary"),g("marathonqueen","Marathon Queen","250 km of cardio","cardioKm",250,"legendary"),g("yearofyes","The Bunny Who Never Quit","Weekly goal 52 weeks running","weekStreak",52,"legendary"),g("royalty","Wardrobe Royalty","Own every buyable and earnable item","owned",0,"legendary"),g("empress","Badge Empress","Earn every other badge","badges",0,"legendary"),g("reborn","Reborn Bunny","Prestige once","prestige",1,"epic"),g("mythic","Mythic Cottontail","Prestige 3 times","prestige",3,"legendary"),g("celestial","Celestial Bunny","Prestige 5 times","prestige",5,"legendary"),g("moongoddess","Moonlit Goddess","Prestige 10 times","prestige",10,"legendary"),g("bunnyempress","Bunny Empress","Prestige 25 times","prestige",25,"legendary"),g("blossom","Eternal Blossom","Prestige 100 times","prestige",100,"legendary"),g("starborn","Starborn Queen","Prestige 444 times","prestige",444,"legendary"),g("burrowgoddess","Goddess of the Burrow","Prestige 1,000 times","prestige",1e3,"legendary"),g("infinite","Infinite Bunny","Reach prestige 4,444","prestige",4444,"legendary")];de.find(o=>o.id==="royalty").target=Io.filter(o=>o.price!==0&&!o.mystery).length,de.find(o=>o.id==="empress").target=$o.length;const Or=["You showed up. That\u2019s the hard part.","Glutes: activated.","I believe in you and your hamstrings.","Slow reps, big gains.","Water break? Water break ( \u02D9\u25BF\u02D9 )","Proud of you, honestly (\u02F6\u1D54 \u1D55 \u1D54\u02F6)","Tiny steps still count as steps.","Your future self says thanks.","Stretch now, splits later.","Carrots for the strong ( \u25D5\u1D17\u25D5)\u3063\u{1F955}"],dF="Biscuit";function Xr(){return{xp:0,carrots:0,bunny:dF,fur:"snow",outfit:"bow",face:"none",neck:"none",room:"pink",title:null,titles:{},decor:{},prestige:0,lifetimeXp:0,owned:["fur:snow","fit:bow","fit:none","face:none","neck:none","room:pink"],badges:{},quests:null,weekly:{},gifts:{},bows:[],awarded:{},stats:{timers:0,bought:0,mystery:0,quests:0,chests:0,gifts:0,treats:0,cakes:0,spent:0},cakes:0,fed:null,stars:0,welcome:null,back:"none",held:"none",aura:"none",pet:"none",amb:"none",dyes:{},sets:{},bond:{pts:0,pose:"bob",day:null,pats:0},garden:{plots:[null,null,null,null],seeds:{},harvests:0,golden:0},stickers:{have:{},glitter:0,packs:0,opened:0,pages:{}},journal:{pages:{}},boutique:{week:null,ids:[],bought:0},monthly:{},recapSeen:null,lucky:{}}}function Yr(){let o=0;for(const e of Object.values(i.weights)){let t=null;for(const a of e){if(!qo(a))continue;const s=+a.w;t!=null&&s>t&&o++,t=t==null?s:Math.max(t,s)}}return o}function pF(o){const e=Object.values(i.sessions).filter(l=>l.done),t=Object.values(i.weights).flat().filter(qo).length,a=Object.values(i.checks.goals||{}).flat().filter(Boolean).length,s=["dance","top","goddess","apex"].reduce((l,F)=>l+(i.checks[F]||[]).filter(Boolean).length,0),n=Yr(),r=e.length*140+t*5+n*40+i.rows.length*20+i.tests.length*60+a*50+s*25;o.xp=r,o.carrots=Math.min(150,e.length*4+n*2),Object.keys(i.sessions).forEach(l=>{i.sessions[l].done&&(o.awarded[`${l}:session`]=!0)}),Object.entries(i.checks.goals||{}).forEach(([l,F])=>F.forEach((c,p)=>{c&&(o.awarded[`goal:${l}:${p}`]=!0)})),r>0&&(o.welcome={xp:r,carrots:o.carrots,sessions:e.length})}function Ue(){i.game||(i.game=Xr(),pF(i.game),y());const o=i.game,e=Xr();for(const a of Object.keys(e))o[a]??(o[a]=e[a]);o.stats={...e.stats,...o.stats};for(const a of["face:none","neck:none","room:pink"])o.owned.includes(a)||o.owned.push(a);o.owned.includes("fit:shades")&&(o.owned=o.owned.filter(a=>a!=="fit:shades"),o.owned.includes("face:shades")||o.owned.push("face:shades"));const t=new Date(Date.now()-60*864e5).toISOString().slice(0,10);for(const a of Object.keys(o.awarded)){const s=a.match(/^(glow|glowday|xcardio):(\d{4}-\d{2}-\d{2})/);s&&s[2]<t&&delete o.awarded[a]}return o.outfit==="shades"&&(o.outfit="none",o.face="shades"),o}const L=()=>i.game||Ue(),pe=()=>He(L().xp),Hr=new Set,uF=o=>Hr.add(o),Be=o=>Hr.forEach(e=>e(o));function x(o,e=0,t="",{quiet:a=!1,origin:s}={}){var n;const r=L(),l=He(r.xp).level;e>0&&Ks()&&(e*=2),r.xp+=o,r.carrots+=e,ya({xp:o,carrots:Math.max(0,e)});const F=He(r.xp).level;if(t&&i.active&&((n=i.active).tally||(n.tally=[])).push({reason:t,xp:o,carrots:e}),y(),a||Be({type:"gain",xp:o,carrots:e,reason:t,origin:s}),F>l){let c=25*(F-l);const p=[];for(let b=l+1;b<=F;b++){c+=cF(b);const I=qt[b];I&&!r.owned.includes(I)&&(r.owned.push(I),p.push(io(I)))}r.carrots+=c,y(),Be({type:"level",level:F,bonus:c,unlocked:p})}Wr(),Be({type:"changed"})}const Xt=Array.from({length:Dt},(o,e)=>ht(e+1)).reduce((o,e)=>o+e,0);function Wr(){const o=L();for(;o.xp>=Xt&&o.prestige<Ws;)o.prestige++,o.lifetimeXp+=Xt,o.xp-=Xt,o.carrots+=zr,y(),Be({type:"prestige",count:o.prestige});o.prestige>=Ws&&o.xp>Xt-1&&(o.xp=Xt-1)}function GF(){const o=L();return!He(o.xp).max||o.prestige>=Ws?!1:(o.prestige++,o.lifetimeXp+=o.xp,o.xp=0,o.carrots+=zr,y(),Be({type:"prestige",count:o.prestige}),Be({type:"changed"}),!0)}const mF=()=>L().lifetimeXp+L().xp;function Ho(o){const e=L();return e.carrots<o?!1:(e.carrots-=o,e.stats.spent+=o,y(),Be({type:"changed"}),!0)}function Yt(o){Be(o)}function po(o){const e=L();return e.awarded[o]?!1:(e.awarded[o]=!0,!0)}function Ba(){const o=new Date().getHours();if(i.sessions[A()]?.done)return"happy";if(o>=22||o<6)return"sleepy";if(L().fed===A())return"love";const e=To();return e.length&&tF(e[e.length-1])>=3?"sad":"idle"}function zo({mood:o,size:e=96,cls:t=""}={}){const a=L();return ce({mood:o||Ba(),fur:a.fur,outfit:a.outfit,face:a.face,neck:a.neck,back:a.back,size:e,cls:t,dyes:a.dyes})}const co=()=>L().bunny||"Biscuit";function hF(){const o=L(),e=o.title&&o.titles[o.title]&&de.find(t=>t.id===o.title);return e?e.name:Sr(pe().level)}function Vr(){const o=L();return`<span class="player-title r-${(o.title&&o.titles[o.title]&&de.find(e=>e.id===o.title))?.rarity||"common"}">${d(hF())}</span>`}function _r(o=""){const e=pe(),t=L().prestige;return`<span class="lv ${o}"><small>${e.max?"MAX":"LV"}</small>${e.level}</span>${t?`<span class="pheart ${o}" title="Prestige ${t}">${Gt("heart",{size:o?52:42})}<b>${t}</b></span>`:""}`}function Ca(o=L().room,e){const t={...L().decor[o]||{},...e||{}};return Object.entries(t).filter(([,a])=>a&&We[a]).map(([a,s])=>We[s].css?`<span class="dec dec-${a} css-${s}"></span>`:`<span class="dec dec-${a}">${Gt(s,{size:a==="wall"?60:76,palette:Gs(L().dyes?.["decor:"+s])||void 0})}</span>`).join("")}const IF=30,gF=5,Us=[{id:"perfect",icon:"star",target:1,text:()=>"Tick every move in one step",when:o=>o.hasStrength||o.hasStretch},{id:"lift",icon:"dumbbell",target:3,text:o=>{const e=o?.t?.lift??3;return`Log a weight on ${e} ${e===1?"move":"moves"}`},when:o=>o.boxes>0},{id:"beat",icon:"trophy",target:1,text:()=>"Beat a number from last time",when:o=>o.beatable>0},{id:"timer",icon:"timer",target:3,text:o=>`Finish ${o?.t?.timer??3} hold timers`,when:o=>o.timed>0&&i.timers},{id:"cardio",icon:()=>Go().bw?"heart":we()?"bike":"row",target:1,text:()=>Go().bw?"Log some bonus cardio":`Log your ${Z2()}`,when:o=>o.hasCardio||o.bw},{id:"stretch",icon:"lotus",target:1,text:()=>"Finish the stretch step",when:o=>o.hasStretch},{id:"review",icon:"clip",target:1,text:()=>"Fill in your review",when:o=>o.hasTest},{id:"early",icon:"sun",target:1,text:()=>"Start before 10am",when:o=>o.hour<9},{id:"pet",icon:"heart",target:1,text:()=>`Give ${co()} a pat`,when:()=>!0}],Zs=[{id:"glow",icon:"spark",target:3,text:()=>"Tick 3 self-care things"},{id:"femme",icon:"bow",target:1,text:()=>"Tick a femme win in Glow"},{id:"dare",icon:"star",target:1,text:()=>"Do today\u2019s tiny dare"}],bF={id:"finish",icon:"play",target:1,text:()=>"Finish today\u2019s session"},JF=o=>o==="finish"?bF:Us.find(e=>e.id===o)||Zs.find(e=>e.id===o);function on(o){let e=0;for(const t of o)e=e*31+t.charCodeAt(0)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/2**32)}function wF(){const o=i.active&&i.active.date===A()?i.active:null;if(o)return{plan:Go(o.plan),day:Je(o)};const e=Go();return{plan:e,day:e.days[re(new Date)]}}function fF(o,e){return!o||!e||o.bw||ie()?[]:e.sections.filter(t=>t.kind==="strength"&&!t.bw).flatMap(t=>t.items).filter(t=>t&&typeof t=="object"&&Ea(t)&&!ut(t))}function en(){const{plan:o,day:e}=wF(),t=e.sections.map(n=>n.kind),a=fF(o,e),s=e.sections.filter(n=>n.kind==="stretch").flatMap(n=>n.items).filter(n=>n&&typeof n=="object"&&As(n.hold)>0&&!ut(n)).length;return{hasStrength:t.includes("strength"),hasStretch:t.includes("stretch"),hasCardio:t.includes("row"),hasTest:t.includes("test"),boxes:a.length,beatable:a.filter(n=>qo(Ds(n.name,A()))).length,timed:s,loaded:a.length>0,hour:new Date().getHours(),bw:!!o.bw}}function Ur(o){return{lift:Math.min(3,o.boxes),timer:Math.min(3,o.timed)}}function Zr(o,e,t=[]){const a=on(e+i.plan);return Us.filter(s=>s.when(o)&&!t.includes(s.id)).map(s=>s.id).sort(()=>a()-.5)[0]||"pet"}function Ht(){const o=L(),e=A();if(o.quests?.date!==e)return;const t=en(),a=o.quests,s=a.ids[1],n=Us.find(l=>l.id===s);a.t=a.t||{};const r=Ur(t);if(n&&!n.when(t)&&!(a.progress[s]>=(a.t[s]??n.target))){const l=Zr(t,e+"swap",[s]);a.ids[1]=l,delete a.progress[s]}for(const l of["lift","timer"])r[l]>0&&(a.t[l]=Math.max(Math.min(a.progress[l]||0,3),r[l]));y()}function Na(){const o=L(),e=A();if(o.quests?.date!==e){const t=en(),a=on(e+i.plan+"g"),s=Zs[Math.floor(a()*Zs.length)].id;o.quests={date:e,ids:["finish",Zr(t,e),s],progress:{},chest:!1,t:Ur(t)},y()}return o.quests.ids.map(t=>{const a=JF(t),s=o.quests.progress[t]||0,n=o.quests.t?.[t]||a.target;return{id:t,text:a.text(o.quests),icon:typeof a.icon=="function"?a.icon():a.icon,target:n,n:Math.min(s,n),done:s>=n}})}function oi(){const o=L(),e=Lo(new Date),t=O(e);let a=0;for(let n=0;n<7;n++){const r=new Date(e);r.setDate(r.getDate()+n),i.sessions[O(r)]?.done&&a++}const s=Ye()?4:5;return{key:t,n:Math.min(a,s),target:s,done:a>=s,claimed:!!o.weekly[t]}}function No(o,e=1){const t=L(),a=Na().find(s=>s.id===o);if(a&&!a.done&&(t.quests.progress[o]=(t.quests.progress[o]||0)+e,y(),t.quests.progress[o]>=a.target&&(t.stats.quests++,ya({quests:1}),x(IF,gF,`Quest: ${a.text}`,{quiet:!0}),Yt({type:"quest",quest:a}))),Na().every(s=>s.done)&&!t.quests.chest&&(t.quests.chest="ready",y(),Yt({type:"chestReady"})),o==="finish"){const s=oi();if(s.done&&!s.claimed){t.weekly[s.key]=!0,y();const n=xs().cur;x(150,30+10*Math.min(5,Math.max(0,n-1)),n>1?`Weekly goal \xB7 ${n} weeks in a row`:"Weekly goal",{quiet:!0}),lt(1,"Weekly goal"),Yt({type:"weekly"})}}}const tn=()=>L().quests?.chest==="ready"&&L().quests.date===A();function yF(){const o=L();if(!tn())return null;o.quests.chest="opened",o.stats.chests++;const e=15+Math.floor(Math.random()*16),t=Math.random()<.35;return y(),x(50,e,"Quest chest"),t&&lt(1,"Quest chest"),{xp:50,carrots:e,pack:t}}const an=o=>Number.isFinite(o)&&o>20&&o<700;function KF(o){const e=parseFloat(o);return an(e)?(i.body.goal=e,y(),!0):!1}function LF(o){const e=parseFloat(o);if(!an(e))return!1;const t=A();return i.body.log=i.body.log.filter(a=>a.d!==t),i.body.log.push({d:t,w:e}),i.body.log.sort((a,s)=>a.d<s.d?-1:1),y(),po(`body:${O(Lo(new Date))}`)&&x(20,2,"Weekly weigh-in"),sn()&&po("body:goal")&&x(200,30,"Goal weight reached!"),ql(),!0}function vF(){i.body.log.pop(),y()}function ei(){const{goal:o,log:e}=i.body;if(!e.length)return{has:!1,hasGoal:o!=null};const t=e[0].w,a=e[e.length-1].w,s=e.length>1?e[e.length-2].w:null;let n=null;o!=null&&(n=t===o?1:Math.max(0,Math.min(1,(t-a)/(t-o))));const r=o==null?!0:o<=t;let l="start";if(s!=null){const F=a-s;Math.abs(F)<.05?l="steady":l=F<0===r?"good":"bump"}return{has:!0,hasGoal:o!=null,fraction:n,mood:l,entries:e.length}}function sn(){const o=ei();return o.has&&o.hasGoal&&o.entries>1&&o.fraction>=1}const ue={row:{name:"Rowing",short:"Row",icon:"row",colour:"#B9A3E3",badge:"lil"},bike:{name:"Spin bike",short:"Bike",icon:"bike",colour:"#F2A7BB",badge:""},walk:{name:"Walking",short:"Walk",icon:"journey",colour:"#A9CF96",badge:"sag"},jog:{name:"Jogging",short:"Jog",icon:"drop",colour:"#F2CB8B",badge:"but"},run:{name:"Running",short:"Run",icon:"shoe",colour:"#D9587F",badge:""}},Wt=o=>ue[o.machine]?o.machine:o.machine?"walk":"row";function kF(o,e){const t=o>0?o/2:e*4;return Math.max(5,Math.min(40,Math.round(t)))}function $F({machine:o,date:e,min:t,km:a,intervals:s,note:n}){const r=parseFloat(t),l=parseFloat(a);if(!(r>0)&&!(l>0))return null;const F={date:e||A(),plan:i.plan,type:s?"intervals":"steady",machine:o,extra:!0};r>0&&(F.min=String(r)),l>0&&(F.km=String(l),F.meters=String(Math.round(l*1e3))),n?.trim()&&(F.note=n.trim()),i.rows.push(F),i.rows.sort((b,I)=>b.date<I.date?-1:1),y();const c=kF(r||0,l||0),p=po(`xcardio:${F.date}`);return x(c+(p?10:0),p?3:1,`${ue[o].name} logged`),No("cardio"),lo(),{xp:c+(p?10:0)}}function MF(o){i.rows[o]?.extra&&(i.rows.splice(o,1),y())}function ti(){const o={};for(const t of Object.keys(ue))o[t]={n:0,min:0,km:0};for(const t of i.rows){const a=o[Wt(t)];a.n++,a.min+=+t.min||0,a.km+=(+t.meters||0)/1e3}const e=Object.values(o).reduce((t,a)=>({n:t.n+a.n,min:t.min+a.min,km:t.km+a.km}),{n:0,min:0,km:0});return{...o,all:e,extra:i.rows.filter(t=>t.extra).length}}const Da=[{id:"am",name:"Morning skincare",icon:"sun"},{id:"pm",name:"Night skincare",icon:"moon"},{id:"moist",name:"Moisturised",icon:"drop"},{id:"spf",name:"Wore SPF",icon:"sun"},{id:"teeth",name:"Brushed teeth twice",icon:"spark"},{id:"floss",name:"Flossed",icon:"spark"},{id:"water",name:"Drank enough water",icon:"bottle"},{id:"vits",name:"Took vitamins",icon:"heart"},{id:"haircare",name:"Looked after my hair",icon:"mirror"},{id:"sleep",name:"In bed on time",icon:"moon"}],Ze=[{id:"dress",name:"Wore a dress",icon:"dress"},{id:"skirt",name:"Wore a skirt",icon:"dress"},{id:"dressup",name:"Dressed up a little",icon:"bow"},{id:"statement",name:"Wore a look I love",icon:"star"},{id:"hair",name:"Did my hair",icon:"mirror"},{id:"haircut",name:"New haircut or style",icon:"mirror"},{id:"makeup",name:"Wore makeup",icon:"lipstick"},{id:"newlook",name:"Tried a new makeup look",icon:"lipstick"},{id:"makeupout",name:"Wore makeup out",icon:"lipstick"},{id:"nails",name:"Did my nails",icon:"polish"},{id:"perfume",name:"Wore perfume",icon:"perfume"},{id:"jewel",name:"Wore jewellery",icon:"gem"},{id:"pamper",name:"Pamper night",icon:"candle"},{id:"photo",name:"Took a photo I like of me",icon:"heart"},{id:"treat",name:"Bought something pretty for me",icon:"bag"},{id:"fitted",name:"Wore something fitted, not baggy",icon:"star"},{id:"dark",name:"Wore lace, velvet or something dark and pretty",icon:"roses"},{id:"compliment",name:"Took a compliment, no brushing it off",icon:"heart"},{id:"elegant",name:"Dressed elegant and put together",icon:"gem"},{id:"silk",name:"Wore silk, satin or velvet",icon:"gem"},{id:"heels",name:"Wore heels or boots that feel powerful",icon:"shoe"},{id:"redlip",name:"Wore a red or dark lip",icon:"lipstick"},{id:"allblack",name:"Wore all black and felt powerful",icon:"roses"},{id:"gymfit",name:"Wore a gym fit I feel good in",icon:"dumbbell"},{id:"posture",name:"Walked tall, shoulders back",icon:"crown"},{id:"voice",name:"Did 5 minutes of voice practice",icon:"speaker"},{id:"softvoice",name:"Used my softer voice out loud",icon:"speaker"}],Mo=[{id:"dress",name:"Dresses & skirts",icon:"dress",steps:[["dr1","Tried one on in a shop"],["dr2","Wore one at home, just because"],["dr3","Wore one out for a quick errand"],["dr4","Wore one all day"],["dr5","Wore one somewhere social"]]},{id:"makeup",name:"Makeup",icon:"lipstick",steps:[["mk1","Tried mascara or did my brows"],["mk2","Did a full look at home"],["mk3","Wore light makeup out"],["mk4","Wore a bold lip out"],["mk5","Learnt a new look from a tutorial"]]},{id:"hair",name:"Hair",icon:"mirror",steps:[["hr1","Tried a new style at home"],["hr2","Wore clips, a bow or a ribbon"],["hr3","Wore it styled out"],["hr4","Got a proper salon cut"],["hr5","Went bold: colour, fringe or curls"]]},{id:"nails",name:"Nails & scent",icon:"polish",steps:[["nl1","Painted my nails"],["nl2","Wore perfume out"],["nl3","Got a manicure"],["nl4","Found my signature scent"],["nl5","Booked a pamper treatment"]]},{id:"elegant",name:"Elegant",icon:"gem",steps:[["el1","Wore something tailored or classic"],["el2","Wore heels or smart shoes for a while"],["el3","Did a sleek, polished hairstyle"],["el4","Wore a little black dress or classic look out"],["el5","Dressed up for dinner somewhere nice"]]},{id:"strong",name:"Strong & fit",icon:"dumbbell",steps:[["st1","Wore gym clothes I feel good in"],["st2","Took a progress photo"],["st3","Wore something that shows my arms or legs"],["st4","Trained in public: gym, park or a class"],["st5","Showed off something my body can do now"]]},{id:"goth",name:"Dark femme",icon:"roses",steps:[["gt1","Tried a dark lipstick"],["gt2","Wore lace or velvet"],["gt3","Did winged liner"],["gt4","Wore a choker or statement jewellery out"],["gt5","Went out in a full dark glam look"]]},{id:"voice",name:"Voice",icon:"speaker",note:"Gentle only, never push until it strains. Hum, then talk from where the hum buzzes (lips and nose, not chest). Let sentences rise and fall more. Brightness and melody matter more than pitch. Record the same paragraph each week and compare.",steps:[["vc1","Did a warm-up: humming and lip trills"],["vc2","Recorded myself reading and listened back"],["vc3","Practised a lighter, brighter resonance"],["vc4","Used my softer voice in a shop or on a call"],["vc5","Kept it up for a whole conversation"]]},{id:"me",name:"Confidence",icon:"heart",steps:[["cf1","Took a selfie I actually like"],["cf2","Wore something fitted instead of baggy"],["cf3","Took a compliment without deflecting"],["cf4","Bought something feminine just for me"],["cf5","Sent or posted a photo of me"]]}],PF=Mo.reduce((o,e)=>o+e.steps.length,0),EF={dress:"dress",skirt:"dress",statement:"dress",makeup:"makeup",newlook:"makeup",makeupout:"makeup",hair:"hair",haircut:"hair",nails:"nails",perfume:"nails",pamper:"nails",elegant:"elegant",dressup:"elegant",jewel:"elegant",silk:"elegant",heels:"elegant",redlip:"makeup",allblack:"goth",gymfit:"strong",posture:"strong",dark:"goth",voice:"voice",softvoice:"voice",photo:"me",treat:"me",compliment:"me",fitted:"me"},ai=o=>EF[o]||C().custom.find(e=>e.id===o)?.ladder||"me",RF=o=>Ce("style").filter(e=>ai(e.id)===o);function Vt(o,e="0000",t="9999"){const a=C(),s=l=>l>=e&&l<=t;let n=0;for(const[l,F]of Object.entries(a.days))if(s(l))for(const c of Object.keys(F))(BF.has(c)||a.custom.some(p=>p.id===c&&p.group==="style"))&&ai(c)===o&&n++;const r=Mo.find(l=>l.id===o);for(const[l]of r.steps)a.firsts[l]&&s(a.firsts[l])&&(n+=3);return o==="strong"&&(n+=Object.entries(i.sessions).filter(([l,F])=>F.done&&s(l)).length),n}const nn=o=>4+2*o;function rn(o){let e=0,t=o;for(;t>=nn(e);)t-=nn(e),e++;return{rank:e,into:t,need:nn(e)}}const si=o=>rn(Vt(o)).rank,ln=["New","Curious","Trying","Regular","Natural","Polished","Signature","Iconic","Effortless","Legendary"],ni=o=>o<ln.length?ln[o]:`Legendary ${o-ln.length+2}`;function xa(){const o=C(),e=!o.ranks;o.ranks||(o.ranks={});const t=[];for(const a of Mo){const s=si(a.id),n=o.ranks[a.id]??(e?s:0);for(let r=n+1;r<=s;r++)po(`rank:${a.id}:${r}`)&&(x(20+5*Math.min(r,30),4+Math.min(r,20),`${a.name} rank ${r}`),t.push({ladder:a,rank:r}));o.ranks[a.id]=s}return y(),t}const ri=[{lid:"dress",name:"Dress month",target:12},{lid:"goth",name:"Dark femme month",target:8},{lid:"elegant",name:"Elegance month",target:10},{lid:"strong",name:"Strong month",target:16},{lid:"makeup",name:"Face month",target:10},{lid:"hair",name:"Hair month",target:10},{lid:"voice",name:"Voice month",target:12},{lid:"nails",name:"Pamper month",target:10},{lid:"me",name:"Confidence month",target:10}];function Fn(){const o=new Date,e=ri[(o.getFullYear()*12+o.getMonth())%ri.length],t=`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`,a=Vt(e.lid,`${t}-01`,`${t}-31`),s=new Date(o.getFullYear(),o.getMonth()+1,0).getDate();return{...e,key:t,n:a,done:a>=e.target,daysLeft:s-o.getDate(),ladder:Mo.find(n=>n.id===e.lid)}}function Sa(){const o=Fn();return o.done&&po(`month:${o.key}`)?(C().months=(C().months||0)+1,y(),x(200,60,`${o.name} complete`),o):null}const AF=new Set([...Da,...Ze].map(o=>o.id)),BF=new Set(Ze.map(o=>o.id));function C(){var o,e,t,a,s,n,r,l;return i.glow||(i.glow={days:{},custom:[],hidden:[]}),(o=i.glow).firsts||(o.firsts={}),(e=i.glow).dare||(e.dare=null),(t=i.glow).dares||(t.dares=0),(a=i.glow).goal||(a.goal={week:O(Lo(new Date)),target:2}),(s=i.glow).plans||(s.plans=[]),(n=i.glow).identity||(n.identity=[]),(r=i.glow).proof||(r.proof=[]),(l=i.glow).feel||(l.feel={}),i.glow}const cn={workout:"After my workout",teeth:"After I brush my teeth",dressed:"When I get dressed",out:"Before I head out",bed:"Before bed"},qa=4;function CF(o,e){const t=C();return!cn[o]||!e||t.plans.length>=qa||t.plans.some(a=>a.anchor===o&&a.win===e)?!1:(t.plans.push({anchor:o,win:e}),y(),!0)}function NF(o){C().plans.splice(o,1),y()}const ii=o=>C().plans.filter(e=>!o||e.anchor===o).map(e=>({...e,item:Ce("style").find(t=>t.id===e.win)})).filter(e=>e.item),dn={scary:"Scary",awkward:"Awkward",fine:"Fine actually",loved:"Loved it"};function DF(o,e){dn[e]&&(C().feel[o]=e,y())}function xF(){const o=Object.values(C().feel);return{rated:o.length,good:o.filter(e=>e==="fine"||e==="loved").length}}const ot=10,li=["That suits you.","Look at you (\u02F6\u1D54 \u1D55 \u1D54\u02F6)","Pretty and a little dangerous. Noted.","Very you.","Biscuit approves ( \u02D8 \xB3\u02D8)\u2661","Cute. Obviously (\uFFE3\u25BD\uFFE3)\u30CE","Soft and slightly scary. Perfect.","That\u2019s the girl \u0669(\u02CA\u15DC\u02CB*)\u0648","Gorgeous behaviour.","Another one for the evidence file.","You make that look easy.","Keep doing that \u266A(\xB4\u03B5` )"],Fi=()=>li[Math.floor(Math.random()*li.length)],wt=o=>!!C().firsts[o],ja=o=>o.steps.filter(([e])=>wt(e)).length;function ci(o){const e=C(),t=Mo.find(F=>F.steps.some(([c])=>c===o));if(!t)return null;if(e.firsts[o])return delete e.firsts[o],y(),{on:!1};e.firsts[o]=A(),y();const a=t.steps.find(([F])=>F===o)[1];po(`first:${o}`)&&x(40,8,`First: ${a}`);const s=ja(t)===t.steps.length;s&&po(`ladder:${t.id}`)&&x(150,40,`${t.name} ladder complete`),No("femme"),un();const n=Qa("step",o),r=xa(),l=Sa();return lo(),{on:!0,complete:s,ladder:t,dare:n,ranks:r,month:l}}const di=()=>Ze.concat(C().custom.filter(o=>o.group==="style")).filter(o=>Ne(o.id)>=ot);function pn(){const o=[];for(const t of Mo){const a=t.steps.find(([s])=>!wt(s));a&&o.push({kind:"step",id:a[0],text:a[1],icon:t.icon})}const e=Ce("style").filter(t=>!t.hidden&&Ne(t.id)<ot).sort((t,a)=>Ne(t.id)-Ne(a.id)).slice(0,4);for(const t of e)o.push({kind:"win",id:t.id,text:t.name,icon:t.icon});return o}function pi(o,e){let t=0;for(const a of e)t=t*31+a.charCodeAt(0)>>>0;return o[t%o.length]}function _t(){const o=C(),e=A();if(o.dare?.date!==e){const a=pn();if(!a.length)return null;const s=pi(a,e);o.dare={date:e,kind:s.kind,id:s.id,swapped:!1,done:!1},y()}const t=[...pn(),...Mo.flatMap(a=>a.steps.map(([s,n])=>({kind:"step",id:s,text:n,icon:a.icon}))),...Ce("style").map(a=>({kind:"win",id:a.id,text:a.name,icon:a.icon}))].find(a=>a.kind===o.dare.kind&&a.id===o.dare.id);return t?{...t,done:o.dare.done,swapped:o.dare.swapped}:null}function SF(){const o=C(),e=_t();if(!e||o.dare.swapped||o.dare.done)return!1;const t=pn().filter(s=>s.id!==e.id);if(!t.length)return!1;const a=pi(t,A()+"swap");return o.dare={...o.dare,kind:a.kind,id:a.id,swapped:!0},y(),!0}function ui(){const o=_t();return!o||o.done?null:o.kind==="step"?wt(o.id)?Qa("step",o.id)&&{dare:!0}:ci(o.id):Zt()[o.id]?Qa("win",o.id)&&{dare:!0}:za(o.id,"style")}function Qa(o,e){const t=C(),a=t.dare;return!a||a.date!==A()||a.done||a.kind!==o||a.id!==e?!1:(a.done=!0,t.dares++,y(),po(`dare:${a.date}`)&&x(25,5,"Tiny dare done"),No("dare"),!0)}function Gi(){const o=C(),e=O(Lo(new Date));if(o.goal.week!==e){const a=mi(o.goal.week)>=o.goal.target;o.goal={week:e,target:a?Math.min(7,o.goal.target+1):o.goal.target},y()}const t=mi(e);return t>=o.goal.target&&po(`femweek:${e}`)&&x(60,15,"Weekly win goal"),{n:t,target:o.goal.target}}function mi(o){const e=C().days;let t=0;for(let a=0;a<7;a++)t+=ye(e[O(Fo(ao(o),a))]);return t}const Ta=(o=A())=>ye(C().days[o])>0||Object.values(C().firsts).includes(o);function un(){const o=A();return i.sessions[o]?.done&&Ta(o)&&po(`combo:${o}`)?(x(30,5,"Workout + win combo"),!0):!1}const qF=()=>Object.keys(i.sessions).filter(o=>i.sessions[o].done&&Ta(o)).length;function hi(){let o=new Date;const e=n=>Ta(O(n)),t=e(o);t||(o=Fo(o,-1));let a=0;for(;;)if(e(o))a++,o=Fo(o,-1);else if(a>0&&e(Fo(o,-1)))o=Fo(o,-1);else break;const s=e(Fo(new Date,-1));return{cur:a,todayDone:t,atRisk:!t&&!s&&a>0}}const Ii=["I\u2019m a strong woman who looks after herself.","I dress for the woman I am now.","I\u2019m soft, a little dark, and I like it.","I take up space and I look good doing it."];function gi(o){C().identity=o.map(e=>String(e||"").trim().slice(0,90)).filter(Boolean).slice(0,3),y()}function Ut(){const o=C().identity;return o.length?o[new Date().getDate()%o.length]:null}function jF(o){const e=String(o||"").trim().slice(0,240);return e?(C().proof.unshift({d:A(),t:e}),y(),po(`proof:${A()}`)&&x(15,3,"Saved to your evidence file"),lo(),!0):!1}function QF(o){C().proof.splice(o,1),y()}function TF(o=12){const e=Fo(Lo(new Date),-(o-1)*7),t=[];for(let a=0;a<o*7;a++){const s=Fo(e,a),n=O(s),r=s>new Date;t.push({k:n,n:r?-1:ye(C().days[n])+Object.values(C().firsts).filter(l=>l===n).length})}return t}function Ce(o){const e=C(),t=o==="care"?Da:Ze,a=e.custom.filter(s=>s.group===o).map(s=>({...s,icon:o==="care"?"heart":"star",custom:!0}));return[...t,...a].map(s=>({...s,hidden:e.hidden.includes(s.id)}))}const Zt=()=>C().days[A()]||{},et=o=>Da.concat(C().custom.filter(e=>e.group==="care")).filter(e=>o?.[e.id]).length,ye=o=>Ze.concat(C().custom.filter(e=>e.group==="style")).filter(e=>o?.[e.id]).length;function Ne(o){return Object.values(C().days).filter(e=>e[o]).length}function za(o,e){var t;const a=C(),s=A(),n=(t=a.days)[s]||(t[s]={});if(n[o]=!n[o],n[o]||delete n[o],Object.keys(n).length||delete a.days[s],y(),!n[o])return{on:!1};const r=e==="style"&&Ne(o)===1;let l=0,F=!1,c=!1;po(`glow:${s}:${o}`)&&(l=e==="care"?3:10,r&&AF.has(o)&&(l+=40),F=e==="style"&&Math.random()<.25,x(l,e==="style"?F?11:1:0,r?"First time!":F?"Biscuit noticed":""),e==="style"&&Ne(o)===ot&&po(`grad:${o}`)&&(c=!0,x(80,20,"Part of you now"))),e==="care"&&No("glow"),e==="style"&&(No("femme"),Gi(),un());const p=Qa("win",o),b=e==="style"?xa():[],I=e==="style"?Sa():null;return et(n)>=3&&po(`glowday:${s}`)&&x(15,2,"Glow day"),lo(),{on:!0,first:r,xp:l,bonus:F,graduated:c,dare:p,group:e,ranks:b,month:I}}function zF(o,e,t){const a=String(o||"").trim().slice(0,40);return a?(C().custom.push({id:`c${Date.now().toString(36)}`,name:a,group:e,...e==="style"?{ladder:Mo.some(s=>s.id===t)?t:"me"}:{}}),y(),!0):!1}function OF(o){const e=C();e.custom=e.custom.filter(t=>t.id!==o),y()}function XF(o){const e=C();e.hidden=e.hidden.includes(o)?e.hidden.filter(t=>t!==o):[...e.hidden,o],y()}function bi(){const o=C().days,e=Object.keys(o).filter(l=>et(o[l])>=3).sort();let t=0,a=0,s=null;for(const l of e)a=s&&O(Fo(ao(s),1))===l?a+1:1,t=Math.max(t,a),s=l;let n=0,r=new Date;for(et(o[O(r)])<3&&(r=Fo(r,-1));et(o[O(r)])>=3;)n++,r=Fo(r,-1);return{cur:n,best:t,days:e.length}}function YF(){const o=C().days,e=n=>Ne(n),t=bi(),a={glowDays:t.days,glowStreak:t.best,styleDays:Object.values(o).filter(n=>ye(n)>0).length};for(const n of[...Da,...Ze])a[n.id]=e(n.id);a.dresses=Object.values(o).filter(n=>n.dress||n.skirt).length,a.firsts=Ze.filter(n=>a[n.id]>0).length,a.wins=Object.values(o).reduce((n,r)=>n+ye(r),0),a.steps=Object.keys(C().firsts).length;for(const n of Mo)a[`lad_${n.id}`]=ja(n);a.dares=C().dares,a.graduated=di().length,a.combo=qF();let s=0;for(const n of Mo){const r=si(n.id);a[`rank_${n.id}`]=r,s+=r}return a.ranks=s,a.topRank=Math.max(...Mo.map(n=>a[`rank_${n.id}`])),a.months=C().months||0,a.proof=C().proof.length,a.femmeStreak=hi().cur,a.triad=["goth","elegant","strong"].every(n=>a[`lad_${n}`]===5)?1:0,a}const Ji=o=>String(o).padStart(2,"0"),De=(o,e,t)=>o>=e&&o<=t,wi=(o,e)=>Object.entries(i.sessions).filter(([t,a])=>a.done&&De(t,o,e)).length,fi=(o,e)=>Math.round(i.rows.filter(t=>De(t.date,o,e)).reduce((t,a)=>t+(+a.min||0),0));function HF(o,e){const t=new Set(Object.entries(i.sessions).filter(([a,s])=>s.done&&De(a,o,e)).map(([a])=>a));return i.rows.forEach(a=>{De(a.date,o,e)&&t.add(a.date)}),t.size}function WF(o,e){const t={};return Object.entries(i.sessions).forEach(([a,s])=>{if(!s.done||!De(a,o,e))return;const n=O(Lo(ao(a)));t[n]=(t[n]||0)+1}),Object.values(t).filter(a=>a>=5).length}const VF=(o,e)=>Object.entries(C().days).filter(([t])=>De(t,o,e)).reduce((t,[,a])=>t+ye(a),0),_F=(o,e)=>Object.values(C().firsts).filter(t=>De(t,o,e)).length,UF=(o,e)=>Object.entries(C().days).filter(([t,a])=>De(t,o,e)&&et(a)>=3).length,yi=[{id:"show",name:"Show-up month",unit:"sessions",target:16,icon:"dumbbell",count:wi},{id:"cardio",name:"Cardio month",unit:"cardio minutes",target:300,icon:"heart",count:fi},{id:"active",name:"Active month",unit:"active days",target:20,icon:"fire",count:HF},{id:"weeks",name:"Full-week month",unit:"weeks with 5+ sessions",target:3,icon:"cal",count:WF}];function ZF(o=new Date){const e=`${o.getFullYear()}-${Ji(o.getMonth()+1)}`,t=new Date(o.getFullYear(),o.getMonth()+1,0).getDate();return{key:e,from:`${e}-01`,to:`${e}-${Ji(t)}`,daysLeft:t-o.getDate()}}function Ki(){const o=new Date,e=ZF(o),t=yi[(o.getFullYear()*12+o.getMonth())%yi.length],a=t.count(e.from,e.to);return{...t,...e,n:a,done:a>=t.target}}const oc=[{id:"sessions",name:"Sessions",target:180,icon:"dumbbell",count:wi},{id:"cardio",name:"Cardio minutes",target:3e3,icon:"heart",count:fi},{id:"wins",name:"Femme wins",target:250,icon:"bow",count:VF},{id:"firsts",name:"Firsts",target:15,icon:"star",count:_F},{id:"glow",name:"Self-care days",target:200,icon:"drop",count:UF}];function Li(){const o=new Date().getFullYear(),e=`${o}-01-01`,t=`${o}-12-31`,a=Math.round((new Date(o+1,0,1)-new Date)/864e5),s=oc.map(n=>{const r=n.count(e,t);return{...n,n:r,done:r>=n.target}});return{year:o,goals:s,daysLeft:a,all:s.every(n=>n.done)}}function ec(){const o=[],e=Ki();e.done&&po(`fitmonth:${e.key}`)&&(x(200,60,`${e.name} complete`,{quiet:!0}),o.push(e.name));const t=Sa();t&&o.push(t.name);const a=Li();return a.goals.forEach(s=>{s.done&&po(`year:${a.year}:${s.id}`)&&(x(800,250,`${a.year}: ${s.name} goal`,{quiet:!0}),o.push(`${a.year} ${s.name.toLowerCase()} goal`))}),a.all&&po(`yearall:${a.year}`)&&(x(2e3,600,`All of ${a.year}\u2019s goals`,{quiet:!0}),o.push(`every ${a.year} goal`)),o}function tc(){const o=Object.keys(L().awarded);return{fitMonths:o.filter(e=>e.startsWith("fitmonth:")).length,yearGoals:o.filter(e=>e.startsWith("year:")).length,yearAll:o.filter(e=>e.startsWith("yearall:")).length}}function tt(){const o=To(),e=o.map(c=>i.sessions[c]),t=e.filter(c=>c.at).map(c=>new Date(c.at).getHours()),a=L(),s={};o.forEach(c=>{const p=O(Lo(ao(c)));s[p]=(s[p]||0)+1});let n=!1;for(let c=1;c<o.length;c++)be(ao(o[c-1]),ao(o[c]))>=4&&(n=!0);const r=c=>{const p=z.ref[c]||[],b=i.checks[c]||[];return p.length>0&&p.every((I,m)=>b[m])},l={dance:r("dance"),top:r("top"),goddess:r("goddess"),apex:r("apex")},F=ti();return{sessions:o.length,bestStreak:Yo().best,weekStreak:xs().best,fullWeeks:Object.values(s).filter(c=>c>=7).length,prs:Yr(),glute:e.filter(c=>c.day===0&&c.plan<=6).length,reviews:i.tests.length,timers:a.stats.timers,cardio:F.all.n,cardioMin:Math.round(F.all.min),cardioKm:Math.round(F.all.km*10)/10,row:F.row.n,bike:F.bike.n,walk:F.walk.n,jog:F.jog.n,run:F.run.n,extraCardio:F.extra,planMax:Math.max(...[i.plan,...i.planLog.map(c=>c.plan)].filter(c=>c<=z.plans.length),1),early:t.filter(c=>c<8).length,night:t.filter(c=>c>=21).length,comeback:n?1:0,lists:l,danceList:l.dance?1:0,topList:l.top?1:0,goddessList:l.goddess?1:0,apexList:l.apex?1:0,bodyGoal:sn()?1:0,weighIns:i.body.log.length,quests:a.stats.quests,chests:a.stats.chests,gifts:a.stats.gifts,bought:a.stats.bought,owned:a.owned.filter(c=>io(c)&&io(c).price!==0).length,mystery:a.stats.mystery,treats:a.stats.treats,cakes:a.stats.cakes,spent:a.stats.spent,constellations:Math.floor((a.stars||0)/fe),level:L().prestige>0?50:pe().level,prestige:L().prestige,badges:Object.keys(a.badges).length,minutes:e.reduce((c,p)=>c+(p.mins||0),0),...YF(),...tc(),...sp()}}const vi=(o,e)=>o.test?!!o.test(e):(e[o.stat]||0)>=o.target;function ft(o,e=tt()){return o.test?null:[Math.min(e[o.stat]||0,o.target),o.target]}function lo({quiet:o=!1}={}){o||ec();const e=L();let t=tt();const a=$o.filter(n=>!e.badges[n.id]&&vi(n,t));a.forEach(n=>{e.badges[n.id]=A(),n.reward&&!e.owned.includes(n.reward)&&e.owned.push(n.reward)}),a.length&&(t={...t,badges:Object.keys(e.badges).length});const s=de.filter(n=>!e.titles[n.id]&&vi(n,t));if(s.forEach(n=>{e.titles[n.id]=A()}),(a.length||s.length)&&y(),f3(o),o)return a;if(a.length){const n=a.reduce((r,l)=>r+l.carrots,0);x(0,n,`${a.length===1?"Badge":"Badges"}: ${a.map(r=>r.name).join(", ")}`,{quiet:!0}),a.forEach(r=>Yt({type:"badge",badge:r}))}return s.filter(n=>n.stat!=="level"||n.target>1).forEach(n=>Yt({type:"title",title:n})),a}function Oa(o){const e=L(),t=e.owned.includes(o.id),a=o.kind==="decor"?e.decor[e.room]?.[o.slot]===o.key:e[Ae[o.kind]]===o.key,s=!t&&o.level&&pe().level<o.level,n=!t&&o.badge?$o.find(r=>r.id===o.badge):null;return{owned:t,worn:a,locked:s,badge:n,mystery:!t&&o.mystery,special:gs(o),affordable:o.price!=null&&e.carrots>=o.price}}function ac(o){const e=io(o),t=Oa(e);if(t.owned)return oa(o);if(t.locked||t.mystery||t.badge||t.special||e.price==null||!Ho(e.price))return!1;const a=L();return a.owned.push(o),a.stats.bought++,oa(o),lo(),!0}function oa(o){var e,t;const a=io(o),s=L();if(!s.owned.includes(o))return!1;if(a.kind==="decor"){const n=(e=s.decor)[t=s.room]||(e[t]={});n[a.slot]=n[a.slot]===a.key?null:a.key}else s[Ae[a.kind]]=a.key;return y(),e2(),H3(a.kind),!0}function sc(){if(!Ho(Ot))return null;const o=L();o.stats.mystery++,o.stats.bought++;const e=pe().level,t=Io.filter(s=>!o.owned.includes(s.id)&&s.price!==0&&!s.badge&&!gs(s)&&!(s.level>e)&&!["paper","washi"].includes(s.kind)).flatMap(s=>s.mystery?[s,s]:[s]);if(y(),!t.length)return x(150,0,"Mystery box"),lo(),{xp:150};const a=t[Math.floor(Math.random()*t.length)];return o.owned.push(a.id),oa(a.id),lo(),{item:a}}function nc(){return Yo().savers>=_e||!Ho(bt)?!1:(L().bows.push(A()),L().stats.bought++,y(),lo(),!0)}const Xa=()=>!!i.sessions[A()]?.done&&!L().gifts[A()];function rc(){if(!Xa())return null;L().gifts[A()]=!0,L().stats.gifts++;const o=Math.random();let e;return o<.06?e={xp:0,carrots:50,label:"Jackpot!"}:o<.3?e={xp:30+Math.floor(Math.random()*40),carrots:0,label:"Bonus XP"}:e={xp:0,carrots:8+Math.floor(Math.random()*15),label:"Carrots"},y(),x(e.xp,e.carrots,"Daily gift"),e}function ic(o=!1){if(!Ho(o?Tt:jt))return!1;const e=L();return e.stats.treats+=o?Vs:1,e.fed=A(),y(),ke(o?8:3,"treat"),lo(),!0}function lc(){const o=L();return o.cakes>=Ve||!Ho(zt)?!1:(o.cakes++,y(),!0)}function Fc(o){const e=L(),t=Math.max(1,Math.min(o,fe-e.stars%fe));if(!Ho(t*Qt))return null;const a=Math.floor(e.stars/fe);e.stars+=t,y();const s=Math.floor(e.stars/fe)>a;return s&&x(100,0,"Constellation finished"),lo(),{count:t,finished:s}}const cc=new Set(["moist60","floss30","vits60","sleep30","hairc30","am100","glow365","glow100s","glow1","glow7s","glow30s","glow100","skin30","teeth60","water30","spf30"]),dc=new Set(["redlip10","allblack10","silk10","heels10","r25_dress","r25_makeup","r25_hair","r25_nails","r25_elegant","r25_strong","r25_goth","r25_voice","r25_me","dress1","dress10","hair10","haircut1","makeup1","makeup20","out5","nails5","perfume10","jewel10","pamper5","photo5","style10","style50","style100","firsts8","proof1","proof25","fstreak7","fstreak30","fstreak100","month1","month6","ranks10","ranks50","r10_dress","r10_makeup","r10_hair","r10_nails","r10_elegant","r10_strong","r10_goth","r10_voice","r10_me","step1","step10","step20","step30","step45","lad_elegant","lad_strong","voice10","voice50","lad_voice","lad_dress","lad_makeup","lad_hair","lad_nails","lad_goth","lad_me","wins25","wins100","wins365","dare1","dare10","dare50","grad1","grad5","grad10"]),ki=(o,e,t=e+"s")=>`${o} ${o===1?e:t}`;function $i(o,e,t,a){if(a)return`<div class="glow-row editing">
      <span class="q-ic">${G(o.icon,22)}</span><span class="grow">${d(o.name)}</span>
      ${o.custom?`<button class="btn small danger" data-act="glowRemove" data-id="${o.id}">${B("x",{size:12})}Delete</button>`:`<button class="switch ${o.hidden?"":"on"}" data-act="glowHide" data-id="${o.id}" aria-label="Show ${d(o.name)}"></button>`}
    </div>`;const s=Ne(o.id),n=e==="style"&&s===0&&!o.custom,r=e==="style"&&s>=ot;return`<button class="glow-row ${t?"done":""}" data-act="glowTick" data-id="${o.id}" data-group="${e}" aria-pressed="${t}">
    <span class="chk ${t?"on":""}">${B("check",{size:16})}</span>
    <span class="q-ic">${G(o.icon,22)}</span>
    <span class="grow">${d(o.name)}${s?`<small>${ki(s,"time")}${e==="style"&&!r?` \xB7 ${ot-s} to make it yours`:""}</small>`:""}</span>
    ${n?'<span class="chip lil">first time +40</span>':r?'<span class="chip sag">yours</span>':""}
  </button>`}function pc(){const o=C().days,e=Fo(new Date,-13);let t="";for(let a=0;a<14;a++){const s=Fo(e,a),n=O(s),r=et(o[n]),l=ye(o[n]),F=r>=6?3:r>=3?2:r?1:0;t+=`<div class="gd ${n===A()?"today":""}"><i class="l${F}">${l?G("bow",14):""}</i><small>${ks[re(s)]}</small></div>`}return`<div class="glow-days">${t}</div>`}function Mi(o,e){const t=tt(),a=L(),s=$o.filter(n=>o.has(n.id)&&!a.badges[n.id]).map(n=>({b:n,p:ft(n,t)})).filter(n=>n.p).sort((n,r)=>r.p[0]/r.p[1]-n.p[0]/n.p[1]).slice(0,3);return s.length?`<div class="card almost"><h2>${e}</h2>${s.map(({b:n,p:r})=>`<button class="almost-row" data-act="badge" data-id="${n.id}">
    <span class="bdg-ic">${G(n.icon,26)}</span>
    <span class="grow"><b>${d(n.name)}</b><small>${d(n.desc)}</small><span class="mini-bar"><i style="width:${Math.round(r[0]/r[1]*100)}%"></i></span></span>
    <span class="almost-n">${r[0]}/${r[1]}</span></button>`).join("")}</div>`:""}function Pi(o=!1){const e=_t();return e?e.done?o?"":`<div class="card dare done">
      <div class="row tight">${G("heart",22)}<b>Dare done</b></div>
      <p class="small muted mt4">${d(e.text)}. A new one tomorrow \u266A</p>
    </div>`:`<div class="card dare">
    <div class="between"><span class="kick">Today\u2019s tiny dare</span>${e.kind==="step"?'<span class="chip lil">a first</span>':""}</div>
    <div class="dare-body">${G(e.icon,30)}<b>${d(e.text)}</b></div>
    <div class="row mt8">
      <button class="btn solid" data-act="dareDo">${B("check",{size:14})}Done it</button>
      ${o?'<button class="btn" data-act="goFemme">Open Glow</button>':e.swapped?"":'<button class="btn" data-act="dareSwap">Swap it</button>'}
      <span class="tiny muted grow right">+25 XP</span>
    </div>
  </div>`:""}function uc(o){const e=ja(o),t=P.ladder===o.id,a=o.steps.findIndex(([r])=>!wt(r)),s=C().feel,n=rn(Vt(o.id));return`<div class="ladder ${t?"open":""} ${e===o.steps.length?"full":""}">
    <button class="ladder-head" data-act="ladder" data-id="${o.id}" aria-expanded="${t}">
      <span class="q-ic">${G(o.icon,24)}</span>
      <span class="grow"><b>${d(o.name)}</b><span class="pips">${o.steps.map(([r])=>`<i class="${wt(r)?"on":""}"></i>`).join("")}</span></span>
      <span class="rank-chip">${e<o.steps.length?`${e}/${o.steps.length}`:`<small>RANK</small>${n.rank}`}</span>${B(t?"up":"down",{cls:"chev"})}
    </button>
    ${t?`<div class="mastery">
      <div class="between"><b>${d(ni(n.rank))}</b><span class="tiny muted">rank ${n.rank} \xB7 ${n.into}/${n.need} to ${n.rank+1}</span></div>
      ${Fe(n.into/n.need,{segments:16})}
      <p class="tiny muted mt4">Ranks never stop. Fed by: ${d(RF(o.id).map(r=>r.name).join(", ")||"firsts")}${o.id==="strong"?", every workout":""}. Firsts count triple.</p>
    </div>`:""}
    ${t&&o.note?`<p class="tiny muted ladder-note">${d(o.note)}</p>`:""}
    ${t?`<div class="ladder-steps">${o.steps.map(([r,l],F)=>{const c=wt(r);return`<button class="step-row ${c?"done":""} ${F===a?"next":""}" data-act="stepTick" data-id="${r}" aria-pressed="${c}">
        <span class="rung">${c?B("check",{size:14}):F+1}</span>
        <span class="grow">${d(l)}${c&&s[r]?`<small>felt: ${d(dn[s[r]].toLowerCase())}</small>`:F===a?"<small>next rung \xB7 +40 XP</small>":""}</span>
      </button>`}).join("")}</div>`:""}
  </div>`}function Gc(o){const e=C().identity;return!o&&!e.length?`<div class="card"><h2>Who I\u2019m becoming</h2>
      <p class="small muted mt4">Write it as if it\u2019s already true. It shows up here and after workouts. Tap one to start, then make it yours in Edit.</p>
      <div class="glow-list">${Ii.map((t,a)=>`<button class="plan-row idea" data-act="identityIdea" data-i="${a}"><span class="grow">${d(t)}</span>${B("plus",{size:14})}</button>`).join("")}</div>
    </div>`:o?`<div class="card"><h2>Who I\u2019m becoming</h2>
    <p class="small muted mt4">Up to three lines. Present tense, like it\u2019s already true.</p>
    <div class="glow-list">${[0,1,2].map(t=>`<input class="inp" data-identity="${t}" maxlength="90" value="${d(e[t]||"")}" placeholder="I am\u2026">`).join("")}</div>
    <button class="btn solid mt8" data-act="identitySave">Save</button>
  </div>`:`<div class="card"><h2>Who I\u2019m becoming</h2><div class="glow-list">${e.map(t=>`<div class="plan-row"><b class="grow">${d(t)}</b></div>`).join("")}</div></div>`}function mc(){const o=C().proof;return`<div class="card">
    <div class="between"><h2>Evidence file</h2><span class="chip">${o.length}</span></div>
    <p class="small muted mt4">A moment you felt pretty, strong or like yourself. Read them back on a bad day.</p>
    <div class="glow-add"><input class="inp" id="proofNew" maxlength="240" placeholder="Today I\u2026"><button class="btn solid" data-act="proofAdd">${B("plus",{size:14})}Save</button></div>
    ${o.slice(0,P.proofAll?200:3).map((e,t)=>`<div class="proof"><small>${d(e.d)}</small>${d(e.t)}<button class="iconbtn sm" data-act="proofRemove" data-i="${t}" aria-label="Remove">${B("x",{size:10})}</button></div>`).join("")}
    ${o.length>3?`<button class="btn small mt8" data-act="proofAll">${P.proofAll?"Show less":`Show all ${o.length}`}</button>`:""}
  </div>`}function hc(){return`<div class="heat12">${TF(12).map(o=>`<i class="${o.n<0?"future":`h${Math.min(3,o.n)}`} ${o.k===A()?"today":""}" title="${o.k}"></i>`).join("")}</div>`}function Ic(o){const e=ii(),t=Ce("style").filter(a=>!a.hidden);return`<div class="card">
    <div class="between"><h2>If-then plans</h2><span class="tiny muted">${e.length}/${qa}</span></div>
    <p class="small muted mt4">Tie a win to something you already do. The workout ones pop up when you finish a session.</p>
    ${e.length?`<div class="glow-list">${e.map((a,s)=>`<div class="plan-row">
      <span class="grow"><small>${d(cn[a.anchor])}</small><b>${d(a.item.name)}</b></span>
      <button class="iconbtn sm" data-act="planRemove" data-i="${s}" aria-label="Remove plan">${B("x",{size:12})}</button>
    </div>`).join("")}</div>`:""}
    ${e.length<qa&&(o||!e.length)?`<div class="plan-add mt8">
      <select class="inp" id="planAnchor">${Object.entries(cn).map(([a,s])=>`<option value="${a}">${d(s)}</option>`).join("")}</select>
      <select class="inp" id="planWin">${t.map(a=>`<option value="${a.id}">${d(a.name)}</option>`).join("")}</select>
      <button class="btn solid" data-act="planAdd">${B("plus",{size:14})}Add plan</button>
    </div>`:e.length<qa?'<p class="tiny muted mt8">Tap Edit to add another.</p>':""}
  </div>`}function gc(o){const e=Zt(),t=Ce("style").filter(b=>o||!b.hidden),a=Gi(),s=Mo.reduce((b,I)=>b+ja(I),0),n=xF(),r=di(),l=t.filter(b=>e[b.id]).length,F=hi(),c=Ut(),p=Fn();return`<div class="card glow-hero">
      <div class="glow-bun">${zo({mood:l?"love":"idle",size:84})}</div>
      <div class="grow">
        <div class="row tight">${G("bow",22)}<span class="big">${F.cur}</span><span class="lbl">${F.cur===1?"win day":"win days"} in a row</span></div>
        <div class="tiny muted">One quiet day is fine. Just never miss twice.</div>
        <div class="row tight mt8 baseline"><span class="lbl">This week</span><b class="wk-n">${a.n}/${a.target}</b></div>
        ${Fe(Math.min(1,a.n/a.target),{segments:14})}
      </div>
    </div>
    <p class="vote">${c?`\u201C${d(c)}\u201D`:"Every tick is a vote for who you\u2019re becoming."}</p>
    ${F.atRisk?`<div class="card nudge">${G("heart",22)}<div><b>Yesterday was quiet (\u30FB\u03C9\u30FB)</b><br><span class="small">One small win today keeps your ${F.cur}-day run going. Anything counts.</span></div></div>`:""}

    ${o?"":Pi()}

    <div class="card">
      <div class="between"><h2>Wins</h2><span class="tiny muted">tick when they happen</span></div>
      <div class="glow-list">${t.map(b=>$i(b,"style",!!e[b.id],o)).join("")}</div>
      ${o?Ei("style"):""}
    </div>

    <div class="card">
      <div class="between"><h2>Ladders</h2><span class="chip">${s}/${PF} firsts</span></div>
      <p class="small muted mt4">Five firsts each, easy at the bottom. After that every win on a ladder ranks it up, forever.${n.rated?` So far <b>${n.good} of ${n.rated}</b> firsts turned out fine or better.`:""}</p>
      <div class="ladders">${Mo.map(uc).join("")}</div>
    </div>

    <div class="card month-card">
      <div class="between"><span class="kick">${d(p.name)}</span><span class="tiny muted">${p.daysLeft} days left</span></div>
      <div class="row tight mt4">${G(p.ladder.icon,26)}<div class="grow"><b>${p.n}/${p.target}</b> <span class="small muted">${d(p.ladder.name.toLowerCase())} points this month</span>
      ${Fe(p.n/p.target,{segments:16,cls:p.done?"sage":""})}</div></div>
      <p class="tiny muted mt4">${p.done?"Done! +200 XP and 60 carrots.":"Wins and firsts on this ladder count. New theme every month."}</p>
    </div>

    ${Gc(o)}

    ${Ic(o)}

    ${mc()}

    <div class="card"><h2>Your last 12 weeks</h2>${hc()}
      <div class="legend mt8">wins<i class="h0"></i><i class="h1"></i><i class="h2"></i><i class="h3"></i></div>
    </div>

    <div class="card">
      <h2>Just you now</h2>
      ${r.length?`<p class="small muted mt4">Done ${ot}+ times. Not a dare anymore, just who you are.</p><div class="row mt8 wrap-row">${r.map(b=>`<span class="chip sag">${G(b.icon,14)} ${d(b.name)}</span>`).join("")}</div>`:`<p class="small muted mt4">Do any win ${ot} times and it moves here for good. ${d(co())} is keeping count (\uFF61\u2022\u0300\u1D17-)\u2727</p>`}
    </div>

    ${Mi(dc,"Next badges")}`}function bc(o){const e=Zt(),t=Ce("care").filter(n=>o||!n.hidden),a=t.filter(n=>e[n.id]).length,s=bi();return`<div class="card glow-hero">
      <div class="glow-bun">${zo({mood:a>=3?"love":"idle",size:84})}</div>
      <div class="grow">
        <div class="row tight">${G("spark",22)}<span class="big">${s.cur}</span><span class="lbl">day glow streak</span></div>
        <div class="tiny muted mt4">Best ${s.best} \xB7 ${ki(s.days,"glow day")} in total</div>
        <div class="tiny muted">Three self-care ticks makes a glow day.</div>
      </div>
    </div>

    <div class="card">
      <div class="between"><h2>Self-care</h2><span class="chip ${a>=3?"sag":""}">${a}/${t.filter(n=>!n.hidden).length}</span></div>
      ${Fe(Math.min(1,a/3),{segments:12,cls:"sage"})}
      <div class="glow-list">${t.map(n=>$i(n,"care",!!e[n.id],o)).join("")}</div>
      ${o?Ei("care"):""}
    </div>

    <div class="card"><h2>Last two weeks</h2>${pc()}
      <div class="legend mt8">self-care<i class="h0"></i><i class="h1"></i><i class="h2"></i><i class="h3"></i>\xB7 ${G("bow",12)} win day</div>
    </div>

    ${Mi(cc,"Next self-care badges")}`}function Jc(){const o=P.glowEdit,e=P.glowView!=="femme";Ke().innerHTML=`<div class="wrap">
    <div class="top between end">
      <div><div class="date">Soft, dark, elegant, strong</div><h1>Glow</h1></div>
      <button class="btn small" data-act="glowEdit">${o?"Done":"Edit"}</button>
    </div>
    <div class="seg full mt8">
      <button class="${e?"on":""}" data-act="glowView" data-k="care">${G("drop",18)} Self-care</button>
      <button class="${e?"":"on"}" data-act="glowView" data-k="femme">${G("bow",18)} Femme</button>
    </div>
    ${e?bc(o):gc(o)}
  </div>`}const Ei=o=>`<div class="glow-add">
  <input class="inp" id="glowNew-${o}" type="text" maxlength="40" placeholder="Add your own\u2026">
  ${o==="style"?`<select class="inp" id="glowLadder" aria-label="Ladder it feeds">${Mo.map(e=>`<option value="${e.id}" ${e.id==="me"?"selected":""}>${d(e.name)}</option>`).join("")}</select>`:""}
  <button class="btn solid" data-act="glowAdd" data-group="${o}">${B("plus",{size:14})}Add</button>
</div>`,Ri=o=>{for(const e of Mo){const t=e.steps.find(([a])=>a===o);if(t)return t[1]}return null};function wc(){const o=A(),e=o.slice(4),t=+o.slice(0,4),a=[],s=Ce("style");for(let n=1;n<=10;n++){const r=`${t-n}${e}`,l=[],F=i.sessions[r];F?.done&&l.push(`Trained: ${$a(F)}`);const c=C().days[r]||{};s.filter(p=>c[p.id]).forEach(p=>l.push(p.name)),Object.entries(C().firsts).filter(([,p])=>p===r).forEach(([p])=>l.push(`First time: ${Ri(p)}`)),C().proof.filter(p=>p.d===r).forEach(p=>l.push(`\u201C${p.t}\u201D`)),l.length&&a.push({when:n===1?"A year ago today":`${n} years ago today`,lines:l.slice(0,4)})}return a}function fc(o=new Date().getFullYear()){const e=`${o}-01-01`,t=`${o}-12-31`,a=I=>I>=e&&I<=t,s=Object.entries(i.sessions).filter(([I,m])=>m.done&&a(I)),n=i.rows.filter(I=>a(I.date)),r=Object.entries(C().days).filter(([I])=>a(I)),l={};s.forEach(([I])=>{l[I.slice(5,7)]=(l[I.slice(5,7)]||0)+1});const F=Object.entries(l).sort((I,m)=>m[1]-I[1])[0],c=Mo.map(I=>({l:I,n:Vt(I.id,e,t)})).sort((I,m)=>m.n-I.n),p=Object.entries(C().firsts).filter(([,I])=>a(I)).map(([I])=>Ri(I)),b=L();return{year:o,sessions:s.length,minutes:s.reduce((I,[,m])=>I+(m.mins||0),0),cardioMin:Math.round(n.reduce((I,m)=>I+(+m.min||0),0)),cardioKm:Math.round(n.reduce((I,m)=>I+(+m.meters||0),0)/100)/10,wins:r.reduce((I,[,m])=>I+ye(m),0),glowDays:r.filter(([,I])=>et(I)>=3).length,firsts:p,badges:$o.filter(I=>(b.badges[I.id]||"").startsWith(String(o))).length,proof:C().proof.filter(I=>a(I.d)).length,bestMonth:F?{month:new Date(o,+F[0]-1,1).toLocaleDateString(void 0,{month:"long"}),n:F[1]}:null,topLadder:c[0]?.n?c[0].l:null}}const xe=o=>Number(o).toLocaleString();function Gn(o,e,t,a,s,n){return`<div class="ch-row ${n?"done":""}">
    <span class="q-ic">${G(o,22)}</span>
    <div class="grow">
      <div class="between"><b>${d(e)}</b><span class="ch-n">${xe(Math.min(a,s))}/${xe(s)}</span></div>
      ${Fe(a/s,{segments:16,cls:n?"sage":""})}
      ${t?`<small>${d(t)}</small>`:""}
    </div>
  </div>`}function yc(){const o=Ki(),e=Fn(),t=Li(),a=s=>s===0?"last day":`${s} ${s===1?"day":"days"} left`;return`<div class="sec-t">Challenges</div>
  <div class="card challenges">
    <div class="kick">This month</div>
    ${Gn(o.icon,o.name,o.done?"Done. +200 XP, 60 carrots":`${o.unit} \xB7 ${a(o.daysLeft)}`,o.n,o.target,o.done)}
    ${Gn(e.ladder.icon,e.name,e.done?"Done. +200 XP, 60 carrots":`${e.ladder.name} points \xB7 ${a(e.daysLeft)}`,e.n,e.target,e.done)}
    <div class="kick mt12">${t.year} goals <span class="tiny muted">\xB7 ${t.daysLeft} days left</span></div>
    ${t.goals.map(s=>Gn(s.icon,s.name,s.done?"Done. +800 XP, 250 carrots":"",s.n,s.target,s.done)).join("")}
    <p class="tiny muted mt8">Hit all five in one year for a huge bonus. New goals every January.</p>
    <button class="btn wide mt8" data-act="yearSheet">${G("scroll",16)} Your ${t.year} so far</button>
  </div>`}function Kc(){const o=fc(),e=(t,a)=>`<div class="tile"><div class="v">${t}</div><div class="l">${a}</div></div>`;yo(`${ko(`Your ${o.year} so far`)}
    <div class="tiles mt12">${e(xe(o.sessions),"sessions")}${e(xe(Math.round(o.minutes/60)),"hours trained")}${e(xe(o.cardioMin),"cardio minutes")}</div>
    <div class="tiles mt8">${e(xe(o.wins),"femme wins")}${e(o.firsts.length,"firsts")}${e(xe(o.glowDays),"self-care days")}</div>
    <div class="tiles mt8">${e(o.badges,"badges earned")}${e(o.cardioKm,"km of cardio")}${e(o.proof,"proud moments")}</div>
    ${o.bestMonth?`<div class="rule mt12">Best month: <b>${d(o.bestMonth.month)}</b>, ${o.bestMonth.n} sessions.</div>`:""}
    ${o.topLadder?`<div class="rule">Your biggest glow-up: <b>${d(o.topLadder.name)}</b>.</div>`:""}
    ${o.firsts.length?`<div class="kick mt12">Firsts this year</div>${o.firsts.map(t=>`<div class="rule">${G("star",14)} ${d(t)}</div>`).join("")}`:""}
    <p class="small muted mt12 center">Look back at this next year. You\u2019ll barely recognise her.</p>`)}function Lc(){const o=wc();return o.length?`<div class="card memories">
    <div class="row tight">${G("cal",22)}<h2>On this day</h2></div>
    ${o.slice(0,2).map(e=>`<div class="kick mt8">${d(e.when)}</div>${e.lines.map(t=>`<div class="small">${d(t)}</div>`).join("")}`).join("")}
  </div>`:""}const Ai=[[[8,40],[18,28],[26,16],[36,10],[44,20],[52,30],[60,22],[68,12],[78,18],[86,30],[80,44],[64,50]],[[50,6],[40,16],[30,26],[22,38],[34,48],[50,54],[66,48],[78,38],[70,26],[60,16],[50,26],[50,40]],[[10,50],[20,40],[30,46],[40,34],[50,40],[60,28],[70,34],[80,22],[90,28],[84,10],[70,8],[56,14]]];function Bi(){const o=L(),e=Math.floor(o.stars/fe),t=o.stars%fe,a=Aa[e%Aa.length]+(e>=Aa.length?` ${Math.floor(e/Aa.length)+1}`:""),s=Ai[e%Ai.length],n=s.slice(0,t).map((F,c)=>c?`<line x1="${s[c-1][0]}" y1="${s[c-1][1]}" x2="${F[0]}" y2="${F[1]}"/>`:"").join(""),r=s.map((F,c)=>`<circle cx="${F[0]}" cy="${F[1]}" r="${c<t?2.2:1.2}" class="${c<t?"on":""}"/>`).join(""),l=fe-t;return`<div class="ctitle">Star jar</div>
    <div class="star-sky"><svg viewBox="0 0 100 60" aria-hidden="true"><g class="lines">${n}</g>${r}</svg>
      <div class="star-name">${d(a)} \xB7 ${t}/${fe}</div></div>
    <p class="tiny muted">Each star lights one point. Finish a constellation for +100 XP, then a new one appears. ${e?`<b>${e}</b> finished so far.`:""}</p>
    <div class="row mt8">
      <button class="btn ${o.carrots>=Qt?"solid":""}" data-act="stars" data-n="1">${G("star",16)} 1 star \xB7 ${Qt}</button>
      <button class="btn ${o.carrots>=l*Qt?"solid":""}" data-act="stars" data-n="${l}">Finish it \xB7 ${xe(l*Qt)}</button>
    </div>`}const Ci=()=>matchMedia("(display-mode: standalone)").matches||matchMedia("(display-mode: window-controls-overlay)").matches||navigator.standalone===!0,Ni=location.protocol==="file:",Di=/SamsungBrowser/i.test(navigator.userAgent),vc=/Android/i.test(navigator.userAgent),kc=()=>`<div class="warn">${G("alert",20)}<div><b>Installing from Samsung Internet?</b> Android warns that apps it installs are \u201Cbuilt for an older version of Android\u201D. Open this page in <b>Chrome</b> and install from there instead. Your data won\u2019t move by itself, so <b>Save backup</b> in Me first, then Restore it in the Chrome app.</div></div>`;function $c(){return Ci()?"":Di&&!i.installHide?kc():!P.installEvt||i.installHide?"":`<div class="installCard">
    <img src="icons/icon-192.png" alt="">
    <div class="t">Put Lifestyle on your home screen<small>Opens like an app, works offline</small></div>
    <button class="btn solid" data-act="install">Install</button>
    <button class="x" data-act="installHide" aria-label="Not now">${B("x")}</button>
  </div>`}async function Mc(){const o=P.installEvt;if(!o){$("Use Chrome\u2019s \u22EE menu \u2192 Install app");return}o.prompt();try{(await o.userChoice)?.outcome==="accepted"&&$("Installing\u2026 look for the bunny","bunny")}catch{}P.installEvt=null,M()}function Pc(){i.installHide=!0,y(),M(),$("You can install any time from Me")}const yt=(o,e,t)=>`<div class="li top"><span class="badge ${e}">${G(o,22)}</span><span class="t body">${t}</span></div>`;function Ec(){return Ci()?'<div class="list"><div class="li"><img class="app-thumb" src="icons/icon-192.png" alt=""><span class="t">You\u2019re using the app<small>Works offline. Your data stays on this phone, so keep saving backups.</small></span></div></div>':Ni?`<div class="list">
      ${yt("alert","but","Chrome can only install this once it\u2019s opened from a web link (https), not as a file. Put the app folder on a free host, open that link in Chrome, and the Install button appears here.")}
      ${yt("floppy","lil","Moving from the file version? <b>Save backup</b> here first, then <b>Restore</b> it in the installed app. Data doesn\u2019t carry across on its own.")}
    </div>`:`<div class="list">
    ${Di?yt("alert","but","<b>Samsung Internet:</b> install from <b>Chrome</b> instead. Samsung\u2019s installer builds the app for an old Android version, which is why you saw the \u201Colder version of Android\u201D warning."):""}
    ${P.installEvt?'<div class="li"><img class="app-thumb" src="icons/icon-192.png" alt=""><span class="t">Install Lifestyle<small>Home-screen icon, full screen, works offline</small></span><button class="btn solid" data-act="install">Install</button></div>':""}
    ${yt("phone","",`<b>Chrome on Android:</b> ${P.installEvt?"tap Install above, or ":""}tap \u22EE \u2192 <b>Add to Home screen</b> \u2192 <b>Install</b>. Long-press the icon for Start, Journey, Progress and Plans shortcuts.`)}
    ${vc?"":yt("phone","sag","<b>Chrome on a computer:</b> click the install icon at the right of the address bar, or \u22EE \u2192 <b>Cast, save and share</b> \u2192 <b>Install page as app</b>.")}
    ${yt("phone","lil","<b>iPhone:</b> open the link in Safari, then Share \u2192 <b>Add to Home Screen</b>.")}
  </div>`}function Rc(){const o=ao(i.start),e=be(o,new Date),t=Math.max(0,Math.floor(e/364)),a=Math.max(0,t+P.cycleOff),s=Fo(o,a*364),n=Yo().saved,r=A();let l="",F=-1,c=-9,p=0;for(let b=0;b<52;b++){const I=Fo(s,b*7);let m="";for(let J=0;J<7;J++){const K=Fo(I,J),v=b===0&&J===0;(K.getDate()===1||v)&&K.getMonth()!==F&&b-c>=3&&(m=K.toLocaleDateString(void 0,{month:"short"}),F=K.getMonth(),c=b)}l+=`<div class="m">${m}</div>`;for(let J=0;J<7;J++){const K=O(Fo(I,J)),v=eF(K);v>=2&&p++;let Q="c";K>r?Q+=" fut":n.has(K)?Q+=" saved":v&&(Q+=" l"+v),K===r&&(Q+=" today"),l+=`<button class="${Q}" data-act="cell" data-k="${K}" aria-label="${K}"></button>`}}return`<div class="card taped r year-card">
    <div class="between"><h2>Your year</h2>
      <div class="navbtns">
        <button data-act="cyc" data-d="-1" ${a===0?"disabled":""} aria-label="Previous year">${B("back")}</button>
        <span class="lbl">Year ${a+1}</span>
        <button data-act="cyc" data-d="1" ${P.cycleOff>=0?"disabled":""} aria-label="Next year">${B("right")}</button>
      </div>
    </div>
    <div class="hmW">
      <div class="hmD"><span></span>${ks.map((b,I)=>`<span>${I%2===0?b:""}</span>`).join("")}</div>
      <div class="hmS"><div class="hm">${l}</div></div>
    </div>
    <div class="between mt4">
      <span class="tiny muted">${p} of 364 days</span>
      <div class="legend">less<i class="h0"></i><i class="h1"></i><i class="h2"></i><i class="h3"></i>more</div>
    </div>
    <div class="years">
      <span class="badge but">${G("crown",24)}</span>
      <div class="grow">
        <div class="row tight"><span class="big">${t}</span><span class="lbl">${t===1?"year":"years"} complete</span></div>
        <div class="tiny muted">Started ${vo(i.start,{day:"numeric",month:"short",year:"numeric"})} \xB7 resets every 52 weeks</div>
      </div>
    </div>
  </div>`}function Ac(){const o=document.querySelector(".hmS"),e=document.querySelector(".hm .today");o&&e&&(o.scrollLeft=Math.max(0,e.offsetLeft-o.clientWidth/2))}const mn="<b>Easy week.</b> Already done for you: one fewer set on everything, stretch holds about 25% shorter, and no contract-relax. Just follow what the app shows.";function Bc(){const o=new Date().getHours(),e=i.name?", "+d(i.name):"";return(o<5?"Hi night owl":o<12?"Good morning":o<18?"Hey you":"Good evening")+e}function Cc(){const o=pe();return`<button class="player" data-tab="journey" aria-label="Level ${o.level}, open Journey">
    ${_r()}
    <span class="player-mid">
      ${Vr()}
      ${Fe(o.fraction,{segments:16,cls:o.max?"gold":""})}
      <span class="player-xp">${o.max?`${o.into} / ${o.need} XP to prestige ${L().prestige+1}`:`${o.into} / ${o.need} XP`}</span>
    </span>
    <span class="purse">${G("carrot",20)}<b>${L().carrots}</b></span>
  </button>`}function Nc(){const o=Na(),e=o.filter(s=>s.done).length,t=oi();let a="";return Xa()?a=`<button class="gift-btn" data-act="gift">${G("gift",28,"wiggle")}<span><b>Today\u2019s gift is here</b><small>Tap to unwrap</small></span></button>`:tn()&&(a=`<button class="gift-btn" data-act="chest">${G("box",28,"wiggle")}<span><b>Quest chest unlocked</b><small>All three done. Open it!</small></span></button>`),`<div class="card quests">
    <div class="between"><h2>Today\u2019s quests</h2><span class="chip ${e===3?"sag":""}">${e}/3</span></div>
    <div class="qlist">${o.map(s=>`<div class="q ${s.done?"done":""}">
      <span class="q-ic">${G(s.icon,22)}</span>
      <span class="q-t">${d(s.text)}${s.target>1?`<small>${s.n}/${s.target}</small>`:""}</span>
      <span class="q-r">${s.done?B("check"):"+30"}</span>
    </div>`).join("")}</div>
    ${a}
    <div class="weekly">
      <span class="lbl">This week ${t.n}/${t.target}</span>${Fe(t.n/t.target,{segments:t.target*3,cls:"lilac"})}
      <span class="tiny muted">${t.claimed?"Weekly goal done":"+150 XP"}</span>
    </div>
  </div>`}function Dc(){const o=new Date,e=re(o),t=P.homeDay??e,a=Go(),s=a.days[t],n=A(),r=i.sessions[n],l=Yo(),F=Ye(),c=4-kr()%4,p=i.active,b=new Set;for(let K=0;K<7;K++){const v=i.sessions[O(Fo(Lo(o),K))];v?.done&&v.plan===i.plan&&b.add(v.day)}let I=`<div class="wrap">
    <div class="top">
      <div class="date">${o.toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long"})}</div>
      <h1>${Bc()}</h1>
      ${Cc()}
      <div class="row mt12">
        <button class="planpill" data-act="pickPlan"><span class="n">${a.n}</span>${d(a.name)}${B("down")}</button>
        <span class="chip ${F?"lil":"ghost"}">${F?G("moon",14)+" Easy week":`Week ${vr()} \xB7 ${c===1?"easy week next":"easy week in "+c}`}</span>
      </div>
    </div>`;I+=$c(),va||(I+=uo.saveError==="full"?`<div class="warn">${G("alert",20)}<div><b>Phone storage is full:</b> your latest progress isn\u2019t saving. Free up some space, then <button class="linkbtn" data-act="export">save a file</button> to be safe.</div></div>`:`<div class="warn">${G("alert",20)}<div><b>Heads up:</b> this browser isn\u2019t letting the page save. Open it in Chrome or Safari directly (not a file preview) so your progress sticks.</div></div>`),I+=V3()+w1(),p&&p.date!==n&&!i.sessions[p.date]?.done&&(I+=Zo("but","timer",`You left ${ne[p.day]}\u2019s session unfinished on ${vo(p.date,{weekday:"short"})}.
      <div class="row mt8"><button class="btn" data-act="resume">Finish it today</button><button class="btn" data-act="dropActive">Let it go</button></div>`)),l.cur===0&&l.total>0&&!r?.done&&(I+=Zo("sag","heart","Welcome back. One session today starts a fresh streak, and everything you\u2019ve done still counts."));let m;if(p&&p.date===n&&p.day===t){const K=Pa(p).length-1;m=`<button class="cta white" data-act="resume">${B("play")} Resume \xB7 step ${Math.min(p.step+1,K)} of ${K}</button>`}else s.rest?m=`<button class="cta white" data-act="goMine">Rest day \xB7 pick a workout anyway ${B("right")}</button>`:r?.done&&r.day===t?m=`<button class="cta white" data-act="start" data-day="${t}">${B("check")} Done today \xB7 do it again</button>`:m=`<button class="cta white" data-act="start" data-day="${t}">Start session ${B("right")}</button>`;const J=r?.done&&r.day===t;I+=`<div class="heroWrap">
    <button class="hero-bunny" data-act="pet" aria-label="Pat ${d(L().bunny)}">${it({mood:Ba(),size:95})}</button>
    <div class="hero">
      <div class="lab"><span class="pip">${t===e?"Today":"Swapped in"}</span>${ne[t]}${J?'<span class="stamp">done</span>':""}</div>
      <h2>${d(So(s.title))}</h2>
      <div class="steps">${Pr(s).map((K,v)=>`<span><b>${["i","ii","iii","iv","v"][v]}</b>${d(K)}</span>`).join("")}</div>
      ${Bs(s)?`<div class="focus">Stretch focus: <b>${d(Bs(s))}</b></div>`:""}
      ${r?.done&&r.day!==t?`<div class="note-chip">You did ${ne[r.day]}\u2019s session today ${G("heart",14)}</div>`:""}
      ${m}
      <div class="week" role="group" aria-label="Pick a day">${ks.map((K,v)=>`<button class="${v===t?"on":""} ${v===e?"real":""} ${b.has(v)?"did":""}" data-act="homeDay" data-day="${v}" aria-label="${ne[v]}${b.has(v)?", done":""}">${K}</button>`).join("")}</div>
      <div class="hint note">dot is today, ring means done this week</div>
    </div>
  </div>`,F&&(I+=Zo("lil","moon",mn)),I+=Nc(),I+=bp(),I+=Pi(!0),I+=Lc(),I+=`<div class="duo">
    <div class="card taped streak-card">
      <div class="row tight">${G("fire",26,"flicker")}<span class="lbl">Streak</span></div>
      <div class="row mt8 baseline"><span class="big">${l.cur}</span><span class="lbl">${l.cur===1?"day":"days"}</span></div>
      <div class="tiny muted mt4">Best ${l.best}</div>
    </div>
    <div class="card" data-act="streakInfo" role="button" tabindex="0">
      <span class="lbl">Streak savers</span>
      <div class="bows">${[0,1,2].slice(0,Math.max(2,l.savers)).map(K=>`<span class="${K<l.savers?"":"off"}">${G("bow",30)}</span>`).join("")}</div>
      <div class="tiny muted">${l.savers?"A missed day won\u2019t break it":"Earn one every 7 days"} \xB7 <u>how?</u></div>
    </div>
  </div>`,I+=Rc()+"</div>",Ke().innerHTML=I,Ac()}function xc(){const o=pe(),e=L(),t=iF(o.level);return`<div class="burrow">
    <div class="burrow-scene room-${e.room}">
      <span class="sparkle s1"></span><span class="sparkle s2"></span><span class="sparkle s3"></span>
      <div class="burrow-floor"></div>
      ${Ca()}
      ${Is()}
      <button class="burrow-bunny" data-act="pet" aria-label="Pat ${d(co())}">${it({mood:Ba(),size:140,pet:!0})}</button>
    </div>
    <div class="burrow-info">
      <div class="bunny-name">${d(co())}</div>
      <div class="lvrow">${_r("big-lv")}<div class="grow">
        <button class="title-pick" data-act="titleSheet">${Vr()}<span class="chip">${Object.keys(e.titles).length}/${de.length} titles</span></button>
        ${Fe(o.fraction,{segments:20,cls:o.max?"gold":""})}
        <div class="tiny muted">${o.max?`${o.need-o.into} XP until you roll into prestige ${e.prestige+1}`:`${o.need-o.into} XP to level ${o.level+1}${t?` \xB7 \u201C${t[1]}\u201D at ${t[0]}`:""}`}</div>
      </div></div>
      ${o.max?`<button class="next-reward" data-act="prestigeSheet">${G("heart",18)}<span>Level 50! Fill this bar once more and you start again at level 1 with heart <b>${e.prestige+1}</b><small>+500 carrots, you keep everything</small></span></button>`:jc(o.level)}
      <div class="purse-row"><span class="purse">${G("carrot",22)}<b>${e.carrots}</b> carrots</span><span class="purse">${G("gem",20)}<b>${mF().toLocaleString()}</b> XP all time</span></div>
    </div>
    ${Xa()?`<button class="gift-btn" data-act="gift">${G("gift",28,"wiggle")}<span><b>Today\u2019s gift is here</b><small>Tap to unwrap</small></span></button>`:""}
    ${tn()?`<button class="gift-btn" data-act="chest">${G("box",28,"wiggle")}<span><b>Quest chest unlocked</b><small>Open it!</small></span></button>`:""}
  </div>`}function Sc(){const o=i.plan<=z.plans.length?i.plan:Math.max(1,...i.planLog.map(m=>m.plan).filter(m=>m<=z.plans.length)),e=new Set(i.planLog.map(m=>m.plan)),t=Math.max(o,...[...e].filter(m=>m<=z.plans.length)),a=320,s=78,n=40,r=m=>a/2+Math.sin(m*1.15)*105,l=z.plans.map((m,J)=>[r(J),n+J*s]),F=n+(z.plans.length-1)*s+50;let c=`M${l[0][0]} ${l[0][1]}`;for(let m=1;m<l.length;m++){const[J,K]=l[m-1],[v,Q]=l[m];c+=` C${J} ${K+s/2} ${v} ${Q-s/2} ${v} ${Q}`}const p=o-1;let b=`M${l[0][0]} ${l[0][1]}`;for(let m=1;m<=p;m++){const[J,K]=l[m-1],[v,Q]=l[m];b+=` C${J} ${K+s/2} ${v} ${Q-s/2} ${v} ${Q}`}const I=z.plans.map((m,J)=>{const[K,v]=l[J],Q=m.n===o?"here":m.n<o||e.has(m.n)&&m.n<=t?"past":"next",go=K>a/2;return`<button class="stop ${Q}" style="left:${K/a*100}%;top:${v}px" data-act="mapPlan" data-n="${m.n}" aria-label="Plan ${m.n}: ${d(m.name)}">
      <span class="stop-dot">${Q==="past"?G("star",22):Q==="here"?`<b>${m.n}</b>`:`<b>${m.n}</b>`}</span>
      ${Q==="here"?`<span class="stop-bunny">${zo({mood:"happy",size:46})}</span>`:""}
      <span class="stop-label ${go?"to-left":""}">${d(m.name)}${m.n===7?"<small>floor plans start</small>":""}</span>
    </button>`}).join("");return`<div class="sec-t">The road to Apex</div>
  <div class="card mapcard">
    <div class="map" style="height:${F}px">
      <svg viewBox="0 0 ${a} ${F}" preserveAspectRatio="none" aria-hidden="true">
        <path d="${c}" class="road"/>
        <path d="${b}" class="road done"/>
      </svg>
      ${I}
      <span class="flag-end" style="left:${l[13][0]/a*100}%;top:${l[13][1]+26}px">${G("trophy",28)}</span>
    </div>
    <p class="tiny muted center">Each plan is roughly 6-8 weeks. Move up from the Saturday review when it feels easy.</p>
  </div>`}const hn=([o,e])=>`<span class="mini-bar"><i style="width:${Math.round(o/e*100)}%"></i></span>`;function xi(o){const e=L(),t=$o.filter(a=>!e.badges[a.id]&&!a.test).map(a=>({b:a,p:ft(a,o)})).filter(a=>a.p[0]>0).sort((a,s)=>s.p[0]/s.p[1]-a.p[0]/a.p[1]).slice(0,3);return t.length?`<div class="card almost"><h2>Almost there</h2>${t.map(({b:a,p:s})=>`<button class="almost-row" data-act="badge" data-id="${a.id}">
      <span class="bdg-ic">${G(a.icon,26)}</span>
      <span class="grow"><b>${d(a.name)}</b><small>${d(a.desc)}</small>${hn(s)}</span>
      <span class="almost-n">${s[0]}/${s[1]}</span>
    </button>`).join("")}</div>`:""}function Lp(o){const e=L();return`<div class="sec-t">Badges <span class="chip">${$o.filter(t=>e.badges[t.id]).length}/${$o.length}</span></div>
  ${xi(o)}
  <div class="card"><div class="badges">${$o.map(t=>{const a=!!e.badges[t.id],s=!a&&ft(t,o);return`<button class="bdg ${a?"on":""}" data-act="badge" data-id="${t.id}" aria-label="${d(t.name)}${a?"":" (locked)"}">
      <span class="bdg-ic">${G(t.icon,30)}</span><span class="bdg-n">${d(t.name)}</span>
      ${s?hn(s):""}${t.reward?`<span class="bdg-gift">${G("gift",12)}</span>`:""}
    </button>`}).join("")}</div></div>`}function qc(){const o=L(),e=tt(),t=!o.title;yo(`${ko("Your titles")}
    <p class="small muted mt4">Pick the one that shows under ${d(co())}\u2019s name.</p>
    <button class="title-row ${t?"on":""}" data-act="setTitle" data-id=""><b>Match my level</b><small>Changes as you level up</small></button>
    ${de.map(a=>{const s=!!o.titles[a.id],n=!s&&ft(a,e);return`<button class="title-row r-${a.rarity} ${s?"":"locked"} ${o.title===a.id?"on":""}" data-act="setTitle" data-id="${a.id}" ${s?"":'aria-disabled="true"'}>
        <b>${s?d(a.name):`${G("lock",12)} ${d(a.name)}`}${a.rarity!=="common"?`<span class="rarity ${a.rarity}">${a.rarity}</span>`:""}</b><small>${d(a.how)}${n&&n[1]>1?` \xB7 ${n[0]}/${n[1]}`:""}</small>
      </button>`}).join("")}`,"title-sheet")}function Po(o,e=64){const t=e3(o,e);if(t!=null)return t;const a=L(),s={fur:a.fur,outfit:a.outfit,face:a.face,neck:a.neck,back:a.back,[o.kind==="room"?"none":o.kind]:o.key},n=ce({mood:"idle",fur:s.fur,outfit:s.outfit,face:s.face,neck:s.neck,back:s.back,size:o.kind==="room"?e-18:o.kind==="back"?Math.round(e*.62):e,dyes:a.dyes});return o.kind==="decor"?`<span class="room-swatch decor-swatch room-${a.room}">${Ca(a.room,{wall:null,left:null,right:null,rug:null,[o.slot]:o.key})}</span>`:o.kind==="room"?`<span class="room-swatch room-${o.key}">${n}</span>`:n}function jc(o){const e=L().owned,t=Object.keys(qt).map(Number).find(s=>s>o&&!e.includes(qt[s]));if(!t)return`<div class="next-reward">${G("carrot",18)}<span>Every 5th level from here pays <b>100 carrots</b></span></div>`;const a=io(qt[t]);return`<div class="next-reward"><span class="nr-prev">${Po(a,40)}</span><span>Level ${t} reward: <b>${d(a.name)}</b><small>free when you get there</small></span></div>`}const Qc=[["fur","Fur"],["outfit","Hats"],["face","Face"],["neck","Neck"],["room","Rooms"],["decor","Decor"],["extra","Extras"]],Si={wall:"On the wall",left:"Left corner",right:"Right corner",rug:"Floor"};function vp(){const o=L(),e=P.shopTab||"fur",t=Yo(),a=Io.filter(r=>r.price!==0),s=a.filter(r=>o.owned.includes(r.id)).length,n=e==="extra"?`<div class="shop-extra">
        <div class="li">${G("gift",34)}<span class="t">Mystery box<small>A random item you don\u2019t own yet. Some only come from here.</small></span>
          <button class="btn ${o.carrots>=Ot?"solid":""}" data-act="mystery">${G("carrot",16)} ${Ot}</button></div>
        <div class="li">${G("bow",34)}<span class="t">Streak bow<small>Covers one missed day. You hold ${t.savers} of ${_e}.</small></span>
          <button class="btn ${t.savers<_e&&o.carrots>=bt?"solid":""}" data-act="buyBow" ${t.savers>=_e?"disabled":""}>${G("carrot",16)} ${bt}</button></div>
        <div class="li">${G("cake",34)}<span class="t">Carrot cake<small>+${_s} XP on your next finished session. Shelf holds ${o.cakes} of ${Ve}.</small></span>
          <button class="btn ${o.cakes<Ve&&o.carrots>=zt?"solid":""}" data-act="cake" ${o.cakes>=Ve?"disabled":""}>${G("carrot",16)} ${zt}</button></div>
      </div>
      <div class="ctitle">Treats for ${d(co())}</div>
      <p class="tiny muted">Never runs out. ${d(co())} gets a lovely day and the treat count climbs toward badges and titles. ${o.stats.treats?`<b>${o.stats.treats}</b> given so far.`:""}</p>
      <div class="shop-extra">
        <div class="li">${G("macaron",34)}<span class="t">Macaron<small>One treat.</small></span>
          <button class="btn ${o.carrots>=jt?"solid":""}" data-act="feed">${G("carrot",16)} ${jt}</button></div>
        <div class="li">${G("gift",34)}<span class="t">Tea party box<small>${Vs} treats at once.</small></span>
          <button class="btn ${o.carrots>=Tt?"solid":""}" data-act="feed" data-k="feast">${G("carrot",16)} ${Tt}</button></div>
      </div>
      ${Bi()}
      <p class="tiny muted mt8">${o.stats.spent.toLocaleString()} carrots spent all time</p>`:e==="decor"?["wall","left","right","rug"].map(r=>`<div class="ctitle">${Si[r]}</div><div class="shop-grid">${Io.filter(l=>l.kind==="decor"&&l.slot===r).map(ea).join("")}</div>`).join(""):`<div class="shop-grid">${Io.filter(r=>r.kind===e).map(ea).join("")}</div>`;return`<div class="sec-t">${d(co())}\u2019s wardrobe <span class="chip">${s}/${a.length}</span></div>
  <div class="card">
    <div class="between"><span class="purse">${G("carrot",18)}<b>${o.carrots}</b> carrots</span><span class="tiny muted">Tap to buy or wear</span></div>
    <div class="pchips mt8 shop-tabs">${Qc.map(([r,l])=>`<button class="${e===r?"on":""}" data-act="shopTab" data-k="${r}">${l}</button>`).join("")}</div>
    ${e==="decor"?`<p class="tiny muted">Placing in <b>${d(gt[o.room])}</b>. Each room keeps its own setup. Tap something placed to take it away.</p>`:""}
    ${n}
  </div>`}function ea(o){const e=Oa(o);let t;const a=o.kind==="decor";e.worn?t=a?"Placed":"Wearing":e.owned?t=a?"Place":"Wear":e.special?t=`${G(e.special.icon,14)} ${e.special.label}`:e.mystery?t=`${G("gift",14)} Mystery`:e.badge?t=`${G("trophy",14)} Badge`:e.locked?t=`${G("lock",14)} Lv ${o.level}`:t=`${G("carrot",14)} ${o.price}`;const s=!e.owned&&Object.entries(qt).find(([,n])=>n===o.id);return`<button class="shop-item ${e.worn?"worn":""} ${e.locked||e.mystery||e.badge||e.special?"locked":""} ${e.owned&&X1(o.id)?"dyed":""} ${!e.owned&&!e.affordable?"pricey":""}" data-act="shop" data-id="${o.id}">
    <span class="shop-prev">${e.mystery?'<span class="mystery-q">?</span>':Po(o)}</span>
    <span class="shop-n">${e.mystery?"???":d(o.name)}</span><span class="shop-p">${t}</span>
    ${e.badge?`<span class="shop-free">${d(e.badge.name)}</span>`:""}
    ${s?`<span class="shop-free">free at Lv ${s[0]}</span>`:""}
  </button>`}function Tc(){const o=Yo();return`<div class="tiles mt16">
    <div class="tile"><div class="v">${To().length}</div><div class="l">sessions</div></div>
    <div class="tile"><div class="v">${o.best}</div><div class="l">best streak</div></div>
    <div class="tile"><div class="v">${xs().cur}</div><div class="l">week streak</div></div>
  </div>`}function zc(){const o=tt();Ke().innerHTML=`<div class="wrap">
    <div class="top"><div class="date">Plan ${i.plan} \xB7 ${d(Go().name)}</div><h1>Journey</h1></div>
    ${xc()}
    ${Tc()}
    <div class="g2 mt12"><button class="btn" data-act="goBunny" data-k="dress">${G("dress",18)} Dress up ${d(co())}</button><button class="btn" data-act="recaps">${G("cal",18)} Monthly recaps</button></div>
    ${yc()}
    ${Sc()}
    ${lp(o)}
    <div style="height:20px"></div>
  </div>`}const In=()=>({name:"",amount:"",hold:!1,weighted:!1,notes:""});function Oc(){const o=i.custom.workouts,e=i.plan===Ct;return`<div class="sec-t">My workouts</div>
    <div class="card">
      <p class="small muted">Build your own sessions from anything you like. Start one on any day, or put them in your own week below.</p>
      <button class="cta mt12" data-act="customNew">${B("plus")} New workout</button>
    </div>
    ${o.length?o.map(t=>`<div class="card custom-card">
      <div class="between"><h2>${d(t.name)}</h2><span class="chip ghost">${t.moves.length} ${t.moves.length===1?"move":"moves"}</span></div>
      <p class="tiny muted mt4">${d(t.moves.map(a=>a.name).join(" \xB7 "))}</p>
      <div class="row mt12">
        <button class="btn solid" data-act="customStart" data-id="${t.id}">${B("play",{size:14})}Start</button>
        <button class="btn" data-act="customEdit" data-id="${t.id}">Edit</button>
      </div>
    </div>`).join(""):`<div class="card">${le("scroll","No workouts yet. Your first one could be anything: a favourite routine, a class, a stretch flow.")}</div>`}

    <div class="sec-t">My week</div>
    <div class="card">
      <p class="small muted">Pick a workout for each day. Empty days are rest days. Switch to <b>My plan</b> and your week shows on Today, with streaks, quests and XP as usual.</p>
      <div class="week-pick">${ne.map((t,a)=>`<label class="wp-row"><span>${t.slice(0,3)}</span>
        <select class="inp" data-week="${a}"><option value="">Rest</option>${o.map(s=>`<option value="${s.id}" ${i.custom.week[a]===s.id?"selected":""}>${d(s.name)}</option>`).join("")}</select>
      </label>`).join("")}</div>
      ${e?'<p class="center accent strong mt12">You\u2019re on My plan</p>':`<button class="cta white mt12" data-act="setPlanBtn" data-n="${Ct}" ${o.length?"":"disabled"}>Use My plan</button>`}
    </div>`}function qi(){const o=P.editing;return`${ko(o.id?"Edit workout":"New workout")}
    <div class="field"><label for="cwName">Name</label><input class="inp" id="cwName" type="text" maxlength="40" value="${d(o.name)}" placeholder="e.g. Pilates, Upper body, Hot girl walk"></div>
    <button class="nw-toggle mt12 ${o.warmup?"on":""}" data-act="cwWarmup">${G("sun",18)}<span><b>Start with the 5-min warm-up</b><small>The same warm-up the plans use</small></span><span class="switch ${o.warmup?"on":""}"></span></button>
    <div class="ctitle">Moves</div>
    ${o.moves.map((e,t)=>`<div class="cw-move">
      <div class="between"><b class="cw-n">${t+1}</b><button class="x-del" data-act="cwRemove" data-i="${t}" aria-label="Remove move">${B("x",{size:12})}</button></div>
      <input class="inp" data-cw="name" data-i="${t}" type="text" maxlength="60" value="${d(e.name)}" placeholder="Move name">
      <div class="g2 mt8">
        <input class="inp" data-cw="amount" data-i="${t}" type="text" maxlength="30" value="${d(e.amount)}" placeholder="${e.hold?"45 sec or 30 sec/side":"3 x 12"}">
        <div class="seg full"><button class="${e.hold?"":"on"}" data-act="cwType" data-i="${t}" data-k="reps">Reps</button><button class="${e.hold?"on":""}" data-act="cwType" data-i="${t}" data-k="hold">Hold</button></div>
      </div>
      ${e.hold?"":`<label class="cw-check"><input type="checkbox" data-cw="weighted" data-i="${t}" ${e.weighted?"checked":""}> Uses weights (shows the weight log)</label>`}
      <input class="inp mt8" data-cw="notes" data-i="${t}" type="text" maxlength="160" value="${d(e.notes)}" placeholder="How to do it (optional)">
    </div>`).join("")}
    <button class="btn full mt8" data-act="cwAdd">${B("plus",{size:14})}Add a move</button>
    <button class="cta mt16" data-act="cwSave">Save workout ${B("check")}</button>
    ${o.id?'<button class="btn danger full mt8" data-act="cwDelete">Delete workout</button>':""}`}function ta(){const o=P.editing;if(!o)return;const e=document.getElementById("cwName");e&&(o.name=e.value),document.querySelectorAll("[data-cw]").forEach(t=>{const a=o.moves[+t.dataset.i];a&&(a[t.dataset.cw]=t.type==="checkbox"?t.checked:t.value)})}function ji(o){const e=o&&Nt(o);P.editing=e?JSON.parse(JSON.stringify(e)):{id:null,name:"",warmup:!0,moves:[In()]},yo(qi(),"editor-sheet")}function Ya(){const o=document.querySelector("#sheet .sheet")?.scrollTop||0;yo(qi(),"editor-sheet still");const e=document.querySelector("#sheet .sheet");e&&(e.scrollTop=o)}function Xc(){ta(),P.editing.moves.push(In()),Ya()}function Yc(o){ta(),P.editing.moves.splice(o,1),P.editing.moves.length||P.editing.moves.push(In()),Ya()}function Hc(o,e){ta(),P.editing.moves[o].hold=e,e&&(P.editing.moves[o].weighted=!1),Ya()}function Wc(){ta(),P.editing.warmup=!P.editing.warmup,Ya()}function Vc(){ta();const o=P.editing;return o.name=o.name.trim(),o.moves=o.moves.map(e=>({...e,name:e.name.trim(),amount:e.amount.trim(),notes:e.notes.trim()})).filter(e=>e.name),o.name?o.moves.length?(o.id?i.custom.workouts=i.custom.workouts.map(e=>e.id===o.id?o:e):(o.id=`w${Date.now().toString(36)}`,i.custom.workouts.push(o)),y(),P.editing=null,null):"Add at least one move":"Give it a name"}function _c(){const o=P.editing?.id;o&&(i.custom.workouts=i.custom.workouts.filter(e=>e.id!==o),i.custom.week=i.custom.week.map(e=>e===o?null:e),y(),P.editing=null)}const Uc={Goals:["target","sag"],"Stretch holds":["lotus","lil"],Strength:["dumbbell",""]},Eo=(o,e,t,a,s)=>`<details>
  <summary class="li"><span class="badge ${e}">${G(o,22)}</span><span class="t">${d(t)}${a?`<small>${d(a)}</small>`:""}</span>${B("down",{cls:"chev"})}</summary>
  <div class="li-body">${s}</div>
</details>`,Qi=o=>`<div class="howIn"><ol>${o.map(e=>`<li>${d(e)}</li>`).join("")}</ol></div>`;function aa(o,e,t,a,s){const n=i.checks[o]||[],r=`<div class="mt8">${e.map((l,F)=>`<div class="chkline">
      <button class="chk ${n[F]?"on":""}" data-act="cl" data-key="${o}" data-i="${F}" aria-pressed="${!!n[F]}">${B("check",{size:15})}</button>
      <span>${d(l)}</span>
    </div>`).join("")}</div>${a?`<p class="small muted mt8">${d(a)}</p>`:""}`;return s?r:`<div class="card"><h2>${d(t)}</h2>${r}</div>`}function Zc(o,e,t){let a=`<details><summary class="li">
      <span class="badge ${t===6?"lil":t===1||t===5?"sag":""}">${G(U2(t,o.n),22)}</span>
      <span class="t">${ne[t]}<small>${d(So(e.title))}</small></span>${B("down",{cls:"chev"})}
    </summary><div class="li-body">
    <div class="row">${Pr(e).map((s,n)=>`<span class="chip ghost">${n+1} \xB7 ${d(s)}</span>`).join("")}</div>`;return e.sections.forEach(s=>{a+=`<div class="ctitle display">${d(Er(s))}</div>${s.meta?`<span class="chip mt4">${d(s.meta)}</span>`:""}`,s.kind==="row"?a+=`${we()?`<div class="call lilac">${G("bike",16)}<div><b>Spin bike swap:</b> ${d(z.ref.rowing[3].b)}</div></div>`:""}
        <p class="small mt8">${s.intro.map(n=>d(So(n))).join(" ")}</p>
        <table class="t mt8">${s.table.map(n=>`<tr><td>${d(n[0])}</td><td>${d(n[1])}</td></tr>`).join("")}</table>
        ${Rr(s).map(n=>`<div class="call feel">${G("heart",16)}<div>${d(n)}</div></div>`).join("")}`:s.kind==="test"?a+=`<div class="mt8">${s.items.map(n=>`<div class="rule">${d(n)}</div>`).join("")}</div><p class="tiny muted">${d(s.notes[0]||"")}</p>`:a+=`<div class="mt8">${s.items.map(n=>`<div class="rule tight-rule"><details class="how inline">
          <summary><span class="grow strong">${d(n.name)}</span><span class="chip">${d(n.sets||n.hold)}</span>${B("down",{cls:"chev"})}</summary>
          ${Dr(n)}
        </details></div>`).join("")}</div>
        ${(s.notes||[]).map(n=>`<p class="tiny muted">${d(n)}</p>`).join("")}`}),a+=e.rest?'<p class="small muted mt8">Rest day. Stretch, walk, or do some self-care.</p></div></details>':`<button class="cta mt16" data-act="startFrom" data-n="${o.n}" data-day="${t}">Do this session today ${B("right")}</button></div></details>`,a}function od(){const o=P.plansSel||i.plan,e=Go(o),t=e.n===i.plan;return`<div class="pchips mt8">${[...z.plans,...i.custom.workouts.length?[Go(Ct)]:[]].map(a=>`<button class="${a.n===o?"on":""}" data-act="plansSel" data-n="${a.n}">${a.n===i.plan?G("bow",14)+" ":""}${a.custom?"My plan":`Plan ${a.n}`}</button>`).join("")}</div>
    <div class="card plan-hero">
      <div class="lab">${e.custom?"Your own plan":`Plan ${e.n} of ${z.plans.length}`}</div>
      <h2>${d(e.name)}</h2>
      <p class="mt8">${d(e.tagline)}</p>
      <div class="plan-num">${e.custom?"\u2661":e.n}</div>
      ${t?'<div class="plan-mine">Your plan right now</div>':`<button class="cta white mt16" data-act="setPlanBtn" data-n="${e.n}">Make this my plan</button>`}
    </div>
    <div class="list">${e.info.map(([a,s])=>{const[n,r]=Uc[a]||["up","but"];return`<div class="li top"><span class="badge ${r}">${n==="up"?B("up"):G(n,22)}</span><div class="t">${d(a)}<small class="body">${d(s)}</small></div></div>`}).join("")}</div>
    <div class="sec-t">The week</div>
    <div class="list">
      <details><summary class="li"><span class="badge but">${G("sun",22)}</span><span class="t">Warm-up<small>Every day \xB7 5 min</small></span>${B("down",{cls:"chev"})}</summary>
        <div class="li-body"><p class="small muted">${d(So(z.ref.warmupNote))}</p>
        ${z.warmup.map(a=>`<div class="rule"><b>${d(a.name)}</b> \xB7 ${d(a.amount)}<br>${d(a.steps[0])}</div>`).join("")}</div>
      </details>
      ${e.days.map((a,s)=>Zc(e,a,s)).join("")}
    </div>`}function ed(){const o=z.ref;return`<div class="sec-t">Basics</div><div class="list">
      ${Eo("heart","","How to use this","",Qi(o.howto))}
      ${Eo("cal","sag","Your week",`Plan ${i.plan} \xB7 what happens each day`,`<table class="t"><tr><th>Day</th><th>Workout</th><th>Stretch after</th></tr>${Go().days.map((e,t)=>`<tr><td>${ne[t].slice(0,3)}</td><td>${d(So(e.title))}</td><td>${d(Bs(e).split(" \xB7 ")[0])}</td></tr>`).join("")}</table>`)}
      ${Eo("sun","but","Warm-up","5 min, before everything",z.warmup.map((e,t)=>`<div class="rule"><b>${t+1}. ${d(e.name)}</b> \xB7 ${d(e.amount)}<br>${d(e.steps[0])}</div>`).join("")+`<div class="call dont">${G("fire",16)}<div>${d(So(o.warmupNote))}</div></div>`)}
    </div>
    <div class="sec-t">The rules</div><div class="list">
      ${Eo("dumbbell","","Training",`${o.training.length} rules`,Re(o.training))}
      ${Eo("spark","lil","Your kit","Weights for Plans 1-6, travel kit for Plans 7-14",`<div class="kick">Plans 1-6 \xB7 ${d(o.kitTitle.replace(/^Plans 1-6: /,""))}</div>${Re(o.kit)}<div class="kick mt16">Plans 7-14 \xB7 travel kit</div>${Re(o.kitBW)}`)}
      ${Eo("lotus","sag","Stretching",`${o.stretching.length} rules`,Re(o.stretching))}
    </div>
    <div class="sec-t">Reference</div><div class="list">
      ${Eo("ladder","but","Level-up ladders","Easiest \u2192 hardest",[["Plans 1-6 \xB7 weights",o.ladders],["Plans 7-14 \xB7 floor only",o.laddersBW]].map(([e,t],a)=>`<div class="kick ${a?"mt16":""}">${e}</div><table class="t">${t.map(s=>`<tr><td class="w32">${d(s[0])}</td><td>${d(s[1])}</td></tr>`).join("")}</table>`).join(""))}
      ${Eo("target","sag","Flexibility targets","Where you should roughly be",`<div class="xscroll"><table class="t wide"><tr><th>Plan</th><th>Hold</th><th>Rounds</th><th>Add-ons</th><th>Target</th></tr>${o.flex.map(e=>`<tr>${e.map(t=>`<td>${d(t)}</td>`).join("")}</tr>`).join("")}</table></div>`)}
      ${Eo("row","lil","Rowing notes","Damper, spin bike swap",Re(o.rowing))}
      ${Eo("lotus","","Splits ladder","Lowering your support",Qi(o.splits)+`<p class="small muted">${d(o.splitsNote)}</p>`)}
      ${Eo("heart","","Why this builds your shape","",Re(o.why))}
    </div>
    <div class="sec-t">Checklists</div><div class="list">
      ${Eo("spark","lil","Dance-ready","End of Plan 3",aa("dance",o.dance,"",o.danceNote,!0))}
      ${Eo("crown","but","Top level","End of Plan 6",aa("top",o.top,"","",!0))}
      ${Eo("crown","but","Goddess level","End of Plan 10",aa("goddess",o.goddess,"","",!0))}
      ${Eo("trophy","but","Apex level","End of Plan 14",aa("apex",o.apex,"","",!0))}
      ${Eo("chart","sag","Track it","",Re(o.track)+'<p class="tiny muted mt8">Weights and Saturday tests are logged for you in this app. Photos and measurements are up to you.</p>')}
    </div>`}function td(){const o=P.plansView==="guide",e=P.plansView==="mine";Ke().innerHTML=`<div class="wrap">
    <div class="top"><div class="date">${o?"Everything from your plan":e?"Yours to keep forever":d(z.ref.tagline)}</div><h1>${o?"Guide":e?"My workouts":"Your plans"}</h1></div>
    <div class="seg full mt8">
      <button class="${!o&&!e?"on":""}" data-act="plansView" data-k="plan">${G("book",18)} Plans</button>
      <button class="${e?"on":""}" data-act="plansView" data-k="mine">${G("scroll",18)} Mine</button>
      <button class="${o?"on":""}" data-act="plansView" data-k="guide">${G("info",18)} Guide</button>
    </div>
    ${o?ed():e?Oc():od()}
  </div>`}let Ti=0;function gn(o,e={}){const t=e.h||140,a=36,s=8,n=14,r=24,l=o.flatMap(N=>N.pts);if(!l.length)return"";const F=l.map(N=>N[0]),c=l.map(N=>N[1]);let p=Math.min(...F),b=Math.max(...F);p===b&&(p-=864e5*3,b+=864e5*3);let I=Math.min(...c),m=Math.max(...c);I===m&&(I-=1,m+=1);const J=(m-I)*.15;I-=J,m+=J;const K=N=>a+(N-p)/(b-p)*(320-a-s),v=N=>n+(1-(N-I)/(m-I))*(t-n-r),Q=e.fmt||(N=>Math.round(N*10)/10),go=Ti++;let so="<defs>";o.forEach((N,no)=>{so+=`<linearGradient id="ag${go}_${no}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${N.color}" stop-opacity=".28"/><stop offset="1" stop-color="${N.color}" stop-opacity="0"/></linearGradient>`}),so+="</defs>",[m-J,(I+m)/2,I+J].forEach(N=>{so+=`<line x1="${a}" x2="${320-s}" y1="${v(N)}" y2="${v(N)}" stroke="var(--hair)" stroke-dasharray="2 5"/>`,so+=`<text x="${a-8}" y="${v(N)+4}" text-anchor="end" class="ax">${Q(N)}</text>`});const S=N=>new Date(N).toLocaleDateString(void 0,{day:"numeric",month:"short"});return so+=`<text x="${a}" y="${t-6}" class="ax">${S(Math.min(...F))}</text>`,so+=`<text x="${320-s}" y="${t-6}" class="ax" text-anchor="end">${S(Math.max(...F))}</text>`,o.forEach((N,no)=>{const V=N.pts.slice().sort((wo,Do)=>wo[0]-Do[0]);if(!V.length)return;const Ko=V.map((wo,Do)=>`${Do?"L":"M"}${K(wo[0]).toFixed(1)} ${v(wo[1]).toFixed(1)}`).join(" ");V.length>1&&(so+=`<path d="${Ko} L${K(V[V.length-1][0])} ${t-r} L${K(V[0][0])} ${t-r}Z" fill="url(#ag${go}_${no})"/>`,so+=`<path d="${Ko}" fill="none" stroke="${N.color}" stroke-width="2.8" stroke-linejoin="round" stroke-linecap="round"/>`);const eo=V[V.length-1];V.forEach(wo=>{const Do=wo===eo;so+=`<rect x="${K(wo[0])-(Do?4.5:2.5)}" y="${v(wo[1])-(Do?4.5:2.5)}" width="${Do?9:5}" height="${Do?9:5}" fill="${Do?"var(--surface)":N.color}" stroke="${N.color}" stroke-width="${Do?2.5:0}"/>`})}),`<svg class="chart" viewBox="0 0 320 ${t}" role="img" aria-label="${d(e.label||"chart")}">${so}</svg>`}function kp(o,e){const t=o.slice().sort((J,K)=>J[0]-K[0]),a=t.map(J=>J[1]).concat(e!=null?[e]:[]);let s=Math.min(...a),n=Math.max(...a);n-s<1&&(s-=1,n+=1);const r=n-s;s-=r*.12,n+=r*.12;let l=t[0][0],F=t[t.length-1][0];l===F&&(l-=864e5,F+=864e5);const c=J=>14+(J-l)/(F-l)*276,p=J=>14+(1-(J-s)/(n-s))*122,b=Ti++;let I=`<defs><linearGradient id="tg${b}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F48FAE" stop-opacity=".35"/><stop offset="1" stop-color="#F48FAE" stop-opacity="0"/></linearGradient></defs>`;if(e!=null&&(I+=`<line x1="14" x2="296" y1="${p(e)}" y2="${p(e)}" stroke="#5BAE5E" stroke-width="2.5" stroke-dasharray="6 6" stroke-linecap="round"/>`,I+=`<g transform="translate(298 ${p(e)-18})">${zi}</g>`),t.length>1){const J=t.map((K,v)=>`${v?"L":"M"}${c(K[0]).toFixed(1)} ${p(K[1]).toFixed(1)}`).join(" ");I+=`<path d="${J} L${c(t[t.length-1][0])} 150 L${c(t[0][0])} 150Z" fill="url(#tg${b})"/>`,I+=`<path d="${J}" fill="none" stroke="#D9587F" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>`}t.slice(0,-1).forEach(J=>{I+=`<rect x="${c(J[0])-2.5}" y="${p(J[1])-2.5}" width="5" height="5" fill="#D9587F"/>`});const m=t[t.length-1];return I+=`<rect x="${c(m[0])-6}" y="${p(m[1])-6}" width="12" height="12" rx="2" fill="var(--surface)" stroke="#D9587F" stroke-width="3"/>`,`<svg class="chart trend" viewBox="0 0 320 150" role="img" aria-label="Weight trend">${I}</svg>`}const zi='<g shape-rendering="crispEdges"><rect x="0" y="0" width="2" height="20" fill="#7C6470"/><rect x="2" y="1" width="9" height="2" fill="#2F6E3E"/><rect x="2" y="3" width="11" height="4" fill="#5BAE5E"/><rect x="2" y="7" width="9" height="2" fill="#2F6E3E"/><rect x="3" y="3" width="3" height="2" fill="#A6E08E"/></g>';function ad(o){if(o.length<2)return"";const e=64,t=26,a=Math.min(...o),s=Math.max(...o),n=s-a||1,r=o.map((l,F)=>`${3+F*(e-6)/(o.length-1)},${t-3-(l-a)/n*(t-6)}`).join(" ");return`<svg width="${e}" height="${t}" viewBox="0 0 ${e} ${t}" aria-hidden="true"><polyline fill="none" stroke="var(--rose)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" points="${r}"/></svg>`}const sd=o=>[["m","Distance"],["min","Time"],["pace",o==="bike"?"RPM":"Pace"]];function nd(o){if(o.split&&/^\d+:\d{1,2}$/.test(o.split)){const[e,t]=o.split.split(":").map(Number);return e*60+t}return o.min&&o.meters?o.min*60/(o.meters/500):null}function rd(o,e,t){return t==="m"?+o.meters?e==="row"?+o.meters:+o.meters/1e3:null:t==="min"?+o.min||null:e==="row"?nd(o):e==="bike"?+o.rpm||null:+o.min&&+o.meters?+o.min*60/(+o.meters/1e3):null}function id(o,e){return e==="m"?o==="row"?"metres":"km":e==="min"?"minutes":o==="row"?"per 500 m, lower is faster":o==="bike"?"avg rpm":"per km, lower is faster"}function ld(o){const e=Lo(new Date),t=Array.from({length:8},(F,c)=>Fo(e,(c-7)*7)),a=t.map(F=>{const c=O(F),p=O(Fo(F,6)),b={};return o.filter(I=>I.date>=c&&I.date<=p).forEach(I=>{b[Wt(I)]=(b[Wt(I)]||0)+(+I.min||0)}),b}),s=Math.max(30,...a.map(F=>Object.values(F).reduce((c,p)=>c+p,0))),n=304/t.length,r=n*.62;let l="";return a.forEach((F,c)=>{let p=110;const b=8+c*n+(n-r)/2;l+=`<rect x="${b.toFixed(1)}" y="10" width="${r.toFixed(1)}" height="100" fill="var(--surface2)" rx="4"/>`,Object.keys(ue).forEach(m=>{if(!F[m])return;const J=F[m]/s*100;p-=J,l+=`<rect x="${b.toFixed(1)}" y="${p.toFixed(1)}" width="${r.toFixed(1)}" height="${J.toFixed(1)}" fill="${ue[m].colour}"/>`});const I=Object.values(F).reduce((m,J)=>m+J,0);I&&(l+=`<text x="${(b+r/2).toFixed(1)}" y="${(p-4).toFixed(1)}" text-anchor="middle" class="ax">${Math.round(I)}</text>`)}),l+=`<text x="8" y="126" class="ax">${(F=>F.toLocaleDateString(void 0,{day:"numeric",month:"short"}))(t[0])}</text><text x="312" y="126" class="ax" text-anchor="end">this week</text>`,`<svg class="chart" viewBox="0 0 320 130" role="img" aria-label="Cardio minutes per week">${l}</svg>`}function Fd(o,e){const t=ue[o],a=e.filter(F=>Wt(F)===o),s=a.reduce((F,c)=>({min:F.min+(+c.min||0),km:F.km+(+c.meters||0)/1e3}),{min:0,km:0});P.cardioMetric||(P.cardioMetric={});const n=P.cardioMetric[o]||"m",r=[["steady","#D9587F"],["intervals","#A585DA"]].map(([F,c])=>({pts:a.filter(p=>p.type===F).map(p=>[ao(p.date).getTime(),rd(p,o,n)]).filter(p=>p[1]),color:c})),l=r.some(F=>F.pts.length)?gn(r,{label:t.name,fmt:n==="pace"&&o!=="bike"?At:void 0}):le("chart",n==="pace"?"Log time and distance together to see your pace.":"Nothing logged for this one yet.");return`<div class="card">
    <div class="kind-head"><span class="badge ${t.badge}">${G(t.icon,24)}</span><div class="grow"><h2>${t.name}</h2>
      <div class="kind-tots"><span><b>${a.length}</b> ${a.length===1?"log":"logs"}</span><span><b>${Math.round(s.min)}</b> min</span><span><b>${s.km?s.km.toFixed(1):0}</b> km</span></div></div></div>
    <div class="seg full mt8">${sd(o).map(([F,c])=>`<button class="${n===F?"on":""}" data-act="kindMetric" data-kind="${o}" data-k="${F}">${c}</button>`).join("")}</div>
    ${l}
    <div class="legend mt8"><i class="dot steady"></i>steady&nbsp;&nbsp;<i class="dot intervals"></i>intervals&nbsp;&nbsp;\xB7 ${id(o,n)}</div>
    ${mt(`<div class="howIn hist">${a.slice().reverse().slice(0,30).map(F=>`<div>
        <span>${vo(F.date)} \xB7 ${F.extra?"bonus":"plan"}${F.type==="intervals"?" \xB7 intervals":""}${F.note?" \xB7 "+d(F.note):""}</span>
        <b>${F.min?d(F.min)+" min":""}${F.meters?" \xB7 "+Hi(F):""}${F.rounds?" \xB7 "+d(F.rounds)+" rds":""}${F.rpm?" \xB7 "+d(F.rpm)+" rpm":""}${F.extra?`<button class="x-del" data-act="delCardio" data-i="${i.rows.indexOf(F)}" aria-label="Remove">${B("x",{size:12})}</button>`:""}</b>
      </div>`).join("")}</div>`,`All your ${t.name.toLowerCase()}`)}
  </div>`}function cd(o){const e=ti(),t=Object.keys(ue).filter(s=>o.some(n=>Wt(n)===s));let a=`<div class="sec-t">Cardio</div>
    <div class="card">
      <div class="between"><h2>All cardio</h2><button class="btn solid small" data-act="cardioSheet">${B("plus",{size:14})}Log cardio</button></div>
      <div class="tiles mt12">
        <div class="tile"><div class="v">${e.all.n}</div><div class="l">sessions</div></div>
        <div class="tile"><div class="v">${Math.round(e.all.min)}</div><div class="l">minutes</div></div>
        <div class="tile"><div class="v">${e.all.km.toFixed(1)}</div><div class="l">km</div></div>
      </div>
      ${o.length?`<div class="ctitle">Minutes per week</div>${ld(o)}
        <div class="kind-legend">${Object.entries(ue).map(([,s])=>`<span><i style="background:${s.colour}"></i>${s.short}</span>`).join("")}</div>`:le("heart",Go().bw?"Your plan has no cardio days, but your heart still loves it. Log a walk, jog, run, row or ride any time.":"Plan rows and rides show up here, plus any bonus cardio you log.")}
    </div>`;return a+=t.map(s=>Fd(s,o)).join(""),a}function dd(){const o=ue[P.xcType]?P.xcType:Go().bw?"walk":i.cardio,e=A();yo(`${ko("Log cardio")}
    <p class="small muted mt4">Every log earns XP, more for longer sessions.</p>
    <div class="xc-types mt12">${Object.entries(ue).map(([t,a])=>`<button class="${t===o?"on":""}" data-act="xcType" data-k="${t}">${G(a.icon,26)}<span>${a.short}</span></button>`).join("")}</div>
    <div class="g2">
      <div class="field"><label for="xcMin">Time (min)</label><input class="inp" id="xcMin" type="number" inputmode="decimal" step="any" placeholder="min"></div>
      <div class="field"><label for="xcKm">Distance (km)</label><input class="inp" id="xcKm" type="number" inputmode="decimal" step="any" placeholder="optional"></div>
    </div>
    <div class="field"><label>Effort</label><div class="seg full"><button class="on" data-act="xcEffort" data-k="steady">Steady</button><button data-act="xcEffort" data-k="intervals">Intervals</button></div></div>
    <div class="g2">
      <div class="field"><label for="xcDate">Day</label><input class="inp" id="xcDate" type="date" value="${e}" max="${e}"></div>
      <div class="field"><label for="xcNote">Note</label><input class="inp" id="xcNote" type="text" placeholder="optional"></div>
    </div>
    <button class="cta mt16" data-act="saveCardio" data-type="${o}">Save ${B("check")}</button>`)}const Oi={start:"Your line starts here.",good:"Moving the right way. Lovely.",steady:"Holding steady.",bump:"A little bump. Totally normal, the trend is what counts."};function pd(){return x1()}function Xi({inputs:o=!1}={}){const e=ei();let t=`<div class="card body-card"><div class="between"><h2>Weight journey</h2>${G("heart",22)}</div>`;return e.has?(t+=pd(),e.hasGoal?(t+=`<div class="body-goal">${Fe(e.fraction,{segments:18,cls:"sage"})}${G("journey",22)}</div>`,t+=`<p class="small muted mt8">${e.fraction>=1&&e.entries>1?"You reached your goal!":Oi[e.mood]}</p>`):t+=`<p class="small muted mt8">${Oi[e.mood]} Add a goal to see the finish line.</p>`):t+=le("chart",e.hasGoal?"Goal saved. Add today\u2019s weight to start your line.":"Set a goal and add today\u2019s weight to start your line. No numbers, just the shape of your progress."),o?t+=`<div class="body-form">
      <div class="body-row">
        <label for="bodyNow">Today\u2019s weight</label>
        <div class="body-in"><input class="inp" id="bodyNow" type="number" inputmode="decimal" step="any" placeholder="Type it in" autocomplete="off"><span class="u">${i.unit}</span></div>
        <button class="btn solid" data-act="bodyLog">Log</button>
      </div>
      <div class="body-row">
        <label for="bodyGoal">Goal weight</label>
        <div class="body-in"><input class="inp" id="bodyGoal" type="number" inputmode="decimal" step="any" placeholder="${i.body.goal!=null?"Saved \xB7 type to change":"Your goal"}" autocomplete="off"><span class="u">${i.unit}</span></div>
        <button class="btn" data-act="bodyGoal">Save</button>
      </div>
      <p class="tiny muted">Numbers disappear once saved, only the line stays.${i.body.log.length?' <button class="linkbtn" data-act="bodyUndo">Remove last entry</button>':""}</p>
      ${j1()}
    </div>`:t+='<p class="tiny muted mt8">Update it from <button class="linkbtn" data-tab="me">Me</button>.</p>',t+"</div>"}const ud={fold:"Fingers to toes in a fold",front:"Front split: hips from floor",middle:"Middle split: hips from floor",squat:"Deep squat hold",bridge:"Bridge hold",thrust:"Hip thrust best",bw:"Pistol squat best (per leg)",hs:"Handstand hold"},Ha=[{k:"fold",type:"fold"},{k:"front",type:"split"},{k:"middle",type:"split"},{k:"squat",type:"secs"},{k:"bridge",type:"secs"},{k:"thrust",type:"wr"},{k:"bw",type:"reps"},{k:"hs",type:"secs"}],sa=o=>o!==""&&o!=null;function Yi(o,e){if(!e||!o)return"";switch(o.type){case"fold":return sa(e.v)?`${e.v} cm ${e.dir||"away"}`:"";case"split":return sa(e.v)?`${e.v} ${e.u||"cm"}`:"";case"secs":return e.v?`${e.v} sec`:"";case"reps":return e.v?`${e.v} reps`:"";case"wr":return e.w||e.r?`${e.w||"?"} ${i.unit} \xD7 ${e.r||"?"}`:"";default:return e.v||""}}function Hi(o){return Ns(o)==="row"?`${Number(o.meters).toLocaleString()} m`:`${o.km||Math.round(o.meters/100)/10} km`}function Wi(o,e){const t=(i.weights[o]||[]).filter(s=>!e||s.p===e),a=t.filter(qo).map(s=>[ao(s.d).getTime(),+s.w]);return`${a.length>1?gn([{pts:a,color:"#B8577A"}],{h:120,label:o}):""}
    <div class="hist mt8">${t.slice().reverse().slice(0,30).map(s=>`<div>
      <span>${vo(s.d,{day:"numeric",month:"short",year:"2-digit"})} \xB7 Plan ${s.p}${s.up?" \xB7 go up":""}</span>
      <b>${qo(s)?d(s.w)+" "+i.unit:"bodyweight"}</b>
    </div>`).join("")}</div>`}function Gd(o){let e=0;return i.planLog.forEach((t,a)=>{if(t.plan!==o)return;const s=i.planLog[a+1]?ao(i.planLog[a+1].date):new Date;e+=Math.max(1,Math.ceil((be(ao(t.date),s)+1)/7))}),e?`<span class="chip ghost">${e} wk${e===1?"":"s"}</span>`:""}const md=[["Fold (cm past toes, minus = away)",o=>o.fold&&sa(o.fold.v)?(o.fold.dir==="past"?1:-1)*o.fold.v:null],["Front split (cm from floor)",o=>o.front&&(o.front.u||"cm")==="cm"&&sa(o.front.v)?+o.front.v:null],["Middle split (cm from floor)",o=>o.middle&&(o.middle.u||"cm")==="cm"&&sa(o.middle.v)?+o.middle.v:null],["Deep squat hold (sec)",o=>o.squat?.v?+o.squat.v:null],["Bridge hold (sec)",o=>o.bridge?.v?+o.bridge.v:null],[()=>`Hip thrust best (${i.unit})`,o=>o.thrust?.w?+o.thrust.w:null],["Pistol squat best (reps per leg)",o=>o.bw?.v?+o.bw.v:null],["Handstand hold (sec)",o=>o.hs?.v?+o.hs.v:null]];function hd(o){let e='<div class="card"><h2>Review results</h2>';if(!o.length)return e+le("clip","Saturday is review day. Your test numbers show up here so you can see the change month to month.")+"</div>";const t=n=>o.map(r=>Yi(n,r[n.k])).filter(Boolean),a=Ha.filter(n=>t(n).length);e+=`<table class="t mt12"><tr><th>Test</th><th>First</th><th>Latest</th></tr>${a.map(n=>{const r=t(n);return`<tr><td class="test-name">${d(ud[n.k])}</td><td>${d(r[0]||"\u2014")}</td><td class="latest">${d(r.length>1?r[r.length-1]:"\u2014")}</td></tr>`}).join("")}</table>`,md.forEach(([n,r])=>{const l=typeof n=="function"?n():n,F=o.map(c=>[ao(c.date).getTime(),r(c)]).filter(c=>c[1]!=null&&!isNaN(c[1]));F.length>1&&(e+=`<div class="ctitle">${d(l)}</div>${gn([{pts:F,color:"#93395C"}],{label:l})}`)});const s=o.filter(n=>n.note?.v).slice(-6).reverse();return s.length&&(e+=mt(`<div class="howIn">${s.map(n=>`<div class="rule"><b>${vo(n.date)}</b> \xB7 ${d(n.note.v)}</div>`).join("")}</div>`,"Your review notes")),e+"</div>"}function Id(o){const e=Object.keys(i.weights).filter(t=>i.weights[t].some(a=>(!o||a.p===o)&&qo(a)));return e.length?`<div class="list">${e.map(t=>{const a=i.weights[t].filter(n=>(!o||n.p===o)&&qo(n)).map(n=>+n.w),s=a.length>1?a[a.length-1]-a[0]:0;return`<details class="lift"><summary><span class="nm">${d(t)}</span>${ad(a)}<span class="v">${a[a.length-1]} ${i.unit}</span>${s>0?`<span class="chip sag">+${Math.round(s*100)/100}</span>`:""}</summary>
      <div class="li-body">${Wi(t,o)}</div></details>`}).join("")}</div>`:`<div class="card">${le("dumbbell","Type a weight on any exercise during a workout. Every change lands here so you know what to beat.")}</div>`}function gd(){const o=tt(),e=L(),t=(a,s)=>`<div class="tile"><div class="v">${a}</div><div class="l">${s}</div></div>`;return`<div class="card records"><h2>Your records</h2><p class="tiny muted mt4">Everything, all time</p>
    <div class="tiles mt12">
      ${t(o.sessions,"sessions")}
      ${t((o.minutes/60).toFixed(1),"hours trained")}
      ${t(Yo().cur,"day streak")}
      ${t(o.bestStreak,"best streak")}
      ${t(o.weekStreak,"best week run")}
      ${t(o.fullWeeks,"perfect weeks")}
      ${t(o.prs,"personal bests")}
      ${t(o.timers,"holds timed")}
      ${t(o.reviews,"reviews")}
      ${t(o.cardio,"cardio logs")}
      ${t(o.cardioKm,"cardio km")}
      ${t(o.cardioMin,"cardio min")}
      ${t(o.quests,"quests done")}
      ${t(o.chests,"chests opened")}
      ${t(o.gifts,"gifts unwrapped")}
      ${t(`${o.badges}/${$o.length}`,"badges")}
      ${t(`${Object.keys(e.titles).length}/${de.length}`,"titles")}
      ${t(o.owned,"items owned")}
    </div>
  </div>`}function bd(){const o=P.progPlan,e=c=>!o||c.plan===o,t=Object.entries(i.sessions).filter(([,c])=>e(c)).sort((c,p)=>c[0]<p[0]?1:-1),a=t.filter(([,c])=>c.done),s=a.filter(([,c])=>[0,2,3,4].includes(c.day)).length,n=i.rows.filter(e),r=i.tests.filter(e),l=n.reduce((c,p)=>c+(+p.meters||0),0)/1e3,F=n.reduce((c,p)=>c+(+p.min||0),0);Ke().innerHTML=`<div class="wrap">
    <div class="top"><div class="date">Pick a plan, or look at it all</div><h1>Progress</h1></div>
    <div class="pchips mt8"><button class="${o?"":"on"}" data-act="progPlan" data-n="0">All plans</button>${z.plans.map(c=>`<button class="${o===c.n?"on":""}" data-act="progPlan" data-n="${c.n}">Plan ${c.n}</button>`).join("")}</div>
    <div class="card">
      <div class="between"><h2>${o?`Plan ${o} \xB7 ${d(Go(o).name)}`:"Everything"}</h2>${o?Gd(o):""}</div>
      <div class="tiles mt12">
        <div class="tile"><div class="v">${a.length}</div><div class="l">sessions</div></div>
        <div class="tile"><div class="v">${s}</div><div class="l">strength days</div></div>
        <div class="tile"><div class="v">${a.length}</div><div class="l">stretch sessions</div></div>
        <div class="tile"><div class="v">${l?l.toFixed(1):0}</div><div class="l">cardio km</div></div>
        <div class="tile"><div class="v">${Math.round(F)}</div><div class="l">cardio min</div></div>
        <div class="tile"><div class="v">${r.length}</div><div class="l">reviews</div></div>
      </div>
    </div>
    ${gd()}
    ${R1()}
    ${i.body.log.length||i.body.goal!=null?Xi():""}
    ${hd(r)}
    ${cd(n)}
    <div class="sec-t">Weights</div>
    ${Id(o)}
    <div class="sec-t">History</div>
    <div class="card">${t.length?`<div class="hist">${t.slice(0,40).map(([c,p])=>`<div><span>${vo(c,{weekday:"short",day:"numeric",month:"short"})} \xB7 ${d(So($a(p)))}</span><b class="${p.done?"is-done":"is-started"}">${p.done?"done":"started"}</b></div>`).join("")}</div>`:le("cal","Nothing yet. Your first session goes here.")}</div>
  </div>`}const Wa=(o,e,t)=>`<div class="seg">${e.map(([a,s])=>`<button class="${t===a?"on":""}" data-act="${o}" data-k="${a}">${s}</button>`).join("")}</div>`,na=(o,e,t)=>`<button class="switch ${e?"on":""}" data-act="${o}" role="switch" aria-checked="${e}" aria-label="${t}"></button>`;function Jd(){const o=To().length;Ke().innerHTML=`<div class="wrap">
    <div class="top between end">
      <div><div class="date">Settings and backups</div><h1>${i.name?d(i.name):"Me"}</h1></div>
      <div class="me-bunny">${zo({size:76})}</div>
    </div>

    <div class="sec-t">You</div>
    <div class="list">
      <div class="li"><span class="badge">${G("heart",22)}</span><input class="inp bare" data-set="name" value="${d(i.name)}" placeholder="Your name (for your hello)" aria-label="Your name"></div>
      <div class="li"><span class="badge lil">${G("bunny",22)}</span><input class="inp bare" data-set="bunny" value="${d(co())}" placeholder="Your bunny\u2019s name" aria-label="Bunny name"></div>
      <div class="li"><span class="badge lil">${G("dumbbell",22)}</span><span class="t">Weight units<small>Label only, old numbers stay as typed</small></span>${Wa("unit",[["kg","kg"],["lb","lb"]],i.unit)}</div>
      <div class="li"><span class="badge">${G("moon",22)}</span><span class="t">Appearance<small>Auto follows your phone</small></span>${Wa("theme",[["auto","Auto"],["light","Light"],["dark","Dark"]],i.theme||"auto")}</div>
      <div class="li"><span class="badge">${G(Cs(),22)}</span><span class="t">Cardio machine (Plans 1-6)<small>Spin bike keeps the same times and rounds, from your plan\u2019s bike swap</small></span>${Wa("cardio",[["row","Row"],["bike","Bike"]],i.cardio)}</div>
      <button class="li" data-act="pickPlan"><span class="badge but">${G("book",22)}</span><span class="t">Plan ${i.plan} \xB7 ${d(Go().name)}<small>Week ${vr()} \xB7 every 4th week is easy</small></span>${B("right",{cls:"chev"})}</button>
    </div>

    <div class="sec-t">Weight</div>
    ${Xi({inputs:!0})}

    <div class="sec-t">Timers and sound</div>
    <div class="list">
      <div class="li"><span class="badge sag">${G("timer",22)}</span><span class="t">Hold timers<small>Optional buttons on timed moves. Never needed to tick things off.</small></span>${na("timers",i.timers,"Show hold timers")}</div>
      <div class="li"><span class="badge">${G(i.sound?"speaker":"mute",22)}</span><span class="t">Sound<small>Chimes, countdown beeps and little pops</small></span>${na("sound",i.sound,"Sound")}</div>
      <div class="li"><span class="badge but">${G("sun",22)}</span><span class="t">Get-ready countdown<small>15 seconds to get into position before a hold starts</small></span>${na("getReady",i.getReady,"Get-ready countdown")}</div>
      <div class="li"><span class="badge but">${G("dumbbell",22)}</span><span class="t">No weights this week<small>Hides weight boxes and weight quests. Turns off on Monday.</small></span>${na("noWeights",ie(),"No weights this week")}</div>
      <div class="li"><span class="badge lil">${G("moon",22)}</span><span class="t">Rest timer<small>Between sets on strength moves</small></span>${Wa("restSecs",[["60","60s"],["90","90s"],["120","2m"]],String(i.restSecs))}</div>
    </div>

    ${m1()}

    <div class="sec-t">Make it an app</div>
    ${Ec()}

    <div class="sec-t">Your data</div>
    <div class="card">
      <p class="small">Year started ${vo(i.start,{day:"numeric",month:"long",year:"numeric"})} \xB7 ${o} ${o===1?"session":"sessions"} done.</p>
      <button class="btn danger mt12 full" data-act="wipe">${G("trash",18)}Delete all my data</button>
    </div>
    <p class="tiny muted center sign">Made with love, for the life you\u2019re building</p>
  </div>`}const P={tab:"home",homeDay:null,cycleOff:0,plansSel:null,plansView:"plan",progPlan:0,shopTab:"fur",installEvt:null},Va=[["home","home","Today"],["journey","journey","Journey"],["glow","mirror","Glow"],["plans","book","Plans"],["progress","chart","Progress"],["me","bunny","Me"]],Vi={home:Dc,journey:zc,glow:Jc,plans:td,progress:bd,me:Jd},Ke=()=>document.getElementById("app");function wd(){document.getElementById("tabs").innerHTML=Va.map(([o,e,t])=>`<button data-tab="${o}" aria-label="${t}"><span class="tab-ic">${B(e,{size:26})}</span>${t}</button>`).join("")}function M(){try{Vi[P.tab](),Ke().firstElementChild?.classList.add("fade"),P.tab==="me"&&h1(),q1()}catch(o){Al(o,"tab")}}function oe(o){P.tab=o,document.querySelectorAll("#tabs button").forEach(e=>e.classList.toggle("on",e.dataset.tab===o)),M(),window.scrollTo(0,0)}const Le=()=>document.getElementById("session").classList.contains("show");let ra=null,ia=null;function _i(){return ra||ia?ra:(ia=br(()=>import("./ZzFX-CBr4ajES.js"),[],import.meta.url).then(o=>{ra=o.ZZFX,ra.volume=.35}).catch(()=>{ia=null}),null)}function Ui(){const o=_i();o?.audioContext.state==="suspended"?o.audioContext.resume():o||ia?.then(()=>ra?.audioContext.resume())}function ee(o,e=1){if(!i.sound)return;const t=_i();if(!t){ia?.then(()=>ee(o,e));return}try{t.audioContext.state==="suspended"&&t.audioContext.resume(),t.playSamples([t.buildSamples(...o)],e)}catch{}}const bn=(o,e=.06,t=1,a=.6)=>[a,0,o,.004,e,.09,t,1];function ve(o,e=.09,t=1,a=.6){o.forEach((s,n)=>{if(!s)return;const[r,l]=Array.isArray(s)?s:[s,.06];setTimeout(()=>ee(bn(r,l,t,a)),n*e*1e3)})}const Zi=523.25,ol=587.33,Jn=659.25,at=783.99,_a=880,wn=987.77,Ge=1046.5,me=1318.5,Se=1568,el=2093,tl=[Zi,ol,Jn,at,_a,Ge,ol*2,me,Se,_a*2,el];let Ua=0,al;const E={tick(){const o=tl[Math.min(Ua,tl.length-1)];Ua++,clearTimeout(al),al=setTimeout(()=>{Ua=0},5e3),ee([.5,0,o,.002,.02,.07,1,1,0,0,o*.5,.035])},untick(){Ua=0,ee([.3,0,420,.002,.02,.08,1,1,-18])},pop:()=>ee([.25,0,740,.001,.01,.04,0,1,0,0,240,.02]),step:()=>ve([Ge,me,Se],.07),carrot:()=>ee([.45,0,wn,.001,.04,.14,1,1,0,0,me-wn,.06]),pr:()=>{ee([.5,0,260,.01,.18,.2,2,1,9,0,0,0,0,0,0,.1]),setTimeout(()=>ve([at,Ge,me,[Se,.18]],.06),220)},sessionDone:()=>ve([Zi,Jn,at,Ge,0,[me,.1],[Se,.3]],.1),levelUp:()=>{ve([at,Ge,me,Se,[el,.25]],.08,2,.45),setTimeout(()=>ee([.25,0,2400,.01,.3,.4,0,1,0,0,0,0,.05]),450)},gift:()=>ve([Jn,at,wn,me,[Se,.2]],.06,0,.55),badge:()=>ve([_a,Ge*1.122,me,[_a*2,.2]],.08,1,.5),nope:()=>ee([.4,0,180,.005,.08,.1,2,1,-4]),count:()=>ee(bn(660,.05,0,.7)),go:()=>ee(bn(990,.16,0,.7)),half:()=>ve([me,Ge],.09,0,.45),switchSides:()=>{ve([Ge,at,Ge,[Se,.12]],.09,1,.6),Uo([90,60,90])},done:()=>{ve([at,Ge,me,[Se,.25]],.11,1,.65),Uo([160,80,160])}};var fn={};(function o(e,t,a,s){var n=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),r=typeof Path2D=="function"&&typeof DOMMatrix=="function",l=(function(){if(!e.OffscreenCanvas)return!1;var w=new OffscreenCanvas(1,1),h=w.getContext("2d");h.fillRect(0,0,1,1);var D=w.transferToImageBitmap();try{h.createPattern(D,"no-repeat")}catch{return!1}return!0})();function F(){}function c(w){var h=t.exports.Promise,D=h!==void 0?h:e.Promise;return typeof D=="function"?new D(w):(w(F,F),null)}var p=(function(w,h){return{transform:function(D){if(w)return D;if(h.has(D))return h.get(D);var q=new OffscreenCanvas(D.width,D.height),Y=q.getContext("2d");return Y.drawImage(D,0,0),h.set(D,q),q},clear:function(){h.clear()}}})(l,new Map),b=(function(){var w=Math.floor(16.666666666666668),h,D,q={},Y=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(h=function(H){var T=Math.random();return q[T]=requestAnimationFrame(function j(_){Y===_||Y+w-1<_?(Y=_,delete q[T],H()):q[T]=requestAnimationFrame(j)}),T},D=function(H){q[H]&&cancelAnimationFrame(q[H])}):(h=function(H){return setTimeout(H,w)},D=function(H){return clearTimeout(H)}),{frame:h,cancel:D}})(),I=(function(){var w,h,D={};function q(Y){function H(T,j){Y.postMessage({options:T||{},callback:j})}Y.init=function(T){var j=T.transferControlToOffscreen();Y.postMessage({canvas:j},[j])},Y.fire=function(T,j,_){if(h)return H(T,null),h;var to=Math.random().toString(36).slice(2);return h=c(function(bo){function ro(mo){mo.data.callback===to&&(delete D[to],Y.removeEventListener("message",ro),h=null,p.clear(),_(),bo())}Y.addEventListener("message",ro),H(T,to),D[to]=ro.bind(null,{data:{callback:to}})}),h},Y.reset=function(){Y.postMessage({reset:!0});for(var T in D)D[T](),delete D[T]}}return function(){if(w)return w;if(!a&&n){var Y=["var CONFETTI, SIZE = {}, module = {};","("+o.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{w=new Worker(URL.createObjectURL(new Blob([Y])))}catch(H){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("\u{1F38A} Could not load worker",H),null}q(w)}return w}})(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function J(w,h){return h?h(w):w}function K(w){return w!=null}function v(w,h,D){return J(w&&K(w[h])?w[h]:m[h],D)}function Q(w){return w<0?0:Math.floor(w)}function go(w,h){return Math.floor(Math.random()*(h-w))+w}function so(w){return parseInt(w,16)}function S(w){return w.map(N)}function N(w){var h=String(w).replace(/[^0-9a-f]/gi,"");return h.length<6&&(h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]),{r:so(h.substring(0,2)),g:so(h.substring(2,4)),b:so(h.substring(4,6))}}function no(w){var h=v(w,"origin",Object);return h.x=v(h,"x",Number),h.y=v(h,"y",Number),h}function V(w){w.width=document.documentElement.clientWidth,w.height=document.documentElement.clientHeight}function Ko(w){var h=w.getBoundingClientRect();w.width=h.width,w.height=h.height}function eo(w){var h=document.createElement("canvas");return h.style.position="fixed",h.style.top="0px",h.style.left="0px",h.style.pointerEvents="none",h.style.zIndex=w,h}function wo(w,h,D,q,Y,H,T,j,_){w.save(),w.translate(h,D),w.rotate(H),w.scale(q,Y),w.arc(0,0,1,T,j,_),w.restore()}function Do(w){var h=w.angle*(Math.PI/180),D=w.spread*(Math.PI/180);return{x:w.x,y:w.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:w.startVelocity*.5+Math.random()*w.startVelocity,angle2D:-h+(.5*D-Math.random()*D),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:w.color,shape:w.shape,tick:0,totalTicks:w.ticks,decay:w.decay,drift:w.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:w.gravity*3,ovalScalar:.6,scalar:w.scalar,flat:w.flat}}function dt(w,h){h.x+=Math.cos(h.angle2D)*h.velocity+h.drift,h.y+=Math.sin(h.angle2D)*h.velocity+h.gravity,h.velocity*=h.decay,h.flat?(h.wobble=0,h.wobbleX=h.x+10*h.scalar,h.wobbleY=h.y+10*h.scalar,h.tiltSin=0,h.tiltCos=0,h.random=1):(h.wobble+=h.wobbleSpeed,h.wobbleX=h.x+10*h.scalar*Math.cos(h.wobble),h.wobbleY=h.y+10*h.scalar*Math.sin(h.wobble),h.tiltAngle+=.1,h.tiltSin=Math.sin(h.tiltAngle),h.tiltCos=Math.cos(h.tiltAngle),h.random=Math.random()+2);var D=h.tick++/h.totalTicks,q=h.x+h.random*h.tiltCos,Y=h.y+h.random*h.tiltSin,H=h.wobbleX+h.random*h.tiltCos,T=h.wobbleY+h.random*h.tiltSin;if(w.fillStyle="rgba("+h.color.r+", "+h.color.g+", "+h.color.b+", "+(1-D)+")",w.beginPath(),r&&h.shape.type==="path"&&typeof h.shape.path=="string"&&Array.isArray(h.shape.matrix))w.fill(L2(h.shape.path,h.shape.matrix,h.x,h.y,Math.abs(H-q)*.1,Math.abs(T-Y)*.1,Math.PI/10*h.wobble));else if(h.shape.type==="bitmap"){var j=Math.PI/10*h.wobble,_=Math.abs(H-q)*.1,to=Math.abs(T-Y)*.1,bo=h.shape.bitmap.width*h.scalar,ro=h.shape.bitmap.height*h.scalar,mo=new DOMMatrix([Math.cos(j)*_,Math.sin(j)*_,-Math.sin(j)*to,Math.cos(j)*to,h.x,h.y]);mo.multiplySelf(new DOMMatrix(h.shape.matrix));var Co=w.createPattern(p.transform(h.shape.bitmap),"no-repeat");Co.setTransform(mo),w.globalAlpha=1-D,w.fillStyle=Co,w.fillRect(h.x-bo/2,h.y-ro/2,bo,ro),w.globalAlpha=1}else if(h.shape==="circle")w.ellipse?w.ellipse(h.x,h.y,Math.abs(H-q)*h.ovalScalar,Math.abs(T-Y)*h.ovalScalar,Math.PI/10*h.wobble,0,2*Math.PI):wo(w,h.x,h.y,Math.abs(H-q)*h.ovalScalar,Math.abs(T-Y)*h.ovalScalar,Math.PI/10*h.wobble,0,2*Math.PI);else if(h.shape==="star")for(var oo=Math.PI/2*3,xo=4*h.scalar,Vo=8*h.scalar,_o=h.x,ge=h.y,Xe=5,se=Math.PI/Xe;Xe--;)_o=h.x+Math.cos(oo)*Vo,ge=h.y+Math.sin(oo)*Vo,w.lineTo(_o,ge),oo+=se,_o=h.x+Math.cos(oo)*xo,ge=h.y+Math.sin(oo)*xo,w.lineTo(_o,ge),oo+=se;else w.moveTo(Math.floor(h.x),Math.floor(h.y)),w.lineTo(Math.floor(h.wobbleX),Math.floor(Y)),w.lineTo(Math.floor(H),Math.floor(T)),w.lineTo(Math.floor(q),Math.floor(h.wobbleY));return w.closePath(),w.fill(),h.tick<h.totalTicks}function La(w,h,D,q,Y){var H=h.slice(),T=w.getContext("2d"),j,_,to=c(function(bo){function ro(){j=_=null,T.clearRect(0,0,q.width,q.height),p.clear(),Y(),bo()}function mo(){a&&!(q.width===s.width&&q.height===s.height)&&(q.width=w.width=s.width,q.height=w.height=s.height),!q.width&&!q.height&&(D(w),q.width=w.width,q.height=w.height),T.clearRect(0,0,q.width,q.height),H=H.filter(function(Co){return dt(T,Co)}),H.length?j=b.frame(mo):ro()}j=b.frame(mo),_=ro});return{addFettis:function(bo){return H=H.concat(bo),to},canvas:w,promise:to,reset:function(){j&&b.cancel(j),_&&_()}}}function X(w,h){var D=!w,q=!!v(h||{},"resize"),Y=!1,H=v(h,"disableForReducedMotion",Boolean),T=n&&!!v(h||{},"useWorker"),j=T?I():null,_=D?V:Ko,to=w&&j?!!w.__confetti_initialized:!1,bo=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ro;function mo(oo,xo,Vo){for(var _o=v(oo,"particleCount",Q),ge=v(oo,"angle",Number),Xe=v(oo,"spread",Number),se=v(oo,"startVelocity",Number),$2=v(oo,"decay",Number),M2=v(oo,"gravity",Number),P2=v(oo,"drift",Number),Gr=v(oo,"colors",S),E2=v(oo,"ticks",Number),mr=v(oo,"shapes"),R2=v(oo,"scalar"),A2=!!v(oo,"flat"),hr=no(oo),Ir=_o,vs=[],B2=w.width*hr.x,C2=w.height*hr.y;Ir--;)vs.push(Do({x:B2,y:C2,angle:ge,spread:Xe,startVelocity:se,color:Gr[Ir%Gr.length],shape:mr[go(0,mr.length)],ticks:E2,decay:$2,gravity:M2,drift:P2,scalar:R2,flat:A2}));return ro?ro.addFettis(vs):(ro=La(w,vs,_,xo,Vo),ro.promise)}function Co(oo){var xo=H||v(oo,"disableForReducedMotion",Boolean),Vo=v(oo,"zIndex",Number);if(xo&&bo)return c(function(se){se()});D&&ro?w=ro.canvas:D&&!w&&(w=eo(Vo),document.body.appendChild(w)),q&&!to&&_(w);var _o={width:w.width,height:w.height};j&&!to&&j.init(w),to=!0,j&&(w.__confetti_initialized=!0);function ge(){if(j){var se={getBoundingClientRect:function(){if(!D)return w.getBoundingClientRect()}};_(se),j.postMessage({resize:{width:se.width,height:se.height}});return}_o.width=_o.height=null}function Xe(){ro=null,q&&(Y=!1,e.removeEventListener("resize",ge)),D&&w&&(document.body.contains(w)&&document.body.removeChild(w),w=null,to=!1)}return q&&!Y&&(Y=!0,e.addEventListener("resize",ge,!1)),j?j.fire(oo,_o,Xe):mo(oo,_o,Xe)}return Co.reset=function(){j&&j.reset(),ro&&ro.reset()},Co}var fo;function Ie(){return fo||(fo=X(null,{useWorker:!0,resize:!0})),fo}function L2(w,h,D,q,Y,H,T){var j=new Path2D(w),_=new Path2D;_.addPath(j,new DOMMatrix(h));var to=new Path2D;return to.addPath(_,new DOMMatrix([Math.cos(T)*Y,Math.sin(T)*Y,-Math.sin(T)*H,Math.cos(T)*H,D,q])),to}function v2(w){if(!r)throw new Error("path confetti are not supported in this browser");var h,D;typeof w=="string"?h=w:(h=w.path,D=w.matrix);var q=new Path2D(h),Y=document.createElement("canvas"),H=Y.getContext("2d");if(!D){for(var T=1e3,j=T,_=T,to=0,bo=0,ro,mo,Co=0;Co<T;Co+=2)for(var oo=0;oo<T;oo+=2)H.isPointInPath(q,Co,oo,"nonzero")&&(j=Math.min(j,Co),_=Math.min(_,oo),to=Math.max(to,Co),bo=Math.max(bo,oo));ro=to-j,mo=bo-_;var xo=10,Vo=Math.min(xo/ro,xo/mo);D=[Vo,0,0,Vo,-Math.round(ro/2+j)*Vo,-Math.round(mo/2+_)*Vo]}return{type:"path",path:h,matrix:D}}function k2(w){var h,D=1,q="#000000",Y='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof w=="string"?h=w:(h=w.text,D="scalar"in w?w.scalar:D,Y="fontFamily"in w?w.fontFamily:Y,q="color"in w?w.color:q);var H=10*D,T=""+H+"px "+Y,j=new OffscreenCanvas(H,H),_=j.getContext("2d");_.font=T;var to=_.measureText(h),bo=Math.ceil(to.actualBoundingBoxRight+to.actualBoundingBoxLeft),ro=Math.ceil(to.actualBoundingBoxAscent+to.actualBoundingBoxDescent),mo=2,Co=to.actualBoundingBoxLeft+mo,oo=to.actualBoundingBoxAscent+mo;bo+=mo+mo,ro+=mo+mo,j=new OffscreenCanvas(bo,ro),_=j.getContext("2d"),_.font=T,_.fillStyle=q,_.fillText(h,Co,oo);var xo=1/D;return{type:"bitmap",bitmap:j.transferToImageBitmap(),matrix:[xo,0,0,xo,-bo*xo/2,-ro*xo/2]}}t.exports=function(){return Ie().apply(this,arguments)},t.exports.reset=function(){Ie().reset()},t.exports.create=X,t.exports.shapeFromPath=v2,t.exports.shapeFromText=k2})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),fn,!1);const Za=fn.exports;fn.exports.create;const sl=["#F6C6D2","#EBA1B5","#FFFFFF","#F9DCE3","#C9D6AE","#D97A95","#FFE27A"];function ho(o=1){if(Rs())return;const e={colors:sl,shapes:["square"],scalar:.9,zIndex:200,disableForReducedMotion:!0};Za({...e,particleCount:Math.round(90*o),spread:76,startVelocity:38,origin:{y:.65},ticks:260}),setTimeout(()=>{Za({...e,particleCount:Math.round(55*o),angle:60,spread:60,origin:{x:0,y:.7}}),Za({...e,particleCount:Math.round(55*o),angle:120,spread:60,origin:{x:1,y:.7}})},250)}function fd(o,e){Rs()||Za({particleCount:18,spread:70,startVelocity:18,gravity:.6,ticks:80,scalar:.6,origin:{x:o/innerWidth,y:e/innerHeight},colors:sl,shapes:["square"],zIndex:200})}function nl(o){if(o&&o.getBoundingClientRect){const e=o.getBoundingClientRect();return{x:e.left+e.width/2,y:e.top}}return o&&"x"in o?o:{x:innerWidth/2,y:innerHeight*.45}}function yn(o,e,t=""){const{x:a,y:s}=nl(e),n=document.createElement("div");n.className=`floaty ${t}`,n.innerHTML=o,n.style.left=`${a}px`,n.style.top=`${s}px`,document.body.appendChild(n),n.addEventListener("animationend",()=>n.remove())}function yd({xp:o,carrots:e},t){const a=[];o&&a.push(`+${o} XP`),e&&a.push(`${G("carrot",14)}+${e}`),a.length&&yn(a.join(" "),t)}function la(o){const{x:e,y:t}=nl(o);for(let a=0;a<5;a++)setTimeout(()=>yn(G("heart",16),{x:e+(Math.random()-.5)*60,y:t+10},"heart-float"),a*90)}const Kn=[];let os=!1,rl=!1;function Ro(o,{onClose:e}={}){Kn.push({html:o,onClose:e}),!os&&!rl&&vn()}function Ln(o){rl=o,!o&&!os&&Kn.length&&vn()}function vn(){const o=Kn.shift(),e=document.getElementById("popup");if(!o){os=!1,e.classList.remove("show");return}os=!0,e.innerHTML=`<div class="pop-card" role="dialog" aria-modal="true">${o.html}</div>`,e.classList.add("show"),e.onclick=t=>{!t.target.closest("[data-pop-close]")&&t.target!==e||(o.onClose?.(),vn())}}const il=5,Kd=15,ll=100,Fa=()=>document.getElementById("session"),kn=()=>Fa().classList.contains("show");let st=null;async function $n(o){try{o&&"wakeLock"in navigator&&!st&&(st=await navigator.wakeLock.request("screen"),st.addEventListener("release",()=>{st=null})),!o&&st&&(await st.release(),st=null)}catch{}}function ca(o,e=null){const t=A();i.active={date:t,plan:i.plan,day:o,custom:e,step:0,checks:{},rounds:{},row:{},test:{},xp:{},startedAt:Date.now(),xpStart:L().xp};const a=Je(i.active).title,s=i.sessions[t]||{};i.sessions[t]={...s,...s.done?{started:!0}:{plan:i.plan,day:o,custom:e,title:a,started:!0,done:!1}},y(),Ht(),new Date().getHours()<10&&No("early"),k1(),Mn()}function Ld(){const o=i.active,e=A();if(!o||o.date===e)return;const t=o.date;for(const s of Object.keys(i.weights)){const n=i.weights[s],r=n.some(l=>l.d===e);i.weights[s]=n.filter(l=>!(l.d===t&&r)),i.weights[s].forEach(l=>{l.d===t&&(l.d=e)}),i.weights[s].sort((l,F)=>l.d<F.d?-1:1)}i.rows.forEach(s=>{s.date===t&&s.plan===o.plan&&(s.date=e)}),o.date=e,o.startedAt=Date.now();const a=i.sessions[e]||{};i.sessions[e]={...a,...a.done?{}:{plan:o.plan,day:o.day,started:!0,done:!1}},y()}function Mn(){var o,e;(o=i.active).xp||(o.xp={}),(e=i.active).xpStart??(e.xpStart=L().xp),Fa().classList.add("show"),document.body.style.overflow="hidden",$n(!0),Ln(!0),Oo()}function Pn(){Fa().classList.remove("show"),document.body.style.overflow="",$n(!1),Ln(!1),M()}const En=(o,e)=>`s${o}-${e}`;function Fl(o,e){const t=Je(o);return e.kind==="warmup"?z.warmup.every((a,s)=>o.checks["w"+s]):e.kind==="row"?!!o.checks["r"+e.sec]:e.kind==="strength"||e.kind==="stretch"?t.sections[e.sec].items.every((a,s)=>ut(a)||o.checks[En(e.sec,s)]):!0}function cl(o,e){const t=Je(o);if(e.kind==="warmup")return[z.warmup.filter((a,s)=>o.checks["w"+s]).length,z.warmup.length];if(e.kind==="strength"||e.kind==="stretch"){const a=t.sections[e.sec].items,s=a.filter(n=>!ut(n));return[a.filter((n,r)=>!ut(n)&&o.checks[En(e.sec,r)]).length,s.length]}return null}function dl(o,e,t){return!i.timers||o<10?"":`<button class="tbtn" data-act="timer" data-s="${o}" data-side="${e?1:0}" data-l="${d(t)}">${G("timer",14)}${At(o)}</button>`}function vd(o,e,t,a,s){const n=En(e,s),r=!!o.checks[n],l=ut(a),F=V2(t,a),c=As(F);let p="";if(t.kind==="strength"&&!t.bw&&Ea(a)&&ie())p=`<div class="last">${G("heart",14)} Bodyweight this week, no weight needed</div>`;else if(t.kind==="strength"&&!t.bw&&Ea(a)){const m=(i.weights[a.name]||[]).find(v=>v.d===o.date),J=Ds(a.name,o.date),K=Br(a.name,o.date);p=`<div class="last">${J?`Last time <b>${qo(J)?d(J.w)+" "+i.unit:"bodyweight"}</b> \xB7 ${Ms(J.d)}${J.up?` \xB7 <b>go up today</b> ${B("up",{size:14})}`:""}${K!=null?` \xB7 best <b>${K}</b>`:""}`:"First time logging this one"}</div>
      <div class="wrow">
        <div class="stepper">
          <button data-act="wstep" data-d="-1" aria-label="Less weight">${B("minus")}</button>
          <input type="number" inputmode="decimal" step="any" min="0" placeholder="${J&&qo(J)?d(J.w):"\u2014"}" value="${m&&qo(m)?d(m.w):""}" data-wt="${d(a.name)}" aria-label="Weight for ${d(a.name)}">
          <span class="u">${i.unit}</span>
          <button data-act="wstep" data-d="1" aria-label="More weight">${B("plus")}</button>
        </div>
        <button class="upT ${m?.up?"on":""}" data-act="up" data-name="${d(a.name)}">${B("up",{size:14})}Go up next time</button>
      </div>`}const b=t.kind==="strength"&&i.timers&&!c,I=t.kind==="strength"&&!t.bw&&(i.weights[a.name]||[]).some(qo)?mt(`<div class="howIn">${Wi(a.name)}</div>`,"Your log"):"";return`<div class="ex ${r?"ok":""} ${l?"opt":""}" id="it-${n}">
    <div class="exTop">${js(n,r,a.name)}
      <div class="grow">
        <div class="exName">${d(a.name)}</div>
        <div class="exMeta">
          <span class="chip">${d(F)}</span>
          ${dl(c,X2(F)||/each side/i.test(a.name),a.name)}
          ${b?`<button class="tbtn rest" data-act="rest">${G("moon",14)}Rest ${At(i.restSecs)}</button>`:""}
          ${l?`<span class="chip ghost">${Ye()&&Lr(a)?"Skip this week":"Optional for now"}</span>`:""}
        </div>
      </div>
    </div>
    ${p}${mt(Dr(a))}${I}
  </div>`}const es=(o,e,t,a)=>`<div class="shead"><span class="badge">${G(o,32)}</span><div class="grow"><div class="k">${e}</div><h1>${t}</h1></div></div><div class="smeta">${a}</div>`;function kd(o){const e=es("sun",`Step ${o.step+1} \xB7 before anything else`,"Warm-up",`<span class="chip">${o.day===6?"3 min":"5 min"}</span><span class="chip ghost">6 moves</span>`),t=Zo("but","fire",d(So(z.ref.warmupNote)))+z.warmup.map((a,s)=>{const n=!!o.checks["w"+s];return`<div class="ex ${n?"ok":""}" id="it-w${s}"><div class="exTop">${js("w"+s,n,a.name)}
      <div class="grow"><div class="exName">${d(a.name)}</div><div class="exMeta"><span class="chip">${d(a.amount)}</span>${dl(As(a.amount),!1,a.name)}</div></div></div>
      ${mt(`<div class="howIn"><p>${d(a.steps[0])}</p></div>`)}
    </div>`}).join("")+(Zt().gymfit?`<div class="fit-pill on">${G("heart",16)} Cute gym fit, noted \u2661</div>`:`<button class="fit-pill" data-act="gymFit">${G("dumbbell",16)} In a gym fit you feel good in? Tap \u2661</button>`);return[e,t]}function $d(o,e,t,a){const s=t.sections[a.sec],n=s.title.startsWith("UPPER"),r=a.kind==="stretch"?"lotus":n?"spark":"dumbbell",l=es(r,`Step ${o.step+1} \xB7 ${O2(s)}`,d(Ma(s.title)),s.meta?`<span class="chip">${d(Mr(s))}</span>`:"");let F=Ye()?Zo("lil","moon",mn):"";if(a.kind==="stretch"){const p=e.info.find(b=>b[0]==="Stretch holds");F+=Qs("Stretching rules",z.ref.stretching,`<b>Plan ${e.n} holds:</b> ${d(p?p[1]:"")}`)}else{!s.bw&&s.items.some(Ea)&&(F+=`<button class="nw-toggle ${ie()?"on":""}" data-act="noWeights">${G("dumbbell",18)}<span><b>No weights this week</b><small>${ie()?"On: weight boxes hidden until Monday":"Tap if you\u2019re doing these with bodyweight only"}</small></span><span class="switch ${ie()?"on":""}"></span></button>`),F+=s.bw?Qs("Bodyweight tips",z.ref.training.filter(b=>/^(Progress|Bodyweight plans|Glute and thigh|Skill rules)/.test(b.t)),""):Qs("Weight tips",[...z.ref.kit.slice(0,3),...z.ref.training.slice(0,3)],"");const p=Mr(s).match(/(\d+)(?:-(\d+))?\s*rounds/);if(p){const b=+(p[2]||p[1]),I=o.rounds[a.sec]||0;F+=`<div class="card"><div class="between"><span class="flabel">Rounds done</span><span class="tiny muted">1-${s.items.length} in a row = 1 round</span></div>
        <div class="rounds">${Array.from({length:b},(m,J)=>`<button class="${J<I?"on":""}" data-act="round" data-sec="${a.sec}" data-n="${J+1}">${J+1}</button>`).join("")}</div></div>`}}const c=F+s.items.map((p,b)=>vd(o,a.sec,s,p,b)).join("")+(s.notes||[]).map(p=>Zo("sag","heart",d(p))).join("");return[l,c]}function Md(o,e,t){const a=e.sections[t.sec],s=/INTERVALS/.test(a.title),n=o.row[t.sec]||{},r=!!o.checks["r"+t.sec],l=we(),F=l?"ride":"row",c=i.rows.filter(m=>m.type===(s?"intervals":"steady")&&Ns(m)===i.cardio&&m.date!==o.date).slice(-1)[0],p=(m,J,K,v='type="number" inputmode="decimal" step="any"',Q="")=>`<div class="field"><label for="${m}">${J}</label><input class="inp" id="${m}" ${v} data-row="${t.sec}" data-f="${K}" value="${d(n[K]||"")}" placeholder="${Q}"></div>`,b=es(Cs(),`Step ${o.step+1} \xB7 Cardio`,d(Er(a)),`<span class="chip">${s?"Intervals":"Steady"}</span>`),I=(Ye()?Zo("lil","moon",mn):"")+(l?Zo("lil","bike",`<b>Spin bike swap:</b> ${d(z.ref.rowing[3].b)}`):"")+`<div class="card"><p class="strong">${a.intro.map(m=>d(So(m))).join(" ")}</p>
        <table class="t mt12">${a.table.map(m=>`<tr><td>${d(m[0])}${Ye()&&/easy week/i.test(m[0])?' <span class="chip lil">this week</span>':""}</td><td>${d(m[1])}</td></tr>`).join("")}</table>
        ${Rr(a).map(m=>`<div class="call feel">${G("heart",16)}<div>${d(m)}</div></div>`).join("")}
        ${mt(`<div class="howIn">${_2().map(m=>`<div class="rule"><b>${d(m.t)}.</b> ${d(m.b)}</div>`).join("")}</div>`,l?"Spin bike notes":"Rowing notes")}
      </div>
      <div class="card"><h2>Log your ${F}</h2>
        ${c?`<p class="last">Last ${s?"interval":"steady"} ${F} \xB7 <b>${d(c.min||"?")} min${c.meters?" \xB7 "+Hi(c):""}${c.rounds?" \xB7 "+d(c.rounds)+" rounds":""}</b> \xB7 ${Ms(c.date)}</p>`:'<p class="last">Your first one. Everything you log here turns into graphs.</p>'}
        <div class="g2">
          ${p("rmin","Time (min)","min",void 0,c?.min?"last "+d(c.min):"min")}
          ${l?p("rm","Distance (km)","km",void 0,c?.km?"last "+d(c.km):"km"):p("rm","Distance (m)","meters",'type="number" inputmode="numeric"',c?.meters?"last "+d(c.meters):"metres")}
          ${s?p("rr","Rounds","rounds",'type="number" inputmode="numeric"'):""}
          ${l?p("rrpm","Avg rpm","rpm",'type="number" inputmode="numeric"',"70-90")+p("rres","Resistance","res",'type="text"',"level"):p("rs","Avg split /500m","split",'type="text" inputmode="numeric"',"e.g. 2:30")+p("rspm","Strokes/min","spm",'type="number" inputmode="numeric"')}
        </div>
        ${p("rn","Notes","note",'type="text"',"Felt strong? Tired?")}
      </div>
      <div class="ex ${r?"ok":""}" id="it-r${t.sec}"><div class="exTop center">${js("r"+t.sec,r,l?"Ride":"Row")}<div class="exName">${l?"Ride":"Row"} done</div></div></div>`;return[b,I]}function Pd(o,e){const t=Ha.find(s=>s.k===o),a=i.tests.filter(s=>s.date!==e).map(s=>Yi(t,s[o])).filter(Boolean);return a[a.length-1]}function Ed(o,e,t){const a=Je(o).sections[t.sec],s=o.test,n=a.items.map((J,K)=>{const v=(e.bw&&K===5?Ha[e.n>=11?7:6]:Ha[K])||{k:"t"+K,type:"text"},Q=s[v.k]||{},go=Pd(v.k,o.date),so=(no,V,Ko)=>`<div class="seg">${V.map(eo=>`<button class="${(Q[no]||Ko)===eo?"on":""}" data-act="tseg" data-k="${v.k}" data-f="${no}" data-v="${eo}">${eo}</button>`).join("")}</div>`,S=(no,V,Ko="decimal",eo="")=>`<input class="inp" type="number" inputmode="${Ko}" step="any" placeholder="${V}" data-test="${v.k}" data-f="${no}" value="${d(Q[no]||"")}" ${eo}>`;let N;return v.type==="fold"?N=S("v","cm")+so("dir",["away","past"],"away"):v.type==="split"?N=S("v","0 = floor")+so("u",["cm","pillows"],"cm"):v.type==="secs"?N=S("v","seconds","numeric",`id="tin-${v.k}"`)+(i.timers?`<button class="btn" data-act="stopwatch" data-k="${v.k}" data-l="${d(J)}">${G("timer",16)}Time it</button>`:""):v.type==="reps"?N=S("v","reps per leg","numeric"):v.type==="wr"?N=S("w",i.unit)+'<span class="muted strong">\xD7</span>'+S("r","reps","numeric"):N=S("v",""),`<div class="field"><label>${d(J)}</label><div class="tl">${N}</div>${go?`<span class="tiny muted">Last time <b class="accent">${d(go)}</b></span>`:""}</div>`}).join(""),r=e.info.find(J=>J[0]==="Goals"),l=e.info.find(J=>J[0]==="Move to next plan"),F=r?r[1].split(/\.\s+|\.$/).map(J=>J.trim()).filter(Boolean):[],c=i.checks.goals[e.n]||[],p={3:["dance","Dance-ready checklist",z.ref.danceNote],6:["top","Top-level checklist",""],10:["goddess","Goddess checklist",""],14:["apex","Apex checklist",""]},b=p[e.n]?aa(p[e.n][0],z.ref[p[e.n][0]],p[e.n][1],p[e.n][2]):"",I=es("clip",`Step ${o.step+1} \xB7 Review day`,"Test & review",'<span class="chip">Write these down</span>'),m=`<div class="card"><h2>This week\u2019s numbers</h2>${n}<p class="tiny muted mt12">${d(a.notes[0]||"")}</p></div>
    <div class="card"><h2>Plan ${e.n} goals</h2><p class="tiny muted mt4">Tick them as they happen. They stay ticked. +50 XP each.</p>
      <div class="mt8">${F.map((J,K)=>`<div class="chkline"><button class="chk ${c[K]?"on":""}" data-act="goal" data-p="${e.n}" data-i="${K}" aria-pressed="${!!c[K]}">${B("check",{size:15})}</button><span>${d(J)}</span></div>`).join("")}</div>
    </div>
    ${b}
    <div class="card"><h2>How\u2019s the week?</h2><p class="small muted mt4">Move to next plan: ${d(l?l[1]:"")}</p>
      <div class="feelb">${[["easy","lotus","Felt easy"],["right","heart","Just right"],["hard","fire","Tough"]].map(([J,K,v])=>`<button class="${s.feel===J?"on":""}" data-act="tfeel" data-v="${J}">${G(K,26)}${v}</button>`).join("")}</div>
      ${s.feel==="easy"&&e.n<z.plans.length&&e.n!==3?Zo("sag","spark",`Sounds like you\u2019re ready for Plan ${e.n+1}: ${d(Go(e.n+1).name)}.<div class="mt8"><button class="btn solid" data-act="setPlanBtn" data-n="${e.n+1}">Move me up</button></div>`):""}
      <div class="field"><label for="tnote">Notes for future you</label><textarea class="inp" id="tnote" data-test="note" data-f="v" placeholder="Wins, niggles, what to focus on next week\u2026">${d(s.note?.v||"")}</textarea></div>
    </div>`;return[I,m]}function Rd(o,e,t=20){const a=Math.round(o*t),s=Math.round(e*t);let n="";for(let r=0;r<t;r++){const l=r<s,F=l&&r>=a;n+=`<i class="${l?"on":""} ${F?"grow":""}" ${F?`style="animation-delay:${500+(r-a)*70}ms"`:""}></i>`}return`<div class="pxbar" style="--n:${t}">${n}</div>`}function Ad(o,e,t){const a=Yo(),s=Math.max(1,Math.round((Date.now()-(o.startedAt||Date.now()))/6e4)),n=t.sections.filter(I=>I.kind==="strength").flatMap(I=>I.items).filter(I=>(i.weights[I.name]||[]).some(m=>m.d===o.date&&qo(m))).length,r=He(o.xpStart??L().xp),l=He(L().xp),F=L().xp-(o.xpStart??L().xp),c=o.tally||[],p=c.reduce((I,m)=>I+(m.carrots||0),0),b=l.level>r.level?0:r.fraction;return`<div class="done">
      <div class="bun">${zo({mood:"love",size:140,cls:"bounce"})}</div>
      <h1>You did it!</h1>
      <div class="note">${Ut()?d(Ut()):"so proud of you, gorgeous (\u02F6\u1D54 \u1D55 \u1D54\u02F6)\u2661"}</div>
      <p class="muted mt8">${ne[o.day]} \xB7 ${d(So(t.title))} is done.<br>${o.day===6?"Rest well. Muscle grows while you rest.":"Your future self says thank you."}</p>
    </div>
    <div class="card reward-card">
      <div class="between"><span class="lv"><small>LV</small>${l.level}</span><span class="xp-gain">+${F} XP</span>${p?`<span class="purse">${G("carrot",18)}<b>+${p}</b></span>`:""}</div>
      <div class="xp-anim">${Rd(b,l.fraction)}</div>
      <div class="tally">${c.map((I,m)=>`<div style="--i:${m}"><span>${d(I.reason)}</span><b>${I.xp?`+${I.xp} XP`:""}${I.carrots?` ${G("carrot",12)}+${I.carrots}`:""}</b></div>`).join("")}</div>
    </div>
    <div class="tiles mt12">
      <div class="tile"><div class="v">${a.cur}</div><div class="l">day streak</div></div>
      <div class="tile"><div class="v">${s}</div><div class="l">minutes</div></div>
      <div class="tile"><div class="v">${e.bw||ie()?Object.values(o.checks).filter(Boolean).length:n}</div><div class="l">${e.bw||ie()?"moves done":"weights logged"}</div></div>
    </div>
    ${Nl(o)}
    ${I2(o)}
    ${Bd()}
    ${Xa()?`<button class="gift-btn wide" data-act="gift">${G("gift",34,"wiggle")}<span><b>Unwrap today\u2019s gift</b><small>Something for showing up</small></span></button>`:""}
    ${Zo("lil","moon",`<b>${d(z.ref.training[6].t)}.</b> ${d(z.ref.training[6].b)}`)}
    <button class="cta" data-act="finishHome">Back home ${B("right")}</button>
    <div style="height:30px"></div>`}function Bd(){const o=ii("workout"),e=_t(),t=Zt(),a=[...o.map(r=>({act:"postWin",id:r.item.id,icon:r.item.icon,text:r.item.name,sub:"your if-then plan",done:!!t[r.item.id]})),...e&&!o.some(r=>r.item.id===e.id)?[{act:"postDare",id:e.id,icon:e.icon,text:e.text,sub:"today\u2019s tiny dare",done:e.done}]:[]],s=Ta(),n=rn(Vt("strong"));return`<div class="card glow-window">
    <div class="between"><h2>While you\u2019re glowing</h2><span class="chip ${s?"sag":"lil"}">${s?"combo done":"combo +30 XP"}</span></div>
    <p class="small muted mt4">${s?"Workout and a femme win today. That\u2019s the whole idea.":"Shower, moisturise, a spritz of perfume, something you feel pretty in. Add one femme win today for the combo."}</p>
    <div class="strong-line">${G("dumbbell",18)}<span class="grow">Strong &amp; fit \xB7 ${d(ni(n.rank))} <b>rank ${n.rank}</b></span><span class="tiny muted">${n.into}/${n.need}</span></div>
    ${a.length?`<div class="glow-list">${a.map(r=>`<button class="glow-row ${r.done?"done":""}" data-act="${r.act}" data-id="${r.id}" ${r.done?"disabled":""}>
      <span class="chk ${r.done?"on":""}">${B("check",{size:16})}</span><span class="q-ic">${G(r.icon,22)}</span>
      <span class="grow">${d(r.text)}<small>${r.sub}</small></span></button>`).join("")}</div>`:""}
  </div>`}function Oo(){try{Cd()}catch(o){Al(o,"session")}}function Cd(){const o=i.active;if(!o){Pn();return}const e=Go(o.plan),t=Je(o),a=Pa(o);o.step>a.length-1&&(o.step=a.length-1);const s=a[o.step],n=a.length-1,r=cl(o,s),l=r&&r[1]?Math.round(100*r[0]/r[1]):0,F=a.slice(0,-1).map((I,m)=>`<span class="${m<o.step?"d":m===o.step?"c":""}" ${m===o.step?`id="curBar" style="--p:${l}%"`:""}></span>`).join("");let c="",p="";s.kind==="warmup"?[c,p]=kd(o):s.kind==="strength"||s.kind==="stretch"?[c,p]=$d(o,e,t,s):s.kind==="row"?[c,p]=Md(o,t,s):s.kind==="test"?[c,p]=Ed(o,e,s):p=Ad(o,e,t);let b="";if(s.kind!=="done"){const I=Fl(o,s),m=s.kind==="test",J=a[o.step+1].kind==="done";b=`<div class="sfoot"><div class="wrap">
      ${r?`<div class="count" id="cnt">${r[0]} of ${r[1]} done</div>`:""}
      <div id="contBox">${I?pl(m,J):""}</div>
    </div></div>`}Fa().innerHTML=`<div class="sbar"><div class="wrap row nowrap">
      <button class="iconbtn" data-act="exitSession" aria-label="Save and close">${B("x")}</button>
      <div class="prog">${s.kind!=="done"?`<div class="t">${ne[o.day]} \xB7 step ${o.step+1} of ${n}</div>`:'<div class="t">All done</div>'}<div class="bar">${F}</div></div>
      <button class="iconbtn" data-act="back" aria-label="Previous step" ${o.step===0||s.kind==="done"?'style="visibility:hidden"':""}>${B("back")}</button>
    </div></div>
    <div class="wrap">${o.step===0&&s.kind!=="done"?$1(o):""}${c}${p}</div>${b}`,Fa().scrollTop=0}const pl=(o,e)=>`<button class="cta rise" data-act="next">${o?"Save review & finish":e?"Finish session":"Continue"} ${B(e||o?"check":"right")}</button>`;function Nd(){const o=i.active,e=Pa(o),t=e[o.step],a=cl(o,t),s=document.getElementById("cnt");s&&a&&(s.textContent=`${a[0]} of ${a[1]} done`);const n=document.getElementById("curBar");n&&a&&n.style.setProperty("--p",Math.round(100*a[0]/a[1])+"%");const r=document.getElementById("contBox"),l=Fl(o,t);r&&(l&&!r.innerHTML&&(r.innerHTML=pl(!1,e[o.step+1].kind==="done"),Uo([20,40,20]),E.step(),(t.kind==="strength"||t.kind==="stretch")&&a&&a[1]>0&&No("perfect")),l||(r.innerHTML=""))}function Dd(o){const e=i.active,t=o.dataset.k;e.checks[t]=!e.checks[t];const a=e.checks[t];o.classList.toggle("on",a),o.setAttribute("aria-pressed",a),document.getElementById("it-"+t)?.classList.toggle("ok",a),a?(Uo(12),E.tick(),e.xp[t]||(e.xp[t]=1,e.tickXp=(e.tickXp||0)+il,x(il,0,"",{origin:o}))):E.untick(),y(),Nd()}function xd(o,e){const t=Je(o).sections[e],a=o.row[e];if(!a||!["min","meters","km","rounds","split","note","spm","rpm","res"].some(n=>a[n]))return!1;a.machine||(a.machine=i.cardio),a.machine==="bike"&&a.km&&(a.meters=String(Math.round(+a.km*1e3)));const s=/INTERVALS/.test(t.title)?"intervals":"steady";return i.rows=i.rows.filter(n=>n.extra||!(n.date===o.date&&n.type===s&&Ns(n)===a.machine)),i.rows.push({date:o.date,plan:o.plan,type:s,...a}),i.rows.sort((n,r)=>n.date<r.date?-1:1),!0}function Sd(o){return Object.keys(o.test).length?(i.tests=i.tests.filter(e=>e.date!==o.date),i.tests.push({date:o.date,plan:o.plan,...JSON.parse(JSON.stringify(o.test))}),i.tests.sort((e,t)=>e.date<t.date?-1:1),!0):!1}function ul(o){const e=Math.max(1,Math.round((Date.now()-(o.startedAt||Date.now()))/6e4));i.sessions[o.date]={...i.sessions[o.date]||{},plan:o.plan,day:o.day,custom:o.custom||null,title:Je(o).title,started:!0,done:!0,at:Date.now(),mins:e},y();const t=o.tally||(o.tally=[]);if(o.liftXp&&t.unshift({reason:"Weights logged",xp:o.liftXp,carrots:0}),o.tickXp&&t.unshift({reason:"Moves ticked",xp:o.tickXp,carrots:0}),po(`${o.date}:session`)){const a=Yo().cur,s=Math.min(50,a*10);x(ll,10,"Session complete",{quiet:!0}),s>0&&x(Math.round(ll*s/100),a>=7?5:0,`${a}-day streak bonus`,{quiet:!0});const n=L();n.cakes>0&&(n.cakes--,n.stats.cakes++,x(_s,0,"Carrot cake",{quiet:!0})),op(o)}else x(25,0,"Encore session",{quiet:!0});No("finish"),un(),xa(),Sa(),lo()}function qd(){const o=za("gymfit","style");return Oo(),o}function jd(){const o=i.active,e=Pa(o),t=e[o.step];if(t.kind==="row"&&xd(o,t.sec)&&!o.xp["row"+t.sec]&&(o.xp["row"+t.sec]=1,x(20,0,`${we()?"Ride":"Row"} logged`,{quiet:!0}),No("cardio")),t.kind==="test"&&Sd(o)&&!o.xp.review&&(o.xp.review=1,x(60,5,"Review saved",{quiet:!0}),No("review")),t.kind!=="test"&&!o.xp["step"+o.step]&&(o.xp["step"+o.step]=1,x(Kd,0,`${t.kind==="warmup"?"Warm-up":t.kind==="row"?"Cardio":t.kind==="stretch"?"Stretch":"Workout"} step`,{quiet:!0})),t.kind==="stretch"&&No("stretch"),o.step++,e[o.step].kind==="done"){ul(o),Oo(),E.sessionDone(),ho(),i.active=null,y(),setTimeout(()=>Ln(!1),1800);return}y(),Oo()}function Qd(o){var e;const t=i.active,a=o.dataset.wt,s=(e=i.weights)[a]||(e[a]=[]);let n=s.find(l=>l.d===t.date);const r=o.value.trim();if(n)n.w=r===""?null:r;else{if(r==="")return;n={d:t.date,p:t.plan,w:r},s.push(n),s.sort((l,F)=>l.d<F.d?-1:1)}n.w==null&&!n.up&&(i.weights[a]=s.filter(l=>l!==n)),i.weights[a].length||delete i.weights[a],y()}function Gl(o){const e=i.active,t=o.dataset.wt,a=parseFloat(o.value);if(!e||!t||!(a>0))return;e.xp["w:"+t]||(e.xp["w:"+t]=1,e.liftXp=(e.liftXp||0)+5,x(5,0,"",{origin:o}),No("lift"));const s=Ds(t,e.date);s&&qo(s)&&a>+s.w&&!e.xp["beat:"+t]&&(e.xp["beat:"+t]=1,No("beat"));const n=Br(t,e.date);if(n!=null&&a>n&&!e.xp["pr:"+t]){e.xp["pr:"+t]=1,x(40,5,`New best: ${t}`,{quiet:!0}),E.pr(),yn("NEW BEST!",o,"pr");const r=o.getBoundingClientRect();fd(r.left+r.width/2,r.top),lo()}}function Td(o){const e=o.parentElement.querySelector("input"),t=e.value!==""?+e.value:+e.placeholder||0,a=i.unit==="kg"?1:2.5;e.value=Math.max(0,Math.round((t+ +o.dataset.d*a)*100)/100),e.dispatchEvent(new Event("input",{bubbles:!0})),Uo(8),E.pop(),clearTimeout(e._settle),e._settle=setTimeout(()=>Gl(e),900)}function zd(o){var e;const t=i.active,a=o.dataset.name,s=(e=i.weights)[a]||(e[a]=[]);let n=s.find(r=>r.d===t.date);n||(n={d:t.date,p:t.plan,w:null},s.push(n),s.sort((r,l)=>r.d<l.d?-1:1)),n.up=!n.up,o.classList.toggle("on",n.up),y()}function Od(o){var e;const t=o.dataset.p,a=+o.dataset.i,s=(e=i.checks.goals)[t]||(e[t]=[]);s[a]=!s[a],o.classList.toggle("on",s[a]),y(),s[a]&&(Uo(12),E.tick(),po(`goal:${t}:${a}`)&&x(50,5,"Plan goal ticked",{origin:o}))}const Rn=15,ml=5,An=96,ts=2*Math.PI*An,k={mode:"hold",label:"",total:0,left:0,elapsed:0,sides:!1,side:1,phase:"idle",phaseLeft:0,running:!1,last:0,timer:null,target:null,lastBeep:null,halfDone:!1},Bn=()=>document.getElementById("timer");function Cn({secs:o=0,sides:e=!1,label:t="",mode:a="hold",target:s=null}){clearInterval(k.timer),Object.assign(k,{mode:a,label:t,target:s,sides:!!e,side:1,total:o,left:o,elapsed:0,phase:"idle",phaseLeft:0,running:!1,lastBeep:null,halfDone:!1}),nt(),Bn().classList.add("show")}function Nn(){clearInterval(k.timer),k.running=!1,Bn().classList.remove("show")}const hl=()=>{if(k.mode==="watch")return ts*(1-k.elapsed%60/60);if(k.phase==="ready"||k.phase==="switch"){const o=k.phase==="ready"?Rn:ml;return ts*(k.phaseLeft/o)}return ts*(k.total?k.left/k.total:0)};function Il(){return k.mode==="watch"?At(k.elapsed):k.phase==="ready"||k.phase==="switch"?String(Math.ceil(k.phaseLeft)):At(k.left)}function gl(){return k.mode==="watch"?"counting up":k.phase==="ready"?"get into position":k.phase==="switch"?"switch sides":k.mode==="rest"?"rest, breathe":k.sides?`side ${k.side} of 2`:"hold"}function Xd(){return k.mode==="watch"?"Stopwatch":k.mode==="rest"?"Rest timer":"Hold timer \xB7 optional"}function nt(){const o=k.mode==="watch",e=k.phase==="done"?"happy":k.running?"pumped":"idle",t=k.phase==="ready"||k.phase==="switch"?"phase-cue":"";Bn().innerHTML=`<div class="sheet timer-sheet" role="dialog" aria-modal="true" aria-label="Timer"><div class="grab"></div>
    <div class="between">
      <div><div class="lbl">${Xd()}</div><h2 class="timer-title">${d(k.label)}</h2></div>
      <button class="iconbtn" data-act="tClose" aria-label="Close">${B("x")}</button>
    </div>
    <div class="ringW ${t}">
      <svg viewBox="0 0 220 220">
        <defs><linearGradient id="rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F7A9BF"/><stop offset="1" stop-color="#A93A61"/></linearGradient></defs>
        <circle cx="110" cy="110" r="${An}" fill="none" stroke="var(--h0)" stroke-width="16"/>
        <circle id="ringP" cx="110" cy="110" r="${An}" fill="none" stroke="url(#rg)" stroke-width="16" stroke-dasharray="${ts}" stroke-dashoffset="${hl()}"/>
      </svg>
      <div class="clock"><div class="tm" id="clock">${Il()}</div><div class="sd" id="clockSub">${gl()}</div></div>
      <div class="timer-bunny">${zo({mood:e,size:54})}</div>
    </div>
    <div class="tctl">
      ${o?`<button class="sm" data-act="tReset" aria-label="Reset">${B("reset")}</button>`:'<button class="sm" data-act="tAdd" data-s="-15">\u221215</button>'}
      <button class="play" data-act="tGo" aria-label="${k.running?"Pause":"Start"}">${B(k.running?"pause":"play",{size:30})}</button>
      ${o?`<button class="sm" data-act="tUse" aria-label="Use this time">${B("check")}</button>`:'<button class="sm" data-act="tAdd" data-s="15">+15</button>'}
    </div>
    ${o?'<p class="tiny muted center mt12">Tap the tick to drop the time into your review.</p>':`<div class="row mt16 center-row">${k.phase==="ready"?`<button class="btn solid" data-act="tSkip">${B("play")}Start now</button>`:`<button class="btn" data-act="tReset">${B("reset")}Reset</button>${k.mode==="hold"&&i.getReady&&k.phase==="idle"?`<span class="tiny muted">${Rn} sec to get ready first</span>`:""}`}</div>`}
    ${k.mode==="rest"&&Ut()?`<p class="rest-line">\u201C${d(Ut())}\u201D</p>`:""}
  </div>`}function Dn(){const o=document.getElementById("clock"),e=document.getElementById("clockSub"),t=document.getElementById("ringP");o&&(o.textContent=Il()),e&&(e.textContent=gl()),t&&t.setAttribute("stroke-dashoffset",hl())}function bl(o){const e=Math.ceil(o);e<=3&&e>=1&&k.lastBeep!==e&&(k.lastBeep=e,E.count())}function Jl(){k.phase="run",k.lastBeep=null,E.go(),nt()}function Yd(){clearInterval(k.timer),k.running=!1,k.phase="done",E.done(),k.mode==="rest"?$("Rest\u2019s up. Next set!","dumbbell"):($("Hold done","spark"),L().stats.timers++,y(),No("timer")),nt()}function Hd(){const o=Date.now(),e=(o-k.last)/1e3;if(k.last=o,k.mode==="watch")return k.elapsed+=e,Dn();if(k.phase==="ready"||k.phase==="switch"){if(k.phaseLeft-=e,bl(k.phaseLeft),k.phaseLeft<=0){Jl();return}return Dn()}if(k.left-=e,!k.halfDone&&k.total>=20&&k.left<=k.total/2&&(k.halfDone=!0,E.half()),bl(k.left),k.left<=0){if(k.left=0,k.sides&&k.side===1){k.side=2,k.left=k.total,k.halfDone=!1,k.phase="switch",k.phaseLeft=ml,k.lastBeep=null,E.switchSides(),nt();return}return Yd()}Dn()}function Wd(){Ui(),k.running=!k.running,clearInterval(k.timer),k.running&&(k.phase==="done"&&wl(!1),k.phase==="idle"&&(k.mode==="hold"&&i.getReady?(k.phase="ready",k.phaseLeft=Rn):(k.phase="run",E.go())),k.running=!0,k.last=Date.now(),k.timer=setInterval(Hd,100)),nt()}function Vd(){k.phase==="ready"&&(k.phaseLeft=0,Jl())}function wl(o=!0){clearInterval(k.timer),Object.assign(k,{running:!1,left:k.total,elapsed:0,side:1,phase:"idle",lastBeep:null,halfDone:!1}),o&&nt()}function _d(o){k.left=Math.max(0,k.left+o),k.total=Math.max(k.total,k.left),nt()}const Ud=()=>({key:k.target,secs:Math.round(k.elapsed)});function Zd(){yo(`${ko("Choose your plan")}
    <p class="small muted mt8">${d(z.ref.howto[2])}</p>
    ${[...z.plans,...i.custom.workouts.length?[Go(15)]:[]].map(o=>`<button class="popt ${o.n===i.plan?"on":""}" data-act="setPlan" data-n="${o.n}">
      <span class="n">${o.custom?"\u2661":o.n}</span>
      <span class="grow"><b>${d(o.name)}</b><br><span class="small muted">${d(o.tagline)}</span></span>
      ${o.n===i.plan?`<span class="chip">${B("check",{size:14})}</span>`:""}
    </button>`).join("")}`)}function xn(o){if(o===i.plan){Jo();return}const e=o>i.plan;i.plan=o,i.planLog.push({plan:o,date:A()}),y(),Ht(),Jo(),$(Go(o).custom?"My plan it is":`Plan ${o} \xB7 ${Go(o).name}`,"bow"),e&&o<=z.plans.length&&po(`plan:${o}`)&&x(300,40,`Moved up to Plan ${o}`),lo(),M()}function o1(){yo(`${ko("How your streak works")}
    <div class="rule mt8">Every day with a finished session counts, Sunday\u2019s restorative stretch too. Your streak adds up to +50% XP on each session.</div>
    <div class="rule">Each 7 days in a row earns a bow ${G("bow",18)}. You can hold 2.</div>
    <div class="rule">Miss a day and a bow covers it automatically, so one off day never wipes out your work. Saved days show in lilac on your year.</div>
    <div class="rule">Need a spare? Buy one for ${G("carrot",16)} ${bt} carrots in Journey \u2192 Extras (up to 3).</div>`)}function e1(o){const e=Go(o),t=o===i.plan;yo(`${ko(`Plan ${e.n} \xB7 ${d(e.name)}`)}
    <p class="mt8">${d(e.tagline)}</p>
    <div class="list mt12">${e.info.map(([a,s])=>`<div class="li top"><div class="t">${d(a)}<small class="body">${d(s)}</small></div></div>`).join("")}</div>
    ${t?'<p class="center accent strong">You\u2019re here right now</p>':`<button class="cta mt8" data-act="setPlan" data-n="${e.n}">Make this my plan</button>`}`)}function t1(o){const e=String(o||"").trim().slice(0,18);e&&(i.game.bunny=e,y())}function a1(){uF(o=>{o.type==="gain"&&(o.xp||o.carrots)&&(yd(o,o.origin),o.carrots&&E.carrot()),o.type==="level"&&(s1(o.level,o.bonus,o.unlocked||[]),setTimeout(()=>lo(),50)),o.type==="title"&&r1(o.title),o.type==="prestige"&&(E.levelUp(),ho(1.4),Ro(`<div class="pop-burst gold"></div>
        <div class="pop-badge pheart-big">${G("heart",90)}<b>${o.count}</b></div>
        <div class="pop-kicker">Prestige ${o.count}</div>
        <h2>Back to level 1, stronger</h2>
        <p class="muted">Everything you own comes with you.</p>
        <div class="pop-reward">${G("carrot",20)} +500 carrots</div>
        <button class="cta" data-pop-close>Let\u2019s climb</button>`),setTimeout(()=>lo(),100)),o.type==="badge"&&(Le()&&$(`Badge unlocked: ${o.badge.name}`,o.badge.icon),n1(o.badge)),o.type==="quest"&&($(`Quest done: ${o.quest.text}`,o.quest.icon),E.carrot()),o.type==="chestReady"&&setTimeout(()=>$("All quests done! Chest unlocked","box"),2500),o.type==="weekly"&&setTimeout(()=>$("Weekly goal smashed! +150 XP","trophy"),1200),o.type==="changed"&&!Le()&&Sn()})}function Sn(){document.querySelector(".player")&&(clearTimeout(Sn.t),Sn.t=setTimeout(()=>M(),600))}function s1(o,e,t){setTimeout(()=>{E.levelUp(),ho(1.2),Ro(`<div class="pop-burst"></div>
      <div class="pop-bunny">${zo({mood:"love",size:120,cls:"bounce"})}</div>
      <div class="pop-kicker">Level up!</div>
      <div class="pop-level"><small>LV</small>${o}</div>
      <h2>${Sr(o)}</h2>
      <p class="muted">${d(co())} is so proud of you.</p>
      <div class="pop-reward">${G("carrot",20)} +${e} carrots</div>
      ${t.map(a=>`<div class="pop-unlock"><span class="nr-prev">${Po(a,48)}</span><span>Unlocked<b>${d(a.name)}</b></span></div>`).join("")}
      <button class="cta" data-pop-close>Yay!</button>`)},Le()?900:200)}function n1(o){setTimeout(()=>{E.badge(),Ro(`<div class="pop-badge">${G(o.icon,64)}</div>
      <div class="pop-kicker">Badge unlocked</div>
      <h2>${d(o.name)}</h2>
      <p class="muted">${d(o.desc)}</p>
      <div class="pop-reward">${G("carrot",20)} +${o.carrots} carrots</div>
      ${o.reward?`<div class="pop-unlock"><span class="nr-prev">${Po(io(o.reward),48)}</span><span>Unlocked<b>${d(io(o.reward).name)}</b></span></div>`:""}
      <button class="cta" data-pop-close>Nice</button>`)},400)}function r1(o){setTimeout(()=>{E.badge(),Ro(`<div class="pop-burst"></div>
      <div class="pop-bunny">${zo({mood:"love",size:110,cls:"bounce"})}</div>
      <div class="pop-kicker">New title unlocked</div>
      <h2>${d(o.name)}</h2>
      <p class="muted">${d(o.how)}</p>
      <button class="cta" data-act="setTitle" data-id="${o.id}" data-pop-close>Wear this title</button>
      <button class="btn mt8 full" data-pop-close>Maybe later</button>`)},500)}function i1(){const o=L();if(!o.welcome)return;const e=o.welcome;Ro(`<div class="pop-bunny">${ce({mood:"love",size:120,cls:"bounce"})}</div>
    <div class="pop-kicker">Meet ${d(co())}</div>
    <h2>Your progress just turned into a game</h2>
    <p class="muted">${d(co())} found your ${e.sessions} past ${e.sessions===1?"session":"sessions"} and counted them all.</p>
    <div class="pop-reward">${G("gem",20)} ${e.xp.toLocaleString()} XP \xB7 ${G("carrot",20)} ${e.carrots} carrots</div>
    <p class="tiny muted">Spend carrots on outfits in Journey. Finish sessions and quests to level up.</p>
    <button class="cta" data-pop-close>Let\u2019s go</button>`,{onClose:()=>{o.welcome=null,y(),ho()}})}function l1({item:o,xp:e}){E.gift(),ho(.8),Ro(`<div class="pop-burst"></div>
    <div class="pop-kicker">Mystery box</div>
    ${o?`<div class="pop-bunny">${Po(o,120)}</div><h2>${d(o.name)}</h2><p class="muted">${o.mystery?"A box-only find! ":""}${d(co())} is wearing it now.</p>`:`<div class="pop-badge">${G("gem",64)}</div><h2>You own everything!</h2><div class="pop-reward">+${e} XP instead</div>`}
    <button class="cta" data-pop-close>Love it</button>`)}function fl(o,e="gift"){E.gift(),ho(.7);const t=[];o.xp&&t.push(`${G("gem",26)} <b>+${o.xp}</b> XP`),o.carrots&&t.push(`${G("carrot",26)} <b>+${o.carrots}</b> carrots`),o.pack&&t.push(`${G("pack",26)} <b>+1</b> sticker pack`);const a=t.join("<br>");Ro(`<div class="pop-badge open-gift">${G(e==="gift"?"gift":"box",72)}</div>
    <div class="pop-kicker">${e==="gift"?o.label==="Jackpot!"?"Jackpot!":"Today\u2019s gift":"Quest chest"}</div>
    <div class="pop-reward big">${a}</div>
    <button class="cta" data-pop-close>Thank you!</button>`)}function da(o){if(o)if(E.tick(),Uo(12),o.graduated)ho(.8),E.badge(),$("That one\u2019s yours now (\u02F6\u02C6\uA4B3\u02C6\u02F5)","heart");else if(o.first)ho(.6),$("First time! So proud of you (\uFF89\u25D5\u30EE\u25D5)\uFF89*:\uFF65\uFF9F\u2727","heart");else if(o.dare)la(),$("Dare done \u2727(\u02D8\u1D55\u02D8)","star");else if(o.month)ho(.8),$(`${o.month.name} complete!`,"cal");else if(o.ranks?.length){const e=o.ranks[o.ranks.length-1];E.badge(),$(`${e.ladder.name} rank ${e.rank} \u0669(\u02CA\u15DC\u02CB*)\u0648`,e.ladder.icon)}else o.bonus?(E.carrot(),$(`${Fi()} +10 bonus carrots`,"carrot")):o.group==="style"&&$(Fi(),"bow")}function yl(o){yo(`${ko("How did that feel?")}
    <p class="small muted mt8">Honest answer. Watching scary turn into fine is how it gets easier.</p>
    <div class="feel-grid mt12">${Object.entries(dn).map(([e,t])=>`<button class="btn" data-act="feel" data-id="${o}" data-k="${e}">${d(t)}</button>`).join("")}</div>`)}function Kl(o){o.classList.add("done"),o.disabled=!0,o.querySelector(".chk")?.classList.add("on");const e=o.closest(".glow-window")?.querySelector(".chip");e&&(e.textContent="combo done",e.className="chip sag")}async function F1(){const o=Es(),e=`lifestyle-save-${A()}.json`;try{const s=new File([o],e,{type:"application/json"});if(navigator.canShare?.({files:[s]})){await navigator.share({files:[s],title:"Lifestyle save file"}),Ml(),M();return}}catch(s){if(s?.name==="AbortError")return}const t=URL.createObjectURL(new Blob([o],{type:"application/json"})),a=document.createElement("a");a.href=t,a.download=e,document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(t),2e3),Ml(),$("Save file downloaded","floppy"),M()}function Ll(o){El(o)}function c1(o){if(o.dataset.hugged)return delete o.dataset.hugged;la(o),E.pop(),Uo(10),o.classList.remove("squish"),o.offsetWidth,o.classList.add("squish"),No("pet"),a2(o),O3(o)}const qn={pickPlan:()=>Zd(),closeSheet:()=>Jo(),streakInfo:()=>o1(),setPlan:o=>xn(+o.dataset.n),setPlanBtn:o=>{xn(+o.dataset.n),kn()&&Oo()},homeDay:o=>{P.homeDay=+o.dataset.day===re(new Date)?null:+o.dataset.day,M()},start:o=>{const e=i.active;e&&e.date===A()&&!confirm("Start fresh? Your unfinished session today will be replaced.")||ca(+o.dataset.day)},startFrom:o=>{const e=+o.dataset.n;if(e!==i.plan){if(!confirm(`Switch to Plan ${e} and start?`))return;xn(e)}i.active&&!confirm("Start fresh? Your unfinished session will be replaced.")||ca(+o.dataset.day)},resume:()=>{Ld(),Mn()},dropActive:()=>{i.active=null,y(),M()},cyc:o=>{P.cycleOff+=+o.dataset.d,M()},cell:o=>{const e=o.dataset.k,t=i.sessions[e],a=t?t.done?So($a(t)):"started":Yo().saved.has(e)?"saved by a bow":"nothing logged";$(`${vo(e,{weekday:"short",day:"numeric",month:"short"})} \xB7 ${a}`,t?.done?"heart":null)},exitSession:()=>{y(),Pn(),i.active&&$("Saved. Resume any time","bow")},back:()=>{const o=i.active;o?.step>0&&(o.step--,y(),Oo())},next:()=>jd(),finishHome:()=>{P.homeDay=null,Pn(),oe("home")},chk:o=>Dd(o),round:o=>{const e=i.active,t=+o.dataset.n,a=o.dataset.sec;e.rounds[a]=e.rounds[a]===t?t-1:t,y(),o.parentElement.querySelectorAll("button").forEach((s,n)=>s.classList.toggle("on",n<e.rounds[a])),Uo(10),E.pop()},up:o=>zd(o),wstep:o=>Td(o),goal:o=>Od(o),timer:o=>Cn({secs:+o.dataset.s,sides:+o.dataset.side,label:o.dataset.l,mode:"hold"}),rest:()=>Cn({secs:i.restSecs,label:"Rest between sets",mode:"rest"}),stopwatch:o=>Cn({label:o.dataset.l,mode:"watch",target:o.dataset.k}),tGo:()=>Wd(),tAdd:o=>_d(+o.dataset.s),tReset:()=>wl(),tSkip:()=>Vd(),tClose:()=>Nn(),tUse:()=>{const{key:o,secs:e}=Ud(),t=i.active;if(t&&o){t.test[o]={...t.test[o]||{},v:String(e)},y();const a=document.getElementById("tin-"+o);a&&(a.value=e)}Nn()},tseg:o=>{const e=i.active,t=o.dataset.k;e.test[t]={...e.test[t]||{},[o.dataset.f]:o.dataset.v},y(),o.parentElement.querySelectorAll("button").forEach(a=>a.classList.toggle("on",a===o))},tfeel:o=>{const e=i.active;e.test.feel=e.test.feel===o.dataset.v?null:o.dataset.v,y();const t=document.getElementById("session"),a=t.scrollTop;Oo(),t.scrollTop=a},cl:o=>{var e;const t=o.dataset.key,a=+o.dataset.i,s=(e=i.checks)[t]||(e[t]=[]);if(s[a]=!s[a],o.classList.toggle("on",s[a]),y(),!s[a])return;E.tick(),po(`list:${t}:${a}`)&&x(25,0,"",{origin:o});const n=(z.ref[t]||[]).length||6;s.filter(Boolean).length===n&&(ho(),$("Checklist complete!","crown"),lo())},plansSel:o=>{P.plansSel=+o.dataset.n,M()},plansView:o=>{P.plansView=o.dataset.k,M()},progPlan:o=>{P.progPlan=+o.dataset.n,M()},cardio:o=>{i.cardio=o.dataset.k,y(),M(),$(i.cardio==="bike"?"Spin bike it is":"Back to rowing",i.cardio==="bike"?"bike":"row")},theme:o=>{i.theme=o.dataset.k,y(),ka(),M()},unit:o=>{i.unit=o.dataset.k,y(),M()},restSecs:o=>{i.restSecs=+o.dataset.k,y(),M()},timers:()=>{i.timers=!i.timers,y(),M(),$(i.timers?"Timers on":"Timers hidden","timer")},sound:()=>{i.sound=!i.sound,y(),M(),i.sound&&E.step()},noWeights:()=>{if(oF(!ie()),Ht(),y(),$(ie()?"Bodyweight week. No weight boxes until Monday":"Weights are back","dumbbell"),kn()){const o=document.getElementById("session"),e=o.scrollTop;Oo(),o.scrollTop=e}else M()},getReady:()=>{i.getReady=!i.getReady,y(),M()},install:()=>Mc(),installHide:()=>Pc(),export:()=>F1(),copy:()=>{const o=Es();(navigator.clipboard?navigator.clipboard.writeText(o):Promise.reject()).then(()=>{i.lastBackup=A(),y(),$("Copied. Paste it somewhere safe","copy"),M()}).catch(()=>{const e=document.getElementById("imptxt");e.value=o,e.select(),$("Selected. Copy it from the box")})},importTxt:()=>Ll(document.getElementById("imptxt").value),wipe:()=>{!confirm("Delete everything? This can\u2019t be undone.")||!confirm("Really sure? Maybe save a backup first.")||(j2(),Ue(),$("Fresh start","heart"),oe("home"))},bodyLog:()=>{const o=document.getElementById("bodyNow");if(!LF(o.value)){$("Type your weight first","alert");return}o.value="",E.carrot(),$("Logged. Your line\u2019s updated","heart"),M()},bodyGoal:()=>{const o=document.getElementById("bodyGoal");if(!KF(o.value)){$("Type a goal first","alert");return}o.value="",E.step(),$("Goal saved","journey"),M()},bodyUndo:()=>{confirm("Remove your last weigh-in?")&&(vF(),M())},cardioSheet:()=>dd(),kindMetric:o=>{P.cardioMetric={...P.cardioMetric||{},[o.dataset.kind]:o.dataset.k},M()},xcType:o=>{P.xcType=o.dataset.k,o.parentElement.querySelectorAll("button").forEach(e=>e.classList.toggle("on",e===o)),document.querySelector("[data-act=saveCardio]").dataset.type=o.dataset.k},xcEffort:o=>o.parentElement.querySelectorAll("button").forEach(e=>e.classList.toggle("on",e===o)),saveCardio:o=>{const e=a=>document.getElementById(a).value,t=$F({machine:o.dataset.type,date:e("xcDate")||A(),min:e("xcMin"),km:e("xcKm"),intervals:document.querySelector("[data-act=xcEffort].on")?.dataset.k==="intervals",note:e("xcNote")});if(!t){$("Add a time or a distance","alert");return}Jo(),E.step(),$(`Cardio logged \xB7 +${t.xp} XP`,"heart"),M()},delCardio:o=>{confirm("Remove this cardio log?")&&(MF(+o.dataset.i),M())},glowTick:o=>{const e=za(o.dataset.id,o.dataset.group);e.on?da(e):E.untick(),M()},identityIdea:o=>{gi([...C().identity,Ii[+o.dataset.i]]),$("Saved. Make it yours in Edit","heart"),M()},identitySave:()=>{gi([...document.querySelectorAll("[data-identity]")].map(o=>o.value)),P.glowEdit=!1,$("Saved","heart"),M()},proofAdd:()=>{const o=document.getElementById("proofNew");if(!jF(o.value)){$("Write a moment first","alert");return}E.badge(),la(),$("Filed. That\u2019s real evidence (\u2022\u0300\u1D17\u2022\u0301)\u0648","scroll"),M()},proofRemove:o=>{confirm("Remove this moment?")&&(QF(+o.dataset.i),M())},proofAll:()=>{P.proofAll=!P.proofAll,M()},gymFit:()=>da(qd()),goFemme:()=>{P.glowView="femme",oe("glow")},glowView:o=>{P.glowView=o.dataset.k,M()},ladder:o=>{P.ladder=P.ladder===o.dataset.id?null:o.dataset.id,M()},stepTick:o=>{const e=ci(o.dataset.id);if(e){if(!e.on){E.untick(),M();return}E.badge(),ho(e.complete?1:.6),e.complete&&$(`${e.ladder.name} ladder done!`,"crown"),M(),yl(o.dataset.id)}},feel:o=>{DF(o.dataset.id,o.dataset.k),Jo(),$(o.dataset.k==="scary"||o.dataset.k==="awkward"?"You did it anyway. That\u2019s the brave part":"Noted. Remember that next time","heart"),M()},dareDo:()=>{const o=_t(),e=ui();e&&(da({...e,dare:!0,first:!1,bonus:!1,graduated:!1}),M(),o?.kind==="step"&&yl(o.id))},dareSwap:()=>{SF()&&$("Swapped. This one instead","star"),M()},planAdd:()=>{const o=CF(document.getElementById("planAnchor").value,document.getElementById("planWin").value);$(o?"Plan set. Same cue, same win":"You already have that one",o?"heart":"alert"),M()},planRemove:o=>{NF(+o.dataset.i),M()},postWin:o=>{const e=za(o.dataset.id,"style");e.on&&(da(e),Kl(o))},postDare:o=>{ui()&&(da({dare:!0}),Kl(o))},feed:o=>{const e=o.dataset.k==="feast";if(!ic(e)){E.nope(),$("Not enough carrots yet","carrot");return}E.carrot(),la(),$(e?`${co()} is in heaven (\u0E51\u02C3\u1D17\u02C2)\uFEED`:`${co()} loved that (\u3063\u02D8\u06A1\u02D8\u03C2)`,"macaron"),M()},yearSheet:()=>Kc(),stars:o=>{const e=Fc(+o.dataset.n);if(!e){E.nope(),$("Not enough carrots yet","carrot");return}e.finished?(E.levelUp(),ho(.8),$("Constellation finished \u2606\uFF9F.*\uFF65\uFF61\uFF9F","star")):(E.carrot(),$(e.count===1?"A star lights up":`${e.count} stars light up`,"star")),M()},cake:()=>{if(!lc()){E.nope(),$(L().cakes>=3?"Cake shelf is full":"Not enough carrots yet","carrot");return}E.gift(),$("Cake saved for your next session","cake"),M()},glowEdit:()=>{P.glowEdit=!P.glowEdit,M()},glowHide:o=>{XF(o.dataset.id),M()},glowRemove:o=>{confirm("Delete this from your list? Past ticks stay in your history.")&&(OF(o.dataset.id),M())},glowAdd:o=>{const e=document.getElementById(`glowNew-${o.dataset.group}`);if(!zF(e.value,o.dataset.group,document.getElementById("glowLadder")?.value)){$("Type something first","alert");return}M()},customNew:()=>ji(null),customEdit:o=>ji(o.dataset.id),customStart:o=>{const e=i.active;e&&e.date===A()&&!confirm("Start fresh? Your unfinished session today will be replaced.")||ca(re(new Date),o.dataset.id)},cwAdd:()=>Xc(),cwRemove:o=>Yc(+o.dataset.i),cwType:o=>Hc(+o.dataset.i,o.dataset.k==="hold"),cwWarmup:()=>Wc(),cwSave:()=>{const o=Vc();if(o){$(o,"alert");return}Jo(),E.step(),$("Workout saved","scroll"),M()},cwDelete:()=>{confirm("Delete this workout? Sessions you already did stay in your history.")&&(_c(),Jo(),M())},goMine:()=>{P.plansView="mine",oe("plans")},pet:o=>c1(o),gift:o=>{const e=rc();e&&(o.remove(),fl(e,"gift"),kn()||M())},chest:o=>{const e=yF();e&&(o.remove(),fl(e,"chest"),M())},mapPlan:o=>e1(+o.dataset.n),badge:o=>{const e=$o.find(n=>n.id===o.dataset.id),t=i.game.badges[e.id],a=!t&&ft(e),s=e.reward&&io(e.reward);yo(`${ko(e.name)}
      <div class="badge-sheet ${t?"":"locked"}">${G(e.icon,72)}</div>
      <p class="center">${e.desc}</p>
      ${a?`<div class="sheet-progress"><span class="mini-bar big"><i style="width:${Math.round(a[0]/a[1]*100)}%"></i></span><b>${a[0]} / ${a[1]}</b></div>`:""}
      <p class="center tiny muted">${t?`Unlocked ${vo(t,{day:"numeric",month:"long",year:"numeric"})}`:`Worth ${e.carrots} carrots`}</p>
      ${s?`<div class="pop-unlock"><span class="nr-prev">${Po(s,48)}</span><span>${t?"Came with":"Comes with"}<b>${d(s.name)}</b></span></div>`:""}`)},titleSheet:()=>qc(),prestigeSheet:()=>{const o=i.game.prestige;yo(`${ko("Prestige")}
      <div class="badge-sheet">${G("heart",72)}</div>
      <p class="center">At the end of level 50 you go back to level 1 with a fresh climb ahead. You keep everything: wardrobe, badges, titles, carrots, history.</p>
      <p class="center mt8"><b>You get:</b> a heart showing <b>${o+1}</b> next to your level, ${G("carrot",16)} 500 carrots, and new legendary titles at prestige 1, 3, 5, 10, 25, 100, 444, 1,000 and 4,444.</p>
      <p class="center tiny muted mt8">It happens by itself when you fill the level 50 bar.</p>`)},prestige:()=>{pe().max&&GF()&&(Jo(),M())},setTitle:o=>{const e=o.dataset.id||null;if(e&&!i.game.titles[e]){E.nope(),$("Not unlocked yet","lock");return}i.game.title=e,y(),E.pop(),Jo(),M()},shopTab:o=>{P.shopTab=o.dataset.k,M()},shop:o=>{const e=io(o.dataset.id),t=Oa(e);ac(e.id)?(t.owned?E.pop():E.carrot(),la(o)):(E.nope(),t.special?$(t.special.toast,t.special.icon):t.mystery?$("Only found in the mystery box","gift"):t.badge?$(`Earn the \u201C${t.badge.name}\u201D badge to unlock`,"trophy"):t.locked?$(`Unlocks at level ${e.level}`,"lock"):$("Not enough carrots yet","carrot")),M()},mystery:()=>{const o=sc();if(!o){E.nope(),$("Not enough carrots yet","carrot");return}l1(o),M()},buyBow:()=>{nc()?(E.badge(),$("Streak bow added","bow")):(E.nope(),$("Not enough carrots yet","carrot")),M()}};function d1(){document.addEventListener("click",o=>{Ui();const e=o.target.closest("[data-act],[data-tab]");if(!e){o.target.id==="sheet"&&Jo(),o.target.id==="timer"&&Nn();return}if(e.dataset.tab){e.closest("#tabs")&&E.pop(),oe(e.dataset.tab);return}qn[e.dataset.act]?.(e,o)}),document.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&o.target.matches?.("[role=button][data-act]")&&(o.preventDefault(),o.target.click())}),document.addEventListener("input",o=>{var e,t;const a=o.target,s=i.active;if(a.dataset.wt!=null&&s)Qd(a);else if(a.dataset.row!=null&&s){const n=(e=s.row)[t=a.dataset.row]||(e[t]={});n[a.dataset.f]=a.value,y()}else if(a.dataset.test&&s){const n=a.dataset.test;s.test[n]={...s.test[n]||{},[a.dataset.f]:a.value},y()}else a.dataset.set==="name"?(i.name=a.value.trim(),y()):a.dataset.set==="bunny"&&t1(a.value)}),document.addEventListener("change",o=>{const e=o.target;if(e.dataset.wt!=null&&Gl(e),e.dataset.week!=null&&(i.custom.week[+e.dataset.week]=e.value||null,y(),$(e.value?"Added to your week":"Rest day","cal")),e.id==="impf"){const t=e.files[0];if(!t)return;const a=new FileReader;a.onload=()=>Ll(a.result),a.readAsText(t)}})}const he={db:null,timer:null,lastDay:null};function p1(){return he.db||(he.db=new Promise((o,e)=>{if(!("indexedDB"in window))return e(new Error("no indexedDB"));const t=indexedDB.open("lifestyle-backups",1);t.onupgradeneeded=()=>t.result.createObjectStore("snaps",{keyPath:"id"}),t.onsuccess=()=>o(t.result),t.onerror=()=>e(t.error),t.onblocked=()=>e(new Error("blocked"))}),he.db.catch(()=>he.db=null)),he.db}function as(o,e){return p1().then(t=>new Promise((a,s)=>{const n=t.transaction("snaps",o),r=n.objectStore("snaps");let l;Promise.resolve(e(r,F=>l=F)),n.oncomplete=()=>a(l),n.onerror=()=>s(n.error),n.onabort=()=>s(n.error)}))}function ss(o,e,t,a){return as("readwrite",s=>s.put({id:o,kind:e,at:Date.now(),summary:a,data:t})).catch(()=>{})}function pa(){return as("readonly",(o,e)=>{const t=o.getAll();t.onsuccess=()=>e((t.result||[]).sort((a,s)=>s.at-a.at))}).catch(()=>[])}function ua(o){return as("readonly",(e,t)=>{const a=e.get(o);a.onsuccess=()=>t(a.result||null)}).catch(()=>null)}function u1(o){const e=new Set(["latest"]),t=s=>o.filter(n=>n.kind===s).sort((n,r)=>r.at-n.at);t("day").slice(0,7).forEach(s=>e.add(s.id)),t("week").slice(0,4).forEach(s=>e.add(s.id)),t("before").slice(0,6).forEach(s=>e.add(s.id));const a=o.filter(s=>!e.has(s.id));return a.length?as("readwrite",s=>a.forEach(n=>s.delete(n.id))).catch(()=>{}):null}function vl(){uo.blocked||(clearTimeout(he.timer),he.timer=setTimeout(kl,2500))}async function kl(){if(uo.blocked||!(To().length>0||i.game&&i.game.xp>0))return;let e;try{e=JSON.stringify(i)}catch{return}const t=Bt(),a=A(),s=O(Lo(new Date));await ss("latest","latest",e,t),he.lastDay!==a&&(he.lastDay=a,await ss("day:"+a,"day",e,t),await ua("week:"+s)||await ss("week:"+s,"week",e,t),u1(await pa()))}function jn(o){try{const e=JSON.stringify(i);return To().length>0||i.game?.xp>0?ss(`before:${Date.now()}`,"before",e,{...Bt(),reason:o}):Promise.resolve()}catch{return Promise.resolve()}}function ns(o){const e=new Date(o.at),t=e.toLocaleDateString(void 0,{weekday:"short",day:"numeric",month:"short"}),a=e.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});return{kind:o.kind==="latest"?"Most recent":o.kind==="day"?"Daily":o.kind==="week"?"Weekly":o.summary?.reason==="before-wipe"?"Before delete":"Before loading a file",when:`${t}, ${a}`}}const rs={persisted:null};async function $l(){try{if(!navigator.storage?.persist)return;rs.persisted=await navigator.storage.persisted?.()||await navigator.storage.persist()}catch{}}async function G1(){try{rs.persisted=await navigator.storage?.persisted?.()??null}catch{}}const Qn={pending:null,undoId:null};function Ml(){i.lastBackup=A(),i.saveNudge=null,y(),$l()}const is=o=>o?be(ao(o),new Date):null;function m1(){const o=is(i.lastBackup),e=i.lastLoad&&is(i.lastLoad.date)<=1;return`<div class="sec-t">Save file</div>
  <div class="card savecard">
    <p class="small muted">Everything (sessions, ${d(co())}, your wardrobe, garden and scrapbook) is in one file. Keep it in Files, Drive or iCloud, and load it on any phone.</p>
    <div class="save-status ${o==null||o>=7?"warn":"ok"}">${G(o==null||o>=7?"alert":"floppy",20)}<span>${o==null?"No save file yet":`Last saved <b>${o===0?"today":o===1?"yesterday":o+" days ago"}</b>`}</span></div>
    <button class="cta mt12" data-act="export">${G("floppy",20)} Save to a file</button>
    <label class="btn mt8 full" for="impf">${G("box",18)} Load a save file</label>
    <input id="impf" type="file" accept=".json,application/json,text/plain" hidden>
    ${e?`<button class="btn mt8 full" data-act="undoLoad">${G("back",18)} Undo loading that file</button>`:""}
    <details class="how mt12"><summary>${G("copy",16)}Copy or paste as text${B("down",{cls:"chev"})}</summary>
      <div class="howIn">
        <button class="btn full" data-act="copy">${G("copy",18)}Copy save as text</button>
        <div class="field"><textarea class="inp" id="imptxt" placeholder="\u2026or paste save text here"></textarea></div>
        <button class="btn mt8 full" data-act="importTxt">Load from text</button>
      </div>
    </details>
  </div>
  <div class="sec-t">Automatic backups</div>
  <div class="card">
    <p class="small muted">This phone also keeps its own copies: the last 7 days and 4 weeks. Handy if something goes wrong, but they don't move to a new phone. Use a save file for that.</p>
    <div id="snaplist" class="snaplist"><p class="tiny muted">Looking\u2026</p></div>
    <p class="tiny muted mt8" id="persistLine">${Pl()}</p>
  </div>`}function Pl(){return rs.persisted===!0?`${G("check",12)} Storage protection is on. The browser won't clear your data to free up space.`:rs.persisted===!1?"Storage protection isn't on yet. Installing the app and saving a file usually turns it on.":""}async function h1(){const o=document.getElementById("snaplist");if(!o)return;const e=(await pa()).filter(a=>a.id!=="latest"||!0);if(!document.getElementById("snaplist"))return;o.innerHTML=e.length?e.slice(0,12).map(a=>{const s=ns(a),n=a.summary||{};return`<div class="snap-row"><span class="grow"><b>${s.kind}</b><small>${d(s.when)} \xB7 ${n.sessions??"?"} sessions \xB7 Lv ${n.level??"?"}</small></span><button class="btn" data-act="snapRestore" data-id="${d(a.id)}">Restore</button></div>`}).join(""):'<p class="tiny muted">None yet. The first one is made after your next session.</p>';const t=document.getElementById("persistLine");t&&(t.innerHTML=Pl())}function I1(o,e){const t=(a,s,n)=>`<div class="cmp-row"><span>${a}</span><b>${s??"\u2013"}</b>${e?`<span class="muted">${n??"\u2013"}</span>`:""}</div>`;return`<div class="cmp">
    ${e?'<div class="cmp-row head"><span></span><b>File</b><span class="muted">This phone</span></div>':""}
    ${t("Sessions",o.sessions,e?.sessions)}
    ${t("Level",`${o.level}${o.prestige?` \u2661${o.prestige}`:""}`,e&&`${e.level}${e.prestige?` \u2661${e.prestige}`:""}`)}
    ${t("Carrots",o.carrots,e?.carrots)}
    ${t("Plan",o.plan,e?.plan)}
    ${t("Bunny",d(o.bunny),e&&d(e.bunny))}
    ${t("Last session",o.last?vo(o.last,{day:"numeric",month:"short",year:"numeric"}):"none",e&&(e.last?vo(e.last,{day:"numeric",month:"short",year:"numeric"}):"none"))}
  </div>`}function El(o){let e;try{e=yr(o)}catch(r){E.nope(),$(r.message||"That doesn\u2019t look like a save file","alert");return}Qn.pending=e;const t=Bt(e),a=Bt(),s=e._meta||{},n=a.sessions>t.sessions;yo(`${ko("Load this save file?")}
    ${s.exported?`<p class="small muted mt4">Saved ${new Date(s.exported).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"})}</p>`:""}
    ${I1(t,a)}
    ${n?Zo("but","alert","This file has <b>fewer sessions</b> than this phone. Loading it replaces what's here."):""}
    <p class="tiny muted mt8">What's on this phone now is backed up first, so you can undo this.</p>
    <button class="cta mt12" data-act="confirmLoad">${G("box",20)} Load it</button>
    <button class="btn mt8 full" data-act="closeSheet">Cancel</button>`)}async function g1(){const o=Qn.pending;if(!o)return Jo();Qn.pending=null,await jn("before-load");const e=await pa(),t=e.find(s=>s.kind==="before"),a={date:A(),undo:t?.id||null};fr(o),i.lastLoad=a,i.lastBackup=i.lastBackup||A(),y(),Ue(),ka(),Jo(),E.badge(),$("Save file loaded","bow"),oe("home")}async function b1(){const o=i.lastLoad?.undo,e=o&&await ua(o);if(!e)return $("Couldn't find the copy from before","alert");confirm("Go back to what was on this phone before you loaded that file?")&&ls(e.data,"Back to how it was")}function ls(o,e){try{const t=yr(o);jn("before-load"),fr(t),i.lastLoad=null,uo.blocked=!1,uo.failed=null,y(),Ue(),ka(),Jo(),Rl(),$(e||"Restored","bow"),oe("home")}catch(t){$(t.message||"That backup couldn't be read","alert")}}async function J1(o){const e=await ua(o);if(!e)return $("That backup is gone","alert");const t=ns(e),a=e.summary||{};confirm(`Restore the ${t.kind.toLowerCase()} backup from ${t.when}?
${a.sessions} sessions, level ${a.level}.

What's here now is backed up first.`)&&ls(e.data,"Backup restored")}function w1(){if(To().length<3)return"";const e=is(i.lastBackup);return e!=null&&e<7||i.saveNudge&&is(i.saveNudge)<3||i.lastBackup&&!To().some(t=>t>=i.lastBackup)?"":`<div class="save-nudge">${G("floppy",24)}<div class="grow"><b>${e==null?"Make your first save file":`Your save file is ${e} days old`}</b><small>One tap. Keeps ${d(co())} safe if this phone ever loses it.</small></div>
    <div class="sn-btns"><button class="btn solid" data-act="export">Save</button><button class="btn ghostbtn" data-act="snoozeSave" aria-label="Remind me later">Later</button></div></div>`}function f1(){const o=uo.failed;if(!o)return;let e=document.getElementById("rescue");e||(e=document.createElement("div"),e.id="rescue",e.className="rescue",document.body.appendChild(e)),e.innerHTML=`<div class="rescue-card">
    <div class="pop-bunny">${ce({mood:"sad",size:96})}</div>
    <h2>Your saved data couldn't be read</h2>
    <p class="small muted">Nothing has been deleted. The app has stopped saving so the old data stays as it is. Pick what to do:</p>
    <div id="rescueSnaps" class="snaplist mt12"><p class="tiny muted">Looking for automatic backups\u2026</p></div>
    <label class="btn mt8 full" for="impf2">${G("box",18)} Load a save file</label>
    <input id="impf2" type="file" accept=".json,application/json,text/plain" hidden>
    <button class="btn mt8 full" data-act="rescueDownload">${G("floppy",18)} Download the unreadable data</button>
    <button class="btn danger mt8 full" data-act="rescueFresh">Start fresh (keeps a copy of the old data)</button>
    <p class="tiny muted mt8">Error: ${d(o.error)}</p>
  </div>`,e.querySelector("#impf2").addEventListener("change",t=>{const a=t.target.files[0];if(!a)return;const s=new FileReader;s.onload=()=>ls(s.result,"Save file loaded"),s.readAsText(a)}),pa().then(t=>{const a=document.getElementById("rescueSnaps");a&&(a.innerHTML=t.length?t.slice(0,5).map(s=>{const n=ns(s);return`<div class="snap-row"><span class="grow"><b>${n.kind}</b><small>${d(n.when)} \xB7 ${s.summary?.sessions??"?"} sessions</small></span><button class="btn solid" data-act="snapRestore" data-id="${d(s.id)}">Restore</button></div>`}).join(""):'<p class="tiny muted">No automatic backups on this phone.</p>')})}function Rl(){document.getElementById("rescue")?.remove()}function y1(){const o=uo.failed?.raw||localStorage.getItem(pt+".unreadable")||"",e=document.createElement("a");e.href=URL.createObjectURL(new Blob([o],{type:"text/plain"})),e.download=`lifestyle-unreadable-${A()}.txt`,document.body.appendChild(e),e.click(),e.remove()}function K1(){confirm("Start fresh? The unreadable data stays in a separate slot on this phone and in the file you can download.")&&(uo.blocked=!1,uo.failed=null,i=Ee(null),Ps(),Ue(),y(),Rl(),oe("home"))}async function L1(){if(uo.failed||To().length>0||(i.game?.xp||0)>0)return;const o=await ua("latest");o?.summary?.sessions&&Ro(`<div class="pop-bunny">${ce({mood:"love",size:110,cls:"bounce"})}</div>
    <div class="pop-kicker">Found your progress</div>
    <h2>Restore your backup?</h2>
    <p class="muted">This phone has a copy from ${d(ns(o).when)}: ${o.summary.sessions} sessions, level ${o.summary.level}.</p>
    <button class="cta" data-act="snapRestoreNow" data-id="latest" data-pop-close>Restore it</button>
    <button class="btn mt8 full" data-pop-close>No, start fresh</button>`)}const Tn=pt+".log";function Fs(o,e){try{const t=JSON.parse(localStorage.getItem(Tn)||"[]");t.push({at:new Date().toISOString(),kind:o,msg:String(e?.message||e).slice(0,300),stack:String(e?.stack||"").split(`
`).slice(0,4).join(" | ").slice(0,500)}),localStorage.setItem(Tn,JSON.stringify(t.slice(-15)))}catch{}}function $p(){try{return JSON.parse(localStorage.getItem(Tn)||"[]")}catch{return[]}}window.addEventListener("error",o=>Fs("error",o.error||o.message)),window.addEventListener("unhandledrejection",o=>Fs("promise",o.reason));function Al(o,e){Fs(e,o),console.error(o);const t=e==="session"?document.getElementById("session"):Ke();t&&(t.innerHTML=`<div class="wrap"><div class="card crash mt16">
    <div class="pop-bunny">${(()=>{try{return ce({mood:"sad",size:90})}catch{return""}})()}</div>
    <h2>Oops, this screen tripped over</h2>
    <p class="small muted">Your data is safe. You can save a file to be extra sure, then reload.</p>
    <button class="cta mt12" data-act="export">Save to a file</button>
    <button class="btn mt8 full" onclick="location.reload()">Reload</button>
    ${e==="session"?'<button class="btn mt8 full" data-act="exitSession">Close the session</button>':'<button class="btn mt8 full" data-tab="home">Go to Today</button>'}
    <p class="tiny muted mt8">${d(String(o?.message||o))}</p>
  </div></div>`)}window.addEventListener("storage",o=>{if(!(o.key!==pt||!o.newValue||uo.blocked))try{const e=Ee(JSON.parse(o.newValue));if(Le()){uo.otherTab=!0,$("Updated in another tab. Close the session to see it","alert");return}i=e,Ue(),M()}catch{}});const zn=[[1,"Empty","sleepy"],[2,"Low","sad"],[3,"Okay","idle"],[4,"Good","happy"],[5,"Buzzing","pumped"]],Bl=[[1,"Too easy"],[2,"Comfy"],[3,"Just right"],[4,"Tough"],[5,"Brutal"]],Cl=o=>zn.find(e=>e[0]===o)?.[1]||"",v1=o=>Bl.find(e=>e[0]===o)?.[1]||"",On=()=>Ye()||!!i.active?.gentle;function k1(){const o=i.active,e=i.sessions[o.date];e?.energy&&(o.energy=e.energy)}function $1(o){if(o.energy){const e=o.gentle;return`<div class="checkin done-in">
      <span class="ci-face">${ce({mood:zn[o.energy-1][2],size:34,fur:L().fur,outfit:"none"})}</span>
      <span class="grow"><b>Energy: ${Cl(o.energy)}</b><small>${e?"Gentle mode is on: fewer sets, shorter holds":o.energy<=2?"Low battery? Gentle mode trims everything like an easy week":"Lovely. Full session it is"}</small></span>
      ${o.energy<=2||e?`<button class="btn ${e?"":"solid"}" data-act="gentle">${e?"Full session":"Go gentle"}</button>`:`<button class="btn ghostbtn" data-act="energyRedo" aria-label="Change energy">${B("back",{size:14})}</button>`}
    </div>`}return`<div class="checkin">
    <div class="between"><b>How's your energy?</b><span class="tiny muted">+5 XP</span></div>
    <div class="ci-row">${zn.map(([e,t,a])=>`<button class="ci-btn" data-act="energy" data-n="${e}" aria-label="${t}">${ce({mood:a,size:40,fur:L().fur,outfit:"none"})}<small>${t}</small></button>`).join("")}</div>
  </div>`}function M1(o){const e=i.active;e&&(e.energy=o,i.sessions[e.date]={...i.sessions[e.date]||{},energy:o},po(`energy:${e.date}`)&&(x(5,0,"Energy check-in"),ke(2,"checkin")),y(),E.tick(),Oo())}function P1(){const o=i.active;o&&(o.gentle=!o.gentle,i.sessions[o.date]={...i.sessions[o.date]||{},gentle:o.gentle},y(),$(o.gentle?"Gentle mode on. Still counts for everything":"Full session",o.gentle?"moon":"fire"),Oo())}function Nl(o){const e=i.sessions[o.date]||{};return`<div class="card effort">
    <div class="between"><h2>How did that feel?</h2>${e.feel?`<span class="chip sag">${v1(e.feel)}</span>`:'<span class="tiny muted">+5 XP</span>'}</div>
    <div class="ef-row">${Bl.map(([t,a])=>`<button class="ef-btn ${e.feel===t?"on":""}" data-act="effort" data-n="${t}">${a}</button>`).join("")}</div>
  </div>`}function E1(o){const e=i.active?.date||A(),t=i.sessions[e]={...i.sessions[e]||{},feel:o};po(`effort:${e}`)&&x(5,0,"Logged how it felt"),y(),E.tick();const a=document.querySelector(".effort");a?a.outerHTML=Nl({date:e}):Oo()}function R1(){const o=To().filter(m=>i.sessions[m].energy||i.sessions[m].feel);if(!o.length)return`<div class="sec-t">Energy and effort</div><div class="card">${le("heart","Rate your energy at the start of a session and how it felt at the end. Your patterns show up here.")}</div>`;const e=o.slice(-14),t=(m,J)=>{const K=m.map(v=>i.sessions[v][J]).filter(Boolean);return K.length?K.reduce((v,Q)=>v+Q,0)/K.length:null},a=m=>{const J=new Date;return O(new Date(J.getFullYear(),J.getMonth()+m,1)).slice(0,7)},s=o.filter(m=>m.startsWith(a(0))),n=o.filter(m=>m.startsWith(a(-1))),r=t(s,"energy"),l=t(n,"energy"),F=To().filter(m=>m.startsWith(a(0))&&i.sessions[m].gentle).length,c={};o.forEach(m=>{const J=i.sessions[m].energy;if(!J)return;const K=re(ao(m));(c[K]=c[K]||[]).push(J)});let p=null;Object.entries(c).forEach(([m,J])=>{if(J.length<2)return;const K=J.reduce((v,Q)=>v+Q,0)/J.length;(!p||K>p.m)&&(p={w:+m,m:K})});const b=o.filter(m=>i.sessions[m].energy<=2&&i.sessions[m].feel&&i.sessions[m].feel<=3).length,I=m=>{const J=i.sessions[m];return`<div class="tb"><i class="e e${J.energy||0}" style="height:${(J.energy||0)*18}%"></i><i class="f" style="height:${(J.feel||0)*18}%"></i><small>${vo(m,{day:"numeric"})}</small></div>`};return`<div class="sec-t">Energy and effort</div>
  <div class="card">
    <div class="trend-bars">${e.map(I).join("")}</div>
    <div class="tlegend tiny muted"><span><i class="lg e"></i>energy before</span><span><i class="lg f"></i>how hard it felt</span></div>
    <div class="tiles mt12">
      <div class="tile"><div class="v">${r?r.toFixed(1):"\u2013"}</div><div class="l">energy this month</div></div>
      <div class="tile"><div class="v">${l?l.toFixed(1):"\u2013"}</div><div class="l">last month</div></div>
      <div class="tile"><div class="v">${F}</div><div class="l">gentle sessions</div></div>
    </div>
    ${p?`<p class="small mt12">${G("sun",16)} You usually feel best on <b>${ne[p.w]}s</b>.</p>`:""}
    ${b?`<p class="small mt4">${G("heart",16)} <b>${b}</b> ${b===1?"time":"times"} you started on low energy and it still felt fine. Showing up works.</p>`:""}
  </div>`}const rt=864e5,U={W:320,H:168,L:14,R:306,T:16,B:136},cs={ema:"#F6AFC4",lowess:"#DDB0E6"};function Xo(){const o=i.body;return Array.isArray(o.mini)||(o.mini=[]),o.band==null&&(o.band=!0),o}const A1=()=>i.body.log.map(o=>[ao(o.d).getTime(),+o.w]).sort((o,e)=>o[0]-e[0]);function ds(){const o=Xo(),e=o.log[0]?.w;if(e==null)return!0;if(o.goal!=null)return o.goal<=e;const t=o.mini.find(a=>a.w!=null);return t?t.w<=e:!0}function B1(o,e=10){let t=o[0][1];return o.map(([a,s],n)=>(n&&(t+=(1-Math.exp(-(a-o[n-1][0])/rt/e))*(s-t)),[a,t]))}function C1(o,e=.6){const t=o.length,a=Math.max(3,Math.ceil(e*t)),s=o.map(l=>l[0]/rt);let n=0;return{fit:o.map(([,],l)=>{const F=s[l],c=s.map(so=>Math.abs(so-F)),p=c.slice().sort((so,S)=>so-S)[Math.min(t-1,a-1)]||1;let b=0,I=0,m=0,J=0,K=0;o.forEach(([,so],S)=>{const N=c[S]/(p*1.0001),no=N<1?(1-N**3)**3:0;b+=no,I+=no*s[S],m+=no*so,J+=no*s[S]**2,K+=no*s[S]*so});const v=b*J-I*I,Q=Math.abs(v)<1e-9?0:(b*K-I*m)/v,go=(m-Q*I)/(b||1);return l===t-1&&(n=Q),[o[l][0],go+Q*F]}),slope:n}}function N1(o,e=28){const t=o[o.length-1][0],a=o.filter(([p])=>t-p<=e*rt);if(a.length<2)return 0;const s=a.map(p=>p[0]/rt),n=a.map(p=>p[1]),r=s.reduce((p,b)=>p+b)/s.length,l=n.reduce((p,b)=>p+b)/n.length;let F=0,c=0;return s.forEach((p,b)=>(F+=(p-r)*(n[b]-l),c+=(p-r)**2)),c?F/c:0}function Dl(o,e,t,a){const s=i.unit==="kg"?1:2.2046,n=1.1*s/7;e=Math.max(-n,Math.min(n,e));const r=a?e<-.004*s:e>.004*s,l=r&&t!=null?Math.min(365,Math.abs((t-o[1])/e)):42,F=r?e:0,c=[o];for(let p=7;p<l;p+=7)c.push([o[0]+p*rt,o[1]+F*p]);return c.push([o[0]+l*rt,o[1]+F*l]),{pts:c,heading:r}}function D1(){const o=A1(),e=Xo();if(o.length<3)return{pts:o,ema:null,low:null};const t=ds(),a=e.goal!=null?e.goal:null,s=B1(o),n=C1(o),r=o[o.length-1][0],l=Dl([r,s[s.length-1][1]],N1(s),a,t),F=Dl([r,n.fit[n.fit.length-1][1]],n.slope,a,t);return{pts:o,down:t,ema:s,emaP:l,low:n.fit,lowP:F}}function Xn(o,e,t){if(!o)return null;const a=o.pts;for(let s=1;s<a.length;s++){const[n,r]=a[s-1],[l,F]=a[s];if(t&&r>=e&&F<=e||!t&&r<=e&&F>=e)return n+(e-r)/(F-r||1)*(l-n)}return null}function xl(){const o=Xo().height;if(!o)return null;const e=(o/100)**2,t=i.unit==="kg"?1:2.2046;return[18.5*e*t,24.9*e*t]}function ps(o,e){const t=new Date(o);return new Date(t.getFullYear(),t.getMonth()+e,t.getDate()).getTime()}function x1(){const o=Xo(),e=D1(),t=e.pts;if(!t.length)return"";const a=t[0][0],s=t[t.length-1][0],n=Date.now(),r=Math.max(e.emaP?e.emaP.pts.at(-1)[0]:0,e.lowP?e.lowP.pts.at(-1)[0]:0),l=[];let F=a;for(;F<=Math.max(s,n,Math.min(r,ps(Math.max(s,n),6)))&&l.length<40;)l.push([F,ps(F,3)]),F=ps(F,3);const c=Math.max(0,l.findIndex(([S,N])=>s>=S&&s<N)),p=t.map(S=>S[1]);o.goal!=null&&p.push(o.goal),o.mini.forEach(S=>S.w!=null&&p.push(S.w)),[e.emaP,e.lowP].forEach(S=>S&&S.pts.forEach(N=>p.push(N[1])));let b=Math.min(...p),I=Math.max(...p);I-b<1&&(b-=1,I+=1);const m=(I-b)*.12;b-=m,I+=m;const J=S=>U.T+(1-(S-b)/(I-b))*(U.B-U.T),K=o.band&&xl(),v=ds(),Q=(S,N)=>S.map((no,V)=>`${V?"L":"M"}${N(no[0]).toFixed(1)} ${J(no[1]).toFixed(1)}`).join(" "),go=l.map(([S,N],no)=>{const V=X=>U.L+(X-S)/(N-S)*(U.R-U.L),Ko="bcg"+no;let eo=`<defs><linearGradient id="${Ko}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F48FAE" stop-opacity=".32"/><stop offset="1" stop-color="#F48FAE" stop-opacity="0"/></linearGradient><clipPath id="${Ko}c"><rect x="${U.L}" y="0" width="${U.R-U.L}" height="${U.H}"/></clipPath></defs>`;const wo=new Date(S),Do=new Date(wo.getFullYear(),wo.getMonth()+1,1).getTime();wo.getDate()!==1&&V(Do)>U.L+30&&(eo+=`<text x="${U.L+3}" y="${U.B+18}" class="ax">${wo.toLocaleDateString(void 0,{month:"short"})}</text>`);for(let X=0;X<4;X++){const fo=new Date(wo.getFullYear(),wo.getMonth()+X,1).getTime();if(fo<S||fo>=N)continue;const Ie=V(fo);eo+=`<line x1="${Ie}" x2="${Ie}" y1="${U.T-6}" y2="${U.B}" class="bc-grid"/>`,Ie<U.R-24&&(eo+=`<text x="${Ie+3}" y="${U.B+18}" class="ax">${new Date(fo).toLocaleDateString(void 0,{month:"short"})}</text>`)}if(n>=S&&n<N&&(eo+=`<line x1="${V(n)}" x2="${V(n)}" y1="${U.T-6}" y2="${U.B}" class="bc-today"/>`),eo+=`<g clip-path="url(#${Ko}c)">`,K){const X=Math.max(U.T-6,J(K[1])),fo=Math.min(U.B,J(K[0]));fo>X&&(eo+=`<rect x="${U.L}" y="${X}" width="${U.R-U.L}" height="${fo-X}" class="bc-band"/>`)}o.mini.forEach(X=>{X.w!=null&&(eo+=`<line x1="${U.L}" x2="${U.R}" y1="${J(X.w)}" y2="${J(X.w)}" class="bc-mini${X.hit?" hit":""}"/>`)}),o.goal!=null&&(eo+=`<line x1="${U.L}" x2="${U.R}" y1="${J(o.goal)}" y2="${J(o.goal)}" class="bc-goal"/>`);for(const[X,fo,Ie]of[["lowess",e.low,e.lowP],["ema",e.ema,e.emaP]])fo&&(eo+=`<path d="${Q(fo,V)}" class="bc-ghost past" stroke="${cs[X]}"/>`,eo+=`<path d="${Q(Ie.pts,V)}" class="bc-ghost ahead" stroke="${cs[X]}"/>`);if(t.length>1){const X=Q(t,V);eo+=`<path d="${X} L${V(s).toFixed(1)} ${U.B+14} L${V(a).toFixed(1)} ${U.B+14}Z" fill="url(#${Ko})"/>`,eo+=`<path d="${X}" class="bc-real"/>`}t.slice(0,-1).forEach(X=>eo+=`<rect x="${V(X[0])-2.5}" y="${J(X[1])-2.5}" width="5" height="5" fill="#D9587F"/>`),e.lowP&&e.lowP.heading&&[...o.mini.filter(X=>!X.hit&&X.w!=null).map(X=>X.w),o.goal].forEach(X=>{const fo=X!=null&&Xn(e.lowP,X,v);fo&&(eo+=`<circle cx="${V(fo)}" cy="${J(X)}" r="3.5" class="bc-mile"/>`)}),eo+="</g>";const dt=t[t.length-1];dt[0]>=S&&dt[0]<N&&(eo+=`<rect x="${V(dt[0])-6}" y="${J(dt[1])-6}" width="12" height="12" rx="2" fill="var(--surface)" stroke="#D9587F" stroke-width="3"/>`),o.goal!=null&&(eo+=`<g transform="translate(${U.R-2} ${J(o.goal)-18})">${zi}</g>`),o.mini.forEach(X=>{X.w!=null&&(eo+=`<g transform="translate(${U.R-6} ${J(X.w)-5})">${Sl(X.hit)}</g>`)});const La=`${new Date(S).toLocaleDateString(void 0,{month:"short"})} \u2013 ${new Date(ps(S,3)-rt).toLocaleDateString(void 0,{month:"short",year:"numeric"})}`;return`<div class="bc-page"><div class="bc-head"><span>${d(La)}</span>${no===c?'<span class="chip">now</span>':no>c?'<span class="chip ghost">ahead</span>':""}</div>
        <svg class="chart trend" viewBox="0 0 ${U.W} ${U.H}" role="img" aria-label="Weight trend, ${d(La)}">${eo}</svg></div>`}).join(""),so=l.length>1?`<div class="bc-dots">${l.map((S,N)=>`<i class="${N===c?"on":""}"></i>`).join("")}</div>`:"";return`<div class="bc-scroll" data-cur="${c}">${go}</div>${so}${S1(e)}`}function Sl(o){const e=o?"#FF6F91":"var(--surface)";return`<g shape-rendering="crispEdges"><rect x="1" y="0" width="3" height="1" fill="#C0597E"/><rect x="6" y="0" width="3" height="1" fill="#C0597E"/><rect x="0" y="1" width="10" height="4" fill="#C0597E"/><rect x="1" y="5" width="8" height="2" fill="#C0597E"/><rect x="3" y="7" width="4" height="2" fill="#C0597E"/><rect x="4" y="9" width="2" height="1" fill="#C0597E"/>
    <rect x="1" y="1" width="3" height="4" fill="${e}"/><rect x="6" y="1" width="3" height="4" fill="${e}"/><rect x="4" y="2" width="2" height="3" fill="${e}"/><rect x="2" y="5" width="6" height="2" fill="${e}"/><rect x="4" y="7" width="2" height="2" fill="${e}"/></g>`}function S1(o){if(!o.ema)return'<p class="tiny muted mt8">The guess lines show up after 3 weigh-ins.</p>';const e=Xo(),t=o.down,a=F=>new Date(F).toLocaleDateString(void 0,{day:"numeric",month:"short"}),s=F=>{const c=Xn(o.emaP,F,t),p=Xn(o.lowP,F,t);return c&&p?(c+p)/2:c||p},n=e.mini.filter(F=>!F.hit&&F.w!=null).sort((F,c)=>t?c.w-F.w:F.w-c.w)[0],r=[];if(n){const F=s(n.w);F&&r.push(`next mini goal around <b>${a(F)}</b>`)}if(e.goal!=null&&!sn()){const F=s(e.goal);F&&r.push(`goal around <b>${a(F)}</b>`)}const l=o.emaP.heading||o.lowP.heading;return`<div class="bc-legend"><span><i class="real"></i>me</span><span><i style="background:${cs.ema}"></i>trend</span><span><i style="background:${cs.lowess}"></i>smooth</span>${e.mini.length?'<span><i class="mini"></i>mini goals</span>':""}</div>
    <p class="tiny muted mt4">${r.length?"At this pace: "+r.join(" \xB7 ")+".":l?"Keep logging and the guesses get better.":"Flat lately. The guess lines just hold steady till things move again."}</p>`}function q1(){document.querySelectorAll(".bc-scroll[data-cur]").forEach(o=>{if(o.dataset.done)return;o.dataset.done="1";const e=+o.dataset.cur;o.scrollLeft=e*o.clientWidth;const t=o.nextElementSibling?.classList.contains("bc-dots")?o.nextElementSibling:null;t&&o.addEventListener("scroll",()=>{const a=Math.round(o.scrollLeft/o.clientWidth);t.querySelectorAll("i").forEach((s,n)=>s.classList.toggle("on",n===a))},{passive:!0})})}function ql(){const o=Xo(),e=o.log.at(-1)?.w,t=ds();e!=null&&o.mini.forEach((a,s)=>{a.hit||a.w==null||(t?e<=a.w:e>=a.w)&&(a.hit=A(),y(),x(80,15,"Mini goal reached"),setTimeout(()=>{ho(1),Ro(`<div class="pop-burst"></div>
          <div class="pop-bunny">${zo({mood:"love",size:110,cls:"bounce"})}</div>
          <div class="pop-kicker">Mini goal ${s+1} reached!</div>
          <div class="mini-letter"><small>a note from you</small><p class="note">${d(a.text||"You did it. I'm proud of you.")}</p></div>
          <div class="pop-reward">${G("carrot",20)} +15 carrots</div>
          <button class="cta" data-pop-close>Love that ${G("heart",18)}</button>`)},500))})}function j1(){const o=Xo(),e=xl(),t=s=>e&&s!=null&&s<e[0],a=o.mini.map((s,n)=>`<div class="mini-row">
      <span class="mini-ic">${`<svg viewBox="0 0 10 10" width="20" height="20">${Sl(s.hit)}</svg>`}</span>
      <span class="grow"><b>Mini goal ${n+1}</b><small>${s.hit?"reached "+vo(s.hit):s.text?"note saved, it's a surprise":"no note yet"}${t(s.w)?" \xB7 under the healthy range for your height":""}</small></span>
      <button class="btn small" data-act="miniEdit" data-k="${n}">Edit</button>
    </div>`).join("");return`<details class="how mini-goals"${o.mini.length?"":" open"}><summary>${G("heart",16)}Mini goals${o.mini.length?` <span class="chip">${o.mini.filter(s=>s.hit).length}/${o.mini.length}</span>`:""}${B("down",{cls:"chev"})}</summary>
    <p class="tiny muted">Little stops on the way to your goal. Write yourself a note for each one, it pops up when you get there.</p>
    ${a}
    ${o.mini.length<5?`<button class="btn mt8" data-act="miniEdit" data-k="new">${B("plus",{size:14})}Add a mini goal</button>`:""}
    <div class="body-row mt12">
      <label for="bodyHeight">Height</label>
      <div class="body-in"><input class="inp" id="bodyHeight" type="number" inputmode="decimal" step="any" placeholder="${o.height?o.height+" \xB7 saved":"cm"}" autocomplete="off"><span class="u">cm</span></div>
      <button class="btn" data-act="bodyHeight">Save</button>
    </div>
    ${o.height?`<div class="li mini-band"><span class="t">Show healthy range on the chart<small>a soft green band for your height, no numbers</small></span><button class="switch ${o.band?"on":""}" data-act="bodyBand" aria-pressed="${!!o.band}" aria-label="Healthy range band"></button></div>`:""}
    ${t(o.goal)?'<p class="tiny warnish">Your goal sits under the healthy range for your height. Maybe have a think about it \u2661</p>':""}
  </details>`}function Q1(o){const e=Xo(),t=o==="new"?{w:null,text:""}:e.mini[+o];yo(`${ko(o==="new"?"New mini goal":"Mini goal "+(+o+1))}
    <div class="field"><label for="miniW">Weight</label><div class="body-in"><input class="inp" id="miniW" type="number" inputmode="decimal" step="any" value="${t.w??""}" placeholder="somewhere between now and your goal"><span class="u">${i.unit}</span></div></div>
    <div class="field"><label for="miniT">Note to future you</label><textarea class="inp" id="miniT" maxlength="240" placeholder="you did it babe, treat yourself">${d(t.text||"")}</textarea></div>
    ${t.hit?`<p class="tiny muted mt8">Reached ${vo(t.hit)}. <button class="linkbtn" data-act="miniReset" data-k="${o}">Mark as not reached</button></p>`:""}
    <button class="cta mt16" data-act="miniSave" data-k="${o}">Save ${B("check")}</button>
    ${o!=="new"?`<button class="btn danger full mt8" data-act="miniDel" data-k="${o}">Remove it</button>`:""}`)}Object.assign(qn,{miniEdit:o=>Q1(o.dataset.k),miniSave:o=>{const e=Xo(),t=parseFloat(document.getElementById("miniW").value),a=document.getElementById("miniT").value.trim().slice(0,240);if(!an(t))return $("Type a weight for it","alert");const s=o.dataset.k;s==="new"?e.mini.push({w:t,text:a,hit:null}):Object.assign(e.mini[+s],{w:t,text:a});const n=ds();e.mini.sort((r,l)=>n?l.w-r.w:r.w-l.w),y(),Jo(),$("Mini goal saved","heart"),ql(),M()},miniDel:o=>{confirm("Remove this mini goal?")&&(Xo().mini.splice(+o.dataset.k,1),y(),Jo(),M())},miniReset:o=>{Xo().mini[+o.dataset.k].hit=null,y(),Jo(),M()},bodyHeight:()=>{const o=document.getElementById("bodyHeight"),e=parseFloat(o.value);if(!(e>100&&e<230))return $("Type your height in cm","alert");Xo().height=e,y(),$("Height saved","heart"),M()},bodyBand:()=>{const o=Xo();o.band=!o.band,y(),M()}});const jl={...Ss,...FF,U:"rgba(255,255,255,0.72)",T:"#F7E7A1",Z:"#C9A227",I:"#B8E3F0",W:"#3A2A4A",H:"#FFD6E5",F:"#E2B6F2",E:"#7FD4C1"};Object.assign(Os,{ribbonband:{name:"Ribbon headband"},beret:{name:"Beret"},mushroom:{name:"Mushroom cap"},pigtails:{name:"Twin bows"},sunflower:{name:"Sunflower"},veil:{name:"Bridal veil"},mooncrown:{name:"Moon crown"},candlecrown:{name:"Candle crown"},tophat:{name:"Mini top hat"},heartclips:{name:"Heart clips"},blossom:{name:"Blossom pin"},balletbow:{name:"Ballet bow"},pumpkin:{name:"Pumpkin hat"},spiderclip:{name:"Spider friend"},skullclip:{name:"Skull clip"},hunterhelm:{name:"Hunter's helm"},sharkhood:{name:"Shark hood"}}),Object.assign(Xs,{heartglasses:{name:"Heart glasses"},pinkshades:{name:"Pink shades"},glitter:{name:"Glitter cheeks"},plaster:{name:"Plaster"},monocle:{name:"Monocle"},startattoo:{name:"Star freckle"},stitches:{name:"Stitches"},eyepatch:{name:"Heart eyepatch"},visor:{name:"Neon visor"},gasmask:{name:"Lil gas mask"}}),Object.assign(Ys,{ribbon:{name:"Ribbon choker"},daisychain:{name:"Daisy chain"},moonpend:{name:"Moon pendant"},lace:{name:"Black lace collar"},goldchain:{name:"Gold chain"},batchoker:{name:"Bat choker"},coffinlocket:{name:"Coffin locket"},sailor:{name:"Sailor collar"},heartbrooch:{name:"Magic brooch"},jobcrystal:{name:"Soul crystal"},ledchoker:{name:"LED choker"},girlfriends:{name:"Girlfriends locket"}}),Object.assign(St,{opal:{name:"Opal",w:"#EEF3FF",s:"#D3E6F2",p:"#F7B8D8"},champagne:{name:"Champagne",w:"#F7E9CF",s:"#E6D0A8",p:"#F5A9B8"},blackcherry:{name:"Black cherry",w:"#4A2030",s:"#381722",p:"#FF7FA3",o:"#14060B"},lavender:{name:"Lavender",w:"#D9CCF2",s:"#BBA8E3",p:"#FFB3C7"},peony:{name:"Peony",w:"#FFC9DC",s:"#F7A2C0",p:"#E85A8C"},seafoam:{name:"Seafoam",w:"#CDEFE6",s:"#A3DCCD",p:"#FFB3C7"},storm:{name:"Storm",w:"#9A9BB0",s:"#7D7E96",p:"#FFB3C7",o:"#24222F"},apricot:{name:"Apricot",w:"#FFD9B8",s:"#F5B98D",p:"#FF8F8F"}});const Ql={wand:{name:"Star wand"},rose:{name:"Single rose"},parasol:{name:"Lace parasol"},lolly:{name:"Swirl lollipop"},balloon:{name:"Heart balloon"},dumbbell:{name:"Pink dumbbell"},can:{name:"Watering can"},teacup:{name:"Teacup"},bouquet:{name:"Bouquet"},scepter:{name:"Scepter"},crystalwand:{name:"Crystal wand"},heartwand:{name:"Heart wand"},voodoo:{name:"Voodoo plush"},lantern:{name:"Pumpkin lantern"},greatsword:{name:"Big sword"},meat:{name:"Meat on a bone"},neonkatana:{name:"Neon katana"},scythe:{name:"Tiny scythe"},coffinbag:{name:"Coffin bag"},moonwand:{name:"Moon wand"},grimoire:{name:"Watching grimoire"},woodsword:{name:"Starter sword"}},Tl={kitten:{name:"Kitten"},ghost:{name:"Ghost"},bat:{name:"Baby bat"},duck:{name:"Duckling"},frog:{name:"Frog"},hamster:{name:"Hamster"},snail:{name:"Snail"},swan:{name:"Swan"},babybun:{name:"Baby bun"},spider:{name:"Fluffy spider"},zombiebun:{name:"Zombie bun"},slime:{name:"Jelly slime"},blackcat:{name:"Void cat"},eyeball:{name:"Eyeball buddy"},crow:{name:"Crow"}};Object.assign(We,{seawin:{name:"Sea view window",slot:"wall"},citywin:{name:"City lights window",slot:"wall"},snowwin:{name:"Snowy window",slot:"wall"},sakurawin:{name:"Blossom window",slot:"wall"},stainedglass:{name:"Stained glass",slot:"wall"},mirrorball:{name:"Mirror ball",slot:"wall"},portrait:{name:"Bunny portrait",slot:"wall"},garland:{name:"Ribbon garland",slot:"wall"},bonsai:{name:"Bonsai",slot:"left"},bookstack:{name:"Book stack",slot:"left"},moonpot:{name:"Potted moonflowers",slot:"left"},cakestand:{name:"Cake stand",slot:"right"},fishbowl:{name:"Fish bowl",slot:"right"},balletshoes:{name:"Ballet shoes",slot:"right"},heartrug:{name:"Heart rug",slot:"rug",css:!0},velvetrug:{name:"Velvet rug",slot:"rug",css:!0},daisyrug:{name:"Daisy rug",slot:"rug",css:!0}});const Z={base:{a:"////12.4o8.4o/11.o4wo6.o4wo/10.o6wo4.o6wo/9.o7wo4.o7wo/9.o2w3p2wo4.o2w3p2wo/9.o2w3p2wo4.o2w3pwso/9.o2w3p2wo4.o2w3pwso/9.o2w3p2wo4.o2w3pwso/9.o2w3p2wo4.o2w3pwso/9.o2w3p2wo4.o2w3pwso/9.o2w3p2wo4.o2w3pwso/9.o2w3p2wo4.o2w3p2wo/9.o7w6o7wo/6.3o22w3o/5.o28wo/4.o30wo/3.o32wo/2.o34wo/2.o34wo/2.o34wo/.o36wo/.o36wo/.o36wo/.o36wo/.o36wo/2.o34wo/2.o32w2so/2.o31w3so/3.o29w3so/4.o27w3so/5.o24w4so/6.2o24s2o/8.2o20s2o/10.6o8s6o/16.8o"},baseNoEars:{a:"////////////////9.22o/6.3o22w3o/5.o28wo/4.o30wo/3.o32wo/2.o34wo/2.o34wo/2.o34wo/.o36wo/.o36wo/.o36wo/.o36wo/.o36wo/2.o34wo/2.o32w2so/2.o31w3so/3.o29w3so/4.o27w3so/5.o24w4so/6.2o24s2o/8.2o20s2o/10.6o8s6o/16.8o"},moods:{idle:{a:"///////////////////////11.3e12.3e/10.e2E2e10.e2E2e/10.e2E2e10.e2E2e/10.5e10.5e/11.3e12.3e/6.4p20.4p/6.4p8.e3.e7.4p/19.e.e/20.e"},happy:{a:"////////////////////////12.e14.e/11.e.e12.e.e/10.e3.e10.e3.e/10.e3.e10.e3.e/6.4p20.4p/5.6p6.6e6.6p/6.4p7.6e7.4p/18.e3F/19.2e",pal:{F:"#FF6F91"}},sleepy:{a:"/36.4F/38.F/37.F/36.4F//32.4F/34.F/33.F/32.4F///////////////9.e5.e8.e5.e/10.5e10.5e///6.4p20.4p/6.4p20.4p/19.2e/19.2e",pal:{F:"#B3949E"}},love:{a:"//////////////////////10.2F.2F10.2F.2F/9.FG5F8.FG5F/9.7F8.7F/10.5F10.5F/11.3F12.3F/12.F14.F/6.4p20.4p/5.6p6.6e6.6p/6.4p7.6e7.4p/18.e3I/19.2e",pal:{F:"#E8456F",G:"#FFC2D3",I:"#FF6F91"}},pumped:{a:"///////////////////34.2F/34.2F/34.2F/10.4e11.4e5.2F/9.e2E3e9.e2E3e/9.e2E3e9.e2E3e/9.4eEe9.4eEe/9.6e9.6e/10.4e11.4e/6.4p20.4p/5.6p6.6e6.6p/6.4p7.6e7.4p/17.2e3Ge/19.2e",pal:{F:"#8FD3FF",G:"#FF6F91"}},sad:{a:"///////////////////////11.3e12.3e/10.e2E2e10.e2E2e/10.e2E2e10.e2E2e/10.5e10.5e/11.3e12.3e/6.4p20.4p/6.4p10.e9.4p/8.2F9.e.e/8.2F8.e3.e",pal:{F:"#8FD3FF"}},wink:{a:"///////////////////////11.3e/10.e2E2e12.e/10.e2E2e11.e.e/10.5e10.e3.e/11.3e11.e3.e/6.4p20.4p/5.6p7.e3.e6.6p/6.4p9.e.e8.4p/20.e"},shy:{a:"///////////////////////11.e16.e/12.e14.e/13.e12.e/12.e14.e/11.e16.e/6.4p20.4p/5.6p7.e3.e6.6p/6.4p9.e.e8.4p/20.e"},shock:{a:"//////////////////////10.4e11.4e/9.e2E3e9.e2E3e/9.e2E3e9.e2E3e/9.4eEe9.4eEe/9.6e9.6e/10.4e11.4e/6.4p20.4p/6.4p9.2e9.4p/19.2e/19.2e"}},hats:{bow:{a:"////////////36.3o5.3o/35.oA2Bo3.o2BCo/35.oA3B3o3BCo/35.o3BCoCoC2BCo/35.o2B2CoCo2CBCo/36.o2C6oCo/38.oCo.oCo/37.oCo3.oCo/38.o5.o",ao:[-15,-8]},blackbow:{a:"////////////36.3o5.3o/35.oF2Go3.o2GIo/35.oF3G3o3GIo/35.o3GIoIoI2GIo/35.o2G2IoIo2IGIo/36.o2I6oIo/38.oIo.oIo/37.oIo3.oIo/38.o5.o",ao:[-15,-8],pal:{F:"#6B5F78",G:"#3A2D44",I:"#22172A"}},velvetbow:{a:"////////////36.3o5.3o/35.oF2Go3.o2GIo/35.oF3G3o3GIo/35.o3GIoIoI2GIo/35.o2G2IoIo2IGIo/36.o2I6oIo/38.oIo.oIo/37.oIo3.oIo/38.o5.o",ao:[-15,-8],pal:{F:"#C24C72",G:"#9A2A4E",I:"#651733"}},rainbow:{a:"////////////36.3o5.3o/35.o3Fo3.o3Fo/35.o4G3o4Go/35.o4IoJo4Io/35.o4JoJo4Jo/36.o2K6oKo/38.oLo.oLo/37.oLo3.oLo/38.o5.o",ao:[-15,-8],pal:{F:"#FF6F91",G:"#FF9F45",I:"#FFE27A",J:"#9EDB86",K:"#8FD3FF",L:"#C9B2EE"}},pigtails:{a:"//////////////////////21.o3.o18.o3.o/20.oA3oBo16.oA3oBo/20.o4BCo16.o4BCo/20.oB3oCo16.oB3oCo/21.o3.o18.o3.o",ao:[-15,-8]},sprout:{a:"//////////////////30.3o5.3o/29.o3Fo3.o2FGo/29.o2F2Go.o4Go/30.o4Go3GIo/31.4oGI3o/35.GIo/34.oGIo",ao:[-15,-8],pal:{F:"#A6E08E",G:"#5BAE5E",I:"#2F6E3E"}},band:{a:"/////////////////////////21.28o/20.o2w2C4w2C4w2C4w2C4w2Co/19.o30Bo/18.o2w2C4w2C4w2C4w2C4w2C4wo/19.32o",ao:[-15,-8]},ribbonband:{a:"////////////////////////19.o3.o/18.oA3oB25o/18.o4BCo24Ao/18.oB3oCo25Bo/19.31o",ao:[-15,-8]},beanie:{a:"//////////////33.3o/32.o2wFo/32.ow2Fo/32.o3Fo/30.9o/27.3oA9B3o/25.2oA14BC2o/24.oA3BC3BC3BC3BC2BCo/23.oA3BC3BC3BC3BC3B2Co/22.oA3BC3BC3BC3BC3BC2BCo/21.oAB22o2Co/23.oCDCDCDCDCDCDCDCDCDCDCDo/20.oCDCDCDCDCDCDCDCDCDCDCDCDCDCDo/19.oDCDCDCDCDCDCDCDCDCDCDCDCDCDCDCo/20.30o",ao:[-15,-8],pal:{F:"#F3EDF5"}},crown:{a:"/////////////////29.o4.o4.o/28.oFo2.oFo2.oFo/28.o2Go5Go2Go/28.o5GI4GIo/28.o4G3I3GIo/28.o11Io/28.oJK2JL2JK3Jo/29.11o",ao:[-15,-8],pal:{F:"#FFFFFF",G:"#FFE27A",I:"#F2B33D",J:"#D98C1A",K:"#8FD3FF",L:"#FF6F91"}},tiara:{a:"//////////////////34.o/33.oFo/29.o2.oFGFo2.o/28.oIo.o3Go.oIo/27.oJIK2oJGJ2oJIKo/26.o13J2Ko/26.oK11JKJKo/27.15o",ao:[-15,-8],pal:{F:"#FF8FB0",G:"#E8456F",I:"#BFE6F0",J:"#F1EFF6",K:"#B9B5C8"}},halo:{a:"/////24.F/23.3F3.13o/24.F2.2o13G2o3.F/26.o2G13o2Io.3F/27.2o13I2o3.F/29.13o",ao:[-15,-8],pal:{F:"#FFF7CF",G:"#FFF1A8",I:"#F2B33D"}},star:{a:"////////////////////46.o/45.oFo/43.3oGF2o/42.o2FG3FIo/43.o4FIo/44.o2FIo/43.oFIo2Io/43.oIo.oIo/44.o3.o",ao:[-15,-8],pal:{F:"#FFE27A",G:"#FFF7CF",I:"#F2B33D"}},cherry:{a:"///////////////////49.2o/47.2o2Fo/46.o3Fo/45.oF2oFo/44.oFo2.oFo/43.3o3.oFo/42.o3Go2.3o/41.o4GI2o3Go/41.o4GIo4GI/41.o3G2Io4GI/42.o3I2o3G2I/43.3o2.o3Io/49.3o",ao:[-15,-8],pal:{F:"#5BAE5E",G:"#E8323F",I:"#A81E2B"}},party:{a:"/////////////34.2o/33.o2Fo/33.o2Fo/34.2o/33.o2Go/33.o2Io/32.o4Go/32.o4Io/31.o2G2B2Go/31.o5IJo/30.o3G2B3Go/31.10o",ao:[-15,-8],pal:{F:"#FF6F91",G:"#C9B2EE",I:"#FFE27A",J:"#F2B33D"}},flower:{a:"/////////////////21.3o/20.o3wo/19.3owF2o/18.o2wo2Go2w/18.o2wGIGJw2o/18.owFoGJ2o2K2o/19.3owF3oLKLo/20.o2wFo2.3o/21.3o",ao:[-15,-8],pal:{F:"#DCD2E3",G:"#FFD24D",I:"#FFF1B8",J:"#F2AE3D",K:"#A6E08E",L:"#5BAE5E"}},phones:{a:"/////////31.8o/28.3o8F3o/26.2o3G11F2o/24.2o5G8o3F2I2o/23.o4G3o8.3o4Io/22.o3G2o14.2o3Io/21.o3Go18.o3Io/20.o3Go20.o3Io/19.o3Go22.o3Io/19.o2Go24.o2Io/18.o2Go26.o2Io/17.o3Fo26.o3Io/17.o2Fo28.o2Io/17.oFo30.oIo/16.o2Fo30.o2Io/16.o2Fo30.o2Io/16.oFo32.oIo/15.o2Fo32.o2Io/15.4o32.4o/14.oA2Bo32.o3Bo/14.oA2Bo32.o3Bo/14.o2BCo32.oC2Bo/14.o2BCo32.oC2Bo/14.oB2Co32.o2CBo/14.oBCDo32.oDCBo/15.3o34.3o",ao:[-15,-8],pal:{F:"#8C7C96",G:"#B9B1C8",I:"#6E5C7A"}},flowercrown:{a:"////////////////////////19.3o2.3o2.3o2.3o2.3o2.3o2.3o/18.o3F2o3G2o3I2o3J2o3F2o3G2o3Io/18.o3F2oGKG2o3I2oJGJ2o3F2oGKG2o3Io/18.o3F2oL2G2o3I2oL2J2o3F2oL2G2o3Io/19.3o2.3o2.3o2.3o2.3o2.3o2.3o",ao:[-15,-8],pal:{F:"#FF8FB0",G:"#FFE27A",I:"#C9B2EE",J:"#FFFFFF",K:"#F2AE3D",L:"#A6E08E"}},rosecrown:{a:"////////////////////////18.3o2.3o2.3o2.3o2.3o2.3o2.3o/17.oFGF2oFGF2oFGF2oFGF2oFGF2oFGF2oFGFo/17.oGFG2oGFG2oGFG2oGFG2oGFG2oGFG2oGFGo/17.o2FI2o2FI2o2FI2o2FI2o2FI2o2FI2o2FIo/18.4oJ3o2.4oJ3o2.4oJ3o2.2oJ/22.o9.o9.o7.o",ao:[-15,-8],pal:{F:"#C42D3D",G:"#E8506A",I:"#8E2443",J:"#4FA65A"}},strawberry:{a:"///////34.2o/33.o2Fo/27.7oFG4o.2o/26.o2Fo3FGFG4Fo2Fo/23.3o4FG3F2G2FG5F2o/22.o3I2o2FGoJo2FoJo3F2o2Jo/20.2o6I3o2IJ2o3J3o5J2o/19.oKJ11I15JKo/18.o3J11I16JLo/17.oK3JK9I17JLMo/16.o7J7I18J3Lo/15.oK7JKJ3I19JK3LMo/15.o33J4Lo/14.o34J5Lo/14.o34J5Lo/13.o34JK6Lo/13.o35J6Lo/13.o32JKJ7Lo/13.o33J8Lo/13.o30JK10Lo/13.o30J11Lo/13.oK27JK11LMo/14.41o",ao:[-15,-8],pal:{F:"#5BAE5E",G:"#A6E08E",I:"#FF6F7E",J:"#E8323F",K:"#FFE27A",L:"#B0233A",M:"#E8B84A"},hide:1},unicorn:{a:"////////////28.F/27.FGF/28.F/35.o/34.oIo/25.J8.oKo/24.JGJ6.oIKLo/25.J7.o2KLo8.M/32.oIKLKLo6.MGM/32.o2K3Lo7.M/31.oIKL2K2Lo/31.o2K5Lo/32.7o",ao:[-15,-8],pal:{F:"#C9B2EE",G:"#FFFFFF",I:"#FFFBEA",J:"#FF8FB0",K:"#FFF1B8",L:"#F2C46B",M:"#8FD3FF"}},horns:{a:"",ao:[-15,-8],b:"/////17.o34.o/16.oFo32.oFo/16.oFo32.oFo/15.oFGo32.oGFo/15.oFGo32.oGFo/15.oFIo32.oIFo/15.oFIo32.oIFo/14.oF2Go32.o2GFo/14.oF2Io32.o2IFo/14.oJ2Ko32.o2KJo/14.oJ2Ko32.o2KJo/14.oJ2Io32.o2IJo/14.oJ3Io30.o3IJo/14.oJI2Ko30.o2KIJo/15.oJ3Ko28.o3KJo/15.oJ3Io28.o3IJo/15.oJ4Ko26.o4KJo/16.oJ4L2o22.2o4LJo/16.oK3L3Ko20.o3K3LKo/17.o2L5Ko18.o5K2Lo/17.o2L6Ko16.o6K2Lo/18.oL7Ko14.o7KLo/19.o7Ko14.o7Ko/20.o5Ko16.o5Ko/21.2o2Ko18.o2K2o/23.2o20.2o",bo:[-15,-8],pal:{F:"#FF9DBA",G:"#FF6F91",I:"#C42D5A",J:"#E8506A",K:"#8E1F35",L:"#6E1426"}},fascinator:{a:"/////////////////38.o3.3o4.o/37.o2F2o2GIo.o2Fo/37.o2FoG2IGIo3Fo/37.4oIG3I5o/36.oJKJ2o3I2oJKJo/36.oKJKoL3oMoKJKo/37.3o.o3.o.3o",ao:[-15,-8],pal:{F:"#4B3A55",G:"#FF6F91",I:"#C42D5A",J:"#B0233A",K:"#7E1A36",L:"#5BAE5E",M:"#3B7F48"}},pearlclip:{a:"/////////////////////28.2o/27.owFo/25.3oFGo/24.owF3o/22.3oFGo/21.owF3o/19.3oFGo/18.owF3o/18.oFGo/19.2o",ao:[-15,-8],pal:{F:"#F7F1F4",G:"#D9C8D2"}},batclip:{a:"/////////////////////40.o11.o/40.2o2.o3.o3.o/40.oFo.oF2oFo.oF/40.o2Fo6Fo2F/41.o3FGFG4Fo/42.o3FI3Fo/43.oF5o/43.o.o.o.o",ao:[-15,-8],pal:{F:"#3B2A45",G:"#FFFFFF",I:"#FF8FB0"}},witch:{a:"///////40.2o/38.2o2Fo/36.2o3Fo/34.2o3FGo/33.o4FGo/32.o4F2Go/31.o3FIF2Go/30.o3F3I2Go/30.o4FIF3Go/29.o6F4Go/28.o12Jo/28.o3J4K5Jo/28.o3JK2GK5Jo/23.23o/21.2o21F3G2o/20.o24F4Go/21.3o23G2o/24.23o",ao:[-15,-8],pal:{F:"#7D5DB8",G:"#4E3480",I:"#FFF1A8",J:"#FF9F45",K:"#FFE27A"},hide:1},beret:{a:"/////////////////35.2o/34.o2Fo/28.14o/25.3oG14I3o/23.2oG19IF2o/22.oG22I2Fo/21.o24I3Fo/21.oF22I4Fo/22.o5F14I6Fo/23.2o22Jo/25.22o",ao:[-15,-8],pal:{F:"#8E2F55",G:"#D9708F",I:"#B7486A",J:"#6A1F3F"}},mushroom:{a:"////////29.11o/26.3o6FG4F3o/23.3o3I5F3G6F3o/21.2oF7I2F5G8F2o/20.o2F3G6I2F3G11Fo/19.o2F5G6I2FG13Fo/18.o3F5G6I10F3G3FJo/17.o4F5G6I9F5G2F2Jo/16.o6F3G6I10F5G2F3Jo/15.o8F7I11F5G2F4Jo/14.o11F3I14F3G3F5Jo/14.o14FG19F5Jo/13.o14F3G18F6Jo/13.o4F3G6F5G17F6Jo/13.o4F3G7F3G8F3G7F3K3Jo/13.o4F3G8FG9F3G7F3K3Jo/13.o25F3G6FJ3K3Jo/13.o33F8Jo/13.o31F10Jo/13.o30F11Jo/13.oLM2LM2LM2LM2LM2LM2LM2LM2LM2LM2LM2LM2LM2LMo/14.41o",ao:[-15,-8],pal:{F:"#E8323F",G:"#FFFFFF",I:"#FF5A5F",J:"#B0233A",K:"#F2DDE6",L:"#FFF1DC",M:"#E2C2A4"},hide:1},sunflower:{a:"//////////////////44.o.3o.o/43.oFo3FoFo/42.o2Fo3Fo2Fo/41.o2F2o3G2o2Fo/42.3oGIJIG4o/41.o2FoGJIJGo2Fo/41.o2FoGIJIJo2Fo/42.3o2G2JG3o/41.o2F2o3G2o2Ko/42.oFKoF2Ko2Ko/43.oKo3KoKo/44.o.3o.o/47.oLo/46.oLo",ao:[-15,-8],pal:{F:"#FFE27A",G:"#A0633A",I:"#C98A55",J:"#6E3F22",K:"#F2B33D",L:"#5BAE5E"}},veil:{a:"/////////////////////27.o5.3o5.o/26.oJo3.o3Ko3.oJo/27.5o4K6o/26.oKLoKLo3KoLKoLKo/27.2o.2o.3o.2o.2o",ao:[-15,-8],b:"/////////////25.20F/24.F2GI6GI6GI3GF/24.F2GI6GI6GI3GF/24.F2GI6GI6GI3GF/23.F2GI6GI6GI5GF/23.F2GI6GI6GI5GF/23.F2GI6GI6GI5GF/22.F2GI6GI6GI6GIF/22.F2GI6GI6GI6GIF/22.F2GI6GI6GI6GIF/21.F2GI6GI6GI6GI2GF/21.F2GI6GI6GI6GI2GF/21.F2GI6GI6GI6GI2GF/20.F2GI6GI6GI6GI4GF/20.F2GI6GI6GI6GI4GF/19.F3GI6GI6GI6GI5GF/19.F2GI6GI6GI6GI6GF/19.F2GI6GI6GI6GI6GF/18.F3GI6GI6GI6GI6GIF/18.F2GI6GI6GI6GI6GIGF/18.F2GI6GI6GI6GI6GIGF/17.F3GI6GI6GI6GI6GI2GF/17.F2GI6GI6GI6GI6GI3GF/17.F2GI6GI6GI6GI6GI3GF/16.F3GI6GI6GI6GI6GI4GF/16.F2GI6GI6GI6GI6GI5GF/15.F3GI6GI6GI6GI6GI6GF/15.F3GI6GI6GI6GI6GI6GF/15.F2GI6GI6GI6GI6GI6GIF/14.F3GI6GI6GI6GI6GI6GIGF/14.F3GI6GI6GI6GI6GI6GIGF/14.F2GI6GI6GI6GI6GI6GI2GF/13.F3GI6GI6GI6GI6GI6GI3GF/13.F3GI6GI6GI6GI6GI6GI3GF/13.F2GI6GI6GI6GI6GI6GI4GF/12.F3GI6GI6GI6GI6GI6GI5GF/12.F3GI6GI6GI6GI6GI6GI5GF/12.FKFKFKFKFKFKFKFKFKFKFKFKFKFKFKFKFKFKFKFKFKFKFK",bo:[-15,-8],pal:{F:"#C9BBD8",G:"#FBF6FFD8",I:"#EFE5F6E0",J:"#FFD6E2",K:"#FFFFFF",L:"#E6D3DC"}},mooncrown:{a:"///////////////32.2o/31.o2Fo/30.o2Fo/30.o2Fo4.o/30.o3Fo2.oGo/28.o2.o3F2oGIo.o/27.oGo2.4oG2I2oGo/26.oG2I2o5G2IoGIo/26.oGJI4GK4GJGIo/26.oG2I3GIGI3GIGIo/27.15o",ao:[-15,-8],pal:{F:"#FFE27A",G:"#ECEAF2",I:"#A9A5BC",J:"#8FD3FF",K:"#A585DA"}},candlecrown:{a:"//////////////28.o5.o5.o/27.oFo3.oFo3.oFo/27.oGo3.oGo3.oGo/28.o5.o5.o/27.oIo3.oIo3.oIo/27.oIJo2.oIJo2.oIJo/27.oIJo2.oIJo2.oIJo/27.oIJo2.oIJo2.oIJo/26.o16Ko/25.o17Ko/25.o17Ko/26.17o",ao:[-15,-8],pal:{F:"#FFB347",G:"#FFF1A8",I:"#FFF7E8",J:"#E2D3C1",K:"#2B1E2F"}},tophat:{a:"/////38.6o/37.oF5Go/37.oF5Go/37.oF5Go/37.o5BCo/37.o5BCo/34.14o/33.oF13Go/34.14o",ao:[-15,-8],pal:{F:"#4B3A55",G:"#2B1E2F"}},heartclips:{a:"///////////////////////20.2o.2o20.2o.2o/19.oABo2Bo18.oABo2Bo/19.o4BCo18.o4BCo/20.o2BCo20.o2BCo/21.oCo22.oCo/22.o24.o",ao:[-15,-8]},blossom:{a:"///////////////////24.2o.2o/23.o2Fo2Fo/23.o5Fo/18.2o.2o.o3Fo/17.o2Go2Go.3o/17.o5Go/17.o2GI2Go/16.o3G2I2Go/17.o5Go/17.o2Go2Go/18.2o.2o",ao:[-15,-8],pal:{F:"#FFD6E2",G:"#FFC2D3",I:"#FF6F91"}},balletbow:{a:"",ao:[-15,-8],b:"////////26.5o9.5o/25.o2A3B2o5.2o3B2Co/25.oA6B5o5B2Co/25.o7Bo3Bo6BCo/25.o5B2Co3Bo2C3B2Co/26.o4C10o3Co/27.4o8.5o",bo:[-15,-8]},pumpkin:{a:"////////////34.2o2.2o/33.o2F2o2Go/31.3oF2o2Go/26.5o2I4o2I5o/24.2o3I3J3I3J3I3J2o/23.o2I4J3I4J3I4J2Io/22.oI2JK2J2I5J2I6J3Io/21.oI5J2I6J2I6J4Io/21.oI2JL2J2I6J2I3JL2J4Io/20.o2I2J2LJ2I6J2I2J2L2J5Io/20.o2I5J2IJ5L2I6J5Io/20.o2I4J2I2JLoLo3I6J5Io/21.o26Io/22.26o",ao:[-15,-8],pal:{F:"#5BAE5E",G:"#A6E08E",I:"#E8812F",J:"#FF9F45",K:"#FFC07A",L:"#5E3524"},hide:1},spiderclip:{a:"/////43.F/43.F/43.F/43.F/43.F/43.F/43.F/43.F/41.2oF2o/40.oGIo2Io/41.2oI2o/34.J5.o.3o.o5.J/34.J4.oKoK2LoLo4.J/35.J2.o4K5Lo2.J/36.J2o2K7L2oJ/33.2J2.o2K2M3L2M2Lo2.2J/35.2JoK2M2NL2M2NLo2J/37.oLM3NLM3NLo/35.2Jo2L2N3L2NLJo2J/33.2J2.oLP7LPJo2.2J/36.J2o8L2JoJ/35.J2.o8LJo2.J/34.J4.oLoL2Jo2Jo3.J/34.J5.o.3o.o5.J",ao:[-15,-8],pal:{F:"#C9B3C3",G:"#FFD3E0",I:"#FF6F91",J:"#2B1E2F",K:"#5E4B6E",L:"#3B2A45",M:"#FFFFFF",N:"#1A1018",P:"#FF8FB0"}},skullclip:{a:"///////////////////44.5o.2o.2o/43.o5Fo2Bo2Bo/42.o7Fo3Bo/42.o7FG3o/42.oF2I2F2IGo/42.oF2I2F2IGo/42.o3FG3FGo/42.oJ5FJGo/43.oFoFoFGo/44.6o",ao:[-15,-8],pal:{F:"#FFF8F0",G:"#DCD2DB",I:"#3B1C28",J:"#FF8FB0"}},hunterhelm:{a:"///////////////15.o38.o/14.oF2o34.2oGo/14.o2FG2o9.12o9.2oI2Go/15.o2F2Go5.3o12F3o5.o2I2Go/16.oF2GJo2.2o3F2K11F2G2o2.oL2IGo/17.oG2Jo.o3F3K13F3Go.o2LIo/18.o2J2o4F2K15F3G2o2Lo/19.3o12F3o8F2GJ3o/20.o12Fo3Mo7F3GJo/20.o13FoMo8F2G2Jo/19.o15Fo9F3G2Jo/19.32o/18.o28NPN2Qo/18.o29N3Qo/19.32o",ao:[-15,-8],pal:{F:"#F3E6CC",G:"#D9C39B",I:"#A9895F",J:"#B39468",K:"#FFF8E8",L:"#7E6440",M:"#5FD3C9",N:"#9A6A45",P:"#E6E1EE",Q:"#5E3524"},hide:1},sharkhood:{a:"/////////////////37.o/36.2o/35.oFo/34.o2Fo/33.o2FGo/24.9o3FG9o/21.3oI6Fo3F2Go8J3o/20.o2F3I9F12J2Go/19.o3F3I7F14J3Go/18.oJ4FI8F11J7Go/17.o2J2F26K4Go/16.o4JK26oK4Go/15.o5Jo26.o5Go/15.o5Jo26.o5Go/15.o4JKo26.oK4Go/14.o4J2L28.2M4Go/14.o5Jo28.o5Go/14.o4N2L28.2M4Go/14.o4NJo28.o5Go/14.o4N2L28.2M4Go/15.o3N2Jo26.o5Go/15.o3N2Jo26.o5Go/15.o2N3Ko26.o3K2Go/16.5o28.5o",ao:[-15,-8],pal:{F:"#A9D4F5",G:"#4D7FB3",I:"#D8EEFF",J:"#7FB3E0",K:"#FF9DBA",L:"#3E6E9E",M:"#2F5A86",N:"#5F93C6"},hide:1}},back:{angelwings:{a:"//////////11.3o42.3o/10.o3F2o38.2o3Fo/10.o5F2o34.2o5Fo/9.o8Fo32.o8Fo/9.o9Fo30.o9Fo/9.o10Fo28.o10Fo/9.oG10Fo26.o10FGo/9.o2G9Fo26.o9F2Go/9.4o9Fo24.o9F4o/9.o4Fo7Fo24.o7Fo4Fo/9.oG4Fo7Fo22.o7Fo4FGo/9.o2G4Fo6Fo22.o6Fo4F2Go/10.6o7Fo22.o7F6o/11.o5Fo5Fo22.o5Fo5Fo/11.oG5Fo3Fo24.o3Fo5FGo/12.6o4Fo24.o4F6o/13.oG5F2o26.2o5FGo/14.6o30.6o",ox:-15,oy:-8,fo:[-15,-8],pal:{F:"#FFFFFF",G:"#DCD4E8"}},batwings:{a:"////////////////12.o44.o/11.oFo42.oGo/10.o3Fo40.o3Go/9.o5F3o34.3o5Go/8.o3FI5F3o28.3o5GJ3Go/7.o3FKIK7Fo26.o7GIJI3Go/6.o3F2KI2K6Fo26.o6G2IJ2I3Go/5.o3F3KI5K3Fo26.o3G5IJ3I3Go/5.o2F4KI6KIKo26.oIJ6IJ4I2Go/5.oF5KI6KIKo26.oIJ6IJ5IGo/5.o2K2o2KI6KIKo26.oIJ6IJ2I2o2Io/5.oKo2.oKI2K2o2KIKo26.oIJ2I2o2IJIo2.oIo/5.oKo2.oKIKo2.oKIKo26.oIJIo2.oIJIo2.oIo/6.o4.oIo4.oIKo26.oIJo4.oJo4.o/11.oIo4.oIKo26.oIJo4.oJo/12.o6.2o28.2o6.o",ox:-15,oy:-8,fo:[-15,-8],pal:{F:"#7B6890",G:"#6E5C7A",I:"#3B2D45",J:"#2B1E2F",K:"#4B3A55"}},fairywings:{a:"/////////8.5F44.5F/7.FG4I4F36.4F4IGF/7.F6GI2J2F32.2F2JI6GF/7.F2GKG2K2L3JF30.F3J2L2KGK2GF/7.FI2GKGLK3L2JF28.F2J3LKLGK2GIF/7.FI2G2K2L2K2L2JF26.F2J2L2K2L2K2GIF/7.FI2GL2K2L2K2L2JF24.F2J2L2K2L2KL2GIF/7.FIG3L2K2L2KLM2JF22.F2JML2K2L2K3LGIF/8.FJ4L2K2L2K2MJF22.FJ2M2K2L2K4LJF/8.FJ5L2KLM2KM2JF20.F2JM2KML2K5LJF/8.F2J5L2K2MK2MJF20.FJ2MK2M2K5L2JF/9.FJ5LM2K4MJF20.FJ4M2KM5LJF/9.F2J3L3M2K4MF20.F4M2K3M3L2JF/10.F2J6M2K3MF20.F3M2K6M2JF/11.F2J6MK3MJF18.FJ3MK6M2JF/12.F2J6MK2MJF18.FJ2MK6M2JF/13.F3J5MKMJF18.FJMK5M3JF/14.3F2J4MKF20.FK4M2J3F/17.7F22.7F////18.6F22.6F/16.2F4J2MF20.F2M4J2F/15.F2J7MF18.F7M2JF/14.FJ2L2K2MK2MF18.F2MK2M2K2LJF/13.FJ2LK2M2K2MJF18.FJ2M2K2MK2LJF/13.FL2KL2K4MF20.F4M2KL2KLF/12.FI2KL2KL3MJF20.FJ3ML2KL2KIF/12.F2G2K3L2MJF22.FJ2M3L2K2GF/11.FIGKG5LJF24.FJ5LGKGIF/11.F4G3L2JF26.F2J3L4GF/12.3F2IJ3F28.3FJ2I3F/15.3F34.3F",ox:-15,oy:-8,fo:[-15,-8],pal:{F:"#7FA8D6",G:"#E6D8FA",I:"#C9B2EE",J:"#A9D0F0",K:"#FFFFFF",L:"#CFE6F8",M:"#D6F3FB"}},butterfly:{a:"//////////9.6o40.6o/7.2oFGFGFG2o36.2oGFGFGF2o/6.o4F2I4Fo34.o4F2I4Fo/5.o5F4I2Fo34.o2F4I5Fo/4.oG3FG6IFGo32.oGF6IG3FGo/4.o4F8I2Fo30.o2F8I4Fo/3.o5F9I2Fo28.o2F9I5Fo/3.o4FI2J8IFGo26.oGF8I2JI4Fo/3.o4F2I3J7I2Fo24.o2F7I3J2I4Fo/3.o3F5I3J6IFo24.oF6I3J5I3Fo/3.oFGF6I3J4I2KFo22.oF2K4I3J6IFGFo/4.oF9I3J2I4Ko20.o4K2I3J9IFo/4.o2F10I3J5Ko18.o5K3J10I2Fo/5.oGF11I2J5Ko16.o5K2J11IFGo/6.o2F9I3K2J3Ko16.o3K2J3K9I2Fo/7.o6F3I6K2Jo18.o2J6K3I6Fo/8.4oFGFGFGF6Ko18.o6KFGFGFGF4o/12.8o4Ko20.o4K8o/20.4o22.4o/15.8o24.8o/13.2o4F4K2o20.2o4K4F2o/12.o3F2I7Ko18.o7K2I3Fo/11.oFG5I6Ko18.o6K5IGFo/10.o2F7I2KJ3Ko16.o3KJ2K7I2Fo/10.oF8I2J4Ko16.o4K2J8IFo/9.oG7I3J5Ko16.o5K3J7IGo/9.oF6I2J3I3Ko18.o3K3I2J6IFo/9.oF4I3L4I3Ko18.o3K4I3L4IFo/9.oFG2IJ3L5IKFo18.oFK5I3LJ2IGFo/9.o2FI2J3L5IFo20.oF5I3L2JI2Fo/9.o3F9I2Fo20.o2F9I3Fo/9.oGFGF7IFGo22.oGF7IFGFGo/10.o3F5I3Fo24.o3F5I3Fo/11.2o7F2o26.2o7F2o/13.7o30.7o",ox:-15,oy:-8,fo:[-15,-8],pal:{F:"#7E1F45",G:"#FFFFFF",I:"#FF9DBA",J:"#C23E68",K:"#FFD3E0",L:"#2B1E2F"}},bigbow:{a:"//////////15.6o28.6o/12.3o6C3o22.3o6C3o/11.o12C2o18.2o12Co/10.oC4B10Co16.o10C4BCo/9.o11B6Co14.o6C11Bo/9.oA2B4D7B4Co12.o4C7B4D2BAo/9.o2AB7D6BCo14.oC6B7DB2Ao/10.o2A3B7D4Bo14.o4B7D3B2Ao/10.o4A3B6D3Bo14.o3B6D3B4Ao/11.o4A5B2D3Bo16.o3B2D5B4Ao/12.o6A7Bo16.o7B6Ao/13.o6A5Bo18.o5B6Ao/14.o4A6Bo18.o6B4Ao/15.2o2A6Bo18.o6B2A2o/17.2o5Bo20.o5B2o/19.5o22.5o/24.2o18.2o/23.o2C2o14.2o2Co/23.o2C2Bo12.o2B2Co/22.o3C2BAo10.oA2B3Co/22.o2C2B2Ao10.o2A2B2Co/21.o3C2B2Ao10.o2A2B3Co/21.o2C3BAo12.oA3B2Co/21.o2C2B2Ao12.o2A2B2Co/20.o2C3B2Ao12.o2A3B2Co/20.o2C3BAo14.oA3B2Co/19.o3C2B2Ao14.o2A2B3Co/19.o2C3B2Ao14.o2A3B2Co/18.o3C3BAo16.oA3B3Co/18.o2C3B2Ao16.o2A3B2Co/17.o3C3B2Ao16.o2A3B3Co/17.o3C3BAo18.oA3B3Co/16.o3C3B2Ao18.o2A3B3Co/16.o3C3B2Ao18.o2A3B3Co/15.o3C4BAo20.oA4B3Co/15.o3C3B2Ao20.o2A3B3Co/14.o3C4B2Ao20.o2A4B3Co/14.o3C3B3Ao20.o3A3B3Co/14.o3C3B2Ao22.o2A3B3Co/15.4o2B2Ao22.o2A2B4o/19.o3Ao22.o3Ao/20.oAo24.oAo/21.o26.o",ox:-15,oy:-8,fo:[-15,-8]},cape:{a:"//////////////11.o46.o/10.oFo44.oFo/10.o2Fo42.o2Fo/10.o3Fo40.o3Fo/10.o3FGo38.oG3Fo/10.o3F2Go36.o2G3Fo/10.o3F2Go36.o2G3Fo/10.o3F3Go34.o3G3Fo/10.o3F4Go32.o4G3Fo/10.o3F5Go30.o5G3Fo/10.o3F6Go28.o6G3Fo/10.o3F6GIo26.oI6G3Fo/10.o3F6GIo26.oI6G3Fo/11.o2F6GIo26.oI6G2Fo/11.o2F6GIo26.oI6G2Fo/12.oF6GIo26.oI6GFo/12.o8Fo26.o8Fo/13.o7Fo26.o7Fo/13.o2FJKFKFo26.oFKFKJ2Fo/14.oFJKFKFo26.oFKFKJFo/14.oJFK3Fo26.o3FKFJo/14.oJ5Fo26.o5FJo/14.oJ4FKo26.oK4FJo/13.oJ3FKFKo26.oKFK3FJo/13.oJFKFKFKo26.oKFKFKFJo/13.oJFKFKFKo26.oKFKFKFJo/12.o2JFKFKFKo26.oKFKFKF2Jo/12.oJKFKFK2Fo26.o2FKFKFKJo/12.oJKFK4Fo26.o4FKFKJo/11.o2JK6Fo26.o6FK2Jo/11.oJ6FKFo26.oFK6FJo/11.oJ4FKFKFo26.oFKFK4FJo/11.oJ2FKFKFKFo26.oFKFKFK2FJo/10.oJFKFKFKFKFo26.oFKFKFKFKFJo/10.oJFKFKFKFKFo26.oFKFKFKFKFJo/10.oJFKFKFK3Fo26.o3FKFKFKFJo/9.o2JFKFK5Fo26.o5FKFKF2Jo/9.oJKFK6FKo26.oK6FKFKJo/9.oJK8FKo26.oK8FKJo/10.o2F2oFK2oFKo26.oKF2oKF2o2Fo/10.o2F2oFK2oFKo26.oKF2oKF2o2Fo/11.2o2.2o2.2o28.2o2.2o2.2o",ox:-15,oy:-8,fo:[-15,-8],pal:{F:"#8E2443",G:"#C42D3D",I:"#E8506A",J:"#5A1428",K:"#6E1A33"}},sash:{a:"////////////////////////45.6o/44.o6F3o/44.o9F2o/44.o4G2I5Fo/44.o3G3I3G3Fo/43.o9IG2I2Fo/44.2o3Io6I3Fo/46.3o.4o3IG2Fo4.o.o/46.oJo5.o2I2G2F4oFoKo/45.o3Jo5.o2I2G5FoLKLo/45.oM3Jo5.o2IGI4FGoLo/44.o2N2M2Jo5.o5I2G2Io/44.o3NM3Jo5.2o5I2o/45.o4N3Jo6.5o/46.2o4N2J2o/47.o3NM4J4o/48.o3N2M6Jo/49.2o2NM3N4J2o/51.o4N3MN3Jo/52.3o7NJo/55.4o2NM2Jo/59.2oNM2Jo/60.oNM2Jo/61.o2NoKo/62.2oLKLo/64.oLo/65.o",ox:-15,oy:-8,fo:[-15,-8],pal:{F:"#FFFFFF",G:"#D9C9F5",I:"#9C80D0",J:"#EDE4FB",K:"#FFF1B8",L:"#FFD24D",M:"#B79DE3",N:"#7E5FB8"}}},faces:{gasmask:{a:"///////////////////////////15.10o/14.o2F7GIo/10.4o.FJKGKGK2GI.4o/7.3o2LMNoF8GIoL2MN3o/9.oL2PNoFGKGKGKG2IoM2PNo/9.oM2PNoF7G2IoM2PNo/9.o4N2o6G2I2o4No/10.4o3.6o3.4o",pal:{F:"#7B6890",G:"#4B3A55",I:"#2B1E2F",J:"#FFFFFF",K:"#1A1018",L:"#FFC2D3",M:"#FF8FB0",N:"#E8638C",P:"#7E1F45"}},lashes:{a:"////////////////////8.F.F18.F.F/9.F.F16.F.F/8.F.4F12.4F.F/9.2F18.2F",pal:{F:"#1A1018"}},"lashes@happy":{a:"////////////////////////8.F2.F.F12.F.F2.F/7.F.2F18.2F.F/8.2F20.2F",pal:{F:"#1A1018"}},"lashes@sleepy":{a:"///////////////////////8.F22.F/8.F.5F10.5F.F/9.F20.F/10.F.F.F10.F.F.F",pal:{F:"#1A1018"}},"lashes@love":{a:"/////////////////////7.F.F20.F.F/8.F22.F/8.F22.F",pal:{F:"#1A1018"}},"lashes@pumped":{a:"///////////////////7.F.F19.F.F/8.F2.F15.F2.F/7.F.F.3F11.3F.F.F/8.2F19.2F",pal:{F:"#1A1018"}},"lashes@sad":{a:"////////////////////8.F.F18.F.F/9.F.F16.F.F/8.F.4F12.4F.F/9.2F18.2F",pal:{F:"#1A1018"}},"lashes@wink":{a:"////////////////////8.F.F/9.F.F/8.F.4F/9.2F/26.F.F2.F/29.2F.F/30.2F",pal:{F:"#1A1018"}},"lashes@shy":{a:"/////////////////////8.F22.F/9.2F18.2F/10.F.F14.F.F",pal:{F:"#1A1018"}},"lashes@shock":{a:"///////////////////7.F.F19.F.F/8.F2.F15.F2.F/7.F.F.3F11.3F.F.F/8.2F19.2F",pal:{F:"#1A1018"}},liner:{a:"/////////////////////6.F26.F/7.F3.3F12.3F3.F/8.F.F18.F.F/9.2F18.2F",pal:{F:"#1A1018"}},"liner@happy":{a:"///////////////////////6.F26.F/7.F24.F/8.F22.F/9.F20.F",pal:{F:"#1A1018"}},"liner@sleepy":{a:"//////////////////////6.F26.F/7.F24.F/8.F22.F",pal:{F:"#1A1018"}},"liner@love":{a:"//////////////////////5.F28.F/6.F26.F/7.F24.F/8.F22.F",pal:{F:"#1A1018"}},"liner@pumped":{a:"////////////////////5.F27.F/6.F4.3F11.3F4.F/7.F.F19.F.F/8.2F19.2F",pal:{F:"#1A1018"}},"liner@sad":{a:"/////////////////////6.F26.F/7.F3.3F12.3F3.F/8.F.F18.F.F/9.2F18.2F",pal:{F:"#1A1018"}},"liner@wink":{a:"/////////////////////6.F/7.F3.3F/8.F.F22.F/9.2F21.F/31.F/30.F",pal:{F:"#1A1018"}},"liner@shy":{a:"////////////////////7.F24.F/8.F22.F/9.F20.F/10.F18.F",pal:{F:"#1A1018"}},"liner@shock":{a:"////////////////////5.F27.F/6.F4.3F11.3F4.F/7.F.F19.F.F/8.2F19.2F",pal:{F:"#1A1018"}},smoky:{a:"/////////////////////10.4F12.4F/8.F5GF10.F5GF/8.FG20.GF/9.F20.F",pal:{F:"#B79DE3",G:"#6B4F80"}},"smoky@happy":{a:"//////////////////////12.F14.F/11.FGF12.FGF/10.FG.G12.G.GF/9.FG18.GF/9.F20.F",pal:{F:"#B79DE3",G:"#6B4F80"}},"smoky@sleepy":{a:"///////////////////////9.6F10.6F/10.5G10.5G",pal:{F:"#B79DE3",G:"#6B4F80"}},"smoky@love":{a:"/////////////////////8.2F20.2F/7.FG22.GF/8.G22.G/8.F22.F",pal:{F:"#B79DE3",G:"#6B4F80"}},"smoky@pumped":{a:"////////////////////9.F.3F11.3F.F/7.F2G.3GF9.F3G.2GF/7.FG21.GF/8.F21.F",pal:{F:"#B79DE3",G:"#6B4F80"}},"smoky@sad":{a:"/////////////////////10.4F12.4F/8.F5GF10.F5GF/8.FG20.GF/9.F20.F",pal:{F:"#B79DE3",G:"#6B4F80"}},"smoky@wink":{a:"/////////////////////10.4F/8.F5GF12.F/8.FG16.FGF/9.F16.G.GF/29.GF/30.F",pal:{F:"#B79DE3",G:"#6B4F80"}},"smoky@shy":{a:"//////////////////////10.F18.F/10.F18.F/10.2G16.2G/10.3G14.3G/10.2G16.2G",pal:{F:"#6B4F80",G:"#B79DE3"}},"smoky@shock":{a:"////////////////////9.F.3F11.3F.F/7.F2G.3GF9.F3G.2GF/7.FG21.GF/8.F21.F",pal:{F:"#B79DE3",G:"#6B4F80"}},redlips:{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.8I/17.6F/18.4I",pal:{F:"#D63A4C",G:"#FF8A97",I:"#8E1A2C"}},"redlips@happy":{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.F6.F/17.F4.F/18.F2.F/19.2I",pal:{F:"#D63A4C",G:"#FF8A97",I:"#8E1A2C"}},"redlips@sleepy":{a:"/////////////////////////////19.2F/18.F2.F/18.F2.F/19.2G",pal:{F:"#D63A4C",G:"#8E1A2C"}},"redlips@love":{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.F6.F/17.F4.F/18.F2.F/19.2I",pal:{F:"#D63A4C",G:"#FF8A97",I:"#8E1A2C"}},"redlips@pumped":{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.F6.F/17.F4.F/18.F2.F/19.2I",pal:{F:"#D63A4C",G:"#FF8A97",I:"#8E1A2C"}},"redlips@sad":{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.8I/17.6F/18.4I",pal:{F:"#D63A4C",G:"#FF8A97",I:"#8E1A2C"}},"redlips@wink":{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.8I/17.6F/18.4I",pal:{F:"#D63A4C",G:"#FF8A97",I:"#8E1A2C"}},"redlips@shy":{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.8I/17.6F/18.4I",pal:{F:"#D63A4C",G:"#FF8A97",I:"#8E1A2C"}},"redlips@shock":{a:"////////////////////////////19.2F/18.F2.F/18.F2.F/18.F2.F/19.2G",pal:{F:"#D63A4C",G:"#8E1A2C"}},lipstick:{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.8I/17.6F/18.4I",pal:{F:"#FF6F91",G:"#FFC2D3",I:"#C23E68"}},"lipstick@happy":{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.F6.F/17.F.3IF/18.F2.F/19.2J",pal:{F:"#FF6F91",G:"#FFC2D3",I:"#E8344F",J:"#C23E68"}},"lipstick@sleepy":{a:"/////////////////////////////19.2F/18.F2.F/18.F2.F/19.2G",pal:{F:"#FF6F91",G:"#C23E68"}},"lipstick@love":{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.F6.F/17.F.3IF/18.F2.F/19.2J",pal:{F:"#FF6F91",G:"#FFC2D3",I:"#E8344F",J:"#C23E68"}},"lipstick@pumped":{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.F6.F/17.F.3IF/18.F2.F/19.2J",pal:{F:"#FF6F91",G:"#FFC2D3",I:"#E8344F",J:"#C23E68"}},"lipstick@sad":{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.8I/17.6F/18.4I",pal:{F:"#FF6F91",G:"#FFC2D3",I:"#C23E68"}},"lipstick@wink":{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.8I/17.6F/18.4I",pal:{F:"#FF6F91",G:"#FFC2D3",I:"#C23E68"}},"lipstick@shy":{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.8I/17.6F/18.4I",pal:{F:"#FF6F91",G:"#FFC2D3",I:"#C23E68"}},"lipstick@shock":{a:"////////////////////////////19.2F/18.F2.F/18.F2.F/18.F2.F/19.2G",pal:{F:"#FF6F91",G:"#C23E68"}},darklips:{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.8I/17.6F/18.4I",pal:{F:"#6A1F3F",G:"#A3305A",I:"#3A0F22"}},"darklips@happy":{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.F6.F/17.F4.F/18.F2.F/19.2I",pal:{F:"#6A1F3F",G:"#A3305A",I:"#3A0F22"}},"darklips@sleepy":{a:"/////////////////////////////19.2F/18.F2.F/18.F2.F/19.2G",pal:{F:"#6A1F3F",G:"#3A0F22"}},"darklips@love":{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.F6.F/17.F4.F/18.F2.F/19.2I",pal:{F:"#6A1F3F",G:"#A3305A",I:"#3A0F22"}},"darklips@pumped":{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.F6.F/17.F4.F/18.F2.F/19.2I",pal:{F:"#6A1F3F",G:"#A3305A",I:"#3A0F22"}},"darklips@sad":{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.8I/17.6F/18.4I",pal:{F:"#6A1F3F",G:"#A3305A",I:"#3A0F22"}},"darklips@wink":{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.8I/17.6F/18.4I",pal:{F:"#6A1F3F",G:"#A3305A",I:"#3A0F22"}},"darklips@shy":{a:"////////////////////////////17.2F2.2F/16.FG4FGF/16.8I/17.6F/18.4I",pal:{F:"#6A1F3F",G:"#A3305A",I:"#3A0F22"}},"darklips@shock":{a:"////////////////////////////19.2F/18.F2.F/18.F2.F/18.F2.F/19.2G",pal:{F:"#6A1F3F",G:"#3A0F22"}},fangs:{a:"/////////////////////////////17.6F/17.FG2FGF/18.F2IF/19.2F",pal:{F:"#3B1C28",G:"#FFFFFF",I:"#FF8FB0"}},"fangs@happy":{a:"/////////////////////////////18.F2.F/18.F2.F",pal:{F:"#FFFFFF"}},"fangs@sleepy":{a:"//////////////////////////////19.2F",pal:{F:"#FFFFFF"}},"fangs@love":{a:"/////////////////////////////18.F2.F/18.F2.F",pal:{F:"#FFFFFF"}},"fangs@pumped":{a:"/////////////////////////////18.F2.F/18.F2.F",pal:{F:"#FFFFFF"}},"fangs@sad":{a:"/////////////////////////////19.3F/18.FGFGF/17.2F3.2F",pal:{F:"#3B1C28",G:"#FFFFFF"}},"fangs@wink":{a:"/////////////////////////////17.6F/17.FG2FGF/18.F2IF/19.2F",pal:{F:"#3B1C28",G:"#FFFFFF",I:"#FF8FB0"}},"fangs@shy":{a:"/////////////////////////////17.6F/17.FG2FGF/18.F2IF/19.2F",pal:{F:"#3B1C28",G:"#FFFFFF",I:"#FF8FB0"}},"fangs@shock":{a:"//////////////////////////////19.2F",pal:{F:"#FFFFFF"}},specs:{a:"/////////////////////9.7F8.7F/8.FGF3.3F6.FGF3.3F/6.3FG5.9FG5.4F/8.F6.2F6.F6.2F/8.F6.2F6.F6.2F/8.2F4.3F6.2F4.3F/9.7F8.7F",pal:{F:"#8B5A3C",G:"#C98A55"}},shades:{a:"//////////////////////3.34o/8.oF6Go6.oF6Go/8.oGF5Go6.oGF5Go/8.o7Go6.o7Go/9.o5Go8.o5Go/10.5o10.5o",pal:{F:"#7A6A8A",G:"#2B1E2F"}},pinkshades:{a:"///////////////////////9.7o8.7o/8.o2FG4F8o2FG4Fo/8.o6FIo6.o6FIo/9.o5Io8.o5Io/10.5o10.5o",pal:{F:"#FF8FB0",G:"#FFFFFF",I:"#E85A8C"}},heartglasses:{a:"//////////////////////10.2o.2o10.2o.2o/9.o2Fo2Fo8.o2Fo2Fo/9.oG4F10oG4Fo/9.o5Fo8.o5Fo/10.o3Fo10.o3Fo/11.oFo12.oFo/12.o14.o",pal:{F:"#FF6F91",G:"#FFD6E2"}},monocle:{a:"/////////////////////25.5F/24.FG3.GF/23.FGI4.GF/23.F7.F/23.F7.F/23.F6.JF/24.F4.JF/25.5F/29.F/30.F/30.F/29.F",pal:{F:"#E8BE3F",G:"#FFF1B8",I:"#FFFFFF",J:"#C98A2A"}},eyepatch:{a:"////////////////17.o/18.o/19.o/20.o/21.o/22.o.7o/23.o2FG4Fo/23.oFG5F6o/23.o3FI3Fo/23.o7Fo/23.o7Fo/24.o5Fo/25.5o",pal:{F:"#2B1E2F",G:"#4B3A55",I:"#FF6F91"}},visor:{a:"/////////////////////7.26o/3.2o.oF24GFo.2o/3.I2oJK26J2oI/3.L2oJ6MG13MG6M2oL/3.I2o6MGMG11MGMG5M2oI/3.3o5MG3MG9MG3MG4M3o/5.o28No/6.28o",pal:{F:"#B8FFFC",G:"#5FF7F2",I:"#2B1E2F",J:"#4A3B78",K:"#8E7BD0",L:"#FF4FD8",M:"#3B2D63",N:"#24193F"}},freckles:{a:"//////////////////////////7.F10.G2.G10.F/5.G3.F7.F4.F7.F3.G/4.F3.G22.G3.F/6.F26.F",pal:{F:"#C98A6A",G:"#B0704A"}},beautymark:{a:"//////////////////////////////24.2F/24.F",pal:{F:"#3B1C28"}},stars:{a:"////////////////////////////6.o26.o/5.oFo24.oGo/4.o3Fo22.o3Go/5.oFo24.oGo/4.o.o.o22.o.o.o",pal:{F:"#FFD24D",G:"#FF8FB0"}},blush:{a:"////////////////////////////4.6F20.6F/3.FGFGFG2F18.2FGFGFGF/4.6F20.6F",pal:{F:"#FFAFC6",G:"#FF7AA3"}},hearts:{a:"///////////////////////////5.o.o24.o.o/4.oFoFo22.oFoFo/4.o3Fo22.o3Fo/5.oFo24.oFo/6.o26.o",pal:{F:"#FF6F91"}},glitter:{a:"/////////////////////6.F/5.FGF/6.F//34.G/4.I28.3G/3.IGI28.G/4.I///8.G26.I/7.3G24.IGI/8.G26.I",pal:{F:"#FF8FB0",G:"#FFFFFF",I:"#FFD24D"}},plaster:{a:"///////////////////////////29.6o/28.o2FG3Fo/28.oF3G2Fo/28.o2FG3Fo/29.6o",pal:{F:"#F1C9A5",G:"#D9A47E"}},startattoo:{a:"/////////////////////////////7.F/6.FGF/5.F3GF/6.FGF/5.F3.F",pal:{F:"#5C3F92",G:"#9C7BE0"}},stitches:{a:"//////////////////////////////29.F.F.F.F/29.7F/29.F.F.F.F",pal:{F:"#4A2433"}}},necks:{pearls:{a:"/////////////////////////////////////18.F32.F/18.GF31.I/18.JK29.2FL/19.M3F25.FNF/20.FGK.F20.3FIP/21.JMFGF.2F.F8.2F.2F.INFL/23.FJQFGQFGF.2F.2F.GQFGQFLP/25.RFSRFSQFGQFGQFSRFSRF/31.RFSRFSRF/34.oTo/34.3o/33.oGUVo/33.oU2Vo/34.oVo/35.o",pal:{F:"#8C7090",G:"#FFFFFF",I:"#D8CFDD",J:"#E9D4E0",K:"#F2E1EA",L:"#CCA1BC",M:"#CFB3C5",N:"#D7ABC6",P:"#B086A3",Q:"#F0DDE8",R:"#C9A9BE",S:"#E6CEDC",T:"#C9C3D6",U:"#FFD0DF",V:"#E890AE"},ao:[-15,-8]},cross:{a:"///////////////////////////////////////18.F32.G/19.I30.J/20.F28.G/21.IF24.GJ/23.IF20.GJ/25.KLKLKL8.KLKLKJ/31.KLKLKLKL/34.oMo/34.3o/34.oNo/32.3oM3o/32.o3N2Mo/32.3oM3o/34.oMo/34.oPo/34.3o",pal:{F:"#C2BACF",G:"#6B5576",I:"#92749E",J:"#998FAD",K:"#7B6C86",L:"#B9B1C8",M:"#C9C3D6",N:"#FFFFFF",P:"#8C7C96"},ao:[-15,-8]},studs:{a:"/////////////////////////////////////18.F32.G/18.IF30.GJ/18.KIF28.GJL/19.KMNF24.2GJL/20.K2I2F20.2GJPN/21.2KIMN5Q8.5QG2J2L/23.2K3RMNR8QRMN2RPNL/25.6SRMN2RMNR5SL/31.8S/34.oPo/34.o.o/33.oToPo/33.o2PNo/34.oNo/35.o",pal:{F:"#553E5D",G:"#302535",I:"#49324F",J:"#241A27",K:"#3D2537",L:"#150E14",M:"#F4F2FA",N:"#8C7C96",P:"#C9C3D6",Q:"#3A2B40",R:"#2B1E2F",S:"#1A1018",T:"#FFFFFF"},ao:[-15,-8]},diamonds:{a:"//////////////////////////////////////51.F/18.G32.I/19.J30.K/20.GF27.L/21.IG22.F.LK/23.JG2.F11.F5.IK/25.MNINMN2.F5.INMNMK/31.MNINMNMN/34.oPo/35.o/34.oQo/33.oQFIo/33.oF2Io/34.oIo/35.o",pal:{F:"#BFE9F5",G:"#DDD7E7",I:"#6FB0CF",J:"#9F84AA",K:"#B2A7C8",L:"#796086",M:"#8C7C96",N:"#D8D2E4",P:"#C9C3D6",Q:"#F2FCFF"},ao:[-15,-8]},scarf:{a:"///////////////////////////////////18.o32.o/18.Ao30.oB/18.BAo28.o2B/18.C2A2o24.2oB2C/18.C2B2A2o20.2o3B2D/19.2CAB2A6o8.6o3B2CD/20.CBCAB6A8o4A3B2C2D/21.2CBCABABAB9ABA2B2C3D/23.2CBCBCBCABABABA2BCB5o/25.6CBCBCBCB4CoBCDo/31.8C3.oBCDo/42.oBCDo/42.o2CDo/42.2o.2o/42.o.o.o",ao:[-15,-8]},medal:{a:"//////////////////////////////////////18.F32.G/18.IF30.GJ/19.IF28.GJ/20.I2F24.2GJ/21.2I2F20.2G2J/23.2I6K8.5LG2J/25.6M4K4L5NJ/31.4M4N/34.oPo/34.3o/33.oQ2Po/33.o2PRo/33.oP2Ro/34.3o",pal:{F:"#8ECCF2",G:"#F73854",I:"#609FCF",J:"#A2273C",K:"#7FC0F0",L:"#FF6A78",M:"#4A8CC8",N:"#C8283A",P:"#FFD24D",Q:"#FFF1B8",R:"#C98A2A"},ao:[-15,-8]},bowtie:{a:"//////////////////////////////////////18.B32.B/18.CB30.BC/19.CB28.BC/20.C2B9.2o3.2o8.2BC/21.2C2B7.oA3oCo6.2B2C/23.2C6B.oABoBCo6B2C/25.6CBoB3oDo6C/31.C2o3C2o",ao:[-15,-8]},choker:{a:"/////////////////////////////////////18.F32.G/18.IF30.GJ/18.KIF28.GJL/19.KI2F24.2GJL/20.K2IFM20.2G2JL/21.2K2IM5N8.5NG2J2L/23.2K6P8N5PJ2L/25.6Q8P5QL/31.8Q",pal:{F:"#644C6F",G:"#3F3246",I:"#49324F",J:"#241A27",K:"#3D2537",L:"#150E14",M:"#6E5C7A",N:"#4B3A55",P:"#2B1E2F",Q:"#1A1018"},ao:[-15,-8]},winechoker:{a:"/////////////////////////////////////18.F32.G/18.IF30.GJ/18.KIF28.GJL/19.KI2F24.2GJL/20.K2IFM20.2G2JL/21.2K2IM5N8.5NG2J2L/23.2K6P8N5PJ2L/25.6Q8P5QL/31.8Q/34.oRo/35.o/34.oSo/33.oS2Ro/34.oRo/35.o",pal:{F:"#BB5E7A",G:"#90415F",I:"#AE2C4F",J:"#73223E",K:"#861B3C",L:"#4C1228",M:"#D77898",N:"#B04A6B",P:"#8E2443",Q:"#5E132C",R:"#D0304F",S:"#FFB3C6"},ao:[-15,-8]},locket:{a:"///////////////////////////////////////18.F32.G/19.I30.J/20.F28.G/21.IF24.GJ/23.IF20.GJ/25.KLKLKL8.KLKLKJ/31.KLKLKLKL/34.oLo/34.o.o/33.oMoLo/33.o3Lo/33.o2LKo/34.oKo/35.o",pal:{F:"#FFD862",G:"#A36829",I:"#D69A3D",J:"#F6AD21",K:"#C98A2A",L:"#FFD24D",M:"#FFF1B8"},ao:[-15,-8]},bell:{a:"/////////////////////////////////////18.F32.G/18.IF30.GJ/18.KIF28.GJL/19.KI2F24.2GJL/20.K2I2F20.2G2JL/21.2K2I6M8.5MG2J2L/23.2K6N8M5NJ2L/25.6P8N5PL/31.8P/34.oQo/35.o/34.oRo/33.oR2Qo/33.o2QSo/33.5o/35.o",pal:{F:"#FF8A94",G:"#F74561",I:"#EB4B53",J:"#CD1F36",K:"#C82430",L:"#881E2E",M:"#FF7A88",N:"#E8323F",P:"#A81E2B",Q:"#FFD24D",R:"#FFF1B8",S:"#C98A2A"},ao:[-15,-8]},ribbon:{a:"/////////////////////////////////////18.A32.A/18.BA30.AB/18.CBA28.ABC/19.CB2A24.2ABC/20.C2B2A7.2o3.2o6.2A2BC/21.2C2B6A.oAo.oBo6A2B2C/23.2C6BAoABoBCo6B2C/25.6C2B2oB2oB6C/31.2CoBoCoC/33.2o.2o",ao:[-15,-8]},daisychain:{a:"///////////////////////////////////////18.F3.o25.o2.G/19.I.oJo23.oKoL/20.oJMJo4.o11.o4.oKMKo/21.oJo4.oJo4.o4.oJo4.oKo/22.oIF2.oJNJo2.oJo2.oJNJo.GL.o/25.2PQoJo2.oJMJo.QoJoPL/29.o.2PQoJo2P2.o/35.o",pal:{F:"#8DCB7F",G:"#55B14F",I:"#5DAD62",J:"#FFFFFF",K:"#EADFF0",L:"#447E4F",M:"#FFC93C",N:"#FF9DBA",P:"#4E9A55",Q:"#7CC46E"},ao:[-15,-8]},moonpend:{a:"///////////////////////////////////////18.F32.G/19.I30.J/20.F28.G/21.IF24.GJ/23.IF20.GJ/25.KLKLKL8.KLKLKJ/31.KLKLKLKL/34.oMo/34.2o/33.oNo/33.oNPo/33.o2Po/33.o3Po.o/34.o3PQo/35.4o",pal:{F:"#D0CADB",G:"#6B5576",I:"#92749E",J:"#A69DBA",K:"#7B6C86",L:"#C9C3D6",M:"#FFD24D",N:"#FFF6C8",P:"#FFE27A",Q:"#D9A62E"},ao:[-15,-8]},lace:{a:"/////////////////////////////////////18.F32.G/18.IF31.I/18.JF29.2GK/19.J3F25.2GK/20.JIF.F20.3GIK/21.2JFIL.2L.L8.2L.2L.IG2K/23.2J2LI2LIL.2L.2L.I2LILG2K/25.6M2LI2LI2L5MK/31.8M/34.oNo/34.3o/33.oLPLo/34.oPo/35.o",pal:{F:"#49324F",G:"#241A27",I:"#5E4A66",J:"#3D2537",K:"#150E14",L:"#2B1E2F",M:"#1A1018",N:"#C9C3D6",P:"#FF8FB0"},ao:[-15,-8]},goldchain:{a:"///////////////////////////////////////18.F32.G/19.I30.J/20.F28.G/21.IF24.GJ/23.IF20.GJ/25.KLKLKL8.KLKLKJ/31.KLKLKLKL/34.oMo/35.o/34.oNo/33.oNPQo/34.oQo/35.o",pal:{F:"#FFE48A",G:"#A36829",I:"#D69A3D",J:"#F7BE45",K:"#C98A2A",L:"#FFE07A",M:"#FFD24D",N:"#FFD3E0",P:"#FF6F91",Q:"#C23E68"},ao:[-15,-8]},batchoker:{a:"/////////////////////////////////////18.F32.G/18.IF30.GJ/18.KIF28.GJL/19.KI2F24.2GJL/20.K2I2F5.2o7.2o4.2G2JL/21.2K2I5MoMo.o.o.oMo3MG2J2L/23.2K5No2MoMoMo2Mo3NJ2L/25.5Po9Mo3PL/31.o2MQMQ2Mo/31.oMo3MoMo/32.o.3o.o",pal:{F:"#644C6F",G:"#3F3246",I:"#49324F",J:"#241A27",K:"#3D2537",L:"#150E14",M:"#4B3A55",N:"#2B1E2F",P:"#1A1018",Q:"#FF6F91"},ao:[-15,-8]},coffinlocket:{a:"///////////////////////////////////////18.F32.G/19.I30.J/20.F28.G/21.IF24.GJ/23.IF20.GJ/25.KLKLKL8.KLKLKJ/31.KLKLKLKL/34.oMo/34.3o/33.oNPNo/33.o3Qo/33.oNQNo/33.oNQNo/34.oNo/35.o",pal:{F:"#C2BACF",G:"#6B5576",I:"#92749E",J:"#998FAD",K:"#7B6C86",L:"#B9B1C8",M:"#C9C3D6",N:"#4B3A55",P:"#FFD3E0",Q:"#FF8FB0"},ao:[-15,-8]},sailor:{a:"/////////////////////////////////17.Fo32.oG/17.Fo32.oG/17.FIo30.oJG/17.FIo30.oJG/18.FIKo26.oLJG/18.FIKo26.oLJG/18.FMI2K2o20.2o2LJNG/19.FM2I2K8o5.7o2L2JNG/20.F2M2I6KoP5oQo5K2J2NG/21.2F2M6Io3PoP2Qo5I2N2G/23.2F6Mo2PoPo2Qo5M2G/25.6F2oMoPoM2o5F/31.3FoPo2F/33.oPQPo/33.oPoQo/33.2o.2o",pal:{F:"#22306B",G:"#1F2857",I:"#FFFFFF",J:"#D9D2E6",K:"#3D4E9E",L:"#364281",M:"#2E3C80",N:"#293268",P:"#FF5A6A",Q:"#C8283A"},ao:[-15,-8]},heartbrooch:{a:"//////////////////////////////////////18.F32.G/18.IF30.GJ/19.IF28.GJ/20.I2F6.o3.2o.2o3.o5.2GJ/21.2I2F4.oK2oLMoMN2oKo3.2G2J/23.2I4PoQKo4MNo2Ko2PG2J/25.5RoQKo2MNo2Ko3RJ/31.4oMN4o/35.oNo/36.o",pal:{F:"#FFBCD3",G:"#F973AA",I:"#EB7697",J:"#DA3B74",K:"#FFD24D",L:"#FFE3EC",M:"#FF4F8B",N:"#C42D6A",P:"#FFB3CF",Q:"#FFF1B8",R:"#E8638C"},ao:[-15,-8]},jobcrystal:{a:"///////////////////////////////////////18.F32.G/19.I30.J/20.F28.G/21.IF24.GJ/23.IF20.GJ/25.KLKLKL8.KLKLKJ/31.KLKLKLKL/34.oLo/35.o/34.oMo/33.oMNPo/33.oMNPo/33.o2NPo/33.oN2Po/33.oNPQo/34.oPo/35.o",pal:{F:"#D0CADB",G:"#6B5576",I:"#92749E",J:"#A69DBA",K:"#7B6C86",L:"#C9C3D6",M:"#E8FBFF",N:"#8FD3FF",P:"#4E95DB",Q:"#2E5FA8"},ao:[-15,-8]},ledchoker:{a:"/////////////////////////////////////18.F32.G/18.IF30.GJ/18.IKF28.G2J/19.2I2F24.2GKJ/20.2IL2F20.2G3J/21.4I6M8.5MGJL2J/23.2IK2NL2N8MNL2NK3J/25.6NK2NL2NK6NJ/31.8N",pal:{F:"#49324F",G:"#241A27",I:"#3D2537",J:"#150E14",K:"#FF4FD8",L:"#5FF7F2",M:"#2B1E2F",N:"#1A1018"},ao:[-15,-8]},girlfriends:{a:"///////////////////////////////////////18.F32.G/19.I30.J/20.F28.G/21.IF24.GJ/23.IF20.GJ/25.KLKLKL8.KLKLKJ/30.2oL2oKLKL/29.oMNoNP2o.2o/29.o4NoQRoRSo/30.o2NPo4RSo/31.oPo.o2RSo/32.o3.oSo/37.o",pal:{F:"#FFD862",G:"#A36829",I:"#D69A3D",J:"#F6AD21",K:"#C98A2A",L:"#FFD24D",M:"#FFE3EC",N:"#FF6F91",P:"#C23E68",Q:"#F1EAFE",R:"#B79DE3",S:"#7E5FB8"},ao:[-15,-8]}},held:{wand:{a:"//20.2F/15.F3.F2Go/10.I3.FGo.F2GJo/9.IKI2.F2Go2G2Jo/10.I3.F4G3Jo/15.o2G3J2o/14.F2G5JLo/13.FG7J2Lo/12.F6JL4o/13.3oMJ2Lo/14.NMPo2Lo/13.NMPo.oLo/12.NMPo3.o4.I/11.oMPo8.IKI/10.oQPo10.I/9.NMPo/8.oMPo/7.oQPo/6.NMPo/5.oMPo/4.oQPo/3.NMPo/4.2o",pal:{F:"#B07A22",G:"#FFF1B8",I:"#FFF6C8",J:"#FFD24D",K:"#FFE27A",L:"#E8A93A",M:"#FFD3E0",N:"#B23E66",P:"#F48FAE",Q:"#FFFFFF"}},rose:{a:"//14.F.3F.F/13.FGoGIGoGo/12.FGIG3IGIGo/12.FG3IJ3IGo/12.FGJ5I2Jo/13.oGJ3I2Jo/13.F2G3JGJo/14.o4GJo/15.o3Jo/14.K5Lo/15.oL3o/14.KLo/8.2K3.KLo/7.KLMo.KNo/6.KLMLoKL2o/5.K3LoKLoNPo/6.3oKL2oPNPo/8.KNo2.o3Po/7.KLo4.3o/6.KLo/5.KLo/4.KNo/5.o",pal:{F:"#6E1426",G:"#E8405A",I:"#FF8A9B",J:"#9E2340",K:"#2F6E3E",L:"#5BAE5E",M:"#9EDB86",N:"#7CC46E",P:"#4E9A55"}},parasol:{a:"/16.F/12.4FGo3F/11.FI5GI2Go/10.F3I3GI3GI2o/10.JK3IGI3GI2LMo/10.J2K2IL3GI3LIo/11.2oKL2IGI3L3Io/12.J2K3I3L3ILo/13.o2KI3L3I2Lo/14.2oK2L3I3Lo/15.o2K3I5Lo/14.oN2oKI5Lo/13.oPo.J2K5Lo/12.oNo3.o2K4Lo/11.oPo5.2oK3Lo/10.oNo7.J2KLo/9.oPo9.3o/8.oNo/7.oPo/6.oNo/5.oPo/4.oNo/3.oNo/3.o2No/4.2o",pal:{F:"#B23E66",G:"#FFE3EC",I:"#FFC2D3",J:"#B39AA8",K:"#FFFFFF",L:"#F48FAE",M:"#FFD24D",N:"#8B5A3C",P:"#A9744A"}},lolly:{a:"///15.5F/13.2F5GoF/12.FG6I2Go/11.F3IG5I2Go/11.F2I5G3IGo/10.F3I6G2I2Go/10.F2I7G2IGJo/10.F2I2G2I3G2I2Jo/10.F2I2G2I2G2IK2Jo/10.F2I2G5IK3Jo/11.oI3G3IK3Jo/11.F2I4G5Jo/11.FG2I2G4JKo/10.FGL2oI4K2o/9.FGLo2.5o/8.FGLo/7.FGLo/6.FGLo/5.FGLo/4.FGLo/3.FGLo/4.2o",pal:{F:"#B23E66",G:"#FFFFFF",I:"#FF6F91",J:"#FFE3EC",K:"#E8506A",L:"#DCD4E8"}},balloon:{a:"//10.3F2.3F/9.F3GoF3G2o/8.FG2I7GJo/8.FGIK7GJo/8.F10GJo/8.F9G2Jo/9.o7G2Jo/10.o5G2Jo/11.o3G2Jo/12.oG2Jo/13.oJo/12.o3Jo/13.3o/14.L/14.L/13.L/13.L/11.2L/10.L/8.2L/7.L/6.L",pal:{F:"#B23E66",G:"#FF8FB0",I:"#FFFFFF",J:"#E8638C",K:"#FFD3E0",L:"#8C7C96"}},dumbbell:{a:"///17.3F/16.F3Go/15.F4GIo/15.F3G3Io/16.oG5Io/17.o4I2Jo/16.KLM2I3Jo/15.KL2Mo4Jo/14.KL2Mo.o2Jo/13.KLMNo3.2o/12.KLMNo/11.KLMNo/5.2F3.KLMNo/4.F2Go.KLMNo/3.F4GoL2Mo/3.F3G2I2Mo/3.F2G4Io/4.o5IJo/5.o3I3Jo/6.oI4Jo/7.o3Jo/8.3o",pal:{F:"#B23E66",G:"#FFD3E0",I:"#FF8FB0",J:"#E8638C",K:"#6E5C7A",L:"#E6E1EE",M:"#9C8FAE",N:"#8C7C96"}},can:{a:"//////7.4o/6.o4Fo/5.oF4oFo12.G/4.oFo.3IoFo2I7.2I/4.oFoI8Go5.I2Jo/4.oFo9GJo3.IJGJG/4.oF2G9JFo.I3Jo/4.oFG10JFoI2J2oG/5.oG3JKJK4JFI2Jo/5.IG4JK5JFIJo/5.IG3JKLK4JFIo/5.IG4JK5JFo/5.IG3JKJK4JFo/5.IG10JFo/5.IG9J2FIo/6.o10F2o/7.10o",pal:{F:"#3E7FC9",G:"#9FD0F5",I:"#2E5FA8",J:"#62A9E2",K:"#FFFFFF",L:"#FFD24D"}},teacup:{a:"///15.F/14.F/9.F5.F/10.F3.F/9.F//7.10o/6.o10Go/5.IJ10GJo/5.IJ10KJ4o/5.IJK2LK2LK2LKJo2.o/6.o10Ko3.o/6.I10K4o/7.o8KMo/5.3Io6KMo4I/4.IN14JNo/3.I18No/4.o16Mo/5.16o",pal:{F:"#DCD4E8",G:"#C98A5A",I:"#B39AA8",J:"#FFFFFF",K:"#FFF6F8",L:"#FF8FB0",M:"#DCCFD6",N:"#F2E8EE"}},bouquet:{a:"///16.o/15.oF3o/14.oFG3Io/13.oFoIJ3I2o/12.oFGF2IK2IoFo/11.o3Lo4IMFGFo/10.oLN3LoI2M4o/10.o2LK2L4o3Po/10.o4L3QoPR3Po/11.oLSQT3Q2PK2Po/10.oF2o2QK2Q4PUo/9.oFGFo4Q3I2UFo/8.2oJ2oVoQXIJ3IFGFo/8.oYoYoVM2o2IK2I3o/7.oZoYoV3Mo4IMo/8.oYVYo2Mo.oI2Mo/7.oV2Z2M2o3.3o/6.o3V2Zo/6.o2V3o/5.oV2o/6.o",pal:{F:"#5BAE5E",G:"#A6E08E",I:"#FF8FB0",J:"#FFD3E0",K:"#FFD24D",L:"#C9B2EE",M:"#E8638C",N:"#EDE4FB",P:"#FFF6EC",Q:"#FFB38A",R:"#FFFFFF",S:"#8E70C4",T:"#FFE0C8",U:"#E6D3C2",V:"#FF9DBA",X:"#E8865A",Y:"#E8506A",Z:"#C42D5A"}},scepter:{a:"//21.F/20.FGo/19.FGIGo/18.FGI3Go/16.2o4G2o/15.o3J2GoGo/14.o3K2JG2o/13.oJ3K4Jo/13.oJ3K3JLo/13.o6J2Lo/13.o5J3Lo/13.F2G2J3Lo/12.FM2GJ3Lo/11.FMN6o/10.FMNo/9.FMNo/8.FMNo/7.FMNo/6.FMNo/5.FMNo/4.FMNo/3.FMNo/4.2o",pal:{F:"#8E5A1E",G:"#FFD24D",I:"#FFF1B8",J:"#D0304F",K:"#FF8A9B",L:"#8E1F35",M:"#FFE27A",N:"#C98A2A"}},crystalwand:{a:"////18.4F/11.G5.F3IGo/10.GJG3.F2KGLGo/11.G3.F2KGLMGo/14.F2KGL2MGo/13.FLKGL3Mo/13.FLGL3Mo/13.FLN3Mo/13.oN3Po/13.Q4o/12.QRSo7.G/11.QRSo7.GJG/10.QRSo9.G/9.QRSo/8.QRSo/7.QRSo/6.QRSo/5.QRSo/4.QRSo/3.QRSo/4.2o",pal:{F:"#3E7FA0",G:"#BFE9F5",I:"#F2FCFF",J:"#FFFFFF",K:"#E3F7FC",L:"#8FD3E8",M:"#6FB8D6",N:"#B79DE3",P:"#5FA8C8",Q:"#4A3478",R:"#C9B2EE",S:"#8E70C4"}},heartwand:{a:"////15.3F/11.G2.F3Io/10.GJGFI2G2Io/11.G.FIG3Io/13.F6IoF/13.F8Io/13.F8IKo/13.F8IKo/13.F7I2Ko/13.L3I5Ko/12.LMN7o/11.LMNo8.G/10.LMNo8.GJG/9.LMNo10.G/8.LMNo/7.LMNo/6.LMNo/5.LMNo/4.LMNo/3.LMNo/4.2o",pal:{F:"#B23E66",G:"#FFD3E0",I:"#FF8FB0",J:"#FFFFFF",K:"#E8638C",L:"#B07A22",M:"#FFF1B8",N:"#E8A93A"}},voodoo:{a:"////23.2F/22.F2Go/21.FGIGo/8.2J5.2J4.F2Go/7.J2Ko3.J2Ko4.oLo/6.J4Ko.J4Ko2.oLo/6.JKM2Ko.JKM2Ko.oLo/6.JKM2Ko.JKM2K2oLo/6.JKM2Ko2JKM2Ko.o/5.J13Ko/4.J11KN2KPo/4.J2KQNQ5K2R2KPo/4.J3KQ5KRS2RKPo/4.J2KQKQKN2K3R2KPo/4.J14KPo/4.J3KQKQKQKQKQK2Po/4.J4K7QKNKPo/5.o11K2Po/6.o2K9Po/7.11o",pal:{F:"#B23E66",G:"#FF6F91",I:"#FFD3E0",J:"#8B6A4A",K:"#E8D3B5",L:"#B9B5C8",M:"#FFB3C7",N:"#D9BF9A",P:"#C9A77F",Q:"#3B1C28",R:"#8E2443",S:"#E8506A"}},lantern:{a:"/////11.6o/10.o6Fo/9.oF6oFo/8.oFo2.2G2.oFo/8.oFo.G2Io.oFo/8.oFoG2IJo.oFo/8.4o2J5o/7.o2KL3KL3KLo/6.o3KL3KL3K2Lo/6.o2K2ML2KLK2MLKLo/6.o2K3M2KL3M2KLo/6.o3KL3KL3KLKLo/6.o2KL2KMKLM2KLKLo/6.o2K9MLKLo/7.o2KM2KM2KM2KLo/8.o10Lo/9.10o",pal:{F:"#5E3524",G:"#2F6E3E",I:"#7CC46E",J:"#4E9A55",K:"#FF9F45",L:"#E8812F",M:"#FFE27A"}},greatsword:{a:"//23.2F/21.2F2Go/20.F2IGJo/19.FI2GJo/18.FI2GJKo/17.FIGLJKo/16.FIGLJKo/15.FIGLJKo/14.FIGLJKo/13.FIGLJKo/7.2M3.FIGLJKo/6.MNPo.FIGLJKo/7.oNPoIGLJKo/8.oNQGLJKo/9.oNRJKo/9.oSNPo/8.oTUoVXo/7.oSTo.oVXo/6.oTUo3.2o/5.YSTo/4.MNUo/3.MNPVo/4.oVo/5.o",pal:{F:"#8C7C96",G:"#E6E1EE",I:"#FFFFFF",J:"#C9C3D6",K:"#9C8FAE",L:"#B9AECB",M:"#B07A22",N:"#FFF1B8",P:"#FFD24D",Q:"#B8FFF6",R:"#5FD3C9",S:"#B98458",T:"#5E3524",U:"#7E4A2A",V:"#E8A93A",X:"#C98A2A",Y:"#4A2A1A"}},neonkatana:{a:"//23.F/22.FGo/21.FGIo/20.FGIo/19.FGIJo/18.FGIJo/17.FGIJo/16.FGIJo/15.FGIJo/14.FGIJo/13.FGIJo/9.2K.FGIJo/8.K2LoGIJo/7.KLML2oJo/7.K2Lo2.o/7.oLNo/6.oPNo/5.oPLo/4.oLNo/3.oPNo/2.oNLo/2.o2Qo/3.2o",pal:{F:"#2A8FA0",G:"#B8FFFC",I:"#5FF7F2",J:"#22B8C9",K:"#8E1F6E",L:"#FF4FD8",M:"#FFB3F0",N:"#2B1E2F",P:"#3B2D4A",Q:"#1A1018"}},woodsword:{a:"////20.3F/19.o2GIo/18.oJ2Io/17.oG2IKo/16.oJ2IKo/15.FG2IKo/14.oG2IKo/13.oJ2IKo/12.FG2IKo/8.2L.FG2IKo/7.L2MoG2IKo/8.o2M2IKo/9.o2FKo/8.o2N2Fo/6.Lo2N2o2Fo/5.LM2No2.2o/5.o2Fo/6.oPo/7.o",pal:{F:"#8B5A3C",G:"#F2C48D",I:"#D9A066",J:"#C48A55",K:"#A9744A",L:"#5E3524",M:"#B07A4E",N:"#DCCFD6",P:"#6E4430"}},meat:{a:"/22.F/21.FGo/13.4I3.F2GJo/11.2I4K2oF2G2JLo/10.IK3M3KNo2G2JLo/9.IK2MP3K3N2J2Lo/8.IK2MP3K5N2Lo/7.IKM4K7N2Qo/7.I5K4NQ3N2Qo/7.I4K2NQ3NQ2N2Qo/6.I4K4NQ4N3Qo/6.I3K9N3QIo/6.I2K9N4QIo/6.o9N5QIo/7.o6N6QIo/7.oJ2N8QIo/6.F2GJ2Q6I2o/5.F2GJL8o/3.2F2GJLo/2.F3GJLo/.F3G2JLo/2.o2GJLo/.F2GJLo/2.o2Lo/3.2o",pal:{F:"#B39AA8",G:"#FFF6EC",I:"#5E2A1A",J:"#E8D8D0",K:"#C9733F",L:"#C9B3BC",M:"#E39A63",N:"#A8582F",P:"#F7C08A",Q:"#7E3B22"}},scythe:{a:"//14.8F/11.3F3G5Io/10.F3G3J5Ko/9.FG3J3L5Io/8.FGJ3L6oMNo/7.FGJL3o5.PQRo/7.FJLo7.PQRo/6.FGJo7.PQRo/6.FJLo6.PQRo/6.FJo6.PQRo/5.FGLo5.PQRo/5.FJo2.2o.2oRo/4.FGLo.STUoUTo/4.oLo3.o2TUo/5.o4.PoRo/9.PQRo/8.PQRo/7.PQRo/6.PQRo/5.PQRo/4.PQRo/3.PQRo/4.2o",pal:{F:"#8C7C96",G:"#F4F2FA",I:"#E6E1EE",J:"#C9C3D6",K:"#B2A6C4",L:"#FFFFFF",M:"#6E5C7A",N:"#4B3A55",P:"#1A1018",Q:"#5E4B6E",R:"#2B1E2F",S:"#B23E66",T:"#FF8FB0",U:"#FFD3E0"}},coffinbag:{a:"////12.4F/11.F4Go/10.FG4oGo/9.FGo4.oGo/9.FGo5FGo/9.FG6IJo/8.FG2I2J2K2JFo/7.FGI9JFo/6.FGI11JFo/6.FI12JFo/6.FI5JLM5JFo/7.oI4JLM4JFo/7.FI2J2L4M2JFo/7.FI3J2MLM3JFo/8.oI3JLM3JFo/8.FI3JLM3JFo/8.FI8JFo/9.oI6JFo/9.FI6JFo/10.o6Fo/11.6o",pal:{F:"#1A1018",G:"#6E5C7A",I:"#4B3A55",J:"#2B1E2F",K:"#FFD24D",L:"#FFD3E0",M:"#FF8FB0"}},moonwand:{a:"//23.F/22.FGF/15.I2.o.o2.F/13.2IJ2oKoKo/12.ILJ2oKM3Ko/11.IL2J2o4KNo/10.IL3Jo.o2KNo/10.IL3Jo2.oNo/9.IL4Jo3.o/9.IL4Jo/9.oP4JP2o3.o/10.oL4JLPoIoPo.F/10.oP6J3LPoFGF/10.ILP7JPo2.F/10.QM3P3J2Po/9.QRS3o3P2o/8.QMSo3.3o/7.QMSo/6.QRSo/5.QMSo/4.QMSo/3.QRSo/4.2o",pal:{F:"#FFF6C8",G:"#FFE27A",I:"#B07A22",J:"#FFD24D",K:"#FF4F8B",L:"#FFF1B8",M:"#FFD3E0",N:"#C42D6A",P:"#E8A93A",Q:"#B23E66",R:"#FFFFFF",S:"#F48FAE"}},grimoire:{a:"///4.FG13IG/3.FIJ13KJ4o/3.FIJ13LJ3MNo/3.FI14LN3MNo/3.oP14LNMQMNo/3.FI14LN3MNo/3.FILo6Lo5LNMQMNo/3.FI3L7o4LN3MNo/3.FI2Lo7Ro3LNMQMNo/3.FILo2R3S3Ro3LN3MNo/3.FILoRS2F2S2Ro7PNo/3.FILoRSFT2S2Ro7JNo/3.FILo2R3S3Ro3LNMQMNo/3.FI2Lo7Ro3LN3MNo/3.FI3L7o4LNMQMNo/3.FI14LN3MNo/3.oP14LNMQMNo/3.FI14LN3MNo/3.FIJ13LJ3MNo/4.oJ13NJ3MNo/5.15o4No/20.4o",pal:{F:"#1A1018",G:"#8E5A1E",I:"#3E2A66",J:"#FFD24D",K:"#8E70C4",L:"#6B4FA0",M:"#FFF6EC",N:"#4A3478",P:"#FFE27A",Q:"#E6D3C2",R:"#FFF6F8",S:"#5FD3C9",T:"#FFFFFF"}}},pets:{kitten:{a:"///6.2F9.2F/5.F2Go7.F2Go/5.FGIGo5.FGIGo/4.FG2I2Go4F2G2IGo/4.FG2I9G2IGo/3.F6GJ2GJ7Go/3.FGK4GJ2GJ7GLo/2.FGK6G2J8GLo/2.FGK3GMN5GMN4GLo/2.F5G2N5G2N4GLo/2.2JG2PG2N2G2IG2NG2PG2J/3.J7GQ2GQ5GLJ/2.J.o7G2Q5GLo.J/5.o13GLo2.2o/4.FGK4G4R5GL2o2So/4.FGKJ2G6R2GJGLo.oSo/3.FGKGJG8RGJ2GL2o2So/3.FGK3G8R4GL3oSo/3.F6G6R5GL4So/3.F17G2S3o/4.o2G2R7G2R2GL2o/5.o14Lo/6.14o",pal:{F:"#6E5C7A",G:"#C9C3D6",I:"#FF9DBA",J:"#8C7C96",K:"#E6E1EE",L:"#9C8FAE",M:"#FFFFFF",N:"#2B1E2F",P:"#FFC2D3",Q:"#4A2433",R:"#EEEAF4",S:"#B0A6C2"}},ghost:{a:"////10.6o/8.2o6F2o/7.o10F2o/6.o12FGo/5.o13F2Go/5.o13F2Go/4.o5F2I4F2I2F2Go/4.o6FI5FI2F2Go/4.o5F2I4F2I2F2Go/4.o3F2J8F2J2Go/4.o8F2I5F2Go/4.o15F2Go/4.o14F3Go/4.o14F3Go/4.o13F4Go/4.o3F3G5F5Go/4.o2FG3o3GF2G2o2Go/5.oGo3.o2G3o.oGo/6.o5.2o5.o",pal:{F:"#FFFFFF",G:"#E6DFEF",I:"#2B1E2F",J:"#FFC2D3"}},bat:{a:"/////10.o7.o/9.oFo5.oFo/6.o2.o2Fo3.o2Fo.o/5.oGo.oFIF3oFIF2oJo/4.o3G2o9Fo3Jo/3.o2GK2GF2J8FJL2Jo/2.o2GFKFGFJ2M3F2M2FKLK2Jo/.o2G2FK3FJMN3FMN2F2L2K2Jo/.oG3FK5FI3FI3F2L3KJo/.o4FK6FMFM4F2L4Ko/.oF2oFKFo10FLKLK2oKo/2.o2.oKo.o8FL2oLo2.o/6.o3.o7Lo2.o/11.7o",pal:{F:"#4B3A55",G:"#7B6890",I:"#FF8FB0",J:"#6E5C7A",K:"#3B2D45",L:"#2B1E2F",M:"#FFFFFF",N:"#1A1018"}},duck:{a:"/////10.4F/9.F4Go/8.FG2I3Go/7.FG2I5Go/6.JFGIGK4GLo/4.2J2M2GN5GLo/3.J2M2P4GQ3GLo/4.o2MP7G2Lo/5.3o7GLo2F/6.FGI10GoF/5.FGI13Go/5.FGI3G3L7GLo/5.F4GL3GL6GLo/5.F5G3L6G2Lo/6.o12G2Lo/7.o12Lo/8.o2M4o2M3o/9.2o4.2o",pal:{F:"#B07A22",G:"#FFD24D",I:"#FFF1A8",J:"#9E4A1A",K:"#FFFFFF",L:"#E8A93A",M:"#FF9F45",N:"#2B1E2F",P:"#FFC27A",Q:"#FF9DBA"}},frog:{a:"///////8.3F6.3F/7.F3Go4.F3Go/6.FG3IGo2.FG3IGo/5.FG2I2JIGoFG2I2JIGo/5.FG2IJ2I4G2IJ2IGo/5.F2G3I5GK3I2Ko/4.FG2K12G2KGo/4.FGK15GLo/4.F3G2M9G2MGLo/4.F4GF8GF3GLo/4.F5G8F4GLo/5.o5G7N3GLo/5.F4G9N2GLo/6.o4G6N3GLo/7.o4L4o4Lo/8.4o4.4o",pal:{F:"#2F6E3E",G:"#7CC46E",I:"#FFFFFF",J:"#2B1E2F",K:"#A6E08E",L:"#4E9A55",M:"#FF9DBA",N:"#C8EDB0"}},hamster:{a:"///////7.3F7.3F/6.F3Go5.F3Go/5.FG2IGo6FG2IGo/5.FGIG9JI2Go/5.F15JKo/4.F17JKo/4.F3J11L3JKo/3.F3J3LMN3LMN3L2JKo/3.F3J3L2N3L2N3L2JKo/3.F2JL2IL2NLPL2NL2ILJKo/3.F2JL2I9L2ILJKo/3.F2J6L3P6LJKo/4.oJ15LKo/4.FJ3L2Q5L2Q3LKo/5.oJ2L2Q5L2Q2LJKo/6.o14Ko/7.14o",pal:{F:"#8B5A3C",G:"#E0A56A",I:"#FFB3C7",J:"#F2C08A",K:"#C98A55",L:"#FFF6EC",M:"#FFFFFF",N:"#2B1E2F",P:"#B05A70",Q:"#FFD9C2"}},snail:{a:"///////14.6F/12.2F6GoF/11.FG3I6Go/10.FG2I2G4J3Go/9.FGI3GJ5GJ2Go/9.FGI2GJG2I2GJGJGo/9.F3GJGI2GJ2GJGJo/9.F3GJ2G2J2GJ2GJo/9.F4GJ5GJ2GJo/3.o.o3.oJ3G6J3GJo/2.oKoKo3.o2J8G2Jo/2.LMoMo4.o9J2o/2.LMoMo.4Lo6M2o2L/2.L2MNKo15MoL/2.o3P19Mo/3.o20Po/4.20o",pal:{F:"#4A3478",G:"#C9B2EE",I:"#E6DCFA",J:"#8E70C4",K:"#2B1E2F",L:"#8B6A4A",M:"#FFF1DC",N:"#FF9DBA",P:"#E8D3B5"}},swan:{a:"////7.FoF/6.FGIGo/6.o3Go/5.o5Jo/4.o6Jo/4.o3JKL2Jo/5.o4J3Mo/6.o3J2Mo/7.o3Jo/6.o4Jo/5.o4Jo6.2o/5.o4J2o3.2o2Jo/5.o6J3o5J2o/5.o16J2o/4.o17JNJo/4.o16J4No/4.oN14J5No/5.o2N11J4N2o/6.2o13N2o/8.o11Po/9.11o",pal:{F:"#B07A22",G:"#FFD24D",I:"#FFF1B8",J:"#FFFFFF",K:"#2B1E2F",L:"#FF9DBA",M:"#FF9F45",N:"#E6DFEF",P:"#A9D4F5"}},babybun:{a:"///////15.2o.2o/9.2o4.oFoGo/8.o2Io2.oIoJo/7.oI2KI2oI2KIo/7.oI2KI2oI2KIo/7.oI2KI2oI2KIo/7.oI2K4I2KI2o/6.o13Io/5.o14ILo/4.o15I2Lo/4.o4IM7IM2I2Lo/4.o3I2M6I2M2I2Lo/4.oI2N2M2IPIPI2M2N2Lo/4.o8IP6I2Lo/5.o13I2Lo/6.o13Lo/7.13o",pal:{F:"#FFD3E0",G:"#F48FAE",I:"#FFFFFF",J:"#D9587F",K:"#FFB3C7",L:"#EADCE2",M:"#2B1E2F",N:"#FFC2D3",P:"#3B1C28"}},spider:{a:"///////11.2o.2o/10.oFGo2Go/10.7o/9.oIoI2JoJo/4.2K2.o4I5Jo2.2K/3.K2.K2o2I7J2oK2.K/7.o2I2L3J2L2Jo/7.oI2L2MJ2L2MJo/4.3KoJL3MJL3MJo3K/3.K3.o2J2M3J2MJKo3.K/7.oJN7JNKo/5.2K2o4JLJLJ2Ko2K/4.K3.o8JKo3.K/3.K2.K2.oJoJ2Ko2Ko.K2.K/5.K4.o.3o.2o3.K/4.K17.K/4.K17.K",pal:{F:"#FFD3E0",G:"#FF6F91",I:"#5E4B6E",J:"#3B2A45",K:"#2B1E2F",L:"#FFFFFF",M:"#1A1018",N:"#FF8FB0"}},zombiebun:{a:"////////8.2F7.2F/7.F2Go5.F2Go/6.FG2IGo3.F3GJo/6.FG2IGo3.F2GJGJo/6.FG2IGo4Fo3Go/6.FG2I10G2o/5.F15GKo/4.F16G2Ko/4.F3GLM7G3N2GKo/4.F3G2M6GNP2N2GKo/4.FG2Q2M7G3N2QKo/4.F5GJGJGJGJ5GKo/4.F5G7J4G2Ko/5.o14G2Ko/6.o13K2o/7.13o",pal:{F:"#4E7F60",G:"#BFE3C9",I:"#FFB3C7",J:"#4A2433",K:"#94C7A3",L:"#FFFFFF",M:"#2B1E2F",N:"#8E2443",P:"#E8506A",Q:"#FFC2D3"}},slime:{a:"/////13.2F/12.F2Go/11.FGIGJo/10.FG2IG2Jo/9.FGI3G3Jo/8.F5G5Jo/7.FGK3G7Jo/6.FG2K2G9Jo/5.F2GKG11JLo/5.F3G12JLo/4.F2G3J2M4J2M3J2Lo/4.FG4JMK4JMK3J2Lo/3.F2G16J2Lo/3.FG2J2N3JM2JM2J2N2J2Lo/3.FG8J2M6J3Lo/3.o17J3Lo/3.oL15J4Lo/4.o2L11J4LFo/5.o2F11L3Fo/6.16o",pal:{F:"#B23E66",G:"#FFB3CF",I:"#FFE3EC",J:"#FF8FB0",K:"#FFFFFF",L:"#E8638C",M:"#4A1630",N:"#FF5C86"}},blackcat:{a:"///6.F10.F/5.FGo8.FIo/5.F2Go6.F2Io/5.FGJGo5FIJIo/5.FG2J6GI2JIo/4.F4G11Io/4.F2G13Io/3.F2G14IKo/3.FGI3L6I3L2IKo/3.FGILKL6ILKL2IKo/3.FGIMKM3IJ2IMKM2IKIo/4.o14IKo2Io/5.oI11NKo.o2Io/5.FG4IM7IKoF2Io/4.FG14IK2oIo/3.FG16IK2Io/3.FG16IKIo/3.FG16IKIo/3.F17IKo/3.F3I2G6I2G3I2Ko/4.o2I2G6I2G2I2Ko/5.o13K2o/6.13o",pal:{F:"#140E1C",G:"#4B3A55",I:"#2B1E2F",J:"#FF8FB0",K:"#1A1018",L:"#FFF1A8",M:"#FFD24D",N:"#FF6F91"}},eyeball:{a:"//////6.o14.o/5.oFo12.oGo/4.o3F2o2.5o2.o3Go/3.o2FI3F2o5J2o2GK2Go/2.o2FLILFoJM6JNoIKI2Go/.o2F2LI2LoM7JPoIK2I2Go/.oF3LILo4J4QJNRoK3IGo/.o4LILo3JQ2S3QNRoK4Io/.oL2oLILo3JQSMT2QNRoKI2oIo/2.o2.oI2o3J2Q2T2Q2RoKo2.o/6.o.o3J6Q2R2o/9.oP2J4Q2Ro/9.o5N4Ro/10.2o5R2o/12.5o",pal:{F:"#9C8FAE",G:"#8C7C96",I:"#5E4B6E",J:"#FFF6F8",K:"#4B3A55",L:"#6E5C7A",M:"#FFFFFF",N:"#E6CEDC",P:"#F2A7B8",Q:"#FF6F91",R:"#C9A9BE",S:"#FFB3C6",T:"#2B1E2F"}},crow:{a:"////9.5F/8.F5Go/7.F2G5Io/6.F2G7Io/5.JFGIKL6Io/3.2J2MGILN6Io/2.J3MPG10Io/3.2o2MG11IoF/5.2oGIQ10IGo2F/6.FG13I3Go/6.FG5I4L6I2Go/6.FG4I2L5R5I2So/6.FG5IL6R3I2So/7.o6IL6RI2So/7.F8I4R2ISo/8.o11I2So/9.o10S2o/10.oT3oT4o/9.o2T2o2To/10.2o2.2o",pal:{F:"#140E1C",G:"#5E5A86",I:"#2E2A44",J:"#B07A22",K:"#FFFFFF",L:"#4E4A70",M:"#FFD24D",N:"#1A1018",P:"#FFF1B8",Q:"#FF8FB0",R:"#3E3A5E",S:"#1A1628",T:"#FF9F45"}}},icons:{home:{a:"//15.oF/14.F2GF/13.F4GF2.o3I/12.F6GFo4Jo/11.F3G2K3Go4Jo/10.F3GK2oK3G4Jo/9.F3GKo2.LK2G4Jo/7.oF3GKo4.LKG4Jo/6.F4GKo6.LK4Jo/5.F4GKo8.LK4GF/4.F4GKo10.LK4GF/3.F4GK2o10M2oK4GF/2.F4GK16NK4GF/.F4GK17NPK4Go/.LK2GK18N2PK2GKo/2.L2Ko18N2Po2Ko/3.3oN5Q2N3J3N4R2P3o/5.MN5QN5J2N4R2Po/5.MN5QN6JN4R2Po/5.M2N3Q2N6JN4R2Po/5.M3NQ3N6J5N2Po/5.M7N6J5N2Po/5.M7N6J5N2Po/5.M7N6J5N2Po/5.M7N6J5N2Po/5.M7N6J5N2Po/5.S7P6J7Po/5.S7P6J7Po/6.20o",pal:{F:"#A21749",G:"#FF6F91",I:"#693B32",J:"#C98A6A",K:"#D9406E",L:"#6B2341",M:"#981ED7",N:"#FFF4E6",P:"#E8D3B5",Q:"#FF8FB0",R:"#A9DDF8",S:"#925E3F"},w:32,h:32},book:{a:"//5.o2F18G2F/4.F3I18J2Io/4.F3I18J2Io/4.F3I18J2Io/4.F3I18J2Io/4.F3I18J2Io/4.F3I5J3K2J3K5J2Io/4.F3I4J10K4J2Io/4.F3I3J12K3J2Io/4.F3I3J12K3J2Io/4.F3I3J12K3J2Io/4.F3I4J10K4J2Io/4.F3I4J10K4J2Io/4.F3I5J8K5J2Io/4.F3I6J6K6J2Io/4.F3I7J4K7J2Io/4.F3I8J2K8J2Io/4.F3I18J2Io/4.F3I18J2Io/4.F3I3J13L2J2Io/4.F3I18J2Io/4.F3I18J2Io/4.F3I18J2Io/4.F3I18J2Io/4.F3I20Mo/4.F3I20Mo/4.F3I20Mo/5.2o21Mo/7.21o",pal:{F:"#6B2341",G:"#B01958",I:"#D9406E",J:"#FF8FB0",K:"#FFFFFF",L:"#FFD6E2",M:"#FFF4E6"},w:32,h:32},chart:{a:"//8.oF/7.F2GF/6.F4GF/5.F6Go7.oI5J/6.F4Go7.I2K5Lo/6.F4Go7.J7Lo/6.FG2oGo7.J7Lo/5.FGo2.FGo6.J7Lo/6.o4.o7.J6LMo/19.J5L2Mo/12.oI5No5L2Mo/11.I2K5Po5L2Mo/11.N7Po5L2Mo/11.N6PQo5L2Mo/11.N5P2Qo5L2Mo/11.N5P2Qo5L2Mo/4.oI4RSo5P2Qo5L2Mo/3.I2K4TUo5P2Qo5L2Mo/3.R5T2Uo5P2Qo5L2Mo/3.R5T2Uo5P2Qo5L2Mo/3.R5T2Uo5P2Qo5L2Mo/3.R5T2Uo5P2Qo5L2Mo/3.R5T2Uo5P2Qo5L2Mo/3.R5T2Uo5P2Qo5L2Mo/3.R5T2Uo5P2Qo5L2Mo/3.S7Uo7Qo7Mo/3.S7Uo7Qo7Mo/4.7o.7o.7o",pal:{F:"#935715",G:"#FFD24D",I:"#867092",J:"#B01958",K:"#FFFFFF",L:"#FF8FB0",M:"#D9406E",N:"#5E379B",P:"#C9B2EE",Q:"#A585DA",R:"#357D35",S:"#2D4E39",T:"#9EDB86",U:"#4FA65A"},w:32,h:32},bunny:{a:"10.oF8.2o4.2o/9.F2GF6.o2Bo2.o2Bo/8.F4GF4.FG3B2o3Bo/7.F6Go2.FG4BAD4Bo/7.F2G2I2Go2.FG4B2D4Bo/7.F2G2I2Go2.F2G3BGo3Bo/7.F2G2I2Go2.F2G2I2G4o/6.F3G2I3G2o3G2I3Go/6.F3G2I3G2o3G2I3Go/6.F3G2I3G2o3G2I3Go/6.F3G2I3G2o3G2I3Go/7.F2G2I2G4o2G2I2Go/7.F2G2I8G2I2Go/5.oF3G2I8G2I3G2F/4.F22GJ/3.F23GKJ/2.F24G2Ko/2.F24G2Ko/2.F24G2Ko/2.F8GL10GL4G2Ko/2.F7G2L9G2L4G2Ko/2.F7G2L9G2L4G2Ko/2.F24G2Ko/2.F2G3I7GLGL6G3I2Ko/2.F2G3I8GL7G3I2Ko/2.F22G4Ko/3.JK18G5Ko/4.J3K12G7Ko/5.2o18K2o/7.3o12K3o/10.12o",pal:{F:"#867092",G:"#FFFFFF",I:"#FFB3C7",J:"#885D74",K:"#EADCE2",L:"#3B1C28"},w:32,h:32},timer:{a:"//14.4o/13.o3FGo/13.oF2IGo/13.oF2IGo/13.o4Go4.3o/10.3o2J2GJG4o2FGo/9.o3J6I2JGoGIGo/8.oJ12IGo2Go/7.oJ3I8K3IG2o/6.oJ3IKL2KM3KLK3IGo/5.oJ3I6KN5K3IGo/5.oJ2I7KN6K2IGo/5.oJIKL6KN5KLKIGo/4.oJ2I8KN7K2IGo/4.oJ2I8KN7K2IGo/4.oJ2I8KN7K2IGo/4.oJ2IKM6KMN5KM2IGo/4.oJ2I10K2N3KP2IGo/4.oG2I12KNK2P2IGo/5.oJIKL11KPLPIGo/5.oJ2I11K3P2IGo/5.oG3I9K3P3IGo/6.oG3IKL5KPLP3IGo/7.oG3I4KM3P3IGo/8.oG12IGo/9.o3G6I3Go/10.3o6G3o/13.6o",pal:{F:"#FFD3E0",G:"#D9487A",I:"#FF8FB0",J:"#FFC2D6",K:"#FFF8FA",L:"#E0628A",M:"#C23E68",N:"#3B1C28",P:"#F3E3EA"},w:32,h:32},sun:{a:"16.o/15.oFo/14.oGFo/14.oGFo/13.oG2IFo/7.o5.oG2IFo5.o/6.oF2o2.2o4F2o2.2oFo/5.oFIGF2o8J2o2GIFo/6.oG2I12J2IFo/6.oFI3J2K9JIFo/7.o2J6K8Jo/7.o2J6K8Jo/6.o2J8K8Jo/4.3o2J8K8J3o/.3o2GF3J3KL2K4JL4J2GF2o/o3G2IF3J2KLKLK3JLJL3JG2IGFo/o3F2IF5J2K11JG2I2Fo/.3o3F17JM3F2o/4.3o3J2N9J2N2M3o/6.o7JL3JL3J3Mo/7.o7J3L3J3Mo/7.o12J4Mo/6.oGI10J4MIFo/6.oG2I8J4M2IFo/5.oFI2F2o5J3M2o2FIFo/6.oF2o2.2o3GF2o2.2oFo/7.o5.oG2IFo5.o/13.oF2IFo/14.oGFo/14.o2Fo/15.2o",pal:{F:"#E8862A",G:"#FFD98A",I:"#FFB13D",J:"#FFD24D",K:"#FFF1B8",L:"#7A3B1C",M:"#F2B23A",N:"#FF9AA2"},w:32,h:32},dumbbell:{a:"///////3.6o14.6o/2.o5FGo12.o5FGo/2.oF4IGo12.oF4IGo/2.oFJ3IGo12.oFJ3IGo/.2oFJ3IGo12.oFJ3IG2o/oKLF4IGo12.oF4IGKLo/oKLF4IGo12.oF4IGKLo/oKLF4IG14oF4IGKLo/oKLF4IG14MF4IGKLo/oKLF4IG14NF4IGKLo/oKLF4IG14oF4IGKLo/oKLF4IGo12.oF4IGKLo/o2LF4IGo12.oF4IG2Lo/.2oF4IGo12.oF4IG2o/2.oF4IGo12.oF4IGo/2.oF4IGo12.oF4IGo/2.o6Go12.o6Go/3.6o14.6o",pal:{F:"#FFD3E0",G:"#D9487A",I:"#FF8FB0",J:"#FFFFFF",K:"#FFB3CB",L:"#C23E68",M:"#ECE8F2",N:"#C9C2D3"},w:32,h:32},row:{a:"//12.2o4.2o/11.oFGo2.oFGo/10.o3FG2o3FGo/10.o2FIG2o2FIGo/10.o2FIG2o2FIGo/10.oG2FG2oG2FGo/11.o2G4o2Go/11.2o5FG2o/10.o9FGo/10.o9FGo/9.o11FGo/9.o3FJ5FJFGo/9.o3FJ5FJFGo/9.oG10FGo/10.oK3FJFJ2FGK/10.o2G3FJ2F2Go/9.oL2o6G2oLo/2.7oL12oL7o/.oM5NL14NL5NMo/2.oM3P2L14P2L3PMo/3.o2N2L16N2L2No/3.oM2L18P2Lo/3.o2L20P2Lo/.3oLoM18PMoL3o/o3Qo.o18Mo.o3Qo/o3Qo2.18o2.o3Qo/oQ3R3.3R3.3R3.3R3.3R2Qo/.3R3.3R3.3R3.3R3.3R3oR",pal:{F:"#FFFFFF",G:"#E6D6DC",I:"#FFC2D6",J:"#3B1C28",K:"#FFB3CB",L:"#B57E50",M:"#D9487A",N:"#FFD3E0",P:"#FF8FB0",Q:"#8C5A36",R:"#7EC3F2"},w:32,h:32},drop:{a:"/15.2o/14.o2Fo/14.o2Fo/13.o4Fo/13.o4Fo/12.o6Fo/12.o6Fo/11.o8Fo/11.o8Fo/10.o10Fo/10.o10Fo/9.o2FG9Fo/9.oFG10Fo/8.o2FGI10Fo/7.o2F5I9Fo/7.o2F5I9Fo/6.o2F7I9Fo/6.o3F5I10Fo/6.o3F5I9FJo/6.o5FK6FK3F2Jo/6.o5FK6FK2F3Jo/6.o14F4Jo/7.o2FL4FKFK2FJL2Jo/7.o8FK2F5Jo/8.o9F5Jo/9.o7F5Jo/10.o5F5Jo/11.2o2F4J2o/13.6o",pal:{F:"#7EC3F2",G:"#FFFFFF",I:"#BFE3FA",J:"#4E95D1",K:"#24435E",L:"#FF9DBA"},w:32,h:32},lotus:{a:"////15.2o/14.oFGo/13.o3FGo/13.o3FGo/7.o4.o2I2F2Go4.o/6.oFo3.oI3F2Go3.oFo/6.oFG3o2I4J2K3oFGo/6.o2F2Go2I4J2Ko3FGo/6.oF2LM3I4J3KM2LGo/6.oIFLM2I5J3KMLFGo/6.oIFJM2I5J3KMJ2Go/6.o2IJM2N5J3KMJ2Ko/5.2o2IJM2N5J3KMJ2K2o/3.2oGM2IJM2N5J3KM3KMF2o/2.o2FGM2IJM2N5P3KM3KM3Fo/2.oF2LFM2NM2N5P3KM2KMF2LGo/3.o2FLM2NJM2N4P2KM3KMLFGo/3.o2I2JM2NM2N2PQP2KM2KM2J2Go/4.o2I2JM2NMNPQPQKM2KM2J2Ko/5.o2I3J4N2P4K2J3Ko/3.2o2RI2N3P2N2P2K2P4K2R2o/2.o3R2S7N2R7K5Ro/.o9RN8RK9Ro/2.o26To/3.2o22T2o/5.4o14T4o/9.14o",pal:{F:"#FF7FA6",G:"#E8608C",I:"#FFD3E0",J:"#FFB3CB",K:"#F79AB8",L:"#F28AAB",M:"#C23E68",N:"#FFFFFF",P:"#FFE4EE",Q:"#FFD24D",R:"#7FBF6E",S:"#A6E08E",T:"#5A9A50"},w:32,h:32},clip:{a:"/11.10o/10.o9FGo/4.7oF2I4G2IG7o/3.o7JF8IG6JKo/3.oJ6LF8IG6LKo/3.oJ6L10G6LKo/3.oJ22LKo/3.oJ2L18F2LKo/3.oJ2L17FM2LKo/3.oJ2L17FM2LKo/3.oJ2L17FM2LKo/3.oJ2L17FM2LKo/3.oJ2L3F12N2FM2LKo/3.oJ2L17FM2LKo/3.oJ2L17FM2LKo/3.oJ2L17FM2LKo/3.oJ2L3F12N2FM2LKo/3.oJ2L17FM2LKo/3.oJ2L17FM2LKo/3.oJ2L17FM2LKo/3.oJ2L3F7N5FPFM2LKo/3.oJ2L14FP2FM2LKo/3.oJ2L11FPFP3FM2LKo/3.oJ2L12FP4FM2LKo/3.oJ2L17FM2LKo/3.oJ2L17FM2LKo/3.oJ2L17FM2LKo/3.oJ2LF17M2LKo/3.oJ22LKo/3.o24Ko/4.24o",pal:{F:"#FFFFFF",G:"#9A8FA6",I:"#D9D4E0",J:"#E8B585",K:"#96603C",L:"#C98A5A",M:"#EADCE3",N:"#C9B6C8",P:"#FF6F91"},w:32,h:32},moon:{a:"//24.2o/11.3o9.oFGo/8.3o2IJo5.4oFG3o/7.o3IKJo5.o2G2F2L2FGo/6.oI3KJo7.2oG4LGo/5.oI4KJo9.oF2LGo/4.oI4KJo10.oF3Go/3.oI5KJo10.oG2oGo/2.oI6KJo9.oGo2.oGo/2.oI6KJo10.o4.o/2.oI6KJo/.oI2KM4KJo/.oI7KJo/.oI4KNKNJo/.oI5KN2KJo/.oI3KP3KPJo/.oJ3K2M4KJo/2.oI5KN3KJ2o8.o/2.oI6KN3KIJ8oJo/2.oJ12K8IJo/3.oJ18KJo/4.oJ3KM12KJo/5.oJ14KJo/6.oJ12KJo/7.o3J6K3Jo/8.3o6J3o/11.6o",pal:{F:"#FFF1B8",G:"#C98A2A",I:"#EDE4FB",J:"#8E70C4",K:"#C9B2EE",L:"#FFD24D",M:"#B79CF0",N:"#4A3757",P:"#FF9DBA"},w:32,h:32},heart:{a:"/7.o4F8.o4F/5.oF5G2F4.oF5G2F/4.F9G4F9GF/3.F24GI/2.F25GJI/.F27GJo/.F7G2K18GJo/F7G4K17G2Jo/F7G4K17G2Jo/F8G2K18G2Jo/F28G2Jo/F27G3Jo/F27G3Jo/.F26G2Jo/.F25G3Jo/.F25G3Jo/2.F23G3Jo/2.F23G3Jo/3.F21G3Jo/3.F20G4Jo/4.F18G4Jo/5.F16G4Jo/6.F14G4Jo/7.F12G4Jo/8.F10G4Jo/9.IJ6G5Jo/10.IJ4G5Jo/11.2o2G4J2o/13.I4Jo/14.I2Jo/15.2o",pal:{F:"#A21749",G:"#FF6F91",I:"#6B2341",J:"#D9406E",K:"#FFC2D3"},w:32,h:32},cal:{a:"//9.2o11.2o/8.oFGo9.oFGo/8.o2Go9.o2Go/3.6o2G11o2G5o/2.o6I2G11I2G4IJo/2.oI5K2G11K2G4KJo/2.oI5K2G11K2G4KJo/2.oI24KJo/2.oI24KJo/2.o26Jo/2.o25LMo/2.o25LMo/2.o3L2N2L2N2L2N2L2N2L2N2L2NMo/2.o25LMo/2.o25LMo/2.o9L8P8LMo/2.o3L2N2L2NPI6P2L2N2L2NMo/2.o9L8P8LMo/2.o9L8P8LMo/2.o10L6P9LMo/2.o3L2N2L2N2L4P4L2N2L2NMo/2.o12L2P11LMo/2.o25LMo/2.o25LMo/2.o3L2N2L2N2L2N2L2N2L2N2L2NMo/2.o25LMo/2.o25LMo/2.o26Mo/3.26o",pal:{F:"#D9D4E0",G:"#9A8FA6",I:"#FFD3E0",J:"#D9487A",K:"#FF8FB0",L:"#FFFFFF",M:"#EADCE3",N:"#F2C6D4",P:"#FF6F91"},w:32,h:32},spark:{a:"/12.2o/11.oFGo/11.oFGo/10.o2FGo/10.o2F2Go/10.o2F2Go/9.o3F3Go/9.o3F3Go/7.2o4F4G2o/5.2o6F6G2o/2.3o8F8G3o/.o10FI11Go/.o11GI10Go/2.2o10G7J3o/4.3o7G5J2o/7.2o5G3J2o/9.o4G2Jo/9.o4G2Jo/10.o3GJo9.o/10.o3GJo8.oKo/10.o3Go9.oKo/11.o2Go8.o2KLo/11.o2Go6.3o2KL3o/12.2o6.o3KIK4Lo/20.o4LI4Lo/21.3o2LM3o/23.o2LMo/24.oLo/24.oLo/25.o",pal:{F:"#FFF1B8",G:"#FFD24D",I:"#FFFFFF",J:"#C98A2A",K:"#FFD3E0",L:"#FF8FB0",M:"#D9487A"},w:32,h:32},crown:{a:"//16.o/15.oFo/14.o3Fo/5.o8.o3Fo8.o/4.oGo8.oFo8.oGo/3.o3Go6.oIJo7.o3Go/3.o3Go5.oI2KJo6.o3Go/4.oGo6.oI2KJo7.oGo/4.oJo5.oI4KJo5.oJo/4.oIJo4.oI4KJo4.oIJo/4.oIKJo2.oI6KJo2.oIKJo/4.oI2KJ2oI8KJ2oI2KJo/4.oI3KJoI8KJoI3KJo/4.oI4KI10KI4KJo/4.oI20KJo/4.oI20KJo/4.oI20KJo/4.oI20LJo/4.oI20KJo/4.oI3KM2G2KFM2F2KM2N3KJo/4.oI3K3G2K4F2K3N3KJo/4.oI3K3G2K4F2K3N3KJo/4.oI20KJo/4.o22Jo/5.22o",pal:{F:"#8FD3FF",G:"#FF6F91",I:"#FFF1B8",J:"#C98A2A",K:"#FFD24D",L:"#E8A93A",M:"#FFFFFF",N:"#C9B2EE"},w:32,h:32},ladder:{a:"/7.3o12.3o/6.o2FGo10.o2FGo/6.oFIGo10.oFIGo/6.oFIGo10.oFIGo/6.oFIG12oFIGo/6.oFIG11FGFIGo/6.oFI13GFIGo/6.oFIG12oFIGo/6.oFIGo10.oFIGo/6.oFIGo10.oFIGo/6.oFIG12oFIGo/6.oFIG11FGFIGo/6.oFI13GFIGo/6.oFIG12oFIGo/6.oFIGo10.oFIGo/6.oFIGo10.oFIGo/6.oFIG12oFIGo/6.oFIG11FGFIGo/6.oFI13GFIGo/6.oFIG12oFIGo/6.oFIGo10.oFIGo/6.oFIGo10.oFIGo/6.oFIG12oFIGo/6.oFIG11FGFIGo/6.oFI13GFIGo/6.oFIG12oFIGo/6.oFIGo10.oFIGo/6.oFIGo10.oFIGo/6.oFIGo10.oFIGo/6.o3Go10.o3Go/7.3o12.3o",pal:{F:"#E8B585",G:"#96603C",I:"#C98A5A"},w:32,h:32},target:{a:"/12.8o/10.2o8F2o/8.2o12F2o/7.o16Fo/6.o5F8G5Fo/5.o4F12G4Fo/4.o4F14G4Fo/3.o4F4G8F4G4Fo/3.o3F4G10F4G3Fo/2.o3F4G5F2G5F4G3Fo/2.o3F3G4F6G4F3G3Fo/.o3F3G4F8G4F3G3Fo/.o3F3G3F4G2I4G3F3G3Fo/.o3F3G3F3G2J2I3G3F3G3Fo/.o3F3G2F3G6I3G2F3G3Fo/.o3F3G2F3G6I3G2F3G3Fo/.o3F3G3F3G4I3G3F3G3Fo/.o3F3G3F4G2I4G3F3G2FKo/.o3F3G4F8G4F3GF2Ko/2.o3F3G4F6G4F3GF2Ko/2.o3F4G5F2G5F4G3Ko/3.o3F4G10F4G3Ko/3.o4F4G8F4G4Ko/4.o4F14G4Ko/5.o4F12G4Ko/6.o5F8GF4Ko/7.o12F4Ko/8.2o9F3K2o/10.2o6F2K2o/12.8o",pal:{F:"#FF8FB0",G:"#FFFFFF",I:"#E8456F",J:"#FF8FA8",K:"#D9487A"},w:32,h:32},info:{a:"//10.12o/8.2o11FG2o/7.o2F12IFGo/6.oF16IGo/5.oF2IJ15IGo/4.oF2IJ17IGo/3.oF2IJ7I3J9IGo/3.oF10I3J9IGo/2.oF11I3J10IGo/2.oF24IGo/2.oF24IGo/2.oF10I4J10IGo/2.oF11I3J10IGo/2.oF11I3J10IGo/2.oF11I3J10IGo/2.oG11I3J10IGo/3.oF10I3J9IGo/3.oG10I3J9IGo/4.oG9I3J8IGo/5.oG7I5J6IGo/6.oF16IGo/6.oF14I2Go/6.oF4I10G2o/5.oF4IG10o/5.oF2I2Go/5.oF2G2o/4.oFG2o/4.oGo/5.o",pal:{F:"#BFE3FA",G:"#4E95D1",I:"#7EC3F2",J:"#FFFFFF"},w:32,h:32},alert:{a:"//15.2o/14.oFGo/14.oFGo/13.oF2IGo/12.oF4IGo/12.oF4IGo/11.oF6IGo/11.oF6IGo/10.oF3I2J3IGo/10.oF3I2J3IGo/9.oF4I2J4IGo/9.oF4I2J4IGo/8.oF5I2J5IGo/7.oF6I2J6IGo/7.oF6I2J6IGo/6.oF7I2J7IGo/6.oF7I2J7IGo/5.oF8I2J8IGo/5.oF8I2J8IGo/4.oF20IGo/4.oF20IGo/3.oF10I2J10IGo/2.oF11I2J11IGo/2.oF24IGo/.oF26IGo/.o28Go/2.28o",pal:{F:"#FFF1B8",G:"#E8A93A",I:"#FFD24D",J:"#3B1C28"},w:32,h:32},phone:{a:"/9.14o/8.o13FGo/7.oF14IGo/7.oF14IGo/7.oFI9J3KIGo/7.oFI8J4KIGo/7.oFI7J5KIGo/7.oFI6J6KIGo/7.oFI5J7KIGo/7.oFI4J8KIGo/7.oFI3J9KIGo/7.oFI2J7L3KIGo/7.oFIJK8L2KIGo/7.oFI2K7L3KIGo/7.oFI3K5L4KIGo/7.oFI4K4L4KIGo/7.oFI5K2L5KIGo/7.oFI12KIGo/7.oFI12KIGo/7.oFI12KIGo/7.oFI12KIGo/7.oFI12KIGo/7.oFI12KIGo/7.oFI12KIGo/7.oF14IGo/7.oF5I4F5IGo/7.oF5I4F5IGo/7.oG14IGo/8.o14Go/9.14o",pal:{F:"#E4D8FA",G:"#8E70C4",I:"#B79CF0",J:"#BFE3FA",K:"#7EC3F2",L:"#FF6F91"},w:32,h:32},trash:{a:"//13.6o/12.o5FGo/12.oF4IGo/4.9o6G9o/3.o23FGo/3.oF22IGo/3.o24Go/4.2o19FJ2o/5.oF18KJo/5.oF18KJo/5.oF4KJ4KJ4KJ3KJo/5.oJ4KJ4KJ4KJ3KJo/6.oF3KJ4KJ4KJ2KJo/6.oF3KJ4KJ4KJ2KJo/6.oF3KJ4KJ4KJ2KJo/6.oF3KJ4KJ4KJ2KJo/6.oF3KJ4KJ4KJ2KJo/6.oF3KJ4KJ4KJ2KJo/6.oF3KJ4KJ4KJ2KJo/6.oF3KJ4KJ4KJ2KJo/6.oF3KJ4KJ4KJ2KJo/6.oF3KJ4KJ4KJ2KJo/6.oJ3KJ4KJ4KJ2KJo/7.oF2KJ4KJ4KJKJo/7.oF2KJ4KJ4KJKJo/7.oF2KJ4KJ4KJKJo/7.oF14KJo/7.o16Jo/8.16o",pal:{F:"#ECE8F2",G:"#8E83A0",I:"#B9B0C6",J:"#9A8FA6",K:"#C9C2D3"},w:32,h:32},bike:{a:"/13.o/9.2o.oFo/8.o2F2oFo/8.o2Fo3Fo/8.oFGoFGFo/8.oFGoFGFo/8.o5Fo/8.o6Fo/7.o8Fo/6.o10Fo/6.o6FIJIJo/7.o6FJGo.5o/8.o5FJo.o5Ko/9.o4Fo3.2oL2o/8.o5Mo3.o2Lo/8.o5M5o2Lo/9.2o11Lo/9.o2L6o4Lo/5.5o2Lo4.o2Lo2L4o/4.o4K2Lo4.o2L2o2L4Ko/3.o2K3o2LKo2.o2L2o2K2L2o2Ko/2.o2Ko.o2Lo2K2o2L2o2Ko2Lo.o2Ko/2.oKo2.o2L2oKo3L2oKo.o2Lo.oKo/2.oKo2.o8Lo.oKo.o2Lo.oKo/2.oKo3.N3oK3o2.oKo2.oN2.oKo/2.oKo6.oKo4.oKo6.oKo/2.o2Ko4.o2Ko4.o2Ko4.o2Ko/3.o2K4o2Ko6.o2K4o2Ko/4.o6Ko8.o6Ko/5.6o10.6o",pal:{F:"#FFFFFF",G:"#FFB3C7",I:"#3B1C28",J:"#EADCE2",K:"#6E5C7A",L:"#FF6F91",M:"#8B5A3C",N:"#B9B1C8"},w:32,h:32},fire:{a:"//15.2o/14.o2Fo/13.o3Fo/12.o5Fo4.o/12.o6Fo2.oFo/12.o6Fo.o2Fo/11.o8Fo4Fo/8.2o.o13Fo/7.o2F2o13Fo/6.o3Fo4F2G8Fo/6.o8F2G9Fo/5.o9F3G2FG5Fo/5.o8F7G5Fo/5.o8F7G5Fo/5.o8F7G5Fo/4.o6FGF9G4Fo/4.o5F5G2I5G5Fo/4.o5F4G3I5G5Jo/4.o5F4G4I4G5Jo/4.o5F3G6I2G6Jo/5.o5F2G2I2K2I2G5Jo/5.o5F2GI4KI2G5Jo/6.o4F3G4K2GF4Jo/6.o5F2GI2KI2GF4Jo/7.o5F2G2I2G2F3Jo/8.o6F2G4F2Jo/9.3o8F3o/12.3o2F3o/15.2o",pal:{F:"#FF6F4F",G:"#FF9F45",I:"#FFE27A",J:"#E8432F",K:"#FFF6C8"},w:32,h:32},trophy:{a:"////8.16o/5.3o15FG3o/4.o3F2I2F11IGoFGo/3.oF3G2I2F11IGo3Go/2.oFG3oGI2F3IJ7IG3oFGo/2.oFGo2.o3F3I2J5IGo2.oFGo/2.oFGo2.o3FI6J3IGo2.oFGo/2.o2G4o3F2I4J4IGo.2oFGo/3.oG2FGoF4I4J4IG2o2FGo/4.o3GoG4IJ2IJ4IG2o2Go/5.3o.oG10IGo2.2o/10.oG8IGo/11.oG6IGo/12.oG4IGo/13.oF3IGo/13.oF3IGo/13.oF3IGo/13.oF3IGo/10.4oF3IG4o/9.o4F5I3FGo/9.oF2I7K2IGo/9.oF2I7K2IGo/9.o13Go/9.o13Go/10.13o",pal:{F:"#FFF1B8",G:"#C98A2A",I:"#FFD24D",J:"#FFF6C8",K:"#FF8FB0"},w:32,h:32},carrot:{a:"23.o4.o/22.FGF2.IJo/21.F3GKIJLo/20.F4GL2JLo/20.F4G3JLoK/20.F4G2J2LGLo/20.F3GLJ2L2GLo/19.2oMG4L2G2Lo/18.N4MLML3GLo/17.N7M5Lo/16.N9M2P2o/15.N10M2Po/15.N10M2Po/14.N11M2Po/13.N11M3Po/12.N5M2P4M4Po/12.N6M2PM5Po/11.N3M2P3M6Po/10.N5M8P2o/10.N5M6P2o/9.N4M6P2o/8.N2M7P2o/8.N2M5P2o/7.NM6Po/6.Q6P2o/5.Q5P2o/5.Q3P2o/4.Q2P2o/3.QP2o/4.o",pal:{F:"#346538",G:"#7CC46B",I:"#357D35",J:"#9EDB86",K:"#2D4E39",L:"#4FA65A",M:"#FF9F45",N:"#8F3714",P:"#E06A1F",Q:"#652A1C"},w:32,h:32},star:{a:"///15.oF/14.F2Go/14.F2Go/13.F4Go/13.F4Go/12.F5GIo/12.F6Go/11.FG2J5GF/4.o6FG3J6G4F3K/3.F7G4J10G3Io/3.F7G2J11G4Io/4.F18G4Io/5.F16G4Io/6.F5GLM5GLM4Io/7.F4G2M5G2M3Io/8.F3G2M5G2M2Io/8.N2P10G2Po/8.N2P4GMGM3G2Po/8.F7GM4G2Io/8.F4G2I7GIo/8.F2G6I5GIo/7.FG6I2o2I3G2Io/7.K5I2o2.2o2IG2Io/7.K3I2o6.2o3Io/7.KI2o10.2oIo/8.o14.o",pal:{F:"#935715",G:"#FFD24D",I:"#F2AE3D",J:"#FFF1B8",K:"#7F441A",L:"#FFFFFF",M:"#3B1C28",N:"#B71A5C",P:"#FF9FBC"},w:32,h:32},cake:{a:"/17.o/16.FGo/15.F2Go/14.2oGo/13.I4JI/12.I6Jo/12.I6Jo/12.I6Jo/12.I6Jo/4.o7K2o4J2o7K/3.K23Lo/3.K23Lo/3.K23Lo/3.K22L2Mo/3.N22P2Mo/3.N22P2Mo/3.N22P2Mo/3.N22P2Mo/3.Q22R2Mo/3.Q22R2Mo/3.Q22R2Mo/3.N22P2Mo/3.N22P2Mo/3.N4P2S5P2S5P2S2P2Mo/3.N4P2S5P2S5P2S2P2Mo/3.N22P2Mo/2.2o24MoT/.T28Uo/.T28Uo/2.28o",pal:{F:"#2D4E39",G:"#4FA65A",I:"#721C2F",J:"#E8323F",K:"#D01D67",L:"#FFD6E2",M:"#E8D3B5",N:"#981ED7",P:"#FFF4E6",Q:"#B01958",R:"#FF8FB0",S:"#FF9F45",T:"#867092",U:"#FFFFFF"},w:32,h:32},macaron:{a:"////11.o9F/7.o3F10G4F/5.oF6GI11G2F/4.F4G5I13GJ/3.F5GI17GKJ/2.F24G2Ko/2.F24G2Ko/2.F23G3Ko/2.F22G4Ko/3.J24Ko/3.L19M4KMo/3.L20MK3Mo/3.L24Mo/3.L24Mo/3.J24Ko/2.F24G2Ko/2.F24G2Ko/2.F23G3Ko/2.F22G4Ko/3.JK18G5Ko/4.J4K10G8Ko/5.2o18K2o/7.4o10K4o/11.10o",pal:{F:"#C01B5B",G:"#FFB3C7",I:"#FFE0EA",J:"#9E2559",K:"#F48FAE",L:"#981ED7",M:"#FFF4E6"},w:32,h:32},gift:{a:"/8.5o6.5o/7.o5Bo4.o5Bo/7.o5Bo4.o5Bo/7.oB3A2B4oBA4Bo/7.o2BABC4BDAC4Bo/7.o4B2C3BD2C4Bo/7.o4B2C3BD2C4Bo/7.o6B4D6Bo/2.o4Fo6B4o6Bo5F/.F6G5BG3BCG5B6Go/.F12G3BC12Go/.F12G3BC12Go/.F12G3BC12Go/.F12G3BC8G2I2Go/.J12I3BC12Io/2.2o10K3BC8K2I2o/3.L10K3BC8K2Io/3.L10K3BC8K2Io/3.L10K3BC8K2Io/3.L10K3BC8K2Io/3.L10K3BC8K2Io/3.L10K3BC8K2Io/3.L10K3BC8K2Io/3.L10K3BC8K2Io/3.L10K3BC8K2Io/3.L10K3BC8K2Io/3.L10K3BC8K2Io/3.J10I3BC10Io/3.J10I3BC10Io/4.24o",pal:{F:"#6834AE",G:"#DCC9F6",I:"#A585DA",J:"#51357C",K:"#C9B2EE",L:"#5E379B"},w:32,h:32},scroll:{a:"/4.22o/3.o21FGo/2.oF21IGo/2.oF21IGo/2.oF2IG18IGo/2.oG21IGo/3.o22Go/4.3oJ16FKo/6.oJ16FKo/6.oJ2F12G2FKo/6.oJ16FKo/6.oJ16FKo/6.oJ2F12G2FKo/6.oJ16FKo/6.oJ16FKo/6.oJ2F12G2FKo/6.oJ16FKo/6.oJ12F2L2FKo/6.oJ2F7G2F4LFKo/6.oJ10F2LM3LKo/6.oJ10F6LKo/6.oJ11F4LFKo/6.oJ12F2L2FK2o/6.oJ18FGo/5.o17F4IGo/5.oF20IGo/5.oF18IGIGo/5.oF20IGo/5.oF19IGo/5.o20Go/6.20o",pal:{F:"#FFF1D6",G:"#C9A87A",I:"#F2D9A8",J:"#FFFAEC",K:"#E8D2A8",L:"#E8456F",M:"#FF8FA8"},w:32,h:32},lock:{a:"////13.6o/11.2o5FG2o/10.o2F6IFGo/9.oF2I6G2IGo/8.oF2IG6oG2IGo/8.oFIGo6.oGIGo/7.oFIGo8.oFIGo/7.oFIGo8.oFIGo/6.2oFIG10oFIG2o/5.o19JKo/4.oJ20LKo/4.oJ20LKo/4.oJ20LKo/4.oJ9L2M9LKo/4.oJ8L4M8LKo/4.oJ8L4M8LKo/4.oJ8L4M8LKo/4.oJ9L2M9LKo/4.oJ9L2M9LKo/4.oJ9L2M9LKo/4.oJ9L2M9LKo/4.oJ9L2M9LKo/4.oJ20LKo/4.oJ20LKo/4.oJ20LKo/4.oK20LKo/5.o20Ko/6.20o",pal:{F:"#FFFFFF",G:"#9A8FA6",I:"#D9D4E0",J:"#FFF1B8",K:"#C98A2A",L:"#FFD24D",M:"#5A3A22"},w:32,h:32},bag:{a:"////13.6o/11.2o2F2GFG2o/10.o2F2G2o2GFGo/10.oFG2o2.2o2Go/9.oFGo6.oFGo/9.oFGo6.o2Go/5.5oG10oG5o/4.o22Io/4.o22Io/4.oJ20KLo/4.oJ20KLo/4.oJ20KLo/4.oJ6K3M2K3M6KLo/4.oJ5K10M5KLo/4.oJ5K10M5KLo/4.oJ5K10M5KLo/4.oJ6K8M6KLo/4.oJ7K6M7KLo/4.oJ8K4M8KLo/4.oJ9K2M9KLo/4.oJ20KLo/4.oJ20KLo/4.oJ20KLo/4.oJ20KLo/4.oJ20KLo/4.o22Lo/5.22o",pal:{F:"#FFB3CB",G:"#C23E68",I:"#E0628A",J:"#FFD3E0",K:"#FF8FB0",L:"#D9487A",M:"#FFFFFF"},w:32,h:32},gem:{a:"//26.F/25.F.F/26.F//9.14o/8.oGI3G2I7Jo/7.o2GI3G2I8Jo/6.o3GI3G2I9Jo/5.o4GI3G2I10Jo/4.o5GI3G2I11Jo/3.o6GI3G2I12Jo/3.oI11KL11Ko/4.o4I7JL10Mo/5.o3I7JL9Mo/6.o2I7JL8Mo/7.oI7JL7Mo/7.oI7JL7Mo/8.o7JL6Mo/9.o6JL5Mo/10.o5JL4Mo/11.o4JL3Mo/11.o4JL3Mo/12.o3JL2Mo/13.o2JLMo/14.oJLo/15.oL",pal:{F:"#FFFFFF",G:"#F2FCFF",I:"#BFE9F5",J:"#8FD3E8",K:"#3E7FA0",L:"#7FBFDA",M:"#5FA8C8"},w:32,h:32},bow:{a:"////4.o22.o/3.oFo20.oFo/2.oGIFo18.oGIFo/.oG2IJF2o14.2oG3IFo/.oGIJ2IGFo12.o2G4IFo/.oG6IF2o8.2oG6IFo/.oG3IK3IGF8o2G3IK3IFo/.oG4IK4IF5LMG4IK4IFo/.oG5I2K3IL4NM3I2K5IFo/.oG10IL4NM10IFo/.oG10IL4NM10IFo/.oG10IL4NM10IFo/.oG8I2FL4NM2F8IFo/.oF6I2F2o6M2o2F6IFo/2.oF2I3F2o.oGIFIFo2.2o3F2IFo/3.o2F3o2.oGIFoGIFo3.3o2Fo/4.2o5.oGIFoGIFo6.2o/10.oG2IFoG2IFo/10.oG2IFoF2IFo/9.oG2IFo.oG2IFo/9.oG2IFo.oG2IFo/8.oG3IFo.oG3IFo/8.o3FIFo.oFI3Fo/7.oF3oFo3.oF3oFo/8.o2.oFo3.oFo2.o/12.o5.o",pal:{F:"#D9487A",G:"#FFD3E0",I:"#FF8FB0",J:"#FFFFFF",K:"#E0628A",L:"#FFB3CB",M:"#C23E68",N:"#F06C97"},w:32,h:32},speaker:{a:"///16.o/15.oFo/14.oGFo/13.oGIFo/12.oG2IFo/11.oG3IFo4.3o/10.oG4IFo3.o3Jo/3.7oG5IFo4.o2Jo/2.o6KG6IFo2.o2.o2Jo/2.oK5LG6IFo.oJo2.oJo/2.oK5LG6IFo.o2Jo.o2Jo/2.oK5LG6IFo2.oJo.o2Jo/2.oK5LG6IFo2.oJo.o2Jo/2.oK5LG6IFo2.oJo.o2Jo/2.oK5LG6IFo2.oJo.o2Jo/2.oK5LG6IFo.o2Jo.o2Jo/2.oK5LG6IFo.oJo2.oJo/2.oK5LF6IFo2.o2.o2Jo/2.o7MF5IFo4.o2Jo/3.8oF4IFo3.o3Jo/11.oF3IFo2.o3Jo/12.oF2IFo3.3o/13.oFIFo/14.o2Fo/15.oFo/16.o",pal:{F:"#D9487A",G:"#FFD3E0",I:"#FF8FB0",J:"#B79CF0",K:"#FFB3CB",L:"#E0628A",M:"#C23E68"},w:32,h:32},mute:{a:"///16.o/15.oFo/14.oGFo/13.oGIFo/12.oG2IFo/11.oG3IFo/10.oG4IFo/3.7oG5IFo/2.o6JG6IFo2.2o6.2o/2.oJ5KG6IFo.o2Lo4.o2Lo/2.oJ5KG6IFo2.o2Lo2.o2Lo/2.oJ5KG6IFo3.o2L2o2Lo/2.oJ5KG6IFo4.o4Lo/2.oJ5KG6IFo5.o2Lo/2.oJ5KG6IFo4.o4Lo/2.oJ5KG6IFo3.o2L2o2Lo/2.oJ5KG6IFo2.o2Lo2.o2Lo/2.oJ5KF6IFo.o2Lo4.o2Lo/2.o7MF5IFo2.2o6.2o/3.8oF4IFo/11.oF3IFo/12.oF2IFo/13.oFIFo/14.o2Fo/15.oFo/16.o",pal:{F:"#D9487A",G:"#FFD3E0",I:"#FF8FB0",J:"#FFB3CB",K:"#E0628A",L:"#B79CF0",M:"#C23E68"},w:32,h:32},floppy:{a:"//3.24o/2.o6F13GI3FJo/2.oF5KG12LI4KJo/2.oF5KG7L3M2LI5KJo/2.oF5KG7L3M2LI5KJo/2.oF5KG7L3M2LI5KJo/2.oF5KG7L3M2LI5KJo/2.oF5KG12LI5KJo/2.oF5K14I5KJo/2.oF24KJo/2.oF24KJo/2.oF24KJo/2.oF24KJo/2.oF24KJo/2.oF3K17GN3KJo/2.oF3K17GN3KJo/2.oF3K17GN3KJo/2.oF3K3G12P2GN3KJo/2.oF3K17GN3KJo/2.oF3K17GN3KJo/2.oF3K3G12P2GN3KJo/2.oF3K17GN3KJo/2.oF3K17GN3KJo/2.oF3K3G6Q8GN3KJo/2.oF3K17GN3KJo/2.oF3K17GN3KJo/2.o4J18N4Jo/3.26o",pal:{F:"#E4D8FA",G:"#FFFFFF",I:"#9A8FA6",J:"#8E70C4",K:"#B79CF0",L:"#D9D4E0",M:"#6D52A8",N:"#EADCE3",P:"#F2C6D4",Q:"#FF8FB0"},w:32,h:32},box:{a:"///12.3o2.3o/11.o2FG2o2FGo/10.oFIJI2F3IGo/9.oF2IJ7IGo/9.oG10IGo/10.oF8IGo/2.2o6.oG8IGo4.2o/.oKLo6.oG6IGo4.oKLo/oL2MLo6.oG4IGo4.oK2MLo/.oL2MLo6.oG2IGo4.oK2MLo/2.oL2MLo6.o2Go4.oK2MLo/3.o4L14o4Lo/4.o9K4N8KLo/4.oK8P4N8PLo/4.oK8P4N8PLo/4.oK8P4N8PLo/4.oK8P4N8PLo/4.oK8P4N8PLo/4.oK20PLo/4.oK20PLo/4.oK20PLo/4.oK20PLo/4.oK20PLo/4.oK20PLo/4.oKPLPLPLPLPLPLPLPLPL2PLo/4.oK20PLo/4.o22Lo/5.22o",pal:{F:"#FFC2D6",G:"#D6386A",I:"#FF6F91",J:"#FFFFFF",K:"#F2CDA2",L:"#B57E50",M:"#D9A06C",N:"#FFD3E0",P:"#E2B07E"},w:32,h:32},copy:{a:"//10.19o/9.o18FGo/9.o18FGo/9.o18FGo/9.o18FGo/9.o18FGo/9.o18FGo/4.6o18FGo/3.o17IJ6FGo/3.oI16KJ6FGo/3.oI16KJ6FGo/3.oI16KJ6FGo/3.oI16KJ6FGo/3.oI2K11F3KJ6FGo/3.oI16KJ6FGo/3.oI16KJ6FGo/3.oI16KJ6FGo/3.oI2K11F3KJ6FGo/3.oI16KJ6FGo/3.oI16KJ6FGo/3.oI16KJ7Go/3.oI2K7F7KJ7o/3.oI16KJo/3.oI16KJo/3.oI16KJo/3.oI16KJo/3.oI16KJo/3.o18Jo/4.18o",pal:{F:"#FFFFFF",G:"#EADCE3",I:"#FFD3E0",J:"#D9487A",K:"#FF8FB0"},w:32,h:32},play:{a:"///8.o/7.oF2o/6.oGIGF2o/6.oG3IGFo/6.oG5IF2o/6.oG6IGFo/6.oG8IF2o/6.oG9IGF2o/6.oG11IGFo/6.oG13IF2o/6.oG14IGF2o/6.oG16IGFo/6.oG18IFo/6.oG18IFo/6.oG16I2Fo/6.oG14I2F2o/6.oG13IF2o/6.oG11I2Fo/6.oG9I2F2o/6.oG8IF2o/6.oG6I2Fo/6.oG5IF2o/6.oG3I2Fo/6.oGI2F2o/6.o2F2o/7.2o",pal:{F:"#D9487A",G:"#FFD3E0",I:"#FF8FB0"},w:32,h:32},shoe:{a:"////////6.8o/4.2F3G5Io/4.2F3G5Io/4.2F3G5Io/4.2F3GI3JIo/3.o2F3G4I2Jo/3.o2F9Io/3.o2F4I3J2I2o/3.o2F7I2J2I3o/3.o2F14I4o/3.o2F4I3J11I2o/3.o2F7I2J11Io/3.o2F21Io/3.o2F17I4Jo/3.o2F15IK6Jo/3.o2F15I7Jo/3.o2F15I7J2o/2.o27Jo/2.o27Jo/2.o27Lo/3.27o",pal:{F:"#C23E68",G:"#FFD3E0",I:"#FF9DBA",J:"#FFFFFF",K:"#E8638C",L:"#DCCFD6"},w:32,h:32},plant:{a:"/14.4o/12.2o3FG2o/11.o2F4IFG3o/11.oF6IGoFG2o/6.6oF7JF2IFGo/5.o5F3G4I2G5IGo/4.oF6IGo4GF6IGo/4.oF6IG3oGo8Jo/4.o8Jo2.GoG6IGo/4.oG6IGo2.G.o2G2I2Go/5.o5GFG2o.G.2oF2G2o/6.3o2F2IFGoGo2F2IFGo/8.oF4IGoGoF4IGo/8.o6JoGo6Jo/8.o2G2I2GoGo2G2I2Go/9.2o2Go8G2o/7.8o4G7o/6.o9K2G7KLo/6.oK17MLo/6.oK17MLo/6.o19Lo/7.oL13ML3o/8.oK12MLo/8.oK12MLo/8.oK12MLo/8.oK12MLo/8.oL11MLo/9.oK10MLo/9.o12Lo/10.12o",pal:{F:"#A6E08E",G:"#4E9A55",I:"#7CC46E",J:"#5BAE5E",K:"#FFB38A",L:"#B05A30",M:"#E8865A"},w:32,h:32},lamp:{a:"///10.6oF5o/9.o11GIo/8.oG12JIo/8.oG12JIo/8.oG12JIo/7.oG14JIo/7.oG14JIo/7.oG14JIo/6.oG16JIo/6.oG16JIo/6.oG16JIo/5.o20Io/6.21o/5.oKoKoKoKoK2LoKoKoKoKoKo/6.o.o.o.o.o2L2o.o.o.o.o/14.o2Lo/14.o2Lo/14.o2Lo/14.o2Lo/14.o2Lo/14.o2Lo/12.3o2L3o/11.o7MLo/10.oM8FLo/10.oM8FLo/9.o12Lo/10.12o",pal:{F:"#FFD24D",G:"#FFE3EC",I:"#F48FAE",J:"#FFC2D3",K:"#FFFFFF",L:"#C98A2A",M:"#FFF1B8"},w:32,h:32},shelf:{a:"/////19.4o/7.3o8.o3FGo/6.o2IJo2.3o2.oF2KGo/4.3oILJo.o2MNo.oF2KG2o/3.o2PQILJ3oMRN3oF3KFGo/3.oPSQ3J2TUMRNo2F6KGo/3.oPSQILJTVU3NoF4K3Go/3.o3QILJTVUMRNo2GK2G3o/3.oPSQILJ3UMRN3oG2o5.o/3.oPSQILJTVUMRNo.6o2.oXo/3.oPSQILJTVUMRN2o5YZo.oXo/3.oPSQILJTVUMRN2oY4aZ2o2bco/3.oPSQILJTVUMRN2oZ4aZ2obfco/3.o3Q3J3U3No.oY2aZo.obfco/3.oPSQILJTVUMRNo.oY2aZo.obfco/3.oPSQILJTVUMRNo.o4Zo.obfco/2.2o3Q3J3U3N10o3co/.o27gio/.og26jio/.o28io/2.3o2i18o2i3o/4.o2io16.o2io/4.o2io16.o2io/4.o2io16.o2io/5.2o18.2o",pal:{F:"#A6E08E",G:"#3F8A4A",I:"#DCCCFA",J:"#8E70C4",K:"#6CBF6A",L:"#B79CF0",M:"#FFF1B8",N:"#C98A2A",P:"#FFC2D6",Q:"#D9487A",R:"#FFD24D",S:"#FF8FB0",T:"#BFE3FA",U:"#4E95D1",V:"#7EC3F2",X:"#FFB13D",Y:"#F2A27A",Z:"#B25536",a:"#E07A52",b:"#FFFFFF",c:"#E6C9D4",f:"#FFF1F5",g:"#F2CDA2",i:"#B57E50",j:"#E2B07E"},w:32,h:32},mirror:{a:"11.o3B2o3Bo/11.oBABA4Bo/10.FG2BCBDC2BGF/9.F2G3B2D3B2GF/8.F5G4I5GJ/7.F4G8I3GKJ/6.F4G3IL6I3GKo/6.F3G3I2L7I2GKo/5.F4G2I2L3IL4I2G2Ko/5.F3G3IL3IL6IG2Ko/5.F3G6I2L6IG2Ko/5.F3G5I2L7IG2Ko/5.F3G5IL8IG2Ko/5.F3G4IL9IG2Ko/5.F3G14IG2Ko/5.F3G14IG2Ko/5.F3G14I3Ko/5.F4G12IG3Ko/6.F3G12I3Ko/6.F4G10I4Ko/7.F4G8I4Ko/8.F5G4IG4Ko/9.JK6G5Ko/10.J10Ko/11.2o6K2o/13.J4Ko/13.J4Ko/11.oFo4KoF/9.oF9G2F/8.F13Go/9.2o9G2o/11.9o",pal:{F:"#935715",G:"#FFD24D",I:"#BFE6F0",J:"#654120",K:"#D9A62E",L:"#FFFFFF"},w:32,h:32},clock:{a:"///11.10o/9.2o9FG2o/8.o2FI8GIFGo/7.oFI2G8J2GIGo/6.oFIG6JK5JGIGo/5.oFIG14JGIGo/4.oFIG8JL7JGIGo/4.oFG9JL8JFGo/3.oFIG9JL8JGIGo/3.oFG10JL9JFGo/3.oFG10JL9JFGo/3.oFG10JL9JFGo/3.oFG10JL9JFGo/3.oFGJK8JML7JKFGo/3.oFG12J2L5JNFGo/3.oFG14J2L2J2NFGo/3.oFG17J3NFGo/3.oGIG15J3NFIGo/4.oFG14J4NFGo/4.oGIG12J4NFIGo/5.oGIG10J4NFIGo/6.oGIG8J4NFIGo/7.oGIFG4JK3N2FIGo/8.o2GI8FI2Go/9.2o10G2o/11.10o",pal:{F:"#FFC2D3",G:"#D9587F",I:"#FF8FB0",J:"#FFFFFF",K:"#B3949E",L:"#3B1C28",M:"#FF6F91",N:"#F2E8EE"},w:32,h:32},poster:{a:"///3.2F22o2F/3.F24GF/3.o24Go/3.o2G20I2Go/3.o2G20I2Go/3.o2G2I4J14I2Go/3.o2G2I4J8I4K2I2Go/3.o2G2I4J8I3K3I2Go/3.o2G2I4JI2G2I2G2IK4I2Go/3.o2G7I2G2I2G7I2Go/3.o2G7I2G2I2G7I2Go/3.o2G7I2G2I2G7I2Go/3.o2G7I2G2I2G7I2Go/3.o2G7I6G7I2Go/3.o2G6I8G6I2Go/3.o2G5L10G5L2Go/3.o2G5L10G5L2Go/3.o2G5L3GM3GM2G5L2Go/3.o2G5L5GM4G5L2Go/3.o2G6L8G6L2Go/3.o2G8L4G8L2Go/3.o2G20L2Go/3.o2G20L2Go/3.o24Go/3.F24GF/3.2F22o2F",pal:{F:"#B7C698",G:"#FFFFFF",I:"#FFD3E0",J:"#FFE27A",K:"#FF6F91",L:"#FFC2D3",M:"#3B1C28"},w:32,h:32},teddy:{a:"//7.3o12.3o/6.o2FGo.8o.o2FGo/5.oF3IGo7FGoF3IGo/4.oFI3J2F8IFG3JIGo/4.oFI3J12I3JIGo/4.oGI3J12I3JIGo/5.oGIF14IGIGo/6.oF16IGo/6.oF3IKL7IKL2IGo/6.oF3I2L7I2L2IGo/6.oF6I4M6IGo/6.oG4I3M3L2M4IGo/7.oF2JI4ML3M2I2Jo/7.oG3I8M3IGo/6.oGoG2I2MLMLMLM2IGoGo/5.oFIGoGNPIMLMLIP2GoFIGo/4.oF3IGFNQNP2R2NPFGF3IGo/4.oF3IGINQ2P2R3P2IF3IGo/3.oG5IG2PIM2RMIPIG5IGo/4.oF3IG3I6M3IF3IGo/4.oG3IG2I8M2IG3IGo/5.oGIG2I10M2IGIGo/6.oGF2I10M2I2Go/6.2o2FG10M2FG2o/5.o2F3IF8MF3IFGo/5.oFI3JIG6MFI3JIGo/5.oFI3JIGI4MIFI3JIGo/5.o2GIJI10GIJI2Go/6.2o3G10o3G2o/8.3o10.3o",pal:{F:"#E8B585",G:"#96603C",I:"#C98A5A",J:"#F7A8BE",K:"#FFFFFF",L:"#3B1C28",M:"#F2D2B0",N:"#FFD3E0",P:"#D9487A",Q:"#FF8FB0",R:"#C23E68"},w:32,h:32},vanity:{a:"14.2oFo/12.2oGFGF2o/11.o2G4IGJo/10.oG2I4K2IJo/9.oGIL7KIJo/9.oGI2L6KIJo/8.oGI2K2L6KIJo/8.oGI3K2L5KIJo/8.oGI4K2L4KIJo/8.oGI5K2L3KIJo/8.oGI6K2L2KIJo/8.oJI7K2LKIJo/9.oGI7KLIJo/9.oJI8KIJo.o/10.oJ2I4K2IJo.oFo/11.o2J4I2Jo.o3Mo/12.2o4J2o2.o3Mo/4.19o3M3o/3.o24NPo/3.oN23QPo/3.o25Po/4.2o2P2o12NP2o2P2o/5.o2P2oN5QI5QP2o2Po/5.o2P2oN11QP2o2Po/5.o2P2o13P2o2Po/5.o2Po.13o.o2Po/5.o2Po15.o2Po/5.o2Po15.o2Po/5.o2Po15.o2Po/5.o2Po15.o2Po/6.2o17.2o",pal:{F:"#FF6F91",G:"#FFF1B8",I:"#FFD24D",J:"#C98A2A",K:"#CFEAF7",L:"#F2FCFF",M:"#C9B2EE",N:"#FFE3EC",P:"#E8899F",Q:"#FFC2D3"},w:32,h:32},bottle:{a:"14.3o/13.o3Fo/12.o2Fo2Fo/12.oF3oF2o/11.o7GFo/11.oG6IFo/11.oG6IFo/11.oG6IFo/11.oG6IFo/11.o8Fo/10.o9JKo/9.oJ10LKo/9.oJM9LKo/9.oJM9LKo/9.oJM9LKo/9.oJM8NLKo/9.oJM8NLKo/9.oJM8NLKo/9.oJ9NLKo/9.o12Go/9.o3G5P4Go/9.o4G3P5Go/9.o5GP6Go/9.o12Go/9.o12Go/9.oJ9NLKo/9.oJ9NLKo/9.oJ9NLKo/9.oK9NLKo/10.o9NKo/11.10o",pal:{F:"#D9587F",G:"#FFC2D3",I:"#FF8FB0",J:"#D6EEFC",K:"#62A9E2",L:"#9FD0F5",M:"#FFFFFF",N:"#7FB8E8",P:"#FF6F91"},w:32,h:32},kettle:{a:"///////14.7F/12.2F2G2I3G2F/11.2F2G4Io2G2F/11.FG2oJ2IJ2o.GF/10.F2G8Jo2GF/3.o6.FG10JoGF/2.oKo5.F2K8J2KGF/.o3Ko3.oK4L4J5KF/2.o3Ko.o2K7L7Ko/3.o3Ko2K8L8Ko/3.o6K8L8Ko/4.o5K8L8Ko/5.o5K7L7KMo/5.o5KN2LN2LN2KN2KN2Mo/6.o16K3Mo/7.o14K4Mo/7.o5KN2KN2KNKMN3Mo/8.o11K5Mo/9.o9K5Mo/10.o7K5Mo/11.12o",pal:{F:"#6E5C7A",G:"#8C7C96",I:"#FFD24D",J:"#FFB3CF",K:"#FF9DBA",L:"#FFD3E0",M:"#E8638C",N:"#FFFFFF"},w:32,h:32},cactus:{a:"/14.4o/13.o4Fo2.3o/12.o2FG3F2o2IJo/12.o3FK2F2oILJo/7.3o3.o4Fo.oI2LJo/6.o2IJo.oI4LJ2oI2LJo/6.oILJ2oI3LM2LJoI2LJo/6.oI2LJoILN2LNLJoILMJo/6.oI2LJoILN2LNLJoI2LJo/6.oI2LJoILN2LNLJoI2LJo/6.oIMLJoIMN2LN2LI3LJo/6.oI2LJoILN2LN6LJo/6.oI3LI2LN2LN6LJo/6.oI6LN2LN2L5Jo/6.oI6LN2LNMJ5o/6.o5J2LN2LNLJo/7.5oILNMLNLJo/7.5oILN2LNLJ5o/6.o17PQo/6.oP16RQo/6.o18Qo/7.oS14TQo/7.oQ13TQo/8.oS12TQo/8.oS12TQo/8.oS12TQo/8.oS12TQo/8.oQ11TQo/9.oS10TQo/9.o12Qo/10.12o",pal:{F:"#FF8FB0",G:"#FFD3E0",I:"#A6E08E",J:"#3F8A4A",K:"#FFD24D",L:"#6CBF6A",M:"#FFFFFF",N:"#58A85A",P:"#F7B08C",Q:"#B25536",R:"#E8875E",S:"#F2A27A",T:"#E07A52"},w:32,h:32},beanbag:{a:"///////12.6o/10.2o6F2o/9.o10Fo/8.oF3G8Fo/7.o7G7Fo/6.o9G7Fo/6.o9G7Fo/6.o9G7F2o/6.oF7G10Fo/5.o4F3G13Fo/4.o15FI6Fo/3.o5FI11FI6Fo/3.o6FI2FJ3F2J9Fo/3.o7FI3JF4J7FKo/3.o8F8J5F3Ko/3.o8F7J4F5Ko/3.o9F5J3F7Ko/4.o9F3J2F8Ko/5.o9FJF9Ko/6.o8F10Ko/7.2o4F10K2o/9.3o8K3o/12.8o",pal:{F:"#FF9DBA",G:"#FFC2D3",I:"#E8899F",J:"#FFFFFF",K:"#E8638C"},w:32,h:32},candle:{a:"15.o/14.oFo/13.o3Fo/13.o3Fo/12.o5Fo/11.o2F3G2Fo/11.o2F3G2Fo/11.o2F3GFo/12.oF3GFo/13.o3Fo/14.o2Io/11.4o2I4o/10.o10Jo/10.oJ2KJ4K2Jo/10.oJ7K2Jo/10.oJ8KJo/10.oJ8KJo/10.oJ8KLo/10.oJ8KLo/10.oJ8KLo/10.oJ8KLo/10.oJ8KLo4.o/10.oJ8KLo3.oMo/10.oJ8KLo3.o2Mo/7.4oJ8KL4o.oMo/5.2o4GJ8KL3GN2oMo/4.o2G4P10L4PG2Mo/4.o2N18PNMo/5.2o6N6P6N2o/7.6o6N6o/13.6o",pal:{F:"#FFB34D",G:"#FFF1B8",I:"#3B2A45",J:"#FFFFFF",K:"#FFF6EC",L:"#E6D3C2",M:"#E8A93A",N:"#C98A2A",P:"#FFD24D"},w:32,h:32},window:{a:"//12.7o/5.3o2.2o2F5G2o3.3o/4.o3I2o3F2G2JG3F3oK2Io/4.o2IK3IF3G2J4F2IK3Io/4.oIK3IK4G2J4FIK3IKo/4.oK3IK5G2J5F3IKIo/4.o3IKI4GF2J5F2IK2Io/4.o2IK2I3G2F2J5FIK3Io/4.oIK3I2G3F2J5FK3IKo/4.oK3IKG4F2J5F3IKIo/4.o3IKG5F2J6FIK2Io/4.o2IKI6F2J6FK3Io/4.oIK2I6F2J6F3IKo/4.oK3I6F2J6F2IKIo/4.o3IK14JIK2Io/4.o2IKI14JK3Io/4.oIK3I5F2J5FK3IKo/4.oK3IK5F2J5F3IKIo/4.o3IKI5F2J5F2IK2Io/4.o2IK2I5F2J5FIK3Io/4.oIK3I5F2J5FK3IKo/4.oK3IK5F2J5F3IKIo/4.o3IK2I4F2J4F3IK2Io/4.o2IK3I4F2J4F2IK3Io/3.2oIK3IK4F2J4FIK3IK2o/2.o25JLo/2.o25JLo/2.o26Lo/3.26o",pal:{F:"#CFEAF7",G:"#F2FCFF",I:"#FF9DBA",J:"#FFFFFF",K:"#FFC2D3",L:"#DCCFD6"},w:32,h:32},lipstick:{a:"17.o/16.oFo/15.oGFo/14.oGIFo/13.oG2IFo/12.oGJ2IFo/12.oG3IFo/12.oG3IFo/12.oG3IFo/12.oG3IFo/12.o5F2o/11.o7KLo/11.oK6MLo/11.oK6MLo/11.oK6MLo/11.oK6MLo/10.2oK6ML2o/9.o2N8LNPo/9.oN10QPo/9.oN10QPo/9.oN10QPo/9.o12Ro/9.o12Ro/9.oN10QPo/9.oN10QPo/9.oN10QPo/9.oN10QPo/9.oN10QPo/9.oN10QPo/9.o12Po/10.12o",pal:{F:"#9E2340",G:"#FF8A9B",I:"#E8405A",J:"#FFC2CB",K:"#FFFFFF",L:"#B9B1C8",M:"#E8E3F0",N:"#FFF1B8",P:"#C98A2A",Q:"#FFD24D",R:"#E8A93A"},w:32,h:32},dress:{a:"///12.o5.o/11.oFo3.oFo/10.oGIFo.oGIFo/10.oG2IFoG3IFo/10.oG3IG4IFo/10.oG8IFo/10.oF8IFo/11.oG6IFo/11.oG6IFo/11.oG6IFo/11.oFJ4FJFo/11.oK2J2K2J2K/10.oGK2J2K2J2Ko/10.o2GJ2L2IJ2Lo/9.o3G3L3I3Lo/9.o3G3L3I3Lo/8.o4G3L3I3LIo/8.oL3I3L3I3LIo/7.oGL3I3L3I3L2Io/7.oGL3I3L3I3L2Io/6.o2GL3I3L3I3L2IFo/6.o2GL3I3L3I3L2IFo/5.o3GL3I3L3I3L2I2Fo/5.o3GL3I3L3I3L2I2Fo/4.o4GL3I3L3I3L2I3Fo/5.oKoKoKoKoKoKoKoKoKoKoKo/6.o.o.o.o.o.o.o.o.o.o.o",pal:{F:"#E8638C",G:"#FFC2D3",I:"#FF9DBA",J:"#FF6F91",K:"#FFFFFF",L:"#FF8FB0"},w:32,h:32},polish:{a:"//12.8o/11.o7FGo/11.oF6IGo/11.oF6IGo/11.oF6IGo/11.oF6IGo/11.oF6IGo/11.oF6IGo/11.oF6IGo/11.oF6IGo/11.o8Go/12.o6Jo/12.o6Jo/11.oK6JKo/10.o10Ko/9.oK3J8Ko/8.oK5J8Ko/7.o2K5J9Ko/7.o2K4JL2KL6Ko/7.o3K2J6L5Ko/7.o5K6L4KMo/7.o5K5L4K2Mo/7.o6K3L4K3Mo/8.o6KL4K3Mo/9.o9K3Mo/10.o7K3Mo/11.o5K3Mo/12.8o",pal:{F:"#6E5C7A",G:"#2B1E2F",I:"#4B3A55",J:"#FFC2D3",K:"#FF6F91",L:"#FFFFFF",M:"#C23E68"},w:32,h:32},perfume:{a:"//14.3o/12.2o2FG2o/11.o2F3IFGo/11.oF5IGo5.2o/11.oF5IGo4.o2Jo/11.oF5IG5o4Jo/11.oF5I7G4Jo/11.o2G3I2G4o6Jo/12.2o3G2o4.o4Jo/13.o4Ko5.o2Jo/13.o4Ko6.2o/13.o4Ko/8.6o4K6o/7.o4K10L2Mo/6.o3KNK10L3Mo/6.o2KN2K10L3Mo/5.o6K10L3Mo/5.o6K10L4Mo/5.o6K10L4Mo/4.o17P5Mo/4.o17P5Mo/5.o16P4Mo/5.o16P4Mo/5.o16P3Mo/6.o15P3Mo/6.o15P3Mo/7.o14P2Mo/8.16o",pal:{F:"#FFF1B8",G:"#C98A2A",I:"#FFD24D",J:"#FF8FB0",K:"#EDE4FB",L:"#C9B2EE",M:"#8E70C4",N:"#FFFFFF",P:"#B79DE3"},w:32,h:32},mannequin:{a:"13.6o/12.o5FGo/12.o6Go/13.oI2JKo/13.oI2JKo/9.5o4K5o/8.o13JLo/7.oJ7MK6MLo/7.oJ2M2I10MLo/7.oJ2MI4MK6MLo/7.oL14MLo/8.oJ6MK5MLo/8.oL12MLo/9.oL5MK4MLo/10.oJ8MLo/10.o11N/9.oJ10MLo/9.oJ5MK4MLo/9.oJ10MLo/8.oJ6MK5MLo/8.oJ12MLo/8.o7LK6Lo/9.14o/14.o2Go/14.o2Go/14.o2Go/14.o2Go/14.o2Go/10.5o2G5o/9.o11FGo/9.o12Go/10.12o",pal:{F:"#FFF1B8",G:"#C98A2A",I:"#FFFFFF",J:"#FFC2D6",K:"#E0628A",L:"#D9487A",M:"#FF8FB0",N:"#C23E68"},w:32,h:32},chandelier:{a:"14.o2Fo/5.2o7.o2Fo7.2o/4.o2Go6.o2Fo6.o2Go/4.o2Go6.o2Fo6.o2Go/4.oIGo6.o2Fo6.oIGo/4.o2Go5.o3JFo5.o2Go/4.oKLo4.oJ4MFo4.oKLo/4.oKLo4.oJM2GMFo4.oKLo/4.oKLo4.oJM2GMFo4.oKLo/4.oKLFo3.oJMIGMFo3.oMKL2o/3.o4JFo2.oJM2GMFo2.oM4JFo/3.o6Fo.oFMKLMFo.oMN5Fo/4.4oFNFo.oFKLFo.oMNF5o/8.oFNF3oKL3oMNFo/9.o2F3MKL3M2Fo/10.2o2F4J2F2o/9.o2.2o5Fo3.o/8.oNo3.5o3.oNo/8.oNo4.oNo4.oNo/7.o2Po4.oNo3.o2Po/7.oQPo.o2.oNo2.2oQPo/7.o2P2oN2o2Po.oNo2Po/8.2o.oN2oQPo.oN3o/10.o2P2o2P2o2Po/10.oQPo.2o.oQPo/10.o2Po4.o2Po/11.2o6.2o",pal:{F:"#C98A2A",G:"#FFB34D",I:"#FFF6C8",J:"#FFF1B8",K:"#FFF6EC",L:"#E6D3C2",M:"#FFD24D",N:"#E8A93A",P:"#DDF2F7",Q:"#FFFFFF"},w:32,h:32},gramophone:{a:"/23.5o/21.2o5Fo/8.2G10.o2I4F2Io/8.G10.o2J5K2Io/8.G9.o3J5KLIo/7.G9.oF2J5K2LIo/17.oI6K3LIo/4.2G11.oI5K3LFMo/4.G12.oI4K3LFMo/4.G12.o2I2K3LIMo/3.G13.oI4F2IMo/18.o4FI2o/19.oFI2o/19.oFIo/19.oFIo/19.oFIo/8.9o2.oFIo/5.3o9N2oF2Io/4.o3N4P7NFIo/4.o7N2Q4NFI2o/3.o4R9N4RSo/3.oR16TSo/3.oR16TSo/3.oR2T12U2TSo/3.oR2T4U4V4U2TSo/3.oR2T4U4V4U2TSo/3.oR2T12U2TSo/3.oR16TSo/3.o18So/4.18o",pal:{F:"#FFD24D",G:"#C9B2EE",I:"#E8A93A",J:"#FFF1B8",K:"#8E5A1E",L:"#5E3524",M:"#C98A2A",N:"#2B1E2F",P:"#5E4B6E",Q:"#FF6F91",R:"#D9A066",S:"#6E4430",T:"#A9744A",U:"#8B5A3C",V:"#C98A55"},w:32,h:32},coffin:{a:"/12.8o/11.o7FGo/10.oF8IGo/9.oF2I6J2IGo/8.oF2I2J4I2JIGo/8.oFI2J6I2JIGo/7.oFI2J8I2JIGo/6.oF2IJ10IJ2IGo/6.oFIJ5IKL4I2JIGo/6.oFI2J4I2L4I2JIGo/6.oFI2J4I2L4I2JIGo/6.oGI2JIK7LI2JGo/7.oFIJI8LIJIGo/7.oFIJ4I2L4IJIGo/7.oFIJ4I2L4IJIGo/7.oFIJ4I2L4IJIGo/7.oFIJ4I2L4IJIGo/7.oFI2J3I2L3I2JIGo/7.oGI2J3I2L3I2JGo/8.oF2J3I2L3I2JGo/8.oFIJ3I2L3IJIGo/8.oFIJ8IJIGo/8.oFIJ8IJIGo/8.oFIJ8IJIGo/8.oFIJ8IJIGo/8.oGIJ8IJGo/9.oF10JGo/9.oF10IGo/9.o12Go/10.12o",pal:{F:"#5E4B6E",G:"#1A1018",I:"#3B2A45",J:"#6E5C7A",K:"#FFD3E0",L:"#FF8FB0"},w:32,h:32},lilies:{a:"/16.o/15.oFo/13.2oFGF2o/12.oFoFGFoFo/12.o2FGIG2Fo/8.o4.o2FG2FJo3.o/7.oFo4.oFJFJo3.oFo/5.2oFGF2o.oFJKoJo.2oFGF2o/4.oFoFGFoFo.2oK2o.oFoFGFoFo/4.o2FGIG2Fo2.oKo2.o2FGIG2Fo/5.o2FG2FJo2.oKo3.o2FG2FJo/6.oFJFJo3.oKo4.oFJFJo/5.oFJKoJo3.oKo3.oFJKoJo/6.3oKo4.oKo4.oKo.o/8.o2Ko3.oKo3.o2Ko/9.oKo3.oKo3.oKo/10.oKo2.oKo2.oKo/11.oKo.oKo.oKLo/11.o2K2oK2o2Ko/11.2oK2oK2oKo/10.o3MKMKMKMNo/10.oM8PNo/10.oM8PNo/10.oN8PNo/11.oM6PNo/11.oM6PNo/11.oM6PNo/11.o8No/12.8o",pal:{F:"#FFF6F8",G:"#FFD3E0",I:"#FFD24D",J:"#E6CEDC",K:"#4E9A55",L:"#7CC46E",M:"#EDE4FB",N:"#8E70C4",P:"#C9B2EE"},w:32,h:32},bat:{a:"/////11.o8.o/10.oFo6.oFo/10.oGFo4.oGFo/10.oGIo4.oIFo/.6o3.oGIF4oGIFo3.6o/o5GFo2.oG2I4G2IFo2.o5GFo/oF5JFo.oG2I4J2IFo.oG5JFo/.oG2JK2JF2oG8JF2oG2JK2JFo/.oG3JK2J2G10J2G2JK3JFo/.oG4JK16JK4JFo/.oG5JK4J2L3J2L3JK5JFo/.oG10JLM3JLM9JFo/.oGJK8J6K8JKJFo/oGJ2F6JNJ6K2JN5J2FJFo/o2F2oG6J3KLKL2K6JF2o2Fo/.2o.oGJ3F3J3KL2K3J3FJFo.2o/4.oGF3o2FJ6KJ2F3o2Fo/4.oFo3.2o2F4J2F2o3.oFo/5.o6.2o4F2o6.o/14.4o",pal:{F:"#22162E",G:"#6A5480",I:"#FF9DBA",J:"#3D2E4A",K:"#5A4570",L:"#FFFFFF",M:"#3B1C28",N:"#FF8FB0"},w:32,h:32},roses:{a:"/13.o.3o.o/12.oFoFGFoFo/11.oFGF3GFGFo/11.oF3GI3GFo/6.o.4oFI5G2Io/5.oFoFGFo2FI3G2Io.3o.o/4.oFGF3GFG2F3IFIFoFGFoFo/4.oF3GI3G5FIFGF3GFGFo/4.oFI5G2I2oJ2oF3GI3GFo/5.oFI3G2Io.oJ2oFI5G2Io/5.o2F3IFIo.oJo.oFI3G2Io/6.o4FIo2.oJo.o2F3IFIo/7.2o2Jo3.oJo2.o4FIo/9.oJo3.oJo3.o2J2o/8.3oJo2.oJo2.2oJo/7.o4Ko2.oJo.o4Ko/7.o4KJo.oJo.o4Ko/8.4oJo.oJo.oJ3o/10.3oJ2oJ2oJ2o/9.o3L2JLJL2JLMo/9.oL3NJNJNJ2NMo/9.oL10NMo/9.oL10NMo/9.oMN9Po/10.oL9Po/10.oL9Po/10.oL9Po/10.oM9Po/11.10o",pal:{F:"#E8405A",G:"#FF8A9B",I:"#9E2340",J:"#4E9A55",K:"#7CC46E",L:"#F2FCFF",M:"#9FC8EC",N:"#CFEAF7",P:"#BFE0F5"},w:32,h:32},candelabra:{a:"15.o/14.oFo/13.o3Fo/7.o5.oFGFo5.o/6.oFo5.oFo5.oFo/5.o3Fo4.oIJo3.o3Fo/5.oFGFo4.oIJo3.oFGFo/6.oFo5.oIKo4.oFo/6.oIJo4.oIKo4.oIJo/6.oIJo4.oIKo4.oIJo/6.oILo4.oIKo4.oILo/6.oILo3.o3MNo3.oILo/6.oILo3.o4No3.oILo/6.oILNo3.4o3.oPILo/5.o3MNo3.oPQo3.o3MNo/5.o4No3.oPQo3.o4No/6.3oPNo2.oPQo2.oPN3o/8.o2N2o.oPQo.2oPNo/9.oNPN2oPQ2o2PNo/10.o2N6P2No/11.2o6N2o/13.2oPQ2o/14.oPQo/14.oPQo/14.oPQo/12.3oPQ2o/11.o3MPQMNo/10.oM7PNo/9.o11No/10.11o",pal:{F:"#FFB34D",G:"#FFF6C8",I:"#5E4B6E",J:"#2B1E2F",K:"#4B3A55",L:"#3B2A45",M:"#FFF1B8",N:"#C98A2A",P:"#FFD24D",Q:"#E8A93A"},w:32,h:32},skull:{a:"//13.6o/10.3o6F3o/9.oFG10Fo/8.o5G9FoI/7.oF5G9FIoI/6.oF7G9FIo/5.o3F5G11FJo/5.o3F5G11FJo/4.o6FG13F2Jo/4.o20F2Jo/4.o4F5K4F5K2F2Jo/4.o4FK2L2K4FK2L2K2F2Jo/4.o3F7K2F7KF2Jo/4.o3F7K2F7KF2Jo/5.o3F5K4F5K2FJo/5.o3F5K4F5KF2Jo/6.o16F2Jo/7.o7F2K5F2Jo/8.o6F2K4F2Jo/9.o10F3Jo/9.o9F4Jo/9.oF11MJo/9.o2FMFMFMJMJM2Jo/9.o2FMFMFMJMJM2Jo/9.o5F8Jo/10.o3F8Jo/11.11o",pal:{F:"#FFF6EC",G:"#FFFFFF",I:"#FF6F91",J:"#E6D3C2",K:"#3B2A45",L:"#FF8FB0",M:"#B39AA8"},w:32,h:32},crystal:{a:"//12.8o/10.2o8F2o/9.o12Fo5.G/3.G4.o14Fo/7.o2F2I3J9Fo/6.o2F4I3J9Fo/6.o2F4I3J9Fo/5.o3FJ2I4J10Fo/5.o3F7JK9Fo/5.o3F6JK10Fo/5.o4F5J4FK6Fo/5.o12FK6FLo/5.o7FK3FK6F2Lo/5.o8FKFK6F3Lo/5.o16F4Lo/6.o14F4Lo3.G/6.o13F5Lo/7.o11F5Lo/8.o9F5Lo/9.o7F5Lo/9.o11MNo/8.oM12PNo/8.oM12PNo/7.oM13PNo/7.oM14PNo/7.o17N/6.o18No/7.18o",pal:{F:"#C9B2EE",G:"#FFE27A",I:"#FFFFFF",J:"#EDE4FB",K:"#FFC2D3",L:"#8E70C4",M:"#FFF1B8",N:"#C98A2A",P:"#FFD24D"},w:32,h:32},gothwin:{a:"/14.4o/12.2o3FG2o/11.o2F4IFGo/10.oF2I4G2IGo/9.oF2IG2JKJG2IGo/8.oF2IG3JK2LG2IGo/7.oF2IG3JLK2MLG2IGo/7.oFIG4JLK2M2LGIGo/7.oFG5JLK2M3LFGo/6.oFIG5JLK5LFIGo/6.oFIG6JK4LJGIGo/6.oFGJN3JNJK6JFGo/6.oFGJ5NJK6JFGo/6.oFG2JNJN2JK6JFGo/6.oFG7JK6JFGo/6.oFG4JN2JKN5JFGo/6.oFG4P3NKN5PFGo/6.oFG5PNPK6PFGo/6.oFG7PK6PFGo/6.oFG14KFGo/6.oFG7PK6PFGo/6.oFG7PK6PFGo/6.oFG7PK6PFGo/6.oFG7PK6PFGo/6.oFG7PK6PFGo/6.oFI14FIGo/5.2o18G2o/4.o21FGo/4.o22Go/5.22o",pal:{F:"#8C76A6",G:"#3D2E4A",I:"#5A4570",J:"#3D2A60",K:"#2E2238",L:"#FFF1B8",M:"#FFFFFF",N:"#120A17",P:"#523A78"},w:32,h:32},journey:{a:"/13.4o/12.o4Fo/12.o4Fo/13.oGIJ3o/13.o2I3KJ3o/13.o2IK3L2KJ3o/13.o2IK6L2KJo/13.o2IK7L3Jo/13.o2IK5L2J3o/13.o2IK3L2J2o/13.o2IK3J2o/13.o2IJ3o/13.o2Io/13.o2Io/13.o2Io/13.o2Io/13.o2Io/13.o2Io/13.o2Io/11.3o2I5o/8.3o3M2I4MN3o/6.2o3M3P2I5P2MN2o/4.2o2M16PMN2o/3.o2M2PQ17PMNo/2.oM2PQ16PQ4PNo/.oM22PQ3PNo/.oM26PNo/o30No/.30o",pal:{F:"#FFD24D",G:"#B07A4E",I:"#7A5338",J:"#D9487A",K:"#FFD3E0",L:"#FF8FB0",M:"#C2EBA8",N:"#5A9A50",P:"#8FD07A",Q:"#FF9DBA"},w:32,h:32},seawin:{a:"//2.28o/.o27FGo/.oFI24GIGo/.oFG11J2K11JFGo/.oFG3JF7J2K11JFGo/.oFG2JF8J2K4J3L4JFGo/.oFG2JF8J2K3J5L3JFGo/.oFG11J2K3J5L3JFGo/.oFG11J2K3J5L3JFGo/.oFG11M2K4M3L4MFGo/.oFG11M2K11MFGo/.oFG11M2K11MFGo/.oFG24KFGo/.oFG5MF5M2K11MFGo/.oFG4M3F4M2K11MFGo/.oFG3N5F3N2K11NFGo/.oFG4N3P4N2K11NFGo/.oFG2NJ8N2K7NJ3NFGo/.oFG11Q2K11QFGo/.oFG11Q2K11QFGo/.oFG2QJ8Q2K7QJ3QFGo/.oFG11Q2K11QFGo/.oFG11Q2K11QFGo/.oFI24FIGo/o29FGo/oF28IGo/o30Go/.30o",pal:{F:"#FFFFFF",G:"#E6C9D4",I:"#FFF6F8",J:"#BFE3FA",K:"#F2DCE4",L:"#FFE27A",M:"#DDF0FC",N:"#7EC3F2",P:"#E8456F",Q:"#4FA3E0"},w:32,h:32},citywin:{a:"//2.28o/.o27FGo/.oFI24GIGo/.oFG11J2K11JFGo/.oFG3JF4J2LJ2K4JF3JF2JFGo/.oFG2JF5JL2J2K11JFGo/.oFG2JF4J2L2J2K11JFGo/.oFG2JF8J2K2J5M4JFGo/.oFG11J2K2J5M4JFGo/.oFG5J4M2J2K2JMNMPM4JFGo/.oFG5Q4M2Q2K2Q5M4QFGo/.oFG5QMN2M2Q2K2Q9MFGo/.oFG24KFGo/.oFG4MQ4M2Q2K2Q6MN2MFGo/.oFG4MQMN2M2Q2K2Q9MFGo/.oFGMN2MQ4M2Q2K2QMNMP5MFGo/.oFG4MQ4M2Q2K2Q6MN2MFGo/.oFG4MQMN2M2Q2K2Q9MFGo/.oFGMN2MQ4M2Q2K2QMNMP5MFGo/.oFG4MQ4M2Q2K2Q6MN2MFGo/.oFG4MQMN2M2Q2K2Q9MFGo/.oFGMN2MQ4M2Q2K2QMNMP5MFGo/.oFG4MQ4M2Q2K2Q9MFGo/.oFI24FIGo/o29FGo/oF28IGo/o30Go/.30o",pal:{F:"#FFFFFF",G:"#E6C9D4",I:"#FFF6F8",J:"#2A2550",K:"#F2DCE4",L:"#FFF1B8",M:"#1C1838",N:"#FFD24D",P:"#FF9DBA",Q:"#3D3470"},w:32,h:32},snowwin:{a:"//2.28o/.o27FGo/.oFI24GIGo/.oFG11J2K11JFGo/.oFG2J2F7J2K3JF7JFGo/.oFG2JF6JFJ2K11JFGo/.oFG2JF8J2K11JFGo/.oFG11J2K7JF3JFGo/.oFG11J2K11JFGo/.oFG4JLM5J2K2JF8JFGo/.oFG4NML5N2K11NFGo/.oFG4NFL5N2K11NFGo/.oFG24KFGo/.oFG3N2LML4N2K11NFGo/.oFG3NLM2L4N2K9NFNFGo/.oFG2NLM2LFM3N2K11NFGo/.oFG2NMF2LML3N2K5NF5NFGo/.oFG2N3LM2L3N2K11PFGo/.oFG5NQ5N2K10PNFGo/.oFG5PQ5P2K11PFGo/.oFG11F2K12FGo/.oFG11F2K12FGo/.oFG11F2K12FGo/.oFI24FIGo/o29FGo/oF28IGo/o30Go/.30o",pal:{F:"#FFFFFF",G:"#E6C9D4",I:"#FFF6F8",J:"#B9D3F2",K:"#F2DCE4",L:"#3F8A4A",M:"#58A85A",N:"#D3E3F8",P:"#F0F6FF",Q:"#7A5338"},w:32,h:32},sakurawin:{a:"//2.28o/.o27FGo/.oFI24GIGo/.oFG2JKL7J2M11JFGo/.oFGJKL2KJ2K3J2M11JFGo/.oFGJLKFL2KLK2J2M11JFGo/.oFG2JKLJKLFK2J2MJKL6JNJFGo/.oFG4P2J2K3J2MKL2K7JFGo/.oFG4JLK2P3J2MLKFL7JFGo/.oFG3JL2KLJKL2PMJKL8JFGo/.oFG3Q2KF2KL2K2M4P7QFGo/.oFG4QLKQLKFL2ML3Q2K5QFGo/.oFG24MFGo/.oFG11Q2MFLQKLFK4QFGo/.oFG11Q2ML3Q2K5QFGo/.oFG11Q2M11QFGo/.oFG11Q2M11QFGo/.oFG11Q2M11QFGo/.oFG4QN6Q2M7QN3QFGo/.oFG11Q2M11QFGo/.oFG9QNQ2M3QN7QFGo/.oFG11Q2M11QFGo/.oFG11Q2M11QFGo/.oFI24FIGo/o29FGo/oF28IGo/o30Go/.30o",pal:{F:"#FFFFFF",G:"#E6C9D4",I:"#FFF6F8",J:"#BFE3FA",K:"#FFB3CB",L:"#FF8FB0",M:"#F2DCE4",N:"#FF9DBA",P:"#7A5338",Q:"#DDF0FC"},w:32,h:32},stainedglass:{a:"13.2o2F2o/12.o2FGI2Fo/11.oF3G3IFo/10.oF4G4IFo/9.oF5G5IFo/8.oFJ4G2K4ILFo/7.oF2J2G2KMN2K2I2LFo/7.oF2JGK3M3NKI3Lo/6.oF3JKN3M2N2MK3LFo/6.oF3JK2NM2P3MK4Lo/5.oF3JK3N4P3MK3LFo/5.oF3JK3M4P3NK4Lo/5.oF4JK3M2PM2NK5Lo/5.oF4JK2M2N3MNK5Lo/5.oF4JGK3N3MKI5Lo/5.oF4J2G2KNM2K2I5Lo/5.oF4J4G2K4I5Lo/5.o20Ko/5.oF3JK4GK4IK4LKo/5.oF3JK4GK4IK4LKo/5.oF3JK4GK4IK4LKo/5.oF3JK4GK4IK4LKo/5.o20Ko/5.oF3IK4LK4JK4GKo/5.oF3IK4LK4JK4GKo/5.oF3IK4LK4JK4GKo/5.oF3IK4LK4JK4GKo/5.oF3IK4LK4JK4GKo/4.2oF3IK4LK4JK4GK2o/3.o23QRo/3.o24Ro/4.24o",pal:{F:"#FFFFFF",G:"#5FB3E6",I:"#E8456F",J:"#9B6BD6",K:"#3B2A45",L:"#6CBF6A",M:"#FF6F91",N:"#C9B2EE",P:"#FFD24D",Q:"#B9A7C9",R:"#5A4570"},w:32,h:32},mirrorball:{a:"16.F/16.F/16.F/16.F/16.F/16.F/16.F9.G/13.6o6.GIG/11.2oJK2LKJ2o5.G/9.2oK2JK2LK2MK2o/4.G3.o14Ko/3.GIG.oK2JK2LKJMK2JK2MKo/4.G2.oK2JK2LK2MK2JK2MKo/6.o4K2L12Ko/6.oJK3LJMK2JK2MK2JKMo/5.o2JK2LK2MK2JK2MKNJK2Mo/5.o19KFo/5.o2LKJMK2JK2MK2JK2MKJPo/5.o2LK2MK2JK2MK2JK2MF2Po/5.o16K4Fo/5.oJMK2JK2MK2JK2MKJPF2Ko/6.oMK2JK2MK2JK2MF2PFKo/6.o12KQ5Fo/7.oK2MK2JK2MKJPF2KFo/7.oK2MK2JK2MF2PF2KFo/8.o7K7Fo3.G/9.2oK2MKJPF2KF2o3.GIG/11.2oMF2PFK2o6.G/13.6o",pal:{F:"#8C7C96",G:"#FFF6C8",I:"#FFE27A",J:"#E6E1EE",K:"#B9B1C8",L:"#FFFFFF",M:"#C9C3D6",N:"#C9EAF7",P:"#9C8FAE",Q:"#FFD3E0"},w:32,h:32},portrait:{a:"16.F/13.2o3Fo/11.2o6G2o/9.2o10G2o/8.o11G3Io/7.o5G6J5Io/6.o4G10J4Io/5.o4G12J4Io/5.o3G4JK4JK4J3Io/4.o4G3JKLK2JKLK3J4Io/4.o3G4JKLK2JKLK4J3Io/4.o3G3JK3L2K3LK3J3Io/3.o3G4JK3L2K3LK4J3Io/3.o3G4JK3L2K3LK4J3Io/3.o3G4JK3L2K3LK4J2IMo/3.o3G4JK3L2K3LK4JI2Mo/3.o3G5JKL4KLK5J3Mo/3.o3G4J2K6L2K4J3Mo/3.o2GI3JK10LK3J3Mo/3.oG2I2JK12LK2J3Mo/4.o3INK4LP3LP3LKN3Mo/4.o3INK12LKN3Mo/4.o4IK6LP5LK4Mo/5.o3INK10LKN3Mo/5.o4IN2K6L2KN4Mo/6.o4I2N6K2N4Mo/7.o5I6N5Mo/8.o5I9Mo/9.2o2I8M2o/11.2o6M2o/13.6o",pal:{F:"#FF6F91",G:"#FFE27A",I:"#E8B84A",J:"#FCE0EA",K:"#B3949E",L:"#FFFFFF",M:"#C98A2A",N:"#F7C8D4",P:"#3B1C28"},w:32,h:32},garland:{a:"//////F.F26.F.F/.F28.F/FGF26.FGF/3.2G22.2G/3.7o13.7o/2.o3IJ3Ko10.Go3IJ3Ko/3.o2IJ2K15o2IJ2Ko/3.o2IJ2Ko3LM2N3PQ3Ro2IJ2Ko/4.o2JKo.o2LM2No2PQ2Ro.o2JKo/4.o2JKo.o2LM2No2PQ2Ro.o2JKo/5.oJo3.o2MNo.o2QRo3.oJo/5.oJo3.o2MNo.o2QRo3.oJo/6.o5.oMo3.oQo5.o/12.oMo3.oQo/13.o5.o",pal:{F:"#FF6F91",G:"#8C7C96",I:"#FFD3E0",J:"#FF9DBA",K:"#E8638C",L:"#EDE4FB",M:"#C9B2EE",N:"#8E70C4",P:"#FFFFFF",Q:"#FFF6EC",R:"#E6D3C2"},w:32,h:32},bonsai:{a:"//12.6o/10.2o5FG2o/9.o2F6IFGo/9.oF8IGo/9.oF8IGo/9.o2G6I2G6o/10.2o6G2o5FGo/6.8oJK3oF6IGo/5.o5FGo.oJKoF8IGo/4.oF6IG2oJKoG8IGo/3.oF8IG2oJKoG6IGo/3.oG8IG2oJKoJ6Go/4.oG6IGo.oJ2K7o/5.o6Go.oJK2o/6.6o.oJKo/12.oJKo/12.oJKo/12.oJKo/13.oJKo/13.oJKo/5.10oJK11o/4.o10LJK11Lo/4.o23Lo/5.oM19NPo/5.oM19NPo/5.oM19NPo/5.o21Po/6.21o",pal:{F:"#A6E08E",G:"#4E9A55",I:"#7CC46E",J:"#A9774F",K:"#8B5A3C",L:"#7B97C4",M:"#8FA9D6",N:"#5E7BA8",P:"#3E5A86"},w:32,h:32},bookstack:{a:"/////19.2o/18.o2Fo/18.o2Fo/8.11o2F6o/7.o11G2F5GIo/7.oG10JF4J2KIo/7.oGJ6G8J2KIo/7.oG15J2KIo/4.4o19Io/3.o20LM2o/3.oL17N2KMo/3.oLN6L10N2KMo/3.oL17N2KMo/3.o21Mo/4.3o18PQo/6.oP15R2KQo/6.oPR6P8R2KQo/6.oP15R2KQo/5.2o19Q2o/4.o22STo/4.oS19U2KTo/4.oSU6S12U2KTo/4.oS19U2KTo/4.o23To/5.23o",pal:{F:"#FF6F91",G:"#FFF1B8",I:"#C98A2A",J:"#FFD24D",K:"#FFF6EC",L:"#D6EEFC",M:"#62A9E2",N:"#9FD0F5",P:"#FFD3E0",Q:"#E8638C",R:"#FF9DBA",S:"#EDE4FB",T:"#8E70C4",U:"#C9B2EE"},w:32,h:32},moonpot:{a:"14.4o/13.o4Fo/12.o6F6o/12.o2F2GFI6Fo.J/4.J2.4o.o2F2G2I7Fo/6.o4F2o2F4I6FIo/5.o6F2o4I3F2GF2Io/4.o7FI3oKo3F2G3Io/4.o3F2GF2Io.oKo3F5Io/4.o3F2G3Io.oKo2F6Io/4.o3F5Io.oK2o6Io/5.oF5Io2.oKo.2oK3o/6.o4Io3.oKo.oKo/7.4oKo2.oK2oKo/11.oKo.oK2oKo7.J/12.oK2oKoKo/13.oKo2Ko/7.8o3K8o/6.o9LK9Lo/6.o19Lo/6.o19Lo/7.oM14NP2o/7.oP6NG6NPo/8.oM4NG7NPo/8.oM3N2G7NPo/8.oM3N3G6NPo/8.oM4N4G4NPo/8.oP5N2G4NPo/9.oM10NPo/9.o12Po/10.12o",pal:{F:"#F1EAFE",G:"#FFE27A",I:"#C9B2EE",J:"#FFF6C8",K:"#4E9A55",L:"#4E5A9E",M:"#6B7BC4",N:"#3E4A86",P:"#2A3366"},w:32,h:32},cakestand:{a:"//15.2o/14.o2Fo/14.o2Fo/15.2o/14.o2Go/14.o2Go/14.o2Go/14.o2Go/10.5o2G5o/9.oIJ2Io2GoKL2Ko/8.o6I2G6Ko/8.o6M2G6Mo/9.o4Io2Go4Ko/9.6o2G7o/8.o14NPo/8.o15Po/9.6o2G7o/14.o2Go/5.4o.5o2G5o.4o/4.oIJ2IoKL2Ko2GoQR2QoFS2Fo/3.o5I6K2G5Q6Fo/3.o11M2G11Mo/4.o4Io4Ko2Go4Qo4Fo/4.11o2G12o/3.o24NPo/3.o25Po/4.9o6P10o/12.o6Po/13.6o",pal:{F:"#FFD24D",G:"#C98A2A",I:"#FF9DBA",J:"#FFD3E0",K:"#C9B2EE",L:"#EDE4FB",M:"#FFF6EC",N:"#FFFFFF",P:"#DCCFD6",Q:"#9EDB86",R:"#D6F5C8",S:"#FFF1B8"},w:32,h:32},fishbowl:{a:"///////8.17F/7.F16GIF/7.F17IF/6.F4JG13JF/5.F20JF/5.F4JG15JF/4.F4K3G15KF/4.F4K3G8KG5KLF/3.F5K3G13K3LF/3.F16KM3K4LF/3.F7K5NM2KM3K5LF/3.F6K2NP3N4M2K6LF/3.F6K10MK7LF/3.F7K6M2KM8LF/4.F14KLM6LF/4.F13K5LQ3LF/5.F3KQ7K6LQ2LF/5.F3KQ6K7LQ2LF/6.F2KQ5K7L2QLF/7.FKQ4K8LQLF/8.17R/8.17R/12.8F",pal:{F:"#5E7BA8",G:"#FFFFFF",I:"#A9D4F5",J:"#EAF7FC",K:"#9FD0F5",L:"#7FB8E8",M:"#FF9F45",N:"#FFC27A",P:"#2B1E2F",Q:"#5BAE5E",R:"#E6D3C2"},w:32,h:32},balletshoes:{a:"6.21o/5.o21Fo/5.o21Fo/6.2oG5oG3oG5oG2o/7.oGo2.o2Go.oGo3.oGo/7.oGo2.oGo2.oGo3.oGo/7.oGo2.oGo3.oGo2.oGo/7.oGo2.oGo3.oGo2.oGo/7.oGo.o2Go3.oGo2.oGo/7.oGo.oGo4.oGo2.oGo/7.oGo.oGo4.oGo.oGo/7.oGo.oGo4.oGo.oGo/7.oG2o2Go4.oGo.oGo/7.oG2oGo6.oG2oGo/7.oGoIGo6.oG2oGo/7.oGI2JKo5.oG2oGo/6.oI4LKo5.oGIKGo/6.oI4LJKo3.o2I2JGo/6.oI4LJKo2.oI4LKo/6.oI5JKo2.oI4LJKo/6.oI5JKo2.oI4LJKo/6.oI5JKo2.oI5JKo/6.oI5JKo2.oI5JKo/6.oI5JKo2.oI5JKo/6.oK5JKo2.oI5JKo/7.oK4JKo2.oI5JKo/8.oKJ2Ko3.oK5JKo/9.oK2o5.oK4JKo/10.o8.oKJ2Ko/20.oK2o/21.o",pal:{F:"#FF6F91",G:"#FF8FB0",I:"#FFE3EC",J:"#FFB3C7",K:"#E8899F",L:"#E8A3B5"},w:32,h:32},strawberry:{a:"15.2o/14.oFGo/14.oFGo/14.o2Go/11.4o2G4o/10.o4F2G4Fo/7.3oF3GI4GIGF3o/6.o3F3GI4GI3G3Fo/5.oFI4GI4GI4GI2GFo/5.oI4GI4GI4GI4Go/6.o3GI3JGI2G3K4Go/6.oJL2MJLJ2KL3KL3KLo/5.oKJNM2JNJ2KN3KN3KNKo/4.o2K7J13Ko/4.oKL3JL3JL3KL3KL3KLo/4.oKNK2JN2JKN3KN3KN3KNo/4.o22Ko/4.o3KL3KP6KP4KL2Qo/4.o3KN3KP6KP4KR2Qo/4.o5K2S3KPKP2K2SK4Qo/5.oL3KL5KP5KL3Qo/5.oN3KN9K2QR3Qo/6.o12K6Qo/6.oKL3KL3KLK2QL4Qo/7.oN3KN3KN3QR3Qo/8.o6K8Qo/9.o4KL3QL3Qo/10.o2KQR3QR2Qo/11.o8Qo/12.2o4Q2o/14.4o",pal:{F:"#A6E08E",G:"#5BAE5E",I:"#4E9A55",J:"#FF6F7E",K:"#E8323F",L:"#FFE27A",M:"#FFFFFF",N:"#E8A93A",P:"#3B1C28",Q:"#B0233A",R:"#8E1F35",S:"#FF9AA2"},w:32,h:32},cupcake:{a:"15.4oF/14.o3GFo/14.oGI2Go/14.o4Go/13.oJ4Go/12.oJ4KLo/11.oJ6KLo/10.oJ8KLo/9.oJ10KLo/9.oJ6KM3KLo/9.oJ10KLo/8.2oJ10KL2o/7.o2J4KM7KJLo/6.oJ11KN4KLo/6.oJ2KN13KLo/6.oJ16KLo/6.oL14KMKLo/7.o2L2KP9K2Lo/7.o2Q12L2Ro/7.o2Q2R2Q2R2Q2R2Q2Ro/8.oQ2R2Q2R2Q2R2QRo/8.oQ2R2Q2R2Q2R2QRo/8.oQ2R2Q2R2Q2R2QRo/8.oQ2R2Q2R2Q2R2Qo/9.o2R2Q2R2Q2R2Qo/9.o2R2Q2R2Q2R2Qo/9.o2R2Q2R2Q2R2Qo/10.oR2Q2R2Q2RQo/10.oR2Q2R2Q2RQo/11.10o",pal:{F:"#4E9A55",G:"#E8323F",I:"#FF9AA2",J:"#FFFFFF",K:"#FFF6EC",L:"#F2D7E2",M:"#FFD24D",N:"#FF6F91",P:"#8FD3FF",Q:"#FFC2D3",R:"#FF8FB0"},w:32,h:32},butterfly:{a:"/10.F2o6.2oF/10.o2Go4.o2Go/4.9oG4oG9o/3.o8I2o4G2o8Io/2.oI2J3K3JIo4GoI4J3KJIo/.oI2J5K3JIGL2GI4J5KJIo/oI3J5K4J4G5J5K2JIo/oI3J5K4JIMGI5J5K2JIo/oI4JL2K5JIMGI6J2KL3JIo/oI12JIMGI12JIo/oI12JIMGI12JIo/oI7JL4JIMGI5JL6JIo/.oI2JL7JIGM2GI8JLJIo/2.oI8JIoGM2GoI8JIo/3.o3I4JI2oGM2G2oI4J3Io/4.3oN3PN2oGM2G2oN3PN3o/5.oN5PNoGM2GoN5PNo/4.oN2P3Q2PNGM2GN3P3QPNo/3.oN3P3Q3PNMGN4P3Q2PNo/3.oN2PL3Q3PNMGN4P3QLPNo/3.oN9PNMGN9PNo/3.oN4PL4PNMGN5PL3PNo/4.oN7PNoMGoN7PNo/5.oN5PN2oMG2oN5PNo/6.o5No2.2o2.o5No/7.5o8.5o",pal:{F:"#FF6F91",G:"#4B3A55",I:"#F48FAE",J:"#FFB3CF",K:"#FFE3EC",L:"#FFFFFF",M:"#6E5C7A",N:"#B79DE3",P:"#D9C2F5",Q:"#EDE4FB"},w:32,h:32},shell:{a:"/////15.2o/13.2o2F2o/8.5oG4FG5o/7.o4IGJ4F2G4Io/6.o5IJG4F2G5Io/4.3oG4IJG4F2G4IG3o/3.o2K2G5IG4FG5I2GFLo/2.o4K2G4IG4FG4I2GF3Lo/2.o5KG4IG4FG4IGF4Lo/2.o5K2G3IG4FG3I2GF4Lo/.o2G5KG4IG2FG4IGF4L2Go/o2K2G5KG3IG2FG3IGF4L2G2Mo/o3K2G4KG3IG2FG3IGF3L2G3Mo/o4K2G4KG2IG2FG2IGF3L2G4Mo/o6KG3KG2IG2FG2IG3LG6Mo/oG6KGK2FG2I2F2IGF2LG6MGo/.o2G5KG3F2I2F2IF2LG5M2Go/2.3oG2K2IG2FGI2FIG2LG4MG3o/5.2oG3I5M5G3MG2o/7.3o6MN5G3o/8.o7MN6Go/8.o7MN6Go/8.o7MN5Go/9.o6MN5Go/10.12o",pal:{F:"#FFC2D3",G:"#E8638C",I:"#FFD3E0",J:"#FFFFFF",K:"#FFE3EC",L:"#F48FAE",M:"#FF9DBA",N:"#C23E68"},w:32,h:32},cherries:{a:"/21.2o/20.oFG3o/18.2oF2I2FGo/17.o2F4I2Go/15.2o2G4IG2o/14.o2J2o4Go/13.o4J5o/13.oJ2oJo/13.oJ2oJo/12.oJo.o2Jo/12.oJo2.oJo/11.o2Jo2.oJo/11.oJo4.oJo/11.oJo4.oJo/10.oJo5.o2Jo/10.oJo6.oJo/7.3o2Jo6.oJo/6.o3KJKLo4.2o2J2o/5.oK6MLo2.o3KJKLo/4.oKM2N5ML2oK6MLo/4.oKM2N5MLoKM2N5MLo/4.oK8MLoKM2N5MLo/4.oK8MLoK8MLo/4.oK8MLoK8MLo/4.oL8MLoK8MLo/5.oL6ML2oL8MLo/6.o6Lo2.oL6MLo/7.6o4.o6Lo/18.6o",pal:{F:"#A6E08E",G:"#4E9A55",I:"#7CC46E",J:"#5BAE5E",K:"#FF6F7E",L:"#9E2340",M:"#E8323F",N:"#FFB3BA"},w:32,h:32},ribbonicon:{a:"/////5.3o16.3o/3.2o2FGo14.o2FG2o/2.o2F3IGo12.oF3IFGo/2.oF5IGo10.oF5IGo/2.oF6IGo8.oF6IGo/2.oF2I6Jo6.o6J2IGo/2.oF2I7J6o7J2IGo/2.oF2I7J5FK7J2IGo/2.oF2I7JF4LK7J2IGo/2.oG9IF4LK9IGo/3.oG8IF4LK8IGo/4.oG3I4GF4LK4G3IGo/5.o3G4o6K4o3Go/6.3o3.oFIGFIGo3.3o/12.oFI2GIGo/11.oFIG2oFIGo/11.oFIG2oFIGo/10.oF2IG2oG2IGo/10.oFIGo2.oFIGo/10.oFIGo2.oFIGo/9.oF2IGo2.oF2IGo/9.o2GIGo2.oGI2Go/8.oG2oGo4.oG2oGo/9.o2.o6.o2.o",pal:{F:"#FFC2D3",G:"#D9587F",I:"#FF8FB0",J:"#E8638C",K:"#C23E68",L:"#FF6F91"},w:32,h:32},gear:{a:"/14.o3F/13.F4GF/12.F6Go/6.o3F2.F6Go2.o2FI/5.F4GF.F6Go.F3GJI/4.F6GF8GF4G2Jo/4.F20G2Jo/4.F3G6K10G3Jo/4.F2G8K8G4Jo/5.FG8K9G2Jo/6.FG7K2o8Go/3.o2F2G5K2o2L2o7G2FI/2.F9Go6Lo8GJI/.F10Go6Mo8G2Jo/.F9GoL6MLo7G2Jo/.F9Go2L4M2Lo6G3Jo/.F10GoL4MLo4G6Jo/2.F9Go2L2M2Lo3G6Jo/3.3o7G2o2L2o5G2J3o/6.F8G2o8Go/5.F19GJI/4.F20G2Jo/4.F4GJ8GJ6G2Jo/4.F3G3J6G3J4G3Jo/4.I6Jo5G3Jo6Jo/5.I4Jo.F4G2Jo.I4Jo/6.4o2.F3G3Jo2.4o/12.I6Jo/13.I4Jo/14.4o",pal:{F:"#6C5461",G:"#C9B3BD",I:"#4C3F53",J:"#9C8494",K:"#E6DDE8",L:"#FFFFFF",M:"#FF8FB0"},w:32,h:32},seed:{a:"///18.o4FG/9.o4F3.F5IJo/8.F5IF.F5I2Jo/8.F6IGo5IJo/8.F6IJ5I2Jo/9.F5I7Jo/10.G6J5o/11.4o2Jo/14.G2Jo/14.G2Jo/14.G2Jo/14.G2Jo/6.oK6Lo2Jo6L3K/5.K2M7N2J7N3Mo/5.K2M16N3Mo/5.K21Mo/5.K21Mo/6.2o14P2Q3o/7.R14P2Qo/7.R5P6S2P3Qo/7.R5P6S2P3Qo/8.R5P4S3P2Qo/8.R5P4S3P2Qo/8.R6P2S3P3Qo/8.R11P3Qo/9.T12Qo/9.T12Qo/10.12o",pal:{F:"#357D35",G:"#2D4E39",I:"#9EDB86",J:"#4FA65A",K:"#8E2F22",L:"#412923",M:"#F0956E",N:"#8B5A3C",P:"#E07A55",Q:"#B05535",R:"#772D25",S:"#FFD6E2",T:"#512622"},w:32,h:32},pack:{a:"//6.o17F2G/5.F18I2Jo/5.F18I2Jo/5.F18I2Jo/5.F15I4KJo/5.F15I4KJo/5.F9I2L4I4KJo/5.F9I2L5I2K2Jo/5.F8I3LM6I2Jo/5.F8I4L6I2Jo/5.F3I11L3MI2Jo/5.F3I10L4MI2Jo/5.F4I8L4M3IJo/5.F5I7L3M4IJo/4.F7I6L2M5I2Jo/4.F7IL2M3L2M5I2Jo/4.F7I5M2LM5I2Jo/4.F7I3M2I3M5I2Jo/4.F6I2M6I2M4I2Jo/4.F20I2Jo/4.F2I4N14I2Jo/4.F2I4N14I2Jo/4.F2I4N14I2Jo/4.F3I2N15I2Jo/4.F20I2Jo/4.G22Jo/4.G22Jo/5.22o",pal:{F:"#D01D67",G:"#9E2559",I:"#FFD6E2",J:"#F48FAE",K:"#C9B2EE",L:"#FFD24D",M:"#F2AE3D",N:"#FF6F91"},w:32,h:32},glitterjar:{a:"////9.o13F/8.F14Go/8.F14Go/8.F14Go/8.F14Go/7.2o14I2o/6.o18Jo/6.o18Jo/5.o20Jo/5.o2J2K9JL6Jo/4.o3J2K8J3L6Jo/4.o3J2KJM7JL7Jo/4.o3J2K3M10JN3Jo/4.o3J2KJM4JP5J3N2Jo/4.o10J3P5JN3Jo/4.o11JP10Jo/4.o16JM5Jo/4.o4JL4JN5J3M4Jo/4.o3J3L2J3N5JM5Jo/4.o4JL4JN12Jo/5.o20Jo/5.o7JM5JL6Jo/6.o5J3M3J3L4Jo/6.o6JM5JL5Jo/7.2o14J2o/9.2o10J2o/11.10o",pal:{F:"#6C5461",G:"#C9B3BD",I:"#9C8494",J:"#FFFFFFC8",K:"#FFFFFF",L:"#FF8FB0",M:"#FFD24D",N:"#C9B2EE",P:"#8FD3FF"},w:32,h:32},mat:{a:"/////////6.21o/5.o6F5GIJKLI4GMo/4.o2F4M2FNF2NIJKLINF3NMo/3.o2FM4FM2F4NIJKLI5NMo/2.o2FM2F2M2FM2F3NIJKLI5NMo/2.o2FMFM2FMFM2F3NIJKLI5NMo/2.o2FMFM2PMFM2F3NIJKLI5NMo/2.o2FMFM2FMFM2F3NIJKLI5NMo/2.o2FM2F2M2FM2F3NIJKLI5NMo/3.o2FM4FM2F4NIJKLI5NMo/4.o2F4M2F5NIJKLI4NMo/5.o6F5NIJKLI4NMo/6.3o8MIJKLI4Mo/9.17o",pal:{F:"#C9B2EE",G:"#DCCCFA",I:"#8E2A4E",J:"#FFC2D6",K:"#FF8FB0",L:"#E0628A",M:"#8E70C4",N:"#B79CF0",P:"#6D52A8"},w:32,h:32},resband:{a:"////////5.6o11.6o/4.o6Fo9.o6Fo/3.oF6GF2o5.2oF6GFo/2.oF2G3I3G2Fo3.o2F3G3I2GFo/2.o2GI3o2I3GFo.oF3G2I3oI2Go/2.o2Go3.2oI3GFoF3GI2o3.o2Go/2.o2Go5.oI3GJ3GIo5.o2Go/2.o2Go6.o3GJ3Go6.o2GFo/2.o2Go6.o3GJ3Go6.o3Go/2.o2Go5.oF3GJ3GFo5.o2GIo/2.o2Go3.2oF3GIoI3GF2o3.o2Go/2.o2GF3o2F3GIo.oI3G2F3oF2Go/2.oI2G3F3G2Io3.o2I3G3F2GIo/3.oI6GI2o5.2oI6GIo/4.o6Io9.o6Io/5.6o11.6o",pal:{F:"#FFC2D6",G:"#FF8FB0",I:"#D9487A",J:"#C23E68"},w:32,h:32},rope:{a:"///3.4o18.4o/2.o3FGo16.o3FGo/2.oF2IGo16.oF2IGo/2.oF2IGo16.oF2IGo/2.oF2IGo16.oF2IGo/2.oF2IGo16.oF2IGo/2.oF2IGo16.oF2IGo/2.oF2IGo16.oF2IGo/2.oF2IGo16.oF2IGo/2.oF2IGo16.oF2IGo/2.oF2IGo16.oF2IGo/2.oF2IGo16.oF2IGo/2.o4Jo16.o4Jo/2.o4Jo16.o4Jo/3.2o2Ko17.o3Ko/4.o2Lo17.o2Lo/4.o2Lo17.o2Lo/4.o2Lo17.o2Lo/4.o2LKo15.oK2Lo/5.o2Lo15.o2Lo/5.o2LKo13.oK2Lo/6.o2LKo11.oK2Lo/7.o2LK2o7.2oK2Lo/8.o2L2K7o2K2Lo/9.2o2L7K2L2o/11.11o",pal:{F:"#FFD3E0",G:"#D9487A",I:"#FF8FB0",J:"#FFD24D",K:"#B79CF0",L:"#7A5FC4"},w:32,h:32},pullbar:{a:"//////////2o28.2o/FGo.7o10.7o.oFG/FG2o6IJ10o6IJ2oFG/FG2KILMLMLJ10KILMLMLJKNFG/FGKPI5LJ10PI5LJPNFG/FGKPILMLMLJ10PILMLMLJPNFG/FG2NI5LJ10NI5LJ2NFG/FG2o7J10o7J2oFG/2Go.7o10.7o.o2G/2o28.2o",pal:{F:"#9A86AD",G:"#4A3757",I:"#FFD3E0",J:"#D9487A",K:"#FFFFFF",L:"#FF8FB0",M:"#E0628A",N:"#9A8FA6",P:"#D9D4E0"},w:32,h:32}},glyphs:{check:{a:"////21.2o/19.5o/19.5o/17.6o/17.6o/15.6o/3.2o10.6o/2.5o6.6o/2.5o6.6o/3.6o2.6o/3.14o/5.10o/5.10o/7.6o/7.6o/9.2o",w:24,h:20},x:{a:"//5.2o10.2o/4.5o6.5o/4.5o6.5o/5.6o2.6o/5.14o/7.10o/7.10o/8.8o/8.8o/7.10o/7.10o/5.14o/5.6o2.6o/4.5o6.5o/4.5o6.5o/5.2o10.2o",w:20,h:18},back:{a:"//13.2o/11.5o/11.5o/9.6o/9.6o/7.6o/7.6o/6.6o/6.6o/7.6o/7.6o/9.6o/9.6o/11.5o/11.5o/13.2o",w:16,h:18},right:{a:"//9.2o/8.5o/8.5o/9.6o/9.6o/11.6o/11.6o/12.6o/12.6o/11.6o/11.6o/9.6o/9.6o/8.5o/8.5o/9.2o",w:18,h:18},down:{a:"//////5.2o10.2o/4.5o6.5o/4.5o6.5o/5.6o2.6o/5.14o/7.10o/7.10o/9.6o/9.6o/11.2o",w:20,h:16},up:{a:"//11.2o/9.6o/9.6o/7.10o/7.10o/5.14o/4.16o/4.16o/9.6o/10.4o/10.4o/10.4o/10.4o/10.4o/10.4o/10.4o/10.4o/11.2o",w:20,h:20},plus:{a:"//11.2o/10.4o/10.4o/10.4o/10.4o/9.6o/5.14o/4.16o/4.16o/5.14o/9.6o/10.4o/10.4o/10.4o/10.4o/11.2o",w:20,h:18},minus:{a:"////////5.14o/4.16o/4.16o/5.14o",w:20,h:12},play:{a:"//7.2o/6.5o/6.7o/6.9o/6.11o/6.13o/6.13o/6.14o/6.14o/6.13o/6.13o/6.11o/6.9o/6.7o/6.5o/7.2o",w:20,h:18},pause:{a:"//5.4o6.4o/4.6o4.6o/4.6o4.6o/4.6o4.6o/4.6o4.6o/4.6o4.6o/4.6o4.6o/4.6o4.6o/4.6o4.6o/4.6o4.6o/4.6o4.6o/4.6o4.6o/4.6o4.6o/4.6o4.6o/4.6o4.6o/5.4o6.4o",w:20,h:18},reset:{a:"7.6o4.2o/5.9o2.4o/5.4o2.9o/3.4o6.7o/3.4o7.6o/2.4o8.6o/2.4o6.8o/2.4o6.7o/2.4o/2.4o/2.4o13.2o/2.4o12.4o/2.4o12.4o/3.4o10.4o/3.4o10.4o/5.4o6.4o/5.14o/7.10o",w:22,h:18}},plants:{carrot:[{a:"//////////////////13.2o/12.o2Fo/8.4oFG2F3o/5.3oI4J2F3JI3o/4.oJI3JI5JI3JIJo/3.o19Jo/4.o17Ko/5.17o",pal:{F:"#C98A6A",G:"#E6B08A",I:"#A9774F",J:"#8B5A3C",K:"#5E3524"}},{a:"//////////////10.2F4.2F/9.F2Go2.F2Go/9.FI2G2o2GIo/10.o2I2J2Io/11.2oIJ2o/12.FIJo/8.5oIJ4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#A6E08E",I:"#5BAE5E",J:"#4E9A55",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"///////////////11.F.F.F/10.FGoGoGo/9.FGIGIGIGo/10.oIGIGIo/11.o3Io/8.5oJ5o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#A6E08E",I:"#7CC46E",J:"#4E9A55",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"/////////////10.F2.F2.F/9.FGoFGoFGo/8.FGIGoGoGIGo/9.oIGIGIGIo/10.oIGIGIo/11.o3Io/12.oJo/8.4oKLK4o/5.3oM9NM3o/4.oNM3NM5NM3NMNo/3.o19No/4.o17Po/5.17o",pal:{F:"#2F6E3E",G:"#A6E08E",I:"#7CC46E",J:"#4E9A55",K:"#FF9F45",L:"#FFC27A",M:"#A9774F",N:"#8B5A3C",P:"#5E3524"}},{a:"////////////9.F2.F.F2.F/8.FGoFGoGoFGo/8.oIGoGIGoGIo/9.oIGIGIGIo/8.FGIGIGIGIGo/9.oIGIGIGIo/10.o5Io/11.o3Jo/8.3oK3LK3o/5.3oM3N3K3NM3o/4.oNM3NM5NM3NMNo/3.o19No/4.o17Po/5.17o",pal:{F:"#2F6E3E",G:"#A6E08E",I:"#7CC46E",J:"#4E9A55",K:"#FF9F45",L:"#FFC27A",M:"#A9774F",N:"#8B5A3C",P:"#5E3524"}}],strawberry:[{a:"//////////////////13.2o/12.o2Fo/8.4oFG2F3o/5.3oI4J2F3JI3o/4.oJI3JI5JI3JIJo/3.o19Jo/4.o17Ko/5.17o",pal:{F:"#C98A6A",G:"#E6B08A",I:"#A9774F",J:"#8B5A3C",K:"#5E3524"}},{a:"//////////////10.2F4.2F/9.F2Go2.F2Go/9.FI2G2o2GIo/10.o2I2J2Io/11.2oIJ2o/12.FIJo/8.5oIJ4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#A6E08E",I:"#5BAE5E",J:"#4E9A55",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"///////////13.Fo/12.FGIo/7.2F3.FGIo3.2F/6.F2JoF.FGIo.2F2Jo/6.FG3JoFGIoF3JGo/7.o2G3JGI3J2Go/8.o2G2J2I2J2Go/9.2o2G2I2G2o/11.2oGI2o/8.5oGI4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#5BAE5E",I:"#4E9A55",J:"#A6E08E",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"/////12.o.o/11.oFoFo/10.oFGFGFo/11.oFoFo/12.oIJo/7.2K3.KIJo3.2K/6.K2LoK.KIJo.2K2Lo/6.KI3LoKIJoK3LIo/7.o2I3LIJ3L2Io/8.o3IL3J3Io/9.2o3IJ2I2o/9.K2LoIJo2Lo/9.KI2LIJ2LIo/10.o2I2J2Io/11.2oIJ2o/8.5oIJ4o/5.3oM9NM3o/4.oNM3NM5NM3NMNo/3.o19No/4.o17Po/5.17o",pal:{F:"#FFFFFF",G:"#FFD24D",I:"#5BAE5E",J:"#4E9A55",K:"#2F6E3E",L:"#A6E08E",M:"#A9774F",N:"#8B5A3C",P:"#5E3524"}},{a:"////5.F5.o3.o/4.FGF3.oIo.oIo/5.F3.oIJIoIJIo/9.o3Io3Io4.F/10.oI3oIo4.FGF/11.2oIKo6.F/7.2L2.oIJIo3.2L/6.L2MoLo3Io.2L2Mo/6.LN3M2oIKoL3MNo/7.o2N3MNK3M2No/8.o3NM3K3No/9.2o3NK2N2o/9.L2MoNKo2Mo/9.LN2MNK2MNo/10.o2N2K2No/11.2oNK2o/8.5oNK4o/5.3oP9QP3o/4.oQP3QP5QP3QPQo/3.o19Qo/4.o17Ro/5.17o",pal:{F:"#FFF6C8",G:"#FFE27A",I:"#E8323F",J:"#FF9AA2",K:"#4E9A55",L:"#2F6E3E",M:"#A6E08E",N:"#5BAE5E",P:"#A9774F",Q:"#8B5A3C",R:"#5E3524"}}],lavender:[{a:"//////////////////13.2o/12.o2Fo/8.4oFG2F3o/5.3oI4J2F3JI3o/4.oJI3JI5JI3JIJo/3.o19Jo/4.o17Ko/5.17o",pal:{F:"#C98A6A",G:"#E6B08A",I:"#A9774F",J:"#8B5A3C",K:"#5E3524"}},{a:"//////////////10.2F4.2F/9.F2Go2.F2Go/9.FI2G2o2GIo/10.o2I2J2Io/11.2oIJ2o/12.FIJo/8.5oIJ4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#A6E08E",I:"#5BAE5E",J:"#4E9A55",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"///////////13.Fo/12.FGIo/7.2F3.FGIo3.2F/6.F2JoF.FGIo.2F2Jo/6.FG3JoFGIoF3JGo/7.o2G3JGI3J2Go/8.o2G2J2I2J2Go/9.2o2G2I2G2o/11.2oGI2o/8.5oGI4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#5BAE5E",I:"#4E9A55",J:"#A6E08E",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"/////11.o.o.o/10.oFoFoFo/10.oFoFoFo/10.GIoIoIo/11.oGIJo/7.2G3.GIJo3.2G/6.G2KoG.GIJo.2G2Ko/6.GI3KoGIJoG3KIo/7.o2I3KIJ3K2Io/8.o3IK3J3Io/9.2o3IJ2I2o/9.G2KoIJo2Ko/9.GI2KIJ2KIo/10.o2I2J2Io/11.2oIJ2o/8.5oIJ4o/5.3oL9ML3o/4.oML3ML5ML3MLMo/3.o19Mo/4.o17No/5.17o",pal:{F:"#A585DA",G:"#2F6E3E",I:"#5BAE5E",J:"#4E9A55",K:"#A6E08E",L:"#A9774F",M:"#8B5A3C",N:"#5E3524"}},{a:"/9.o3.o3.o/8.oF3oF3oFo/8.oGoFoGoFoGo/5.I2.oGFGoGFGoGo/4.IJI.o2GoF2Go2Go/5.I2.oGo2GFGoGo/8.KL2o3L2oLo3.I/9.oLoLoLoLo3.IJI/10.o.oLM2o5.I/7.2K3.KLMo3.2K/6.K2NoK.KLMo.2K2No/6.KL3NoKLMoK3NLo/7.o2L3NLM3N2Lo/8.o3LN3M3Lo/9.2o3LM2L2o/9.K2NoLMo2No/9.KL2NLM2NLo/10.o2L2M2Lo/11.2oLM2o/8.5oLM4o/5.3oP9QP3o/4.oQP3QP5QP3QPQo/3.o19Qo/4.o17Ro/5.17o",pal:{F:"#DCC9F6",G:"#A585DA",I:"#FFF6C8",J:"#FFE27A",K:"#2F6E3E",L:"#5BAE5E",M:"#4E9A55",N:"#A6E08E",P:"#A9774F",Q:"#8B5A3C",R:"#5E3524"}}],rose:[{a:"//////////////////13.2o/12.o2Fo/8.4oFG2F3o/5.3oI4J2F3JI3o/4.oJI3JI5JI3JIJo/3.o19Jo/4.o17Ko/5.17o",pal:{F:"#C98A6A",G:"#E6B08A",I:"#A9774F",J:"#8B5A3C",K:"#5E3524"}},{a:"//////////////10.2F4.2F/9.F2Go2.F2Go/9.FI2G2o2GIo/10.o2I2J2Io/11.2oIJ2o/12.FIJo/8.5oIJ4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#A6E08E",I:"#5BAE5E",J:"#4E9A55",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"///////////13.Fo/12.FGIo/7.2F3.FGIo3.2F/6.F2JoF.FGIo.2F2Jo/6.FG3JoFGIoF3JGo/7.o2G3JGI3J2Go/8.o2G2J2I2J2Go/9.2o2G2I2G2o/11.2oGI2o/8.5oGI4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#5BAE5E",I:"#4E9A55",J:"#A6E08E",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"////13.o/12.oFo/11.oFGFo/11.o3Fo/12.oIJo/7.2K3.KIJo3.2K/6.K2LoK.KIJo.2K2Lo/6.KI3LoKIJoK3LIo/7.o2I3LIJ3L2Io/8.o3IL3J3Io/9.2o3IJ2I2o/9.K2LoIJo2Lo/9.KI2LIJ2LIo/10.o2I2J2Io/11.2oIJ2o/12.KIJo/8.5oIJ4o/5.3oM9NM3o/4.oNM3NM5NM3NMNo/3.o19No/4.o17Po/5.17o",pal:{F:"#E8405A",G:"#FF8A9B",I:"#5BAE5E",J:"#4E9A55",K:"#2F6E3E",L:"#A6E08E",M:"#A9774F",N:"#8B5A3C",P:"#5E3524"}},{a:"/10.o.3o.o/9.oFoFGFoFo/8.oFGF3GFGFo/5.I2.oF3GJ3GFo/4.IKI.oFJ5G2Jo/5.I3.oFJ3G2Jo/9.o2F3JFJo4.I/10.o4FJo4.IKI/11.o3Jo6.I/7.2L.L5Mo2.2L/6.L2NoL2oMPo.2L2No/6.LM3NoLMPoL3NMo/7.o2M3NMP3N2Mo/8.o3MN3P3Mo/9.2o3MP2M2o/9.L2NoMPo2No/9.LM2NMP2NMo/10.o2M2P2Mo/11.2oMP2o/8.5oMP4o/5.3oQ9RQ3o/4.oRQ3RQ5RQ3RQRo/3.o19Ro/4.o17So/5.17o",pal:{F:"#E8405A",G:"#FF8A9B",I:"#FFF6C8",J:"#9E2340",K:"#FFE27A",L:"#2F6E3E",M:"#5BAE5E",N:"#A6E08E",P:"#4E9A55",Q:"#A9774F",R:"#8B5A3C",S:"#5E3524"}}],moonflower:[{a:"//////////////////13.2o/12.o2Fo/8.4oFG2F3o/5.3oI4J2F3JI3o/4.oJI3JI5JI3JIJo/3.o19Jo/4.o17Ko/5.17o",pal:{F:"#C98A6A",G:"#E6B08A",I:"#A9774F",J:"#8B5A3C",K:"#5E3524"}},{a:"//////////////10.2F4.2F/9.F2Go2.F2Go/9.FI2G2o2GIo/10.o2I2J2Io/11.2oIJ2o/12.FIJo/8.5oIJ4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#A6E08E",I:"#5BAE5E",J:"#4E9A55",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"///////////13.Fo/12.FGIo/7.2F3.FGIo3.2F/6.F2JoF.FGIo.2F2Jo/6.FG3JoFGIoF3JGo/7.o2G3JGI3J2Go/8.o2G2J2I2J2Go/9.2o2G2I2G2o/11.2oGI2o/8.5oGI4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#5BAE5E",I:"#4E9A55",J:"#A6E08E",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"////13.o/12.oFo/11.oFGFo/11.oFGFo/12.oIJo/7.2K3.KIJo3.2K/6.K2LoK.KIJo.2K2Lo/6.KI3LoKIJoK3LIo/7.o2I3LIJ3L2Io/8.o3IL3J3Io/9.2o3IJ2I2o/9.K2LoIJo2Lo/9.KI2LIJ2LIo/10.o2I2J2Io/11.2oIJ2o/12.KIJo/8.5oIJ4o/5.3oM9NM3o/4.oNM3NM5NM3NMNo/3.o19No/4.o17Po/5.17o",pal:{F:"#C9B2EE",G:"#F1EAFE",I:"#5BAE5E",J:"#4E9A55",K:"#2F6E3E",L:"#A6E08E",M:"#A9774F",N:"#8B5A3C",P:"#5E3524"}},{a:"/12.3o/10.2o3F2o/9.o2F3G2Fo/5.I2.oF3GF3GFo/4.IJI.oF2G3J2GFo/5.I2.oFGFJKJFGFo/8.oF2G3J2GFo3.I/9.o2FGFG2Fo3.IJI/10.2o3F2o5.I/7.2L3.oMNo3.2L/6.L2PoL.LMNo.2L2Po/6.LM3PoLMNoL3PMo/7.o2M3PMN3P2Mo/8.o3MP3N3Mo/9.2o3MN2M2o/9.L2PoMNo2Po/9.LM2PMN2PMo/10.o2M2N2Mo/11.2oMN2o/8.5oMN4o/5.3oQ9RQ3o/4.oRQ3RQ5RQ3RQRo/3.o19Ro/4.o17So/5.17o",pal:{F:"#C9B2EE",G:"#F1EAFE",I:"#FFF6C8",J:"#FFE27A",K:"#FFFFFF",L:"#2F6E3E",M:"#5BAE5E",N:"#4E9A55",P:"#A6E08E",Q:"#A9774F",R:"#8B5A3C",S:"#5E3524"}}],starbloom:[{a:"//////////////////13.2o/12.o2Fo/8.4oFG2F3o/5.3oI4J2F3JI3o/4.oJI3JI5JI3JIJo/3.o19Jo/4.o17Ko/5.17o",pal:{F:"#C98A6A",G:"#E6B08A",I:"#A9774F",J:"#8B5A3C",K:"#5E3524"}},{a:"//////////////10.2F4.2F/9.F2Go2.F2Go/9.FI2G2o2GIo/10.o2I2J2Io/11.2oIJ2o/12.FIJo/8.5oIJ4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#A6E08E",I:"#5BAE5E",J:"#4E9A55",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"///////////13.Fo/12.FGIo/7.2F3.FGIo3.2F/6.F2JoF.FGIo.2F2Jo/6.FG3JoFGIoF3JGo/7.o2G3JGI3J2Go/8.o2G2J2I2J2Go/9.2o2G2I2G2o/11.2oGI2o/8.5oGI4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#5BAE5E",I:"#4E9A55",J:"#A6E08E",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"/////13.o/12.oFo/11.oFGFo/12.oFo/12.IJKo/7.2I3.IJKo3.2I/6.I2LoI.IJKo.2I2Lo/6.IJ3LoIJKoI3LJo/7.o2J3LJK3L2Jo/8.o3JL3K3Jo/9.2o3JK2J2o/9.I2LoJKo2Lo/9.IJ2LJK2LJo/10.o2J2K2Jo/11.2oJK2o/8.5oJK4o/5.3oM9NM3o/4.oNM3NM5NM3NMNo/3.o19No/4.o17Po/5.17o",pal:{F:"#FFD24D",G:"#FFF1B8",I:"#2F6E3E",J:"#5BAE5E",K:"#4E9A55",L:"#A6E08E",M:"#A9774F",N:"#8B5A3C",P:"#5E3524"}},{a:"/13.o/12.oFo/12.oFo/5.G3.3oFIF3o/4.GJG.o4FI4Fo/5.G3.oF3I2FKo/10.oFI2FKo5.G/9.o2FKoKFKo3.GJG/9.oFKoLM2Ko4.G/7.2N.2oNLM2o2.2N/6.N2PoN.NLMo.2N2Po/6.NL3PoNLMoN3PLo/7.o2L3PLM3P2Lo/8.o3LP3M3Lo/9.2o3LM2L2o/9.N2PoLMo2Po/9.NL2PLM2PLo/10.o2L2M2Lo/11.2oLM2o/8.5oLM4o/5.3oQ9RQ3o/4.oRQ3RQ5RQ3RQRo/3.o19Ro/4.o17So/5.17o",pal:{F:"#FFD24D",G:"#FFF6C8",I:"#FFF1B8",J:"#FFE27A",K:"#E8A93A",L:"#5BAE5E",M:"#4E9A55",N:"#2F6E3E",P:"#A6E08E",Q:"#A9774F",R:"#8B5A3C",S:"#5E3524"}}],sunflower:[{a:"//////////////////13.2o/12.o2Fo/8.4oFG2F3o/5.3oI4J2F3JI3o/4.oJI3JI5JI3JIJo/3.o19Jo/4.o17Ko/5.17o",pal:{F:"#C98A6A",G:"#E6B08A",I:"#A9774F",J:"#8B5A3C",K:"#5E3524"}},{a:"//////////////10.2F4.2F/9.F2Go2.F2Go/9.FI2G2o2GIo/10.o2I2J2Io/11.2oIJ2o/12.FIJo/8.5oIJ4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#A6E08E",I:"#5BAE5E",J:"#4E9A55",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"///////////13.Fo/12.FGIo/7.2F3.FGIo3.2F/6.F2JoF.FGIo.2F2Jo/6.FG3JoFGIoF3JGo/7.o2G3JGI3J2Go/8.o2G2J2I2J2Go/9.2o2G2I2G2o/11.2oGI2o/8.5oGI4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#5BAE5E",I:"#4E9A55",J:"#A6E08E",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"////13.o/12.oFo/11.oFGFo/12.oFo/12.IGJo/7.2I3.IGJo3.2I/6.I2KoI.IGJo.2I2Ko/6.IG3KoIGJoI3KGo/7.o2G3KGJ3K2Go/8.o3GK3J3Go/9.2o3GJ2G2o/9.I2KoGJo2Ko/9.IG2KGJ2KGo/10.o2G2J2Go/11.2oGJ2o/12.IGJo/8.5oGJ4o/5.3oL9ML3o/4.oML3ML5ML3MLMo/3.o19Mo/4.o17No/5.17o",pal:{F:"#FFD24D",G:"#5BAE5E",I:"#2F6E3E",J:"#4E9A55",K:"#A6E08E",L:"#A9774F",M:"#8B5A3C",N:"#5E3524"}},{a:"/10.7o/9.oFGFGFGFo/8.oFG5IGFo/5.J3.oFIK3I2Fo/4.JLJ.oFG5IGFo/5.J3.oF5IFo/8.oFG5IGFo3.J/9.o7Fo3.JLJ/10.oFoFMFo5.J/7.2N2.oNPMo3.2N/6.N2QoN.NPMo.2N2Qo/6.NP3QoNPMoN3QPo/7.o2P3QPM3Q2Po/8.o3PQ3M3Po/9.2o3PM2P2o/9.N2QoPMo2Qo/9.NP2QPM2QPo/10.o2P2M2Po/11.2oPM2o/8.5oPM4o/5.3oR9IR3o/4.oIR3IR5IR3IRIo/3.o19Io/4.o17So/5.17o",pal:{F:"#FFD24D",G:"#FFF1B8",I:"#8B5A3C",J:"#FFF6C8",K:"#C98A55",L:"#FFE27A",M:"#4E9A55",N:"#2F6E3E",P:"#5BAE5E",Q:"#A6E08E",R:"#A9774F",S:"#5E3524"}}],tulip:[{a:"//////////////////13.2o/12.o2Fo/8.4oFG2F3o/5.3oI4J2F3JI3o/4.oJI3JI5JI3JIJo/3.o19Jo/4.o17Ko/5.17o",pal:{F:"#C98A6A",G:"#E6B08A",I:"#A9774F",J:"#8B5A3C",K:"#5E3524"}},{a:"//////////////10.2F4.2F/9.F2Go2.F2Go/9.FI2G2o2GIo/10.o2I2J2Io/11.2oIJ2o/12.FIJo/8.5oIJ4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#A6E08E",I:"#5BAE5E",J:"#4E9A55",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"///////////13.Fo/12.FGIo/7.2F3.FGIo3.2F/6.F2JoF.FGIo.2F2Jo/6.FG3JoFGIoF3JGo/7.o2G3JGI3J2Go/8.o2G2J2I2J2Go/9.2o2G2I2G2o/11.2oGI2o/8.5oGI4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#5BAE5E",I:"#4E9A55",J:"#A6E08E",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"/////13.o/12.oFo/11.oFGFo/11.o3Fo/12.oIJo/7.2K3.KIJo3.2K/6.K2LoK.KIJo.2K2Lo/6.KI3LoKIJoK3LIo/7.o2I3LIJ3L2Io/8.o3IL3J3Io/9.2o3IJ2I2o/9.K2LoIJo2Lo/9.KI2LIJ2LIo/10.o2I2J2Io/11.2oIJ2o/8.5oIJ4o/5.3oM9NM3o/4.oNM3NM5NM3NMNo/3.o19No/4.o17Po/5.17o",pal:{F:"#FF8FB0",G:"#FFD3E0",I:"#5BAE5E",J:"#4E9A55",K:"#2F6E3E",L:"#A6E08E",M:"#A9774F",N:"#8B5A3C",P:"#5E3524"}},{a:"///11.o.o.o/5.F4.oGoGoGo/4.FIF3.oGJGJGo/5.F4.oGJ3Go/10.o4GKo5.F/11.o2GKo5.FIF/12.oLMo6.F/7.2N3.NLMo3.2N/6.N2PoN.NLMo.2N2Po/6.NL3PoNLMoN3PLo/7.o2L3PLM3P2Lo/8.o3LP3M3Lo/9.2o3LM2L2o/9.N2PoLMo2Po/9.NL2PLM2PLo/10.o2L2M2Lo/11.2oLM2o/8.5oLM4o/5.3oQ9RQ3o/4.oRQ3RQ5RQ3RQRo/3.o19Ro/4.o17So/5.17o",pal:{F:"#FFF6C8",G:"#FF8FB0",I:"#FFE27A",J:"#FFD3E0",K:"#E8638C",L:"#5BAE5E",M:"#4E9A55",N:"#2F6E3E",P:"#A6E08E",Q:"#A9774F",R:"#8B5A3C",S:"#5E3524"}}],blackrose:[{a:"//////////////////13.2o/12.o2Fo/8.4oFG2F3o/5.3oI4J2F3JI3o/4.oJI3JI5JI3JIJo/3.o19Jo/4.o17Ko/5.17o",pal:{F:"#C98A6A",G:"#E6B08A",I:"#A9774F",J:"#8B5A3C",K:"#5E3524"}},{a:"//////////////10.2F4.2F/9.F2Go2.F2Go/9.FI2G2o2GIo/10.o2I2J2Io/11.2oIJ2o/12.FIJo/8.5oIJ4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#A6E08E",I:"#5BAE5E",J:"#4E9A55",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"///////////13.Fo/12.FGIo/7.2F3.FGIo3.2F/6.F2JoF.FGIo.2F2Jo/6.FG3JoFGIoF3JGo/7.o2G3JGI3J2Go/8.o2G2J2I2J2Go/9.2o2G2I2G2o/11.2oGI2o/8.5oGI4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#5BAE5E",I:"#4E9A55",J:"#A6E08E",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"////13.o/12.oFo/11.oFGFo/11.o3Fo/12.oIJo/7.2K3.KIJo3.2K/6.K2LoK.KIJo.2K2Lo/6.KI3LoKIJoK3LIo/7.o2I3LIJ3L2Io/8.o3IL3J3Io/9.2o3IJ2I2o/9.K2LoIJo2Lo/9.KI2LIJ2LIo/10.o2I2J2Io/11.2oIJ2o/12.KIJo/8.5oIJ4o/5.3oM9NM3o/4.oNM3NM5NM3NMNo/3.o19No/4.o17Po/5.17o",pal:{F:"#3B2A45",G:"#8E2443",I:"#5BAE5E",J:"#4E9A55",K:"#2F6E3E",L:"#A6E08E",M:"#A9774F",N:"#8B5A3C",P:"#5E3524"}},{a:"/10.o.3o.o/9.oFoFGFoFo/8.oFGF3GFGFo/5.I2.oF3GJ3GFo/4.IKI.oFJ5G2Jo/5.I3.oFJ3G2Jo/9.o2F3JFJo4.I/10.o4FJo4.IKI/11.o3Jo6.I/7.2L.L5Mo2.2L/6.L2NoL2oMPo.2L2No/6.LM3NoLMPoL3NMo/7.o2M3NMP3N2Mo/8.o3MN3P3Mo/9.2o3MP2M2o/9.L2NoMPo2No/9.LM2NMP2NMo/10.o2M2P2Mo/11.2oMP2o/8.5oMP4o/5.3oQ9RQ3o/4.oRQ3RQ5RQ3RQRo/3.o19Ro/4.o17So/5.17o",pal:{F:"#3B2A45",G:"#8E2443",I:"#FFF6C8",J:"#1A1018",K:"#FFE27A",L:"#2F6E3E",M:"#5BAE5E",N:"#A6E08E",P:"#4E9A55",Q:"#A9774F",R:"#8B5A3C",S:"#5E3524"}}],pumpkin:[{a:"//////////////////13.2o/12.o2Fo/8.4oFG2F3o/5.3oI4J2F3JI3o/4.oJI3JI5JI3JIJo/3.o19Jo/4.o17Ko/5.17o",pal:{F:"#C98A6A",G:"#E6B08A",I:"#A9774F",J:"#8B5A3C",K:"#5E3524"}},{a:"//////////////10.2F4.2F/9.F2Go2.F2Go/9.FI2G2o2GIo/10.o2I2J2Io/11.2oIJ2o/12.FIJo/8.5oIJ4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#A6E08E",I:"#5BAE5E",J:"#4E9A55",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"/////////////21.2F/5.2F12.oF2Go/4.F2G2o7.3oI2GJo/4.FJ2GI3o3.o2IoI2Jo/5.o2JIo2Io2.o4I2o/6.2o4Io3.4o/8.4o/8.11o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#A6E08E",I:"#4E9A55",J:"#5BAE5E",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"/////////////21.2F/5.2F12.oF2Go/4.F2G2o7.3oI2GJo/4.FJ2GI3o3.o2IoI2Jo/5.o2JIo2I4o4I2o/6.2o4Io3K4o/8.4oKL3Ko/8.4o4KM2o/5.3oN4PK2M2PN3o/4.oPN3PN5PN3PNPo/3.o19Po/4.o17Qo/5.17o",pal:{F:"#2F6E3E",G:"#A6E08E",I:"#4E9A55",J:"#5BAE5E",K:"#FF9F45",L:"#FFC27A",M:"#E8812F",N:"#A9774F",P:"#8B5A3C",Q:"#5E3524"}},{a:"/////////////13.2F6.2F/5.2F4.2o2G3o.oF2Io/4.F2I2o.o7JoK2IGo/4.FG2IKoJL3JL2JMK2Go/5.o2GKJ2L2JL2J2MK2o/6.2oKJL3JL3JMo/8.o8J2Mo/8.2o2J6Mo/5.3oN2P6MPN3o/4.oPN3PN5PN3PNPo/3.o19Po/4.o17Qo/5.17o",pal:{F:"#2F6E3E",G:"#5BAE5E",I:"#A6E08E",J:"#FF9F45",K:"#4E9A55",L:"#FFC27A",M:"#E8812F",N:"#A9774F",P:"#8B5A3C",Q:"#5E3524"}}],mushroom:[{a:"//////////////////13.2o/12.o2Fo/8.4oFG2F3o/5.3oI4J2F3JI3o/4.oJI3JI5JI3JIJo/3.o19Jo/4.o17Ko/5.17o",pal:{F:"#C98A6A",G:"#E6B08A",I:"#A9774F",J:"#8B5A3C",K:"#5E3524"}},{a:"/////////////////13.2o/12.o2Fo/12.G2Io/8.6oI4o/5.3oJ9KJ3o/4.oKJ3KJ5KJ3KJKo/3.o19Ko/4.o17Lo/5.17o",pal:{F:"#E8323F",G:"#8B6A4A",I:"#FFF1DC",J:"#A9774F",K:"#8B5A3C",L:"#5E3524"}},{a:"///////////////12.3o/11.oFGFo/11.o3Fo.2o/12.oIo.o2Fo/12.JIo.J2Io/8.5oI4oIo/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#E8323F",G:"#FF8A97",I:"#FFF1DC",J:"#8B6A4A",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"/////////////12.3o/11.o3Fo/10.oFGI2Fo/10.o5F4o/7.2o2.2oI3oFGFo/6.o2Fo2.JIo.o3Fo/6.J2Io.J2Io2.oIo/7.oI3o2I4oIo/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#E8323F",G:"#FF8A97",I:"#FFF1DC",J:"#8B6A4A",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"//////////12.4o/11.o4Fo/10.oFGI3Fo/9.oFGI2FI2Fo/9.o8F3o/10.3o2I3o3Fo/6.3o3.J2I2oFGI2Fo/5.oFGFo2.J2I2o5Fo/5.o3Fo2.J2Io.2oI2o/6.oIo3.J2Io2.JIo/6.JI5o2I3o2Io/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#E8323F",G:"#FF8A97",I:"#FFF1DC",J:"#8B6A4A",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}}],sakura:[{a:"//////////////////13.2o/12.o2Fo/8.4oFG2F3o/5.3oI4J2F3JI3o/4.oJI3JI5JI3JIJo/3.o19Jo/4.o17Ko/5.17o",pal:{F:"#C98A6A",G:"#E6B08A",I:"#A9774F",J:"#8B5A3C",K:"#5E3524"}},{a:"//////////////10.2F4.2F/9.F2Go2.F2Go/9.FI2G2o2GIo/10.o2I2J2Io/11.2oIJ2o/12.FIJo/8.5oIJ4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#A6E08E",I:"#5BAE5E",J:"#4E9A55",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"//////////11.2F/10.F2Go.2F/9.FG2IGo2Go/10.o3IG2Io/11.2oJ2Io/12.FIJ2G2o/12.FIJI2GJo/12.FIJo2IJo/12.FIJ4o/12.FIJo/8.5oIJ4o/5.3oK9LK3o/4.oLK3LK5LK3LKLo/3.o19Lo/4.o17Mo/5.17o",pal:{F:"#2F6E3E",G:"#A6E08E",I:"#5BAE5E",J:"#4E9A55",K:"#A9774F",L:"#8B5A3C",M:"#5E3524"}},{a:"///12.F2o/11.FG2Io/10.F3G2Io/8.2F3GJ3I2o/7.F2GI2G6Io/6.F3G5IJKG2Io/6.F2GJ5IKG3Io/6.o7IK2IJ2Io/6.o5IKo5IKo/7.o3IKo.o3IKo/8.3o2Lo2L3o/11.5o/11.oMLNo/11.oMLNo/11.oMLNo/11.oMLNo/11.oMLNo/8.3oLML2N3o/5.3oM9LM3o/4.oLM3LM5LM3LMLo/3.o19Lo/4.o17No/5.17o",pal:{F:"#2F6E3E",G:"#A6E08E",I:"#7CC46E",J:"#FFC2D3",K:"#4E9A55",L:"#8B5A3C",M:"#A9774F",N:"#5E3524"}},{a:"/11.5o/10.o2F3Go/6.G2.o4F3Go/7.2oG4F4G2o.G/6.o3GFI2F6Go/5.o3F7GIJF2Go/4.o4F7G2JF3Go/3.oG4F6G2J2F4Go/3.o2GFI6GIJ2F4GJo/3.o7G3J5GIG2Jo/4.o5G2J3o5G2Jo/5.o3GIJ2o.2o3G2Jo/6.oG2Jo2Ko2KoG2Jo/7.3o.oLKMo.3o/4.G6.oLKMo/11.oLKMo/11.oLKMo7.G/11.oLKMo/11.oLKMo/8.3oKLK2M3o/5.3oL9KL3o/4.oKL3KL5KL3KLKo/3.o19Ko/4.o17Mo/5.17o",pal:{F:"#FFE3EC",G:"#FFC2D3",I:"#FF9DBA",J:"#F48FAE",K:"#8B5A3C",L:"#A9774F",M:"#5E3524"}}]},bits:{clip:{a:"//9.6F/8.F6.G/7.F8.G/7.F3.2F3.G/7.I2.F2.G2.G/7.I2.F2.G2.G/7.F2.F2.G2.G/7.F2.I2.G2.G/7.F2.F2.G2.G/7.F2.F2.G2.G/7.F2.F2.G2.G/7.F2.F2.G2.G/7.F2.F5.G/7.F2.F5.G/10.F5.G/10.F5.G/10.F5.G/11.G3.G/12.3G",pal:{F:"#FF8FB0",G:"#D9487A",I:"#FFD3E0"},w:24,h:24,n:"Paperclip"},pin:{a:"///7.2o6.2o/6.o2F2o2.2o2Fo/5.oF3GF2o5Fo/4.oFG2I2G8Fo/3.o2FGI3G9Fo/3.o2F5G9Fo/4.o2F3G9Fo/4.o13FJo/5.o10F2Jo/6.o8F2Jo/7.o6F2Jo/8.o3F3Jo/9.oF3Jo/10.o2Jo/11.2o//12.K/12.K/13.2L",pal:{F:"#FF8FB0",G:"#FFD3E0",I:"#FFFFFF",J:"#E0577F",K:"#BDB3C9",L:"#E6D6DC"},w:24,h:24,n:"Heart pin"},heartdoodle:{a:"/21.F/21.F/19.2FG2F/5.4I6.4I2.F/3.2I3JK2I2.2I3JK2IF/2.I2J2L4K2I4K2LJKI/.IJ3LG4I2K4IK3LKI/.IJ2LGI4.2I4.IK2LKI/IJ2LKG12.IJ2LKI/IJ2LKI12.IJ2LKI/IJ2LKI12.IJ2LKI/IK3LKI10.IJ3LKI/.IK2LK2I8.2IJ2LKI/2.IK2LJKI6.I2J2LKI/3.I2K2LKI4.IJ2L2KI/4.2IK2LKI2.IJ2LK2I/6.IK2LK2IJ2LKI/7.IK2L2J2LKI/8.IK4LKI/9.IK2LKI/10.IJKI/10.I2KI/11.2I",pal:{F:"#FFC93C",G:"#FFFFFF",I:"#8E2A4E",J:"#FFC2D6",K:"#D9406E",L:"#FF6F96"},w:24,h:24,n:"Heart doodle"},stardoodle:{a:"///11.2F/11.2F/10.4F/10.F2GF/10.F2GF/9.2F2G2F/2.8F4G8F/3.F16GF/4.2F4GI2GI4G2F/5.2F2GJ4GJ2G2F/6.2F3G2I3G2F/7.2F6G2F/7.F8GF/7.F8GF/7.F2G4F2GF/6.F2G2F2.2F2GF/6.3F6.3F/6.F10.F",pal:{F:"#E9A92E",G:"#FFF1B8",I:"#3B1C28",J:"#FFB3C7"},w:24,h:24,n:"Star doodle"},sparkles:{a:"18.o/17.oFo/8.2o7.oFo/7.oGIo6.oFo/7.oGIo4.2o2FJ2o/6.o2G2Io2.o4F3Jo/6.o2G2Io2.o3JK3Jo/4.3o2G2I3o.2o2JL2o/2.2o5G5I2o.oJo/.o7G7I2oJo/.o7IK6I2oJo/2.2o6I4M2o2.o/4.3o3IM3o/6.o3IMo5.2o/6.o3IMo4.oNPo/7.o2Io5.oNPo/7.o2Io3.2o2N2P2o/8.2o3.o4N4Po/13.o4PK3Po/14.2o3PQ2o/16.o2Po/16.o2Po/17.2o",pal:{F:"#FFD3E0",G:"#FFF1B8",I:"#FFD24D",J:"#FF8FB0",K:"#FFFFFF",L:"#E0577F",M:"#C98A2A",N:"#E4D8FA",P:"#B79CF0",Q:"#8E70C4"},w:24,h:24,n:"Sparkles"},arrow:{a:"14.F/13.FGF/13.FIGF/13.FIJG2F/13.FI2JIGF/9.5FI4JGF/7.2F5I6JGF/6.F2I12JGF/5.FI5J2G6JGF/4.FI4J2G2FI3J2GF/3.FI4JG2F.FI2JG2F/3.FIK2JGF3.FI2GF/2.FI3JGF4.FG2F/2.FI2JGF6.F/.FIJKJGF/.FIJKGF/.FI2JGF/.FIJGF/.FIJGF/.FIJGF/.FIJGF/.FIJGF/.FIJGF/.F3GF",pal:{F:"#3E2A66",G:"#6A4FB0",I:"#C2ABF5",J:"#8B6BD9",K:"#E4D8FA"},w:24,h:24,n:"Swoosh arrow"},bow:{a:"////2.o18.o/.oFo16.oFo/.oGF2o12.2oGFo/oG2IGFo10.o2G2IFo/oG4IF2o.4o.2oG4IFo/oG3IJIGFo3KLo2G2IJ2IFo/oG4I2JIFK2MLG2I2J3IFo/oF8IK2ML8IFo/.oG4I3FK2ML3F4IFo/.oGI3F2oGK2MLF2o3FIFo/.o2F3o.oG4LFo.3o2Fo/2.2o3.oGIF2oGIFo3.2o/7.oGIF2oGIFo/7.oGIF2oGIFo/6.oG2IF2oG2IFo/6.o2FIF2oFI2Fo/5.oF2oFo2.oF2oFo/6.o2.o4.o2.o",pal:{F:"#D9487A",G:"#FFD3E0",I:"#FF8FB0",J:"#E0628A",K:"#FFB3CB",L:"#C23E68",M:"#F06C97"},w:24,h:24,n:"Bow"},daisy:{a:"/7.2o6.2o/6.o2Fo4.o2Fo/6.o3Fo2.o3Fo/6.o3FG2oG3Fo/6.o4F2G3FGo/2.4o.o3F2G3Fo.4o/.o4F2oG2F2G2FG2oG2FIo/.o5FGo2F2J2FoG3F2Io/2.o6F2JK3J4F2Io/3.oG4FJL2K2J3FIGo/4.o3GJ5K2J3Go/4.o3G2J3K3J3Go/3.oG4F2JK3J4IGo/2.o6F6J5IGo/.o5FGo2F2J2IoG5Io/.o3FG2oG2F2G2IG2o2G2Io/2.4o.o3F2G3Io.4o/6.oG2FI2G3IGo/6.o2FIG2oG2IGo/6.oF2Io2.oG2Io/6.o2Io4.o2Io/7.2o6.2o",pal:{F:"#FFFFFF",G:"#E3D3EA",I:"#F1E8F7",J:"#E39A2B",K:"#FFC93C",L:"#FFF1B8"},w:24,h:24,n:"Daisy"},stamp:{a:"/3.o.o.o.o.o.o.o.o.o/2.oFoFoFoFoFoFoFoFoFo/3.o16Fo/2.o18Fo/3.o2F12G2Fo/2.o3F12G3Fo/3.o2F12G2Fo/2.o3FG4IG4I2G3Fo/3.o2FG2I2J5I2G2Fo/2.o3FG9I2G3Fo/3.o2FG9I2G2Fo/2.o3F2G7I3G3Fo/3.o2F3K5I4K2Fo/2.o3F4K3I5K3Fo/3.o2F5KI6K2Fo/2.o3F9K2LK3Fo/3.o2F10KLK2Fo/2.o3F12K3Fo/3.o16Fo/2.o18Fo/2.oFoFoFoFoFoFoFoFoFo/3.o.o.o.o.o.o.o.o.o",pal:{F:"#FFF8F2",G:"#FFC2D6",I:"#E8456F",J:"#FFFFFF",K:"#FFAFC8",L:"#B0335A"},w:24,h:24,n:"Postage stamp"},envelope:{a:"/////2.20o/.o2F16G2Fo/.o2GF14GF2Go/.o3G2F10G2F3Go/.o5GF8GF5Go/.o6GFI3GI2F6Go/.o6G3IG3I7Go/.o6G2IJ4I7Go/.o6K7I7Ko/.o7K5I8Ko/.o8K3I9Ko/.o6KL2KI3KL6Ko/.o4K2L8K2L4Ko/.o2K2L12K2L2Ko/.o2L16K2Lo/2.20o",pal:{F:"#E2C6B2",G:"#FFF4E8",I:"#D6385F",J:"#FF8FA8",K:"#F6E3D2",L:"#E8D2C0"},w:24,h:24,n:"Love letter"},sticky:{a:"//3.18o/2.o18Fo/2.o18Fo/2.o18Go/2.o18Go/2.o18Go/2.o18Go/2.o3G10IGI3Go/2.o18Go/2.o18Go/2.o3G8IG3I3Go/2.o18Go/2.o13GJ4Go/2.o3G6I3GJGJ3Go/2.o18Go/2.o16GKGo/2.o15GKLo/2.o14GK2Lo/2.o15G2o/3.15o",pal:{F:"#FFD95C",G:"#FFE98A",I:"#C9A53A",J:"#F0507E",K:"#E5B83D",L:"#F2C94C"},w:24,h:24,n:"Sticky note"},ticket:{a:"/////.22o/o21FGo/o15FI5FGo/o21JGo/.o4J2KJ2K5JI2JL2Jo/2.o2J7K7JLJo/2.o2J7K4JIJ3Lo/2.o3J5K8JLJo/.o5J3K6JIJLJLJo/o7JK13JGo/o3JIJIJIJIJI3JI5JGo/o21JGo/o22Go/.22o",pal:{F:"#FFD3E0",G:"#F28AAB",I:"#E0628A",J:"#FFB3CB",K:"#E8456F",L:"#FFF6D9"},w:24,h:24,n:"Ticket"},bubble:{a:"//7.10o/5.2o10F2o/4.o14Fo/3.o16Fo/2.o18Fo/2.o6F2G2F2G6Fo/.o6F2GI5G6Fo/.o6F8G6Fo/.o6F8G5FJo/.o7F6G4F3Jo/2.o7F4G4F3Jo/2.o8F2G3F5Jo/3.o10F6Jo/4.o8F6Jo/4.o6F6J2o/4.o4F8o/4.o2F2o/4.oFo/5.o",pal:{F:"#FFFFFF",G:"#FF6F91",I:"#FFD3E0",J:"#EEE4F6"},w:24,h:24,n:"Speech bubble"},cloud:{a:"////10.5o/8.2o5F2o/7.o9Fo/6.o11Fo/6.o11F2o/4.3o13Fo/3.o17Fo/2.o19Fo/.o20Fo/.o19F2Go/.o7FI5FI3F3Go/.o7FI5FIF5Go/2.o4GJ3GIGI3GJ3Go/3.o8GI7Go/4.o15Go/5.15o",pal:{F:"#FFFFFF",G:"#DDE7FB",I:"#3B1C28",J:"#FFB3C7"},w:24,h:24,n:"Cloud"},moon:{a:"///7.3o/5.2o2FGo8.I/4.o2FJGo8.3I/3.oF2JGo10.I/2.oF3JGo/2.oF2JGo/.oF3JGo/.oF3JGo/.oF4JGo/.oF4JGo/.oF5JGo8.J/.oG6JGo7.J/2.oF6JG5o2JK2J/2.oG7J5FGoJ/3.oG10JGo.J/4.o2G6J2Go/5.2o6G2o/7.6o2.I",pal:{F:"#FFF6C9",G:"#E0A93A",I:"#C9B2EE",J:"#FFE27A",K:"#FFFFFF"},w:24,h:24,n:"Moon"},pressed:{a:"12.3o/11.oFGF5o/10.oFG5FGFo/9.2oG7FGFo/8.oFG9FGo/7.oFG11Fo/7.oG5F2I4FJo/7.o5FIK2I2F3Jo/7.oG4F4IF4Jo/8.o5F2IF5Jo/8.o7F6Jo/8.oG5F6Jo/8.oFG3F5J2o/3.2o3.oLFGF6Jo/2.oLMo2.oLM4o3Jo/2.oLNM2o3LMo2.3o/2.o2MNMLNM2NMo/3.2oMN2Mo3Mo/5.oMNM4o/5.oLMo/4.oLNMo/4.oLNMo/4.oLMo/4.o2Mo",pal:{F:"#F7A8C2",G:"#FFC7D8",I:"#FFC93C",J:"#E77FA3",K:"#FFF1B8",L:"#A6D08E",M:"#5A8A4C",N:"#7FB06A"},w:24,h:24,n:"Pressed flower"},button:{a:"//8.8o/6.2o7FG2o/5.o2F8IFGo/4.oF3I6J3IGo/3.oF2I2K6I2J2IGo/3.oFIKJ8I2JIGo/2.oF2IJ10IJ2IGo/2.oFIJ3I2L3I2L2IJIGo/2.oFIJ3ILM2IM2L2IJIGo/2.oFIJ5I2M5IJIGo/2.oFIJ5I2M5IJIGo/2.oFIJ4IM2IM4IJIGo/2.oFIJ3I2L3I2L2IJIGo/2.oG2IJ2I2L3I2LIJ2IGo/3.oFI2J8I2JIGo/3.oG2I2J6I2J2IGo/4.oG3I6J3IGo/5.o2G8I2Go/6.2o8G2o/8.8o",pal:{F:"#DCCCFA",G:"#8E70C4",I:"#B79CF0",J:"#A388E0",K:"#FFFFFF",L:"#6D52A8",M:"#FF6F91"},w:24,h:24,n:"Button"},goldstar:{a:"11.2o/10.oFGo/10.oFGo/10.oFGo/9.o2F2Go/9.o2F2Go/2.7o3F3G7o/.o10F8G2Io/2.2o8F7GI2o/4.o7F6GIo/5.o4GJ3GJ2GIo/6.o9GIo/6.o4GJGJG2Io/6.o5GJG3Io/6.o6G4Io/6.o4G2K4Io/5.o4GL2ML4Io/5.o2G2LM2oK2L2Io/5.oG3LM2oK3LIo/5.oK3LM2oK3LMo/4.oK3MLM2oML3Mo/4.oM3oMo2.oM3oMo/5.o3.o4.o3.o",pal:{F:"#FFF1B8",G:"#FFD24D",I:"#C98A2A",J:"#3B1C28",K:"#FFD3E0",L:"#FF8FB0",M:"#D9487A"},w:24,h:24,n:"Gold star"},rainbow:{a:"//////8.8o/6.2o8F2o/5.o2F8G2Fo/4.o2F2G6I2G2Fo/3.oF2G3I4J3I2GFo/2.o2FG2I8J2IG2Fo/2.oFG2I2J6K2J2IGFo/.oF2GI2J2K4L2K2JI2GFo/.oF2MIJ2KL4oL2KJI2MFo/o6MKLo4.oLK6Mo/o6MKLo4.oLK6Mo/o6M2o6.2o6Mo/oM5No8.oM5No/.2o2M2o10.2o2M2o/3.2o14.2o",pal:{F:"#FF8FA8",G:"#FFC27A",I:"#FFE27A",J:"#A6E08E",K:"#9CC9F5",L:"#C9B2EE",M:"#FFFFFF",N:"#E6E4F6"},w:24,h:24,n:"Rainbow"},tick:{a:"19.3o/18.o2FGo/17.oF2IGo/16.oF3IGo/15.oF3IGo/15.oF3IGo/3.12oF3IGo/2.o11JF3IGo/.oJK9LF3IGo/.oJLM8NF2IGo/.oJL8NF3IGo/.oJL7NF3IGLo/.oJL7NF2IGJLo/.oJLN2FG2NF3IGJLo/.oJLNF2I2F3IGNJLo/.oJLNF6IG2NJLo/.oJLNG6IG2NJLo/.oJL2NG4IG3NJLo/.oJL3NG3IG3NJLo/.oJL4N3G4NJLo/.oLK11JKLo/2.o13Lo/3.13o",pal:{F:"#FFB3CB",G:"#D6386A",I:"#FF5C8A",J:"#E4D8FA",K:"#C9B2EE",L:"#8E70C4",M:"#F3EEFA",N:"#FFFFFF"},w:24,h:24,n:"Done!"},latte:{a:"13.oFGo/13.o2Go/13.o2Go/13.o2Go/4.10o2G5o/3.o16IJo/3.o17Jo/4.o14K2o/4.o14Ko/4.o2KI11Ko/4.o2KI11Ko/5.o9L3Mo/5.o4L2N3L3Mo/5.o2LILN4L3Mo/5.o2LI4L2N3Mo/5.o9L3Mo/5.o4LILI2L3Mo/5.o3P5IP3Mo/6.o2P5IP2Mo/6.o4PI3P2Mo/6.o8P2Mo/6.o8P2Mo/7.10o",pal:{F:"#B79CF0",G:"#7A5FC4",I:"#FFFFFF",J:"#E6D6DC",K:"#FFF7FA",L:"#F7B6C9",M:"#E8869F",N:"#FFE6EE",P:"#F39BB5"},w:24,h:24,n:"Pink latte"},doily:{a:"11.2F/6.2F2.F2GF2.2F/5.F2G2F4G2F2GF/5.F5G2I5GF/5.FG2I2G2I2G2IGF/2.4FG2I6G2IG4F/.F8GIGIGI7GF/.F2G2I9GI2G2I2GF/2.FG2I10GIG2IGF/2.F14GI3GF/.F4GI3G4J6G2KF/F2G2I4GJL4J2GIG2I2KF/F2G2IGI2G6J3GK2I2KF/.F8G4J3GI4KF/2.F3GI4G2J3G5KF/2.FG2IGI7G3K2IKF/.F2G2I2GI5G4K2I2KF/.F7GIGIGI8KF/2.4FG2I3G3K2IK4F/5.FG2I2G2I2K2IKF/5.F4GK2I5KF/5.F2G2F4K2F2KF/6.2F2.F2KF2.2F/11.2F",pal:{F:"#D98AA8",G:"#FFFFFF",I:"#F2B8CC",J:"#FF8FB0",K:"#F7EEF3",L:"#FFD3E0"},w:24,h:24,n:"Doily"},bat:{a:"/////9.o4.o/3.3o2.oFo2.oFo2.3o/.2o2GFo.oF4oFo.o2GF2o/oFG3IF2o5GF2oG3IGFo/.oGIJ2IFoG4IFoG2IJIFo/.oG2IJ2IG6IG2IJ2IFo/.oG3IJ10IJ3IFo/.oG7IK3IK6IFo/o3F16I3Fo/.3oFI3FL5IL2FIF3o/4.oF3o2FMIMF3oFo/5.o3.2o2F2o3.o/11.2o",pal:{F:"#18101F",G:"#5A4570",I:"#2E2238",J:"#4A3757",K:"#FF6F91",L:"#8E3A63",M:"#FFFFFF"},w:24,h:24,n:"Lil bat"},web:{a:"5F2G4FG4FG4FG2F/4FG5.G4.G4.G/3F.F2G2.G4.G4.G/2F.FG.3F.G3.G4.G/FGF2G4.2G3.G4.G/3G2.F2.G2.3F.G3.G/G.GF2.FG6.2G3.G/F2.F3.2G4.G2.3FG/F2.F.2G.G3.G6.GF/F.3G4.F.G5.FG2.F/FG2.G5.FG5.F/G4.F4.2G4.GF/F4.F2.2G2.F2.GIJo/F4.F.G5.FoI2KJo/F.5G6.KI4KJoK/FG4.G5.2GIKLKLJK/G6.F3.G.KJM3KMoK/F6.F2.G3.KJ2KJoK/F6.F.G3.K.o2Jo2.K/F2.6G7.2o/F.G5.F/2G7.F/F/F",pal:{F:"#7E6E98",G:"#9F90B8",I:"#5A4570",J:"#18101F",K:"#2E2238",L:"#FFFFFF",M:"#FF8FB0"},w:24,h:24,n:"Cobweb"},coffin:{a:"8.8o/7.o7FGo/6.oF8IGo/6.oFI6JIGo/5.oFI6JKJIGo/4.oF2I5JK2J2IGo/4.oFI5JK4JIGo/4.oF3J2LKJ2L2JIGo/4.oFI2JLM4L2JIGo/4.oFI2J6L2JIGo/4.oFIJK6L2JIGo/4.oGIK3J2L3JKIGo/5.oF8JKJGo/5.oFI4JNJKJIGo/5.oFI4JNK2JIGo/5.oFI3J3N2JIGo/5.oGI3JKN3JIGo/6.oF2JKJN3JGo/6.oFIK2JN2JIGo/6.oFI6JIGo/6.oF8IGo/6.o10Go/7.10o",pal:{F:"#5A4570",G:"#18101F",I:"#2E2238",J:"#3D2E4A",K:"#46355A",L:"#FF6F91",M:"#FFC2D3",N:"#C9A0DC"},w:24,h:24,n:"Coffin"},skull:{a:"9.2o4.2o/8.oFG4oFGo/8.oFIG2FGIGo/6.2oJ2GJFGJ3Go/5.o6J2G3JKo/4.o12J2Ko/4.o12J2Ko/3.o13J3Ko/3.o4JL6JLJ3Ko/3.o3J3L4J3L3Ko/3.o2JLM3L2JLM3L2Ko/3.o2J5L2J5L2Ko/3.o3J3L4J3L3Ko/4.o3JL6JLJ2Ko/4.o7JN2J4Ko/5.o5J2N5Ko/6.o5J5Ko/6.o3J7Ko/6.oJKPKPKPKPKo/7.oKPKPKPKPo/8.8o",pal:{F:"#FFC2D3",G:"#C23E68",I:"#FF6F91",J:"#FFF8F2",K:"#E8D8E4",L:"#2E2238",M:"#FF8FB0",N:"#5A4570",P:"#C9B6C8"},w:24,h:24,n:"Skull + bow"},blackrose:{a:"/9.6o/7.2oF4GI2o/6.oF3GF2IG2Io/5.oI3GFG3I2GIo/4.oI2GF5G2IG2Io/4.oIGFG2F2J2G2IGIo/3.o3IFGFJ2KJ3IG2Io/3.o4IGFJ2KJ3IGIJo/3.o4IGI4J3IG2Jo/4.o11IJGJo/4.o10I4Jo/5.o7I5Jo/6.o5I5Jo/7.2oI5J3o/9.2oLMN3oN2o/10.oLN2o2PMPNo/10.oLN2P2NMNo/10.oL3N2MNo/10.oLN2o2No/10.oLNo.2o/10.oLNo/10.oLNo/10.o3No",pal:{F:"#5E4878",G:"#8C76A6",I:"#3D2E52",J:"#22162E",K:"#C0283F",L:"#6E9463",M:"#4E6E47",N:"#2E4229",P:"#7FA86A"},w:24,h:24,n:"Black rose"},stitchheart:{a:"///6.2o8.2o/4.2o2F2o2.G.2o2F2o/3.o2FIJIFoG.o6Fo/2.o2FIJ2I2KG2K7Fo/.o3F5IFG10Fo/.o3F5IFG10Fo/o5F3I2KG2K9Fo/o10FG11Fo/.o8FG11Fo/.o7F2KG2K6F2Lo/2.o8FG7F2Lo/3.o7FG6F2Lo/4.2o3F2KG2K2F2L2o/6.o4FG3F2Lo/7.o3FGF3Lo/8.o3FG2Lo/9.o2LGLo/10.o2Lo/11.2o",pal:{F:"#2E2238",G:"#120A17",I:"#5A4570",J:"#8C76A6",K:"#FF6F91",L:"#18101F"},w:24,h:24,n:"Stitched heart"},candle:{a:"10.oFo/9.o3Fo/9.o3Fo/8.o2FG2Fo/8.o2IG2Io/9.o2IGo/9.o3Io/8.3oJ4o/7.o8Ko/7.oKL4KLMo/7.o2K2NKNKMo/7.o2K2NPNKMo/7.oKP4NKMo/7.oK5NKMo/7.oK5NPMo/7.oK6NMo/7.oK6NMo2.2o/7.oK6NMo.o2Qo/7.oK6NM2oQ2oQo/5.3oK2NQ3NM2oQ2oQo/3.2o6RS6RQ2oQo/2.o2Q13S3Qo/3.2o6QS6Q3o/5.6oQ6o",pal:{F:"#FFC93C",G:"#FFF6D9",I:"#FF8A3D",J:"#3B1C28",K:"#5A4570",L:"#8C76A6",M:"#18101F",N:"#2E2238",P:"#4A3757",Q:"#C98A2A",R:"#FFF1B8",S:"#FFD24D"},w:24,h:24,n:"Black candle"},potion:{a:"10.4o/9.o3FGo/9.oF2IGo/9.o4Go/9.o4Jo/9.o4Jo/9.o4Jo/9.o4Jo/7.2o6J2o/6.o10Jo/5.o12Jo/4.o3JK10Jo/4.o2LK11Lo/4.o2LK11Lo/3.o5L6M5Lo/3.o4LN6M4LPo/4.o5L4M3L2Po/4.o6L2MLNL3Po/4.o9L5Po/5.o5LN6Po/6.o4L6Po/7.2o6P2o/9.6o",pal:{F:"#E8C79A",G:"#9A7448",I:"#C9A06A",J:"#EDE4FB",K:"#FFFFFF",L:"#9B6BD6",M:"#FF8FB0",N:"#D9C2FF",P:"#6E46B0"},w:24,h:24,n:"Love potion"},moth:{a:"//3.3o12.3o/.2o2FGoI8.Io2FG2o/o2F3JG2I6.2IF3JFGo/oF3JKJGoI4.IoFK4JGo/oF2JKLKJGoIo.IoFKLK3JGo/oFJ5KJGoM2oF5K2JGo/oF2J3K3JNPMF2J3K3JGo/oG3JK4JNPMF3JK4JGo/.oG7JQPMQ7JGo/2.o6GN3PM7Go/3.5oFN3PMFG5o/3.o4FJN3PM2J3FGo/3.oF4JMP2RM5JGo/3.oF5JNPMF5JGo/2.oF2J2S2JN2RG3J2SJGo/2.oG2JS2JGMPMoF2JS2JGo/3.oG3J2GoM2o2G3JGo/4.o3G2o.o2.2o3Go/5.3o8.3o",pal:{F:"#DCD0E8",G:"#8E7AA3",I:"#6E5A80",J:"#B9A7C9",K:"#4A3757",L:"#FFE27A",M:"#E2CDBE",N:"#FFFFFF",P:"#FFF6EC",Q:"#3B1C28",R:"#D9BFAE",S:"#FF9DBA"},w:24,h:24,n:"Moth"},ghost:{a:"/8.8o/7.o8Fo/6.o9FGo/5.o10F2Go/4.o11F3Go/4.o11F3Go/4.o11F3Go/3.o12F4Go/3.o12F4Go/4.o4FI5FI4Go/4.o4FI5FI4Go/4.o11F4Go/4.o2FJ3FIFI2FGJ2Go/4.o7FI3F4Go/4.o11F4Go/4.o15Go/4.o15Go/4.o3G2o3G2o3G2o/4.o2Go.o2Go.o2Go/5.2o3.2o3.2o",pal:{F:"#FFFFFF",G:"#E4E0F2",I:"#2E2238",J:"#FFB3C7"},w:24,h:24,n:"Ghostie"},tarot:{a:"5.14o/4.o14Fo/4.oF12GFo/4.oFG10I2Fo/4.oFG10I2Fo/4.oFG3IJ3IJ2I2Fo/4.oFG2IJ7I2Fo/4.oFGI2J7I2Fo/4.oFGI3J6I2Fo/4.oFG2I3J5I2Fo/4.oFG3I3J4I2Fo/4.oFG10I2Fo/4.oFG10I2Fo/4.oFG4I2K4I2Fo/4.oFG3IK2IK3I2Fo/4.oFG2I2K2L2K2I2Fo/4.oFG3IK2IK3I2Fo/4.oFG4I2K4I2Fo/4.oFG10I2Fo/4.oFG2IJ4IJ2I2Fo/4.oFG10I2Fo/4.oFG12Fo/4.o14Fo/5.14o",pal:{F:"#C98A2A",G:"#FFD24D",I:"#2E2238",J:"#FFE27A",K:"#C9B2EE",L:"#FF6F91"},w:24,h:24,n:"Moon card"},sacred:{a:"11.2o/10.o2Fo/10.o2Fo/9.o4Fo/8.o3FG2Fo/8.o3IG2Io/9.o4Io/9.o4Io/6.12o/5.o2J3K2o5Jo/2.L.o2J2KM2K7Jo2.L/3.L3JKM3K8JoL/3.L3J5K8JoL/3.o4J3K9Jo/3.oJNJ2NJ2NJ2NJ2NJNo/4.oJN2JN2JN2JNJPNo/5.o10J2Po/6.2o7JP2o/8.o4J2Po/9.o2J2Po/10.o2Po/11.2o",pal:{F:"#FFC93C",G:"#FFF1B8",I:"#FF8A3D",J:"#C0283F",K:"#F0607A",L:"#FFD24D",M:"#FFFFFF",N:"#3F5A3A",P:"#7E1428"},w:24,h:24,n:"Flaming heart"},lacebow:{a:"////2.o18.o/.oFo16.oFo/.oGF2o12.2oGFo/oG2IGFo10.o2G2IFo/oG4IF2o.4o.2oG4IFo/oG2IJ2IGFo3KLo2G2IJ2IFo/oG4IJ2IFK2MLG2IJ4IFo/oF6IJIK2MLIJ6IFo/.oG4I3FK2ML3F4IFo/.oGI3F2oGK2MLF2o3FIFo/.o2F3o.oG4LFo.3o2Fo/2.2o3.oGIF2oGIFo3.2o/7.oGIF2oGIFo/7.oGIF2oGIFo/6.oGJIF2oGIJFo/6.o2FIF2oFI2Fo/5.oF2oFo2.oF2oFo/6.o2.o4.o2.o",pal:{F:"#18101F",G:"#5A4570",I:"#2E2238",J:"#8C76A6",K:"#F0607A",L:"#7E1428",M:"#C0283F"},w:24,h:24,n:"Black lace bow"},feather:{a:"/17.4o/15.2o2FGIo/13.2o2F2JIo/12.o2F3JIo/10.2oFJG2JIGo/9.o2FJG2JIGo/8.oFG4JIGo/7.oF2JG2JIGo/6.oFG4JIJGo/6.oFJG2JIJGo/5.oFJG2JIJGo/5.oF3JIJGo/4.oFJGJIJGo/4.oF3JIGo/4.oF2JIGo/4.oGJIGo/5.oGIo/5.oIo/4.oKo/4.oKo/3.oKo/3.oKo/4.o",pal:{F:"#6F5A8C",G:"#22162E",I:"#B9A7C9",J:"#3D2E52",K:"#E4D8FA"},w:24,h:24,n:"Raven feather"}}},T1=o=>o.split("/").map(e=>e.replace(/(\d+)(\D)/g,(t,a,s)=>s.repeat(+a))),zl=new Map,Yn=o=>{let e=zl.get(o);return e||(zl.set(o,e=T1(o)),e)};function us(o,e,t){const a=(s,n)=>parseInt(s.slice(1+n*2,3+n*2),16);return"#"+[0,1,2].map(s=>Math.round(a(o,s)+(a(e,s)-a(o,s))*t).toString(16).padStart(2,"0")).join("")}const Ol=new Map;function z1(o){let e=Ol.get(o);if(e)return e;const t=o.o||"#4A2433";return e={o:t,w:o.w,s:o.s,h:us(o.w,"#FFFFFF",.45),d:us(o.s,t,.28),p:o.p,e:o.o?"#0E0913":"#3B1C28",E:"#FFFFFF"},Ol.set(o,e),e}const Xl={A:"#FFD6E2",B:"#F48FAE",C:"#D9587F",D:"#8E2F55"},Gs=o=>{const e=Ga[o]?.c;return e?{A:e.H||e.p,B:e.P,C:e.r,D:e.R}:null},ms=new Map;function O1({mood:o="idle",fur:e="snow",outfit:t="none",face:a="none",neck:s="none",back:n="none",size:r=96,cls:l="",dyes:F=null}){const c=[o,e,t,a,s,n,r,l,F?JSON.stringify(F):""].join("|"),p=ms.get(c);if(p)return p;const b=z1(St[e]||St.snow),I=Z.hats[t],m=[],J=(S,N,no,V)=>{if(!S)return;const Ko={...b,...Xl,...N||{},...no&&F?.[no]?Gs(F[no]):{}};if(!V)return Hs(Yn(S),Ko,m);const eo=[];Hs(Yn(S),Ko,eo),m.push(`<g transform="translate(${V[0]} ${V[1]})">${eo.join("")}</g>`)},K=Z.back?.[n];K&&J(K.a,K.pal,"back:"+n,K.ox!=null?[K.ox,K.oy]:null),I?.b&&J(I.b,I.pal,"fit:"+t,I.bo),J((I?.hide?Z.baseNoEars:Z.base).a);const v=Z.moods[o]||Z.moods.idle;J(v.a,v.pal);const Q=Z.faces[a+"@"+o]||Z.faces[a];Q&&J(Q.a,Q.pal);const go=Z.necks[s];go&&J(go.a,go.pal,"neck:"+s,go.ao),I&&J(I.a,I.pal,"fit:"+t,I.ao),K?.f&&J(K.f,K.pal,"back:"+n,K.fo);const so=`<svg class="mochi ${l}" width="${r}" height="${r}" viewBox="0 0 40 40" overflow="visible" shape-rendering="crispEdges" aria-hidden="true"><g class="mochi-body">${m.join("")}</g></svg>`;return ms.size>400&&ms.clear(),ms.set(c,so),so}const hs=new Map;function jo(o,e,t,a=""){if(!o)return"";const s=o.a+"|"+e+"|"+(t?JSON.stringify(t):"")+a;let n=hs.get(s);if(n)return n;const r=Yn(o.a),l=o.w||Math.max(...r.map(b=>b.length)),F=o.h||r.length,c=Math.max(l,F),p=[];return Hs(r,{...jl,...Xl,...o.pal||{},...t||{}},p),n=`<svg class="px ${a}" width="${e}" height="${e}" viewBox="0 0 ${c} ${c}" shape-rendering="crispEdges" aria-hidden="true">${p.join("")}</svg>`,hs.size>600&&hs.clear(),hs.set(s,n),n}const Yl=new Map;function Hn(o,e,t,a="",s=12){const n=o+"|"+JSON.stringify(e)+"|"+s;let r=Yl.get(n);return r||(r=qs(o,l=>e[l]||"#000",s),Yl.set(n,r)),`<svg class="px ${a}" width="${t}" height="${t}" viewBox="0 0 ${r.box} ${r.box}" shape-rendering="crispEdges" aria-hidden="true">${r.body}</svg>`}const Ga={rose:{name:"Original",c:null},lilac:{name:"Lilac",c:{p:"#E6D8FA",P:"#C2A6EC",r:"#9A76D6",R:"#5C3F92",m:"#B98BF0",H:"#EFE6FB"}},mint:{name:"Mint",c:{p:"#D6F5E3",P:"#9EDFBE",r:"#5BB98A",R:"#2F6E3E",m:"#7FD4A8",H:"#E4F8EC"}},sky:{name:"Sky",c:{p:"#D6ECFF",P:"#9FCDF2",r:"#5E9FD9",R:"#2F5E98",m:"#7FB8EE",H:"#E6F3FF"}},butter:{name:"Butter",c:{p:"#FFF3C4",P:"#FFE27A",r:"#F2AE3D",R:"#9A5A1A",m:"#FFD24D",H:"#FFF8DC"}},peach:{name:"Peach",c:{p:"#FFE1D2",P:"#FFB494",r:"#F08060",R:"#A84A2E",m:"#FF9C7A",H:"#FFEDE4"}},cherry:{name:"Cherry",c:{p:"#FF9AA2",P:"#F2545F",r:"#C42D3D",R:"#7A1420",m:"#E8323F",H:"#FFC7CB"}},wine:{name:"Wine",c:{p:"#D98AA2",P:"#B04A6B",r:"#8E2443",R:"#4E0F23",m:"#A3305A",H:"#E8B5C5"}},noir:{name:"Noir",c:{p:"#8A8096",P:"#5E5468",r:"#3A3242",R:"#16111B",m:"#4B3A55",H:"#A9A0B3"}},gold:{name:"Gold",c:{p:"#FFF1B8",P:"#F7D774",r:"#D9A62E",R:"#8A6212",m:"#E8BE3F",H:"#FFF6D6"}},silver:{name:"Silver",c:{p:"#F1F0F6",P:"#CFCDDB",r:"#A19DB5",R:"#5E5A72",m:"#B9B5C8",H:"#F7F6FA"}},ocean:{name:"Ocean",c:{p:"#BFE6F0",P:"#7CC6DC",r:"#3A93B5",R:"#1E5670",m:"#58AFCB",H:"#DDF2F7"}}},Hl=40,X1=o=>Ga[L().dyes?.[o]]?.c||null,Mp=(o,e,t=L().dyes)=>{const a=Ga[t?.[e]]?.c;return a?{...o,...a}:o};function Y1(o){const e=o.kind==="outfit"?Z.hats[o.key]:o.kind==="neck"?Z.necks[o.key]:o.kind==="back"?Z.back[o.key]:o.kind==="held"?Z.held?.[o.key]:o.kind==="decor"?Z.icons?.[o.key]:null;return e?(e.a||"")+(e.b||"")+(e.f||""):""}const H1=o=>o.key!=="none"&&/[ABCD]/.test(Y1(o)),Wo=(o,...e)=>`
`+`
`.repeat(o)+e.join(`
`),Wl={spark:Wo(0,"...s...","...o...","..oho..","sohhhos","..oho..","...o...","...s..."),heart:Wo(0,".oo.oo.","ohhoooo","ohooooo",".ooooos","..ooos.","...os.."),petal:Wo(0,"..ooo.",".ohhoo","ohooos","ooooss",".sss.."),bat:Wo(0,"s..o.o..s","oo.ooo.oo","ooooooooo",".s.ooo.s.","....o...."),snow:Wo(0,"o..o..o",".o.o.o.","..ooo..","ooohooo","..ooo..",".o.o.o.","o..o..o"),ring:Wo(0,".oooo.","oh...o","o....o","o....o","o...so",".osso."),note:Wo(0,"...ooo","...oso","...o..","...o..",".ooo..","ohoo..",".oo..."),star:Wo(0,"...o...","..oho..","ooohooo",".ohooo.","..ooo..",".oo.oo.",".o...o."),dot:Wo(0,".o.","oho",".o."),fly:Wo(0,"oo...oo","ohos.ho",".oooo.","oos.soo","oo...oo"),gem:Wo(0,".ooo.","ohhoo","ohoos",".oos.","..s.."),ghost:Wo(0,".oooo.","ohoooo","osooso","oooooo","oooooo","o.oo.o")},Vl=o=>({o,h:us(o,"#FFFFFF",.6),s:us(o,"#4A2433",.35)}),Kt={none:{name:"Nothing"},sparkles:{name:"Sparkles",p:["spark"],c:["#FFFFFF","#FFE27A"],m:"twinkle"},hearts:{name:"Floating hearts",p:["heart"],c:["#FF6F91","#FFC2D3"],m:"rise"},snow:{name:"Snowfall",p:["snow"],c:["#FFFFFF","#DCEBFF"],m:"fall"},bubbles:{name:"Bubbles",p:["ring"],c:["#A9DDF8","#FFFFFF"],m:"rise"},notes:{name:"Music notes",p:["note"],c:["#A585DA","#D9587F"],m:"rise"},stars:{name:"Starry",p:["star"],c:["#FFE27A","#FFF7CF"],m:"twinkle"},bats:{name:"Bat swarm",p:["bat"],c:["#2B1E2F","#4B3A55"],m:"flutter"},petals:{name:"Petal drift",p:["petal"],c:["#FFC2D3","#F48FAE","#A6E08E"],m:"fall"},tutu:{name:"Tutu twirl",p:["spark","heart"],c:["#FFD6E5","#F48FAE","#FFFFFF"],m:"orbit",glow:"#FFD6E5"},moondust:{name:"Moon dust",p:["dot","spark"],c:["#DCC9F6","#FFFFFF"],m:"drift",glow:"#A585DA"},golden:{name:"Golden glow",p:["spark","star"],c:["#FFE27A","#F2AE3D"],m:"orbit",glow:"#FFD966"},berry:{name:"Berry sweet",p:["heart","petal"],c:["#FF6F91","#C42D3D","#FFC2D3"],m:"rise"},crimson:{name:"Crimson mist",p:["dot","bat"],c:["#8E2443","#D9587F"],m:"drift",glow:"#8E2443"},power:{name:"Power-up",p:["spark","dot"],c:["#FF9F45","#FFE27A","#FF6F91"],m:"rise",glow:"#FF9F45"},ghosties:{name:"Ghosties",p:["ghost","ghost","dot"],c:["#FFFFFF","#E6DFEF","#C9B2EE"],m:"drift",glow:"#C9B2EE"},lovebubbles:{name:"Love bubbles",p:["heart","ring"],c:["#FF6F91","#FFC2D3"],m:"rise",glow:"#FFC2D3"},fireflies:{name:"Fireflies",p:["dot"],c:["#E8FF8A","#FFE27A"],m:"drift",glow:"#E8FF8A"},rosestorm:{name:"Rose storm",p:["petal","petal","heart"],c:["#C42D3D","#8E2443","#FF6F91"],m:"orbit",glow:"#C42D3D"},starring:{name:"Starlight halo",p:["star","spark"],c:["#FFF7CF","#FFE27A","#FFFFFF"],m:"orbit",glow:"#FFF7CF"},butterflies:{name:"Butterflies",p:["fly"],c:["#A585DA","#F48FAE","#8FD3FF"],m:"flutter"},magicstars:{name:"Magical sparkle",p:["star","heart","spark"],c:["#FFD3E0","#FF4F8B","#FFE27A"],m:"orbit",glow:"#FF9DBA"},embers:{name:"Embers",p:["dot","spark"],c:["#FF9F45","#FFD24D","#E8323F"],m:"rise",glow:"#FF9F45"},glitch:{name:"Glitch",p:["dot","gem"],c:["#5FF7F2","#FF4FD8"],m:"twinkle",glow:"#5FF7F2"},aether:{name:"Aether",p:["spark","gem"],c:["#8FD3FF","#E8FBFF","#C9B2EE"],m:"drift",glow:"#8FD3FF"},feathers:{name:"Crow feathers",p:["petal","dot"],c:["#2E2A44","#4E4A70"],m:"fall"},spores:{name:"Glowy spores",p:["dot"],c:["#A6E08E","#C9B2EE","#5FD3C9"],m:"drift",glow:"#A6E08E"},sunset:{name:"Sunset hearts",p:["heart","spark"],c:["#FF9A56","#D362A4","#FFFFFF"],m:"rise",glow:"#FF9A56"},diamond:{name:"Diamond rain",p:["gem","spark"],c:["#B8E3F0","#FFFFFF","#DCC9F6"],m:"fall",glow:"#B8E3F0"}};function _l(o,e){const t=Kt[o];if(!t||!t.p)return"";const a=8,s=Math.max(8,Math.round(e/10));let n="";for(let r=0;r<a;r++){const l=t.p[r%t.p.length],F=t.c[r%t.c.length];n+=`<i style="--j:${r};--x:${r*37%100}%;--y:${(r*53+11)%90}%;--d:${(r*.47).toFixed(2)}s">${Hn(Wl[l],Vl(F),s,"",5)}</i>`}return`<span class="aura aura-${t.m}" ${t.glow?`style="--glow:${t.glow}"`:""}>${t.glow?'<b class="aura-glow"></b>':""}${n}</span>`}const Wn={none:{name:"Nothing"},rain:{name:"Rain"},snow:{name:"Snowfall",parts:"snow",col:"#FFFFFF"},petals:{name:"Cherry petals",parts:"petal",col:"#FFC2D3"},fireflies:{name:"Fireflies",parts:"dot",col:"#E8FF8A"},candle:{name:"Candlelight"},stars:{name:"Twinkling stars",parts:"spark",col:"#FFF7CF"},moonbeam:{name:"Moonbeams"},fog:{name:"Misty fog"},bubbles:{name:"Bubbles",parts:"ring",col:"#BFE6F0"},aurora:{name:"Aurora"},diamonddust:{name:"Diamond dust",parts:"gem",col:"#DDF2F7"}};function Is(o=L().amb){const e=Wn[o];if(!e||o==="none")return"";let t="";if(e.parts)for(let a=0;a<12;a++)t+=`<i style="--j:${a};--x:${(a*41+7)%100}%;--d:${(a*.83%6).toFixed(2)}s">${Hn(Wl[e.parts],Vl(e.col),10,"",5)}</i>`;return`<div class="amb amb-${o}" aria-hidden="true">${t}</div>`}const W1={plain:{name:"Cream paper"},lined:{name:"Lined notebook"},grid:{name:"Grid paper"},kraft:{name:"Kraft paper"},gingham:{name:"Pink gingham"},cherry:{name:"Cherry print"},night:{name:"Midnight velvet"},lace:{name:"Lace doily"},botanical:{name:"Pressed flowers"},gilded:{name:"Gilded edge"},dotted:{name:"Dot grid"},notebook:{name:"Ring notebook"},polka:{name:"Lilac polka"},parchment:{name:"Old parchment"},velvet:{name:"Black velvet"},holo:{name:"Holographic"}},V1={dots:{name:"Pink dots"},mint:{name:"Mint stripes"},lilac:{name:"Lilac check"},gold:{name:"Gold foil"},lace:{name:"Black lace"},berry:{name:"Strawberries"},stars:{name:"Starry night"},hearts:{name:"Tiny hearts"},gingham:{name:"Pink gingham"},candy:{name:"Candy stripe"},clouds:{name:"Clouds"},checker:{name:"Goth checker"},plaid:{name:"Red tartan"},holo:{name:"Holo foil"}};Object.assign(gt,{ballet:"Ballet studio",lavender:"Lavender field",aquarium:"Aquarium",cloud:"Cloud castle",kitchen:"Cherry kitchen",rooftop:"Starlit rooftop",haunted:"Haunted dollhouse",crystal:"Crystal ballroom",conservatory:"Midnight conservatory"}),Object.assign(Ae,{held:"held",aura:"aura",pet:"pet",amb:"amb",back:"back"});const _1={none:"Nothing",angelwings:"Angel wings",batwings:"Bat wings",fairywings:"Fairy wings",butterfly:"Butterfly wings",bigbow:"Giant bow",cape:"Velvet cape",sash:"Flowy sash"},Ul={back:o=>_1[o],held:o=>Ql[o]?.name,pet:o=>Tl[o]?.name,aura:o=>Kt[o]?.name,amb:o=>Wn[o]?.name,paper:o=>W1[o]?.name,washi:o=>V1[o]?.name};function U1(o,e,t={}){const a=f(o,e,t);a.price=a.price??null,a.name=a.name||(Ul[o]?Ul[o](e):o==="room"?gt[e]:o==="decor"?We[e].name:Tr[o][e].name),a.kind==="decor"&&(a.slot=We[e].slot),Io.push(a)}[["fur","lavender",{price:120}],["fur","apricot",{price:120}],["fur","seafoam",{price:130}],["fur","storm",{price:180,level:8}],["fur","blackcherry",{price:220,level:11}],["fur","peony",{album:"pretty"}],["fur","opal",{boutique:480}],["fur","champagne",{boutique:440}],["outfit","ribbonband",{price:70}],["outfit","heartclips",{price:75}],["outfit","blossom",{price:80}],["outfit","pigtails",{price:90}],["outfit","beret",{price:100}],["outfit","balletbow",{price:140,level:4}],["outfit","mushroom",{price:150}],["outfit","tophat",{price:160,level:7}],["outfit","candlecrown",{price:200,level:9}],["outfit","skullclip",{price:90}],["outfit","spiderclip",{price:110}],["outfit","pumpkin",{price:140}],["outfit","sunflower",{garden:!0}],["outfit","veil",{boutique:620}],["outfit","mooncrown",{boutique:680}],["outfit","sharkhood",{price:180,level:6}],["outfit","hunterhelm",{price:260,level:10}],["face","plaster",{price:40}],["face","startattoo",{price:50}],["face","glitter",{price:70}],["face","pinkshades",{price:110}],["face","heartglasses",{price:130,level:5}],["face","stitches",{price:60}],["face","eyepatch",{price:90}],["face","monocle",{surprise:!0}],["face","gasmask",{price:120}],["face","visor",{price:220,level:9}],["neck","daisychain",{price:70}],["neck","ribbon",{price:80}],["neck","batchoker",{price:100}],["neck","moonpend",{price:120}],["neck","lace",{price:120}],["neck","coffinlocket",{price:120}],["neck","goldchain",{price:110}],["neck","sailor",{price:130}],["neck","ledchoker",{price:140}],["neck","girlfriends",{price:150}],["neck","heartbrooch",{price:180,level:6}],["neck","jobcrystal",{boutique:520}],["back","none",{price:0,name:"Nothing"}],["back","bigbow",{price:240}],["back","fairywings",{price:320,level:5}],["back","batwings",{price:340,level:7}],["back","cape",{price:380,level:9}],["back","angelwings",{boutique:720}],["back","butterfly",{boutique:680}],["back","sash",{price:420,level:12}],["held","none",{price:0,name:"Nothing"}],["held","lolly",{price:60}],["held","balloon",{price:70}],["held","teacup",{price:90}],["held","rose",{price:100}],["held","wand",{price:140,level:4}],["held","parasol",{price:180,level:7}],["held","scepter",{price:260,level:12}],["held","lantern",{price:120}],["held","voodoo",{price:150}],["held","dumbbell",{album:"gym"}],["held","can",{garden:!0}],["held","bouquet",{surprise:!0}],["held","heartwand",{bond:9}],["held","crystalwand",{boutique:540}],["held","woodsword",{price:60}],["held","meat",{price:90}],["held","coffinbag",{price:140}],["held","scythe",{price:170,level:6}],["held","moonwand",{price:200,level:7}],["held","neonkatana",{price:240,level:10}],["held","greatsword",{price:280,level:11}],["held","grimoire",{boutique:600}],["pet","none",{price:0,name:"Nothing"}],["pet","duck",{price:220}],["pet","frog",{price:240}],["pet","kitten",{price:300,level:6}],["pet","bat",{price:300,level:6}],["pet","spider",{price:260,level:5}],["pet","zombiebun",{price:320,level:8}],["pet","hamster",{album:"friends"}],["pet","ghost",{surprise:!0}],["pet","snail",{garden:!0}],["pet","babybun",{bond:6}],["pet","swan",{boutique:820}],["pet","slime",{price:200}],["pet","crow",{price:280,level:7}],["pet","blackcat",{price:320,level:9}],["pet","eyeball",{surprise:!0}],["aura","none",{price:0,name:"Nothing"}],["aura","sparkles",{price:160}],["aura","hearts",{price:160}],["aura","snow",{price:180}],["aura","bubbles",{price:180}],["aura","notes",{price:200}],["aura","stars",{price:220,level:6}],["aura","bats",{set:"goth"}],["aura","petals",{set:"fairy"}],["aura","tutu",{set:"ballet"}],["aura","moondust",{set:"witch"}],["aura","golden",{set:"royal"}],["aura","berry",{set:"berry"}],["aura","crimson",{set:"vamp"}],["aura","power",{set:"gym"}],["aura","ghosties",{set:"creepy"}],["aura","magicstars",{set:"magical"}],["aura","embers",{set:"hunter"}],["aura","glitch",{set:"netrunner"}],["aura","aether",{set:"healer"}],["aura","feathers",{set:"reaper"}],["aura","spores",{set:"survivor"}],["aura","sunset",{set:"gf"}],["aura","lovebubbles",{bond:5}],["aura","fireflies",{garden:!0}],["aura","butterflies",{boutique:660}],["aura","rosestorm",{boutique:720}],["aura","starring",{boutique:760}],["aura","diamond",{boutique:800}],["amb","none",{price:0,name:"Nothing"}],["amb","rain",{price:150}],["amb","fog",{price:160}],["amb","snow",{price:160}],["amb","petals",{price:170}],["amb","fireflies",{price:180}],["amb","candle",{price:190}],["amb","bubbles",{price:200}],["amb","moonbeam",{price:220,level:8}],["amb","stars",{album:"sky"}],["amb","aurora",{boutique:700}],["amb","diamonddust",{boutique:660}],["room","kitchen",{price:180}],["room","lavender",{price:200}],["room","ballet",{price:220,level:6}],["room","rooftop",{price:230,level:9}],["room","aquarium",{price:240,level:8}],["room","cloud",{price:260,level:10}],["room","haunted",{album:"goth"}],["room","crystal",{boutique:900}],["room","conservatory",{boutique:860}],["decor","garland",{price:80}],["decor","seawin",{price:120}],["decor","snowwin",{price:120}],["decor","sakurawin",{price:130}],["decor","citywin",{price:140}],["decor","stainedglass",{price:180,level:6}],["decor","mirrorball",{price:150}],["decor","portrait",{album:"cosy"}],["decor","bookstack",{price:70}],["decor","bonsai",{price:90}],["decor","moonpot",{garden:!0}],["decor","cakestand",{album:"treats"}],["decor","balletshoes",{price:100}],["decor","fishbowl",{price:110}],["decor","heartrug",{price:70}],["decor","daisyrug",{price:80}],["decor","velvetrug",{price:110}],["paper","plain",{price:0}],["paper","lined",{price:40}],["paper","grid",{price:40}],["paper","kraft",{price:60}],["paper","gingham",{price:80}],["paper","cherry",{price:100}],["paper","night",{price:120}],["paper","lace",{price:150}],["paper","botanical",{album:"garden"}],["paper","gilded",{boutique:380}],["paper","dotted",{price:40}],["paper","notebook",{price:60}],["paper","polka",{price:80}],["paper","parchment",{price:100}],["paper","velvet",{price:140}],["paper","holo",{album:"holo"}],["washi","dots",{price:0}],["washi","mint",{price:40}],["washi","lilac",{price:40}],["washi","berry",{price:60}],["washi","hearts",{price:60}],["washi","gold",{price:80}],["washi","stars",{price:80}],["washi","lace",{price:90}],["washi","gingham",{price:50}],["washi","candy",{price:50}],["washi","clouds",{price:60}],["washi","checker",{price:70}],["washi","plaid",{price:80}],["washi","holo",{album:"earned"}]].forEach(([o,e,t])=>U1(o,e,t));const Z1=["back:none","held:none","aura:none","pet:none","amb:none","paper:plain","washi:dots"],Lt=[{id:"goth",name:"Gothic doll",need:{outfit:"blackbow",face:"darklips",neck:"choker",fur:"raven"},aura:"bats"},{id:"fairy",name:"Garden fairy",need:{outfit:"flowercrown",neck:"daisychain",held:"can",fur:"mint"},aura:"petals"},{id:"ballet",name:"Prima ballerina",need:{outfit:"balletbow",neck:"pearls",face:"blush",fur:"blush"},aura:"tutu"},{id:"witch",name:"Night witch",need:{outfit:"witch",face:"smoky",neck:"cross",fur:"midnight"},aura:"moondust"},{id:"royal",name:"Royalty",need:{outfit:"crown",neck:"diamonds",face:"lashes",held:"scepter"},aura:"golden"},{id:"berry",name:"Strawberry shortcake",need:{outfit:"strawberry",fur:"strawberry",face:"freckles",neck:"bowtie"},aura:"berry"},{id:"vamp",name:"Vampire",need:{fur:"porcelain",face:"fangs",neck:"winechoker",outfit:"horns"},aura:"crimson"},{id:"gym",name:"Workout bunny",need:{outfit:"band",neck:"medal",held:"dumbbell"},aura:"power"},{id:"magical",name:"Magical girl",need:{outfit:"tiara",face:"glitter",neck:"heartbrooch",held:"moonwand"},aura:"magicstars"},{id:"hunter",name:"Monster hunter",need:{outfit:"hunterhelm",neck:"medal",held:"greatsword"},aura:"embers"},{id:"netrunner",name:"Netrunner",need:{face:"visor",neck:"ledchoker",held:"neonkatana",fur:"storm"},aura:"glitch"},{id:"healer",name:"White mage",need:{outfit:"halo",neck:"jobcrystal",held:"grimoire"},aura:"aether"},{id:"reaper",name:"Little reaper",need:{held:"scythe",neck:"cross",pet:"crow",back:"cape"},aura:"feathers"},{id:"survivor",name:"Weird world survivor",need:{face:"gasmask",held:"lantern",pet:"eyeball"},aura:"spores"},{id:"gf",name:"Girlfriend era",need:{neck:"girlfriends",face:"blush",held:"rose"},aura:"sunset"},{id:"creepy",name:"Creepy cutie",need:{outfit:"spiderclip",face:"stitches",neck:"coffinlocket",held:"voodoo"},aura:"ghosties"}],Zl=(o,e)=>f(o,e).id;function o2(o){const e=L(),t=Object.entries(o.need).map(([a,s])=>{const n=Zl(a,s);return{kind:a,key:s,id:n,item:io(n),owned:e.owned.includes(n),worn:e[Ae[a]]===s}});return{parts:t,owned:t.filter(a=>a.owned).length,worn:t.every(a=>a.worn),all:t.every(a=>a.owned),done:!!e.sets?.[o.id]}}function e2(){const o=L();o.sets||(o.sets={});for(const e of Lt){if(o.sets[e.id]||!o2(e).worn)continue;o.sets[e.id]=A();const t="aura:"+e.aura;o.owned.includes(t)||o.owned.push(t),y(),lo(),setTimeout(()=>{E.badge(),ho(1),Ro(`<div class="pop-burst"></div>
        <div class="pop-bunny">${it({mood:"love",size:120,aura:e.aura})}</div>
        <div class="pop-kicker">Set complete</div>
        <h2>${d(e.name)}</h2>
        <p class="muted">You unlocked the <b>${d(Kt[e.aura].name)}</b> aura. It's yours to wear with any outfit.</p>
        <button class="cta" data-act="wearAura" data-k="${e.aura}" data-pop-close>Wear it</button>
        <button class="btn mt8 full" data-pop-close>Later</button>`)},300)}}const o3=()=>Object.fromEntries(qe.map(o=>[o.id,o.name]));function gs(o){return!o||L().owned.includes(o.id)?null:o.boutique?{label:"Boutique",icon:"bag",toast:"Sold in the boutique when it's in stock. Stock changes every Monday"}:o.surprise?{label:"Surprise",icon:"gift",toast:"Only from rare surprise drops after a session"}:o.garden?{label:"Garden",icon:"plant",toast:"Found when harvesting rose, moonflower or starbloom"}:o.set?{label:"Set",icon:"star",toast:`Wear the full ${Lt.find(t=>t.id===o.set)?.name} set to unlock`}:o.album?{label:"Album",icon:"book",toast:`Complete the \u201C${o3()[o.album]}\u201D sticker page`}:o.bond?{label:`Bond ${o.bond}`,icon:"heart",toast:`Reach bond level ${o.bond} with ${co()}`}:null}function it({mood:o,size:e=120,cls:t="",pet:a=!1,aura:s,held:n,pose:r}={}){const l=L(),F=s??l.aura,c=n??l.held,p=a?l.pet:"none";return`<span class="bstage pose-${r??l.bond?.pose??"bob"} ${t}" style="--bs:${e}px">
    ${F&&F!=="none"?_l(F,e):""}
    ${p&&p!=="none"&&Z.pets[p]?`<span class="pet">${jo(Z.pets[p],Math.round(e*.44))}</span>`:""}
    <span class="bs-bun">${zo({mood:o,size:e})}</span>
    ${c&&c!=="none"&&Z.held[c]?`<span class="held">${jo(Z.held[c],Math.round(e*.46),Gs(l.dyes?.["held:"+c]))}</span>`:""}
  </span>`}function e3(o,e=64){const t=L();return o.kind==="held"?o.key==="none"?`<span class="none-prev">${B("x")}</span>`:jo(Z.held[o.key],e,Gs(t.dyes?.[o.id])):o.kind==="pet"?o.key==="none"?`<span class="none-prev">${B("x")}</span>`:jo(Z.pets[o.key],e):o.kind==="aura"?o.key==="none"?`<span class="none-prev">${B("x")}</span>`:`<span class="aura-prev">${it({mood:"happy",size:e-8,aura:o.key,held:"none"})}</span>`:o.kind==="amb"?`<span class="room-swatch amb-swatch room-${t.room}">${o.key==="none"?`<span class="none-prev">${B("x")}</span>`:Is(o.key)}</span>`:o.kind==="paper"?`<span class="paper-swatch paper-${o.key}"></span>`:o.kind==="washi"?`<span class="washi-swatch"><span class="washi washi-${o.key}"></span></span>`:null}const ma=[0,20,50,100,170,260,380,520,700,920],Vn={bob:{name:"Bob",lv:1},hop:{name:"Hop",lv:2},wiggle:{name:"Ear wiggle",lv:4},twirl:{name:"Twirl",lv:6},float:{name:"Float",lv:8},dance:{name:"Dance",lv:10}},t2={2:{text:"Hop pose"},3:{text:"Heart emotes when you pat"},4:{text:"Ear wiggle pose"},5:{text:"Love bubbles aura",item:"aura:lovebubbles"},6:{text:"Baby bun companion and Twirl pose",item:"pet:babybun"},7:{text:"Sparkle emotes and sweeter chats"},8:{text:"Float pose"},9:{text:"Heart wand",item:"held:heartwand"},10:{text:"Dance pose and the Soulmates title"}},t3=5;function vt(){const o=L();return o.bond||(o.bond={pts:0,pose:"bob",day:null,pats:0})}function te(o=vt().pts){let e=1;for(let n=1;n<ma.length;n++)o>=ma[n]&&(e=n+1);const t=e>=ma.length,a=ma[e-1],s=t?a:ma[e];return{lv:e,max:t,into:o-a,need:s-a,frac:t?1:(o-a)/(s-a),next:t2[e+1]}}function ke(o,e){const t=vt(),a=te(t.pts).lv;t.pts+=o;const s=te(t.pts).lv;y();for(let n=a+1;n<=s;n++){const r=t2[n];r?.item&&!L().owned.includes(r.item)&&L().owned.push(r.item),y(),setTimeout(()=>{E.levelUp(),ho(.9),Ro(`<div class="pop-burst"></div>
          <div class="pop-bunny">${it({mood:"love",size:110})}</div>
          <div class="pop-kicker">Bond level ${n}</div>
          <h2>You and ${d(co())} are closer</h2>
          ${r?`<div class="pop-unlock"><span class="nr-prev">${r.item?Po(io(r.item),48):G("heart",40)}</span><span>Unlocked<b>${d(r.text)}</b></span></div>`:""}
          <button class="cta" data-pop-close>${n>=10?"Forever \u2661":"Aww"}</button>`)},Le()?1400:300)}s>a&&lo()}function a2(o){const e=vt(),t=A();e.day!==t&&(e.day=t,e.pats=0),e.pats<t3&&(e.pats++,ke(1,"pat"));const a=te().lv;if(a<3||!o)return;const s=a>=7?["heart","spark","star","heart"]:["heart"],n=o.getBoundingClientRect(),r=document.createElement("span");r.className="emote",r.innerHTML=G(s[Math.floor(Math.random()*s.length)],22),r.style.left=n.left+n.width*(.3+Math.random()*.4)+"px",r.style.top=n.top+n.height*.15+"px",document.body.appendChild(r),setTimeout(()=>r.remove(),1200)}const a3=["I knew you'd come back today \u2661","You're my favourite human (\u02F6\u02C3 \u1D55 \u02C2\u02F6)","Look at you, being consistent","We're getting so strong together","I saved you the best carrot","Your splits are coming, I can feel it"],s3=()=>te().lv>=7?Or.concat(a3):Or;function n3(o){const e=Vn[o];if(e){if(te().lv<e.lv)return E.nope(),$(`Unlocks at bond level ${e.lv}`,"heart");vt().pose=o,y(),E.pop(),M()}}function r3(){const o=te();return`<div class="bond-card">
    <div class="between"><span class="bond-lv">${G("heart",18)} Bond <b>${o.lv}</b>${o.max?" \xB7 max":""}</span><span class="tiny muted">${o.max?"Soulmates":`${o.into}/${o.need}`}</span></div>
    ${Fe(o.frac,{segments:16,cls:"rose"})}
    <div class="tiny muted mt4">${o.max?"You've unlocked everything. Keep the pats coming anyway.":`Next: ${d(o.next?.text||"")} \xB7 from sessions, pats, treats and check-ins`}</div>
    <div class="pose-row">${Object.entries(Vn).map(([e,t])=>`<button class="pose-btn ${vt().pose===e?"on":""} ${o.lv<t.lv?"locked":""}" data-act="pose" data-k="${e}">${o.lv<t.lv?G("lock",12)+" ":""}${t.name}</button>`).join("")}</div>
  </div>`}const Ao={carrot:{name:"Carrots",cost:10,days:2,yield:[18,26],F:"#FF9F45",f:"#FFC98F"},strawberry:{name:"Strawberries",cost:25,days:3,yield:[40,52],F:"#E8323F",f:"#FF9AA2"},lavender:{name:"Lavender",cost:40,days:4,yield:[62,78],F:"#A585DA",f:"#DCC9F6",sticker:.25},rose:{name:"Roses",cost:60,days:5,yield:[92,112],F:"#C42D3D",f:"#FF6F91",sticker:.2,item:.12},moonflower:{name:"Moonflowers",cost:90,days:6,yield:[140,170],F:"#C9B2EE",f:"#FFFFFF",sticker:.35,item:.18,level:6},starbloom:{name:"Starbloom",cost:150,days:8,yield:[240,300],F:"#FFD24D",f:"#FFF7CF",sticker:.5,item:.3,level:10},tulip:{name:"Tulips",cost:20,days:3,yield:[34,44],F:"#FF8FB0",f:"#FFD3E0"},sunflower:{name:"Sunflowers",cost:45,days:4,yield:[70,86],F:"#FFD24D",f:"#8B5A3C",sticker:.25,level:3},mushroom:{name:"Toadstools",cost:55,days:4,yield:[80,96],F:"#E8323F",f:"#FFF1DC",sticker:.3},pumpkin:{name:"Pumpkins",cost:70,days:5,yield:[105,125],F:"#FF9F45",f:"#FFC27A",item:.12,season:[9,10]},blackrose:{name:"Black roses",cost:110,days:6,yield:[170,200],F:"#3B2A45",f:"#8E2443",sticker:.35,item:.2,level:8},sakura:{name:"Sakura tree",cost:180,days:9,yield:[290,350],F:"#FFC2D3",f:"#FFE3EC",sticker:.55,item:.3,level:12,season:[8,9,10]}},ha=o=>o.season&&o.season.includes(new Date().getMonth()),bs=[0,0,0,0,150,300],i3=.08,Bo=()=>{const o=L(),e=o.garden||(o.garden={plots:[null,null,null,null],seeds:{},harvests:0,golden:0});return e.book||(e.book={}),e},l3=[{k:"snail",name:"A snail",say:"left a shiny trail and some carrots"},{k:"frog",name:"A frog",say:"hopped in with a present"},{k:"duck",name:"A duckling",say:"waddled over with carrots"},{k:"hamster",name:"A hamster",say:"had carrots stuffed in her cheeks"},{k:"crow",name:"A crow",say:"brought you something shiny"},{k:"kitten",name:"A kitty",say:"knocked some carrots over to you"},{k:"ghost",name:"A ghost",say:"boo'd and dropped carrots (night only)",night:!0}];function s2(){const o=A(),e=new Date().getHours(),t=[...o].reduce((n,r)=>(n*31+r.charCodeAt(0))%9973,7);if(t%100>=48)return null;const a=e>=20||e<6,s=l3.filter(n=>!n.night||a);return s[t%s.length]}const $e=o=>o&&o.g>=Ao[o.seed].days;function F3(o){if(!o)return-1;const e=Ao[o.seed].days;return o.g>=e?4:o.g===0?0:Math.min(3,1+Math.floor((o.g-1)/Math.max(1,e-1)*3))}function Ia(o,e,t){const a=t??F3(o);return jo(Z.plants[o.seed][a],e,null,a===4?"ripe":"")}function n2(o=A()){let e=0;for(const t of Bo().plots)t&&t.last!==o&&!$e(t)&&(t.g++,t.last=o,e++);return e&&y(),e}function c3(o,e){const t=Ao[e],a=Bo();if(!t||a.plots[o]!==null)return!1;if(t.level&&pe().level<t.level&&!L().prestige)return E.nope(),$(`Unlocks at level ${t.level}`,"lock"),!1;const s=a.seeds[e]>0;return!s&&!Ho(t.cost)?(E.nope(),$("Not enough carrots yet","carrot"),!1):(s&&a.seeds[e]--,a.plots[o]={seed:e,g:0,planted:A(),last:A()},y(),E.carrot(),!0)}function r2(o){const e=Bo(),t=e.plots[o];if(!$e(t))return null;const a=Ao[t.seed],s=Math.random()<Math.min(.4,i3+.04*(t.w||0));let n=a.yield[0]+Math.floor(Math.random()*(a.yield[1]-a.yield[0]+1));ha(a)&&(n=Math.round(n*1.5)),s&&(n*=2,e.golden++);const r=!e.book[t.seed];e.book[t.seed]=(e.book[t.seed]||0)+1;const l={seed:t.seed,carrots:n,golden:s,xp:10+a.days*5,first:r,season:ha(a)};if(r&&(lt(1,"Garden book"),l.pack=!0),r&&Object.keys(e.book).length===Object.keys(Ao).length&&(l.bookDone=!0,x(300,400,"Garden book complete")),e.plots[o]=null,e.harvests++,ya({harvests:1}),x(l.xp,n,`${s?"Golden ":""}${a.name} harvest`),a.sticker&&Math.random()<a.sticker+(s?.3:0)&&(lt(1,"Garden"),l.pack=!0),a.item&&Math.random()<a.item+(s?.2:0)){const F=Io.filter(c=>c.garden&&!L().owned.includes(c.id));if(F.length){const c=F[Math.floor(Math.random()*F.length)];L().owned.push(c.id),l.item=c}}return l.kit=Pt(s?.6:.25,["daisy","pressed","moth","blackrose","rainbow","cloud"]),ke(2,"harvest"),y(),lo(),l}function d3(){const o=Bo();if(o.watered===A())return!1;o.watered=A();let e=0;for(const t of o.plots)t&&!$e(t)&&(t.w=(t.w||0)+1,e++);return x(5,0,"Watered the garden",{quiet:!0}),ke(1,"water"),y(),e||!0}function p3(){const o=Bo(),e=s2();if(!e||o.visit===A())return null;o.visit=A();const t=8+Math.floor(Math.random()*10);return x(5,t,`${e.name} visited`),ke(1,"visitor"),y(),{...e,carrots:t}}function u3(){const o=Bo(),e=o.plots.length;return e>=bs.length?!1:Ho(bs[e])?(o.plots.push(null),y(),E.badge(),$("New plot dug!","plant"),!0):(E.nope(),$("Not enough carrots yet","carrot"),!1)}function G3(){const o=Bo(),e=o.plots.filter($e).length,t=i.sessions[A()]?.done,a=o.plots.map((b,I)=>{if(!b)return`<button class="plot empty" data-act="plotTap" data-n="${I}"><span class="soil"></span><span class="plot-l">${G("seed",22)}Plant</span></button>`;const m=Ao[b.seed],J=$e(b),K=m.days-b.g;return`<button class="plot ${J?"ready":""}" data-act="plotTap" data-n="${I}"><span class="soil"></span><span class="plant">${Ia(b,64)}</span>
        <span class="plot-l">${J?`${G("spark",14)} Harvest`:`${K} more ${K===1?"day":"days"}`}</span></button>`}).join(""),s=o.plots.length<bs.length?`<button class="plot buy" data-act="buyPlot"><span class="plot-l">${G("plant",22)}New plot<small>${G("carrot",12)} ${bs[o.plots.length]}</small></span></button>`:"",n=s2(),r=n&&o.visit!==A()&&Z.pets[n.k],l=o.plots.some(b=>b&&!$e(b)),F=o.watered===A(),c=Object.keys(o.book).length,p=Object.entries(Ao).filter(([,b])=>ha(b)).map(([,b])=>b.name);return`<div class="card garden">
    <div class="between"><h2>Garden</h2><span class="chip ${e?"sag":"ghost"}">${e?`${e} ready`:`${o.harvests} harvested`}</span></div>
    <p class="tiny muted">Every day you finish a session, everything planted grows a step. ${t?"It grew today \u2661":"Train today to help it grow."}</p>
    ${r?`<button class="visitor" data-act="visitTap" aria-label="${d(n.name)} is visiting">${jo(Z.pets[n.k],44)}<span>${d(n.name)} is visiting! <b>Say hi</b></span></button>`:""}
    <div class="plots">${a}${s}</div>
    <div class="garden-tools mt12">
      <button class="btn ${F||!l?"":"solid"}" data-act="water" ${F||!l?"disabled":""}>${G("drop",16)}${F?"Watered today":"Water"}</button>
      <button class="btn" data-act="gardenBook">${G("book",16)}Garden book <span class="chip">${c}/${Object.keys(Ao).length}</span></button>
    </div>
    <p class="tiny muted mt8">Watering once a day makes golden harvests more likely.${p.length?` In season now: <b>${d(p.join(", "))}</b> (+50%).`:""}</p>
    ${o.golden?`<p class="tiny muted mt8">${G("star",12)} ${o.golden} golden ${o.golden===1?"harvest":"harvests"} so far</p>`:""}
  </div>`}function m3(o){const e=pe().level,t=Bo();yo(`${ko("Plant something")}
    <p class="small muted mt4">Slower plants pay more, and rare ones can hide stickers and garden-only cosmetics.</p>
    <div class="seed-list mt12">${Object.entries(Ao).map(([a,s])=>{const n=s.level&&e<s.level&&!L().prestige,r=t.seeds[a]>0;return`<button class="seed-row ${n?"locked":""}" data-act="plant" data-n="${o}" data-k="${a}">
        <span class="seed-prev">${Ia({seed:a},44,4)}</span>
        <span class="grow"><b>${d(s.name)}</b><small>${s.days} training days \xB7 ${s.yield[0]}-${s.yield[1]} carrots${ha(s)?" \xB7 in season!":""}${s.sticker?" \xB7 stickers":""}${s.item?" \xB7 rare finds":""}${t.book[a]?"":" \xB7 new"}</small></span>
        <span class="seed-p">${n?`${G("lock",12)} Lv ${s.level}`:r?`<b>Free</b> \xD7${t.seeds[a]}`:`${G("carrot",14)} ${s.cost}`}</span>
      </button>`}).join("")}</div>`)}function h3(o){const e=Bo().plots[o],t=Ao[e.seed];yo(`${ko(d(t.name))}
    <div class="center mt12">${Ia(e,96)}</div>
    <p class="small center">${e.g} of ${t.days} training days. ${t.days-e.g} to go.</p>
    <p class="tiny muted center">Planted ${Ms(e.planted)}. It only grows on days you finish a session, so it waits for you.${e.w?` Watered ${e.w} ${e.w===1?"time":"times"}.`:""}</p>
    <button class="btn danger mt12 full" data-act="pullPlant" data-n="${o}">Pull it up (no refund)</button>`)}function i2(o){const e=Ao[o.seed];E.gift(),ho(o.golden?1.2:.6),Ro(`<div class="pop-burst ${o.golden?"gold":""}"></div>
    <div class="pop-bunny ${o.golden?"golden":""}">${Ia({seed:o.seed},110,4)}</div>
    <div class="pop-kicker">${o.golden?"Golden harvest!":"Harvest"}</div>
    <h2>${d(e.name)}</h2>
    <div class="pop-reward big">${G("carrot",24)} <b>+${o.carrots}</b> carrots<br>${G("gem",22)} <b>+${o.xp}</b> XP${o.pack?`<br>${G("pack",22)} <b>+1</b> sticker pack`:""}</div>
    ${o.first?'<p class="small muted">New in your garden book!</p>':""}${o.season?'<p class="tiny muted">In season, +50%</p>':""}
    ${o.bookDone?`<div class="pop-unlock"><span class="nr-prev">${G("book",40)}</span><span>Garden book complete!<b>+400 carrots</b></span></div>`:""}
    ${o.item?`<div class="pop-unlock"><span class="nr-prev">${Po(o.item,48)}</span><span>Garden find!<b>${d(o.item.name)}</b></span></div>`:""}
    ${nr(o.kit)}
    <button class="cta" data-pop-close>Yum</button>`)}function I3(){const o=Bo();yo(`${ko("Garden book")}
    <p class="small muted mt4">Your first harvest of each plant adds it to the book and gives you a sticker pack. Fill the whole book for a big bonus.</p>
    <div class="book-grid mt12">${Object.entries(Ao).map(([e,t])=>{const a=o.book[e]||0;return`<div class="book-cell ${a?"":"locked"}">${Ia({seed:e},52,4)}<b>${a?d(t.name):"???"}</b><small>${a?`${a} grown`:t.level?`Lv ${t.level}`:"not yet"}${ha(t)?" \xB7 in season":""}</small></div>`}).join("")}</div>`)}const Me={c:{name:"Common",w:.61,glitter:1,craft:12},r:{name:"Rare",w:.28,glitter:3,craft:30},e:{name:"Epic",w:.08,glitter:8,craft:80},l:{name:"Holo",w:.03,glitter:20,craft:200}},R=(o,e,t,a,s="icon")=>({id:o,name:e,icon:t,r:a,src:s}),qe=[{id:"gym",name:"Home workout",reward:"held:dumbbell",list:[R("dumbbell","Yoga mat","mat","c"),R("kettle","Resistance band","resband","c"),R("bottle","Water bottle","bottle","c"),R("shoe","Skipping rope","rope","c"),R("timer","Stopwatch","timer","r"),R("fire","On fire","fire","r"),R("trophy","Trophy","trophy","e"),R("holodumb","Holo pull up bar","pullbar","l")]},{id:"treats",name:"Sweet treats",reward:"decor:cakestand",list:[R("carrot","Carrot","carrot","c"),R("macaron","Macaron","macaron","c"),R("cupcake","Cupcake","cupcake","c"),R("cherries","Cherries","cherries","c"),R("strawb","Strawberry","strawberry","r"),R("cake","Carrot cake","cake","r"),R("stand","Cake stand","cakestand","e"),R("holocarrot","Holo carrot","carrot","l")]},{id:"goth",name:"Goth glam",reward:"room:haunted",list:[R("candle","Candle","candle","c"),R("bat","Bat plush","bat","c"),R("skull","Cute skull","skull","c"),R("roses","Black roses","roses","c"),R("coffin","Coffin shelf","coffin","r"),R("candela","Candelabra","candelabra","r"),R("crystal","Crystal ball","crystal","e"),R("hologlass","Holo stained glass","stainedglass","l")]},{id:"pretty",name:"Pretty things",reward:"fur:peony",list:[R("lipstick","Lipstick","lipstick","c"),R("polish","Nail polish","polish","c"),R("perfume","Perfume","perfume","c"),R("ribbon","Ribbon","ribbonicon","c"),R("mirror","Gold mirror","mirror","r"),R("dress","Little dress","dress","r"),R("gem","Gem","gem","e"),R("holocrown","Holo crown","crown","l")]},{id:"cosy",name:"Cosy home",reward:"decor:portrait",list:[R("teddy","Teddy","teddy","c"),R("lamp","Floor lamp","lamp","c"),R("plant","House plant","plant","c"),R("cactus","Cactus","cactus","c"),R("clock","Wall clock","clock","r"),R("gramo","Gramophone","gramophone","r"),R("chand","Chandelier","chandelier","e"),R("holoport","Holo portrait","portrait","l")]},{id:"sky",name:"Sky and stars",reward:"amb:stars",list:[R("sun","Sunshine","sun","c"),R("moon","Moon","moon","c"),R("star","Star","star","c"),R("drop","Raindrop","drop","c"),R("spark","Sparkle","spark","r"),R("heart","Heart","heart","r"),R("ball","Mirror ball","mirrorball","e"),R("holomoon","Holo moon","moon","l")]},{id:"garden",name:"Nature walk",reward:"paper:botanical",list:[R("seed","Seedling","seed","c"),R("fly","Butterfly","butterfly","c"),R("lotus","Lotus","lotus","c"),R("shell","Seashell","shell","c"),R("bonsai","Bonsai","bonsai","r"),R("blossom","Blossom window","sakurawin","r"),R("moonpot","Moonflowers","moonpot","e"),R("holofly","Holo butterfly","butterfly","l")]},{id:"friends",name:"Little friends",reward:"pet:hamster",list:[R("duck","Duckling","duck","c","pet"),R("frog","Frog","frog","c","pet"),R("snail","Snail","snail","c","pet"),R("hamster","Hamster","hamster","c","pet"),R("kitten","Kitten","kitten","r","pet"),R("babybat","Baby bat","bat","r","pet"),R("ghost","Ghost","ghost","e","pet"),R("holoswan","Holo swan","swan","l","pet")]},{id:"holo",name:"Holo vault",reward:"paper:holo",list:[R("holoheart","Holo heart","heart","l"),R("holostar","Holo star","star","l"),R("holosun","Holo sunshine","sun","l"),R("holoteddy","Holo teddy","teddy","l"),R("holostrawb","Holo strawberry","strawberry","l"),R("holocrystal","Holo crystal ball","crystal","l"),R("holoskull","Holo skull","skull","l"),R("holokitten","Holo kitten","kitten","l","pet")]},{id:"earned",name:"Earned holos",reward:"washi:holo",list:[{...R("ebow","Holo bow","bow","l"),earn:{badge:"st7"}},{...R("efire","Holo flame","fire","l"),earn:{badge:"pr1"}},{...R("elotus","Holo lotus","lotus","l"),earn:{badge:"hold50"}},{...R("etrophy","Holo trophy","trophy","l"),earn:{badge:"s25"}},{...R("emirror","Holo mirror","mirror","l"),earn:{title:"glowgetter"}},{...R("elipstick","Holo lipstick","lipstick","l"),earn:{title:"lipstickbun"}},{...R("eroses","Holo black roses","roses","l"),earn:{title:"softgoth"}},{...R("egem","Holo gem","gem","l"),earn:{title:"perfect"}}]}],g3=40,Pe=qe.flatMap(o=>o.list.map(e=>({...e,page:o.id}))),kt=o=>Pe.find(e=>e.id===o),Qo=()=>{const o=L();return o.stickers||(o.stickers={have:{},glitter:0,packs:0,opened:0,pages:{}})},je=o=>(Qo().have[o]||0)>0,l2=()=>Object.keys(Qo().have).filter(o=>Qo().have[o]>0&&kt(o)).length;let b3=0;const _n=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function J3(o){const e=o.match(/viewBox="0 0 (\d+) (\d+)"/);if(!e)return o;const t=+e[1],a="hl"+ ++b3,s=o.slice(o.indexOf(">")+1,o.lastIndexOf("</svg>")),n=(s.match(/<rect[^>]*\/>/g)||[]).filter(c=>!/fill="#4A2433"/i.test(c)).map(c=>c.replace(/ fill="[^"]*"/,"")).join(""),r=(c,p)=>_n?"":`<animateTransform attributeName="gradientTransform" type="translate" values="${c}" dur="${p}s" repeatCount="indefinite"/>`,l=(c,p,b,I)=>{const m=c*t,J=p*t,K=t*b,v=K*.28;return`<path d="M${m} ${J-K}L${m+v} ${J-v}L${m+K} ${J}L${m+v} ${J+v}L${m} ${J+K}L${m-v} ${J+v}L${m-K} ${J}L${m-v} ${J-v}Z" fill="#fff" opacity="${_n?.9:0}">${_n?"":`<animate attributeName="opacity" values="0;1;0;0" keyTimes="0;.2;.45;1" dur="2.6s" begin="${I}s" repeatCount="indefinite"/>`}</path>`},F=`<defs>
      <linearGradient id="${a}a" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${t}" y2="${t}" spreadMethod="reflect">
        <stop offset="0" stop-color="#ff9ad5"/><stop offset=".2" stop-color="#ffe9a3"/><stop offset=".4" stop-color="#a6f5d8"/>
        <stop offset=".6" stop-color="#9fd8ff"/><stop offset=".8" stop-color="#d4b8ff"/><stop offset="1" stop-color="#ff9ad5"/>
        ${r(`0 0;${t} ${t};0 0`,6)}
      </linearGradient>
      <linearGradient id="${a}b" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${t}" y2="${t}">
        <stop offset=".35" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".95"/><stop offset=".65" stop-color="#fff" stop-opacity="0"/>
        ${r(`${-t} ${-t};${-t} ${-t};${t} ${t}`,3.4)}
      </linearGradient>
    </defs>
    <g fill="url(#${a}a)" style="mix-blend-mode:color" opacity=".42">${n}</g>
    <g fill="url(#${a}a)" style="mix-blend-mode:overlay" opacity=".6">${n}</g>
    <g fill="url(#${a}b)" style="mix-blend-mode:soft-light">${n}</g>
    <g fill="url(#${a}b)" opacity=".45">${n}</g>
    ${l(.18,.2,.09,0)}${l(.82,.32,.07,.9)}${l(.6,.85,.06,1.7)}`;return o.slice(0,o.lastIndexOf("</svg>")).replace(/^<svg /,'<svg style="isolation:isolate" ')+F+"</svg>"}function Qe(o,e=48){let t=o.src==="pet"?jo(Z.pets[o.icon],e):Gt(o.icon,{size:e});return o.r==="l"&&(t=J3(t)),`<span class="sticker r-${o.r}" style="--ss:${e}px">${t}</span>`}function Un(){const o=Qo();let e=Math.random(),t="c";for(const n of["l","e","r","c"]){if(e<Me[n].w){t=n;break}e-=Me[n].w}(o.dry||0)>=g3&&(t="l"),o.dry=t==="l"?0:(o.dry||0)+1;const a=Pe.filter(n=>n.r===t&&!n.earn);let s=a[Math.floor(Math.random()*a.length)];return je(s.id)&&(s=a[Math.floor(Math.random()*a.length)]),s}function ga(o){const e=Qo(),t=je(o.id);e.have[o.id]=(e.have[o.id]||0)+1;let a=0;t&&(a=Me[o.r].glitter,e.glitter+=a),ya({stickers:1});const s=qe.find(r=>r.id===o.page);let n=null;return s&&!e.pages[s.id]&&s.list.every(r=>je(r.id))&&(e.pages[s.id]=A(),n=s,L().owned.includes(s.reward)||L().owned.push(s.reward),x(120,100,`Album page: ${s.name}`,{quiet:!0})),y(),{s:o,dupe:t,glitter:a,page:n}}function lt(o,e){Qo().packs+=o,y()}function Zn(o=3){const e=Qo();if(e.packs<=0)return null;e.packs--,e.opened++;const t=[];for(let a=0;a<o;a++)t.push(ga(Un()));return t.kit=Pt(.3),lo(),t}function w3(o){const e=o.earn?.badge&&$o.find(a=>a.id===o.earn.badge),t=o.earn?.title&&de.find(a=>a.id===o.earn.title);return e?`the \u201C${e.name}\u201D badge (${e.desc||e.text||""})`.replace(" ()",""):t?`the \u201C${t.name}\u201D title`:""}function f3(o){const e=L(),t=[];return Pe.filter(a=>a.earn&&!je(a.id)).forEach(a=>{(a.earn.badge?e.badges?.[a.earn.badge]:e.titles?.[a.earn.title])&&t.push(ga(a))}),t.length&&!o&&setTimeout(()=>ba(t,t.length>1?"Earned holos!":"Earned holo!"),700),t}function y3(o){const e=kt(o),t=Qo();if(!e||je(o)||e.earn)return null;const a=Me[e.r].craft;if(t.glitter<a)return E.nope(),$(`Needs ${a} glitter`,"glitterjar"),null;t.glitter-=a;const s=ga(e);return lo(),s}function ba(o,e="Sticker pack"){E.gift(),ho(o.some(a=>a.s.r==="l"||a.s.r==="e")?1.2:.6);const t=o.filter(a=>a.page);Ro(`<div class="pop-kicker">${d(e)}</div>
    <div class="pack-row">${o.map((a,s)=>`<div class="pack-card" style="--i:${s}">${Qe(a.s,58)}<b>${d(a.s.name)}</b><small class="rar r-${a.s.r}">${Me[a.s.r].name}${a.dupe?` \xB7 +${a.glitter} glitter`:" \xB7 new!"}</small></div>`).join("")}</div>
    ${t.map(a=>`<div class="pop-unlock"><span class="nr-prev">${Po(io(a.page.reward),48)}</span><span>Page complete: ${d(a.page.name)}<b>${d(io(a.page.reward).name)} + 100 carrots</b></span></div>`).join("")}
    ${nr(o.kit)}
    <button class="cta" data-pop-close>Stick them in</button>`)}function K3(){const o=Qo(),e=P.albumPage||qe[0].id,t=qe.find(s=>s.id===e)||qe[0],a=t.list.filter(s=>je(s.id)).length;return`<div class="card album">
    <div class="between"><h2>Sticker album</h2><span class="chip">${l2()}/${Pe.length}</span></div>
    <div class="album-top">
      <button class="pack-btn ${o.packs?"has":""}" data-act="openPack" ${o.packs?"":"disabled"}>${G("pack",30,o.packs?"wiggle":"")}<span><b>${o.packs?`Open a pack (${o.packs})`:"No packs yet"}</b><small>${o.packs?"3 stickers inside":"Finish a session or hit your weekly goal"}</small></span></button>
      <span class="glitter-pill" title="Glitter from duplicates">${G("glitterjar",18)}<b>${o.glitter}</b></span>
    </div>
    <div class="pchips mt8 album-tabs">${qe.map(s=>`<button class="${s.id===t.id?"on":""} ${o.pages[s.id]?"done":""}" data-act="albumPage" data-k="${s.id}">${o.pages[s.id]?G("check",12)+" ":""}${d(s.name)}</button>`).join("")}</div>
    <div class="album-page">
      <div class="between"><b>${d(t.name)}</b><span class="tiny muted">${a}/${t.list.length}</span></div>
      <div class="stk-grid">${t.list.map(s=>{const n=o.have[s.id]||0;return n?`<div class="stk-slot have">${Qe(s,46)}<small>${d(s.name)}</small>${n>1?`<i class="stk-n">\xD7${n}</i>`:""}</div>`:s.earn?`<button class="stk-slot empty r-${s.r}" data-act="earnInfo" data-k="${s.id}"><span class="stk-ghost">${Qe(s,46)}</span><small>Earned</small><i class="stk-craft">${G(s.earn.badge?"trophy":"crown",10)}</i></button>`:`<button class="stk-slot empty r-${s.r}" data-act="craft" data-k="${s.id}"><span class="stk-ghost">${Qe(s,46)}</span><small>${Me[s.r].name}</small><i class="stk-craft">${G("glitterjar",10)}${Me[s.r].craft}</i></button>`}).join("")}</div>
      <div class="album-reward ${o.pages[t.id]?"got":""}"><span class="nr-prev">${Po(io(t.reward),40)}</span><span class="grow">${o.pages[t.id]?"Earned":"Complete the page for"}<b>${d(io(t.reward).name)}</b></span><span class="tiny muted">+100 ${G("carrot",12)}</span></div>
    </div>
    <p class="tiny muted mt8">Tap a missing sticker to make it with glitter. Duplicates turn into glitter.</p>
  </div>`}const F2=16,$t=()=>{const o=L();return o.journal||(o.journal={pages:{}})},Ft=o=>$t().pages[o],W={date:null,sel:null,tray:"stickers",drag:null,lbl:"pill"},or=["heartdoodle","stardoodle","sparkles","arrow","tick","clip","pin","bow","daisy","pressed","stamp","envelope","sticky","ticket","bubble","cloud","moon","rainbow","button","goldstar","latte","doily"],Js=["bat","web","coffin","skull","blackrose","stitchheart","candle","potion","moth","ghost","tarot","sacred","lacebow","feather"],Mt={pill:"Pill",tag:"Tag",type:"Label maker",hand:"Handwritten",stamp:"Stamp",goth:"Goth"},ct=[["slay","pill"],["proud of me","hand"],["calisthenics queen","tag"],["rest day","type"],["glow up","pill"],["she did that","stamp"],["soft + strong","tag"],["new PR!","stamp"],["self care","hand"],["main character","type"],["sore but cute","tag"],["today was good","hand"],["creepy cute","goth"],["spooky season","goth"],["witchy vibes","goth"],["dead tired lol","type"]],er={bits:["heartdoodle","stardoodle","sparkles","clip","bow","sticky","bat","ghost","skull"],words:[0,1,2,3,4,12],styles:["pill","hand"]};function Te(){const o=L();return o.kit||(o.kit={bits:[...er.bits],words:[...er.words],styles:[...er.styles],found:0})}const L3=o=>Te().bits.includes(o),tr=()=>or.length+Js.length+ct.length+Object.keys(Mt).length,ar=()=>{const o=Te();return o.bits.length+o.words.length+o.styles.length};function sr(){const o=Te(),e=[];return[...or,...Js].forEach(t=>o.bits.includes(t)||e.push({t:"b",k:t,goth:Js.includes(t)})),ct.forEach(([t,a],s)=>o.words.includes(s)||e.push({t:"w",k:s,goth:a==="goth"})),Object.keys(Mt).forEach(t=>o.styles.includes(t)||e.push({t:"st",k:t,goth:t==="goth"})),e}function Pt(o=1,e){if(Math.random()>=o)return null;const t=sr();if(!t.length)return null;const a=new Date().getMonth()===9,s=t.map(c=>(c.goth&&a?3:1)*(e&&e.includes(c.k)?4:1)*(c.t==="st"?.6:1));let n=Math.random()*s.reduce((c,p)=>c+p,0),r=0;for(;(n-=s[r])>0&&r<t.length-1;)r++;const l=t[r],F=Te();return(l.t==="b"?F.bits:l.t==="w"?F.words:F.styles).push(l.k),F.found++,y(),sr().length||v3(),l}function v3(){const o=Te();o.done||(o.done=A(),x(150,300,"Scrapbook kit complete"))}const c2=o=>o.t==="b"?Z.bits[o.k]?.n||o.k:o.t==="w"?`\u201C${ct[o.k][0]}\u201D`:`${Mt[o.k]} labels`,d2=(o,e=44)=>o.t==="b"?jo(Z.bits[o.k],e):o.t==="w"?Et(ct[o.k][0],ct[o.k][1]):Et(Mt[o.k],o.k),nr=o=>o?`<div class="pop-unlock kit-find"><span class="nr-prev">${d2(o)}</span><span>New for your scrapbook!<b>${d(c2(o))}</b></span></div>`:"";function rr(o,e){o&&(E.gift(),ho(.5),Ro(`<div class="pop-kicker">${d(e)}</div>
    <div class="kit-pop">${d2(o,96)}</div>
    <h2>${d(c2(o))}</h2>
    <p class="small muted">New for your scrapbook \xB7 ${ar()}/${tr()} found</p>
    <button class="cta" data-pop-close>Cute</button>
    <button class="btn full mt8" data-act="jOpenToday" data-pop-close>Use it today</button>`))}const Et=(o,e)=>`<span class="jlbl lbl-${Mt[e]?e:"pill"}">${d(o)}</span>`;function k3(o){const e=o.look||{};return`<span class="jpol"><span class="jpol-pic">${ce({mood:e.mood||"happy",fur:e.fur,outfit:e.outfit||"none",face:e.face||"none",neck:e.neck||"none",back:e.back||"none",dyes:e.dyes||null,size:80})}</span><i>${d(o.cap||"")}</i></span>`}function $3(o){const e=i.sessions[o];if(!e?.done)return"";const t=[e.mins?`${e.mins} min`:null,e.energy?`energy ${Cl(e.energy).toLowerCase()}`:null].filter(Boolean).join(" \xB7 ");return`<b>${d(So($a(e)))}</b>${t?`<small>${d(t)}</small>`:""}`}function M3(o,e,t){const a=`left:${o.x}%;top:${o.y}%;--r:${o.r||0}deg;--s:${o.s||1};z-index:${10+(o.z||0)}`;let s="";if(o.t==="s"){const n=kt(o.k);s=n?Qe(n,54):""}else o.t==="w"?s=`<span class="washi washi-${o.k}"></span>`:o.t==="b"?s=Z.bits?.[o.k]?`<span class="jbit">${jo(Z.bits[o.k],72)}</span>`:"":o.t==="lbl"?s=Et(o.txt||"",o.st):o.t==="pol"?s=k3(o):o.t==="stamp"&&(s=`<span class="jstamp">${o.html||""}</span>`);return`<span class="jitem ${o.t==="w"?"is-washi":""} ${t&&W.sel===e?"sel":""}" ${t?`data-ji="${e}"`:""} style="${a}">${s}</span>`}function ir(o,{edit:e=!1,mini:t=!1}={}){const a=Ft(o)||{paper:"plain",items:[],note:""},s=ao(o);return`<div class="jpage paper-${a.paper||"plain"} ${t?"mini":""}" ${e?'id="jcanvas"':""}>
    <div class="jdate"><span>${s.toLocaleDateString(void 0,{weekday:"long"})}</span>${s.toLocaleDateString(void 0,{day:"numeric",month:"long"})}</div>
    ${(a.items||[]).map((n,r)=>M3(n,r,e)).join("")}
    ${a.note?`<div class="jnote">${d(a.note)}</div>`:""}
  </div>`}function p2(o){const e=$t();if(!e.pages[o]){e.pages[o]={paper:"plain",items:[],note:""};const t=$3(o);t&&e.pages[o].items.push({t:"stamp",html:t,x:70,y:22,r:4,s:1,z:0})}return e.pages[o]}function lr(o=A()){W.date=o,W.sel=null,p2(o);let e=document.getElementById("journal");e||(e=document.createElement("div"),e.id="journal",e.className="journal-ov",document.body.appendChild(e),E3(e)),e.classList.add("show"),document.body.style.overflow="hidden",ze()}function P3(){document.getElementById("journal")?.classList.remove("show"),document.body.style.overflow="",C3(W.date),y(),M()}function ze(){const o=document.getElementById("journal"),e=W.date,t=p2(e),a=L(),s=Io.filter(F=>F.kind==="paper"),n=Io.filter(F=>F.kind==="washi"&&a.owned.includes(F.id)),r=Pe.filter(F=>je(F.id)),l=W.sel!=null?t.items[W.sel]:null;o.innerHTML=`<div class="sbar"><div class="wrap row nowrap">
      <button class="iconbtn" data-act="jClose" aria-label="Done">${B("x")}</button>
      <div class="prog"><div class="t">Scrapbook \xB7 ${vo(e,{weekday:"short",day:"numeric",month:"short"})}</div></div>
      <button class="btn solid" data-act="jClose">Done</button>
    </div></div>
    <div class="wrap jwrap">
      ${ir(e,{edit:!0})}
      <div class="jtools ${l?"show":""}">${l?`<button class="iconbtn" data-act="jRot" data-n="-15" aria-label="Rotate left">\u21BA</button>
        <button class="iconbtn" data-act="jRot" data-n="15" aria-label="Rotate right">\u21BB</button>
        <button class="iconbtn" data-act="jSize" data-n="-0.15" aria-label="Smaller">\u2212</button>
        <button class="iconbtn" data-act="jSize" data-n="0.15" aria-label="Bigger">+</button>
        <button class="iconbtn" data-act="jFront" aria-label="Bring to front">${G("star",16)}</button>
        <button class="iconbtn" data-act="jDel" aria-label="Remove">${G("trash",16)}</button>`:'<span class="tiny muted">Tap something below to add it. Drag to move, tap to edit.</span>'}</div>
      <div class="seg jtray-tabs">${[["stickers",`Stickers (${r.length})`],["bits","Bits"],["words","Words"],["washi","Washi"],["paper","Paper"],["note","Note"]].map(([F,c])=>`<button class="${W.tray===F?"on":""}" data-act="jTray" data-k="${F}">${c}</button>`).join("")}</div>
      <div class="jtray">${W.tray==="stickers"?r.length?r.map(F=>`<button class="jt-item" data-act="jAdd" data-t="s" data-k="${F.id}" aria-label="${d(F.name)}">${Qe(F,40)}</button>`).join(""):'<p class="tiny muted">No stickers yet. You get one for every day you finish a session.</p>':W.tray==="bits"?`<button class="jt-item wide jt-pol" data-act="jPol">${zo({mood:"happy",size:40})}<span>Polaroid of ${d(co())}</span></button>
              <p class="jt-h between"><span>Cute</span><span class="chip">${ar()}/${tr()} found</span></p>${or.map(F=>u2(F)).join("")}
              <p class="jt-h">Spooky</p>${Js.map(F=>u2(F)).join("")}`:W.tray==="words"?`<div class="jt-words">${ct.map(([F,c],p)=>Te().words.includes(p)?`<button class="jt-word" data-act="jWordAdd" data-n="${p}">${Et(F,c)}</button>`:`<button class="jt-word locked" data-act="jLocked" aria-label="Not found yet">${Et("\xB7 \xB7 \xB7",c)}</button>`).join("")}</div>
              <p class="jt-h">Write your own</p>
              <input class="inp" id="jword" maxlength="28" placeholder="say it babe" autocomplete="off">
              <div class="jt-words mt8">${Object.entries(Mt).map(([F,c])=>Te().styles.includes(F)?`<button class="jt-word ${W.lbl===F?"on":""}" data-act="jLblStyle" data-k="${F}" aria-label="${c}">${Et(c,F)}</button>`:`<button class="jt-word locked" data-act="jLocked" aria-label="${c} labels, not found yet">${G("lock",12)} ${c}</button>`).join("")}</div>
              <button class="btn solid full mt8" data-act="jWord">Add to the page</button>`:W.tray==="washi"?n.map(F=>`<button class="jt-item wide" data-act="jAdd" data-t="w" data-k="${F.key}" aria-label="${d(F.name)}"><span class="washi washi-${F.key}"></span></button>`).join("")+'<p class="tiny muted full">More tapes in the Extras shop.</p>':W.tray==="paper"?s.map(F=>{const c=a.owned.includes(F.id),p=gs(F);return`<button class="jt-paper ${t.paper===F.key?"on":""} ${c?"":"locked"}" data-act="jPaper" data-k="${F.key}"><span class="paper-swatch paper-${F.key}"></span><small>${c?d(F.name):p?`${G(p.icon,10)} ${p.label}`:`${G("carrot",10)} ${F.price}`}</small></button>`}).join(""):`<textarea class="inp jnote-in" id="jnote" maxlength="160" placeholder="A little note for today\u2026">${d(t.note||"")}</textarea><p class="tiny muted">Shows at the bottom of the page.</p>`}</div>
    </div>`}function E3(o){o.addEventListener("pointerdown",t=>{const a=t.target.closest(".jitem[data-ji]");if(!a)return;const s=document.getElementById("jcanvas");if(!s)return;t.preventDefault();const n=+a.dataset.ji,r=s.getBoundingClientRect();W.drag={j:n,r,el:a,sx:t.clientX,sy:t.clientY,moved:!1},a.setPointerCapture?.(t.pointerId)}),o.addEventListener("pointermove",t=>{const a=W.drag;if(!a||!a.moved&&Math.hypot(t.clientX-a.sx,t.clientY-a.sy)<6)return;a.moved=!0;const s=Ft(W.date).items[a.j],n=Math.max(0,Math.min(100,(t.clientX-a.r.left)/a.r.width*100)),r=Math.max(0,Math.min(100,(t.clientY-a.r.top)/a.r.height*100));s.x=Math.round(n*10)/10,s.y=Math.round(r*10)/10,a.el.style.left=s.x+"%",a.el.style.top=s.y+"%"});const e=()=>{const t=W.drag;t&&(W.drag=null,t.moved?y():(W.sel=W.sel===t.j?null:t.j,ze()))};o.addEventListener("pointerup",e),o.addEventListener("pointercancel",e),o.addEventListener("input",t=>{t.target.id==="jnote"&&(Ft(W.date).note=t.target.value.slice(0,160),clearTimeout(W.nt),W.nt=setTimeout(y,400))})}const R3=o=>Object.fromEntries([...Object.keys(o.pal||{}),"o"].map(e=>[e,"#DCCBD3"])),u2=o=>{const e=Z.bits?.[o];return e?L3(o)?`<button class="jt-item" data-act="jAdd" data-t="b" data-k="${o}" aria-label="${d(e.n)}">${jo(e,40)}</button>`:`<button class="jt-item locked" data-act="jLocked" aria-label="Not found yet">${jo(e,40,R3(e),"sil")}</button>`:""};function Fr(o,e,t){const a=Ft(W.date);if(a.items.length>=F2)return $(`A page fits ${F2} things`,"alert");const s=Math.max(0,...a.items.map(n=>n.z||0))+1;a.items.push({t:o,k:e,x:30+Math.random()*40,y:35+Math.random()*30,r:Math.round((Math.random()-.5)*24),s:1,z:s,...t||{}}),W.sel=a.items.length-1,E.pop(),y(),ze()}function G2(o,e){if(o=(o||"").trim().slice(0,28),!o)return $("Type something first","alert");Fr("lbl",null,{txt:o,st:e,r:Math.round((Math.random()-.5)*10)})}function A3(){const o=L(),e={fur:o.fur,outfit:o.outfit,face:o.face,neck:o.neck,back:o.back,dyes:o.dyes?JSON.parse(JSON.stringify(o.dyes)):null,mood:"happy"};Fr("pol",null,{look:e,cap:ao(W.date).toLocaleDateString(void 0,{day:"numeric",month:"short"})})}function ws(o){const e=Ft(W.date),t=e.items[W.sel];t&&(o(t,e),y(),ze())}function B3(o){const e=io("paper:"+o);if(!L().owned.includes(e.id)){const t=gs(e);if(t)return $(t.toast,t.icon);if(!Ho(e.price))return E.nope(),$("Not enough carrots yet","carrot");L().owned.push(e.id),E.carrot()}Ft(W.date).paper=o,y(),ze()}function C3(o){const e=Ft(o);if(e){if(!e.items.some(t=>t.t!=="stamp")&&!e.note){e.items.length||e.note||delete $t().pages[o];return}if(po(`journal:${o}`)){x(15,2,"Scrapbook page"),ke(3,"journal"),ya({pages:1}),lo();const t=$t(),a=[1,2].every(n=>{const r=t.pages[O(new Date(ao(o).getTime()-n*864e5))];return r&&(r.items?.some(l=>l.t!=="stamp")||r.note)}),s=Pt(a?1:.35);s&&setTimeout(()=>rr(s,a?"3 days of scrapbooking!":"Tucked in the back of your scrapbook"),500)}}}const m2=()=>Object.values($t().pages).filter(o=>o.items?.some(e=>e.t!=="stamp")||o.note).length;function N3(){const o=$t(),e=A(),t=P.jMonth||e.slice(0,7),[a,s]=t.split("-").map(Number),n=new Date(a,s-1,1),r=new Date(a,s,0).getDate(),l=[];for(let p=0;p<re(n);p++)l.push('<span class="jcal-cell blank"></span>');for(let p=1;p<=r;p++){const b=O(new Date(a,s-1,p)),I=!!o.pages[b],m=i.sessions[b]?.done,J=b>e;l.push(`<button class="jcal-cell ${I?"has":""} ${m?"trained":""} ${b===e?"today":""}" ${J?"disabled":`data-act="jOpen" data-k="${b}"`}>${I?`<span class="jmini">${ir(b,{mini:!0})}</span>`:""}<b>${p}</b></button>`)}const F=O(new Date(a,s-2,1)).slice(0,7),c=O(new Date(a,s,1)).slice(0,7);return`<div class="card scrap">
    <div class="between"><h2>Scrapbook</h2><span class="chip">${m2()} pages</span></div>
    <div class="scrap-today">${ir(e)}</div>
    <button class="cta mt12" data-act="jOpen" data-k="${e}">${G("book",20)} ${o.pages[e]?"Keep decorating today":"Decorate today\u2019s page"}</button>
    <div class="between mt16"><button class="iconbtn" data-act="jMonth" data-k="${F}" aria-label="Previous month">${B("back")}</button><b>${n.toLocaleDateString(void 0,{month:"long",year:"numeric"})}</b><button class="iconbtn" data-act="jMonth" data-k="${c}" aria-label="Next month" ${c>e.slice(0,7)?"disabled":""}>${B("right")}</button></div>
    <div class="jcal">${["M","T","W","T","F","S","S"].map(p=>`<span class="jcal-h">${p}</span>`).join("")}${l.join("")}</div>
    <p class="tiny muted mt8">Pink days are training days. Tap any day to make or edit its page.</p>
  </div>`}const D3=4,x3=()=>O(Lo(new Date));function Oe(){const o=L(),e=o.boutique||(o.boutique={week:null,ids:[],bought:0}),t=x3();if(e.week!==t){const a=Io.filter(r=>r.boutique&&!o.owned.includes(r.id)),s=on("boutique"+t),n=a.sort(()=>s()-.5).slice(0,D3);e.week=t,e.ids=n.map(r=>r.id),y()}return e}function S3(){return 7-re(new Date)}function q3(o){const e=io(o),t=L(),a=Oe();return!e||!a.ids.includes(o)||t.owned.includes(o)?!1:Ho(e.boutique)?(t.owned.push(o),a.bought++,t.stats.bought++,oa(o),y(),lo(),!0):(E.nope(),$("Not enough carrots yet","carrot"),!1)}function j3(){const o=Oe(),e=L(),t=S3(),a=o.ids.map(io).filter(Boolean).map(r=>{const l=e.owned.includes(r.id);return`<button class="btq-item ${l?"owned":""}" data-act="${l?"shop":"boutiqueBuy"}" data-id="${r.id}">
        <span class="btq-prev">${Po(r,84)}</span>
        <span class="btq-kind">${d(Q3[r.kind]||r.kind)}</span>
        <b>${d(r.name)}</b>
        <span class="btq-p">${l?Oa(r).worn?"Wearing":"Owned \xB7 wear":`${G("carrot",14)} ${r.boutique}`}</span>
      </button>`}).join(""),s=Io.filter(r=>r.boutique),n=s.filter(r=>e.owned.includes(r.id)).length;return`<div class="card boutique">
    <div class="btq-head"><span class="btq-sign">${G("bag",26)}<span><b>The Boutique</b><small>New stock in ${t} ${t===1?"day":"days"}</small></span></span><span class="chip">${n}/${s.length}</span></div>
    ${a?`<div class="btq-grid">${a}</div>`:`<div class="empty">${G("crown",30)} You own every boutique piece. Iconic.</div>`}
    <p class="tiny muted mt8">Boutique pieces aren't in the mystery box or the regular shop. Miss one and it comes back another week.</p>
  </div>`}const Q3={fur:"Fur",outfit:"Hat",face:"Face",neck:"Neck",held:"Held item",aura:"Aura",pet:"Companion",amb:"Ambience",room:"Room",decor:"Decor",paper:"Journal paper",washi:"Washi tape"},ae={morning:["Morning! Did you sleep ok?","Early bird gets the gains","Breakfast first, then glutes","Rise and shine bestie \u2600\uFE0E"],arvo:["Afternoon slump? Stretch it out","Snack + water, then we go","Arvo sesh hits different"],evening:["Evening workouts are elite","Wind down soon ok?","Cosy hours unlocked"],late:["Why are we awake rn","Bed. Now. Love you.","Sleep is part of training too","zzz... oh hi... zzz"],done:["You did it today \u2661","Proud of you, genuinely","Rest up, you earned it","Look at you go!!","Muscles: fed. Me: happy."],notyet:["Today's session is waiting for us","Just the warm up? For me?","We can do a gentle one if you're tired","I'll cheer the whole time, promise"],rest:["Rest days count too","Recovery is a whole vibe","Stretchy day? Stretchy day."],random:["Hi! Hi. Hello.","Pat me again (\u02F6\u02C3 \u1D55 \u02C2\u02F6)","I like it when you visit","You're doing better than you think","Drink some water babe","I'm small but I'm loyal","Do my ears look ok","Carrot? Carrot.","Stretch your hips, trust me","Hot girl walk later?"],tickle:["Hehe stop it!! ...don't stop","TICKLES (\u2267\u25BD\u2266)","Ahh my ears!!","You're so mean (keep going)","I can't breathe hehe"],hug:["Squeeeeze \u2661","Best hug ever","Don't let go yet","I needed that"],wear:["Do I look cute? Be honest","New look, who dis","I feel like a whole new bun","Twirl! \u2727","Serving looks today"]},Ja={witch:"I'll brew you a protein potion",pumpkin:"Spooky season forever",sharkhood:"Rawr. I'm a shark now",hunterhelm:"Hunt's on. Bring snacks.",crown:"Bow before your queen",tiara:"Princess mode: on",halo:"I'm an angel, mostly",horns:"...mostly",visor:"Jacked in. Literally.",gasmask:"Outside is weird today",heartbrooch:"In the name of the gains!",sailor:"Sailor bun reporting for duty",girlfriends:"This one's for my girlfriend \u2661",jobcrystal:"Healer main, obviously",greatsword:"It's heavier than me",meat:"Well done!!",neonkatana:"Night city who?",scythe:"Tiny but deadly. Mostly tiny.",grimoire:"It blinks sometimes. Normal.",moonwand:"Moon power, make up!",woodsword:"Every hero starts somewhere",coffinbag:"My bag is cuter than your bag",voodoo:"It's a friend. Don't worry about it.",blackcat:"This is my familiar, Void",eyeball:"It's looking at you because it loves you",crow:"She brings me shiny things",slime:"Squish squish",spider:"Her name is Lady and she's lovely",ghost:"Boo! (affectionate)"},wa=o=>o[Math.floor(Math.random()*o.length)];function T3(){const o=new Date().getHours(),e=L(),t=i.sessions[A()]?.done,a=[...ae.random,...s3()];o>=23||o<5?a.push(...ae.late,...ae.late):o<11?a.push(...ae.morning):o<17?a.push(...ae.arvo):a.push(...ae.evening),a.push(...t?ae.done:ae.notyet);const s=Yo().cur;return s>=3&&a.push(`${s} days in a row!! who ARE you`,`Streak: ${s}. I'm screaming`),[e.outfit,e.face,e.neck,e.held,e.pet,e.back].forEach(r=>Ja[r]&&a.push(Ja[r],Ja[r])),te().lv>=10&&a.push("We're basically soulmates now","Bestie for life (no take backs)"),wa(a)}function fs(o,e,t=2600){if(document.querySelectorAll(".bun-say").forEach(n=>n.remove()),!o||!o.isConnected)return $(`${co()}: \u201C${e}\u201D`,"bunny");const a=o.getBoundingClientRect(),s=document.createElement("div");s.className="bun-say",s.textContent=e,s.style.left=Math.max(12,Math.min(innerWidth-12,a.left+a.width/2))+"px",s.style.top=Math.max(8,a.top+a.height*.06)+"px",document.body.appendChild(s),setTimeout(()=>s.classList.add("bye"),t-300),setTimeout(()=>s.remove(),t)}function ys(o,e,t=1200){const a=o?.querySelector(".bs-bun");if(!a)return;const s=parseInt(o.querySelector(".bstage")?.style.getPropertyValue("--bs"))||120;a.innerHTML=zo({mood:e,size:s}),clearTimeout(o._moodT),o._moodT=setTimeout(()=>o.isConnected&&(a.innerHTML=zo({size:s})),t)}function z3(o,e=7){const t=o.getBoundingClientRect();for(let a=0;a<e;a++)setTimeout(()=>{const s=document.createElement("span");s.className="emote",s.innerHTML=G(a%3?"heart":"spark",16+Math.round(Math.random()*10)),s.style.left=t.left+t.width*(.15+Math.random()*.7)+"px",s.style.top=t.top+t.height*(.1+Math.random()*.3)+"px",document.body.appendChild(s),setTimeout(()=>s.remove(),1200)},a*70)}let fa=[],h2=0;function O3(o){const e=Date.now();if(fa=fa.filter(t=>e-t<2200),fa.push(e),fa.length>=6||e<h2)return fa=[],h2=e+1500,Uo([20,40,20]),ys(o,"shy",1800),fs(o,wa(ae.tickle));Math.random()<.35&&ys(o,wa(["happy","wink","love","shock"]),900),fs(o,T3())}function X3(o){o.dataset.hugged="1",Uo(40),E.pop?.(),ys(o,"love",2200),z3(o),a2(o),fs(o,wa(ae.hug),3e3)}function Y3(){let o=null;const e=()=>(clearTimeout(o),o=null);document.addEventListener("pointerdown",t=>{const a=t.target.closest?.('[data-act="pet"]');a&&(e(),o=setTimeout(()=>(o=null,X3(a)),550))}),["pointerup","pointercancel","pointerleave","scroll"].forEach(t=>document.addEventListener(t,e,{passive:!0,capture:t==="scroll"})),document.addEventListener("contextmenu",t=>t.target.closest?.('[data-act="pet"]')&&t.preventDefault())}function H3(o){!["outfit","face","neck","back","held","pet","fur"].includes(o)||Math.random()>.6||setTimeout(()=>{const e=document.querySelector('.burrow-bunny[data-act="pet"]')||document.querySelector('[data-act="pet"]');if(!e)return;const t=L(),a=t[Ae[o]];ys(e,"happy",1200),fs(e,Ja[a]&&Math.random()<.7?Ja[a]:wa(ae.wear))},120)}function W3(o){let e=2166136261;for(const t of o)e=Math.imul(e^t.charCodeAt(0),16777619)>>>0;return e}const Ks=(o=A())=>W3("lucky:"+o)%14===0;function V3(){return Ks()?`<div class="lucky">${G("star",22,"spin")}<div><b>Lucky day!</b><small>Every carrot you earn today is doubled</small></div></div>`:""}const _3=(o=A())=>o.slice(0,7);function ya(o){var a,s;const e=i.game;if(!e)return;const t=(a=e.monthly||(e.monthly={}))[s=_3()]||(a[s]={});for(const[n,r]of Object.entries(o))r&&(t[n]=(t[n]||0)+r)}const U3=.1,Z3=14;function op(o){const e=L(),t=n2(o.date);ke(10,"session"),Ks(o.date)&&(e.lucky[o.date]=!0);const a=ga(Un());o.dailySticker={id:a.s.id,dupe:a.dupe,glitter:a.glitter,page:a.page?.id||null},o.grew=t;const s=Pt(.4);s&&(o.kit={t:s.t,k:s.k}),e.surpriseN=(e.surpriseN||0)+1,(Math.random()<U3||e.surpriseN>=Z3)&&(e.surpriseN=0,o.surprise=ep()),y(),$l()}function ep(){const o=L(),e=Io.filter(n=>n.surprise&&!o.owned.includes(n.id)),t=Math.random();if(e.length&&t<.35){const n=e[Math.floor(Math.random()*e.length)];return o.owned.push(n.id),y(),{type:"item",id:n.id}}if(t<.65)return lt(2,"Surprise"),{type:"packs",n:2};if(t<.88){const n=50+Math.floor(Math.random()*41);return x(0,n,"Surprise carrot rain",{quiet:!0}),{type:"carrots",n}}const a=Math.random()<.6?"moonflower":"starbloom",s=Bo();return s.seeds[a]=(s.seeds[a]||0)+1,y(),{type:"seed",seed:a}}function I2(o){let e="";const t=o.dailySticker;if(t){const a=kt(t.id);e+=`<div class="card daily-stk">
      <div class="stk-reveal">${Qe(a,64)}</div>
      <div class="grow"><span class="pop-kicker">Today\u2019s sticker</span><b>${d(a.name)}</b><small class="rar r-${a.r}">${Me[a.r].name}${t.dupe?` \xB7 duplicate, +${t.glitter} glitter`:" \xB7 new!"}</small>
      ${t.page?'<small class="accent">Page complete! Reward added to your wardrobe</small>':""}</div>
      <button class="btn" data-act="jOpenToday">Stick it</button>
    </div>`}return o.kit&&(e+=`<div class="card kit-card">${nr(o.kit)}<button class="btn" data-act="jOpenToday">Use it</button></div>`),o.grew&&(e+=`<div class="note-chip">${G("plant",14)} Your garden grew ${o.grew===1?"a step":`in ${o.grew} plots`}</div>`),o.surprise&&!o.surpriseShown&&(o.surpriseShown=!0,setTimeout(()=>tp(o.surprise),1600)),e}function tp(o){E.gift(),ho(1.3);let e="";o.type==="item"?e=`<div class="pop-bunny">${Po(io(o.id),110)}</div><h2>${d(io(o.id).name)}</h2><p class="muted">A surprise-only find. It's in your wardrobe.</p>`:o.type==="packs"?e=`<div class="pop-badge">${G("pack",72)}</div><h2>Two sticker packs</h2><p class="muted">Open them in the Buns tab.</p>`:o.type==="carrots"?e=`<div class="pop-badge">${G("carrot",72)}</div><h2>Carrot rain!</h2><div class="pop-reward big">${G("carrot",24)} <b>+${o.n}</b></div>`:e=`<div class="pop-badge">${G("seed",72)}</div><h2>A rare ${d(Ao[o.seed].name.toLowerCase())} seed</h2><p class="muted">Plant it free in your garden.</p>`,Ro(`<div class="pop-burst gold"></div><div class="pop-kicker">Surprise!</div>${e}<button class="cta" data-pop-close>Ooh</button>`)}function cr(o){const e=Object.keys(i.sessions).filter(K=>K.startsWith(o)&&i.sessions[K].done).sort(),t=e.reduce((K,v)=>K+(i.sessions[v].mins||0),0),a=i.rows.filter(K=>String(K.date).startsWith(o)),s=a.reduce((K,v)=>K+(+v.min||0),0),n=a.reduce((K,v)=>K+(+v.meters||0),0)/1e3;let r=0,l=0,F=null;for(const K of e)l=F&&be(ao(F),ao(K))===1?l+1:1,r=Math.max(r,l),F=K;const c=L(),p=c.monthly?.[o]||{},b=Object.values(c.badges||{}).filter(K=>String(K).startsWith(o)).length,I=e.map(K=>i.sessions[K].energy).filter(Boolean),m=Object.keys(C().days||{}).filter(K=>K.startsWith(o)&&ye(C().days[K])>0).length,J=new Set(e.map(K=>O(Lo(ao(K))))).size;return{sessions:e.length,mins:t,cmin:Math.round(s),ckm:Math.round(n*10)/10,best:r,weeks:J,badges:b,glow:m,energy:I.length?I.reduce((K,v)=>K+v,0)/I.length:null,quests:p.quests||0,stickers:p.stickers||0,harvests:p.harvests||0,pages:p.pages||0,xp:p.xp||0,carrots:p.carrots||0}}const g2=o=>{const[e,t]=o.split("-").map(Number);return new Date(e,t-1,1).toLocaleDateString(void 0,{month:"long",year:"numeric"})},b2=o=>o>=60?`${Math.floor(o/60)}h ${o%60?o%60+"m":""}`.trim():`${o}m`;function dr(o){const e=cr(o),t=(a,s)=>`<div class="tile"><div class="v">${a}</div><div class="l">${s}</div></div>`;return`<div class="recap">
    <div class="recap-head"><span class="pop-kicker">Your month</span><h2>${g2(o)}</h2></div>
    <div class="tiles">
      ${t(e.sessions,"sessions")}
      ${t(b2(e.mins),"training")}
      ${t(e.best,"day run")}
      ${t(b2(e.cmin),"cardio")}
      ${t(e.ckm||0,"cardio km")}
      ${t(e.glow,"glow days")}
    </div>
    <div class="recap-list">
      ${e.quests?`<div>${G("scroll",18)}<span>${e.quests} quests done</span></div>`:""}
      ${e.badges?`<div>${G("trophy",18)}<span>${e.badges} new ${e.badges===1?"badge":"badges"}</span></div>`:""}
      ${e.stickers?`<div>${G("pack",18)}<span>${e.stickers} stickers collected</span></div>`:""}
      ${e.harvests?`<div>${G("plant",18)}<span>${e.harvests} garden harvests</span></div>`:""}
      ${e.pages?`<div>${G("book",18)}<span>${e.pages} scrapbook pages</span></div>`:""}
      ${e.energy?`<div>${G("heart",18)}<span>Average energy ${e.energy.toFixed(1)} of 5</span></div>`:""}
      ${e.xp?`<div>${G("gem",18)}<span>${e.xp.toLocaleString()} XP and ${e.carrots.toLocaleString()} carrots earned</span></div>`:""}
    </div>
  </div>`}function J2(){const o=L(),e=new Date,t=O(new Date(e.getFullYear(),e.getMonth()-1,1)).slice(0,7);if(o.recapSeen===t)return;if(!i.start||i.start.slice(0,7)>t)return o.recapSeen=t,void y();const a=cr(t);if(!a.sessions&&!a.cmin)return o.recapSeen=t,void y();o.recapSeen=t,y(),Ro(`${dr(t)}
    <p class="small muted">${a.sessions>=16?"That's a seriously strong month.":a.sessions>=8?"Look at you, keeping it going.":"Every session counted. New month, fresh start."}</p>
    <button class="cta" data-pop-close>Onwards \u2661</button>`)}function ap(){const e=[...new Set([...Object.keys(i.sessions).map(t=>t.slice(0,7)),...i.rows.map(t=>String(t.date).slice(0,7))])].filter(t=>/^\d{4}-\d{2}$/.test(t)).sort().reverse();yo(`${ko("Monthly recaps")}
    ${e.length?e.map(t=>`<details class="recap-item" ${t===e[0]?"open":""}><summary>${g2(t)}${B("down",{cls:"chev"})}</summary>${dr(t)}</details>`).join(""):le("cal","Your first month shows up here.")}`)}function sp(){const o=i.game||{},e=Object.values(i.sessions);return{sets:Object.keys(o.sets||{}).length,stickers:o.stickers?l2():0,albumPages:Object.keys(o.stickers?.pages||{}).length,harvests:o.garden?.harvests||0,goldenHarvests:o.garden?.golden||0,gardenBook:Object.keys(o.garden?.book||{}).length,bondLevel:o.bond?te(o.bond.pts).lv:1,journalPages:o.journal?m2():0,checkins:e.filter(t=>t&&t.energy).length,gentle:e.filter(t=>t&&t.done&&t.gentle).length,luckyDays:Object.keys(o.lucky||{}).length,boutique:o.boutique?.bought||0,dyed:Object.keys(o.dyes||{}).length,kitFound:o.kit?ar():0,holos:o.stickers?Pe.filter(t=>t.r==="l"&&je(t.id)).length:0}}const np=[u("stk1","Sticky fingers","Collect your first sticker","pack",10,"stickers",1),u("stk25","Sticker fan","Collect 25 different stickers","pack",60,"stickers",25),u("stk64","Full album","Collect every sticker","book",400,"stickers",Pe.length),u("holo4","Ooh shiny","Collect 4 holo stickers","spark",60,"holos",4),u("holoall","Holo hunter","Collect every holo sticker","crown",400,"holos",Pe.filter(o=>o.r==="l").length),u("kit20","Glue stick girl","Find 20 scrapbook bits","book",60,"kitFound",20),u("kitall","Scrapbook queen","Find every scrapbook bit","crown",300,"kitFound",tr()),u("page1","Page turner","Complete a sticker album page","book",40,"albumPages",1),u("page4","Half the album","Complete 4 album pages","book",120,"albumPages",4),u("harv1","Green thumb","Harvest your garden","plant",15,"harvests",1),u("harv25","Market garden","25 harvests","plant",80,"harvests",25),u("harv100","Harvest queen","100 harvests","crown",250,"harvests",100),u("gold1","Midas touch","A golden harvest","star",40,"goldenHarvests",1),u("book6","Botanist","Grow 6 different plants","book",60,"gardenBook",6),u("book12","Full garden book","Grow every plant","plant",300,"gardenBook",Object.keys(Ao).length),u("bond5","Best buns","Reach bond level 5","heart",60,"bondLevel",5),u("bond10","Soulmates","Reach bond level 10","heart",250,"bondLevel",10),u("set1","Dressed to theme","Complete an outfit set","dress",40,"sets",1),u("set4","Wardrobe goals","Complete 4 outfit sets","dress",150,"sets",4),u("set8","Every look","Complete every outfit set","crown",400,"sets",Lt.length),u("jour1","Dear diary","Decorate a scrapbook page","book",10,"journalPages",1),u("jour7","Week in pictures","7 scrapbook pages","book",40,"journalPages",7),u("jour30","Scrapbook queen","30 scrapbook pages","crown",150,"journalPages",30),u("chk10","Checking in","10 energy check-ins","heart",30,"checkins",10),u("chk50","Knows herself","50 energy check-ins","heart",100,"checkins",50),u("gentle5","Soft but steady","5 gentle sessions","moon",40,"gentle",5),u("lucky3","Lucky bunny","Train on 3 lucky days","star",50,"luckyDays",3),u("btq1","Boutique babe","Buy something in the boutique","bag",30,"boutique",1),u("btq8","VIP client","8 boutique pieces","gem",200,"boutique",8),u("dye5","Colour me pretty","Dye 5 things","polish",40,"dyed",5)].map(o=>({...o,reward:null}));$o.push(...np),de.push(g("stylist","Stylist","Complete an outfit set","sets",1),g("muse","Muse","Complete 4 outfit sets","sets",4,"rare"),g("icon","Fashion Icon","Complete all 9 outfit sets","sets",9,"legendary"),g("gardener","Little Gardener","10 harvests","harvests",10),g("florist","Florist","50 harvests","harvests",50,"rare"),g("collector","Sticker Collector","Complete 2 album pages","albumPages",2,"rare"),g("archivist","Archivist","Complete every album page","albumPages",qe.length,"legendary"),g("soulmates","Soulmates","Bond level 10","bondLevel",10,"epic"),g("diarist","Diarist","30 scrapbook pages","journalPages",30,"epic"));const rp=[["train","Training","dumbbell"],["streak","Streaks","fire"],["cardio","Cardio","row"],["glow","Glow","mirror"],["bunny","Bunny","bunny"]];function ip(o){const e=o.stat||"";return/^(sessions|steps|planMax|reviews|prs|timers|early|night|fullWeeks|glute|checkins|gentle|luckyDays|weighIns)$/.test(e)||o.test?"train":/Streak$|^(weekStreak|bestStreak|months|fitMonths|yearGoals|yearAll)$/.test(e)?"streak":/^(cardio|cardioKm|cardioMin|row|bike|walk|jog|run|extraCardio)$/.test(e)?"cardio":/^(treats|quests|owned|constellations|prestige|mystery|level|spent|chests|cakes|bought|gifts|badges|sets|stickers|albumPages|harvests|goldenHarvests|bondLevel|journalPages|boutique|dyed|kitFound|holos)$/.test(e)?"bunny":"glow"}const Ls=12;function lp(o){const e=L(),t=P.bType||"all",a=P.bShow||"all",s=$o.filter(p=>t==="all"||ip(p)===t),n=s.filter(p=>a==="all"?!0:a==="earned"?!!e.badges[p.id]:!e.badges[p.id]),r=Math.max(1,Math.ceil(n.length/Ls)),l=Math.min(P.bPage||0,r-1),F=n.slice(l*Ls,l*Ls+Ls),c=s.filter(p=>e.badges[p.id]).length;return`<div class="sec-t">Badges <span class="chip">${$o.filter(p=>e.badges[p.id]).length}/${$o.length}</span></div>
  ${xi(o)}
  <div class="card badge-box">
    <div class="pchips btypes">${[["all","All","star"],...rp].map(([p,b,I])=>`<button class="${t===p?"on":""}" data-act="bType" data-k="${p}">${G(I,14)} ${b}</button>`).join("")}</div>
    <div class="between mt8">
      <div class="seg small-seg">${[["all","All"],["earned","Earned"],["locked","To get"]].map(([p,b])=>`<button class="${a===p?"on":""}" data-act="bShow" data-k="${p}">${b}</button>`).join("")}</div>
      <span class="tiny muted">${c}/${s.length}</span>
    </div>
    ${F.length?`<div class="badges compact">${F.map(p=>{const b=!!e.badges[p.id],I=!b&&ft(p,o);return`<button class="bdg ${b?"on":""}" data-act="badge" data-id="${p.id}" aria-label="${d(p.name)}${b?"":" (locked)"}">
      <span class="bdg-ic">${G(p.icon,26)}</span><span class="bdg-n">${d(p.name)}</span>
      ${I?hn(I):""}${p.reward?`<span class="bdg-gift">${G("gift",12)}</span>`:""}
    </button>`}).join("")}</div>`:le("trophy",a==="earned"?"None here yet. Soon!":"You've got them all here!")}
    ${r>1?`<div class="pager"><button class="iconbtn" data-act="bPage" data-n="${l-1}" ${l===0?"disabled":""} aria-label="Previous page">${B("back")}</button><span class="pager-dots">${Array.from({length:r},(p,b)=>`<i class="${b===l?"on":""}"></i>`).join("")}</span><button class="iconbtn" data-act="bPage" data-n="${l+1}" ${l>=r-1?"disabled":""} aria-label="Next page">${B("right")}</button></div>`:""}
  </div>`}const Fp=[["fur","Fur","bunny"],["outfit","Hats","bow"],["face","Face","lipstick"],["neck","Neck","gem"],["back","Back","bow"],["held","Held item","star"],["aura","Aura","spark"],["pet","Companion","heart"],["room","Room","home"],["decor","Decor","lamp"],["amb","Ambience","moon"]],cp=[["dress","Dress up"],["garden","Garden"],["album","Album"],["scrap","Scrapbook"],["boutique","Boutique"]];function dp(o=200){return`<div class="burrow-scene bt-scene room-${L().room}" style="height:${o}px">
    <span class="sparkle s1"></span><span class="sparkle s2"></span><span class="sparkle s3"></span>
    <div class="burrow-floor"></div>
    ${Ca()}
    ${Is()}
    <button class="burrow-bunny" data-act="pet" aria-label="Pat ${d(co())}">${it({mood:Ba(),size:128,pet:!0})}</button>
  </div>`}function pp(o){const e=L();if(o==="decor"){const a=Object.values(e.decor[e.room]||{}).filter(Boolean).length;return{sub:a?`${a} placed in ${gt[e.room]}`:"Nothing placed yet",prev:null}}const t=io(f(o,e[Ae[o]]).id);return{sub:t?t.name:"Nothing",prev:t}}function up(o){const e=L(),t=!!P.wOwned,a=r=>!t||e.owned.includes(r.id),s=(r,l)=>(e.owned.includes(l.id)?1:0)-(e.owned.includes(r.id)?1:0);if(o==="decor")return`<p class="tiny muted">Placing in <b>${d(gt[e.room])}</b>. Each room keeps its own setup. Tap something placed to take it away.</p>`+["wall","left","right","rug"].map(r=>{const l=Io.filter(F=>F.kind==="decor"&&F.slot===r&&a(F)).sort(s);return l.length?`<div class="ctitle">${Si[r]}</div><div class="shop-grid w-grid">${l.map(ea).join("")}</div>`:""}).join("");const n=Io.filter(r=>r.kind===o&&a(r)).sort(s);return n.length?`<div class="shop-grid w-grid">${n.map(ea).join("")}</div>`:'<p class="tiny muted">Nothing owned here yet.</p>'}function Gp(){const o=L(),e=[...["outfit","neck","back","held"].map(t=>io(f(t,o[Ae[t]]).id)),...Object.values(o.decor[o.room]||{}).filter(Boolean).map(t=>io("decor:"+t))].filter(t=>t&&H1(t));return e.length?`<p class="tiny muted">Recolour the pink parts of what you're wearing. ${Hl} carrots per colour, going back to original is free.</p>
    ${e.map(t=>{const a=o.dyes?.[t.id]||"rose";return`<div class="dye-row"><span class="dye-prev">${Po(t,44)}</span><span class="grow"><b>${d(t.name)}</b><span class="dye-swatches">${Object.entries(Ga).map(([s,n])=>`<button class="sw ${a===s?"on":""}" data-act="dye" data-id="${t.id}" data-k="${s}" aria-label="${n.name}" title="${n.name}" style="--a:${n.c?n.c.P:"#F48FAE"};--b:${n.c?n.c.r:"#D9587F"}"></button>`).join("")}</span></span></div>`}).join("")}`:'<p class="tiny muted">Wear a hat, neck piece, back piece or held item with pink in it (or place pink decor) and you can recolour it here.</p>'}function mp(){return Lt.map(o=>{const e=o2(o),t=e.parts.length;return`<div class="set-row ${e.done?"done":""}">
      <div class="between"><b>${e.done?G("check",14)+" ":""}${d(o.name)}</b><span class="tiny muted">${e.owned}/${t} owned</span></div>
      <div class="set-parts">${e.parts.map(a=>`<span class="set-part ${a.owned?"own":""} ${a.worn?"worn":""}" title="${d(a.item?.name||a.key)}">${a.item?Po(a.item,34):""}</span>`).join("")}
        <span class="set-reward" title="${d(Kt[o.aura].name)}">${G("spark",14)}<small>${d(Kt[o.aura].name)}</small></span></div>
      ${e.all&&!e.worn?`<button class="btn full mt8" data-act="wearSet" data-k="${o.id}">Wear the set</button>`:""}
    </div>`}).join("")}function hp(){const o=L(),e=Yo();return`<div class="shop-extra">
    <div class="li">${G("pack",34)}<span class="t">Sticker pack<small>3 stickers for your album and scrapbook.</small></span>
      <button class="btn ${o.carrots>=pr?"solid":""}" data-act="buyPack">${G("carrot",16)} ${pr}</button></div>
    <div class="li">${G("gift",34)}<span class="t">Mystery box<small>A random item you don\u2019t own yet. Some only come from here.</small></span>
      <button class="btn ${o.carrots>=Ot?"solid":""}" data-act="mystery">${G("carrot",16)} ${Ot}</button></div>
    <div class="li">${G("bow",34)}<span class="t">Streak bow<small>Covers one missed day. You hold ${e.savers} of ${_e}.</small></span>
      <button class="btn ${e.savers<_e&&o.carrots>=bt?"solid":""}" data-act="buyBow" ${e.savers>=_e?"disabled":""}>${G("carrot",16)} ${bt}</button></div>
    <div class="li">${G("cake",34)}<span class="t">Carrot cake<small>+${_s} XP on your next finished session. Shelf holds ${o.cakes} of ${Ve}.</small></span>
      <button class="btn ${o.cakes<Ve&&o.carrots>=zt?"solid":""}" data-act="cake" ${o.cakes>=Ve?"disabled":""}>${G("carrot",16)} ${zt}</button></div>
    <div class="li">${G("macaron",34)}<span class="t">Macaron for ${d(co())}<small>One treat. Bond +3.</small></span>
      <button class="btn ${o.carrots>=jt?"solid":""}" data-act="feed">${G("carrot",16)} ${jt}</button></div>
    <div class="li">${G("gift",34)}<span class="t">Tea party box<small>${Vs} treats at once. Bond +8.</small></span>
      <button class="btn ${o.carrots>=Tt?"solid":""}" data-act="feed" data-k="feast">${G("carrot",16)} ${Tt}</button></div>
  </div>
  <div class="ctitle">Scrapbook supplies</div>
  <div class="shop-grid w-grid">${Io.filter(t=>t.kind==="washi"||t.kind==="paper").map(ea).join("")}</div>
  ${Bi()}
  <p class="tiny muted mt8">${o.stats.spent.toLocaleString()} carrots spent all time${o.stats.treats?` \xB7 ${o.stats.treats} treats given`:""}</p>`}const pr=90;function Ka(o,e,t,a,s,n){const r=P.wOpen===o;return`<div class="acc ${r?"open":""}">
    <button class="acc-h" data-act="wOpen" data-k="${o}" aria-expanded="${r}">
      <span class="acc-prev">${s||G(e,26)}</span>
      <span class="grow"><b>${t}</b><small>${a}</small></span>${B("down",{cls:"chev"})}
    </button>
    ${r?`<div class="acc-b">${n()}</div>`:""}
  </div>`}function Ip(){const o=L(),e=Fp.map(([s,n,r])=>{const l=Io.filter(p=>p.kind===s&&p.key!=="none"),F=l.filter(p=>o.owned.includes(p.id)).length,c=pp(s);return Ka(s,r,n,`${d(c.sub)} \xB7 ${F}/${l.length}`,c.prev&&c.prev.key!=="none"?Po(c.prev,38):null,()=>up(s))}).join(""),t=Object.keys(o.sets||{}).length,a=te();return`<div class="w-bar">
      <span class="purse">${G("carrot",18)}<b>${o.carrots}</b></span>
      <label class="w-own"><span>Owned only</span>${na("wOwned",!!P.wOwned,"Show owned only")}</label>
    </div>
    <div class="acc-list">
      ${Ka("bond","heart","Bond and poses",`Level ${a.lv} \xB7 ${d(Vn[vt().pose]?.name||"Bob")}`,null,r3)}
      ${e}
      ${Ka("sets","dress","Outfit sets",`${t}/${Lt.length} complete \xB7 each unlocks an aura`,null,mp)}
      ${Ka("dye","polish","Dye studio","Recolour what you're wearing",null,Gp)}
      ${Ka("extra","gift","Extras","Sticker packs, mystery box, bows, cake, treats",null,hp)}
    </div>`}function gp(){const o=P.btView||"dress",e=L(),t=Qo(),a=Bo(),s=a.plots.filter($e).length,n=Oe().ids.filter(l=>!e.owned.includes(l)).length,r={garden:s,album:t.packs,boutique:n&&Oe().week!==e.btqSeen?1:0};Ke().innerHTML=`<div class="wrap bt">
    <div class="top between end"><div><div class="date">Bond ${te().lv} \xB7 ${e.carrots} carrots</div><h1>${d(co())}</h1></div></div>
    <div class="bt-stage ${o==="dress"?"sticky":""}">${dp(o==="dress"?190:150)}</div>
    <div class="bt-tabs">${cp.map(([l,F])=>`<button class="${o===l?"on":""}" data-act="btab" data-k="${l}">${F}${r[l]?`<i class="dot">${r[l]>1?r[l]:""}</i>`:""}</button>`).join("")}</div>
    ${o==="dress"?Ip():o==="garden"?G3():o==="album"?K3():o==="scrap"?N3():j3()}
    <div style="height:20px"></div>
  </div>`,o==="boutique"&&e.btqSeen!==Oe().week&&(e.btqSeen=Oe().week,y())}function bp(){const o=L(),e=Bo(),t=e.plots.filter($e).length,a=e.plots.filter(l=>!l).length,s=Qo().packs,n=[];t&&n.push(["garden","plant",`${t} ${t===1?"plant is":"plants are"} ready to harvest`]),s&&n.push(["album","pack",`${s} sticker ${s===1?"pack":"packs"} to open`]),!t&&a&&To().length&&n.push(["garden","seed",`${a} empty garden ${a===1?"plot":"plots"}. Plant something`]);const r=Oe();return r.week!==o.btqSeen&&r.ids.some(l=>!o.owned.includes(l))&&n.push(["boutique","bag","New boutique stock this week"]),n.length?`<div class="pings">${n.slice(0,3).map(([l,F,c])=>`<button class="ping" data-act="goBunny" data-k="${l}">${G(F,20)}<span>${c}</span>${B("right",{size:14})}</button>`).join("")}</div>`:""}Object.assign(qn,{energy:o=>M1(+o.dataset.n),energyRedo:()=>{i.active&&(i.active.energy=null,Oo())},gentle:()=>P1(),effort:o=>E1(+o.dataset.n),confirmLoad:()=>g1(),undoLoad:()=>b1(),snapRestore:o=>J1(o.dataset.id),snapRestoreNow:o=>ua(o.dataset.id).then(e=>e&&ls(e.data,"Welcome back \u2661")),snoozeSave:()=>{i.saveNudge=A(),y(),M()},rescueDownload:()=>y1(),rescueFresh:()=>K1(),btab:o=>{P.btView=o.dataset.k,E.pop(),M(),window.scrollTo(0,0)},goBunny:o=>{P.btView=o.dataset.k,oe("bunny")},wOpen:o=>{const e=o.dataset.k;P.wOpen=P.wOpen===e?null:e,E.pop(),M();const t=document.querySelector(`.acc-h[data-k="${e}"]`),a=document.querySelector(".bt-stage.sticky");if(t&&P.wOpen){const s=t.getBoundingClientRect().top+window.scrollY-(a?a.offsetHeight+8:8);window.scrollTo({top:s,behavior:Rs()?"auto":"smooth"})}},wOwned:()=>{P.wOwned=!P.wOwned,M()},pose:o=>n3(o.dataset.k),wearAura:o=>{oa("aura:"+o.dataset.k),M()},wearSet:o=>{const e=Lt.find(t=>t.id===o.dataset.k);if(e){for(const[t,a]of Object.entries(e.need)){const s=Zl(t,a);L().owned.includes(s)&&(L()[Ae[t]]=a)}y(),e2(),E.carrot(),M()}},dye:o=>{const e=o.dataset.id,t=o.dataset.k,a=L();if((a.dyes[e]||"rose")!==t){if(t!=="rose"&&!Ho(Hl))return E.nope(),$("Not enough carrots yet","carrot");t==="rose"?delete a.dyes[e]:a.dyes[e]=t,y(),lo(),E.carrot(),$(t==="rose"?"Back to original":`Dyed ${Ga[t].name.toLowerCase()}`,"polish"),M()}},buyPack:()=>{if(!Ho(pr))return E.nope(),$("Not enough carrots yet","carrot");lt(1),L().stats.bought++,y(),ba(Zn(3)),M()},plotTap:o=>{const e=+o.dataset.n,t=Bo().plots[e];if(!t)return m3(e);if($e(t)){const a=r2(e);return a&&(i2(a),M())}h3(e)},plant:o=>{c3(+o.dataset.n,o.dataset.k)&&(Jo(),$(`${Ao[o.dataset.k].name} planted`,"seed"),M())},water:()=>{const o=d3();o?(E.step?.(),$(typeof o=="number"?`Watered ${o} ${o===1?"plant":"plants"} \u2661`:"Watered","drop"),M()):$("Already watered today","drop")},visitTap:()=>{const o=p3();o&&(E.carrot(),$(`${o.name} ${o.say.replace(/ \(.*\)/,"")}: +${o.carrots}`,"carrot"),M()),o&&rr(Pt(.3),`${o.name} left you something`)},gardenBook:()=>I3(),buyPlot:()=>{u3()&&M()},pullPlant:o=>{confirm("Pull this plant up? It won't give anything back.")&&(Bo().plots[+o.dataset.n]=null,y(),Jo(),M())},openPack:()=>{const o=Zn(3);o&&(ba(o),M())},albumPage:o=>{P.albumPage=o.dataset.k,M()},earnInfo:o=>{const e=kt(o.dataset.k);e&&$(`${e.name}: earn ${w3(e)}`,e.earn.badge?"trophy":"crown")},craft:o=>{const e=kt(o.dataset.k);if(!e)return;const t=Me[e.r].craft;if(Qo().glitter<t)return E.nope(),$(`${e.name} needs ${t} glitter. You have ${Qo().glitter}`,"glitterjar");if(!confirm(`Make \u201C${e.name}\u201D for ${t} glitter?`))return;const a=y3(e.id);a&&(ba([a],"Made with glitter"),M())},jOpen:o=>lr(o.dataset.k),jOpenToday:()=>lr(A()),jClose:()=>P3(),jTray:o=>{W.tray=o.dataset.k,ze()},jAdd:o=>Fr(o.dataset.t,o.dataset.k),jPol:()=>A3(),jLocked:()=>$("Not found yet. Keep training, gardening + decorating \u2661","lock"),jWordAdd:o=>G2(...ct[+o.dataset.n]),jWord:()=>G2(document.getElementById("jword")?.value,W.lbl),jLblStyle:o=>{const e=document.getElementById("jword")?.value||"";W.lbl=o.dataset.k,ze();const t=document.getElementById("jword");t&&(t.value=e)},jRot:o=>ws(e=>e.r=((e.r||0)+ +o.dataset.n)%360),jSize:o=>ws(e=>e.s=Math.max(.5,Math.min(2.4,Math.round(((e.s||1)+ +o.dataset.n)*100)/100))),jFront:()=>ws((o,e)=>o.z=Math.max(0,...e.items.map(t=>t.z||0))+1),jDel:()=>{ws((o,e)=>e.items.splice(W.sel,1)),W.sel=null,ze()},jPaper:o=>B3(o.dataset.k),jMonth:o=>{P.jMonth=o.dataset.k,M()},boutiqueBuy:o=>{const e=io(o.dataset.id);!e||!confirm(`Buy ${e.name} for ${e.boutique} carrots?`)||q3(e.id)&&(E.badge(),ho(.8),$(`${e.name} is yours`,"bag"),M())},bType:o=>{P.bType=o.dataset.k,P.bPage=0,M()},bShow:o=>{P.bShow=o.dataset.k,P.bPage=0,M()},bPage:o=>{P.bPage=Math.max(0,+o.dataset.n),M()},recaps:()=>ap()}),Va.splice(2,0,["bunny","bunny","Buns"]),Va.find(o=>o[0]==="me")[1]="gear",Vi.bunny=gp;function Jp(){const o=L();for(const e of Z1)o.owned.includes(e)||o.owned.push(e);for(const e of["back","held","aura","pet","amb"])o[e]||(o[e]="none");uo.failed&&f1(),Wr(),Y3();try{Ht()}catch(e){Fs("quests",e)}G1(),Oe(),setTimeout(()=>{uo.failed||L1()},1200),setTimeout(()=>{uo.failed||L().welcome||J2()},2200),new URLSearchParams(location.search).get("dev")==="1"&&(window.__dev={get state(){return i},set state(e){i=e},x:y,M,ct:oe,F:L,Y:x,Ra:ce,bunStage:it,pix:Hn,giveSticker:ga,rollSticker:Un,addPacks:lt,growGarden:n2,harvest:r2,bondAdd:ke,monthStats:cr,recapHtml:dr,maybeRecap:J2,previewSave:El,Nn:Es,oa:Na,$i:en,revalidateQuests:Ht,ls:ca,LOAD:uo,snapList:pa,snapWrite:kl,dt:Io,STICKERS:Pe,Hc:ul,Je:Oo,openJournal:lr,isLucky:Ks,Mt:tt,ie:lo,no:Os,Js:Xs,Qs:Ys,Zs:St,HELD:Ql,PETS:Tl,Zr:Cr,Ps:Gt,XP:jl,AURAS:Kt,AMBS:Wn,ART:Z,artSvg:jo,SEEDS:Ao,stickerSvg:Qe,ambHtml:Is,auraHtml:_l,Te:io,mo:Ca,Ft:Po,bondInfo:te,garden:Bo,stk$:Qo,Rs:To,kit$:Te,kitFind:Pt,kitPop:rr,kitLocked:sr,openPack:Zn,packReveal:ba,harvestPop:i2,doneExtras:I2})}ka(),Ps(),Ue(),xa(),lo({quiet:!0}),wd(),d1(),a1(),Jp();let w2=A();function f2(){A()!==w2&&(w2=A(),P.homeDay=null,Le()||M())}if(setInterval(f2,3e4),document.addEventListener("visibilitychange",()=>{document.hidden||(f2(),Le()&&$n(!0))}),window.addEventListener("beforeinstallprompt",o=>{o.preventDefault(),P.installEvt=o,(P.tab==="home"||P.tab==="me")&&!Le()&&M()}),window.addEventListener("appinstalled",()=>{P.installEvt=null,$("Installed! Find the bunny on your home screen","bunny"),M()}),!Ni){window.caches?.delete("workout-v2").catch(()=>{});const o=Date.now(),e=x2({onNeedRefresh(){if(!Le()&&Date.now()-o<15e3){e(!0);return}const t=document.getElementById("update");t.classList.add("show"),t.querySelector("button").onclick=()=>e(!0)}})}const Rt=new URLSearchParams(location.search),y2=Rt.get("tab")==="guide"?"plans":Rt.get("tab");Rt.get("tab")==="guide"&&(P.plansView="guide"),oe(Va.some(o=>o[0]===y2)?y2:"home"),(Rt.has("tab")||Rt.has("start"))&&history.replaceState(null,"",location.pathname);const ur=i.active,K2=ur&&ur.date===A()&&!i.sessions[ur.date]?.done;Rt.get("start")==="1"?K2?Mn():ca(re(new Date)):K2&&$("Your session is still open. Tap Resume","bow"),i1();
