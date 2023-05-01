import{ac as A,n as d,aI as Z,ab as ee,m as O,k as te,X as y,l as v,R as ne,s as ae,x as oe,aJ as ue,B as le,aG as E,G as z,aK as se,a5 as N,aL as re,Q as ie,L as de,o as x,c as H,f as $,y as D}from"./index-e9572a3e.js";import{u as C}from"./epTheme-fb489aad.js";function fe(){const{$storage:t,$config:e}=A(),a=()=>{Z().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=ee),t.locale||(t.locale={locale:(e==null?void 0:e.Locale)??"zh"},O().locale.value=(e==null?void 0:e.Locale)??"zh"),t.layout||(t.layout={layout:(e==null?void 0:e.Layout)??"vertical",theme:(e==null?void 0:e.Theme)??"default",darkMode:(e==null?void 0:e.DarkMode)??!1,sidebarStatus:(e==null?void 0:e.SidebarStatus)??!0,epThemeColor:(e==null?void 0:e.EpThemeColor)??"#409EFF"}),t.configure||(t.configure={grey:(e==null?void 0:e.Grey)??!1,weak:(e==null?void 0:e.Weak)??!1,hideTabs:(e==null?void 0:e.HideTabs)??!1,showLogo:(e==null?void 0:e.ShowLogo)??!0,showModel:(e==null?void 0:e.ShowModel)??"smart",multiTagsCache:(e==null?void 0:e.MultiTagsCache)??!1})},n=d(()=>t==null?void 0:t.layout.layout),u=d(()=>t.layout);return{layout:n,layoutTheme:u,initStorage:a}}const ce=te({id:"pure-app",state:()=>{var t,e;return{sidebar:{opened:((t=y().getItem("responsive-layout"))==null?void 0:t.sidebarStatus)??v().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:((e=y().getItem("responsive-layout"))==null?void 0:e.layout)??v().Layout,device:ne()?"mobile":"desktop"}},getters:{getSidebarStatus(){return this.sidebar.opened},getDevice(){return this.device}},actions:{TOGGLE_SIDEBAR(t,e){const a=y().getItem("responsive-layout");t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,a.sidebarStatus=!0):!t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,a.sidebarStatus=!1):!t&&!e&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,a.sidebarStatus=this.sidebar.opened),y().setItem("responsive-layout",a)},async toggleSideBar(t,e){await this.TOGGLE_SIDEBAR(t,e)},toggleDevice(t){this.device=t},setLayout(t){this.layout=t}}});function me(){return ce(ae)}const R="当前路由配置不正确，请检查配置";function he(){var _;const t=me(),e=oe().options.routes,{wholeMenus:a}=ue(le()),n=((_=v())==null?void 0:_.TooltipEffect)??"light",u=d(()=>({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"hidden"})),r=d(()=>{var o;return(o=E())==null?void 0:o.username}),f=d(()=>(o,i)=>({background:o===i?C().epThemeColor:"",color:o===i?"#f4f4f5":"#000"})),h=d(()=>(o,i)=>o===i?"":"dark:hover:!text-primary"),c=d(()=>r.value?{marginRight:"10px"}:""),M=d(()=>!t.getSidebarStatus),T=d(()=>t.getDevice),{$storage:l,$config:s}=A(),m=d(()=>{var o;return(o=l==null?void 0:l.layout)==null?void 0:o.layout}),B=d(()=>s.Title);function w(o){const i=v().Title;i?document.title=`${z(o.title)} | ${i}`:document.title=z(o.title)}function Q(){E().logOut()}function W(){se.push("/welcome")}function U(){N.emit("openPanel")}function J(){t.toggleSideBar()}function K(o){o==null||o.handleResize()}function X(o){var b;if(!o.children)return console.error(R);const i=/^http(s?):\/\//,g=(b=o.children[0])==null?void 0:b.path;return i.test(g)?o.path+"/"+g:g}function q(o,i){if(a.value.length===0||Y(o))return;let g="";const b=o.lastIndexOf("/");b>0&&(g=o.slice(0,b));function S(k,I){return I?I.map(p=>{p.path===k?p.redirect?S(p.redirect,p.children):N.emit("changLayoutRoute",{indexPath:k,parentPath:g}):p.children&&S(k,p.children)}):console.error(R)}S(o,i)}function Y(o){return re.includes(o)}return{title:B,device:T,layout:m,logout:Q,routers:e,$storage:l,backHome:W,onPanel:U,getDivStyle:u,changeTitle:w,toggleSideBar:J,menuSelect:q,handleResize:K,resolvePath:X,isCollapse:M,pureApp:t,username:r,avatarsStyle:c,tooltipEffect:n,getDropdownItemStyle:f,getDropdownItemClass:h}}function Ne(t){const{$storage:e,changeTitle:a,handleResize:n}=he(),{locale:u,t:r}=O(),f=ie();function h(){e.locale={locale:"zh"},u.value="zh",t&&n(t.value)}function c(){e.locale={locale:"en"},u.value="en",t&&n(t.value)}return de(()=>u.value,()=>{a(f.meta)}),{t:r,route:f,locale:u,translationCh:h,translationEn:c}}const ge={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-hidden":"true",class:"globalization",viewBox:"0 0 512 512"},pe=$("path",{fill:"currentColor",d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"},null,-1),ve=[pe];function be(t,e){return x(),H("svg",ge,ve)}const De={render:be},Re={width:1024,height:1024,body:'<path fill="currentColor" d="M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256l512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"/>'},L={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"/Users/admin/Documents/WebDevelop/rms-frontend/node_modules/.pnpm/@pureadmin+theme@3.0.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-default",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #001529 !default;
        $menuHover: #4091f7 !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-light",varsContent:`
        $subMenuActiveText: #409eff !default;
        $menuBg: #fff !default;
        $menuHover: #e0ebf6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: #e13c39 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: #e85f33 !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
      `},{scopeName:"layout-theme-yellow",varsContent:`
        $subMenuActiveText: #d25f00 !default;
        $menuBg: #2b2503 !default;
        $menuHover: #f6da4d !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #f6da4d !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #443b05 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #f6da4d !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: #59bfc1 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: #60ac80 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: #d84493 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: #693ac9 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
      `}]},$e="/rms-frontend/dist/",Te="assets";function V(t){let e=t.replace("#","").match(/../g);for(let a=0;a<3;a++)e[a]=parseInt(e[a],16);return e}function F(t,e,a){let n=[t.toString(16),e.toString(16),a.toString(16)];for(let u=0;u<3;u++)n[u].length==1&&(n[u]=`0${n[u]}`);return`#${n.join("")}`}function ye(t,e){let a=V(t);for(let n=0;n<3;n++)a[n]=Math.floor(a[n]*(1-e));return F(a[0],a[1],a[2])}function Ce(t,e){let a=V(t);for(let n=0;n<3;n++)a[n]=Math.floor((255-a[n])*e+a[n]);return F(a[0],a[1],a[2])}function P(t){return`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`}function G({scopeName:t,multipleScopeVars:e}){const a=Array.isArray(e)&&e.length?e:L.multipleScopeVars;let n=document.documentElement.className;new RegExp(P(t)).test(n)||(a.forEach(u=>{n=n.replace(new RegExp(P(u.scopeName),"g"),` ${t} `)}),document.documentElement.className=n.replace(/(^\s+|\s+$)/g,""))}function j({id:t,href:e}){const a=document.createElement("link");return a.rel="stylesheet",a.href=e,a.id=t,a}function Me(t){const e={scopeName:"theme-default",customLinkHref:r=>r,...t},a=e.themeLinkTagId||L.themeLinkTagId;let n=document.getElementById(a);const u=e.customLinkHref(`${$e.replace(/\/$/,"")}${`/${Te}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(n){n.id=`${a}_old`;const r=j({id:a,href:u});n.nextSibling?n.parentNode.insertBefore(r,n.nextSibling):n.parentNode.appendChild(r),r.onload=()=>{setTimeout(()=>{n.parentNode.removeChild(n),n=null},60),G(e)};return}n=j({id:a,href:u}),G(e),document[(e.themeLinkTagInjectTo||L.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(n)}function Pe(){var T;const{layoutTheme:t,layout:e}=fe(),a=D([{color:"#1b2a47",themeColor:"default"},{color:"#ffffff",themeColor:"light"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#fadb14",themeColor:"yellow"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"},{color:"#eb2f96",themeColor:"pink"},{color:"#722ed1",themeColor:"saucePurple"}]),{$storage:n}=A(),u=D((T=n==null?void 0:n.layout)==null?void 0:T.darkMode),r=document.documentElement;function f(l=v().Theme??"default"){var s,m;if(t.value.theme=l,Me({scopeName:`layout-theme-${l}`}),n.layout={layout:e.value,theme:l,darkMode:u.value,sidebarStatus:(s=n.layout)==null?void 0:s.sidebarStatus,epThemeColor:(m=n.layout)==null?void 0:m.epThemeColor},l==="default"||l==="light")c(v().EpThemeColor);else{const B=a.value.find(w=>w.themeColor===l);c(B.color)}}function h(l,s,m){document.documentElement.style.setProperty(`--el-color-primary-${l}-${s}`,u.value?ye(m,s/10):Ce(m,s/10))}const c=l=>{C().setEpThemeColor(l),document.documentElement.style.setProperty("--el-color-primary",l);for(let s=1;s<=2;s++)h("dark",s,l);for(let s=1;s<=9;s++)h("light",s,l)};function M(){C().epTheme==="light"&&u.value?f("default"):f(C().epTheme),u.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return{body:r,dataTheme:u,layoutTheme:t,themeColors:a,dataThemeChange:M,setEpThemeColor:c,setLayoutThemeColor:f}}const Be={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},we=$("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),Se=$("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"},null,-1),ke=[we,Se];function Le(t,e){return x(),H("svg",Be,ke)}const Ge={render:Le},Ae={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},xe=$("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),He=$("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"},null,-1),_e=[xe,He];function Ie(t,e){return x(),H("svg",Ae,_e)}const je={render:Ie};export{Ne as a,Pe as b,me as c,Re as d,Ge as e,je as f,De as g,fe as h,Me as t,he as u};
