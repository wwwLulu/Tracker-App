<template>
    <div class="timer">
        <h1 class="timer__title">Focus</h1>
        <timer-display class="timer__display" :timeOccurred="totalActiveTime" />
        <timer-start-button
            class="timer__start-btn"
            @startStopTimer="timerStartHandler"
            :isStarted="isStarted"
        />
    </div>
    <p>{{ currentListItem }}</p>
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
            startTime: {
                date: '',
                milliseconds: null,
            },
            currentTime: {
                milliseconds: null,
            },
            stoppedTime: {
                milliseconds: null,
            },
            restartedTime: {
                milliseconds: null,
            },
            totalStoppedTime: {
                milliseconds: null,
            },
        }
    },
    computed: {
        totalActiveTime() {
            return this.$store.state.totalActiveTime
        },
        currentListItem() {
            return this.$store.getters.currentTodo[0]
        },
    },
    emits: ['startStopTimer'],
    methods: {
        timerStartHandler() {
            this.isStarted = !this.isStarted

            const thereIsNoStartTime = this.startTime.milliseconds === null
            const thereIsNoStopTime = this.stoppedTime.milliseconds === null

            if (thereIsNoStartTime) {
                const date = new Date()
                this.startTime.date = date.getDate()
                this.startTime.milliseconds = date.getTime()
            }

            if (!this.isStarted) {
                this.stoppedTime.milliseconds = new Date().getTime()
            } else if (!thereIsNoStopTime && this.isStarted) {
                this.restartedTime.milliseconds = new Date().getTime()
                const difference =
                    this.restartedTime.milliseconds -
                    this.stoppedTime.milliseconds

                this.totalStoppedTime.milliseconds += difference
                this.currentListItem.timeInactive += difference
            }

            const getTimeOccurred = () => {
                if (this.isStarted) {
                    this.currentTime.milliseconds = new Date().getTime()

                    const timeTimerHasBeenActive =
                        this.currentTime.milliseconds -
                        this.startTime.milliseconds -
                        this.totalStoppedTime.milliseconds

                    this.totalActiveTime.milliseconds = timeTimerHasBeenActive
                    this.currentListItem.timeActive = timeTimerHasBeenActive

                    this.totalActiveTime.seconds =
                        (timeTimerHasBeenActive / 1000) % 60

                    this.totalActiveTime.minutes =
                        (timeTimerHasBeenActive / (1000 * 60)) % 60

                    this.totalActiveTime.hours =
                        (timeTimerHasBeenActive / (1000 * 60 * 60)) % 24
                } else {
                    clearInterval(interval)
                }
            }
            let interval = setInterval(() => {
                getTimeOccurred()
            }, 100)
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
