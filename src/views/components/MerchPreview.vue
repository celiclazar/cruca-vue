<script>
export default {
  props: {
    merchPreview: Object
  },
  name: "MerchPreview",
}
</script>

<template>
  <div class="section-merch bg-no-repeat bg-cover bg-center" :style="{ backgroundImage: 'url(/images/home_merch.jpg)' }">
    <div class="container mx-auto px-4 text-center">
      <router-link to="/merch" class="font-heading text-4xl uppercase text-white mb-8">Merch &raquo;</router-link>
    </div>
  </div>
</template>

<style scoped>
.section-merch {
  width: 100%;
  height: 50vh; /* Adjust this value as needed for your design */
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  flex-direction: column;
  display: flex;
  align-items: center;
}

@media (min-width: 768px) { /* Adjust this for your preferred breakpoint */
  .section-merch {
    height: 60vh; /* Larger screens might need a different height */
  }
}
</style>
