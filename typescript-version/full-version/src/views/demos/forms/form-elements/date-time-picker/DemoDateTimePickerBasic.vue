<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>

