<template>
    <div class="timer">
        <h1 class="timer__title">Focus</h1>
        <!-- <timer-input v-on:changeHandler="inputHandler" /> -->
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

            if (thereIsNoStartTime) {
                const date = new Date()
                this.startTime.date = date.getDate()
                this.startTime.milliseconds = date.getTime()
            }

            if (!this.isStarted) {
                this.stoppedTime.milliseconds = new Date().getTime()
            } else {
                this.restartedTime.milliseconds = new Date().getTime()
            }

            const getTimeOccurred = () => {
                if (this.isStarted) {
                    this.currentTime.milliseconds = new Date().getTime()
                    this.startCurrentDifference.milliseconds =
                        this.currentTime.milliseconds -
                        this.startTime.milliseconds

                    this.startCurrentDifference.seconds =
                        (this.startCurrentDifference.milliseconds / 1000) % 60

                    this.startCurrentDifference.minutes =
                        (this.startCurrentDifference.milliseconds /
                            (1000 * 60)) %
                        60

                    this.startCurrentDifference.hours =
                        (this.startCurrentDifference.milliseconds /
                            (1000 * 60 * 60)) %
                        24
                } else {
                    clearInterval(interval)
                }
            }
            let interval = setInterval(() => {
                getTimeOccurred()
            }, 100)
        },
        inputHandler(hours, minutes, seconds) {
            this.inputTime.milliseconds =
                this.convertToMilis('hours', hours) +
                this.convertToMilis('minutes', minutes) +
                this.convertToMilis('seconds', seconds)
        },
        convertToMilis(timeType, number) {
            switch (timeType) {
                case 'seconds':
                    return number * 1000
                case 'minutes':
                    return number * 60000
                case 'hours':
                    return number * 3600000
                default:
                    return
            }
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
