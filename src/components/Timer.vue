<template>
    <h1>Timer</h1>
    <TimerStartButton v-on:start="timerStartHandler" :isStarted="isStarted" />
    <p>{{ startTime.milliseconds }}</p>
    <p>{{ startTime.date }}</p>
</template>

<script>
import TimerStartButton from "./TimerStartButton.vue"

export default {
    name: "Timer",
    components: {
        TimerStartButton,
    },
    data() {
        return {
            isStarted: false,
            startTime: {
                milliseconds: null,
                date: null,
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
    },
}
</script>
