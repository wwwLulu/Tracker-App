<template>
    <button class="btn btn-normal" v-on:click="$emit('startStopTimer')">
        {{ isStarted ? 'Stop' : 'Start' }}
    </button>
</template>

<script>
export default {
    props: {
        isStarted: Boolean,
    },
}
</script>
