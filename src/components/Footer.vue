<script setup lang="ts">
import { GetYiYan } from '@/api'

const content = ref('')

onMounted(async() => {
  GetYiYan().then((res: any) => {
    content.value = res.hitokoto
  })
})
</script>

<template>
  <p class="absolute bottom-0 w-full leading-8 text-dark-50">
    {{ content }}
  </p>
</template>
