import{d as m,m as p,y as o,Q as g,u as e,K as h,b as x,w,o as k,c as y,f as R,I as V,_ as b}from"./index-16ff979f.js";const B=["element-loading-text"],E=["src"],I=m({name:"FrameView"}),L=m({...I,setup(S){var i,_,l;const{t:u}=p(),c=o(!0),t=g(),r=o(""),f=o(null);(i=e(t.meta))!=null&&i.frameSrc&&(r.value=(_=e(t.meta))==null?void 0:_.frameSrc),((l=e(t.meta))==null?void 0:l.frameLoading)===!1&&s();function s(){c.value=!1}function d(){V(()=>{const a=e(f);if(!a)return;const n=a;n.attachEvent?n.attachEvent("onload",()=>{s()}):a.onload=()=>{s()}})}return h(()=>{d()}),(a,n)=>{const v=x("loading");return w((k(),y("div",{class:"frame","element-loading-text":e(u)("status.hsLoad")},[R("iframe",{src:r.value,class:"frame-iframe",ref_key:"frameRef",ref:f},null,8,E)],8,B)),[[v,c.value]])}}});const C=b(L,[["__scopeId","data-v-8f8c8b9e"]]);export{C as default};
