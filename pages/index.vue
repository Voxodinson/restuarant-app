<template>
  <div class="w-full flex flex-col items-center justify-center">
    <div class="w-full h-[90vh] relative">
      <img
        src="../assets/images/section_image.png"
        alt=""
        class="w-full h-full"
      />
      <div class="absolute top-0 left-[10vw] h-full flex items-center">
        <div
          class="flex flex-col gap-10 py-[45px] shadow-lg px-[36px] bg-white rounded-lg"
        >
          <h1 class="font-medium text-[48px]">
            ASIAN INSPIRED <br />
            BOWLS
          </h1>
          <div class="flex flex-col gap-5">
            <p class="text-gray-600">Fresh, healthy, delicious</p>
            <button class="primary-button w-[200px]">Order Now</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Section explaining what poke is -->
    <div class="container">
      <div
        class="lg:w-[40%] w-[90%] flex flex-col gap-6 justify-center items-center py-6"
      >
        <h2 class="text-[40px]">What's poke</h2>
        <p class="text-justify">
          Poke is a traditional Hawaiian dish that typically consists of diced
          raw fish (such as tuna or salmon) marinated in soy sauce and other
          flavorful ingredients. It is often served over a bed of rice and
          topped with various toppings like seaweed, cucumber, avocado, and
          sesame seeds. Poke has gained popularity worldwide and is now enjoyed
          in many different variations and flavors.
        </p>
      </div>
    </div>
    <!-- Section displaying signature bowls -->
    <div class="w-[90%] flex items-center flex-col">
      <h1 class="text-[40px] lg:mb-[30vh] mb-[20vh]">Signature Bowls</h1>
      <div
        class="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-y-40 gap-4 xl:gap-4 items-center justify-center"
      >
        <FoodCard
          v-for="food in signatureFoods"
          :key="food.id"
          :name="food.name"
          :ingredient="food.ingredient"
          :price="food.price"
          :image="food.image"
          :orderButton="false"
          :showButton="true"
        />
      </div>
      <div class="mt-10">
        <button class="outline-button-black w-[200px]">Explore more</button>
      </div>
    </div>
    <!-- Customer feedback component -->
    <CustomerFeedback />

    <!-- location componentL -->

    <LocationCard />

    <div
      class="w-full lg:pl-[5%] h-fit lg:h-[85vh] pt-10 flex items-center justify-center"
    >
      <FollowUs />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import CustomerFeedback from "~/components/customerFeedback.vue";
import FollowUs from "~/components/FollowUs.vue";
import FoodCard from "~/components/foods/FoodCard.vue";
import FoodData from "~/content/data/FoodsData.json"; // Correct the path as needed
// Prepare the data for rendering
const data = FoodData;

// Create a computed property for signature foods
const signatureFoods = computed(() => {
  return data.filter((product) => product.type === "signature").slice(0, 4);
});
</script>

<style lang="scss" scoped></style>
