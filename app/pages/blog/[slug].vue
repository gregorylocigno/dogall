<template>
  <UContainer>
    <UPageHeader
      headline="Le Blog"
      :ui="{ root: 'relative border-none border-default py-8' }"
    >
      <template #title>
        <h1>
          {{ post.title }}
        </h1>
      </template>
      <template #description>
        <p>
          {{ post.description }}
        </p>
      </template>
    </UPageHeader>
    <img
      v-if="post.image"
      :src="post.image"
      :alt="post.title"
      class="w-full h-auto rounded-2xl shadow-lg ring ring-default"
    />
    <UBlogPost
      v-if="post"
      :authors="authors"
      orientation="vertical"
      class="mb-8"
      variant="naked"
    >
      <template #description>
        <ContentRenderer :value="post" class="prose" />
        <p>Le {{ formatDateFR(post.date) }}</p>
      </template>
    </UBlogPost>

    <UButton
      to="/blog"
      color="primary"
      size="lg"
      variant="link"
      leading-icon="i-heroicons-arrow-left"
      class="mt-8"
      label="Retour à la liste des articles"
    />
  </UContainer>
</template>

<script setup>
import { formatDateFR } from "~/composables/formatDate";

const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection("blog").path(`/blog/${slug}`).first()
);

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
