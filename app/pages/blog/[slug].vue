<template>
  <UCard>
    <template #header>
      <img
        v-if="post.image"
        :src="post.image"
        :alt="post.title"
        class="mb-4 rounded"
      />
      <h1 class="text-2xl font-bold">{{ post.title }}</h1>
    </template>

    <template #default>
      <div class="prose">
        <ContentRenderer :value="post" />
      </div>
    </template>

    <template #footer>
      <p class="text-sm text-gray-500">
        Publié le {{ new Date(post.date).toLocaleDateString() }}
      </p>
    </template>
  </UCard>
</template>

<script setup>
const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection("blog").path(`/blog/${slug}`).first();
});
</script>
