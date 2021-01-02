import { createStore } from 'vuex'

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
                    task: 'Working on App',
                    status: 'doing',
                },
                {
                    id: 4,
                    task: 'Walk the dog',
                    status: 'completed',
                },
            ],
        }
    },

    getters: {
        todos: state => state.tasks.filter(task => task.status === 'to-do'),

        currentTodo: state => state.tasks.find(task => task.status === 'doing'),

        completedTodos: state =>
            state.tasks.filter(task => task.status === 'completed'),
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
        },
        addTask(state, { status }) {
            // When you delete then add a task, the ID's might get messed up
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
    actions: {
        updateTask(context, payload) {
            context.commit('updateTask', payload)
        },
        deleteTask(context, payload) {
            context.commit('deleteTask', payload)
        },
        addTask(context, payload) {
            context.commit('addTask', payload)
        },
    },
})

export default store
