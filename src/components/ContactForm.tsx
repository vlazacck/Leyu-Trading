import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ContactFormValues {
  name: string;
  company: string;
  email: string;
  country: string;
  message: string;
  // Honeypot field for basic spam protection — bots tend to fill every input.
  website: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: ContactFormValues) => {
    if (data.website) return; // honeypot triggered — silently drop

    // Replace with a real endpoint (e.g. a Sanity webhook, form service, or
    // your own API route) once the backend is wired up.
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log("Contact form submission", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 rounded-xl2 bg-forest/5 px-8 py-14 text-center"
      >
        <CheckCircle2 className="text-forest-light" size={40} />
        <h3 className="font-display text-xl font-semibold text-ink">Message sent</h3>
        <p className="max-w-sm text-sm text-ink/60">
          Thank you for reaching out. Our export team will respond within one business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-forest-light underline underline-offset-4"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("website")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          <input
            {...register("name", { required: "Please enter your name" })}
            className="input"
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <input
            {...register("company", { required: "Please enter your company" })}
            className="input"
            placeholder="Your Company Ltd."
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            {...register("email", {
              required: "Please enter your email",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
            })}
            className="input"
            placeholder="jane@company.com"
          />
        </Field>
        <Field label="Country" error={errors.country?.message}>
          <input
            {...register("country", { required: "Please enter your country" })}
            className="input"
            placeholder="Country of operation"
          />
        </Field>
      </div>

      <Field label="Message" error={errors.message?.message}>
        <textarea
          {...register("message", { required: "Please tell us what you need" })}
          className="input min-h-[120px] resize-y"
          placeholder="Tell us about your import volume and requirements..."
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-fit rounded-full bg-forest px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-cream shadow-md transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="font-medium text-ink/80">{label}</span>
      {children}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}
