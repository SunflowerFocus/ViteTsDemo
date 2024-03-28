import {createRouter, createWebHistory, Router, RouteRecordRaw} from "vue-router";
import {getToken} from "@/utils/auth";


const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: '登录'
        }
    }
]

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
    strict: true,
})

const isAuthenticated: string|null = getToken()

router.beforeEach((to, _, next) => {
    if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    else next()
})

export default router