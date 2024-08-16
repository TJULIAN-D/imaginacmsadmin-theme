"use strict";(globalThis["webpackChunkadmin_quasar"]=globalThis["webpackChunkadmin_quasar"]||[]).push([[9184],{59184:(e,t,s)=>{function i(e,t,s,i,r,l){return null}s.r(t),s.d(t,{default:()=>d});const r={data(){return{crudId:this.$uid()}},computed:{extraFields(){return this.$clone(this.$getSetting("iprofile::userAddressesExtraFields"))},crudData(){return{crudId:this.crudId,apiRoute:"apiRoutes.quser.addresses",permission:"profile.addresses",create:{title:this.$tr("iprofile.cms.newAddress")},read:{title:this.$trp("isite.cms.label.address"),icon:"fas fa-map-marker-alt",search:!1,columns:[{name:"name",label:this.$tr("isite.cms.form.name"),field:"firstName",align:"left",format:(e,t)=>`${t.firstName} ${t.lastName}`},{name:"country",label:this.$tr("isite.cms.label.country"),field:"country",format:e=>e?e.name:"-",align:"left"},{name:"state",label:this.$tr("isite.cms.form.province"),field:"state",format:e=>e||"-",align:"left"},{name:"city",label:this.$tr("isite.cms.form.city"),field:"city",format:e=>e||"-",align:"left"},{name:"address",label:this.$tr("isite.cms.form.address"),field:"address1",classes:"ellipsis",style:"max-width : 250px",format:e=>e||"-",align:"left"},{name:"actions",label:this.$tr("isite.cms.form.actions"),align:"left"}],requestParams:{filter:{userId:this.$store.state.quserAuth.userId}}},update:{title:this.$tr("iprofile.cms.updateAddress"),requestParams:{include:""}},delete:!0,formLeft:{id:{value:null},userId:{value:this.$store.state.quserAuth.userId},firstName:{value:null,type:"input",props:{label:`${this.$tr("isite.cms.form.firstName")}*`,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}},lastName:{value:null,type:"input",props:{label:`${this.$tr("isite.cms.form.lastName")}*`,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}},countryId:{value:null,type:"select",props:{label:this.$tr("isite.cms.label.country")+"*",rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]},loadOptions:{apiRoute:"apiRoutes.qlocations.countries",select:{label:"name",id:"id"}}},provinceId:{value:null,type:"select",props:{label:this.$tr("isite.cms.label.department")+"*",readonly:!this.crudInfo.countryId,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]},loadOptions:{apiRoute:!!this.crudInfo.countryId&&"apiRoutes.qlocations.provinces",select:{label:"name",id:"id"},requestParams:{filter:{country:this.crudInfo.countryId}}}},cityId:{value:null,type:"select",props:{label:this.$tr("isite.cms.form.city")+"*",readonly:!this.crudInfo.provinceId,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]},loadOptions:{apiRoute:!!this.crudInfo.provinceId&&"apiRoutes.qlocations.cities",select:{label:"name",id:"id"},requestParams:{filter:{province_id:this.crudInfo.provinceId}}}},address1:{value:null,type:"input",props:{label:`${this.$tr("isite.cms.form.address")}*`,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}}},formRight:{telephone:{value:null,type:"input",props:{label:this.$tr("isite.cms.label.phone")+"*",mask:"phone",clearable:!0,unmaskedValue:!0,rules:[e=>!e||10==e.length||this.$tr("isite.cms.message.fieldMinLeng",{num:10})]}},documentType:{value:null,type:"select",isFakeField:!0,props:{label:this.$tr("isite.cms.form.identificationType")+(this.extraFields.documentType&&this.extraFields.documentType.required?"*":""),rules:this.extraFields.documentType&&this.extraFields.documentType.required?[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]:[],options:this.extraFields.documentType&&this.extraFields.documentType.options?this.extraFields.documentType.options.filter((e=>this.extraFields.documentType.availableOptions.indexOf(e.value)>=0)):[]}},documentNumber:{value:null,type:"input",isFakeField:!0,props:{type:"number",label:this.$tr("isite.cms.form.identification")+(this.extraFields.documentType&&this.extraFields.documentType.required?"*":""),rules:this.extraFields.documentType&&this.extraFields.documentType.required?[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]:[]}},company:{value:null,type:"input",props:{label:this.$tr("isite.cms.label.company"),clearable:!0}},extraInfo:{value:"",type:"input",isFakeField:!0,props:{label:`${this.$trp("isite.cms.form.comment")}`,type:"textarea",rows:"3"}}}}},crudInfo(){return this.$store.state.qcrudComponent.component[this.crudId]||{}}},methods:{}};var l=s(68716);const a=(0,l.c)(r,[["render",i]]),d=a}}]);