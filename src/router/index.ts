import {createRouter, createWebHistory, Router, RouteRecordRaw} from "vue-router";
import {getToken} from "@/utils/auth";
import basicRoutes from './routes';

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: basicRoutes as unknown as RouteRecordRaw[],
    strict: true,
})

// const isAuthenticated: string|null = getToken()

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    // else next()
    next()
})

export default router