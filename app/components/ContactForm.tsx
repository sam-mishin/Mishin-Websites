"use client";

import { useState } from "react";
import Select from "./Select";

const projectTypes = [
  "Webflow Website",
  "Custom Code / Integration",
  "Ongoing Care & Growth",
  "Something Else",
];

const budgets = ["Under $1k", "$1k to $3k", "$3k to $7k", "$7k+", "Not sure yet"];

const inputClasses =
  "w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 font-sans text-base text-white placeholder:text-ink-muted/60 outline-none transition focus:border-blue focus:shadow-[0_0_0_3px_rgba(0,71,204,0.25)]";

const labelClasses =
  "font-mono text-xs uppercase tracking-[0.2em] text-blue-tint/70";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [budget, setBudget] = useState(budgets[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = `New project inquiry from ${name || "your site"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      `Budget: ${budget}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:sammishin2@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-6 rounded-lg border border-white/10 bg-[#101f30] p-5 shadow-[0_0_60px_-25px_rgba(0,71,204,0.5)]"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={labelClasses}>Name</span>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className={labelClasses}>Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@company.com"
            className={inputClasses}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={labelClasses}>Project Type</span>
          <Select value={projectType} onChange={setProjectType} options={projectTypes} />
        </label>
        <label className="flex flex-col gap-2">
          <span className={labelClasses}>Budget</span>
          <Select value={budget} onChange={setBudget} options={budgets} />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className={labelClasses}>Message</span>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me a bit about your project..."
          rows={6}
          className={`${inputClasses} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="self-start rounded-md bg-blue px-6 py-3 font-sans text-base font-medium text-white transition hover:bg-[#0039a6] hover:shadow-[0_0_25px_-5px_rgba(0,71,204,0.9)]"
      >
        Send Message
      </button>

      {sent && (
        <p className="font-mono text-sm text-blue-tint">
          Opening your email client to send this. If nothing happens, email me
          directly at sammishin2@gmail.com.
        </p>
      )}
    </form>
  );
}
