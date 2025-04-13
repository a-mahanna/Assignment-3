import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUs.vue'
import Community from '../views/CommunityView.vue'
import HealthServices from '@/views/HealthServices.vue'
import EducationResources from '@/views/EducationResources.vue'
import LegalAssistance from '@/views/LegalAssistance.vue'
import SupportPage from '@/views/SupportPage.vue'
import LoginRegister from '@/views/LoginRegister.vue'
import VolunteerDashboard from '@/views/VolunteerDashboard.vue'
import UserDashboard from '@/views/UserDashboard.vue'
import { auth } from '@/firebase'
import { getUserProfile } from '@/utils/getUserProfile'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs,
    },
    {
      path: '/community',
      name: 'community',
      component: Community,
    },
    {
      path: '/education',
      name: 'education',
      component: EducationResources,
    },
    {
      path: '/healthservices',
      name: 'healthservices',
      component: HealthServices,
    },
    {
      path: '/legalassistance',
      name: 'legalassistance',
      component: LegalAssistance,
    },
    {
      path: '/support',
      name: 'support',
      component: SupportPage,
    },
    {
      path: '/auth',
      name: 'auth',
      component: LoginRegister,
    },
    {
      path: '/volunteer-dashboard',
      name: 'volunteer-dashboard',
      component: VolunteerDashboard,
    },
    {
      path: '/user-dashboard',
      name: 'user-dashboard',
      component: UserDashboard,
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const currentUser = auth.currentUser

  if (to.meta.requiresAuth && !currentUser) {
    next('/auth')
  } else if (to.meta.requiresAuth && currentUser) {
    const role = await getUserProfile(currentUser.uid)
    if (role === to.meta.role) {
      next()
    } else {
      next('/auth')
    }
  } else {
    next()
  }
})

export default router
