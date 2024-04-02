<script>

import AppLayout from "/src/views/layouts/AppLayout.vue";

export default {
    components: {
        AppLayout,
    },
    data() {
        return {
            form: {
                text:''
            },
            // Hardcoded because I don't have backend here
            reviews: [
                { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut enim nec sapien placerat euismod.", approved: 1, created_at: "2024-03-06 23:22:50", updated_at: "2024-03-06 23:22:50" },
                { id: 2, text: "Fusce vestibulum sapien ut augue dapibus", approved: 0, created_at: "2024-03-06 23:22:50", updated_at: "2024-03-06 23:22:50" },
                { id: 3, text: "Nullam fringilla lectus sed risus gravida rutrum. Sed id mi quis elit rhoncus fermentum nec nec urna.  vel ultrices odio tempus. Integer sit amet eros justo.", approved: 1, created_at: "2024-03-06 23:22:50", updated_at: "2024-03-06 23:22:50" },
                { id: 4, text: "Vestibulum ut magna eget libero vestibulum hendrerit. Aenean auctor odio ac risus commodo, sit amet malesuada ex dapibus.", approved: 0, created_at: "2024-03-06 23:22:50", updated_at: "2024-03-06 23:22:50" },
                { id: 5, text: "Proin consequat sem nec neque eleifend, eu lobortis lectus molestie. Ut sagittis augue vel nunc sollicitudin, a lacinia est consectetur.", approved: 1, created_at: "2024-03-06 23:22:50", updated_at: "2024-03-06 23:22:50" },
                { id: 6, text: "Donec ullamcorper purus non eros suscipit, et interdum libero bibendum. Duis suscipit libero quis metus varius, at varius mauris feugiat.", approved: 0, created_at: "2024-03-06 23:22:50", updated_at: "2024-03-06 23:22:50" },
                { id: 7, text: "Pellentesque lobortis turpis eu bibendum blandit. Duis aliquet metus in augue eleifend, vel feugiat eros maximus.", approved: 1, created_at: "2024-03-06 23:22:50", updated_at: "2024-03-06 23:22:50" },
                { id: 8, text: "Morbi finibus ipsum vel nisi eleifend, nec lacinia est tempus. Quisque ut eros sed ante posuere pharetra at a lacus.", approved: 0, created_at: "2024-03-06 23:22:50", updated_at: "2024-03-06 23:22:50" },
                { id: 9, text: "Aliquam bibendum lacus vitae justo rutrum, vel congue lorem ultricies. Vestibulum et purus eu eros blandit bibendum nec non libero.", approved: 1, created_at: "2024-03-06 23:22:50", updated_at: "2024-03-06 23:22:50" },
                { id: 10, text: "Maecenas non purus non nisl fermentum facilisis. Cras ultricies lectus in tellus congue, et feugiat tortor fringilla.", approved: 0, created_at: "2024-03-06 23:22:50", updated_at: "2024-03-06 23:22:50" },
                { id: 11, text: "Vivamus nec arcu sed felis ultricies laoreet. In hac habitasse platea dictumst. Etiam quis semper dolor.", approved: 1, created_at: "2024-03-06 23:22:50", updated_at: "2024-03-06 23:22:50" },
                { id: 12, text: "Quisque non arcu tincidunt, luctus libero sit amet, auctor eros. Sed a felis id magna blandit fringilla.", approved: 0, created_at: "2024-03-06 23:22:50", updated_at: "2024-03-06 23:22:50" },
                { id: 13, text: "Nam in dui in metus vestibulum tempus. Donec eu metus ut est ullamcorper auctor. Nullam rhoncus massa in libero maximus tincidunt.", approved: 1, created_at: "2024-03-06 23:22:50", updated_at: "2024-03-06 23:22:50" },
                { id: 14, text: "Praesent fringilla orci at turpis malesuada, id tincidunt sem dapibus. Cras nec sapien ut arcu efficitur laoreet.", approved: 0, created_at: "2024-03-06 23:22:50", updated_at: "2024-03-06 23:22:50" }
            ]
        };
    },
    methods: {
        submitForm() {
            // Create FormData to handle file upload and other fields
            let formData = new FormData();
            for (const [key, value] of Object.entries(this.form)) {
            formData.append(key, value);
            }

            // Hit api with Inertia but with Laravel

            /* router.post('/submit-review', formData, {
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
            }); */

            this.resetForm();

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
        <div class="bg-black text-white mt-24 px-12 border-t border-white">
            <div class="flex flex-col mt-10 w-full mx-auto relative">
                <div class="">
                  <h1 class="font-heading text-4xl uppercase text-center h-10">Reviews</h1>
                </div>
                <div class="mt-10 flex flex-col">
                  <div v-for="(review, index) in reviews" :key="index"
                       class="border border-white p-6 mb-6 h-auto">
                    <div class="relative h-8">
                      <img class="h-8" src="/icons/quote.png">
                    </div>
                    <div>
                      <p class="text-left font-body font-normal text-base leading-6">{{ review.text }}</p>
                    </div>
                    <div class="relative flex justify-end h-8">
                      <img class="h-8" src="/icons/quote.png">
                    </div>
                  </div>
                </div>
            </div>
            <div class="flex flex-col mt-10">
                <div>
                  <h1 class="font-heading text-3xl uppercase text-center h-10 mt-10">Wrtie A Review</h1>
                </div>
                <div class="">
                    <form @submit.prevent="submitForm">
                        <div class="flex justify-center mt-8">
                            <textarea
                                v-model="form.text"
                                class="booking-input h-24 w-full lg:h-3/4 font-body italic"
                                placeholder="Review.." required>
                            </textarea>
                        </div>
                        <div class="text-center mt-8 mb-12">
                            <button type="submit" class="h-8 w-32 px-6 py-1 send-button font-button uppercase tracking-wide hover:bg-gray-100 hover:text-black transition-colors duration-300">
                                Send &raquo;
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<style>
.booking-input {
  background-color: transparent;
  border: 1px solid white;
}
.send-button {
  border-width: 1px;
  border-color: white;
  color: white;
}
</style>
