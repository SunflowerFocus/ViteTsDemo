<script setup>

import {capitalize} from "@vue/shared";
import {computed, ref} from "vue";

const props = defineProps({
  data: Array,
  columns: Array,
})

const sortKey = ref('')

const sortOrders = ref(
    props.columns.reduce((value, key) => ((value[key] = 1), value), {})
)

const filteredData = computed(() => {
  const key = sortKey.value
  if (! key) {
    return props.data
  }

  const order = sortOrders.value[key]
  return props.data.slice().sort((a, b) => {
    return (a[key] === b[key] ? 0 : a[key] > b[key] ? 1 : -1) * order
  })
})

function sortBy(key) {
  sortKey.value = key
  sortOrders.value[key] *= -1
}

</script>

<template>
  <table v-if="filteredData.length">
    <thead>
      <tr>
        <th v-for="key in columns" @click="sortBy(key)">
          {{ capitalize(key) }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredData">
        <td v-for="key in columns">
          {{entry[key]}}
        </td>
      </tr>
    </tbody>
  </table>
  <p v-else>No matches found.</p>
</template>
