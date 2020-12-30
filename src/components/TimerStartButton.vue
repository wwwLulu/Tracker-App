<template>
    <button>{{ isStarted ? "Stop" : "Start" }}</button>
</template>

<script>
export default {
    name: "TimerStartButton",
    props: {
        isStarted: Boolean,
    },
}
</script>
