import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw = {
    path: '/gridSort',
    name: 'GridSortPage',
    component: () => import('@/views/gridSort/index.vue'),
    meta: {
        title: '登录'
    }
}

export default routes