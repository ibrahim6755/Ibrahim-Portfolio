import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ibrahim Ghani - Portfolio",
  description:
    "Showcasing the work, skills, and expertise of Ibrahim Ghani—A passionate developer crafting innovative and high-performance digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
