import {reactive, VueElement} from "vue";
import {ItemType} from "ant-design-vue";

function getItem(
    label: VueElement | string,
    key: string | number,
    icon?: any,
    children?: ItemType[],
    type?: 'group',
): ItemType {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as ItemType;
}

const items: ItemType[] = reactive([]);

for (let i = 1; i <= 22; i++) {
    items.push(getItem('菜单' + i, i, null))
}

export default items