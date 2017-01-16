<template lang="html">
  <section class="feeling container below-nav">
    <h1>feeling Component</h1>

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
</template>

<script>
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

        let feelingJson = { rating: value, color: color, time: moment() };
        let json = JSON.stringify(feelingJson)

        console.log('set submit', value);

        this.$http.post('http://localhost:3003/data/feeling', json).then((res) => {
          console.log('success', res.json());
          // success callback
        }, (err) => {
          // error callback
          console.log('error');
        });
      }
    }
  }

</script>

<style>
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
        line-height: 1;
        font-size: 5em;
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
</style>