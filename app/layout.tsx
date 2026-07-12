import type { Metadata } from "next";
import "./globals.css";
import GridBackground from "./components/GridBackground";
import CursorGlow from "./components/CursorGlow";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
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