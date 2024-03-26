<script lang="ts">
import {computed, defineComponent, PropType, ref} from 'vue'
import {capitalize} from "@vue/shared";
import {string} from "fast-glob/out/utils";

export default defineComponent({
  name: "GridSortSearch",
  methods: {capitalize},

  props: {
    data: {
      type: Array as PropType<{[key: string]: any}[]>,
      required: true
    },
    columns: {
      type: Array as PropType<string[]>,
      required: true
    },
    filterKey: {
      type: String,
      required: true
    }
  },

  setup(props) {

    const sortKey = ref("")
    const sortOrders = ref(props.columns.reduce((value, key) => ((value[key] = 1), value), {} as {[key: string]: any}))


    const filteredData = computed(() => {
      let filterKey = props.filterKey

      if (filterKey) {
        filterKey = filterKey.toLowerCase()

        return props.data.filter((row) => {
          return Object.keys(row).some((key) => {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }

      const key = sortKey.value
      if (! key) {
        return props.data
      }

      return props.data.slice().sort((a, b)=> {
        return (a[key] === b[key] ? 0 : a[key] > b[key] ? 1 : -1) * sortOrders.value[key]
      })
    })

    const sortBy = (key: string) => {
      sortKey.value = key
      sortOrders.value[key] *= -1
    }

    return {
      filteredData,
      sortBy
    }
  },

})
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
        {{ entry[key] }}
      </td>
    </tr>
    </tbody>
  </table>
  <p v-else>No Matches Found</p>
</template>

<style scoped>

</style>