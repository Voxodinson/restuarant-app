<template>
  <div
    class="w-[50%] h-[100vh] overflow-hidden lg:h-fit grid grid-cols-2 lg:grid-cols-3 gap-4"
  >
    <div class="flex flex-col gap-4 *:rounded-md *:h-[200px] *:object-cover">
      <img :src="sliceImage1" alt="" />
      <img :src="sliceImage2" alt="" />
      <img :src="sliceImage3" alt="" />
      <img :src="sliceImage4" alt="" />
      <img :src="sliceImage8" alt="" />
      <img :src="sliceImage11" alt="" />
    </div>
    <div
      class="flex flex-col gap-4 *:rounded-md *:h-[200px] *:object-cover lg:mt-14"
    >
      <img :src="sliceImage5" alt="" />
      <img :src="sliceImage6" alt="" />
      <img :src="sliceImage7" alt="" />
      <img :src="sliceImage8" alt="" />
      <img :src="sliceImage11" alt="" />
      <img :src="sliceImage8" alt="" />
    </div>
    <div class="flex flex-col gap-4 *:rounded-md *:h-[200px] *:object-cover">
      <img :src="sliceImage10" alt="" />
      <img :src="sliceImage8" alt="" />
      <img :src="sliceImage10" alt="" />
      <img :src="sliceImage11" alt="" />
      <img :src="sliceImage8" alt="" />
      <img :src="sliceImage5" alt="" />
    </div>
  </div>
</template>

<script setup>
import {
  sliceImage1,
  sliceImage3,
  sliceImage2,
  sliceImage4,
  sliceImage5,
  sliceImage6,
  sliceImage7,
  sliceImage8,
  sliceImage10,
  sliceImage11,
} from "~/content";
</script>

<style lang="scss" scoped></style>
