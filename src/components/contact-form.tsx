"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFormInput } from "@/lib/contact-schema";

const contactEmail = "itsmisarina@gmail.com";
const formSubmitUrl = `https://formsubmit.co/ajax/${contactEmail}`;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "fallback" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { company: "" },
  });

  useEffect(() => {
    if (window.location.search.includes("sent=1")) {
      window.setTimeout(() => setStatus("success"), 0);
    }
  }, []);

  async function onSubmit(values: ContactFormInput) {
    setStatus("idle");

    if (values.company) {
      setStatus("error");
      return;
    }

    const fields = {
      name: values.name,
      email: values.email,
      phone: values.phone || "Not provided",
      subject: values.subject,
      message: values.message,
      _replyto: values.email,
      _subject: `Digital Sarina inquiry: ${values.subject}`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 8000);

      const response = await fetch(formSubmitUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
        signal: controller.signal,
      });

      window.clearTimeout(timeout);

      if (!response.ok) {
        throw new Error("FormSubmit unavailable");
      }

      reset();
      setStatus("success");
    } catch {
      openEmailFallback(values);
      setStatus("fallback");
    }
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
      {status === "fallback" ? (
        <p className="text-sm font-medium text-cyan-200">
          FormSubmit is temporarily unavailable, so an email draft opened with your message.
        </p>
      ) : null}
      {status === "error" ? <p className="text-sm font-medium text-rose-300">Something went wrong. Please try again or email directly.</p> : null}
    </form>
  );
}

function openEmailFallback(values: ContactFormInput) {
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "Not provided"}`,
    "",
    values.message,
  ].join("\n");

  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
    `Digital Sarina inquiry: ${values.subject}`,
  )}&body=${encodeURIComponent(body)}`;
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
