"use strict";(globalThis["webpackChunkadmin_quasar"]=globalThis["webpackChunkadmin_quasar"]||[]).push([[8280],{58280:(e,t,i)=>{function s(e,t,i,s,l,a){return null}i.r(t),i.d(t,{default:()=>o});var l=i(18528)["c"];const a={data(){return{crudId:this.$uid()}},computed:{crudData(){return{crudId:this.crudId,entityName:l("main.qdocument.entityNames.document"),apiRoute:"apiRoutes.qdocument.documents",permission:"idocs.documents",extraFormFields:"idocs.crud-fields.documents",create:{title:this.$tr("idocs.cms.newDocument")},read:{columns:[{name:"id",label:this.$tr("isite.cms.form.id"),field:"id",sortable:!0},{name:"title",label:this.$tr("isite.cms.form.title"),field:"title",align:"left",sortable:!0},{name:"status",label:this.$tr("isite.cms.form.status"),field:"status",align:"left",asStatus:!0},{name:"private",label:this.$tr("isite.cms.form.type"),field:"private",align:"left",format:e=>e?parseInt(e)?this.$tr("isite.cms.label.private"):this.$tr("isite.cms.label.public"):""},{name:"category",label:this.$tr("isite.cms.form.category"),align:"left",field:"category",sortable:!0,format:e=>e&&e.title?e.title:"-"},{name:"createdAt",label:this.$tr("isite.cms.form.createdAt"),field:"createdAt",format:e=>e?this.$trd(e):"-",align:"left",sortable:!0},{name:"actions",label:this.$tr("isite.cms.form.actions"),align:"center"}],requestParams:{include:"category,qrs"},actions:[{label:this.$tr("isite.cms.label.download"),format:e=>({vIf:!!e.url}),icon:"fas fa-file-download",action:e=>this.$helper.downloadFromURL(e.publicUrl)}]},update:{title:this.$tr("idocs.cms.updateDocument"),requestParams:{include:"users"}},delete:!0,formLeft:{id:{value:""},key:{value:null},title:{value:"",type:"input",isTranslatable:!0,props:{label:`${this.$tr("isite.cms.form.title")}*`,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}},description:{value:"",type:"html",isTranslatable:!0,props:{label:`${this.$tr("isite.cms.form.description")}*`,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}}},formRight:{categoryId:{value:null,type:"crud",props:{crudType:"select",crudData:i.e(4420).then(i.bind(i,36800)),crudProps:{label:`${this.$tr("isite.cms.form.category")}*`,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}}},status:{value:"1",type:"select",props:{label:this.$tr("isite.cms.form.status"),options:[{label:this.$tr("isite.cms.label.enabled"),value:"1"},{label:this.$tr("isite.cms.label.disabled"),value:"0"}]}},private:{value:"0",type:"select",props:{label:this.$tr("isite.cms.form.type"),options:[{label:this.$tr("isite.cms.label.private"),value:"1"},{label:this.$tr("isite.cms.label.public"),value:"0"}]}},users:{value:[],type:"select",props:{label:this.$tr("isite.cms.label.shareWith"),multiple:!0,useChips:!0},loadOptions:{apiRoute:"apiRoutes.quser.users",select:{label:"fullName",id:"id"}}},mediasSingleFile:{name:"mediasSingle",value:{},type:"media",props:{label:`${this.$tr("isite.cms.label.file")}*`,zone:"file",entity:"Modules\\Idocs\\Entities\\Document",entityId:null,disk:"privatemedia",rules:[e=>e&&e.file||this.$tr("isite.cms.message.fieldRequired")]}}}}},crudInfo(){return this.$store.state.qcrudComponent.component[this.crudId]||{}}}};var r=i(68716);const c=(0,r.c)(a,[["render",s]]),o=c}}]);