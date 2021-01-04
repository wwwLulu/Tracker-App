<template>
    <div>
        <p class="timer__task">{{ focus }}</p>
        <p class="timer__time">
            {{ parseInt(timeOccurred.hours) || '0' }}hr
            {{ parseInt(timeOccurred.minutes) || '00' }}m
            {{ parseInt(timeOccurred.seconds) || '00' }}s
        </p>
    </div>
</template>

<script>
export default {
    props: {
        timeOccurred: {
            milliseconds: Number,
            seconds: Number,
            minutes: Number,
            hours: Number,
        },
    },
    computed: {
        focus() {
            return this.$store.getters.focus
        },
        doingTask() {
            return this.$store.getters.currentTodo
        },
    },
}
</script>

<style lang="scss" scoped></style>
