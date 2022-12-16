import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import Toaster from 'v-toaster'
import loader from "vue-ui-preloader"
import 'v-toaster/dist/v-toaster.css'
import './registerServiceWorker'

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"

Vue.config.productionTip = false


Vue.use(Vuelidate)
Vue.use(Toaster)
Vue.use(loader)

firebase.initializeApp({
  apiKey: "AIzaSyAV_Y3EHITev7Pp8JSLJvH6zid3no_HbkA",
  authDomain: "register-page-8e99d.firebaseapp.com",
  databaseURL: "https://register-page-8e99d-default-rtdb.firebaseio.com",
  projectId: "register-page-8e99d",
  storageBucket: "register-page-8e99d.appspot.com",
  messagingSenderId: "785326815132",
  appId: "1:785326815132:web:42348feba741015c5ffa59",
  measurementId: "G-K3VM2WV22C"
})

let app = null

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

