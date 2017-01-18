<template lang="html">

  <section class="sticky-footer admin container below-nav">
    <h1>User statistics Component</h1>
    <ul>
      <pre>{{stats}}</pre>
      <br> allDataFood: {{allDataFood}}
      <br> allDataStats:{{allDataStats}}
      <li v-for="currStat in stats">
        <div>{{...currStat.name}}</div>
        <div>{{currStat.rating}}</div>
      </li>
    </ul>
  </section>

</template>

<script lang="js">

  export default {

    data() {
      return {

        stats: {},
        allDataFood: [],
        allDataStats: {}

      }
    },
    methods: {
    },
    computed: {

    },
    mounted() {
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
                  console.log('newRate',newRate);
                  
              this.allDataStats[food]['rating'] = newRate;
  console.log('allDataStats', this.allDataStats[food]['rating']);              
            }
            this.allDataStats[food]['count']++;
          });
              console.log('finalFoodObj', this.allDataStats);



          //console.log('success with', res.body);
          // console.log('success with', resJson);
          // let statsObjArr = res.body
          // // this.stats = statsObjArr;

          // for (var key in statsObjArr) {
          //   var obj = statsObjArr[key];
          //   for (var prop in obj) {

          //     this.stats.rating = obj[prop];
          //     // this.stats.name = obj[prop]
          //   }
          // }



          // for (var key in statsObjArr) {
          //   var obj = statsObjArr[key];
          //   for (var prop in obj) {
          //     if (obj.hasOwnProperty(prop)) {
          //       this.stats.push(prop + " = " + obj[prop])
          //       console.log(prop + " = " + obj[prop]);
          //     }
          //   }

          // }


          // success callback
        }, (err) => {
          // error callback
          console.log('error');
        });
    }
  }
</script>

<style scoped lang="scss">
  .admin {

  }
</style>