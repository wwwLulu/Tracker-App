<template>
    <div class="timer">
        <h1 class="timer__title">Focus</h1>
        <!-- <timer-input v-on:changeHandler="inputHandler" /> -->
        <timer-display class="timer__display" :timeOccurred="timeOccurred" />
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
            timeOccurred: {
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

            if (this.timeOccurred.milliseconds !== null) {
                this.dateStarted = new Date().getDate()
            }

            const getTimeOccurred = () => {
                if (this.isStarted) {
                    this.timeOccurred.milliseconds += 100
                    this.timeOccurred.seconds =
                        (this.timeOccurred.milliseconds / 1000) % 60
                    this.timeOccurred.minutes =
                        (this.timeOccurred.milliseconds / (1000 * 60)) % 60
                    this.timeOccurred.hours =
                        (this.timeOccurred.milliseconds / (1000 * 60 * 60)) % 24
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
    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 3rem;
    width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 30rem;
    text-align: center;
    padding: 4rem 2rem;
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
