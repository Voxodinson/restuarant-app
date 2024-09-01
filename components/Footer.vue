<template>
  <div class="w-full flex items-center justify-center bg-black h-[40vh]">
    <div class="w-[80%] flex items-start justify-between">
      <div class="flex flex-col items-start justify-start gap-4">
        <div class="flex items-center justify-center gap-2">
          <NuxtLink to="/">
            <img src="../assets/images/logo-white.png" alt="logo" />
          </NuxtLink>
          <h1 class="font-bold text-[18px] text-white">POKE NOW.</h1>
        </div>
        <ul
          class="*:capitalize primary flex gap-6 *:cursor-pointer *:text-white"
        >
          <li>
            <NuxtLink to="/" class="hover:text-[#F6A200]">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products/productsPage" class="hover:text-[#F6A200]"
              >Menu</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/ourStory" class="hover:text-[#F6A200]"
              >Out story</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/locations/restaurantLocation"
              class="hover:text-[#F6A200]"
              >Location</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/giftCard" class="hover:text-[#F6A200]"
              >gift card</NuxtLink
            >
          </li>
        </ul>
        <span class="text-white font-thin text-[14px]"
          >© 2022 Brand, Inc. • Privacy • Terms • Sitemap</span
        >
      </div>
      <div class="flex flex-col justify-end items-end gap-4">
        <div class="flex gap-4">
          <button class="primary-button-outline">Order online</button>
          <button class="primary-button">Bookng table</button>
        </div>
        <NuxtLink class="text-white"
          >848 King Street, Mesa, AZ 85201, Boston, USA</NuxtLink
        >
        <NuxtLink class="text-white">info@pokebar.com</NuxtLink>
        <SocailMediaLink />
      </div>
    </div>
  </div>
</template>

<script setup>
import SocailMediaLink from "./SocailMediaLink.vue";
</script>

<style scoped>
.router-link-active {
  color: #f6a200;
}
</style>
