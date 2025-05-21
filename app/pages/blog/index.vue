<template>
  <UPageBody>
    <UContainer>
      <!-- Article à la une, en grand -->
      <UBlogPost
        v-if="featuredPost"
        v-bind="featuredPost"
        :to="featuredPost.path"
        class="mb-12"
        orientation="horizontal"
      />

      <!-- Liste des autres articles -->
      <UBlogPosts>
        <UBlogPost
          v-for="post in otherPosts"
          :key="post.path"
          v-bind="post"
          :to="post.path"
        />
      </UBlogPosts>
    </UContainer>
  </UPageBody>
</template>

<script setup lang="ts">
const { featuredPost, otherPosts } = useBlogPosts();
</script>
