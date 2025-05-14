<template>
  <Hero />
  <MyVision />
  <Prices />
  <Cta />
</template>

<script setup lang="ts">
const links = ref([
  {
    label: "Get started",
    to: "/",
    icon: "i-lucide-square-play",
  },
  {
    label: "Learn more",
    to: "/",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right",
  },
]);
</script>
