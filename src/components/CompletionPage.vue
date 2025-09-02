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
    <PrimeVueButton @click="finish" class="primaryButton">OK</PrimeVueButton>
  </div>
</template>

<script>
import { useWorkoutStore } from '../stores/workout'
import PrimeVueButton from 'primevue/button'

export default {
  name: 'CompletionPage',
  components: { PrimeVueButton },
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
