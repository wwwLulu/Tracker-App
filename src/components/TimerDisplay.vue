<template>
    <div>
        <h5>Timer</h5>
        <p>
            Miliseconds Left
            {{
                inputedTimes.totalMils -
                (currentTime.milliseconds - startTime.milliseconds)
            }}
        </p>
    </div>
</template>

<script>
export default {
    name: "TimerDisplay",
    props: {
        inputedTimes: {
            hours: Number,
            minutes: Number,
            seconds: Number,
            totalMils: Number,
        },
        startTime: {
            milliseconds: null | Number,
            date: null | Number,
        },
        currentTime: {
            milliseconds: null | Number,
            date: null | String,
        },
    },
}
</script>
