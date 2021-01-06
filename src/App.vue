<template>
    <main>
        <the-list
            @dragover="dragOver('to-do')"
            title="To-Do"
            :tasks="tasks"
            mode="to-do"
        ></the-list>
        <the-list
            @dragover="dragOver('doing')"
            title="Doing"
            :tasks="tasks"
            mode="doing"
        ></the-list>
        <the-list
            @dragover="dragOver('completed')"
            title="Completed"
            :tasks="tasks"
            mode="completed"
        ></the-list>
    </main>

    <Timer @dragover="dragOver('focus')" />
</template>

<script>
import Timer from '@/components/Timer/Timer.vue'
import TheList from '@/components/List/TheList.vue'

export default {
    mounted() {
        if (localStorage.getItem('tasks')) {
            this.$store.commit('initializeTasksWithStorage')
        }
    },
    components: {
        Timer,
        TheList,
    },
    computed: {
        tasks() {
            return this.$store.state.tasks
        },
    },
    methods: {
        dragOver(mode) {
            this.$store.state.listHovered = mode
        },
    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,700&display=swap');
:root {
    --normal-font: 'Nunito', sans-serif;
}
html {
    font-size: 62.5%;
}
* {
    margin: 0;
    box-sizing: border-box;
}
body {
    width: 120rem;
    background: slategray;
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: var(--normal-font);
}

main {
    width: 120rem;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1200px) {
        width: inherit;
        align-items: center;
        flex-direction: column;
    }
}

// Utilities
.btn {
    &:hover {
        cursor: pointer;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 4px 15px 0 rgba(0, 0, 0, 0.19);
    }
}
.btn-normal {
    padding: 1rem 1.2rem;
    border: none;
    border-radius: 0.5rem;
}

.card {
    margin-top: 3rem;
    width: 30rem;
    max-width: 30rem;
    background: lightgrey;
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-size: 1.4rem;
}

.fas {
    color: var(--color-black);
}
</style>
