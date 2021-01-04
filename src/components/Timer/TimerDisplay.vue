<template>
    <div>
        <p class="timer__task">
            {{
                listItem
                    ? listItem.task
                    : 'You need to place a task in the doing list'
            }}
        </p>
        <p class="timer__time">{{ listItem ? listItem.timeSpent : '0' }}ms</p>
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
