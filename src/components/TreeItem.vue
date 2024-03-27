<script lang="ts">
import {computed, defineComponent, PropType, ref} from 'vue'

export default defineComponent({
  name: "TreeItem",
  props: {
    data: {
      type: Object as PropType<{ [key: string]: any }>,
      required: true
    }
  },
  setup(props) {
    const isOpen = ref(false)

    const isFolder = computed(() => {
      return props.data.children && props.data.children.length
    })

    const toggle = () => {
      isOpen.value = !isOpen.value
    }

    const changeType = () => {
      if (! isFolder.value) {
        props.data.children = []
        props.data.children.push({ name: 'new stuff' })
        isOpen.value = true
      }
    }

    function addChild() {
      props.data.children.push({ name: 'new stuff' })
    }

    return {
      isOpen,
      isFolder,
      toggle,
      changeType,
      addChild
    }
  }
})
</script>

<template>
<li>
  <span @dblclick="changeType">{{ data.name }}</span>
  <span v-if="isFolder" @click="toggle" class="item">{{ isOpen ? '➖' : '➕' }}</span>
  <ul v-show="isOpen" v-if="isFolder" :style="{margin: 0}">
    <TreeItem v-for="data in data.children" :data="data"></TreeItem>
    <li @click="addChild">➕</li>
  </ul>
</li>
</template>

<style scoped>
.item {
  cursor: pointer;
  line-height: 1.5;
}
</style>