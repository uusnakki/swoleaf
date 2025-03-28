<template>
  <div>
    <h1>Completion Page</h1>
    <div v-for="lift in lifts" :key="lift">
      <h2>{{ lift }}</h2>
      <!-- Stats and comparison logic -->
    </div>
    <button @click="finish">OK</button>
  </div>
</template>

<script>
export default {
  name: 'CompletionPage',
  data() {
    return {
      lifts: this.$route.params.lifts || []
    };
  },
  methods: {
    finish() {
      this.$router.push('/');
    }
  }
};
</script>
