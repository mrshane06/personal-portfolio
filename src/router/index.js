import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EducationView from '@/views/EducationView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactsView from '@/views/ContactsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Education',
    name: 'Education',
    component: EducationView
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: ProjectsView
  },
  {
    path: '/Contacts',
    name: 'Contact Page',
    component: ContactsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
