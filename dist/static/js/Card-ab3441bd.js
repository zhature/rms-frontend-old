import{s as M,c as N,a as V,l as O}from"./calendar-6308fffa.js";import{u as j}from"./user_avatar-f3d361d5.js";import{d as b,n as y,r as i,o as n,c as D,f as a,e as o,i as s,M as g,u as t,h as d,H as c,g as p,v as m,_ as $}from"./index-16ff979f.js";const A={width:24,height:24,body:'<path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"/>'},E=A,F={class:"list-card-item_detail bg-bg_color"},H={class:"list-card-item_detail--operation"},L={class:"list-card-item_detail--name text-text_color_primary"},R={class:"list-card-item_detail--desc text-text_color_regular"},T=b({name:"ReCard"}),q=b({...T,props:{position:{type:Object}},emits:["manage-position","delete-item"],setup(e,{emit:_}){const u=e,C=l=>{_("manage-position",l)},k=l=>{_("delete-item",l)},v=y(()=>["list-card-item",{"list-card-item__disabled":!u.position.isSetup}]),x=y(()=>["list-card-item_detail--logo",{"list-card-item_detail--logo__disabled":!u.position.isSetup}]);return(l,r)=>{const w=i("el-tag"),h=i("IconifyIconOffline"),f=i("el-dropdown-item"),I=i("el-dropdown-menu"),S=i("el-dropdown"),z=i("el-row");return n(),D("div",{class:g(t(v))},[a("div",F,[o(z,{justify:"space-between"},{default:s(()=>[a("div",{class:g(t(x))},[e.position.type===1?(n(),d(t(M),{key:0})):c("",!0),e.position.type===2?(n(),d(t(N),{key:1})):c("",!0),e.position.type===3?(n(),d(t(V),{key:2})):c("",!0),e.position.type===4?(n(),d(t(j),{key:3})):c("",!0),e.position.type===5?(n(),d(t(O),{key:4})):c("",!0)],2),a("div",H,[o(w,{color:e.position.isSetup?"#00a870":"#eee",effect:"dark",class:"mx-1 list-card-item_detail--operation--tag"},{default:s(()=>[p(m(e.position.isSetup?"正在招聘":"停止招聘"),1)]),_:1},8,["color"]),o(S,{trigger:"click",disabled:!e.position.isSetup},{dropdown:s(()=>[o(I,{disabled:!e.position.isSetup},{default:s(()=>[o(f,{onClick:r[0]||(r[0]=B=>C(e.position))},{default:s(()=>[p(" 编辑 ")]),_:1}),o(f,{onClick:r[1]||(r[1]=B=>k(e.position))},{default:s(()=>[p(" 删除 ")]),_:1})]),_:1},8,["disabled"])]),default:s(()=>[o(h,{icon:t(E),class:"text-[24px]"},null,8,["icon"])]),_:1},8,["disabled"])])]),_:1}),a("p",L,m(e.position.name),1),a("p",R,m(e.position.description),1)])],2)}}});const P=$(q,[["__scopeId","data-v-b57ddb6d"]]);export{P as default};
