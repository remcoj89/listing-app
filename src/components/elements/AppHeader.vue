<template>
  <header id="header">
    <div class="header-top">
      <h1>Houses</h1>

      <!-- Desctop create new button -->
      <base-button
        class="icons"
        id="button-create-desc-top"
        mode="button-primary"
        @click="newListing"
      >
        <img class="icon" src="@/assets/icons/ic_plus_white@3x.png" alt="" />
        <p>Create New</p>
      </base-button>

      <!-- Mobile create new button -->
      <base-button class="icons" id="button-create-mobile" @click="newListing">
        <img class="icon" src="@/assets/icons/ic_plus_grey@3x.png" alt="" />
      </base-button>
    </div>

    <!-- Search bar and filter buttons -->
    <div class="header-bottom">
      <div class="search-form">
        <img class="search-icon" src="@/assets/icons/ic_search@3x.png" alt="Search" />

        <form id="search-form">
          <!-- Search form -->
          <label for="search">
            <input
              name="search"
              id="search-input"
              class="field"
              type="text"
              placeholder="Search..."
              v-model="userInput"
              @input="searchFormInput"
            />
          </label>
        </form>
        <base-button mode="button-search-form" @click="emptySearchForm">
          <img
            class="search-icon"
            src="@/assets/icons/ic_clear@3x.png"
            alt="Delete"
            v-if="userInput"
          />
        </base-button>
      </div>

      <!-- Filter in Price or size -->
      <div id="filter-buttons">
        <base-button
          mode="button-filter"
          :class="{ active: this.priceButtonActive }"
          id="button-price-filter"
          @click="filterButton('filter-price')"
        >
          <p>Price</p>
        </base-button>
        <base-button
          mode="button-filter"
          :class="{ active: this.sizeButtonActive }"
          id="button-size-filter"
          @click="filterButton('filter-size')"
        >
          <p>Size</p>
        </base-button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-container',
  emits: [
    'sort-by-price',
    'sort-by-size',
    'search-form-input',
    'clear-search-bar',
    'unordered-list'
  ],
  data() {
    return {
      priceButtonActive: false,
      sizeButtonActive: false,
      filterActive: false,
      userInput: ''
    }
  },
  props: ['id', 'street'],
  computed: {
    activeClass() {
      return { active: !this.buttonActive }
    }
  },
  methods: {
    // Switch the active filter button when selected
    filterButton(input) {
      if (input === 'filter-price') {
        this.$emit('sort-by-price')
        this.priceButtonActive = !this.priceButtonActive
        this.sizeButtonActive = false
        if (!this.priceButtonActive && !this.sizeButtonActive) {
          this.$emit('unordered-list')
        }
      } else if (input === 'filter-size') {
        this.sizeButtonActive = !this.sizeButtonActive
        this.priceButtonActive = false
        this.$emit('sort-by-size')
        if (!this.priceButtonActive && !this.sizeButtonActive) {
          this.$emit('unordered-list')
        }
      }
    },
    newListing() {
      this.$router.push('/newlisting')
    },
    emptySearchForm() {
      this.userInput = ''
      this.$emit('clear-search-bar')
    },
    searchFormInput() {
      this.$emit('search-form-input', this.userInput)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styling/base.scss';

header {
  max-width: 1024px;
  margin: 110px auto 30px;

  .header-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0;
  }

  .header-bottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .search-form {
      width: 40%;
      display: flex;
      background-color: $tertiary;
      border-radius: 10px;
      padding: 5px;

      .search-icon {
        width: 1.5rem;
        height: 1.5rem;
        margin: auto 0;
      }

      #search-input {
        background-color: $tertiary;
        outline: none;
      }
    }
    #filter-buttons {
      display: flex;
      justify-content: flex-end;
    }
  }

  p {
    color: white;
  }
}

// number of listings
#result {
  max-width: 1000px;
  margin: 0 auto;
}

// no result image for search form

#no-result {
  max-width: 1000px;
  text-align: center;

  h2 {
    margin-bottom: 30px;
  }

  img {
    width: 50%;
    height: 50%;
    margin: 0 auto;
  }
}

// Search form
#search-form {
  overflow: hidden;
  width: 100%;
  border: none;

  input {
    background-color: $background2;
    padding: 10px;
    width: 100%;
    margin: auto 0;
    border: none;
  }
}

@media only screen and (max-width: 600px) {
  header {
    margin: 15px 1rem;

    .header-bottom {
      flex-direction: column;
      width: 100%;
      gap: 20px;

      .search-form {
        width: 100%;
      }
    }
    #filter-buttons {
      width: 100%;
    }
  }
}
</style>
