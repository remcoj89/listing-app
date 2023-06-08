<template>
  <div class="main-container">
    <div class="edit-listing">
      <!-- Back to home page button -->
      <base-button class="icons" mode="button-go-back-arrow" @click="backHome">
        <img class="icon" src="@/assets/icons/ic_back_grey@3x.png" alt="" />
        <p>Back to overview</p>
      </base-button>
      <!-- Form input -->

      <form @submit="submit">
        <!-- street name -->
        <div
          class="field-controle input-field"
          :class="{
            invalid: streetNameValidity === 'invalid',
            valid: streetNameValidity === 'valid'
          }"
        >
          <label for="street-name"
            >Street name*
            <p v-if="streetNameValidity === 'invalid'">Please enter a valid name</p>
            <input
              class="field"
              name="street-name"
              type="text"
              placeholder="Enter Street Name"
              v-model.trim="streetName"
              @blur="validateInput('streetName')"
              required
            />
          </label>
        </div>

        <!-- House Number + addition -->
        <div class="double-field">
          <!-- House Number-->
          <div
            class="field-controle"
            :class="{
              invalid: houseNumberValidity === 'invalid',
              valid: houseNumberValidity === 'valid'
            }"
          >
            <label for="house-number"
              >House Number*
              <p v-if="houseNumberValidity === 'invalid'">Please enter a valid house number</p>
              <input
                class="field"
                name="house-number"
                type="number"
                min="0"
                placeholder="Enter house number"
                v-model="houseNumber"
                @blur="validateInput('houseNumber')"
                required
              />
            </label>
          </div>
          <!-- addition-->
          <div
            class="field-controle grid-item-right"
            :class="{ valid: additionValidity === 'valid' }"
          >
            <label for="addition"
              >Addition (optional)
              <input
                class="field"
                name="addition"
                type="text"
                placeholder="e.g.A"
                v-model.trim="addition"
                @blur="validateInput('addition')"
              />
            </label>
          </div>
        </div>

        <!-- Postal code -->
        <div
          class="field-controle input-field"
          :class="{
            invalid: zipValidity === 'invalid',
            valid: zipValidity === 'valid'
          }"
        >
          <label for="zipcode"
            >Postal code*
            <p v-if="zipValidity === 'invalid'">Please enter a valid postal code</p>

            <input
              class="field"
              name="zipcode"
              type="text"
              placeholder="e.g 1000 AAA"
              v-model.trim="zip"
              @blur="validateInput('zip')"
              required
            />
          </label>
        </div>

        <!-- City -->
        <div
          class="field-controle input-field"
          :class="{
            invalid: cityValidity === 'invalid',
            valid: cityValidity === 'valid'
          }"
        >
          <label for="city"
            >City*
            <p v-if="cityValidity === 'invalid'">Please enter a valid City Name</p>

            <input
              class="field"
              name="city"
              type="text"
              placeholder="e.g Utrecht"
              v-model.trim="city"
              @blur="validateInput('city')"
              required
            />
          </label>
        </div>

        <!-- Upload image -->
        <div class="input-field">
          <h2>Upload picture(PNG or JPG)*</h2>
          <label class="upload-box" for="upload">
            <img :src="imageUrl" class="uploading-image" alt="uploaded image" />
            <input
              name="image"
              id="upload"
              type="file"
              @change="onFileSelected"
              ref="image"
              hidden
            />
          </label>
        </div>
        <!-- Price -->
        <div
          class="field-controle input-field"
          :class="{
            invalid: priceValidity === 'invalid',
            valid: priceValidity === 'valid'
          }"
        >
          <label for="price"
            >Price*
            <p v-if="priceValidity === 'invalid'">Please enter a valid Price</p>
            <input
              class="field"
              name="price"
              type="number"
              placeholder="e.g €150.000"
              v-model="price"
              @blur="validateInput('price')"
              required
            />
          </label>
        </div>

        <!-- size and Garage -->
        <div class="double-field">
          <!-- size-->
          <div
            class="field-controle"
            :class="{
              invalid: sizeValidity === 'invalid',
              valid: sizeValidity === 'valid'
            }"
          >
            <label for="size"
              >Size*
              <p v-if="sizeValidity === 'invalid'">Please enter a valid size</p>
              <input
                class="field"
                name="size"
                type="number"
                min="1"
                placeholder="Enter amount"
                v-model="size"
                @blur="validateInput('size')"
                required
              />
            </label>
          </div>
          <div
            class="field-controle input-field"
            :class="{
              invalid: garageValidity === 'invalid',
              valid: garageValidity === 'valid'
            }"
          >
            <!-- garage-->
            <label for="garage"
              >Garage*
              <p v-if="garageValidity === 'invalid'">Please select Yes or No</p>
              <select
                class="field"
                name="garage"
                v-model="garage"
                @blur="validateInput('garage')"
                required
              >
                <option selected value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </label>
          </div>
        </div>

        <!-- Bedrooms and Bathrooms -->
        <div
          class="field-controle input-field"
          :class="{
            invalid: bedroomValidity === 'invalid',
            valid: bedroomValidity === 'valid'
          }"
        >
          <label for="bedroom"
            >Bedrooms*
            <p v-if="bedroomValidity === 'invalid'">Please select number of bedrooms</p>
            <input
              class="field"
              name="bedroom"
              type="number"
              min="1"
              v-model="bedroom"
              @blur="validateInput('bedroom')"
              required
            />
          </label>
        </div>

        <div
          class="field-controle input-field"
          :class="{
            invalid: bathroomValidity === 'invalid',
            valid: bathroomValidity === 'valid'
          }"
        >
          <label for="bathroom"
            >Bathrooms*
            <p v-if="bedroomValidity === 'invalid'">Please select number of bathrooms</p>
            <input
              class="field"
              name="bathroom"
              type="number"
              min="1"
              v-model="bathroom"
              @blur="validateInput('bathroom')"
              required
            />
          </label>
        </div>

        <!-- Construction Date -->
        <div
          class="field-controle input-field"
          :class="{
            invalid: constructionYearValidity === 'invalid',
            valid: constructionYearValidity === 'valid'
          }"
        >
          <label for="construction-date"
            >Construction Year*
            <p v-if="constructionYearValidity === 'invalid'">
              Please select number of constructionYears
            </p>
            <input
              class="field"
              name="construction-date"
              type="number"
              min="1901"
              v-model="constructionYear"
              @blur="validateInput('constructionyear')"
              required
            />
          </label>
        </div>

        <!-- Description -->
        <div
          class="field-controle input-field"
          :class="{
            invalid: descriptionValidity === 'invalid',
            valid: descriptionValidity === 'valid'
          }"
        >
          <label for="description"
            >Description*
            <p v-if="descriptionValidity === 'invalid'">Please write a valid description</p>
            <textarea
              class="field"
              name="description"
              rows="10"
              cols="30"
              placeholder="please write your description..."
              v-model.trim="description"
              @blur="validateInput('description')"
              required
            />
          </label>
        </div>

        <!-- Submit Button -->
        <base-button
          mode="button-primary"
          id="button-submit"
          type="submit"
          :disabled="reg_in_submission"
        >
          Save
        </base-button>
      </form>
    </div>
  </div>
</template>

<script>
import { getAllListings, editListing, uploadListingImage } from '@/services/ListingService'

export default {
  name: 'editListing',
  props: ['id'],
  data() {
    return {
      reg_in_submission: false,
      // Validating data
      streetNameValidity: '',
      houseNumberValidity: null,
      additionValidity: '',
      zipValidity: '',
      cityValidity: '',
      priceValidity: null,
      sizeValidity: null,
      garageValidity: null,
      bedroomValidity: null,
      bathroomValidity: null,
      constructionYearValidity: null,
      descriptionValidity: '',

      // formData
      listingId: null,
      streetName: '',
      houseNumber: '',
      addition: '',
      zip: '',
      city: '',
      price: '',
      size: '',
      garage: false,
      bedroom: '',
      bathroom: '',
      constructionYear: '',
      description: '',
      selectedFile: null,
      imageUrl: ''
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    // Fetch list data
    getList() {
      getAllListings().then((response) => {
        // Get Data by id
        response.forEach((item) => {
          if (item.id === parseInt(this.id, 10)) {
            this.listingId = item.id
            this.streetName = item.location.street
            this.houseNumber = item.location.houseNumber
            this.addition = item.location.houseNumberAddition
            this.zip = item.location.zip
            this.city = item.location.city
            this.price = item.price
            this.size = item.size
            this.garage = item.hasGarage
            this.bedroom = item.rooms.bedrooms
            this.bathroom = item.rooms.bathrooms
            this.constructionYear = item.constructionYear
            this.description = item.description
            this.imageUrl = item.image
          }
        })
      })
    },
    // Editing Data
    submit() {
      // Disabaling the submit button to prevent excessive data requests
      this.reg_in_submission = true
      // Storing the form data
      const formdata = new FormData()
      formdata.append('streetName', this.streetName)
      formdata.append('houseNumber', this.houseNumber)
      formdata.append('numberAddition', this.addition)
      formdata.append('zip', this.zip)
      formdata.append('city', this.city)
      formdata.append('price', this.price)
      formdata.append('size', this.size)
      formdata.append('hasGarage', this.garage)
      formdata.append('bedrooms', this.bedroom)
      formdata.append('bathrooms', this.bathroom)
      formdata.append('constructionYear', this.constructionYear)
      formdata.append('description', this.description)
      editListing(this.id, formdata)
      this.getList()
      this.uploadImage()
      this.$router.push(`/details/${this.id}`)
    },
    // storing the selected file in the select file property
    onFileSelected(event) {
      ;[this.selectedFile] = event.target.files
      // create url for image
      this.imageUrl = URL.createObjectURL(this.selectedFile)
    },
    // Upload Image
    uploadImage(id) {
      const formdata = new FormData()
      formdata.append('image', this.selectedFile, 'pexels-photo-1311518.jpeg')
      console.log(id, ...formdata)
      uploadListingImage(this.id, formdata)
      getAllListings()
      // redirecting to homepage
    },
    // Validating the form input
    validateInput(input) {
      if (input === 'streetName') {
        this.streetNameValidity = this.StreetName === '' ? 'invalid' : 'valid'
      } else if (input === 'houseNumber') {
        this.houseNumberValidity = this.newHouseNumber === null ? 'invalid' : 'valid'
      } else if (input === 'addition') {
        this.additionValidity = this.newAddtion === '' ? 'invalid' : 'valid'
      } else if (input === 'zip') {
        this.zipValidity = this.newZip === '' ? 'invalid' : 'valid'
      } else if (input === 'city') {
        this.cityValidity = this.newCity === '' ? 'invalid' : 'valid'
      } else if (input === 'price') {
        this.priceValidity = this.newPrice === null ? 'invalid' : 'valid'
      } else if (input === 'size') {
        this.sizeValidity = this.newSize === null ? 'invalid' : 'valid'
      } else if (input === 'garage') {
        this.garageValidity = this.newGarage === null ? 'invalid' : 'valid'
      } else if (input === 'bedroom') {
        this.bedroomValidity = this.newBedroom === null ? 'invalid' : 'valid'
      } else if (input === 'bathroom') {
        this.bathroomValidity = this.newBathroom === null ? 'invalid' : 'valid'
      } else if (input === 'constructionyear') {
        this.constructionYearValidity = this.newConstructionYear === null ? 'invalid' : 'valid'
      } else if (input === 'description') {
        this.descriptionValidity = this.newDescription === '' ? 'invalid' : 'valid'
      }
    },
    // Routing back to the home page
    backHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styling/base.scss';

.main-container {
  width: 100%;
  background-image: url('@/assets/images//img_background@3x.png');
  background-size: cover;
  background-position: center;

  .edit-listing {
    margin: 60px auto 0;
    max-width: 1000px;
    min-height: auto;
    padding: 50px 15px;
  }
}

form {
  width: 40%;

  .input-field {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .double-field {
    width: 100%;
    display: grid;
    grid-template-columns: 45% 45%;
    gap: 10%;
  }

  .field {
    border-radius: 10px;
    padding: 10px;
    border: 0.5px;
    width: 100%;
    margin: 10px 0;
  }

  .upload-box {
    display: inline-block;
    border: 2px grey dashed;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 10px 0;

    img {
      height: 100%;
      width: 100%;
    }

    #upload-image {
      height: 40%;
      width: 40%;
    }
  }

  #text-area {
    border-radius: 10px;
  }

  .valid {
    input,
    textarea {
      border: solid 2px;
      border-color: rgb(5, 186, 44);
    }
  }

  .invalid {
    label {
      p {
        color: red;
        font-weight: bold;
      }
    }

    input,
    textarea {
      border: solid 2px;
      border-color: red;
    }
  }
}

@media only screen and (max-width: 600px) {
  .main-container {
    background-position: bottom;

    .edit-listing {
      margin: 0 auto;
    }
  }

  form {
    width: 100%;

    .double-field {
      display: grid;
      grid-template-columns: 100%;
      gap: 10px;
    }

    button {
      width: 100%;
      justify-content: center;
    }
  }
}
</style>
