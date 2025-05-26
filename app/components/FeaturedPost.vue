<template>
  <UBlogPost
    v-if="featuredPost"
    v-bind="featuredPost"
    :to="featuredPost.path"
    :date="formatDateFR(featuredPost.date)"
    class="mb-12"
    orientation="horizontal"
    :badge="{
      label: 'À la une',
      color: 'primary',
      icon: 'i-heroicons-star',
    }"
    :authors="authors"
  />
</template>

<script setup lang="ts">
const { featuredPost } = useBlogPosts();
const authors = ref([
  {
    name: "Alain Humblet",
    description: "Fondateur de Dog All - Coaching Canin",
    avatar: {
      src: "/howiam.jpg",
    },
    to: "/#how-iam",
  },
]);
</script>
