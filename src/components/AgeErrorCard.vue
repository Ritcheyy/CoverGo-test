<template>
  <div class="greeting-card">
    <h2>Ooops!</h2>
    <p>
      Your age is over our accepted limit. We are sorry but cannot insure you
      now
    </p>
    <button class="start-btn" @click="startForm">Ok :(</button>
  </div>
</template>

<script>
export default {
  methods: {
    startForm() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.greeting-card {
  background-color: #e6e6e6;
  height: 300px;
  width: 500px;
}
</style>
