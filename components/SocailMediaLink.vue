<template>
  <div class="w-fit flex items-center justify-center gap-4">
    <div v-for="(logo, index) in mediasLogo" :key="index">
      <NuxtLink
        class="cursor-pointer group w-[50px]"
        :style="{ backgroundColor: logo.color }"
      >
        <img :src="logo.logo" class="group-hover:scale-125 transition" alt="" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { mediaLogo1, mediaLogo2, mediaLogo3, mediaLogo4 } from "~/content";
const mediasLogo = [
  {
    logo: mediaLogo1,
    color: "#4267B2",
  },
  {
    logo: mediaLogo2,
    color: "#108AF5",
  },
  {
    logo: mediaLogo3,
    color: "#171A1F",
  },
  {
    logo: mediaLogo4,
    color: "#DE3B40",
  },
];
</script>

<style lang="scss" scoped></style>
