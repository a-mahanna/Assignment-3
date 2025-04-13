<template>
  <section class="container py-5">
    <h1 class="mb-4 text-center">Health Services</h1>
    <p class="lead text-center mb-5">
      Explore free or low-cost health services available to refugees and asylum seekers in your area.
    </p>

    <div class="row">
      <div v-for="service in healthServices" :key="service.id" class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ service.name }}</h5>
            <p class="card-text">{{ service.description }}</p>
            <a :href="service.link" target="_blank" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const healthServices = [
  { id: 1, name: "Community Health Clinic", description: "Free general checkups and vaccinations.", link: "#" },
  { id: 2, name: "Women's Health Support", description: "Maternal care, counseling, and reproductive services.", link: "#" },
  { id: 3, name: "Mental Health Hotline", description: "24/7 anonymous counseling and support.", link: "#" }
];
</script>
