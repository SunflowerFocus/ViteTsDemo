<script setup lang="ts">
import {ref} from "vue";
import GridSortSearch from "@/components/demo/GridSortSearch.vue";

const gridData = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 7000 },
  { name: 'Jet Li', power: 8000 }
]

const gridColumns = [
  'name', 'power'
];

const searchQuery = ref('')

</script>

<template>
  <div>
    Search <input name="query" v-model="searchQuery">
    <GridSortSearch :data="gridData" :columns="gridColumns" :filter-key="searchQuery"></GridSortSearch>
  </div>
</template>

<style scoped>

</style>