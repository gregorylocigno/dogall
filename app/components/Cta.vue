<template>
  <UContainer class="pt-16">
    <UPageCTA
      title="Rejoignez-nous dans cette aventure"
      description="Offrez à votre chien (et à vous-même) le cadeau d'un lien puissant et transformateur. Avec notre accompagnement, vous pourrez vivre une expérience unique, bâtie sur l'écoute, la compréhension et l'amour."
      variant="soft"
      :links="links"
    />
  </UContainer>
</template>

<script setup lang="ts">
const links = ref([
  {
    label: "Contactez-moi",
    color: "neutral",
    trailingIcon: "i-lucide-arrow-right",
  },
]);
</script>
