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
        }
    },
    methods: {
        timerStartHandler() {
            this.isStarted = !this.isStarted
        },
    },
}
</script>
