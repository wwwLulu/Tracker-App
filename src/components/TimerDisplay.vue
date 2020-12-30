<template>
    <div>
        <h3>Timer</h3>
        <p>
            Miliseconds Left:
            {{ timeLeft.milliseconds }}
        </p>
        <p>
            Seconds Left:
            {{ parseInt(timeLeft.seconds) }}
        </p>
        <p>
            Minutes Left:
            {{ parseInt(timeLeft.minutes) }}
        </p>
        <p>
            Hours Left:
            {{ parseInt(timeLeft.hours) }}
        </p>
    </div>
</template>

<script>
export default {
    name: "TimerDisplay",
    props: {
        timeLeft: {
            milliseconds: Number,
            seconds: Number,
            minutes: Number,
            hours: Number,
        },
    },
}
</script>
