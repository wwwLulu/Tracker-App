<template>
    <p class="task" @mouseenter="showIcon" @mouseleave="hideIcon">
        {{ body }}
        <i ref="icon" class="task__edit fas fa-edit"></i>
    </p>
</template>

<script>
export default {
    props: {
        body: String,
    },
    methods: {
        showIcon() {
            this.$refs.icon.style.opacity = 1
        },
        hideIcon() {
            this.$refs.icon.style.opacity = 0
        },
    },
}
</script>

<style lang="scss" scoped>
.task {
    position: relative;
    cursor: pointer;
    margin: 1rem 0;
    background: white;
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: 1.4rem;
    font-weight: 300;
    border-left: 0.1rem rgba(0, 0, 0, 0.3) solid;
    &:hover {
        background: darken(white, 11);
    }
    &__edit {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        opacity: 0;
        &:hover {
            cursor: pointer;
            color: rgba(0, 0, 0, 0.3);
        }
    }
}
</style>
