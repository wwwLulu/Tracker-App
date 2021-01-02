<template>
    <div
        v-bind:class="{ active: isStarted }"
        class="flip-container"
        v-on:click="$emit('startStopTimer')"
    >
        <div class="flipper">
            <div class="front">
                <button class="btn btn-normal">Start</button>
            </div>

            <div class="back">
                <button class="btn btn-normal">Stop</button>
            </div>
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

<style lang="scss" scoped>
.btn {
    font-size: 1.6rem;
    color: var(--color-black);
    padding: 1rem 2rem;
    border-radius: 1rem;
    background-color: #aaa;
}

/* Everything below is for the Flipper */
.flip-container {
    perspective: 1000px;
}
.flip-container,
.front,
.back {
    height: 44px;
    width: 105px;
}

.flip-container.active .flipper {
    transform: rotateY(180deg);
}

.flipper {
    transition: 0.6s;
    transform-style: preserve-3d;

    position: relative;
}

.front,
.back {
    backface-visibility: hidden;

    position: absolute;
    top: 0;
    left: 0;
}

.front {
    z-index: 2;
    /* for firefox 31 */
    transform: rotateY(0deg);
}

.back {
    transform: rotateY(180deg);
}
</style>
