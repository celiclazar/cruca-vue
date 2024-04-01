<script>

import AppLayout from '../layouts/AppLayout.vue';
import AboutPreview from '../components/AboutPreview.vue';
import BookingPreview from '../components/BookingPreview.vue';
import GalleryPreview from '../components/GalleryPreview.vue';
import ImageHeaderSection from '../components/ImageHeaderSection.vue';
import MerchPreview from "../components/MerchPreview.vue"
import ReviewsPreview from '../components/ReviewsPreview.vue';
import MainHeaderSection from "../components/MainHeaderSection.vue";

export default {
    props: {
      /*
      aboutPreview: Object,
      bookingPreview: Object,
      galleryPreview: Object,
      headerImageUrl: String,
      merchPreview: Object,
      reviewsPreview: Object,

      This needs to come from backend
       */
    },
    components: {
      MainHeaderSection,
      AboutPreview,
      AppLayout,
      BookingPreview,
      GalleryPreview,
      ImageHeaderSection,
      MerchPreview,
      ReviewsPreview,
    }
}
</script>

<template>
    <AppLayout>
      <ImageHeaderSection class=""/>
      <MainHeaderSection class="move-up" />
      <AboutPreview class="sm:py-28"/>
      <GalleryPreview class="py-28"/>
      <MerchPreview class="py-28"/>
      <ReviewsPreview class="pt-28 pb-0"/>
      <BookingPreview class="py-0 sm:py-28"/>
    </AppLayout>
</template>

<style>

.move-up {
  background-color: transparent;
  box-shadow: 5px;
}

@media only screen and (min-width: 768px) {
    /* Apply styles for medium screens and above */
    .move-up {
      width: 100%;
      height: 100%;
      background-color: transparent;
      position: relative;
      margin: -320px 0 50px 0; /* Default margin for all screen sizes */
    }
}
</style>