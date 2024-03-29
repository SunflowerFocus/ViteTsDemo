import antdLocale from 'ant-design-vue/es/locale/en_US';
import { set } from 'lodash-es';

const prefix = 'zh-CN';
const modules = import.meta.glob('./zh-CN/**/*.ts',{ eager: true });

const obj: Recordable = {};

Object.entries(modules).forEach(([key, _]) => {

  let fileName = key.replace(`./${prefix}/`, '').replace(/^\.\//, '');
  const lastIndex = fileName.lastIndexOf('.');
  fileName = fileName.substring(0, lastIndex);
  const keyList = fileName.split('/');
  const moduleName = keyList.shift();
  const objKey = keyList.join('.');
  console.log(moduleName, objKey)

  if (moduleName) {
    if (objKey) {
      set(obj, moduleName, obj[moduleName] || {});
      set(obj[moduleName], objKey, langFileModule);
    } else {
      set(obj, moduleName, langFileModule || {});
    }
  }
})

// Object.keys(modules).forEach((_: string) => {
//
// })

export default {
  ...antdLocale,
  'menu.list': '列表',
  'menu.message': '信息',
}