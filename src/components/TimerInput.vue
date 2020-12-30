<template>
    <div>
        <input v-model="hours" placeholder="hours" />

        <input v-model="minutes" placeholder="minutes" />
    </div>
</template>

<script>
export default {
    name: "TimerInput",
    data() {
        return {
            hours: "",
            minutes: "",
        }
    },
}
</script>
