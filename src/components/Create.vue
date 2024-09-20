<template>
    <h1>Create a new task</h1>
    <div class="task-grid">
        <input v-model="taskName" placeholder="Name" class="input-name general-input"/>
        <input v-model="taskPriority" type="range" min="1" max="5" :class="getClass(taskPriority)"/>
        <textarea v-model="taskDescription" placeholder="Description" class="input-desc general-input"/>
        <button @click="createTask" class="general-input submit-button">Create Task</button>
    </div>

    <h3 v-if="!isValid" class="invalid">Input is not valid</h3>
    <h3 v-else-if="isCreated" class="valid">Task created successfully</h3>

</template>

<script setup lang="ts">
import {ref} from "vue";
import {tasks} from "../App.vue"

const isValid = ref(true);
const taskName = ref("");
const taskDescription = ref("");
const taskPriority = ref(1);
const isCreated = ref(false);

let id = 0;

const createTask = (): void => {
    isCreated.value = false;
    if (taskName.value.length === 0) {
        isValid.value = false;
        return;
    }
    isValid.value = true;
    isCreated.value = true;
    tasks.value.push(
        {
            id: id++,
            name: taskName.value,
            description: taskDescription.value,
            priority: taskPriority.value,
            done: false
        })
}

const getClass = (priority: number): string => {
    if (priority == 1) return "one";
    if (priority == 2) return "two";
    if (priority == 3) return "three";
    if (priority == 4) return "four";
    return "five";
}

</script>

<style scoped>
.one {
    accent-color: lime;
}

.two {
    accent-color: green;
}

.three {
    accent-color: yellow;
}

.four {
    accent-color: orange;
}

.five {
    accent-color: red;
}

.task-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(100px, auto);
    gap: 0.25rem;
    align-items: center;
    margin-bottom: 1rem;
    margin-left: 4rem;
    margin-right: 4rem;
}

.input-desc {
    grid-column: 1 / span 2;
    height: 5rem;
}

.input-name {
    height: 3rem;
    width: 20rem;
}

.submit-button {
    grid-column: 1 / span 2;
}

.invalid {
    color: red;
}

.valid {
    color: lime;
}

</style>
