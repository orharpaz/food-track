import './style.scss';
import './vendor';
import './vue-plugins';

import Vue from 'vue';
import store from './store';
import router from './routes';
import MainNav from './components/main-nav';
import MainFooter from './components/main-footer/index';
import AddButtons from './components/add-buttons/add-buttons';
import VueToastr from 'vue-toastr';


// Vue.use(VueResource);
if(process.env.NODE_ENV === 'development'){
  Vue.http.options.root = 'http://localhost:3000';
}

const app = new Vue({
  router,
  store,
  
  components: {
    MainNav,
    MainFooter,
    AddButtons
 

  }
}).$mount('#app');
Vue.component('vue-toastr', VueToastr);

