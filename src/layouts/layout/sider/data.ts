import {h, reactive, VueElement} from "vue";
import {ItemType} from "ant-design-vue";
import {AppstoreOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons-vue";

function getItem(
    label: VueElement | string,
    key: string,
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

const items: ItemType[] = reactive([
    getItem('Navigation One', 'sub1', () => h(MailOutlined), [
        getItem('Option 1', '1'),
        getItem('Option 2', '2'),
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
    ]),
    getItem('Navigation Two', 'sub2', () => h(AppstoreOutlined), [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', null, [
            getItem('Option 7', '7'),
            getItem('Option 8', '8'),
            getItem('Option 13', '13', null, [
                getItem('Option 14', '14'),
                getItem('Option 15', '15'),
                getItem('Option 16', '16', null, [
                    getItem('Option 17', '17'),
                    getItem('Option 18', '18'),
                ])
            ])
        ]),
    ]),
    getItem('Navigation Three', 'sub4', () => h(SettingOutlined), [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
]);

export default items