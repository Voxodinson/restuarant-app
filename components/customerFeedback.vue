<template>
  <div class="w-[90%] h-fit gap-10 flex py-[40px] flex-col xl:flex-row">
    <div class="xl:w-[50%] w-full flex flex-col gap-10 relative py-10">
      <h2 class="text-[40px] font-semibold">Our happy customers</h2>
      <div class="flex gap-6 flex-col" id="feedback-display">
        <!-- Render feedback directly instead of teleporting -->
        <p class="text-gray-700">{{ currentFeedback }}</p>
        <h2 class="font-semibold text-[25px] mt-4">{{ currentName }}</h2>
      </div>
      <div class="flex gap-4 items-center xl:absolute bottom-0 pl-2">
        <div
          class="w-[50px] h-[50px] rounded-full overflow-hidden cursor-pointer"
          v-for="(img, index) in data"
          :key="index"
          :class="{
            'border-2 border-[#F96540] scale-125 bg-[#FFF3F0] transition':
              index === currentIndex,
          }"
          @click="changeFeedback(index)"
        >
          <img :src="img.image" alt="" class="w-full h-full object-cover" />
        </div>
        <button
          @click="increaseIndex"
          class="flex items-center justify-center w-[50px] h-[50px] group bg-[#FFF3F0] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#F96540"
            class="group-hover:scale-125 transition"
          >
            <path
              d="m320.23-107.69-42.54-42.54L607.46-480 277.69-809.77l42.54-42.54L692.54-480 320.23-107.69Z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="w-full xl:w-[50%] h-fit flex items-start justify-start xl:items-end xl:justify-end"
    >
      <img
        src="../assets/images/feedback-image.png"
        alt=""
        class="xl:w-[520px] xl:h-[520px] w-full"
      />
    </div>
  </div>
</template>

<script>
import datas from "../content/data/UserFeedbackData.json";

export default {
  data() {
    return {
      data: datas,
      currentIndex: 0,
      currentFeedback: datas[0].feedback,
      currentName: datas[0].name,
    };
  },

  methods: {
    changeFeedback(index) {
      this.currentIndex = index;
      this.currentFeedback = this.data[index].feedback;
      this.currentName = this.data[index].name;
    },
    increaseIndex() {
      if (this.currentIndex < this.data.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // reset to 0
      }
      this.currentFeedback = this.data[this.currentIndex].feedback;
      this.currentName = this.data[this.currentIndex].name;
    },
  },
};
</script>

<style scoped>
/* Add any required styles here */
</style>
