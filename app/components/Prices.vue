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
    <UPricingPlans>
      <UPricingPlan
        v-for="(plan, i) in plans"
        :key="i"
        v-bind="{
          title: plan.title,
          description: plan.description,
          price: plan.price,
          features: plan.features,
          button: plan.button,
          highlight: plan.highlight,
        }"
      >
        <template #button>
          <UModal
            :title="plan.title"
            :ui="{
              content:
                'fixed bg-default divide-none divide-default flex flex-col focus:outline-none',
              footer: 'flex flex-col items-center gap-1.5 p-4 sm:px-6',
            }"
          >
            <UButton
              :variant="plan.button.variant"
              :color="plan.button.color"
              class="w-full justify-center"
            >
              {{ plan.button.label }}
            </UButton>
            <template #body>
              <div class="flex flex-col gap-10">
                <p class="text-sm text-muted">{{ plan.modal.description }}</p>
                <div class="flex flex-col gap-4">
                  <UPageFeature
                    v-for="(feat, idx) in plan.modal.features"
                    :key="idx"
                    :title="feat.title"
                    :description="feat.description"
                    :icon="feat.icon"
                    :ui="{
                      description: 'text-sm text-pretty text-muted',
                    }"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <p class="text-highlighted font-semibold">
                    Pourquoi choisir ce service ?
                  </p>
                  <p class="text-sm text-muted">{{ plan.modal.footer }}</p>
                </div>
              </div>
            </template>
            <template #footer>
              <UButton
                label="Contactez-moi"
                to="/contact"
                :variant="plan.button.variant"
                :color="plan.button.color"
                trailing-icon="i-lucide-arrow-right"
                class="w-full justify-center"
              />
            </template>
          </UModal>
        </template>
      </UPricingPlan>
    </UPricingPlans>
  </UPageSection>
</template>

<script setup lang="ts">
const open = ref(false);
const plans = ref([
  {
    title: "Bilan Comportemental",
    description:
      "Le bilan est conçu pour évaluer en profondeur le comportement de votre chien ou chiot. Permet d'établir une base solide pour une éducation efficace et positive. La séance se déroule chez vous ou dans le lieu de votre choix.",
    price: "90 € *",
    modal: {
      description:
        "Découvrez notre Bilan Comportemental complet, conçu pour évaluer en profondeur le comportement de votre chien ou chiot. Lors de cette séance de 1h30, nous nous endons à votre domicile ou dans un lieu de votre choix pour observer et analyser les interactions de votre chien dans son environnement quotidien.",
      features: [
        {
          title: "Évaluation complète",
          description:
            "Une analyse détaillée des comportements de votre chien ou chiot, incluant ses réactions, ses habitudes et ses interactions avec les membres de la famille.",
          icon: "i-lucide-notebook-pen",
        },
        {
          title: "Exercices pratiques",
          description:
            " Des exercices spécifiques seront réalisés pendant la séance pour mieux comprendre et améliorer le comportement de votre chien.",
          icon: "i-lucide-clipboard-list",
        },
        {
          title: "Rapport détaillé",
          description:
            "Un rapport écrit complet vous sera fourni, résumant les observations et les recommandations spécifiques. Vous recevrez également des plans d'entraînement personnalisés pour continuer le travail à domicile.",
          icon: "i-lucide-notebook",
        },
        {
          title: "Suivi personnalisé",
          description:
            "Un suivi continu pendant toute la durée de l'entraînement, avec des conseils adaptés à l'évolution de votre chien.",
          icon: "i-lucide-dog",
        },
        {
          title: "Frais de déplacement",
          description:
            "Pour les déplacements au-delà de 20 km, un supplément de 0,42 € par kilomètre sera appliqué.",
          icon: "i-lucide-info",
        },
      ],
      footer:
        "Ce bilan est idéal pour comprendre les besoins spécifiques de votre chien ou chiot et établir une base solide pour une éducation efficace et positive. Vous bénéficierez d'une approche personnalisée qui prend en compte le bien-être de toute la famille.",
    },

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
    price: "60 € *",
    modal: {
      description:
        "Optez pour notre Coaching Simple, une séance d'éducation facturée à un taux horaire de 60 euros. Cette formule est conçue pour suivre le bilan comportemental et approfondir les techniques d'éducation tout en répondant à toutes vos questions. Elle est parfaite pour les propriétaires de chiens qui souhaitent des conseils pratiques et des solutions rapides.",
      features: [
        {
          title: "Séance d'éducation",
          description:
            "Une heure dédiée à l'apprentissage de nouvelles techniques d'éducation et à la résolution de problèmes comportementaux spécifiques.",

          icon: "i-lucide-clock",
        },
        {
          title: "Réponses à vos questions",
          description:
            "Profitez de l'expertise de notre coach pour obtenir des réponses claires et précises à toutes vos questions sur l'éducation de votre chien.",
          icon: "i-lucide-message-circle",
        },
        {
          title: "Plans d'entraînement",
          description:
            "À la fin de chaque séance, vous recevrez des plans d'entraînement personnalisés pour continuer le travail à domicile.",
          icon: "i-lucide-calendar-days",
        },
        {
          title: "Flexibilité",
          description:
            " Idéal pour des sessions régulières qui s'adaptent à votre emploi du temps et aux besoins de votre chien.",
          icon: "i-lucide-arrow-left-right",
        },
        {
          title: "Frais de déplacement",
          description:
            "Pour les déplacements au-delà de 20 km, un supplément de 0,42 € par kilomètre sera appliqué.",
          icon: "i-lucide-info",
        },
      ],
      footer:
        "Le Coaching Simple est parfait pour les propriétaires de chiens qui cherchent à améliorer rapidement le comportement de leur animal avec des conseils pratiques et efficaces. C'est une solution flexible et accessible pour une éducation positive.",
    },
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
    modal: {
      description:
        "Découvrez notre Formule Pack, une solution personnalisée pour répondre à toutes vos demandes spécifiques en matière de comportement canin ou de suivi pour chiots et chiens adultes. Cette formule est idéale pour les propriétaires de chiens qui ont des besoins particuliers ou qui souhaitent un suivi intensif et sur mesure.",
      features: [
        {
          title: "Évaluation personnalisée",
          description:
            "Une analyse approfondie des besoins spécifiques de votre chien, qu'il s'agisse de problèmes comportementaux complexes ou de suivi pour chiots et chiens adultes.",
          icon: "i-lucide-notebook-pen",
        },
        {
          title: "Séances sur mesure",
          description:
            "Des séances d'éducation adaptées à vos objectifs et aux besoins de votre chien, avec des techniques avancées et des outils spécifiques.",
          icon: "i-lucide-clock",
        },
        {
          title: "Plans d'entraînement personnalisés",
          description:
            "Des plans d'entraînement détaillés et adaptés à l'évolution de votre chien, pour un suivi continu et efficace.",
          icon: "i-lucide-calendar-days",
        },
        {
          title: "Suivi intensif",
          description:
            "Un suivi régulier et personnalisé pour garantir des résultats optimaux et un bien-être accru pour votre chien.",
          icon: "i-lucide-chart-spline",
        },
        {
          title: "Prix sur demande",
          description:
            " Pour obtenir un devis personnalisé, contactez-nous et nous évaluerons ensemble les besoins spécifiques de votre chien afin de vous proposer la meilleure solution.",
          icon: "i-lucide-euro",
        },
      ],
      footer:
        " La Formule Pack est parfaite pour les propriétaires de chiens qui recherchent une solution complète et personnalisée. Que ce soit pour des problèmes comportementaux spécifiques ou pour un suivi intensif, cette formule vous offre la flexibilité et l'expertise nécessaires pour répondre à tous vos besoins.",
    },
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
      label: "En savoir plus",
      variant: "outline",
      color: "neutral",
    },
  },
]);
</script>
