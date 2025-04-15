<template>
  <div class="container py-4">
    <h2 class="mb-3">Rate & Review this Service</h2>
    <div class="mb-3">
      <label class="form-label">Your Rating:</label>
      <select v-model="userRating" class="form-select w-25">
        <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
      </select>
    </div>
    <div class="mb-3">
      <label class="form-label">Your Review:</label>
      <textarea v-model="userReview" class="form-control" rows="3" placeholder="Write your review here..."></textarea>
    </div>
    <button class="btn btn-primary" @click="submitRating">Submit Review</button>

    <hr />

    <h4>Average Rating: {{ average.toFixed(1) }} / 5</h4>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
      <div v-for="(review, index) in ratings" :key="index" class="col">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Rating: {{ review.value }}/5</h5>
            <p class="card-text">{{ review.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { db, auth } from '@/firebase'
import { setDoc, doc, getDocs, collection } from 'firebase/firestore'

const serviceId = 'exampleServiceId'
const userRating = ref(5)
const userReview = ref('')
const ratings = ref([])

const getRatings = async () => {
  const snapshot = await getDocs(collection(db, 'ratings', serviceId, 'users'))
  ratings.value = snapshot.docs.map(doc => doc.data())
}

const submitRating = async () => {
  const user = auth.currentUser
  if (!user) return
  await setDoc(doc(db, 'ratings', serviceId, 'users', user.uid), {
    value: userRating.value,
    text: userReview.value
  })
  userReview.value = ''
  userRating.value = 5
  await getRatings()
}

const average = computed(() =>
  ratings.value.length
    ? ratings.value.reduce((sum, rating) => sum + rating.value, 0) / ratings.value.length
    : 0
)

onMounted(getRatings)
</script>
