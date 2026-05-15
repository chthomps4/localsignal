"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Starter Site ($800+)",
  "Business Site ($2,000+)",
  "Custom Build",
  "Not sure yet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function validateField(name: string, value: string): string {
    if (name === "name" && !value.trim()) return "Name is required";
    if (name === "email" && !value.trim()) return "Email is required";
    if (name === "email" && value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Please enter a valid email";
    if (name === "message" && !value.trim()) return "Please tell us about your project";
    return "";
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    const err = validateField(name, value);
    setFieldErrors((prev) => ({ ...prev, [name]: err }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((val, key) => {
      data[key] = val.toString();
    });

    // Validate all required fields
    const errors: Record<string, string> = {};
    ["name", "email", "message"].forEach((field) => {
      const err = validateField(field, data[field] || "");
      if (err) errors[field] = err;
    });

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setSubmitting(true);

    try {
      // TODO: Replace with your Formspree form ID from https://formspree.io
      // Create a free account → new form → copy the form ID
      const res = await fetch("https://formspree.io/f/xpwdqbvz", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClasses = (fieldName: string) =>
    `w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white placeholder-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-signal-500/40 focus:border-signal-500/30 transition-all ${
      fieldErrors[fieldName]
        ? "border-red-500/50"
        : "border-white/[0.08]"
    }`;

  if (submitted) {
    return (
      <div className="rounded-2xl bg-signal-500/[0.06] border border-signal-500/20 p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-signal-500/15 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-signal-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-3">Message received.</h2>
        <p className="text-white/50 max-w-md mx-auto">
          Thanks for reaching out. We&apos;ll review your project
          details and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onBlur={handleBlur}
            className={inputClasses("name")}
            placeholder="Your name"
          />
          {fieldErrors.name && (
            <p className="mt-1.5 text-xs text-red-400">{fieldErrors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onBlur={handleBlur}
            className={inputClasses("email")}
            placeholder="you@example.com"
          />
          {fieldErrors.email && (
            <p className="mt-1.5 text-xs text-red-400">{fieldErrors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="business" className="block text-sm font-medium text-white/60 mb-2">
          Business / Project Name
        </label>
        <input
          type="text"
          id="business"
          name="business"
          className={inputClasses("business")}
          placeholder="Your business or project name"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-white/60 mb-2">
          What are you looking for?
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm focus:outline-none focus:ring-2 focus:ring-signal-500/40 focus:border-signal-500/30 transition-all appearance-none cursor-pointer pr-10"
            defaultValue=""
          >
            <option value="" disabled className="bg-navy-900 text-white/50">
              Select a service
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-navy-900">
                {opt}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium text-white/60 mb-2">
          Current website (if any)
        </label>
        <input
          type="url"
          id="website"
          name="website"
          className={inputClasses("website")}
          placeholder="https://"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          onBlur={(e) => {
            const err = validateField("message", e.target.value);
            setFieldErrors((prev) => ({ ...prev, message: err }));
          }}
          className={`${inputClasses("message")} resize-none`}
          placeholder="What do you need? What's your timeline? Any inspiration or references?"
        />
        {fieldErrors.message && (
          <p className="mt-1.5 text-xs text-red-400">{fieldErrors.message}</p>
        )}
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-signal-500 text-white font-semibold hover:bg-signal-400 transition-all duration-300 hover:shadow-lg hover:shadow-signal-500/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {submitting ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
