importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"),importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"),importScripts("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"),importScripts("https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"),importScripts("/service-worker.js");const initializingFirebaseApp=async()=>{try{const e=CryptoJS.MD5(`${window.location.origin}${moment().format("YYYY-MM-DD")}firebase`).toString(),i=await fetch(`https://staging-siembra-coffe.ozonohosting.com/api/notification/v1/providers/firebase?filter={%22field%22:%20%22system_name%22}&token=${e}`),s=await i.json();if("Unauthorized"===s.errors)return void resolve(i);firebase.initializeApp({apiKey:s.data.fields.firebaseApiKey,authDomain:s.data.fields.firebaseAuthDomain,projectId:s.data.fields.firebaseProjectId,storageBucket:s.data.fields.firebaseStorageBucket,messagingSenderId:s.data.fields.firebaseMessagingSenderId,appId:s.data.fields.firebaseAppId,measurementId:s.data.fields.firebaseMeasurementId});firebase.messaging()}catch(e){console.error("Error fetching data:",e)}};self.addEventListener("install",(e=>{e.waitUntil(initializingFirebaseApp())}));