<template>
    <div>
        <h5>Timer</h5>
        <p>
            Miliseconds Left:
            {{ timeLeft }}
        </p>
    </div>
</template>

<script>
export default {
    name: "TimerDisplay",
    props: {
        timeLeft: Number,
    },
}
</script>
