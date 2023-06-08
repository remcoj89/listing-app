<template>
  <dialog-box
    v-show="showDialogModal"
    @confirm-delete="showDialog('yes')"
    @return-home="showDialog('no')"
  />
  <section v-for="list in listItem" :key="list.id">
    <router-link :to="`/details/${list.id}`">
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
  name: 'un-ordered-list',
  data() {
    return {
      listItem: []
    }
  },
  mounted() {
    this.getAllListings()
  },
  computed: {
    // Open the DialogModal from Stores
    ...mapWritableState(useModalStore, {
      showDialogModal: 'isOpen'
    })
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
</style>
