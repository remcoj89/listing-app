<template>
  <div class="about">
    <h1>DTT Listings</h1>

    <p class="about-paragraph">
      Welcome to DTT, the ultimate home listing app! We are committed to making your search for the
      perfect home a breeze. With our user-friendly interface and comprehensive database, finding
      your dream home has never been easier.
    </p>

    <p class="about-paragraph">
      At DTT, we understand that finding the right place to call home is a deeply personal and
      important decision. That's why we strive to provide you with all the tools and resources you
      need to make an informed choice. Our app offers a vast selection of homes, apartments, and
      condos, tailored to your preferences and budget.
    </p>

    <p class="about-paragraph">
      With DTT, you can browse through high-quality property listings, complete with detailed
      descriptions, stunning images, and virtual tours. Our advanced search filters allow you to
      narrow down your options based on location, price, amenities, and more. Whether you're looking
      for a cozy studio in the city or a spacious family home in the suburbs, we've got you covered.
    </p>

    <p class="about-paragraph">
      Once you find a property that catches your eye, you can easily contact the seller or listing
      agent directly through our app. Our messaging feature ensures seamless communication, enabling
      you to ask questions, schedule viewings, and negotiate terms effortlessly.
    </p>

    <p class="about-paragraph">
      Moreover, DTT keeps you updated with the latest real estate trends and market insights. Our
      blog features expert advice, tips for home buyers, and neighborhood guides to help you make an
      informed decision. We are dedicated to empowering you with knowledge and confidence throughout
      your home buying journey.
    </p>

    <p class="about-paragraph">
      Your satisfaction is our top priority. We value your feedback and continuously strive to
      enhance your experience on DTT. Our dedicated customer support team is always ready to assist
      you with any inquiries or technical issues you may encounter.
    </p>

    <p class="about-paragraph">
      Check the DTT page now and embark on an exciting journey to find your perfect home. Join
      thousands of satisfied users who have discovered their dream properties through our platform.
      Experience the convenience, reliability, and efficiency that DTT offers. Your dream home
      awaits!
    </p>
    <h2>Built for DTT by Remco Jonk</h2>
  </div>
</template>

<script>
export default {
  name: 'about-page'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styling/base.scss';

.about {
  max-width: 1000px;
  margin: 100px auto;
  .about-paragraph {
    margin-top: 25px;
  }

  h2 {
    margin-top: 25px;
  }
}

@media only screen and (max-width: 600px) {
  .about {
    margin: 0px auto;
    padding: 1rem;
  }
}
</style>
