"use strict";(globalThis["webpackChunkadmin_quasar"]=globalThis["webpackChunkadmin_quasar"]||[]).push([[2472],{72472:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});s(23816);var a=s(92444);const r={id:"formRequestPanelPage"},i={class:"relative-position"},l={class:"box box-auto-height q-mb-md"},o={class:"box box-auto-height q-mb-md"};function u(e,t,s,u,n,d){const c=(0,a.E1)("page-actions"),m=(0,a.E1)("dynamic-field"),h=(0,a.E1)("dynamic-form"),p=(0,a.E1)("inner-loading");return(0,a.Wz)(),(0,a.An)("div",r,[(0,a.QD)("div",i,[(0,a.QD)("div",l,[(0,a.K2)(c,{onRefresh:d.init,title:e.$tr("requestable.cms.newRequest")},null,8,["onRefresh","title"])]),(0,a.QD)("div",o,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(d.formFields,((e,t)=>((0,a.Wz)(),(0,a.Az)(m,{key:t,modelValue:n.formData[t],"onUpdate:modelValue":[e=>n.formData[t]=e,e=>d.setForm(t)],field:e},null,8,["modelValue","onUpdate:modelValue","field"])))),128))]),n.dynamicForm.vIf?((0,a.Wz)(),(0,a.Az)(h,(0,a.Gu)({key:0,requestParams:n.requestParams},n.dynamicForm,{onSent:t[0]||(t[0]=t=>e.$router.push({name:"qrequestable.main.requestables"}))}),null,16,["requestParams"])):(0,a.g1)("",!0),(0,a.K2)(p,{visible:n.loading},null,8,["visible"])])])}const n={props:{},components:{},watch:{},mounted(){this.$nextTick((async function(){this.init(),this.statusList=await this.getStatus(),this.formData.statusId=this.statusList[0].value||null}))},data(){return{loading:!1,categories:[],formData:{categoryType:null,requestedBy:null},categoryType:null,statusList:[],dynamicForm:{vIf:!1},requestParams:{filter:{renderLocation:"requestable"}}}},computed:{formFields(){this.$store.state.quserAuth.userData;return{categoryType:{value:null,type:"select",help:{description:this.$tr("requestable.cms.selectRequestCategoryToForm")},props:{selectByDefault:!0,label:this.$tr("isite.cms.label.category"),options:this.$array.select(this.categories,{label:"title",id:"type"})}},statusId:{value:null,type:"select",permission:"requestable.requestables.filter-status",props:{label:`${this.$tr("isite.cms.form.status")}`,clearable:!0,options:this.statusList}},sourceId:{value:null,type:"crud",permission:"requestable.sources.index",props:{crudType:"select",crudData:s.e(2820).then(s.bind(s,92820)),crudProps:{label:this.$tr("isite.cms.label.source"),rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]},config:{filterByQuery:!0,options:{label:"title",value:"id"}}}},requestedById:{value:null,type:"crud",permission:"profile.user.index",props:{crudType:"select",crudData:s.e(6624).then(s.bind(s,46624)),crudProps:{label:this.$tr("isite.cms.form.requestedBy"),rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]},config:{filterByQuery:!0,options:{label:"fullName",value:"id"}}}},responsibleId:{value:null,type:"crud",permission:"profile.user.index",props:{crudType:"select",crudData:s.e(6624).then(s.bind(s,46624)),crudProps:{vIf:this.$hasAccess("profile.user.index")&&this.$hasAccess("requestable.requestables.assign-responsible"),label:this.$tr("requestable.cms.label.responsible"),rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]},config:{filterByQuery:!0,options:{label:"fullName",value:"id"}}}}}},selectedCategory(){return!!this.formData.categoryType&&this.categories.find((e=>e.type==this.formData.categoryType))}},methods:{init(){this.formData.categoryType=this.$route.query.type||null,this.getData(!0)},getData(e=!1){return new Promise(((t,s)=>{this.loading=!0;let a={refresh:e,params:{filter:{internal:!1}}};this.$crud.index("apiRoutes.qrequestable.categories",a).then((e=>{this.categories=e.data,this.loading=!1})).catch((e=>{this.$apiResponse.handleError(e,(()=>{this.loading=!1}))}))}))},async getStatus(){let e={params:{filter:{categoryId:this.selectedCategory?.id}}};const t=await this.$crud.index("apiRoutes.qrequestable.statuses",e);return t.data.map((e=>({label:e.title,value:e.id})))},async setForm(e){this.statusList.length>0&&this.formCategory()},formCategory(){this.dynamicForm={vIf:!!(this.selectedCategory&&this.selectedCategory.form&&this.formData.statusId),formId:this.selectedCategory?.form?.id||null,sendTo:{apiRoute:"apiRoutes.qrequestable.requestables",extraData:{type:this.formData.categoryType,statusId:this.formData.statusId,requestedBy:this.formData.requestedBy||this.$store.state.quserAuth.userId,responsibleId:this.formData.responsibleId}}}}}};var d=s(68716);const c=(0,d.c)(n,[["render",u]]),m=c}}]);