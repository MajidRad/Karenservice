import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "تعمیرات فر و گاز | تعمیرکار حرفه‌ای",
  description: "تعمیر تخصصی فر، اجاق گاز، مایکروویو و هود با اعزام سریع تکنسین.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}