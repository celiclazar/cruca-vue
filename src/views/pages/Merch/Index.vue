<script>

import AppLayout from "/src/views/layouts/AppLayout.vue";

export default {
  components: {
    AppLayout,
  },
}
</script>

<template>
  <AppLayout>
    <div class="bg-black py-12"></div>
    <div class="flex flex-col py-12 border-t border-white leading-2">
        <div class="">
            <div class="w-full brightness-50">
                <img class="w-full z-10 h-52 sm:h-1/3" src="/images/home_merch.jpg">
            </div>
        </div>
        <div class="absolute w-full top-56 md:top-72 lg:top-96 z-20 text-center text-gray-300 md:text-2xl lg:text-5xl font-heading uppercase">
            <span>Coming</span>
            <br>
            <span>Soon</span>
        </div>
        <div class="relative text-gray-300 m-4"></div>
    </div>
  </AppLayout>
</template>

<style>

@media only screen and (min-width: 768px) {
  .center-text {
    filter: brightness(90%);
    color: white;
    text-align: center;
    font-size: 40px;
    top: -380px;
  }
}
</style>
