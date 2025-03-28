import { defineStore } from 'pinia';

export const useWorkoutStore = defineStore('workout', {
  state: () => ({
    lifts: [],
    workout: {},
  }),
  actions: {
    setLifts(lifts) {
      this.lifts = lifts;
      this.workout = {};
      lifts.forEach(lift => {
        this.workout[lift] = { reps: 0, sets: 0, weight: 0 };
      });
    },
    completeWorkout() {
      console.log("Workout data:", this.workout);
    },
  },
});
