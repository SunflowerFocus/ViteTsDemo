<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import SvgIcon from './components/SvgIcon.vue'
import Tab1 from './components/Tab1.vue'
import Tab2 from './components/Tab2.vue'
import Tab3 from './components/Tab3.vue'
import Total from './components/Total.vue'
import {reactive, ref} from 'vue'

const currentTab = ref<'Tab1' | 'Tab2' | 'Tab3'>('Tab1')

const tabs = {Tab1, Tab2, Tab3}

// const data = reactive

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
