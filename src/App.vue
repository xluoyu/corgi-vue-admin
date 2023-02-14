<template>
  <main class="font-sans py-10 text-center ">
    <el-icon class="absolute cursor-pointer top-4 right-4 text-xl dark:text-light-50" @click="toggleDark()">
      <Sunny v-if="isDark" />
      <Moon v-else />
    </el-icon>

    <router-view />
    <Footer />
  </main>
</template>

<script lang="ts" setup>
import { Moon, Sunny } from '@element-plus/icons-vue'
import { isDark, toggleDark } from './composables/dark'
</script>
