<template>
    <div>
        <p>
            {{ parseInt(timeAccrued.hours) || '00' }}hr
            {{ parseInt(timeAccrued.minutes) || '00' }}m
            {{ parseInt(timeAccrued.seconds) || '00' }}s
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
