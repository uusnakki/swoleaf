import { defineStore } from 'pinia'

export const useWorkoutStore = defineStore('workout', {
  state: () => ({
    lifts: [],
    workout: {},
    timestamp: null,
    completedWorkouts: []
  }),
  actions: {
    setLifts(lifts) {
      this.timestamp = new Date().toLocaleString()
      this.lifts = lifts
      this.workout = {}
      lifts.forEach(lift => {
        let defaultWeight = 0
        if (lift === 'Deadlift') {
          defaultWeight = 120
        } else if (lift === 'Squat') {
          defaultWeight = 100
        } else if (lift === 'Bench Press') {
          defaultWeight = 70
        } else if (lift === 'Pull up') {
          defaultWeight = 0
        }
        this.workout[lift] = { reps: 5, sets: 5, weight: defaultWeight }
      })
    },
    completeWorkout() {
      const completedWorkout = {
        lifts: this.lifts,
        workout: this.workout,
        timestamp: this.timestamp
      }
      this.completedWorkouts.push(completedWorkout)

      // Save completed workouts to localStorage
      localStorage.setItem('completedWorkouts', JSON.stringify(this.completedWorkouts))

    },
    fetchCompletedWorkouts() {
      const storedWorkouts = localStorage.getItem('completedWorkouts')
      if (storedWorkouts) {
        this.completedWorkouts = JSON.parse(storedWorkouts)
      }
    },
    deleteAllStats() {
      // Reset state
      this.completedWorkouts = []
      this.lifts = []
      this.workout = {}
      this.timestamp = null

      // Remove only our key from localStorage
      localStorage.removeItem('completedWorkouts')
    }
  },
})
