<template>
  <div class="credit-card-logo">

  </div>
</template>

<script>
export default {
  name: 'CreditCardLogo',
  props: {
    activeCreditCard: {
      type: String,
      default: 'default',
    },
  },
};
</script>

<style lang="scss" scoped>

.credit-card-logo {}

</style>
