<template>
  <div class="user-details">
    <h2>Tell us about yourself</h2>
    <user-details-form />
  </div>
</template>

<script>
import UserDetailsForm from "@/components/UserDetailsForm";
export default {
  components: {
    UserDetailsForm,
  },
};
</script>
