import { createRouter, createWebHistory } from 'vue-router'
import { waitForAuth } from '@/utils/waitForAuth'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUs.vue'
import Community from '../views/CommunityView.vue'
import HealthServices from '@/views/HealthServices.vue'
import EducationResources from '@/views/EducationResources.vue'
import LegalAssistance from '../views/LegalAssistance.vue'
import SupportPage from '../views/SupportPage.vue'
import LoginRegister from '../views/LoginRegister.vue'
import VolunteerDashboard from '../views/VolunteerDashboard.vue'
import UserDashboard from '../views/UserDashboard.vue'
import { auth } from '@/firebase'
import { getUserProfile } from '@/utils/getUserProfile'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutUs },
    { path: '/community', name: 'community', component: Community, meta: { requiresAuth: true } },
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
    { path: '/support', name: 'support', component: SupportPage },
    { path: '/auth', name: 'auth', component: LoginRegister, meta: { guestOnly: true } },
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
    {
      path: '/forum/1',
      name: 'FreeHealthServicesArticle',
      component: () => import('@/components/Blogs/FreeHealthServicesBlog.vue'),
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const user = await waitForAuth()
  const publicPages = ['/about', '/support']
  if (publicPages.includes(to.path)) return next()

  if (to.meta.guestOnly && user) {
    const profile = await getUserProfile(user.uid)
    const role = typeof profile === 'string' ? profile : profile?.role
    if (role === 'admin') {
      return next('/volunteer-dashboard')
    }
    return next('/user-dashboard')
  }

  if (to.meta.requiresAuth && !user) {
    return next('/auth')
  }

  if (to.meta.requiresAuth && to.meta.role && user) {
    const profile = await getUserProfile(user.uid)
    const role = typeof profile === 'string' ? profile : profile?.role
    if (role !== to.meta.role) {
      return next('/auth')
    }
  }

  return next()
})

export default router
