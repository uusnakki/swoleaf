<template>
    <div>
      <button @click="loginWithGoogle">Login with Google</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    methods: {
      async loginWithGoogle() {
        const { error } = await this.$supabase.auth.signIn({
          provider: 'google'
        });
        if (error) {
          console.error('Error logging in:', error.message);
        } else {
          this.$router.push('/');
        }
      }
    }
  };
  </script>
  