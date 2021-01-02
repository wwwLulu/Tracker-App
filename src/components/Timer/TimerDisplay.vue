<template>
    <div>
        <p class="timer__task">{{ doingTask[0].task }}</p>
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
        doingTask() {
            return this.$store.getters.currentTodo
        },
    },
}
</script>

<style lang="scss" scoped></style>
