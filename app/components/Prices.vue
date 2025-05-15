<template>
  <UPageSection
    id="prices"
    title="Un accompagnement pensé pour vous deux"
    headline="Services"
  >
    <template #description>
      <p class="max-w-4xl">
        Avec une véritable passion pour les chiens, je m'engage à vous offrir un
        accompagnement personnalisé et de qualité. Je suis à votre écoute et
        disponible pour répondre à toutes vos questions et vous guider dans les
        diverses étapes de la vie de votre chien.
      </p>
    </template>
    <UPricingPlans :plans="plans" />
  </UPageSection>
</template>

<script setup lang="ts">
import { badge } from "#build/ui";
import { icon } from "#build/ui-pro/prose";
import { Title } from "#components";

const plans = ref([
  {
    title: "Bilan Comportemental",
    description:
      "Le bilan est conçu pour évaluer en profondeur le comportement de votre chien ou chiot. Permet d'établir une base solide pour une éducation efficace et positive. La séance se déroule chez vous ou dans le lieu de votre choix.",
    price: "90 € ",
    features: [
      {
        title: "Séance de 1H30",
        icon: "i-lucide-clock",
      },
      {
        title: "Exercices pratiques",
        icon: "i-lucide-clipboard-list",
      },
      {
        title: "Rapport détaillé",
        icon: "i-lucide-notebook",
      },
      {
        title:
          "Une étape essentielle si nous ne connaissons pas encore votre chien",
        icon: "i-lucide-dog",
      },
    ],
    button: {
      label: "En savoir plus",
    },
    highlight: true,
  },
  {
    title: "Séance de Coaching Simple",
    description:
      "Cette formule est conçue pour suivre le bilan comportemental et appronfondir les techniques d'éducation. Elle est parfaite pour les propriétaires qui souhaitent des conseils pratiques et des solutions rapides.",
    price: "60 €",
    features: [
      {
        title: "Séance d'éducation de 1H",
        icon: "i-lucide-clock",
      },
      {
        title: "Réponses aux questions",
        icon: "i-lucide-message-circle",
      },
      {
        title: "Plans d'entraînement personnalisés",
        icon: "i-lucide-calendar-days",
      },
      {
        title:
          "Idéal pour des sessions régulières qui s'adaptent à votre emploi du temps",
        icon: "i-lucide-arrow-left-right",
      },
    ],
    button: {
      label: "En savoir plus",
      variant: "outline",
      color: "neutral",
    },
  },
  {
    title: "Besoin d'un accompagnement spécifique ?",
    description:
      "Solution personnalisée pour répondre à toutes vos demandes en matière de comportement canin ou de suivi pour chiots et chiens adultes. Cette formules est idéale pour des besoins particuliers ou un suivi intensif.",
    features: [
      {
        title: "Prix sur demande",
        icon: "i-lucide-euro",
      },
      {
        title: "Évaluation personnalisée",
        icon: "i-lucide-notebook-pen",
      },
      {
        title: "Suivi intensif",
        icon: "i-lucide-chart-spline",
      },
      {
        title: "Plan d'entraînement personnalisé",
        icon: "i-lucide-calendar-days",
      },
    ],
    button: {
      label: "Je fais une demande",
      variant: "outline",
      color: "neutral",
    },
  },
]);
</script>
