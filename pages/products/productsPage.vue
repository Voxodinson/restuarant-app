<template>
  <div class="w-full flex items-center justify-center flex-col relative">
    <div class="w-full">
      <img
        src="../../assets/images/product-list-image.png"
        class="w-full"
        alt=""
      />
    </div>
    <div class="w-[90%] flex items-center flex-col justify-center mt-[5vh]">
      <div class="container">
        <h1 class="text-[48px] font-semibold">Our menu</h1>
      </div>

      <div class="w-full py-6 mt-[20vh] flex items-center flex-col">
        <div class="w-full grid grid-cols-4 gap-x-6 gap-y-[20vh]">
          <FoodCard
            v-for="food in data"
            :key="food.id"
            :name="food.name"
            :ingredient="food.ingredient"
            :price="food.price"
            :image="food.image"
            :orderButton="false"
            :showButton="true"
          />
        </div>
      </div>
      <div class="">
        <button class="outline-button-black w-[200px]">Explore more</button>
      </div>
    </div>

    <div class="w-[90%] flex flex-col gap-10 pt-20">
      <div class="w-full flex justify-center">
        <h3 class="font-semibold text-[40px]">Build your own bowl</h3>
      </div>
      <div class="w-full">
        <div class="flex gap-6 items-center">
          <h1 class="text-[60px] font-semibold text-[#F96540]">1</h1>
          <div class="mt-1.5">
            <span class="text-gray-400">Step 1</span>
            <h3 class="text-[24px] font-semibold">Choose a Base</h3>
          </div>
        </div>
        <div class="grid grid-cols-4 items-center">
          <div
            class="w-full flex items-center justify-center flex-col gap-4"
            v-for="base in baseFoodDatas"
            :key="base.id"
          >
            <div class="overflow-hidden rounded-full shadow-md">
              <img
                :src="base.image"
                alt=""
                @click="addToCart(base)"
                class="hover:scale-110 transition cursor-pointer"
              />
            </div>
            <h3
              class="font-medium capitalize text-[18px] flex gap-2 items-center justify-center"
            >
              {{ base.name }}
              <span
                class="bg-[#F96540] px-4 text-[.9rem] rounded-full text-white"
                >${{ base.price }}</span
              >
            </h3>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="flex gap-6 items-center">
          <h1 class="text-[60px] font-semibold text-[#F96540]">2</h1>
          <div class="mt-1.5">
            <span class="text-gray-400">Step 2</span>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-6 grid-rows-2 items-center">
          <div
            class="w-full flex items-center justify-center flex-col gap-4"
            v-for="base in proteinFoodDatas"
            :key="base.id"
          >
            <div class="overflow-hidden rounded-full shadow-md">
              <img
                :src="base.image"
                @click="addToCart(base)"
                alt=""
                class="hover:scale-110 transition cursor-pointer"
              />
            </div>
            <h3
              class="font-medium capitalize text-[18px] flex gap-2 items-center justify-center"
            >
              {{ base.name }}
              <span
                class="bg-[#F96540] px-4 text-[.9rem] rounded-full text-white"
                >${{ base.price }}</span
              >
            </h3>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="flex gap-6 items-center">
          <h1 class="text-[60px] font-semibold text-[#F96540]">3</h1>
          <div class="mt-1.5">
            <span class="text-gray-400">Step 3</span>
            <h3 class="text-[24px] font-semibold">Choose a vegetable</h3>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-6 grid-rows-2 items-center">
          <div
            class="w-full flex items-center justify-center flex-col gap-4"
            v-for="base in vegetableFoodDatas"
            :key="base.id"
          >
            <div class="w-fit h-fit overflow-hidden rounded-full shadow-md">
              <img
                :src="base.image"
                alt=""
                class="hover:scale-110 transition cursor-pointer"
                @click="addToCart(base)"
              />
            </div>
            <h3
              class="font-medium capitalize text-[18px] flex gap-2 items-center justify-center"
            >
              {{ base.name }}
              <span
                class="bg-[#F96540] px-4 text-[.9rem] rounded-full text-white"
                >${{ base.price }}</span
              >
            </h3>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="flex gap-6 items-center">
          <h1 class="text-[60px] font-semibold text-[#F96540]">4</h1>
          <div class="mt-1.5">
            <span class="text-gray-400">Step 4</span>
            <h3 class="text-[24px] font-semibold">Choose a flavor</h3>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-6 items-center">
          <div
            class="w-full flex items-center justify-center flex-col gap-4"
            v-for="base in flavorData"
            :key="base.id"
          >
            <div class="w-fit h-fit overflow-hidden rounded-full shadow-md">
              <img
                :src="base.image"
                alt=""
                class="hover:scale-110 transition cursor-pointer"
                @click="addToCart(base)"
              />
            </div>
            <h3
              class="font-medium capitalize text-[18px] flex gap-2 items-center justify-center"
            >
              {{ base.name }}
              <span
                class="bg-[#F96540] px-4 text-[.9rem] rounded-full text-white"
                >${{ base.price }}</span
              >
            </h3>
          </div>
        </div>
      </div>
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
    </div>

    <CustomerFeedback class="mt-[10vh]" />

    <div class="w-full flex justify-center pb-6">
      <LocationCard />
    </div>
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
            <div class="w-[60px] h-[60px] rounded-full">
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
        <button
          class="w-full primary-button-outline"
          v-if="cartItems.length != 0"
        >
          Add to cart
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import CustomerFeedback from "~/components/customerFeedback.vue";
import FoodCard from "~/components/foods/FoodCard.vue";
import LocationCard from "~/components/LocationCard.vue";
import FoodData from "~/content/data/FoodsData.json";
import buildFoodData from "~/content/data/buildFoodData";

const data = FoodData;
const buildFoodDatas = buildFoodData;

const cartItems = ref([]);
const activeCart = ref(false);
const subTotalPrice = ref(0);
const discount = ref(5);
const totalPrice = ref(0);
const proteinFoodDatas = computed(() => {
  return buildFoodDatas.filter((product) => product.type === "protein");
});
const vegetableFoodDatas = computed(() => {
  return buildFoodDatas.filter((product) => product.type === "vegetable");
});
const baseFoodDatas = computed(() => {
  return buildFoodData.filter((product) => product.type === "base-food");
});
const flavorData = computed(() => {
  return buildFoodDatas.filter((product) => product.type === "flavor");
});

// Update activeCart based on cartItems
watch(cartItems, (newCartItems) => {
  activeCart.value = newCartItems.length > 0;
});

// Update totalPrice after every cartItems change
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
  const itemExists = cartItems.value.some(
    (cartItem) => cartItem.id === item.id
  );

  if (itemExists) {
    return;
  }

  cartItems.value.push(item);
  updatePrice();
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

<style scoped>
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
  background: rgb(245, 240, 240);
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgb(182, 182, 182);
}
</style>
