<template>
    <div>
        <h3>Timer</h3>
        <p>{{ currentTime.milliseconds }}</p>
    </div>
</template>

<script>
export default {
    props: {
        currentTime: {
            milliseconds: Number,
        },
    },
}
</script>
