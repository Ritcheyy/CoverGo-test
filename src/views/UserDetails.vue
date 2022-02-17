<template>
  <div class="user-details">
    <h2>Tell us about yourself</h2>

    <form @submit.prevent="handleFormSubmit">
      <label for="name">Name</label>
      <input type="text" id="name" />

      <label for="age">Age</label>
      <input type="number" id="age" />

      <label for="country"></label>
      <select id="country">
        <option value="HKD">Hong Kong</option>
        <option value="USD">USA</option>
        <option value="AUD">Australia</option>
      </select>

      <input id="standard" type="radio" value="Standard" name="package" />
      <label for="standard">Standard</label>
      <input id="safe" type="radio" value="safe" name="package" />
      <label for="safe">Safe</label>
      <input id="super-safe" type="radio" value="super-safe" name="package" />
      <label for="super-safe">Super Safe</label>

      <h2>Your Premium is 500USD</h2>

      <div class="">
        <button type="button" @click="goBack">Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.replace("/");
    },
    handleFormSubmit() {
      this.$router.push("/summary");
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
