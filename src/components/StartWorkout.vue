<template>
  <div>
    <h1>Select your lifts for today</h1>
    <div>
      <label><input type="checkbox" value="Deadlift" v-model="selectedLifts"> Deadlift</label>
      <label><input type="checkbox" value="Squat" v-model="selectedLifts"> Squat</label>
      <label><input type="checkbox" value="Bench Press" v-model="selectedLifts"> Bench Press</label>
    </div>
    <PrimeVueButton @click="confirmWorkout" class="primaryButton">Confirm</PrimeVueButton>
    <PrimeVueButton @click="cancelWorkout" class="primaryButton">Cancel</PrimeVueButton>
  </div>
</template>

<script>
import { useWorkoutStore } from '../stores/workout'
import PrimeVueButton from 'primevue/button'

export default {
  name: 'StartWorkout',
  components: { PrimeVueButton },
  data() {
    return {
      selectedLifts: [],
    }
  },
  methods: {
    cancelWorkout() {
      this.$router.push('/')
    },
    confirmWorkout() {
      if (this.selectedLifts.length === 0) {
        alert("Please select at least one lift.")
        return
      }
      
      const workoutStore = useWorkoutStore()
      workoutStore.setLifts(this.selectedLifts)
      
      console.log("Navigating to ProgressWorkout with lifts:", this.selectedLifts)
      this.$router.push({ name: 'ProgressWorkout' })
    }
  },
}
</script>
