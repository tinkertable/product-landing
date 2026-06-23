import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const notoSans = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.product} | ${site.hook}`,
  description: `${site.subhook} ${site.discountLabel} · ${site.guarantee}.`,
  openGraph: {
    title: `${site.product} | ${site.hook}`,
    description: `${site.subhook}`,
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-night text-snow">
        {children}
      </body>
    </html>
  );
}
