<template>
  <div>
    <h1>Welcome to Swoleaf 🍃</h1>
    <Button @click="startWorkout">Start a workout</Button>  
    <Button @click="viewStats">Stats</Button>
    <p>{{ quote }}</p>
  </div>
</template>

<script>
import quotes from '../utilities/quotes.json'
import Button from "primevue/button"

export default {
  name: 'LandingPage',
  data() {
    return {
      quote: 'Quote of the day'
    }
  },
  methods: {
    startWorkout() {
      this.$router.push('/startworkout')
    },
    viewStats() {
      this.$router.push('/stats')
    }
  },
  mounted() {
    // Fetch quote from a remote source or use a predefined list
    this.quote = quotes[Math.floor(Math.random() * quotes.length)].quote
  }
}
</script>
