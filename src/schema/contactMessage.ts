import { z } from "zod";

export const contactMessageSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).trim(),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" })
    .trim(),
  message: z.string().min(1, { message: "Message is required" }).trim(),
});
