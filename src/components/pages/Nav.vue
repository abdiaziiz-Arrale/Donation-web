<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="fixed w-full bg-white h-16">
    <div class="flex">
      <div class="">
        <img src="./logo.png" alt="" class="h-12 w-32" />
      </div>
      <nav class="py-1">
        <ul class="hidden md:flex justify-center space-x-6 ml-4 items-center">
          <li>
            <RouterLink to="/Home" class="navbar">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/donation" class="navbar">Donation</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="navbar">Contact Us</RouterLink>
          </li>
          <div class="space-x-10 py-1">
            <svg
              class="w-6 h-6 ml-24"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          +2520634512911
          <div class="">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z"></path>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <li>
            <RouterLink
              to="/Donation"
              class="btnDonate "
              >Donatation</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="absolute z-50 mt-16 ml-96 ">
    <div class="ml-96 "  >
      <h1 class="font-extrabold text-3xl text-white w-1/2">
        The Power to Choose The Donation Of instiution in a Poor People
      </h1>
	<div class="mt-6">
      <RouterLink
        to="/Donation"
        class="btnDonate text-white mt-2"
        >Donatation</RouterLink
      ></div>
    </div>
  </div>
  <div class="absolute mt-12">
    <img src="./OIP.jfif" alt="" class="w-screen h-72" />
  </div>

  <Router-view />
</template>




