<template>
  <div class="w-full flex items-center justify-center h-[90vh]">
    <div
      class="w-[60%] h-fit flex border-[1px] border-gray-200 shadow-md rounded-md overflow-hidden"
    >
      <div class="w-[40%]">
        <img
          src="../assets/images/login-image.png"
          alt=""
          class="w-full h-full"
        />
      </div>
      <div class="w-[60%] flex flex-col justify-between px-4 pb-4 gap-6">
        <div class="flex justify-between items-center w-full">
          <h3 class="text-[40px] font-semibold">Login</h3>
        </div>
        <div class="w-full flex flex-col gap-4">
          <p>Enter your email to log in.</p>
          <input
            type="text"
            class="py-2 px-4 rounded-full w-full outline-none border-gray-200 border-[1px]"
            placeholder="Enter your email"
          />
          <NuxtLink
            to="/checkouts/checkoutReview"
            class="primary-button flex items-center justify-center"
            >Continue</NuxtLink
          >
        </div>
        <div class="border-t-[1px] border-gray-200">
          <p class="w-full text-center text-[.8rem] text-gray-400 mt-2">
            By continuing, you agree to the updated
            <NuxtLink class="underline">
              Terms of Sale, Terms of Service, and Privacy <br />
              Policy.</NuxtLink
            >
          </p>
        </div>
        <div
          class="*:py-4 *:w-full *:rounded-full *:bg-gray-100 *:flex *:items-center *:justify-center flex flex-col gap-2 *:text-[#EA4336] *:font-semibold *:gap-2"
        >
          <button class="hover:bg-gray-200">
            <img
              src="../public/icons/Google.png"
              alt=""
              class="w-[30px]"
            />Continue with Google
          </button>
          <button class="hover:bg-gray-200">
            <img
              src="../public/icons/Logo facebook.png"
              alt=""
              class="w-[30px]"
            />
            Continue with Facebook
          </button>
          <button class="hover:bg-gray-200">
            <img src="../public/icons/Apple.png" alt="" class="w-[30px]" />
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
