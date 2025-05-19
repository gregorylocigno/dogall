<template>
  <UPageSection
    id="vision"
    title="Le lien au cœur de tout"
    headline="Ma vision"
  >
    <template #description>
      <p class="max-w-4xl">
        Mes méthodes sont centrées sur l'écoute et la compréhension mutuelle.
        Apprenez à décoder les besoins, les signaux et les émotions de votre
        chien.
      </p>
    </template>
    <UPageGrid>
      <div class="flex flex-col justify-between gap-6">
        <UPageFeature
          class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          title="La confiance mutuelle"
          description="Tout commence par là. La confiance est la base sur laquelle tout peut s’épanouir.
Elle naît quand le chien se sent compris, respecté et en sécurité dans son environnement.
Grâce à des gestes simples et constants, cette confiance grandit et devient un repère solide.
Quand elle est installée, le chien ose, s’exprime, et donne naturellement le meilleur de lui-même."
          icon="i-lucide-paw-print"
        />
        <UPageFeature
          class="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          title="Le respect réciproque"
          description="Le respect commence par l’écoute : reconnaître les besoins, les émotions et les limites de l’autre, sans chercher à imposer.
Une complicité où le maître et le chien se considèrent comme partenaires.
Quand cette reconnaissance est mutuelle, le lien devient plus qu’une relation : il devient un véritable dialogue, où chacun avance avec confiance et loyauté."
          icon="i-lucide-handshake"
        />
        <UPageFeature
          class="bg-accent-100 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          title="Éduquer devient simple quand les bases sont solides"
          description="Quand un chien évolue dans un cadre bienveillant et structuré, basé sur la confiance et le respect, son apprentissage devient intuitif. 
           
          En lui offrant un équilibre émotionnel et une relation harmonieuse, nous créons un chien disponible, motivé et réceptif à l’éducation."
          icon="i-lucide-heart"
        />
      </div>
      <div
        class="max-w-[440px] justify-self-end self-center rounded-2xl shadow-lg ring ring-default"
      >
        <img
          class="w-full h-auto"
          src="/vision-img.png"
          alt="Un homme en interaction avec un chien"
        />
      </div>
    </UPageGrid>
  </UPageSection>
</template>

<script setup lang="ts"></script>
