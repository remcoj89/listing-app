<template>
  <div :type="type" :class="mode" :id="id">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  props: ['type', 'mode', 'id']
}
</script>

<style lang="scss" scoped>
@import '@/assets/styling/base.scss';

.card-item {
  padding: 0.8rem;
  border: none;
  margin: 0 auto 1rem;
  gap: 1rem;
  background-color: $background2;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px darken($background1, 5%);
  display: grid;
  grid-template-columns: 25% 75%;
  text-align: left;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 2px 2px darken($background1, 10%);
  }
}

.result-card {
  padding: 1rem;
  border: none;
  margin: 0 auto 1rem;
  gap: 1rem;
  background-color: $background2;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px darken($background1, 5%);
  text-align: center;
}

// Mobile styling
@media only screen and (max-width: 600px) {
  .card-item {
    padding: 0.5rem;
    margin: 1rem;
    gap: 0;
  }
}
</style>
