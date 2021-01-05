<template>
    <div>
        <p class="timer__task">
            {{
                listItem
                    ? listItem.task
                    : 'You need to drag a task into the timer'
            }}
        </p>
        <p class="timer__time">
            {{ listItem ? timerDisplay : '00:00:00' }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        listItem: {
            task: String,
            timeSpent: Number,
        },
    },
    computed: {
        timeInMilliseconds() {
            return JSON.stringify(this.$store.getters.focusedTask[0].timeSpent)
        },
        timerDisplay() {
            let seconds = (this.timeInMilliseconds / 1000) % 60
            let mins = Math.floor(seconds / 60)
            let hours = Math.floor(mins / 24)
            if (seconds < 10) {
                seconds = `0${seconds}`
            }
            if (mins < 10) {
                mins = `0${mins}`
            }
            if (hours < 10) {
                hours = `0${hours}`
            }
            return `${hours}:${mins}:${seconds}`
        },
    },
}
</script>

<style lang="scss" scoped></style>
