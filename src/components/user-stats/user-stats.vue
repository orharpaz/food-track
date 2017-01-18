<template lang="html">

  <section class="admin container below-nav">
    <h1>User statistics Component</h1>
  </section>

</template>

<script lang="js">

  export default {

    mounted() {
      this.$http.get('http://localhost:3003/data/stats').then((res) => {
        console.log('success with', res.body);

        // success callback
      }, (err) => {
        // error callback
        console.log('error');
      });
    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
  }
</script>

<style scoped lang="scss">
  .admin {

  }
</style>