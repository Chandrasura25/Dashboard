<template>
  <section className="leftsidebar custom-scrollbar">
    <div className="flex w-full flex-1 flex-col gap-4 px-6 mb-3">
      <h2 class="text-white pl-4 uppercase">Menu</h2>
      <a
        class="leftsidebar_link"
        v-for="(link, index) in sidebarLinks"
        :key="index"
        :href="link.route"
      >
        <img
          class="w-[24px] h-[24px]"
          :src="'/src/assets/images/' + link.imgURL"
          alt="{{ link.label }}"
        />
        <p class="text-white max-lg:hidden">{{ link.label }}</p>
      </a>
    </div>
    <div className="flex w-full flex-1 flex-col gap-4 px-6 mt-4">
      <h2 class="text-white pl-4 uppercase">Administration</h2>
      <a
        class="leftsidebar_link"
        v-for="(link, index) in subSidebarLinks"
        :key="index"
        :href="link.route"
      >
        <img
          class="w-[24px] h-[24px]"
          :src="'/src/assets/images/' + link.imgURL"
          alt="{{ link.label }}"
        />
        <p class="text-white max-lg:hidden">{{ link.label }}</p>
      </a>
    </div>
  </section>
</template>

<script setup>
import { sidebarLinks, subSidebarLinks } from "../assets/constants";
</script>

<style></style>
