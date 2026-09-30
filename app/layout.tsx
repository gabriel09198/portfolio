import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fonts are self-hosted (app/fonts) so dev/build never depend on fonts.gstatic.com.
const geistSans = localFont({
  src: "./fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const instrumentSerif = localFont({
  src: [
    { path: "./fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Gabriel Carvalho — Desenvolvedor Full Stack",
  description:
    "Portfólio de Gabriel Lima de Carvalho, desenvolvedor full stack de Aracaju (SE). Projetos com Next.js, React, TypeScript, Firebase e mais.",
  authors: [{ name: "Gabriel Lima de Carvalho", url: "https://github.com/gabriel09198" }],
  openGraph: {
    title: "Gabriel Carvalho — Desenvolvedor Full Stack",
    description: "Projetos com Next.js, React, TypeScript, Firebase e mais.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      {/* Browser extensions (e.g. ColorZilla) inject attributes on <body> before hydration */}
      <body className="min-h-dvh overflow-x-clip font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
