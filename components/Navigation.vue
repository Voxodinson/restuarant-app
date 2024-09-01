<template>
  <div class="h-[10vh] relative flex items-center justify-center">
    <div class="w-[80%] flex items-center justify-between">
      <div class="flex items-center justify-center gap-2">
        <NuxtLink to="/">
          <img src="../assets/images/logo.png" alt="logo" />
        </NuxtLink>
        <h1 class="font-bold text-[18px]">POKE NOW.</h1>
      </div>
      <div class="w-[60%] flex items-center justify-between">
        <ul class="*:capitalize primary flex gap-6 *:cursor-pointer">
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
        <div class="flex gap-2">
          <button class="outline-button-black border-none">Order online</button>
          <button class="button-black" @click="resevationFunc()">
            Booking table
          </button>
        </div>
      </div>
    </div>
    <div
      class="absolute top- w-full h-fit z-50"
      id="resevation"
      v-if="isResevation"
    >
      <TableReservation @close-login="resevationFunc" />
    </div>
  </div>

  <Teleport to="#resevation"> </Teleport>
</template>

<script setup>
const isResevation = ref(false);
import TableReservation from "./customerInfos/TableReservation.vue";
const resevationFunc = () => {
  isResevation.value = !isResevation.value;
};
</script>

<style scoped>
.router-link-active {
  color: #f6a200;
}
</style>
