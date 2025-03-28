<template>
    <div>
      <h1>Progress Workout</h1>
      <div v-for="lift in lifts" :key="lift">
        <h2>{{ lift }}</h2>
        <label>Reps: <input type="number" v-model="workout[lift].reps"></label>
        <label>Sets: <input type="number" v-model="workout[lift].sets"></label>
        <label>Weight: <input type="number" v-model="workout[lift].weight"></label>
      </div>
      <button @click="completeWorkout">Complete Workout</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProgressWorkout',
    data() {
      return {
        lifts: [],
        workout: {}
      };
    },
    mounted() {
      if (this.$route.query.lifts) {
        this.lifts = JSON.parse(this.$route.query.lifts);
      }
      console.log("Received lifts:", this.lifts);
      if (this.lifts.length === 0) {
        console.warn("No lifts selected, redirecting...");
        this.$router.push('/'); // Handle if no lifts are received
      }
      this.lifts.forEach(lift => {
        this.$set(this.workout, lift, { reps: 0, sets: 0, weight: 0 });
      });
    },
    methods: {
      completeWorkout() {
        // Save workout data
        this.$router.push('/completion');
      }
    }
  };
  </script>
  