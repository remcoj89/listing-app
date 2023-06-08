<template>
  <div class="error-container">
    <div class="error-content">
      <h1>404</h1>
      <h3>Sorry the page you are looking for doens't exist</h3>
      <base-button mode="button-primary" @click="backHome">Home</base-button>
    </div>
  </div>
</template>

<script>
export default {
  name: '404-page',
  methods: {
    backHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styling/base.scss';

.error-container {
  max-width: 100%;
  min-height: 100vh;
  background-color: $tertiary;
  background-image: url('@/assets/images/img_placeholder_house@3x.png');
  background-size: cover;
  display: flex;
  .error-content {
    margin: auto;
    background-color: $background1;
    padding: 20px;
    border-radius: 15px;
    button {
      margin-top: 1rem;
    }
  }
}
</style>
