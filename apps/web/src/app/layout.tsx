import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chronos",
  description: "Chronos is a simple calendar app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="h-full bg-gradient-to-bl from-[#F6F4F0] to-[#DFD6CF]"
    >
      <body className={`${poppins} antialiased`}>{children}</body>
    </html>
  );
}
