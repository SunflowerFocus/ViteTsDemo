import {RouteRecordRaw} from "vue-router";

const modules = import.meta.glob('./modules/**/*.ts', {eager: true});

const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
    routeModuleList.push(...[modules[key].default || {}]);
});

export default routeModuleList
