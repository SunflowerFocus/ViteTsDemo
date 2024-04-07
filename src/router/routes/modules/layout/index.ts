import {RouteRecordRaw} from "vue-router";

const LAYOUT = () => import('@/layouts/layout/index.vue');

const routes: RouteRecordRaw = {
    path: '/layout',
    name: 'layout',
    component: LAYOUT,
    redirect: '/layout/index',
    meta: {
        title: 'layout'
    },
    children: [
        {
            path: 'index',
            name: 'index',
            component: () => import('@/views/layout/index/index.vue'),
            meta: {
                title: 'layout',
            },
        }
    ]
}

export default routes