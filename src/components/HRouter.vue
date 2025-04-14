<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { getUserProfile } from '@/utils/getUserProfile'

const isLoggedIn = ref(false)
const firstName = ref('')
const lastName = ref('')
const avatarUrl = ref('')
const router = useRouter()

onMounted(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      isLoggedIn.value = true
      const profile = await getUserProfile(user.uid)
      firstName.value = profile.firstName || ''
      lastName.value = profile.lastName || ''
      avatarUrl.value = profile.avatar || ''
    } else {
      isLoggedIn.value = false
    }
  })
})

const logout = async () => {
  await signOut(auth)
  router.push('/auth')
}

const initials = computed(() =>
  `${firstName.value.charAt(0)}${lastName.value.charAt(0)}`.toUpperCase()
)
</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container-md">
      <router-link class="navbar-brand" to="/">MyBrand</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/community" class="nav-link" active-class="active">Community</router-link>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Resources
            </a>
            <ul class="dropdown-menu" aria-labelledby="resourcesDropdown">
              <li><router-link to="/healthservices" class="dropdown-item">Health Service</router-link></li>
              <li><router-link to="/legalassistance" class="dropdown-item">Legal Assistance</router-link></li>
              <li><router-link to="/education" class="dropdown-item">Education</router-link></li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link" active-class="active">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/support" class="nav-link" active-class="active">Support</router-link>
          </li>

          <!-- Show only if not logged in -->
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/auth" class="nav-link" active-class="active">Log In or Register</router-link>
          </li>

          <!-- Show only if logged in -->
          <li v-if="isLoggedIn" class="nav-item d-flex align-items-center ms-3 gap-2">
            <router-link to="/profile" class="nav-link p-0" title="View Profile">
              <div class="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
                style="width: 36px; height: 36px; font-weight: bold;">
                {{ initials }}
              </div>
            </router-link>
            <button class="btn btn-outline-danger btn-sm" @click="logout">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
