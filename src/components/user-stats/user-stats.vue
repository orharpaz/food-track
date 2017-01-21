<template lang="html">

  <section class="sticky-footer admin container below-nav">
    <h1>User statistics Component</h1>
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
       showArr:{{showArr}}
    <button type="button" @click="computeStats">Calculate</button>
    <button type="button" @click="renderChart">Show Results</button>
    <div id="chartContainer" style="height: 300px; width: 100%;"></div>
</section>

</template>

<script lang="js">

  export default {

    data() {
      return {

        stats: {},
        allDataFood: [],
        allDataStats: {},
        showArr: []
      }
    },
    methods: {

      computeStats() {
        let objArr = this.allDataStats;
        for (var key in objArr) {
          let value = objArr[key];
          this.showArr.push({
            label: value.food,
            y: value.rating
          });
          // renderChart();
          console.log('value:', value);
        }
      },

      renderChart () {
        var chart = new CanvasJS.Chart("chartContainer", {
          theme: "theme2",//theme1
          title: {
            text: "Basic Column Chart - CanvasJS"
          },
          animationEnabled: false,   // change to true
          data: [
            {
              // Change type to "bar", "area", "spline", "pie",etc.
              type: "column",
              dataPoints:this.showArr 
            }
          ]
        });
        chart.render();
      }

    },

    mounted() {
       
    },
    created() {
      fetch('data/stats',{credentials: 'include'})
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
        }, (err) => {
          // error callback
          console.log('error');
        });
    }
  }
</script>

<style scoped lang="scss">

</style>