import type { Metadata } from "next";
import { Urbanist , Outfit  } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist", 
});

const outfit = Outfit({
  variable: "--font-outfit", 
});

 

export const metadata: Metadata = {
  title: "Easy Pay",
  description: "Pay fast and smarter from anywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${outfit.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
