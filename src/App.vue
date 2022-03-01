<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Nav from "./components/pages/Nav.vue";
import Home from "./components/pages/Home.vue";
</script>

<template>
  <Nav />
<div class="py-48"></div>
  <Home />
  <Router-view />
</template>


