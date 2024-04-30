var F=Object.defineProperty;var N=(t,e,r)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var _=(t,e,r)=>(N(t,typeof e!="symbol"?e+"":e,r),r);import{c as L,g as j,u as V,j as s,A,a as M,i as U,T as D,b as g,L as z,d as H,G as $,F as W,I as G,S as J,M as p,B as E,D as R,C as q,e as Q,f as T,z as I,h as Y,k as K,R as X,l as Z,m as ee}from"./vendor-86aeac57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const{transitions:k}=L(),m="#ed0500",te="#ded5d5",re=L({shape:{borderRadius:5},palette:{primary:{main:j[900],light:j[200]},secondary:{main:m,dark:"#c10400",light:j[200]},background:{default:"white",paper:"white"}},components:{MuiLink:{styleOverrides:{root:{transition:k.create("color",{duration:k.duration.enteringScreen}),"&:hover":{color:m}}}},MuiTabs:{styleOverrides:{flexContainer:{gap:"10px"},indicator:{backgroundColor:m}}},MuiButton:{styleOverrides:{contained:{"&:hover":{background:j[800]}},outlined:{"&:hover":{color:m,borderColor:m,background:"white"}},text:{"&:hover":{color:m,borderColor:m}}}},MuiTab:{defaultProps:{color:"secondary"},styleOverrides:{root:{fontSize:"1rem",borderRadius:"5px","&:hover":{background:j[200]}}}},MuiIconButton:{styleOverrides:{root:{transition:k.create("color",{duration:k.duration.enteringScreen}),color:j[900],"&:hover":{color:m}}}},MuiSwitch:{defaultProps:{color:"secondary"}},MuiToggleButton:{defaultProps:{color:"secondary"},styleOverrides:{root:{transition:k.create("color",{duration:k.duration.enteringScreen}),color:j[900],"&:hover":{color:m},"&.Mui-disabled":{border:"unset",background:j[100]}}}},MuiToggleButtonGroup:{defaultProps:{color:"secondary"}},MuiLinearProgress:{defaultProps:{color:"secondary"}},MuiPaper:{styleOverrides:{root:{boxShadow:"unset",border:"1px solid",borderColor:te}}}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),button:{fontWeight:"bold",textTransform:"none"}}}),w=()=>{var e;const t=V();return s.jsxs(A,{severity:"error",children:[s.jsx(M,{children:"Something went wrong"}),U(t)&&s.jsxs(s.Fragment,{children:[s.jsx(D,{fontWeight:"bold",children:[`Status: ${t.status}`,typeof((e=t.data)==null?void 0:e.detail)=="string"&&t.data.detail].filter(Boolean).join(", ")}),typeof t.data=="string"&&s.jsx(D,{children:t.data})]}),typeof t=="string"&&s.jsx(D,{fontWeight:"bold",children:t})]})},se="modulepreload",oe=function(t){return"/"+t},C={},x=function(e,r,i){if(!r||r.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(r.map(n=>{if(n=oe(n),n in C)return;C[n]=!0;const a=n.endsWith(".css"),d=a?'[rel="stylesheet"]':"";if(!!i)for(let P=o.length-1;P>=0;P--){const b=o[P];if(b.href===n&&(!a||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${d}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":se,a||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),a)return new Promise((P,b)=>{c.addEventListener("load",P),c.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e()).catch(n=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n})},ne=({api:t})=>({loader:()=>t.getVersion()});class y{constructor(){_(this,"at",0);_(this,"ch","");_(this,"text","");_(this,"escapee",{'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"})}error(e){throw{name:"SyntaxError",message:e,at:this.at,text:this.text}}next(){return this.ch=this.text.charAt(this.at++)}check(e){e!==this.ch&&this.error(`Expected '${e}' instead of '${this.ch}'`),this.ch=this.text.charAt(this.at++)}number(){var e="";if(this.ch==="-"&&(e="-",this.check("-")),this.ch==="I")return this.check("I"),this.check("n"),this.check("f"),this.check("i"),this.check("n"),this.check("i"),this.check("t"),this.check("y"),-1/0;for(;this.ch>="0"&&this.ch<="9";)e+=this.ch,this.next();if(this.ch===".")for(e+=".";this.next()&&this.ch>="0"&&this.ch<="9";)e+=this.ch;if(this.ch==="e"||this.ch==="E")for(e+=this.ch,this.next(),(this.ch==="-"||this.ch==="+")&&(e+=this.ch,this.next());this.ch>="0"&&this.ch<="9";)e+=this.ch,this.next();return+e}string(){var e,r,i="",o;if(this.ch==='"')for(;this.next();){if(this.ch==='"')return this.next(),i;if(this.ch==="\\")if(this.next(),this.ch==="u"){for(o=0,r=0;r<4&&(e=parseInt(this.next(),16),!!isFinite(e));r++)o=o*16+e;i+=String.fromCharCode(o)}else if(this.escapee[this.ch])i+=this.escapee[this.ch];else break;else i+=this.ch}this.error("Bad string")}white(){for(;this.ch&&this.ch<=" ";)this.next()}word(){switch(this.ch){case"t":return this.check("t"),this.check("r"),this.check("u"),this.check("e"),!0;case"f":return this.check("f"),this.check("a"),this.check("l"),this.check("s"),this.check("e"),!1;case"n":return this.check("n"),this.check("u"),this.check("l"),this.check("l"),null;case"N":return this.check("N"),this.check("a"),this.check("N"),NaN;case"I":return this.check("I"),this.check("n"),this.check("f"),this.check("i"),this.check("n"),this.check("i"),this.check("t"),this.check("y"),1/0}this.error("Unexpected '"+this.ch+"'")}array(){var e=[];if(this.ch==="["){if(this.check("["),this.white(),this.ch==="]")return this.check("]"),e;for(;this.ch;){if(e.push(this.value()),this.white(),this.ch==="]")return this.check("]"),e;this.check(","),this.white()}}this.error("Bad array")}object(){var e,r={};if(this.ch==="{"){if(this.check("{"),this.white(),this.ch==="}")return this.check("}"),r;for(;this.ch;){if(e=this.string(),this.white(),this.check(":"),Object.hasOwnProperty.call(r,e)&&this.error('Duplicate key "'+e+'"'),r[e]=this.value(),this.white(),this.ch==="}")return this.check("}"),r;this.check(","),this.white()}}this.error("Bad object")}value(){switch(this.white(),this.ch){case"{":return this.object();case"[":return this.array();case'"':return this.string();case"-":return this.number();default:return this.ch>="0"&&this.ch<="9"?this.number():this.word()}}parse(e,r){let i;return this.text=e,this.at=0,this.ch=" ",i=this.value(),this.white(),this.ch&&this.error("Syntax error"),r!==void 0?function o(n,a){var d,f,c=n[a];if(c&&typeof c=="object")for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(f=o(c,d),f!==void 0?c[d]=f:delete c[d]);return r.call(n,a,c)}({"":i},""):i}}async function l(...t){const e=await fetch(...t);if(!e.ok&&e.status>=400)throw e;return e}class ie{constructor(e){_(this,"endpoint");this.endpoint=e}async getAdditionalGraphData(e,r,i){const o=await l(`${this.endpoint}/projects/${e}/${r}/graphs_data/${i}`);return new y().parse(await o.text())}async getAdditionalWidgetData(e,r,i){const o=await l(`${this.endpoint}/projects/${e}/${r}/graphs_data/${i}`);return new y().parse(await o.text())}async getDashboard(e,r){const i=await l(`${this.endpoint}/projects/${e}/${r}/data`);return new y().parse(await i.text())}async getProjects(){const e=await l(`${this.endpoint}/projects`);return new y().parse(await e.text())}async getProjectDashboard(e,r,i){const o=new URLSearchParams;r&&o.append("timestamp_start",r),i&&o.append("timestamp_end",i);const n=await l(`${this.endpoint}/projects/${e}/dashboard?${o.toString()}`);return new y().parse(await n.text())}async getReports(e){const r=await l(`${this.endpoint}/projects/${e}/reports`);return new y().parse(await r.text())}async getTestSuites(e){const r=await l(`${this.endpoint}/projects/${e}/test_suites`);return new y().parse(await r.text())}async getProjectInfo(e){const r=await l(`${this.endpoint}/projects/${e}/info`);return new y().parse(await r.text())}async getVersion(){return(await l(`${this.endpoint}/version`)).json()}async editProjectInfo(e){return l(`${this.endpoint}/projects/${e.id}/info`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}async reloadProject(e){return l(`${this.endpoint}/projects/${e}/reload`)}async createProject(e){const r=new URLSearchParams;return e.team_id&&r.append("team_id",e.team_id),(await l(`${this.endpoint}/projects?${r.toString()}`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}async deleteProject(e){return l(`${this.endpoint}/projects/${e}`,{method:"delete"})}}const v=new ie("/api"),ae="/static/img/logo.png",{loader:ce}=ne({api:v}),he={path:"/",lazy:async()=>{const{HomeComponentTemplate:t,...e}=await x(()=>import("./index-56f2df98.js"),["static/js/index-56f2df98.js","static/js/vendor-86aeac57.js","static/js/createSvgIcon-7b76ba23.js"]);return{Component:()=>s.jsx(t,{logoSrc:ae}),...e}},loader:ce,ErrorBoundary:w},de=({api:t})=>({loader:({params:e})=>{const{projectId:r}=e;return g(r,"missing projectId"),t.getProjectInfo(r)}}),le=t=>{if(t.headers.get("Content-type")!=="application/json")throw new Response("Unsupported Media Type",{status:415})};function S(t){return typeof t!=typeof new Date?(console.log(`not a date ${typeof t}: ${t}`),t):`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")}T${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}`}const h={FROM:"date_from",TO:"date_to"},ue=t=>{let e=t.get(h.FROM),r=t.get(h.TO);return{date_from:e,date_to:r}},pe=({dataRanges:t})=>{const[e,r]=Q(),{date_from:i,date_to:o}=ue(e),n=T(i||t.minDate),a=T(o||t.maxDate);return{isCorrectTimeInterval:n.isValid()&&a.isValid()&&(n.isSame(a)||n.isBefore(a)),date_from:n,date_to:a,setSearchParams:r}},Ve=({dataRanges:t})=>{const{isCorrectTimeInterval:e,date_from:r,date_to:i,setSearchParams:o}=pe({dataRanges:t}),n=e?"":"incorrect time interval",a=d=>f=>{o(c=>(c.delete(d),f&&c.append(d,S(f.toDate())),c),{preventScrollReset:!0,replace:!0})};return s.jsx(z,{dateAdapter:H,adapterLocale:"en-gb",children:s.jsxs($,{container:!0,padding:1,zIndex:1,gap:2,justifyContent:"flex-end",justifyItems:"center",children:[s.jsx($,{item:!0,xs:12,md:2,children:s.jsxs(W,{fullWidth:!0,children:[s.jsx(G,{children:"Period"}),s.jsxs(J,{variant:"standard",defaultValue:"",onChange:d=>{const[f,c]=d.target.value.split(",");if(f===""){o(u=>(u.delete(h.FROM),u.delete(h.TO),u.append(h.FROM,S(t.minDate.toDate())),u.append(h.TO,S(t.maxDate.toDate())),u),{preventScrollReset:!0,replace:!0});return}const[P,b]=[Number(f),c],O=t.maxDate.subtract(P,b);o(u=>(u.delete(h.FROM),u.delete(h.TO),u.append(h.FROM,S(O.isBefore(t.minDate)?t.minDate.toDate():O.toDate())),u.append(h.TO,S(t.maxDate.toDate())),u),{preventScrollReset:!0,replace:!0})},children:[s.jsx(p,{value:"",children:s.jsx("em",{children:"None"})}),s.jsx(p,{value:"10,minutes",children:"Last 10 Minutes"}),s.jsx(p,{value:"30,minutes",children:"Last 30 Minutes"}),s.jsx(p,{value:"1,hours",children:"Last 1 Hours"}),s.jsx(p,{value:"2,hours",children:"Last 2 Hours"}),s.jsx(p,{value:"8,hours",children:"Last 8 Hours"}),s.jsx(p,{value:"24,hours",children:"Last 24 Hours"}),s.jsx(p,{value:"7,days",children:"Last 7 Days"}),s.jsx(p,{value:"14,days",children:"Last 14 Days"}),s.jsx(p,{value:"28,days",children:"Last 28 Days"}),s.jsx(p,{value:"60,days",children:"Last 60 Days"})]})]})}),s.jsx($,{item:!0,children:s.jsxs(E,{display:"flex",alignItems:"center",gap:2,children:[s.jsx(R,{minDate:t.minDate,maxDate:t.maxDate&&i,slotProps:{textField:{variant:"standard"}},label:"From",value:r,onChange:a(h.FROM)}),s.jsx(E,{height:1,display:"flex",alignItems:"center",children:s.jsx(D,{children:" - "})}),s.jsx(R,{minDate:t.minDate&&r,maxDate:t.maxDate,slotProps:{textField:{variant:"standard"}},label:"To",value:i,onChange:a(h.TO)})]})}),s.jsx($,{item:!0,xs:12,children:s.jsx(q,{unmountOnExit:!0,in:!e,children:s.jsxs(A,{severity:"error",children:[s.jsx(M,{children:"Error"}),n]})})})]})})},fe=({api:t})=>({loader:({params:e,request:r})=>{g(e.projectId,"missing projectId");const{searchParams:i}=new URL(r.url);let o=i.get(h.FROM),n=i.get(h.TO);return o&&!T(o).isValid()&&(o=null),n&&!T(n).isValid()&&(n=null),t.getProjectDashboard(e.projectId,o,n)}}),{loader:me}=fe({api:v}),je={index:!0,id:"dashboard",lazy:async()=>{const[{DashboardComponentTemplate:t},{DashboardWidgets:e}]=await Promise.all([x(()=>import("./index-645bf5a2.js"),["static/js/index-645bf5a2.js","static/js/vendor-86aeac57.js"]),x(()=>import("./DashboardWidgets-faebfd0a.js"),["static/js/DashboardWidgets-faebfd0a.js","static/js/vendor-86aeac57.js","static/js/DashboardContent-f2965403.js","static/js/createSvgIcon-7b76ba23.js","static/js/Edit-11ed00d6.js"])]);return{Component:()=>s.jsx(t,{Dashboard:({data:{widgets:r}})=>s.jsx(e,{widgets:r})})}},loader:me,ErrorBoundary:w},ye=({api:t})=>({loader:({params:e})=>(g(e.projectId,"missing projectId"),e.snapshotId?Promise.resolve([]):t.getReports(e.projectId)),action:async({params:e})=>(g(e.projectId,"missing projectId"),t.reloadProject(e.projectId))}),ge=({api:t})=>({loader:({params:e})=>(g(e.projectId,"missing projectId"),e.snapshotId?Promise.resolve([]):t.getTestSuites(e.projectId)),action:async({params:e})=>(g(e.projectId,"missing projectId"),t.reloadProject(e.projectId))}),xe=({api:t})=>({loader:({params:e})=>{const{projectId:r,snapshotId:i}=e;return g(r,"missing projectId"),g(i,"missing testSuiteId"),t.getDashboard(r,i)}}),{loader:we}=xe({api:v}),B={path:":snapshotId",lazy:async()=>{const{SnapshotTemplate:t,...e}=await x(()=>import("./index-139d9074.js"),["static/js/index-139d9074.js","static/js/vendor-86aeac57.js","static/js/DashboardContent-f2965403.js","static/js/createSvgIcon-7b76ba23.js","static/js/Edit-11ed00d6.js"]);return{Component:()=>s.jsx(t,{api:v}),...e}},loader:we,ErrorBoundary:w},{loader:ve,action:Pe}=ye({api:v}),Ie={id:"reports",path:"reports",lazy:async()=>{const{SnapshotsListTemplate:t,...e}=await x(()=>import("./index-30575bf0.js"),["static/js/index-30575bf0.js","static/js/vendor-86aeac57.js","static/js/index-b3429b2b.js","static/js/ContentCopy-1aadaf15.js","static/js/createSvgIcon-7b76ba23.js","static/css/index-77cf86ac.css"]);return{...e,Component:()=>s.jsx(t,{type:"reports"})}},loader:ve,action:Pe,ErrorBoundary:w,children:[B]},{loader:be,action:_e}=ge({api:v}),ke={id:"test_suites",path:"test-suites",lazy:async()=>{const{SnapshotsListTemplate:t,...e}=await x(()=>import("./index-30575bf0.js"),["static/js/index-30575bf0.js","static/js/vendor-86aeac57.js","static/js/index-b3429b2b.js","static/js/ContentCopy-1aadaf15.js","static/js/createSvgIcon-7b76ba23.js","static/css/index-77cf86ac.css"]);return{...e,Component:()=>s.jsx(t,{type:"test suites"})}},loader:be,action:_e,ErrorBoundary:w,children:[B]},{loader:Se}=de({api:v}),De={path:"projects/:projectId",lazy:()=>x(()=>import("./index-145b9f51.js"),["static/js/index-145b9f51.js","static/js/vendor-86aeac57.js","static/js/ContentCopy-1aadaf15.js","static/js/createSvgIcon-7b76ba23.js"]),loader:Se,ErrorBoundary:w,children:[je,Ie,ke]},$e=I.object({action:I.literal("edit-project")}),Te=I.object({action:I.literal("create-new-project")}),Ee=I.object({action:I.literal("delete-project"),projectId:I.string().uuid()}),Oe=({api:t})=>({loader:()=>t.getProjects(),action:async({request:e})=>{le(e);const r=await e.json();if(Te.safeParse(r).success)return t.createProject(r);const i=Ee.safeParse(r);if(i.success)return t.deleteProject(i.data.projectId);if($e.safeParse(r).success)return t.editProjectInfo(r);throw"Undefined action"}}),{loader:Re,action:Ce}=Oe({api:v}),Le={index:!0,lazy:()=>x(()=>import("./index-9dc930e3.js"),["static/js/index-9dc930e3.js","static/js/vendor-86aeac57.js","static/js/Edit-11ed00d6.js","static/js/createSvgIcon-7b76ba23.js","static/js/index-b3429b2b.js"]),loader:Re,action:Ce,ErrorBoundary:w},Ae={path:"*",Component:()=>s.jsx(E,{display:"flex",justifyContent:"center",children:s.jsx(D,{variant:"h4",children:"Page Not Found"})})},Me={...he,children:[Le,De,Ae],ErrorBoundary:w},Be=Y([Me]);K.createRoot(document.getElementById("root")).render(s.jsx(X.StrictMode,{children:s.jsx(Z,{theme:re,children:s.jsx(ee,{router:Be})})}));export{Ve as D};