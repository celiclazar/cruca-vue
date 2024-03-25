<script>

import VueTailwindDatepicker from "vue-tailwind-datepicker";

export default {
  components: { VueTailwindDatepicker },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        budget: '',
        tattooIdea: '',
        photo: null, // This will hold the file object
        preferredDate: '', // This will hold the preferred date
      },
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
      router.post('/submit-booking', formData, {
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
        name: '',
        email: '',
        phone: '',
        budget: '',
        tattooIdea: '',
        photo: null,
        preferredDate: '',
      };
    },
    handleFileUpload(event) {
      this.form.photo = event.target.files[0];
    },
  },
};
</script>

<template>
  <form @submit.prevent="submitForm" class="section-book bg-black text-white py-12">
    <div class="section-book bg-black text-white py-12">
      <div class="container mx-auto px-4 sm:px-16">
        <h2 class="font-heading text-2xl sm:text-4xl uppercase text-center mb-10">Book an Appointment</h2>
        <div class="flex flex-col lg:flex-row justify-center gap-8">
          <!-- Left Column -->
          <div class="flex flex-col space-y-4 w-full lg:w-1/4">
            <input v-model="form.name" class="booking-input font-body italic" type="text" placeholder="Name*" required>
            <input v-model="form.email" class="booking-input font-body italic" type="email" placeholder="E-mail*" required>
            <input v-model="form.phone" class="booking-input font-body italic" type="tel" placeholder="Phone*" required>
            <input v-model="form.budget" class="booking-input font-body italic" type="text" placeholder="Budget (optional)">
          </div>
          <!-- Right Column -->
          <div class="flex flex-col space-y-4 w-full lg:w-2/4">
            <textarea v-model="form.tattooIdea" class="booking-input min-h-48 lg:h-3/4 font-body italic" placeholder="Tattoo idea*" required></textarea>

            <div class="grid lg:flex lg:space-x-4 items-center justify-items-center lg:h-8">
              <label for="file-upload" class="booking-button font-body italic">
                <img src="/icons/attach.png" alt="Attach a photo" class="inline-block">
                attach a photo*
              </label>
              <input @change="handleFileUpload" ref="fileInput" id="file-upload" type="file" hidden>
              <div class="ml-20 justify-items-center">
                <img src="/icons/calendar.png" class="inline-block">
                <VueTailwindDatepicker
                    class="inline-block h-8 outline-none sm:w-full"
                    :id="'date-picker'"
                    v-model="form.preferredDate"
                    overlay
                    as-single
                    placeholder="preferred date*"/>
              </div>
            </div>
            <div class="text-center lg:text-right mt-8">
              <div class="flex-1 w-1/4"></div>
              <button type="submit" class="inline-block right-0 px-6 py-1 send-button font-button uppercase tracking-wide hover:bg-gray-100 hover:text-black transition-colors duration-300">
                Send &raquo;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style>

input::placeholder{
  color: dimgray;
  font-family: Montserrat;
  font-size: 1rem;
  font-style: italic;
  border: none;
  outline: none;
}
svg {
  visibility: hidden;
  cursor: text;
}
input:hover::placeholder{
  color: white;
}
#date-picker {
  background: black;
  width: 200px;
  border: none;
  color: dimgray;
}

.booking-input {
  background-color: transparent;
  border: 1px solid dimgray;
  padding: 1rem;
  border-radius: 0.25rem;
}
.booking-input::placeholder {
  color: dimgray;
}
.booking-input:focus {
  outline: none !important;
  background-color: transparent;
  border-radius: 10px;
  transition: all 0.4s ease 50ms;
  color: white;
}
.booking-button {
  color: dimgray;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
}
.booking-button:hover {
  color: white;
}
.send-button {
  border-width: 1px;
  border-color: dimgray;
  color: dimgray;
}
</style>
