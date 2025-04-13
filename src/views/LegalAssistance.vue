<template>
  <section class="container py-5">
    <h1 class="mb-4 text-center">Legal Assistance</h1>
    <p class="lead text-center mb-5">
      Find legal aid, documentation help, and refugee rights support through the following trusted partners.
    </p>

    <div class="row">
      <div v-for="legal in legalResources" :key="legal.id" class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ legal.name }}</h5>
            <p class="card-text">{{ legal.description }}</p>
            <a :href="legal.link" target="_blank" class="btn btn-primary">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const legalResources = [
  { id: 1, name: "Refugee Legal Aid Center", description: "Free legal consultations for asylum applications.", link: "#" },
  { id: 2, name: "Documentation Help Hub", description: "Assistance with visas, IDs, and other documents.", link: "#" },
  { id: 3, name: "Legal Hotline", description: "Call-in support for urgent legal concerns.", link: "#" }
];
</script>
