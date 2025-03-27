<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <PrimeVueButton label="Login" @click="doLogin" />
    </div>
    <p>
      Track those sweet gains
    </p>
  </div>
</template>

<script>
import { default as PrimeVueButton } from 'primevue/button'

export default {
  name: 'LandingPage',
  props: {
    msg: String
  },
  components: {
    PrimeVueButton
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
