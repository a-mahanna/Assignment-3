<template>
  <div class="container py-5">
    <h1>Volunteer Dashboard</h1>
    <p>Welcome, {{ fullname }}! Here you can manage users, content, and reports.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { auth } from '@/firebase'
import { getUserProfile } from '@/utils/getUserProfile'

const fullName = ref('')

onMounted(async () => {
  const user = auth.currentUser
  if (user) {
    const profile = await getUserProfile(user.uid)
    fullName.value = `${profile.firstName} ${profile.lastName}`
  }
})
</script>
