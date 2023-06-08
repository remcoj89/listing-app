<template>
  <!-- Header with search bar -->
  <keep-alive>
    <AppHeader
      @sort-by-price="setSelectedComponend('filtered-by-price')"
      @sort-by-size="setSelectedComponend('filtered-by-size')"
      @unordered-list="setSelectedComponend('unordered-list')"
      @search-form-input="setUserInput"
      @clear-search-bar="setSelectedComponend('unordered-list')"
    />
  </keep-alive>

  <!-- Dynamic components with the sorted and unsorted listings list -->
  <component :is="selectedCompontend" v-bind="currentPropperties" />
</template>

<script>
import AppHeader from '@/components/elements/AppHeader.vue'
import FilteredByPrice from '@/components/listing-components/FilteredByPrice.vue'
import FilteredBySize from '@/components/listing-components/FilteredBySize.vue'
import UnorderedList from '@/components/listing-components/UnorderedList.vue'
import SearchForm from '@/components/listing-components/SearchForm.vue'

export default {
  name: 'GetListings',
  data() {
    return {
      listItem: [],
      selectedCompontend: 'unordered-list',
      userInput: ''
    }
  },
  components: {
    AppHeader,
    FilteredByPrice,
    FilteredBySize,
    UnorderedList,
    SearchForm
  },
  computed: {
    // Sending the search form user input as prop to the searchForm component
    currentPropperties() {
      if (this.selectedCompontend === 'search-form') {
        return { newInput: this.userInput }
      }
      return null
    }
  },
  methods: {
    // Activate the selected componend
    setSelectedComponend(cmp) {
      this.selectedCompontend = cmp
    },
    setUserInput(input) {
      this.selectedCompontend = 'search-form'
      this.userInput = input
    }
  }
}
</script>
