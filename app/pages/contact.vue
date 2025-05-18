<template>
  <UContainer>
    <UPageHeader
      title="Contact"
      :ui="{
        root: 'relative border-none border-default py-8',
        container:
          'flex flex-col justify-center items-center bg-accent-100 rounded-2xl p-12',
      }"
    >
      <template #header>
        <UBadge color="primary" size="lg">
          <UIcon name="i-lucide-mail" />
          Contactez-moi
        </UBadge>
      </template>
    </UPageHeader>
    <div class="grid grid-cols-2 grid-rows-[2fr_1fr] gap-4">
      <UPageCard
        title="Tailwind CSS"
        description="Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing significant improvements."
        icon="i-simple-icons-tailwindcss"
        orientation="horizontal"
        class="row-span-2"
      >
      </UPageCard>
      <div
        class="max-w-[440px] justify-self-center self-center rounded-2xl shadow-lg ring ring-default"
      >
        <img
          src="/contact.jpg"
          alt="Tailwind CSS"
          class="w-full h-auto rounded-2xl shadow-lg ring ring-default"
        />
      </div>
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormField label="Email" name="email" required>
          <UInput v-model="state.email" />
        </UFormField>

        <UFormField label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormField>

        <UButton type="submit"> Submit </UButton>
      </UForm>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });
  console.log(event.data);
}
</script>
