<template lang="html">

  <section class="sticky-footer admin container below-nav">
    <!--<h1>User statistics Component</h1>-->
    <!--<ul>
      <pre>{{stats}}</pre>
      <br> allDataFood: {{allDataFood}}
      <br>
      <pre>allDataStats:{{allDataStats}}</pre>
      <br>
      <li v-for="currStat in stats">
        <div>{{...currStat.name}}</div>
        <div>{{currStat.rating}}</div>
      </li>
    </ul>-->
    <!--showArr:{{showArr}}-->
    <!--<button type="button" @click="computeStats">Calculate</button>-->
    <div id="chartContainer" style="height: 300px; width: 100%;"></div>
</section>

</template>

<script lang="js">
// import _ from '/canvas/canvasjs.min.js';

  export default {

    data() {
      return {

        stats: {},
        allDataFood: [],
        allDataStats: {},
        showArr: []
      }
    },

    // components: {
    //   canvasJS
    // },


    methods: {

    },

    mounted() {


    },
    created() {
      fetch('data/stats', { credentials: 'include' })
        .then((res) => res.json())
        .then((resJson) => {
          this.stats = resJson;

          //filter all the foods to allDataFood arr
          this.stats.forEach((currStat) => {
            currStat.name.forEach((foodName) => {
              this.allDataFood.push({
                name: foodName,
                rate: currStat.rating
              })
            });
          });

          //create table of food and rating
          this.allDataFood.forEach((foodObj) => {
            let food = foodObj.name;
            let newRating = foodObj.rate;
            let newCount = foodObj.count;


            // food is not in the statistics
            if (this.allDataStats[food] === undefined) {
              this.allDataStats[food] = {
                food: food,
                rating: newRating,
                count: 0
              };

              // food is already in the stats array => update rating
            } else {

              let currRate = this.allDataStats[food]['rating'];
              console.log('currRate', currRate);

              let currCount = this.allDataStats[food]['count'];
              console.log('currCount', currCount);
              let newRate = (currRate * currCount + newRating) / (currCount + 1);
              console.log('newRate', newRate);

              this.allDataStats[food]['rating'] = newRate;
              console.log('allDataStats', this.allDataStats[food]['rating']);
            }
            this.allDataStats[food]['count']++;

          });
          console.log('finalFoodObj', this.allDataStats);
          // success callback
          let value;
          let objArr = this.allDataStats;
          for (var key in objArr) {
            value = objArr[key];
            this.showArr.push({
              label: value.food,
              y: value.rating
            });

            var chart = new CanvasJS.Chart("chartContainer", {
              theme: "theme2",//theme1
              title: {
                text: "My Stats"
              },
              animationEnabled: true,   // change to true
              data: [
                {
                  // Change type to "bar", "area", "spline", "pie",etc.
                  type: "pie",
                  dataPoints: this.showArr,
                }
              ]
            });
            chart.render();


          }


          console.log('value:', value);
        }, (err) => {
          // error callback
          console.log('error');
        });
    }
  }
</script>

<style scoped lang="scss">

</style>