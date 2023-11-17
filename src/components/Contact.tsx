"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactMessageSchema } from "@/schema";
import { ContactMessage } from "@/types";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Section } from "./Section";
import { Button } from "./Button";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactMessage>({
    resolver: zodResolver(contactMessageSchema),
  });
  const [sending, setSending] = useState(false);

  async function onSubmit(message: ContactMessage) {
    setSending(true);

    const response = await fetch("/api/sendMessage", {
      method: "POST",
      body: JSON.stringify(message),
    });

    const data = await response.json();

    if (!data.ok) {
      return toast.error("Something went wrong.");
    }

    toast.success("Your message was sent.");
    setSending(false);

    reset();
  }

  return (
    <Section id="contact" title="Contact" description="Send me a message.">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            placeholder="Your name"
            className="px-4 py-2 bg-slate-900 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("name")}
          />
          <span className="text-sm text-red-500">{errors.name?.message}</span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="you@email.com"
            className="px-4 py-2 bg-slate-900 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("email")}
          />
          <span className="text-sm text-red-500">{errors.email?.message}</span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Your message"
            className="h-32 px-4 py-2 bg-slate-900 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("message")}
          />
          <span className="text-sm text-red-500">
            {errors.message?.message}
          </span>
        </div>

        <Button type="submit" fullWidth disabled={sending}>
          Send
        </Button>
      </form>
    </Section>
  );
}
