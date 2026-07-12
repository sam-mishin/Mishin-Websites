import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~0171207b7757914260?mp_source=share",
    icon: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696bf2afe646bb83452ddb91_upwork_1768682157006-all-icons.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samuel-mishin-442779386/",
    icon: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696bf24457e8b062790c2868_linkedin_1768682045216-all-icons.svg",
  },
  {
    label: "Email",
    href: "mailto:sammishin2@gmail.com",
    icon: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696bf28c600ee0f39c0984fe_email_1768682121619-all-icons.svg",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 px-[5vw] pb-10 pt-10">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/68b1fa0a54b29db0e51d3dca_1.avif"
              alt="Mishin Websites logo"
              width={40}
              height={40}
            />
          </Link>

          <div className="flex gap-6">
            <Link href="/" className="text-sm text-ink-muted hover:text-white">Home</Link>
            <Link href="/#portfolio" className="text-sm text-ink-muted hover:text-white">Portfolio</Link>
            <Link href="/contact" className="text-sm text-ink-muted hover:text-white">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                aria-label={s.label}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="opacity-60 transition hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(0,71,204,0.8)]"
              >
                <Image src={s.icon} alt="" width={20} height={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full font-mono text-xs text-ink-muted/60">
          © {year} Mishin Websites
        </div>
      </div>
    </footer>
  );
}
