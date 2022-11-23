import scanner from "../components/scanner.vue";
import checkList from "../components/CheckList.vue";
import login from "../components/Login.vue";

import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

const guardAuthenticated = (to, from, next) => {
    let isAuthenticated = false
    // Check if auth token is present
    if (sessionStorage.getItem("user")) {
        isAuthenticated = true
    }
    // If ok navigate to requested page, redirect to login if not
    isAuthenticated ? next() : next({path: '/login', query: {requested: to.params.msaid}})
}

const routes = [
    {
        path: "/",
        name: "Scanner",
        component: scanner
    },
    {
        path: "/login",
        name: "Login",
        component: login
    },
    {
        path: "/check/:msaid",
        name: "Check",
        beforeEnter: guardAuthenticated,
        component: checkList
    },
    {
        path: "/:catchall(.*)",
        redirect: {name: 'Scanner'}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router