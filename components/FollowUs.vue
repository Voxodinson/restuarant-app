<template>
  <div
    class="w-[90%] lg:w-full flex items-center justify-center lg:justify-between h-full overflow-hidden flex-col xl:flex-row"
  >
    <div class="xl:w-[50%] w-full flex h-full items-center">
      <div class="w-full flex flex-col gap-4">
        <h2 class="text-[40px] font-semibold">Follow us</h2>
        <p>@pokebarboston</p>
        <p>
          To stay updated with the latest news, promotions, and <br />
          offerings from the poke restaurant, make sure to follow <br />
          us social media accounts. Don't miss out on any updates
        </p>
        <SocailMediaLink />
      </div>
    </div>
    <GridImage />
  </div>
</template>

<script setup>
import GridImage from "./GridImage.vue";
import SocailMediaLink from "./SocailMediaLink.vue";
</script>

<style lang="scss" scoped></style>
