<script setup lang="ts">
import {CSSProperties} from 'vue';

const siderStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#fff',
  minHeight: '100vh',
  height: '100vh',
  overflow: 'auto',
};

import { reactive } from 'vue';

import items from './data'

const state = reactive({
  rootSubmenuKeys: [],
  openKeys: [],
  selectedKeys: [],
});

</script>

<template>
  <a-layout-sider :style="siderStyle">
    <a-menu
        v-model:selectedKeys="state.selectedKeys"
        mode="inline"
        :open-keys="state.openKeys"
        :items="items"
        style="height: 20px;"
    ></a-menu>
  </a-layout-sider>
</template>
