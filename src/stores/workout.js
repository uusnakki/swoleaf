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
        let defaultWeight = 0;
        if (lift === 'Deadlift') {
          defaultWeight = 120;
        } else if (lift === 'Squat') {
          defaultWeight = 100;
        } else if (lift === 'Bench Press') {
          defaultWeight = 70;
        }
        this.workout[lift] = { reps: 5, sets: 5, weight: defaultWeight };
      });
    },
    completeWorkout() {
      console.log("Workout data:", this.workout);
    },
  },
});
