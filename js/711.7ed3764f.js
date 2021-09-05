"use strict";(self["webpackChunkeditor"]=self["webpackChunkeditor"]||[]).push([[711],{9711:(o,e,t)=>{t.r(e),t.d(e,{default:()=>_});var a=t(3673);const l={class:"q-pa-md"},i=(0,a.Uk)(" Copie el dominio "),r={class:"q-pa-md"},n=(0,a.Uk)(" Copie el problema "),s={class:"q-pa-md",style:{"padding-top":"48px","padding-bottom":"220px"}};function c(o,e,t,c,d,p){const m=(0,a.up)("q-item-label"),b=(0,a.up)("q-editor"),u=(0,a.up)("q-separator"),h=(0,a.up)("q-fab-action"),g=(0,a.up)("q-fab"),f=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(f,{class:"flex flex-center"},{default:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a.Wm)(m,{class:"text-subtitle1"},{default:(0,a.w5)((()=>[i])),_:1}),(0,a.Wm)(b,{style:{"min-width":"450px"},modelValue:c.editordominio,"onUpdate:modelValue":e[0]||(e[0]=o=>c.editordominio=o),flat:"","min-height":"450px","content-class":"bg-amber-3","toolbar-text-color":"white","toolbar-toggle-color":"yellow-8","toolbar-bg":"primary",toolbar:[["italic"],[{label:o.$q.lang.editor.formatting,icon:o.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h3","h4","h5","h6","code"]}]]},null,8,["modelValue","toolbar"])]),(0,a.Wm)(u,{inset:""}),(0,a._)("div",r,[(0,a.Wm)(m,{class:"text-subtitle1"},{default:(0,a.w5)((()=>[n])),_:1}),(0,a.Wm)(b,{modelValue:c.editorproblema,"onUpdate:modelValue":e[1]||(e[1]=o=>c.editorproblema=o),flat:"","min-height":"450px",style:{"min-width":"450px"},"content-class":"bg-amber-3","toolbar-text-color":"white","toolbar-toggle-color":"yellow-8","toolbar-bg":"primary",toolbar:[["italic"],[{label:o.$q.lang.editor.formatting,icon:o.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h3","h4","h5","h6","code"]}]]},null,8,["modelValue","toolbar"])]),(0,a._)("div",s,[(0,a._)("div",null,[(0,a.Wm)(g,{modelValue:c.fab1,"onUpdate:modelValue":e[3]||(e[3]=o=>c.fab1=o),color:"primary",glossy:"",icon:"keyboard_arrow_left",direction:"left"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{square:"","external-label":"","label-position":"top",color:"primary",onClick:e[2]||(e[2]=o=>p.enviarProblema()),icon:"outbox",label:"Enviar"}),(0,a.Wm)(h,{square:"","external-label":"","label-position":"top",color:"secondary",onClick:c.onClick,icon:"check",label:"Problema"},null,8,["onClick"]),(0,a.Wm)(h,{square:"","external-label":"","label-position":"top",color:"orange",onClick:c.onClick,icon:"check",label:"Dominio"},null,8,["onClick"])])),_:1},8,["modelValue"])])])])),_:1})}var d=t(1959),p=t(7083),m=t(52),b=t.n(m);const u=b().create({baseURL:"http://ec2-3-15-13-138.us-east-2.compute.amazonaws.com/api"});(0,p.xr)((({app:o})=>{o.config.globalProperties.$axios=b(),o.config.globalProperties.$api=u}));t(6417);var h=t(8825);const g={setup(){(0,h.Z)();return{editordominio:(0,d.iH)(""),editorproblema:(0,d.iH)(""),fab1:(0,d.iH)(!0),onClick(){}}},data(){},methods:{async enviarProblema(){""===this.editordominio?this.$q.notify({type:"negative",message:"El dominio no puede ser vacio"}):""===this.editorproblema?this.$q.notify({type:"negative",message:"El problema no puede ser vacio"}):await u.post("planificador",{dominio:this.editordominio,problema:this.editorproblema}).then((o=>this.respuesta=o.data)).catch((o=>this.$q.notify({type:"negative",message:"Error in the servidor"})))}}};var f=t(4379),q=t(2350),y=t(1588),x=t(5869),k=t(9200),v=t(9975),w=t(7518),C=t.n(w);g.render=c;const _=g;C()(g,"components",{QPage:f.Z,QItemLabel:q.Z,QEditor:y.Z,QSeparator:x.Z,QFab:k.Z,QFabAction:v.Z})}}]);