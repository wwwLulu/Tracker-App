<template>
    <h1>{{ currentFocus }}</h1>
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
