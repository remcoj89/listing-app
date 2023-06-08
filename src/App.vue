<template>
  <!-- Navigation bar (desctop) -->
  <nav-bar />
  <!-- Router pages -->
  <router-view />
  <!-- Footer (mobile) -->
  <app-footer />
</template>

<script>
import NavBar from '@/components/elements/AppNavBar.vue'
import AppFooter from '@/components/elements/AppFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    AppFooter
  }
}
</script>

<style lang="scss">
@import '@/assets/styling/base.scss';

body {
  background-color: $background1;
}

@media only screen and (max-width: 600px) {
  #app {
    margin-bottom: 4rem;
  }
}
</style>
