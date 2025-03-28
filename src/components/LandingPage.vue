<template>
  <div>
    <h1>Welcome to Swoleaf</h1>
    <button @click="startWorkout">Start a workout</button>
    <button @click="viewStats">Stats</button>
    <p>{{ quote }}</p>
  </div>
</template>

<script>
import quotes from '@/utilities/quotes.json'

export default {
  name: 'LandingPage',
  data() {
    return {
      quote: 'Quote of the day'
    };
  },
  methods: {
    startWorkout() {
      this.$router.push('/startworkout');
    },
    viewStats() {
      this.$router.push('/stats');
    }
  },
  mounted() {
    // Fetch quote from a remote source or use a predefined list
    this.quote = quotes[Math.floor(Math.random() * quotes.length)].quote;
  }
};
</script>
