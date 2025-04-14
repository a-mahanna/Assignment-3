<template>
  <div>
    <h3>Clients</h3>
    <ul>
      <li v-for="(client, index) in clients" :key="index">
        {{ client.name }} — ID: {{ client.id }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const clients = ref([])
onMounted(() => {
  clients.value = [
    { id: '001', name: 'Client A' },
    { id: '002', name: 'Client B' },
    { id: '003', name: 'Client C' }
  ]
})
</script>
