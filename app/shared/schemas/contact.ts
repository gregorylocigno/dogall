import { z } from "zod";

export const contactSchema = z.object({
  firstname: z
    .string({
      required_error: "Le prénom est requis",
    })
    .min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastname: z
    .string({
      required_error: "Le nom est requis",
    })
    .min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("L'email est invalide").optional(),
  message: z
    .string({
      required_error: "Le message est requis",
    })
    .min(10, "Le message doit contenir au moins 10 caractères"),
  phone: z
    .string({
      required_error: "Le téléphone est requis",
    })
    .min(10, "Le téléphone doit contenir au moins 10 caractères"),
  accept: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter les conditions." }),
  }),
});

export type ContactSchema = z.infer<typeof contactSchema>;
