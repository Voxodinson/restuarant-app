<template>
  <div class="w-full flex flex-col items-center justify-center py-4">
    <div class="w-[50%] items-center justify-center flex flex-col">
      <div class="relative">
        <img src="../../../assets/images/purchase-done-image.png" alt="" />
        <div
          class="absolute right-4 bottom-4 flex items-center justify-center w-[60px] bg-green-400 h-[60px] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#FFFFFF"
          >
            <path
              d="M382-267.69 183.23-466.46 211.77-495 382-324.77 748.23-691l28.54 28.54L382-267.69Z"
            />
          </svg>
        </div>
      </div>
      <div class="flex items-center flex-col">
        <h3
          class="flex items-center justify-center py-2 font-seimbold text-[40px] capitalize"
        >
          Thank you for your purchase!
        </h3>
        <p>You will receive an confirmation letter through your email</p>
      </div>
      <div
        class="w-full flex flex-col gap-3 p-4 rounded-lg border-[1px] border-gray-300 mt-6"
      >
        <div class="flex justify-between items-center">
          <div class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              height="30px"
              width="30px"
              fill="#F96540"
            >
              <path
                d="M224.62-120q-27.62 0-46.12-18.5Q160-157 160-184.62v-510.76q0-27.62 18.5-46.12Q197-760 224.62-760h70.76v-89.23h43.08V-760h286.16v-89.23h40V-760h70.76q27.62 0 46.12 18.5Q800-723 800-695.38v510.76q0 27.62-18.5 46.12Q763-120 735.38-120H224.62Zm0-40h510.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-350.76H200v350.76q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69ZM200-575.39h560v-119.99q0-9.24-7.69-16.93-7.69-7.69-16.93-7.69H224.62q-9.24 0-16.93 7.69-7.69 7.69-7.69 16.93v119.99Zm0 0V-720-575.39Zm280 181.54q-12.38 0-21.58-9.19-9.19-9.19-9.19-21.58 0-12.38 9.19-21.57 9.2-9.19 21.58-9.19 12.38 0 21.58 9.19 9.19 9.19 9.19 21.57 0 12.39-9.19 21.58-9.2 9.19-21.58 9.19Zm-160 0q-12.38 0-21.58-9.19-9.19-9.19-9.19-21.58 0-12.38 9.19-21.57 9.2-9.19 21.58-9.19 12.38 0 21.58 9.19 9.19 9.19 9.19 21.57 0 12.39-9.19 21.58-9.2 9.19-21.58 9.19Zm320 0q-12.38 0-21.58-9.19-9.19-9.19-9.19-21.58 0-12.38 9.19-21.57 9.2-9.19 21.58-9.19 12.38 0 21.58 9.19 9.19 9.19 9.19 21.57 0 12.39-9.19 21.58-9.2 9.19-21.58 9.19ZM480-240q-12.38 0-21.58-9.19-9.19-9.19-9.19-21.58 0-12.38 9.19-21.58 9.2-9.19 21.58-9.19 12.38 0 21.58 9.19 9.19 9.2 9.19 21.58 0 12.39-9.19 21.58Q492.38-240 480-240Zm-160 0q-12.38 0-21.58-9.19-9.19-9.19-9.19-21.58 0-12.38 9.19-21.58 9.2-9.19 21.58-9.19 12.38 0 21.58 9.19 9.19 9.2 9.19 21.58 0 12.39-9.19 21.58Q332.38-240 320-240Zm320 0q-12.38 0-21.58-9.19-9.19-9.19-9.19-21.58 0-12.38 9.19-21.58 9.2-9.19 21.58-9.19 12.38 0 21.58 9.19 9.19 9.2 9.19 21.58 0 12.39-9.19 21.58Q652.38-240 640-240Z"
              />
            </svg>

            <span class="font-semibold">Date</span>
          </div>
          <span class="font-semibold">10/05/2003</span>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              height="30px"
              width="30px"
              fill="#F96540"
            >
              <path
                d="M247.85-260.62q51-36.69 108.23-58.03Q413.31-340 480-340t123.92 21.35q57.23 21.34 108.23 58.03 39.62-41 63.73-96.84Q800-413.31 800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 66.69 24.12 122.54 24.11 55.84 63.73 96.84ZM480-460q-50.54 0-85.27-34.73T360-580q0-50.54 34.73-85.27T480-700q50.54 0 85.27 34.73T600-580q0 50.54-34.73 85.27T480-460Zm0 340q-75.31 0-141-28.04t-114.31-76.65Q176.08-273.31 148.04-339 120-404.69 120-480t28.04-141q28.04-65.69 76.65-114.31 48.62-48.61 114.31-76.65Q404.69-840 480-840t141 28.04q65.69 28.04 114.31 76.65 48.61 48.62 76.65 114.31Q840-555.31 840-480t-28.04 141q-28.04 65.69-76.65 114.31-48.62 48.61-114.31 76.65Q555.31-120 480-120Z"
              />
            </svg>

            <span class="font-semibold">Customer</span>
          </div>
          <span class="font-semibold">Vox odinson</span>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              width="30px"
              viewBox="0 -960 960 960"
              fill="#F96540"
            >
              <path
                d="M540-463.08q-33.85 0-56.92-23.07Q460-509.23 460-543.08q0-33.84 23.08-56.92 23.07-23.08 56.92-23.08T596.92-600Q620-576.92 620-543.08q0 33.85-23.08 56.93-23.07 23.07-56.92 23.07Zm-247.69 127.7q-26.66 0-45.64-18.99-18.98-18.98-18.98-45.63v-286.15q0-26.66 18.98-45.64t45.64-18.98h495.38q26.66 0 45.64 18.98t18.98 45.64V-400q0 26.65-18.98 45.63-18.98 18.99-45.64 18.99H292.31Zm40-40h415.38q0-26.85 18.98-45.74Q785.65-440 812.31-440v-206.15q-26.85 0-45.73-18.98-18.89-18.99-18.89-45.64H332.31q0 26.85-18.98 45.73-18.98 18.89-45.64 18.89V-440q26.85 0 45.73 18.98 18.89 18.98 18.89 45.64Zm401.54 160H172.31q-26.66 0-45.64-18.99-18.98-18.98-18.98-45.63v-352.31h40V-280q0 9.23 7.69 16.92 7.7 7.7 16.93 7.7h561.54v40Zm-441.54-160h-24.62v-335.39h24.62q-10 0-17.31 7.31-7.31 7.31-7.31 17.31V-400q0 10 7.31 17.31 7.31 7.31 17.31 7.31Z"
              />
            </svg>

            <span class="font-semibold">Payment</span>
          </div>
          <img src="../../../assets/images/masterCard.png" alt="" />
        </div>
        <div
          class="flex justify-between items-center border-t-[1px] border-gray-300 mt-2 pt-2"
        >
          <div class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              height="30px"
              width="30px"
              fill="#F96540"
            >
              <path
                d="M240-120q-33.85 0-56.92-23.08Q160-166.15 160-199.64V-280h120v-544.62l50.77 35.39 52.31-35.39 52.3 35.39 52.31-35.39L540-789.23l52.31-35.39 52.31 35.39 52.3-35.39 52.31 35.39L800-824.62V-200q0 33.85-23.08 56.92Q753.85-120 720-120H240Zm480-40q17 0 28.5-11.5T760-200v-560H320v480h360v80q0 17 11.5 28.5T720-160ZM375.38-620v-40h213.85v40H375.38Zm0 120v-40h213.85v40H375.38Zm300-109.23q-12.38 0-21.57-9.19-9.19-9.2-9.19-21.58 0-12.38 9.19-21.58 9.19-9.19 21.57-9.19 12.39 0 21.58 9.19 9.19 9.2 9.19 21.58 0 12.38-9.19 21.58-9.19 9.19-21.58 9.19Zm0 120q-12.38 0-21.57-9.19-9.19-9.2-9.19-21.58 0-12.38 9.19-21.58 9.19-9.19 21.57-9.19 12.39 0 21.58 9.19 9.19 9.2 9.19 21.58 0 12.38-9.19 21.58-9.19 9.19-21.58 9.19ZM240-160h400v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z"
              />
            </svg>

            <span class="font-semibold">Order number</span>
          </div>
          <span class="font-semibold">12002-0302-23992</span>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              height="30px"
              width="30px"
              fill="#F96540"
            >
              <path
                d="M459.46-140v-81.38Q408-228 371.04-257q-36.96-29-54.96-80.23l37.07-16.15q17.31 44.92 47.58 69.15Q431-260 482.85-260q45.61 0 83.34-22.73 37.73-22.73 37.73-73.27 0-42.69-27.77-68.58-27.77-25.88-103.92-50.34-77.54-24.7-109.15-56.43-31.62-31.73-31.62-82.65 0-55.77 42.77-89.08 42.77-33.3 85.23-36V-820h40v80.92q41.54 4.16 71.35 23.04 29.81 18.89 49.42 53.73l-35.54 18.16Q570.38-670 545.31-686q-25.08-16-63.85-16-46.31 0-78.15 24.5-31.85 24.5-31.85 63.5 0 36.85 26.16 59.69 26.15 22.85 104.76 47.69 72.85 23.08 107.2 59.27 34.34 36.2 34.34 90.89 0 60.23-42.38 95.69-42.39 35.46-102.08 39.85V-140h-40Z"
              />
            </svg>

            <span class="font-semibold">Total</span>
          </div>
          <span class="font-semibold">$102</span>
        </div>
      </div>
      <div
        class="flex w-full py-4 flex-col p-4 rounded-lg border-[1px] border-gray-300 mt-4"
      >
        <div
          class="py-2 w-full font-bold text-[24px] capitalize border-b-[1px] border-gray-300"
        >
          Order line
        </div>
        <div class="flex flex-col gap-2">
          <div
            class="capitalize border-b-[1px] py-2 flex justify-between items-center border-gray-300 w-full"
            v-for="item in products.splice(0, 4)"
          >
            <div class="flex gap-4">
              <NuxtLink class="w-[100px] overflow-hidden rounded-full">
                <img :src="item.image" alt="" class="w-full" />
              </NuxtLink>
              <div class="flex flex-col gap-1">
                <h3 class="font-semibold">{{ item.name }}</h3>
                <span class="text-gray-400">Size: <span>50ml</span></span>
                <span class="py-1 px-3 rounded-full bg-gray-100">
                  <span class="text-[.7rem]">x</span>
                  {{ item.quantity }} items
                </span>
              </div>
            </div>
            <div class="">
              <span class="font-semibold">$100</span>
            </div>
          </div>
        </div>
        <div class="w-full mt-4 flex justify-end gap-4">
          <NuxtLink to="/" class="primary-button capitalize"
            >Back to home</NuxtLink
          >
        </div>
      </div>
    </div>
    <span class="mt-10">How was your experience?</span>
  </div>
</template>

<script setup>
import foodDatas from "../../../content/data/FoodsData.json";

const products = ref(foodDatas);
</script>

<style lang="scss" scoped></style>
