<script setup>
import { useRuntimeConfig } from '#app'

const config = useRuntimeConfig()
const apiBaseUrl = config.public.apiBaseUrl
</script>

<template>
  <div>
    <div>API Base URL: {{ apiBaseUrl }}</div>
  </div>
</template>
