<template>
    <button v-on:click="$emit('start')">
        {{ isStarted ? "Stop" : "Start" }}
    </button>
</template>

<script>
export default {
    name: "TimerStartButton",
    props: {
        isStarted: Boolean,
    },
}
</script>
