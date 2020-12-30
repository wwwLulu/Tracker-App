<template>
    <div>
        <input
            v-model="hours"
            v-on:change="$emit('changeHandler', hours, minutes)"
            placeholder="hours"
        />

        <input
            v-model="minutes"
            v-on:change="$emit('changeHandler', hours, minutes)"
            placeholder="minutes"
        />
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
