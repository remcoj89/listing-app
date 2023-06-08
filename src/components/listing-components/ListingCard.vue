<template>
  <base-card mode="card-item">
    <!-- Card image -->
    <div class="card-left">
      <img class="listing-img" :src="image" alt="" />
    </div>

    <!-- Card content -->
    <div class="card-content">
      <div class="card-content-top">
        <!-- Street and price -->
        <div>
          <h2>{{ street }} {{ houseNumber }}</h2>
        </div>
        <!-- Edit and Delete -->
        <div class="card-right" v-if="madeByMe">
          <!-- Edit Listing -->
          <base-button mode="button-icon" @click.prevent="$emit('edit-listing'), id">
            <img class="button-icon-image" src="@/assets/icons/ic_edit@3x.png" alt="edit Button" />
          </base-button>
          <!-- Remove Listing -->
          <base-button mode="button-icon" @click.prevent="$emit('remove-listing'), id">
            <img class="button-icon-image" src="@/assets/icons/ic_delete@3x.png" alt="" />
          </base-button>
        </div>
      </div>

      <!-- Price, Adress and features -->
      <div class="card-content-bottom">
        <p class="price">€ {{ price }}</p>
        <p class="adress">{{ zip }} {{ city }}</p>

        <div class="features">
          <div class="icons">
            <img class="icon" src="@/assets/icons/ic_bed@3x.png" alt="" />
            <p>{{ bedroom }}</p>
          </div>
          <div class="icons" id="icon-right">
            <img class="icon" src="@/assets/icons/ic_bath@3x.png" alt="" />
            <p>{{ bathroom }}</p>
          </div>
          <div class="icons">
            <img class="icon" src="@/assets/icons/ic_size@3x.png" alt="" />
            <p>{{ size }} m2</p>
          </div>
        </div>
      </div>
    </div>
  </base-card>
</template>

<script>
// api key
const myHeaders = new Headers()
myHeaders.append('X-Api-Key', 'WP0kBtXdbw5_ZQOSrvMeL6zhVNIjE13Y')

export default {
  name: 'listingCard',
  // getting the props from the GetListings page with the api data
  props: [
    'id',
    'street',
    'houseNumber',
    'price',
    'image',
    'zip',
    'city',
    'size',
    'bedroom',
    'bathroom',
    'madeByMe',
    'description',
    'buildYear',
    'garage'
  ],
  emits: ['edit-listing', 'remove-listing']
}
</script>

<style lang="scss" scoped>
@import '@/assets/styling/base.scss';

// card image
.listing-img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.card-content {
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card-content-top {
    display: flex;
    justify-content: space-between;

    // Edit and Delete buttons
    .card-right {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;

      .button-icon-image {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }

  .card-content-bottom {
    .features {
      display: flex;
      margin: 1rem 0;

      .price {
        color: $font-primary;
        font-weight: 300;
      }

      .adress {
        color: $font-secondary;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .listing-img {
    height: 100%;
  }

  .card-content {
    padding: 0 0.5rem;

    h2,
    p {
      font-size: 0.8rem;
    }

    .card-content-top {
      .card-right {
        gap: 0.5rem;

        .button-icon-image {
          width: 0.8rem;
          height: 0.8rem;
        }
      }
    }

    .card-content-bottom {
      margin-top: 0.2rem;
      .features {
        display: flex;
        gap: 0.5rem;
        margin: 0.5rem 0;
        .icon {
          height: 0.8rem;
          width: 0.8rem;
        }
      }
    }
  }
}
</style>
