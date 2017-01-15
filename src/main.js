import './style.scss';
import './vendor';
import './vue-plugins';

import Vue from 'vue';
import store from './store';
import router from './routes';
import MainNav from './components/main-nav';

// Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3003';

const app = new Vue({
  router,
  store,
  components: {
    MainNav
  }
}).$mount('#app');

