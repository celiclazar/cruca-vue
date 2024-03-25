<script>

import AppLayout from "/src/views/layouts/AppLayout.vue";

export default {
  props: {
    reviews: Array
  },
  components: {
    AppLayout,
  },
  data() {
    return {
      form: {
        text:''
      }
    };
  },
  methods: {
    submitForm() {
      // Create FormData to handle file upload and other fields
      let formData = new FormData();
      for (const [key, value] of Object.entries(this.form)) {
        formData.append(key, value);
      }

      // Submit the form data using Inertia's post method
      router.post('/submit-review', formData, {
        onProgress: progressEvent => {
          const progress = progressEvent.loaded / progressEvent.total;
          // Handle the progress event here, like updating a progress bar
        },
        onSuccess: () => {
          this.resetForm();
        },
        onError: () => {
          //error poruku dodati
        }
      });
    },
    resetForm() {
      this.form = {
        text: '',
      };
    },
  }
}
</script>

<template>
  <AppLayout>
    <div class="bg-black text-white py-28 px-24">
      <div class="flex flex-col w-full mx-auto relative border-2 border-amber-400">
        <h1 class="flex-1 font-heading uppercase text-center h-10">Reviews</h1>
        <div class="grid grid-cols-3 gap-4 p-4">
          <!-- Iterate over reviews and display each review in a grid item -->
          <div v-for="(review, index) in reviews" :key="index" class="border border-white p-4">
            <p>{{ review.text }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col border-pink-500 border-2">
        <h1 class="p-4 font-heading uppercase text-center h-10">Wrtie A Review</h1>
        <form @submit.prevent="submitForm">
          <div class="flex justify-center p-4">
            <textarea v-model="form.text" class="booking-input h-16 w-1/3 lg:h-3/4 font-body italic" placeholder="Review.." required></textarea>
          </div>
          <div class="text-center mt-8 py-6">
            <button type="submit" class="h-8 w-32 px-6 py-1 send-button font-button uppercase tracking-wide hover:bg-gray-100 hover:text-black transition-colors duration-300">
              Send &raquo;
            </button>
          </div>
        </form>
      </div>
    </div>

  </AppLayout>
</template>

<style>
.booking-input {
  background-color: transparent;
  border: 1px solid dimgray;
  padding: 1rem;
  border-radius: 0.25rem;
}
.send-button {
  border-width: 1px;
  border-color: dimgray;
  color: dimgray;
}
</style>
