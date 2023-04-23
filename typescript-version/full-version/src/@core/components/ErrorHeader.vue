<script setup lang="ts">
interface Props {
  errorTitle: string
  errorDescription: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="text-center">
    <!-- 👉 Title and subtitle -->
    <h4 class="text-h4 font-weight-medium mb-3">
      {{ props.errorTitle }}
    </h4>
    <p>{{ props.errorDescription }}</p>
  </div>
</template>
