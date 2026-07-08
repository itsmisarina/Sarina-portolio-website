"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFormInput } from "@/lib/contact-schema";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { company: "" },
  });

  async function onSubmit(values: ContactFormInput) {
  setStatus("idle");

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    setStatus("error");
    return;
  }

  reset();
  setStatus("success");
}


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input id="name" autoComplete="name" {...register("name")} className="form-field" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input id="email" type="email" autoComplete="email" {...register("email")} className="form-field" />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" error={errors.phone?.message}>
          <input id="phone" autoComplete="tel" {...register("phone")} className="form-field" />
        </Field>
        <Field label="Subject" error={errors.subject?.message}>
          <input id="subject" {...register("subject")} className="form-field" />
        </Field>
      </div>
      <Field label="Message" error={errors.message?.message}>
        <textarea id="message" rows={6} {...register("message")} className="form-field resize-none" />
      </Field>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(110deg,#22d3ee,#8b5cf6,#38bdf8)] px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit"
      >
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Send className="h-4 w-4" aria-hidden />}
        Send Message
      </button>
      {status === "success" ? <p className="text-sm font-medium text-cyan-200">Message sent. Sarina will get back to you soon.</p> : null}
      {status === "error" ? <p className="text-sm font-medium text-rose-300">Something went wrong. Please try again or email directly.</p> : null}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-100" htmlFor={label.toLowerCase()}>
        {label}
      </label>
      {children}
      {error ? <p className="mt-2 text-sm text-rose-300">{error}</p> : null}
    </div>
  );
}
