<template>
  <div class="container py-4">
    <h2 class="mb-3">Rate this Service</h2>
    <select v-model="userRating" class="form-select w-25 mb-3">
      <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
    </select>
    <button class="btn btn-primary" @click="submitRating">Submit</button>

    <hr />
    <h5>Average Rating: {{ average.toFixed(1) }} / 5</h5>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { db, auth } from '@/firebase'
import { setDoc, doc, getDocs, collection } from 'firebase/firestore'

const serviceId = 'exampleServiceId'
const userRating = ref(5)
const ratings = ref([])

const getRatings = async () => {
  const snapshot = await getDocs(collection(db, 'ratings', serviceId, 'users'))
  ratings.value = snapshot.docs.map(doc => doc.data().value)
}

const submitRating = async () => {
  const user = auth.currentUser
  if (!user) return
  await setDoc(doc(db, 'ratings', serviceId, 'users', user.uid), {
    value: userRating.value
  })
  await getRatings()
}

const average = computed(() =>
  ratings.value.length
    ? ratings.value.reduce((a, b) => a + b, 0) / ratings.value.length
    : 0
)

onMounted(getRatings)
</script>
