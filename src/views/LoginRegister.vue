<template>
  <div class="container py-5">
    <h2>{{ mode === 'login' ? 'Login' : 'Register' }}</h2>
    <form @submit.prevent="handleAuth" class="mb-4">
      <div class="mb-3">
        <div v-if="mode === 'register'" class="mb-3">
          <input v-model="firstName" type="text" class="form-control" placeholder="First Name" required />
        </div>
        <div v-if="mode === 'register'" class="mb-3">
          <input v-model="lastName" type="text" class="form-control" placeholder="Last Name" required />
        </div>
        <label>Email</label>
        <input v-model="email" type="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label>Password</label>
        <input v-model="password" type="password" class="form-control" required />
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
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
      <span class="navbar-brand">lorem ipsum</span>
      <div class="ms-auto">
        <button class="btn btn-outline-danger" @click="logout">Logout</button>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth, db } from '@/firebase'
import { useRouter } from 'vue-router'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { getUserProfile } from '@/utils/getUserProfile'
import { signOut } from 'firebase/auth'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')
const mode = ref('login')
const firstName = ref('')
const lastName = ref('')

const logout = async () => {
  await signOut(auth)
  router.push('/auth')
}

const toggleMode = () => {
  mode.value = mode.value === 'login' ? 'register' : 'login'
}

const handleAuth = async () => {
  error.value = ''
  try {
    if (mode.value === 'register') {
      const userCred = await createUserWithEmailAndPassword(auth, email.value, password.value)
      await setDoc(doc(db, 'users', userCred.user.uid), {
        email: email.value,
        role: 'user',
        firstName: firstName.value,
        lastName: lastName.value
      })
    } else {
      await signInWithEmailAndPassword(auth, email.value, password.value)
    }
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const role = await getUserProfile(user.uid)
        if (role === 'volunteer') {
          router.push('/volunteer-dashboard')
        } else {
          router.push('/user-dashboard')
        }
      }
    })
  } catch (err) {
    error.value = err.message
  }
}
</script>
