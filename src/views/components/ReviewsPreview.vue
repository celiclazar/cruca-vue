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
            <div class="flex flex-row h-46 border border-white">
                <div class="w-1/3 sm:w-1/3">
                    <img src="/images/review.jpg">
                </div>
                <div class="flex flex-col w-2/3 font-body p-4 sm:w-2/3 sm:p-4">
                    {{ '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.""' }}
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
