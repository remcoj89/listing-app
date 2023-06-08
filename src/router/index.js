import { createRouter, createWebHistory } from 'vue-router'
import GetListings from '../views/GetListings.vue'
import DetailsVue from '@/views/DetailsVue.vue'
import CreateNewListing from '@/views/CreateListingForm.vue'
import EditListing from '@/views/EditListingForm.vue'
import About from '@/views/AboutView.vue'
import ErrorPage from '@/views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: GetListings,
      children: []
    },
    {
      name: 'ShowListingDetails',
      path: '/details/:id',
      component: DetailsVue,
      props: true
    },
    {
      name: 'about',
      path: '/about',
      component: About
    },
    {
      name: 'newlisting',
      path: '/newlisting',
      component: CreateNewListing
    },
    {
      name: 'editListing',
      path: '/editlisting/:id',
      component: EditListing,
      props: true
    },
    {
      name: '404Page',
      path: '/404',
      component: ErrorPage
    },
    // Redirect users to home when using wrong url
    {
      path: '/:catchAll(.*)*',
      redirect: { name: '404Page' }
    }
  ]
})

export default router
