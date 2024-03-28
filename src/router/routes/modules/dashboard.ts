import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw = {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/index.vue'),
    meta: {
        title: '登录'
    }
}

export default routes