export default {
  data: () => {
    return {

      // items: []
    }
  },
  methods: {
    test(food) {
      let foodJson = {name: food, type:"not good"}
      let json = JSON.stringify(foodJson)
      console.log('my json',json)
      
      this.$http.post('http://localhost:3003/data/food', json).then((res) => {
        console.log('success',res.json());
        // success callback
      }, (err) => {
        // error callback
            console.log('error');
      });

    }
  }
}