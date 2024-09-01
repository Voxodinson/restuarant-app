<template>
  <div class="w-full flex items-center justify-center flex-col relative">
    <div class="w-full">
      <img
        src="../../assets/images/location-image-section.png"
        class="w-full"
        alt=""
      />
    </div>
    <div class="w-[90%] flex flex-col gap-4 py-10">
      <h3 class="font-semibold text-[32px]">{{ location?.name }}</h3>
      <div class="flex items-start justify-start gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path
            d="M480.14-490.77q26.71 0 45.59-19.02 18.89-19.02 18.89-45.73 0-26.71-19.03-45.6Q506.57-620 479.86-620q-26.71 0-45.59 19.02-18.89 19.02-18.89 45.73 0 26.71 19.03 45.6 19.02 18.88 45.73 18.88ZM480-172.92q112.77-98.16 178.31-199.66t65.54-175.57q0-109.77-69.5-181.2-69.5-71.42-174.35-71.42t-174.35 71.42q-69.5 71.43-69.5 181.2 0 74.07 65.54 175.57T480-172.92Zm0 53.69Q339-243.92 267.58-351.81q-71.43-107.88-71.43-196.34 0-126.93 82.66-209.39Q361.46-840 480-840q118.54 0 201.19 82.46 82.66 82.46 82.66 209.39 0 88.46-71.43 196.34Q621-243.92 480-119.23Zm0-436.15Z"
          />
        </svg>
        <p>{{ location?.location }}</p>
        <NuxtLink
          to="/locations/restaurantLocation"
          class="text-blue-400 underline ml-6"
          >Change location</NuxtLink
        >
      </div>
      <div class="w-full flex items-center justify-between">
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path
              d="m625.85-305.85 28.3-28.3L500-488.33V-680h-40v208.31l165.85 165.84ZM480.13-120q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120ZM480-480Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"
            />
          </svg>
          <p>{{ location?.openTime }} {{ location?.sundayOpenTime }}</p>
        </div>
        <div
          class="w-fit grid grid-cols-2 rounded-md overflow-hidden border border-[#FCDD80]"
        >
          <button
            class="py-2 w-[100px] border-l-[2px] border-[#FCDD80] first:border-l capitalize"
            :class="{
              ' bg-[#FCDD80]': index === currentIndexButton,
            }"
            v-for="(delivery, index) in typeDelevirys"
            :key="index"
            @click="changeIndexbutton(index)"
          >
            {{ delivery.type }}
          </button>
        </div>
      </div>
    </div>
    <div class="w-[90%]">
      <h3 class="font-semibold text-[25px]">Menu</h3>
      <div class="w-full py-6 mt-[20vh] flex items-center flex-col">
        <div class="w-full grid grid-cols-4 gap-x-6 gap-y-[20vh]">
          <FoodCard
            v-for="food in foodData"
            :key="food.id"
            :name="food.name"
            :ingredient="food.ingredient"
            :price="food.price"
            :image="food.image"
            :orderButton="false"
            :showButton="true"
            :clickHandler="() => addselectItem(food.id)"
          />
        </div>
      </div>
      <h3 class="font-semibold text-[25px]">Drink</h3>
      <div class="w-full py-6 mt-[20vh] flex items-center flex-col">
        <div class="w-full grid grid-cols-4 gap-x-6 gap-y-[20vh]">
          <FoodCard
            v-for="food in drinkDatas"
            :key="food.id"
            :name="food.name"
            :price="food.price"
            :image="food.image"
            :orderButton="false"
            :showButton="true"
          />
        </div>
      </div>
      <div id="show" class=""></div>
    </div>
  </div>
  <Teleport to="#show">
    <div
      class="w-full h-[100vh] bg-gray-100 flex justify-center absolute top-0 left-0 z-50"
      v-if="isShowSelect"
    >
      <div
        class="w-[40%] border-[1px] border-gray-200 flex flex-col gap-4 h-fit rounded-md shadow-md p-4 mt-10"
      >
        <div class="w-full flex justify-end">
          <button @click="selectFunction()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path
                d="M256-227.69 227.69-256l224-224-224-224L256-732.31l224 224 224-224L732.31-704l-224 224 224 224L704-227.69l-224-224-224 224Z"
              />
            </svg>
          </button>
        </div>
        <div class="w-full flex gap-4 items-start justify-start">
          <div class="w-[100px] h-[100px] rounded-md shadow-md overflow-hidden">
            <img :src="getSelectItem.image" alt="" class="w-full h-full" />
          </div>
          <div class="w-[80%]">
            <h3 class="text-[30px] font-thin">{{ getSelectItem.name }}</h3>
            <p class="text-wrap">{{ getSelectItem.ingredient }}</p>
          </div>
        </div>
        <div class="">
          <span>Step 1</span>
          <h3 class="font-semibold">Choose a base</h3>
        </div>
        <div class="flex flex-col gap-3">
          <div
            class="flex gap-2"
            v-for="choose in getSelectItem.baseFoodSelect"
          >
            <input
              type="radio"
              :key="choose.id"
              :value="choose.base"
              v-model="selectedBase"
            />
            <label :for="choose.base">{{ choose.base }}</label>
          </div>
        </div>
        <div
          class="w-full flex justify-between items-center border-t-[1px] border-gray-200 pt-4"
        >
          <div class="flex gap-2 *:flex *:items-center *:justify-center">
            <button
              class="w-[30px] h-[30px] rounded-md bg-gray-300 hover:bg-[#F96540]"
            >
              -
            </button>
            <div class="w-[30px] h-[30px] rounded-md bg-gray-300">1</div>
            <button
              class="w-[30px] h-[30px] rounded-md bg-gray-300 hover:bg-[#F96540]"
            >
              +
            </button>
          </div>
          <div class="">
            <button
              class="primary-button-outline"
              @click="addToCart(getSelectItem)"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
  <div class="fixed top-1 w-fit right-2">
    <button class="relative" @click="showCart()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="60px"
        viewBox="0 -960 960 960"
        width="60px"
      >
        <path
          d="M291.303-142.154q-22.548 0-37.849-15.45-15.3-15.451-15.3-37.913v-402.812q0-22.463 15.45-37.913 15.451-15.451 38.153-15.451h65.974v-35.999q0-51.693 33.858-90.924 33.858-39.23 88.481-39.23 51.622 0 87.155 35.304 35.533 35.303 35.533 86.85v43.999h65.628q22.559 0 38.01 15.451 15.45 15.45 15.45 37.913v402.812q0 22.462-15.462 37.913-15.462 15.45-38.011 15.45h-377.07Zm.389-28.923h376.616q9.231 0 16.923-7.692 7.692-7.692 7.692-16.923v-402.462q0-9.231-7.692-16.923-7.692-7.692-16.923-7.692h-65.654v81.346q0 6.108-4.213 10.381-4.212 4.273-10.23 4.273-6.019 0-10.25-4.273-4.23-4.273-4.23-10.381v-81.346H386.654v81.346q0 6.108-4.213 10.381-4.212 4.273-10.23 4.273-6.019 0-10.25-4.273-4.23-4.273-4.23-10.381v-81.346h-66.039q-9.231 0-16.923 7.692-7.692 7.692-7.692 16.923v402.462q0 9.231 7.692 16.923 7.692 7.692 16.923 7.692Zm94.962-480.616h187.077v-43.999q0-39.547-27.085-66.389t-66.789-26.842q-39.703 0-66.453 26.896t-26.75 66.335v43.999ZM267.077-171.077v-451.692 451.692Z"
        />
      </svg>
      <div
        class="flex items-center text-[1rem] font-semibold justify-center h-full w-full absolute top-2 right-0 text-[#F96540]"
      >
        {{ cartItems.length }}
      </div>
    </button>

    <div
      class="absolute w-[500px] top-[20px] bg-white shadow-md right-12 rounded-lg overflow-hidden"
      id="cart-items"
    ></div>
  </div>
  <Teleport
    to="#cart-items"
    v-if="isShowCart"
    class="border-[1px] border-gray-200"
  >
    <div class="h-[600px] overflow-y-auto p-2 rounded-md w-full shadow-md">
      <div class="flex items-center justify-between">
        <h3 class="text-[16px] font-semibold">Your bowl items</h3>
        <button @click="showCart()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            class="hover:scale-125 transition"
          >
            <path
              d="M256-227.69 227.69-256l224-224-224-224L256-732.31l224 224 224-224L732.31-704l-224 224 224 224L704-227.69l-224-224-224 224Z"
            />
          </svg>
        </button>
      </div>
      <div class="flex flex-col gap-2">
        <div
          class="w-full grid grid-cols-2 items-center justify-end shadow-sm p-2 rounded-md bg-slate-100"
          v-for="item in cartItems"
        >
          <div class="flex items-center gap-6">
            <div class="w-[60px] h-[60px] overflow-hidden rounded-full">
              <img :src="item.image" alt="" />
            </div>
            <h3 class="capitalize font-semibold">{{ item.name }}</h3>
          </div>
          <div class="flex items-center justify-between">
            <span>{{ item.price }}</span>
            <button @click="deleteItem(item.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#F96540"
              >
                <path
                  d="M292.31-140q-29.92 0-51.12-21.19Q220-182.39 220-212.31V-720h-40v-60h180v-35.38h240V-780h180v60h-40v507.69Q740-182 719-161q-21 21-51.31 21H292.31ZM680-720H280v507.69q0 5.39 3.46 8.85t8.85 3.46h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-720ZM376.16-280h59.99v-360h-59.99v360Zm147.69 0h59.99v-360h-59.99v360ZM280-720v520-520Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        class="w-full h-[70%] flex flex-col items-center justify-center"
        v-if="cartItems.length == 0"
      >
        <div class="w-[200px]">
          <img src="../../assets/images/empty-cart.png" alt="" />
        </div>
        <h3 class="text-[#F96540]">Oop! your cart is empty!</h3>
      </div>
      <div
        class="w-full flex items-center gap-2 justify-end py-4"
        v-if="cartItems.length != 0"
      >
        <button class="w-[100px] primary-button-outline" @click="clearCart()">
          Clear
        </button>
      </div>
      <div
        class="w-full flex flex-col gap-2 p-4 rounded-md *:border-b *:border-gray-150 bg-slate-100 *:w-full *:flex *:justify-between *:items-center"
        v-if="cartItems.length != 0"
      >
        <div class="">
          <h3>Subtotal</h3>
          <span>${{ subTotalPrice }}</span>
        </div>
        <div class="">
          <h3>Discount</h3>
          <span>%{{ discount }}</span>
        </div>
        <div class="">
          <h3>Total</h3>
          <span>${{ totalPrice }}</span>
        </div>
      </div>
      <div
        class="w-full flex items-center gap-2 justify-end py-4"
        v-if="cartItems.length != 0"
      >
        <NuxtLink
          to="/Login"
          class="w-full primary-button-outline flex items-center justify-center"
          v-if="cartItems.length != 0"
        >
          Checkout
        </NuxtLink>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import LocationDatas from "../../content/data/storeLocationDatas.json";
import foodData from "../../content/data/FoodsData.json";
import drinkDatas from "../../content/data/drinkDatas.json";
import FoodCard from "~/components/foods/FoodCard.vue";

const route = useRoute();
const id = route.params.id;
const location = ref();
const getSelectItem = ref(null); // Initialize with null or an empty object
const currentIndexButton = ref(0);
const typeDelevirys = [{ type: "delivery" }, { type: "pickup" }];
const selectedBase = ref("");
const cartItems = ref([]);
const subTotalPrice = ref(0);
const discount = ref(5);
const totalPrice = ref(0);
const activeCart = ref(false);
onMounted(() => {
  location.value = LocationDatas.find((p) => p.id == id);
});
watch(cartItems, (newCartItems) => {
  activeCart.value = newCartItems.length > 0;
});

const changeIndexbutton = (index) => {
  currentIndexButton.value = index;
};

const isShowSelect = ref(false);

const selectFunction = async () => {
  isShowSelect.value = !isShowSelect.value;
  await nextTick(); // Ensure DOM updates are applied
  window.scrollTo(0, 0);
};

const addselectItem = (foodId) => {
  getSelectItem.value = foodData.find((food) => food.id === foodId);
  selectFunction();
  window.scrollTo(0, 0);
};

const getsubTotalPrice = () => {
  return cartItems.value.reduce((total, item) => total + item.price, 0);
};
const getTotalPrice = () => {
  const total = subTotalPrice.value;
  const discountAmount = (total * discount.value) / 100;
  return total - discountAmount;
};
const updatePrice = () => {
  subTotalPrice.value = getsubTotalPrice();
  totalPrice.value = getTotalPrice();
};

const addToCart = (item) => {
  cartItems.value.push(item);
  updatePrice();
  selectFunction();
};

const deleteItem = (id) => {
  cartItems.value = cartItems.value.filter((cartItem) => cartItem.id !== id);
  updatePrice();
};

const clearCart = () => {
  cartItems.value = [];
  updatePrice();
};

const isShowCart = ref(false);
const showCart = () => {
  isShowCart.value = !isShowCart.value;
};
</script>

<style scoped></style>
