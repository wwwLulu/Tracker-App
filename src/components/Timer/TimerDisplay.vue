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
        currentTodoName() {
            if (this.$store.getters.currentTodo)
                return this.$store.getters.currentTodo.task
            else return 'Add a task'
        },
    },
}
</script>

<style lang="scss" scoped>
.todo-name {
    font-size: 2.3rem;
}
</style>
