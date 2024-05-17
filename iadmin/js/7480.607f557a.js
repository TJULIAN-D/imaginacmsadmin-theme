"use strict";(globalThis["webpackChunkadmin_quasar"]=globalThis["webpackChunkadmin_quasar"]||[]).push([[7480],{27480:(e,s,t)=>{function i(e,s,t,i,l,a){return null}t.r(s),t.d(s,{default:()=>u});var l=t(18528)["c"];const a={data(){return{crudId:this.$uid()}},computed:{crudData(){return{crudId:this.crudId,entityName:l("main.quser.entityNames.user"),apiRoute:"apiRoutes.quser.users",permission:"profile.user",extraFormFields:"Iprofile.crud-fields.users",create:{title:this.$tr("iprofile.cms.newUser")},read:{requestParams:{include:"roles,departments"},columns:[{name:"id",label:this.$tr("isite.cms.form.id"),field:"id"},{name:"first_name",label:this.$tr("isite.cms.form.name"),field:"fullName",align:"left",sortable:!0},{name:"email",label:this.$tr("isite.cms.form.email"),field:"email",align:"left",sortable:!0},{name:"userName",label:this.$trp("isite.cms.form.userName"),field:"userName",align:"left",sortable:!0,vIf:this.customLogin},{name:"isActivated",label:this.$tr("isite.cms.form.status"),field:"isActivated",asStatus:!0},{name:"roles",label:this.$trp("isite.cms.label.role"),field:"roles",align:"left",classes:"ellipsis",style:"max-width : 250px",format:e=>e?e.map((e=>e.name)).join(", "):""},{name:"departments",label:this.$trp("iprofile.cms.label.userGroup"),field:"departments",align:"left",classes:"ellipsis",style:"max-width : 250px",format:e=>e?e.map((e=>e.title)).join(", "):""},{name:"last_loging",label:this.$tr("iprofile.cms.form.lastLogin"),field:"lastLoginDate",align:"left",format:e=>e?this.$trd(e):"-"},{name:"created_at",label:this.$tr("isite.cms.form.createdAt"),field:"createdAt",align:"left",format:e=>e?this.$trd(e):"-"},{name:"updated_at",label:this.$tr("isite.cms.form.updatedAt"),field:"updatedAt",align:"left",format:e=>e?this.$trd(e):"-"},{name:"actions",label:this.$tr("isite.cms.form.actions"),align:"left"}].filter((e=>void 0==e?.vIf||e?.vIf)),filters:{roleId:{value:null,type:"select",loadOptions:{apiRoute:"apiRoutes.quser.roles",select:{label:"name",id:"id"}},props:{label:`${this.$tr("isite.cms.label.role")}:`,clearable:!0}},departmentId:{value:null,tree:!1,type:"select",loadOptions:{apiRoute:"apiRoutes.quser.departments"},props:{label:`${this.$tr("isite.cms.label.department")}:`,clearable:!0}},status:{value:null,type:"select",props:{label:`${this.$tr("isite.cms.form.status")}:`,options:[{label:this.$tr("isite.cms.label.enabled"),value:"1"},{label:this.$tr("isite.cms.label.disabled"),value:"0"}],clearable:!0}}}},update:{title:this.$tr("iprofile.cms.updateUser"),requestParams:{include:"roles,departments,settings"}},delete:!1,formLeft:{id:{value:null},userId:{value:this.$store.state.quserAuth.userId},firstName:{value:null,type:"input",props:{label:`${this.$trp("isite.cms.form.firstName")} *`,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}},lastName:{value:null,type:"input",props:{label:`${this.$trp("isite.cms.form.lastName")}*`,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}},userName:{value:null,type:"input",props:{label:`${this.$trp("isite.cms.form.userName")} *`,vIf:this.customLogin,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}},email:{value:null,type:"input",props:{label:`${this.$tr("isite.cms.form.email")} *`,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}},phone:{value:null,type:"localizedPhone",props:{label:`${this.$tr("isite.cms.form.phone")}`,mask:"##########"}},isActivated:{value:"1",type:"select",props:{label:`${this.$tr("isite.cms.form.status")}:`,options:[{label:this.$tr("isite.cms.label.enabled"),value:"1"},{label:this.$tr("isite.cms.label.disabled"),value:"0"}]}},changePassword:{value:!1,type:"checkbox",noCrud:!0,props:{label:`${this.$tr("isite.cms.message.updatePassword")}*`,vIf:"update"==this.crudInfo.typeForm}},password:{value:null,type:"input",noCrud:"update"==this.crudInfo.typeForm&&!this.crudInfo.changePassword,props:{label:`${this.$trp("isite.cms.form.password")}*`,type:"password",vIf:"create"==this.crudInfo.typeForm||this.crudInfo.changePassword,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired"),e=>e.length>=6||this.$tr("isite.cms.message.fieldMinLeng",{num:6})]}},passwordConfirmation:{value:null,type:"input",noCrud:"update"==this.crudInfo.typeForm&&!this.crudInfo.changePassword,props:{label:`${this.$trp("isite.cms.form.checkPassword")}*`,type:"password",vIf:"create"==this.crudInfo.typeForm||this.crudInfo.changePassword,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired"),e=>this.crudInfo.password==e||this.$tr("isite.cms.message.fieldCheckPassword")]}}},formRight:{permissions:{allowInherit:!0,type:"permissions",value:{}},roles:{value:[],type:"crud",props:{crudType:"select",crudData:t.e(2428).then(t.bind(t,94808)),crudProps:{label:`${this.$trp("isite.cms.label.role",{capitalize:!0})}*`,multiple:!0,useChips:!0,rules:[e=>!!e&&e.length||this.$tr("isite.cms.message.fieldRequired")]},config:{options:{label:"name",value:"id"}}}},departments:{value:[],type:"crud",props:{crudType:"select",crudData:t.e(952).then(t.bind(t,50952)),crudProps:{label:`${this.$trp("iprofile.cms.label.userGroup")}*`,multiple:!0,useChips:!0,rules:[e=>!!e&&e.length||this.$tr("isite.cms.message.fieldRequired")]}}},assignedRoles:{value:[],type:"select",fakeFieldName:"settings",permission:"profile.permissions.manage",props:{label:"Can manage users with following roles",multiple:!0,clearable:!0,useChips:!0},loadOptions:{apiRoute:"apiRoutes.quser.roles",select:{label:"name",id:"id"}}},assignedDepartments:{value:[],type:"select",fakeFieldName:"settings",permission:"profile.permissions.manage",props:{label:"Can manage departments under following User groups",multiple:!0,clearable:!0,useChips:!0},loadOptions:{apiRoute:"apiRoutes.quser.departments",requestParams:{include:""}}},mediasSingle:{value:{},type:"media",props:{label:this.$tr("iprofile.cms.label.profilePicture"),accept:"images",directUpload:!0,multiple:!1,zone:"profile",entity:"Modules\\User\\Entities\\Sentinel\\User",entityId:{value:this.$store.state.quserAuth.userId}}}}}},crudInfo(){return this.$store.state.qcrudComponent.component[this.crudId]||{}},customLogin(){var e=this.$getSetting("iprofile::customLogin")||[];return e.includes("user_name")}}};var r=t(68716);const o=(0,r.c)(a,[["render",i]]),u=o}}]);