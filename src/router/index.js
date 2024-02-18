import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../pages/TheHome.vue";
import TheFilm from "../pages/TheFilm.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: TheHome,
        },
        {
            path: "/film/:id",
            name: "film",
            component: TheFilm,
        },
    ],
});

export default router;
