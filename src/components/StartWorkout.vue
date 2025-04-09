<template>
  <div>
    <h1>Select your lifts for today</h1>
    <div>
      <label><input type="checkbox" value="Deadlift" v-model="selectedLifts"> Deadlift</label>
      <label><input type="checkbox" value="Squat" v-model="selectedLifts"> Squat</label>
      <label><input type="checkbox" value="Bench Press" v-model="selectedLifts"> Bench Press</label>
    </div>
    <button @click="confirmWorkout">Confirm</button>
  </div>
</template>

<script>
import { useWorkoutStore } from '../stores/workout'

export default {
  name: 'StartWorkout',
  data() {
    return {
      selectedLifts: [],
    }
  },
  methods: {
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
