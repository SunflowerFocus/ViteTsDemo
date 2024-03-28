import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw = {
    path: '/tree',
    name: 'TreePage',
    component: () => import('@/views/tree/index.vue'),
    meta: {
        title: 'TreePage'
    }
}

export default routes