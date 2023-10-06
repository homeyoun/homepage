import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import MainMenu from "./components/MainMenu";

const SuifFont = localFont({ src: "./font/SUIT-Variable.ttf" });

export const metadata: Metadata = {
  title: "전국꽃배달 귀목플라워",
  description: "전국꽃배달 입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={SuifFont.className}>
        <MainMenu />
        {children}
      </body>
    </html>
  );
}
