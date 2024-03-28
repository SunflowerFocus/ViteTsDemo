import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw = {
    path: '/total',
    name: 'TotalPage',
    component: () => import('@/views/total/index.vue'),
    meta: {
        title: 'TotalPage'
    }
}

export default routes