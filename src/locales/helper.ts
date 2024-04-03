import {set} from "lodash-es";

export function genMessage(langs: Record<string, any>, prefix: string = 'lang'): Record<string, any>{
    const object: Record = {};

    Object.entries(langs).forEach(([key, value]) => {
        let fileName = key
            .replace(`./${prefix}/`, '')
            .replace(`.ts`, '')
            .replace(/^\.\//, '')
            .replace(/\//g, '.');

        set(object, fileName, value.default || {})
    })

    return object;
}