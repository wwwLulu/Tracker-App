<template>
    <div class="flipper-container">
        <div class="flipper">
            <button
                v-if="isStarted"
                class="btn btn-normal"
                v-on:click="$emit('startStopTimer')"
            >
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
