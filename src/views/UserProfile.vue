<template>
  <div class="container py-5">
    <h2>My Profile</h2>
    <form @submit.prevent="saveProfile" class="mt-4">
      <div class="mb-3">
        <label>First Name</label>
        <input v-model="firstName" type="text" class="form-control" required />
      </div>
      <div class="mb-3">
        <label>Last Name</label>
        <input v-model="lastName" type="text" class="form-control" required />
      </div>
      <div class="mb-3">
        <label>Avatar URL (optional)</label>
        <input v-model="avatar" type="url" class="form-control" />
      </div>
      <button class="btn btn-primary">Save Changes</button>
    </form>
    <div v-if="success" class="alert alert-success mt-3">Profile updated!</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { auth, db } from '@/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

const firstName = ref('')
const lastName = ref('')
const avatar = ref('')
const success = ref(false)

const fetchProfile = async () => {
  const user = auth.currentUser
  const snap = await getDoc(doc(db, 'users', user.uid))
  if (snap.exists()) {
    const data = snap.data()
    firstName.value = data.firstName || ''
    lastName.value = data.lastName || ''
    avatar.value = data.avatar || ''
  }
}

const saveProfile = async () => {
  const user = auth.currentUser
  await updateDoc(doc(db, 'users', user.uid), {
    firstName: firstName.value,
    lastName: lastName.value,
    avatar: avatar.value
  })
  success.value = true
}

onMounted(fetchProfile)
</script>
