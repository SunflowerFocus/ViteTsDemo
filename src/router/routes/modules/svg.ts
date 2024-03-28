import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw = {
    path: '/svg',
    name: 'SVG',
    component: () => import('@/views/svg/index.vue'),
    meta: {
        title: 'TreePage'
    }
}

export default routes