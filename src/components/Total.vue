<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
  props: {
    count: {
      type: Number,
      default: 0,
    }
  },

  setup(props) {
    let total = ref(props.count)

    const increment = () => {
      total.value++
    }

    return { total, increment }
  }
})
</script>

<template>
  <div>
    <div>
      <slot></slot>
    </div>
    <div>
      <button @click="increment">➕</button>
      <span> {{ total }}</span>
      <button @click="total--">➖</button>
    </div>
  </div>
</template>

<style scoped>

</style>