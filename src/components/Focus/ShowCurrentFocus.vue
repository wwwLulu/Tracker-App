<template>
    <div v-if="currentFocus">
        <h1>{{ currentFocus.task }}</h1>
        <h2>Time spent: {{ currentFocus.timeSpent }}ms</h2>
    </div>
</template>

<script>
export default {
    computed: {
        currentFocus() {
            return this.$store.getters.focus
        },
    },
}
</script>
