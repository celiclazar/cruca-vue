<script>

import { ref, computed } from 'vue';
import AppLayout from "/src/views/layouts/AppLayout.vue";

export default {
  props: { images: Array },
  components: {
    AppLayout,
  },
  setup(props) {
    const currentFilter = ref('tattoo');

    const filteredImages = computed(() => {
      switch (currentFilter.value) {
        case 'tattoo':
          return props.images.filter(image => image.type === 'tattoo');
        case 'sketch':
          return props.images.filter(image => image.type === 'sketch');
        default:
          return props.images;
      }
    });

    function setFilter(filter) {
      currentFilter.value = filter;
    }

    return {
      currentFilter,
      filteredImages,
      setFilter
    };
  },
}
</script>

<template>
  <AppLayout>
    <section class="bg-black text-white py-24">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Gallery</h2>
        <!-- Tabs or Category Filters -->
        <div class="flex justify-center mb-8">
          <!-- Assuming you have some method to switch tabs or filter categories -->
          <button @click="setFilter('tattoo')" class="bg-transparent font-body border-none text-white mr-2 p-2 hover:underline" :class="{ 'underline': currentFilter === 'tattoo' }">Tattoos</button>
          <button @click="setFilter('sketch')" class="bg-transparent border-none text-white p-2 hover:underline" :class="{ 'underline': currentFilter === 'sketch' }">Available sketches</button>
        </div>
        <!-- Grid of images -->
        <div class="w-2/3 mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <!-- Loop to render filtered images -->
            <div v-for="image in filteredImages" :key="image.id" class="overflow-hidden">
              <img :src="image.url" :alt="image.alt" class="w-full h-auto object-cover mx-auto rounded-xl">
            </div>
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<style>

</style>
