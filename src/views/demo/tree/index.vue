<script setup lang="ts">
import {ref} from 'vue'
import TreeItem from "@/components/demo/TreeItem.vue";

const treeData = ref({
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'world' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'world' }]
        },
        { name: 'hello' },
        { name: 'world' },
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'world' }]
        }
      ]
    }
  ]
})

</script>

<template>
  <div :style="{textAlign: 'left'}">
    <TreeItem :data="treeData"></TreeItem>
  </div>
</template>

<style scoped>

</style>