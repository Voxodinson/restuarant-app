<template>
  <div class="w-full flex items-center justify-center p-10">
    <div class="w-[90%] h-[90vh] flex justify-between">
      <div class="w-[40%] flex flex-col gap-4">
        <div
          class="w-fit grid grid-cols-2 rounded-md overflow-hidden border border-[#FCDD80]"
        >
          <button
            class="py-2 w-[100px] border-l-[2px] border-[#FCDD80] first:border-l capitalize"
            @click="changeIndexbutton(index)"
            :class="{
              ' bg-[#FCDD80]': index === currentIndexButton,
            }"
            v-for="(delivery, index) in typeDeleviry"
            :key="index"
          >
            {{ delivery.type }}
          </button>
        </div>
        <div class="w-full flex flex-col gap-4">
          <h6>Find nearby locations to order from</h6>
          <input
            type="text"
            class="py-2 px-4 rounded-full border-[1px] border-gray-400 outline-none font-thin"
            placeholder="Search location here..."
          />
        </div>
        <div class="w-full h-[72vh] overflow-auto flex flex-col gap-4 pr-2">
          <div
            class="flex w-full py-6 border-[1px] border-[#F96540] rounded-lg items-start justify-start gap-4"
            v-for="(location, index) in locationDatas"
            :key="index"
            :class="{
              'border-[#F96540] bg-[#F96540] *:text-white':
                index === currentIndexCard,
            }"
          >
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                :fill="getFillColor(index)"
              >
                <path
                  d="M480.14-490.77q26.71 0 45.59-19.02 18.89-19.02 18.89-45.73 0-26.71-19.03-45.6Q506.57-620 479.86-620q-26.71 0-45.59 19.02-18.89 19.02-18.89 45.73 0 26.71 19.03 45.6 19.02 18.88 45.73 18.88ZM480-172.92q112.77-98.16 178.31-199.66t65.54-175.57q0-109.77-69.5-181.2-69.5-71.42-174.35-71.42t-174.35 71.42q-69.5 71.43-69.5 181.2 0 74.07 65.54 175.57T480-172.92Zm0 53.69Q339-243.92 267.58-351.81q-71.43-107.88-71.43-196.34 0-126.93 82.66-209.39Q361.46-840 480-840q118.54 0 201.19 82.46 82.66 82.46 82.66 209.39 0 88.46-71.43 196.34Q621-243.92 480-119.23Zm0-436.15Z"
                />
              </svg>
            </div>
            <div class="">
              <h1>{{ location.name }}</h1>
              <p>Boston Harbor, 15 State Street, Suite 1100, Boston</p>
              <button
                @click="changeIndexCard(index)"
                :class="{
                  'text-white border-white': index === currentIndexCard,
                }"
                class="border-[1px] mt-4 w-[200px] text-[#F96540] border-[#F96540] rounded-full px-4 py-2 transition-all duration-700 ease-in-out"
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[50%] h-full rounded-md overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509414!2d144.96315791531692!3d-37.81410797975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f152b4fcd9d4!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1632210295613!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import locationDatas from "../../content/data/storeLocationDatas.json";
const typeDeleviry = [{ type: "delivery" }, { type: "pickup" }];
const currentIndexButton = ref(0);
const changeIndexbutton = (index) => {
  currentIndexButton.value = index;
};
const currentIndexCard = ref(0);
const changeIndexCard = (index) => {
  currentIndexCard.value = index;
};

const getFillColor = (index) => {
  return index === currentIndexCard.value ? "#FFFFFF" : "#F96540";
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
