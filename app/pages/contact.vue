<template>
  <UContainer class="lg:grid lg:grid-cols-2 lg:gap-6">
    <picture class="col-span-2">
      <source
        media="(min-width: 1024px)"
        srcset="/contact.jpg"
        type="image/jpeg"
      />
      <img
        class="w-full h-auto rounded-2xl shadow-lg ring ring-default"
        src="/contact-mobile.jpg"
        alt="Contact"
      />
    </picture>

    <div>
      <UPageHeader
        title="Pourquoi Dog All ?"
        headline="Contact"
        :ui="{ root: 'relative border-none border-default py-8' }"
      >
        <template #description>
          <div class="flex flex-col gap-4 text-[15px]">
            <div class="flex-1">
              <p>
                Avec
                <span class="text-highlighted font-semibold"
                  >Dog All – Coaching Canin</span
                >, mon objectif est simple :
                <span class="text-highlighted font-semibold"
                  >vous aider à mieux comprendre votre chien, lui offrir une
                  éducation adaptée, et rendre votre quotidien plus
                  serein.</span
                >
              </p>
            </div>
            <div>
              <p>
                Une question ? Envie de discuter ou de prendre rendez-vous ?
                N'hésitez pas à me contacter directement ou à remplir le
                formulaire.
              </p>
            </div>
          </div>
        </template>
        <div class="flex flex-col flex-2 gap-4 p-8">
          <div class="flex flex-row gap-4">
            <UIcon name="i-lucide-phone" class="size-5" />
            <a href="tel:+32492102841" class="hover:underline text-primary">
              +32 492 10 28 41
            </a>
          </div>
          <div class="flex flex-row gap-4">
            <UIcon name="i-lucide-mail" class="size-5" />
            <a
              href="mailto:alain@dogall.be"
              class="hover:underline text-primary"
            >
              alain@dogall.be
            </a>
          </div>
          <div class="flex flex-row gap-4">
            <UIcon name="i-lucide-scale" class="size-5" />
            <p>TVA BE 0501 918 679</p>
          </div>
        </div>
      </UPageHeader>
    </div>

    <UPageCard title="Contactez-moi">
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <div class="flex flex-row gap-4">
          <UFormField label="Prénom" name="firstname" class="flex-1">
            <UInput v-model="state.firstname" class="w-full" />
            <template #error="{ error }">
              <span v-if="error" class="text-red-500 text-xs">{{ error }}</span>
            </template>
          </UFormField>

          <UFormField label="Nom" name="lastname" class="flex-1">
            <UInput v-model="state.lastname" class="w-full" />
            <template #error="{ error }">
              <span v-if="error" class="text-red-500 text-xs">{{ error }}</span>
            </template>
          </UFormField>
        </div>

        <UFormField label="Téléphone" name="phone">
          <UInput v-model="state.phone" class="w-full" />
          <template #error="{ error }">
            <span v-if="error" class="text-red-500 text-xs">{{ error }}</span>
          </template>
        </UFormField>

        <UFormField label="Email" name="email">
          <UInput v-model="state.email" class="w-full" />
          <template #error="{ error }">
            <span v-if="error" class="text-red-500 text-xs">{{ error }}</span>
          </template>
        </UFormField>

        <UFormField label="Message" name="message">
          <UTextarea v-model="state.message" class="w-full" />
          <template #error="{ error }">
            <span v-if="error" class="text-red-500 text-xs">{{ error }}</span>
          </template>
        </UFormField>

        <UFormField name="accept">
          <UCheckbox
            v-model="state.accept"
            required
            description="En soumettant ce formulaire, vous acceptez de me fournir vos informations et vous m'autorisez à les enregistrer afin de pouvoir vous répondre."
          />
          <template #error="{ error }">
            <span v-if="error" class="text-red-500 text-xs">{{ error }}</span>
          </template>
        </UFormField>

        <UButton
          type="submit"
          label="Envoyer"
          trailing-icon="i-heroicons-paper-airplane"
        />
      </UForm>
    </UPageCard>
  </UContainer>
</template>
<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import { contactSchema, type ContactSchema } from "~/shared/schemas/contact";

const schema = contactSchema;

const state = reactive<Partial<ContactSchema>>({
  firstname: undefined,
  lastname: undefined,
  email: undefined,
  message: undefined,
  phone: undefined,
  accept: false,
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<ContactSchema>) {
  const response = await fetch("/api/contact-form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event.data),
  });

  const result = await response.json();

  if (response.ok && result.success) {
    toast.add({
      title: "Merci !",
      description: "Votre message a bien été envoyé.",
      color: "success",
    });
    // Reset du formulaire
    state.firstname = undefined;
    state.lastname = undefined;
    state.email = undefined;
    state.message = undefined;
    state.phone = undefined;
    state.accept = false;
  } else {
    toast.add({
      title: "Erreur",
      description: result.error || "Une erreur est survenue.",
      color: "error",
    });
  }
}
</script>
