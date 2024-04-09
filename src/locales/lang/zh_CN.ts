import { genMessage } from '../helper';

const modules = import.meta.glob('./zh-CN/**/*.ts',{ eager: true });

export default {
  ...genMessage(modules, 'zh-CN'),
}