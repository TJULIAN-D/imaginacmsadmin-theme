"use strict";(globalThis["webpackChunkadmin_quasar"]=globalThis["webpackChunkadmin_quasar"]||[]).push([[1448],{31448:(n,t,e)=>{e.r(t),e.d(t,{default:()=>T});var i=e(92444),r=e(74044),o={id:"panelPriceList",class:"q-pa-md relative-position"},a={class:"q-mb-md box box-auto-height"},l={key:0,class:"row col-12 q-col-gutter-md"},c={id:"print"},s={class:"text-center show-print custom-logo custom-border"},d=["src"],u={class:"relative-position q-mt-md price-list row"},p={class:"text-center show-print title"},m=["href"],f={class:"row show-print footer-print"};function g(n,t,e,g,h,b){var x=(0,i.E1)("page-actions"),v=(0,i.E1)("dynamic-field"),w=(0,i.E1)("q-toolbar-title"),y=(0,i.E1)("q-toolbar"),P=(0,i.E1)("q-item-label"),q=(0,i.E1)("q-item-section"),A=(0,i.E1)("q-item"),_=(0,i.E1)("q-list"),Q=(0,i.E1)("inner-loading");return(0,i.Wz)(),(0,i.An)("div",o,[(0,i.QD)("div",a,[(0,i.K2)(x,{title:n.$tr(n.$route.meta.title),"extra-actions":n.extraActions,onSearch:n.searchPriceList,"expires-in":n.expiresIn,onRefresh:t[0]||(t[0]=function(t){return n.refreshData(!0)}),"exclude-actions":n.excludeActions},null,8,["title","extra-actions","onSearch","expires-in","exclude-actions"])]),n.infoRedirect.show?((0,i.Wz)(),(0,i.An)("div",l,[((0,i.Wz)(!0),(0,i.An)(i.ae,null,(0,i.mi)(n.infoRedirect.fields,(function(n,t){return(0,i.Wz)(),(0,i.Az)(v,{key:t,field:n,class:"col-12"},null,8,["field"])})),128))])):(0,i.g1)("",!0),(0,i.QD)("div",c,[(0,i.QD)("div",s,[(0,i.QD)("img",{id:"logoPriceList",height:"100",src:n.store.getMediaSetting("isite::logo1").path},null,8,d)]),(0,i.QD)("div",u,[n.loading?(0,i.g1)("",!0):((0,i.Wz)(!0),(0,i.An)(i.ae,{key:0},(0,i.mi)(n.priceLists,(function(t,e){return(0,i.Wz)(),(0,i.An)("div",{key:e,class:(0,r.WN)("q-px-xs col-12 col-md-".concat(n.col))},[((0,i.Wz)(!0),(0,i.An)(i.ae,null,(0,i.mi)(t,(function(t){return(0,i.Wz)(),(0,i.An)("div",{key:t.id,class:"q-mt-md"},[(0,i.QD)("div",p,[(0,i.QD)("a",{href:t.url,target:"_blank"},(0,r.WA)(t.title),9,m)]),(0,i.K2)(y,{class:"bg-primary text-white no-print"},{default:(0,i.Ql)((function(){return[(0,i.K2)(w,{class:"text-body1"},{default:(0,i.Ql)((function(){return[(0,i.mY)((0,r.WA)(t.title),1)]})),_:2},1024)]})),_:2},1024),(0,i.K2)(_,{bordered:""},{default:(0,i.Ql)((function(){return[((0,i.Wz)(!0),(0,i.An)(i.ae,null,(0,i.mi)(t.ownProducts,(function(t){return(0,i.Wz)(),(0,i.Az)(A,{key:t.id,class:"q-py-none",clickable:"",tag:"a",href:t.url,target:"_blank"},{default:(0,i.Ql)((function(){return[(0,i.K2)(q,null,{default:(0,i.Ql)((function(){return[(0,i.K2)(P,{class:"text-body2"},{default:(0,i.Ql)((function(){return[(0,i.mY)((0,r.WA)(t.name),1)]})),_:2},1024)]})),_:2},1024),(0,i.K2)(q,{side:""},{default:(0,i.Ql)((function(){return[(0,i.K2)(P,{class:"text-blue-grey text-weight-bold",caption:""},{default:(0,i.Ql)((function(){return[(0,i.mY)("$"+(0,r.WA)(n.$trn(t.userPrice||t.price)),1)]})),_:2},1024)]})),_:2},1024)]})),_:2},1032,["href"])})),128))]})),_:2},1024)])})),128))],2)})),128)),(0,i.K2)(Q,{visible:n.loading},null,8,["visible"])]),(0,i.QD)("div",f,[((0,i.Wz)(!0),(0,i.An)(i.ae,null,(0,i.mi)(n.contactData,(function(n,t){return(0,i.Wz)(),(0,i.An)("div",{key:t,class:"q-mr-md"},[(0,i.QD)("p",null,(0,r.WA)(n.label)+":",1),(0,i.QD)("ul",null,[((0,i.Wz)(!0),(0,i.An)(i.ae,null,(0,i.mi)(n.data,(function(n){return(0,i.Wz)(),(0,i.An)("li",null,(0,r.WA)(n),1)})),256))])])})),128))])])])}var h=e(75836),b=e(20584);const x={getCategories:function(n,t){return void 0===n&&(n=!1),void 0===t&&(t={}),new Promise((function(e,i){var r={refresh:n,params:t};b.c.index("apiRoutes.qcommerce.categories",r).then((function(n){e(n)})).catch((function(n){return i(n)}))}))}};var v="\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');\n\na {\n  text-decoration: none;\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.q-px-xs {\n    padding-left: 4px;\n    padding-right: 4px;\n}\n\n.col-12 {\n  height: auto;\n  width: 100%;\n}\n\n.col-md-4 {\n  height: auto;\n  width: 33.3333%;\n}\n\n.col-md-6 {\n  height: auto;\n  width: 50%;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  border: none;\n  box-sizing: border-box;\n}\n\n.no-print,\n.q-focus-helper {\n  display: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.q-mt-md {\n  margin-top: 10px;\n}\n\n.q-mt-xs {\n  margin-top: 12px;\n}\n\n.q-item {\n  color: black;\n  display: flex;\n  padding: 4px;\n  justify-content: space-between;\n}\n\n.text-blue-grey {\n  color: #607d8b;\n}\n\n.text-body2 {\n  font-size: 0.6rem;\n}\n\n.text-caption {\n  font-size: 0.5rem;\n}\n\n.title {\n  background-color: var(--q-primary);\n}\n\n.title a {\n  color: white;\n  font-size: 0.7rem;\n  margin: 8px 0;\n}\n\n.footer-print {\n  border-top: 1px solid #607d8b;\n  padding-top: 15px;\n  margin-top: 30px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.footer-print .q-mr-md {\n  position: relative;\n  margin-right: 15px;\n}\n\n.footer-print p {\n  color: var(--q-primary);\n  margin-bottom: 10px;\n}\n\n.footer-print ul {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n\n.footer-print ul li {\n  text-align: start;\n  margin-bottom: 5px;\n}\n\n.footer-print ul li:last-child {\n  margin-bottom: 0;\n}\n\n.footer-print .q-mr-md:not(:last-child)::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: -5px;\n  height: 100%;\n  width: 1px;\n  border-right: 1px solid #607d8b;\n}\n\n.q-item__section--main {\n  width: auto;\n  min-width: 0;\n  max-width: 100%;\n  flex: 10000 1 0%;\n}\n\n.q-item__section--main ~ .q-item__section--side {\n  align-items: flex-end;\n  padding-right: 0;\n  padding-left: 16px;\n}\n\n.q-item__label {\n  line-height: 1.2em !important;\n  max-width: 100%;\n}\n\n.custom-logo {\n  padding-bottom: 25px;\n  padding-top: 25px;\n}\n\n.custom-border {\n    border-bottom: 1px solid #607d8b;\n}\n@media print {\n  body {-webkit-print-color-adjust: exact;}\n}",w=e(8932),y=e(91416),P=function(){return P=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var r in t=arguments[e],t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},P.apply(this,arguments)},q=function(n,t,e){if(e||2===arguments.length)for(var i,r=0,o=t.length;r<o;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return n.concat(i||Array.prototype.slice.call(t))};function A(n,t){var e=(0,y.c)(),r={},o=(0,h.cB)({data:[],loading:!1,searchParam:null,expiresIn:null}),a={priceLists:(0,i.S6)((function(){var n=o.searchParam,t=e.screen.width,i=o.data.length,r=3;1===i||t<=700?r=1:(2===i||t<=900)&&(r=2);var a=Array.from({length:r},(function(){return[]})),l=0;return n?(n=n.toLowerCase(),o.data.forEach((function(t){if(t.title.toLowerCase().includes(null!==n&&void 0!==n?n:""))a[l].push(t);else{var e=t.ownProducts,i=e.filter((function(t){return t.name.toLowerCase().includes(null!==n&&void 0!==n?n:"")}));if(i.length){var o=(0,w.ct)(t);o.ownProducts=i,a[l].push(o)}}l=(l+1)%r})),a):(o.data.forEach((function(n){a[l].push(n),l=(l+1)%r})),a)})),excludeActions:(0,i.S6)((function(){return o.loading?["refresh"]:[]})),extraActions:(0,i.S6)((function(){var n=[];return o.loading||(n=q(q([],n,!0),["search",{props:{label:w._s.tr("isite.cms.label.download"),icon:"fa-light fa-file-pdf"},action:l.printPriceList}],!1)),n})),contactData:(0,i.S6)((function(){return{phones:{label:w._s.tr("isite.cms.label.phoneNumber"),data:w.is.getSetting("isite::phones")},addresses:{label:w._s.tr("isite.cms.label.address"),data:w.is.getSetting("isite::addresses")},emails:{label:w._s.tr("isite.cms.label.email"),data:w.is.getSetting("isite::emails")}}})),infoRedirect:(0,i.S6)((function(){return{show:"qcommerce.public.shipping.priceList.index"===w.us.route.name,fields:{helpText:{type:"banner",props:{message:w._s.tr("icommerce.cms.label.bannerPriceList"),actions:[{props:{label:w._s.tr("icommerce.cms.label.explorePriceList")},action:function(){return w.us.push({name:"qcommerce.panel.shipping.priceList.index"})}}]}}}}})),col:(0,i.S6)((function(){var n=e.screen.width,t=o.data.length;return 1===t||n<=700?12:2===t||n<=900?6:4}))},l={getData:function(n,t){void 0===n&&(n=1),void 0===t&&(t=!1);var e={page:n,take:5,include:"ownProducts",filter:{status:1}};return x.getCategories(t,e)},fetchData:function(n,t,e,i){void 0===t&&(t=3),void 0===e&&(e=5),void 0===i&&(i=!1),o.loading=!0;for(var r=[],a=0;a<e;a++)r.push(l.getData(n+a,i));Promise.all(r).then((function(n){var t,r;if(n.forEach((function(n){var t=n.meta.page;(!r||(null===r||void 0===r?void 0:r.currentPage)<t.currentPage)&&(r=t);var e=n.data.filter((function(n){return n.ownProducts.length}));o.data=q(q([],o.data,!0),e,!0)})),r.currentPage<r.lastPage){var a=r.lastPage-r.currentPage,c=a>e?5:a;l.fetchData(r.currentPage+1,3,c,i)}r.currentPage==r.lastPage&&(o.expiresIn=null===(t=n[n.length-1])||void 0===t?void 0:t.expiresIn,o.loading=!1)})).catch((function(i){"canceled"!=i.message&&(console.error("Error In Load PriceList: ",i),t>1?new Promise((function(n){return setTimeout(n,1500)})).then((function(){l.fetchData(n,t-1,e)})):(o.loading=!1,w.Qb.error("Failed")))}))},searchPriceList:function(n){o.searchParam=n},refreshData:function(n){n&&(o.data=[]),l.fetchData(1,3,1,n)},printPriceList:function(){for(var n=document.getElementById("print"),t=window.open("","PRINT","height=1000,width=1000"),e=document.body.style,i=document.title,r={},o=0;o<e.length;o++){var a=e[o],l=e.getPropertyValue(a);r[a]=l}if(t&&n){t.document.write("<html><head><title>".concat(i,'</title><style type="text/css">').concat(v,'</style></head><body style="'));for(var c=0,s=Object.entries(r);c<s.length;c++){var d=s[c],u=d[0],p=d[1];t.document.write("".concat(u,": ").concat(p,";"))}t.document.write('" >'),t.document.write(n.innerHTML),t.document.write("</body></html>"),t.document.close(),t.focus();var m=t.document.getElementById("logoPriceList"),f=function(){t.print(),t.close()};m||f(),null===m||void 0===m||m.addEventListener("load",f)}}};return(0,i.u2)((function(){l.refreshData(!1)})),P(P(P(P(P({},r),(0,h.kx)(o)),a),l),{store:w.is})}const _=(0,i._M)({props:{},components:{},setup:function(n,t){var e=t.emit;return A(n,e)}});var Q=e(68716),L=e(6536),D=e(36524),W=e(99588),z=e(84884),k=e(11032),E=e(2992),S=e(95252),I=e.n(S);const K=(0,Q.c)(_,[["render",g]]),T=K;I()(_,"components",{QToolbar:L.c,QToolbarTitle:D.c,QList:W.c,QItem:z.c,QItemSection:k.c,QItemLabel:E.c})}}]);