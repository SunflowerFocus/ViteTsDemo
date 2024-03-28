import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw = {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
    meta: {
        title: 'index'
    }
}

export default routes