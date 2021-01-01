<template>
    <div>
        <p>
            {{ parseInt(timeOccurred.hours) || '0' }}hr
            {{ parseInt(timeOccurred.minutes) || '00' }}m
            {{ parseInt(timeOccurred.seconds) || '00' }}s
        </p>
    </div>
</template>

<script>
export default {
    props: {
        timeOccurred: {
            milliseconds: Number,
            seconds: Number,
            minutes: Number,
            hours: Number,
        },
    },
}
</script>

<style lang="scss" scoped></style>
