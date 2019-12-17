<template>
  <div class="credit-card-form-input">
    <label
      :for="cookedLabel"
      class="credit-card-form-input__label"
    >
      {{ label }}
    </label>
    <input
      :id="cookedLabel"
      :type="cookedInputType"
      class="credit-card-form-input__input"
    />
  </div>
</template>

<script>
export default {
  name: 'CreditCardFormInput',
  props: {
    label: {
      type: String,
      default: '',
    },
    inputType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      inputTypeError: {
        name: 'inputTypeError',
        message: 'unkown inputType',
      },
    };
  },
  computed: {
    cookedInputType() {
      if (this.inputType === 'text' || this.inputType === 'number') return this.inputType;
      throw this.inputTypeError;
    },
    cookedLabel() {
      return this.label.replace(' ', '').toLowerCase();
    },
  },
};
</script>

<style lang="scss" scoped>

.credit-card-form-input {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__input {
    width: 100%;
    border-radius: 5px;
    border: 1px solid #d7dbd8;
    -moz-appearance:textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &__label {
    font-size: 14px;
  }
}

</style>
