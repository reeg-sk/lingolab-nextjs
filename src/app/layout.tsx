import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/base/Header";
import Footer from "@/components/base/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lingolab.sk'),
  title: "Jazyková škola – LingoLab",
  description:
    "Objavte radosť z učenia jazykov s našimi dynamickými kurzami. Skúsení lektori a individuálny prístup vás posunú k plynulosti rýchlo a efektívne.",
  keywords: [
    "jazyková škola",
    "Košice",
    "kurzy angličtiny",
    "kurzy nemčiny",
    "jazykové kurzy",
    "výučba jazykov",
    "lektori",
    "kurzy pre deti",
    "individuálne hodiny",
  ],
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://lingolab.sk",
    title: "Jazyková škola – LingoLab",
    description:
      "Objavte radosť z učenia cudzích jazykov s našimi dynamickými kurzami.",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "Logo LingoLab",
      },
    ],
  },
  icons: "/logo.svg",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
