<template>
  <div class="w-full flex items-center justify-center h-[100vh] relative">
    <div
      class="w-full h-full absolute top-0 left-0 bg-slate-900 z-[-1] opacity-70"
    ></div>
    <div
      class="w-[70%] flex h-fit bg-white rounded-lg overflow-hidden shadow-md mt-10"
    >
      <div class="w-[50%] p-6">
        <h3 class="font-semibold">Reservation</h3>
        <p>
          We provide a convenient online reservation system. Simply select your
          desired date, time, and party size, and we will make sure that your
          table is ready upon your arrival
        </p>
        <div class="w-full flex flex-col gap-4">
          <div class="w-full flex flex-col gap-2">
            <label for="">Your Name</label>
            <input
              type="text"
              placeholder="Your Name"
              class="w-full py-2 px-4 rounded-md border-[1px] border-gray-300 outline-none"
            />
          </div>
          <div class="flex gap-4 w-full">
            <div class="w-1/2 flex flex-col gap-2">
              <label for="">Restaurant</label>
              <input
                type="text"
                placeholder="Your favorite place?"
                class="w-full py-2 px-4 rounded-md border-[1px] border-gray-300 outline-none"
              />
            </div>
            <div class="w-1/2 flex flex-col gap-2">
              <label for="">Restaurant</label>
              <input
                type="text"
                placeholder="Your favorite place?"
                class="w-full py-2 px-4 rounded-md border-[1px] border-gray-300 outline-none"
              />
            </div>
          </div>
          <div class="flex gap-4 w-full">
            <div class="w-1/2 flex flex-col gap-2">
              <label for="">Restaurant</label>
              <input
                type="text"
                placeholder="Your favorite place?"
                class="w-full py-2 px-4 rounded-md border-[1px] border-gray-300 outline-none"
              />
            </div>
            <div class="w-1/2 flex flex-col gap-2">
              <label for="">Restaurant</label>
              <input
                type="text"
                placeholder="Your favorite place?"
                class="w-full py-2 px-4 rounded-md border-[1px] border-gray-300 outline-none"
              />
            </div>
          </div>
          <button class="primary-button">Book table</button>
        </div>
      </div>
      <div class="w-[50%] h-[624px] relative">
        <img
          src="../../assets/images/Reservation-image.png"
          class="w-full h-full"
          alt=""
        />
        <button class="absolute top-2 right-2" @click="emitTriggerSelect">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 -960 960 960"
            width="40"
          >
            <path
              d="M256-227.69 227.69-256l224-224-224-224L256-732.31l224 224 224-224L732.31-704l-224 224 224 224L704-227.69l-224-224-224 224Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close-login"]);

const emitTriggerSelect = () => {
  emit("close-login");
};
</script>

<style lang="scss" scoped></style>
