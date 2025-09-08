<template>
  <div>
    <h1>Select your lifts for today</h1>
    <div class="groupLifts">
      <CheckboxGroup v-model="selectedLifts" name="ingredient" class="flex flex-wrap gap-4">
            <div class="lift">
                <Checkbox inputId="deadlift" value="Deadlift" />
                <label for="deadlift">Deadlift</label>
            </div>
            <div class="lift">
                <Checkbox inputId="squat" value="Squat" />
                <label for="squat">Squat</label>
            </div>
            <div class="lift">
                <Checkbox inputId="bench" value="Bench" />
                <label for="bench">BenchPress</label>
            </div>
            <div class="lift">
                <Checkbox inputId="pullup" value="Pull up" />
                <label for="pullup">Pull up</label>
            </div>
        </CheckboxGroup>
    </div>
    <PrimeVueButton @click="cancelWorkout" class="primaryButton">Cancel</PrimeVueButton>
    <PrimeVueButton @click="confirmWorkout" class="primaryButton">Confirm</PrimeVueButton>
  </div>
</template>

<script>
import { useWorkoutStore } from '../stores/workout'
import PrimeVueButton from 'primevue/button'
import Checkbox from 'primevue/checkbox';
import CheckboxGroup from 'primevue/checkboxgroup';

export default {
  name: 'StartWorkout',
  components: {
    PrimeVueButton,
    Checkbox,
    CheckboxGroup
  },
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
      
      this.$router.push({ name: 'ProgressWorkout' })
    }
  },
}
</script>

<style>

.groupLifts{
  margin-bottom: 12px;
}

.lift {
  margin-right: 20px;
}
</style>
