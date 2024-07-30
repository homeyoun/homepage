import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "전국꽃배달 귀목플라워",
  description: "전국꽃배달 귀목플라워",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT/fonts/variable/woff2/SUIT-Variable.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
