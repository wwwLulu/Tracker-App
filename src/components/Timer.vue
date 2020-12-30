<template>
    <h1>Timer</h1>
    <TimerStartButton v-on:start="timerStartHandler" :isStarted="isStarted" />
    <p>{{ startTime.sec }}</p>
    <p>{{ startTime.min }}</p>
    <p>{{ startTime.hr }}</p>
    <p>{{ startTime.day }}</p>
    <p>{{ startTime.mth }}</p>
    <p>{{ startTime.yr }}</p>
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
                sec: null,
                min: null,
                hr: null,
                day: null,
                mth: null,
                yr: null,
            },
        }
    },
    methods: {
        timerStartHandler() {
            this.isStarted = !this.isStarted

            if (this.isStarted) {
                this.startTime.sec = new Date().getSeconds()
                this.startTime.min = new Date().getMinutes()
                this.startTime.day = new Date().getDay()
                this.startTime.mth = new Date().getMonth()
                this.startTime.yr = new Date().getFullYear()
            }
        },
    },
}
</script>
