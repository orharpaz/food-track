<template lang="html">
    <!--<section class="admin container below-nav">-->
<section class="add-buttons flex space-around">
              <div>
                <button type="button" class="add-meal-btn"><router-link :to="{name: 'home'}">Add a Meal</router-link></button>
              </div>
              <div>
                <button type="button" class="add-feel-btn"> <router-link :to="{name: 'feeling'}">How Do You Feel?</router-link></Sbutton>
              </div>
            </section>

</template>

<script lang="js">
 

  export default  {
    name: 'add-buttons',
    props: [],
  
    mounted() {

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
@import '../../scss/_vars';


.add-buttons{
 padding: 0 60px 0 60px;
 margin: 20px 0 20px 0;
}
.add-meal-btn{
  background-color: #FF9800;
  color:white;
  border-radius: 50%;
  width: 5em;
  height:5em;
  font-size: 1.5rem;

}
.add-meal-btn:active{
   box-shadow: inset -12px 12px 19px -2px rgba(249, 249, 249, 0.85);
  
}
.add-meal-btn:hover{
    color:white;
}
.add-feel-btn{
  background-color: #18BC9C;
  color:white;
  border-radius: 50%;
  width: 5em;
  height:5em;
  font-size: 1.5rem;

}
.add-feel-btn:active{
   box-shadow: inset -12px 12px 19px -2px rgba(249, 249, 249, 0.85);
}

@media (max-width: $mobile-breakpoint) {
  .add-meal-btn{
    margin-right: 15px;
  }
  .add-feel-btn{
    margin-left: 15px;
  }
}
  

</style>
