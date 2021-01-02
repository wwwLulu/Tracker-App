<template>
    <div @click="closeWithoutSaving" v-if="editMode" class="modal"></div>
    <p
        ref="taskText"
        v-if="!editMode"
        class="task"
        @mouseenter="showIcon"
        @mouseleave="hideIcon"
    >
        {{ listItem.task }}
        <i
            ref="iconTrash"
            @click="deleteTask"
            class="task__trash fas fa-trash"
        ></i>
        <i
            @click="enableEditMode"
            ref="iconEdit"
            class="task__edit fas fa-edit"
        ></i>
    </p>
    <div v-if="editMode" class="task__edit-mode">
        <textarea
            class="task__edit-box"
            placeholder="Enter task"
            v-model="updatedTask"
            autofocus
            ref="task_edit"
            @keyup.enter="saveAndClose"
        >
        </textarea>
        <button @click="saveAndClose" class="task__save btn">Save</button>
        <button
            @click="closeWithoutSaving"
            class="task__close-without-saving btn"
        >
            Close
        </button>
        <select
            class="btn"
            @change="updateStatus"
            name="mode"
            ref="status"
            v-model="currentStatus"
        >
            <optgroup :label="listItem.status">listItem.status</optgroup>
            <option value="to-do">to-do</option>
            <option value="doing">doing</option>
            <option value="completed">completed</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        listItem: Object,
    },
    data() {
        return {
            editMode: this.listItem.task == ' ' ? true : false,
            updatedTask: this.listItem.task || ' ',
            currentStatus: this.listItem.status,
        }
    },
    methods: {
        showIcon() {
            this.$refs.iconTrash.style.opacity = 0.7
            this.$refs.iconEdit.style.opacity = 0.7
            this.$refs.taskText.style.paddingLeft = '2.2rem'
            this.$refs.taskText.style.paddingRight = '2.2rem'
        },
        hideIcon() {
            this.$refs.iconTrash.style.opacity = 0
            this.$refs.iconEdit.style.opacity = 0
            this.$refs.taskText.style.paddingLeft = '1rem'
            this.$refs.taskText.style.paddingRight = '1rem'
        },
        enableEditMode() {
            this.editMode = true
        },
        disableEditMode() {
            this.editMode = false
        },
        saveAndClose() {
            this.$store.commit('updateTask', {
                updatedTask: this.updatedTask,
                taskId: this.listItem.id,
            })
            this.editMode = false
        },
        closeWithoutSaving() {
            this.editMode = false
        },
        deleteTask() {
            this.editMode = false
            this.$store.commit('deleteTask', { taskId: this.listItem.id })
        },
        updateStatus() {
            this.$store.commit('updateStatus', {
                taskId: this.listItem.id,
                status: this.$refs.status.value,
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.btn {
    margin: 0.5rem 0.5rem 0.5rem 0;
}
.task {
    min-height: 4rem;
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
    &__edit,
    &__trash {
        height: 100%;
        font-size: 1.2em;
        position: absolute;
        top: 1rem;
        opacity: 0;
        &:hover {
            cursor: pointer;
            color: rgba(0, 0, 0, 0.3);
        }
    }
    &__edit {
        right: 0.5rem;
    }
    &__trash {
        left: 0.5rem;
    }
    &__status-label {
        color: white;
        font-size: 1rem;
        display: inline-block;
    }
}

.task__edit-mode {
    position: relative;
    z-index: 1100;
}
.task__edit-box {
    z-index: 1110;
    width: 100%;
    height: 10rem;
    margin: 1rem 0;
    background: white;
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: 1.4rem;
    font-weight: 300;
    border-left: 0.1rem rgba(0, 0, 0, 0.3) solid;
}

.modal {
    z-index: 1000;
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
