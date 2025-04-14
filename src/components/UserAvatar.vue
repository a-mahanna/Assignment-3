<template>
  <div class="d-flex align-items-center gap-2">
    <div v-if="avatarUrl" class="rounded-circle overflow-hidden"
      style="width: 40px; height: 40px; border: 2px solid #ccc;">
      <img :src="avatarUrl" class="img-fluid" alt="Avatar" />
    </div>
    <div v-else class="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center"
      style="width: 40px; height: 40px;">
      {{ initials }}
    </div>
    <span>{{ fullName }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  firstName: String,
  lastName: String,
  avatarUrl: String
})

const initials = `${props.firstName?.[0] || ''}${props.lastName?.[0] || ''}`.toUpperCase()
const fullName = `${props.firstName} ${props.lastName}`
</script>
