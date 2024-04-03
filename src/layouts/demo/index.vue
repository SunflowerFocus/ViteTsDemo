<script setup lang="ts">

</script>

<template>
  <div>
    <router-link to="/demo/index">首页</router-link> |
    <router-link to="/demo/language">翻译</router-link> |
    <router-link to="/demo/svg">SVG</router-link> |
    <router-link to="/demo/tree">树</router-link> |
    <router-link to="/demo/hello">Hello</router-link> |
    <router-link to="/demo/total">计数</router-link> |
    <router-link to="/demo/tab">标签页</router-link> |
    <router-link to="/demo/gridSort">表格排序</router-link> |
    <router-link to="/demo/title">鼠标悬停</router-link> |
    <router-link to="/demo/about">关于</router-link> |
    <router-link to="/demo/dashboard">面板</router-link> |
  </div>
  <hr>
  <router-view name="default"></router-view>
</template>

<style scoped>

</style>