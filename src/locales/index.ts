import { createI18n } from 'vue-i18n'

import zhCN from '@/locales/lang/zh_CN'
import enUS from '@/locales/lang/en'

const i18n = createI18n({
    locale: 'zh-CN',
    legacy: false, // 设置为 false，启用 composition API 模式
    messages: {
        'zh-CN': zhCN,
        'en-US': enUS,
    }
})

export default i18n
