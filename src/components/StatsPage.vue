<template>
  <div>
    <h1>Stats</h1>
    <PrimeVueButton @click="goHome" class="primaryButton">OK</PrimeVueButton>
    <div v-if="completedWorkouts.length > 0">
      <div v-for="(workout, index) in completedWorkouts" :key="index">
        <h2>Workout on {{ workout.timestamp }}</h2>
        <div v-for="lift in workout.lifts" :key="lift">
          <h3>{{ lift }}</h3>
          <p>Reps: {{ workout.workout[lift].reps }}</p>
          <p>Sets: {{ workout.workout[lift].sets }}</p>
          <p>Weight: {{ workout.workout[lift].weight }}kg</p>
        </div>
      </div>
      <PrimeVueButton @click="deleteAllStats" class="primaryButton">Clear</PrimeVueButton>
    </div>
    <div v-else>
      <p>No workout stats available.</p>
    </div>
  </div>
</template>

<script>
import { useWorkoutStore } from '../stores/workout'
import PrimeVueButton from 'primevue/button'
import { useRouter } from 'vue-router'

export default {
  name: 'StatsPage',
  components: { PrimeVueButton },
  setup() {
    const workoutStore = useWorkoutStore()
    const router = useRouter()

    workoutStore.fetchCompletedWorkouts()

    const goHome = () => {
      router.push('/')
    }

    const deleteAllStats = () => {
      workoutStore.deleteAllStats()
      router.push('/')
    }

    return {
      completedWorkouts: workoutStore.completedWorkouts,
      goHome,
      deleteAllStats
    }
  },
}
</script>
