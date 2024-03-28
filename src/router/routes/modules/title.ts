import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw = {
    path: '/title',
    name: 'TitlePage',
    component: () => import('@/views/title/index.vue'),
    meta: {
        title: 'TitlePage'
    }
}

export default routes