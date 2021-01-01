<template>
    <div>
        <h3>Timer</h3>
        <p>
            Miliseconds Left:
            {{ timeLeft.milliseconds }}
        </p>
        <p>
            Seconds Left:
            {{ countdown.seconds || null }}
        </p>
        <p>
            Minutes Left:
            {{ countdown.minutes || null }}
        </p>
        <p>
            Hours Left:
            {{ countdown.hours || null }}
        </p>
    </div>
</template>

<script>
export default {
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
