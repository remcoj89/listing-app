<template>
  <footer class="footer-navigation">
    <!-- Home button -->
    <base-button mode="button-icon" class="icons" @click="navigateToHome">
      <img
        class="button-icon-img"
        v-if="isHomeActive"
        src="@/assets/icons-mobile/ic_mobile_navigarion_home_active@3x.png"
        alt="Home"
      />
      <img
        class="button-icon-img"
        v-else-if="!isHomeActive"
        src="@/assets/icons-mobile/ic_mobile_navigarion_home@3x.png"
        alt="Home"
      />
    </base-button>
    <!-- About page -->
    <base-button mode="button-icon" class="icons" @click="navigateToAbout">
      <img
        class="button-icon-img"
        v-if="isAboutActive"
        src="@/assets/icons-mobile/ic_mobile_navigarion_info_active@3x.png"
        alt="About"
      />
      <img
        class="button-icon-img"
        v-else-if="!isAboutActive"
        src="@/assets/icons-mobile/ic_mobile_navigarion_info@3x.png"
        alt="About"
      />
    </base-button>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      isHomeActive: true,
      isAboutActive: false
    }
  },
  methods: {
    navigateToHome() {
      this.$router.push('/')
      this.isAboutActive = false
      this.isHomeActive = true
    },
    navigateToAbout() {
      this.$router.push('/about')
      this.isAboutActive = true
      this.isHomeActive = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styling/base.scss';

.footer-navigation {
  display: none;
  width: 100%;
}

@media only screen and (max-width: 600px) {
  .footer-navigation {
    display: flex;
    position: fixed;
    bottom: 0;
    background-color: white;
    padding: 15px 0;
    justify-content: space-around;
    background-color: white;
    .button-icon-img {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
