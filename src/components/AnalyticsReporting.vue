<template>
  <div>
    <h3>Analytics and Reporting</h3>
    <p>Total Tasks: {{ analytics.totalTasks }}</p>
    <p>Completed Tasks: {{ analytics.completedTasks }}</p>
    <p>Pending Tasks: {{ analytics.pendingTasks }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const analytics = ref({
  totalTasks: 0,
  completedTasks: 0,
  pendingTasks: 0
})
onMounted(() => {
  analytics.value = {
    totalTasks: 10,
    completedTasks: 6,
    pendingTasks: 4
  }
})
</script>
