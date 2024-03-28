import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw = {
    path: '/hello',
    name: 'hello',
    component: () => import('@/views/hello/index.vue'),
    meta: {
        title: 'hello'
    }
}

export default routes