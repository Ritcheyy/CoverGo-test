<template>
  <div>
    <form @submit.prevent="handleFormSubmit">
      <label for="name">Name</label>
      <input v-model="name" type="text" id="name" />

      <label for="age">Age</label>
      <input v-model="age" type="number" id="age" />

      <label for="country"></label>
      <select v-model="country" id="country">
        <option value="Hong Kong">Hong Kong</option>
        <option value="USA">USA</option>
        <option value="Australia">Australia</option>
      </select>

      <input
        id="standard"
        v-model="packageName"
        name="package"
        type="radio"
        value="Standard"
      />
      <label for="standard">Standard</label>
      <input
        id="safe"
        v-model="packageName"
        type="radio"
        value="Safe"
        name="package"
      />
      <label for="safe">Safe</label>
      <input
        id="super-safe"
        v-model="packageName"
        type="radio"
        value="Super Safe"
        name="package"
      />
      <label for="super-safe">Super Safe</label>

      <h2>Your Premium is {{ premiumAmount }}{{ currency }}</h2>

      <div class="">
        <button type="button" @click="goBack">Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      country: "",
      packageName: "",
    };
  },
  computed: {
    currency() {
      if (this.country) {
        switch (this.country) {
          case "Hong Kong":
            return "HKD";
          case "USA":
            return "USD";
          case "Australia":
            return "AUD";
        }
      }
      return null;
    },
    premiumAmount() {
      // If no package has been selected
      if (!this.packageName) {
        if (this.country) {
          return 10 * this.age * this.getRate();
        } else {
          return 10 * this.age;
        }
      } else {
        // if a package has been selected
        return 10 * this.age * this.getRate() * this.getPackageRate();
      }
    },
  },
  mounted() {
    // Persist data if data exist
    const transactionData = this.$store.getters.transactionData;
    if (transactionData) {
      this.name = transactionData.name;
      this.age = transactionData.age;
      this.country = transactionData.country;
      this.packageName = transactionData.packageName;
    }
  },
  methods: {
    goBack() {
      this.$router.replace("/");
    },
    async handleFormSubmit() {
      if (this.age > 100) {
        this.$router.replace("/age-error");
      } else {
        // Keep in store
        const transactionData = {
          name: this.name,
          age: this.age,
          country: this.country,
          packageName: this.packageName,
          currency: this.currency,
          premiumAmount: this.premiumAmount,
        };
        await this.$store.dispatch("saveTransactionSummary", transactionData);
        this.$router.push("/summary");
      }
    },
    getRate() {
      if (this.country && this.currency) {
        switch (this.currency) {
          case "HKD":
            return 1;
          case "USD":
            return 2;
          case "AUD":
            return 3;
        }
      }
      return 1;
    },
    getPackageRate() {
      if (this.packageName) {
        switch (this.packageName) {
          case "Standard":
            return 1;
          case "Safe":
            return 1 + 0.5;
          case "Super Safe":
            return 1 + 0.75;
        }
      }
      return 1;
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
}
form label,
form input {
  display: block;
  margin-bottom: 20px;
}
</style>
