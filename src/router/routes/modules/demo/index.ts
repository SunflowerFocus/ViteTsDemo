import {RouteRecordRaw} from "vue-router";

import i18n from '@/locales';
// @ts-ignore
const { t } = i18n.global;

const LAYOUT = () => import('@/layouts/demo/index.vue');

const routes: RouteRecordRaw = {
    path: '/demo',
    name: 'demo',
    component: LAYOUT,
    redirect: '/demo/index',
    meta: {
        title: 'Demo'
    },
    children: [
        {
            path: 'index',
            name: t('routes.demo.index.title'),
            component: () => import('@/views/demo/index/index.vue'),
            meta: {
                title: t('routes.demo.index.title'),
            },
        },
        {
            path: 'language',
            name: t('routes.demo.language.title'),
            component: () => import('@/views/demo/language/index.vue'),
            meta: {
                title: t('routes.demo.language.title'),
            },
        },
        {
            path: 'svg',
            name: t('routes.demo.svg.title'),
            component: () => import('@/views/demo/svg/index.vue'),
            meta: {
                title: t('routes.demo.svg.title'),
            },
        },
        {
            path: 'tree',
            name: t('routes.demo.tree.title'),
            component: () => import('@/views/demo/tree/index.vue'),
            meta: {
                title: t('routes.demo.tree.title'),
            }
        },
        {
            path: 'hello',
            name: t('routes.demo.hello.title'),
            component: () => import('@/views/demo/hello/index.vue'),
            meta: {
                title: t('routes.demo.hello.title'),
            }
        },
        {
            path: 'total',
            name: t('routes.demo.total.title'),
            component: () => import('@/views/demo/total/index.vue'),
            meta: {
                title: t('routes.demo.total.title'),
            }
        },
        {
            path: 'tab',
            name: t('routes.demo.tab.title'),
            component: () => import('@/views/demo/tab/index.vue'),
            meta: {
                title: t('routes.demo.tab.title'),
            }
        },
        {
            path: 'gridSort',
            name: t('routes.demo.gridSort.title'),
            component: () => import('@/views/demo/grid_sort/index.vue'),
            meta: {
                title: t('routes.demo.gridSort.title'),
            }
        },
        {
            path: 'title',
            name: t('routes.demo.title.title'),
            component: () => import('@/views/demo/title/index.vue'),
            meta: {
                title: t('routes.demo.title.title'),
            }
        },
        {
            path: 'about',
            name: t('routes.demo.about.title'),
            component: () => import('@/views/demo/about/index.vue'),
            meta: {
                title: t('routes.demo.about.title'),
            }
        },
        {
            path: 'dashboard',
            name: t('routes.demo.dashboard.title'),
            component: () => import('@/views/demo/dashboard/index.vue'),
            meta: {
                title: t('routes.demo.dashboard.title'),
            }
        }
    ]
}

export default routes