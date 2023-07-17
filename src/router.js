import { createRouter, createWebHistory } from "vue-router";

// Importiamo i componenti che definiscono le varie pagine
import AppHome from "./pages/AppHome";
import AppProjects from "./pages/AppProjects";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/projects",
      name: "projects",
      component: AppProjects,
    },
  ],
});

export { router };