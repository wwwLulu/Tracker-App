<template>
    <h1>Timer</h1>
    <TimerStartButton v-on:start="timerStartHandler" :isStarted="isStarted" />
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
                year: null,
            },
        }
    },
    methods: {
        timerStartHandler() {
            this.isStarted = !this.isStarted
        },
    },
}
</script>
