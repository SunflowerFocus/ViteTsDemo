import { App, Plugin } from 'vue'

export const install = (component: any) => {
    component.install = (app: App) => {
        app.component(component.name, component);
    };

    return component as any & Plugin;
}