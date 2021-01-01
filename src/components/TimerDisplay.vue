<template>
    <div>
        <h3>Timer</h3>
        <p>
            {{ parseInt(timeAccrued.hours) }}hr
            {{ parseInt(timeAccrued.minutes) }}m
            {{ parseInt(timeAccrued.seconds) }}s
        </p>
    </div>
</template>

<script>
export default {
    props: {
        timeAccrued: {
            milliseconds: Number,
            seconds: Number,
            minutes: Number,
            hours: Number,
        },
    },
}
</script>
