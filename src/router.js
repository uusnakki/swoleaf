import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from './components/LandingPage.vue';
import StartWorkout from './components/StartWorkout.vue';
import ProgressWorkout from './components/ProgressWorkout.vue';
import CompletionPage from './components/CompletionPage.vue';
import StatsPage from './components/StatsPage.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/startworkout', component: StartWorkout },
  { path: '/progressworkout', component: ProgressWorkout },
  { path: '/completion', component: CompletionPage },
  { path: '/stats', component: StatsPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
