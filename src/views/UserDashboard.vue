<template>
  <div class="container py-5">
    <UserAvatar :firstName="firstName" :lastName="lastName" :avatarUrl="avatar" />
    <h2 class="mt-4">Welcome {{ fullName }} to your dashboard!</h2>
    <div class="mt-5">
      <AppointmentScheduler />
      <ResourceTracker />
      <RecommendationsWidget />
      <MentorsAssigned />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { auth, db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'
import UserAvatar from '@/components/UserAvatar.vue'
import AppointmentScheduler from '@/components/AppointmentScheduler.vue'
import ResourceTracker from '@/components/ResourceTracker.vue'
import RecommendationsWidget from '@/components/RecommendationsWidget.vue'
import MentorsAssigned from '@/components/MentorsAssigned.vue'

async function getUserFullData(uid) {
  const userDoc = await getDoc(doc(db, 'users', uid))
  return userDoc.exists() ? userDoc.data() : {}
}

const fullName = ref('')
const firstName = ref('')
const lastName = ref('')
const avatar = ref('')

onMounted(async () => {
  const profile = await getUserFullData(auth.currentUser.uid)
  firstName.value = profile.firstName
  lastName.value = profile.lastName
  avatar.value = profile.avatar
  fullName.value = `${profile.firstName} ${profile.lastName}`
})
</script>
