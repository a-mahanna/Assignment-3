<script setup lang="ts">
//import { isAuthenticated as isAuthenticatedRef } from '../components/store.js';
import { computed } from 'vue';

const isAuthenticated = computed(() => isAuthenticatedRef.value);
</script>

<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><router-link to="/" class="nav-link" active-class="active"
            aria-current="page">Home</router-link></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="moreDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Log In
          </a>
          <ul class="dropdown-menu" aria-labelledby="moreDropdown">
            <li>
              <router-link to="/profile" class="dropdown-item">Users</router-link>
            </li>
            <li>
              <router-link to="/settings" class="dropdown-item">Volunteers</router-link>
            </li>

          </ul>
        </li>
        <li class="nav-item"><router-link to="/community" class="nav-link" active-class="active">Community</router-link>
        </li>
        <li class="nav-item"><router-link to="/about" class="nav-link" active-class="active">About Us</router-link></li>
        <!-- Dropdown Menu -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="moreDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Resources
          </a>
          <ul class="dropdown-menu" aria-labelledby="moreDropdown">
            <li>
              <router-link to="/profile" class="dropdown-item">Health Service</router-link>
            </li>
            <li>
              <router-link to="/settings" class="dropdown-item">Legal Assistance</router-link>
            </li>
            <li>
              <router-link to="/help" class="dropdown-item">Education</router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item"><router-link to="/community" class="nav-link" active-class="active">Community</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>
