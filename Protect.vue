<script setup>
import { defineProps, onMounted } from 'vue'
import { useAuthStore } from './stores/auth'

const auth = useAuthStore()

const emit = defineEmits(['verified'])

const props = defineProps({
  class: {
    type: [String, Object],
    default: null
  }
})

onMounted(async () => {
  const resultVerify = await auth.toVerify()

  emit('verified', resultVerify)
})
</script>

<template>
  <div :class="props.class || ''">
    <slot />
  </div>
</template>
