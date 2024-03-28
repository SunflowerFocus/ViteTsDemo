import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw = {
    path: '/about',
    name: 'AboutPage',
    component: () => import('@/views/about/index.vue'),
    meta: {
        title: '登录'
    }
}

export default routes