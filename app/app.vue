<template>
  <UApp>
    <UHeader>
      <template #title>
        <ClientOnly>
          <Logo />
        </ClientOnly>
      </template>

      <UNavigationMenu :items="items" variant="link" class="hidden lg:block" />

      <template #right>
        <div class="flex">
          <UButton
            label="Connexion"
            variant="link"
            color="neutral"
            class="hidden"
          />
          <UButton
            label="Contact"
            to="/contact"
            color="neutral"
            class="hidden lg:block"
          />
        </div>
      </template>

      <template #toggle>
        <UButton
          :icon="!isModalOpen ? 'i-lucide-menu' : 'i-lucide-x'"
          variant="link"
          color="neutral"
          size="2xl"
          @click="toggleModal"
          class="lg:hidden"
          aria-label="Menu"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <!-- Mobile navigation modal -->
    <UModal
      v-model:open="isModalOpen"
      size="sm"
      :ui="{
        header: 'flex justify-between items-center border-none p-4',
        content:
          'fixed bg-default flex flex-col focus:outline-none border-none shadow-lg',
        body: 'p-4 pt-0',
      }"
      :close="false"
      aria-label="Menu de navigation"
    >
      <template #header>
        <div class="w-full flex justify-center items-center relative">
          <ClientOnly>
            <Logo />
          </ClientOnly>
        </div>
      </template>

      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          variant="link"
          class="w-full [&_a]:justify-center text-center"
        />
      </template>
    </UModal>

    <UFooter class="h-50 pt-16">
      <template #left>
        <ClientOnly>
          <Logo />
        </ClientOnly>
      </template>

      <UNavigationMenu :items="items" variant="link" />

      <template #right>
        <div class="flex flex-col gap-2 items-center lg:items-end">
          <p class="text-sm text-pretty text-muted">
            Suivez-moi sur les réseaux
          </p>
          <div>
            <UButton
              icon="i-simple-icons-facebook"
              color="neutral"
              variant="link"
              to="https://www.facebook.com/share/12J7PTuXnPF/"
              rel="noopener"
              target="_blank"
              aria-label="Facebook"
              size="xl"
            />
            <UButton
              icon="i-simple-icons-instagram"
              color="neutral"
              variant="link"
              to="https://www.instagram.com/dog_all_coaching_canin/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
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
import { useScrollSpy } from "~/composables/useScrollSpy";
import { useRoute, useRouter } from "vue-router";
import { Analytics } from "@vercel/analytics/nuxt";

const route = useRoute();
const router = useRouter();
const isModalOpen = ref(false);

const { activeSection } = useScrollSpy("#home, #vision, #prices, #how-iam");

// Gestion de la modal mobile
const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

onMounted(() => {
  // Enregistre l’observer et récupère la fonction de désinscription
  const removeAfterEach = router.afterEach(() => {
    if (isModalOpen.value) {
      isModalOpen.value = false;
    }
  });

  // Avant que le composant ne soit détruit, on désinscrit l’observer
  onBeforeUnmount(() => {
    removeAfterEach();
  });
});

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: { path: "/", hash: "#home" },
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
    label: "Qui suis-je ?",
    to: { path: "/", hash: "#how-iam" },
    active: activeSection.value === "how-iam",
  },
  {
    label: "Contact",
    to: { path: "/contact" },
    active: route.path === "/contact",
  },
]);
</script>
