<template>
    <h1>Timer</h1>
    <timer-input v-on:changeHandler="inputHandler" />
    <timer-start-button
        @startStopTimer="timerStartHandler"
        :isStarted="isStarted"
    />
    <timer-display :currentTime="currentTime" />
    <p>{{ timeSinceStart.milliseconds }}</p>
</template>

<script>
import TimerStartButton from './TimerStartButton.vue'
import TimerInput from './TimerInput.vue'
import TimerDisplay from './TimerDisplay.vue'

export default {
    components: {
        TimerStartButton,
        TimerInput,
        TimerDisplay,
    },
    data() {
        return {
            // IsStarted handles both the button title and
            // serves as a good handler for clearing the interval
            // in getCurrentTime()

            isStarted: false,

            totalTimeInputted: {
                milliseconds: null,
            },

            // Getting an actual date for the DB.
            // Getting milliseconds for simple and accurate conversions.

            startTime: {
                date: null,
                milliseconds: null,
            },

            currentTime: {
                milliseconds: null,
            },

            stopTime: {
                date: null,
                milliseconds: null,
            },

            timeSinceStart: {
                milliseconds: null,
            },

            // StartTime allows us to use it for
            // 1. Data
            // 2. A way to get timeLeft by subtracting it from
            //    the current time

            // startTime: {
            //     milliseconds: null,
            //     date: null,
            // },
            // inputedTimes: {
            //     hours: 0,
            //     minutes: 0,
            //     seconds: 0,
            //     totalMils: 0,
            // },
            // currentTime: {
            //     milliseconds: null,
            //     date: null,
            // },
            // timeLeft: {
            //     milliseconds: null,
            //     seconds: null,
            //     minutes: null,
            //     hours: null,
            // },
        }
    },
    emits: ['startStopTimer'],
    methods: {
        timerStartHandler() {
            this.isStarted = !this.isStarted

            if (this.startTime.milliseconds === null) {
                const date = new Date()
                this.startTime.milliseconds = date.getTime()
                this.startTime.date = date.toString()
            }

            const getTimeSinceStart = () => {
                if (this.isStarted) {
                    this.currentTime.milliseconds = new Date().getTime()
                    this.timeSinceStart.milliseconds =
                        this.currentTime.milliseconds -
                        this.startTime.milliseconds
                } else {
                    clearInterval(interval)
                }
            }
            let interval = setInterval(() => {
                getTimeSinceStart()
            }, 1)
            // this.isStarted = !this.isStarted
            // console.log('isStarted changed')
            // const getCurrentTime = () => {
            //     console.log('getCurrentTime interval running...')
            //     const date = new Date()
            //     if (this.isStarted) {
            //         this.currentTime.milliseconds = date.getTime()
            //         // Getting the total amount of miliseconds so that it can
            //         // be recalculated into seconds, minutes and hours.
            //         this.timeLeft.milliseconds =
            //             this.inputedTimes.totalMils -
            //             (this.currentTime.milliseconds -
            //                 this.startTime.milliseconds)
            //         this.timeLeft.seconds =
            //             (this.timeLeft.milliseconds / 1000) % 60
            //         this.timeLeft.minutes =
            //             (this.timeLeft.milliseconds / (1000 * 60)) % 60
            //         this.timeLeft.hours =
            //             (this.timeLeft.milliseconds / (1000 * 60 * 60)) % 24
            //         this.currentTime.date = date.toString()
            //         console.log('getting and converting times...')
            //     } else {
            //         clearInterval(interval)
            //         console.log('cleared getCurrentTime interval')
            //     }
            // }
            // const isStartTimeSet =
            //     this.isStarted && this.startTime.milliseconds === null
            // if (!isStartTimeSet) {
            //     const date = new Date()
            //     this.startTime.milliseconds = date.getTime()
            //     this.startTime.date = date.toString()
            //     console.log('getting a new start time')
            // }
            // const interval = setInterval(() => {
            //     getCurrentTime()
            //     console.log('running ')
            // }, 1)
        },
        inputHandler(hours, minutes, seconds) {
            this.totalTimeInputted.milliseconds =
                this.convertToMilis('hours', hours) +
                this.convertToMilis('minutes', minutes) +
                this.convertToMilis('seconds', seconds)
        },
        convertToMilis(timeType, number) {
            switch (timeType) {
                case 'seconds':
                    return number * 1000
                case 'minutes':
                    return number * 60000
                case 'hours':
                    return number * 3600000
                default:
                    return
            }
        },
    },
}
</script>
