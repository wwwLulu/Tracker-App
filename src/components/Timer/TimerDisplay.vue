<template>
    <div>
        <p class="timer__task">{{ listItem.task }}</p>
        <p class="timer__time">{{ parseInt(listItem.timeSpent) || '00' }}s</p>
    </div>
</template>

<script>
export default {
    props: {
        listItem: {
            task: String,
            timeSpent: Number,
        },
    },
}
</script>

<style lang="scss" scoped></style>
