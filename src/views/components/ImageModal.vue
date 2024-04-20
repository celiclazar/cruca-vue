<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import swiper from "swiper";

export default {
  computed: {
    swiper() {
      return swiper
    }
  },

  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.setupSwiper();
  },
  methods: {
    setupSwiper() {
      new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    },
  },

};
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center" @click.self="$emit('close')">
    <div class="h-2/3 bg-black bg-opacity-95">
      <div class="swiper-button-prev absolute flex top-1/3 left-0 transform -translate-y-1/2 text-white"></div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="image in images" :key="image.id" class="swiper-slide px-12">
            <img :src="image.url" :alt="image.alt" class="rounded-md object-contain">
            <h1 class="mt-4 text-white text-3xl font-heading">Tattoo</h1>
            <p class="mt-2 text-white text-xl font-body">{{ image.alt }} and some extra description</p>
          </div>
        </div>
      </div>
      <div class="swiper-button-next absolute top-1/3 right-0 transform -translate-y-1/2 text-white"></div>
    </div>
  </div>
</template>

<style scoped>

.swiper-container {
  width: 450px;
  height: 300px;
}

</style>
