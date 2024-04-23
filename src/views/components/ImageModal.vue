<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  computed: {
    swiper() {
      return Swiper;
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
    <div class="h-2/3 sm:w-full bg-black bg-opacity-95">
      <div class="swiper-button-prev absolute flex top-1/3 sm:top-1/2 left-0 sm:left-6 transform -translate-y-1/2 text-white"></div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="image in images" :key="image.id" class="swiper-slide sm:flex sm:flex-row px-12">
            <img :src="image.url" :alt="image.alt" class="swiper-img">
            <div class="p-2">
              <h1 class="mt-4 sm:mt-20 sm:ml-10 text-white text-5xl font-heading">Tattoo</h1>
              <p class="mt-2 sm:w-1/2 sm:mt-10 sm:ml-10 text-white text-xl font-body">{{ image.alt }} and some extra description and some extra description and some extra description</p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-next absolute top-1/3 sm:top-1/2 right-0 sm:right-6 transform -translate-y-1/2 text-white"></div>
    </div>
  </div>
</template>

<style scoped>
@media  screen and (max-width: 640px) {
  .swiper-container {
    width: 450px;
    height: 300px;
  }
}

@media  screen and (min-width: 640px) {
  .swiper-container {
    width: 100%;
    height: 600px;
  }
}

@media  screen and (min-width: 640px) {
  .swiper-img {
    width: 50%;
    height: 100%;
    object-fit: contain;
  }
}



</style>
