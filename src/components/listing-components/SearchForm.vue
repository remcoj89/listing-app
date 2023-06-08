<template>
  <dialog-box
    v-show="showDialogModal"
    @confirm-delete="showDialog('yes')"
    @return-home="showDialog('no')"
  />
  <base-card class="result-section" mode="result-card">
    <div v-if="this.filterInput.length === 0" id="no-result">
      <h2>Sorry there are {{ this.filterInput.length }} listings</h2>
      <img src="@/assets/images/img_empty_houses@3x.png" alt="Sorry no results" />
    </div>
    <div v-else>
      <h2>Result: {{ this.filterInput.length }} listings</h2>
    </div>
  </base-card>
  <section v-for="list in filterInput" :key="list.id">
    <router-link :to="`details/${list.id}`">
      <listing-card
        @edit-listing="editListing(list.id)"
        @remove-listing="removeListing(list.id)"
        :id="list.id"
        :street="list.location.street"
        :houseNumber="list.location.houseNumber"
        :price="list.price"
        :image="list.image"
        :zip="list.location.zip"
        :city="list.location.city"
        :size="list.size"
        :bedroom="list.rooms.bedrooms"
        :bathroom="list.rooms.bathrooms"
        :madeByMe="list.madeByMe"
        :description="list.description"
        :buildYear="list.constructionYear"
        :garage="list.hasGarage"
      />
    </router-link>
  </section>
</template>

<script>
import { getAllListings, DeleteListing } from '@/services/ListingService'
import { mapWritableState } from 'pinia'
import useModalStore from '@/stores/modal'

export default {
  name: 'search-form',
  data() {
    return {
      listItem: [],
      userInput: null
    }
  },
  mounted() {
    this.getAllListings()
  },
  props: ['new-input'],
  computed: {
    // Open the DialogModal from Stores
    ...mapWritableState(useModalStore, {
      showDialogModal: 'isOpen'
    }),
    // filter list with user input from search form
    filterInput() {
      return this.listItem.filter((item) =>
        item.location.city.toLowerCase().includes(this.newInput.toLowerCase())
      )
    }
  },
  methods: {
    // Get Data from Servise
    getAllListings() {
      getAllListings().then((response) => {
        this.listItem = response
      })
    },
    // Edit listing by id
    editListing(id) {
      this.$router.push({
        name: 'editListing',
        params: {
          id
        }
      })
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
        const resIndex = this.listItem.findIndex((res) => res.id === this.userInput)
        this.listItem.splice(resIndex, 1)
        DeleteListing(this.userInput)
        getAllListings()
        this.showDialogModal = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  max-width: 1024px;
  margin: 0 auto;
}

.result-section {
  max-width: 1024px;
  margin: 0 auto;
  img {
    margin-top: 3rem;
    width: 60%;
    height: 60%;
  }
}
</style>
