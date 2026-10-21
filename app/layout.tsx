import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Vazirmatn } from "next/font/google";
import LocalBusinessSchema from "../components/LocalBusinessSchema";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <Providers>
          <LocalBusinessSchema/>
          {children}
          </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://karenservice.ir"),

  title: {
    default: "تعمیرات لوازم خانگی | تعمیر فر، اجاق گاز، لباسشویی و ظرفشویی",
    template: "%s | تعمیرات لوازم خانگی در کرج",
  },

  description:
    "تعمیر فر، اجاق گاز، لباسشویی، ظرفشویی، مایکروویو، هود، آبگرمکن و پکیج با تکنسین مجرب و خدمات سریع.",

  keywords: [
    "تعمیر فر",
    "تعمیر اجاق گاز",
    "تعمیر لباسشویی",
    "تعمیر ظرفشویی",
    "تعمیر مایکروویو",
    "تعمیر هود",
    "تعمیر آبگرمکن",
    "تعمیر پکیج",
    "تعمیر لوازم خانگی",
    "تعمیر فر در کرج",
    "تعمیر اجاق گاز در کرج",
    "تعمیر لباسشویی در کرج",
    "تعمیر ظرفشویی در کرج",
    "تعمیر مایکروویو در کرج",
    "تعمیر هود در کرج",
    "تعمیر آبگرمکن در کرج",
    "تعمیر پکیج در کرج",
    "تعمیر لوازم خانگی در کرج",
  ],

  authors: [
    {
      name: "کارن سرویس",
    },
  ],

  creator: "کارن سرویس",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://karenservice.ir",
    siteName: "کارن سرویس",
    title: "تعمیر فر و اجاق گاز در کرج | کارن سرویس",
    description:
      "تعمیر تخصصی فر، اجاق گاز، لباسشویی، ظرفشویی، مایکروویو و سایر لوازم خانگی  در کرج و حومه البرز",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "تعمیرات تخصصی لوازم خانگی",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "تعمیرات تخصصی لوازم خانگی",
    description:
      "تعمیر فر، اجاق گاز، لباسشویی، ظرفشویی و سایر لوازم خانگی.",
    images: ["/og-image.jpg"],
  },

};

