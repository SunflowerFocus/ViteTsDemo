<script setup lang="ts">
import {ref} from "vue";
import Tab1 from "@/components/demo/Tab1.vue";
import Tab2 from "@/components/demo/Tab2.vue";
import Tab3 from "@/components/demo/Tab3.vue";

const currentTab = ref<'Tab1' | 'Tab2' | 'Tab3'>('Tab1')
const tabs = {Tab1, Tab2, Tab3}
</script>

<template>
  <div>
    <button v-for="(_, tab) in tabs" @click="currentTab = tab">
      {{ tab }}
    </button>
    <component :is="tabs[currentTab as 'Tab1' | 'Tab2' | 'Tab3']" class="tab"></component>
  </div>
</template>

<style scoped>

</style>