<template>
  <div class="overlay">
    <div class="dialog">
      <div class="dialog_content">
        <h2 class="dialog_title">Delete this Listing</h2>
        <div class="dialog_description">
          <p>Are you sure you want to delete this listing?</p>
          <p>This action can not be undone.</p>
        </div>
      </div>
      <div class="dialog-buttons">
        <base-button mode="button-primary" @click.prevent="confirm">Yes, Delete</base-button>
        <base-button mode="button-go-back" @click.prevent="cancel">Go Back</base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'removeAlert',
  emits: ['return-home', 'confirm-delete', 'display-dialog'],
  methods: {
    confirm() {
      this.$emit('confirm-delete')
      this.$emit('display-dialog')
    },
    cancel() {
      this.$emit('return-home')
      this.$emit('display-dialog')
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/styling/style.scss';

.overlay {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.249);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .dialog {
    padding: 30px 0;
    width: 50vw;
    margin: 20% auto 0;
    background-color: white;
    border-radius: 15px;
  }
  .dialog_content {
    width: 100%;
    text-align: center;
    .dialog_description {
      margin: 2rem 0;
    }
  }
  .dialog-buttons {
    width: 70%;
    height: 30%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    button {
      justify-content: center;
    }
  }
}

@media only screen and (max-width: 600px) {
  .overlay {
    .dialog {
      width: 90%;
      margin: 60% auto 0;
    }
  }
}
</style>
