"use strict";(globalThis["webpackChunkadmin_quasar"]=globalThis["webpackChunkadmin_quasar"]||[]).push([[5420],{85420:(e,s,t)=>{t.r(s),t.d(s,{default:()=>k});var i=t(92444),r=t(74044);const a={id:"userReousrcePage"},o={id:"userReousrcePageContent",class:"row q-col-gutter-md"},l={class:"col-12 col-lg-6 offset-lg-3 relative-position"},n={class:"box box-auto-height q-mb-md"},c={class:"box box-auto-height"};function u(e,s,t,u,h,m){const d=(0,i.E1)("page-actions"),p=(0,i.E1)("dynamic-form"),g=(0,i.E1)("inner-loading"),f=(0,i.E1)("dynamic-field"),$=(0,i.E1)("q-item-section"),b=(0,i.E1)("q-icon"),R=(0,i.E1)("q-item"),v=(0,i.E1)("q-list"),k=(0,i.E1)("master-modal"),y=(0,i.iS)("ripple");return(0,i.Wz)(),(0,i.An)("div",a,[(0,i.QD)("div",o,[(0,i.QD)("div",l,[(0,i.QD)("div",n,[(0,i.K2)(d,{title:e.$route.meta.title,onRefresh:m.init,"extra-actions":m.extraPageActions},null,8,["title","onRefresh","extra-actions"])]),(0,i.K2)(p,(0,i.Gu)({modelValue:h.form,"onUpdate:modelValue":s[0]||(s[0]=e=>h.form=e)},m.formProps,{onSubmit:m.saveResource}),null,16,["modelValue","onSubmit"]),(0,i.K2)(g,{visible:h.loading},null,8,["visible"])])]),!this.userResource?(0,i.g1)("",!0):((0,i.Wz)(),(0,i.Az)(k,{key:0,modelValue:h.shareModal,"onUpdate:modelValue":s[1]||(s[1]=e=>h.shareModal=e),"custom-position":"",title:`${e.$tr("isite.cms.label.share")} | ${e.$route.meta.title}`},{default:(0,i.Ql)((()=>[(0,i.QD)("div",c,[(0,i.K2)(f,{field:m.shareOptions.helpField},null,8,["field"]),(0,i.K2)(v,{rounded:"",separator:""},{default:(0,i.Ql)((()=>[((0,i.Wz)(!0),(0,i.An)(i.ae,null,(0,i.mi)(m.shareOptions.options,((s,t)=>(0,i.wt)(((0,i.Wz)(),(0,i.Az)(R,{clickable:"",key:t,onClick:t=>e.$helper.copyToClipboard(s.path),unelevated:"",round:""},{default:(0,i.Ql)((()=>[(0,i.K2)($,{class:"text-blue-grey"},{default:(0,i.Ql)((()=>[(0,i.mY)((0,r.WA)(s.label),1)])),_:2},1024),(0,i.K2)($,{avatar:""},{default:(0,i.Ql)((()=>[(0,i.K2)(b,{name:"fas fa-copy",color:"info",size:"sm"})])),_:1})])),_:2},1032,["onClick"])),[[y]]))),128))])),_:1})])])),_:1},8,["modelValue","title"]))])}t(23816);const h={props:{},components:{},watch:{},mounted(){this.$nextTick((function(){this.init()}))},data(){return{loading:!1,userResource:!1,form:{},shareModal:!1}},computed:{settings(){return{createExternalMeeting:this.$getSetting("ibooking::createExternalMeeting")}},userData(){return this.$store.state.quserAuth.userData},extraPageActions(){return[{label:this.$tr("isite.cms.label.share"),vIf:!!this.userResource,props:{icon:"fas fa-share-alt"},action:()=>this.shareModal=!0}]},formProps(){let e={formType:"grid",defaultColClass:"col-12",blocks:[{title:this.$tr("isite.cms.label.availability"),fields:{schedule:{value:null,type:"schedulable",props:{}}}},{title:this.$tr("ibooking.cms.myResource"),fields:{mediasSingle:{name:"mediasSingle",value:{},type:"media",fieldItemId:this.userResource.id||null,props:{label:this.$tr("isite.cms.form.firstImage"),zone:"mainimage",entity:"Modules\\Ibooking\\Entities\\Resource",entityId:this.userResource.id||null}},title:{value:this.userData.fullName,type:"input",isTranslatable:!0,props:{label:`${this.$tr("isite.cms.form.title")}*`,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}},slug:{value:this.$helper.getSlug(this.userData.fullName)+"-"+this.$store.state.quserAuth.userId,isTranslatable:!0},status:{value:"1",type:"select",isTranslatable:!1,props:{label:`${this.$tr("isite.cms.form.status")}*`,options:[{label:this.$tr("isite.cms.label.enabled"),value:"1"},{label:this.$tr("isite.cms.label.disabled"),value:"0"}],rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}},services:{value:[],type:"crud",props:{type:"select",crudData:t.e(6108).then(t.bind(t,26108)),crudProps:{label:`${this.$trp("isite.cms.label.service")}*`,multiple:!0,rules:[e=>e.length||this.$tr("isite.cms.message.fieldRequired")]},config:{requestParams:{filter:this.$hasAccess("ibooking.services.manage")?{createdBy:this.$store.state.quserAuth.userId}:{}}}}},description:{value:`${this.userData.fullName}...`,type:"input",isTranslatable:!0,props:{label:`${this.$tr("isite.cms.form.description")}*`,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")],type:"textarea",rows:"3"}}}}]};return this.settings.createExternalMeeting&&e.blocks.push({title:this.$trp("ibooking.cms.meetingPlatform"),fields:{textInfo:{type:"banner",props:{textColor:"white",...this.meetInfoConfig}},email:{value:null,type:"input",fakeFieldName:"options",help:{description:this.$tr("ibooking.cms.termsZoom")},props:{label:`Zoom | ${this.$tr("isite.cms.form.email")}`,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired"),e=>this.$helper.validateEmail(e)||this.$tr("isite.cms.message.fieldEmail")]}}}}),e},meetInfoConfig(){let e=this.userResource&&this.userResource.meetingConfig?this.userResource.meetingConfig.providerStatus:0,s={0:{color:"amber",icon:"fas fa-exclamation-triangle",message:this.$tr("ibooking.cms.message.meet.notFound"),actions:[{props:{label:this.$tr("ibooking.cms.registerZoom")},action:()=>{this.$helper.openExternalURL("https://zoom.us/signin",!0)}}]},1:{color:"info",icon:"fas fa-info-circle",message:this.$tr("ibooking.cms.message.meet.pending")},2:{color:"green",icon:"fas fa-check-circle",message:this.$tr("ibooking.cms.message.meet.success")}};return s[e]},shareOptions(){let e=this.$store.state.qsiteApp.baseUrl,s=[{label:`${this.$tr("isite.cms.label.share")} ${this.$route.meta.title}`,path:`${e}/ibooking/recursos/${this.userResource.id}`}];return(this.userResource.services||[]).forEach((t=>{s.push({label:`${this.$tr("isite.cms.label.share")} ${this.$tr("isite.cms.label.service")}: ${t.title}`,path:`${e}/ipanel/#/booking/reservations/create?resource=${this.userResource.id}&service=${t.id}`})})),{helpField:{type:"banner",props:{message:this.$tr("ibooking.cms.helpShareUserResource")}},options:s}}},methods:{init(){this.getUserResource()},getUserResource(){return new Promise(((e,s)=>{this.loading=!0;let t={refresh:!0,params:{include:"services,schedule.workTimes",filter:{field:"created_by",allTranslations:!0,withMeetingConfig:"zoom"}}};this.$crud.show("apiRoutes.qbooking.resources",this.userData.id,t).then((e=>{this.userResource=e.data,setTimeout((()=>{this.form=this.$clone(e.data),this.loading=!1}),200)})).catch((e=>{this.$apiResponse.handleError(e,(()=>{this.loading=!1}))}))}))},saveResource(){return new Promise(((e,s)=>{this.loading=!0;let t={...this.form,meetingConfig:{providerName:"zoom",email:this.form.options.email}};this.userResource&&this.$crud.update("apiRoutes.qbooking.resources",this.userResource.id,t).then((e=>{this.$alert.info(this.$tr("isite.cms.message.recordUpdated")),this.getUserResource()})).catch((e=>{console.error("update",e),this.loading=!1,this.$alert.error({message:this.$tr("isite.cms.message.recordNoUpdated")})})),this.userResource||this.$crud.create("apiRoutes.qbooking.resources",t).then((e=>{this.$alert.info({message:this.$tr("isite.cms.message.recordUpdated")}),this.getUserResource()})).catch((e=>{console.error("create",e),this.loading=!1,this.$alert.error(this.$tr("isite.cms.message.recordNoUpdated"))}))}))}}};var m=t(68716),d=t(99588),p=t(84884),g=t(11032),f=t(58120),$=t(85220),b=t(95252),R=t.n(b);const v=(0,m.c)(h,[["render",u]]),k=v;R()(h,"components",{QList:d.c,QItem:p.c,QItemSection:g.c,QIcon:f.c}),R()(h,"directives",{Ripple:$.c})}}]);