import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PageWrapper from "@/components/page-wrapper";
import ThemeProvider from "@/components/theme-provider";

const fixedSys62 = localFont({ src: "./Fixedsys62.ttf" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Applies the saved theme (default dark) before paint to avoid a flash
const themeScript = `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>
          <PageWrapper>{children}</PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
