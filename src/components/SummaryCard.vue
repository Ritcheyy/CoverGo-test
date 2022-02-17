<template>
  <div>
    <h2>Summary</h2>
    <h3>UserName,</h3>

    <div>
      <p>Name: John</p>
      <p>Age: 50</p>
      <p>Where do you live: USA</p>
      <p>Package: Standard</p>
      <p>Premium: 500USD</p>
    </div>

    <div class="">
      <button type="button" @click="goBack">Back</button>
      <button type="button">Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.replace("/user");
    },
  },
};
</script>

<style scoped></style>
