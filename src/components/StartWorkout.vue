<template>
    <div>
      <h1>Select your lifts for today</h1>
      <div>
        <label><input type="checkbox" value="Deadlift" v-model="lifts"> Deadlift</label>
        <label><input type="checkbox" value="Squat" v-model="lifts"> Squat</label>
        <label><input type="checkbox" value="Bench Press" v-model="lifts"> Bench Press</label>
      </div>
      <button @click="confirmWorkout">Confirm</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StartWorkout',
    data() {
      return {
        lifts: []
      };
    },
    methods: {
      confirmWorkout() {
        if (this.lifts.length === 0) {
          alert("Please select at least one lift.");
          return;
        }
        console.log("Navigating to ProgressWorkout with lifts:", this.lifts);
        const query = new URLSearchParams({ lifts: JSON.stringify(this.lifts) }).toString();
        this.$router.push({ path: '/progressworkout', query: query });
      }
    }
  };
  </script>
  