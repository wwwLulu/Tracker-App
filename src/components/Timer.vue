<template>
    <h1>Timer</h1>
    <TimerInput v-on:changeHandler="inputHandler" />
    <TimerStartButton v-on:start="timerStartHandler" :isStarted="isStarted" />
    <TimerDisplay />
    <p>Start Time in Miliseconds: {{ startTime.milliseconds }}</p>
    <p>Start Date: {{ startTime.date }}</p>
    <p>duration: {{ currentTime.milliseconds - startTime.milliseconds }}</p>
    <p>
        User timer: {{ inputedTimes.hours }} : {{ inputedTimes.minutes }} :
        {{ inputedTimes.seconds }}
    </p>
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
            inputedTimes: {
                hours: 0,
                minutes: 0,
                seconds: 0,
            },
            currentTime: {
                milliseconds: null,
                date: null,
            },
        }
    },
    methods: {
        timerStartHandler() {
            this.isStarted = !this.isStarted

            const getCurrentTime = () => {
                if (this.isStarted) {
                    this.currentTime.milliseconds = Date.now()
                    this.currentTime.date = new Date.toString()
                } else {
                    clearInterval(interval)
                }
            }

            if (this.isStarted) {
                this.startTime.milliseconds = Date.now()
                this.startTime.date = new Date().toString()
            }

            const interval = setInterval(() => {
                getCurrentTime()
            })
        },
        inputHandler(hours, minutes) {
            this.inputedTimes.hours = hours
            this.inputedTimes.minutes = minutes
        },
    },
}
</script>
