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
    <p>
        Time Left (Miliseconds):
        {{
            inputedTimes.totalMils -
            (currentTime.milliseconds - startTime.milliseconds)
        }}
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
                totalMils: 0,
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
                const date = new Date()
                if (this.isStarted) {
                    this.currentTime.milliseconds = date.getTime()
                    this.currentTime.date = date.toString()
                } else {
                    clearInterval(interval)
                }
            }

            if (this.isStarted) {
                const date = new Date()
                this.startTime.milliseconds = date.getTime()
                this.startTime.date = date.toString()
            }

            const interval = setInterval(() => {
                getCurrentTime()
            }, 1)
        },
        inputHandler(hours, minutes, seconds) {
            this.inputedTimes.hours = hours
            this.inputedTimes.minutes = minutes
            this.inputedTimes.seconds = seconds
            this.inputedTimes.totalMils =
                this.convertToMilis("hours", hours) +
                this.convertToMilis("minutes", minutes) +
                this.convertToMilis("seconds", seconds)
        },
        convertToMilis(timeType, number) {
            switch (timeType) {
                case "seconds":
                    return number * 1000
                case "minutes":
                    return number * 60000
                case "hours":
                    return number * 3600000
                default:
                    return
            }
        },
    },
}
</script>
