"use strict";(globalThis["webpackChunkadmin_quasar"]=globalThis["webpackChunkadmin_quasar"]||[]).push([[6760],{96760:(t,e,o)=>{o.r(e),o.d(e,{default:()=>y});var i=o(92444),a=o(74044);const s={id:"formFillPage",class:"layout-padding"},l={id:"formFillPageContent",class:"row"},r={class:"col-12"},d={class:"row justify-center"},n={class:"col-xs-12 col-sm-12 col-md-10 col-lg-8 col-xl-8"},m={class:"box box-auto-height"},c={class:"row text-primary text-weight-bold title-content items-center"},u={class:"col-11 ellipsis"},h={id:"formFillPageTitle"},g={class:"col-1"},f={class:"q-mt-lg"};function p(t,e,o,p,b,I){const D=(0,i.E1)("share-link"),y=(0,i.E1)("dynamic-form"),v=(0,i.E1)("inner-loading");return(0,i.Wz)(),(0,i.An)("div",s,[(0,i.QD)("div",l,[(0,i.QD)("div",r,[(0,i.QD)("div",d,[(0,i.QD)("div",n,[(0,i.QD)("div",m,[(0,i.QD)("div",c,[(0,i.QD)("div",u,[(0,i.QD)("label",h,(0,a.WA)(t.$tr("isite.cms.label.form"))+" : "+(0,a.WA)(b.title),1)]),(0,i.QD)("div",g,[b.formData?((0,i.Wz)(),(0,i.Az)(D,{key:0,showIcon:"true",url:b.formData.url,embed:b.formData.embed},null,8,["url","embed"])):(0,i.g1)("",!0)])])]),(0,i.QD)("div",f,[I.getFormId?((0,i.Wz)(),(0,i.Az)(y,{key:0,formType:"grid",formId:I.getFormId,"send-to":{apiRoute:"apiRoutes.qform.leads",extraData:{formId:I.getFormId}},withFeedBack:"",onObtainedForm:I.onObtainedForm,useCaptcha:I.useCaptcha},null,8,["formId","send-to","onObtainedForm","useCaptcha"])):(0,i.g1)("",!0)])])])])]),(0,i.K2)(v,{visible:b.loading},null,8,["visible"])])}const b={props:{formId:{type:Number,default:null}},components:{},watch:{},mounted(){this.$nextTick((function(){this.init()}))},data(){return{loading:!1,title:"",formData:!1}},computed:{getFormId(){return this.$route.params.id||this.formId},getIframeId(){return this.$route.query.formElementId||!1},useCaptcha(){return this.$route.meta.useCaptcha||!1}},methods:{init(){},onObtainedForm(t){this.title=t.title?t.title:"",this.formData=!(!t.url||!t.embed)&&t,this.getIframeId&&this.setParentHeight()},copyUrl(){this.$helper.copyToClipboard(window.location.href,"isite.cms.messages.copyToClipboard")},setParentHeight(){this.loading=!0,setTimeout((()=>{const t={offsetHeight:document.body.offsetHeight,clientHeight:document.body.clientHeight,scrollHeight:document.body.scrollHeight,formElementId:this.getIframeId};window.parent.postMessage(t,"*"),this.loading=!1}),600)}}};var I=o(68716);const D=(0,I.c)(b,[["render",p]]),y=D}}]);