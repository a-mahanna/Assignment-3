<template>
  <div class="mentors-assigned">
    <h3>Mentors/Volunteers Assigned</h3>
    <ul>
      <li v-for="(mentor, index) in mentors" :key="index">
        {{ mentor.name }} - {{ mentor.field }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const mentors = ref([])

onMounted(() => {
  mentors.value = [
    { name: 'Jane Doe', field: 'Health Consultant' },
    { name: 'John Smith', field: 'Legal Advisor' }
  ]
})
</script>

<style scoped>
.mentors-assigned {
  margin-bottom: 2rem;
}
</style>
