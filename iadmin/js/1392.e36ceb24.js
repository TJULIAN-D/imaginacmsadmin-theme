"use strict";(globalThis["webpackChunkadmin_quasar"]=globalThis["webpackChunkadmin_quasar"]||[]).push([[1392],{41392:(e,t,i)=>{function s(e,t,i,s,r,a){return null}i.r(t),i.d(t,{default:()=>c});i(23816);var r=i(18528)["c"];const a={data(){return{crudId:this.$uid()}},computed:{crudData(){return{crudId:this.crudId,entityName:r("main.qcommerce.entityNames.productOption"),apiRoute:"apiRoutes.qcommerce.options",permission:"icommerce.options",extraFormFields:"Icommerce.crud-fields.productOptions",create:{title:this.$tr("icommerce.cms.newOption"),callback:e=>{e?.id&&this.$router.push({name:"qcommerce.admin.options.edit",params:{id:e.id}})}},read:{columns:[{name:"id",label:this.$tr("isite.cms.form.id"),field:"id",style:"width: 50px"},{name:"description",label:this.$tr("isite.cms.form.description"),field:"description",align:"rigth"},{name:"type",label:this.$tr("isite.cms.form.type"),field:"type",align:"left"},{name:"created_at",label:this.$tr("isite.cms.form.createdAt"),field:"createdAt",align:"left",format:e=>e?this.$trd(e):"-"},{name:"actions",label:this.$tr("isite.cms.form.actions"),align:"left"}],requestParams:{include:""}},update:{title:this.$tr("icommerce.cms.updateOption"),requestParams:{include:""},to:"qcommerce.admin.options.edit"},delete:!0,formLeft:{id:{value:""},userId:{value:this.$store.state.quserAuth.userId},description:{value:"",type:"input",isTranslatable:!0,props:{label:`${this.$tr("isite.cms.form.description")}*`,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}},type:{value:null,type:"select",isTranslatable:!1,props:{label:`${this.$tr("isite.cms.form.type")}*`,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]},loadOptions:{apiRoute:"apiRoutes.qcommerce.optionTypes",select:{label:"label",id:"value"}}},sortOrder:{value:0,type:"input",isTranslatable:!1,props:{type:"number",label:this.$tr("isite.cms.form.sort")}}}}},crudInfo(){return this.$store.state.qcrudComponent.component[this.crudId]||{}}}};var o=i(68716);const l=(0,o.c)(a,[["render",s]]),c=l}}]);