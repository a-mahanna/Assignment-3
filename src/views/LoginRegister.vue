<template>
  <div class="container py-5">
    <h2>{{ mode === 'login' ? 'Login' : 'Register' }}</h2>
    <form @submit.prevent="handleAuth" class="mb-4">
      <div v-if="mode === 'register'" class="mb-3">
        <input v-model="firstName" type="text" class="form-control" placeholder="First Name" required
          pattern="^[A-Za-z\s-]+$" title="Only letters, spaces, and hyphens allowed" />
      </div>
      <div v-if="mode === 'register'" class="mb-3">
        <input v-model="lastName" type="text" class="form-control" placeholder="Last Name" required
          pattern="^[A-Za-z\s-]+$" title="Only letters, spaces, and hyphens allowed" />
      </div>
      <div class="mb-3">
        <label>Email</label>
        <input v-model="email" type="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label>Password</label>
        <input v-model="password" type="password" class="form-control" required />
      </div>
      <div v-if="mode === 'register'" class="mb-3">
        <label>Confirm Password</label>
        <input v-model="confirmPassword" type="password" class="form-control" required />
      </div>
      <button class="btn btn-primary" type="submit">
        {{ mode === 'login' ? 'Login' : 'Register' }}
      </button>
    </form>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <button class="btn btn-link" @click="toggleMode">
      Switch to {{ mode === 'login' ? 'Register' : 'Login' }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { auth, db } from '@/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { getUserProfile } from '@/utils/getUserProfile'

const router = useRouter()
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const mode = ref('login')
const firstName = ref('')
const lastName = ref('')
const isLoggedIn = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user
  })
})

const toggleMode = () => {
  mode.value = mode.value === 'login' ? 'register' : 'login'
}

const logout = async () => {
  await signOut(auth)
  isLoggedIn.value = false
  router.push('/auth')
}

const handleAuth = async () => {
  error.value = ''

  // Validate matching passwords when registering
  if (mode.value === 'register' && password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match.'
    return
  }

  // Validate first and last name using regex
  const nameRegex = /^[A-Za-z\s-]+$/
  if (mode.value === 'register' && (!nameRegex.test(firstName.value) || !nameRegex.test(lastName.value))) {
    error.value = 'First and Last name can only contain letters, spaces, and hyphens.'
    return
  }

  try {
    let userCred

    if (mode.value === 'register') {
      userCred = await createUserWithEmailAndPassword(auth, email.value, password.value)
      await setDoc(doc(db, 'users', userCred.user.uid), {
        email: email.value,
        role: 'user',
        firstName: firstName.value,
        lastName: lastName.value,
        avatar: ''
      })
    } else {
      userCred = await signInWithEmailAndPassword(auth, email.value, password.value)
    }

    const user = userCred.user
    const profile = await getUserProfile(user.uid)
    const role = typeof profile === 'string' ? profile : profile?.role

    if (!role) {
      error.value = 'User profile not found. Please try again.'
      return
    }

    let redirectPath = '/user-dashboard'
    if (role === 'admin') {
      redirectPath = '/volunteer-dashboard'
    }

    await nextTick()
    setTimeout(async () => {
      await router.replace(redirectPath)
    }, 100)

    email.value = ''
    password.value = ''
    confirmPassword.value = ''
    firstName.value = ''
    lastName.value = ''

  } catch (err) {
    error.value = err.message
  }
}
</script>
