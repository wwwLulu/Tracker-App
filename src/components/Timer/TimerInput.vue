<template>
    <div>
        <input
            v-model="hours"
            v-on:change="$emit('changeHandler', hours, minutes, seconds)"
            placeholder="hours"
        />

        <input
            v-model="minutes"
            v-on:change="$emit('changeHandler', hours, minutes, seconds)"
            placeholder="minutes"
        />

        <input
            v-model="seconds"
            v-on:change="$emit('changeHandler', hours, minutes, seconds)"
            placeholder="seconds"
        />
    </div>
</template>

<script>
export default {
    name: 'TimerInput',
    data() {
        return {
            hours: '',
            minutes: '',
            seconds: '',
        }
    },
}
</script>
