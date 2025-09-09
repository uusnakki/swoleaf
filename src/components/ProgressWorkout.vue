<template>
  <div>
    <h1>Progress Workout</h1>
    <div v-if="lifts.length > 0">
      <div v-for="lift in lifts" :key="lift" class="lift-row">
        <h2 class="lift-title">{{ lift }}</h2>
        <label class="progress">Sets: <InputNumber v-model="workout[lift].sets" inputId="sets" size="large" showButtons :min="0" :max="1000"/></label>
        <label class="progress">Reps: <InputNumber v-model="workout[lift].reps" inputId="reps" size="large" showButtons :min="0" :max="1000"/></label>
        <label class="progress">Weight: <InputNumber v-model="workout[lift].weight" inputId="weight" size="large" showButtons :min="0" :max="1000"/></label>
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

<style>

.lift-row {
  margin-bottom: 1.5rem;
}

.lift-title {
  margin-bottom: 1.5rem;
}

.progress {
  display: block;
  margin-bottom: 0.75rem;
  font-size: 20px;
}

</style>
