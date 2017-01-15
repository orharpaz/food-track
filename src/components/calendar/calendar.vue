<template lang="html">
    <section class="admin container below-nav">
        <h1>Meals Calendar</h1>
        <div class="calendar"></div>
    </section>

</template>

<script lang="js">
    import moment from 'moment';
    import jquery from 'jquery';
    // window.jQuery = jQuery;
    var $ = window.jQuery = require('jquery');
    import FullCalendar from 'fullcalendar';

    export default {
        data: () => {
            return {

                // meals: [{
                //     id: "1",
                //     title: "Banana, Apple",
                //     start: moment(1484512106703).format(),
                //     end: moment(1484512121736).format(),
                //     allDay: false,
                //     backgroundColor: "#ff0000"
                // }],
                meals: []

            }
        },
        methods: {

        },
        components: {
            moment,
            jquery,
            FullCalendar
        },
        created() {

            // this.$http.get('http://localhost:3003/data/food').then((response) => {
            //     console.log('the ans is:', response.json());
            // }, (response) => {
            //     console.log('error');
            // });

        },
    mounted() {
      $('.calendar').fullCalendar({
                // put your options and callbacks here

                // hiddenDays: [  4, 5,6 ], //choose which days to hide
                // hiddenDays: [ 0, 1,2,3 ],

                header: { center: 'month, agendaWeek, listWeek' }, // buttons for switching between views
                views: {
                    month: { // name of view
                        titleFormat: 'YYYY, MM, DD' // name of view
                        // other view-specific options here
                    },
                    agendaWeek: {
                        titleFormat: 'YYYY, MM, DD'
                    },
                },
                events: this.meals,
            }),
                this.$http.get('http://localhost:3003/data/food').then((response) => {
                    // let jsonStr = JSON.stringify(response);
                    // console.log('the ans is:', jsonStr)
                    let mealObjectsArr = response.body;
                    let mealsInCalendar = mealObjectsArr.map(function(meal){
                        return {
                        id: meal._id,
                        title: meal.name,
                        start: moment(meal.time).format(),
                        end: moment(meal.time).add(15,'minutes').format(),
                        allDay: false,
                        backgroundColor: "#ff0000"
                        };
                    })
                    this.meals = mealsInCalendar;
                    $('.calendar').fullCalendar('removeEvents');
                    $('.calendar').fullCalendar('addEventSource', this.meals);
                    $('.calendar').fullCalendar('rerenderEvents');

                    // this.meals = event;
                });
        }
    }
</script>

<style scoped lang="scss">

</style>