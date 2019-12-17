import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    creditCard: null,
  },
  getters: {
    creditCardNumber(state) {
      if (!state.creditCard) return '';
      return state.creditCard.number;
    },
  },
  mutations: {
    SET_CREDIT_CARD_NUMBER(state, creditCardNumber) {
      state.creditCard.number = creditCardNumber;
    },
  },
  actions: {
    setCreditCardNumber(context, creditCardNumber) {
      context.commit('SET_CREDIT_CARD_NUMBER', creditCardNumber);
    },
  },
});
