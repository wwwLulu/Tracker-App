<template>
    <the-list title="To-Do"></the-list>
</template>

<script>
import TheList from '@/components/List/TheList.vue'

export default {
    components: {
        TheList,
    },
    data() {
        return {
            toDo: [],
            inProgress: [],
            finished: [],
        }
    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,700&display=swap');
:root {
    --color-primary: #efefef;
    --color-secondary: #efefee;
    --color-black: #333;
    --color-alert-add: lightgreen;
    --color-alert-delete: lightsalmon;
    --color-alert-info: lightyellow;
    --color-column-even: lightgrey;
    --color-column-odd: darkgrey;
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
    background: slategray;
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: var(--normal-font);
}

// Utilities
.btn {
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        transform: scale(0.98);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 4px 15px 0 rgba(0, 0, 0, 0.19);
    }
}
.btn-normal {
    padding: 1rem 1.2rem;
    border: none;
    border-radius: 0.5rem;
}

.fas {
    color: var(--color-black);
}
</style>
