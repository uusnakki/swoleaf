<template>
  <div>
    <h1>Welcome to Swoleaf 🍃</h1>  
    <PrimeVueButton @click="viewStats" class="primaryButton">Stats</PrimeVueButton>
    <PrimeVueButton @click="startWorkout" class="primaryButton">Start a workout</PrimeVueButton>
    <p>{{ quote }}</p>
  </div>
</template>

<script>
import quotes from '../utilities/quotes.json'
import PrimeVueButton from 'primevue/button'

export default {
  name: 'LandingPage',
  components: { PrimeVueButton },
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
