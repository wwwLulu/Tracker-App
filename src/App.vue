<template>
    <the-list
        title="To-Do"
        :tasks="tasks"
        mode="to-do"
        @updateTask="updateTask"
        @deleteTask="deleteTask"
        @addTask="addTask"
    ></the-list>
    <the-list
        title="Doing"
        :tasks="tasks"
        mode="doing"
        @updateTask="updateTask"
        @deleteTask="deleteTask"
        @addTask="addTask"
    ></the-list>
    <the-list
        title="Completed"
        :tasks="tasks"
        mode="completed"
        @updateTask="updateTask"
        @deleteTask="deleteTask"
        @addTask="addTask"
    ></the-list>
</template>

<script>
import Timer from '@/components/Timer.vue'
import TheList from '@/components/List/TheList.vue'

export default {
    components: {
        Timer,
        TheList,
    },
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    task: 'Wash the dishes',
                    status: 'to-do',
                },
                {
                    id: 2,
                    task: 'Code a website',
                    status: 'to-do',
                },
                {
                    id: 3,
                    task: 'Walk the dog',
                    status: 'completed',
                },
                {
                    id: 4,
                    task: 'Playing Roblox',
                    status: 'doing',
                },
            ],
        }
    },
    methods: {
        updateTask(updatedTask, taskId) {
            this.tasks.forEach(entry => {
                if (entry.id == taskId) {
                    entry.task = updatedTask
                }
            })
        },
        deleteTask(taskId) {
            this.tasks = this.tasks.filter(entry => entry.id != taskId)
        },
        addTask(status) {
            //When you delete then add a task, the ID's might get messed up
            // So reassigning is good here
            for (let i = 0; i < this.tasks.length; i++) {
                this.tasks[i].id = i + 1
            }
            this.tasks.push({
                task: ' ',
                id: this.tasks.length + 1,
                status,
            })
        },
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

.fas {
    color: var(--color-black);
}
</style>
