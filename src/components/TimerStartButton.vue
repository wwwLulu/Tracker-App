<template>
    <div class="flipper-container" v-on:click="$emit('startStopTimer')">
        <div class="flipper">
            <button class="btn btn-normal">
                {{ isStarted ? 'Stop' : 'Start' }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isStarted: Boolean,
    },
}
</script>
