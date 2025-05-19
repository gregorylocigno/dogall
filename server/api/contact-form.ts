import { Resend } from "resend";
import { contactSchema } from "~/shared/schemas/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = contactSchema;

export default defineEventHandler(async (event) => {
  if (getMethod(event) !== "POST") {
    setResponseStatus(event, 405);
    return { error: "Méthode non autorisée" };
  }

  const body = await readBody(event);
  const parse = schema.safeParse(body);

  if (!parse.success) {
    setResponseStatus(event, 400);
    return { error: "Données invalides" };
  }

  try {
    await resend.emails.send({
      from: "alain@dogall.be",
      to: "alain@dogall.be",
      subject: "Nouveau message de contact",
      html: `<p>
        <strong>Nom:</strong> ${body.firstname} ${body.lastname}<br>
        <strong>Email:</strong> ${body.email}<br>
        <strong>Téléphone:</strong> ${body.phone}<br>
        <strong>Message:</strong><br>${body.message}
      </p>`,
    });

    return { success: true };
  } catch (e) {
    setResponseStatus(event, 500);
    return { error: "Erreur lors de l'envoi de l'email" };
  }
});
