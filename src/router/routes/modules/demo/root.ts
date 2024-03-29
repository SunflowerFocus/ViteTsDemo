
import { PageEnum } from '@/enums/pageEnum.ts';
import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw = {
    path: '/',
    name: 'Root',
    redirect: PageEnum.BASE_HOME,
    meta: {
        title: 'Root',
    },
};

export default routes