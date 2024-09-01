<template>
  <div class="w-full flex flex-col items-center justify-center">
    <div class="w-full">
      <img src="../../assets/images/location-image.png" class="w-full" alt="" />
    </div>
    <div class="w-[90%] flex flex-col gap-6 py-10">
      <div class="w-full flex items-center justify-center">
        <h1 class="text-[40px] font-semibold">Locations & Hours</h1>
      </div>
      <div
        class="w-full grid grid-cols-3 gap-4 items-center justify-center mt-4"
      >
        <StoreLocationCard
          v-for="(location, index) in locationDatas"
          :key="index"
          :image="location.image"
          :location="location.location"
          :phone="location.phone"
          :email="location.email"
          :open-time="location.openTime"
          :sundayOpenTime="location.sundayOpenTime"
          :link="`/locations/${location.id}`"
        />
      </div>
    </div>
    <div class="w-full pl-[5%] h-[80vh]">
      <FollowUs />
    </div>
  </div>
</template>

<script setup>
import StoreLocationCard from "~/components/StoreLocationCard.vue";
import locationDatas from "../../content/data/storeLocationDatas.json";
import FollowUs from "~/components/FollowUs.vue";
</script>

<style lang="scss" scoped></style>
