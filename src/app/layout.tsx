import type { Metadata } from "next";
import { Roboto_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/component/lenis";
import RefreshLoading from "@/component/RefreshLoading";
import StartFronTop from "@/component/StartFronTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "63rd Studio",
  description:
    "We're a UX design studio that builds and redesigns exceptional and audits your complete CX .....",
  openGraph: {
    title: "63rdstudio",
    description:
      "We're a UX design studio that builds and redesigns exceptional and audits your complete CX .....",
    url: "https://63rdstudio.com",
    siteName: "63rdstudio",
    images: [
      {
        url: "/Preview.png",
        alt: "63rdstudio",
      },
    ],
    locale: "en_ENG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StartFronTop />
      <ReactLenis root>
        <body
          className={`${roboto_mono.variable} ${inter.variable} antialiased`}
        >
          <RefreshLoading>{children}</RefreshLoading>
        </body>
      </ReactLenis>
    </html>
  );
}
