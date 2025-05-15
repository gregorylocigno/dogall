<template>
  <UContainer id="home" class="xl:mt-5">
    <picture>
      <source
        media="(min-width: 1024px)"
        srcset="/hero-banner.jpg"
        type="image/jpeg"
      />
      <img
        class="rounded-2xl shadow-lg ring ring-default"
        src="/hero-mobile.jpg"
        alt="Coach with dogs"
      />
    </picture>
    <div class="flex flex-col lg:flex-row mt-6 lg:mt-12 gap-6">
      <div>
        <h1 class="font-bold text-highlighted text-3xl md:text-5xl/16">
          Construisez une relation fondée sur la
          <span class="text-primary">confiance</span> et le
          <span class="text-primary">respect</span>
        </h1>
      </div>

      <div class="flex flex-col gap-6 justify-center">
        <div class="flex items-center">
          <UBadge
            class="font-medium rounded-full"
            variant="soft"
            icon="i-lucide-stars"
            color="accent"
            >Actualités</UBadge
          >
          <UButton
            variant="link"
            size="sm"
            color="neutral"
            trailing-icon="i-lucide-arrow-right"
            class="text-sm font-normal hover:underline cursor-pointer"
          >
            Nouveautés & événements
          </UButton>
        </div>
        <p class="text-md md:text-lg">
          — Ensemble, nous ferons de votre relation avec votre chien une
          expérience enrichissante et harmonieuse.
        </p>
        <div class="flex gap-5">
          <UButton
            label="Ma vision"
            icon="i-lucide-heart"
            variant="outline"
            color="neutral"
          />
          <UButton
            label="Contactez-moi"
            trailing-icon="i-lucide-arrow-right"
            color="neutral"
          />
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts"></script>
