import './style.scss';
import './vendor';
import './vue-plugins';

import Vue from 'vue';
import store from './store';
import router from './routes';
import MainNav from './components/main-nav';
// import moment from 'moment';
// import jquery from 'jquery';
// window.jQuery = jQuery;
// import FullCalendar from 'fullcalendar';

const app = new Vue({
  router,
  store,
  components: {
    MainNav
  }
}).$mount('#app');

