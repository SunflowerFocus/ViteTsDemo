import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw = {
    path: '/demo',
    name: 'Demo',
    redirect: '/demo/index',
    meta: {
        title: 'Demo'
    },
    children: [
        {
            path: 'index',
            name: 'index',
            component: () => import('@/views/index/index.vue'),
            meta: {
                title: 'Index'
            },
        },
        {
            path: 'language',
            name: 'Language',
            component: () => import('@/views/demo/language/index.vue'),
            meta: {
                title: 'Language'
            },
        }
    ]
}

export default routes