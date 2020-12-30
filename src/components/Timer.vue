<template>
    <h1>Timer</h1>
    <TimerStartButton :isStarted="isStarted" />
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
}
</script>
