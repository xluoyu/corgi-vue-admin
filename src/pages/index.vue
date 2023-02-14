<script setup lang="ts">
const name = $ref('')

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}
</script>

<template>
  <div>
    <el-input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      type="text"
      autocomplete="false"
      class="w-80"
      @keydown.enter="go"
    />

    <div>
      <el-button
        type="primary"
        :disabled="!name"
        class="mt-4"
        @click="go"
      >
        Go
      </el-button>
    </div>
  </div>
</template>
