<template>
  <div>
    <h3>Volunteer Scheduling</h3>
    <form @submit.prevent="schedule">
      <div class="mb-3">
        <label>Client/User ID</label>
        <input type="text" v-model="userId" class="form-control" required />
      </div>
      <div class="mb-3">
        <label>Volunteer Name</label>
        <input type="text" v-model="volunteerName" class="form-control" required />
      </div>
      <div class="mb-3">
        <label>Date</label>
        <input type="date" v-model="date" class="form-control" required />
      </div>
      <div class="mb-3">
        <label>Time</label>
        <input type="time" v-model="time" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Schedule</button>
    </form>
    <div v-if="message" class="mt-2 alert alert-success">{{ message }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const userId = ref('')
const volunteerName = ref('')
const date = ref('')
const time = ref('')
const message = ref('')
const schedule = () => {
  message.value = `Volunteer ${volunteerName.value} scheduled by client ${userId.value} for ${date.value} at ${time.value}.`
  userId.value = ''
  volunteerName.value = ''
  date.value = ''
  time.value = ''
}
</script>
