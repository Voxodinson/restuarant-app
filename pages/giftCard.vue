<template>
  <div class="w-full flex justify-between mt-10">
    <div class="w-[50%] pl-[5%] flex flex-col gap-4">
      <div class="flex flex-col gap-4">
        <h3 class="text-[40px]">Give the Perfect Gift</h3>
        <p class="text-[16px]">
          Get a voucher for yourself or gift one to a friend
        </p>
      </div>
      <div class="flex flex-col gap-4 w-full">
        <h6 class="font-bold text-black text-[20px]">
          What kind of gift is it?
        </h6>
        <div class="flex w-full gap-2 *:border-[1px] border-gray-400">
          <div
            class="w-[50%] p-6 rounded-md shadow-md flex items-start justify-start gap-4"
            v-for="(gift, index) in giftCardDatas"
            :key="index"
            @click="changeIndexCard(index)"
            :class="{
              'border-[#F96540]': index === currentIndexCard,
            }"
          >
            <div class="" v-html="gift.svg"></div>
            <div class="">
              <h1>{{ gift.name }}</h1>
              <p>{{ gift.detail }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4 w-[70%]">
        <h3 class="font-bold text-[20px]">eGift card amount</h3>
        <div
          class="w-full grid grid-cols-5 rounded-md overflow-hidden border border-[#FCDD80]"
        >
          <button
            class="py-2 w-full border-l-[2px] border-[#FCDD80] first:border-l"
            @click="changeIndexbutton(index)"
            :class="{
              ' bg-[#FCDD80]': index === currentIndexButton,
            }"
            v-for="(amt, index) in amountCard"
            :key="index"
          >
            <span v-if="index !== 4">$</span>{{ amt.amount }}
          </button>
        </div>
      </div>
      <div class="w-full">
        <h3 class="text-blue-400 font-semibold">Add Promo Code</h3>
      </div>
      <div class="flex flex-col w-[70%] gap-2">
        <input
          type="text"
          class="py-2 px-4 rounded-md border-[1px] border-gray-300 outline-none font-thin"
          placeholder="Name"
        />
        <input
          type="text"
          class="py-2 px-4 rounded-md border-[1px] border-gray-300 outline-none font-thin"
          placeholder="Your Email"
        />
        <textarea
          name=""
          id=""
          class="py-2 px-4 rounded-md border-[1px] border-gray-300 outline-none h-[150px] font-thin"
          placeholder="Your Message (optional)"
        ></textarea>
      </div>
      <div class="w-[70%] flex gap-6 flex-col">
        <h3 class="font-bold text-[20px]">Delivery details</h3>
        <div class="flex justify-between">
          <p>Send this card to myself</p>
          <button
            class="w-[50px] h-fit rounded-full shadow-md p-[2px] flex justify-start items-center transition"
            @click="toogleFunc()"
            :class="{
              'justify-end bg-green-400': toogle,
              'justify-start bg-gray-100': !toogle,
            }"
          >
            <div
              class="w-[25px] h-[25px] bg-white rounded-full shadow-md"
            ></div>
          </button>
        </div>
        <NuxtLink
          to="/checkouts/checkoutSelectRestaurant"
          class="w-full primary-button text-center"
          >Checkout</NuxtLink
        >
      </div>
    </div>

    <div
      class="w-[40%] flex items-center justify-end h-[130vh] overflow-hidden"
    >
      <GridImage class="w-full" />
    </div>
  </div>
</template>

<script setup>
import GridImage from "~/components/GridImage.vue";
const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#F96540"><path d="M169.23-120v-430.77H120v-176.92h205.69q-11.92-10.54-16.5-25.01-4.57-14.46-4.57-30.38 0-39.74 27.82-67.56T400-878.46q23 0 42.23 10.81 19.23 10.8 33.15 28.11 13.93-17.54 33.16-28.23 19.23-10.69 42.23-10.69 39.74 0 67.56 27.82t27.82 67.56q0 15.62-4.69 30.12-4.69 14.5-16.38 25.27H840v176.92h-49.23V-120H169.23Zm381.54-718.46q-23.54 0-39.46 15.92-15.93 15.92-15.93 39.46t15.93 39.46q15.92 15.93 39.46 15.93t39.46-15.93q15.92-15.92 15.92-39.46t-15.92-39.46q-15.92-15.92-39.46-15.92Zm-206.15 55.38q0 23.54 15.92 39.46 15.92 15.93 39.46 15.93t39.46-15.93q15.92-15.92 15.92-39.46t-15.92-39.46q-15.92-15.92-39.46-15.92t-39.46 15.92q-15.92 15.92-15.92 39.46ZM160-687.69v96.92h300v-96.92H160ZM460-160v-390.77H209.23V-160H460Zm40 0h250.77v-390.77H500V-160Zm300-430.77v-96.92H500v96.92h300Z"/></svg>`;
const svg2 = `<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#F96540"><path d="M366.92-92.23q-46 0-80.57-27.85-34.58-27.84-47.66-71.38-12.15 20.23-33.57 30.96-21.43 10.73-45.12 10.73-41.77 0-70.88-29.17Q60-208.1 60-249.77q0-36.85 25.69-67.11 25.69-30.27 64.85-30.66-20.16-18.46-31.89-44.42T106.92-446q0-33.29 16.27-62.41 16.27-29.13 45.58-48.05 2.73 8.85 7.36 18.92 4.64 10.08 9.49 18.16-18.62 14.07-28.16 33.55-9.54 19.47-9.54 40.83 0 62.15 46 80.15 46 18 94.7 27.54l9 15.85q-11 32-17.85 54.11-6.85 22.12-6.85 40.89 0 37.38 27.09 65.42T366.15-133q42.62 0 69.93-32.08 27.3-32.07 44.84-76.15 17.54-44.08 27.2-90.69 9.65-46.62 16.19-76.23l39.54 11q-8.23 39.61-19.7 92.23-11.46 52.61-32.65 99.73-21.19 47.11-55.61 80.04-34.43 32.92-88.97 32.92ZM160-189.77q24.69 0 42.35-17.65Q220-225.08 220-249.77t-17.65-42.35q-17.66-17.65-42.35-17.65t-42.35 17.65Q100-274.46 100-249.77t17.65 42.35q17.66 17.65 42.35 17.65Zm243.23-164.92q-40.61-36.39-74.27-68.04-33.65-31.65-58.15-62.08-24.5-30.42-37.65-60.84Q220-576.08 220-609q0-56.56 38.72-95.28T354-743q10.92 0 19.69 1.27 8.77 1.27 16.62 3.58-4.77-9.23-7.54-18.99-2.77-9.75-2.77-20.48 0-41.66 29.14-70.83t70.77-29.17q41.63 0 70.86 29.17Q580-819.28 580-777.62q0 11-2.77 20.5t-7.54 18.74q7.85-2.31 16.62-3.47Q595.08-743 606-743q45.38 0 79.31 25.81 33.92 25.81 46.54 65.88-9.43-1.46-21.22-1.46-11.78 0-21.55 1.23-10.85-23-32.81-37.23Q634.31-703 606.34-703q-37.65 0-59.84 19.35-22.19 19.34-57.73 60.65h-18.54q-36.54-42.54-58.73-61.27Q389.31-703 354-703q-40.65 0-67.32 26.68Q260-649.65 260-609q0 23.25 11.85 48.01 11.84 24.76 34.07 52.26 22.24 27.5 53.93 58.5t71.92 67l-28.54 28.54ZM480-717.62q24.69 0 42.35-17.65Q540-752.92 540-777.62q0-24.69-17.65-42.34-17.66-17.66-42.35-17.66t-42.35 17.66Q420-802.31 420-777.62q0 24.7 17.65 42.35 17.66 17.65 42.35 17.65ZM590.54-91.46q-14.24 0-28.15-3.05-13.91-3.04-26.85-9.64 5.56-7.19 11.12-16.95 5.56-9.76 10.11-17.98 8.88 3.69 17.77 5.27 8.88 1.58 17.77 1.58 38.92 0 66.57-27.97 27.66-27.96 27.66-66.49 0-18.77-6.85-40.5-6.84-21.73-17.84-53.73l9.77-15.85q49.69-9.54 95.19-27.92 45.5-18.39 45.5-80.54 0-48.46-34.12-71.85-34.11-23.38-76.81-23.38-40.32 0-94.08 13.69t-124.15 37.15l-11-39.53q68.77-21.93 123.81-37.39Q650.99-582 697-582q60.54 0 107.92 35.62 47.39 35.61 47.39 101.15 0 27.75-11.35 52.72-11.34 24.97-31.5 44.97 39.16 1.16 64.85 30.66Q900-287.38 900-249.77q0 40.77-29.12 70.39-29.11 29.61-70.88 29.61-23.69 0-45.12-10.73-21.42-10.73-33.57-30.96-13.08 43.54-48.43 71.77-35.34 28.23-82.34 28.23ZM801-189.77q24.69 0 41.85-17.65Q860-225.08 860-249.77t-17.65-42.85q-17.66-18.15-42.35-18.15t-42.35 17.65Q740-275.46 740-250.77t18.15 42.85q18.16 18.15 42.85 18.15Zm-641-60Zm320-527.85Zm320 526.85Z"/></svg>`;
const giftCardDatas = [
  {
    name: "For one individual",
    detail: "Send a gift card to one recipient",
    svg: svg1,
  },
  {
    name: "Group gift card",
    detail: "Pool money from multiple contributors for one recipient",
    svg: svg2,
  },
];
const amountCard = [
  { amount: 25.0 },
  { amount: 35.0 },
  { amount: 50.0 },
  { amount: 100.0 },
  { amount: "Custom" },
];
const currentIndexButton = ref(0);
const changeIndexbutton = (index) => {
  currentIndexButton.value = index;
};

const currentIndexCard = ref(0);
const changeIndexCard = (index) => {
  currentIndexCard.value = index;
};
const toogle = ref(false);
const toogleFunc = () => {
  toogle.value = !toogle.value;
};
</script>

<style lang="scss" scoped></style>
