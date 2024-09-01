<template>
  <div>
    <Navigation />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Footer from "~/components/Footer.vue";
import Navigation from "~/components/Navigation.vue";
</script>

<style scoped></style>
