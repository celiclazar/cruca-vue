<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <!-- Your application layout goes here -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  // You can include global components or define data/methods here
}
</script>

<style>
/* Your global styles go here */
</style>

