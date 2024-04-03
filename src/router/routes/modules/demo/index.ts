import {RouteRecordRaw} from "vue-router";

import i18n from '@/locales';
const { t } = i18n.global;

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
                title: t('routes.demo.language.index'),
            },
        },
        {
            path: 'language',
            name: 'Language',
            component: () => import('@/views/demo/language/index.vue'),
            meta: {
                title: t('routes.demo.language.title'),
            },
        }
    ]
}

export default routes