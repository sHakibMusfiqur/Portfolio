"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!data.subject.trim()) {
    errors.subject = "Subject is required";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-2xl border border-[var(--border-light)] bg-white py-12 text-center"
      >
        <div className="flex size-14 items-center justify-center rounded-full bg-[var(--primary-muted)]">
          <CheckCircle className="size-7 text-[var(--primary)]" strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-lg font-semibold text-[var(--foreground)]">
            Message sent!
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Thanks for reaching out. I&apos;ll get back to you soon.
          </p>
        </div>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", subject: "", message: "" });
          }}
          className="mt-2 text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)]"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="name"
          name="name"
          label="Name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          autoComplete="name"
        />
        <Input
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
        />
      </div>

      <Input
        id="subject"
        name="subject"
        label="Subject"
        placeholder="What's this about?"
        value={form.subject}
        onChange={handleChange}
        error={errors.subject}
      />

      <Textarea
        id="message"
        name="message"
        label="Message"
        placeholder="Tell me about your project or inquiry..."
        value={form.message}
        onChange={handleChange}
        error={errors.message}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200",
          "bg-[var(--primary)] text-[var(--primary-foreground)]",
          "hover:bg-[var(--primary-hover)] hover:shadow-[var(--shadow-md)]",
          "active:scale-[0.97]",
          "disabled:pointer-events-none disabled:opacity-60"
        )}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" strokeWidth={2.5} />
            Sending...
          </>
        ) : (
          <>
            <Send className="size-4" strokeWidth={2.5} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
