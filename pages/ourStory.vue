<template>
  <div class="w-full flex items-center justify-center flex-col">
    <div class="w-full relative h-fit">
      <div class="w-full">
        <img
          src="../assets/images/ourstory_section_image.png"
          class="w-full"
          alt=""
        />
      </div>
      <div class="container h-full absolute top-[50%] left-0">
        <div
          class="w-[50%] bg-white rounded-md shadow-md p-[50px] flex flex-col gap-6"
        >
          <div class="container">
            <h1 class="text-[40px]">Our story begins</h1>
          </div>
          <p>
            At Poke Now, we believe fast food should be fresh food. From our
            premium ingredients to our exceptional service, eating healthy has
            never been easier—or more enjoyable!
          </p>
          <h3 class="text-[24px] font-semibold">What's poke</h3>

          <p>
            Poke is a traditional Hawaiian dish that typically consists of diced
            raw fish (such as tuna or salmon) marinated in soy sauce and other
            flavorful ingredients. It is often served over a bed of rice and
            topped with various toppings like seaweed, cucumber, avocado, and
            sesame seeds.
          </p>
          <div class="container">
            <button class="primary-button w-[200px]">Order now</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full h-[120vh] mt-[10vh] flex items-center justify-center overflow-hidden relative"
    >
      <div
        class="w-[50%] h-full flex flex-col gap-6 items-start justify-center"
      >
        <h1 class="text-[48px] font-semibold">
          Traditional Heritage, <br />
          Modern Result
        </h1>
        <p>
          One of the reasons for poke's popularity is its versatility. While the
          traditional version remains a favorite, there are now numerous
          variations available, allowing people to customize their poke bowls
          according to their preferences.
        </p>
      </div>
      <div
        class="w-[600px] h-[600px] border-2 relative right-[-20%] border-yellow-300 rounded-full *:w-[270px] *:h-[270px] *:rounded-full *:overflow-hidden animate-orbit"
      >
        <div class="absolute left-[-30px] top-[-30px]">
          <img :src="foodImage1" alt="" class="w-full h-full object-cover" />
        </div>

        <div class="absolute right-[-30px] top-[-30px]">
          <img :src="foodImage2" alt="" class="w-full h-full object-cover" />
        </div>

        <div class="absolute right-[-30px] bottom-[-30px]">
          <img :src="foodImage3" alt="" class="w-full h-full object-cover" />
        </div>

        <div class="absolute left-[-30px] bottom-[-30px]">
          <img :src="foodImage4" alt="" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    <LocationCard />

    <div class="w-full pl-[5%] h-[85vh] pt-10">
      <FollowUs />
    </div>
  </div>
</template>

<script setup>
import { foodImage1, foodImage2, foodImage3, foodImage4 } from "~/content";
</script>

<style scoped>
@keyframes orbit {
  100% {
    transform: rotate(360deg);
  }
}

.animate-orbit {
  animation: orbit 30s linear infinite;
}
</style>
