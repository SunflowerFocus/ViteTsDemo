<script setup lang="ts">
const title = '页面加载于 ' + new Date().toLocaleString()
</script>

<template>
  <div>
    <span :title="title" :class="{ active: true, 'text-danger': true }">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
  </div>
</template>

<style scoped>

</style>