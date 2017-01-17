import { mapMutations, mapGetters } from 'vuex';
import authService from '../../services/auth.service';
import { SIGN_OUT } from '../../modules/auth/auth.module';
import { REMOVE_FROM_CART } from '../../modules/cart/cart.module';

export default {
  name: 'main-nav',
  data() {
    return {
      // windowWidth,
      isShown: window.innerWidth > 375,

    }
  },
  watch:{
    // windowWidth: windowSize(){
    //   if ()
    // } 
  },
  methods: {
    toggle() {
      this.isShown = !this.isShown;
      console.log('toggle?');
      
    },
    signout() {
      authService.signout();
      this.$store.commit(SIGN_OUT);
      this.$router.push('/');
    },
    ...mapMutations({
      removeFromCart: REMOVE_FROM_CART
    })
  },
  computed: {

    ...mapGetters([
      'cartLength',
      'cart'
    ]),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      user: 'user'
    }
    ),
  },
}
