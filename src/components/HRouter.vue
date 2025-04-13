<script setup lang="ts">

</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container-md">

      <router-link class="navbar-brand" to="/">MyBrand</router-link>

      <!-- Toggler/hamburger button visible on small screens -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible Navigation Menu -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active" aria-current="page">
              Home
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/auth" class="nav-link" active-class="active" aria-current="page">Log In Or
              Register</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/community" class="nav-link" active-class="active">
              Community
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Resources
            </a>
            <ul class="dropdown-menu" aria-labelledby="resourcesDropdown">
              <li>
                <router-link to="/healthservices" class="dropdown-item">Health Service</router-link>
              </li>
              <li>
                <router-link to="/legalassistance" class="dropdown-item">Legal Assistance</router-link>
              </li>
              <li>
                <router-link to="/education" class="dropdown-item">Education</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" active-class="active">
              About Us
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/support" class="nav-link" active-class="active">
              Support
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
