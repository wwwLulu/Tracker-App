<template>
    <div @click="saveAndClose" v-if="editMode" class="modal"></div>
    <p
        v-if="!editMode"
        class="task"
        @mouseenter="showIcon"
        @mouseleave="hideIcon"
    >
        {{ listItem.task }}
        <i
            @click="enableEditMode"
            ref="icon"
            class="task__edit fas fa-edit"
        ></i>
    </p>
    <div v-if="editMode" class="task__edit-mode">
        <textarea
            class="task__edit-box"
            v-model="updatedTask"
            autofocus
            ref="task_edit"
        >
        </textarea>
        <button @click="saveAndClose" class="task__save btn">Save</button>
        <button
            @click="closeWithoutSaving"
            class="task__close-without-saving btn"
        >
            Close without saving
        </button>
        <button @click="deleteTask" class="task__delete btn">Delete</button>
    </div>
</template>

<script>
export default {
    props: {
        listItem: Object,
    },
    emits: ['updateTask', 'deleteTask'],
    data() {
        return {
            editMode: false,
            updatedTask: this.listItem.task || ' ',
        }
    },
    methods: {
        showIcon() {
            this.$refs.icon.style.opacity = 0.75
        },
        hideIcon() {
            this.$refs.icon.style.opacity = 0
        },
        enableEditMode() {
            this.editMode = true
        },
        disableEditMode() {
            this.editMode = false
        },
        saveAndClose() {
            this.$emit('updateTask', this.updatedTask, this.listItem.id)
            this.editMode = false
        },
        closeWithoutSaving() {
            this.editMode = false
        },
        deleteTask() {
            this.editMode = false
            this.$emit('deleteTask', this.listItem.id)
        },
    },
}
</script>

<style lang="scss" scoped>
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
    &__edit {
        position: absolute;
        top: 1rem;
        right: 0.5rem;
        opacity: 0;
        &:hover {
            cursor: pointer;
            color: rgba(0, 0, 0, 0.3);
        }
    }
}

.task__edit-mode {
    position: relative;
    z-index: 1100;
}
.task__edit-box {
    z-index: 1110;
    width: 100%;
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
