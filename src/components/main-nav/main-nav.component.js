import { mapMutations, mapGetters } from 'vuex';
import authService from '../../services/auth.service';
import { SIGN_OUT } from '../../modules/auth/auth.module';
import { REMOVE_FROM_CART } from '../../modules/cart/cart.module';

export default {
  name: 'main-nav',
  data() {
    return {
      // windowWidth,
      isShown: window.innerWidth > 360,
      // isOpen : false

    }
  },
  watch:{
    // windowWidth: windowSize(){
    //   if ()
    // } 
  },
  methods: {
    // closeDiv() {
    //     console.dir(this.$refs.containDiv);
    //     this.$refs.containDiv.style.transform = "scaleX(0)";
    //     this.$refs.containDiv.style.opacity=  "0";
    // } ,
    openDiv() {
      // this.isOpen = !this.isOpen;
      // if(this.isOpen) {
      //   this.closeDiv();
      // } else {
      //   this.$refs.containDiv.style.transform = "scaleX(0.7)";
      //   this.$refs.containDiv.style.opacity=  "1";
      // }
    } ,
    toggle() {
      // this.isShown = !this.isShown;
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
