<template>
    <div class="timer">
        <h1 class="timer__title">Focus</h1>
        <timer-display
            class="timer__display"
            :timeOccurred="startCurrentDifference"
        />
        <timer-start-button
            class="timer__start-btn"
            @startStopTimer="timerStartHandler"
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

            // Adding a date so it can be sent to
            // a database
            startTime: {
                date: '',
                milliseconds: null,
            },
            currentTime: {
                milliseconds: null,
            },
            startCurrentDifference: {
                milliseconds: null,
                seconds: null,
                minutes: null,
                hours: null,
            },

            // These three Times underneath are used to track
            // active time by calculating differences
            // between each.

            // This is because the Date object is being
            // used in order to be able to still hold
            // time outside of the browser.

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
            }

            const getTimeOccurred = () => {
                if (this.isStarted) {
                    this.currentTime.milliseconds = new Date().getTime()

                    const timeTimerHasBeenActive =
                        this.currentTime.milliseconds -
                        this.startTime.milliseconds -
                        this.totalStoppedTime.milliseconds

                    this.startCurrentDifference.milliseconds = timeTimerHasBeenActive

                    this.startCurrentDifference.seconds =
                        (timeTimerHasBeenActive / 1000) % 60

                    this.startCurrentDifference.minutes =
                        (timeTimerHasBeenActive / (1000 * 60)) % 60

                    this.startCurrentDifference.hours =
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

<style scoped lang="scss">
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
    justify-content: space-between;
    align-items: center;
    height: 20rem;
    text-align: center;
    padding: 2rem;
    background-color: lightgrey;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0.5rem;
    &__title {
        font-size: 3rem;
    }
    &__display {
        font-size: 2.4rem;
    }
    &__start-btn {
        margin-top: 1rem;
    }
}
</style>
