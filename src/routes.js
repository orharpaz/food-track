import VueRouter from 'vue-router';

import Home from './components/home';
import Signin from './components/signin';
import Signup from './components/signup';
import Shop from './components/shop';
import Cart from './components/cart';
import Admin from './components/admin/admin';
import Settings from './components/settings/settings';
import Feeling from './components/feeling/feeling';
import Calendar from './components/calendar/calendar';
import AddButtons from './components/add-buttons/add-buttons';

const routes = [{
  path: '/',
  name: 'home',
  component: Home
},
{
  path     : '/feeling',
  name     : 'feeling',
  component: Feeling
}, 
{
  path     : '/signin',
  name     : 'signin',
  component: Signin
},
  {
    path     : '/signup',
    name     : 'signup',
    component: Signup
  },
  {
    path     : '/shop',
    name     : 'shop',
    component: Shop
  },
  {
    path     : '/cart',
    name     : 'cart',
    component: Cart
  },
  {
    path     : '/admin',
    name     : 'admin',
    component: Admin
  },{
    path     : '/settings',
    name     : 'settings',
    component: Settings
  },{
    path     : '/calendar',
    name     : 'calendar',
    component: Calendar
  },
  {
  path     : '/add-buttons',
  name     : 'add-buttons',
  component: AddButtons
}, 
  
  { path: '*', redirect: { name: 'home' } }];


const router = new VueRouter({
  mode: 'history',
  routes
});

export default router