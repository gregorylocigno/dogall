<template>
  <UApp>
    <UHeader>
      <template #title>
        <ClientOnly>
          <Logo />
        </ClientOnly>
      </template>

      <UNavigationMenu :items="items" variant="link" />

      <template #right>
        <div class="flex">
          <UButton label="Connexion" variant="link" color="neutral" />
          <UButton label="Contact" color="neutral" />
        </div>
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter class="h-50 pt-24">
      <template #left>
        <ClientOnly>
          <Logo />
        </ClientOnly>
      </template>

      <UNavigationMenu :items="items" variant="link" />

      <template #right>
        <div class="flex flex-col gap-2 items-end">
          <p class="text-sm text-pretty text-muted">
            Suivez-moi sur les réseaux
          </p>
          <div>
            <UButton
              icon="i-simple-icons-facebook"
              color="neutral"
              variant="link"
              to="https://chat.nuxt.dev"
              target="_blank"
              aria-label="Discord"
              size="xl"
            />
            <UButton
              icon="i-simple-icons-instagram"
              color="neutral"
              variant="link"
              to="https://x.com/nuxt_js"
              target="_blank"
              aria-label="X"
              size="xl"
            />
          </div>
        </div>
      </template>
    </UFooter>
  </UApp>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { useSectionObserver } from "~/composables/useSectionObserver";
import { useRoute } from "vue-router";

const route = useRoute();

// Utiliser le composable avec des options personnalisées
const { activeSection } = useSectionObserver({
  rootMargin: "-60px 0px 0px 0px", // Ajuster selon la hauteur de votre header
  activeOffset: 150, // Position depuis le haut pour déterminer la section active
});

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
    active:
      activeSection.value === "home" ||
      (!activeSection.value && route.path === "/"),
  },
  {
    label: "Ma vision",
    to: { path: "/", hash: "#vision" },
    active: activeSection.value === "vision",
  },
  {
    label: "Services",
    to: { path: "/", hash: "#prices" },
    active: activeSection.value === "prices",
  },
  {
    label: "Blog",
    to: "/blog",
    active: route.path.startsWith("/blog"),
  },
]);
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
