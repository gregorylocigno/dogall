<template>
  <UContainer>
    <UPageHeader
      title="Pour une éducation canine consciente et durable"
      headline="Le Blog"
      :ui="{ root: 'relative border-none border-default py-8' }"
    >
      <template #description>
        <p class="text-[15px]">
          Explorez nos articles pour mieux comprendre votre chien, éviter les
          erreurs d’éducation courantes et adopter une approche respectueuse.
        </p>
      </template>
    </UPageHeader>
    <UPageBody>
      <!-- Article à la une, en grand -->
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

      <!-- Liste des autres articles -->
      <UBlogPosts>
        <UBlogPost
          v-for="post in otherPosts"
          :key="post.path"
          v-bind="post"
          :to="post.path"
          :date="formatDateFR(post.date)"
          :authors="authors"
        />
      </UBlogPosts> </UPageBody
  ></UContainer>
</template>

<script setup lang="ts">
import { formatDateFR } from "~/composables/formatDate";

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

const { featuredPost, otherPosts } = useBlogPosts();
</script>
