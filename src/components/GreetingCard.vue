<template>
  <div class="greeting-card">
    <h2>Hello There!</h2>
    <p>Let's buy some insurance. It is going to take only few steps</p>
    <button class="start-btn" @click="startForm">Start</button>
  </div>
</template>

<script>
export default {
  methods: {
    startForm() {
      this.$router.push("/user");
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
