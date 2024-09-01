<template>
  <div class="w-full flex items-center justify-center">
    <div class="w-[90%] py-10 flex justify-between">
      <div class="w-[50%] h-full flex items-center justify-center">
        <div class="w-full p-4 border-[1px] border-gray-300 rounded-md">
          <div class="">
            <h3 class="font-semibold text-[30px]">Order summary</h3>
          </div>
          <div class="w-full flex flex-col gap-2 rounded-md">
            <div
              class="w-full flex justify-between items-center border-b-[1px] border-gray-300 py-2"
              v-for="item in data.splice(0, 4)"
              :key="item.id"
            >
              <div class="flex gap-4 items-center justify-center">
                <div
                  class="w-[80px] h-[80px] rounded-full overflow-hidden shadow-md"
                >
                  <img :src="item.image" class="w-full h-full" alt="" />
                </div>
                <div class="">
                  <h3 class="font-semibold">{{ item.name }}</h3>
                  <p
                    class="text-gray-400 w-[304px] font-thin overflow-hidden overflow-ellipsis text-nowrap"
                  >
                    {{ item.ingredient }}
                  </p>
                </div>
              </div>
              <div class="flex gap-6 items-center justify-center">
                <h3 class="font-semibold text-[16px]">${{ item.price }}</h3>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="#5f6368"
                  >
                    <path
                      d="M200-200h43.92l427.93-427.92-43.93-43.93L200-243.92V-200Zm-40 40v-100.77l527.23-527.77q6.15-5.48 13.57-8.47 7.43-2.99 15.49-2.99t15.62 2.54q7.55 2.54 13.94 9.15l42.69 42.93q6.61 6.38 9.04 14 2.42 7.63 2.42 15.25 0 8.13-2.74 15.56-2.74 7.42-8.72 13.57L260.77-160H160Zm600.77-556.31-44.46-44.46 44.46 44.46ZM649.5-649.5l-21.58-22.35 43.93 43.93-22.35-21.58Z"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="#5f6368"
                  >
                    <path
                      d="M292.31-140q-29.92 0-51.12-21.19Q220-182.39 220-212.31V-720h-40v-60h180v-35.38h240V-780h180v60h-40v507.69Q740-182 719-161q-21 21-51.31 21H292.31ZM680-720H280v507.69q0 5.39 3.46 8.85t8.85 3.46h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-720ZM376.16-280h59.99v-360h-59.99v360Zm147.69 0h59.99v-360h-59.99v360ZM280-720v520-520Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-[40%] flex flex-col gap-4 h-fit p-4 rounded-md border-[1px] border-gray-300"
      >
        <h3 class="text-[25px] font-semibold">Payment method</h3>
        <div class="">
          <button class="text-blue-400">Change payment methods</button>
          <div
            class="flex justify-between w-full items-center mt-2 p-4 border-[1px] border-[#97DB32] rounded-md"
          >
            <div class="flex items-center gap-2">
              <img
                src="../../assets/images/masterCard.png"
                class="w-[60px]"
                alt=""
              />
              <h3>Mastercard</h3>
            </div>
            <h3>**** 5987</h3>
          </div>
        </div>
        <div class="w-full gap-2 flex">
          <input
            type="text"
            placeholder="Enter discount code"
            value="Freeship"
            class="py-2 w-full px-4 rounded-lg border-[1px] text-[.8rem] border-gray-400 outline-none"
          />
          <button class="py-2 rounded-lg px-4 bg-[#F4FAF8]">Apply</button>
        </div>
        <span
          class="w-fit px-4 rounded-lg py-1 text-white bg-yellow-400 text-[.8rem]"
          >Freeship</span
        >
        <div
          class="w-full *:w-full *:flex *:items-center *:justify-between *:capitalize"
        >
          <div class="">subtotal <span class="font-semibold">$100</span></div>
          <div class="">Discount <span class="font-semibold">5%</span></div>
          <div class="">Delivery fee <span class="font-semibold">$0</span></div>
          <div class="border-t-[1px] border-gray-200 mt-6">
            total
            <span class="font-bold text-yellow-400 text-[24px]">$187</span>
          </div>
        </div>
        <NuxtLink
          to="/checkouts/checkoutStatus/checkoutSuccessfullyPayment"
          class="primary-button"
        >
          Proceed to payment
        </NuxtLink>
      </div>
    </div>
  </div>
  <div class="w-full flex items-center justify-center">
    <div class="w-[90%] flex items-center flex-col">
      <h1 class="text-[40px] lg:mb-[30vh] mb-[20vh]">You might also like</h1>
      <div
        class="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-y-40 gap-4 xl:gap-4 items-center justify-center"
      >
        <FoodCard
          v-for="food in data.splice(0, 4)"
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
  </div>
</template>

<script setup>
import FoodCard from "~/components/foods/FoodCard.vue";
import foodDatas from "../../content/data/FoodsData.json";
const data = foodDatas;
</script>

<style lang="scss" scoped></style>
