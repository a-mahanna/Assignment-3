<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-light text-dark py-5 text-center">
      <div class="container">
        <h1 class="display-4 fw-bold">Empowering Refugees and Asylum Seekers</h1>
        <p class="lead mt-3">
          A digital platform providing access to health services, legal aid, educational resources,
          and community support tailored for displaced communities.
        </p>
        <router-link to="/auth" class="btn btn-primary btn-lg mt-4">Get Started</router-link>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-5 bg-white border-top">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <img
              src="https://media.istockphoto.com/id/1432208993/photo/portrait-of-father-and-daughter-embracing-at-a-community-center.jpg?s=612x612&w=0&k=20&c=gJlOzGDzHDvIQ1m3r3GcxULhxCclAxPgPQlFKHzmxTk="
              class="img-fluid rounded" alt="about" />
          </div>
          <div class="col-md-6">
            <h2>About Our Platform</h2>
            <p class="mt-3">
              We are a health-focused charity committed to addressing the unique challenges faced by refugees and
              asylum seekers. Our application connects individuals with essential services, fosters community
              engagement, and promotes long-term integration through digital empowerment.
            </p>
            <ul class="list-unstyled mt-3">
              <li>✔ Multilingual content and accessibility-first design</li>
              <li>✔ Free and confidential legal and health resources</li>
              <li>✔ Community forums, event listings, and volunteer opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-5 bg-light border-top">
      <div class="container text-center">
        <h2 class="mb-4">Our Services</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">Health Services</h5>
                <p class="card-text">
                  Access medical clinics, mental health counseling, and telehealth support tailored to refugee needs.
                </p>
                <router-link to="/health-services" class="btn btn-outline-primary btn-sm">Learn More</router-link>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">Legal Assistance</h5>
                <p class="card-text">
                  Receive guidance on asylum procedures, documentation, and legal rights in your country of residence.
                </p>
                <router-link to="/legal-assistance" class="btn btn-outline-primary btn-sm">Learn More</router-link>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">Education</h5>
                <p class="card-text">
                  Discover language classes, online certifications, and tutoring programs for learners of all ages.
                </p>
                <router-link to="/education" class="btn btn-outline-primary btn-sm">Learn More</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials / Community Voices -->
    <section class="py-5 bg-white border-top">
      <div class="container">
        <h2 class="text-center mb-5">Community Voices</h2>
        <div class="row">
          <div class="col-md-4">
            <blockquote class="blockquote">
              <p class="mb-0">"This platform helped me find a doctor who speaks my language. I finally feel safe."</p>
              <footer class="blockquote-footer mt-2">Fatima, Syrian Refugee</footer>
            </blockquote>
          </div>
          <div class="col-md-4">
            <blockquote class="blockquote">
              <p class="mb-0">"I was able to join a support group and it changed my life. Thank you!"</p>
              <footer class="blockquote-footer mt-2">Ali, Asylum Seeker</footer>
            </blockquote>
          </div>
          <div class="col-md-4">
            <blockquote class="blockquote">
              <p class="mb-0">"As a volunteer, I’ve made lifelong connections through the events calendar."</p>
              <footer class="blockquote-footer mt-2">Sophie, Volunteer</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-5 bg-primary text-white text-center">
      <div class="container">
        <h2>Join Our Mission</h2>
        <p class="lead mt-2">Whether you’re seeking support or looking to help, we welcome you to our community.</p>
        <router-link to="/auth" class="btn btn-light btn-lg mt-3">Create Your Account</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>

<style scoped>
.blockquote {
  background: #f8f9fa;
  padding: 20px;
  border-left: 4px solid #0d6efd;
  border-radius: 0.25rem;
}
</style>
