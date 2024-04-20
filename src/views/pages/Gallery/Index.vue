<script>
import { ref, computed } from 'vue';
import AppLayout from "/src/views/layouts/AppLayout.vue";
import ImageModal from "/src/views/components/ImageModal.vue";

export default {
  components: {
    AppLayout,
    ImageModal
  },
  setup() {
    const currentFilter = ref('tattoo');
    const modalOpen = ref(false);

    const images = [
      { id: 1, url: '/gallery_images/image1.jpg', alt: 'Image 1', type: 'tattoo' },
      { id: 2, url: '/gallery_images/image2.jpg', alt: 'Image 2', type: 'sketch' },
      { id: 3, url: '/gallery_images/image3.jpg', alt: 'Image 3', type: 'tattoo' },
      { id: 4, url: '/gallery_images/image4.jpg', alt: 'Image 4', type: 'sketch' },
      { id: 5, url: '/gallery_images/image5.jpg', alt: 'Image 5', type: 'tattoo' },
      { id: 6, url: '/gallery_images/image6.jpg', alt: 'Image 6', type: 'sketch' },
      { id: 7, url: '/gallery_images/image7.jpg', alt: 'Image 7', type: 'tattoo' },
      { id: 8, url: '/gallery_images/image8.jpg', alt: 'Image 8', type: 'sketch' },
      { id: 9, url: '/gallery_images/image9.jpg', alt: 'Image 9', type: 'tattoo' },
      { id: 10, url: '/gallery_images/image10.jpg', alt: 'Image 10', type: 'sketch' },
      { id: 11, url: '/gallery_images/image11.jpg', alt: 'Image 11', type: 'tattoo' },
      { id: 12, url: '/gallery_images/image12.jpg', alt: 'Image 12', type: 'sketch' },
      { id: 13, url: '/gallery_images/image13.jpg', alt: 'Image 13', type: 'tattoo' },
      { id: 14, url: '/gallery_images/image14.jpg', alt: 'Image 14', type: 'sketch' },
      { id: 15, url: '/gallery_images/image15.jpg', alt: 'Image 15', type: 'tattoo' },
      { id: 16, url: '/gallery_images/image16.jpg', alt: 'Image 16', type: 'sketch' }
    ];

    const filteredImages = computed(() => {
      switch (currentFilter.value) {
        case 'tattoo':
          return images.filter(image => image.type === 'tattoo');
        case 'sketch':
          return images.filter(image => image.type === 'sketch');
        default:
          return images;
      }
    });

    const modalImages = ref([]);

    function setFilter(filter) {
      currentFilter.value = filter;
    }

    function openModalWithSlider(image) {
      const tempImages = filteredImages.value.filter(img => img.id >= image.id);
      modalImages.value = [...tempImages];
      modalOpen.value = true;
    }

    return {
      currentFilter,
      filteredImages,
      setFilter,
      modalOpen,
      modalImages,
      openModalWithSlider,
    };
  },
}
</script>

<template>
  <AppLayout>
    <section class="bg-black text-white py-24">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-heading text-center mb-12">Gallery</h2>
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
            <div v-for="image in filteredImages" :key="image.id" class="overflow-hidden grayscale">
              <img :src="image.url" :alt="image.alt" class="w-full h-auto object-cover mx-auto rounded-xl" @click="openModalWithSlider(image)">
            </div>
          </div>
        </div>
      </div>
    </section>
    <Teleport to="body">
      <ImageModal v-if="modalOpen" :images="modalImages" @close="modalOpen = false" />
    </Teleport>
  </AppLayout>
</template>

<style>

</style>
