import{d as D,y as p,L as m,r as u,o as v,h as E,i as a,e as l,g as i,c as L,F as N,p as O,v as S}from"./index-16ff979f.js";const R=D({__name:"DialogFormView",props:{visible:{type:Boolean,default:!1},data:{type:Object,default:()=>({})}},emits:["update:visible"],setup(b,{emit:c}){const r=b,V=[{label:"产品",value:1},{label:"运营",value:2},{label:"职能",value:3},{label:"技术",value:4},{label:"设计",value:5},{label:"市场",value:6}],g=p(),s=p(!1),o=p(r.data),y=()=>{s.value=!1};m(()=>s.value,n=>{c("update:visible",n)}),m(()=>r.visible,n=>{s.value=n}),m(()=>r.data,n=>{o.value=n});const x={name:[{required:!0,message:"请输入产品名称",trigger:"blur"}]};return(n,t)=>{const _=u("el-input"),d=u("el-form-item"),f=u("el-radio"),w=u("el-radio-group"),k=u("el-option"),F=u("el-select"),U=u("el-form"),B=u("el-dialog");return v(),E(B,{modelValue:s.value,"onUpdate:modelValue":t[4]||(t[4]=e=>s.value=e),title:"查看岗位",width:680,draggable:"","before-close":y},{default:a(()=>[l(U,{ref_key:"ruleFormRef",ref:g,model:o.value,rules:x,"label-width":"100px",disabled:!0},{default:a(()=>[l(d,{label:"岗位名称",prop:"name"},{default:a(()=>[l(_,{modelValue:o.value.name,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value.name=e),style:{width:"480px"},placeholder:"无"},null,8,["modelValue"])]),_:1}),l(d,{label:"岗位状态",prop:"status"},{default:a(()=>[l(w,{modelValue:o.value.status,"onUpdate:modelValue":t[1]||(t[1]=e=>o.value.status=e)},{default:a(()=>[l(f,{label:"0"},{default:a(()=>[i("停止招聘")]),_:1}),l(f,{label:"1"},{default:a(()=>[i("正在招聘")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(d,{label:"岗位描述",prop:"description"},{default:a(()=>[l(_,{modelValue:o.value.description,"onUpdate:modelValue":t[2]||(t[2]=e=>o.value.description=e),type:"textarea",style:{width:"480px"},placeholder:"无"},null,8,["modelValue"])]),_:1}),l(d,{label:"岗位类型",prop:"type"},{default:a(()=>[l(F,{modelValue:o.value.type,"onUpdate:modelValue":t[3]||(t[3]=e=>o.value.type=e),clearable:"",style:{width:"480px"}},{default:a(()=>[(v(),L(N,null,O(V,(e,C)=>l(k,{key:C,value:e.value,label:e.label},{default:a(()=>[i(S(e.label),1)]),_:2},1032,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}});export{R as _};
