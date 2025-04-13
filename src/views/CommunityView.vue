<template>
  <section class="container py-5">

    <!-- Forum Section -->
    <div class="mb-5">
      <h2 class="text-center mb-4">Community Forum</h2>
      <ul class="list-group">
        <li v-for="post in forumPosts" :key="post.id" class="list-group-item">
          <a :href="`/forum/${post.id}`" class="h5 d-block mb-1 text-decoration-none text-primary">{{ post.title }}</a>
          <small class="text-muted">Posted by {{ post.author }} • {{ post.date }}</small>
        </li>
      </ul>
    </div>

    <!-- Event Calendar Section -->
    <div class="mb-5">
      <h2 class="text-center mb-4">Upcoming Events</h2>
      <div class="row">
        <div v-for="event in events" :key="event.id" class="col-md-4 mb-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">{{ event.name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ event.date }} – {{ event.location }}</h6>
              <p class="card-text">{{ event.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- News & Updates Section -->
    <div>
      <h2 class="text-center mb-4">News & Updates</h2>
      <div class="row">
        <div v-for="update in updates" :key="update.id" class="col-md-4 mb-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">{{ update.title }}</h5>
              <small class="text-muted d-block mb-2">{{ update.date }}</small>
              <p class="card-text">{{ update.summary }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
const forumPosts = [
  { id: 1, title: "How to access free health services?", author: "Aisha R.", date: "April 5, 2025" },
  { id: 2, title: "Looking for local support groups", author: "Mahmoud K.", date: "April 7, 2025" },
  { id: 3, title: "Advice on legal assistance", author: "Layla N.", date: "April 10, 2025" }
];

const events = [
  { id: 1, name: "Health Checkup Camp", date: "April 20, 2025", location: "Community Centre, West Hall", description: "Free medical checkups and wellness advice from licensed professionals." },
  { id: 2, name: "Volunteer Training", date: "April 25, 2025", location: "Online (Zoom)", description: "Training session for new community volunteers." },
  { id: 3, name: "Community Picnic", date: "May 1, 2025", location: "Central Park", description: "A social event to build community and relax with music and food." }
];

const updates = [
  { id: 1, title: "New Mental Health Support Groups Launched", date: "April 12, 2025", summary: "We’re happy to announce weekly support groups led by trained counselors." },
  { id: 2, title: "Partnership with Red Crescent", date: "April 9, 2025", summary: "A new collaboration will provide emergency aid to our community faster." },
  { id: 3, title: "Site Updates & Features", date: "April 3, 2025", summary: "New forum moderation tools and a mobile-friendly layout are now live!" }
];
</script>
