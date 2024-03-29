<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

// 切换语言
const changeLocale = (lang: string) => {
  locale.value = lang;
};
</script>

<template>
  <div>
    <button @click="changeLocale('zh-CN')">中文</button>
    <button @click="changeLocale('en-US')">英文</button>
  </div>
  <div>{{ $t('menu.list') }}</div>
  <div>{{ $t('menu.message') }}</div>

</template>

<style scoped>

</style>