<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import SvgIcon from './components/SvgIcon.vue'
import Tab1 from './components/Tab1.vue'
import Tab2 from './components/Tab2.vue'
import Tab3 from './components/Tab3.vue'
import Total from './components/Total.vue'
import GridSortSearch from './components/GridSortSearch.vue'
import {ref} from 'vue'

const currentTab = ref<'Tab1' | 'Tab2' | 'Tab3'>('Tab1')

const tabs = {Tab1, Tab2, Tab3}

// const data = reactive

const title = '页面加载于 ' + new Date().toLocaleString()

const gridData = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 7000 },
  { name: 'Jet Li', power: 8000 }
]

const gridColumns = [
  'name', 'power'
];

const searchQuery = ref('Lee')

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div>
    <SvgIcon name="403"></SvgIcon>
    <SvgIcon name="404"></SvgIcon>
    <SvgIcon name="500"></SvgIcon>
    <SvgIcon name="dir-403"></SvgIcon>
    <SvgIcon name="dir-404"></SvgIcon>
    <SvgIcon name="dir-500"></SvgIcon>
  </div>

  <div>
    <button v-for="(_, tab) in tabs" @click="currentTab = tab">
      {{ tab }}
    </button>
    <component :is="tabs[currentTab as 'Tab1' | 'Tab2' | 'Tab3']" class="tab"></component>
  </div>

  <div>
    <Total :count = 10>这时一个计数器</Total>
  </div>

  <div>
    <span :title="title"  :class="{ active: true, 'text-danger': true }">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
  </div>

  <div>
    <GridSortSearch :data="gridData" :columns="gridColumns" :filter-key="searchQuery"></GridSortSearch>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
