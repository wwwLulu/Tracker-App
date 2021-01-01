import { createApp } from 'vue'
// import { createStore } from 'vuex'

import App from './App.vue'

//Vuex These are our global functions
// const store = createStore({
//     state() {
//         return {
//             tasks: [
//                 {
//                     id: 1,
//                     task: 'Wash the dishes',
//                     status: 'to-do',
//                 },
//                 {
//                     id: 2,
//                     task: 'Code a website',
//                     status: 'to-do',
//                 },
//                 {
//                     id: 3,
//                     task: 'Walk the dog',
//                     status: 'completed',
//                 },
//             ],
//         }
//     },
//     actions: {
//         updateTask(context) {
//             context.commit('updateTask')
//         },
//         deleteTask(context) {
//             context.commit('deleteTask')
//         },
//         addTask(context) {
//             context.commit('addTask')
//         },
//     },
//     mutations: {
//         updateTask(updatedTask, taskId) {
//             this.$state.tasks.forEach(entry => {
//                 if (entry.id == taskId) {
//                     entry.task = updatedTask
//                 }
//             })
//         },
//         deleteTask(taskId) {
//             this.$state.tasks = this.$state.tasks.filter(
//                 entry => entry.id != taskId
//             )
//             console.log(this.$state.tasks)
//         },
//         addTask(status) {
//             //When you delete then add a task, the ID's might get messed up
//             // So reassigning is good here
//             for (let i = 0; i < this.$state.tasks.length; i++) {
//                 this.$state.tasks[i].id = i + 1
//             }
//             this.$state.tasks.push({
//                 task: ' ',
//                 id: this.$state.tasks.length + 1,
//                 status,
//             })
//         },
//     },
// })

// const app = createApp(App)

// app.use(store)

createApp(App).mount('#app')
