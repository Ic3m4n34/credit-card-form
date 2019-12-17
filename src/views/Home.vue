<template>
  <div class="home">
    <CreditCard />
    <CreditCardForm />
  </div>
</template>

<script>
import CreditCard from '@/components/credit-card';
import CreditCardForm from '@/components/credit-card-form';

export default {
  name: 'home',
  components: {
    CreditCard,
    CreditCardForm,
  },
};
</script>

<style lang="scss" scoped>
  .home {
    max-width: 520px;
    width: 100%;
    margin: auto;
  }
</style>
