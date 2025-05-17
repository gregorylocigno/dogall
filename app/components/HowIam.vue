<template>
  <UPageSection
    id="how-iam"
    title="Et si c’était nous qui devions apprendre ?"
    headline="Qui suis-je ?"
  >
    <template #description>
      <p class="max-w-4xl">
        Éduquer, c’est communiquer, construire des bases solides, apprendre à
        décoder les émotions et les réactions. Et surtout, avancer ensemble.
      </p>
    </template>
    <UPageCard
      icon="i-lucide-quote"
      orientation="horizontal"
      variant="naked"
      :ui="{
        container: 'relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-8',
        title: 'text-lg text-pretty font-semibold text-highlighted',
      }"
    >
      <template #title
        ><div class="lg:pl-4">
          Je m’appelle Alain Humblet, passionné du monde canin depuis toujours.
        </div></template
      >
      <template #description>
        <article class="flex flex-col gap-8 mt-8 lg:pl-4">
          <p>
            Pendant des années, j’ai suivi les méthodes d’éducation
            traditionnelles, persuadé qu’elles étaient les plus efficaces. Mais
            avec le temps, j’ai ressenti le besoin de
            <span class="text-highlighted font-semibold"
              >changer de perspective</span
            >, de trouver une approche plus respectueuse et plus en adéquation
            avec le chien.
          </p>
          <p>
            C’est dans cette démarche que
            <span class="text-highlighted font-semibold">Valko</span>, mon
            Basset Fauve de Bretagne, est arrivé dans ma vie. Son tempérament et
            sa sensibilité ont confirmé mon envie de repenser ma façon
            d’éduquer. Il a été une véritable révélation, renforçant mon
            engagement vers une méthode basée sur
            <span class="text-highlighted font-semibold"
              >la coopération, la compréhension et le respect mutuel.</span
            >
          </p>
          <p>
            Cette remise en question m’a conduit à me former auprès de
            professionnels engagés dans une éducation
            <span class="text-highlighted font-semibold"
              >positive et réfléchie</span
            >, où l’apprentissage se construit avec clarté et bienveillance.
            Aujourd’hui, mon approche repose sur des bases solides :
            <span class="text-highlighted font-semibold"
              >ni contrainte excessive, ni laxisme,</span
            >
            mais un équilibre adapté à chaque chien et à son humain.
          </p>
          <p>
            Avec
            <span class="text-highlighted font-semibold"
              >Dog All – Coaching Canin</span
            >, mon objectif est simple :
            <span class="text-highlighted font-semibold"
              >vous accompagner pour mieux comprendre votre chien, lui offrir
              une éducation adaptée et rendre votre quotidien plus fluide et
              agréable.</span
            >
          </p>
        </article>
      </template>
      <div
        class="max-w-[440px] justify-self-end self-center rounded-2xl shadow-lg ring ring-default"
      >
        <img
          src="/howiam.jpg"
          alt="Tailwind CSS"
          class="w-full h-auto rounded-2xl shadow-lg ring ring-default"
        />
      </div>
    </UPageCard>
  </UPageSection>
</template>
<script setup lang="ts"></script>
