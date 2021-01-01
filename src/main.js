import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

// Vuex These are our global functions
// Currently not in use!
const store = createStore({
    state() {
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
            ],
        }
    },
    actions: {
        updateTask(context) {
            context.commit('updateTask')
        },
        deleteTask(context) {
            context.commit('deleteTask')
        },
        addTask(context) {
            context.commit('addTask')
        },
    },
    mutations: {
        updateTask(state, { updatedTask, taskId }) {
            state.tasks.forEach(entry => {
                if (entry.id == taskId) {
                    entry.task = updatedTask
                }
            })
        },
        deleteTask(state, { taskId }) {
            state.tasks = state.tasks.filter(entry => entry.id != taskId)
            console.log(state.tasks)
        },
        addTask(state, { status }) {
            //When you delete then add a task, the ID's might get messed up
            // So reassigning is good here
            for (let i = 0; i < state.tasks.length; i++) {
                state.tasks[i].id = i + 1
            }
            state.tasks.push({
                task: ' ',
                id: state.tasks.length + 1,
                status,
            })
        },
    },
})

const app = createApp(App)

app.use(store)

app.mount('#app')
