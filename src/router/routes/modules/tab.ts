import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw = {
    path: '/tab',
    name: 'Tab',
    component: () => import('@/views/tab/index.vue'),
    meta: {
        title: 'Tab'
    }
}

export default routes