import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCLUfALpT9lS5tzfz_2NjJyMiRfuj3mrbA',
  authDomain: 'adventures-bdf4a.firebaseapp.com',
  databaseURL: 'https://adventures-bdf4a.firebaseio.com',
  projectId: 'adventures-bdf4a',
  storageBucket: 'adventures-bdf4a.appspot.com',
  messagingSenderId: '1029949432017',
  appId: '1:1029949432017:web:f429277aa19399937225f0',
};
  // Initialize Firebase WWTTF en main se puede traer un CICLO DE VIDA ??
firebase.initializeApp(firebaseConfig);
// Escuha el cambio de la autenticacion
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('FETCH_AUTH_USER');
  }
});


new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.dispatch('FETCH_USER', { id: store.state.authId });
  },
}).$mount('#app');
