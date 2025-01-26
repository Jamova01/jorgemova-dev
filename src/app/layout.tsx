import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Navbar } from "@/components/molecules";
import { Footer } from "@/components/organisms/Footer";
import { NAVIGATION_LINKS } from "@/data/navigationLinks";
import "./globals.css";

const nunito = Nunito({
  weight: ["200", "300", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jorge Morales | Full Stack Developer",
  description:
    "Professional portfolio of Jorge Armando Morales Valencia, a full stack developer specializing in React.js, Angular, Node.js, and modern technologies. Discover my experience, featured projects, and technical skills.",
  keywords:
    "Jorge Morales, Full Stack Developer, React.js, Angular, Node.js, portfolio, web developer, frontend, backend, software, projects, experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark flex min-h-screen w-full flex-col ${nunito.className}`}
      >
        <header className="sticky top-0 z-50">
          <Navbar items={NAVIGATION_LINKS} />
        </header>
        <main className="flex min-h-screen w-full flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
