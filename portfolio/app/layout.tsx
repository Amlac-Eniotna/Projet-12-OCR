import type { Metadata } from 'next';
import './globals.css';
import { montserrat } from '@/app/ui/fonts';
import Header from '@/app/ui/header/header';

export const metadata: Metadata = {
  title: 'Antoine Calma - Portfolio',
  description: "Portfolio d'un développeur web React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.className} bg-mauve-1 text-mauve-12 antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
