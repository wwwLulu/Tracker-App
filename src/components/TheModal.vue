<template>
    <div class="modal">
        <div class="modal__content">
            <p class="modal__message">{{}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        message: String,
    },
}
</script>

<style lang="scss">
.modal {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
