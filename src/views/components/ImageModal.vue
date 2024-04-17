<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-gray-800 p-6 rounded-lg">
      <h1 class="font-heading">Tattoo</h1>
      <img :src="image.url" :alt="image.alt" class="w-full h-96 object-contain">
      <p class="mt-2">{{ image.description || image.alt }}</p>
      <button @click="$emit('close')" class="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
/* No need for scoped styles in Vue with Tailwind CSS */
</style>
