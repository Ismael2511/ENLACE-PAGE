import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import LoadingPage from './components/LoadingPage';
import Prueba from './components/Prueba';


Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path:'/Loading', component: LoadingPage},
  {path:'/', component: Login},
  {path:'/Register', component: Register},
  {path:'/Prueba', component: Prueba}
];
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
