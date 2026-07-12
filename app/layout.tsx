import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import GridBackground from "./components/GridBackground";
import CursorGlow from "./components/CursorGlow";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const title = "Sam Mishin, Webflow Developer & Designer";
const description =
  "Webflow expert (Lumos, Finsweet) building fast, conversion focused websites for small and medium businesses. Full technical ownership from design to launch.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mishinwebsites.com"),
  title: {
    default: title,
    template: "%s | Sam Mishin",
  },
  description,
  keywords: [
    "Webflow developer",
    "Webflow designer",
    "Finsweet",
    "Lumos",
    "freelance web developer",
    "React developer",
  ],
  openGraph: {
    title,
    description,
    url: "https://mishinwebsites.com",
    siteName: "Mishin Websites",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body className="font-sans">
        <div className="flex min-h-screen flex-col overflow-x-clip">
          <GridBackground />
          <CursorGlow />
          <Nav />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}