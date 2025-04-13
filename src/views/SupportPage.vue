<template>
  <section class="container py-5">
    <!-- Page Title -->
    <h1 class="text-center mb-5">Support</h1>

    <!-- FAQ Section -->
    <div class="mb-5">
      <h2 class="mb-4">Frequently Asked Questions</h2>
      <div class="accordion" id="faqAccordion">
        <div class="accordion-item" v-for="faq in faqs" :key="faq.id">
          <h2 class="accordion-header" :id="`heading${faq.id}`">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              :data-bs-target="`#collapse${faq.id}`" aria-expanded="false" :aria-controls="`collapse${faq.id}`">
              {{ faq.question }}
            </button>
          </h2>
          <div :id="`collapse${faq.id}`" class="accordion-collapse collapse" :aria-labelledby="`heading${faq.id}`"
            data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- User Guides Section -->
    <div class="mb-5">
      <h2 class="mb-4">User Guides</h2>
      <div class="row">
        <div v-for="guide in guides" :key="guide.id" class="col-md-4 mb-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">{{ guide.title }}</h5>
              <p class="card-text">{{ guide.description }}</p>
              <a :href="guide.link" target="_blank" class="btn btn-outline-primary btn-sm">View Guide</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Support Form -->
    <div>
      <h2 class="mb-4">Contact Support</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="name" class="form-label">Full Name</label>
          <input v-model="form.name" type="text" class="form-control" id="name" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email Address</label>
          <input v-model="form.email" type="email" class="form-control" id="email" required />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Your Message</label>
          <textarea v-model="form.message" class="form-control" id="message" rows="4" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>

      <div v-if="submitted" class="alert alert-success mt-3" role="alert">
        Thank you! Your message has been sent.
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const faqs = [
  { id: 1, question: "How do I reset my password?", answer: "Click on 'Forgot password' on the login page and follow the instructions." },
  { id: 2, question: "Can I change the language of the site?", answer: "Yes, use the language selector in the top-right corner of the site." },
  { id: 3, question: "How do I volunteer?", answer: "Visit the 'Volunteer' section and complete the registration form." }
]

const guides = [
  { id: 1, title: "Getting Started", description: "Learn how to register and navigate the platform.", link: "#" },
  { id: 2, title: "Using Health Services", description: "Step-by-step guide to accessing medical support.", link: "#" },
  { id: 3, title: "Finding Legal Help", description: "Instructions for locating and contacting legal assistance.", link: "#" }
]

const form = ref({ name: '', email: '', message: '' })
const submitted = ref(false)

const submitForm = () => {
  console.log('Form submitted:', form.value)
  submitted.value = true
  form.value = { name: '', email: '', message: '' }
}
</script>
