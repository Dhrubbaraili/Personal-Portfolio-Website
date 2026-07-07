"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(2, "Please choose a service."),
  message: z.string().min(10, "Please share a little more detail."),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm({ initialSubmitted = false }: { initialSubmitted?: boolean }) {
  const [submitted, setSubmitted] = useState(initialSubmitted);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit(() => {
    setSubmitted(false);
    setSubmitError(null);
    setIsSubmitting(true);
    const nextInput = formRef.current?.querySelector<HTMLInputElement>('input[name="_next"]');
    if (nextInput && typeof window !== "undefined") {
      nextInput.value = `${window.location.origin}/contact?sent=1`;
    }
    formRef.current?.submit();
  });

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      action="https://formsubmit.co/dmsmbaraili@gmail.com"
      method="POST"
      className="space-y-4"
    >
      <input type="hidden" name="_subject" value="New portfolio inquiry from Dhrub Baraili Website" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="/contact?sent=1" />
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">
            Your name
          </label>
          <Input id="name" placeholder="Your name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name ? <p className="mt-2 text-xs text-red-600">{errors.name.message}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <Input id="email" type="email" placeholder="Email address" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email ? <p className="mt-2 text-xs text-red-600">{errors.email.message}</p> : null}
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone number
          </label>
          <Input id="phone" placeholder="Phone number" {...register("phone")} />
        </div>
        <div>
          <label htmlFor="company" className="sr-only">
            Company name
          </label>
          <Input id="company" placeholder="Company name" {...register("company")} />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="sr-only">
          Service you're interested in
        </label>
        <Input id="service" placeholder="Service you're interested in" {...register("service")} aria-invalid={!!errors.service} />
        {errors.service ? <p className="mt-2 text-xs text-red-600">{errors.service.message}</p> : null}
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Tell me about your project
        </label>
        <Textarea id="message" placeholder="Tell me about your project" {...register("message")} aria-invalid={!!errors.message} />
        {errors.message ? <p className="mt-2 text-xs text-red-600">{errors.message.message}</p> : null}
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Send Message
      </Button>
      {submitError ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      ) : null}
      <AnimatePresence>
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
          >
            <CheckCircle2 className="h-4 w-4" />
            Thanks. Your message has been sent successfully.
          </motion.div>
        ) : null}
      </AnimatePresence>
    </form>
  );
}
