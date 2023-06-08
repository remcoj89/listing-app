<template>
  <dialog-box
    v-show="showDialogModal"
    @confirm-delete="showDialog('yes')"
    @return-home="showDialog('no')"
  />

  <div class="details-card-container">
    <div class="buttons-desc-top">
      <base-button class="icons" mode="button-go-back-arrow" @click="backHome">
        <img class="icon" src="@/assets/icons/ic_back_grey@3x.png" alt="Go Back" />
        <p>Back to overview</p>
      </base-button>
    </div>

    <div class="details-card-components">
      <!-- Details card -->
      <div class="details-card">
        <!-- details top image on desctop and buttons on mobile -->
        <div class="details-card-top" :style="{ backgroundImage: `url(${imageUrl})` }">
          <div id="buttons-mobile">
            <!-- button back to overview -->
            <base-button mode="button-icon" @click="backHome">
              <img class="button-icon-image" src="@/assets/icons/ic_back_white@3x.png" alt="" />
            </base-button>
            <div v-if="madeByMe">
              <!-- button eddit listing mobile-->
              <base-button mode="button-icon" @click.prevent="editListing(id)">
                <img
                  class="button-icon-image"
                  src="@/assets/icons/ic_edit_white@3x.png"
                  alt="edit"
                />
              </base-button>
              <!-- Remove Listing mobile-->
              <base-button mode="button-icon" @click.prevent="removeListing(id)">
                <img class="button-icon-image" src="@/assets/icons/ic_delete_white@3x.png" alt="" />
              </base-button>
            </div>
          </div>
        </div>

        <div class="details-info">
          <!-- Addres and buttons -->
          <div class="card-top">
            <!-- Address -->
            <h1>{{ streetName }} {{ houseNumber }}</h1>

            <!-- Edit and Delete in desc-top -->
            <div class="buttons-desc-top" v-if="madeByMe">
              <!-- button eddit listing -->
              <base-button mode="button-icon" @click.prevent="editListing(id)">
                <img class="button-icon-image" src="@/assets/icons/ic_edit@3x.png" alt="edit" />
              </base-button>
              <!-- Remove Listing -->
              <base-button mode="button-icon" @click.prevent="removeListing(id)">
                <img class="button-icon-image" src="@/assets/icons/ic_delete@3x.png" alt="" />
              </base-button>
            </div>
          </div>
          <!-- Listing features icons -->
          <div class="card-details">
            <!-- Listing location -->
            <div class="icons">
              <img class="icon" src="@/assets/icons/ic_location@3x.png" alt="" />
              <p>{{ zip }} {{ city }}</p>
            </div>
            <!-- listing Features: price, size, constructionyear, bedrooms, bathrooms, garage -->
            <div class="details-features">
              <div class="icons">
                <img class="icon" src="@/assets/icons/ic_price@3x.png" alt="" />
                <p>€ {{ price }}</p>
              </div>
              <div class="icons">
                <img class="icon" src="@/assets/icons/ic_size@3x.png" alt="" />
                <p>{{ size }} m2</p>
              </div>
              <div class="icons">
                <img class="icon" src="@/assets/icons/ic_construction_date@3x.png" alt="" />
                <p>Build in {{ constructionYear }}</p>
              </div>
              <div class="icons">
                <img class="icon" src="@/assets/icons/ic_bed@3x.png" alt="" />
                <p>{{ bedroom }}</p>
              </div>
              <div class="icons">
                <img class="icon" src="@/assets/icons/ic_bath@3x.png" alt="" />
                <p>{{ bathroom }}</p>
              </div>
              <div class="icons">
                <img class="icon" src="@/assets/icons/ic_garage@3x.png" alt="" />
                <p>{{ garage ? 'Yes' : 'No' }}</p>
              </div>
            </div>
          </div>
          <!-- Listing Description -->
          <p>{{ description }}</p>
        </div>
      </div>

      <!-- Recommend listings -->
      <div class="recommend-list">
        <h2>Recommended for you</h2>
        <ul v-for="item in filteredRecommendListings" :key="item.id" @click.enter="reloadWindow">
          <router-link :to="`/details/${item.id}`">
            <listing-card
              @new-id="newDetailsPage(item.id)"
              :id="item.id"
              :street="item.location.street"
              :houseNumber="item.location.houseNumber"
              :image="item.image"
              :price="item.price"
              :size="item.size"
              :bedroom="item.rooms.bedrooms"
              :bathroom="item.rooms.bathrooms"
            />
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ListingCard from '@/components/listing-components/ListingCard.vue'
import { getAllListings, DeleteListing } from '@/services/ListingService'
import { mapWritableState } from 'pinia'
import useModalStore from '@/stores/modal'

export default {
  name: 'DetailsView',
  props: ['id'],
  data() {
    return {
      // arry with all listings
      listings: [],
      // formData
      streetName: '',
      madeByMe: false,
      houseNumber: '',
      addition: '',
      zip: '',
      imageUrl: '',
      city: '',
      price: '',
      size: '',
      garage: false,
      bedroom: '',
      bathroom: '',
      constructionYear: '',
      description: '',
      // Remove listItem by id data
      userInput: null
    }
  },
  mounted() {
    this.getList()
  },
  computed: {
    // Open the DialogModal from Stores
    ...mapWritableState(useModalStore, {
      showDialogModal: 'isOpen'
    }),
    filteredRecommendListings() {
      if (this.listings.filter((item) => item.location.city === this.city).length < 2) {
        return this.listings.slice(0, 5)
      } else {
        return this.listings.filter((item) => item.location.city === this.city).slice(0, 5)
      }
    }
  },
  components: {
    ListingCard
  },
  methods: {
    getList() {
      getAllListings().then((data) => {
        // Store all listings in the listings array
        this.listings = data
        // Get Data by id
        data.forEach((item) => {
          if (item.id === parseInt(this.id, 10)) {
            this.streetName = item.location.street
            this.houseNumber = item.location.houseNumber
            this.zip = item.location.zip
            this.city = item.location.city
            this.price = item.price
            this.size = item.size
            this.imageUrl = item.image
            this.garage = item.hasGarage
            this.bedroom = item.rooms.bedrooms
            this.bathroom = item.rooms.bathrooms
            this.constructionYear = item.constructionYear
            this.description = item.description
            this.madeByMe = item.madeByMe
          }
        })
      })
    },
    editListing(id) {
      this.$router.push(`/editlisting/${id}`)
    },
    // open dialog and let the user choose to remove the list item or not
    removeListing(id) {
      this.userInput = id
      this.showDialogModal = true
    },
    // Confirm remove listing
    showDialog(input) {
      if (input === 'no') {
        this.showDialogModal = false
        // Remove listing by id
      } else if (input === 'yes') {
        DeleteListing(this.userInput)
        this.showDialogModal = false
        this.$router.push('/')
      }
    },
    // Button back to homepage
    backHome() {
      this.$router.push('/')
    },
    // Reload window when click recommend listing
    reloadWindow() {
      window.location.reload()
    }
  },
  emits: ['remove-listing']
}
</script>

<style lang="scss" scoped>
@import '@/assets/styling/base.scss';

// Details page Desctop
.details-card-container {
  max-width: 1024px;
  margin: 100px auto 25px;

  .buttons-desc-top {
    display: flex;
    gap: 1rem;
  }

  #buttons-mobile {
    display: none;
  }

  .details-card-components {
    display: flex;
    gap: 1rem;

    .details-card {
      width: 60%;

      .details-card-top {
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 30rem;
      }

      .details-info {
        background-color: white;
        background-color: $background2;
        padding: 15px;

        .card-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .details-features {
          margin: 20px 0;
          width: 75%;
          display: grid;
          gap: 0.7rem;
          grid-template-columns: 35% 25% 35%;
        }
      }
    }

    .recommend-list {
      width: 40%;
    }
  }
}

.button-icon-image {
  width: 1.8rem;
  height: 1.8rem;
}

@media only screen and (max-width: 600px) {
  .details-card-container {
    margin: 0 auto 25px;

    .buttons-desc-top {
      display: none;
    }

    #buttons-mobile {
      display: flex;
      padding: 2rem 1rem;
      justify-content: space-between;

      div {
        display: flex;
        gap: 1rem;
      }
    }

    .details-card-components {
      flex-direction: column;

      .details-card {
        margin-top: 0;
        width: 100%;

        .details-card-top {
          background-size: cover;
          background-position: center;
          height: 30vh;
        }

        .details-info {
          margin-top: -2rem;
          border-radius: 30px 30px 0 0;
          padding: 1.5rem;

          .details-features {
            width: 100%;
          }
        }
      }
      .recommend-list {
        width: 100%;
        margin-top: 15px;

        h2 {
          font-size: 1rem;
        }
      }
    }
  }
  .button-icon-image {
    width: 1.2rem;
    height: 1.2rem;
  }
}
</style>
