import Link from "next/link";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <main className="w-full px-[5vw]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 pb-24 pt-8">
        <div>
          <Link
            href="/"
            className="font-mono text-sm text-blue-tint hover:text-white"
          >
            ← Back home
          </Link>
        </div>

        <div className="flex max-w-[800px] flex-col gap-6">
          <SectionHeading index="Contact" title="Start a Project" />
          <p className="max-w-[600px] text-lg leading-relaxed text-ink-muted">
            Tell me a bit about what you&apos;re building and I&apos;ll get
            back to you within a day or two.
          </p>
        </div>

        <div className="max-w-[800px]">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
