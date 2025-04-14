<template>
  <div class="recommendations-widget">
    <h3>Personalised Recommendations</h3>
    <ul>
      <li v-for="(rec, index) in recommendations" :key="index">
        {{ rec }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const recommendations = ref([])

onMounted(() => {
  recommendations.value = [
    'Check out the latest community events.',
    'Explore new legal assistance resources.',
    'Consider joining a wellness workshop.'
  ]
})
</script>

<style scoped>
.recommendations-widget {
  margin-bottom: 2rem;
}
</style>
