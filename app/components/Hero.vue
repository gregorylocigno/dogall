<template>
  <UContainer id="home" class="mt-5">
    <img
      class="rounded-2xl shadow-lg ring ring-default"
      src="/hero-banner.jpg"
      alt="Coach with dogs"
    />
    <div class="flex flex-row mt-12">
      <div>
        <h1 class="text-5xl/16 font-bold text-highlighted">
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
            >Juin 2025</UBadge
          >
          <UButton
            variant="link"
            size="sm"
            color="neutral"
            trailing-icon="i-lucide-arrow-right"
            class="text-sm font-normal hover:underline cursor-pointer"
          >
            De nouvelles façons de grandir avec votre chien
          </UButton>
        </div>
        <p class="text-lg">
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
