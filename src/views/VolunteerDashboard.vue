<template>
  <div class="container py-5">
    <h2 class="mb-4">Volunteer Dashboard</h2>
    <section class="mb-5">
      <TaskManagementDashboard />
    </section>
    <section class="mb-5">
      <VolunteerScheduling />
    </section>
    <section class="mb-5">
      <AnalyticsReporting />
    </section>
    <section class="mb-5">
      <ClientsSection />
    </section>
  </div>
</template>

<script setup>
import TaskManagementDashboard from '@/components/TaskManagementDashboard.vue'
import VolunteerScheduling from '@/components/VolunteerScheduling.vue'
import AnalyticsReporting from '@/components/AnalyticsReporting.vue'
import ClientsSection from '@/components/ClientsSection.vue'
</script>
