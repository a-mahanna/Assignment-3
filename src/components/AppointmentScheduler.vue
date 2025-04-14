<template>
  <div class="appointment-scheduler">
    <h3>Appointment Scheduling</h3>
    <form @submit.prevent="scheduleAppointment">
      <div class="mb-3">
        <label>Date</label>
        <input type="date" v-model="appointmentDate" class="form-control" required />
      </div>
      <div class="mb-3">
        <label>Time</label>
        <input type="time" v-model="appointmentTime" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Schedule Appointment</button>
    </form>
    <div v-if="message" class="mt-2 alert alert-success">{{ message }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const appointmentDate = ref('')
const appointmentTime = ref('')
const message = ref('')

const scheduleAppointment = () => {
  message.value = `Appointment scheduled for ${appointmentDate.value} at ${appointmentTime.value}.`
  appointmentDate.value = ''
  appointmentTime.value = ''
}
</script>

<style scoped>
.appointment-scheduler {
  margin-bottom: 2rem;
}
</style>
