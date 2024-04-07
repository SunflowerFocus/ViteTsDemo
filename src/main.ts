import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import 'virtual:svg-icons-register'

import i18n from '@/locales';

import router from './router'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';


createApp(App).use(i18n).use(router).use(Antd).mount('#app')
