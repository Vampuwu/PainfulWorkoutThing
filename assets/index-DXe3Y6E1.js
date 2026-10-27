import{D as X}from"./plan-DeATglT2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const Cr="modulepreload",Er=function(e,t){return new URL(e,t).href},Ka={},jn=function(t,s,a){let n=Promise.resolve();if(s&&s.length>0){let r=function(m){return Promise.all(m.map($=>Promise.resolve($).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};const l=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),u=d?.nonce||d?.getAttribute("nonce");n=r(s.map(m=>{if(m=Er(m,a),m in Ka)return;Ka[m]=!0;const $=m.endsWith(".css"),b=$?'[rel="stylesheet"]':"";if(!!a)for(let P=l.length-1;P>=0;P--){const R=l[P];if(R.href===m&&(!$||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${b}`))return;const S=document.createElement("link");if(S.rel=$?"stylesheet":Cr,$||(S.as="script"),S.crossOrigin="",S.href=m,u&&S.setAttribute("nonce",u),document.head.appendChild(S),$)return new Promise((P,R)=>{S.addEventListener("load",P),S.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${m}`)))})}))}function o(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return n.then(r=>{for(const l of r||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};function Br(e={}){const{immediate:t=!1,onNeedReload:s,onNeedRefresh:a,onOfflineReady:n,onRegistered:o,onRegisteredSW:r,onRegisterError:l}=e;let d,u,m;const $=async(w=!0)=>{await u,m?.()};async function b(){if("serviceWorker"in navigator){if(d=await jn(async()=>{const{Workbox:w}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:w}},[],import.meta.url).then(({Workbox:w})=>new w("./sw.js",{scope:"./",type:"classic"})).catch(w=>{l?.(w)}),!d)return;m=()=>{d?.messageSkipWaiting()};{let w=!1;const S=()=>{w=!0,d?.addEventListener("controlling",P=>{P.isUpdate&&(s?s():window.location.reload())}),a?.()};d.addEventListener("installed",P=>{typeof P.isUpdate>"u"?typeof P.isExternal<"u"&&P.isExternal?S():!w&&n?.():P.isUpdate||n?.()}),d.addEventListener("waiting",S)}d.register({immediate:t}).then(w=>{r?r("./sw.js",w):o?.(w)}).catch(w=>{l?.(w)})}}return u=b(),$}const Ne=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],fa=["M","T","W","T","F","S","S"],Vs=e=>String(e).padStart(2,"0"),V=e=>`${e.getFullYear()}-${Vs(e.getMonth()+1)}-${Vs(e.getDate())}`;function Q(e){const[t,s,a]=e.split("-").map(Number);return new Date(t,s-1,a)}function J(e,t){const s=new Date(e.getFullYear(),e.getMonth(),e.getDate());return s.setDate(s.getDate()+t),s}const tt=(e,t)=>Math.round((Q(V(t))-Q(V(e)))/864e5),ht=e=>(e.getDay()+6)%7,fe=e=>J(e,-ht(e)),D=()=>V(new Date),Ee=(e,t)=>Q(e).toLocaleDateString(void 0,t||{day:"numeric",month:"short"});function Dn(e){const t=tt(Q(e),new Date);return t===0?"today":t===1?"yesterday":t<7?`${t} days ago`:Ee(e)}const Nt=e=>(e=Math.max(0,Math.round(e)),`${Math.floor(e/60)}:${Vs(e%60)}`),On="femmeShape.v1";function ds(){return{v:1,name:"",unit:"kg",plan:1,start:null,planLog:[],sessions:{},weights:{},rows:[],tests:[],checks:{dance:[],top:[],goals:{}},active:null,lastBackup:null,timers:!0,cardio:"row",theme:"auto",sound:!0,getReady:!0,restSecs:90,body:{goal:null,log:[]},game:null}}let ga=!0;try{localStorage.setItem("__fs","1"),localStorage.removeItem("__fs")}catch{ga=!1}function Xn(e){const t=ds();return e&&(Object.assign(t,e),t.checks=Object.assign(ds().checks,e.checks||{})),t.timers??(t.timers=!0),t.sound??(t.sound=!0),t.getReady??(t.getReady=!0),t.restSecs||(t.restSecs=90),t.body={goal:null,log:[],...e?.body||{}},t.glow={days:{},custom:[],hidden:[],...e?.glow||{}},t.custom={workouts:[],week:[null,null,null,null,null,null,null],...e?.custom||{}},t.cardio||(t.cardio="row"),t.theme||(t.theme="auto"),t}function Tr(){try{const e=localStorage.getItem(On);return Xn(e?JSON.parse(e):null)}catch{return ds()}}let i=Tr();function x(){try{localStorage.setItem(On,JSON.stringify(i))}catch{ga=!1}}function zr(e){i=Xn(e),x()}function jr(){i=ds(),An(),x()}function An(){i.start||(i.start=V(fe(new Date)),i.planLog=[{plan:i.plan,date:D()}],x())}function wa(){const e=document.documentElement,t=i.theme==="light"||i.theme==="dark";t?e.dataset.theme=i.theme:delete e.dataset.theme,document.querySelector('meta[name="color-scheme"]')?.setAttribute("content",t?`only ${i.theme}`:"light dark"),document.querySelectorAll('meta[name="theme-color"]').forEach(s=>{const a=t?i.theme==="dark":s.media.includes("dark");s.setAttribute("content",a?"#1D1317":"#FAF1F0")})}function Nn(){return JSON.stringify({...i,app:"femme-shape",exported:new Date().toISOString()})}function Dr(e){const t=JSON.parse(e.trim());if(!t||typeof t!="object"||!("sessions"in t))throw new Error("not a backup");return delete t.app,delete t.exported,t}const Or={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},c=e=>String(e??"").replace(/[&<>"']/g,t=>Or[t]);function We(e){try{navigator.vibrate?.(e)}catch{}}const Yn=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,Yt=15,ae=e=>(e||i.plan)===Yt?Ar():X.plans[(e||i.plan)-1],Xr={title:"Rest",flow:"Rest",sections:[],rest:!0},Wt=e=>i.custom.workouts.find(t=>t.id===e);function Wn(e){const t=e.moves.filter(r=>!r.hold),s=e.moves.filter(r=>r.hold),a=r=>({name:r.name,[r.hold?"hold":"sets"]:r.amount||(r.hold?"30 sec":"3 x 10"),steps:r.notes?[r.notes]:[],loaded:!!r.weighted}),n=[];t.length&&n.push({kind:"strength",title:"Workout",meta:"",items:t.map(a),bw:!t.some(r=>r.weighted),notes:[]}),s.length&&n.push({kind:"stretch",title:"Stretch",meta:"",items:s.map(a),notes:[]});const o=[e.warmup?"Warm-up":null,t.length?"Workout":null,s.length?"Stretch":null].filter(Boolean).join(" → ");return{title:e.name,flow:o,sections:n,custom:e.id}}function Ar(){return{n:Yt,name:"My plan",tagline:"Your own week, built from your own workouts. Use it as long as you like.",info:[["Goals","Whatever you decide. Keep showing up."],["Move to next plan","There isn’t one. This one is yours."]],custom:!0,days:i.custom.week.map(e=>Wt(e)?Wn(Wt(e)):Xr)}}const st=e=>e.custom&&Wt(e.custom)?Wn(Wt(e.custom)):ae(e.plan).days[e.day];function ya(e){if(e.title)return e.title;const t=ae(e.plan)?.days[e.day];return t?t.title:"Workout"}function us(e){let t=e.toLowerCase().replace(/^stretch:\s*/,"").replace(/^sunday:\s*rest/,"restorative stretch");return t=t.charAt(0).toUpperCase()+t.slice(1),t.replace(/concept2/i,"Concept2").replace(/strength ([abc])\b/i,(s,a)=>"Strength "+a.toUpperCase())}function Nr(e){return e.kind==="stretch"?"Stretch":e.kind==="row"?"Cardio":e.kind==="test"?"Review":e.title.startsWith("UPPER")?"Upper + core":"Workout"}function In(e){const t=e?.match(/(\d+)(?:\s*-\s*\d+)?\s*(sec|min)/i);return t?+t[1]*(t[2].toLowerCase()==="min"?60:1):0}const Yr=e=>/side/i.test(e||""),Gn=e=>/contract-relax/i.test(e.name);function _n(){const e=i.planLog[i.planLog.length-1],t=fe(Q(e?e.date:D()));return Math.floor(tt(t,new Date)/7)+1}const Hn=()=>Math.floor(tt(Q(i.start),new Date)/7)+1,Ie=()=>Hn()%4===0,ps=e=>/^not yet/i.test(e.hold||e.sets||"")||Ie()&&Gn(e),Vn=(e,t)=>t?`${Math.max(1,e-1)}-${Math.max(1,t-1)}`:`${Math.max(1,e-1)}`,Wr=e=>String(e).replace(/^(\d+)(?:-(\d+))?(\s*x\s)/,(t,s,a,n)=>Vn(+s,a&&+a)+n),Ir=e=>String(e||"").replace(/(\d+)(?:-(\d+))?(\s*(?:rounds|sets))/,(t,s,a,n)=>Vn(+s,a&&+a)+n);function Gr(e){return String(e).replace(/(\d+)(?:\s*-\s*\d+)?\s*(sec|min)/g,(t,s,a)=>{let n=+s*(a==="min"?60:1)*.75;return n=n<20?Math.round(n):n<60?Math.round(n/5)*5:Math.round(n/15)*15,n>=60&&n%60===0?`${n/60} min`:`${n} sec`})}function _r(e,t){const s=t.sets||t.hold;return Ie()?e.kind==="stretch"?Gr(s):Wr(s):s}const Ja=e=>Ie()?Ir(e.meta):e.meta;function $s(e){const t=st(e),s=[];return/^warm-up/i.test(t.flow)&&s.push({kind:"warmup"}),t.sections.forEach((a,n)=>s.push({kind:a.kind,sec:n})),s.push({kind:"done"}),s}function Us(e){const t=e.sections.find(s=>s.kind==="stretch");return t?us(t.title)+(t.meta?" · "+t.meta.replace(/^restorative stretch,\s*/,""):""):""}const Un=e=>me(e.flow).split("→").map(t=>t.trim()),_e=()=>i.cardio==="bike",va=()=>_e()?"bike":"row";function me(e){return!_e()||!e?e:e.replace(/Concept2 row/gi,"Spin bike").replace(/light rowing/gi,"light pedalling").replace(/On row days, the row is your warm-up/,"On bike days, the ride is your warm-up").replace(/\bRow\b/g,"Spin bike").replace(/\brow\b/g,"ride")}const Kn=e=>e.kind==="row"?me(us(e.title)):us(e.title);function Jn(e){return _e()?e.notes.map(t=>t.replace(/\s*\d+-\d+ strokes\/min, damper 3-5\./,"")):e.notes}const Hr=()=>_e()?[X.ref.rowing[3],X.ref.rowing[1]]:X.ref.rowing,ba=e=>e.machine||"row",Qa=["dumbbell","cardio","spark","dumbbell","lotus","cardio","moon"];function Vr(e,t){return Qa[e]!=="cardio"?Qa[e]:ae(t).bw?e===1?"fire":"spark":va()}const Ur=()=>_e()?"ride":"row",Ce=()=>i.noWeights===V(fe(new Date));function Kr(e){i.noWeights=e?V(fe(new Date)):null}const hs=e=>e.loaded||/dumbbell|barbell|goblet/i.test(e.name+" "+e.steps.join(" "));function je(){const e=Object.keys(i.sessions).filter(u=>i.sessions[u].done).sort(),t={cur:0,best:0,savers:0,saved:new Set,total:e.length};if(!e.length)return t;const s=new Set(e),a={};(i.game?.bows||[]).forEach(u=>{a[u]=(a[u]||0)+1});const n=D();let o=Q(e[0]),r=0,l=0,d=0;for(;V(o)<=n;){const u=V(o);a[u]&&(d=Math.min(3,d+a[u])),s.has(u)?(r++,r%7===0&&(d=Math.min(Math.max(2,d),d+1)),l=Math.max(l,r)):u!==n&&(d>0&&r>0?(d--,t.saved.add(u)):r=0),o=J(o,1)}return t.cur=r,t.best=l,t.savers=d,t}function Jr(e){const t=i.sessions[e];return t?t.done?t.day===6?2:3:t.started?1:0:0}const he=e=>!!e&&e.w!=null&&e.w!==""&&+e.w>0;function Qn(e,t){const s=(i.weights[e]||[]).filter(a=>a.d!==t);return s.length?s[s.length-1]:null}function Zn(e,t){const s=(i.weights[e]||[]).filter(a=>a.d!==t&&he(a)).map(a=>+a.w);return s.length?Math.max(...s):null}function Qr(e){return tt(Q(e),new Date)}function Rs(){return Object.keys(i.sessions).filter(e=>i.sessions[e].done).sort()}function ka(){const e=Q(i.start),t=J(new Date,-((new Date().getDay()+6)%7));let s=0,a=0;for(let n=e,o=1;V(n)<=V(t);n=J(n,7),o++){let r=0;for(let u=0;u<7;u++)i.sessions[V(J(n,u))]?.done&&r++;const l=r>=(o%4===0?4:5),d=V(n)===V(t);l?s++:d||(s=0),a=Math.max(a,s)}return{cur:s,best:a}}const Za={o:"#4A2433",O:"#7A4B5E",w:"#FFFFFF",s:"#F1E6EA",S:"#C9B3BD",d:"#7C6470",p:"#FFC2D3",P:"#F48FAE",r:"#D9587F",R:"#8E2F55",h:"#FFF7CF",y:"#FFE27A",Y:"#F2AE3D",u:"#9A5A1A",k:"#FF9F45",K:"#E06A1F",e:"#8E3A12",g:"#A6E08E",G:"#5BAE5E",j:"#2F6E3E",b:"#A9DDF8",B:"#62A9E2",v:"#2F5E98",l:"#DCC9F6",L:"#A585DA",q:"#5C3F92",n:"#D49A6A",N:"#A06A43",z:"#5E3524",c:"#FFF4E6",C:"#E8D3B5",a:"#8B5A3C",m:"#FF6F91",X:"#2B1E2F",x:"#4B3A55",V:"#8E2443"},Zr={home:`
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
.jjjjjjjjjjjjjj`},eo={check:`


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
...xxxxxx`};function ei(e){const t=e.replace(/^\n/,"").split(`
`),s=Math.max(...t.map(a=>a.length));return{rows:t,width:s,height:t.length}}function ti(e,t,s=0,a=0){let n="";return e.forEach((o,r)=>{let l=0;for(;l<o.length;){const d=o[l];if(d==="."||d===" "){l++;continue}let u=l+1;for(;o[u]===d;)u++;n+=`<rect x="${l+s}" y="${r+a}" width="${u-l}" height="1" fill="${t(d)}"/>`,l=u}}),n}function si(e){let t=1/0,s=-1,a=1/0,n=-1;return e.forEach((o,r)=>{[...o].forEach((l,d)=>{l==="."||l===" "||(t=Math.min(t,d),s=Math.max(s,d),a=Math.min(a,r),n=Math.max(n,r))})}),{minX:t,minY:a,w:s-t+1,h:n-a+1}}function to(e,t,s){const{rows:a}=ei(e),n=si(a),o=Math.max(s,n.w,n.h),r=Math.floor((o-n.w)/2)-n.minX,l=Math.floor((o-n.h)/2)-n.minY;return{box:o,body:ti(a,t,r,l)}}const ms=new Map;function Ps(e,{size:t=16,cls:s="",palette:a}={}){const n=Zr[e];if(!n)return"";const o=a?e+JSON.stringify(a):e;let r=ms.get(o);if(!r){const l=a?{...Za,...a}:Za;r=to(n,d=>l[d]||"#000",16),ms.set(o,r)}return`<svg class="px ${s}" width="${t}" height="${t}" viewBox="0 0 ${r.box} ${r.box}" shape-rendering="crispEdges" aria-hidden="true">${r.body}</svg>`}function ai(e,{size:t=18,cls:s=""}={}){const a=eo[e];if(!a)return"";const n="glyph:"+e;let o=ms.get(n);return o||(o=to(a,()=>"currentColor",12),ms.set(n,o)),`<svg class="gl ${s}" width="${t}" height="${t}" viewBox="0 0 ${o.box} ${o.box}" shape-rendering="crispEdges" aria-hidden="true">${o.body}</svg>`}function C(e,{size:t,cls:s=""}={}){return eo[e]?ai(e,{size:t||18,cls:"i "+s}):Ps(e,{size:t||22,cls:"i "+s})}const v=(e,t=22,s="")=>Ps(e,{size:t,cls:s}),Re=(e,t,s)=>`<div class="banner ${e}"><span class="badge">${v(t,22)}</span><div class="banner-text">${s}</div></div>`,xt=(e,t="How to do it")=>`<details class="how"><summary>${v("info",16)}${t}${C("down",{cls:"chev"})}</summary>${e}</details>`,wt=(e,t)=>`<div class="empty"><span class="badge">${v(e,30)}</span>${t}</div>`,$a=(e,t,s,a="chk")=>`<button class="chk ${t?"on":""}" data-act="${a}" data-k="${e}" aria-pressed="${t}" aria-label="Done: ${c(s)}">${C("check",{size:18})}</button>`;function Ve(e){return e.map(t=>`<div class="rule">${t.t?`<b>${c(t.t)}.</b> `:""}${c(t.b)}</div>`).join("")}function js(e,t,s){return`<div class="list">
    ${s?`<div class="li lead"><span class="badge lil">${v("info",22)}</span><div class="grow">${s}</div></div>`:""}
    <details>
      <summary class="li"><span class="t accent">${c(e)}</span>${C("down",{cls:"chev"})}</summary>
      <div class="li-body">${Ve(t)}</div>
    </details>
  </div>`}function so(e){return`<div class="howIn">
    <ol>${e.steps.map(t=>`<li>${c(t)}</li>`).join("")}</ol>
    ${e.feel?`<div class="call feel">${v("heart",16)}<div><b>Feel it:</b> ${c(e.feel)}</div></div>`:""}
    ${e.dont?`<div class="call dont">${v("alert",16)}<div><b>Don’t:</b> ${c(e.dont)}</div></div>`:""}
  </div>`}const Be=(e,t="closeSheet")=>`<div class="between"><h2 class="sheet-title">${e}</h2><button class="iconbtn" data-act="${t}" aria-label="Close">${C("x")}</button></div>`;function xe(e,t=""){const s=document.getElementById("sheet");s.innerHTML=`<div class="sheet ${t}" role="dialog" aria-modal="true"><div class="grab"></div>${e}</div>`,s.classList.add("show")}function Fe(){document.getElementById("sheet").classList.remove("show")}let en;function L(e,t){const s=document.getElementById("toast");s.innerHTML=(t?v(t,18):"")+`<span>${c(e)}</span>`,s.classList.add("show"),clearTimeout(en),en=setTimeout(()=>s.classList.remove("show"),2400)}function Ge(e,{segments:t=20,cls:s=""}={}){const a=Math.round(Math.max(0,Math.min(1,e))*t);let n="";for(let o=0;o<t;o++)n+=`<i class="${o<a?"on":""}"></i>`;return`<div class="pxbar ${s}" style="--n:${t}">${n}</div>`}const Ds=e=>150+60*(e-1),tn=50;function St(e){let t=1,s=e;for(;t<tn&&s>=Ds(t);)s-=Ds(t),t++;if(t===tn)return{level:t,into:0,need:0,fraction:1,max:!0};const a=Ds(t);return{level:t,into:s,need:a,fraction:s/a,max:!1}}const Ks=[[1,"Fluffball"],[3,"Bunny Hopper"],[6,"Bouncy Bean"],[10,"Stretchy Bun"],[15,"Glute Guardian"],[20,"Split Seeker"],[25,"Iron Bunny"],[30,"Moon Hopper"],[40,"Starlight Bun"],[50,"Legend of the Burrow"]];function ao(e){let t=Ks[0][1];for(const[s,a]of Ks)e>=s&&(t=a);return t}function ni(e){return Ks.find(([t])=>t>e)||null}const oi=`


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
......OOOOOOO`,Ct=[[3,13,"p"],[4,13,"p"],[14,13,"p"],[15,13,"p"]],ri=[[8,13,"o"],[10,13,"o"],[9,14,"o"]],Os=[[8,13,"o"],[9,13,"o"],[10,13,"o"],[8,14,"o"],[9,14,"m"],[10,14,"o"]],kt=(e,t)=>[[e,t,"o"],[e+1,t,"o"],[e,t+1,"o"],[e+1,t+1,"o"],[e,t,"e"]],sn=(e,t)=>[[e,t+1,"o"],[e+1,t,"o"],[e+2,t+1,"o"]],an=(e,t)=>[[e,t,"o"],[e+1,t,"o"],[e+2,t,"o"]],nn=(e,t)=>[[e,t,"r"],[e+2,t,"r"],[e,t+1,"r"],[e+1,t+1,"r"],[e+2,t+1,"r"],[e+1,t+2,"r"]],on={idle:[...kt(5,11),...kt(12,11),...Ct,...ri],happy:[...sn(4,11),...sn(12,11),...Ct,...Os],sleepy:[...an(4,12),...an(12,12),...Ct,[9,14,"o"]],love:[...nn(4,11),...nn(12,11),...Ct,...Os],pumped:[...kt(5,11),...kt(12,11),...Ct,...Os,[16,9,"b"],[16,10,"b"],[17,10,"b"],[16,11,"b"]],sad:[...kt(5,11),...kt(12,11),[4,13,"b"],[4,14,"b"],[8,14,"o"],[9,13,"o"],[10,14,"o"]]},no={bow:{name:"Classic bow",art:`

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
...V...........V`},fascinator:{name:"Fascinator",art:`


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
.o.o`}},Js={fangs:{name:"Fangs",art:`












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
...m...........m`}},Qs={cross:{name:"Cross pendant",art:`















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
........uuu`}},Zs={snow:{name:"Snow",w:"#FFFFFF",s:"#EADCE2",p:"#FFB3C7"},peach:{name:"Peach",w:"#FFE1D2",s:"#F4C0AA",p:"#FF9AAE"},sakura:{name:"Sakura",w:"#FFD1DE",s:"#F4A9BF",p:"#FF7FA3"},lilac:{name:"Lilac",w:"#E6D8FA",s:"#C6B0EC",p:"#FFB3C7"},mint:{name:"Mint",w:"#D6F5E3",s:"#ABDFC2",p:"#FFB3C7"},cocoa:{name:"Cocoa",w:"#D7A988",s:"#B9846A",p:"#FFC4CF"},midnight:{name:"Midnight",w:"#5C5379",s:"#463E62",p:"#FF9AB8",o:"#140E1C"},butter:{name:"Butter",w:"#FFF0B8",s:"#F2D98A",p:"#FFB3A7"},sky:{name:"Sky",w:"#CFE9FF",s:"#A5D0F2",p:"#FFB3C7"},galaxy:{name:"Galaxy",w:"#8C7BE6",s:"#6B5AC8",p:"#FF9AE0"},strawberry:{name:"Strawberry",w:"#FFC1C9",s:"#F79AA8",p:"#FF6F91"},matcha:{name:"Matcha",w:"#DCEFC4",s:"#B9D99A",p:"#FFB3C7"},cotton:{name:"Cotton candy",w:"#F5D6F7",s:"#E0B4E6",p:"#FF9AC8"},ocean:{name:"Ocean",w:"#BFE6F0",s:"#94CFE0",p:"#FFB3C7"},latte:{name:"Latte",w:"#EED8C1",s:"#D9BB9C",p:"#FFB8B0"},rose:{name:"Rose gold",w:"#F7D6D0",s:"#E8B4AE",p:"#F28BA8"},raven:{name:"Raven",w:"#5A5266",s:"#463F52",p:"#E58FB0",o:"#140E1C"},ink:{name:"Ink",w:"#3E3249",s:"#2E2438",p:"#E58FB0",o:"#0B0710"},porcelain:{name:"Porcelain",w:"#FBF6F2",s:"#E3D6DC",p:"#E8A0B4"},wine:{name:"Wine",w:"#A24F68",s:"#813852",p:"#FFB3C7",o:"#2B0F1E"},silver:{name:"Silver",w:"#DCD9E4",s:"#B9B5C8",p:"#FFB3C7"},blush:{name:"Blush",w:"#FFE4E8",s:"#F5C2CC",p:"#FF8FA8"},plum:{name:"Plum",w:"#C29BC0",s:"#A27BA0",p:"#FFB3C7"},pearl:{name:"Pearl",w:"#F8F4FF",s:"#DDD3EE",p:"#FFC2D3"},bronze:{name:"Bronze",w:"#E9B98F",s:"#CF9668",p:"#FF9AAE"},honey:{name:"Honey",w:"#FFE6B8",s:"#EFC584",p:"#FF9AAE"}},rn={o:"#4A2433",O:"#7A4B5E",w:"#FFFFFF",s:"#EADCE2",p:"#FFB3C7",P:"#F28BA8",r:"#D9587F",m:"#FF6F91",y:"#FFD966",Y:"#F2A93B",g:"#9EDB86",G:"#4FA65A",b:"#8FD3FF",R:"#8E2F55",u:"#9A5A1A",d:"#7C6470",q:"#5C3F92",L:"#A585DA",l:"#C9B2EE",k:"#FF9F45",B:"#62A9E2",h:"#FFF7CF",j:"#2F6E3E",N:"#A06A43",X:"#2B1E2F",x:"#4B3A55",V:"#8E2443",e:"#FFFFFF",K:"#C42D3D",D:"#A8A4B8"};function Qt(e,t,s){e.forEach((a,n)=>{let o=0;for(;o<a.length;){const r=a[o];if(r==="."||r===" "){o++;continue}let l=o+1;for(;a[l]===r;)l++;s.push(`<rect x="${o}" y="${n}" width="${l-o}" height="1" fill="${t[r]||"#000"}"/>`),o=l}})}const Zt=e=>e.replace(/^\n/,"").split(`
`);function Ra({mood:e="idle",fur:t="snow",outfit:s="bow",face:a="none",neck:n="none",size:o=96,cls:r=""}={}){const l=Zs[t]||Zs.snow,d={...rn,w:l.w,s:l.s,p:l.p,o:l.o||rn.o},u=[],m=[],$=[],b=no[s],w=Zt(oi).map((P,R)=>b?.hideEars&&R<8?"":P);Qt(w,d,m),(on[e]||on.idle).forEach(([P,R,B])=>m.push(`<rect x="${P}" y="${R}" width="1" height="1" fill="${d[B]}"/>`)),Js[a]&&Qt(Zt(Js[a].art),d,$),Qs[n]&&Qt(Zt(Qs[n].art),d,$),b&&Qt(Zt(b.art),d,s==="halo"?u:$);const S=e==="sleepy"&&!b?.hideEars?'<g class="zz" fill="#B3949E"><rect x="1" y="0" width="3" height="1"/><rect x="3" y="1" width="1" height="1"/><rect x="2" y="2" width="1" height="1"/><rect x="1" y="3" width="3" height="1"/></g>':"";return`<svg class="mochi ${r}" width="${o}" height="${o}" viewBox="0 0 19 19" shape-rendering="crispEdges" aria-hidden="true">${u.join("")}<g class="mochi-body">${m.join("")}${$.join("")}</g>${S}</svg>`}const oo={pink:"Pink gingham",garden:"Garden",beach:"Beach day",night:"Starry night",gym:"Home gym",sparkle:"Sparkle dream",bedroom:"Bedroom",cafe:"Cosy cafe",snow:"Snow day",sakura:"Blossom park",sunset:"Sunset",rainy:"Rainy window",gothic:"Gothic parlour",library:"Moody library",boudoir:"Velvet boudoir",gala:"Gala night",opera:"Opera box",cathedral:"Candlelit chapel",penthouse:"Penthouse",salon:"Beauty salon",moonlit:"Moonlit garden"},fs={poster:{name:"Heart poster",slot:"wall"},clock:{name:"Wall clock",slot:"wall"},mirror:{name:"Gold mirror",slot:"wall"},window:{name:"Window",slot:"wall"},lights:{name:"Fairy lights",slot:"wall",css:!0},gothwin:{name:"Moon window",slot:"wall"},plant:{name:"House plant",slot:"left"},cactus:{name:"Cactus",slot:"left"},lamp:{name:"Floor lamp",slot:"left"},beanbag:{name:"Beanbag",slot:"left"},shelf:{name:"Bookshelf",slot:"left"},candelabra:{name:"Candelabra",slot:"left"},crystal:{name:"Crystal ball",slot:"left"},bottle:{name:"Water bottle",slot:"right"},candle:{name:"Candle",slot:"right"},kettle:{name:"Kettlebell",slot:"right"},teddy:{name:"Teddy",slot:"right"},bat:{name:"Bat plush",slot:"right"},chandelier:{name:"Chandelier",slot:"wall"},gramophone:{name:"Gramophone",slot:"right"},coffin:{name:"Coffin shelf",slot:"left"},lilies:{name:"Vase of lilies",slot:"right"},skull:{name:"Cute skull",slot:"right"},roses:{name:"Black roses",slot:"right"},vanity:{name:"Vanity",slot:"right"},perfume:{name:"Perfume",slot:"right"},mannequin:{name:"Dress form",slot:"right"},rug:{name:"Round rug",slot:"rug",css:!0},checker:{name:"Checker rug",slot:"rug",css:!0},cloud:{name:"Cloud rug",slot:"rug",css:!0},yoga:{name:"Yoga mat",slot:"rug",css:!0},lace:{name:"Lace rug",slot:"rug",css:!0}},ii={fur:Zs,outfit:no,face:Js,neck:Qs},y=(e,t,s={})=>({id:`${e==="outfit"?"fit":e}:${t}`,kind:e,key:t,...s}),dt=[y("fur","snow",{price:0}),y("fur","peach",{price:60}),y("fur","sakura",{price:80}),y("fur","butter",{price:90}),y("fur","lilac",{price:100}),y("fur","mint",{price:100}),y("fur","sky",{price:110}),y("fur","latte",{price:120}),y("fur","ocean",{price:130,level:5}),y("fur","cocoa",{price:140}),y("fur","midnight",{price:220,level:8}),y("fur","strawberry",{badge:"st30"}),y("fur","matcha",{badge:"hold200"}),y("fur","cotton",{badge:"run25"}),y("fur","raven",{price:150,level:7}),y("fur","ink",{price:220,level:10}),y("fur","wine",{price:200,level:9}),y("fur","porcelain",{badge:"silk10"}),y("fur","silver",{badge:"heels10"}),y("fur","rose",{badge:"glow30s"}),y("fur","galaxy",{mystery:!0}),y("fur","blush",{badge:"lad_dress"}),y("fur","plum",{badge:"lad_goth"}),y("fur","pearl",{badge:"step20"}),y("fur","honey",{badge:"lad_voice"}),y("fur","bronze",{badge:"lad_strong"}),y("outfit","none",{price:0,name:"Nothing"}),y("outfit","bow",{price:0}),y("outfit","sprout",{price:40}),y("outfit","band",{price:60}),y("outfit","cherry",{price:65}),y("outfit","flower",{price:70}),y("outfit","star",{price:90}),y("outfit","beanie",{price:110}),y("outfit","strawberry",{price:130,level:3}),y("outfit","phones",{price:150,level:6}),y("outfit","witch",{price:160,level:4}),y("outfit","tiara",{price:200,level:12}),y("outfit","crown",{price:250,level:10}),y("outfit","halo",{price:300,level:20}),y("outfit","blackbow",{price:70}),y("outfit","batclip",{price:90}),y("outfit","horns",{price:120,level:5}),y("outfit","fascinator",{price:160,level:8}),y("outfit","pearlclip",{price:110}),y("outfit","rosecrown",{badge:"r10_goth"}),y("outfit","flowercrown",{badge:"dance"}),y("outfit","party",{badge:"q50"}),y("outfit","velvetbow",{badge:"lad_hair"}),y("outfit","rainbow",{mystery:!0}),y("outfit","unicorn",{mystery:!0}),y("face","none",{price:0,name:"Nothing"}),y("face","hearts",{price:50}),y("face","freckles",{price:60}),y("face","stars",{price:80}),y("face","specs",{price:90}),y("face","shades",{price:120,level:5}),y("face","lashes",{badge:"pr25"}),y("face","lipstick",{badge:"makeup1"}),y("face","liner",{badge:"makeup20"}),y("face","darklips",{badge:"out5"}),y("face","fangs",{price:80}),y("face","smoky",{price:100,level:4}),y("face","beautymark",{price:60}),y("face","redlips",{badge:"redlip10"}),y("face","blush",{badge:"skin30"}),y("neck","none",{price:0,name:"Nothing"}),y("neck","bowtie",{price:70}),y("neck","scarf",{price:90}),y("neck","bell",{price:110,level:6}),y("neck","pearls",{badge:"goddess"}),y("neck","medal",{badge:"km42"}),y("neck","choker",{price:90}),y("neck","cross",{price:100}),y("neck","studs",{badge:"allblack10"}),y("neck","diamonds",{badge:"r10_elegant"}),y("neck","locket",{badge:"jewel10"}),y("neck","winechoker",{badge:"lad_nails"}),y("room","pink",{price:0}),y("room","garden",{price:120}),y("room","beach",{price:150,level:3}),y("room","snow",{price:160,level:5}),y("room","rainy",{price:160,level:5}),y("room","night",{price:180,level:7}),y("room","gym",{price:200,level:9}),y("room","cafe",{badge:"early10"}),y("room","bedroom",{badge:"col25"}),y("room","sakura",{badge:"wk12"}),y("room","sunset",{badge:"c50"}),y("room","gothic",{price:190,level:6}),y("room","opera",{price:260,level:10}),y("room","penthouse",{price:280,level:12}),y("room","cathedral",{badge:"ranks50"}),y("room","library",{price:170,level:4}),y("room","sparkle",{mystery:!0}),y("room","boudoir",{badge:"lad_me"}),y("room","gala",{badge:"lad_elegant"}),y("room","salon",{badge:"lad_makeup"}),y("room","moonlit",{badge:"dare10"}),y("decor","poster",{price:60}),y("decor","clock",{price:70}),y("decor","lights",{price:80}),y("decor","window",{price:100}),y("decor","gothwin",{price:140,level:6}),y("decor","mirror",{price:110,level:3}),y("decor","plant",{price:50}),y("decor","cactus",{price:50}),y("decor","lamp",{price:70}),y("decor","beanbag",{price:90}),y("decor","shelf",{price:110}),y("decor","candelabra",{price:130,level:5}),y("decor","crystal",{mystery:!0}),y("decor","bottle",{price:40}),y("decor","candle",{price:50}),y("decor","kettle",{price:60}),y("decor","teddy",{price:80}),y("decor","bat",{price:90}),y("decor","skull",{price:100}),y("decor","coffin",{price:120}),y("decor","chandelier",{price:160,level:6}),y("decor","gramophone",{price:140}),y("decor","lilies",{badge:"moist60"}),y("decor","roses",{price:110}),y("decor","vanity",{badge:"style10"}),y("decor","perfume",{badge:"perfume10"}),y("decor","mannequin",{badge:"dress10"}),y("decor","rug",{price:40}),y("decor","yoga",{price:50}),y("decor","checker",{price:60}),y("decor","cloud",{price:80}),y("decor","lace",{price:100,level:5})].map(e=>({...e,price:e.price??null,name:e.name||(e.kind==="room"?oo[e.key]:e.kind==="decor"?fs[e.key].name:ii[e.kind][e.key].name),slot:e.kind==="decor"?fs[e.key].slot:void 0})),Te=e=>dt.find(t=>t.id===e),ro={fur:"fur",outfit:"outfit",face:"face",neck:"neck",room:"room"},li=4444,ci=500,jt={2:"fit:sprout",4:"room:garden",6:"face:hearts",8:"fur:butter",10:"fit:beanie",12:"room:beach",14:"neck:scarf",15:"face:specs",16:"fur:latte",18:"fur:sky",20:"room:night",22:"face:stars",25:"fit:phones",28:"fur:ocean",30:"room:gym",35:"room:snow",40:"neck:bell",45:"room:rainy",50:"fit:halo"},di=e=>e>30&&e%5===0?100:0,ea=40,Bt=150,Ye=12,es=["The Bunny","The Rose","The Mirror","The Crown","The Bow","The Bat","The Lipstick","The Moon Hare","The Dumbbell","The Locket","The Candle","The Carrot"],ta=500,io=15,sa=150,lo=100,ns=3,gs=80,os=3,aa=70,p=(e,t,s,a,n,o,r)=>({id:e,name:t,desc:s,icon:a,carrots:n,stat:o,target:r}),$t=(e,t,s,a,n,o)=>({id:e,name:t,desc:s,icon:a,carrots:n,test:o}),Pe=[p("first","First hop","Finish your first session","play",10,"sessions",1),p("s10","Ten down","Finish 10 sessions","star",20,"sessions",10),p("s25","Habit formed","Finish 25 sessions","heart",30,"sessions",25),p("s50","Half century","Finish 50 sessions","gem",50,"sessions",50),p("s100","Hundred hops","Finish 100 sessions","crown",80,"sessions",100),p("s250","Lifer","Finish 250 sessions","trophy",150,"sessions",250),p("s500","Burrow legend","Finish 500 sessions","crown",300,"sessions",500),p("st3","Warming up","3-day streak","fire",10,"bestStreak",3),p("st7","Bow earned","7-day streak","bow",20,"bestStreak",7),p("st14","Two weeks strong","14-day streak","fire",30,"bestStreak",14),p("st30","A month of you","30-day streak","cal",60,"bestStreak",30),p("st60","Unstoppable","60-day streak","spark",90,"bestStreak",60),p("st100","Triple digits","100-day streak","crown",150,"bestStreak",100),p("st200","Two hundred days","200-day streak","gem",250,"bestStreak",200),p("st365","A whole year","365-day streak","trophy",500,"bestStreak",365),p("wk4","Consistency","Weekly goal 4 weeks in a row","cal",50,"weekStreak",4),p("wk12","Three months strong","Weekly goal 12 weeks in a row","fire",120,"weekStreak",12),p("wk26","Half a year","Weekly goal 26 weeks in a row","crown",250,"weekStreak",26),p("wk52","Year of yes","Weekly goal 52 weeks in a row","trophy",500,"weekStreak",52),p("week7","Perfect week","Train all 7 days, Monday to Sunday","cal",40,"fullWeeks",1),p("week7x4","Perfect month","4 perfect weeks","spark",120,"fullWeeks",4),p("pr1","Stronger","Set your first personal best","dumbbell",15,"prs",1),p("pr10","PR machine","10 personal bests","trophy",40,"prs",10),p("pr25","Heavy hitter","25 personal bests","gem",80,"prs",25),p("pr50","Powerhouse","50 personal bests","crown",150,"prs",50),p("glute20","Peachy","20 glute days on Plans 1-6","heart",40,"glute",20),p("rev1","Check-in","Save your first review","clip",15,"reviews",1),p("rev4","Glow-up log","Save 4 reviews","scroll",40,"reviews",4),p("rev12","Tracker","Save 12 reviews","chart",80,"reviews",12),p("rev26","Data queen","Save 26 reviews","crown",150,"reviews",26),p("hold50","Hold it","Finish 50 hold timers","timer",30,"timers",50),p("hold200","Bendy","Finish 200 hold timers","lotus",80,"timers",200),p("hold500","Rubber band","Finish 500 hold timers","lotus",150,"timers",500),p("c10","Cardio cutie","Log 10 cardio sessions","heart",25,"cardio",10),p("c25","Cardio regular","Log 25 cardio sessions","heart",50,"cardio",25),p("c50","Heart of gold","Log 50 cardio sessions","heart",90,"cardio",50),p("c100","Endless energy","Log 100 cardio sessions","fire",180,"cardio",100),p("cm300","Five hours","300 minutes of cardio","timer",40,"cardioMin",300),p("cm1000","Heart healthy","1,000 minutes of cardio","heart",100,"cardioMin",1e3),p("cm3000","Iron heart","3,000 minutes of cardio","gem",250,"cardioMin",3e3),p("km10","First ten","10 km of cardio","journey",20,"cardioKm",10),p("km42","Marathon-ish","42 km of cardio","journey",60,"cardioKm",42),p("km100","Century","100 km of cardio","trophy",120,"cardioKm",100),p("km250","Far, far away","250 km of cardio","crown",250,"cardioKm",250),p("row20","Row row row","20 rowing logs","row",50,"row",20),p("bike20","Spin cycle","20 spin bike logs","bike",50,"bike",20),p("walk10","Stroller","10 walks","journey",25,"walk",10),p("walk50","Wanderer","50 walks","journey",90,"walk",50),p("jog10","Jogger","10 jogs","drop",40,"jog",10),p("run5","Off she goes","5 runs","shoe",40,"run",5),p("run25","Runner girl","25 runs","shoe",120,"run",25),p("xc10","Bonus round","Log 10 bonus cardio sessions","heart",40,"extraCardio",10),p("p2","Moving up","Reach Plan 2","book",30,"planMax",2),p("p4","Loaded","Reach Plan 4","dumbbell",50,"planMax",4),p("p7","Floor work","Reach Plan 7","lotus",80,"planMax",7),p("p10","Goddess plan","Reach Plan 10","crown",120,"planMax",10),p("p14","Apex","Reach Plan 14","trophy",200,"planMax",14),$t("dance","Dance ready","Tick off the dance-ready list","spark",60,e=>e.lists.dance),$t("top","Top level","Tick off the top-level list","crown",80,e=>e.lists.top),$t("goddess","Goddess list","Tick off the goddess list","crown",100,e=>e.lists.goddess),$t("apex","Apex list","Tick off the apex list","trophy",150,e=>e.lists.apex),p("early","Early bunny","Finish a session before 8am","sun",15,"early",1),p("early10","Sunrise club","10 sessions before 8am","sun",60,"early",10),p("night","Night owl","Finish a session after 9pm","moon",15,"night",1),p("night10","Moonlight club","10 sessions after 9pm","moon",60,"night",10),$t("comeback","Comeback","Train again after a few days off","heart",20,e=>e.comeback),$t("goalw","Goal getter","Reach your goal weight","journey",60,e=>e.bodyGoal),p("weigh8","Check-in queen","8 weekly weigh-ins","heart",30,"weighIns",8),p("q10","Quester","Finish 10 daily quests","scroll",20,"quests",10),p("q50","Quest cutie","Finish 50 daily quests","scroll",60,"quests",50),p("q200","Quest queen","Finish 200 daily quests","crown",150,"quests",200),p("ch10","Treasure","Open 10 quest chests","box",50,"chests",10),p("gift30","Gift bunny","Unwrap 30 daily gifts","gift",60,"gifts",30),p("shop1","Dressed up","Buy Biscuit something","bag",5,"bought",1),p("col10","Fashionista","Collect 10 wardrobe items","bag",40,"owned",10),p("col25","Full closet","Collect 25 wardrobe items","crown",100,"owned",25),p("col40","Style icon","Collect 40 wardrobe items","gem",200,"owned",40),p("mystery","Surprise!","Open a mystery box","gift",10,"mystery",1),p("mystery10","Lucky bunny","Open 10 mystery boxes","gift",60,"mystery",10),p("lvl5","Level 5","Reach level 5","gem",20,"level",5),p("lvl10","Level 10","Reach level 10","gem",40,"level",10),p("lvl25","Level 25","Reach level 25","gem",100,"level",25),p("lvl40","Level 40","Reach level 40","crown",200,"level",40),p("lvl50","Level 50","Reach level 50","trophy",400,"level",50),p("pres1","Prestige","Prestige for the first time","heart",500,"prestige",1),p("pres5","Prestige V","Prestige 5 times","heart",1e3,"prestige",5),p("glow1","Glow up begins","A day with 3+ self-care ticks","spark",10,"glowDays",1),p("glow7s","Glow week","7-day self-care streak","spark",40,"glowStreak",7),p("glow30s","Glow month","30-day self-care streak","gem",120,"glowStreak",30),p("glow100","Radiant","100 self-care days","crown",200,"glowDays",100),p("moist60","Dewy","Moisturise 60 times","drop",60,"moist",60),p("floss30","Flossy","Floss 30 times","spark",40,"floss",30),p("vits60","Vitamin bunny","Take vitamins 60 times","heart",50,"vits",60),p("sleep30","Beauty sleep","In bed on time 30 nights","moon",60,"sleep",30),p("hairc30","Silky","Look after your hair 30 times","mirror",50,"haircare",30),p("am100","Morning ritual","100 morning skincare routines","sun",120,"am",100),p("glow365","A year of glow","365 self-care days","crown",500,"glowDays",365),p("glow100s","Glow century","100-day self-care streak","crown",500,"glowStreak",100),p("skin30","Skincare devotee","30 night skincare routines","moon",60,"pm",30),p("teeth60","Pearly whites","Brush your teeth 60 times","spark",40,"teeth",60),p("water30","Hydrated","Drink enough water 30 days","drop",40,"water",30),p("spf30","Sun safe","Wear SPF 30 days","sun",40,"spf",30),p("dress1","Dress debut","Wear a dress","dress",20,"dress",1),p("dress10","Dress darling","Wear a dress or skirt 10 times","dress",60,"dresses",10),p("hair10","Hair day","Do your hair 10 times","mirror",40,"hair",10),p("haircut1","Fresh cut","Get a new haircut or style","mirror",30,"haircut",1),p("makeup1","Makeup debut","Wear makeup","lipstick",20,"makeup",1),p("makeup20","Beat face","Wear makeup 20 times","lipstick",80,"makeup",20),p("out5","Out and about","Wear makeup out 5 times","lipstick",60,"makeupout",5),p("nails5","Nailed it","Do your nails 5 times","polish",40,"nails",5),p("perfume10","Signature scent","Wear perfume 10 times","perfume",50,"perfume",10),p("jewel10","Adorned","Wear jewellery 10 times","gem",50,"jewel",10),p("pamper5","Pamper night","5 pamper nights","candle",40,"pamper",5),p("photo5","Camera ready","Take 5 photos you like of yourself","heart",40,"photo",5),p("style10","New era","10 days of style ticks","bow",60,"styleDays",10),p("style50","It girl","50 days of style ticks","crown",150,"styleDays",50),p("style100","Main character","100 days of style ticks","crown",300,"styleDays",100),p("firsts8","Trying it all","Try 8 different style things","star",80,"firsts",8),p("step1","Brave little bunny","Tick your first first","heart",15,"steps",1),p("step10","Blossoming","Tick 10 firsts","bow",80,"steps",10),p("step20","In full bloom","Tick 20 firsts","roses",160,"steps",20),p("step30","Thirty firsts","Tick 30 firsts","crown",300,"steps",30),p("step45","Every first","Tick all 45 firsts","crown",600,"steps",45),p("lad_elegant","Elegance ladder","Finish the elegant ladder","gem",100,"lad_elegant",5),p("lad_strong","Strength ladder","Finish the strong & fit ladder","dumbbell",100,"lad_strong",5),p("lad_voice","Voice ladder","Finish the voice ladder","speaker",100,"lad_voice",5),p("voice10","Warming up","10 voice practices","speaker",50,"voice",10),p("voice50","Found my voice","50 voice practices","speaker",200,"voice",50),p("lad_dress","Dress ladder","Finish the dresses & skirts ladder","dress",100,"lad_dress",5),p("lad_makeup","Makeup ladder","Finish the makeup ladder","lipstick",100,"lad_makeup",5),p("lad_hair","Hair ladder","Finish the hair ladder","mirror",100,"lad_hair",5),p("lad_nails","Nails & scent ladder","Finish the nails & scent ladder","polish",100,"lad_nails",5),p("lad_goth","Dark femme ladder","Finish the dark femme ladder","roses",100,"lad_goth",5),p("lad_me","Confidence ladder","Finish the confidence ladder","heart",100,"lad_me",5),p("wins25","Feeling pretty","25 feminine wins","bow",50,"wins",25),p("wins100","Pretty often","100 feminine wins","gem",150,"wins",100),p("wins365","Living it","365 feminine wins","crown",400,"wins",365),p("dare1","Dared","Do a tiny dare","star",15,"dares",1),p("dare10","Daring","Do 10 tiny dares","star",80,"dares",10),p("dare50","Fearless","Do 50 tiny dares","crown",250,"dares",50),p("grad1","Second nature","Make one win yours (10 times)","heart",60,"graduated",1),p("grad5","New normal","Make 5 wins yours","gem",200,"graduated",5),p("grad10","Second skin","Make 10 wins yours","crown",400,"graduated",10),p("combo1","Double glow","Workout and a femme win on the same day","spark",15,"combo",1),p("combo10","Pretty strong","10 workout + win days","dumbbell",80,"combo",10),p("combo50","Iron and lace","50 workout + win days","roses",250,"combo",50),p("treat1","First nibble","Give Biscuit a treat","cake",5,"treats",1),p("treat25","Spoilt rotten","Give 25 treats","cake",40,"treats",25),p("treat100","Bakery regular","Give 100 treats","cake",100,"treats",100),p("treat500","Patisserie patron","Give 500 treats","cake",300,"treats",500),p("cake10","Sugar rush","Eat 10 carrot cakes","cake",60,"cakes",10),p("stars1","Stargazer","Finish a constellation","star",50,"constellations",1),p("stars5","Night sky","Finish 5 constellations","star",200,"constellations",5),p("stars12","Whole zodiac","Finish 12 constellations","moon",500,"constellations",12),p("month1","Month queen","Finish a femme monthly theme","cal",60,"months",1),p("month6","Six themes","Finish 6 femme monthly themes","cal",200,"months",6),p("month12","Full year","Finish 12 femme monthly themes","crown",500,"months",12),p("proof1","On the record","Save a moment to your evidence file","scroll",15,"proof",1),p("proof25","Case closed","25 moments in your evidence file","scroll",120,"proof",25),p("fstreak7","Never twice","7 win days without missing twice","bow",50,"femmeStreak",7),p("fstreak30","Habit formed","30 win days without missing twice","gem",200,"femmeStreak",30),p("fstreak100","Who she is","100 win days without missing twice","crown",500,"femmeStreak",100),p("fit1","Monthly mover","Finish a fitness month challenge","dumbbell",60,"fitMonths",1),p("fit6","Half a year strong","Finish 6 fitness month challenges","dumbbell",200,"fitMonths",6),p("fit12","Twelve strong months","Finish 12 fitness month challenges","trophy",500,"fitMonths",12),p("year1","Big goal","Hit one of the year’s goals","trophy",150,"yearGoals",1),p("year5","Big five","Hit 5 yearly goals","crown",400,"yearGoals",5),p("yearall","Her year","Hit every goal in one year","crown",1e3,"yearAll",1),p("r10_dress","Dress rank 10","Reach rank 10 on dress","dress",120,"rank_dress",10),p("r10_makeup","Makeup rank 10","Reach rank 10 on makeup","lipstick",120,"rank_makeup",10),p("r10_hair","Hair rank 10","Reach rank 10 on hair","mirror",120,"rank_hair",10),p("r10_nails","Nails & scent rank 10","Reach rank 10 on nails & scent","polish",120,"rank_nails",10),p("r10_elegant","Elegant rank 10","Reach rank 10 on elegant","gem",120,"rank_elegant",10),p("r10_strong","Strong & fit rank 10","Reach rank 10 on strong & fit","dumbbell",120,"rank_strong",10),p("r10_goth","Dark femme rank 10","Reach rank 10 on dark femme","roses",120,"rank_goth",10),p("r10_voice","Voice rank 10","Reach rank 10 on voice","speaker",120,"rank_voice",10),p("r10_me","Confidence rank 10","Reach rank 10 on confidence","heart",120,"rank_me",10),p("r25_dress","Dress rank 25","Reach rank 25 on dress","dress",300,"rank_dress",25),p("r25_makeup","Makeup rank 25","Reach rank 25 on makeup","lipstick",300,"rank_makeup",25),p("r25_hair","Hair rank 25","Reach rank 25 on hair","mirror",300,"rank_hair",25),p("r25_nails","Nails & scent rank 25","Reach rank 25 on nails & scent","polish",300,"rank_nails",25),p("r25_elegant","Elegant rank 25","Reach rank 25 on elegant","gem",300,"rank_elegant",25),p("r25_strong","Strong & fit rank 25","Reach rank 25 on strong & fit","dumbbell",300,"rank_strong",25),p("r25_goth","Dark femme rank 25","Reach rank 25 on dark femme","roses",300,"rank_goth",25),p("r25_voice","Voice rank 25","Reach rank 25 on voice","speaker",300,"rank_voice",25),p("r25_me","Confidence rank 25","Reach rank 25 on confidence","heart",300,"rank_me",25),p("redlip10","Red lip regular","Wear a red or dark lip 10 times","lipstick",60,"redlip",10),p("allblack10","All black everything","Wear all black 10 times","roses",60,"allblack",10),p("silk10","Silk and satin","Wear silk, satin or velvet 10 times","gem",60,"silk",10),p("heels10","Heels on","Wear heels or boots that feel powerful 10 times","shoe",60,"heels",10),p("ranks10","Becoming","10 ladder ranks in total","spark",60,"ranks",10),p("ranks50","Many sides","50 ladder ranks in total","gem",250,"ranks",50),p("ranks150","All of her","150 ladder ranks in total","crown",600,"ranks",150),p("spent10k","Big spender","Spend 10,000 carrots","carrot",200,"spent",1e4)].map(e=>({...e,reward:dt.find(t=>t.badge===e.id)?.id||null})),f=(e,t,s,a,n,o="common")=>({id:e,name:t,how:s,stat:a,target:n,rarity:o}),at=[f("fluffball","Fluffball","Level 1","level",1),f("hopper","Bunny Hopper","Level 3","level",3),f("bean","Bouncy Bean","Level 6","level",6),f("stretchy","Stretchy Bun","Level 10","level",10),f("guardian","Glute Guardian","Level 15","level",15),f("seeker","Split Seeker","Level 20","level",20),f("iron","Iron Bunny","Level 25","level",25,"rare"),f("moon","Moon Hopper","Level 30","level",30,"rare"),f("starlight","Starlight Bun","Level 40","level",40,"epic"),f("legend","Legend of the Burrow","Level 50","level",50,"epic"),f("gym","Gym Bunny","Finish 25 sessions","sessions",25),f("hundred","Hundred-Hop Honey","Finish 100 sessions","sessions",100,"rare"),f("strongbun","Strong Little Bun","Set a personal best","prs",1),f("muscle","Muscle Bunny","10 personal bests","prs",10),f("powerpuff","Powerpuff Bun","25 personal bests","prs",25,"rare"),f("peachy","Peachy Bun","20 glute days","glute",20),f("cardio","Cardio Bunny","Log 10 cardio sessions","cardio",10),f("hearty","Heart-Healthy Honey","1,000 minutes of cardio","cardioMin",1e3,"rare"),f("marathon","Marathon Bunny","42 km of cardio","cardioKm",42,"rare"),f("rower","Row Row Bunny","20 rowing logs","row",20),f("spin","Spin Queen","20 spin bike logs","bike",20),f("stroll","Stroll Sweetie","10 walks","walk",10),f("jelly","Jogging Jellybean","10 jogs","jog",10),f("speedy","Speedy Bun","5 runs","run",5),f("neverskip","Never-Skip Bunny","14-day streak","bestStreak",14),f("unstoppable","Unstoppable Bun","30-day streak","bestStreak",30,"rare"),f("forever","Forever Bunny","100-day streak","bestStreak",100,"epic"),f("consistent","Consistency Queen","Weekly goal 4 weeks running","weekStreak",4),f("habit","Habit Honey","Weekly goal 12 weeks running","weekStreak",12,"rare"),f("perfect","Perfect Week Princess","A perfect week","fullWeeks",1),f("earlybird","Early Bird Bunny","10 sessions before 8am","early",10),f("midnight","Midnight Bunny","10 sessions after 9pm","night",10),f("comeback","Comeback Cutie","Come back after a break","comeback",1),f("flexi","Flexi Fluff","Save 4 reviews","reviews",4),f("holdqueen","Hold Queen","Finish 200 hold timers","timers",200),f("floor","Floor Fairy","Reach Plan 7","planMax",7),f("splits","Splits Princess","Reach Plan 6","planMax",6),f("dancequeen","Dance Queen","Tick off the dance-ready list","danceList",1),f("topbun","Top Bunny","Tick off the top-level list","topList",1),f("goddess","Goddess Bunny","Tick off the goddess list","goddessList",1,"rare"),f("apex","Apex Bunny","Tick off the apex list","apexList",1,"epic"),f("glowup","Glow-Up Girl","Reach your goal weight","bodyGoal",1),f("weighin","Weigh-in Sweetie","8 weekly weigh-ins","weighIns",8),f("questcutie","Quest Cutie","Finish 30 daily quests","quests",30),f("treasure","Treasure Bunny","Open 10 quest chests","chests",10),f("fashion","Fashion Bunny","Collect 10 wardrobe items","owned",10),f("closet","Closet Queen","Collect 25 wardrobe items","owned",25,"rare"),f("lucky","Lucky Bunny","Open 5 mystery boxes","mystery",5),f("cottontail","Cottontail Champion","Earn 50 badges","badges",50,"epic"),f("glowgetter","Glow Getter","7 self-care days","glowDays",7),f("wellrested","Well Rested","In bed on time 30 nights","sleep",30),f("dewy","Dewy Bunny","Moisturise 60 times","moist",60,"rare"),f("ritual","Ritual Keeper","60-day self-care streak","glowStreak",60,"epic"),f("saint","Self-Care Saint","365 self-care days","glowDays",365,"legendary"),f("devotee","Skincare Devotee","30 night routines","pm",30),f("softgoth","Soft Goth","10 days of style ticks","styleDays",10),f("velvet","Velvet Bunny","Wear a dress or skirt 10 times","dresses",10),f("lipstickbun","Lipstick Bunny","Wear makeup 10 times","makeup",10),f("romantic","Dark Romantic","Wear makeup out 10 times","makeupout",10,"rare"),f("hairday","Hair Day Bunny","Do your hair 20 times","hair",20),f("curious","Curious Bunny","Try 8 different style things","firsts",8),f("muse","Moonlit Muse","30-day self-care streak","glowStreak",30,"rare"),f("itgirl","It Girl","50 days of style ticks","styleDays",50,"epic"),f("maincharacter","Main Character","100 days of style ticks","styleDays",100,"epic"),f("radiant","Radiant Goddess","200 self-care days","glowDays",200,"legendary"),f("eternalglow","Eternal Glow","100-day self-care streak","glowStreak",100,"legendary"),f("sundress","Sundress Bunny","Finish the dresses & skirts ladder","lad_dress",5,"rare"),f("rouge","Rouge Rabbit","Finish the makeup ladder","lad_makeup",5,"rare"),f("ribbon","Silk Ribbon Bunny","Finish the hair ladder","lad_hair",5,"rare"),f("velvetpaws","Velvet Paws","Finish the nails & scent ladder","lad_nails",5,"rare"),f("gothbelle","Gothic Belle","Finish the dark femme ladder","lad_goth",5,"rare"),f("unapologetic","Unapologetic","Finish the confidence ladder","lad_me",5,"epic"),f("blossoming","Blossoming Bunny","Tick 10 firsts","steps",10),f("femmefatale","Femme Fatale","Tick 20 firsts","steps",20,"epic"),f("bloomed","Fully Bloomed","Tick all 45 firsts","steps",45,"legendary"),f("classic","Classic Beauty","Finish the elegant ladder","lad_elegant",5,"rare"),f("powerhouse","Powerhouse","Finish the strong & fit ladder","lad_strong",5,"epic"),f("allofit","Soft, Dark & Strong","Finish the dark femme, elegant and strong ladders","triad",1,"legendary"),f("velvetvoice","Velvet Voice","Finish the voice ladder","lad_voice",5,"rare"),f("honeyed","Honeyed Voice","50 voice practices","voice",50,"epic"),f("effortless","Effortlessly Pretty","100 feminine wins","wins",100,"epic"),f("divine","Divine Feminine","365 feminine wins","wins",365,"legendary"),f("daring","Daring Bunny","Do 10 tiny dares","dares",10,"rare"),f("fearless","Fearless","Do 50 tiny dares","dares",50,"epic"),f("secondnature","Second Nature","Make 5 wins yours","graduated",5,"rare"),f("secondskin","Second Skin","Make 10 wins yours","graduated",10,"legendary"),f("prettystrong","Pretty Strong","10 workout + win days","combo",10,"rare"),f("ironlace","Iron & Lace","50 workout + win days","combo",50,"epic"),f("venus","Venus Rising","150 workout + win days","combo",150,"legendary"),f("stargazer","Stargazer","Finish a constellation","constellations",1),f("starkeeper","Star Keeper","Finish 5 constellations","constellations",5,"epic"),f("nightsky","Keeper of the Night Sky","Finish 12 constellations","constellations",12,"legendary"),f("proofpositive","Proof Positive","25 moments in your evidence file","proof",25,"rare"),f("nevertwice","Never Twice","30 win days without missing twice","femmeStreak",30,"epic"),f("thisisher","This Is Her Now","100 win days without missing twice","femmeStreak",100,"legendary"),f("monthlymover","Monthly Mover","Finish 3 fitness month challenges","fitMonths",3),f("ironyear","Iron Year","Finish 12 fitness month challenges","fitMonths",12,"legendary"),f("goalgetter","Goal Getter","Hit a yearly goal","yearGoals",1,"rare"),f("womanofyear","Woman of the Year","Hit every goal in one year","yearAll",1,"legendary"),f("decade","Timeless","Hit every goal in three different years","yearAll",3,"legendary"),f("seasonqueen","Season Queen","Finish 6 monthly themes","months",6,"epic"),f("yearofher","Year of Her","Finish 12 monthly themes","months",12,"legendary"),f("becoming","Becoming","10 ladder ranks in total","ranks",10),f("manyfaceted","Many-Faceted","50 ladder ranks in total","ranks",50,"epic"),f("renaissance","Renaissance Bunny","150 ladder ranks in total","ranks",150,"legendary"),f("iconic","Simply Iconic","Reach rank 20 on any ladder","topRank",20,"epic"),f("vampire","Vampire Bunny","Rank 5 on dark femme","rank_goth",5,"rare"),f("nightqueen","Queen of the Night","Rank 10 on dark femme","rank_goth",10,"epic"),f("darkqueen","Dark Queen","Rank 20 on dark femme","rank_goth",20,"legendary"),f("velvetmenace","Velvet Menace","Wear all black 25 times","allblack",25,"epic"),f("siren","Classic Siren","Wear a red or dark lip 25 times","redlip",25,"epic"),f("silksmoke","Silk & Smoke","Wear silk, satin or velvet 15 times","silk",15,"rare"),f("lady","Lady of the Manor","Rank 10 on elegant","rank_elegant",10,"epic"),f("grace","Effortless Grace","Rank 20 on elegant","rank_elegant",20,"legendary"),f("wardrobewitch","Wardrobe Witch","Rank 10 on dresses & skirts","rank_dress",10,"epic"),f("paintedlady","Painted Lady","Rank 10 on makeup","rank_makeup",10,"epic"),f("crowning","Crowning Glory","Rank 10 on hair","rank_hair",10,"epic"),f("perfumed","Perfumed Bunny","Rank 10 on nails & scent","rank_nails",10,"rare"),f("gymsiren","Gym Siren","Rank 10 on strong & fit","rank_strong",10,"epic"),f("ironvenus","Iron Venus","Rank 20 on strong & fit","rank_strong",20,"legendary"),f("sweettalker","Sweet Talker","Rank 10 on voice","rank_voice",10,"epic"),f("magnetic","Magnetic","Rank 10 on confidence","rank_me",10,"epic"),f("spoilt","Spoilt Bunny","Give Biscuit 25 treats","treats",25),f("sweettooth","Sweet Tooth","Eat 10 carrot cakes","cakes",10,"rare"),f("tycoon","Carrot Tycoon","Spend 25,000 carrots","spent",25e3,"epic"),f("baroness","Carrot Baroness","Spend 100,000 carrots","spent",1e5,"legendary"),f("queen","Queen of the Burrow","Finish the apex list","apexList",1,"legendary"),f("unbreakable","Unbreakable","365-day streak","bestStreak",365,"legendary"),f("thousand","Thousand-Hop Goddess","Finish 1,000 sessions","sessions",1e3,"legendary"),f("marathonqueen","Marathon Queen","250 km of cardio","cardioKm",250,"legendary"),f("yearofyes","The Bunny Who Never Quit","Weekly goal 52 weeks running","weekStreak",52,"legendary"),f("royalty","Wardrobe Royalty","Own every buyable and earnable item","owned",0,"legendary"),f("empress","Badge Empress","Earn every other badge","badges",0,"legendary"),f("reborn","Reborn Bunny","Prestige once","prestige",1,"epic"),f("mythic","Mythic Cottontail","Prestige 3 times","prestige",3,"legendary"),f("celestial","Celestial Bunny","Prestige 5 times","prestige",5,"legendary"),f("moongoddess","Moonlit Goddess","Prestige 10 times","prestige",10,"legendary"),f("bunnyempress","Bunny Empress","Prestige 25 times","prestige",25,"legendary"),f("blossom","Eternal Blossom","Prestige 100 times","prestige",100,"legendary"),f("starborn","Starborn Queen","Prestige 444 times","prestige",444,"legendary"),f("burrowgoddess","Goddess of the Burrow","Prestige 1,000 times","prestige",1e3,"legendary"),f("infinite","Infinite Bunny","Reach prestige 4,444","prestige",4444,"legendary")];at.find(e=>e.id==="royalty").target=dt.filter(e=>e.price!==0&&!e.mystery).length;at.find(e=>e.id==="empress").target=Pe.length;const ln=["You showed up. That’s the hard part.","Glutes: activated.","I believe in you and your hamstrings.","Slow reps, big gains.","Water break? Water break ( ˙▿˙ )","Proud of you, honestly (˶ᵔ ᵕ ᵔ˶)","Tiny steps still count as steps.","Your future self says thanks.","Stretch now, splits later.","Carrots for the strong ( ◕ᴗ◕)っ🥕"],ui="Biscuit";function cn(){return{xp:0,carrots:0,bunny:ui,fur:"snow",outfit:"bow",face:"none",neck:"none",room:"pink",title:null,titles:{},decor:{},prestige:0,lifetimeXp:0,owned:["fur:snow","fit:bow","fit:none","face:none","neck:none","room:pink"],badges:{},quests:null,weekly:{},gifts:{},bows:[],awarded:{},stats:{timers:0,bought:0,mystery:0,quests:0,chests:0,gifts:0,treats:0,cakes:0,spent:0},cakes:0,fed:null,stars:0,welcome:null}}function co(){let e=0;for(const t of Object.values(i.weights)){let s=null;for(const a of t){if(!he(a))continue;const n=+a.w;s!=null&&n>s&&e++,s=s==null?n:Math.max(s,n)}}return e}function pi(e){const t=Object.values(i.sessions).filter(l=>l.done),s=Object.values(i.weights).flat().filter(he).length,a=Object.values(i.checks.goals||{}).flat().filter(Boolean).length,n=["dance","top","goddess","apex"].reduce((l,d)=>l+(i.checks[d]||[]).filter(Boolean).length,0),o=co(),r=t.length*140+s*5+o*40+i.rows.length*20+i.tests.length*60+a*50+n*25;e.xp=r,e.carrots=Math.min(150,t.length*4+o*2),Object.keys(i.sessions).forEach(l=>{i.sessions[l].done&&(e.awarded[`${l}:session`]=!0)}),Object.entries(i.checks.goals||{}).forEach(([l,d])=>d.forEach((u,m)=>{u&&(e.awarded[`goal:${l}:${m}`]=!0)})),r>0&&(e.welcome={xp:r,carrots:e.carrots,sessions:t.length})}function xs(){i.game||(i.game=cn(),pi(i.game),x());const e=i.game,t=cn();for(const a of Object.keys(t))e[a]??(e[a]=t[a]);e.stats={...t.stats,...e.stats};for(const a of["face:none","neck:none","room:pink"])e.owned.includes(a)||e.owned.push(a);e.owned.includes("fit:shades")&&(e.owned=e.owned.filter(a=>a!=="fit:shades"),e.owned.includes("face:shades")||e.owned.push("face:shades"));const s=new Date(Date.now()-60*864e5).toISOString().slice(0,10);for(const a of Object.keys(e.awarded)){const n=a.match(/^(glow|glowday|xcardio):(\d{4}-\d{2}-\d{2})/);n&&n[2]<s&&delete e.awarded[a]}return e.outfit==="shades"&&(e.outfit="none",e.face="shades"),e}const F=()=>i.game||xs(),nt=()=>St(F().xp),uo=new Set,hi=e=>uo.add(e),ut=e=>uo.forEach(t=>t(e));function Y(e,t=0,s="",{quiet:a=!1,origin:n}={}){var d;const o=F(),r=St(o.xp).level;o.xp+=e,o.carrots+=t;const l=St(o.xp).level;if(s&&i.active&&((d=i.active).tally||(d.tally=[])).push({reason:s,xp:e,carrots:t}),x(),a||ut({type:"gain",xp:e,carrots:t,reason:s,origin:n}),l>r){let u=25*(l-r);const m=[];for(let $=r+1;$<=l;$++){u+=di($);const b=jt[$];b&&!o.owned.includes(b)&&(o.owned.push(b),m.push(Te(b)))}o.carrots+=u,x(),ut({type:"level",level:l,bonus:u,unlocked:m})}ut({type:"changed"})}function mi(){const e=F();return!St(e.xp).max||e.prestige>=li?!1:(e.prestige++,e.lifetimeXp+=e.xp,e.xp=0,e.carrots+=ci,x(),ut({type:"prestige",count:e.prestige}),ut({type:"changed"}),!0)}const fi=()=>F().lifetimeXp+F().xp;function Lt(e){const t=F();return t.carrots<e?!1:(t.carrots-=e,t.stats.spent+=e,x(),ut({type:"changed"}),!0)}function Dt(e){ut(e)}function se(e){const t=F();return t.awarded[e]?!1:(t.awarded[e]=!0,!0)}function Pa(){const e=new Date().getHours();if(i.sessions[D()]?.done)return"happy";if(e>=22||e<6)return"sleepy";if(F().fed===D())return"love";const t=Rs();return t.length&&Qr(t[t.length-1])>=3?"sad":"idle"}function De({mood:e,size:t=96,cls:s=""}={}){const a=F();return Ra({mood:e||Pa(),fur:a.fur,outfit:a.outfit,face:a.face,neck:a.neck,size:t,cls:s})}const re=()=>F().bunny||"Biscuit";function gi(){const e=F(),t=e.title&&e.titles[e.title]&&at.find(s=>s.id===e.title);return t?t.name:ao(nt().level)}function po(){const e=F();return`<span class="player-title r-${(e.title&&e.titles[e.title]&&at.find(s=>s.id===e.title))?.rarity||"common"}">${c(gi())}</span>`}function ho(e=""){const t=nt(),s=F().prestige;return`<span class="lv ${e}"><small>${t.max?"MAX":"LV"}</small>${t.level}</span>${s?`<span class="pheart ${e}" title="Prestige ${s}">${Ps("heart",{size:e?52:42})}<b>${s}</b></span>`:""}`}function mo(e=F().room,t){const s={...F().decor[e]||{},...t||{}};return Object.entries(s).filter(([,a])=>a&&fs[a]).map(([a,n])=>fs[n].css?`<span class="dec dec-${a} css-${n}"></span>`:`<span class="dec dec-${a}">${Ps(n,{size:a==="wall"?60:76})}</span>`).join("")}const wi=30,yi=5,fo=[{id:"perfect",icon:"star",target:1,text:()=>"Tick every move in one step",when:e=>e.hasStrength||e.hasStretch},{id:"lift",icon:"dumbbell",target:3,text:()=>"Log a weight on 3 moves",when:e=>e.loaded},{id:"beat",icon:"trophy",target:1,text:()=>"Beat a number from last time",when:e=>e.loaded},{id:"timer",icon:"timer",target:3,text:()=>"Finish 3 hold timers",when:e=>e.hasStretch&&i.timers},{id:"cardio",icon:()=>ae().bw?"heart":_e()?"bike":"row",target:1,text:()=>ae().bw?"Log some bonus cardio":`Log your ${Ur()}`,when:e=>e.hasCardio||e.bw},{id:"stretch",icon:"lotus",target:1,text:()=>"Finish the stretch step",when:e=>e.hasStretch},{id:"review",icon:"clip",target:1,text:()=>"Fill in your review",when:e=>e.hasTest},{id:"early",icon:"sun",target:1,text:()=>"Start before 10am",when:e=>e.hour<9},{id:"pet",icon:"heart",target:1,text:()=>`Give ${re()} a pat`,when:()=>!0}],na=[{id:"glow",icon:"spark",target:3,text:()=>"Tick 3 self-care things"},{id:"femme",icon:"bow",target:1,text:()=>"Tick a femme win in Glow"},{id:"dare",icon:"star",target:1,text:()=>"Do today’s tiny dare"}],vi={id:"finish",icon:"play",target:1,text:()=>"Finish today’s session"},bi=e=>e==="finish"?vi:fo.find(t=>t.id===e)||na.find(t=>t.id===e);function ki(e){let t=0;for(const s of e)t=t*31+s.charCodeAt(0)>>>0;return()=>(t=t*1664525+1013904223>>>0,t/2**32)}function $i(){const e=ae(),t=e.days[ht(new Date)],s=t.sections.map(a=>a.kind);return{hasStrength:s.includes("strength"),hasStretch:s.includes("stretch"),hasCardio:s.includes("row"),hasTest:s.includes("test"),loaded:!e.bw&&!Ce()&&t.sections.some(a=>a.kind==="strength"&&!a.bw&&a.items.some(hs)),hour:new Date().getHours(),bw:!!e.bw}}function oa(){const e=F(),t=D();if(e.quests?.date!==t){const s=$i(),a=ki(t+i.plan),n=fo.filter(r=>r.when(s)).map(r=>r.id).sort(()=>a()-.5),o=na[Math.floor(a()*na.length)].id;e.quests={date:t,ids:["finish",n[0]||"pet",o],progress:{},chest:!1},x()}return e.quests.ids.map(s=>{const a=bi(s),n=e.quests.progress[s]||0;return{id:s,text:a.text(),icon:typeof a.icon=="function"?a.icon():a.icon,target:a.target,n:Math.min(n,a.target),done:n>=a.target}})}function go(){const e=F(),t=fe(new Date),s=V(t);let a=0;for(let o=0;o<7;o++){const r=new Date(t);r.setDate(r.getDate()+o),i.sessions[V(r)]?.done&&a++}const n=Ie()?4:5;return{key:s,n:Math.min(a,n),target:n,done:a>=n,claimed:!!e.weekly[s]}}function ue(e,t=1){const s=F(),n=oa().find(r=>r.id===e);if(n&&!n.done&&(s.quests.progress[e]=(s.quests.progress[e]||0)+t,x(),s.quests.progress[e]>=n.target&&(s.stats.quests++,Y(wi,yi,`Quest: ${n.text}`,{quiet:!0}),Dt({type:"quest",quest:n}))),oa().every(r=>r.done)&&!s.quests.chest&&(s.quests.chest="ready",x(),Dt({type:"chestReady"})),e==="finish"){const r=go();if(r.done&&!r.claimed){s.weekly[r.key]=!0,x();const l=ka().cur;Y(150,30+10*Math.min(5,Math.max(0,l-1)),l>1?`Weekly goal · ${l} weeks in a row`:"Weekly goal",{quiet:!0}),Dt({type:"weekly"})}}}const xa=()=>F().quests?.chest==="ready"&&F().quests.date===D();function Ri(){const e=F();if(!xa())return null;e.quests.chest="opened",e.stats.chests++;const t=15+Math.floor(Math.random()*16);return x(),Y(50,t,"Quest chest"),{xp:50,carrots:t}}const wo=e=>Number.isFinite(e)&&e>20&&e<700;function Pi(e){const t=parseFloat(e);return wo(t)?(i.body.goal=t,x(),!0):!1}function xi(e){const t=parseFloat(e);if(!wo(t))return!1;const s=D();return i.body.log=i.body.log.filter(a=>a.d!==s),i.body.log.push({d:s,w:t}),i.body.log.sort((a,n)=>a.d<n.d?-1:1),x(),se(`body:${V(fe(new Date))}`)&&Y(20,2,"Weekly weigh-in"),vo()&&se("body:goal")&&Y(200,30,"Goal weight reached!"),!0}function Si(){i.body.log.pop(),x()}function yo(){const{goal:e,log:t}=i.body;if(!t.length)return{has:!1,hasGoal:e!=null};const s=t[0].w,a=t[t.length-1].w,n=t.length>1?t[t.length-2].w:null;let o=null;e!=null&&(o=s===e?1:Math.max(0,Math.min(1,(s-a)/(s-e))));const r=e==null?!0:e<=s;let l="start";if(n!=null){const d=a-n;Math.abs(d)<.05?l="steady":l=d<0===r?"good":"bump"}return{has:!0,hasGoal:e!=null,fraction:o,mood:l,entries:t.length}}function vo(){const e=yo();return e.has&&e.hasGoal&&e.entries>1&&e.fraction>=1}const ze={row:{name:"Rowing",short:"Row",icon:"row",colour:"#B9A3E3",badge:"lil"},bike:{name:"Spin bike",short:"Bike",icon:"bike",colour:"#F2A7BB",badge:""},walk:{name:"Walking",short:"Walk",icon:"journey",colour:"#A9CF96",badge:"sag"},jog:{name:"Jogging",short:"Jog",icon:"drop",colour:"#F2CB8B",badge:"but"},run:{name:"Running",short:"Run",icon:"shoe",colour:"#D9587F",badge:""}},It=e=>ze[e.machine]?e.machine:e.machine?"walk":"row";function qi(e,t){const s=e>0?e/2:t*4;return Math.max(5,Math.min(40,Math.round(s)))}function Li({machine:e,date:t,min:s,km:a,intervals:n,note:o}){const r=parseFloat(s),l=parseFloat(a);if(!(r>0)&&!(l>0))return null;const d={date:t||D(),plan:i.plan,type:n?"intervals":"steady",machine:e,extra:!0};r>0&&(d.min=String(r)),l>0&&(d.km=String(l),d.meters=String(Math.round(l*1e3))),o?.trim()&&(d.note=o.trim()),i.rows.push(d),i.rows.sort(($,b)=>$.date<b.date?-1:1),x();const u=qi(r||0,l||0),m=se(`xcardio:${d.date}`);return Y(u+(m?10:0),m?3:1,`${ze[e].name} logged`),ue("cardio"),ie(),{xp:u+(m?10:0)}}function Mi(e){i.rows[e]?.extra&&(i.rows.splice(e,1),x())}function bo(){const e={};for(const s of Object.keys(ze))e[s]={n:0,min:0,km:0};for(const s of i.rows){const a=e[It(s)];a.n++,a.min+=+s.min||0,a.km+=(+s.meters||0)/1e3}const t=Object.values(e).reduce((s,a)=>({n:s.n+a.n,min:s.min+a.min,km:s.km+a.km}),{n:0,min:0,km:0});return{...e,all:t,extra:i.rows.filter(s=>s.extra).length}}const Ss=[{id:"am",name:"Morning skincare",icon:"sun"},{id:"pm",name:"Night skincare",icon:"moon"},{id:"moist",name:"Moisturised",icon:"drop"},{id:"spf",name:"Wore SPF",icon:"sun"},{id:"teeth",name:"Brushed teeth twice",icon:"spark"},{id:"floss",name:"Flossed",icon:"spark"},{id:"water",name:"Drank enough water",icon:"bottle"},{id:"vits",name:"Took vitamins",icon:"heart"},{id:"haircare",name:"Looked after my hair",icon:"mirror"},{id:"sleep",name:"In bed on time",icon:"moon"}],mt=[{id:"dress",name:"Wore a dress",icon:"dress"},{id:"skirt",name:"Wore a skirt",icon:"dress"},{id:"dressup",name:"Dressed up a little",icon:"bow"},{id:"statement",name:"Wore a look I love",icon:"star"},{id:"hair",name:"Did my hair",icon:"mirror"},{id:"haircut",name:"New haircut or style",icon:"mirror"},{id:"makeup",name:"Wore makeup",icon:"lipstick"},{id:"newlook",name:"Tried a new makeup look",icon:"lipstick"},{id:"makeupout",name:"Wore makeup out",icon:"lipstick"},{id:"nails",name:"Did my nails",icon:"polish"},{id:"perfume",name:"Wore perfume",icon:"perfume"},{id:"jewel",name:"Wore jewellery",icon:"gem"},{id:"pamper",name:"Pamper night",icon:"candle"},{id:"photo",name:"Took a photo I like of me",icon:"heart"},{id:"treat",name:"Bought something pretty for me",icon:"bag"},{id:"fitted",name:"Wore something fitted, not baggy",icon:"star"},{id:"dark",name:"Wore lace, velvet or something dark and pretty",icon:"roses"},{id:"compliment",name:"Took a compliment, no brushing it off",icon:"heart"},{id:"elegant",name:"Dressed elegant and put together",icon:"gem"},{id:"silk",name:"Wore silk, satin or velvet",icon:"gem"},{id:"heels",name:"Wore heels or boots that feel powerful",icon:"shoe"},{id:"redlip",name:"Wore a red or dark lip",icon:"lipstick"},{id:"allblack",name:"Wore all black and felt powerful",icon:"roses"},{id:"gymfit",name:"Wore a gym fit I feel good in",icon:"dumbbell"},{id:"posture",name:"Walked tall, shoulders back",icon:"crown"},{id:"voice",name:"Did 5 minutes of voice practice",icon:"speaker"},{id:"softvoice",name:"Used my softer voice out loud",icon:"speaker"}],ce=[{id:"dress",name:"Dresses & skirts",icon:"dress",steps:[["dr1","Tried one on in a shop"],["dr2","Wore one at home, just because"],["dr3","Wore one out for a quick errand"],["dr4","Wore one all day"],["dr5","Wore one somewhere social"]]},{id:"makeup",name:"Makeup",icon:"lipstick",steps:[["mk1","Tried mascara or did my brows"],["mk2","Did a full look at home"],["mk3","Wore light makeup out"],["mk4","Wore a bold lip out"],["mk5","Learnt a new look from a tutorial"]]},{id:"hair",name:"Hair",icon:"mirror",steps:[["hr1","Tried a new style at home"],["hr2","Wore clips, a bow or a ribbon"],["hr3","Wore it styled out"],["hr4","Got a proper salon cut"],["hr5","Went bold: colour, fringe or curls"]]},{id:"nails",name:"Nails & scent",icon:"polish",steps:[["nl1","Painted my nails"],["nl2","Wore perfume out"],["nl3","Got a manicure"],["nl4","Found my signature scent"],["nl5","Booked a pamper treatment"]]},{id:"elegant",name:"Elegant",icon:"gem",steps:[["el1","Wore something tailored or classic"],["el2","Wore heels or smart shoes for a while"],["el3","Did a sleek, polished hairstyle"],["el4","Wore a little black dress or classic look out"],["el5","Dressed up for dinner somewhere nice"]]},{id:"strong",name:"Strong & fit",icon:"dumbbell",steps:[["st1","Wore gym clothes I feel good in"],["st2","Took a progress photo"],["st3","Wore something that shows my arms or legs"],["st4","Trained in public: gym, park or a class"],["st5","Showed off something my body can do now"]]},{id:"goth",name:"Dark femme",icon:"roses",steps:[["gt1","Tried a dark lipstick"],["gt2","Wore lace or velvet"],["gt3","Did winged liner"],["gt4","Wore a choker or statement jewellery out"],["gt5","Went out in a full dark glam look"]]},{id:"voice",name:"Voice",icon:"speaker",note:"Gentle only, never push until it strains. Hum, then talk from where the hum buzzes (lips and nose, not chest). Let sentences rise and fall more. Brightness and melody matter more than pitch. Record the same paragraph each week and compare.",steps:[["vc1","Did a warm-up: humming and lip trills"],["vc2","Recorded myself reading and listened back"],["vc3","Practised a lighter, brighter resonance"],["vc4","Used my softer voice in a shop or on a call"],["vc5","Kept it up for a whole conversation"]]},{id:"me",name:"Confidence",icon:"heart",steps:[["cf1","Took a selfie I actually like"],["cf2","Wore something fitted instead of baggy"],["cf3","Took a compliment without deflecting"],["cf4","Bought something feminine just for me"],["cf5","Sent or posted a photo of me"]]}],Fi=ce.reduce((e,t)=>e+t.steps.length,0),Ci={dress:"dress",skirt:"dress",statement:"dress",makeup:"makeup",newlook:"makeup",makeupout:"makeup",hair:"hair",haircut:"hair",nails:"nails",perfume:"nails",pamper:"nails",elegant:"elegant",dressup:"elegant",jewel:"elegant",silk:"elegant",heels:"elegant",redlip:"makeup",allblack:"goth",gymfit:"strong",posture:"strong",dark:"goth",voice:"voice",softvoice:"voice",photo:"me",treat:"me",compliment:"me",fitted:"me"},ko=e=>Ci[e]||E().custom.find(t=>t.id===e)?.ladder||"me",Ei=e=>ot("style").filter(t=>ko(t.id)===e);function Ht(e,t="0000",s="9999"){const a=E(),n=l=>l>=t&&l<=s;let o=0;for(const[l,d]of Object.entries(a.days))if(n(l))for(const u of Object.keys(d))(Ti.has(u)||a.custom.some(m=>m.id===u&&m.group==="style"))&&ko(u)===e&&o++;const r=ce.find(l=>l.id===e);for(const[l]of r.steps)a.firsts[l]&&n(a.firsts[l])&&(o+=3);return e==="strong"&&(o+=Object.entries(i.sessions).filter(([l,d])=>d.done&&n(l)).length),o}const Xs=e=>4+2*e;function Sa(e){let t=0,s=e;for(;s>=Xs(t);)s-=Xs(t),t++;return{rank:t,into:s,need:Xs(t)}}const $o=e=>Sa(Ht(e)).rank,As=["New","Curious","Trying","Regular","Natural","Polished","Signature","Iconic","Effortless","Legendary"],Ro=e=>e<As.length?As[e]:`Legendary ${e-As.length+2}`;function qs(){const e=E(),t=!e.ranks;e.ranks||(e.ranks={});const s=[];for(const a of ce){const n=$o(a.id),o=e.ranks[a.id]??(t?n:0);for(let r=o+1;r<=n;r++)se(`rank:${a.id}:${r}`)&&(Y(20+5*Math.min(r,30),4+Math.min(r,20),`${a.name} rank ${r}`),s.push({ladder:a,rank:r}));e.ranks[a.id]=n}return x(),s}const dn=[{lid:"dress",name:"Dress month",target:12},{lid:"goth",name:"Dark femme month",target:8},{lid:"elegant",name:"Elegance month",target:10},{lid:"strong",name:"Strong month",target:16},{lid:"makeup",name:"Face month",target:10},{lid:"hair",name:"Hair month",target:10},{lid:"voice",name:"Voice month",target:12},{lid:"nails",name:"Pamper month",target:10},{lid:"me",name:"Confidence month",target:10}];function qa(){const e=new Date,t=dn[(e.getFullYear()*12+e.getMonth())%dn.length],s=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`,a=Ht(t.lid,`${s}-01`,`${s}-31`),n=new Date(e.getFullYear(),e.getMonth()+1,0).getDate();return{...t,key:s,n:a,done:a>=t.target,daysLeft:n-e.getDate(),ladder:ce.find(o=>o.id===t.lid)}}function Ls(){const e=qa();return e.done&&se(`month:${e.key}`)?(E().months=(E().months||0)+1,x(),Y(200,60,`${e.name} complete`),e):null}const Bi=new Set([...Ss,...mt].map(e=>e.id)),Ti=new Set(mt.map(e=>e.id));function E(){var e,t,s,a,n,o,r,l;return i.glow||(i.glow={days:{},custom:[],hidden:[]}),(e=i.glow).firsts||(e.firsts={}),(t=i.glow).dare||(t.dare=null),(s=i.glow).dares||(s.dares=0),(a=i.glow).goal||(a.goal={week:V(fe(new Date)),target:2}),(n=i.glow).plans||(n.plans=[]),(o=i.glow).identity||(o.identity=[]),(r=i.glow).proof||(r.proof=[]),(l=i.glow).feel||(l.feel={}),i.glow}const ra={workout:"After my workout",teeth:"After I brush my teeth",dressed:"When I get dressed",out:"Before I head out",bed:"Before bed"},rs=4;function zi(e,t){const s=E();return!ra[e]||!t||s.plans.length>=rs||s.plans.some(a=>a.anchor===e&&a.win===t)?!1:(s.plans.push({anchor:e,win:t}),x(),!0)}function ji(e){E().plans.splice(e,1),x()}const Po=e=>E().plans.filter(t=>!e||t.anchor===e).map(t=>({...t,item:ot("style").find(s=>s.id===t.win)})).filter(t=>t.item),La={scary:"Scary",awkward:"Awkward",fine:"Fine actually",loved:"Loved it"};function Di(e,t){La[t]&&(E().feel[e]=t,x())}function Oi(){const e=Object.values(E().feel);return{rated:e.length,good:e.filter(t=>t==="fine"||t==="loved").length}}const ft=10,un=["That suits you.","Look at you (˶ᵔ ᵕ ᵔ˶)","Pretty and a little dangerous. Noted.","Very you.","Biscuit approves ( ˘ ³˘)♡","Cute. Obviously (￣▽￣)ノ","Soft and slightly scary. Perfect.","That’s the girl ٩(ˊᗜˋ*)و","Gorgeous behaviour.","Another one for the evidence file.","You make that look easy.","Keep doing that ♪(´ε` )"],pn=()=>un[Math.floor(Math.random()*un.length)],Pt=e=>!!E().firsts[e],Ms=e=>e.steps.filter(([t])=>Pt(t)).length;function xo(e){const t=E(),s=ce.find(d=>d.steps.some(([u])=>u===e));if(!s)return null;if(t.firsts[e])return delete t.firsts[e],x(),{on:!1};t.firsts[e]=D(),x();const a=s.steps.find(([d])=>d===e)[1];se(`first:${e}`)&&Y(40,8,`First: ${a}`);const n=Ms(s)===s.steps.length;n&&se(`ladder:${s.id}`)&&Y(150,40,`${s.name} ladder complete`),ue("femme"),Ma();const o=ws("step",e),r=qs(),l=Ls();return ie(),{on:!0,complete:n,ladder:s,dare:o,ranks:r,month:l}}const So=()=>mt.concat(E().custom.filter(e=>e.group==="style")).filter(e=>Qe(e.id)>=ft);function ia(){const e=[];for(const s of ce){const a=s.steps.find(([n])=>!Pt(n));a&&e.push({kind:"step",id:a[0],text:a[1],icon:s.icon})}const t=ot("style").filter(s=>!s.hidden&&Qe(s.id)<ft).sort((s,a)=>Qe(s.id)-Qe(a.id)).slice(0,4);for(const s of t)e.push({kind:"win",id:s.id,text:s.name,icon:s.icon});return e}function qo(e,t){let s=0;for(const a of t)s=s*31+a.charCodeAt(0)>>>0;return e[s%e.length]}function Vt(){const e=E(),t=D();if(e.dare?.date!==t){const a=ia();if(!a.length)return null;const n=qo(a,t);e.dare={date:t,kind:n.kind,id:n.id,swapped:!1,done:!1},x()}const s=[...ia(),...ce.flatMap(a=>a.steps.map(([n,o])=>({kind:"step",id:n,text:o,icon:a.icon}))),...ot("style").map(a=>({kind:"win",id:a.id,text:a.name,icon:a.icon}))].find(a=>a.kind===e.dare.kind&&a.id===e.dare.id);return s?{...s,done:e.dare.done,swapped:e.dare.swapped}:null}function Xi(){const e=E(),t=Vt();if(!t||e.dare.swapped||e.dare.done)return!1;const s=ia().filter(n=>n.id!==t.id);if(!s.length)return!1;const a=qo(s,D()+"swap");return e.dare={...e.dare,kind:a.kind,id:a.id,swapped:!0},x(),!0}function hn(){const e=Vt();return!e||e.done?null:e.kind==="step"?Pt(e.id)?ws("step",e.id)&&{dare:!0}:xo(e.id):Ut()[e.id]?ws("win",e.id)&&{dare:!0}:ys(e.id,"style")}function ws(e,t){const s=E(),a=s.dare;return!a||a.date!==D()||a.done||a.kind!==e||a.id!==t?!1:(a.done=!0,s.dares++,x(),se(`dare:${a.date}`)&&Y(25,5,"Tiny dare done"),ue("dare"),!0)}function Lo(){const e=E(),t=V(fe(new Date));if(e.goal.week!==t){const a=mn(e.goal.week)>=e.goal.target;e.goal={week:t,target:a?Math.min(7,e.goal.target+1):e.goal.target},x()}const s=mn(t);return s>=e.goal.target&&se(`femweek:${t}`)&&Y(60,15,"Weekly win goal"),{n:s,target:e.goal.target}}function mn(e){const t=E().days;let s=0;for(let a=0;a<7;a++)s+=Ze(t[V(J(Q(e),a))]);return s}const Fs=(e=D())=>Ze(E().days[e])>0||Object.values(E().firsts).includes(e);function Ma(){const e=D();return i.sessions[e]?.done&&Fs(e)&&se(`combo:${e}`)?(Y(30,5,"Workout + win combo"),!0):!1}const Ai=()=>Object.keys(i.sessions).filter(e=>i.sessions[e].done&&Fs(e)).length;function Mo(){let e=new Date;const t=o=>Fs(V(o)),s=t(e);s||(e=J(e,-1));let a=0;for(;;)if(t(e))a++,e=J(e,-1);else if(a>0&&t(J(e,-1)))e=J(e,-1);else break;const n=t(J(new Date,-1));return{cur:a,todayDone:s,atRisk:!s&&!n&&a>0}}const Fo=["I’m a strong woman who looks after herself.","I dress for the woman I am now.","I’m soft, a little dark, and I like it.","I take up space and I look good doing it."];function fn(e){E().identity=e.map(t=>String(t||"").trim().slice(0,90)).filter(Boolean).slice(0,3),x()}function Gt(){const e=E().identity;return e.length?e[new Date().getDate()%e.length]:null}function Ni(e){const t=String(e||"").trim().slice(0,240);return t?(E().proof.unshift({d:D(),t}),x(),se(`proof:${D()}`)&&Y(15,3,"Saved to your evidence file"),ie(),!0):!1}function Yi(e){E().proof.splice(e,1),x()}function Wi(e=12){const t=J(fe(new Date),-(e-1)*7),s=[];for(let a=0;a<e*7;a++){const n=J(t,a),o=V(n),r=n>new Date;s.push({k:o,n:r?-1:Ze(E().days[o])+Object.values(E().firsts).filter(l=>l===o).length})}return s}function ot(e){const t=E(),s=e==="care"?Ss:mt,a=t.custom.filter(n=>n.group===e).map(n=>({...n,icon:e==="care"?"heart":"star",custom:!0}));return[...s,...a].map(n=>({...n,hidden:t.hidden.includes(n.id)}))}const Ut=()=>E().days[D()]||{},pt=e=>Ss.concat(E().custom.filter(t=>t.group==="care")).filter(t=>e?.[t.id]).length,Ze=e=>mt.concat(E().custom.filter(t=>t.group==="style")).filter(t=>e?.[t.id]).length;function Qe(e){return Object.values(E().days).filter(t=>t[e]).length}function ys(e,t){var b;const s=E(),a=D(),n=(b=s.days)[a]||(b[a]={});if(n[e]=!n[e],n[e]||delete n[e],Object.keys(n).length||delete s.days[a],x(),!n[e])return{on:!1};const o=t==="style"&&Qe(e)===1;let r=0,l=!1,d=!1;se(`glow:${a}:${e}`)&&(r=t==="care"?3:10,o&&Bi.has(e)&&(r+=40),l=t==="style"&&Math.random()<.25,Y(r,t==="style"?l?11:1:0,o?"First time!":l?"Biscuit noticed":""),t==="style"&&Qe(e)===ft&&se(`grad:${e}`)&&(d=!0,Y(80,20,"Part of you now"))),t==="care"&&ue("glow"),t==="style"&&(ue("femme"),Lo(),Ma());const u=ws("win",e),m=t==="style"?qs():[],$=t==="style"?Ls():null;return pt(n)>=3&&se(`glowday:${a}`)&&Y(15,2,"Glow day"),ie(),{on:!0,first:o,xp:r,bonus:l,graduated:d,dare:u,group:t,ranks:m,month:$}}function Ii(e,t,s){const a=String(e||"").trim().slice(0,40);return a?(E().custom.push({id:`c${Date.now().toString(36)}`,name:a,group:t,...t==="style"?{ladder:ce.some(n=>n.id===s)?s:"me"}:{}}),x(),!0):!1}function Gi(e){const t=E();t.custom=t.custom.filter(s=>s.id!==e),x()}function _i(e){const t=E();t.hidden=t.hidden.includes(e)?t.hidden.filter(s=>s!==e):[...t.hidden,e],x()}function Co(){const e=E().days,t=Object.keys(e).filter(l=>pt(e[l])>=3).sort();let s=0,a=0,n=null;for(const l of t)a=n&&V(J(Q(n),1))===l?a+1:1,s=Math.max(s,a),n=l;let o=0,r=new Date;for(pt(e[V(r)])<3&&(r=J(r,-1));pt(e[V(r)])>=3;)o++,r=J(r,-1);return{cur:o,best:s,days:t.length}}function Hi(){const e=E().days,t=o=>Qe(o),s=Co(),a={glowDays:s.days,glowStreak:s.best,styleDays:Object.values(e).filter(o=>Ze(o)>0).length};for(const o of[...Ss,...mt])a[o.id]=t(o.id);a.dresses=Object.values(e).filter(o=>o.dress||o.skirt).length,a.firsts=mt.filter(o=>a[o.id]>0).length,a.wins=Object.values(e).reduce((o,r)=>o+Ze(r),0),a.steps=Object.keys(E().firsts).length;for(const o of ce)a[`lad_${o.id}`]=Ms(o);a.dares=E().dares,a.graduated=So().length,a.combo=Ai();let n=0;for(const o of ce){const r=$o(o.id);a[`rank_${o.id}`]=r,n+=r}return a.ranks=n,a.topRank=Math.max(...ce.map(o=>a[`rank_${o.id}`])),a.months=E().months||0,a.proof=E().proof.length,a.femmeStreak=Mo().cur,a.triad=["goth","elegant","strong"].every(o=>a[`lad_${o}`]===5)?1:0,a}const gn=e=>String(e).padStart(2,"0"),et=(e,t,s)=>e>=t&&e<=s,Eo=(e,t)=>Object.entries(i.sessions).filter(([s,a])=>a.done&&et(s,e,t)).length,Bo=(e,t)=>Math.round(i.rows.filter(s=>et(s.date,e,t)).reduce((s,a)=>s+(+a.min||0),0));function Vi(e,t){const s=new Set(Object.entries(i.sessions).filter(([a,n])=>n.done&&et(a,e,t)).map(([a])=>a));return i.rows.forEach(a=>{et(a.date,e,t)&&s.add(a.date)}),s.size}function Ui(e,t){const s={};return Object.entries(i.sessions).forEach(([a,n])=>{if(!n.done||!et(a,e,t))return;const o=V(fe(Q(a)));s[o]=(s[o]||0)+1}),Object.values(s).filter(a=>a>=5).length}const Ki=(e,t)=>Object.entries(E().days).filter(([s])=>et(s,e,t)).reduce((s,[,a])=>s+Ze(a),0),Ji=(e,t)=>Object.values(E().firsts).filter(s=>et(s,e,t)).length,Qi=(e,t)=>Object.entries(E().days).filter(([s,a])=>et(s,e,t)&&pt(a)>=3).length,wn=[{id:"show",name:"Show-up month",unit:"sessions",target:16,icon:"dumbbell",count:Eo},{id:"cardio",name:"Cardio month",unit:"cardio minutes",target:300,icon:"heart",count:Bo},{id:"active",name:"Active month",unit:"active days",target:20,icon:"fire",count:Vi},{id:"weeks",name:"Full-week month",unit:"weeks with 5+ sessions",target:3,icon:"cal",count:Ui}];function Zi(e=new Date){const t=`${e.getFullYear()}-${gn(e.getMonth()+1)}`,s=new Date(e.getFullYear(),e.getMonth()+1,0).getDate();return{key:t,from:`${t}-01`,to:`${t}-${gn(s)}`,daysLeft:s-e.getDate()}}function To(){const e=new Date,t=Zi(e),s=wn[(e.getFullYear()*12+e.getMonth())%wn.length],a=s.count(t.from,t.to);return{...s,...t,n:a,done:a>=s.target}}const el=[{id:"sessions",name:"Sessions",target:180,icon:"dumbbell",count:Eo},{id:"cardio",name:"Cardio minutes",target:3e3,icon:"heart",count:Bo},{id:"wins",name:"Femme wins",target:250,icon:"bow",count:Ki},{id:"firsts",name:"Firsts",target:15,icon:"star",count:Ji},{id:"glow",name:"Self-care days",target:200,icon:"drop",count:Qi}];function zo(){const e=new Date().getFullYear(),t=`${e}-01-01`,s=`${e}-12-31`,a=Math.round((new Date(e+1,0,1)-new Date)/864e5),n=el.map(o=>{const r=o.count(t,s);return{...o,n:r,done:r>=o.target}});return{year:e,goals:n,daysLeft:a,all:n.every(o=>o.done)}}function tl(){const e=[],t=To();t.done&&se(`fitmonth:${t.key}`)&&(Y(200,60,`${t.name} complete`,{quiet:!0}),e.push(t.name));const s=Ls();s&&e.push(s.name);const a=zo();return a.goals.forEach(n=>{n.done&&se(`year:${a.year}:${n.id}`)&&(Y(800,250,`${a.year}: ${n.name} goal`,{quiet:!0}),e.push(`${a.year} ${n.name.toLowerCase()} goal`))}),a.all&&se(`yearall:${a.year}`)&&(Y(2e3,600,`All of ${a.year}’s goals`,{quiet:!0}),e.push(`every ${a.year} goal`)),e}function sl(){const e=Object.keys(F().awarded);return{fitMonths:e.filter(t=>t.startsWith("fitmonth:")).length,yearGoals:e.filter(t=>t.startsWith("year:")).length,yearAll:e.filter(t=>t.startsWith("yearall:")).length}}function Mt(){const e=Rs(),t=e.map(u=>i.sessions[u]),s=t.filter(u=>u.at).map(u=>new Date(u.at).getHours()),a=F(),n={};e.forEach(u=>{const m=V(fe(Q(u)));n[m]=(n[m]||0)+1});let o=!1;for(let u=1;u<e.length;u++)tt(Q(e[u-1]),Q(e[u]))>=4&&(o=!0);const r=u=>{const m=X.ref[u]||[],$=i.checks[u]||[];return m.length>0&&m.every((b,w)=>$[w])},l={dance:r("dance"),top:r("top"),goddess:r("goddess"),apex:r("apex")},d=bo();return{sessions:e.length,bestStreak:je().best,weekStreak:ka().best,fullWeeks:Object.values(n).filter(u=>u>=7).length,prs:co(),glute:t.filter(u=>u.day===0&&u.plan<=6).length,reviews:i.tests.length,timers:a.stats.timers,cardio:d.all.n,cardioMin:Math.round(d.all.min),cardioKm:Math.round(d.all.km*10)/10,row:d.row.n,bike:d.bike.n,walk:d.walk.n,jog:d.jog.n,run:d.run.n,extraCardio:d.extra,planMax:Math.max(...[i.plan,...i.planLog.map(u=>u.plan)].filter(u=>u<=X.plans.length),1),early:s.filter(u=>u<8).length,night:s.filter(u=>u>=21).length,comeback:o?1:0,lists:l,danceList:l.dance?1:0,topList:l.top?1:0,goddessList:l.goddess?1:0,apexList:l.apex?1:0,bodyGoal:vo()?1:0,weighIns:i.body.log.length,quests:a.stats.quests,chests:a.stats.chests,gifts:a.stats.gifts,bought:a.stats.bought,owned:a.owned.filter(u=>Te(u)&&Te(u).price!==0).length,mystery:a.stats.mystery,treats:a.stats.treats,cakes:a.stats.cakes,spent:a.stats.spent,constellations:Math.floor((a.stars||0)/Ye),level:F().prestige>0?50:nt().level,prestige:F().prestige,badges:Object.keys(a.badges).length,minutes:t.reduce((u,m)=>u+(m.mins||0),0),...Hi(),...sl()}}const yn=(e,t)=>e.test?!!e.test(t):(t[e.stat]||0)>=e.target;function Kt(e,t=Mt()){return e.test?null:[Math.min(t[e.stat]||0,e.target),e.target]}function ie({quiet:e=!1}={}){e||tl();const t=F();let s=Mt();const a=Pe.filter(o=>!t.badges[o.id]&&yn(o,s));a.forEach(o=>{t.badges[o.id]=D(),o.reward&&!t.owned.includes(o.reward)&&t.owned.push(o.reward)}),a.length&&(s={...s,badges:Object.keys(t.badges).length});const n=at.filter(o=>!t.titles[o.id]&&yn(o,s));if(n.forEach(o=>{t.titles[o.id]=D()}),(a.length||n.length)&&x(),e)return a;if(a.length){const o=a.reduce((r,l)=>r+l.carrots,0);Y(0,o,`${a.length===1?"Badge":"Badges"}: ${a.map(r=>r.name).join(", ")}`,{quiet:!0}),a.forEach(r=>Dt({type:"badge",badge:r}))}return n.filter(o=>o.stat!=="level"||o.target>1).forEach(o=>Dt({type:"title",title:o})),a}function Fa(e){const t=F(),s=t.owned.includes(e.id),a=e.kind==="decor"?t.decor[t.room]?.[e.slot]===e.key:t[ro[e.kind]]===e.key,n=!s&&e.level&&nt().level<e.level,o=!s&&e.badge?Pe.find(r=>r.id===e.badge):null;return{owned:s,worn:a,locked:n,badge:o,mystery:!s&&e.mystery,affordable:e.price!=null&&t.carrots>=e.price}}function al(e){const t=Te(e),s=Fa(t);if(s.owned)return la(e);if(s.locked||s.mystery||s.badge||t.price==null||!Lt(t.price))return!1;const a=F();return a.owned.push(e),a.stats.bought++,la(e),ie(),!0}function la(e){var a,n;const t=Te(e),s=F();if(!s.owned.includes(e))return!1;if(t.kind==="decor"){const o=(a=s.decor)[n=s.room]||(a[n]={});o[t.slot]=o[t.slot]===t.key?null:t.key}else s[ro[t.kind]]=t.key;return x(),!0}function nl(){if(!Lt(aa))return null;const e=F();e.stats.mystery++,e.stats.bought++;const t=nt().level,a=dt.filter(o=>!e.owned.includes(o.id)&&o.price!==0&&!o.badge&&!(o.level>t)).flatMap(o=>o.mystery?[o,o]:[o]);if(x(),!a.length)return Y(150,0,"Mystery box"),ie(),{xp:150};const n=a[Math.floor(Math.random()*a.length)];return e.owned.push(n.id),la(n.id),ie(),{item:n}}function ol(){return je().savers>=os||!Lt(gs)?!1:(F().bows.push(D()),F().stats.bought++,x(),ie(),!0)}const Cs=()=>!!i.sessions[D()]?.done&&!F().gifts[D()];function rl(){if(!Cs())return null;F().gifts[D()]=!0,F().stats.gifts++;const e=Math.random();let t;return e<.06?t={xp:0,carrots:50,label:"Jackpot!"}:e<.3?t={xp:30+Math.floor(Math.random()*40),carrots:0,label:"Bonus XP"}:t={xp:0,carrots:8+Math.floor(Math.random()*15),label:"Carrots"},x(),Y(t.xp,t.carrots,"Daily gift"),t}function il(e=!1){if(!Lt(e?ta:ea))return!1;const t=F();return t.stats.treats+=e?io:1,t.fed=D(),x(),ie(),!0}function ll(){const e=F();return e.cakes>=ns||!Lt(sa)?!1:(e.cakes++,x(),!0)}function cl(e){const t=F(),s=Math.max(1,Math.min(e,Ye-t.stars%Ye));if(!Lt(s*Bt))return null;const a=Math.floor(t.stars/Ye);t.stars+=s,x();const n=Math.floor(t.stars/Ye)>a;return n&&Y(100,0,"Constellation finished"),ie(),{count:s,finished:n}}const dl=new Set(["moist60","floss30","vits60","sleep30","hairc30","am100","glow365","glow100s","glow1","glow7s","glow30s","glow100","skin30","teeth60","water30","spf30"]),ul=new Set(["redlip10","allblack10","silk10","heels10","r25_dress","r25_makeup","r25_hair","r25_nails","r25_elegant","r25_strong","r25_goth","r25_voice","r25_me","dress1","dress10","hair10","haircut1","makeup1","makeup20","out5","nails5","perfume10","jewel10","pamper5","photo5","style10","style50","style100","firsts8","proof1","proof25","fstreak7","fstreak30","fstreak100","month1","month6","ranks10","ranks50","r10_dress","r10_makeup","r10_hair","r10_nails","r10_elegant","r10_strong","r10_goth","r10_voice","r10_me","step1","step10","step20","step30","step45","lad_elegant","lad_strong","voice10","voice50","lad_voice","lad_dress","lad_makeup","lad_hair","lad_nails","lad_goth","lad_me","wins25","wins100","wins365","dare1","dare10","dare50","grad1","grad5","grad10"]),jo=(e,t,s=t+"s")=>`${e} ${e===1?t:s}`;function Do(e,t,s,a){if(a)return`<div class="glow-row editing">
      <span class="q-ic">${v(e.icon,22)}</span><span class="grow">${c(e.name)}</span>
      ${e.custom?`<button class="btn small danger" data-act="glowRemove" data-id="${e.id}">${C("x",{size:12})}Delete</button>`:`<button class="switch ${e.hidden?"":"on"}" data-act="glowHide" data-id="${e.id}" aria-label="Show ${c(e.name)}"></button>`}
    </div>`;const n=Qe(e.id),o=t==="style"&&n===0&&!e.custom,r=t==="style"&&n>=ft;return`<button class="glow-row ${s?"done":""}" data-act="glowTick" data-id="${e.id}" data-group="${t}" aria-pressed="${s}">
    <span class="chk ${s?"on":""}">${C("check",{size:16})}</span>
    <span class="q-ic">${v(e.icon,22)}</span>
    <span class="grow">${c(e.name)}${n?`<small>${jo(n,"time")}${t==="style"&&!r?` · ${ft-n} to make it yours`:""}</small>`:""}</span>
    ${o?'<span class="chip lil">first time +40</span>':r?'<span class="chip sag">yours</span>':""}
  </button>`}function pl(){const e=E().days,t=J(new Date,-13);let s="";for(let a=0;a<14;a++){const n=J(t,a),o=V(n),r=pt(e[o]),l=Ze(e[o]),d=r>=6?3:r>=3?2:r?1:0;s+=`<div class="gd ${o===D()?"today":""}"><i class="l${d}">${l?v("bow",14):""}</i><small>${fa[ht(n)]}</small></div>`}return`<div class="glow-days">${s}</div>`}function Oo(e,t){const s=Mt(),a=F(),n=Pe.filter(o=>e.has(o.id)&&!a.badges[o.id]).map(o=>({b:o,p:Kt(o,s)})).filter(o=>o.p).sort((o,r)=>r.p[0]/r.p[1]-o.p[0]/o.p[1]).slice(0,3);return n.length?`<div class="card almost"><h2>${t}</h2>${n.map(({b:o,p:r})=>`<button class="almost-row" data-act="badge" data-id="${o.id}">
    <span class="bdg-ic">${v(o.icon,26)}</span>
    <span class="grow"><b>${c(o.name)}</b><small>${c(o.desc)}</small><span class="mini-bar"><i style="width:${Math.round(r[0]/r[1]*100)}%"></i></span></span>
    <span class="almost-n">${r[0]}/${r[1]}</span></button>`).join("")}</div>`:""}function Xo(e=!1){const t=Vt();return t?t.done?e?"":`<div class="card dare done">
      <div class="row tight">${v("heart",22)}<b>Dare done</b></div>
      <p class="small muted mt4">${c(t.text)}. A new one tomorrow ♪</p>
    </div>`:`<div class="card dare">
    <div class="between"><span class="kick">Today’s tiny dare</span>${t.kind==="step"?'<span class="chip lil">a first</span>':""}</div>
    <div class="dare-body">${v(t.icon,30)}<b>${c(t.text)}</b></div>
    <div class="row mt8">
      <button class="btn solid" data-act="dareDo">${C("check",{size:14})}Done it</button>
      ${e?'<button class="btn" data-act="goFemme">Open Glow</button>':t.swapped?"":'<button class="btn" data-act="dareSwap">Swap it</button>'}
      <span class="tiny muted grow right">+25 XP</span>
    </div>
  </div>`:""}function hl(e){const t=Ms(e),s=q.ladder===e.id,a=e.steps.findIndex(([r])=>!Pt(r)),n=E().feel,o=Sa(Ht(e.id));return`<div class="ladder ${s?"open":""} ${t===e.steps.length?"full":""}">
    <button class="ladder-head" data-act="ladder" data-id="${e.id}" aria-expanded="${s}">
      <span class="q-ic">${v(e.icon,24)}</span>
      <span class="grow"><b>${c(e.name)}</b><span class="pips">${e.steps.map(([r])=>`<i class="${Pt(r)?"on":""}"></i>`).join("")}</span></span>
      <span class="rank-chip">${t<e.steps.length?`${t}/${e.steps.length}`:`<small>RANK</small>${o.rank}`}</span>${C(s?"up":"down",{cls:"chev"})}
    </button>
    ${s?`<div class="mastery">
      <div class="between"><b>${c(Ro(o.rank))}</b><span class="tiny muted">rank ${o.rank} · ${o.into}/${o.need} to ${o.rank+1}</span></div>
      ${Ge(o.into/o.need,{segments:16})}
      <p class="tiny muted mt4">Ranks never stop. Fed by: ${c(Ei(e.id).map(r=>r.name).join(", ")||"firsts")}${e.id==="strong"?", every workout":""}. Firsts count triple.</p>
    </div>`:""}
    ${s&&e.note?`<p class="tiny muted ladder-note">${c(e.note)}</p>`:""}
    ${s?`<div class="ladder-steps">${e.steps.map(([r,l],d)=>{const u=Pt(r);return`<button class="step-row ${u?"done":""} ${d===a?"next":""}" data-act="stepTick" data-id="${r}" aria-pressed="${u}">
        <span class="rung">${u?C("check",{size:14}):d+1}</span>
        <span class="grow">${c(l)}${u&&n[r]?`<small>felt: ${c(La[n[r]].toLowerCase())}</small>`:d===a?"<small>next rung · +40 XP</small>":""}</span>
      </button>`}).join("")}</div>`:""}
  </div>`}function ml(e){const t=E().identity;return!e&&!t.length?`<div class="card"><h2>Who I’m becoming</h2>
      <p class="small muted mt4">Write it as if it’s already true. It shows up here and after workouts. Tap one to start, then make it yours in Edit.</p>
      <div class="glow-list">${Fo.map((s,a)=>`<button class="plan-row idea" data-act="identityIdea" data-i="${a}"><span class="grow">${c(s)}</span>${C("plus",{size:14})}</button>`).join("")}</div>
    </div>`:e?`<div class="card"><h2>Who I’m becoming</h2>
    <p class="small muted mt4">Up to three lines. Present tense, like it’s already true.</p>
    <div class="glow-list">${[0,1,2].map(s=>`<input class="inp" data-identity="${s}" maxlength="90" value="${c(t[s]||"")}" placeholder="I am…">`).join("")}</div>
    <button class="btn solid mt8" data-act="identitySave">Save</button>
  </div>`:`<div class="card"><h2>Who I’m becoming</h2><div class="glow-list">${t.map(s=>`<div class="plan-row"><b class="grow">${c(s)}</b></div>`).join("")}</div></div>`}function fl(){const e=E().proof;return`<div class="card">
    <div class="between"><h2>Evidence file</h2><span class="chip">${e.length}</span></div>
    <p class="small muted mt4">A moment you felt pretty, strong or like yourself. Read them back on a bad day.</p>
    <div class="glow-add"><input class="inp" id="proofNew" maxlength="240" placeholder="Today I…"><button class="btn solid" data-act="proofAdd">${C("plus",{size:14})}Save</button></div>
    ${e.slice(0,q.proofAll?200:3).map((t,s)=>`<div class="proof"><small>${c(t.d)}</small>${c(t.t)}<button class="iconbtn sm" data-act="proofRemove" data-i="${s}" aria-label="Remove">${C("x",{size:10})}</button></div>`).join("")}
    ${e.length>3?`<button class="btn small mt8" data-act="proofAll">${q.proofAll?"Show less":`Show all ${e.length}`}</button>`:""}
  </div>`}function gl(){return`<div class="heat12">${Wi(12).map(t=>`<i class="${t.n<0?"future":`h${Math.min(3,t.n)}`} ${t.k===D()?"today":""}" title="${t.k}"></i>`).join("")}</div>`}function wl(e){const t=Po(),s=ot("style").filter(a=>!a.hidden);return`<div class="card">
    <div class="between"><h2>If-then plans</h2><span class="tiny muted">${t.length}/${rs}</span></div>
    <p class="small muted mt4">Tie a win to something you already do. The workout ones pop up when you finish a session.</p>
    ${t.length?`<div class="glow-list">${t.map((a,n)=>`<div class="plan-row">
      <span class="grow"><small>${c(ra[a.anchor])}</small><b>${c(a.item.name)}</b></span>
      <button class="iconbtn sm" data-act="planRemove" data-i="${n}" aria-label="Remove plan">${C("x",{size:12})}</button>
    </div>`).join("")}</div>`:""}
    ${t.length<rs&&(e||!t.length)?`<div class="plan-add mt8">
      <select class="inp" id="planAnchor">${Object.entries(ra).map(([a,n])=>`<option value="${a}">${c(n)}</option>`).join("")}</select>
      <select class="inp" id="planWin">${s.map(a=>`<option value="${a.id}">${c(a.name)}</option>`).join("")}</select>
      <button class="btn solid" data-act="planAdd">${C("plus",{size:14})}Add plan</button>
    </div>`:t.length<rs?'<p class="tiny muted mt8">Tap Edit to add another.</p>':""}
  </div>`}function yl(e){const t=Ut(),s=ot("style").filter($=>e||!$.hidden),a=Lo(),n=ce.reduce(($,b)=>$+Ms(b),0),o=Oi(),r=So(),l=s.filter($=>t[$.id]).length,d=Mo(),u=Gt(),m=qa();return`<div class="card glow-hero">
      <div class="glow-bun">${De({mood:l?"love":"idle",size:84})}</div>
      <div class="grow">
        <div class="row tight">${v("bow",22)}<span class="big">${d.cur}</span><span class="lbl">${d.cur===1?"win day":"win days"} in a row</span></div>
        <div class="tiny muted">One quiet day is fine. Just never miss twice.</div>
        <div class="row tight mt8 baseline"><span class="lbl">This week</span><b class="wk-n">${a.n}/${a.target}</b></div>
        ${Ge(Math.min(1,a.n/a.target),{segments:14})}
      </div>
    </div>
    <p class="vote">${u?`“${c(u)}”`:"Every tick is a vote for who you’re becoming."}</p>
    ${d.atRisk?`<div class="card nudge">${v("heart",22)}<div><b>Yesterday was quiet (・ω・)</b><br><span class="small">One small win today keeps your ${d.cur}-day run going. Anything counts.</span></div></div>`:""}

    ${e?"":Xo()}

    <div class="card">
      <div class="between"><h2>Wins</h2><span class="tiny muted">tick when they happen</span></div>
      <div class="glow-list">${s.map($=>Do($,"style",!!t[$.id],e)).join("")}</div>
      ${e?Ao("style"):""}
    </div>

    <div class="card">
      <div class="between"><h2>Ladders</h2><span class="chip">${n}/${Fi} firsts</span></div>
      <p class="small muted mt4">Five firsts each, easy at the bottom. After that every win on a ladder ranks it up, forever.${o.rated?` So far <b>${o.good} of ${o.rated}</b> firsts turned out fine or better.`:""}</p>
      <div class="ladders">${ce.map(hl).join("")}</div>
    </div>

    <div class="card month-card">
      <div class="between"><span class="kick">${c(m.name)}</span><span class="tiny muted">${m.daysLeft} days left</span></div>
      <div class="row tight mt4">${v(m.ladder.icon,26)}<div class="grow"><b>${m.n}/${m.target}</b> <span class="small muted">${c(m.ladder.name.toLowerCase())} points this month</span>
      ${Ge(m.n/m.target,{segments:16,cls:m.done?"sage":""})}</div></div>
      <p class="tiny muted mt4">${m.done?"Done! +200 XP and 60 carrots.":"Wins and firsts on this ladder count. New theme every month."}</p>
    </div>

    ${ml(e)}

    ${wl(e)}

    ${fl()}

    <div class="card"><h2>Your last 12 weeks</h2>${gl()}
      <div class="legend mt8">wins<i class="h0"></i><i class="h1"></i><i class="h2"></i><i class="h3"></i></div>
    </div>

    <div class="card">
      <h2>Just you now</h2>
      ${r.length?`<p class="small muted mt4">Done ${ft}+ times. Not a dare anymore, just who you are.</p><div class="row mt8 wrap-row">${r.map($=>`<span class="chip sag">${v($.icon,14)} ${c($.name)}</span>`).join("")}</div>`:`<p class="small muted mt4">Do any win ${ft} times and it moves here for good. ${c(re())} is keeping count (｡•̀ᴗ-)✧</p>`}
    </div>

    ${Oo(ul,"Next badges")}`}function vl(e){const t=Ut(),s=ot("care").filter(o=>e||!o.hidden),a=s.filter(o=>t[o.id]).length,n=Co();return`<div class="card glow-hero">
      <div class="glow-bun">${De({mood:a>=3?"love":"idle",size:84})}</div>
      <div class="grow">
        <div class="row tight">${v("spark",22)}<span class="big">${n.cur}</span><span class="lbl">day glow streak</span></div>
        <div class="tiny muted mt4">Best ${n.best} · ${jo(n.days,"glow day")} in total</div>
        <div class="tiny muted">Three self-care ticks makes a glow day.</div>
      </div>
    </div>

    <div class="card">
      <div class="between"><h2>Self-care</h2><span class="chip ${a>=3?"sag":""}">${a}/${s.filter(o=>!o.hidden).length}</span></div>
      ${Ge(Math.min(1,a/3),{segments:12,cls:"sage"})}
      <div class="glow-list">${s.map(o=>Do(o,"care",!!t[o.id],e)).join("")}</div>
      ${e?Ao("care"):""}
    </div>

    <div class="card"><h2>Last two weeks</h2>${pl()}
      <div class="legend mt8">self-care<i class="h0"></i><i class="h1"></i><i class="h2"></i><i class="h3"></i>· ${v("bow",12)} win day</div>
    </div>

    ${Oo(dl,"Next self-care badges")}`}function bl(){const e=q.glowEdit,t=q.glowView!=="femme";yt().innerHTML=`<div class="wrap">
    <div class="top between end">
      <div><div class="date">Soft, dark, elegant, strong</div><h1>Glow</h1></div>
      <button class="btn small" data-act="glowEdit">${e?"Done":"Edit"}</button>
    </div>
    <div class="seg full mt8">
      <button class="${t?"on":""}" data-act="glowView" data-k="care">${v("drop",18)} Self-care</button>
      <button class="${t?"":"on"}" data-act="glowView" data-k="femme">${v("bow",18)} Femme</button>
    </div>
    ${t?vl(e):yl(e)}
  </div>`}const Ao=e=>`<div class="glow-add">
  <input class="inp" id="glowNew-${e}" type="text" maxlength="40" placeholder="Add your own…">
  ${e==="style"?`<select class="inp" id="glowLadder" aria-label="Ladder it feeds">${ce.map(t=>`<option value="${t.id}" ${t.id==="me"?"selected":""}>${c(t.name)}</option>`).join("")}</select>`:""}
  <button class="btn solid" data-act="glowAdd" data-group="${e}">${C("plus",{size:14})}Add</button>
</div>`,No=e=>{for(const t of ce){const s=t.steps.find(([a])=>a===e);if(s)return s[1]}return null};function kl(){const e=D(),t=e.slice(4),s=+e.slice(0,4),a=[],n=ot("style");for(let o=1;o<=10;o++){const r=`${s-o}${t}`,l=[],d=i.sessions[r];d?.done&&l.push(`Trained: ${ya(d)}`);const u=E().days[r]||{};n.filter(m=>u[m.id]).forEach(m=>l.push(m.name)),Object.entries(E().firsts).filter(([,m])=>m===r).forEach(([m])=>l.push(`First time: ${No(m)}`)),E().proof.filter(m=>m.d===r).forEach(m=>l.push(`“${m.t}”`)),l.length&&a.push({when:o===1?"A year ago today":`${o} years ago today`,lines:l.slice(0,4)})}return a}function $l(e=new Date().getFullYear()){const t=`${e}-01-01`,s=`${e}-12-31`,a=b=>b>=t&&b<=s,n=Object.entries(i.sessions).filter(([b,w])=>w.done&&a(b)),o=i.rows.filter(b=>a(b.date)),r=Object.entries(E().days).filter(([b])=>a(b)),l={};n.forEach(([b])=>{l[b.slice(5,7)]=(l[b.slice(5,7)]||0)+1});const d=Object.entries(l).sort((b,w)=>w[1]-b[1])[0],u=ce.map(b=>({l:b,n:Ht(b.id,t,s)})).sort((b,w)=>w.n-b.n),m=Object.entries(E().firsts).filter(([,b])=>a(b)).map(([b])=>No(b)),$=F();return{year:e,sessions:n.length,minutes:n.reduce((b,[,w])=>b+(w.mins||0),0),cardioMin:Math.round(o.reduce((b,w)=>b+(+w.min||0),0)),cardioKm:Math.round(o.reduce((b,w)=>b+(+w.meters||0),0)/100)/10,wins:r.reduce((b,[,w])=>b+Ze(w),0),glowDays:r.filter(([,b])=>pt(b)>=3).length,firsts:m,badges:Pe.filter(b=>($.badges[b.id]||"").startsWith(String(e))).length,proof:E().proof.filter(b=>a(b.d)).length,bestMonth:d?{month:new Date(e,+d[0]-1,1).toLocaleDateString(void 0,{month:"long"}),n:d[1]}:null,topLadder:u[0]?.n?u[0].l:null}}const Ke=e=>Number(e).toLocaleString();function Ns(e,t,s,a,n,o){return`<div class="ch-row ${o?"done":""}">
    <span class="q-ic">${v(e,22)}</span>
    <div class="grow">
      <div class="between"><b>${c(t)}</b><span class="ch-n">${Ke(Math.min(a,n))}/${Ke(n)}</span></div>
      ${Ge(a/n,{segments:16,cls:o?"sage":""})}
      ${s?`<small>${c(s)}</small>`:""}
    </div>
  </div>`}function Rl(){const e=To(),t=qa(),s=zo(),a=n=>n===0?"last day":`${n} ${n===1?"day":"days"} left`;return`<div class="sec-t">Challenges</div>
  <div class="card challenges">
    <div class="kick">This month</div>
    ${Ns(e.icon,e.name,e.done?"Done. +200 XP, 60 carrots":`${e.unit} · ${a(e.daysLeft)}`,e.n,e.target,e.done)}
    ${Ns(t.ladder.icon,t.name,t.done?"Done. +200 XP, 60 carrots":`${t.ladder.name} points · ${a(t.daysLeft)}`,t.n,t.target,t.done)}
    <div class="kick mt12">${s.year} goals <span class="tiny muted">· ${s.daysLeft} days left</span></div>
    ${s.goals.map(n=>Ns(n.icon,n.name,n.done?"Done. +800 XP, 250 carrots":"",n.n,n.target,n.done)).join("")}
    <p class="tiny muted mt8">Hit all five in one year for a huge bonus. New goals every January.</p>
    <button class="btn wide mt8" data-act="yearSheet">${v("scroll",16)} Your ${s.year} so far</button>
  </div>`}function Pl(){const e=$l(),t=(s,a)=>`<div class="tile"><div class="v">${s}</div><div class="l">${a}</div></div>`;xe(`${Be(`Your ${e.year} so far`)}
    <div class="tiles mt12">${t(Ke(e.sessions),"sessions")}${t(Ke(Math.round(e.minutes/60)),"hours trained")}${t(Ke(e.cardioMin),"cardio minutes")}</div>
    <div class="tiles mt8">${t(Ke(e.wins),"femme wins")}${t(e.firsts.length,"firsts")}${t(Ke(e.glowDays),"self-care days")}</div>
    <div class="tiles mt8">${t(e.badges,"badges earned")}${t(e.cardioKm,"km of cardio")}${t(e.proof,"proud moments")}</div>
    ${e.bestMonth?`<div class="rule mt12">Best month: <b>${c(e.bestMonth.month)}</b>, ${e.bestMonth.n} sessions.</div>`:""}
    ${e.topLadder?`<div class="rule">Your biggest glow-up: <b>${c(e.topLadder.name)}</b>.</div>`:""}
    ${e.firsts.length?`<div class="kick mt12">Firsts this year</div>${e.firsts.map(s=>`<div class="rule">${v("star",14)} ${c(s)}</div>`).join("")}`:""}
    <p class="small muted mt12 center">Look back at this next year. You’ll barely recognise her.</p>`)}function xl(){const e=kl();return e.length?`<div class="card memories">
    <div class="row tight">${v("cal",22)}<h2>On this day</h2></div>
    ${e.slice(0,2).map(t=>`<div class="kick mt8">${c(t.when)}</div>${t.lines.map(s=>`<div class="small">${c(s)}</div>`).join("")}`).join("")}
  </div>`:""}const vn=[[[8,40],[18,28],[26,16],[36,10],[44,20],[52,30],[60,22],[68,12],[78,18],[86,30],[80,44],[64,50]],[[50,6],[40,16],[30,26],[22,38],[34,48],[50,54],[66,48],[78,38],[70,26],[60,16],[50,26],[50,40]],[[10,50],[20,40],[30,46],[40,34],[50,40],[60,28],[70,34],[80,22],[90,28],[84,10],[70,8],[56,14]]];function Sl(){const e=F(),t=Math.floor(e.stars/Ye),s=e.stars%Ye,a=es[t%es.length]+(t>=es.length?` ${Math.floor(t/es.length)+1}`:""),n=vn[t%vn.length],o=n.slice(0,s).map((d,u)=>u?`<line x1="${n[u-1][0]}" y1="${n[u-1][1]}" x2="${d[0]}" y2="${d[1]}"/>`:"").join(""),r=n.map((d,u)=>`<circle cx="${d[0]}" cy="${d[1]}" r="${u<s?2.2:1.2}" class="${u<s?"on":""}"/>`).join(""),l=Ye-s;return`<div class="ctitle">Star jar</div>
    <div class="star-sky"><svg viewBox="0 0 100 60" aria-hidden="true"><g class="lines">${o}</g>${r}</svg>
      <div class="star-name">${c(a)} · ${s}/${Ye}</div></div>
    <p class="tiny muted">Each star lights one point. Finish a constellation for +100 XP, then a new one appears. ${t?`<b>${t}</b> finished so far.`:""}</p>
    <div class="row mt8">
      <button class="btn ${e.carrots>=Bt?"solid":""}" data-act="stars" data-n="1">${v("star",16)} 1 star · ${Bt}</button>
      <button class="btn ${e.carrots>=l*Bt?"solid":""}" data-act="stars" data-n="${l}">Finish it · ${Ke(l*Bt)}</button>
    </div>`}const Yo=()=>matchMedia("(display-mode: standalone)").matches||matchMedia("(display-mode: window-controls-overlay)").matches||navigator.standalone===!0,Wo=location.protocol==="file:",Io=/SamsungBrowser/i.test(navigator.userAgent),ql=/Android/i.test(navigator.userAgent),Ll=()=>`<div class="warn">${v("alert",20)}<div><b>Installing from Samsung Internet?</b> Android warns that apps it installs are “built for an older version of Android”. Open this page in <b>Chrome</b> and install from there instead. Your data won’t move by itself, so <b>Save backup</b> in Me first, then Restore it in the Chrome app.</div></div>`;function Ml(){return Yo()?"":Io&&!i.installHide?Ll():!q.installEvt||i.installHide?"":`<div class="installCard">
    <img src="icons/icon-192.png" alt="">
    <div class="t">Put Lifestyle on your home screen<small>Opens like an app, works offline</small></div>
    <button class="btn solid" data-act="install">Install</button>
    <button class="x" data-act="installHide" aria-label="Not now">${C("x")}</button>
  </div>`}async function Fl(){const e=q.installEvt;if(!e){L("Use Chrome’s ⋮ menu → Install app");return}e.prompt();try{(await e.userChoice)?.outcome==="accepted"&&L("Installing… look for the bunny","bunny")}catch{}q.installEvt=null,M()}function Cl(){i.installHide=!0,x(),M(),L("You can install any time from Me")}const Rt=(e,t,s)=>`<div class="li top"><span class="badge ${t}">${v(e,22)}</span><span class="t body">${s}</span></div>`;function El(){return Yo()?'<div class="list"><div class="li"><img class="app-thumb" src="icons/icon-192.png" alt=""><span class="t">You’re using the app<small>Works offline. Your data stays on this phone, so keep saving backups.</small></span></div></div>':Wo?`<div class="list">
      ${Rt("alert","but","Chrome can only install this once it’s opened from a web link (https), not as a file. Put the app folder on a free host, open that link in Chrome, and the Install button appears here.")}
      ${Rt("floppy","lil","Moving from the file version? <b>Save backup</b> here first, then <b>Restore</b> it in the installed app. Data doesn’t carry across on its own.")}
    </div>`:`<div class="list">
    ${Io?Rt("alert","but","<b>Samsung Internet:</b> install from <b>Chrome</b> instead. Samsung’s installer builds the app for an old Android version, which is why you saw the “older version of Android” warning."):""}
    ${q.installEvt?'<div class="li"><img class="app-thumb" src="icons/icon-192.png" alt=""><span class="t">Install Lifestyle<small>Home-screen icon, full screen, works offline</small></span><button class="btn solid" data-act="install">Install</button></div>':""}
    ${Rt("phone","",`<b>Chrome on Android:</b> ${q.installEvt?"tap Install above, or ":""}tap ⋮ → <b>Add to Home screen</b> → <b>Install</b>. Long-press the icon for Start, Journey, Progress and Plans shortcuts.`)}
    ${ql?"":Rt("phone","sag","<b>Chrome on a computer:</b> click the install icon at the right of the address bar, or ⋮ → <b>Cast, save and share</b> → <b>Install page as app</b>.")}
    ${Rt("phone","lil","<b>iPhone:</b> open the link in Safari, then Share → <b>Add to Home Screen</b>.")}
  </div>`}function Bl(){const e=Q(i.start),t=tt(e,new Date),s=Math.max(0,Math.floor(t/364)),a=Math.max(0,s+q.cycleOff),n=J(e,a*364),o=je().saved,r=D();let l="",d=-1,u=-9,m=0;for(let $=0;$<52;$++){const b=J(n,$*7);let w="";for(let S=0;S<7;S++){const P=J(b,S),R=$===0&&S===0;(P.getDate()===1||R)&&P.getMonth()!==d&&$-u>=3&&(w=P.toLocaleDateString(void 0,{month:"short"}),d=P.getMonth(),u=$)}l+=`<div class="m">${w}</div>`;for(let S=0;S<7;S++){const P=V(J(b,S)),R=Jr(P);R>=2&&m++;let B="c";P>r?B+=" fut":o.has(P)?B+=" saved":R&&(B+=" l"+R),P===r&&(B+=" today"),l+=`<button class="${B}" data-act="cell" data-k="${P}" aria-label="${P}"></button>`}}return`<div class="card taped r year-card">
    <div class="between"><h2>Your year</h2>
      <div class="navbtns">
        <button data-act="cyc" data-d="-1" ${a===0?"disabled":""} aria-label="Previous year">${C("back")}</button>
        <span class="lbl">Year ${a+1}</span>
        <button data-act="cyc" data-d="1" ${q.cycleOff>=0?"disabled":""} aria-label="Next year">${C("right")}</button>
      </div>
    </div>
    <div class="hmW">
      <div class="hmD"><span></span>${fa.map(($,b)=>`<span>${b%2===0?$:""}</span>`).join("")}</div>
      <div class="hmS"><div class="hm">${l}</div></div>
    </div>
    <div class="between mt4">
      <span class="tiny muted">${m} of 364 days</span>
      <div class="legend">less<i class="h0"></i><i class="h1"></i><i class="h2"></i><i class="h3"></i>more</div>
    </div>
    <div class="years">
      <span class="badge but">${v("crown",24)}</span>
      <div class="grow">
        <div class="row tight"><span class="big">${s}</span><span class="lbl">${s===1?"year":"years"} complete</span></div>
        <div class="tiny muted">Started ${Ee(i.start,{day:"numeric",month:"short",year:"numeric"})} · resets every 52 weeks</div>
      </div>
    </div>
  </div>`}function Tl(){const e=document.querySelector(".hmS"),t=document.querySelector(".hm .today");e&&t&&(e.scrollLeft=Math.max(0,t.offsetLeft-e.clientWidth/2))}const Ca="<b>Easy week.</b> Already done for you: one fewer set on everything, stretch holds about 25% shorter, and no contract-relax. Just follow what the app shows.";function zl(){const e=new Date().getHours(),t=i.name?", "+c(i.name):"";return(e<5?"Hi night owl":e<12?"Good morning":e<18?"Hey you":"Good evening")+t}function jl(){const e=nt();return`<button class="player" data-tab="journey" aria-label="Level ${e.level}, open Journey">
    ${ho()}
    <span class="player-mid">
      ${po()}
      ${Ge(e.fraction,{segments:16,cls:e.max?"gold":""})}
      <span class="player-xp">${e.max?"Max level · prestige ready":`${e.into} / ${e.need} XP`}</span>
    </span>
    <span class="purse">${v("carrot",20)}<b>${F().carrots}</b></span>
  </button>`}function Dl(){const e=oa(),t=e.filter(n=>n.done).length,s=go();let a="";return Cs()?a=`<button class="gift-btn" data-act="gift">${v("gift",28,"wiggle")}<span><b>Today’s gift is here</b><small>Tap to unwrap</small></span></button>`:xa()&&(a=`<button class="gift-btn" data-act="chest">${v("box",28,"wiggle")}<span><b>Quest chest unlocked</b><small>All three done. Open it!</small></span></button>`),`<div class="card quests">
    <div class="between"><h2>Today’s quests</h2><span class="chip ${t===3?"sag":""}">${t}/3</span></div>
    <div class="qlist">${e.map(n=>`<div class="q ${n.done?"done":""}">
      <span class="q-ic">${v(n.icon,22)}</span>
      <span class="q-t">${c(n.text)}${n.target>1?`<small>${n.n}/${n.target}</small>`:""}</span>
      <span class="q-r">${n.done?C("check"):"+30"}</span>
    </div>`).join("")}</div>
    ${a}
    <div class="weekly">
      <span class="lbl">This week ${s.n}/${s.target}</span>${Ge(s.n/s.target,{segments:s.target*3,cls:"lilac"})}
      <span class="tiny muted">${s.claimed?"Weekly goal done":"+150 XP"}</span>
    </div>
  </div>`}function Ol(){const e=new Date,t=ht(e),s=q.homeDay??t,a=ae(),n=a.days[s],o=D(),r=i.sessions[o],l=je(),d=Ie(),u=4-Hn()%4,m=i.active,$=new Set;for(let P=0;P<7;P++){const R=i.sessions[V(J(fe(e),P))];R?.done&&R.plan===i.plan&&$.add(R.day)}let b=`<div class="wrap">
    <div class="top">
      <div class="date">${e.toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long"})}</div>
      <h1>${zl()}</h1>
      ${jl()}
      <div class="row mt12">
        <button class="planpill" data-act="pickPlan"><span class="n">${a.n}</span>${c(a.name)}${C("down")}</button>
        <span class="chip ${d?"lil":"ghost"}">${d?v("moon",14)+" Easy week":`Week ${_n()} · ${u===1?"easy week next":"easy week in "+u}`}</span>
      </div>
    </div>`;b+=Ml(),ga||(b+=`<div class="warn">${v("alert",20)}<div><b>Heads up:</b> this browser isn’t letting the page save. Open it in Chrome or Safari directly (not a file preview) so your progress sticks.</div></div>`),m&&m.date!==o&&!i.sessions[m.date]?.done&&(b+=Re("but","timer",`You left ${Ne[m.day]}’s session unfinished on ${Ee(m.date,{weekday:"short"})}.
      <div class="row mt8"><button class="btn" data-act="resume">Finish it today</button><button class="btn" data-act="dropActive">Let it go</button></div>`)),l.cur===0&&l.total>0&&!r?.done&&(b+=Re("sag","heart","Welcome back. One session today starts a fresh streak, and everything you’ve done still counts."));let w;if(m&&m.date===o&&m.day===s){const P=$s(m).length-1;w=`<button class="cta white" data-act="resume">${C("play")} Resume · step ${Math.min(m.step+1,P)} of ${P}</button>`}else n.rest?w=`<button class="cta white" data-act="goMine">Rest day · pick a workout anyway ${C("right")}</button>`:r?.done&&r.day===s?w=`<button class="cta white" data-act="start" data-day="${s}">${C("check")} Done today · do it again</button>`:w=`<button class="cta white" data-act="start" data-day="${s}">Start session ${C("right")}</button>`;const S=r?.done&&r.day===s;b+=`<div class="heroWrap">
    <button class="hero-bunny" data-act="pet" aria-label="Pat ${c(F().bunny)}">${De({mood:Pa(),size:95})}</button>
    <div class="hero">
      <div class="lab"><span class="pip">${s===t?"Today":"Swapped in"}</span>${Ne[s]}${S?'<span class="stamp">done</span>':""}</div>
      <h2>${c(me(n.title))}</h2>
      <div class="steps">${Un(n).map((P,R)=>`<span><b>${["i","ii","iii","iv","v"][R]}</b>${c(P)}</span>`).join("")}</div>
      ${Us(n)?`<div class="focus">Stretch focus: <b>${c(Us(n))}</b></div>`:""}
      ${r?.done&&r.day!==s?`<div class="note-chip">You did ${Ne[r.day]}’s session today ${v("heart",14)}</div>`:""}
      ${w}
      <div class="week" role="group" aria-label="Pick a day">${fa.map((P,R)=>`<button class="${R===s?"on":""} ${R===t?"real":""} ${$.has(R)?"did":""}" data-act="homeDay" data-day="${R}" aria-label="${Ne[R]}${$.has(R)?", done":""}">${P}</button>`).join("")}</div>
      <div class="hint note">dot is today, ring means done this week</div>
    </div>
  </div>`,d&&(b+=Re("lil","moon",Ca)),b+=Dl(),b+=Xo(!0),b+=xl(),b+=`<div class="duo">
    <div class="card taped streak-card">
      <div class="row tight">${v("fire",26,"flicker")}<span class="lbl">Streak</span></div>
      <div class="row mt8 baseline"><span class="big">${l.cur}</span><span class="lbl">${l.cur===1?"day":"days"}</span></div>
      <div class="tiny muted mt4">Best ${l.best}</div>
    </div>
    <div class="card" data-act="streakInfo" role="button" tabindex="0">
      <span class="lbl">Streak savers</span>
      <div class="bows">${[0,1,2].slice(0,Math.max(2,l.savers)).map(P=>`<span class="${P<l.savers?"":"off"}">${v("bow",30)}</span>`).join("")}</div>
      <div class="tiny muted">${l.savers?"A missed day won’t break it":"Earn one every 7 days"} · <u>how?</u></div>
    </div>
  </div>`,b+=Bl()+"</div>",yt().innerHTML=b,Tl()}function Xl(){const e=nt(),t=F(),s=ni(e.level);return`<div class="burrow">
    <div class="burrow-scene room-${t.room}">
      <span class="sparkle s1"></span><span class="sparkle s2"></span><span class="sparkle s3"></span>
      <div class="burrow-floor"></div>
      ${mo()}
      <button class="burrow-bunny" data-act="pet" aria-label="Pat ${c(re())}">${De({mood:Pa(),size:140,cls:"bob"})}</button>
    </div>
    <div class="burrow-info">
      <div class="bunny-name">${c(re())}</div>
      <div class="lvrow">${ho("big-lv")}<div class="grow">
        <button class="title-pick" data-act="titleSheet">${po()}<span class="chip">${Object.keys(t.titles).length}/${at.length} titles</span></button>
        ${Ge(e.fraction,{segments:20,cls:e.max?"gold":""})}
        <div class="tiny muted">${e.max?"Max level! Prestige to start again with a heart number.":`${e.need-e.into} XP to level ${e.level+1}${s?` · “${s[1]}” at ${s[0]}`:""}`}</div>
      </div></div>
      ${e.max?`<button class="cta prestige-cta mt12" data-act="prestigeSheet">${v("heart",22)} Prestige</button>`:Il(e.level)}
      <div class="purse-row"><span class="purse">${v("carrot",22)}<b>${t.carrots}</b> carrots</span><span class="purse">${v("gem",20)}<b>${fi().toLocaleString()}</b> XP all time</span></div>
    </div>
    ${Cs()?`<button class="gift-btn" data-act="gift">${v("gift",28,"wiggle")}<span><b>Today’s gift is here</b><small>Tap to unwrap</small></span></button>`:""}
    ${xa()?`<button class="gift-btn" data-act="chest">${v("box",28,"wiggle")}<span><b>Quest chest unlocked</b><small>Open it!</small></span></button>`:""}
  </div>`}function Al(){const e=i.plan<=X.plans.length?i.plan:Math.max(1,...i.planLog.map(w=>w.plan).filter(w=>w<=X.plans.length)),t=new Set(i.planLog.map(w=>w.plan)),s=Math.max(e,...[...t].filter(w=>w<=X.plans.length)),a=320,n=78,o=40,r=w=>a/2+Math.sin(w*1.15)*105,l=X.plans.map((w,S)=>[r(S),o+S*n]),d=o+(X.plans.length-1)*n+50;let u=`M${l[0][0]} ${l[0][1]}`;for(let w=1;w<l.length;w++){const[S,P]=l[w-1],[R,B]=l[w];u+=` C${S} ${P+n/2} ${R} ${B-n/2} ${R} ${B}`}const m=e-1;let $=`M${l[0][0]} ${l[0][1]}`;for(let w=1;w<=m;w++){const[S,P]=l[w-1],[R,B]=l[w];$+=` C${S} ${P+n/2} ${R} ${B-n/2} ${R} ${B}`}const b=X.plans.map((w,S)=>{const[P,R]=l[S],B=w.n===e?"here":w.n<e||t.has(w.n)&&w.n<=s?"past":"next",H=P>a/2;return`<button class="stop ${B}" style="left:${P/a*100}%;top:${R}px" data-act="mapPlan" data-n="${w.n}" aria-label="Plan ${w.n}: ${c(w.name)}">
      <span class="stop-dot">${B==="past"?v("star",22):B==="here"?`<b>${w.n}</b>`:`<b>${w.n}</b>`}</span>
      ${B==="here"?`<span class="stop-bunny">${De({mood:"happy",size:46})}</span>`:""}
      <span class="stop-label ${H?"to-left":""}">${c(w.name)}${w.n===7?"<small>floor plans start</small>":""}</span>
    </button>`}).join("");return`<div class="sec-t">The road to Apex</div>
  <div class="card mapcard">
    <div class="map" style="height:${d}px">
      <svg viewBox="0 0 ${a} ${d}" preserveAspectRatio="none" aria-hidden="true">
        <path d="${u}" class="road"/>
        <path d="${$}" class="road done"/>
      </svg>
      ${b}
      <span class="flag-end" style="left:${l[13][0]/a*100}%;top:${l[13][1]+26}px">${v("trophy",28)}</span>
    </div>
    <p class="tiny muted center">Each plan is roughly 6-8 weeks. Move up from the Saturday review when it feels easy.</p>
  </div>`}const Go=([e,t])=>`<span class="mini-bar"><i style="width:${Math.round(e/t*100)}%"></i></span>`;function Nl(e){const t=F(),s=Pe.filter(a=>!t.badges[a.id]&&!a.test).map(a=>({b:a,p:Kt(a,e)})).filter(a=>a.p[0]>0).sort((a,n)=>n.p[0]/n.p[1]-a.p[0]/a.p[1]).slice(0,3);return s.length?`<div class="card almost"><h2>Almost there</h2>${s.map(({b:a,p:n})=>`<button class="almost-row" data-act="badge" data-id="${a.id}">
      <span class="bdg-ic">${v(a.icon,26)}</span>
      <span class="grow"><b>${c(a.name)}</b><small>${c(a.desc)}</small>${Go(n)}</span>
      <span class="almost-n">${n[0]}/${n[1]}</span>
    </button>`).join("")}</div>`:""}function Yl(e){const t=F();return`<div class="sec-t">Badges <span class="chip">${Pe.filter(a=>t.badges[a.id]).length}/${Pe.length}</span></div>
  ${Nl(e)}
  <div class="card"><div class="badges">${Pe.map(a=>{const n=!!t.badges[a.id],o=!n&&Kt(a,e);return`<button class="bdg ${n?"on":""}" data-act="badge" data-id="${a.id}" aria-label="${c(a.name)}${n?"":" (locked)"}">
      <span class="bdg-ic">${v(a.icon,30)}</span><span class="bdg-n">${c(a.name)}</span>
      ${o?Go(o):""}${a.reward?`<span class="bdg-gift">${v("gift",12)}</span>`:""}
    </button>`}).join("")}</div></div>`}function Wl(){const e=F(),t=Mt(),s=!e.title;xe(`${Be("Your titles")}
    <p class="small muted mt4">Pick the one that shows under ${c(re())}’s name.</p>
    <button class="title-row ${s?"on":""}" data-act="setTitle" data-id=""><b>Match my level</b><small>Changes as you level up</small></button>
    ${at.map(a=>{const n=!!e.titles[a.id],o=!n&&Kt(a,t);return`<button class="title-row r-${a.rarity} ${n?"":"locked"} ${e.title===a.id?"on":""}" data-act="setTitle" data-id="${a.id}" ${n?"":'aria-disabled="true"'}>
        <b>${n?c(a.name):`${v("lock",12)} ${c(a.name)}`}${a.rarity!=="common"?`<span class="rarity ${a.rarity}">${a.rarity}</span>`:""}</b><small>${c(a.how)}${o&&o[1]>1?` · ${o[0]}/${o[1]}`:""}</small>
      </button>`}).join("")}`,"title-sheet")}function Ft(e,t=64){const s=F(),a={fur:s.fur,outfit:s.outfit,face:s.face,neck:s.neck,[e.kind==="room"?"none":e.kind]:e.key},n=Ra({mood:"idle",fur:a.fur,outfit:a.outfit,face:a.face,neck:a.neck,size:e.kind==="room"?t-18:t});return e.kind==="decor"?`<span class="room-swatch decor-swatch room-${s.room}">${mo(s.room,{wall:null,left:null,right:null,rug:null,[e.slot]:e.key})}</span>`:e.kind==="room"?`<span class="room-swatch room-${e.key}">${n}</span>`:n}function Il(e){const t=F().owned,s=Object.keys(jt).map(Number).find(n=>n>e&&!t.includes(jt[n]));if(!s)return`<div class="next-reward">${v("carrot",18)}<span>Every 5th level from here pays <b>100 carrots</b></span></div>`;const a=Te(jt[s]);return`<div class="next-reward"><span class="nr-prev">${Ft(a,40)}</span><span>Level ${s} reward: <b>${c(a.name)}</b><small>free when you get there</small></span></div>`}const Gl=[["fur","Fur"],["outfit","Hats"],["face","Face"],["neck","Neck"],["room","Rooms"],["decor","Decor"],["extra","Extras"]],_l={wall:"On the wall",left:"Left corner",right:"Right corner",rug:"Floor"};function Hl(){const e=F(),t=q.shopTab||"fur",s=je(),a=dt.filter(r=>r.price!==0),n=a.filter(r=>e.owned.includes(r.id)).length,o=t==="extra"?`<div class="shop-extra">
        <div class="li">${v("gift",34)}<span class="t">Mystery box<small>A random item you don’t own yet. Some only come from here.</small></span>
          <button class="btn ${e.carrots>=aa?"solid":""}" data-act="mystery">${v("carrot",16)} ${aa}</button></div>
        <div class="li">${v("bow",34)}<span class="t">Streak bow<small>Covers one missed day. You hold ${s.savers} of ${os}.</small></span>
          <button class="btn ${s.savers<os&&e.carrots>=gs?"solid":""}" data-act="buyBow" ${s.savers>=os?"disabled":""}>${v("carrot",16)} ${gs}</button></div>
        <div class="li">${v("cake",34)}<span class="t">Carrot cake<small>+${lo} XP on your next finished session. Shelf holds ${e.cakes} of ${ns}.</small></span>
          <button class="btn ${e.cakes<ns&&e.carrots>=sa?"solid":""}" data-act="cake" ${e.cakes>=ns?"disabled":""}>${v("carrot",16)} ${sa}</button></div>
      </div>
      <div class="ctitle">Treats for ${c(re())}</div>
      <p class="tiny muted">Never runs out. ${c(re())} gets a lovely day and the treat count climbs toward badges and titles. ${e.stats.treats?`<b>${e.stats.treats}</b> given so far.`:""}</p>
      <div class="shop-extra">
        <div class="li">${v("macaron",34)}<span class="t">Macaron<small>One treat.</small></span>
          <button class="btn ${e.carrots>=ea?"solid":""}" data-act="feed">${v("carrot",16)} ${ea}</button></div>
        <div class="li">${v("gift",34)}<span class="t">Tea party box<small>${io} treats at once.</small></span>
          <button class="btn ${e.carrots>=ta?"solid":""}" data-act="feed" data-k="feast">${v("carrot",16)} ${ta}</button></div>
      </div>
      ${Sl()}
      <p class="tiny muted mt8">${e.stats.spent.toLocaleString()} carrots spent all time</p>`:t==="decor"?["wall","left","right","rug"].map(r=>`<div class="ctitle">${_l[r]}</div><div class="shop-grid">${dt.filter(l=>l.kind==="decor"&&l.slot===r).map(bn).join("")}</div>`).join(""):`<div class="shop-grid">${dt.filter(r=>r.kind===t).map(bn).join("")}</div>`;return`<div class="sec-t">${c(re())}’s wardrobe <span class="chip">${n}/${a.length}</span></div>
  <div class="card">
    <div class="between"><span class="purse">${v("carrot",18)}<b>${e.carrots}</b> carrots</span><span class="tiny muted">Tap to buy or wear</span></div>
    <div class="pchips mt8 shop-tabs">${Gl.map(([r,l])=>`<button class="${t===r?"on":""}" data-act="shopTab" data-k="${r}">${l}</button>`).join("")}</div>
    ${t==="decor"?`<p class="tiny muted">Placing in <b>${c(oo[e.room])}</b>. Each room keeps its own setup. Tap something placed to take it away.</p>`:""}
    ${o}
  </div>`}function bn(e){const t=Fa(e);let s;const a=e.kind==="decor";t.worn?s=a?"Placed":"Wearing":t.owned?s=a?"Place":"Wear":t.mystery?s=`${v("gift",14)} Mystery`:t.badge?s=`${v("trophy",14)} Badge`:t.locked?s=`${v("lock",14)} Lv ${e.level}`:s=`${v("carrot",14)} ${e.price}`;const n=!t.owned&&Object.entries(jt).find(([,o])=>o===e.id);return`<button class="shop-item ${t.worn?"worn":""} ${t.locked||t.mystery||t.badge?"locked":""} ${!t.owned&&!t.affordable?"pricey":""}" data-act="shop" data-id="${e.id}">
    <span class="shop-prev">${t.mystery?'<span class="mystery-q">?</span>':Ft(e)}</span>
    <span class="shop-n">${t.mystery?"???":c(e.name)}</span><span class="shop-p">${s}</span>
    ${t.badge?`<span class="shop-free">${c(t.badge.name)}</span>`:""}
    ${n?`<span class="shop-free">free at Lv ${n[0]}</span>`:""}
  </button>`}function Vl(){const e=je();return`<div class="tiles mt16">
    <div class="tile"><div class="v">${Rs().length}</div><div class="l">sessions</div></div>
    <div class="tile"><div class="v">${e.best}</div><div class="l">best streak</div></div>
    <div class="tile"><div class="v">${ka().cur}</div><div class="l">week streak</div></div>
  </div>`}function Ul(){const e=Mt();yt().innerHTML=`<div class="wrap">
    <div class="top"><div class="date">Plan ${i.plan} · ${c(ae().name)}</div><h1>Journey</h1></div>
    ${Xl()}
    ${Vl()}
    ${Rl()}
    ${Al()}
    ${Yl(e)}
    ${Hl()}
    <div style="height:20px"></div>
  </div>`}const Ea=()=>({name:"",amount:"",hold:!1,weighted:!1,notes:""});function Kl(){const e=i.custom.workouts,t=i.plan===Yt;return`<div class="sec-t">My workouts</div>
    <div class="card">
      <p class="small muted">Build your own sessions from anything you like. Start one on any day, or put them in your own week below.</p>
      <button class="cta mt12" data-act="customNew">${C("plus")} New workout</button>
    </div>
    ${e.length?e.map(s=>`<div class="card custom-card">
      <div class="between"><h2>${c(s.name)}</h2><span class="chip ghost">${s.moves.length} ${s.moves.length===1?"move":"moves"}</span></div>
      <p class="tiny muted mt4">${c(s.moves.map(a=>a.name).join(" · "))}</p>
      <div class="row mt12">
        <button class="btn solid" data-act="customStart" data-id="${s.id}">${C("play",{size:14})}Start</button>
        <button class="btn" data-act="customEdit" data-id="${s.id}">Edit</button>
      </div>
    </div>`).join(""):`<div class="card">${wt("scroll","No workouts yet. Your first one could be anything: a favourite routine, a class, a stretch flow.")}</div>`}

    <div class="sec-t">My week</div>
    <div class="card">
      <p class="small muted">Pick a workout for each day. Empty days are rest days. Switch to <b>My plan</b> and your week shows on Today, with streaks, quests and XP as usual.</p>
      <div class="week-pick">${Ne.map((s,a)=>`<label class="wp-row"><span>${s.slice(0,3)}</span>
        <select class="inp" data-week="${a}"><option value="">Rest</option>${e.map(n=>`<option value="${n.id}" ${i.custom.week[a]===n.id?"selected":""}>${c(n.name)}</option>`).join("")}</select>
      </label>`).join("")}</div>
      ${t?'<p class="center accent strong mt12">You’re on My plan</p>':`<button class="cta white mt12" data-act="setPlanBtn" data-n="${Yt}" ${e.length?"":"disabled"}>Use My plan</button>`}
    </div>`}function _o(){const e=q.editing;return`${Be(e.id?"Edit workout":"New workout")}
    <div class="field"><label for="cwName">Name</label><input class="inp" id="cwName" type="text" maxlength="40" value="${c(e.name)}" placeholder="e.g. Pilates, Upper body, Hot girl walk"></div>
    <button class="nw-toggle mt12 ${e.warmup?"on":""}" data-act="cwWarmup">${v("sun",18)}<span><b>Start with the 5-min warm-up</b><small>The same warm-up the plans use</small></span><span class="switch ${e.warmup?"on":""}"></span></button>
    <div class="ctitle">Moves</div>
    ${e.moves.map((t,s)=>`<div class="cw-move">
      <div class="between"><b class="cw-n">${s+1}</b><button class="x-del" data-act="cwRemove" data-i="${s}" aria-label="Remove move">${C("x",{size:12})}</button></div>
      <input class="inp" data-cw="name" data-i="${s}" type="text" maxlength="60" value="${c(t.name)}" placeholder="Move name">
      <div class="g2 mt8">
        <input class="inp" data-cw="amount" data-i="${s}" type="text" maxlength="30" value="${c(t.amount)}" placeholder="${t.hold?"45 sec or 30 sec/side":"3 x 12"}">
        <div class="seg full"><button class="${t.hold?"":"on"}" data-act="cwType" data-i="${s}" data-k="reps">Reps</button><button class="${t.hold?"on":""}" data-act="cwType" data-i="${s}" data-k="hold">Hold</button></div>
      </div>
      ${t.hold?"":`<label class="cw-check"><input type="checkbox" data-cw="weighted" data-i="${s}" ${t.weighted?"checked":""}> Uses weights (shows the weight log)</label>`}
      <input class="inp mt8" data-cw="notes" data-i="${s}" type="text" maxlength="160" value="${c(t.notes)}" placeholder="How to do it (optional)">
    </div>`).join("")}
    <button class="btn full mt8" data-act="cwAdd">${C("plus",{size:14})}Add a move</button>
    <button class="cta mt16" data-act="cwSave">Save workout ${C("check")}</button>
    ${e.id?'<button class="btn danger full mt8" data-act="cwDelete">Delete workout</button>':""}`}function Jt(){const e=q.editing;if(!e)return;const t=document.getElementById("cwName");t&&(e.name=t.value),document.querySelectorAll("[data-cw]").forEach(s=>{const a=e.moves[+s.dataset.i];a&&(a[s.dataset.cw]=s.type==="checkbox"?s.checked:s.value)})}function kn(e){const t=e&&Wt(e);q.editing=t?JSON.parse(JSON.stringify(t)):{id:null,name:"",warmup:!0,moves:[Ea()]},xe(_o(),"editor-sheet")}function Es(){const t=document.querySelector("#sheet .sheet")?.scrollTop||0;xe(_o(),"editor-sheet still");const s=document.querySelector("#sheet .sheet");s&&(s.scrollTop=t)}function Jl(){Jt(),q.editing.moves.push(Ea()),Es()}function Ql(e){Jt(),q.editing.moves.splice(e,1),q.editing.moves.length||q.editing.moves.push(Ea()),Es()}function Zl(e,t){Jt(),q.editing.moves[e].hold=t,t&&(q.editing.moves[e].weighted=!1),Es()}function ec(){Jt(),q.editing.warmup=!q.editing.warmup,Es()}function tc(){Jt();const e=q.editing;return e.name=e.name.trim(),e.moves=e.moves.map(t=>({...t,name:t.name.trim(),amount:t.amount.trim(),notes:t.notes.trim()})).filter(t=>t.name),e.name?e.moves.length?(e.id?i.custom.workouts=i.custom.workouts.map(t=>t.id===e.id?e:t):(e.id=`w${Date.now().toString(36)}`,i.custom.workouts.push(e)),x(),q.editing=null,null):"Add at least one move":"Give it a name"}function sc(){const e=q.editing?.id;e&&(i.custom.workouts=i.custom.workouts.filter(t=>t.id!==e),i.custom.week=i.custom.week.map(t=>t===e?null:t),x(),q.editing=null)}const ac={Goals:["target","sag"],"Stretch holds":["lotus","lil"],Strength:["dumbbell",""]},le=(e,t,s,a,n)=>`<details>
  <summary class="li"><span class="badge ${t}">${v(e,22)}</span><span class="t">${c(s)}${a?`<small>${c(a)}</small>`:""}</span>${C("down",{cls:"chev"})}</summary>
  <div class="li-body">${n}</div>
</details>`,$n=e=>`<div class="howIn"><ol>${e.map(t=>`<li>${c(t)}</li>`).join("")}</ol></div>`;function Tt(e,t,s,a,n){const o=i.checks[e]||[],r=`<div class="mt8">${t.map((l,d)=>`<div class="chkline">
      <button class="chk ${o[d]?"on":""}" data-act="cl" data-key="${e}" data-i="${d}" aria-pressed="${!!o[d]}">${C("check",{size:15})}</button>
      <span>${c(l)}</span>
    </div>`).join("")}</div>${a?`<p class="small muted mt8">${c(a)}</p>`:""}`;return n?r:`<div class="card"><h2>${c(s)}</h2>${r}</div>`}function nc(e,t,s){let a=`<details><summary class="li">
      <span class="badge ${s===6?"lil":s===1||s===5?"sag":""}">${v(Vr(s,e.n),22)}</span>
      <span class="t">${Ne[s]}<small>${c(me(t.title))}</small></span>${C("down",{cls:"chev"})}
    </summary><div class="li-body">
    <div class="row">${Un(t).map((n,o)=>`<span class="chip ghost">${o+1} · ${c(n)}</span>`).join("")}</div>`;return t.sections.forEach(n=>{a+=`<div class="ctitle display">${c(Kn(n))}</div>${n.meta?`<span class="chip mt4">${c(n.meta)}</span>`:""}`,n.kind==="row"?a+=`${_e()?`<div class="call lilac">${v("bike",16)}<div><b>Spin bike swap:</b> ${c(X.ref.rowing[3].b)}</div></div>`:""}
        <p class="small mt8">${n.intro.map(o=>c(me(o))).join(" ")}</p>
        <table class="t mt8">${n.table.map(o=>`<tr><td>${c(o[0])}</td><td>${c(o[1])}</td></tr>`).join("")}</table>
        ${Jn(n).map(o=>`<div class="call feel">${v("heart",16)}<div>${c(o)}</div></div>`).join("")}`:n.kind==="test"?a+=`<div class="mt8">${n.items.map(o=>`<div class="rule">${c(o)}</div>`).join("")}</div><p class="tiny muted">${c(n.notes[0]||"")}</p>`:a+=`<div class="mt8">${n.items.map(o=>`<div class="rule tight-rule"><details class="how inline">
          <summary><span class="grow strong">${c(o.name)}</span><span class="chip">${c(o.sets||o.hold)}</span>${C("down",{cls:"chev"})}</summary>
          ${so(o)}
        </details></div>`).join("")}</div>
        ${(n.notes||[]).map(o=>`<p class="tiny muted">${c(o)}</p>`).join("")}`}),a+=t.rest?'<p class="small muted mt8">Rest day. Stretch, walk, or do some self-care.</p></div></details>':`<button class="cta mt16" data-act="startFrom" data-n="${e.n}" data-day="${s}">Do this session today ${C("right")}</button></div></details>`,a}function oc(){const e=q.plansSel||i.plan,t=ae(e),s=t.n===i.plan;return`<div class="pchips mt8">${[...X.plans,...i.custom.workouts.length?[ae(Yt)]:[]].map(o=>`<button class="${o.n===e?"on":""}" data-act="plansSel" data-n="${o.n}">${o.n===i.plan?v("bow",14)+" ":""}${o.custom?"My plan":`Plan ${o.n}`}</button>`).join("")}</div>
    <div class="card plan-hero">
      <div class="lab">${t.custom?"Your own plan":`Plan ${t.n} of ${X.plans.length}`}</div>
      <h2>${c(t.name)}</h2>
      <p class="mt8">${c(t.tagline)}</p>
      <div class="plan-num">${t.custom?"♡":t.n}</div>
      ${s?'<div class="plan-mine">Your plan right now</div>':`<button class="cta white mt16" data-act="setPlanBtn" data-n="${t.n}">Make this my plan</button>`}
    </div>
    <div class="list">${t.info.map(([o,r])=>{const[l,d]=ac[o]||["up","but"];return`<div class="li top"><span class="badge ${d}">${l==="up"?C("up"):v(l,22)}</span><div class="t">${c(o)}<small class="body">${c(r)}</small></div></div>`}).join("")}</div>
    <div class="sec-t">The week</div>
    <div class="list">
      <details><summary class="li"><span class="badge but">${v("sun",22)}</span><span class="t">Warm-up<small>Every day · 5 min</small></span>${C("down",{cls:"chev"})}</summary>
        <div class="li-body"><p class="small muted">${c(me(X.ref.warmupNote))}</p>
        ${X.warmup.map(o=>`<div class="rule"><b>${c(o.name)}</b> · ${c(o.amount)}<br>${c(o.steps[0])}</div>`).join("")}</div>
      </details>
      ${t.days.map((o,r)=>nc(t,o,r)).join("")}
    </div>`}function rc(){const e=X.ref;return`<div class="sec-t">Basics</div><div class="list">
      ${le("heart","","How to use this","",$n(e.howto))}
      ${le("cal","sag","Your week",`Plan ${i.plan} · what happens each day`,`<table class="t"><tr><th>Day</th><th>Workout</th><th>Stretch after</th></tr>${ae().days.map((t,s)=>`<tr><td>${Ne[s].slice(0,3)}</td><td>${c(me(t.title))}</td><td>${c(Us(t).split(" · ")[0])}</td></tr>`).join("")}</table>`)}
      ${le("sun","but","Warm-up","5 min, before everything",X.warmup.map((t,s)=>`<div class="rule"><b>${s+1}. ${c(t.name)}</b> · ${c(t.amount)}<br>${c(t.steps[0])}</div>`).join("")+`<div class="call dont">${v("fire",16)}<div>${c(me(e.warmupNote))}</div></div>`)}
    </div>
    <div class="sec-t">The rules</div><div class="list">
      ${le("dumbbell","","Training",`${e.training.length} rules`,Ve(e.training))}
      ${le("spark","lil","Your kit","Weights for Plans 1-6, travel kit for Plans 7-14",`<div class="kick">Plans 1-6 · ${c(e.kitTitle.replace(/^Plans 1-6: /,""))}</div>${Ve(e.kit)}<div class="kick mt16">Plans 7-14 · travel kit</div>${Ve(e.kitBW)}`)}
      ${le("lotus","sag","Stretching",`${e.stretching.length} rules`,Ve(e.stretching))}
    </div>
    <div class="sec-t">Reference</div><div class="list">
      ${le("ladder","but","Level-up ladders","Easiest → hardest",[["Plans 1-6 · weights",e.ladders],["Plans 7-14 · floor only",e.laddersBW]].map(([t,s],a)=>`<div class="kick ${a?"mt16":""}">${t}</div><table class="t">${s.map(n=>`<tr><td class="w32">${c(n[0])}</td><td>${c(n[1])}</td></tr>`).join("")}</table>`).join(""))}
      ${le("target","sag","Flexibility targets","Where you should roughly be",`<div class="xscroll"><table class="t wide"><tr><th>Plan</th><th>Hold</th><th>Rounds</th><th>Add-ons</th><th>Target</th></tr>${e.flex.map(t=>`<tr>${t.map(s=>`<td>${c(s)}</td>`).join("")}</tr>`).join("")}</table></div>`)}
      ${le("row","lil","Rowing notes","Damper, spin bike swap",Ve(e.rowing))}
      ${le("lotus","","Splits ladder","Lowering your support",$n(e.splits)+`<p class="small muted">${c(e.splitsNote)}</p>`)}
      ${le("heart","","Why this builds your shape","",Ve(e.why))}
    </div>
    <div class="sec-t">Checklists</div><div class="list">
      ${le("spark","lil","Dance-ready","End of Plan 3",Tt("dance",e.dance,"",e.danceNote,!0))}
      ${le("crown","but","Top level","End of Plan 6",Tt("top",e.top,"","",!0))}
      ${le("crown","but","Goddess level","End of Plan 10",Tt("goddess",e.goddess,"","",!0))}
      ${le("trophy","but","Apex level","End of Plan 14",Tt("apex",e.apex,"","",!0))}
      ${le("chart","sag","Track it","",Ve(e.track)+'<p class="tiny muted mt8">Weights and Saturday tests are logged for you in this app. Photos and measurements are up to you.</p>')}
    </div>`}function ic(){const e=q.plansView==="guide",t=q.plansView==="mine";yt().innerHTML=`<div class="wrap">
    <div class="top"><div class="date">${e?"Everything from your plan":t?"Yours to keep forever":c(X.ref.tagline)}</div><h1>${e?"Guide":t?"My workouts":"Your plans"}</h1></div>
    <div class="seg full mt8">
      <button class="${!e&&!t?"on":""}" data-act="plansView" data-k="plan">${v("book",18)} Plans</button>
      <button class="${t?"on":""}" data-act="plansView" data-k="mine">${v("scroll",18)} Mine</button>
      <button class="${e?"on":""}" data-act="plansView" data-k="guide">${v("info",18)} Guide</button>
    </div>
    ${e?rc():t?Kl():oc()}
  </div>`}let Ho=0;function Ba(e,t={}){const a=t.h||140,n=36,o=8,r=14,l=24,d=e.flatMap(W=>W.pts);if(!d.length)return"";const u=d.map(W=>W[0]),m=d.map(W=>W[1]);let $=Math.min(...u),b=Math.max(...u);$===b&&($-=864e5*3,b+=864e5*3);let w=Math.min(...m),S=Math.max(...m);w===S&&(w-=1,S+=1);const P=(S-w)*.15;w-=P,S+=P;const R=W=>n+(W-$)/(b-$)*(320-n-o),B=W=>r+(1-(W-w)/(S-w))*(a-r-l),H=t.fmt||(W=>Math.round(W*10)/10),ne=Ho++;let Z="<defs>";e.forEach((W,ve)=>{Z+=`<linearGradient id="ag${ne}_${ve}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${W.color}" stop-opacity=".28"/><stop offset="1" stop-color="${W.color}" stop-opacity="0"/></linearGradient>`}),Z+="</defs>",[S-P,(w+S)/2,w+P].forEach(W=>{Z+=`<line x1="${n}" x2="${320-o}" y1="${B(W)}" y2="${B(W)}" stroke="var(--hair)" stroke-dasharray="2 5"/>`,Z+=`<text x="${n-8}" y="${B(W)+4}" text-anchor="end" class="ax">${H(W)}</text>`});const ge=W=>new Date(W).toLocaleDateString(void 0,{day:"numeric",month:"short"});return Z+=`<text x="${n}" y="${a-6}" class="ax">${ge(Math.min(...u))}</text>`,Z+=`<text x="${320-o}" y="${a-6}" class="ax" text-anchor="end">${ge(Math.max(...u))}</text>`,e.forEach((W,ve)=>{const de=W.pts.slice().sort((Se,we)=>Se[0]-we[0]);if(!de.length)return;const He=de.map((Se,we)=>`${we?"L":"M"}${R(Se[0]).toFixed(1)} ${B(Se[1]).toFixed(1)}`).join(" ");de.length>1&&(Z+=`<path d="${He} L${R(de[de.length-1][0])} ${a-l} L${R(de[0][0])} ${a-l}Z" fill="url(#ag${ne}_${ve})"/>`,Z+=`<path d="${He}" fill="none" stroke="${W.color}" stroke-width="2.8" stroke-linejoin="round" stroke-linecap="round"/>`);const Oe=de[de.length-1];de.forEach(Se=>{const we=Se===Oe;Z+=`<rect x="${R(Se[0])-(we?4.5:2.5)}" y="${B(Se[1])-(we?4.5:2.5)}" width="${we?9:5}" height="${we?9:5}" fill="${we?"var(--surface)":W.color}" stroke="${W.color}" stroke-width="${we?2.5:0}"/>`})}),`<svg class="chart" viewBox="0 0 320 ${a}" role="img" aria-label="${c(t.label||"chart")}">${Z}</svg>`}function lc(e,t){const r=e.slice().sort((H,ne)=>H[0]-ne[0]),l=r.map(H=>H[1]).concat(t!=null?[t]:[]);let d=Math.min(...l),u=Math.max(...l);u-d<1&&(d-=1,u+=1);const m=u-d;d-=m*.12,u+=m*.12;let $=r[0][0],b=r[r.length-1][0];$===b&&($-=864e5,b+=864e5);const w=H=>14+(H-$)/(b-$)*276,S=H=>14+(1-(H-d)/(u-d))*122,P=Ho++;let R=`<defs><linearGradient id="tg${P}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F48FAE" stop-opacity=".35"/><stop offset="1" stop-color="#F48FAE" stop-opacity="0"/></linearGradient></defs>`;if(t!=null&&(R+=`<line x1="14" x2="296" y1="${S(t)}" y2="${S(t)}" stroke="#5BAE5E" stroke-width="2.5" stroke-dasharray="6 6" stroke-linecap="round"/>`,R+=`<g transform="translate(298 ${S(t)-18})">${cc}</g>`),r.length>1){const H=r.map((ne,Z)=>`${Z?"L":"M"}${w(ne[0]).toFixed(1)} ${S(ne[1]).toFixed(1)}`).join(" ");R+=`<path d="${H} L${w(r[r.length-1][0])} 150 L${w(r[0][0])} 150Z" fill="url(#tg${P})"/>`,R+=`<path d="${H}" fill="none" stroke="#D9587F" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>`}r.slice(0,-1).forEach(H=>{R+=`<rect x="${w(H[0])-2.5}" y="${S(H[1])-2.5}" width="5" height="5" fill="#D9587F"/>`});const B=r[r.length-1];return R+=`<rect x="${w(B[0])-6}" y="${S(B[1])-6}" width="12" height="12" rx="2" fill="var(--surface)" stroke="#D9587F" stroke-width="3"/>`,`<svg class="chart trend" viewBox="0 0 320 150" role="img" aria-label="Weight trend">${R}</svg>`}const cc='<g shape-rendering="crispEdges"><rect x="0" y="0" width="2" height="20" fill="#7C6470"/><rect x="2" y="1" width="9" height="2" fill="#2F6E3E"/><rect x="2" y="3" width="11" height="4" fill="#5BAE5E"/><rect x="2" y="7" width="9" height="2" fill="#2F6E3E"/><rect x="3" y="3" width="3" height="2" fill="#A6E08E"/></g>';function dc(e){if(e.length<2)return"";const t=64,s=26,a=Math.min(...e),n=Math.max(...e),o=n-a||1,r=e.map((l,d)=>`${3+d*(t-6)/(e.length-1)},${s-3-(l-a)/o*(s-6)}`).join(" ");return`<svg width="${t}" height="${s}" viewBox="0 0 ${t} ${s}" aria-hidden="true"><polyline fill="none" stroke="var(--rose)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" points="${r}"/></svg>`}const uc=e=>[["m","Distance"],["min","Time"],["pace",e==="bike"?"RPM":"Pace"]];function pc(e){if(e.split&&/^\d+:\d{1,2}$/.test(e.split)){const[t,s]=e.split.split(":").map(Number);return t*60+s}return e.min&&e.meters?e.min*60/(e.meters/500):null}function hc(e,t,s){return s==="m"?+e.meters?t==="row"?+e.meters:+e.meters/1e3:null:s==="min"?+e.min||null:t==="row"?pc(e):t==="bike"?+e.rpm||null:+e.min&&+e.meters?+e.min*60/(+e.meters/1e3):null}function mc(e,t){return t==="m"?e==="row"?"metres":"km":t==="min"?"minutes":e==="row"?"per 500 m, lower is faster":e==="bike"?"avg rpm":"per km, lower is faster"}function fc(e){const r=fe(new Date),l=Array.from({length:8},(S,P)=>J(r,(P-7)*7)),d=l.map(S=>{const P=V(S),R=V(J(S,6)),B={};return e.filter(H=>H.date>=P&&H.date<=R).forEach(H=>{B[It(H)]=(B[It(H)]||0)+(+H.min||0)}),B}),u=Math.max(30,...d.map(S=>Object.values(S).reduce((P,R)=>P+R,0))),m=304/l.length,$=m*.62;let b="";return d.forEach((S,P)=>{let R=110;const B=8+P*m+(m-$)/2;b+=`<rect x="${B.toFixed(1)}" y="10" width="${$.toFixed(1)}" height="100" fill="var(--surface2)" rx="4"/>`,Object.keys(ze).forEach(ne=>{if(!S[ne])return;const Z=S[ne]/u*100;R-=Z,b+=`<rect x="${B.toFixed(1)}" y="${R.toFixed(1)}" width="${$.toFixed(1)}" height="${Z.toFixed(1)}" fill="${ze[ne].colour}"/>`});const H=Object.values(S).reduce((ne,Z)=>ne+Z,0);H&&(b+=`<text x="${(B+$/2).toFixed(1)}" y="${(R-4).toFixed(1)}" text-anchor="middle" class="ax">${Math.round(H)}</text>`)}),b+=`<text x="8" y="126" class="ax">${(S=>S.toLocaleDateString(void 0,{day:"numeric",month:"short"}))(l[0])}</text><text x="312" y="126" class="ax" text-anchor="end">this week</text>`,`<svg class="chart" viewBox="0 0 320 130" role="img" aria-label="Cardio minutes per week">${b}</svg>`}function gc(e,t){const s=ze[e],a=t.filter(d=>It(d)===e),n=a.reduce((d,u)=>({min:d.min+(+u.min||0),km:d.km+(+u.meters||0)/1e3}),{min:0,km:0});q.cardioMetric||(q.cardioMetric={});const o=q.cardioMetric[e]||"m",r=[["steady","#D9587F"],["intervals","#A585DA"]].map(([d,u])=>({pts:a.filter(m=>m.type===d).map(m=>[Q(m.date).getTime(),hc(m,e,o)]).filter(m=>m[1]),color:u})),l=r.some(d=>d.pts.length)?Ba(r,{label:s.name,fmt:o==="pace"&&e!=="bike"?Nt:void 0}):wt("chart",o==="pace"?"Log time and distance together to see your pace.":"Nothing logged for this one yet.");return`<div class="card">
    <div class="kind-head"><span class="badge ${s.badge}">${v(s.icon,24)}</span><div class="grow"><h2>${s.name}</h2>
      <div class="kind-tots"><span><b>${a.length}</b> ${a.length===1?"log":"logs"}</span><span><b>${Math.round(n.min)}</b> min</span><span><b>${n.km?n.km.toFixed(1):0}</b> km</span></div></div></div>
    <div class="seg full mt8">${uc(e).map(([d,u])=>`<button class="${o===d?"on":""}" data-act="kindMetric" data-kind="${e}" data-k="${d}">${u}</button>`).join("")}</div>
    ${l}
    <div class="legend mt8"><i class="dot steady"></i>steady&nbsp;&nbsp;<i class="dot intervals"></i>intervals&nbsp;&nbsp;· ${mc(e,o)}</div>
    ${xt(`<div class="howIn hist">${a.slice().reverse().slice(0,30).map(d=>`<div>
        <span>${Ee(d.date)} · ${d.extra?"bonus":"plan"}${d.type==="intervals"?" · intervals":""}${d.note?" · "+c(d.note):""}</span>
        <b>${d.min?c(d.min)+" min":""}${d.meters?" · "+Ko(d):""}${d.rounds?" · "+c(d.rounds)+" rds":""}${d.rpm?" · "+c(d.rpm)+" rpm":""}${d.extra?`<button class="x-del" data-act="delCardio" data-i="${i.rows.indexOf(d)}" aria-label="Remove">${C("x",{size:12})}</button>`:""}</b>
      </div>`).join("")}</div>`,`All your ${s.name.toLowerCase()}`)}
  </div>`}function wc(e){const t=bo(),s=Object.keys(ze).filter(n=>e.some(o=>It(o)===n));let a=`<div class="sec-t">Cardio</div>
    <div class="card">
      <div class="between"><h2>All cardio</h2><button class="btn solid small" data-act="cardioSheet">${C("plus",{size:14})}Log cardio</button></div>
      <div class="tiles mt12">
        <div class="tile"><div class="v">${t.all.n}</div><div class="l">sessions</div></div>
        <div class="tile"><div class="v">${Math.round(t.all.min)}</div><div class="l">minutes</div></div>
        <div class="tile"><div class="v">${t.all.km.toFixed(1)}</div><div class="l">km</div></div>
      </div>
      ${e.length?`<div class="ctitle">Minutes per week</div>${fc(e)}
        <div class="kind-legend">${Object.entries(ze).map(([,n])=>`<span><i style="background:${n.colour}"></i>${n.short}</span>`).join("")}</div>`:wt("heart",ae().bw?"Your plan has no cardio days, but your heart still loves it. Log a walk, jog, run, row or ride any time.":"Plan rows and rides show up here, plus any bonus cardio you log.")}
    </div>`;return a+=s.map(n=>gc(n,e)).join(""),a}function yc(){const e=ze[q.xcType]?q.xcType:ae().bw?"walk":i.cardio,t=D();xe(`${Be("Log cardio")}
    <p class="small muted mt4">Every log earns XP, more for longer sessions.</p>
    <div class="xc-types mt12">${Object.entries(ze).map(([s,a])=>`<button class="${s===e?"on":""}" data-act="xcType" data-k="${s}">${v(a.icon,26)}<span>${a.short}</span></button>`).join("")}</div>
    <div class="g2">
      <div class="field"><label for="xcMin">Time (min)</label><input class="inp" id="xcMin" type="number" inputmode="decimal" step="any" placeholder="min"></div>
      <div class="field"><label for="xcKm">Distance (km)</label><input class="inp" id="xcKm" type="number" inputmode="decimal" step="any" placeholder="optional"></div>
    </div>
    <div class="field"><label>Effort</label><div class="seg full"><button class="on" data-act="xcEffort" data-k="steady">Steady</button><button data-act="xcEffort" data-k="intervals">Intervals</button></div></div>
    <div class="g2">
      <div class="field"><label for="xcDate">Day</label><input class="inp" id="xcDate" type="date" value="${t}" max="${t}"></div>
      <div class="field"><label for="xcNote">Note</label><input class="inp" id="xcNote" type="text" placeholder="optional"></div>
    </div>
    <button class="cta mt16" data-act="saveCardio" data-type="${e}">Save ${C("check")}</button>`)}const Rn={start:"Your line starts here.",good:"Moving the right way. Lovely.",steady:"Holding steady.",bump:"A little bump. Totally normal, the trend is what counts."};function vc(){const e=i.body.log.map(t=>[Q(t.d).getTime(),t.w]);return lc(e,i.body.goal)}function Vo({inputs:e=!1}={}){const t=yo();let s=`<div class="card body-card"><div class="between"><h2>Weight journey</h2>${v("heart",22)}</div>`;return t.has?(s+=vc(),t.hasGoal?(s+=`<div class="body-goal">${Ge(t.fraction,{segments:18,cls:"sage"})}${v("journey",22)}</div>`,s+=`<p class="small muted mt8">${t.fraction>=1&&t.entries>1?"You reached your goal!":Rn[t.mood]}</p>`):s+=`<p class="small muted mt8">${Rn[t.mood]} Add a goal to see the finish line.</p>`):s+=wt("chart",t.hasGoal?"Goal saved. Add today’s weight to start your line.":"Set a goal and add today’s weight to start your line. No numbers, just the shape of your progress."),e?s+=`<div class="body-form">
      <div class="body-row">
        <label for="bodyNow">Today’s weight</label>
        <div class="body-in"><input class="inp" id="bodyNow" type="number" inputmode="decimal" step="any" placeholder="Type it in" autocomplete="off"><span class="u">${i.unit}</span></div>
        <button class="btn solid" data-act="bodyLog">Log</button>
      </div>
      <div class="body-row">
        <label for="bodyGoal">Goal weight</label>
        <div class="body-in"><input class="inp" id="bodyGoal" type="number" inputmode="decimal" step="any" placeholder="${i.body.goal!=null?"Saved · type to change":"Your goal"}" autocomplete="off"><span class="u">${i.unit}</span></div>
        <button class="btn" data-act="bodyGoal">Save</button>
      </div>
      <p class="tiny muted">Numbers disappear once saved, only the line stays.${i.body.log.length?' <button class="linkbtn" data-act="bodyUndo">Remove last entry</button>':""}</p>
    </div>`:s+='<p class="tiny muted mt8">Update it from <button class="linkbtn" data-tab="me">Me</button>.</p>',s+"</div>"}const bc={fold:"Fingers to toes in a fold",front:"Front split: hips from floor",middle:"Middle split: hips from floor",squat:"Deep squat hold",bridge:"Bridge hold",thrust:"Hip thrust best",bw:"Pistol squat best (per leg)",hs:"Handstand hold"},vs=[{k:"fold",type:"fold"},{k:"front",type:"split"},{k:"middle",type:"split"},{k:"squat",type:"secs"},{k:"bridge",type:"secs"},{k:"thrust",type:"wr"},{k:"bw",type:"reps"},{k:"hs",type:"secs"}],Ot=e=>e!==""&&e!=null;function Uo(e,t){if(!t||!e)return"";switch(e.type){case"fold":return Ot(t.v)?`${t.v} cm ${t.dir||"away"}`:"";case"split":return Ot(t.v)?`${t.v} ${t.u||"cm"}`:"";case"secs":return t.v?`${t.v} sec`:"";case"reps":return t.v?`${t.v} reps`:"";case"wr":return t.w||t.r?`${t.w||"?"} ${i.unit} × ${t.r||"?"}`:"";default:return t.v||""}}function Ko(e){return ba(e)==="row"?`${Number(e.meters).toLocaleString()} m`:`${e.km||Math.round(e.meters/100)/10} km`}function Jo(e,t){const s=(i.weights[e]||[]).filter(n=>!t||n.p===t),a=s.filter(he).map(n=>[Q(n.d).getTime(),+n.w]);return`${a.length>1?Ba([{pts:a,color:"#B8577A"}],{h:120,label:e}):""}
    <div class="hist mt8">${s.slice().reverse().slice(0,30).map(n=>`<div>
      <span>${Ee(n.d,{day:"numeric",month:"short",year:"2-digit"})} · Plan ${n.p}${n.up?" · go up":""}</span>
      <b>${he(n)?c(n.w)+" "+i.unit:"bodyweight"}</b>
    </div>`).join("")}</div>`}function kc(e){let t=0;return i.planLog.forEach((s,a)=>{if(s.plan!==e)return;const n=i.planLog[a+1]?Q(i.planLog[a+1].date):new Date;t+=Math.max(1,Math.ceil((tt(Q(s.date),n)+1)/7))}),t?`<span class="chip ghost">${t} wk${t===1?"":"s"}</span>`:""}const $c=[["Fold (cm past toes, minus = away)",e=>e.fold&&Ot(e.fold.v)?(e.fold.dir==="past"?1:-1)*e.fold.v:null],["Front split (cm from floor)",e=>e.front&&(e.front.u||"cm")==="cm"&&Ot(e.front.v)?+e.front.v:null],["Middle split (cm from floor)",e=>e.middle&&(e.middle.u||"cm")==="cm"&&Ot(e.middle.v)?+e.middle.v:null],["Deep squat hold (sec)",e=>e.squat?.v?+e.squat.v:null],["Bridge hold (sec)",e=>e.bridge?.v?+e.bridge.v:null],[()=>`Hip thrust best (${i.unit})`,e=>e.thrust?.w?+e.thrust.w:null],["Pistol squat best (reps per leg)",e=>e.bw?.v?+e.bw.v:null],["Handstand hold (sec)",e=>e.hs?.v?+e.hs.v:null]];function Rc(e){let t='<div class="card"><h2>Review results</h2>';if(!e.length)return t+wt("clip","Saturday is review day. Your test numbers show up here so you can see the change month to month.")+"</div>";const s=o=>e.map(r=>Uo(o,r[o.k])).filter(Boolean),a=vs.filter(o=>s(o).length);t+=`<table class="t mt12"><tr><th>Test</th><th>First</th><th>Latest</th></tr>${a.map(o=>{const r=s(o);return`<tr><td class="test-name">${c(bc[o.k])}</td><td>${c(r[0]||"—")}</td><td class="latest">${c(r.length>1?r[r.length-1]:"—")}</td></tr>`}).join("")}</table>`,$c.forEach(([o,r])=>{const l=typeof o=="function"?o():o,d=e.map(u=>[Q(u.date).getTime(),r(u)]).filter(u=>u[1]!=null&&!isNaN(u[1]));d.length>1&&(t+=`<div class="ctitle">${c(l)}</div>${Ba([{pts:d,color:"#93395C"}],{label:l})}`)});const n=e.filter(o=>o.note?.v).slice(-6).reverse();return n.length&&(t+=xt(`<div class="howIn">${n.map(o=>`<div class="rule"><b>${Ee(o.date)}</b> · ${c(o.note.v)}</div>`).join("")}</div>`,"Your review notes")),t+"</div>"}function Pc(e){const t=Object.keys(i.weights).filter(s=>i.weights[s].some(a=>(!e||a.p===e)&&he(a)));return t.length?`<div class="list">${t.map(s=>{const n=i.weights[s].filter(r=>(!e||r.p===e)&&he(r)).map(r=>+r.w),o=n.length>1?n[n.length-1]-n[0]:0;return`<details class="lift"><summary><span class="nm">${c(s)}</span>${dc(n)}<span class="v">${n[n.length-1]} ${i.unit}</span>${o>0?`<span class="chip sag">+${Math.round(o*100)/100}</span>`:""}</summary>
      <div class="li-body">${Jo(s,e)}</div></details>`}).join("")}</div>`:`<div class="card">${wt("dumbbell","Type a weight on any exercise during a workout. Every change lands here so you know what to beat.")}</div>`}function xc(){const e=Mt(),t=F(),s=(a,n)=>`<div class="tile"><div class="v">${a}</div><div class="l">${n}</div></div>`;return`<div class="card records"><h2>Your records</h2><p class="tiny muted mt4">Everything, all time</p>
    <div class="tiles mt12">
      ${s(e.sessions,"sessions")}
      ${s((e.minutes/60).toFixed(1),"hours trained")}
      ${s(je().cur,"day streak")}
      ${s(e.bestStreak,"best streak")}
      ${s(e.weekStreak,"best week run")}
      ${s(e.fullWeeks,"perfect weeks")}
      ${s(e.prs,"personal bests")}
      ${s(e.timers,"holds timed")}
      ${s(e.reviews,"reviews")}
      ${s(e.cardio,"cardio logs")}
      ${s(e.cardioKm,"cardio km")}
      ${s(e.cardioMin,"cardio min")}
      ${s(e.quests,"quests done")}
      ${s(e.chests,"chests opened")}
      ${s(e.gifts,"gifts unwrapped")}
      ${s(`${e.badges}/${Pe.length}`,"badges")}
      ${s(`${Object.keys(t.titles).length}/${at.length}`,"titles")}
      ${s(e.owned,"items owned")}
    </div>
  </div>`}function Sc(){const e=q.progPlan,t=u=>!e||u.plan===e,s=Object.entries(i.sessions).filter(([,u])=>t(u)).sort((u,m)=>u[0]<m[0]?1:-1),a=s.filter(([,u])=>u.done),n=a.filter(([,u])=>[0,2,3,4].includes(u.day)).length,o=i.rows.filter(t),r=i.tests.filter(t),l=o.reduce((u,m)=>u+(+m.meters||0),0)/1e3,d=o.reduce((u,m)=>u+(+m.min||0),0);yt().innerHTML=`<div class="wrap">
    <div class="top"><div class="date">Pick a plan, or look at it all</div><h1>Progress</h1></div>
    <div class="pchips mt8"><button class="${e?"":"on"}" data-act="progPlan" data-n="0">All plans</button>${X.plans.map(u=>`<button class="${e===u.n?"on":""}" data-act="progPlan" data-n="${u.n}">Plan ${u.n}</button>`).join("")}</div>
    <div class="card">
      <div class="between"><h2>${e?`Plan ${e} · ${c(ae(e).name)}`:"Everything"}</h2>${e?kc(e):""}</div>
      <div class="tiles mt12">
        <div class="tile"><div class="v">${a.length}</div><div class="l">sessions</div></div>
        <div class="tile"><div class="v">${n}</div><div class="l">strength days</div></div>
        <div class="tile"><div class="v">${a.length}</div><div class="l">stretch sessions</div></div>
        <div class="tile"><div class="v">${l?l.toFixed(1):0}</div><div class="l">cardio km</div></div>
        <div class="tile"><div class="v">${Math.round(d)}</div><div class="l">cardio min</div></div>
        <div class="tile"><div class="v">${r.length}</div><div class="l">reviews</div></div>
      </div>
    </div>
    ${xc()}
    ${i.body.log.length||i.body.goal!=null?Vo():""}
    ${Rc(r)}
    ${wc(o)}
    <div class="sec-t">Weights</div>
    ${Pc(e)}
    <div class="sec-t">History</div>
    <div class="card">${s.length?`<div class="hist">${s.slice(0,40).map(([u,m])=>`<div><span>${Ee(u,{weekday:"short",day:"numeric",month:"short"})} · ${c(me(ya(m)))}</span><b class="${m.done?"is-done":"is-started"}">${m.done?"done":"started"}</b></div>`).join("")}</div>`:wt("cal","Nothing yet. Your first session goes here.")}</div>
  </div>`}const ts=(e,t,s)=>`<div class="seg">${t.map(([a,n])=>`<button class="${s===a?"on":""}" data-act="${e}" data-k="${a}">${n}</button>`).join("")}</div>`,ss=(e,t,s)=>`<button class="switch ${t?"on":""}" data-act="${e}" role="switch" aria-checked="${t}" aria-label="${s}"></button>`;function qc(){const e=i.lastBackup?tt(Q(i.lastBackup),new Date):null,t=Rs().length;yt().innerHTML=`<div class="wrap">
    <div class="top between end">
      <div><div class="date">Settings and backups</div><h1>${i.name?c(i.name):"Me"}</h1></div>
      <div class="me-bunny">${De({size:76})}</div>
    </div>

    <div class="sec-t">You</div>
    <div class="list">
      <div class="li"><span class="badge">${v("heart",22)}</span><input class="inp bare" data-set="name" value="${c(i.name)}" placeholder="Your name (for your hello)" aria-label="Your name"></div>
      <div class="li"><span class="badge lil">${v("bunny",22)}</span><input class="inp bare" data-set="bunny" value="${c(re())}" placeholder="Your bunny’s name" aria-label="Bunny name"></div>
      <div class="li"><span class="badge lil">${v("dumbbell",22)}</span><span class="t">Weight units<small>Label only, old numbers stay as typed</small></span>${ts("unit",[["kg","kg"],["lb","lb"]],i.unit)}</div>
      <div class="li"><span class="badge">${v("moon",22)}</span><span class="t">Appearance<small>Auto follows your phone</small></span>${ts("theme",[["auto","Auto"],["light","Light"],["dark","Dark"]],i.theme||"auto")}</div>
      <div class="li"><span class="badge">${v(va(),22)}</span><span class="t">Cardio machine (Plans 1-6)<small>Spin bike keeps the same times and rounds, from your plan’s bike swap</small></span>${ts("cardio",[["row","Row"],["bike","Bike"]],i.cardio)}</div>
      <button class="li" data-act="pickPlan"><span class="badge but">${v("book",22)}</span><span class="t">Plan ${i.plan} · ${c(ae().name)}<small>Week ${_n()} · every 4th week is easy</small></span>${C("right",{cls:"chev"})}</button>
    </div>

    <div class="sec-t">Weight</div>
    ${Vo({inputs:!0})}

    <div class="sec-t">Timers and sound</div>
    <div class="list">
      <div class="li"><span class="badge sag">${v("timer",22)}</span><span class="t">Hold timers<small>Optional buttons on timed moves. Never needed to tick things off.</small></span>${ss("timers",i.timers,"Show hold timers")}</div>
      <div class="li"><span class="badge">${v(i.sound?"speaker":"mute",22)}</span><span class="t">Sound<small>Chimes, countdown beeps and little pops</small></span>${ss("sound",i.sound,"Sound")}</div>
      <div class="li"><span class="badge but">${v("sun",22)}</span><span class="t">Get-ready countdown<small>15 seconds to get into position before a hold starts</small></span>${ss("getReady",i.getReady,"Get-ready countdown")}</div>
      <div class="li"><span class="badge but">${v("dumbbell",22)}</span><span class="t">No weights this week<small>Hides weight boxes and weight quests. Turns off on Monday.</small></span>${ss("noWeights",Ce(),"No weights this week")}</div>
      <div class="li"><span class="badge lil">${v("moon",22)}</span><span class="t">Rest timer<small>Between sets on strength moves</small></span>${ts("restSecs",[["60","60s"],["90","90s"],["120","2m"]],String(i.restSecs))}</div>
    </div>

    <div class="sec-t">Backup</div>
    <div class="card">
      <p class="small muted">Your progress (and ${c(re())}) live in this browser on this phone. Save a backup now and then, and use it to move to a new phone.</p>
      ${e==null?Re("but","alert","No backup yet."):`<p class="small mt8">Last backup: <span class="accent">${e===0?"today":e+" days ago"}</span></p>`}
      <div class="g2 mt12"><button class="btn solid" data-act="export">${v("floppy",18)}Save backup</button><button class="btn" data-act="copy">${v("copy",18)}Copy as text</button></div>
      <div class="ctitle">Restore</div><p class="tiny muted">Replaces what’s on this phone.</p>
      <label class="btn mt8 full" for="impf">${v("box",18)}Choose backup file</label>
      <input id="impf" type="file" accept=".json,application/json,text/plain" hidden>
      <div class="field"><textarea class="inp" id="imptxt" placeholder="…or paste backup text here"></textarea></div>
      <button class="btn mt8 full" data-act="importTxt">Restore from text</button>
    </div>

    <div class="sec-t">Make it an app</div>
    ${El()}

    <div class="sec-t">Your data</div>
    <div class="card">
      <p class="small">Year started ${Ee(i.start,{day:"numeric",month:"long",year:"numeric"})} · ${t} ${t===1?"session":"sessions"} done.</p>
      <button class="btn danger mt12 full" data-act="wipe">${v("trash",18)}Delete all my data</button>
    </div>
    <p class="tiny muted center sign">Made with love, for the life you’re building</p>
  </div>`}const q={tab:"home",homeDay:null,cycleOff:0,plansSel:null,plansView:"plan",progPlan:0,shopTab:"fur",installEvt:null},Qo=[["home","home","Today"],["journey","journey","Journey"],["glow","mirror","Glow"],["plans","book","Plans"],["progress","chart","Progress"],["me","bunny","Me"]],Lc={home:Ol,journey:Ul,glow:bl,plans:ic,progress:Sc,me:qc},yt=()=>document.getElementById("app");function Mc(){document.getElementById("tabs").innerHTML=Qo.map(([e,t,s])=>`<button data-tab="${e}" aria-label="${s}"><span class="tab-ic">${C(t,{size:26})}</span>${s}</button>`).join("")}function M(){Lc[q.tab](),yt().firstElementChild?.classList.add("fade")}function ct(e){q.tab=e,document.querySelectorAll("#tabs button").forEach(t=>t.classList.toggle("on",t.dataset.tab===e)),M(),window.scrollTo(0,0)}const gt=()=>document.getElementById("session").classList.contains("show");let zt=null,Xt=null;function Zo(){return zt||Xt?zt:(Xt=jn(()=>import("./ZzFX-CBr4ajES.js"),[],import.meta.url).then(e=>{zt=e.ZZFX,zt.volume=.35}).catch(()=>{Xt=null}),null)}function er(){const e=Zo();e?.audioContext.state==="suspended"?e.audioContext.resume():e||Xt?.then(()=>zt?.audioContext.resume())}function $e(e,t=1){if(!i.sound)return;const s=Zo();if(!s){Xt?.then(()=>$e(e,t));return}try{s.audioContext.state==="suspended"&&s.audioContext.resume(),s.playSamples([s.buildSamples(...e)],t)}catch{}}const ca=(e,t=.06,s=1,a=.6)=>[a,0,e,.004,t,.09,s,1];function Ae(e,t=.09,s=1,a=.6){e.forEach((n,o)=>{if(!n)return;const[r,l]=Array.isArray(n)?n:[n,.06];setTimeout(()=>$e(ca(r,l,s,a)),o*t*1e3)})}const tr=523.25,Pn=587.33,da=659.25,lt=783.99,bs=880,Ys=987.77,Le=1046.5,Me=1318.5,Ue=1568,sr=2093,xn=[tr,Pn,da,lt,bs,Le,Pn*2,Me,Ue,bs*2,sr];let as=0,Sn;const T={tick(){const e=xn[Math.min(as,xn.length-1)];as++,clearTimeout(Sn),Sn=setTimeout(()=>{as=0},5e3),$e([.5,0,e,.002,.02,.07,1,1,0,0,e*.5,.035])},untick(){as=0,$e([.3,0,420,.002,.02,.08,1,1,-18])},pop:()=>$e([.25,0,740,.001,.01,.04,0,1,0,0,240,.02]),step:()=>Ae([Le,Me,Ue],.07),carrot:()=>$e([.45,0,Ys,.001,.04,.14,1,1,0,0,Me-Ys,.06]),pr:()=>{$e([.5,0,260,.01,.18,.2,2,1,9,0,0,0,0,0,0,.1]),setTimeout(()=>Ae([lt,Le,Me,[Ue,.18]],.06),220)},sessionDone:()=>Ae([tr,da,lt,Le,0,[Me,.1],[Ue,.3]],.1),levelUp:()=>{Ae([lt,Le,Me,Ue,[sr,.25]],.08,2,.45),setTimeout(()=>$e([.25,0,2400,.01,.3,.4,0,1,0,0,0,0,.05]),450)},gift:()=>Ae([da,lt,Ys,Me,[Ue,.2]],.06,0,.55),badge:()=>Ae([bs,Le*1.122,Me,[bs*2,.2]],.08,1,.5),nope:()=>$e([.4,0,180,.005,.08,.1,2,1,-4]),count:()=>$e(ca(660,.05,0,.7)),go:()=>$e(ca(990,.16,0,.7)),half:()=>Ae([Me,Le],.09,0,.45),switchSides:()=>{Ae([Le,lt,Le,[Ue,.12]],.09,1,.6),We([90,60,90])},done:()=>{Ae([lt,Le,Me,[Ue,.25]],.11,1,.65),We([160,80,160])}};var Ta={};(function e(t,s,a,n){var o=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),r=typeof Path2D=="function"&&typeof DOMMatrix=="function",l=(function(){if(!t.OffscreenCanvas)return!1;var g=new OffscreenCanvas(1,1),h=g.getContext("2d");h.fillRect(0,0,1,1);var z=g.transferToImageBitmap();try{h.createPattern(z,"no-repeat")}catch{return!1}return!0})();function d(){}function u(g){var h=s.exports.Promise,z=h!==void 0?h:t.Promise;return typeof z=="function"?new z(g):(g(d,d),null)}var m=(function(g,h){return{transform:function(z){if(g)return z;if(h.has(z))return h.get(z);var O=new OffscreenCanvas(z.width,z.height),A=O.getContext("2d");return A.drawImage(z,0,0),h.set(z,O),O},clear:function(){h.clear()}}})(l,new Map),$=(function(){var g=Math.floor(16.666666666666668),h,z,O={},A=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(h=function(N){var I=Math.random();return O[I]=requestAnimationFrame(function j(G){A===G||A+g-1<G?(A=G,delete O[I],N()):O[I]=requestAnimationFrame(j)}),I},z=function(N){O[N]&&cancelAnimationFrame(O[N])}):(h=function(N){return setTimeout(N,g)},z=function(N){return clearTimeout(N)}),{frame:h,cancel:z}})(),b=(function(){var g,h,z={};function O(A){function N(I,j){A.postMessage({options:I||{},callback:j})}A.init=function(j){var G=j.transferControlToOffscreen();A.postMessage({canvas:G},[G])},A.fire=function(j,G,U){if(h)return N(j,null),h;var ee=Math.random().toString(36).slice(2);return h=u(function(K){function te(oe){oe.data.callback===ee&&(delete z[ee],A.removeEventListener("message",te),h=null,m.clear(),U(),K())}A.addEventListener("message",te),N(j,ee),z[ee]=te.bind(null,{data:{callback:ee}})}),h},A.reset=function(){A.postMessage({reset:!0});for(var j in z)z[j](),delete z[j]}}return function(){if(g)return g;if(!a&&o){var A=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{g=new Worker(URL.createObjectURL(new Blob([A])))}catch(N){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",N),null}O(g)}return g}})(),w={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function S(g,h){return h?h(g):g}function P(g){return g!=null}function R(g,h,z){return S(g&&P(g[h])?g[h]:w[h],z)}function B(g){return g<0?0:Math.floor(g)}function H(g,h){return Math.floor(Math.random()*(h-g))+g}function ne(g){return parseInt(g,16)}function Z(g){return g.map(ge)}function ge(g){var h=String(g).replace(/[^0-9a-f]/gi,"");return h.length<6&&(h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]),{r:ne(h.substring(0,2)),g:ne(h.substring(2,4)),b:ne(h.substring(4,6))}}function W(g){var h=R(g,"origin",Object);return h.x=R(h,"x",Number),h.y=R(h,"y",Number),h}function ve(g){g.width=document.documentElement.clientWidth,g.height=document.documentElement.clientHeight}function de(g){var h=g.getBoundingClientRect();g.width=h.width,g.height=h.height}function He(g){var h=document.createElement("canvas");return h.style.position="fixed",h.style.top="0px",h.style.left="0px",h.style.pointerEvents="none",h.style.zIndex=g,h}function Oe(g,h,z,O,A,N,I,j,G){g.save(),g.translate(h,z),g.rotate(N),g.scale(O,A),g.arc(0,0,1,I,j,G),g.restore()}function Se(g){var h=g.angle*(Math.PI/180),z=g.spread*(Math.PI/180);return{x:g.x,y:g.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:g.startVelocity*.5+Math.random()*g.startVelocity,angle2D:-h+(.5*z-Math.random()*z),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:g.color,shape:g.shape,tick:0,totalTicks:g.ticks,decay:g.decay,drift:g.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:g.gravity*3,ovalScalar:.6,scalar:g.scalar,flat:g.flat}}function we(g,h){h.x+=Math.cos(h.angle2D)*h.velocity+h.drift,h.y+=Math.sin(h.angle2D)*h.velocity+h.gravity,h.velocity*=h.decay,h.flat?(h.wobble=0,h.wobbleX=h.x+10*h.scalar,h.wobbleY=h.y+10*h.scalar,h.tiltSin=0,h.tiltCos=0,h.random=1):(h.wobble+=h.wobbleSpeed,h.wobbleX=h.x+10*h.scalar*Math.cos(h.wobble),h.wobbleY=h.y+10*h.scalar*Math.sin(h.wobble),h.tiltAngle+=.1,h.tiltSin=Math.sin(h.tiltAngle),h.tiltCos=Math.cos(h.tiltAngle),h.random=Math.random()+2);var z=h.tick++/h.totalTicks,O=h.x+h.random*h.tiltCos,A=h.y+h.random*h.tiltSin,N=h.wobbleX+h.random*h.tiltCos,I=h.wobbleY+h.random*h.tiltSin;if(g.fillStyle="rgba("+h.color.r+", "+h.color.g+", "+h.color.b+", "+(1-z)+")",g.beginPath(),r&&h.shape.type==="path"&&typeof h.shape.path=="string"&&Array.isArray(h.shape.matrix))g.fill(br(h.shape.path,h.shape.matrix,h.x,h.y,Math.abs(N-O)*.1,Math.abs(I-A)*.1,Math.PI/10*h.wobble));else if(h.shape.type==="bitmap"){var j=Math.PI/10*h.wobble,G=Math.abs(N-O)*.1,U=Math.abs(I-A)*.1,ee=h.shape.bitmap.width*h.scalar,K=h.shape.bitmap.height*h.scalar,te=new DOMMatrix([Math.cos(j)*G,Math.sin(j)*G,-Math.sin(j)*U,Math.cos(j)*U,h.x,h.y]);te.multiplySelf(new DOMMatrix(h.shape.matrix));var oe=g.createPattern(m.transform(h.shape.bitmap),"no-repeat");oe.setTransform(te),g.globalAlpha=1-z,g.fillStyle=oe,g.fillRect(h.x-ee/2,h.y-K/2,ee,K),g.globalAlpha=1}else if(h.shape==="circle")g.ellipse?g.ellipse(h.x,h.y,Math.abs(N-O)*h.ovalScalar,Math.abs(I-A)*h.ovalScalar,Math.PI/10*h.wobble,0,2*Math.PI):Oe(g,h.x,h.y,Math.abs(N-O)*h.ovalScalar,Math.abs(I-A)*h.ovalScalar,Math.PI/10*h.wobble,0,2*Math.PI);else if(h.shape==="star")for(var _=Math.PI/2*3,pe=4*h.scalar,be=8*h.scalar,ke=h.x,Xe=h.y,rt=5,qe=Math.PI/rt;rt--;)ke=h.x+Math.cos(_)*be,Xe=h.y+Math.sin(_)*be,g.lineTo(ke,Xe),_+=qe,ke=h.x+Math.cos(_)*pe,Xe=h.y+Math.sin(_)*pe,g.lineTo(ke,Xe),_+=qe;else g.moveTo(Math.floor(h.x),Math.floor(h.y)),g.lineTo(Math.floor(h.wobbleX),Math.floor(A)),g.lineTo(Math.floor(N),Math.floor(I)),g.lineTo(Math.floor(O),Math.floor(h.wobbleY));return g.closePath(),g.fill(),h.tick<h.totalTicks}function vr(g,h,z,O,A){var N=h.slice(),I=g.getContext("2d"),j,G,U=u(function(ee){function K(){j=G=null,I.clearRect(0,0,O.width,O.height),m.clear(),A(),ee()}function te(){a&&!(O.width===n.width&&O.height===n.height)&&(O.width=g.width=n.width,O.height=g.height=n.height),!O.width&&!O.height&&(z(g),O.width=g.width,O.height=g.height),I.clearRect(0,0,O.width,O.height),N=N.filter(function(oe){return we(I,oe)}),N.length?j=$.frame(te):K()}j=$.frame(te),G=K});return{addFettis:function(ee){return N=N.concat(ee),U},canvas:g,promise:U,reset:function(){j&&$.cancel(j),G&&G()}}}function Ia(g,h){var z=!g,O=!!R(h||{},"resize"),A=!1,N=R(h,"disableForReducedMotion",Boolean),I=o&&!!R(h||{},"useWorker"),j=I?b():null,G=z?ve:de,U=g&&j?!!g.__confetti_initialized:!1,ee=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,K;function te(_,pe,be){for(var ke=R(_,"particleCount",B),Xe=R(_,"angle",Number),rt=R(_,"spread",Number),qe=R(_,"startVelocity",Number),Rr=R(_,"decay",Number),Pr=R(_,"gravity",Number),xr=R(_,"drift",Number),_a=R(_,"colors",Z),Sr=R(_,"ticks",Number),Ha=R(_,"shapes"),qr=R(_,"scalar"),Lr=!!R(_,"flat"),Va=W(_),Ua=ke,zs=[],Mr=g.width*Va.x,Fr=g.height*Va.y;Ua--;)zs.push(Se({x:Mr,y:Fr,angle:Xe,spread:rt,startVelocity:qe,color:_a[Ua%_a.length],shape:Ha[H(0,Ha.length)],ticks:Sr,decay:Rr,gravity:Pr,drift:xr,scalar:qr,flat:Lr}));return K?K.addFettis(zs):(K=vr(g,zs,G,pe,be),K.promise)}function oe(_){var pe=N||R(_,"disableForReducedMotion",Boolean),be=R(_,"zIndex",Number);if(pe&&ee)return u(function(qe){qe()});z&&K?g=K.canvas:z&&!g&&(g=He(be),document.body.appendChild(g)),O&&!U&&G(g);var ke={width:g.width,height:g.height};j&&!U&&j.init(g),U=!0,j&&(g.__confetti_initialized=!0);function Xe(){if(j){var qe={getBoundingClientRect:function(){if(!z)return g.getBoundingClientRect()}};G(qe),j.postMessage({resize:{width:qe.width,height:qe.height}});return}ke.width=ke.height=null}function rt(){K=null,O&&(A=!1,t.removeEventListener("resize",Xe)),z&&g&&(document.body.contains(g)&&document.body.removeChild(g),g=null,U=!1)}return O&&!A&&(A=!0,t.addEventListener("resize",Xe,!1)),j?j.fire(_,ke,rt):te(_,ke,rt)}return oe.reset=function(){j&&j.reset(),K&&K.reset()},oe}var Ts;function Ga(){return Ts||(Ts=Ia(null,{useWorker:!0,resize:!0})),Ts}function br(g,h,z,O,A,N,I){var j=new Path2D(g),G=new Path2D;G.addPath(j,new DOMMatrix(h));var U=new Path2D;return U.addPath(G,new DOMMatrix([Math.cos(I)*A,Math.sin(I)*A,-Math.sin(I)*N,Math.cos(I)*N,z,O])),U}function kr(g){if(!r)throw new Error("path confetti are not supported in this browser");var h,z;typeof g=="string"?h=g:(h=g.path,z=g.matrix);var O=new Path2D(h),A=document.createElement("canvas"),N=A.getContext("2d");if(!z){for(var I=1e3,j=I,G=I,U=0,ee=0,K,te,oe=0;oe<I;oe+=2)for(var _=0;_<I;_+=2)N.isPointInPath(O,oe,_,"nonzero")&&(j=Math.min(j,oe),G=Math.min(G,_),U=Math.max(U,oe),ee=Math.max(ee,_));K=U-j,te=ee-G;var pe=10,be=Math.min(pe/K,pe/te);z=[be,0,0,be,-Math.round(K/2+j)*be,-Math.round(te/2+G)*be]}return{type:"path",path:h,matrix:z}}function $r(g){var h,z=1,O="#000000",A='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof g=="string"?h=g:(h=g.text,z="scalar"in g?g.scalar:z,A="fontFamily"in g?g.fontFamily:A,O="color"in g?g.color:O);var N=10*z,I=""+N+"px "+A,j=new OffscreenCanvas(N,N),G=j.getContext("2d");G.font=I;var U=G.measureText(h),ee=Math.ceil(U.actualBoundingBoxRight+U.actualBoundingBoxLeft),K=Math.ceil(U.actualBoundingBoxAscent+U.actualBoundingBoxDescent),te=2,oe=U.actualBoundingBoxLeft+te,_=U.actualBoundingBoxAscent+te;ee+=te+te,K+=te+te,j=new OffscreenCanvas(ee,K),G=j.getContext("2d"),G.font=I,G.fillStyle=O,G.fillText(h,oe,_);var pe=1/z;return{type:"bitmap",bitmap:j.transferToImageBitmap(),matrix:[pe,0,0,pe,-ee*pe/2,-K*pe/2]}}s.exports=function(){return Ga().apply(this,arguments)},s.exports.reset=function(){Ga().reset()},s.exports.create=Ia,s.exports.shapeFromPath=kr,s.exports.shapeFromText=$r})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Ta,!1);const is=Ta.exports;Ta.exports.create;const ar=["#F6C6D2","#EBA1B5","#FFFFFF","#F9DCE3","#C9D6AE","#D97A95","#FFE27A"];function ye(e=1){if(Yn())return;const t={colors:ar,shapes:["square"],scalar:.9,zIndex:200,disableForReducedMotion:!0};is({...t,particleCount:Math.round(90*e),spread:76,startVelocity:38,origin:{y:.65},ticks:260}),setTimeout(()=>{is({...t,particleCount:Math.round(55*e),angle:60,spread:60,origin:{x:0,y:.7}}),is({...t,particleCount:Math.round(55*e),angle:120,spread:60,origin:{x:1,y:.7}})},250)}function Fc(e,t){Yn()||is({particleCount:18,spread:70,startVelocity:18,gravity:.6,ticks:80,scalar:.6,origin:{x:e/innerWidth,y:t/innerHeight},colors:ar,shapes:["square"],zIndex:200})}function nr(e){if(e&&e.getBoundingClientRect){const t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top}}return e&&"x"in e?e:{x:innerWidth/2,y:innerHeight*.45}}function za(e,t,s=""){const{x:a,y:n}=nr(t),o=document.createElement("div");o.className=`floaty ${s}`,o.innerHTML=e,o.style.left=`${a}px`,o.style.top=`${n}px`,document.body.appendChild(o),o.addEventListener("animationend",()=>o.remove())}function Cc({xp:e,carrots:t},s){const a=[];e&&a.push(`+${e} XP`),t&&a.push(`${v("carrot",14)}+${t}`),a.length&&za(a.join(" "),s)}function At(e){const{x:t,y:s}=nr(e);for(let a=0;a<5;a++)setTimeout(()=>za(v("heart",16),{x:t+(Math.random()-.5)*60,y:s+10},"heart-float"),a*90)}const ja=[];let ks=!1,or=!1;function vt(e,{onClose:t}={}){ja.push({html:e,onClose:t}),!ks&&!or&&Oa()}function Da(e){or=e,!e&&!ks&&ja.length&&Oa()}function Oa(){const e=ja.shift(),t=document.getElementById("popup");if(!e){ks=!1,t.classList.remove("show");return}ks=!0,t.innerHTML=`<div class="pop-card" role="dialog" aria-modal="true">${e.html}</div>`,t.classList.add("show"),t.onclick=s=>{!s.target.closest("[data-pop-close]")&&s.target!==t||(e.onClose?.(),Oa())}}const qn=5,Ec=15,Ln=100,_t=()=>document.getElementById("session"),Ws=()=>_t().classList.contains("show");let it=null;async function Xa(e){try{e&&"wakeLock"in navigator&&!it&&(it=await navigator.wakeLock.request("screen"),it.addEventListener("release",()=>{it=null})),!e&&it&&(await it.release(),it=null)}catch{}}function ls(e,t=null){const s=D();i.active={date:s,plan:i.plan,day:e,custom:t,step:0,checks:{},rounds:{},row:{},test:{},xp:{},startedAt:Date.now(),xpStart:F().xp};const a=st(i.active).title,n=i.sessions[s]||{};i.sessions[s]={...n,...n.done?{started:!0}:{plan:i.plan,day:e,custom:t,title:a,started:!0,done:!1}},x(),new Date().getHours()<10&&ue("early"),Aa()}function Bc(){const e=i.active,t=D();if(!e||e.date===t)return;const s=e.date;for(const n of Object.keys(i.weights)){const o=i.weights[n],r=o.some(l=>l.d===t);i.weights[n]=o.filter(l=>!(l.d===s&&r)),i.weights[n].forEach(l=>{l.d===s&&(l.d=t)}),i.weights[n].sort((l,d)=>l.d<d.d?-1:1)}i.rows.forEach(n=>{n.date===s&&n.plan===e.plan&&(n.date=t)}),e.date=t,e.startedAt=Date.now();const a=i.sessions[t]||{};i.sessions[t]={...a,...a.done?{}:{plan:e.plan,day:e.day,started:!0,done:!1}},x()}function Aa(){var e,t;(e=i.active).xp||(e.xp={}),(t=i.active).xpStart??(t.xpStart=F().xp),_t().classList.add("show"),document.body.style.overflow="hidden",Xa(!0),Da(!0),Je()}function ua(){_t().classList.remove("show"),document.body.style.overflow="",Xa(!1),Da(!1),M()}const Na=(e,t)=>`s${e}-${t}`;function rr(e,t){const s=st(e);return t.kind==="warmup"?X.warmup.every((a,n)=>e.checks["w"+n]):t.kind==="row"?!!e.checks["r"+t.sec]:t.kind==="strength"||t.kind==="stretch"?s.sections[t.sec].items.every((a,n)=>ps(a)||e.checks[Na(t.sec,n)]):!0}function ir(e,t){const s=st(e);if(t.kind==="warmup")return[X.warmup.filter((a,n)=>e.checks["w"+n]).length,X.warmup.length];if(t.kind==="strength"||t.kind==="stretch"){const a=s.sections[t.sec].items,n=a.filter(o=>!ps(o));return[a.filter((o,r)=>!ps(o)&&e.checks[Na(t.sec,r)]).length,n.length]}return null}function lr(e,t,s){return!i.timers||e<10?"":`<button class="tbtn" data-act="timer" data-s="${e}" data-side="${t?1:0}" data-l="${c(s)}">${v("timer",14)}${Nt(e)}</button>`}function Tc(e,t,s,a,n){const o=Na(t,n),r=!!e.checks[o],l=ps(a),d=_r(s,a),u=In(d);let m="";if(s.kind==="strength"&&!s.bw&&hs(a)&&Ce())m=`<div class="last">${v("heart",14)} Bodyweight this week, no weight needed</div>`;else if(s.kind==="strength"&&!s.bw&&hs(a)){const w=(i.weights[a.name]||[]).find(R=>R.d===e.date),S=Qn(a.name,e.date),P=Zn(a.name,e.date);m=`<div class="last">${S?`Last time <b>${he(S)?c(S.w)+" "+i.unit:"bodyweight"}</b> · ${Dn(S.d)}${S.up?` · <b>go up today</b> ${C("up",{size:14})}`:""}${P!=null?` · best <b>${P}</b>`:""}`:"First time logging this one"}</div>
      <div class="wrow">
        <div class="stepper">
          <button data-act="wstep" data-d="-1" aria-label="Less weight">${C("minus")}</button>
          <input type="number" inputmode="decimal" step="any" min="0" placeholder="${S&&he(S)?c(S.w):"—"}" value="${w&&he(w)?c(w.w):""}" data-wt="${c(a.name)}" aria-label="Weight for ${c(a.name)}">
          <span class="u">${i.unit}</span>
          <button data-act="wstep" data-d="1" aria-label="More weight">${C("plus")}</button>
        </div>
        <button class="upT ${w?.up?"on":""}" data-act="up" data-name="${c(a.name)}">${C("up",{size:14})}Go up next time</button>
      </div>`}const $=s.kind==="strength"&&i.timers&&!u,b=s.kind==="strength"&&!s.bw&&(i.weights[a.name]||[]).some(he)?xt(`<div class="howIn">${Jo(a.name)}</div>`,"Your log"):"";return`<div class="ex ${r?"ok":""} ${l?"opt":""}" id="it-${o}">
    <div class="exTop">${$a(o,r,a.name)}
      <div class="grow">
        <div class="exName">${c(a.name)}</div>
        <div class="exMeta">
          <span class="chip">${c(d)}</span>
          ${lr(u,Yr(d)||/each side/i.test(a.name),a.name)}
          ${$?`<button class="tbtn rest" data-act="rest">${v("moon",14)}Rest ${Nt(i.restSecs)}</button>`:""}
          ${l?`<span class="chip ghost">${Ie()&&Gn(a)?"Skip this week":"Optional for now"}</span>`:""}
        </div>
      </div>
    </div>
    ${m}${xt(so(a))}${b}
  </div>`}const Bs=(e,t,s,a)=>`<div class="shead"><span class="badge">${v(e,32)}</span><div class="grow"><div class="k">${t}</div><h1>${s}</h1></div></div><div class="smeta">${a}</div>`;function zc(e){const t=Bs("sun",`Step ${e.step+1} · before anything else`,"Warm-up",`<span class="chip">${e.day===6?"3 min":"5 min"}</span><span class="chip ghost">6 moves</span>`),s=Re("but","fire",c(me(X.ref.warmupNote)))+X.warmup.map((a,n)=>{const o=!!e.checks["w"+n];return`<div class="ex ${o?"ok":""}" id="it-w${n}"><div class="exTop">${$a("w"+n,o,a.name)}
      <div class="grow"><div class="exName">${c(a.name)}</div><div class="exMeta"><span class="chip">${c(a.amount)}</span>${lr(In(a.amount),!1,a.name)}</div></div></div>
      ${xt(`<div class="howIn"><p>${c(a.steps[0])}</p></div>`)}
    </div>`}).join("")+(Ut().gymfit?`<div class="fit-pill on">${v("heart",16)} Cute gym fit, noted ♡</div>`:`<button class="fit-pill" data-act="gymFit">${v("dumbbell",16)} In a gym fit you feel good in? Tap ♡</button>`);return[t,s]}function jc(e,t,s,a){const n=s.sections[a.sec],o=n.title.startsWith("UPPER"),r=a.kind==="stretch"?"lotus":o?"spark":"dumbbell",l=Bs(r,`Step ${e.step+1} · ${Nr(n)}`,c(us(n.title)),n.meta?`<span class="chip">${c(Ja(n))}</span>`:"");let d=Ie()?Re("lil","moon",Ca):"";if(a.kind==="stretch"){const m=t.info.find($=>$[0]==="Stretch holds");d+=js("Stretching rules",X.ref.stretching,`<b>Plan ${t.n} holds:</b> ${c(m?m[1]:"")}`)}else{!n.bw&&n.items.some(hs)&&(d+=`<button class="nw-toggle ${Ce()?"on":""}" data-act="noWeights">${v("dumbbell",18)}<span><b>No weights this week</b><small>${Ce()?"On: weight boxes hidden until Monday":"Tap if you’re doing these with bodyweight only"}</small></span><span class="switch ${Ce()?"on":""}"></span></button>`),d+=n.bw?js("Bodyweight tips",X.ref.training.filter($=>/^(Progress|Bodyweight plans|Glute and thigh|Skill rules)/.test($.t)),""):js("Weight tips",[...X.ref.kit.slice(0,3),...X.ref.training.slice(0,3)],"");const m=Ja(n).match(/(\d+)(?:-(\d+))?\s*rounds/);if(m){const $=+(m[2]||m[1]),b=e.rounds[a.sec]||0;d+=`<div class="card"><div class="between"><span class="flabel">Rounds done</span><span class="tiny muted">1-${n.items.length} in a row = 1 round</span></div>
        <div class="rounds">${Array.from({length:$},(w,S)=>`<button class="${S<b?"on":""}" data-act="round" data-sec="${a.sec}" data-n="${S+1}">${S+1}</button>`).join("")}</div></div>`}}const u=d+n.items.map((m,$)=>Tc(e,a.sec,n,m,$)).join("")+(n.notes||[]).map(m=>Re("sag","heart",c(m))).join("");return[l,u]}function Dc(e,t,s){const a=t.sections[s.sec],n=/INTERVALS/.test(a.title),o=e.row[s.sec]||{},r=!!e.checks["r"+s.sec],l=_e(),d=l?"ride":"row",u=i.rows.filter(w=>w.type===(n?"intervals":"steady")&&ba(w)===i.cardio&&w.date!==e.date).slice(-1)[0],m=(w,S,P,R='type="number" inputmode="decimal" step="any"',B="")=>`<div class="field"><label for="${w}">${S}</label><input class="inp" id="${w}" ${R} data-row="${s.sec}" data-f="${P}" value="${c(o[P]||"")}" placeholder="${B}"></div>`,$=Bs(va(),`Step ${e.step+1} · Cardio`,c(Kn(a)),`<span class="chip">${n?"Intervals":"Steady"}</span>`),b=(Ie()?Re("lil","moon",Ca):"")+(l?Re("lil","bike",`<b>Spin bike swap:</b> ${c(X.ref.rowing[3].b)}`):"")+`<div class="card"><p class="strong">${a.intro.map(w=>c(me(w))).join(" ")}</p>
        <table class="t mt12">${a.table.map(w=>`<tr><td>${c(w[0])}${Ie()&&/easy week/i.test(w[0])?' <span class="chip lil">this week</span>':""}</td><td>${c(w[1])}</td></tr>`).join("")}</table>
        ${Jn(a).map(w=>`<div class="call feel">${v("heart",16)}<div>${c(w)}</div></div>`).join("")}
        ${xt(`<div class="howIn">${Hr().map(w=>`<div class="rule"><b>${c(w.t)}.</b> ${c(w.b)}</div>`).join("")}</div>`,l?"Spin bike notes":"Rowing notes")}
      </div>
      <div class="card"><h2>Log your ${d}</h2>
        ${u?`<p class="last">Last ${n?"interval":"steady"} ${d} · <b>${c(u.min||"?")} min${u.meters?" · "+Ko(u):""}${u.rounds?" · "+c(u.rounds)+" rounds":""}</b> · ${Dn(u.date)}</p>`:'<p class="last">Your first one. Everything you log here turns into graphs.</p>'}
        <div class="g2">
          ${m("rmin","Time (min)","min",void 0,u?.min?"last "+c(u.min):"min")}
          ${l?m("rm","Distance (km)","km",void 0,u?.km?"last "+c(u.km):"km"):m("rm","Distance (m)","meters",'type="number" inputmode="numeric"',u?.meters?"last "+c(u.meters):"metres")}
          ${n?m("rr","Rounds","rounds",'type="number" inputmode="numeric"'):""}
          ${l?m("rrpm","Avg rpm","rpm",'type="number" inputmode="numeric"',"70-90")+m("rres","Resistance","res",'type="text"',"level"):m("rs","Avg split /500m","split",'type="text" inputmode="numeric"',"e.g. 2:30")+m("rspm","Strokes/min","spm",'type="number" inputmode="numeric"')}
        </div>
        ${m("rn","Notes","note",'type="text"',"Felt strong? Tired?")}
      </div>
      <div class="ex ${r?"ok":""}" id="it-r${s.sec}"><div class="exTop center">${$a("r"+s.sec,r,l?"Ride":"Row")}<div class="exName">${l?"Ride":"Row"} done</div></div></div>`;return[$,b]}function Oc(e,t){const s=vs.find(n=>n.k===e),a=i.tests.filter(n=>n.date!==t).map(n=>Uo(s,n[e])).filter(Boolean);return a[a.length-1]}function Xc(e,t,s){const n=st(e).sections[s.sec],o=e.test,r=n.items.map((P,R)=>{const B=(t.bw&&R===5?vs[t.n>=11?7:6]:vs[R])||{k:"t"+R,type:"text"},H=o[B.k]||{},ne=Oc(B.k,e.date),Z=(ve,de,He)=>`<div class="seg">${de.map(Oe=>`<button class="${(H[ve]||He)===Oe?"on":""}" data-act="tseg" data-k="${B.k}" data-f="${ve}" data-v="${Oe}">${Oe}</button>`).join("")}</div>`,ge=(ve,de,He="decimal",Oe="")=>`<input class="inp" type="number" inputmode="${He}" step="any" placeholder="${de}" data-test="${B.k}" data-f="${ve}" value="${c(H[ve]||"")}" ${Oe}>`;let W;return B.type==="fold"?W=ge("v","cm")+Z("dir",["away","past"],"away"):B.type==="split"?W=ge("v","0 = floor")+Z("u",["cm","pillows"],"cm"):B.type==="secs"?W=ge("v","seconds","numeric",`id="tin-${B.k}"`)+(i.timers?`<button class="btn" data-act="stopwatch" data-k="${B.k}" data-l="${c(P)}">${v("timer",16)}Time it</button>`:""):B.type==="reps"?W=ge("v","reps per leg","numeric"):B.type==="wr"?W=ge("w",i.unit)+'<span class="muted strong">×</span>'+ge("r","reps","numeric"):W=ge("v",""),`<div class="field"><label>${c(P)}</label><div class="tl">${W}</div>${ne?`<span class="tiny muted">Last time <b class="accent">${c(ne)}</b></span>`:""}</div>`}).join(""),l=t.info.find(P=>P[0]==="Goals"),d=t.info.find(P=>P[0]==="Move to next plan"),u=l?l[1].split(/\.\s+|\.$/).map(P=>P.trim()).filter(Boolean):[],m=i.checks.goals[t.n]||[],$={3:["dance","Dance-ready checklist",X.ref.danceNote],6:["top","Top-level checklist",""],10:["goddess","Goddess checklist",""],14:["apex","Apex checklist",""]},b=$[t.n]?Tt($[t.n][0],X.ref[$[t.n][0]],$[t.n][1],$[t.n][2]):"",w=Bs("clip",`Step ${e.step+1} · Review day`,"Test & review",'<span class="chip">Write these down</span>'),S=`<div class="card"><h2>This week’s numbers</h2>${r}<p class="tiny muted mt12">${c(n.notes[0]||"")}</p></div>
    <div class="card"><h2>Plan ${t.n} goals</h2><p class="tiny muted mt4">Tick them as they happen. They stay ticked. +50 XP each.</p>
      <div class="mt8">${u.map((P,R)=>`<div class="chkline"><button class="chk ${m[R]?"on":""}" data-act="goal" data-p="${t.n}" data-i="${R}" aria-pressed="${!!m[R]}">${C("check",{size:15})}</button><span>${c(P)}</span></div>`).join("")}</div>
    </div>
    ${b}
    <div class="card"><h2>How’s the week?</h2><p class="small muted mt4">Move to next plan: ${c(d?d[1]:"")}</p>
      <div class="feelb">${[["easy","lotus","Felt easy"],["right","heart","Just right"],["hard","fire","Tough"]].map(([P,R,B])=>`<button class="${o.feel===P?"on":""}" data-act="tfeel" data-v="${P}">${v(R,26)}${B}</button>`).join("")}</div>
      ${o.feel==="easy"&&t.n<X.plans.length&&t.n!==3?Re("sag","spark",`Sounds like you’re ready for Plan ${t.n+1}: ${c(ae(t.n+1).name)}.<div class="mt8"><button class="btn solid" data-act="setPlanBtn" data-n="${t.n+1}">Move me up</button></div>`):""}
      <div class="field"><label for="tnote">Notes for future you</label><textarea class="inp" id="tnote" data-test="note" data-f="v" placeholder="Wins, niggles, what to focus on next week…">${c(o.note?.v||"")}</textarea></div>
    </div>`;return[w,S]}function Ac(e,t,s=20){const a=Math.round(e*s),n=Math.round(t*s);let o="";for(let r=0;r<s;r++){const l=r<n,d=l&&r>=a;o+=`<i class="${l?"on":""} ${d?"grow":""}" ${d?`style="animation-delay:${500+(r-a)*70}ms"`:""}></i>`}return`<div class="pxbar" style="--n:${s}">${o}</div>`}function Nc(e,t,s){const a=je(),n=Math.max(1,Math.round((Date.now()-(e.startedAt||Date.now()))/6e4)),o=s.sections.filter(b=>b.kind==="strength").flatMap(b=>b.items).filter(b=>(i.weights[b.name]||[]).some(w=>w.d===e.date&&he(w))).length,r=St(e.xpStart??F().xp),l=St(F().xp),d=F().xp-(e.xpStart??F().xp),u=e.tally||[],m=u.reduce((b,w)=>b+(w.carrots||0),0),$=l.level>r.level?0:r.fraction;return`<div class="done">
      <div class="bun">${De({mood:"love",size:140,cls:"bounce"})}</div>
      <h1>You did it!</h1>
      <div class="note">${Gt()?c(Gt()):"so proud of you, gorgeous (˶ᵔ ᵕ ᵔ˶)♡"}</div>
      <p class="muted mt8">${Ne[e.day]} · ${c(me(s.title))} is done.<br>${e.day===6?"Rest well. Muscle grows while you rest.":"Your future self says thank you."}</p>
    </div>
    <div class="card reward-card">
      <div class="between"><span class="lv"><small>LV</small>${l.level}</span><span class="xp-gain">+${d} XP</span>${m?`<span class="purse">${v("carrot",18)}<b>+${m}</b></span>`:""}</div>
      <div class="xp-anim">${Ac($,l.fraction)}</div>
      <div class="tally">${u.map((b,w)=>`<div style="--i:${w}"><span>${c(b.reason)}</span><b>${b.xp?`+${b.xp} XP`:""}${b.carrots?` ${v("carrot",12)}+${b.carrots}`:""}</b></div>`).join("")}</div>
    </div>
    <div class="tiles mt12">
      <div class="tile"><div class="v">${a.cur}</div><div class="l">day streak</div></div>
      <div class="tile"><div class="v">${n}</div><div class="l">minutes</div></div>
      <div class="tile"><div class="v">${t.bw||Ce()?Object.values(e.checks).filter(Boolean).length:o}</div><div class="l">${t.bw||Ce()?"moves done":"weights logged"}</div></div>
    </div>
    ${Yc()}
    ${Cs()?`<button class="gift-btn wide" data-act="gift">${v("gift",34,"wiggle")}<span><b>Unwrap today’s gift</b><small>Something for showing up</small></span></button>`:""}
    ${Re("lil","moon",`<b>${c(X.ref.training[6].t)}.</b> ${c(X.ref.training[6].b)}`)}
    <button class="cta" data-act="finishHome">Back home ${C("right")}</button>
    <div style="height:30px"></div>`}function Yc(){const e=Po("workout"),t=Vt(),s=Ut(),a=[...e.map(r=>({act:"postWin",id:r.item.id,icon:r.item.icon,text:r.item.name,sub:"your if-then plan",done:!!s[r.item.id]})),...t&&!e.some(r=>r.item.id===t.id)?[{act:"postDare",id:t.id,icon:t.icon,text:t.text,sub:"today’s tiny dare",done:t.done}]:[]],n=Fs(),o=Sa(Ht("strong"));return`<div class="card glow-window">
    <div class="between"><h2>While you’re glowing</h2><span class="chip ${n?"sag":"lil"}">${n?"combo done":"combo +30 XP"}</span></div>
    <p class="small muted mt4">${n?"Workout and a femme win today. That’s the whole idea.":"Shower, moisturise, a spritz of perfume, something you feel pretty in. Add one femme win today for the combo."}</p>
    <div class="strong-line">${v("dumbbell",18)}<span class="grow">Strong &amp; fit · ${c(Ro(o.rank))} <b>rank ${o.rank}</b></span><span class="tiny muted">${o.into}/${o.need}</span></div>
    ${a.length?`<div class="glow-list">${a.map(r=>`<button class="glow-row ${r.done?"done":""}" data-act="${r.act}" data-id="${r.id}" ${r.done?"disabled":""}>
      <span class="chk ${r.done?"on":""}">${C("check",{size:16})}</span><span class="q-ic">${v(r.icon,22)}</span>
      <span class="grow">${c(r.text)}<small>${r.sub}</small></span></button>`).join("")}</div>`:""}
  </div>`}function Je(){const e=i.active;if(!e){ua();return}const t=ae(e.plan),s=st(e),a=$s(e);e.step>a.length-1&&(e.step=a.length-1);const n=a[e.step],o=a.length-1,r=ir(e,n),l=r&&r[1]?Math.round(100*r[0]/r[1]):0,d=a.slice(0,-1).map((b,w)=>`<span class="${w<e.step?"d":w===e.step?"c":""}" ${w===e.step?`id="curBar" style="--p:${l}%"`:""}></span>`).join("");let u="",m="";n.kind==="warmup"?[u,m]=zc(e):n.kind==="strength"||n.kind==="stretch"?[u,m]=jc(e,t,s,n):n.kind==="row"?[u,m]=Dc(e,s,n):n.kind==="test"?[u,m]=Xc(e,t,n):m=Nc(e,t,s);let $="";if(n.kind!=="done"){const b=rr(e,n),w=n.kind==="test",S=a[e.step+1].kind==="done";$=`<div class="sfoot"><div class="wrap">
      ${r?`<div class="count" id="cnt">${r[0]} of ${r[1]} done</div>`:""}
      <div id="contBox">${b?cr(w,S):""}</div>
    </div></div>`}_t().innerHTML=`<div class="sbar"><div class="wrap row nowrap">
      <button class="iconbtn" data-act="exitSession" aria-label="Save and close">${C("x")}</button>
      <div class="prog">${n.kind!=="done"?`<div class="t">${Ne[e.day]} · step ${e.step+1} of ${o}</div>`:'<div class="t">All done</div>'}<div class="bar">${d}</div></div>
      <button class="iconbtn" data-act="back" aria-label="Previous step" ${e.step===0||n.kind==="done"?'style="visibility:hidden"':""}>${C("back")}</button>
    </div></div>
    <div class="wrap">${u}${m}</div>${$}`,_t().scrollTop=0}const cr=(e,t)=>`<button class="cta rise" data-act="next">${e?"Save review & finish":t?"Finish session":"Continue"} ${C(t||e?"check":"right")}</button>`;function Wc(){const e=i.active,t=$s(e),s=t[e.step],a=ir(e,s),n=document.getElementById("cnt");n&&a&&(n.textContent=`${a[0]} of ${a[1]} done`);const o=document.getElementById("curBar");o&&a&&o.style.setProperty("--p",Math.round(100*a[0]/a[1])+"%");const r=document.getElementById("contBox"),l=rr(e,s);r&&(l&&!r.innerHTML&&(r.innerHTML=cr(!1,t[e.step+1].kind==="done"),We([20,40,20]),T.step(),(s.kind==="strength"||s.kind==="stretch")&&a&&a[1]>0&&ue("perfect")),l||(r.innerHTML=""))}function Ic(e){const t=i.active,s=e.dataset.k;t.checks[s]=!t.checks[s];const a=t.checks[s];e.classList.toggle("on",a),e.setAttribute("aria-pressed",a),document.getElementById("it-"+s)?.classList.toggle("ok",a),a?(We(12),T.tick(),t.xp[s]||(t.xp[s]=1,t.tickXp=(t.tickXp||0)+qn,Y(qn,0,"",{origin:e}))):T.untick(),x(),Wc()}function Gc(e,t){const s=st(e).sections[t],a=e.row[t];if(!a||!["min","meters","km","rounds","split","note","spm","rpm","res"].some(o=>a[o]))return!1;a.machine||(a.machine=i.cardio),a.machine==="bike"&&a.km&&(a.meters=String(Math.round(+a.km*1e3)));const n=/INTERVALS/.test(s.title)?"intervals":"steady";return i.rows=i.rows.filter(o=>o.extra||!(o.date===e.date&&o.type===n&&ba(o)===a.machine)),i.rows.push({date:e.date,plan:e.plan,type:n,...a}),i.rows.sort((o,r)=>o.date<r.date?-1:1),!0}function _c(e){return Object.keys(e.test).length?(i.tests=i.tests.filter(t=>t.date!==e.date),i.tests.push({date:e.date,plan:e.plan,...JSON.parse(JSON.stringify(e.test))}),i.tests.sort((t,s)=>t.date<s.date?-1:1),!0):!1}function Hc(e){const t=Math.max(1,Math.round((Date.now()-(e.startedAt||Date.now()))/6e4));i.sessions[e.date]={...i.sessions[e.date]||{},plan:e.plan,day:e.day,custom:e.custom||null,title:st(e).title,started:!0,done:!0,at:Date.now(),mins:t},x();const s=e.tally||(e.tally=[]);if(e.liftXp&&s.unshift({reason:"Weights logged",xp:e.liftXp,carrots:0}),e.tickXp&&s.unshift({reason:"Moves ticked",xp:e.tickXp,carrots:0}),se(`${e.date}:session`)){const a=je().cur,n=Math.min(50,a*10);Y(Ln,10,"Session complete",{quiet:!0}),n>0&&Y(Math.round(Ln*n/100),a>=7?5:0,`${a}-day streak bonus`,{quiet:!0});const o=F();o.cakes>0&&(o.cakes--,o.stats.cakes++,Y(lo,0,"Carrot cake",{quiet:!0}))}else Y(25,0,"Encore session",{quiet:!0});ue("finish"),Ma(),qs(),Ls(),ie()}function Vc(){const e=ys("gymfit","style");return Je(),e}function Uc(){const e=i.active,t=$s(e),s=t[e.step];if(s.kind==="row"&&Gc(e,s.sec)&&!e.xp["row"+s.sec]&&(e.xp["row"+s.sec]=1,Y(20,0,`${_e()?"Ride":"Row"} logged`,{quiet:!0}),ue("cardio")),s.kind==="test"&&_c(e)&&!e.xp.review&&(e.xp.review=1,Y(60,5,"Review saved",{quiet:!0}),ue("review")),s.kind!=="test"&&!e.xp["step"+e.step]&&(e.xp["step"+e.step]=1,Y(Ec,0,`${s.kind==="warmup"?"Warm-up":s.kind==="row"?"Cardio":s.kind==="stretch"?"Stretch":"Workout"} step`,{quiet:!0})),s.kind==="stretch"&&ue("stretch"),e.step++,t[e.step].kind==="done"){Hc(e),Je(),T.sessionDone(),ye(),i.active=null,x(),setTimeout(()=>Da(!1),1800);return}x(),Je()}function Kc(e){var r;const t=i.active,s=e.dataset.wt,a=(r=i.weights)[s]||(r[s]=[]);let n=a.find(l=>l.d===t.date);const o=e.value.trim();if(n)n.w=o===""?null:o;else{if(o==="")return;n={d:t.date,p:t.plan,w:o},a.push(n),a.sort((l,d)=>l.d<d.d?-1:1)}n.w==null&&!n.up&&(i.weights[s]=a.filter(l=>l!==n)),i.weights[s].length||delete i.weights[s],x()}function dr(e){const t=i.active,s=e.dataset.wt,a=parseFloat(e.value);if(!t||!s||!(a>0))return;t.xp["w:"+s]||(t.xp["w:"+s]=1,t.liftXp=(t.liftXp||0)+5,Y(5,0,"",{origin:e}),ue("lift"));const n=Qn(s,t.date);n&&he(n)&&a>+n.w&&!t.xp["beat:"+s]&&(t.xp["beat:"+s]=1,ue("beat"));const o=Zn(s,t.date);if(o!=null&&a>o&&!t.xp["pr:"+s]){t.xp["pr:"+s]=1,Y(40,5,`New best: ${s}`,{quiet:!0}),T.pr(),za("NEW BEST!",e,"pr");const r=e.getBoundingClientRect();Fc(r.left+r.width/2,r.top),ie()}}function Jc(e){const t=e.parentElement.querySelector("input"),s=t.value!==""?+t.value:+t.placeholder||0,a=i.unit==="kg"?1:2.5;t.value=Math.max(0,Math.round((s+ +e.dataset.d*a)*100)/100),t.dispatchEvent(new Event("input",{bubbles:!0})),We(8),T.pop(),clearTimeout(t._settle),t._settle=setTimeout(()=>dr(t),900)}function Qc(e){var o;const t=i.active,s=e.dataset.name,a=(o=i.weights)[s]||(o[s]=[]);let n=a.find(r=>r.d===t.date);n||(n={d:t.date,p:t.plan,w:null},a.push(n),a.sort((r,l)=>r.d<l.d?-1:1)),n.up=!n.up,e.classList.toggle("on",n.up),x()}function Zc(e){var n;const t=e.dataset.p,s=+e.dataset.i,a=(n=i.checks.goals)[t]||(n[t]=[]);a[s]=!a[s],e.classList.toggle("on",a[s]),x(),a[s]&&(We(12),T.tick(),se(`goal:${t}:${s}`)&&Y(50,5,"Plan goal ticked",{origin:e}))}const Ya=15,ur=5,pa=96,cs=2*Math.PI*pa,k={mode:"hold",label:"",total:0,left:0,elapsed:0,sides:!1,side:1,phase:"idle",phaseLeft:0,running:!1,last:0,timer:null,target:null,lastBeep:null,halfDone:!1},Wa=()=>document.getElementById("timer");function Is({secs:e=0,sides:t=!1,label:s="",mode:a="hold",target:n=null}){clearInterval(k.timer),Object.assign(k,{mode:a,label:s,target:n,sides:!!t,side:1,total:e,left:e,elapsed:0,phase:"idle",phaseLeft:0,running:!1,lastBeep:null,halfDone:!1}),bt(),Wa().classList.add("show")}function ha(){clearInterval(k.timer),k.running=!1,Wa().classList.remove("show")}const pr=()=>{if(k.mode==="watch")return cs*(1-k.elapsed%60/60);if(k.phase==="ready"||k.phase==="switch"){const e=k.phase==="ready"?Ya:ur;return cs*(k.phaseLeft/e)}return cs*(k.total?k.left/k.total:0)};function hr(){return k.mode==="watch"?Nt(k.elapsed):k.phase==="ready"||k.phase==="switch"?String(Math.ceil(k.phaseLeft)):Nt(k.left)}function mr(){return k.mode==="watch"?"counting up":k.phase==="ready"?"get into position":k.phase==="switch"?"switch sides":k.mode==="rest"?"rest, breathe":k.sides?`side ${k.side} of 2`:"hold"}function ed(){return k.mode==="watch"?"Stopwatch":k.mode==="rest"?"Rest timer":"Hold timer · optional"}function bt(){const e=k.mode==="watch",t=k.phase==="done"?"happy":k.running?"pumped":"idle",s=k.phase==="ready"||k.phase==="switch"?"phase-cue":"";Wa().innerHTML=`<div class="sheet timer-sheet" role="dialog" aria-modal="true" aria-label="Timer"><div class="grab"></div>
    <div class="between">
      <div><div class="lbl">${ed()}</div><h2 class="timer-title">${c(k.label)}</h2></div>
      <button class="iconbtn" data-act="tClose" aria-label="Close">${C("x")}</button>
    </div>
    <div class="ringW ${s}">
      <svg viewBox="0 0 220 220">
        <defs><linearGradient id="rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F7A9BF"/><stop offset="1" stop-color="#A93A61"/></linearGradient></defs>
        <circle cx="110" cy="110" r="${pa}" fill="none" stroke="var(--h0)" stroke-width="16"/>
        <circle id="ringP" cx="110" cy="110" r="${pa}" fill="none" stroke="url(#rg)" stroke-width="16" stroke-dasharray="${cs}" stroke-dashoffset="${pr()}"/>
      </svg>
      <div class="clock"><div class="tm" id="clock">${hr()}</div><div class="sd" id="clockSub">${mr()}</div></div>
      <div class="timer-bunny">${De({mood:t,size:54})}</div>
    </div>
    <div class="tctl">
      ${e?`<button class="sm" data-act="tReset" aria-label="Reset">${C("reset")}</button>`:'<button class="sm" data-act="tAdd" data-s="-15">−15</button>'}
      <button class="play" data-act="tGo" aria-label="${k.running?"Pause":"Start"}">${C(k.running?"pause":"play",{size:30})}</button>
      ${e?`<button class="sm" data-act="tUse" aria-label="Use this time">${C("check")}</button>`:'<button class="sm" data-act="tAdd" data-s="15">+15</button>'}
    </div>
    ${e?'<p class="tiny muted center mt12">Tap the tick to drop the time into your review.</p>':`<div class="row mt16 center-row">${k.phase==="ready"?`<button class="btn solid" data-act="tSkip">${C("play")}Start now</button>`:`<button class="btn" data-act="tReset">${C("reset")}Reset</button>${k.mode==="hold"&&i.getReady&&k.phase==="idle"?`<span class="tiny muted">${Ya} sec to get ready first</span>`:""}`}</div>`}
    ${k.mode==="rest"&&Gt()?`<p class="rest-line">“${c(Gt())}”</p>`:""}
  </div>`}function Gs(){const e=document.getElementById("clock"),t=document.getElementById("clockSub"),s=document.getElementById("ringP");e&&(e.textContent=hr()),t&&(t.textContent=mr()),s&&s.setAttribute("stroke-dashoffset",pr())}function Mn(e){const t=Math.ceil(e);t<=3&&t>=1&&k.lastBeep!==t&&(k.lastBeep=t,T.count())}function fr(){k.phase="run",k.lastBeep=null,T.go(),bt()}function td(){clearInterval(k.timer),k.running=!1,k.phase="done",T.done(),k.mode==="rest"?L("Rest’s up. Next set!","dumbbell"):(L("Hold done","spark"),F().stats.timers++,x(),ue("timer")),bt()}function sd(){const e=Date.now(),t=(e-k.last)/1e3;if(k.last=e,k.mode==="watch")return k.elapsed+=t,Gs();if(k.phase==="ready"||k.phase==="switch"){if(k.phaseLeft-=t,Mn(k.phaseLeft),k.phaseLeft<=0){fr();return}return Gs()}if(k.left-=t,!k.halfDone&&k.total>=20&&k.left<=k.total/2&&(k.halfDone=!0,T.half()),Mn(k.left),k.left<=0){if(k.left=0,k.sides&&k.side===1){k.side=2,k.left=k.total,k.halfDone=!1,k.phase="switch",k.phaseLeft=ur,k.lastBeep=null,T.switchSides(),bt();return}return td()}Gs()}function ad(){er(),k.running=!k.running,clearInterval(k.timer),k.running&&(k.phase==="done"&&gr(!1),k.phase==="idle"&&(k.mode==="hold"&&i.getReady?(k.phase="ready",k.phaseLeft=Ya):(k.phase="run",T.go())),k.running=!0,k.last=Date.now(),k.timer=setInterval(sd,100)),bt()}function nd(){k.phase==="ready"&&(k.phaseLeft=0,fr())}function gr(e=!0){clearInterval(k.timer),Object.assign(k,{running:!1,left:k.total,elapsed:0,side:1,phase:"idle",lastBeep:null,halfDone:!1}),e&&bt()}function od(e){k.left=Math.max(0,k.left+e),k.total=Math.max(k.total,k.left),bt()}const rd=()=>({key:k.target,secs:Math.round(k.elapsed)});function id(){xe(`${Be("Choose your plan")}
    <p class="small muted mt8">${c(X.ref.howto[2])}</p>
    ${[...X.plans,...i.custom.workouts.length?[ae(15)]:[]].map(e=>`<button class="popt ${e.n===i.plan?"on":""}" data-act="setPlan" data-n="${e.n}">
      <span class="n">${e.custom?"♡":e.n}</span>
      <span class="grow"><b>${c(e.name)}</b><br><span class="small muted">${c(e.tagline)}</span></span>
      ${e.n===i.plan?`<span class="chip">${C("check",{size:14})}</span>`:""}
    </button>`).join("")}`)}function _s(e){if(e===i.plan){Fe();return}const t=e>i.plan;i.plan=e,i.planLog.push({plan:e,date:D()}),x(),Fe(),L(ae(e).custom?"My plan it is":`Plan ${e} · ${ae(e).name}`,"bow"),t&&e<=X.plans.length&&se(`plan:${e}`)&&Y(300,40,`Moved up to Plan ${e}`),ie(),M()}function ld(){xe(`${Be("How your streak works")}
    <div class="rule mt8">Every day with a finished session counts, Sunday’s restorative stretch too. Your streak adds up to +50% XP on each session.</div>
    <div class="rule">Each 7 days in a row earns a bow ${v("bow",18)}. You can hold 2.</div>
    <div class="rule">Miss a day and a bow covers it automatically, so one off day never wipes out your work. Saved days show in lilac on your year.</div>
    <div class="rule">Need a spare? Buy one for ${v("carrot",16)} ${gs} carrots in Journey → Extras (up to 3).</div>`)}function cd(e){const t=ae(e),s=e===i.plan;xe(`${Be(`Plan ${t.n} · ${c(t.name)}`)}
    <p class="mt8">${c(t.tagline)}</p>
    <div class="list mt12">${t.info.map(([a,n])=>`<div class="li top"><div class="t">${c(a)}<small class="body">${c(n)}</small></div></div>`).join("")}</div>
    ${s?'<p class="center accent strong">You’re here right now</p>':`<button class="cta mt8" data-act="setPlan" data-n="${t.n}">Make this my plan</button>`}`)}function dd(e){const t=String(e||"").trim().slice(0,18);t&&(i.game.bunny=t,x())}function ud(){hi(e=>{e.type==="gain"&&(e.xp||e.carrots)&&(Cc(e,e.origin),e.carrots&&T.carrot()),e.type==="level"&&(pd(e.level,e.bonus,e.unlocked||[]),setTimeout(()=>ie(),50)),e.type==="title"&&md(e.title),e.type==="prestige"&&(T.levelUp(),ye(1.4),vt(`<div class="pop-burst gold"></div>
        <div class="pop-badge pheart-big">${v("heart",90)}<b>${e.count}</b></div>
        <div class="pop-kicker">Prestige ${e.count}</div>
        <h2>Back to level 1, stronger</h2>
        <p class="muted">Everything you own comes with you.</p>
        <div class="pop-reward">${v("carrot",20)} +500 carrots</div>
        <button class="cta" data-pop-close>Let’s climb</button>`),setTimeout(()=>ie(),100)),e.type==="badge"&&(gt()&&L(`Badge unlocked: ${e.badge.name}`,e.badge.icon),hd(e.badge)),e.type==="quest"&&(L(`Quest done: ${e.quest.text}`,e.quest.icon),T.carrot()),e.type==="chestReady"&&setTimeout(()=>L("All quests done! Chest unlocked","box"),2500),e.type==="weekly"&&setTimeout(()=>L("Weekly goal smashed! +150 XP","trophy"),1200),e.type==="changed"&&!gt()&&ma()})}function ma(){document.querySelector(".player")&&(clearTimeout(ma.t),ma.t=setTimeout(()=>M(),600))}function pd(e,t,s){setTimeout(()=>{T.levelUp(),ye(1.2),vt(`<div class="pop-burst"></div>
      <div class="pop-bunny">${De({mood:"love",size:120,cls:"bounce"})}</div>
      <div class="pop-kicker">Level up!</div>
      <div class="pop-level"><small>LV</small>${e}</div>
      <h2>${ao(e)}</h2>
      <p class="muted">${c(re())} is so proud of you.</p>
      <div class="pop-reward">${v("carrot",20)} +${t} carrots</div>
      ${s.map(a=>`<div class="pop-unlock"><span class="nr-prev">${Ft(a,48)}</span><span>Unlocked<b>${c(a.name)}</b></span></div>`).join("")}
      <button class="cta" data-pop-close>Yay!</button>`)},gt()?900:200)}function hd(e){setTimeout(()=>{T.badge(),vt(`<div class="pop-badge">${v(e.icon,64)}</div>
      <div class="pop-kicker">Badge unlocked</div>
      <h2>${c(e.name)}</h2>
      <p class="muted">${c(e.desc)}</p>
      <div class="pop-reward">${v("carrot",20)} +${e.carrots} carrots</div>
      ${e.reward?`<div class="pop-unlock"><span class="nr-prev">${Ft(Te(e.reward),48)}</span><span>Unlocked<b>${c(Te(e.reward).name)}</b></span></div>`:""}
      <button class="cta" data-pop-close>Nice</button>`)},400)}function md(e){setTimeout(()=>{T.badge(),vt(`<div class="pop-burst"></div>
      <div class="pop-bunny">${De({mood:"love",size:110,cls:"bounce"})}</div>
      <div class="pop-kicker">New title unlocked</div>
      <h2>${c(e.name)}</h2>
      <p class="muted">${c(e.how)}</p>
      <button class="cta" data-act="setTitle" data-id="${e.id}" data-pop-close>Wear this title</button>
      <button class="btn mt8 full" data-pop-close>Maybe later</button>`)},500)}function fd(){const e=F();if(!e.welcome)return;const t=e.welcome;vt(`<div class="pop-bunny">${Ra({mood:"love",size:120,cls:"bounce"})}</div>
    <div class="pop-kicker">Meet ${c(re())}</div>
    <h2>Your progress just turned into a game</h2>
    <p class="muted">${c(re())} found your ${t.sessions} past ${t.sessions===1?"session":"sessions"} and counted them all.</p>
    <div class="pop-reward">${v("gem",20)} ${t.xp.toLocaleString()} XP · ${v("carrot",20)} ${t.carrots} carrots</div>
    <p class="tiny muted">Spend carrots on outfits in Journey. Finish sessions and quests to level up.</p>
    <button class="cta" data-pop-close>Let’s go</button>`,{onClose:()=>{e.welcome=null,x(),ye()}})}function gd({item:e,xp:t}){T.gift(),ye(.8),vt(`<div class="pop-burst"></div>
    <div class="pop-kicker">Mystery box</div>
    ${e?`<div class="pop-bunny">${Ft(e,120)}</div><h2>${c(e.name)}</h2><p class="muted">${e.mystery?"A box-only find! ":""}${c(re())} is wearing it now.</p>`:`<div class="pop-badge">${v("gem",64)}</div><h2>You own everything!</h2><div class="pop-reward">+${t} XP instead</div>`}
    <button class="cta" data-pop-close>Love it</button>`)}function Fn(e,t="gift"){T.gift(),ye(.7);const s=[];e.xp&&s.push(`${v("gem",26)} <b>+${e.xp}</b> XP`),e.carrots&&s.push(`${v("carrot",26)} <b>+${e.carrots}</b> carrots`);const a=s.join("<br>");vt(`<div class="pop-badge open-gift">${v(t==="gift"?"gift":"box",72)}</div>
    <div class="pop-kicker">${t==="gift"?e.label==="Jackpot!"?"Jackpot!":"Today’s gift":"Quest chest"}</div>
    <div class="pop-reward big">${a}</div>
    <button class="cta" data-pop-close>Thank you!</button>`)}function Et(e){if(e)if(T.tick(),We(12),e.graduated)ye(.8),T.badge(),L("That one’s yours now (˶ˆ꒳ˆ˵)","heart");else if(e.first)ye(.6),L("First time! So proud of you (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧","heart");else if(e.dare)At(),L("Dare done ✧(˘ᵕ˘)","star");else if(e.month)ye(.8),L(`${e.month.name} complete!`,"cal");else if(e.ranks?.length){const t=e.ranks[e.ranks.length-1];T.badge(),L(`${t.ladder.name} rank ${t.rank} ٩(ˊᗜˋ*)و`,t.ladder.icon)}else e.bonus?(T.carrot(),L(`${pn()} +10 bonus carrots`,"carrot")):e.group==="style"&&L(pn(),"bow")}function Cn(e){xe(`${Be("How did that feel?")}
    <p class="small muted mt8">Honest answer. Watching scary turn into fine is how it gets easier.</p>
    <div class="feel-grid mt12">${Object.entries(La).map(([t,s])=>`<button class="btn" data-act="feel" data-id="${e}" data-k="${t}">${c(s)}</button>`).join("")}</div>`)}function En(e){e.classList.add("done"),e.disabled=!0,e.querySelector(".chk")?.classList.add("on");const t=e.closest(".glow-window")?.querySelector(".chip");t&&(t.textContent="combo done",t.className="chip sag")}async function wd(){const e=Nn(),t=`lifestyle-backup-${D()}.json`;try{const n=new File([e],t,{type:"application/json"});if(navigator.canShare?.({files:[n]})){await navigator.share({files:[n],title:"Lifestyle backup"}),i.lastBackup=D(),x(),M();return}}catch(n){if(n?.name==="AbortError")return}const s=URL.createObjectURL(new Blob([e],{type:"application/json"})),a=document.createElement("a");a.href=s,a.download=t,document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(s),2e3),i.lastBackup=D(),x(),L("Backup saved","floppy"),M()}function wr(e){let t;try{t=Dr(e)}catch{L("That doesn’t look like a backup from this app","alert");return}confirm("Replace the data on this phone with this backup?")&&(zr(t),xs(),wa(),L("Restored","bow"),ct("home"))}function yd(e){At(e),T.pop(),We(10),e.classList.remove("squish"),e.offsetWidth,e.classList.add("squish"),ue("pet");const t=ln[Math.floor(Math.random()*ln.length)];L(`${re()}: “${t}”`,"bunny")}const vd={pickPlan:()=>id(),closeSheet:()=>Fe(),streakInfo:()=>ld(),setPlan:e=>_s(+e.dataset.n),setPlanBtn:e=>{_s(+e.dataset.n),Ws()&&Je()},homeDay:e=>{q.homeDay=+e.dataset.day===ht(new Date)?null:+e.dataset.day,M()},start:e=>{const t=i.active;t&&t.date===D()&&!confirm("Start fresh? Your unfinished session today will be replaced.")||ls(+e.dataset.day)},startFrom:e=>{const t=+e.dataset.n;if(t!==i.plan){if(!confirm(`Switch to Plan ${t} and start?`))return;_s(t)}i.active&&!confirm("Start fresh? Your unfinished session will be replaced.")||ls(+e.dataset.day)},resume:()=>{Bc(),Aa()},dropActive:()=>{i.active=null,x(),M()},cyc:e=>{q.cycleOff+=+e.dataset.d,M()},cell:e=>{const t=e.dataset.k,s=i.sessions[t],a=s?s.done?me(ya(s)):"started":je().saved.has(t)?"saved by a bow":"nothing logged";L(`${Ee(t,{weekday:"short",day:"numeric",month:"short"})} · ${a}`,s?.done?"heart":null)},exitSession:()=>{x(),ua(),i.active&&L("Saved. Resume any time","bow")},back:()=>{const e=i.active;e?.step>0&&(e.step--,x(),Je())},next:()=>Uc(),finishHome:()=>{q.homeDay=null,ua(),ct("home")},chk:e=>Ic(e),round:e=>{const t=i.active,s=+e.dataset.n,a=e.dataset.sec;t.rounds[a]=t.rounds[a]===s?s-1:s,x(),e.parentElement.querySelectorAll("button").forEach((n,o)=>n.classList.toggle("on",o<t.rounds[a])),We(10),T.pop()},up:e=>Qc(e),wstep:e=>Jc(e),goal:e=>Zc(e),timer:e=>Is({secs:+e.dataset.s,sides:+e.dataset.side,label:e.dataset.l,mode:"hold"}),rest:()=>Is({secs:i.restSecs,label:"Rest between sets",mode:"rest"}),stopwatch:e=>Is({label:e.dataset.l,mode:"watch",target:e.dataset.k}),tGo:()=>ad(),tAdd:e=>od(+e.dataset.s),tReset:()=>gr(),tSkip:()=>nd(),tClose:()=>ha(),tUse:()=>{const{key:e,secs:t}=rd(),s=i.active;if(s&&e){s.test[e]={...s.test[e]||{},v:String(t)},x();const a=document.getElementById("tin-"+e);a&&(a.value=t)}ha()},tseg:e=>{const t=i.active,s=e.dataset.k;t.test[s]={...t.test[s]||{},[e.dataset.f]:e.dataset.v},x(),e.parentElement.querySelectorAll("button").forEach(a=>a.classList.toggle("on",a===e))},tfeel:e=>{const t=i.active;t.test.feel=t.test.feel===e.dataset.v?null:e.dataset.v,x();const s=document.getElementById("session"),a=s.scrollTop;Je(),s.scrollTop=a},cl:e=>{var o;const t=e.dataset.key,s=+e.dataset.i,a=(o=i.checks)[t]||(o[t]=[]);if(a[s]=!a[s],e.classList.toggle("on",a[s]),x(),!a[s])return;T.tick(),se(`list:${t}:${s}`)&&Y(25,0,"",{origin:e});const n=(X.ref[t]||[]).length||6;a.filter(Boolean).length===n&&(ye(),L("Checklist complete!","crown"),ie())},plansSel:e=>{q.plansSel=+e.dataset.n,M()},plansView:e=>{q.plansView=e.dataset.k,M()},progPlan:e=>{q.progPlan=+e.dataset.n,M()},cardio:e=>{i.cardio=e.dataset.k,x(),M(),L(i.cardio==="bike"?"Spin bike it is":"Back to rowing",i.cardio==="bike"?"bike":"row")},theme:e=>{i.theme=e.dataset.k,x(),wa(),M()},unit:e=>{i.unit=e.dataset.k,x(),M()},restSecs:e=>{i.restSecs=+e.dataset.k,x(),M()},timers:()=>{i.timers=!i.timers,x(),M(),L(i.timers?"Timers on":"Timers hidden","timer")},sound:()=>{i.sound=!i.sound,x(),M(),i.sound&&T.step()},noWeights:()=>{if(Kr(!Ce()),i.game?.quests&&!Object.keys(i.game.quests.progress).length&&(i.game.quests=null),x(),L(Ce()?"Bodyweight week. No weight boxes until Monday":"Weights are back","dumbbell"),Ws()){const e=document.getElementById("session"),t=e.scrollTop;Je(),e.scrollTop=t}else M()},getReady:()=>{i.getReady=!i.getReady,x(),M()},install:()=>Fl(),installHide:()=>Cl(),export:()=>wd(),copy:()=>{const e=Nn();(navigator.clipboard?navigator.clipboard.writeText(e):Promise.reject()).then(()=>{i.lastBackup=D(),x(),L("Copied. Paste it somewhere safe","copy"),M()}).catch(()=>{const t=document.getElementById("imptxt");t.value=e,t.select(),L("Selected. Copy it from the box")})},importTxt:()=>wr(document.getElementById("imptxt").value),wipe:()=>{!confirm("Delete everything? This can’t be undone.")||!confirm("Really sure? Maybe save a backup first.")||(jr(),xs(),L("Fresh start","heart"),ct("home"))},bodyLog:()=>{const e=document.getElementById("bodyNow");if(!xi(e.value)){L("Type your weight first","alert");return}e.value="",T.carrot(),L("Logged. Your line’s updated","heart"),M()},bodyGoal:()=>{const e=document.getElementById("bodyGoal");if(!Pi(e.value)){L("Type a goal first","alert");return}e.value="",T.step(),L("Goal saved","journey"),M()},bodyUndo:()=>{confirm("Remove your last weigh-in?")&&(Si(),M())},cardioSheet:()=>yc(),kindMetric:e=>{q.cardioMetric={...q.cardioMetric||{},[e.dataset.kind]:e.dataset.k},M()},xcType:e=>{q.xcType=e.dataset.k,e.parentElement.querySelectorAll("button").forEach(t=>t.classList.toggle("on",t===e)),document.querySelector("[data-act=saveCardio]").dataset.type=e.dataset.k},xcEffort:e=>e.parentElement.querySelectorAll("button").forEach(t=>t.classList.toggle("on",t===e)),saveCardio:e=>{const t=a=>document.getElementById(a).value,s=Li({machine:e.dataset.type,date:t("xcDate")||D(),min:t("xcMin"),km:t("xcKm"),intervals:document.querySelector("[data-act=xcEffort].on")?.dataset.k==="intervals",note:t("xcNote")});if(!s){L("Add a time or a distance","alert");return}Fe(),T.step(),L(`Cardio logged · +${s.xp} XP`,"heart"),M()},delCardio:e=>{confirm("Remove this cardio log?")&&(Mi(+e.dataset.i),M())},glowTick:e=>{const t=ys(e.dataset.id,e.dataset.group);t.on?Et(t):T.untick(),M()},identityIdea:e=>{fn([...E().identity,Fo[+e.dataset.i]]),L("Saved. Make it yours in Edit","heart"),M()},identitySave:()=>{fn([...document.querySelectorAll("[data-identity]")].map(e=>e.value)),q.glowEdit=!1,L("Saved","heart"),M()},proofAdd:()=>{const e=document.getElementById("proofNew");if(!Ni(e.value)){L("Write a moment first","alert");return}T.badge(),At(),L("Filed. That’s real evidence (•̀ᴗ•́)و","scroll"),M()},proofRemove:e=>{confirm("Remove this moment?")&&(Yi(+e.dataset.i),M())},proofAll:()=>{q.proofAll=!q.proofAll,M()},gymFit:()=>Et(Vc()),goFemme:()=>{q.glowView="femme",ct("glow")},glowView:e=>{q.glowView=e.dataset.k,M()},ladder:e=>{q.ladder=q.ladder===e.dataset.id?null:e.dataset.id,M()},stepTick:e=>{const t=xo(e.dataset.id);if(t){if(!t.on){T.untick(),M();return}T.badge(),ye(t.complete?1:.6),t.complete&&L(`${t.ladder.name} ladder done!`,"crown"),M(),Cn(e.dataset.id)}},feel:e=>{Di(e.dataset.id,e.dataset.k),Fe(),L(e.dataset.k==="scary"||e.dataset.k==="awkward"?"You did it anyway. That’s the brave part":"Noted. Remember that next time","heart"),M()},dareDo:()=>{const e=Vt(),t=hn();t&&(Et({...t,dare:!0,first:!1,bonus:!1,graduated:!1}),M(),e?.kind==="step"&&Cn(e.id))},dareSwap:()=>{Xi()&&L("Swapped. This one instead","star"),M()},planAdd:()=>{const e=zi(document.getElementById("planAnchor").value,document.getElementById("planWin").value);L(e?"Plan set. Same cue, same win":"You already have that one",e?"heart":"alert"),M()},planRemove:e=>{ji(+e.dataset.i),M()},postWin:e=>{const t=ys(e.dataset.id,"style");t.on&&(Et(t),En(e))},postDare:e=>{hn()&&(Et({dare:!0}),En(e))},feed:e=>{const t=e.dataset.k==="feast";if(!il(t)){T.nope(),L("Not enough carrots yet","carrot");return}T.carrot(),At(),L(t?`${re()} is in heaven (๑˃ᴗ˂)ﻭ`:`${re()} loved that (っ˘ڡ˘ς)`,"macaron"),M()},yearSheet:()=>Pl(),stars:e=>{const t=cl(+e.dataset.n);if(!t){T.nope(),L("Not enough carrots yet","carrot");return}t.finished?(T.levelUp(),ye(.8),L("Constellation finished ☆ﾟ.*･｡ﾟ","star")):(T.carrot(),L(t.count===1?"A star lights up":`${t.count} stars light up`,"star")),M()},cake:()=>{if(!ll()){T.nope(),L(F().cakes>=3?"Cake shelf is full":"Not enough carrots yet","carrot");return}T.gift(),L("Cake saved for your next session","cake"),M()},glowEdit:()=>{q.glowEdit=!q.glowEdit,M()},glowHide:e=>{_i(e.dataset.id),M()},glowRemove:e=>{confirm("Delete this from your list? Past ticks stay in your history.")&&(Gi(e.dataset.id),M())},glowAdd:e=>{const t=document.getElementById(`glowNew-${e.dataset.group}`);if(!Ii(t.value,e.dataset.group,document.getElementById("glowLadder")?.value)){L("Type something first","alert");return}M()},customNew:()=>kn(null),customEdit:e=>kn(e.dataset.id),customStart:e=>{const t=i.active;t&&t.date===D()&&!confirm("Start fresh? Your unfinished session today will be replaced.")||ls(ht(new Date),e.dataset.id)},cwAdd:()=>Jl(),cwRemove:e=>Ql(+e.dataset.i),cwType:e=>Zl(+e.dataset.i,e.dataset.k==="hold"),cwWarmup:()=>ec(),cwSave:()=>{const e=tc();if(e){L(e,"alert");return}Fe(),T.step(),L("Workout saved","scroll"),M()},cwDelete:()=>{confirm("Delete this workout? Sessions you already did stay in your history.")&&(sc(),Fe(),M())},goMine:()=>{q.plansView="mine",ct("plans")},pet:e=>yd(e),gift:e=>{const t=rl();t&&(e.remove(),Fn(t,"gift"),Ws()||M())},chest:e=>{const t=Ri();t&&(e.remove(),Fn(t,"chest"),M())},mapPlan:e=>cd(+e.dataset.n),badge:e=>{const t=Pe.find(o=>o.id===e.dataset.id),s=i.game.badges[t.id],a=!s&&Kt(t),n=t.reward&&Te(t.reward);xe(`${Be(t.name)}
      <div class="badge-sheet ${s?"":"locked"}">${v(t.icon,72)}</div>
      <p class="center">${t.desc}</p>
      ${a?`<div class="sheet-progress"><span class="mini-bar big"><i style="width:${Math.round(a[0]/a[1]*100)}%"></i></span><b>${a[0]} / ${a[1]}</b></div>`:""}
      <p class="center tiny muted">${s?`Unlocked ${Ee(s,{day:"numeric",month:"long",year:"numeric"})}`:`Worth ${t.carrots} carrots`}</p>
      ${n?`<div class="pop-unlock"><span class="nr-prev">${Ft(n,48)}</span><span>${s?"Came with":"Comes with"}<b>${c(n.name)}</b></span></div>`:""}`)},titleSheet:()=>Wl(),prestigeSheet:()=>{const e=i.game.prestige;xe(`${Be("Prestige")}
      <div class="badge-sheet">${v("heart",72)}</div>
      <p class="center">You’re back to level 1 with a fresh climb ahead. You keep everything: wardrobe, badges, titles, carrots, history.</p>
      <p class="center mt8"><b>You get:</b> a heart showing <b>${e+1}</b> next to your level, ${v("carrot",16)} 500 carrots, and new legendary titles at prestige 1, 3, 5, 10, 25, 100, 444, 1,000 and 4,444.</p>
      <button class="cta mt16" data-act="prestige">${v("heart",20)} Prestige to ${e+1}</button>`)},prestige:()=>{nt().max&&mi()&&(Fe(),M())},setTitle:e=>{const t=e.dataset.id||null;if(t&&!i.game.titles[t]){T.nope(),L("Not unlocked yet","lock");return}i.game.title=t,x(),T.pop(),Fe(),M()},shopTab:e=>{q.shopTab=e.dataset.k,M()},shop:e=>{const t=Te(e.dataset.id),s=Fa(t);al(t.id)?(s.owned?T.pop():T.carrot(),At(e)):(T.nope(),s.mystery?L("Only found in the mystery box","gift"):s.badge?L(`Earn the “${s.badge.name}” badge to unlock`,"trophy"):s.locked?L(`Unlocks at level ${t.level}`,"lock"):L("Not enough carrots yet","carrot")),M()},mystery:()=>{const e=nl();if(!e){T.nope(),L("Not enough carrots yet","carrot");return}gd(e),M()},buyBow:()=>{ol()?(T.badge(),L("Streak bow added","bow")):(T.nope(),L("Not enough carrots yet","carrot")),M()}};function bd(){document.addEventListener("click",e=>{er();const t=e.target.closest("[data-act],[data-tab]");if(!t){e.target.id==="sheet"&&Fe(),e.target.id==="timer"&&ha();return}if(t.dataset.tab){t.closest("#tabs")&&T.pop(),ct(t.dataset.tab);return}vd[t.dataset.act]?.(t,e)}),document.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&e.target.matches?.("[role=button][data-act]")&&(e.preventDefault(),e.target.click())}),document.addEventListener("input",e=>{var a,n;const t=e.target,s=i.active;if(t.dataset.wt!=null&&s)Kc(t);else if(t.dataset.row!=null&&s){const o=(a=s.row)[n=t.dataset.row]||(a[n]={});o[t.dataset.f]=t.value,x()}else if(t.dataset.test&&s){const o=t.dataset.test;s.test[o]={...s.test[o]||{},[t.dataset.f]:t.value},x()}else t.dataset.set==="name"?(i.name=t.value.trim(),x()):t.dataset.set==="bunny"&&dd(t.value)}),document.addEventListener("change",e=>{const t=e.target;if(t.dataset.wt!=null&&dr(t),t.dataset.week!=null&&(i.custom.week[+t.dataset.week]=t.value||null,x(),L(t.value?"Added to your week":"Rest day","cal")),t.id==="impf"){const s=t.files[0];if(!s)return;const a=new FileReader;a.onload=()=>wr(a.result),a.readAsText(s)}})}wa();An();xs();qs();ie({quiet:!0});Mc();bd();ud();let Bn=D();function yr(){D()!==Bn&&(Bn=D(),q.homeDay=null,gt()||M())}setInterval(yr,3e4);document.addEventListener("visibilitychange",()=>{document.hidden||(yr(),gt()&&Xa(!0))});window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),q.installEvt=e,(q.tab==="home"||q.tab==="me")&&!gt()&&M()});window.addEventListener("appinstalled",()=>{q.installEvt=null,L("Installed! Find the bunny on your home screen","bunny"),M()});if(!Wo){window.caches?.delete("workout-v2").catch(()=>{});const e=Date.now(),t=Br({onNeedRefresh(){if(!gt()&&Date.now()-e<15e3){t(!0);return}const s=document.getElementById("update");s.classList.add("show"),s.querySelector("button").onclick=()=>t(!0)}})}const qt=new URLSearchParams(location.search),Tn=qt.get("tab")==="guide"?"plans":qt.get("tab");qt.get("tab")==="guide"&&(q.plansView="guide");ct(Qo.some(e=>e[0]===Tn)?Tn:"home");(qt.has("tab")||qt.has("start"))&&history.replaceState(null,"",location.pathname);const Hs=i.active,zn=Hs&&Hs.date===D()&&!i.sessions[Hs.date]?.done;qt.get("start")==="1"?zn?Aa():ls(ht(new Date)):zn&&L("Your session is still open. Tap Resume","bow");fd();
