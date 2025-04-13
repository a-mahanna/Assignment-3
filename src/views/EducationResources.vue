<template>
  <section class="container py-5">
    <h1 class="mb-4 text-center">Educational Resources</h1>
    <p class="lead text-center mb-5">
      Access free online courses, language programs, and local learning support for all age groups.
    </p>

    <div class="row">
      <div v-for="edu in educationResources" :key="edu.id" class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ edu.name }}</h5>
            <p class="card-text">{{ edu.description }}</p>
            <a :href="edu.link" target="_blank" class="btn btn-primary">Start Learning</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const educationResources = [
  { id: 1, name: "Free English Lessons", description: "ESL programs available both online and in-person.", link: "#" },
  { id: 2, name: "Online Certifications", description: "Courses in IT, business, and more via Coursera/EdX.", link: "#" },
  { id: 3, name: "Tutoring for Children", description: "After-school tutoring programs for refugee youth.", link: "#" }
];
</script>
