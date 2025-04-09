<template>
  <div>
    <h1>Completion Page</h1>
    <div v-for="lift in lifts" :key="lift">
      <h2>{{ lift }}</h2>
      <p>Reps: {{ workout[lift].reps }}</p>
      <p>Sets: {{ workout[lift].sets }}</p>
      <p>Weight: {{ workout[lift].weight }}kg</p>
    </div>
    <p>Workout Completed at: {{ timestamp }}</p>
    <button @click="finish">OK</button>
  </div>
</template>

<script>
import { useWorkoutStore } from '../stores/workout'

export default {
  name: 'CompletionPage',
  setup() {
    const workoutStore = useWorkoutStore()

    return {
      lifts: workoutStore.lifts,
      workout: workoutStore.workout,
      timestamp: workoutStore.timestamp
    }
  },
  methods: {
    finish() {
      this.$router.push('/')
    }
  },
}
</script>
