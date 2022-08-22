import Vue from 'vue'
import Vuex from 'vuex'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8d7yjhPWdvq8RtwBbr1EfdaN1AlFrYP8",
  authDomain: "atm2022-3a270.firebaseapp.com",
  projectId: "atm2022-3a270",
  storageBucket: "atm2022-3a270.appspot.com",
  messagingSenderId: "972916912986",
  appId: "1:972916912986:web:6243f59cf14ec571a3b963",
  measurementId: "G-6Q0SZ34MEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* eslint-disable */
const analytics = getAnalytics(app);

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
