<template>
    <h1>Timer</h1>
    <TimerInput v-on:changeHandler="inputHandler" />
    <TimerStartButton v-on:start="timerStartHandler" :isStarted="isStarted" />
    <TimerDisplay />
    <p>{{ startTime.milliseconds }}</p>
    <p>{{ startTime.date }}</p>
    <p>{{ hours }}</p>
</template>

<script>
import TimerStartButton from "./TimerStartButton.vue"
import TimerInput from "./TimerInput.vue"
import TimerDisplay from "./TimerDisplay.vue"

export default {
    name: "Timer",
    components: {
        TimerStartButton,
        TimerInput,
        TimerDisplay,
    },
    data() {
        return {
            isStarted: false,
            startTime: {
                milliseconds: null,
                date: null,
            },
            timeInputs: {
                hours: null,
                minutes: null,
            },
            inputedTimes: {
                hours: null,
                minutes: null,
            },
        }
    },
    methods: {
        timerStartHandler() {
            this.isStarted = !this.isStarted

            if (this.isStarted) {
                this.startTime.milliseconds = Date.now()
                this.startTime.date = new Date().toString()
            }
        },
        inputHandler(hours, minutes) {
            this.inputedTimes.hours = hours
            this.inputedTimes.minutes = minutes
        },
    },
}
</script>
