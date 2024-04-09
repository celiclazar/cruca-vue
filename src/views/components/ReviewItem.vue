<script>
export default {
    props: {
        review: Object
    }
};
</script>

<template>
    <div class="border border-white p-6 mb-6 h-auto">
        <!-- Review content here -->
        <div class="relative h-8">
            <img class="h-8" src="/icons/quote.png">
        </div>
        <div>
            <p class="p-2 text-left font-body font-normal text-base leading-6">{{ review.text }}</p>
        </div>
        <div class="relative flex justify-end h-8">
            <img class="h-8" src="/icons/quote.png">
        </div>
    </div>
</template>

<style>

</style>
