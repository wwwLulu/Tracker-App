<template>
    <div class="timer">
        <h1 class="timer__title">Task</h1>
        <timer-display class="timer__display" :listItem="currentListItem" />
        <p>{{ currentListItem }}</p>
        <timer-start-button
            class="timer__start-btn"
            @startStopTimer="startStopButtonHandler"
            :isStarted="isStarted"
        />
    </div>
</template>

<script>
import TimerStartButton from './TimerStartButton.vue'
import TimerDisplay from './TimerDisplay.vue'

export default {
    components: {
        TimerStartButton,
        TimerDisplay,
    },
    data() {
        return {
            isStarted: false,
            timePassed: null,
            // interval needed to be set in data, because
            // when in the startStopButtonHandler it
            // gets reset when clicked
            currentInterval: null,
        }
    },
    computed: {
        currentListItem() {
            return this.$store.getters.currentTodos[0]
        },
    },
    emits: ['startStopTimer'],
    methods: {
        startStopButtonHandler() {
            this.isStarted = !this.isStarted
            if (this.isStarted) {
                this.currentInterval = setInterval(() => {
                    this.currentListItem.timeSpent += 500
                }, 500)
            } else {
                clearInterval(this.currentInterval)
            }
        },
    },
}
</script>

<style lang="scss">
.timer {
    @media (max-width: 1200px) {
        margin-top: 3rem;
    }
    margin: 0 auto;
    margin-top: 10rem;
    margin-bottom: 3rem;
    width: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 20rem;
    text-align: center;
    padding: 1rem;
    background-color: lightgrey;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0.5rem;
    &__title {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    &__task {
        border-radius: 0.5rem;
        border-left: 2px solid rgba(0, 0, 0, 0.4);
        background: darken(lightgrey, 10%);
        padding: 0 0.5rem;
        margin-left: 0.5rem;
        font-weight: 300;
        font-size: 1.6rem;
    }
    &__start-btn {
        margin-top: 2rem;
    }
    &__time {
        font-weight: 400;
        font-size: 1.6rem;
        margin-top: 1rem;
        letter-spacing: 0.2rem;
        font-style: oblique;
    }
}
</style>
