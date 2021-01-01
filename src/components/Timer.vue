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
            // in getTimeSinceStart()

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
