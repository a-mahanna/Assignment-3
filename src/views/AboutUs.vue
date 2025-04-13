<template>
  <section class="mt-5 max-w-6xl mx-auto px-4 py-10 space-y-16">
    <!-- Mission and Team -->
    <div class="space-y-6">
      <h2 class="text-3xl font-bold text-center">Our Mission & Team</h2>
      <p class="text-lg text-gray-700 text-center max-w-3xl mx-auto">
        Our mission is to empower refugees and asylum seekers by providing accessible, multilingual health and legal
        resources, fostering a strong community, and supporting integration through digital innovation. Our diverse team
        of developers, healthcare professionals, and community advocates are united by a commitment to equity and
        inclusion.
      </p>

      <div class="grid md:grid-cols-3 gap-8 mt-8">
        <div v-for="member in team" :key="member.name" class="bg-white shadow rounded-xl p-6 text-center">
          <img :src="member.image" alt="Profile" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
          <h3 class="text-xl font-semibold">{{ member.name }}</h3>
          <p class="text-sm text-gray-500">{{ member.role }}</p>
        </div>
      </div>
    </div>

    <!-- Community Impact -->
    <div class="space-y-6">
      <h2 class="text-3xl font-bold text-center">Community Impact</h2>
      <p class="text-lg text-gray-700 text-center max-w-3xl mx-auto">
        Since our launch, our platform has reached hundreds of individuals, connecting them with vital services, health
        support, and legal aid. Through community-driven features like forums and events, we've reduced isolation and
        promoted well-being across displaced populations.
      </p>
      <ul class="grid md:grid-cols-3 gap-6 text-center mt-6 list-unstyled">
        <li class="bg-green-50 p-6 rounded-xl ">
          <h3 class="text-2xl font-bold text-green-600">500+</h3>
          <p class="text-gray-700">Active Users</p>
        </li>
        <li class="bg-green-50 p-6 rounded-xl">
          <h3 class="text-2xl font-bold text-green-600">120+</h3>
          <p class="text-gray-700">Referrals to Health Services</p>
        </li>
        <li class="bg-green-50 p-6 rounded-xl">
          <h3 class="text-2xl font-bold text-green-600">75+</h3>
          <p class="text-gray-700">Community Events Facilitated</p>
        </li>
      </ul>
    </div>

    <!-- Partners and Sponsors -->
    <div class="space-y-6">
      <h2 class="text-3xl font-bold text-center">Partners & Sponsors</h2>
      <p class="text-lg text-gray-700 text-center max-w-3xl mx-auto">
        We are proud to collaborate with a network of health organizations, legal advocacy groups, and generous sponsors
        who support our shared vision of a more equitable future for all.
      </p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 items-center justify-center">
        <img v-for="partner in partners" :key="partner.name" :src="partner.logo" :alt="partner.name"
          class="h-12 object-contain mx-auto grayscale hover:grayscale-0 transition" />
      </div>
    </div>
  </section>
</template>

<script setup>
const team = [
  { name: "Dr. Layla Hassan", role: "Health Program Director", image: new URL('@/assets/Layla.jpg', import.meta.url).href },
  { name: "Ahmed Khalid", role: "Lead Developer", image: new URL('@/assets/Ahmed.jpg', import.meta.url).href },
  { name: "Sara Al-Masri", role: "Community Outreach Coordinator", image: new URL('@/assets/Sarah.jpg', import.meta.url).href },
];

const partners = [
  { name: "Global Health Alliance", logo: "https://via.placeholder.com/120x40" },
  { name: "Hope Legal Aid", logo: "https://via.placeholder.com/120x40" },
  { name: "Refugee Support Group", logo: "https://via.placeholder.com/120x40" },
  { name: "Wellness Partners", logo: "https://via.placeholder.com/120x40" },
];
</script>
