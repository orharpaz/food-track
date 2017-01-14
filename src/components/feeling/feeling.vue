<template lang="html">


  <section class="feeling container below-nav">
    <h1>feeling Component</h1>



    <div class="rating flex justify-center">
      <span @click="starRate(1)">☆</span>
      <span @click="starRate(2)">☆</span>
      <span @click="starRate(3)">☆</span>
      <span @click="starRate(4)">☆</span>
      <span @click="starRate(5)">☆</span>

    <!--<span @click="1">☆</span>
    <button @click="1">☆</button>
    <span @click="2">☆</span>
    <span @click="">☆</span>
    <span @click="">☆</span>
    <span @click="">☆</span>-->
    </div>

    <div class="ratingStar flex justify-center">
      <span >
        <i class="fa fa-star-o singlStar" aria-hidden="true"></i>
      </span>
      <span>
        <i class="fa fa-star-o singlStar" aria-hidden="true"></i>
      </span>
      <span>
        <i class="fa fa-star-o singlStar" aria-hidden="true"></i>
      </span>
      <span>
        <i class="fa fa-star-o singlStar" aria-hidden="true"></i>
      </span>
      <span>
        <i class="fa fa-star-o singlStar" aria-hidden="true"></i>
      </span>
      
    </div>
  </section>

</template>

<script lang="js">
  // import authService from '../../services/auth.service';


  export default  {
    name: 'feeling',
    props: [],
    // beforeRouteEnter ( to, from, next ) {
    //   authService.protectRoute(next);
    // },    
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {
        // function starRate()
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">


.rating {
  unicode-bidi: bidi-override;
  direction: rtl;
  text-align: center;
   font-size: 5rem;
  
}
.rating > span {
  display: inline-block;
  position: relative;
  width: 1.1em;
}
.rating > *:hover,
.rating > *:hover ~ span,
.rating:not(:hover) > input:checked ~ span {
  color: transparent;
}
.rating > *:hover:before,
.rating > *:hover ~ span:before,
.rating:not(:hover) > input:checked ~ span:before {
   content: "\2605";
   position: absolute;
   left: 0; 
   color: gold;
}

.rating > input {
   margin-left:-1.1em;
   margin-right:0;
   top:3px;
   width:1.1em;
   height:1.1em;
   position:relative;
   z-index:2;
   opacity:0;
}
body { padding: 100px; }

/********************/


/*
.ratingStar {
  unicode-bidi: bidi-override;
  direction: rtl;
  text-align: center;
   font-size: 5rem;
  
}
.ratingStar > span {
  display: inline-block;
  position: relative;
  width: 1.1em;
}
.ratingStar > *:hover,
.ratingStar > *:hover ~ span,
.ratingStar:not(:hover) > input:checked ~ span {
  color: blue;
}
.ratingStar > *:hover:before,
.ratingStar > *:hover ~ span:before,
.ratingStar:not(:hover) > input:checked ~ span:before {
   content: "\f006";
   position: absolute;
   left: 0; 
   color: orangered;
}

.ratingStar > input {
   margin-left:-1.1em;
   margin-right:0;
   top:3px;
   width:1.1em;
   height:1.1em;
   position:relative;
   z-index:2;
   opacity:0;
}
body { padding: 100px; }*/


</style>
