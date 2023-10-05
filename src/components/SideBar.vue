<template>
  <section className="leftsidebar">
    <div className="flex w-full flex-1 flex-col gap-6 px-6">
        <h2 class="text-white pl-4 uppercase">Menu</h2>
        <a class="leftsidebar_link" v-for="(link, index) in sidebarLinks" :key="index">
            <img class="w-[24px] h-[24px]" :src="link.imgURL" alt="{{ link.label }}">
            <p class="text-white max-lg:hidden">{{ link.label }}</p>
        </a>
    </div>
  </section>
</template>

<script setup>
import { sidebarLinks } from '../assets/constants';

</script>

<style>

</style>