import { contactMessageSchema } from "@/schema/contactMessage";
import { z } from "zod";

export type ContactMessage = z.infer<typeof contactMessageSchema>;
