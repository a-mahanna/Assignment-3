<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HRouter from '../src/components/HRouter.vue'
</script>

<template>
  <header>
    <HRouter />
  </header>

  <RouterView />
</template>

<style scoped></style>
