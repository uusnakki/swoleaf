<template>
  <div>
    <h1>Stats</h1>
    <button @click="goHome">OK</button>
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
    </div>
    <div v-else>
      <p>No workout stats available.</p>
    </div>
  </div>
</template>

<script>
import { useWorkoutStore } from '../stores/workout'

export default {
  name: 'StatsPage',
  setup() {
    const workoutStore = useWorkoutStore()

    workoutStore.fetchCompletedWorkouts()

    return {
      completedWorkouts: workoutStore.completedWorkouts
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
  },
}
</script>
