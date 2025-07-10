<template>
  <Hero />
  <MyVision />
  <Prices />
  <HowIam />
  <Cta />
  <UPageSection
    id="blog"
    title="Pour une éducation canine consciente et durable"
    headline="Le Blog"
  >
    <template #description>
      <div class="flex flex-col gap-y-4">
        <p class="max-w-4xl">
          Explorez nos articles pour mieux comprendre votre chien, éviter les
          erreurs d’éducation courantes et adopter une approche respectueuse.
        </p>
        <UButton
          to="/blog"
          label="Voir tous les articles"
          variant="link"
          color="primary"
          trailing-icon="i-lucide-arrow-right"
          class="px-0 hover:underline"
        />
      </div>
    </template>
    <FeaturedPost />
  </UPageSection>
</template>
