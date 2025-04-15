<template>
  <div class="rating-component card p-4 my-4">
    <h3 class="card-title mb-3">Rate this Service</h3>
    <form @submit.prevent="submitRating">
      <div class="mb-3">
        <label for="rating" class="form-label">Rating (1–5):</label>
        <input id="rating" type="number" class="form-control" v-model.number="newRating" min="1" max="5" required />
      </div>
      <button type="submit" class="btn btn-primary">Submit Rating</button>
    </form>
    <div v-if="ratings.length" class="mt-4">
      <h5 class="mb-2">Average Rating: {{ averageRating.toFixed(2) }}</h5>
      <ul class="list-group">
        <li v-for="(rate, index) in ratings" :key="index"
          class="list-group-item d-flex justify-content-between align-items-center">
          Rating: {{ rate }}
          <span class="badge bg-secondary rounded-pill">{{ rate }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const ratings = ref([])
const newRating = ref(5)

const submitRating = () => {
  if (newRating.value >= 1 && newRating.value <= 5) {
    ratings.value.push(newRating.value)
    newRating.value = 5
  } else {
    alert("Please enter a rating between 1 and 5.")
  }
}

const averageRating = computed(() => {
  return ratings.value.length === 0
    ? 0
    : ratings.value.reduce((sum, val) => sum + val, 0) / ratings.value.length
})
</script>

<style scoped>
.rating-component {
  /* Additional custom styles can go here if needed */
}
</style>
