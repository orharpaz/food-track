<template lang="html">
    <section class="sticky-footer container below-nav">
        <h1>Meals Calendar</h1>
        <div class="calendar"></div>
    <div>
     <add-buttons></add-buttons>
    </div>
    </section>
</template>

<script lang="js">
    import moment from 'moment';
    import jquery from 'jquery';
    import AddButtons from '../add-buttons/add-buttons';

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
                meals: [],
                feeling: []

            }
        },
        methods: {

        },
        components: {
            moment,
            jquery,
            FullCalendar,
            AddButtons
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
                events: [...this.meals, ...this.feeling],


            }),

                this.$http.get('http://localhost:3003/data/food').then((response) => {
                    // let jsonStr = JSON.stringify(response);
                    // console.log('the ans is:', jsonStr)
                    let mealObjectsArr = response.body;
                    let mealsInCalendar = mealObjectsArr.map(function (meal) {
                        return {
                            id: meal._id,
                            title: meal.name,
                            start: moment(meal.time).format(),
                            end: moment(meal.time).add(60, 'minutes').format(),
                            allDay: false,
                            // backgroundColor: "#ff0000"
                        };
                    })
                    this.meals = mealsInCalendar;
                    // $('.calendar').fullCalendar('removeEvents');
                    $('.calendar').fullCalendar('addEventSource', this.meals);
                    $('.calendar').fullCalendar('rerenderEvents');

                    // this.meals = event;
                });
            //Get Feeling
            this.$http.get('http://localhost:3003/data/feeling').then((response) => {
                // let jsonStr = JSON.stringify(response);
                // console.log('the ans is:', jsonStr)
                let feelingObjectsArr = response.body;
                let feelingInCalendar = feelingObjectsArr.map(function (feeling) {
                    return {
                        id: feeling._id,
                        backgroundColor: feeling.color,
                        start: moment(feeling.time).format(),
                        end: moment(feeling.time).add(1, 'hour').format(),
                        allDay: false,
                    };
                })
                this.feeling = feelingInCalendar;
                // $('.calendar').fullCalendar('removeEvents');
                $('.calendar').fullCalendar('addEventSource', this.feeling);
                $('.calendar').fullCalendar('rerenderEvents');

                //     // this.meals = event;
            });
        }
    }
</script>

<style scoped lang="scss">

</style>