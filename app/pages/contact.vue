<template>
  <UContainer class="xl:pt-5 grid grid-cols-2 gap-6">
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
          </UFormField>

          <UFormField label="Nom" name="lastname" class="flex-1">
            <UInput v-model="state.lastname" class="w-full" />
          </UFormField>
        </div>

        <UFormField label="Téléphone" name="phone">
          <UInput v-model="state.phone" class="w-full" />
        </UFormField>

        <UFormField label="Email" name="email">
          <UInput v-model="state.email" class="w-full" />
        </UFormField>

        <UFormField label="Message" name="message">
          <UTextarea v-model="state.message" class="w-full" />
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
  } else {
    toast.add({
      title: "Erreur",
      description: result.error || "Une erreur est survenue.",
      color: "error",
    });
  }
}
</script>
