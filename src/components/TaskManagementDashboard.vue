<template>
  <div>
    <h3>Task Management Dashboard</h3>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task.description }} — {{ task.status }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const tasks = ref([])
onMounted(() => {
  tasks.value = [
    { description: 'Follow up with Client A', status: 'Pending' },
    { description: 'Prepare weekly report', status: 'Completed' }
  ]
})
</script>
