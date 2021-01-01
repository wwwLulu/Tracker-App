<template>
    <h1>Timer</h1>
    <timer-input v-on:changeHandler="inputHandler" />
    <timer-start-button
        @startStopTimer="timerStartHandler"
        :isStarted="isStarted"
    />
    <timer-display :timeAccrued="timeAccrued" />
</template>

<script>
import TimerStartButton from './TimerStartButton.vue'
import TimerInput from './TimerInput.vue'
import TimerDisplay from './TimerDisplay.vue'

export default {
    components: {
        TimerStartButton,
        TimerInput,
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
