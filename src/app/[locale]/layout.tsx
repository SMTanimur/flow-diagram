
import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { createTranslator, NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getLocales(locale: string) {
  try {
    return (await import(`@/locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getLocales(locale);

  const t = createTranslator({ locale, messages });

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),    
    title: t("RootLayout.title"),
    description: t("RootLayout.description"),
    openGraph: {
      images: [
        {
          url: "/images/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: t("RootLayout.title"),
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image",
      image: "/images/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: t("RootLayout.title"),
    },    
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {

  const messages = await getLocales(locale);
  return (
    <html lang={locale}>
      
      <body className={inter.className}>
      <NextIntlClientProvider locale={locale} messages={messages}>
   
        {children}
      <Toaster  richColors />
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
