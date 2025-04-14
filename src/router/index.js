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
      meta: { requiresAuth: true },
    },
    {
      path: '/education',
      name: 'education',
      component: EducationResources,
      meta: { requiresAuth: true },
    },
    {
      path: '/healthservices',
      name: 'healthservices',
      component: HealthServices,
      meta: { requiresAuth: true },
    },
    {
      path: '/legalassistance',
      name: 'legalassistance',
      component: LegalAssistance,
      meta: { requiresAuth: true },
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
      meta: { requiresAuth: true, role: 'admin' },
    },
    {
      path: '/user-dashboard',
      name: 'user-dashboard',
      component: UserDashboard,
      meta: { requiresAuth: true, role: 'user' },
    },
    {
      path: '/profile',
      component: () => import('@/views/UserProfile.vue'),
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const currentUser = auth.currentUser

  const publicPaths = ['/auth', '/about', '/support']
  if (publicPaths.includes(to.path)) {
    return next()
  }

  if (to.meta.requiresAuth && !currentUser) {
    return next('/auth')
  }

  if (to.meta.requiresAuth && currentUser && to.meta.role) {
    const profile = await getUserProfile(currentUser.uid)
    if (profile && profile.role === to.meta.role) {
      return next()
    } else {
      return next('/auth')
    }
  }

  return next()
})

export default router
