<template>
  <div class="resource-tracker">
    <h3>Resource Tracking</h3>
    <ul>
      <li v-for="(resource, index) in resources" :key="index">
        {{ resource.name }}: {{ resource.status }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const resources = ref([])

onMounted(() => {
  resources.value = [
    { name: 'Health Services', status: 'Available' },
    { name: 'Legal Assistance', status: 'Unavailable' },
    { name: 'Educational Resources', status: 'Updated' }
  ]
})
</script>

<style scoped>
.resource-tracker {
  margin-bottom: 2rem;
}
</style>
