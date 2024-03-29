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
        <div class="flex flex-col mx-auto px-4">
            <div class="text-center mb-8">
            <h2 class="font-heading text-3xl uppercase">Reviews</h2>
            </div>
            <div class="flex flex-row h-46 review-border review-medium sm:w-3/5">
                <div class="w-1/3 sm:w-1/3">
                    <img src="/images/review.jpg">
                </div>
                <div class="w-2/3 p-4 sm:w-2/3 sm:p-4">
                    <p class="text-sm md:text-base sm:text-3xl">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
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

.review-border {
    background-color: transparent;
    border: 1px solid dimgray;
}

@media only screen and (min-width: 768px) {
    /* Apply styles for screens 768px and above */
    .review-medium {
        position: relative;
        left: 20%;
    }
}

</style>
