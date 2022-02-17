import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transactionSummary: null,
  },
  getters: {
    transactionData: (state) => state.transactionSummary,
  },
  mutations: {
    SET_TRANSACTION_SUMMARY: (state, payload) => (state.transactionSummary = payload),
  },
  actions: {
    saveTransactionSummary(context, payload) {
      context.commit("SET_TRANSACTION_SUMMARY", payload);
    },
  },
});
