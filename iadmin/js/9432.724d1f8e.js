"use strict";(globalThis["webpackChunkadmin_quasar"]=globalThis["webpackChunkadmin_quasar"]||[]).push([[9432],{89432:(t,e,a)=>{function s(t,e,a,s,i,r){return null}a.r(e),a.d(e,{default:()=>u});var i=a(18528)["c"];const r={data(){return{crudId:this.$uid()}},computed:{crudData(){return{crudId:this.crudId,entityName:i("main.qtranslation.entityNames.translation"),apiRoute:"apiRoutes.qtranslation.translations",permission:"translation.translations",extraFormFields:"translation.crud-fields.translations",create:{title:this.$tr("translation.cms.newTranslation")},read:{columns:[{name:"id",label:"ID",field:"id",align:"left"},{name:"value",label:this.$tr("isite.cms.form.description"),field:"value",align:"left"},{name:"actions",label:this.$tr("isite.cms.form.actions"),align:"left"}],requestParams:{include:"parent"}},update:{title:this.$tr("translation.cms.updateTranslation")},delete:!0,formLeft:{id:{value:""},userId:{value:this.$store.state.quserAuth.userId},key:{value:null,type:"input",props:{label:"ID",rules:[t=>!!t||this.$tr("isite.cms.message.fieldRequired")]}},value:{value:null,type:"input",isTranslatable:!0,props:{label:`${this.$tr("isite.cms.form.description")}*`,type:"textarea",rows:"3",rules:[t=>!!t||this.$tr("isite.cms.message.fieldRequired")]}}}}},crudInfo(){return this.$store.state.qcrudComponent.component[this.crudId]||{}}}};var n=a(68716);const l=(0,n.c)(r,[["render",s]]),u=l}}]);