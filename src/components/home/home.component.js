export default {
  data: () => {
    return {
      currFood:'',
      meal:[]
    }
  },
  //try
//   methods:{
//     onYourAddFood(){
//         if(this.currFood === '') return
//         .
//         .
//         .
//         .
//     },
//     onYourSubmitMeal(){
//         .
//         .
//         .
//         this.isRec = false;
//         this.recognition.stop();
//     },
//     toogleSpeechReco(){
//                 if(this.isRec) this.recognition.stop();
//                 else this.recognition.start();
//             }
// },

  methods: {
    startVoiceRecognition(){
      console.log('start voice rec');
      this.recognition.start()
    },
    addFood(){
      console.log('plus clicked');
      if(this.currFood ==='') return;
      else this.meal.push(this.currFood)
    },
    submitMeal(meal) {
      let foodJson = {name: meal};
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
                for(let currRes in event.results){
                    const res = event.results[currRes][0];
                    if(res){
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
                if(this.isRec) this.recognition.stop();
            }
        }
    }
}