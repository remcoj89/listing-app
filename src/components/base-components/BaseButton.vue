<template>
  <button :type="type" :class="mode" :id="id">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['type', 'mode', 'id']
}
</script>

<style lang="scss" scoped>
@import '@/assets/styling/base.scss';

button {
  font-size: 18px;
  display: flex;
  cursor: pointer;
}

// primary button
.button-primary {
  background-color: #eb5440;
  border: none;
  color: white;
  font-weight: bold;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  text-align: center;
  &:hover {
    border-radius: 5px;
  }
}

// Display dialog go back button
.button-go-back {
  background-color: $secondary;
  border: none;
  color: white;
  font-weight: bold;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  text-align: center;
  &:hover {
    border-radius: 5px;
  }
}

// Back to overview button
.button-go-back-arrow {
  border: none;
  font-weight: bold;
  margin-bottom: 20px;
  background-color: rgba(128, 128, 128, 0);
}

// Edit and Delete buttons in listing card
.button-icon {
  border: none;
  background-color: rgba(255, 255, 255, 0);
}

// Searchform button
.button-search-form {
  background-color: rgba(240, 248, 255, 0);
  border: none;
}

// filter buttons by price and size
.button-filter {
  color: white;
  font-weight: bold;
  padding: 0.8rem 2.5rem;
  border: none;
  background-color: $tertiary;
}

.active {
  background-color: $primary;
}

// Create button
#button-create-mobile {
  display: none;
}

// buttons in header filter price and size
#button-price-filter {
  border-radius: 10px 0 0 10px;
}

#button-size-filter {
  border-radius: 0 10px 10px 0;
}

// Form submit button
#button-submit {
  margin-left: auto;
}

// Mobile styling
@media only screen and (max-width: 600px) {
  button {
    font-size: 16px;
  }

  // primary button
  .button-primary {
    padding: 0.5rem 0.8rem;
  }

  // Display dialog go back button
  .button-go-back {
    padding: 0.5rem 0.8rem;
  }

  // delete and edit buttons
  .button-icon {
    .button-icon-img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  #button-create-mobile {
    display: block;
    border: none;
    background-color: rgba(255, 166, 0, 0);
  }

  #button-create-desc-top {
    display: none;
  }

  #button-price-filter {
    width: 50%;
  }

  #button-size-filter {
    width: 50%;
  }
}
</style>
