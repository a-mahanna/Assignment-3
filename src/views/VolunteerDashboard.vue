<template>
  <div class="container py-5">
    <UserAvatar :firstName="firstName" :lastName="lastName" :avatarUrl="avatar" />
    <h2 class="mt-4">Welcome {{ fullName }} to your dashboard!</h2>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { auth } from '@/firebase'
import { getUserProfile } from '@/utils/getUserProfile'
import UserAvatar from '@/components/UserAvatar.vue'

const fullName = ref('')
const firstName = ref('')
const lastName = ref('')
const avatar = ref('')

onMounted(async () => {
  const profile = await getUserProfile(auth.currentUser.uid)
  firstName.value = profile.firstName
  lastName.value = profile.lastName
  avatar.value = profile.avatar
})
</script>
