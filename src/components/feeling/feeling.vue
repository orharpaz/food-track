<template lang="html">

  <section class="feeling sticky-footer below-nav">
    <h3 class="rate-header flex justify-center ">Rate your Feeling</h3>
    <div class="star-rating flex justify-center">
      <label class="star-rating__star" v-for="rating in ratings" v-bind:class="{'is-selected': ((value >= rating) && value != null), 'is-disabled': disabled}"
        v-on:mouseover="star_over(rating)" v-on:mouseout="star_out">
            <input
                    class="star-rating star-rating__checkbox"
                    type="radio"
                    v-bind:name="name"
                    v-bind:value="rating"
                    v-bind:required="required"
                    v-bind:id="$index+1"
                    v-bind:disabled="disabled"
                    v-model="value"
                     v-on:click="set(rating)"
                    >
                    <span >
                      <i class="fa fa-star singlStar" aria-hidden="true"></i>
                   </span>
                
        </label>

    </div>

    <div class="feel-mealbtn flex justify-center">
      <button type="button" class="add-meal-btn"><router-link :to="{name: 'home'}">Add a Meal</router-link></button>
    </div>

    <vue-toastr ref="toastr"></vue-toastr>

</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
  import moment from 'moment';


  export default {
    name: 'feeling-rating',

    data() {
     
      return {
        temp_value: null,
        ratings: 5,
        value: null
      };
    },

    props: {
      name: String,
      id: String,
      disabled: String,
      required: Boolean
    },
    computed: {
      ...mapGetters([
        'user'
      ])
  },
    methods: {
      
     

      star_over(index) {
        if (this.disabled == "true") {
          return;
        }
        this.temp_value = this.value;
        this.value = index;
       
      },
      star_out() {
        if (this.disabled == "true") {
          return;
        }
        this.value = this.temp_value;
         
      },
      set(value) {
        let color = '';
        switch (value) {
          case 1:
            color = "#ff0000";
            break;
          case 2:
            color = "#ff9411";
            break;
          case 3:
            color = "#fff500";
            break;
          case 4:
            color = "#CAFE48";
            break;
          case 5:
            color = "#006600";
            break;

        }

        let feeling = { rating: value, color: color, time: moment(), userId: this.user._id };
        // let json = JSON.stringify(feelingJson)

        // console.log('set submit', value);
       

        this.$http.post('data/feeling', feeling).then((res) => {
          console.log('success', res.json());
          // success callback
        }, (err) => {
          // error callback
          console.log('error');
        });
         this.$refs.toastr.s("Thank you for letting us Know!");
      }
    },
  }

</script>

<style>

.star-rating{
  margin: 10px 10px 10px 0px;
}
.star-rating__checkbox {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  
}
.star-rating__star {
    display: inline-block;
    padding: 3px;
    vertical-align: middle;
    /*justify-content: center;*/
    line-height: 1;
    font-size: 3em;
    color: #ABABAB;
    -webkit-transition: color;
    transition: color;
}
.star-rating__star:hover {
    cursor: pointer;
}
.star-rating__star.is-selected {
    color: gold;
}
.star-rating__star.is-disabled:hover {
    cursor: default;
}

.add-meal-btn{
  background-color: #FF9800;
  color:white;
  border-radius: 50%;
  width: 5em;
  height:5em;
  font-size: 1.5rem;
  /*margin: 100px;*/
}
.add-meal-btn:active{
   box-shadow: inset -12px 12px 19px -2px rgba(249, 249, 249, 0.85);
}


</style>