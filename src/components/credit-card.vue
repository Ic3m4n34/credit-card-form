<template>
  <div class="credit-card">
    <div class="credit-card__front">
      <div class="credit-card__logos">
        <div class="credit-card__logo-container">

        </div>
        <div class="credit-card__logo-container">
          <CreditCardLogo :active-credit-card="activeCreditCard" />
        </div>
      </div>
      <div class="credir-card__number-container">
        <CreditCardNumber />
      </div>
      <div class="credit-card__info-container">
        <CreditCardHolder />
        <CreditCardExpirationDate />
      </div>
    </div>
  </div>
</template>

<script>
import CreditCardLogo from '@/components/credit-card-logo';
import CreditCardNumber from '@/components/credit-card-number';
import CreditCardHolder from '@/components/credit-card-holder';
import CreditCardExpirationDate from '@/components/credit-card-expiration-date';

export default {
  name: 'CreditCard',
  components: {
    CreditCardHolder,
    CreditCardLogo,
    CreditCardNumber,
    CreditCardExpirationDate,
  },
};
</script>

<style lang="scss" scoped>

.credit-card {}

</style>
