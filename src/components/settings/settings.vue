<template lang="html">

  <section class="admin container below-nav">
    <h1>Settings Component</h1>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
  </section>

</template>

<script lang="js">
  //   import authService from '../../services/auth.service';

  export default {
    // name: 'admin',
    // props: [],
    // beforeRouteEnter ( to, from, next ) {
    //   authService.protectRoute(next);
    // },    
    mounted() {

    },
    data() {
      return {
        message
      }
    },
    methods: {

    },
    computed: {

    }
  }
</script>

<style scoped lang="scss">

</style>