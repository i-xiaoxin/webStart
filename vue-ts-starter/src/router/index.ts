import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Home = () => import('../views/HomeView.vue');
const About = () => import('../views/AboutView.vue');

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
