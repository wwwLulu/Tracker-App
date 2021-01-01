<template>
    <div class="timer">
        <h1 class="timer__title">Timer</h1>
        <!-- <timer-input v-on:changeHandler="inputHandler" /> -->
        <timer-display class="timer__display" :timeAccrued="timeAccrued" />
        <timer-start-button
            class="timer__start-btn"
            @startStopTimer="timerStartHandler"
            :isStarted="isStarted"
        />
    </div>
</template>

<script>
import TimerStartButton from './TimerStartButton.vue'
// import TimerInput from './TimerInput.vue'
import TimerDisplay from './TimerDisplay.vue'

export default {
    components: {
        TimerStartButton,
        // TimerInput,
        TimerDisplay,
    },
    data() {
        return {
            isStarted: false,
            dateStarted: null,
            timeAccrued: {
                milliseconds: null,
                seconds: null,
                minutes: null,
                hours: null,
            },
            totalTimeInputted: {
                milliseconds: null,
            },

            // Current not being used, saving it for "go-ahead"
            inputTime: {
                milliseconds: null,
            },
        }
    },
    emits: ['startStopTimer'],
    methods: {
        timerStartHandler() {
            this.isStarted = !this.isStarted

            if (this.timeAccrued.milliseconds !== null) {
                this.dateStarted = new Date().getDate()
            }

            const getTimeAccrued = () => {
                if (this.isStarted) {
                    this.timeAccrued.milliseconds += 100
                    this.timeAccrued.seconds =
                        (this.timeAccrued.milliseconds / 1000) % 60
                    this.timeAccrued.minutes =
                        (this.timeAccrued.milliseconds / (1000 * 60)) % 60
                    this.timeAccrued.hours =
                        (this.timeAccrued.milliseconds / (1000 * 60 * 60)) % 24
                } else {
                    clearInterval(interval)
                }
            }
            let interval = setInterval(() => {
                getTimeAccrued()
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 291px;
    text-align: center;
    padding: 4rem;
    background-color: lightgrey;
    border-radius: 0.5rem;
    &__title {
        font-size: 8rem;
    }
    &__display {
        font-size: 5rem;
    }
    &__start-btn {
        margin-top: 1rem;
    }
}
</style>
