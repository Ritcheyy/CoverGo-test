<template>
  <div>
    <h2>Summary</h2>
    <h3>{{ transactionData.name }}</h3>

    <div>
      <p>Name: {{ transactionData.name }}</p>
      <p>Age: {{ transactionData.age }}</p>
      <p>Where do you live: {{ transactionData.country }}</p>
      <p>Package: {{ transactionData.packageName }}</p>
      <p>
        Premium: {{ transactionData.premiumAmount
        }}{{ transactionData.currency }}
      </p>
    </div>

    <div class="">
      <button type="button" @click="goBack">Back</button>
      <button type="button" @click="finalizeTransaction">Buy</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      transactionData: "transactionData",
    }),
  },
  methods: {
    goBack() {
      this.$router.replace("/user");
    },
    finalizeTransaction() {
      alert("Thank you for buying");
      this.$router.push("/");
      this.$store.dispatch("saveTransactionSummary", null);
    },
  },
};
</script>

<style scoped></style>
