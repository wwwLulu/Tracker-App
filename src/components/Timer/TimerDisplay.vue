<template>
    <div>
        <p class="timer__task">{{ focus }}</p>
        <p class="timer__time">{{ parseInt(timeOccurred) || '00' }}s</p>
    </div>
</template>

<script>
export default {
    props: {
        timeOccurred: Number,
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
