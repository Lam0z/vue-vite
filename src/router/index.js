import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import FilmPage from "../pages/FilmPage.vue";
import MyFilms from "../pages/MyFilms.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/film/:id",
            name: "film",
            component: FilmPage,
        },
        {
            path: "/my-films",
            name: "my-films",
            component: MyFilms,
        },
    ],
});

export default router;
