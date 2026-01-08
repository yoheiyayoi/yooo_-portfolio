import type { Metadata } from "next";

import localFont from "next/font/local"

import "../index.css";
import Header from "@/components/header";
import Providers from "@/components/providers";
import Navbar from "@/components/navbar";
import FooterSection from "@/components/footer";

const lineSeed = localFont({
  src: [
    {
      path: '../fonts/LINESeedSansTH_W_Th.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/LINESeedSansTH_W_Rg.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/LINESeedSansTH_W_Bd.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/LINESeedSansTH_W_XBd.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/LINESeedSansTH_W_He.woff2',
      weight: '900',
      style: 'normal',
    },
  ]
})

export const metadata: Metadata = {
  title: "yooo_",
  description: "yooo_'s portfolio website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`${lineSeed.className} antialiased`}>
        <Providers>
          <div
            className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]"
          />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="grow px-4 container mx-auto">
              {children}
            </main>
            <FooterSection />
          </div>
        </Providers>
      </body>
    </html>
  );
}
