import {createApp} from "vue";
import "./styles.css";
import App from "./App.vue";
import {createRouter, createWebHistory} from "vue-router";
import Tasks from "./components/Tasks.vue";
import Create from "./components/Create.vue";

const router = createRouter({
    routes: [{
        path: "/",
        component: Create
    }, {
        path: "/tasks",
        component: Tasks
    }],
    history: createWebHistory()
})

createApp(App).use(router).mount("#app");
