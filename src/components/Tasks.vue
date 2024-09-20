<template>
    <div>
        <h1>Filter tasks</h1>
        <input type="range" min="0" max="5" v-model="appliedFilter" :class="getClass(appliedFilter)"
               class="filter-bar"/>
        <h2 v-if="filteredTasks.length==0" class="five">No tasks found for this priority</h2>
        <div v-else class="filter-container">
            <div v-for="task in filteredTasks" :id="task.id" :class="{done: task.done}" class="task">
                <h3 :class="getClass(task.priority)">{{ task.name }}</h3>
                <p>{{ task.description }}</p>
                <button @click="task.done = !task.done" class="general-input mark-button">Mark as {{task.done ? "undone" : "done"}}</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {tasks} from "../App.vue";
import {computed, Ref, ref} from "vue";

const getClass = (priority: number): string => {
    if (priority == 0) return "";
    if (priority == 1) return "one";
    if (priority == 2) return "two";
    if (priority == 3) return "three";
    if (priority == 4) return "four";
    return "five";
}

const appliedFilter: Ref<number> = ref(0);
const filteredTasks = computed(() => {
    if (appliedFilter.value == 0) return tasks.value;

    return tasks.value.filter(task => task.priority == appliedFilter.value);
})

</script>

<style scoped>
.one {
    color: lime;
    accent-color: lime;
}

.two {
    color: green;
    accent-color: green;
}

.three {
    color: yellow;
    accent-color: yellow;
}

.four {
    color: orange;
    accent-color: orange;
}

.five {
    color: red;
    accent-color: red;
}

.filter-bar {
    width: 15rem;
}

.done {
    opacity: 0.1;
}

.filter-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    height: 20rem;
    overflow: auto;
    gap: 1rem;
}

.task {
    border: 1px solid transparent;
    border-radius: 8px;
    background-color: #0f0f0f98;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    flex-shrink: 0;
    height: 80%;
    width: 15rem;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding: 1rem;
    overflow: hidden;
}

.mark-button {
    margin-top: auto;
}

</style>
