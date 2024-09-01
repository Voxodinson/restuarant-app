<template>
  <div
    class="flex flex-col h-[300px] w-full relative rounded-md shadow-md justify-end"
  >
    <div class="absolute top-[-45%] w-full flex items-center justify-center">
      <div class="w-[219px] h-[219px] shadow-lg rounded-full overflow-hidden">
        <img :src="image" alt="" class="w-full h-full object-cover" />
      </div>
    </div>
    <div class="flex flex-col h-[70%] w-full p-4 justify-between">
      <div class="">
        <h1 class="font-bold">{{ name }}</h1>
        <p class="text-[.8rem] mt-2">{{ ingredient }}</p>
      </div>
      <button class="primary-button" v-if="orderButton">Order Now</button>
      <div class="flex w-full items-center justify-between" v-if="showButton">
        <div class="">
          <h3 class="text-[18px] font-semibold">${{ price }}</h3>
        </div>
        <button
          @click="clickHandler"
          class="primary-button-outline w-[200px] capitalize"
        >
          add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
    default: "",
  },
  image: {
    type: String,
    required: true,
    default: "",
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  ingredient: {
    type: String,
    required: false,
    default: "",
  },
  orderButton: {
    type: Boolean,
    required: false,
    default: false,
  },
  showButton: {
    type: Boolean,
    required: false,
    default: false,
  },
  clickHandler: {
    type: Function,
    required: false,
  },
});
</script>

<style lang="scss" scoped></style>
