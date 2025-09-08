<template>
  <div>
    <h1>Progress Workout</h1>
    <div v-if="lifts.length > 0">
      <div v-for="lift in lifts" :key="lift">
        <h2>{{ lift }}</h2>
        <label>Reps: <InputNumber v-model="workout[lift].reps" inputId="reps" showButtons :min="0" :max="1000"/></label>
        <label>Sets: <InputNumber v-model="workout[lift].sets" inputId="sets" showButtons :min="0" :max="1000"/></label>
        <label>Weight: <InputNumber v-model="workout[lift].weight" inputId="weight" showButtons :min="0" :max="1000"/></label>
      </div>
      <PrimeVueButton @click="cancelWorkout" class="primaryButton">Cancel</PrimeVueButton>
      <PrimeVueButton @click="completeWorkout" class="primaryButton">Complete Workout</PrimeVueButton>
    </div>
    <div v-else>
      <p>No lifts selected. Please go back and select lifts.</p>
      <button @click="$router.push('/startworkout')">Go Back</button>
    </div>
  </div>
</template>

<script>
import { useWorkoutStore } from '../stores/workout'
import PrimeVueButton from 'primevue/button'
import InputNumber from 'primevue/inputnumber'

export default {
  name: 'ProgressWorkout',
  components: { PrimeVueButton, InputNumber },
  setup() {
    const workoutStore = useWorkoutStore()

    return {
      lifts: workoutStore.lifts,
      workout: workoutStore.workout,
      workoutStore
    }
  },
  methods: {
    cancelWorkout() {
      this.$router.push('/startworkout')
    },
    completeWorkout() {
      this.$router.push('/completion')
      this.workoutStore.completeWorkout()
    }
  },
}
</script>
