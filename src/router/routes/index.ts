import {RouteRecordRaw} from "vue-router";

const modules: Record<string, any> = import.meta.glob('./modules/**/*.ts', {eager: true});
console.log(modules);

const routeModuleList: RouteRecordRaw[] = [];

Object.values(modules).forEach(value => {
    routeModuleList.push(...[value.default || {}]);
})

export default routeModuleList
