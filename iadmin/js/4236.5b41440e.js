"use strict";(globalThis["webpackChunkadmin_quasar"]=globalThis["webpackChunkadmin_quasar"]||[]).push([[4236],{44236:(e,t,i)=>{function a(e,t,i,a,s,r){return null}i.r(t),i.d(t,{default:()=>o});var s=i(18528)["c"];const r={mounted(){this.$nextTick((function(){this.init()}))},data(){return{crudId:this.$uid()}},computed:{crudData(){return{crudId:this.crudId,entityName:s("main.qad.entityNames.ad"),apiRoute:"apiRoutes.qad.ads",permission:"iad.ads",extraFormFields:"iad.crud-fields.ads",create:{title:this.$tr("iad.cms.create.ad"),to:{name:"qad.ads.create"}},read:{showAs:"grid",columns:[{name:"id",field:"id",style:"width: 50px",label:"iadmin"==s("app.mode")?this.$tr("isite.cms.form.id"):"",format:e=>"iadmin"==s("app.mode")?e:""},{name:"name",label:this.$tr("isite.cms.form.name"),field:"title",align:"left"},{name:"user",label:this.$tr("iad.cms.form.user"),field:"user",align:"left",format:e=>e?`${e.firstName||""} ${e.lastName||""}`:"-"},{name:"featured",label:this.$tr("isite.cms.label.featured"),field:"featured",align:"left",format:e=>e?this.$tr("isite.cms.label.yes"):this.$tr("isite.cms.label.no")},{name:"checked",label:this.$tr("iad.cms.sidebar.checked"),field:"checked",align:"left",format:e=>1==e?this.$tr("isite.cms.label.yes"):this.$tr("isite.cms.label.no")},{name:"sortOrder",label:this.$tr("isite.cms.label.order"),field:"sortOrder",align:"left",sortable:!0},{name:"created_at",label:this.$tr("isite.cms.form.createdAt"),field:"createdAt",align:"right",format:e=>e?this.$trd(e):"-"},{name:"updated_at",label:this.$tr("isite.cms.form.updatedAt"),field:"updatedAt",align:"right",format:e=>e?this.$trd(e):"-"},{name:"actions",label:this.$tr("isite.cms.form.actions"),align:"left"}],requestParams:{include:"categories,user,qrs",filter:{allTranslations:!0}},filters:{userId:{value:null,type:"select",props:{label:this.$tr("isite.cms.form.createdBy"),clearable:!0},loadOptions:{apiRoute:"apiRoutes.quser.users",select:{label:"fullName",id:"id"},filterByQuery:!0}}},actions:[{icon:"fas fa-eye",color:"info",tooltip:this.$tr("isite.cms.label.view"),action:e=>{this.$helper.openExternalURL(`${this.$store.state.qsiteApp.baseUrl}/anuncios/${e.slug}`,!0)}},{icon:"fas fa-rocket",tooltip:this.$tr("isite.cms.label.pay"),color:"blue",action:e=>{this.$helper.openExternalURL(`${this.$store.state.qsiteApp.baseUrl}/pins/${e.slug}/buy-up`,!0)}}]},update:{title:this.$tr("iad.cms.edit.ad"),to:"qad.ads.edit"},delete:!0,formLeft:{}}},crudInfo(){return this.$store.state.qcrudComponent.component[this.crudId]||{}}},methods:{init(){this.$store.dispatch("qsiteApp/GET_IP_ADDRESS")}}};var l=i(68716);const d=(0,l.c)(r,[["render",a]]),o=d}}]);