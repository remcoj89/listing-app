<template>
  <nav id="app-navbar">
    <div class="nav-content">
      <!-- Link to home page -->
      <router-link :to="{ name: 'home' }">
        <img id="company-logo" src="@/assets/images/dark_logo_white_background.jpg" alt="Logo" />
      </router-link>
      <li class="nav-link">
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li class="nav-link">
        <!-- Link to about page -->
        <router-link to="/about">About</router-link>
      </li>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styling/base.scss';

nav {
  background-color: $background2;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;

  .nav-content {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
  }
  #company-logo {
    height: 60px;
    margin: 10px;
  }
  .nav-link {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin: auto 15px;
    text-decoration: none;
    list-style: none;
  }
}

@media only screen and (max-width: 600px) {
  nav {
    display: none;
  }
}
</style>
