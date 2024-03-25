<script>
export default  {
  props: {
    reviewsPreview: Object,
  },
  name: "ReviewsPreview",
}
</script>

<template>
  <div class="section-reviews bg-black text-white py-12">
    <div class="container mx-auto px-4">
      <div class="text-center mb-8">
        <h2 class="font-heading text-3xl uppercase">Reviews</h2>
      </div>
      <div class="flex flex-row h-52 p-2">
        <div class="w-2/5 sm:w-1/3">
          <img src="/images/review.jpg">
        </div>
        <div class="flex flex-col w-3/5 sm:w-2/3 sm:p-4">
          <div class="">
            <!-- This is your opening quote icon -->
            <img class="h-6 sm:h-10" src="/icons/quote.png">
          </div>
          <div class="flex-grow p-2 text-xl italic justify-center items-center">
            <!-- This is your review description -->
            {{ 'Some description' }}
          </div>
          <div class="flex justify-end items-end">
            <!-- This div is for the closing quote icon, now pushed to the bottom-right -->
            <img class="h-6 sm:h-10" src="/icons/quote2.png">
          </div>
        </div>
      </div>
      <div class="text-center mt-8 sm:mt-12">
        <router-link to="/reviews" class="inline-block right-0 px-6 py-1 border border-gray-100 text-gray-100 font-button uppercase tracking-wide hover:bg-gray-100 hover:text-black transition-colors duration-300">
          See All &raquo;
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
