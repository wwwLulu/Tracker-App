<template>
    <div>
        <h3>Timer</h3>
        <p>
            Miliseconds Left:
            {{ timeLeft.milliseconds }}
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
