<template>
    <h1>Incrementor</h1>
    <p>{{ count }}</p>
    <button v-on:click="increment">add</button>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count
        },
    },
    methods: {
        increment() {
            this.$store.commit('increment')
            console.log(this.$store.state.count)
        },
    },
}
</script>
