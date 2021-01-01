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
.flip-container {
    perspective: 1000px;
}
.flip-container,
.front,
.back {
    height: 100px;
    width: 200px;
}

/* flip speed goes here */

.flip-container {
    perspective: 1000px;
}
/* flip the pane when hovered */
.flip-container.active .flipper {
    transform: rotateY(180deg);
}

/* flip speed goes here */
.flipper {
    transition: 0.6s;
    transform-style: preserve-3d;

    position: relative;
}

/* hide back of pane during swap */
.front,
.back {
    backface-visibility: hidden;

    position: absolute;
    top: 0;
    left: 0;
}

/* front pane, placed above back */
.front {
    z-index: 2;
    /* for firefox 31 */
    transform: rotateY(0deg);
}

/* back, initially hidden pane */
.back {
    transform: rotateY(180deg);
}
</style>
