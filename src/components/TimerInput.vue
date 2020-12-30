<template>
    <div>
        <input
            v-on:change="$emit('input', 'hours')"
            type="number"
            id="hours"
            name="hours"
            placeholder="hours"
        />
        <input
            v-on:change="$emit('input', 'minutes')"
            type="number"
            id="minutes"
            name="minutes"
            placeholder="minutes"
        />
    </div>
</template>

<script>
export default {
    name: "TimerInput",
}
</script>
