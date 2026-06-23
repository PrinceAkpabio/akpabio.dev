import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PageWrapper from "@/components/page-wrapper";
import ThemeProvider from "@/components/theme-provider";
import LanguageProvider from "@/components/language-provider";

const fixedSys62 = localFont({ src: "./Fixedsys62.ttf" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Applies the saved theme + language before paint to avoid a flash
const initScript = `(function(){try{var d=document.documentElement;d.setAttribute('data-theme',localStorage.getItem('theme')||'dark');var l=localStorage.getItem('lang');if(l)d.setAttribute('lang',l);}catch(e){d.setAttribute('data-theme','dark');}})();`;

export const metadata: Metadata = {
  title: "Prince Akpabio — Frontend Developer",
  description:
    "Prince is a frontend software developer with 5 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={fixedSys62.className} suppressHydrationWarning={true}>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
        <ThemeProvider>
          <LanguageProvider>
            <PageWrapper>{children}</PageWrapper>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
