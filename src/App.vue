<script lang="ts">
import {ref, Ref} from "vue";

export const tasks: Ref<Task[]> = ref([])

export interface Task {
    id: number,
    name: string,
    description: string,
    priority: number,
    done: boolean
}
</script>

<template>
    <div class="links">
        <RouterLink to="/" class="general-input">Add a new task</RouterLink>
        <RouterLink to="/tasks" class="general-input">View all tasks</RouterLink>
    </div>
    <div class="container">
        <RouterView/>
    </div>
</template>

<style scoped>
.links {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
</style>
