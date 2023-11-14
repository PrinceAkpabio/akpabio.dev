import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PageWrapper from "@/components/page-wrapper";

const fixedSys62 = localFont({ src: "./Fixedsys62.ttf" });

export const metadata: Metadata = {
  title: "Prince Akpabio",
  description:
    "Prince is a frontend software developer with 5 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fixedSys62.className}>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
