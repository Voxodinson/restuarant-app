<template>
  <div
    class="w-full flex flex-col h-fit shadow-md rounded-md overflow-hidden gap-4"
  >
    <div class="w-full h-[221px]">
      <img :src="image" alt="" class="w-full h-full" />
    </div>
    <div class="flex flex-col gap-4 px-4 pb-4">
      <div class="w-full">
        <h3 class="font-semibold text-[16px]">{{ location }}</h3>
      </div>
      <div class="flex flex-col gap-2">
        <span class=" ">{{ openTime }}</span>
        <span>{{ sundayOpenTime }}</span>
      </div>
      <div
        class="flex flex-col items-start gap-2 *:flex *:items-start *:justify-center *:gap-4"
      >
        <div class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#6E7787"
          >
            <path
              d="M757.23-160q-101.15 0-207.38-50.65-106.23-50.66-197.39-142.2-91.15-91.53-141.81-197.38Q160-656.08 160-757.23q0-18.33 12-30.55Q184-800 202-800h98.92q16.31 0 28.46 10.27 12.16 10.27 16.47 26.35L365.69-668q2.77 16.77-1 29.31t-13.31 20.54l-87.76 81.84q24.61 44.69 54.42 83.04 29.81 38.35 63.58 72.65 34.84 34.85 75 64.81 40.15 29.96 88.15 56.58l85.54-87.08q9.77-10.54 21.96-13.88 12.19-3.35 26.96-1.35l84.15 17.23q16.31 4 26.47 16.43Q800-315.46 800-299.38V-202q0 18-12.22 30t-30.55 12ZM244.85-573.85l76.77-70.61q3.84-3.08 5-8.46 1.15-5.39-.39-10l-17.77-84.77q-1.54-6.16-5.38-9.23-3.85-3.08-10-3.08H211q-4.62 0-7.69 3.08-3.08 3.07-3.08 7.69 1.15 41 12.85 85.61 11.69 44.62 31.77 89.77Zm338 333.39q40.53 20.08 86.42 29.69 45.88 9.62 79.96 10.31 4.62 0 7.69-3.08 3.08-3.08 3.08-7.69v-80.31q0-6.15-3.08-10-3.07-3.84-9.23-5.38l-74-15.16q-4.61-1.54-8.07-.38-3.47 1.15-7.31 5l-75.46 77Zm-338-333.39Zm338 333.39Z"
            />
          </svg>
          <span class="text-[#6E7787]">{{ phone }}</span>
        </div>
        <div class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#6E7787"
          >
            <path
              d="M480.14-490.77q26.71 0 45.59-19.02 18.89-19.02 18.89-45.73 0-26.71-19.03-45.6Q506.57-620 479.86-620q-26.71 0-45.59 19.02-18.89 19.02-18.89 45.73 0 26.71 19.03 45.6 19.02 18.88 45.73 18.88ZM480-172.92q112.77-98.16 178.31-199.66t65.54-175.57q0-109.77-69.5-181.2-69.5-71.42-174.35-71.42t-174.35 71.42q-69.5 71.43-69.5 181.2 0 74.07 65.54 175.57T480-172.92Zm0 53.69Q339-243.92 267.58-351.81q-71.43-107.88-71.43-196.34 0-126.93 82.66-209.39Q361.46-840 480-840q118.54 0 201.19 82.46 82.66 82.46 82.66 209.39 0 88.46-71.43 196.34Q621-243.92 480-119.23Zm0-436.15Z"
            />
          </svg>
          <span class="text-[#6E7787]">{{ email }}</span>
        </div>
      </div>
      <div class="w-full flex gap-2">
        <NuxtLink
          :to="link"
          class="primary-button-outline w-[150px] text-center"
          >Delivery</NuxtLink
        >
        <NuxtLink class="primary-button-outline w-[150px] text-center"
          >Pickup</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  openTime: {
    type: String,
    required: true,
  },
  sundayOpenTime: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped></style>
