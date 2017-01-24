import {mapGetters, mapMutations} from 'vuex';
import moment from 'moment';
import AddButtons from '../add-buttons/add-buttons';
export default {
  data: () => {
    return {
      currFood:'',
      meal:[]
    }
  },
  methods: {
    startVoiceRecognition(){
      console.log('start voice rec');
      this.recognition.start()
    },
    addFood(){
      console.log('plus clicked');
      if(this.currFood ==='') return;
      else {
          this.meal.push(this.currFood);
          this.currFood = '';

      }
    },
    // A method for deleting a todo from the TDL 
    deleteFood(food){
        // this.todos.splice(todo, 1); //TODO: fix
        let resIndex = 0;
        let found = false;
        this.meal.forEach(function(element, index){
            if(element.currFood === food.currFood && !found){
                resIndex =  index;
                found = true;
                }
            });
        this.meal.splice(resIndex, 1);
    },
    submitMeal(meal) {
      let foodJson = {name: meal, time: moment(), userId: this.user._id };
    //   let json = JSON.stringify(foodJson)
    //   console.log('my json',json)
      this.meal=[];

      this.$http.post('data/food', foodJson).then((res) => {
        console.log('success',res.json());
        // success callback
      }, (err) => {
        // error callback
            console.log('error');
      });

    }
  },
  components: {
         moment,
        AddButtons
},

 computed: {
      ...mapGetters([
        'user'
      ])
  },
  mounted() {
        if (!('webkitSpeechRecognition' in window)) {
            console.log('webkitSpeechRecognition not supported');
        } else {
            this.recognition = new webkitSpeechRecognition();
            // this.recognition.continuous = true;
            this.recognition.lang = 'en-us';
            this.recognition.interimResults = true;

            this.recognition.onstart = () => {
                this.isRec = true;
            }
            this.recognition.onresult = (event) => {
                let allText = '';
                for (let currRes in event.results) {
                    const res = event.results[currRes][0];
                    if (res) {
                        console.log('script', res.transcript)
                        allText += ' ' + res.transcript;
                    }
                }
                console.log('allText', allText);
                this.currFood = allText;
                console.log('text is:', this.currFood);
                //now you can show the results
            }
            this.recognition.onerror = (event) => {
                console.log('onerror', event);
                this.isRec = false;
            }
            this.recognition.onend = () => {
                console.log('done record')
                // this.addFood();
                if (this.isRec) this.recognition.stop();
            }
        }
    }
}