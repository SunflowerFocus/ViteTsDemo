import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'virtual:svg-icons-register'

import i18n from '@/locales';

import router from './router'


createApp(App).use(i18n).use(router).mount('#app')
