import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/app/ui/fonts";
import Header from "@/app/ui/header/header";
import favicon from "@/public/favicon.ico";

export const metadata: Metadata = {
  title: "Antoine Calma - Portfolio",
  description: "Portfolio d'un développeur web React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="snap-y snap-mandatory scroll-smooth">
      <head>
        <link rel="shortcut icon" href={favicon.src} />
      </head>
      <body
        className={`${montserrat.className} bg-wmauve-1 text-wmauve-12 antialiased dark:bg-mauve-1 dark:text-mauve-12`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
