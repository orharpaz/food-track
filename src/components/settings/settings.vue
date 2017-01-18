<template lang="html">

  <section class="sticky-footer container below-nav">
    <h1>Settings</h1>
    <!--<input v-model="message" placeholder="edit me">
      <p>Message is: {{ message }}</p>-->

    <div class="switch flex justify-center">
      <p>Send Push Notifications?</p>
      <input id="cmn-toggle-4" class="cmn-toggle cmn-toggle-round-flat" type="checkbox">
      <label for="cmn-toggle-4"></label>
    </div>
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
        // message: 'yabaloli'
      }
    },
    methods: {

    },
    computed: {

    }
  }
</script>

<style scoped lang="scss">


html {
  background-color: black;
}

.cmn-toggle {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}

.cmn-toggle + label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  user-select: none;
}

input.cmn-toggle-round-flat + label {
  /* width = 2*height or 2*border-radius */
  padding: 2px;
  width: 120px;
  height: 60px;
  border: 3px solid #dddddd;
  border-radius: 60px;
  transition: border-color 0.4s;
}

input.cmn-toggle-round-flat + label:before,
input.cmn-toggle-round-flat + label:after {
  display: block;
  position: absolute;
  content: "";
}

input.cmn-toggle-round-flat + label:after {
  /* width = 2*border-radius */
  top: 4px;
  left: 4px;
  bottom: 4px;
  width: 52px;
  background-color: #dddddd;
  border-radius: 52px;
  transition: margin 0.4s, background 0.4s;
}

input.cmn-toggle-round-flat:checked + label {
  border-color: #8ce196;
}

input.cmn-toggle-round-flat:checked + label:after {
  /* margin-left = border-radius from 'input.cmn-toggle-round-flat + label' */
  margin-left: 60px;
  background-color: #8ce196;
}

</style>