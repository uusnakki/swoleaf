import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from './components/LandingPage.vue';
import StartWorkout from './components/StartWorkout.vue';
import ProgressWorkout from './components/ProgressWorkout.vue';
import CompletionPage from './components/CompletionPage.vue';
import StatsPage from './components/StatsPage.vue';

const routes = [
  { path: '/', name: 'LandingPage', component: LandingPage },
  { path: '/startworkout', name: 'StartWorkout', component: StartWorkout },
  { path: '/progressworkout', name: 'ProgressWorkout', component: ProgressWorkout },
  { path: '/completion', name: 'CompletionPage', component: CompletionPage },
  { path: '/stats', name: 'StatsPage', component: StatsPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
