"use strict";(globalThis["webpackChunkadmin_quasar"]=globalThis["webpackChunkadmin_quasar"]||[]).push([[2596],{62064:(r,t,a)=>{a.r(t),a.d(t,{default:()=>m});var e=a(92444);function s(r,t,a,s,i,o){const c=(0,e.E1)("quick-card");return(0,e.Wz)(),(0,e.Az)(c,{params:o.quickCardParams},null,8,["params"])}a(23816);var i=a(90940);const o={props:{},components:{quickCard:i.c},watch:{},mounted(){this.$nextTick((function(){}))},data(){return{loading:!1,posts:[]}},computed:{quickCardParams(){return{type:"list-v",title:this.$tr("icommerce.cms.quickCard.lastOrders"),icon:"fas fa-cash-register",apiRoute:"apiRoutes.qcommerce.orders",requestParams:{filter:{order:{way:"desc"}}},information:{text1:{field:"createdAt",format:r=>this.$trd(r,{type:"long"})},text2:{field:"customer",format:r=>r?r.fullName:""},text3:{format:r=>r?r.statusName:""}},actionTo:"qcommerce.admin.shipping.orders.index",itemAction:r=>{this.$router.push({name:"qcommerce.admin.shipping.orders.show",params:{id:r.id}})}}}},methods:{}};var c=a(68716);const n=(0,c.c)(o,[["render",s]]),m=n}}]);