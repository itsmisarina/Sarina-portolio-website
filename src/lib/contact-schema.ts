import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().optional(),
  subject: z.string().trim().min(3, "Please enter a subject."),
  message: z.string().trim().min(10, "Please share a little more detail."),
  company: z.string().trim().max(0, "Spam protection triggered.").optional(),
});

export type ContactFormInput = z.infer<typeof contactSchema>;
