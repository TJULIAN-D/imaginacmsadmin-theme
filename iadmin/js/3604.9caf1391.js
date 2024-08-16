"use strict";(globalThis["webpackChunkadmin_quasar"]=globalThis["webpackChunkadmin_quasar"]||[]).push([[3604],{23604:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});var i=s(92444),a=s(74044);const l={id:"settingPage",class:"relative-position"},o={key:1,class:"row q-col-gutter-md"},r={class:"col-xs-12"},n={class:"box box-auto-height"},c={id:"menuContent",class:"col-12 col-md-3"},d={class:"box",style:{padding:"15px 0 !important"}},h={class:"text-primary text-subtitle1 row items-center q-mb-sm q-px-md"},u={class:"col-12 col-md-9"};function g(e,t,s,g,m,p){const S=(0,i.E1)("not-result"),f=(0,i.E1)("page-actions"),y=(0,i.E1)("q-icon"),$=(0,i.E1)("q-item-section"),b=(0,i.E1)("q-item"),k=(0,i.E1)("q-list"),E=(0,i.E1)("q-expansion-item"),q=(0,i.E1)("dynamic-form"),O=(0,i.E1)("inner-loading"),v=(0,i.iS)("ripple");return(0,i.Wz)(),(0,i.An)("div",l,[m.loading||m.dataSettings?((0,i.Wz)(),(0,i.An)("div",o,[(0,i.QD)("div",r,[(0,i.QD)("div",n,[(0,i.K2)(f,{title:p.pageTitle,onRefresh:p.getData},null,8,["title","onRefresh"])])]),(0,i.QD)("div",c,[(0,i.QD)("div",d,[(0,i.QD)("div",h,[(0,i.K2)(y,{name:"fas fa-boxes",class:"q-mr-sm"}),(0,i.mY)(" "+(0,a.WA)(e.$trp("isite.cms.label.module")),1)]),(0,i.K2)(k,{separator:""},{default:(0,i.Ql)((()=>[((0,i.Wz)(!0),(0,i.An)(i.ae,null,(0,i.mi)(m.settingsGroup,((e,t)=>((0,i.Wz)(),(0,i.Az)(E,{key:t,"expand-separator":"",label:p.getModuleData(t).title,"header-style":"min-height: 38px","header-class":"q-pr-sm q-pl-md "+(m.moduleSelected==t?"q-item--active":""),group:"menuSettings"},{default:(0,i.Ql)((()=>[(0,i.K2)(k,{separator:"",class:"q-pl-md"},{default:(0,i.Ql)((()=>[((0,i.Wz)(!0),(0,i.An)(i.ae,null,(0,i.mi)(m.settingsGroup[t],((e,s)=>((0,i.Wz)(),(0,i.An)(i.ae,{key:s},[Object.keys(e).length?(0,i.wt)(((0,i.Wz)(),(0,i.Az)(b,{key:0,clickable:"",active:m.groupSelected==s&&m.moduleSelected==t,class:"q-pl-sm q-pr-md",onClick:e=>p.openGroupSettings(t,s),dense:""},{default:(0,i.Ql)((()=>[(0,i.K2)($,null,{default:(0,i.Ql)((()=>[(0,i.mY)((0,a.WA)(m.groupsName[t][s].title||m.groupsName[t][s]),1)])),_:2},1024),(0,i.K2)($,{side:""},{default:(0,i.Ql)((()=>[(0,i.mY)((0,a.WA)(Object.keys(e).length),1)])),_:2},1024)])),_:2},1032,["active","onClick"])),[[v]]):(0,i.g1)("",!0)],64)))),128))])),_:2},1024)])),_:2},1032,["label","header-class"])))),128))])),_:1})])]),(0,i.QD)("div",u,[m.loading?(0,i.g1)("",!0):((0,i.Wz)(),(0,i.Az)(q,{key:0,modelValue:m.form,"onUpdate:modelValue":t[0]||(t[0]=e=>m.form=e),blocks:[{fields:this.$clone(p.formFields)}],title:`${p.getModuleData(m.moduleSelected).title} - ${m.groupsName[m.moduleSelected][m.groupSelected].title||m.groupsName[m.moduleSelected][m.groupSelected]}`,onSubmit:t[1]||(t[1]=e=>p.saveSettings())},null,8,["modelValue","blocks","title"]))])])):((0,i.Wz)(),(0,i.Az)(S,{key:0,class:"q-my-md"})),(0,i.K2)(O,{visible:m.loading},null,8,["visible"])])}s(23816);const m={mounted(){this.$nextTick((async function(){this.init()}))},data(){return{loading:!1,form:{},locale:{fields:{},fieldsTranslatable:{}},dataSettings:!1,moduleSelected:!1,groupSelected:!1,settingsToEdit:[],deprecatedSettings:[],groupsName:{},allSiteSettings:this.$store.state.qsiteApp.settings,settingsGroup:{}}},computed:{pageTitle(){return this.$tr(this.$route.meta.title)},assignedSettings(){let e=this.$store.state.quserAuth.settings||{},t=e.assignedSettings||[];return Array.isArray(t)?t:[]},formFields(){let e={},t=Object.keys(this.settingsToEdit).length?this.$clone(this.settingsToEdit):this.$clone(this.moduleSelected?this.settingsGroup[this.moduleSelected][this.groupSelected]:[]);return Object.keys(t).forEach((s=>{let i=t[s];e[s]={...i,fieldItemId:this.getSettingId(i,s)}})),e}},methods:{async init(){await this.getData(),this.openSettingName()},getData(){return this.getColorContrast(),new Promise((async e=>{this.loading=!0;const t=await Promise.all([this.$store.dispatch("qsiteApp/GET_SITE_SETTINGS",{centralizedBrand:!1,setToSite:!1}),this.getSettingFields(),this.getDeprecatedSettings()]);this.setSettingsGroup(),this.setGroupsName(),this.allSiteSettings=this.$clone(t[0].siteSettings||[]),!this.moduleSelected&&this.dataSettings&&(this.moduleSelected=Object.keys(this.settingsGroup)[0],this.groupSelected||(this.groupSelected=Object.keys(this.settingsGroup[this.moduleSelected])[0])),this.$store.dispatch("qsiteApp/SET_SITE_COLORS"),this.setFormData(),this.loading=!1,e(!0)}))},getColorContrast(){const e=document.querySelector("#masterDrawers");if(!e)return!1;const t=getComputedStyle(e).getPropertyValue("--q-color-primary"),s=this.$helper.pickTextColor(t);e.style.setProperty("--q-color-contrast",s)},getSettingFields(){return new Promise(((e,t)=>{this.dataSettings=!1;let s={refresh:!0,params:{filter:{allTranslations:!0,configNameByModule:"settings-fields"}}};this.$crud.index("apiRoutes.qsite.configs",s).then((t=>{let s={};if(t.data)for(var i in t.data){let e=t.data[i];e&&Object.keys(e).length&&(s[i]=e)}Object.keys(s).length&&(this.dataSettings=s),e(t.data)})).catch((t=>{this.$apiResponse.handleError(error,(()=>{this.$alert.error(this.$tr("isite.cms.message.errorRequest")),e([])}))}))}))},getDeprecatedSettings(){return new Promise(((e,t)=>{let s={refresh:!0,params:{filter:{configName:"isite.deprecated-settings"}}};this.$crud.index("apiRoutes.qsite.configs",s).then((t=>{this.deprecatedSettings=this.$clone(t.data),e(t.data)})).catch((t=>{this.$apiResponse.handleError(error,(()=>{this.$alert.error(this.$tr("isite.cms.message.errorRequest")),e([])}))}))}))},setGroupsName(){let e=this.$clone(this.dataSettings);const t={};Object.keys(e).forEach((s=>{Object.keys(e[s]).forEach((i=>{let a=e[s][i];t[s]||(t[s]={}),t[s][a.groupName||"General"]=a.groupTitle||"General"}))})),this.groupsName=this.$clone(t)},setSettingsGroup(){let e=this.$clone(this.dataSettings),t={};Object.keys(e).forEach((s=>{t[s]={General:{}},Object.keys(e[s]).forEach((i=>{let a=e[s][i];t[s][a.groupName||"General"]||(t[s][a.groupName||"General"]={}),this.deprecatedSettings.includes(a.name)||this.deprecatedSettings.includes(a.fakeFieldName)||(t[s][a.groupName||"General"][i]=a)}))})),this.assignedSettings.length&&Object.keys(t).forEach((e=>{Object.keys(t[e]).forEach((s=>{Object.keys(t[e][s]).forEach((i=>{let a=t[e][s][i];this.assignedSettings.includes(a.fakeFieldName||a.name)||delete t[e][s][i]}))}))})),Object.keys(t).forEach((e=>{let s=!1;Object.keys(t[e]).forEach((i=>{Object.keys(t[e][i]).length&&(s=!0)})),s||delete t[e]})),this.settingsGroup=this.$clone(t)},setFormData(){let e={},t=this.$clone(this.allSiteSettings),s=(this.$clone(this.$store.state.qsiteApp.defaultLocale),this.$clone(this.$store.state.qsiteApp.selectedLocales));s.forEach((t=>e[t]={})),Object.values(this.formFields).forEach((i=>{let a=t.find((e=>e.name==(i.fakeFieldName||i.name)));i.isTranslatable?s.forEach((t=>{let s=a.translations?a.translations.find((e=>e.locale==t)):null;try{e[t][a.name]=s?JSON.parse(s.value):a.value}catch(i){e[t][a.name]=s?s.value:a.value}})):e[a.name]=a.value})),setTimeout((()=>this.form=this.$clone(e)),50)},getSettingId(e,t){let s=e.fakeFieldName||e.name||t,i=this.allSiteSettings.find((e=>e.name==s));return i?i.id:null},getDataForm(){let e=this.$clone(this.form),t=this.$clone(this.$store.state.qsiteApp.selectedLocales),s={};return Object.keys(e).forEach((i=>{-1==t.indexOf(i)?s[i]=e[i]:Object.keys(e[i]).forEach((t=>{s[t]||(s[t]={}),s[t][i]="string"==typeof e[i][t]?e[i][t]:JSON.stringify(e[i][t])}))})),s},saveSettings(){if(this.loading=!0,"Core"==this.moduleSelected){if(!this.form["core::locales"].length){const e=this.$store.getters["qsiteApp/getDefaultLocale"];this.form["core::locales"].push(e)}this.$store.dispatch("qsiteApp/SET_LOCALE",{locale:this.form["core::locales"][0]})}this.$crud.post("apiRoutes.qsite.settings",{attributes:this.getDataForm()}).then((async e=>{this.$alert.info(this.$tr("isite.cms.message.recordUpdated")),this.getColorContrast(),this.getData()})).catch((e=>{this.$alert.error(this.$tr("isite.cms.message.recordNoUpdated")),console.error("[UPDATE-SETTINGS]::error:",e),this.loading=!1}))},openSettingName(){let e=this.$route.query.module,t=this.$route.query.group,s=this.$route.query.settings,i=this.$clone(this.settingsGroup[this.$helper.toCapitalize(e||"")]);if(i){let a={};s&&(s=s.split(",").map((t=>`${e.toLowerCase()}::${t}`)),Object.keys(i||[]).forEach((e=>{Object.keys(i[e]).forEach((t=>{let l=i[e][t];(s.includes(l.name)||s.includes(l.fakeFieldName))&&(a[t]=l)}))}))),t=Object.keys(i).includes(t)?t:Object.keys(i).pop(),this.openGroupSettings(e,t,a)}},openGroupSettings(e,t,s=[]){this.moduleSelected=this.$helper.toCapitalize(e),this.groupSelected=t,this.settingsToEdit=s,this.setSettingsGroup(),this.setFormData()},getModuleData(e){let t=this.$store.state.qsiteApp.modules;return Object.values(t).find((t=>t.alias==e.toLowerCase()))}}};var p=s(68716),S=s(58120),f=s(99588),y=s(61656),$=s(84884),b=s(11032),k=s(14512),E=s(85220),q=s(95252),O=s.n(q);const v=(0,p.c)(m,[["render",g]]),j=v;O()(m,"components",{QIcon:S.c,QList:f.c,QExpansionItem:y.c,QItem:$.c,QItemSection:b.c,QColor:k.c}),O()(m,"directives",{Ripple:E.c})}}]);