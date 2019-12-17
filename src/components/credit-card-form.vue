<template>
  <div class="credit-card-form">
    <CreditCardFormInput
      label="Card Number"
      input-type="number"
    />
  </div>
</template>

<script>
import CreditCardFormInput from '@/components/credit-card-form-input';

export default {
  name: 'CreditCardForm',
  components: {
    CreditCardFormInput,
  },
  data() {
    return {
      creditCardNumber: '',
    };
  },
};
</script>

<style lang="scss" scoped>

.credit-card-form {
  background-color: white;
  padding: 24px;
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 24px 0px rgba(143,141,143,1);
  -moz-box-shadow: 5px 5px 24px 0px rgba(143,141,143,1);
  box-shadow: 5px 5px 24px 0px rgba(143,141,143,1);
}

</style>
